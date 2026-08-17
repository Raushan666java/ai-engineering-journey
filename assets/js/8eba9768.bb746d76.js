"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[3267],{

/***/ 19804
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_oop_cpp_15_concurrency_md_8eb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-oop-cpp-15-concurrency-md-8eb.json
const site_docs_courses_oop_cpp_15_concurrency_md_8eb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/oop-cpp/15-concurrency","title":"Chapter 15: Concurrency","description":"Previous 16-design-patterns","source":"@site/docs/courses/oop-cpp/15-concurrency.md","sourceDirName":"courses/oop-cpp","slug":"/oop-cpp/15-concurrency","permalink":"/ai-engineering-journey/oop-cpp/15-concurrency","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"id":"15-concurrency","slug":"/oop-cpp/15-concurrency","title":"Chapter 15: Concurrency","sidebar_label":"Chapter 15: Concurrency","sidebar_position":15},"sidebar":"course-oop-cpp","previous":{"title":"Chapter 14: Lambdas (Deep Dive)","permalink":"/ai-engineering-journey/oop-cpp/14-lambdas"},"next":{"title":"Chapter 16: Design Patterns → The Gang of Four","permalink":"/ai-engineering-journey/oop-cpp/16-design-patterns"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/oop-cpp/15-concurrency.md


const frontMatter = {
	id: '15-concurrency',
	slug: '/oop-cpp/15-concurrency',
	title: 'Chapter 15: Concurrency',
	sidebar_label: 'Chapter 15: Concurrency',
	sidebar_position: 15
};
const contentTitle = 'Chapter 15: Concurrency';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
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
  "value": "15.1 Introduction to Concurrency",
  "id": "151-introduction-to-concurrency",
  "level": 2
}, {
  "value": "What is Concurrency?",
  "id": "what-is-concurrency",
  "level": 3
}, {
  "value": "What is Parallelism?",
  "id": "what-is-parallelism",
  "level": 3
}, {
  "value": "Concurrency vs Parallelism → Detailed Comparison",
  "id": "concurrency-vs-parallelism--detailed-comparison",
  "level": 3
}, {
  "value": "Why C++ Concurrency Matters",
  "id": "why-c-concurrency-matters",
  "level": 3
}, {
  "value": "The Two Fundamental Problems",
  "id": "the-two-fundamental-problems",
  "level": 3
}, {
  "value": "15.2 std::thread → Deep Dive",
  "id": "152-stdthread--deep-dive",
  "level": 2
}, {
  "value": "15.2.1 Creating Threads",
  "id": "1521-creating-threads",
  "level": 3
}, {
  "value": "15.2.2 join() vs detach() → Thread Lifecycle",
  "id": "1522-join-vs-detach--thread-lifecycle",
  "level": 3
}, {
  "value": "15.2.3 RAII Wrapper for std::thread",
  "id": "1523-raii-wrapper-for-stdthread",
  "level": 3
}, {
  "value": "15.2.4 std::this_thread Utilities",
  "id": "1524-stdthis_thread-utilities",
  "level": 3
}, {
  "value": "15.2.5 Edge Cases with std::thread",
  "id": "1525-edge-cases-with-stdthread",
  "level": 3
}, {
  "value": "15.2.6 Dry Run → Interleaved Thread Execution",
  "id": "1526-dry-run--interleaved-thread-execution",
  "level": 3
}, {
  "value": "15.2.7 Complexity Analysis",
  "id": "1527-complexity-analysis",
  "level": 3
}, {
  "value": "15.3 Mutex Family → Complete Reference",
  "id": "153-mutex-family--complete-reference",
  "level": 2
}, {
  "value": "15.3.1 std::mutex → The Foundation",
  "id": "1531-stdmutex--the-foundation",
  "level": 3
}, {
  "value": "15.3.2 std::lock_guard → Basic RAII Lock",
  "id": "1532-stdlock_guard--basic-raii-lock",
  "level": 3
}, {
  "value": "15.3.3 std::unique_lock → Flexible RAII Lock",
  "id": "1533-stdunique_lock--flexible-raii-lock",
  "level": 3
}, {
  "value": "15.3.4 std::scoped_lock (C++17) → Deadlock-Free Multi-Lock",
  "id": "1534-stdscoped_lock-c17--deadlock-free-multi-lock",
  "level": 3
}, {
  "value": "15.3.5 std::timed_mutex → Lock with Timeout",
  "id": "1535-stdtimed_mutex--lock-with-timeout",
  "level": 3
}, {
  "value": "15.3.6 std::recursive_mutex → Reentrant Locking",
  "id": "1536-stdrecursive_mutex--reentrant-locking",
  "level": 3
}, {
  "value": "15.3.7 Mutex Types → Complete Comparison",
  "id": "1537-mutex-types--complete-comparison",
  "level": 3
}, {
  "value": "15.4 Deadlock Prevention → Systematic Approach",
  "id": "154-deadlock-prevention--systematic-approach",
  "level": 2
}, {
  "value": "15.4.1 What is Deadlock?",
  "id": "1541-what-is-deadlock",
  "level": 3
}, {
  "value": "15.4.2 Deadlock Example",
  "id": "1542-deadlock-example",
  "level": 3
}, {
  "value": "15.4.3 Strategy 1: Consistent Lock Ordering",
  "id": "1543-strategy-1-consistent-lock-ordering",
  "level": 3
}, {
  "value": "15.4.4 Strategy 2: std::lock → Atomic Multi-Lock",
  "id": "1544-strategy-2-stdlock--atomic-multi-lock",
  "level": 3
}, {
  "value": "15.4.5 Strategy 3: std::scoped_lock (C++17) → The Cleanest Way",
  "id": "1545-strategy-3-stdscoped_lock-c17--the-cleanest-way",
  "level": 3
}, {
  "value": "15.4.6 Strategy 4: Lock Hierarchies",
  "id": "1546-strategy-4-lock-hierarchies",
  "level": 3
}, {
  "value": "15.4.7 Deadlock Prevention → Quick Reference",
  "id": "1547-deadlock-prevention--quick-reference",
  "level": 3
}, {
  "value": "15.5 std::condition_variable → Thread Coordination",
  "id": "155-stdcondition_variable--thread-coordination",
  "level": 2
}, {
  "value": "15.5.1 The Problem",
  "id": "1551-the-problem",
  "level": 3
}, {
  "value": "15.5.2 Core Concepts",
  "id": "1552-core-concepts",
  "level": 3
}, {
  "value": "15.5.3 Dry Run → condition_variable Wait Sequence",
  "id": "1553-dry-run--condition_variable-wait-sequence",
  "level": 3
}, {
  "value": "15.5.4 notify_one vs notify_all",
  "id": "1554-notify_one-vs-notify_all",
  "level": 3
}, {
  "value": "15.5.5 Spurious Wakeups",
  "id": "1555-spurious-wakeups",
  "level": 3
}, {
  "value": "15.5.6 Edge Cases",
  "id": "1556-edge-cases",
  "level": 3
}, {
  "value": "15.6 std::async, std::future, std::promise, std::packaged_task",
  "id": "156-stdasync-stdfuture-stdpromise-stdpackaged_task",
  "level": 2
}, {
  "value": "15.6.1 std::async → The Easiest Async Task",
  "id": "1561-stdasync--the-easiest-async-task",
  "level": 3
}, {
  "value": "15.6.2 std::future → Getting the Result",
  "id": "1562-stdfuture--getting-the-result",
  "level": 3
}, {
  "value": "15.6.3 std::shared_future → Multiple Waiters",
  "id": "1563-stdshared_future--multiple-waiters",
  "level": 3
}, {
  "value": "15.6.4 std::promise → Manual Value Channel",
  "id": "1564-stdpromise--manual-value-channel",
  "level": 3
}, {
  "value": "15.6.5 std::packaged_task → Wrap Callable as Future",
  "id": "1565-stdpackaged_task--wrap-callable-as-future",
  "level": 3
}, {
  "value": "15.6.6 async vs thread → Detailed Comparison",
  "id": "1566-async-vs-thread--detailed-comparison",
  "level": 3
}, {
  "value": "15.6.7 Complexity Analysis",
  "id": "1567-complexity-analysis",
  "level": 3
}, {
  "value": "15.7 std::atomic → Lock-Free Operations",
  "id": "157-stdatomic--lock-free-operations",
  "level": 2
}, {
  "value": "15.7.1 What is an Atomic Operation?",
  "id": "1571-what-is-an-atomic-operation",
  "level": 3
}, {
  "value": "15.7.2 Basic Usage",
  "id": "1572-basic-usage",
  "level": 3
}, {
  "value": "15.7.3 Atomic vs Mutex → Performance Comparison",
  "id": "1573-atomic-vs-mutex--performance-comparison",
  "level": 3
}, {
  "value": "15.7.4 Atomic Flag → Minimal Synchronization",
  "id": "1574-atomic-flag--minimal-synchronization",
  "level": 3
}, {
  "value": "15.8 Memory Ordering → The Heart of the C++ Memory Model",
  "id": "158-memory-ordering--the-heart-of-the-c-memory-model",
  "level": 2
}, {
  "value": "15.8.1 What is Memory Ordering?",
  "id": "1581-what-is-memory-ordering",
  "level": 3
}, {
  "value": "15.8.2 The Six Memory Orders",
  "id": "1582-the-six-memory-orders",
  "level": 3
}, {
  "value": "15.8.3 Acquire-Release Semantics (The Key Concept)",
  "id": "1583-acquire-release-semantics-the-key-concept",
  "level": 3
}, {
  "value": "15.8.4 Sequentially Consistent Ordering",
  "id": "1584-sequentially-consistent-ordering",
  "level": 3
}, {
  "value": "15.8.5 Relaxed Ordering → When It&#39;s Safe",
  "id": "1585-relaxed-ordering--when-its-safe",
  "level": 3
}, {
  "value": "15.8.6 Memory Ordering → Summary Table",
  "id": "1586-memory-ordering--summary-table",
  "level": 3
}, {
  "value": "15.9 Data Races and Race Conditions",
  "id": "159-data-races-and-race-conditions",
  "level": 2
}, {
  "value": "15.9.1 Data Race → The Definition",
  "id": "1591-data-race--the-definition",
  "level": 3
}, {
  "value": "15.9.2 Race Condition → The Broader Concept",
  "id": "1592-race-condition--the-broader-concept",
  "level": 3
}, {
  "value": "15.9.3 Race Condition Types",
  "id": "1593-race-condition-types",
  "level": 3
}, {
  "value": "15.9.4 Detecting Data Races",
  "id": "1594-detecting-data-races",
  "level": 3
}, {
  "value": "15.9.5 Critical Section Concept",
  "id": "1595-critical-section-concept",
  "level": 3
}, {
  "value": "15.10 Interview Corner → Concurrency",
  "id": "1510-interview-corner--concurrency",
  "level": 2
}, {
  "value": "Q1: What is the difference between a data race and a race condition?",
  "id": "q1-what-is-the-difference-between-a-data-race-and-a-race-condition",
  "level": 3
}, {
  "value": "Q2: When would you use std::atomic instead of std::mutex, and vice versa?",
  "id": "q2-when-would-you-use-stdatomic-instead-of-stdmutex-and-vice-versa",
  "level": 3
}, {
  "value": "Q3: Explain the difference between std::lock_guard, std::unique_lock, and std::scoped_lock.",
  "id": "q3-explain-the-difference-between-stdlock_guard-stdunique_lock-and-stdscoped_lock",
  "level": 3
}, {
  "value": "Q4: What happens when a std::thread is destroyed while still joinable?",
  "id": "q4-what-happens-when-a-stdthread-is-destroyed-while-still-joinable",
  "level": 3
}, {
  "value": "Q5: Explain the ABA problem in the context of compare-and-swap.",
  "id": "q5-explain-the-aba-problem-in-the-context-of-compare-and-swap",
  "level": 3
}, {
  "value": "Q6: How does std::condition_variable::wait() work internally?",
  "id": "q6-how-does-stdcondition_variablewait-work-internally",
  "level": 3
}, {
  "value": "Q7: What is a spinlock and when would you use it?",
  "id": "q7-what-is-a-spinlock-and-when-would-you-use-it",
  "level": 3
}, {
  "value": "Q8: How do you prevent deadlocks in C++?",
  "id": "q8-how-do-you-prevent-deadlocks-in-c",
  "level": 3
}, {
  "value": "15.11 Real Systems → Where Concurrency Applies",
  "id": "1511-real-systems--where-concurrency-applies",
  "level": 2
}, {
  "value": "Real-World Case Study: Lock-Free Order Book",
  "id": "real-world-case-study-lock-free-order-book",
  "level": 3
}, {
  "value": "Design Pattern: Thread Pool",
  "id": "design-pattern-thread-pool",
  "level": 3
}, {
  "value": "15.12 Quick Reference → When to Use What",
  "id": "1512-quick-reference--when-to-use-what",
  "level": 2
}, {
  "value": "15.13 Common Pitfalls Checklist",
  "id": "1513-common-pitfalls-checklist",
  "level": 2
}, {
  "value": "15.14 Summary",
  "id": "1514-summary",
  "level": 2
}, {
  "value": "15.15 Exercises",
  "id": "1515-exercises",
  "level": 2
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Coding Problems",
  "id": "coding-problems",
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
    hr: "hr",
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
        id: "chapter-15-concurrency",
        children: "Chapter 15: Concurrency"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/14-lambdas",
          children: "14-lambdas"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/16-design-patterns",
          children: "16-design-patterns"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After studying this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish concurrency from parallelism with real-world analogies"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create and manage threads with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::thread"
        }), " → join, detach, RAII wrapping"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Protect shared data with every mutex variant: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::mutex"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lock_guard"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unique_lock"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scoped_lock"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "timed_mutex"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "recursive_mutex"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Coordinate threads using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::condition_variable"
        }), " and avoid spurious wakeups"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Launch asynchronous tasks with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::async"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::future"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::promise"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::packaged_task"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::atomic"
        }), " for lock-free operations and understand C++ memory ordering"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Diagnose and prevent data races, race conditions, and deadlocks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Answer interview questions on concurrency, atomics, and lock-free programming"
      }), "\n"]
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrency vs Parallelism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency is about structure; parallelism is about execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency enables parallelism on multi-core"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "std::thread"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Join or detach every thread before destruction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store thread objects in RAII wrappers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mutex Family"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 mutex types serve different locking needs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer scoped_lock (C++17) for multiple locks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "condition_variable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait for condition; spurious wakeups are real"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always pass a predicate to wait()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "async/future/promise"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest-level primitive: launch policy + future result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer async over manual threads for tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Atomics & Memory Ordering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock-free ops on fundamental types; 6 memory orders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use seq_cst unless profiling says otherwise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deadlock Prevention"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock ordering, std::lock, scoped_lock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never hold one lock while waiting for another"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[\"1. Concurrency Landscape\"] --> B[\"2. std::thread\"]\n    B --> C[\"3. Mutex Family\"]\n    C --> D[\"4. Deadlock Prevention\"]\n    C --> E[\"5. condition_variable\"]\n    B --> F[\"6. async / future / promise\"]\n    C --> G[\"7. Atomics & Memory Ordering\"]\n    G --> H[\"8. Data Races & Race Conditions\"]\n    D --> H\n    H --> I[\"9. Interview Corner\"]\n    I --> J[\"10. Real Systems & Exercises\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "151-introduction-to-concurrency",
      children: "15.1 Introduction to Concurrency"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-concurrency",
      children: "What is Concurrency?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Concurrency"
      }), " is the ability of a program to make progress on more than one task at the same time. The tasks may not execute simultaneously → they just need to appear to. Concurrency is a ", (0,jsx_runtime.jsx)(_components.em, {
        children: "design property"
      }), " of the program."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " A single chef in a kitchen chopping vegetables, stirring a pot, and answering the phone. The chef switches between tasks (interleaving), making progress on all of them. Only one task runs at any instant, but all move forward."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-parallelism",
      children: "What is Parallelism?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Parallelism"
      }), " is the ability of a program to execute more than one task ", (0,jsx_runtime.jsx)(_components.em, {
        children: "simultaneously"
      }), ". This requires multiple cores or processors."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy:"
        }), " Three chefs in the same kitchen → one chops, one stirs, one answers the phone. All three tasks run at the same time on different hardware resources."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concurrency-vs-parallelism--detailed-comparison",
      children: "Concurrency vs Parallelism → Detailed Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Concurrency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Parallelism"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple tasks making progress via interleaving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple tasks executing at the exact same instant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Focus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program structure and design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execution efficiency and throughput"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hardware needed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single core suffices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple cores required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Execution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical simultaneity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical simultaneity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Goal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Responsiveness, non-blocking UI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput, speedup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A web server handling 10,000 connections on 4 threads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A matrix multiply split across 8 GPU cores"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C++ primitive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "std::thread (time-sliced)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "std::async(launch::async) on multi-core"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OS scheduling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time-sliced context switching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simultaneous execution on separate cores"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key challenge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct synchronization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load balancing, scaling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Can exist without the other?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes → single-core preemptive multitasking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes → SIMD vector instructions on one thread"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Core Insight:"
        }), " Concurrency ", (0,jsx_runtime.jsx)(_components.em, {
          children: "enables"
        }), " parallelism. A program structured concurrently (split into independent tasks) can be parallelized when more cores become available. A program not designed for concurrency cannot exploit parallelism."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-c-concurrency-matters",
      children: "Why C++ Concurrency Matters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before C++11, threading was platform-specific (pthreads on POSIX, Windows Threads on Win32). C++11 introduced a standardized memory model and threading library that guarantees portable, well-defined behavior across all architectures."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Era"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Threading Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Portability"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-C++11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pthreads, Win32 API, Boost.Thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None → vendor lock-in"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C++11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "std::thread, std::mutex, std::atomic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full → same API everywhere"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C++14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared locking, reader-writer mutex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward compatible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C++17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "std::scoped_lock, std::shared_mutex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple lock RAII"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C++20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "std::jthread, std::stop_source, std::atomic_ref"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic joining, cooperative cancellation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-two-fundamental-problems",
      children: "The Two Fundamental Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Race:"
        }), " Two or more threads access the same memory location concurrently, at least one is a write, and there is no synchronization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deadlock:"
        }), " Two or more threads are each waiting for a resource the other holds, so none can proceed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every concurrency technique in this chapter exists to solve these two problems."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "152-stdthread--deep-dive",
      children: "15.2 std::thread → Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1521-creating-threads",
      children: "15.2.1 Creating Threads"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::thread"
      }), " represents a single thread of execution. You construct it with a callable and its arguments."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A restaurant manager (main thread) hires a new chef (std::thread). The chef works independently. The manager can either wait for the chef to finish (join) or let the chef work unsupervised (detach)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps to Create & Run a Thread:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Include ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<thread>"
        }), " header"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define a callable (function, functor, lambda, or member function)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Construct ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::thread"
        }), " passing the callable + arguments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The thread starts executing ", (0,jsx_runtime.jsx)(_components.em, {
          children: "immediately"
        }), " upon construction"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "join()"
        }), " to block until completion, or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "detach()"
        }), " to release ownership"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A thread that is neither joined nor detached causes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::terminate()"
        }), " at destruction"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION worker(id, message):\n    PRINT \"Thread \" + id + \" says: \" + message\nEND FUNCTION\n\nMAIN:\n    t1 = THREAD(worker, 1, \"Hello\")\n    t2 = THREAD([id = 2] { PRINT \"Lambda from thread \" + id })\n    \n    t1.join()    // wait for t1\n    t2.join()    // wait for t2\n    PRINT \"All threads done\"\nEND MAIN\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → Four Ways to Create a Thread:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <thread>\n#include <iostream>\n#include <vector>\n\n// 1. Function pointer\nvoid worker(int id, const std::string& msg) {\n    std::cout << \"Thread \" << id << \": \" << msg\n              << \" [ID=\" << std::this_thread::get_id() << \"]\\n\";\n}\n\n// 2. Functor (function object)\nclass WorkerFunctor {\n    int id_;\npublic:\n    explicit WorkerFunctor(int id) : id_(id) {}\n    void operator()(int repeat) const {\n        for (int i = 0; i < repeat; ++i)\n            std::cout << \"Functor \" << id_ << \" iteration \" << i << '\\n';\n    }\n};\n\nint main() {\n    // Method 1: Function pointer\n    std::thread t1(worker, 1, \"Function pointer\");\n\n    // Method 2: Functor\n    WorkerFunctor wf(2);\n    std::thread t2(wf, 3);\n\n    // Method 3: Lambda\n    std::thread t3([](int x) {\n        std::cout << \"Lambda: \" << x << \" squared = \" << (x * x) << '\\n';\n    }, 7);\n\n    // Method 4: Member function\n    class Greeter {\n    public:\n        void greet(const std::string& name) const {\n            std::cout << \"Hello, \" << name << \"! from thread\\n\";\n        }\n    };\n    Greeter g;\n    std::thread t4(&Greeter::greet, &g, \"Alice\");\n\n    t1.join(); t2.join(); t3.join(); t4.join();\n    std::cout << \"Main: all threads joined\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Thread 1: Function pointer [ID=140703526035520]\nFunctor 2 iteration 0\nFunctor 2 iteration 1\nFunctor 2 iteration 2\nLambda: 7 squared = 49\nHello, Alice! from thread\nMain: all threads joined\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Output interleaving may differ across runs due to OS scheduling."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1522-join-vs-detach--thread-lifecycle",
      children: "15.2.2 join() vs detach() → Thread Lifecycle"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "join()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocks caller until thread finishes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You need the result before proceeding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "detach()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Releases thread handle; thread runs independently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fire-and-forget background work"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "joinable()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns true if join/detach is valid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check before calling join/detach"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thread Lifecycle State Machine:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  Created (joinable=true)\n     / \\\n    /   \\\n  join() detach()\n    |       |\n  Blocked  Not-joinable\n    |       (runs independently)\n  Resumed\n    |\n  Not-joinable (thread done)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → join() vs detach():"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <thread>\n#include <iostream>\n#include <chrono>\n\nvoid background_work() {\n    std::this_thread::sleep_for(std::chrono::seconds(2));\n    std::cout << \"Background work done\\n\";\n}\n\nint main() {\n    // Example 1: join() - wait for completion\n    std::thread t1(background_work);\n    std::cout << \"Waiting for t1...\\n\";\n    t1.join();\n    std::cout << \"t1 joined\\n\";\n\n    // Example 2: detach() - let it run independently\n    std::thread t2(background_work);\n    t2.detach();\n    std::cout << \"t2 detached, main continues\\n\";\n\n    // t2 may still be running here; main may finish before t2\n    std::this_thread::sleep_for(std::chrono::seconds(1));\n    std::cout << \"Main ending (t2 may still run)\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Waiting for t1...\nBackground work done\nt1 joined\nt2 detached, main continues\nMain ending (t2 may still run)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1523-raii-wrapper-for-stdthread",
      children: "15.2.3 RAII Wrapper for std::thread"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Manually ensuring every thread is joined or detached is error-prone (especially with exceptions). An RAII wrapper automates this:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <thread>\n#include <iostream>\n#include <stdexcept>\n\nclass ThreadGuard {\n    std::thread t_;\npublic:\n    explicit ThreadGuard(std::thread t) : t_(std::move(t)) {\n        if (!t_.joinable())\n            throw std::logic_error(\"Non-joinable thread\");\n    }\n    ~ThreadGuard() {\n        if (t_.joinable())\n            t_.join();   // automatically join on destruction\n    }\n    // Non-copyable, non-movable\n    ThreadGuard(const ThreadGuard&) = delete;\n    ThreadGuard& operator=(const ThreadGuard&) = delete;\n};\n\nvoid risky_work() {\n    std::cout << \"Working...\\n\";\n    // Might throw\n}\n\nint main() {\n    try {\n        ThreadGuard tg(std::thread(risky_work));\n        // If risky_work throws, ThreadGuard destructor still joins\n        throw std::runtime_error(\"Something went wrong\");\n    } catch (const std::exception& e) {\n        std::cout << \"Caught: \" << e.what() << \" (thread was joined)\\n\";\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Working...\nCaught: Something went wrong (thread was joined)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "C++20:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::jthread"
        }), " (joining thread) does this automatically → its destructor calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "join()"
        }), ". It also supports cooperative cancellation via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::stop_token"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1524-stdthis_thread-utilities",
      children: "15.2.4 std::this_thread Utilities"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "get_id()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::thread::id"
            }), " of the calling thread"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sleep_for(duration)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocks for at least the specified duration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sleep_until(timepoint)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocks until the specified absolute time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "yield()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hints the scheduler to reschedule (useful in spin-loops)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → Getting Thread ID and Hardware Concurrency:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <thread>\n#include <iostream>\n\nvoid print_id() {\n    std::cout << \"Thread ID: \" << std::this_thread::get_id() << '\\n';\n}\n\nint main() {\n    std::thread t1(print_id);\n    std::thread t2(print_id);\n\n    std::cout << \"Main thread ID: \" << std::this_thread::get_id() << '\\n';\n    std::cout << \"Hardware concurrency: \" << std::thread::hardware_concurrency()\n              << \" cores\\n\";\n\n    t1.join();\n    t2.join();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1525-edge-cases-with-stdthread",
      children: "15.2.5 Edge Cases with std::thread"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior (crash)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "joinable()"
            }), " before join"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Destructor on joinable thread"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::terminate()"
            }), " called"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always join or detach before destruction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Detached thread accessing destroyed locals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data race, undefined behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pass arguments by value, use shared_ptr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Too many threads"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::system_error"
            }), " thrown"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Cap thread count by ", (0,jsx_runtime.jsx)(_components.code, {
              children: "hardware_concurrency()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exception in thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exception cannot propagate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catch inside thread, return via future/promise"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → Avoiding Double Join:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <thread>\n#include <iostream>\n\nint main() {\n    std::thread t([]{ std::cout << \"Working\\n\"; });\n\n    if (t.joinable()) t.join();   // safe\n    if (t.joinable()) t.join();   // safe → second call does nothing\n    // Without the check: t.join() on non-joinable thread = crash\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1526-dry-run--interleaved-thread-execution",
      children: "15.2.6 Dry Run → Interleaved Thread Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider two threads incrementing a shared counter without mutex protection:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Thread A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Thread B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "counter value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "read counter (0)"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "read counter (0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "increment to 1"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "increment to 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (should be 2!)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "write back 1"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "write back 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The lost update at T3 is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "data race"
      }), ". Both threads read 0 before either writes, so one increment is lost."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1527-complexity-analysis",
      children: "15.2.7 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Creating a thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) thread creation + OS scheduling overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 MB per thread (default stack size)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "join()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) blocking → thread must complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 (existing thread stack)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "detach()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) handle release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread continues until completion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context switch (per switch)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1–10 microseconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~cache flush, TLB invalidate"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rule of Thumb:"
        }), " Creating threads is expensive. For fine-grained tasks, use a thread pool or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::async"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "153-mutex-family--complete-reference",
      children: "15.3 Mutex Family → Complete Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1531-stdmutex--the-foundation",
      children: "15.3.1 std::mutex → The Foundation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::mutex"
      }), " provides ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "mutual exclusion"
      }), ": only one thread can hold the lock at a time."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A public restroom with one stall. A person locks the door, uses the facility, then unlocks. Others wait outside until it's free."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mutex mtx\nshared data = 0\n\nFUNCTION increment():\n    FOR i = 1 TO 100000:\n        mtx.lock()\n        data = data + 1\n        mtx.unlock()\n    END FOR\nEND FUNCTION\n\nMAIN:\n    t1 = THREAD(increment)\n    t2 = THREAD(increment)\n    t1.join()\n    t2.join()\n    PRINT data    // always 200000\nEND MAIN\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → Manual Lock/Unlock (NOT recommended):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <mutex>\n#include <thread>\n#include <iostream>\n\nstd::mutex mtx;\nint counter = 0;\n\nvoid increment() {\n    for (int i = 0; i < 100000; ++i) {\n        mtx.lock();\n        ++counter;          // protected access\n        mtx.unlock();\n    }\n}\n\nint main() {\n    std::thread t1(increment);\n    std::thread t2(increment);\n    t1.join();\n    t2.join();\n    std::cout << \"Counter: \" << counter << '\\n';  // 200000\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WARNING:"
        }), " Manual lock/unlock is exception-unsafe. If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "++counter"
        }), " throws, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unlock()"
        }), " never runs → deadlock. Always use RAII wrappers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1532-stdlock_guard--basic-raii-lock",
      children: "15.3.2 std::lock_guard → Basic RAII Lock"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::lock_guard"
      }), " locks the mutex on construction and unlocks on destruction. Simplest and most efficient RAII wrapper."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → lock_guard:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <mutex>\n#include <thread>\n#include <iostream>\n\nstd::mutex mtx;\nint safe_counter = 0;\n\nvoid safe_increment() {\n    for (int i = 0; i < 100000; ++i) {\n        std::lock_guard<std::mutex> lock(mtx);\n        // mtx.lock() called here\n        ++safe_counter;\n    }   // mtx.unlock() called here (even if ++ throws)\n}\n\nint main() {\n    std::thread t1(safe_increment);\n    std::thread t2(safe_increment);\n    t1.join();\n    t2.join();\n    std::cout << \"Safe counter: \" << safe_counter << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Safe counter: 200000"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Non-copyable, non-movable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Constructor: locks mutex (blocks if already locked)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Destructor: unlocks mutex"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No additional operations (no lock/unlock methods)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best for: simple scoped locking where you never need manual unlock"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1533-stdunique_lock--flexible-raii-lock",
      children: "15.3.3 std::unique_lock → Flexible RAII Lock"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::unique_lock"
      }), " provides everything ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lock_guard"
      }), " does, plus:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deferred locking (construct without locking)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Manual ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lock()"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unlock()"
        }), " on the same object"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can be moved (ownership transfer)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Required by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::condition_variable::wait()"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → unique_lock Features:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <mutex>\n#include <thread>\n#include <iostream>\n#include <chrono>\n\nstd::mutex mtx;\nint data = 0;\n\nvoid deferred_lock_example() {\n    // Construct without locking\n    std::unique_lock<std::mutex> lock(mtx, std::defer_lock);\n    // Do some work that doesn't need the lock\n    std::cout << \"Preparing...\\n\";\n    // Now lock\n    lock.lock();\n    ++data;\n    // Explicitly unlock early (releases before scope ends)\n    lock.unlock();\n    std::cout << \"Unlocked early, doing other work...\\n\";\n    // Re-lock if needed\n    lock.lock();\n    ++data;\n    // Auto-unlocks on destruction\n}\n\nvoid try_lock_example() {\n    std::unique_lock<std::mutex> lock(mtx, std::try_to_lock);\n    if (lock.owns_lock()) {\n        ++data;\n        std::cout << \"Got the lock\\n\";\n    } else {\n        std::cout << \"Could not get the lock\\n\";\n    }\n}\n\nint main() {\n    std::thread t1(deferred_lock_example);\n    std::thread t2(try_lock_example);\n    t1.join(); t2.join();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "unique_lock Deferral Defer Types:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Defer Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::defer_lock"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Do not lock; call ", (0,jsx_runtime.jsx)(_components.code, {
              children: "lock()"
            }), " manually later"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::try_to_lock"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
              children: "try_lock()"
            }), "; check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "owns_lock()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::adopt_lock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assume caller already holds the lock"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison of Lock Wrappers:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "lock_guard"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "unique_lock"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "scoped_lock (C++17)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAII lock/unlock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manual lock/unlock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Movable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Condition variable support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple mutex lock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (variadic)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deferred locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "try_lock support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal (same as mutex)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly larger (state flag)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1534-stdscoped_lock-c17--deadlock-free-multi-lock",
      children: "15.3.4 std::scoped_lock (C++17) → Deadlock-Free Multi-Lock"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::scoped_lock"
      }), " locks multiple mutexes at once using a deadlock-avoidance algorithm (like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::lock"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → scoped_lock:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <mutex>\n#include <thread>\n#include <iostream>\n\nstd::mutex mtx1, mtx2;\nint a = 0, b = 0;\n\nvoid write_both() {\n    // Locks mtx1 and mtx2 atomically → no deadlock even if\n    // another thread locks in opposite order\n    std::scoped_lock lock(mtx1, mtx2);\n    ++a;\n    ++b;\n}\n\nint main() {\n    std::thread t1(write_both);\n    std::thread t2(write_both);\n    t1.join(); t2.join();\n    std::cout << \"a=\" << a << \" b=\" << b << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1535-stdtimed_mutex--lock-with-timeout",
      children: "15.3.5 std::timed_mutex → Lock with Timeout"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::timed_mutex"
      }), " extends mutex with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "try_lock_for()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "try_lock_until()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A meeting room reservation → you wait for the room, but only for 10 seconds. If it's still occupied, you go to plan B."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → timed_mutex:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <mutex>\n#include <thread>\n#include <iostream>\n#include <chrono>\n\nstd::timed_mutex tmtx;\n\nvoid try_for_100ms() {\n    // Try to acquire lock within 100ms\n    if (tmtx.try_lock_for(std::chrono::milliseconds(100))) {\n        std::cout << \"Thread \" << std::this_thread::get_id()\n                  << \" acquired lock, working...\\n\";\n        std::this_thread::sleep_for(std::chrono::milliseconds(200));\n        tmtx.unlock();\n    } else {\n        std::cout << \"Thread \" << std::this_thread::get_id()\n                  << \" could not acquire lock within 100ms\\n\";\n    }\n}\n\nint main() {\n    std::thread t1(try_for_100ms);\n    std::thread t2(try_for_100ms);\n    t1.join(); t2.join();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Thread 140703526035520 acquired lock, working...\nThread 140703517642816 could not acquire lock within 100ms\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1536-stdrecursive_mutex--reentrant-locking",
      children: "15.3.6 std::recursive_mutex → Reentrant Locking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Allows the same thread to lock the mutex multiple times without deadlocking. A count is maintained; unlock must be called the same number of times."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A reentrant bathroom lock → if you're already inside, you can lock the inner latch again without waiting for yourself."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → recursive_mutex:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <mutex>\n#include <thread>\n#include <iostream>\n\nstd::recursive_mutex rmtx;\n\nvoid recursive_function(int depth) {\n    if (depth <= 0) return;\n    std::lock_guard<std::recursive_mutex> lock(rmtx);\n    std::cout << \"Depth \" << depth << \" locked\\n\";\n    recursive_function(depth - 1);\n    std::cout << \"Depth \" << depth << \" unlocked\\n\";\n}\n\nint main() {\n    std::thread t(recursive_function, 3);\n    t.join();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Depth 3 locked\nDepth 2 locked\nDepth 1 locked\nDepth 1 unlocked\nDepth 2 unlocked\nDepth 3 unlocked\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "When to use:"
        }), " When a function that acquires a lock may call another function that also needs the same lock (e.g., recursive tree traversal with thread-safe node access). ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "When NOT to use:"
        }), " As a default → prefer non-recursive mutexes to enforce simpler lock discipline."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1537-mutex-types--complete-comparison",
      children: "15.3.7 Mutex Types → Complete Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "mutex"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "timed_mutex"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "recursive_mutex"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "shared_mutex (C++17)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "shared_timed_mutex (C++14)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exclusive locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shared (read) locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
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
            children: "try_lock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "try_lock_for / try_lock_until"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reentrant (same thread)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
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
            children: "Overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly higher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (count tracking)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (reader tracking)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple mutual exclusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operations with timeouts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reader-writer scenarios"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reader-writer + timeout"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "154-deadlock-prevention--systematic-approach",
      children: "15.4 Deadlock Prevention → Systematic Approach"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1541-what-is-deadlock",
      children: "15.4.1 What is Deadlock?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deadlock"
      }), " occurs when two or more threads are each waiting for a resource the other holds, so neither can proceed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Two cars meet at a four-way intersection. Car A needs to go right, car B needs to go left. Each waits for the other to go first. Neither can move."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Four Coffman Conditions"
      }), " (all four must hold for deadlock):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mutual Exclusion:"
        }), " Resources cannot be shared"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hold and Wait:"
        }), " A thread holds at least one resource while waiting for another"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No Preemption:"
        }), " Resources cannot be forcibly taken away"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Circular Wait:"
        }), " A cycle of threads exists where each holds a resource the next needs"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Breaking any one condition prevents deadlock. In practice, we break ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "circular wait"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1542-deadlock-example",
      children: "15.4.2 Deadlock Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <mutex>\n#include <thread>\n#include <iostream>\n#include <chrono>\n\nstd::mutex fork_left, fork_right;\n\nvoid philosopher_left_handed(int id) {\n    // Locks left then right → can deadlock with right-handed\n    std::lock_guard<std::mutex> left(fork_left);\n    std::this_thread::sleep_for(std::chrono::milliseconds(100));\n    std::lock_guard<std::mutex> right(fork_right);\n    std::cout << \"Philosopher \" << id << \" eating\\n\";\n}\n\nvoid philosopher_right_handed(int id) {\n    // Locks right then left → opposite order!\n    std::lock_guard<std::mutex> right(fork_right);\n    std::this_thread::sleep_for(std::chrono::milliseconds(100));\n    std::lock_guard<std::mutex> left(fork_left);\n    std::cout << \"Philosopher \" << id << \" eating\\n\";\n}\n\n// This WILL deadlock → threads acquire in opposite order\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → Deadlock Scenario:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Thread A (left-handed)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Thread B (right-handed)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Locks fork_left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Locks fork_right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sleeps (100ms)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sleeps (100ms)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tries to lock fork_right → BLOCKED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tries to lock fork_left → BLOCKED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DEADLOCK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DEADLOCK"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1543-strategy-1-consistent-lock-ordering",
      children: "15.4.3 Strategy 1: Consistent Lock Ordering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Always acquire locks in the same global order across all threads."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → Fixed Ordering:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::mutex mtx_a, mtx_b;  // always lock A then B\n\nvoid safe_thread_a() {\n    std::lock_guard<std::mutex> lock1(mtx_a);\n    std::lock_guard<std::mutex> lock2(mtx_b);\n    // work\n}\n\nvoid safe_thread_b() {\n    std::lock_guard<std::mutex> lock1(mtx_a);  // same order!\n    std::lock_guard<std::mutex> lock2(mtx_b);\n    // work\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Problem:"
        }), " Requires global discipline. Easy to screw up in large codebases."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1544-strategy-2-stdlock--atomic-multi-lock",
      children: "15.4.4 Strategy 2: std::lock → Atomic Multi-Lock"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::lock(m1, m2, ...)"
      }), " locks all mutexes atomically using a deadlock-avoidance algorithm (try_lock in various orders, backing off on contention)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → std::lock with adopt_lock:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <mutex>\n#include <thread>\n#include <iostream>\n\nstd::mutex m1, m2;\n\nvoid safe_op() {\n    // Lock both mutexes atomically (deadlock-free)\n    std::lock(m1, m2);\n\n    // Adopt the already-locked mutexes into RAII wrappers\n    std::lock_guard<std::mutex> lk1(m1, std::adopt_lock);\n    std::lock_guard<std::mutex> lk2(m2, std::adopt_lock);\n\n    // Perform work holding both locks\n    std::cout << \"Both locks held safely\\n\";\n}\n\nint main() {\n    std::thread t1(safe_op);\n    std::thread t2(safe_op);\n    t1.join(); t2.join();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1545-strategy-3-stdscoped_lock-c17--the-cleanest-way",
      children: "15.4.5 Strategy 3: std::scoped_lock (C++17) → The Cleanest Way"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::scoped_lock"
      }), " wraps ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::lock"
      }), " internally. No need for adopt_lock:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <mutex>\n#include <thread>\n#include <iostream>\n\nstd::mutex m1, m2, m3;\n\nvoid super_safe() {\n    // Locks all three atomically; unlocks on scope exit\n    std::scoped_lock lock(m1, m2, m3);\n    std::cout << \"All three locks held\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prefer scoped_lock for multiple locks."
        }), " It's the simplest, most correct solution."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1546-strategy-4-lock-hierarchies",
      children: "15.4.6 Strategy 4: Lock Hierarchies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assign levels to mutexes and enforce that a thread can only lock mutexes with strictly decreasing levels."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mutex"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Protected Data"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mtx_global_config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System configuration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mtx_session_list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active user sessions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mtx_user_profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User profile data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A thread holding level-20 can only lock level-30 or higher numbers (never level-10)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1547-deadlock-prevention--quick-reference",
      children: "15.4.7 Deadlock Prevention → Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C++ Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always lock A before B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual discipline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to break"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Atomic multi-lock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock all at once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::lock(m1, m2, ...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scoped multi-lock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAII variadic lock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::scoped_lock(m1, m2, ...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easiest (C++17)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lock hierarchy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level-numbered mutexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom assertion wrapper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardest but most scalable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid nested locks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restructure code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No tool needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires design effort"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "155-stdcondition_variable--thread-coordination",
      children: "15.5 std::condition_variable → Thread Coordination"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1551-the-problem",
      children: "15.5.1 The Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "One thread produces data; another consumes it. The consumer must wait when the queue is empty, and the producer must notify when new data arrives."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A coffee shop with one barista and one customer. The barista (producer) makes coffee and yells \"Order up!\" (notification). The customer (consumer) waits at the counter until called. If the customer checks every 2 seconds without being called, that's ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "busy-waiting"
      }), " (wasteful). The condition variable lets the customer sleep until notified."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1552-core-concepts",
      children: "15.5.2 Core Concepts"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "wait(lock, predicate)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atomically unlock, sleep until notified, re-lock, check predicate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "notify_one()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wake one waiting thread (if any)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "notify_all()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wake all waiting threads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spurious wakeup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread may wake without notification → always use predicate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "unique_lock"
            }), " requirement"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "wait()"
            }), " must lock/unlock repeatedly; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "lock_guard"
            }), " cannot"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mutex mtx\ncondition_variable cv\nqueue q\n\nPRODUCER:\n    FOR i = 1 TO 10:\n        LOCK mtx\n        q.push(i)\n        UNLOCK mtx\n        cv.notify_one()\n        sleep(50ms)\n    END FOR\n\nCONSUMER:\n    WHILE true:\n        UNIQUE_LOCK lock(mtx)\n        cv.wait(lock, [&]{ return !q.empty(); })\n        // Auto-unlocked while sleeping, re-locked on wake\n        val = q.front()\n        q.pop()\n        lock.unlock()\n        process(val)\n        IF val == 9: BREAK\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → Producer-Consumer with condition_variable:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <condition_variable>\n#include <mutex>\n#include <queue>\n#include <thread>\n#include <iostream>\n#include <chrono>\n\nstd::queue<int> queue;\nstd::mutex mtx;\nstd::condition_variable cv;\nbool done = false;\n\nvoid producer() {\n    for (int i = 0; i < 10; ++i) {\n        {\n            std::lock_guard<std::mutex> lock(mtx);\n            queue.push(i);\n            std::cout << \"Produced: \" << i << '\\n';\n        }   // mutex unlocked here\n        cv.notify_one();                          // wake consumer\n        std::this_thread::sleep_for(std::chrono::milliseconds(50));\n    }\n    {\n        std::lock_guard<std::mutex> lock(mtx);\n        done = true;\n    }\n    cv.notify_one();\n}\n\nvoid consumer() {\n    while (true) {\n        std::unique_lock<std::mutex> lock(mtx);\n        // wait() atomically: unlock mutex, sleep, re-acquire mutex\n        cv.wait(lock, [] { return !queue.empty() || done; });\n\n        while (!queue.empty()) {\n            int val = queue.front();\n            queue.pop();\n            lock.unlock();   // allow producer to push while we process\n            std::cout << \"Consumed: \" << val << '\\n';\n            lock.lock();\n        }\n\n        if (done && queue.empty()) break;\n    }\n}\n\nint main() {\n    std::thread prod(producer);\n    std::thread cons(consumer);\n    prod.join();\n    cons.join();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Produced: 0\nConsumed: 0\nProduced: 1\nConsumed: 1\n...\nProduced: 9\nConsumed: 9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1553-dry-run--condition_variable-wait-sequence",
      children: "15.5.3 Dry Run → condition_variable Wait Sequence"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Producer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Consumer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Queue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mutex State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push 0, notify_one"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Locked by producer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlock mutex"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlocked"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sleep 50ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait: check predicate (!empty=true)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Locked by consumer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop 0, unlock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlocked"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process 0"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push 1, notify_one"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Locked by producer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlock, sleep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait: check (!empty=true)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Locked by consumer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1554-notify_one-vs-notify_all",
      children: "15.5.4 notify_one vs notify_all"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "notify_one"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "notify_all"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wake count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exactly one waiting thread (if any)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All waiting threads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Default choice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (efficient, less contention)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When all waiters need to check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single consumer, work queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple consumers, broadcast event"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread can starve if that waiter misses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thundering herd → overhead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → notify_all for Broadcast:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <condition_variable>\n#include <mutex>\n#include <thread>\n#include <iostream>\n\nstd::mutex mtx;\nstd::condition_variable cv;\nbool ready = false;\n\nvoid worker(int id) {\n    std::unique_lock<std::mutex> lock(mtx);\n    cv.wait(lock, [] { return ready; });\n    std::cout << \"Worker \" << id << \" starting\\n\";\n}\n\nint main() {\n    std::thread workers[3];\n    for (int i = 0; i < 3; ++i)\n        workers[i] = std::thread(worker, i);\n\n    std::this_thread::sleep_for(std::chrono::seconds(1));\n    {\n        std::lock_guard<std::mutex> lock(mtx);\n        ready = true;\n    }\n    cv.notify_all();   // wake all workers\n\n    for (auto& w : workers) w.join();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Worker 0 starting\nWorker 1 starting\nWorker 2 starting\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1555-spurious-wakeups",
      children: "15.5.5 Spurious Wakeups"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The C++ standard allows ", (0,jsx_runtime.jsx)(_components.code, {
        children: "wait()"
      }), " to return without a notification (spurious wakeup). Always use the predicate overload:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// CORRECT: predicate handles spurious wakeups\ncv.wait(lock, [] { return !queue.empty(); });\n\n// WRONG: vulnerable to spurious wakeup\ncv.wait(lock);   // may return even if queue is empty\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1556-edge-cases",
      children: "15.5.6 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No predicate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spurious wakeup reads empty queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always use predicate overload"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "notify before wait (lost wakeup)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumer sleeps forever"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensure wait happens before first notify, or use predicate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple consumers with notify_one"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One consumer may starve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use notify_all or fair scheduling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exception in producer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumer waits forever"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use RAII or try/finally to always send notification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Predicate uses wrong lock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data race on predicate check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be protected by the mutex passed to wait"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "156-stdasync-stdfuture-stdpromise-stdpackaged_task",
      children: "15.6 std::async, std::future, std::promise, std::packaged_task"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1561-stdasync--the-easiest-async-task",
      children: "15.6.1 std::async → The Easiest Async Task"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::async"
      }), " runs a function asynchronously and returns a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::future"
      }), " that will hold the result."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You order a pizza for delivery. The pizzeria starts making it (async background work). You continue your day. When the doorbell rings, you pick up your pizza (future.get())."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION slow_square(x):\n    sleep(1 second)\n    RETURN x * x\n\nMAIN:\n    future_result = ASYNC(slow_square, 42)\n    PRINT \"Computing...\"       // runs immediately\n    result = future_result.get()  // blocks until done\n    PRINT result                // 1764\nEND MAIN\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → async with Launch Policies:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <future>\n#include <iostream>\n#include <chrono>\n\nint slow_add(int a, int b) {\n    std::this_thread::sleep_for(std::chrono::seconds(1));\n    return a + b;\n}\n\nint main() {\n    // Launch policy: guaranteed async (new thread)\n    auto f1 = std::async(std::launch::async, slow_add, 10, 20);\n\n    // Launch policy: deferred (lazy → runs on get())\n    auto f2 = std::async(std::launch::deferred, slow_add, 30, 40);\n\n    // Launch policy: default (implementation chooses)\n    auto f3 = std::async(slow_add, 50, 60);\n\n    std::cout << \"Waiting for results...\\n\";\n\n    std::cout << \"f1: \" << f1.get() << '\\n';   // blocks ~1s\n    std::cout << \"f2: \" << f2.get() << '\\n';   // runs here (no new thread)\n    std::cout << \"f3: \" << f3.get() << '\\n';\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Waiting for results...\nf1: 30\nf2: 70\nf3: 110\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1562-stdfuture--getting-the-result",
      children: "15.6.2 std::future → Getting the Result"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "get()"
        }), " → blocks until result is ready (can only call once)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "wait()"
        }), " → blocks until ready, does not retrieve result"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "wait_for(duration)"
        }), " → blocks with timeout, returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "future_status"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "wait_until(timepoint)"
        }), " → blocks with absolute timeout"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → wait_for with Timeout:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <future>\n#include <iostream>\n#include <chrono>\n\nint main() {\n    auto fut = std::async(std::launch::async, [] {\n        std::this_thread::sleep_for(std::chrono::seconds(3));\n        return 42;\n    });\n\n    // Check every 100ms with timeout\n    while (true) {\n        auto status = fut.wait_for(std::chrono::milliseconds(100));\n        if (status == std::future_status::ready) {\n            std::cout << \"Result: \" << fut.get() << '\\n';\n            break;\n        } else if (status == std::future_status::timeout) {\n            std::cout << \"Still waiting...\\n\";\n        }\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1563-stdshared_future--multiple-waiters",
      children: "15.6.3 std::shared_future → Multiple Waiters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Unlike ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::future"
      }), " (move-only, get() once), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::shared_future"
      }), " is copyable and allows multiple threads to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "get()"
      }), " the same result."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <future>\n#include <thread>\n#include <iostream>\n\nint main() {\n    std::promise<int> prom;\n    std::shared_future<int> sf = prom.get_future().share();\n\n    // Multiple threads can wait on the same shared_future\n    auto worker = [sf](int id) {\n        std::cout << \"Worker \" << id << \" waiting...\\n\";\n        int val = sf.get();\n        std::cout << \"Worker \" << id << \" got: \" << val << '\\n';\n    };\n\n    std::thread t1(worker, 1);\n    std::thread t2(worker, 2);\n\n    std::this_thread::sleep_for(std::chrono::seconds(1));\n    prom.set_value(99);\n\n    t1.join(); t2.join();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1564-stdpromise--manual-value-channel",
      children: "15.6.4 std::promise → Manual Value Channel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::promise<T>"
      }), " provides a write end of a channel whose read end is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::future<T>"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → promise/future Channel:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <future>\n#include <thread>\n#include <iostream>\n#include <chrono>\n#include <exception>\n#include <stdexcept>\n\nvoid compute_sum(std::promise<int>&& prom, int a, int b) {\n    try {\n        if (a < 0 || b < 0)\n            throw std::invalid_argument(\"Negative inputs not allowed\");\n        std::this_thread::sleep_for(std::chrono::milliseconds(500));\n        prom.set_value(a + b);      // fulfill the promise\n    } catch (...) {\n        prom.set_exception(std::current_exception());  // propagate exception\n    }\n}\n\nint main() {\n    std::promise<int> prom;\n    std::future<int> fut = prom.get_future();\n\n    std::thread worker(compute_sum, std::move(prom), 10, 20);\n    // prom MUST be moved → it is not copyable\n\n    std::cout << \"Waiting for result...\\n\";\n    try {\n        int result = fut.get();\n        std::cout << \"Result: \" << result << '\\n';\n    } catch (const std::exception& e) {\n        std::cout << \"Caught: \" << e.what() << '\\n';\n    }\n\n    worker.join();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Waiting for result...\nResult: 30\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge case with negative input:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Waiting for result...\nCaught: Negative inputs not allowed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1565-stdpackaged_task--wrap-callable-as-future",
      children: "15.6.5 std::packaged_task → Wrap Callable as Future"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::packaged_task<Signature>"
      }), " wraps any callable so its return value becomes a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::future"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <future>\n#include <thread>\n#include <iostream>\n\nint multiply(int a, int b) {\n    return a * b;\n}\n\nint main() {\n    // Wrap a function as a packaged_task\n    std::packaged_task<int(int, int)> task(multiply);\n    std::future<int> fut = task.get_future();\n\n    // Execute on a thread\n    std::thread t(std::move(task), 6, 7);\n    // task is move-only\n\n    std::cout << \"6 * 7 = \" << fut.get() << '\\n';\n    t.join();\n\n    // Practical use: thread pool task queue\n    std::packaged_task<int()> lambda_task([] { return 42; });\n    auto fut2 = lambda_task.get_future();\n    lambda_task();   // inline execution\n    std::cout << \"Lambda result: \" << fut2.get() << '\\n';\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "6 * 7 = 42\nLambda result: 42\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1566-async-vs-thread--detailed-comparison",
      children: "15.6.6 async vs thread → Detailed Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "std::async"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "std::thread"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Return value"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::future<T>"
            }), " → result accessible via get()"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No return → must use promise, shared state, or output parameter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exception handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exception captured in future, rethrown on get()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exception terminates program unless caught inside thread"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resource management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared state auto-managed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must join or detach manually"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Number of threads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May use thread pool (implementation-dependent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always creates a new OS thread"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Launch policy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "async"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "deferred"
            }), ", or default"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always immediate execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (may recycle threads)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (always creates thread)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task parallelism → compute a value in background"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fire-and-forget, I/O threads, long-running workers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited → no way to cancel or pause thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full control (but you must manage lifetime)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rule of Thumb:"
        }), " For any task that returns a value, prefer ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::async"
        }), ". For long-running background threads (server accept loops, GUI event loops), use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::thread"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1567-complexity-analysis",
      children: "15.6.7 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "std::async"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) to launch + execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May or may not create thread"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "future::get()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocks until result ready"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(execution time of the task)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "promise::set_value()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + wake waiters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If thread waiting, it's scheduled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "packaged_task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) wrapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Movable → cheap transfer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "157-stdatomic--lock-free-operations",
      children: "15.7 std::atomic → Lock-Free Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1571-what-is-an-atomic-operation",
      children: "15.7.1 What is an Atomic Operation?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "atomic operation"
      }), " is indivisible → no other thread can observe the operation in a partially-completed state."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A bank ATM withdrawal: checking balance, deducting amount, dispensing cash. If you're interrupted between \"check balance\" and \"deduct amount\", two withdrawals could happen on the same balance. An atomic transaction prevents this."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1572-basic-usage",
      children: "15.7.2 Basic Usage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::atomic<T>"
      }), " provides atomic operations on trivially-copyable types (integers, pointers, and custom trivially-copyable structs). On most platforms, operations on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::atomic<int>"
      }), " are lock-free (use CPU atomic instructions)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → Atomic Counter:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <atomic>\n#include <thread>\n#include <iostream>\n\nstd::atomic<int> counter{0};\n\nvoid increment() {\n    for (int i = 0; i < 100000; ++i) {\n        counter.fetch_add(1, std::memory_order_relaxed);\n    }\n}\n\nint main() {\n    std::thread t1(increment);\n    std::thread t2(increment);\n    t1.join();\n    t2.join();\n    std::cout << \"Counter: \" << counter.load() << '\\n';  // 200000\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Operations:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Syntax"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x.load(order)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return the current value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x.store(val, order)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set the value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x.exchange(val, order)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set and return old value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fetch Add"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x.fetch_add(n, order)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x += n, return old value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fetch Sub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x.fetch_sub(n, order)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x -= n, return old value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAS (weak)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x.compare_exchange_weak(expected, desired, order)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If x==expected, set to desired (true); else expected = x (false). Weak may fail spuriously."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAS (strong)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x.compare_exchange_strong(expected, desired, order)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Like weak but no spurious failure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1573-atomic-vs-mutex--performance-comparison",
      children: "15.7.3 Atomic vs Mutex → Performance Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "std::atomic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "std::mutex"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU instruction (CAS, LL/SC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS kernel object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1–10 CPU cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50–1000 cycles (syscall on contention)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never blocks → spin retry on CAS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocks thread (context switch)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Suitable for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple counters, flags, single variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex critical sections, multiple variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit control (6 orders)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "acquire/release semantics on lock/unlock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compare-and-swap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (compare_exchange)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (would need separate variable under lock)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lock-free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually (check is_lock_free())"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No → inherently blocking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard → lock-free data structures are difficult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy → just use mutex"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → Performance Comparison (Conceptual):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <atomic>\n#include <mutex>\n#include <thread>\n#include <iostream>\n#include <chrono>\n\nconstexpr int ITERATIONS = 10'000'000;\n\nstd::atomic<long long> atomic_counter{0};\nstd::mutex mtx;\nlong long mutex_counter = 0;\n\nvoid atomic_worker() {\n    for (int i = 0; i < ITERATIONS; ++i)\n        atomic_counter.fetch_add(1, std::memory_order_relaxed);\n}\n\nvoid mutex_worker() {\n    for (int i = 0; i < ITERATIONS; ++i) {\n        std::lock_guard<std::mutex> lock(mtx);\n        ++mutex_counter;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Approximate results on modern hardware:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic (relaxed):"
        }), " ~50ms (2 threads × 10M increments each)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mutex:"
        }), " ~500ms (mutex ~10× slower for simple increments)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Insight:"
        }), " Atomics are faster because they use CPU instructions with no OS involvement. But they only protect ONE variable. Mutexes can protect complex data structures spanning many variables."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1574-atomic-flag--minimal-synchronization",
      children: "15.7.4 Atomic Flag → Minimal Synchronization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::atomic_flag"
      }), " is the simplest atomic type → guaranteed lock-free, supports only ", (0,jsx_runtime.jsx)(_components.code, {
        children: "test_and_set()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "clear()"
      }), ". Used to build spinlocks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → Spinlock with atomic_flag:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <atomic>\n#include <thread>\n#include <iostream>\n\nclass Spinlock {\n    std::atomic_flag flag = ATOMIC_FLAG_INIT;\npublic:\n    void lock() {\n        while (flag.test_and_set(std::memory_order_acquire))\n            ;   // spin until we acquire\n    }\n    void unlock() {\n        flag.clear(std::memory_order_release);\n    }\n};\n\nSpinlock splock;\nint shared_data = 0;\n\nvoid spin_worker() {\n    for (int i = 0; i < 100000; ++i) {\n        splock.lock();\n        ++shared_data;\n        splock.unlock();\n    }\n}\n\nint main() {\n    std::thread t1(spin_worker);\n    std::thread t2(spin_worker);\n    t1.join(); t2.join();\n    std::cout << \"Spinlock result: \" << shared_data << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Caution:"
        }), " Spinlocks waste CPU cycles on contention. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::mutex"
        }), " unless you have extremely short critical sections and low contention."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "158-memory-ordering--the-heart-of-the-c-memory-model",
      children: "15.8 Memory Ordering → The Heart of the C++ Memory Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1581-what-is-memory-ordering",
      children: "15.8.1 What is Memory Ordering?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Memory ordering controls how operations on different threads become visible to each other. Without ordering constraints, compilers and CPUs may reorder operations, leading to surprising results."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A postcard (relaxed) vs a registered letter (sequentially consistent). With a postcard, you know you sent it, but the recipient might get it before or after other mail. With registered mail, delivery is tracked and ordered relative to other mail."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1582-the-six-memory-orders",
      children: "15.8.2 The Six Memory Orders"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Memory Order"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "memory_order_relaxed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No ordering constraints; only atomicity guaranteed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cheapest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "memory_order_consume"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load → dependent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deprecated; don't use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "memory_order_acquire"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load → subsequent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents reordering of later reads/writes before this load"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "memory_order_release"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prior → store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents reordering of earlier reads/writes after this store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "memory_order_acq_rel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acquire + release (for read-modify-write ops)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "memory_order_seq_cst"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single total order across all threads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most expensive"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1583-acquire-release-semantics-the-key-concept",
      children: "15.8.3 Acquire-Release Semantics (The Key Concept)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevents Reordering"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "acquire"
            }), " (load)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nothing BEFORE the load can be reordered AFTER the load"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "release"
            }), " (store)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nothing AFTER the store can be reordered BEFORE the store"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → The Message Passing Pattern with acquire/release:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <atomic>\n#include <thread>\n#include <iostream>\n#include <cassert>\n\nstd::atomic<bool> ready{false};\nint data = 0;   // not atomic, but protected by ordering\n\nvoid producer() {\n    data = 42;                              // (1) plain store\n    ready.store(true, std::memory_order_release);  // (2) release store\n    // Barrier: (1) is visible to any thread that sees (2)\n}\n\nvoid consumer() {\n    while (!ready.load(std::memory_order_acquire))  // (3) acquire load\n        ;                                           // spin\n    // Barrier: (3) sees (2), so (1) is guaranteed visible\n    std::cout << \"Data: \" << data << '\\n';          // (4) safe → prints 42\n    // assert(data == 42);  // ALWAYS true\n}\n\nint main() {\n    std::thread t1(producer);\n    std::thread t2(consumer);\n    t1.join(); t2.join();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run → Acquire-Release Synchronization:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Producer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Consumer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "data = 42"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ready.store(release)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "ready.load(acquire) → true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read data → 42 (guaranteed)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Without acquire/release (using relaxed):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Producer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Consumer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ready.store(relaxed, true)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "data = 42"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "ready.load(relaxed) → true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Read data → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "??? 0 or 42"
            }), " (undefined!)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["With ", (0,jsx_runtime.jsx)(_components.code, {
        children: "memory_order_relaxed"
      }), ", the compiler/CPU could reorder T0 and T1. The consumer sees ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ready==true"
      }), " but reads ", (0,jsx_runtime.jsx)(_components.code, {
        children: "data==0"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1584-sequentially-consistent-ordering",
      children: "15.8.4 Sequentially Consistent Ordering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "memory_order_seq_cst"
      }), " imposes a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "single total order"
      }), " across all threads. All threads observe all atomic operations in the same order. This is the default and the safest, but also the most expensive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <atomic>\n#include <thread>\n#include <iostream>\n\nstd::atomic<int> x{0}, y{0};\n\nvoid thread_a() {\n    x.store(1, std::memory_order_seq_cst);   // (1)\n    y.store(1, std::memory_order_seq_cst);   // (2)\n}\n\nvoid thread_b() {\n    int y_val = y.load(std::memory_order_seq_cst);  // (3)\n    int x_val = x.load(std::memory_order_seq_cst);  // (4)\n    // It is IMPOSSIBLE for (y_val == 1 && x_val == 0) with seq_cst\n}\n\nint main() {\n    // Run multiple times → seq_cst guarantees single total order\n    for (int i = 0; i < 1000; ++i) {\n        x.store(0); y.store(0);\n        std::thread t1(thread_a);\n        std::thread t2(thread_b);\n        t1.join(); t2.join();\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1585-relaxed-ordering--when-its-safe",
      children: "15.8.5 Relaxed Ordering → When It's Safe"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "memory_order_relaxed"
      }), " guarantees only atomicity (no torn reads/writes). No ordering across variables."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Safe use cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple counters that don't synchronize other data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Statistical counters (approximate values acceptable)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rate limiting / throttling counters"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <atomic>\n#include <thread>\n#include <iostream>\n\nstd::atomic<long long> total_requests{0};\n\nvoid handle_request() {\n    // No other data depends on this counter\n    total_requests.fetch_add(1, std::memory_order_relaxed);\n}\n\n// Reader thread → may be slightly stale, but that's OK\nvoid print_stats() {\n    std::cout << \"Total requests: \"\n              << total_requests.load(std::memory_order_relaxed) << '\\n';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1586-memory-ordering--summary-table",
      children: "15.8.6 Memory Ordering → Summary Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Order"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Load Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Store Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "relaxed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple counters, stats"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "acquire"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents later ops from moving before"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reading a flag that synchronizes data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents earlier ops from moving after"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writing a flag that synchronizes data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "acq_rel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as acquire"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RMW ops (fetch_add, CAS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "seq_cst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single total order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single total order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default; correctness first, optimize later"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Practical Advice:"
        }), " Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "memory_order_seq_cst"
        }), ". Only downgrade to weaker orders when profiling shows a real performance bottleneck AND you deeply understand the memory model. Most code doesn't need anything weaker."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "159-data-races-and-race-conditions",
      children: "15.9 Data Races and Race Conditions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1591-data-race--the-definition",
      children: "15.9.1 Data Race → The Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "data race"
      }), " occurs when:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Two or more threads access the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "same memory location"
        }), " concurrently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["At least one access is a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "write"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["There is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no synchronization"
        }), " (no mutex, no atomic ordering)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Data races are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "undefined behavior"
      }), " in C++. The program may crash, produce wrong results, or appear to work until the worst possible moment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → Data Race (UB):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <thread>\n\n// BAD: data race\nint counter = 0;   // not atomic, not mutex-protected\n\nvoid bad_increment() {\n    for (int i = 0; i < 100000; ++i)\n        ++counter;   // RACE: read-modify-write without sync\n}\n\nint main() {\n    std::thread t1(bad_increment);\n    std::thread t2(bad_increment);\n    t1.join(); t2.join();\n    // counter could be anything → UB\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1592-race-condition--the-broader-concept",
      children: "15.9.2 Race Condition → The Broader Concept"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "race condition"
      }), " is a flaw in the timing or ordering of events that leads to incorrect behavior. All data races are race conditions, but not all race conditions are data races."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <mutex>\n#include <thread>\n#include <iostream>\n#include <chrono>\n\nstd::mutex mtx;\nint balance = 100;\n\n// Race condition: read-check-act sequence is not atomic\nvoid withdraw_racy(int amount) {\n    std::lock_guard<std::mutex> lock(mtx);\n    // Even with mutex, the check-and-act is vulnerable\n    if (balance >= amount) {       // check\n        std::this_thread::sleep_for(std::chrono::milliseconds(1)); // window!\n        balance -= amount;         // act\n    }\n}\n\n// CORRECT → the check and act are protected as one atomic unit\nvoid withdraw_correct(int amount) {\n    std::lock_guard<std::mutex> lock(mtx);\n    if (balance >= amount) {\n        balance -= amount;         // still under same lock\n    }\n}\n\n// But this is STILL a race condition if called from two threads:\n// Thread A: withdraw 70\n// Thread B: withdraw 60\n// Both see balance=100, both pass the check, both subtract\n// Result: -30 instead of correct 30 remaining\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1593-race-condition-types",
      children: "15.9.3 Race Condition Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Check-then-act"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read a value, then modify based on it"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balance withdrawal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Read-modify-write"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read, compute, write (non-atomic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "++counter"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Load-load"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read two values that must be consistent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x and y coordinates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lost update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two updates overwrite each other"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two bank transfers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1594-detecting-data-races",
      children: "15.9.4 Detecting Data Races"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Platform"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Command"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ThreadSanitizer (TSan)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clang/GCC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-fsanitize=thread"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Valgrind Helgrind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "valgrind --tool=helgrind ./a.out"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AddressSanitizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clang/GCC"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "-fsanitize=address"
            }), " (limited race detection)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Visual Studio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/RTCsu (runtime checks)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code → Compile with TSan:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Compile with ThreadSanitizer\ng++ -fsanitize=thread -g -O1 -o program program.cpp\n./program\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1595-critical-section-concept",
      children: "15.9.5 Critical Section Concept"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "critical section"
      }), " is a block of code that accesses shared resources and must not be executed by more than one thread at a time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    Thread A                    Thread B\n       |                          |\n       |   [ENTRY: lock mutex]    |\n       |                          |  [ENTRY: lock mutex]\n       |   CRITICAL SECTION       |  BLOCKED (waiting)\n       |   (protected code)       |     |\n       |   [EXIT: unlock mutex]   |     |\n       |                          |  [ENTRY: acquires lock]\n       |                          |  CRITICAL SECTION\n       |                          |  [EXIT: unlock mutex]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design Rules for Critical Sections:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep critical sections as small as possible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never call unknown code inside a critical section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never block while holding a lock"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always use RAII lock wrappers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1510-interview-corner--concurrency",
      children: "15.10 Interview Corner → Concurrency"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-difference-between-a-data-race-and-a-race-condition",
      children: "Q1: What is the difference between a data race and a race condition?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "data race"
      }), " is specifically about unsynchronized concurrent access to the same memory (at least one write). It is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "undefined behavior"
      }), " in C++."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "race condition"
      }), " is a broader term for any flaw where the outcome depends on the timing or ordering of events. Not all race conditions involve data races."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data race example (UB):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int x = 0;       // not atomic\n// Thread A: x = 1;\n// Thread B: int y = x;\n// Concurrent read + write of x with no mutex = DATA RACE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Race condition without data race (logical flaw only):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::mutex mtx;\nint balance = 100;\n\n// Thread A: if (balance >= 50) balance -= 50;\n// Thread B: if (balance >= 80) balance -= 80;\n// Both check pass (balance=100), both subtract.\n// Mutex ensures no data race, but balance goes to -30 = RACE CONDITION\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Race"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Race Condition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Requires unsync'd memory access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (logical error)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Detected by TSan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two threads increment unsync'd counter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double withdrawal from bank account"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-when-would-you-use-stdatomic-instead-of-stdmutex-and-vice-versa",
      children: "Q2: When would you use std::atomic instead of std::mutex, and vice versa?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "std::atomic"
      }), " when:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need to protect a single variable (counter, flag, status)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance is critical (mutex overhead is too high)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You are implementing lock-free data structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need memory ordering guarantees without full critical sections"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "std::mutex"
      }), " when:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need to protect multiple variables that must change atomically together"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The critical section is long or complex"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need condition variables for coordination"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need to block a thread (atomics spin → waste CPU)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision flowchart:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Single variable + simple operation? ───→ std::atomic\n         ↓ No\nMultiple variables must be consistent? ─→ std::mutex\n         ↓ No\nPerformance-critical hot path? ────────→ std::atomic\n         ↓ No\nDefault choice ────────────────────────→ std::mutex\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-explain-the-difference-between-stdlock_guard-stdunique_lock-and-stdscoped_lock",
      children: "Q3: Explain the difference between std::lock_guard, std::unique_lock, and std::scoped_lock."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "lock_guard (C++11)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "unique_lock (C++11)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "scoped_lock (C++17)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAII lock/unlock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manual lock/unlock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Move ownership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Condition variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (required by wait())"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple mutexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (variadic)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deferred locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (defer_lock)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "try_lock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (try_to_lock)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State flag (~1 byte)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "lock_guard"
        }), " → simple single-mutex protection, no special needs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "unique_lock"
        }), " → need condition_variable, manual unlock, or move ownership"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "scoped_lock"
        }), " → need multiple mutexes simultaneously (C++17+)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-happens-when-a-stdthread-is-destroyed-while-still-joinable",
      children: "Q4: What happens when a std::thread is destroyed while still joinable?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::terminate()"
      }), " is called, which aborts the program."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <thread>\n#include <iostream>\n\nint main() {\n    std::thread t([]{ std::cout << \"Working\\n\"; });\n    // No join() or detach() → t is destroyed at end of scope\n    return 0;   // std::terminate() called!\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "terminate called without an active exception"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Option 1: join before destruction\nstd::thread t([]{ /* ... */ });\nt.join();                     // explicit wait\n\n// Option 2: RAII wrapper (C++20: std::jthread)\nclass JoinGuard {\n    std::thread t;\npublic:\n    explicit JoinGuard(std::thread t_) : t(std::move(t_)) {}\n    ~JoinGuard() { if (t.joinable()) t.join(); }\n};\n\n// Option 3: C++20 jthread\nstd::jthread jt([]{ /* ... */ });  // auto-joins on destruction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-explain-the-aba-problem-in-the-context-of-compare-and-swap",
      children: "Q5: Explain the ABA problem in the context of compare-and-swap."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ABA problem"
      }), " occurs with CAS operations when a memory location changes from A to B and back to A between two reads. The CAS sees \"still A\" and succeeds, but the data's structure has changed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example (lock-free stack pop):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initial: Top → Node A → Node B → ...\n\nThread A reads Top = Node A, next = Node B\nThread A is preempted\n\nThread B pops Node A: Top = Node B\nThread B pops Node B: Top = Node A  (Node A was freed and reallocated!)\nThread B pushes new Node A (same address!)\n\nThread A resumes, CAS(top, Node A, Node B) → succeeds!\nBut Node B was already popped → corruption!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tagged pointers"
        }), " → store a counter alongside the pointer (increment on each CAS)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hazard pointers"
        }), " → mark nodes as \"in-use\" to prevent reclamation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RCU (Read-Copy-Update)"
        }), " → defer reclamation until all readers finish"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use mutexes"
        }), " → lock-free is hard; only do it when you absolutely must"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-does-stdcondition_variablewait-work-internally",
      children: "Q6: How does std::condition_variable::wait() work internally?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "wait(lock, predicate)"
      }), " does the following atomically:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Increment an internal wait count"
        }), " for the condition variable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unlock the mutex"
        }), " (so other threads can modify shared state)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Block"
        }), " the thread (OS suspends it → no CPU consumed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["On wake (notification or spurious):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Re-acquire the mutex"
            }), " (may block if another thread holds it)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Check the predicate"
            }), " → if true, return; if false, go back to step 2"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The key atomic operation is releasing the mutex and entering the wait state as one indivisible step. This ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "eliminates the lost wakeup problem"
      }), " → if the producer notifies between the consumer's condition check and wait, the notification is missed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Internally, wait(lock, pred) is equivalent to:\nwhile (!pred()) {\n    // Atomically: unlock(lock) + wait\n    // On wake: lock(lock)\n    // If spurious wakeup and !pred(): go back to sleep\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-is-a-spinlock-and-when-would-you-use-it",
      children: "Q7: What is a spinlock and when would you use it?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "spinlock"
      }), " is a lock where the waiting thread busy-loops (\"spins\") until the lock becomes available. It never blocks → the thread consumes CPU cycles while waiting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Spinlock {\n    std::atomic<bool> locked{false};\npublic:\n    void lock() {\n        while (locked.exchange(true, std::memory_order_acquire))\n            ;   // spin\n    }\n    void unlock() {\n        locked.store(false, std::memory_order_release);\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use spinlocks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Critical section is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "very short"
        }), " (< ~100 CPU cycles)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Low contention"
        }), " (rarely contested)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You cannot block (interrupt context, real-time constraints)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When NOT to use spinlocks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Longer critical sections (wastes CPU)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High contention (many threads spinning = CPU meltdown)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single-core systems (spinner prevents holder from running!)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-how-do-you-prevent-deadlocks-in-c",
      children: "Q8: How do you prevent deadlocks in C++?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Five strategies, in order of preference:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "std::scoped_lock (C++17)"
          }), " → lock multiple mutexes atomically:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cpp",
            children: "std::scoped_lock lock(m1, m2, m3);   // deadlock-free\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "std::lock"
          }), " + adopt_lock (C++11 pre-scoped_lock):"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cpp",
            children: "std::lock(m1, m2);\nstd::lock_guard lk1(m1, std::adopt_lock);\nstd::lock_guard lk2(m2, std::adopt_lock);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Consistent lock ordering"
          }), " → always lock A before B:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cpp",
            children: "// ALL threads must follow the same order\nstd::lock_guard lk1(mtx_a);   // first\nstd::lock_guard lk2(mtx_b);   // second\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Lock hierarchy"
          }), " → assign numeric levels:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cpp",
            children: "if (level >= current_level) deadlock();\ncurrent_level = level;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Avoid nested locks"
          }), " → restructure to need only one lock at a time:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cpp",
            children: "// Instead of locking two resources at once:\ncopy_resource_a_to_temp();\n{ std::lock_guard lk(mtx_a); swap_a(temp_a); }\n// Now safely lock mtx_b without holding mtx_a\n{ std::lock_guard lk(mtx_b); copy_to_b(temp_a); }\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1511-real-systems--where-concurrency-applies",
      children: "15.11 Real Systems → Where Concurrency Applies"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Concurrency Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C++ Technologies"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Web Servers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread pool processes HTTP requests; async I/O for database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boost.Asio, beast, libcurl"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Game Engines"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dedicated threads: render, physics, audio, network, input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unreal Engine task system, EnTT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Databases"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reader-writer locks for query; condition variables for connection pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite (shared_cache mode), RocksDB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GUI Frameworks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Main thread for UI; worker threads for computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Qt (QThread, signal/slot), wxWidgets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Financial Trading"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock-free order book; atomic reference counting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aeron, Disruptor pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-time Systems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority inheritance mutexes; lock-free ring buffers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOSAR, ROS 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Embedded/IoT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupt handlers + worker threads; careful memory ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FreeRTOS + C++ wrappers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Machine Learning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "async data loading; thread-safe model parameter updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TensorFlow C++, PyTorch C++ API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Telecom/5G"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock-free message queues; signal processing on dedicated cores"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DPDK, LTTng"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-case-study-lock-free-order-book",
      children: "Real-World Case Study: Lock-Free Order Book"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In high-frequency trading (HFT), an order book must handle millions of orders/second with microsecond latency:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <atomic>\n#include <array>\n#include <cstdint>\n\n// Simplified lock-free order book price level\nstruct PriceLevel {\n    std::atomic<int64_t> total_quantity{0};\n    std::atomic<int> order_count{0};\n\n    void add_order(int64_t qty) {\n        total_quantity.fetch_add(qty, std::memory_order_relaxed);\n        order_count.fetch_add(1, std::memory_order_relaxed);\n    }\n\n    int64_t get_quantity() const {\n        return total_quantity.load(std::memory_order_acquire);\n    }\n};\n\n// No mutex → each price level updated atomically.\n// Acceptable if slight staleness in aggregate stats.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "design-pattern-thread-pool",
      children: "Design Pattern: Thread Pool"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A reusable thread pool is one of the most common production concurrency patterns:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <thread>\n#include <queue>\n#include <functional>\n#include <future>\n#include <mutex>\n#include <condition_variable>\n#include <type_traits>\n\nclass ThreadPool {\n    std::vector<std::thread> workers;\n    std::queue<std::function<void()>> tasks;\n    std::mutex queue_mutex;\n    std::condition_variable cv;\n    bool stop = false;\n\npublic:\n    explicit ThreadPool(size_t count)\n        : workers(count) {\n        for (auto& w : workers) {\n            w = std::thread([this] {\n                while (true) {\n                    std::function<void()> task;\n                    {\n                        std::unique_lock<std::mutex> lock(queue_mutex);\n                        cv.wait(lock, [this] {\n                            return stop || !tasks.empty();\n                        });\n                        if (stop && tasks.empty()) return;\n                        task = std::move(tasks.front());\n                        tasks.pop();\n                    }\n                    task();\n                }\n            });\n        }\n    }\n\n    template<typename F, typename... Args>\n    auto enqueue(F&& f, Args&&... args)\n        -> std::future<std::invoke_result_t<F, Args...>> {\n\n        using return_type = std::invoke_result_t<F, Args...>;\n\n        auto task = std::make_shared<std::packaged_task<return_type()>>(\n            std::bind(std::forward<F>(f), std::forward<Args>(args)...)\n        );\n\n        std::future<return_type> result = task->get_future();\n        {\n            std::lock_guard<std::mutex> lock(queue_mutex);\n            if (stop) throw std::runtime_error(\"enqueue on stopped pool\");\n            tasks.emplace([task]() { (*task)(); });\n        }\n        cv.notify_one();\n        return result;\n    }\n\n    ~ThreadPool() {\n        {\n            std::lock_guard<std::mutex> lock(queue_mutex);\n            stop = true;\n        }\n        cv.notify_all();\n        for (auto& w : workers) w.join();\n    }\n};\n\n// Usage:\n// ThreadPool pool(4);\n// auto fut = pool.enqueue([](int x) { return x * x; }, 42);\n// int result = fut.get();  // 1764\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1512-quick-reference--when-to-use-what",
      children: "15.12 Quick Reference → When to Use What"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Situation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Correct Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protect shared data (single variable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::atomic<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock-free, minimal overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protect shared data (multiple related variables)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::mutex"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::lock_guard"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforces consistent multi-variable updates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wait for a condition"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::condition_variable"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::unique_lock"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient blocking (no busy-wait)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compute a value in background"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::async(std::launch::async, ...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns future, exception-safe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fire-and-forget background work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::thread(...).detach()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal overhead (but careful!)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lock two+ mutexes safely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::scoped_lock(m1, m2, ...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deadlock-free atomic multi-lock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Need timeout on lock"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::timed_mutex"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "try_lock_for()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoids indefinite blocking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive function needs same lock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::recursive_mutex"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents self-deadlock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Many readers, few writers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::shared_mutex"
            }), " (C++17)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel reads, exclusive writes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple threads wait for same result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::shared_future"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copyable, multi-get safe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Need ", (0,jsx_runtime.jsx)(_components.code, {
              children: "condition_variable::wait()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::unique_lock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required by wait API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::terminate"
            }), " on thread exit"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RAII wrapper or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::jthread"
            }), " (C++20)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-join ensures proper cleanup"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1513-common-pitfalls-checklist",
      children: "15.13 Common Pitfalls Checklist"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pitfall"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data race (unsync'd access)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nondeterministic output, crash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always synchronize with mutex or atomic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deadlock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program hangs indefinitely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use std::scoped_lock; avoid nested locks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double join/detach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "joinable()"
            }), " before join/detach"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lost wakeup (condition var)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread waits forever"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always use predicate in wait()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spurious wakeup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Condition check fails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always use predicate in wait()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reference capture in thread lambda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread reads destroyed variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capture by value; join before scope exit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting to join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "std::terminate on destruction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAII wrapper or jthread"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Too many threads (thread explosion)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "std::system_error, slowdown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cap threads; use thread pool or async"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "False sharing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unexplained performance drop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Align hot data to cache line (alignas(64))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signal lost (notify before wait)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumer never wakes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use predicate; ensure wait is active, or design to handle late notify"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "False Sharing:"
        }), " When two threads access data on the same cache line, the cache coherence protocol forces expensive inter-core traffic even though they access different variables. Solution: add padding to separate hot variables onto different cache lines."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1514-summary",
      children: "15.14 Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C++ concurrency provides a portable, type-safe threading library. Key primitives:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "std::thread"
        }), " → raw execution contexts; every thread must be joined or detached"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "std::mutex"
        }), " family → 5 mutex types for different locking needs; always use RAII wrappers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "std::lock_guard, unique_lock, scoped_lock"
        }), " → RAII lock management with different flexibility levels"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "std::condition_variable"
        }), " → efficient wait/notify coordination; always use predicate"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "std::async/future/promise/packaged_task"
        }), " → task-based concurrency with result propagation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "std::atomic"
        }), " → lock-free operations; 6 memory orders from relaxed to sequentially consistent"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The two fundamental enemies are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "data races"
      }), " (use synchronization) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deadlocks"
      }), " (use lock ordering, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::lock"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scoped_lock"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1515-exercises",
      children: "15.15 Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::launch::async"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::launch::deferred"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::condition_variable::wait()"
        }), " require ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::unique_lock"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::lock_guard"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Describe a scenario where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::scoped_lock"
        }), " would prevent a deadlock that manual lock ordering would not."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "memory_order_seq_cst"
        }), " guarantee that ", (0,jsx_runtime.jsx)(_components.code, {
          children: "memory_order_acquire"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "memory_order_release"
        }), " do not?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "compare_exchange_weak()"
        }), " allowed to fail spuriously? When would you use it over ", (0,jsx_runtime.jsx)(_components.code, {
          children: "compare_exchange_strong()"
        }), "?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "coding-problems",
      children: "Coding Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Parallel Sum (std::async):"
      }), "\nWrite a program that sums a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::vector<int>"
      }), " of 10 million elements by dividing it into N chunks (one per available core), summing each with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::async"
      }), ", and combining results. Compare wall time against single-threaded."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Thread-Safe Queue:"
      }), "\nImplement a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ThreadSafeQueue<T>"
      }), " class using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::mutex"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::condition_variable"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "push()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "wait_and_pop()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "try_pop()"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "empty()"
      }), ". Ensure the destructor wakes all waiting threads."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Reader-Writer Lock (C++17):"
      }), "\nUse ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::shared_mutex"
      }), " to implement a thread-safe cache. Multiple threads can read concurrently; writes are exclusive. Show that reads don't block reads."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Thread Pool:"
      }), "\nImplement the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ThreadPool"
      }), " class from §15.11 and benchmark ", (0,jsx_runtime.jsx)(_components.code, {
        children: "enqueue(work)"
      }), " vs creating ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::thread"
      }), " directly for 10,000 small tasks."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Lock-Free Stack:"
      }), "\nImplement a simple lock-free stack using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::atomic<Node*>"
      }), " and CAS. Add hazard pointer or epoch-based reclamation to solve the ABA problem."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Dining Philosophers (Deadlock-Free):"
      }), "\nImplement the Dining Philosophers problem with 5 philosophers using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::thread"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::mutex"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::condition_variable"
      }), ". Ensure deadlock cannot occur using either:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lock ordering (pick up lower-numbered fork first)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "std::lock()"
        }), " (atomic multi-lock)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A waiter thread that controls when philosophers eat"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Measure how many times each philosopher eats in 10 seconds."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/14-lambdas",
          children: "14-lambdas"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/16-design-patterns",
          children: "16-design-patterns"
        })]
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