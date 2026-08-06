"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[29904],{

/***/ 79929
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_system_design_13_lld_concurrency_md_e20_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-system-design-13-lld-concurrency-md-e20.json
const site_docs_courses_system_design_13_lld_concurrency_md_e20_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/system-design/13-lld-concurrency","title":"Chapter 13: Low-Level Design: Concurrency and Threading","description":"Previous 14 Distributed Data Structures","source":"@site/docs/courses/system-design/13-lld-concurrency.md","sourceDirName":"courses/system-design","slug":"/system-design/13-lld-concurrency","permalink":"/ai-engineering-journey/system-design/13-lld-concurrency","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"id":"13-lld-concurrency","slug":"/system-design/13-lld-concurrency","title":"Chapter 13: Low-Level Design: Concurrency and Threading","sidebar_label":"Chapter 13: Low-Level Design: Concurrency and Threading","sidebar_position":13},"sidebar":"coursesSidebar","previous":{"title":"Chapter 12: Low-Level Design: Component and Class Design","permalink":"/ai-engineering-journey/system-design/12-lld-component-design"},"next":{"title":"Chapter 14: Distributed Data Structures — Consistent Hashing and Beyond","permalink":"/ai-engineering-journey/system-design/14-distributed-data-structures"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/system-design/13-lld-concurrency.md


const frontMatter = {
	id: '13-lld-concurrency',
	slug: '/system-design/13-lld-concurrency',
	title: 'Chapter 13: Low-Level Design: Concurrency and Threading',
	sidebar_label: 'Chapter 13: Low-Level Design: Concurrency and Threading',
	sidebar_position: 13
};
const contentTitle = 'Chapter 13: Low-Level Design: Concurrency and Threading';

const assets = {

};

/*End Image Gallery*/


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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "Thread Safety Fundamentals",
  "id": "thread-safety-fundamentals",
  "level": 3
}, {
  "value": "Deadlock",
  "id": "deadlock",
  "level": 3
}, {
  "value": "Lock-Free Programming",
  "id": "lock-free-programming",
  "level": 3
}, {
  "value": "Amdahl&#39;s Law and Gustafson&#39;s Law",
  "id": "amdahls-law-and-gustafsons-law",
  "level": 3
}, {
  "value": "Thread Pools",
  "id": "thread-pools",
  "level": 3
}, {
  "value": "Async/Await Internals",
  "id": "asyncawait-internals",
  "level": 3
}, {
  "value": "Actor Model",
  "id": "actor-model",
  "level": 3
}, {
  "value": "Go Goroutines and CSP",
  "id": "go-goroutines-and-csp",
  "level": 3
}, {
  "value": "Dining Philosophers",
  "id": "dining-philosophers",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Concurrent LRU Cache with Lock Striping",
  "id": "example-1-concurrent-lru-cache-with-lock-striping",
  "level": 3
}, {
  "value": "Example 2: Reader-Writer Lock Implementation",
  "id": "example-2-reader-writer-lock-implementation",
  "level": 3
}, {
  "value": "Example 3: Thread-Safe Singleton with Double-Checked Locking",
  "id": "example-3-thread-safe-singleton-with-double-checked-locking",
  "level": 3
}, {
  "value": "Example 4: Producer-Consumer with Condition Variable",
  "id": "example-4-producer-consumer-with-condition-variable",
  "level": 3
}, {
  "value": "Example 5: Thread Pool Implementation",
  "id": "example-5-thread-pool-implementation",
  "level": 3
}, {
  "value": "Example 6: Lock-Free Stack with CAS (ABA Problem)",
  "id": "example-6-lock-free-stack-with-cas-aba-problem",
  "level": 3
}, {
  "value": "Example 7: async/await — Web Scraper with asyncio",
  "id": "example-7-asyncawait--web-scraper-with-asyncio",
  "level": 3
}, {
  "value": "Example 8: Deadlock Detection with Wait-For Graph",
  "id": "example-8-deadlock-detection-with-wait-for-graph",
  "level": 3
}, {
  "value": "Example 9: Go-Style Channel in Python",
  "id": "example-9-go-style-channel-in-python",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Case Study",
  "id": "case-study",
  "level": 2
}, {
  "value": "Implementation: Concurrency and Parallelism",
  "id": "implementation-concurrency-and-parallelism",
  "level": 3
}, {
  "value": "TypeScript: Thread Pool with Worker Threads and Shutdown",
  "id": "typescript-thread-pool-with-worker-threads-and-shutdown",
  "level": 3
}, {
  "value": "TypeScript: Readers-Writers Lock with Fairness",
  "id": "typescript-readers-writers-lock-with-fairness",
  "level": 3
}, {
  "value": "TypeScript: Dining Philosophers with Waiter Arbitrator",
  "id": "typescript-dining-philosophers-with-waiter-arbitrator",
  "level": 3
}, {
  "value": "Concurrency Models Comparison",
  "id": "concurrency-models-comparison",
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
    details: "details",
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
    summary: "summary",
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
        id: "chapter-13-low-level-design-concurrency-and-threading",
        children: "Chapter 13: Low-Level Design: Concurrency and Threading"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/12-lld-component-design",
          children: "12 Lld Component Design"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/14-distributed-data-structures",
          children: "14 Distributed Data Structures"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify and fix race conditions using mutual exclusion, semaphores, and condition variables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze deadlock scenarios using the four Coffman conditions and apply prevention/avoidance strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement lock-free data structures using compare-and-swap (CAS) and manage the ABA problem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate theoretical speedup limits using Amdahl's Law and Gustafson's Law"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design thread pool configurations (fixed, cached, scheduled, work-stealing) for different workload types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between threading models: async/await event loops, actor model message passing, and CSP channels"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.section, {
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
        href: "../../assets/images/lessons/system-design/13-lld-concurrency/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/13-lld-concurrency/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/13-lld-concurrency/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/13-lld-concurrency/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/system-design/13-lld-concurrency/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/system-design/13-lld-concurrency/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency models, threading, async, locks, race conditions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread safety, deadlock, livelock, starvation, race conditions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrency Models"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread-based, event-driven, actor model, coroutines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Synchronization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutex, semaphore, condition variable, atomic operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Async Patterns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise, future, async/await, reactor pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-World"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node.js, Go goroutines, Java concurrency, Akka actors"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Theory]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Theory is the foundation ? master it before moving to examples and exercises."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "thread-safety-fundamentals",
      children: "Thread Safety Fundamentals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept thoroughly ? it is frequently tested in system design interviews."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept ? it appears in nearly every system design interview. Understand both the how and the why."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " A common mistake is over-engineering. Always start simple and add complexity only when justified by requirements."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept thoroughly ? it appears in nearly every system design interview.\n", (0,jsx_runtime.jsx)(_components.img, {
          src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/13-concurrency.png",
          alt: "Concurrency and Threading Flowchart"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "race condition"
      }), " occurs when the behavior of a program depends on the interleaving of operations across multiple threads. The classic example is a non-atomic increment: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "counter += 1"
      }), " compiles into three machine instructions—load, add, store. Two threads executing simultaneously can both load the same value, both increment it, and both store it, losing one increment."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "critical section"
      }), " is a region of code that accesses shared resources and must not be executed by more than one thread at a time. The goal of synchronization is to enforce mutual exclusion over critical sections."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mutex"
      }), " (mutual exclusion) is the most basic synchronization primitive. A thread locks a mutex before entering a critical section and unlocks it after leaving. If the mutex is already locked, the thread blocks until it is unlocked. Mutexes in Python (", (0,jsx_runtime.jsx)(_components.code, {
        children: "threading.Lock"
      }), ") are reentrant by default only when using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RLock"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\n\ncounter = 0\nlock = threading.Lock()\n\ndef increment():\n    global counter\n    for _ in range(100000):\n        with lock:\n            counter += 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Semaphore"
      }), " generalizes mutex to allow N concurrent threads. A semaphore maintains a count; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "acquire()"
      }), " decrements the count (blocking if zero), and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "release()"
      }), " increments it. A binary semaphore (count = 1) is equivalent to a mutex. Semaphores are useful for controlling access to a pool of resources (e.g., database connections)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Condition Variable"
      }), " allows threads to wait for a specific condition to become true. A thread waits on a condition variable, releasing the associated mutex and sleeping until another thread signals that the condition may be true. Condition variables are used to implement producer-consumer queues where a consumer waits for items to become available."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Read-Write Lock"
      }), " allows multiple concurrent readers but exclusive access for writers. This optimizes for read-heavy workloads: readers do not block other readers, only writers. Python's standard library does not include a read-write lock, but one can be built on top of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "threading.Condition"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deadlock",
      children: "Deadlock"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Avoid over-engineering. Start simple, measure, then optimize."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Avoid premature optimization. Start simple, measure, then optimize. Over-engineering is the most common system design mistake."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Deadlock occurs when two or more threads are each waiting for the other to release a resource. The four ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Coffman conditions"
      }), " are necessary for deadlock:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mutual Exclusion"
        }), ": at least one resource is non-sharable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hold and Wait"
        }), ": a thread holds at least one resource while waiting for another."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No Preemption"
        }), ": resources cannot be forcibly taken from a thread."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Circular Wait"
        }), ": a cycle of threads exists where each holds a resource the next one needs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def thread_a():\n    lock1.acquire()\n    lock2.acquire()  # May deadlock with thread_b\n\ndef thread_b():\n    lock2.acquire()\n    lock1.acquire()  # May deadlock with thread_a\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deadlock Prevention"
      }), " eliminates one of the four conditions:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eliminate mutual exclusion: use lock-free data structures."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eliminate hold-and-wait: acquire all locks at once atomically."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eliminate no preemption: allow lock stealing (risky)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eliminate circular wait: enforce a global lock ordering (most practical)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lock order"
      }), " prevents circular wait by ensuring that all threads acquire locks in the same global order. If lock1 is always acquired before lock2, the cycle in the example above cannot form."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deadlock Avoidance"
      }), " uses the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Banker's Algorithm"
      }), ", which checks whether granting a resource request leaves the system in a safe state. A state is safe if there exists a sequence of thread executions where all threads can complete. The algorithm is conservative and requires knowing maximum resource requirements in advance, which limits its practical use."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deadlock Detection"
      }), " allows the system to enter a deadlock but detects it (via a wait-for graph cycle detection) and recovers by terminating one or more threads or preempting resources."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lock-free-programming",
      children: "Lock-Free Programming"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Always articulate trade-offs clearly ? interviewers value reasoning over the \"right\" answer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Lock-free programming achieves thread safety without mutexes by using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "atomic operations"
      }), " directly on memory. The fundamental primitive is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compare-and-Swap (CAS)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CAS(address, expected, new):\n    if *address == expected:\n        *address = new\n        return True\n    else:\n        return False\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CAS is a single atomic instruction on most CPUs (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cmpxchg"
      }), " on x86). A lock-free increment loop looks like:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def atomic_increment(counter: list):\n    while True:\n        old = counter[0]\n        new = old + 1\n        if CAS(counter, old, new):\n            break\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If another thread modifies the counter between the read and the CAS, the CAS fails and the loop retries."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The ABA Problem"
      }), ": Thread A reads value ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A"
      }), " from a location. Thread B changes it to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B"
      }), " and back to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A"
      }), ". Thread A's CAS succeeds, but the state is different (a node was removed and reinserted, but its address is the same). Solutions include tagged pointers or double-wide CAS that increments a version number alongside the pointer."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hazard Pointers"
      }), ": In lock-free data structures, a thread may delete a node that another thread is still accessing. Hazard pointers solve this: each thread publishes the addresses it is currently accessing; a thread cannot delete a node if any hazard pointer points to it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "amdahls-law-and-gustafsons-law",
      children: "Amdahl's Law and Gustafson's Law"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Amdahl's Law"
      }), " gives the theoretical speedup when parallelizing a workload with a serial fraction ", (0,jsx_runtime.jsx)(_components.code, {
        children: "s"
      }), " (non-parallelizable) and a parallel fraction ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p"
      }), " (where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p = 1 - s"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Speedup(S) = 1 / (s + p/N)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "N"
      }), " is the number of processors. As ", (0,jsx_runtime.jsx)(_components.code, {
        children: "N ? 8"
      }), ", the maximum speedup is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1/s"
      }), ". If 10% of a task is serial, the absolute maximum speedup is 10×, regardless of how many cores you add. This is Amdahl's sobering insight: serial bottlenecks dominate at scale."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gustafson's Law"
      }), " provides a different perspective: rather than fixing the problem size and measuring how fast it runs, fix the execution time and ask how large a problem can be solved. Since problem size typically grows with available parallelism, the scaled speedup is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Scaled Speedup(S) = s + p * N = s + (1 - s) * N = N - s * (N - 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Amdahl's Law describes strong scaling (fixed problem, more cores). Gustafson's Law describes weak scaling (fixed time, larger problem). Both are useful: Amdahl tells you the ceiling for a given computation; Gustafson tells you how much you can compute with more resources."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "thread-pools",
      children: "Thread Pools"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thread pools mitigate the overhead of thread creation and destruction. Four common configurations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixed Thread Pool"
      }), ": A fixed number of threads handle incoming tasks. Tasks beyond the pool size are queued. Best for CPU-bound workloads where oversubscription (more threads than cores) degrades performance due to context switching."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cached Thread Pool"
      }), ": Threads are created on demand and cached for reuse. Idle threads are terminated after a timeout. Best for short-lived, I/O-bound tasks where tasks arrive in bursts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scheduled Thread Pool"
      }), ": Executes tasks after a delay or periodically. Used for cron-like timers, health checks, and retry logic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Work-Stealing Pool"
      }), " (Fork-Join): Each worker thread has its own deque of tasks. When a thread's deque is empty, it steals tasks from other threads' tails. This provides better load balancing than a global work queue because threads naturally steal from busy neighbors. Java's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ForkJoinPool"
      }), " and Go's goroutine scheduler use work-stealing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Python's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "concurrent.futures.ThreadPoolExecutor"
      }), " provides a configurable thread pool:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from concurrent.futures import ThreadPoolExecutor, as_completed\n\ndef fetch_url(url: str) -> bytes: ...\n\nwith ThreadPoolExecutor(max_workers=10) as executor:\n    futures = [executor.submit(fetch_url, url) for url in urls]\n    for future in as_completed(futures):\n        result = future.result()\n        process(result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "asyncawait-internals",
      children: "Async/Await Internals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Async/await is a cooperative concurrency model where a single thread switches between tasks at explicit await points. The core components are:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Event Loop"
      }), ": A loop that continuously checks for ready tasks and resumes them. It manages a ready queue, an I/O poller (e.g., epoll on Linux, IOCP on Windows), and a timer heap for delayed tasks."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Coroutine"
      }), ": A function defined with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "async def"
      }), " that can be suspended and resumed. In Python, each coroutine is an object that follows the iterator-like protocol: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__next__"
      }), " drives execution, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "StopIteration"
      }), " carries the return value."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Future / Promise"
      }), ": A placeholder for a result that is not yet available. A future has three states: pending, resolved (with a value), or rejected (with an exception). Callbacks can be attached to futures for notification."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import asyncio\n\nasync def fetch_data(url: str) -> bytes:\n    async with aiohttp.ClientSession() as session:\n        async with session.get(url) as response:\n            return await response.read()\n\nasync def main():\n    task1 = asyncio.create_task(fetch_data(\"/api/1\"))\n    task2 = asyncio.create_task(fetch_data(\"/api/2\"))\n    results = await asyncio.gather(task1, task2)\n\nasyncio.run(main())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The JavaScript event loop is similar but runs on a single thread with a callback queue. The microtask queue (promises) has higher priority than the macrotask queue (setTimeout, I/O). This ordering is critical: a promise resolution always runs before the next timer callback, even if the timer has elapsed."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "actor-model",
      children: "Actor Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Actor model (Erlang, Akka) treats every entity as an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "actor"
      }), "—a computation unit that encapsulates state, behavior, and a mailbox. Actors communicate exclusively through asynchronous message passing; they never share state. Each actor processes messages sequentially from its mailbox."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Advantages:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No shared state means no locks, no race conditions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Actors can be distributed across machines transparently."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supervision hierarchies handle failure: when an actor crashes, its supervisor decides whether to restart it."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Simplified actor using threads and queues\nclass Actor:\n    def __init__(self):\n        self._mailbox = queue.Queue()\n        self._thread = threading.Thread(target=self._run, daemon=True)\n        self._thread.start()\n\n    def send(self, message):\n        self._mailbox.put(message)\n\n    def _run(self):\n        while True:\n            message = self._mailbox.get()\n            self.on_message(message)\n\n    def on_message(self, message):\n        raise NotImplementedError\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Erlang's \"let it crash\" philosophy treats crashes as first-class failures to be managed by supervisors, not caught and handled inline. This produces systems that self-heal without complex error-handling logic."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "go-goroutines-and-csp",
      children: "Go Goroutines and CSP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Go implements Communicating Sequential Processes (CSP). Goroutines are lightweight threads multiplexed onto OS threads by Go's runtime scheduler. The key abstraction is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "channel"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-go",
        children: "func producer(ch chan<- int) {\n    for i := 0; i < 10; i++ {\n        ch <- i  // Send\n    }\n    close(ch)\n}\n\nfunc consumer(ch <-chan int) {\n    for val := range ch {\n        fmt.Println(val)\n    }\n}\n\nfunc main() {\n    ch := make(chan int, 5)  // Buffered channel\n    go producer(ch)\n    consumer(ch)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Channels are first-class values that can be passed to functions, selected with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "select"
      }), ", and closed to signal completion. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "select"
      }), " statement waits on multiple channel operations simultaneously, executing the first one that becomes ready:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-go",
        children: "select {\ncase msg := <-ch1:\n    fmt.Println(msg)\ncase <-time.After(1 * time.Second):\n    fmt.Println(\"timeout\")\ncase <-done:\n    return\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Goroutine leaks occur when a goroutine is blocked forever on a send or receive. Detection tools (Go's pprof, leak-checking libraries) identify goroutines that have not terminated. The typical fix: use contexts with deadlines or cancellations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dining-philosophers",
      children: "Dining Philosophers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Five philosophers sit at a table with five forks. Each philosopher alternates between thinking and eating. To eat, a philosopher needs both the left and right forks. The naive solution (pick up left, then right) deadlocks when all five philosophers pick up their left fork simultaneously."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution 1: Mutex with a guardian"
      }), ". A mutex protects the fork-picking sequence. This limits concurrency but prevents deadlock."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution 2: Resource hierarchy"
      }), ". Number the forks 0-4. Each philosopher picks up the lower-numbered fork first. Philosopher 4 (forks 4 and 0) picks up fork 0 first. This breaks the circular wait."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution 3: Chandy-Misra algorithm"
      }), " (distributed):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forks are labeled as clean or dirty."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initially, lower-numbered philosophers have dirty forks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A philosopher sends a request for a fork they need."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A fork is released if it is dirty (becomes clean after release)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This guarantees that at least one philosopher can always eat."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\nimport time\nimport random\n\nclass Fork:\n    def __init__(self, id: int):\n        self.id = id\n        self.lock = threading.Lock()\n\nclass Philosopher(threading.Thread):\n    def __init__(self, id: int, left_fork: Fork, right_fork: Fork):\n        super().__init__()\n        self.id = id\n        self.left = left_fork\n        self.right = right_fork\n\n    def run(self):\n        for _ in range(5):\n            self.think()\n            self.eat()\n\n    def think(self):\n        print(f\"Philosopher {self.id} thinking\")\n        time.sleep(random.uniform(0.5, 1.5))\n\n    def eat(self):\n        # Resource hierarchy: pick up lower-numbered fork first\n        first = self.left if self.left.id < self.right.id else self.right\n        second = self.right if first == self.left else self.left\n\n        with first.lock:\n            with second.lock:\n                print(f\"Philosopher {self.id} eating\")\n                time.sleep(random.uniform(0.5, 1.0))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-concurrent-lru-cache-with-lock-striping",
      children: "Example 1: Concurrent LRU Cache with Lock Striping"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A high-performance LRU cache that supports concurrent access. Lock striping divides the cache into segments, each with its own lock, reducing contention compared to a single global lock."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\nfrom collections import OrderedDict\n\nclass ConcurrentLRUCache:\n    def __init__(self, capacity: int, num_segments: int = 16):\n        self._segments = [LRUSegment(capacity // num_segments)\n                          for _ in range(num_segments)]\n\n    def _get_segment(self, key: str):\n        return self._segments[hash(key) % len(self._segments)]\n\n    def get(self, key: str):\n        return self._get_segment(key).get(key)\n\n    def put(self, key: str, value):\n        self._get_segment(key).put(key, value)\n\nclass LRUSegment:\n    def __init__(self, capacity: int):\n        self._capacity = capacity\n        self._cache = OrderedDict()\n        self._lock = threading.Lock()\n\n    def get(self, key: str):\n        with self._lock:\n            if key in self._cache:\n                self._cache.move_to_end(key)\n                return self._cache[key]\n            return None\n\n    def put(self, key: str, value):\n        with self._lock:\n            if key in self._cache:\n                self._cache.move_to_end(key)\n            self._cache[key] = value\n            if len(self._cache) > self._capacity:\n                self._cache.popitem(last=False)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why lock striping works"
      }), ": The LRU cache has ", (0,jsx_runtime.jsx)(_components.code, {
        children: "capacity"
      }), " entries. With 16 segments, each segment holds approximately ", (0,jsx_runtime.jsx)(_components.code, {
        children: "capacity/16"
      }), " entries. Contention on any single lock is reduced by a factor proportional to the number of segments. Python's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hash()"
      }), " distributes keys reasonably uniformly, so hot keys affect only one segment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-reader-writer-lock-implementation",
      children: "Example 2: Reader-Writer Lock Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\n\nclass ReadWriteLock:\n    def __init__(self):\n        self._readers = 0\n        self._lock = threading.Lock()\n        self._cond = threading.Condition(self._lock)\n\n    def acquire_read(self):\n        with self._cond:\n            while self._readers < 0:  # Writer is active\n                self._cond.wait()\n            self._readers += 1\n\n    def release_read(self):\n        with self._cond:\n            self._readers -= 1\n            if self._readers == 0:\n                self._cond.notify_all()\n\n    def acquire_write(self):\n        with self._cond:\n            while self._readers != 0:\n                self._cond.wait()\n            self._readers = -1  # Signal writer active\n\n    def release_write(self):\n        with self._cond:\n            self._readers = 0\n            self._cond.notify_all()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This implementation uses a negative ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_readers"
      }), " value to indicate that a writer is active. Readers block until the writer finishes. Writers block while any reader is active. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "notify_all()"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "release_write"
      }), " wakes all waiting readers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-thread-safe-singleton-with-double-checked-locking",
      children: "Example 3: Thread-Safe Singleton with Double-Checked Locking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\n\nclass DatabaseConnectionPool:\n    _instance = None\n    _lock = threading.Lock()\n\n    def __new__(cls):\n        if cls._instance is None:          # First check (unlocked)\n            with cls._lock:                # Acquire class-level lock\n                if cls._instance is None:  # Second check (locked)\n                    obj = super().__new__(cls)\n                    obj._connections = []  # Initialize here\n                    cls._instance = obj\n        return cls._instance\n\n    def get_connection(self):\n        # Return pooled connection\n        pass\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The first check avoids the overhead of acquiring the lock on every access after initialization. The second check ensures that if two threads pass the first check concurrently, only one creates the instance."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-producer-consumer-with-condition-variable",
      children: "Example 4: Producer-Consumer with Condition Variable"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\nimport time\nimport random\n\nclass BoundedBuffer:\n    def __init__(self, capacity: int):\n        self._buffer = []\n        self._capacity = capacity\n        self._lock = threading.Lock()\n        self._not_full = threading.Condition(self._lock)\n        self._not_empty = threading.Condition(self._lock)\n\n    def put(self, item):\n        with self._lock:\n            while len(self._buffer) >= self._capacity:\n                self._not_full.wait()\n            self._buffer.append(item)\n            self._not_empty.notify()\n\n    def get(self):\n        with self._lock:\n            while len(self._buffer) == 0:\n                self._not_empty.wait()\n            item = self._buffer.pop(0)\n            self._not_full.notify()\n            return item\n\ndef producer(buf: BoundedBuffer, items: int):\n    for i in range(items):\n        buf.put(i)\n        print(f\"Produced {i}\")\n        time.sleep(random.uniform(0.1, 0.3))\n    buf.put(None)  # Sentinel\n\ndef consumer(buf: BoundedBuffer, name: str):\n    while True:\n        item = buf.get()\n        if item is None:\n            buf.put(None)  # Propagate sentinel for other consumers\n            break\n        print(f\"{name} consumed {item}\")\n        time.sleep(random.uniform(0.2, 0.5))\n\nbuf = BoundedBuffer(5)\nt1 = threading.Thread(target=producer, args=(buf, 10))\nt2 = threading.Thread(target=consumer, args=(buf, \"C1\"))\nt3 = threading.Thread(target=consumer, args=(buf, \"C2\"))\n\nt1.start(); t2.start(); t3.start()\nt1.join(); t2.join(); t3.join()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Two condition variables"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "_not_full"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_not_empty"
      }), ") avoid the thundering herd problem. If a single condition variable is used, a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "notify_all()"
      }), " wakes all threads, but only one can proceed. With two condition variables, only the relevant threads are woken."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-thread-pool-implementation",
      children: "Example 5: Thread Pool Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\nimport queue\nfrom concurrent.futures import Future\n\nclass ThreadPool:\n    def __init__(self, num_workers: int):\n        self._tasks = queue.Queue()\n        self._workers = []\n        self._shutdown = False\n\n        for _ in range(num_workers):\n            t = threading.Thread(target=self._worker_loop, daemon=True)\n            t.start()\n            self._workers.append(t)\n\n    def submit(self, fn, *args, **kwargs) -> Future:\n        future = Future()\n        self._tasks.put((fn, args, kwargs, future))\n        return future\n\n    def _worker_loop(self):\n        while not (self._shutdown and self._tasks.empty()):\n            try:\n                fn, args, kwargs, future = self._tasks.get(timeout=1)\n                try:\n                    result = fn(*args, **kwargs)\n                    future.set_result(result)\n                except Exception as e:\n                    future.set_exception(e)\n                finally:\n                    self._tasks.task_done()\n            except queue.Empty:\n                continue\n\n    def shutdown(self):\n        self._shutdown = True\n        for w in self._workers:\n            w.join()\n\npool = ThreadPool(4)\nfutures = [pool.submit(lambda x: x * 2, i) for i in range(10)]\nresults = [f.result() for f in futures]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-6-lock-free-stack-with-cas-aba-problem",
      children: "Example 6: Lock-Free Stack with CAS (ABA Problem)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\nimport time\n\nclass Node:\n    def __init__(self, value):\n        self.value = value\n        self.next = None\n\nclass LockFreeStack:\n    def __init__(self):\n        self._top = None\n        self._lock = threading.Lock()\n\n    def push(self, value):\n        node = Node(value)\n        while True:\n            node.next = self._top\n            # CAS would be: compare_and_swap(&self._top, node.next, node)\n            # Python simulation:\n            with self._lock:\n                if self._top == node.next:\n                    self._top = node\n                    return\n\n    def pop(self):\n        while True:\n            old_top = self._top\n            if old_top is None:\n                return None\n            # CAS would be: compare_and_swap(&self._top, old_top, old_top.next)\n            with self._lock:\n                if self._top == old_top:\n                    self._top = old_top.next\n                    return old_top.value\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Python's GIL provides memory safety for individual bytecode operations, but the CAS loop pattern is necessary in languages without a GIL (C++, Rust, Java with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AtomicReference"
      }), "). The ABA problem manifests when a node is popped, freed, then reallocated at the same address—a hazard pointer scheme or tagged reference is needed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-7-asyncawait--web-scraper-with-asyncio",
      children: "Example 7: async/await — Web Scraper with asyncio"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import asyncio\nimport aiohttp\n\nasync def fetch(session: aiohttp.ClientSession, url: str) -> dict:\n    async with session.get(url) as response:\n        return {\"url\": url, \"status\": response.status, \"size\": len(await response.read())}\n\nasync def fetch_all(urls: list[str]) -> list[dict]:\n    async with aiohttp.ClientSession() as session:\n        tasks = [fetch(session, url) for url in urls]\n        return await asyncio.gather(*tasks)\n\nasync def main():\n    urls = [f\"https://httpbin.org/delay/{i}\" for i in range(1, 6)]\n    results = await fetch_all(urls)\n    for r in results:\n        print(f\"{r['url']}: {r['status']} ({r['size']} bytes)\")\n\nasyncio.run(main())\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Execution flow"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "asyncio.run(main())"
      }), " creates the event loop, runs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), ", and closes the loop. Inside ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fetch_all"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "asyncio.gather"
      }), " schedules all coroutines concurrently. At each ", (0,jsx_runtime.jsx)(_components.code, {
        children: "await"
      }), ", the event loop suspends the coroutine and runs another ready coroutine. I/O waits do not block the thread—they register a callback with the OS poller and resume when data arrives."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-8-deadlock-detection-with-wait-for-graph",
      children: "Example 8: Deadlock Detection with Wait-For Graph"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\nimport time\n\nclass DeadlockDetector:\n    def __init__(self):\n        self._lock = threading.Lock()\n        self._wait_for = {}  # thread_id -> set of lock_ids it's waiting for\n        self._holders = {}   # lock_id -> thread_id that holds it\n\n    def acquire(self, lock, timeout=5):\n        thread_id = threading.current_thread().ident\n        lock_id = id(lock)\n        start = time.time()\n\n        while time.time() - start < timeout:\n            with self._lock:\n                if lock_id not in self._holders:\n                    self._holders[lock_id] = thread_id\n                    return True\n                self._wait_for[thread_id] = {self._holders[lock_id]}\n\n            if self._detect_cycle():\n                print(\"DEADLOCK DETECTED!\")\n                raise RuntimeError(\"Deadlock\")\n\n            time.sleep(0.01)\n\n        return False\n\n    def _detect_cycle(self) -> bool:\n        # Simple DFS for cycle detection in wait-for graph\n        visited = set()\n        for thread in self._wait_for:\n            if self._dfs(thread, set()):\n                return True\n        return False\n\n    def _dfs(self, thread, path) -> bool:\n        if thread in path:\n            return True\n        path.add(thread)\n        for waiting in self._wait_for.get(thread, set()):\n            if self._dfs(waiting, path):\n                return True\n        path.remove(thread)\n        return False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-9-go-style-channel-in-python",
      children: "Example 9: Go-Style Channel in Python"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\nimport queue\nfrom typing import Generic, TypeVar\n\nT = TypeVar('T')\n\nclass Chan(Generic[T]):\n    def __init__(self, capacity: int = 0):\n        self._queue = queue.Queue(maxsize=capacity)\n        self._closed = False\n        self._close_lock = threading.Lock()\n\n    def send(self, item: T):\n        if self._closed:\n            raise ValueError(\"send on closed channel\")\n        self._queue.put(item)\n\n    def recv(self) -> T:\n        item = self._queue.get()\n        self._queue.task_done()\n        return item\n\n    def close(self):\n        with self._close_lock:\n            self._closed = True\n\n    def __iter__(self):\n        return self\n\n    def __next__(self):\n        try:\n            return self.recv()\n        except queue.Empty:\n            raise StopIteration\n\ndef select(chan_map: dict[Chan, callable], timeout=None) -> bool:\n    \"\"\"Simplified select: waits for any channel to be ready.\"\"\"\n    start = time.time()\n    while True:\n        for ch, fn in chan_map.items():\n            try:\n                msg = ch._queue.get_nowait()\n                fn(msg)\n                return True\n            except queue.Empty:\n                continue\n        if timeout and (time.time() - start) > timeout:\n            return False\n        time.sleep(0.001)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic in Chapter 13: Low-Level Design: Concurrency and Threading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental concept for system design"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential concept from Chapter 13: Low-Level Design: Concurrency and Threading"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-Off"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relevant across design scenarios"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirements-driven decisions"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What does Amdahl's Law describe?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Speedup from adding memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum theoretical speedup from parallelization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network latency reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk I/O optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which of the four Coffman conditions is most practical to eliminate?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutual Exclusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hold and Wait"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No Preemption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circular Wait"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the ABA problem?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A deadlock detection algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A CAS race where a value changes then reverts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A thread starvation pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A memory leak scenario"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Why does NGINX use a single-threaded event loop?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To simplify locking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For maximum CPU utilization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Because I/O-bound workloads benefit from async I/O without context switching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Because it only handles one connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the key difference between Actor model and CSP?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actors share state; CSP does not"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actors communicate via named channels; CSP via direct messages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actors use message passing with named recipients; CSP uses channels as intermediaries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSP uses locks; Actors do not"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use mutexes for short critical sections; prefer read-write locks for read-heavy workloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profile lock contention; switch to read-write locks when reader : writer ratio exceeds 10:1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Break circular wait with a global lock ordering to prevent deadlock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assign numeric IDs to all locks; enforce acquisition order in code reviews"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use lock-free data structures only when contention is high and benchmarks prove benefit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start with mutexes; profile; only migrate to CAS-based structures if contention is >30%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Async/await with event loops is ideal for I/O-bound services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for web servers, proxies, and API gateways; avoid for CPU-bound computation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread pools should match workload type: fixed for CPU, cached for bursty I/O"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Configure ", (0,jsx_runtime.jsx)(_components.code, {
              children: "max_workers = CPU cores + 1"
            }), " for CPU-bound; allow unbounded for I/O-bound"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Actor model eliminates shared state but adds message-passing overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use when state isolation is critical (game servers, financial transactions)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use work-stealing pools for unbalanced, recursive workloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fork-join patterns, parallel sort, and tree traversal benefit from dynamic load balancing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study",
      children: "Case Study"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario: Real-time Chat Backend at Scale"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A team is building a real-time chat service targeting 10 million daily active users with 1 million concurrent connections. The initial prototype uses a thread-per-connection model: each WebSocket connection spawns a dedicated OS thread. Under 10,000 concurrent connections, the system consumes 2 GB of RAM just for thread stacks (default 2 MB per thread) and spends 40% of CPU time on context switching. At 100,000 connections, the system is unresponsive due to memory exhaustion."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The team redesigns using an event-loop architecture (Node.js with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "async/await"
      }), "). A single thread handles 10,000 connections using epoll for I/O multiplexing. Message broadcasting uses a Redis pub-sub channel: each server instance subscribes to all room channels and emits messages to connected clients without per-connection threads. Memory drops to 500 MB for the same 100,000 connections, and context switching overhead disappears."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For stateful operations (user presence tracking, typing indicators), the team adopts an Actor-like model per chat room. Each room is an independent state machine processed sequentially, eliminating locking entirely. Room state is stored in Redis as a hash, and the event loop processes one message per room at a time. This hybrid architecture — event loop for I/O, actor-per-room for state — handles 1 million concurrent connections on 10 commodity servers with P99 message delivery latency under 50 ms. The key insight: matching concurrency model to workload type (I/O vs stateful computation) is more important than raw throughput."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation-concurrency-and-parallelism",
      children: "Implementation: Concurrency and Parallelism"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ThreadPool { private queue: (() => void)[] = []; private running = 0;\n  constructor(private maxConcurrency: number) {}\n  enqueue(task: () => void): void { this.queue.push(task); this.drain(); }\n  private drain(): void { if (this.running >= this.maxConcurrency || this.queue.length === 0) return; this.running++; const task = this.queue.shift()!; Promise.resolve().then(() => { task(); this.running--; this.drain(); }); }\n  get pendingTasks(): number { return this.queue.length; } get activeTasks(): number { return this.running; }\n}\nclass Mutex { private locked = false; private waiters: (() => void)[] = [];\n  acquire(): Promise<void> { if (!this.locked) { this.locked = true; return Promise.resolve(); } return new Promise(r => this.waiters.push(r)); }\n  release(): void { if (this.waiters.length > 0) this.waiters.shift()!(); else this.locked = false; }\n}\nclass ReadWriteLock { private readers = 0; private writers = 0; private writeWaiters: (() => void)[] = [];\n  acquireRead(): Promise<void> { while (this.writers > 0 || this.writeWaiters.length > 0) return new Promise(r => setTimeout(r, 10)); this.readers++; return Promise.resolve(); }\n  releaseRead(): void { this.readers--; }\n  acquireWrite(): Promise<void> { this.writers++; while (this.readers > 0) return new Promise(r => setTimeout(r, 10)); return Promise.resolve(); }\n  releaseWrite(): void { this.writers--; }\n}\nclass Barrier { private count: number; private arrived = 0; private resolve: (() => void) | null = null;\n  constructor(count: number) { this.count = count; }\n  wait(): Promise<void> { this.arrived++; if (this.arrived >= this.count) { this.resolve?.(); this.arrived = 0; return Promise.resolve(); } return new Promise(r => this.resolve = r); }\n}\nclass Semaphore { private count: number; private waiters: (() => void)[] = [];\n  constructor(initial: number) { this.count = initial; }\n  acquire(): Promise<void> { if (this.count > 0) { this.count--; return Promise.resolve(); } return new Promise(r => this.waiters.push(r)); }\n  release(): void { if (this.waiters.length > 0) this.waiters.shift()!(); else this.count++; }\n}\nclass ActorModel { private mailbox: any[] = []; private processing = false;\n  constructor(private name: string) {}\n  send(msg: any): void { this.mailbox.push(msg); if (!this.processing) this.process(); }\n  private async process(): Promise<void> { this.processing = true; while (this.mailbox.length > 0) { const msg = this.mailbox.shift(); await this.handle(msg); } this.processing = false; }\n  private async handle(msg: any): Promise<void> { console.log(`${this.name} received:`, msg); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-thread-pool-with-worker-threads-and-shutdown",
      children: "TypeScript: Thread Pool with Worker Threads and Shutdown"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class WorkerThread {\n  private thread: Promise<void>;\n  private running = true;\n  constructor(private id: number, private taskQueue: (() => Promise<void>)[], private onIdle: () => void) {\n    this.thread = this.run();\n  }\n  private async run(): Promise<void> {\n    while (this.running) {\n      const task = this.taskQueue.shift();\n      if (task) await task();\n      else await new Promise(r => setTimeout(r, 10));\n    }\n  }\n  shutdown(): void { this.running = false; }\n  async join(): Promise<void> { await this.thread; }\n}\n\nclass ThreadPoolExecutor {\n  private workers: WorkerThread[] = [];\n  private taskQueue: (() => Promise<void>)[] = [];\n  private drained = false;\n  private drainResolve: (() => void) | null = null;\n  private activeCount = 0;\n\n  constructor(private numWorkers: number) {\n    for (let i = 0; i < numWorkers; i++) {\n      this.workers.push(new WorkerThread(i, this.taskQueue, () => this.checkDrained()));\n    }\n  }\n\n  async submit<T>(fn: () => Promise<T>): Promise<T> {\n    return new Promise((resolve, reject) => {\n      this.taskQueue.push(async () => {\n        this.activeCount++;\n        try { resolve(await fn()); }\n        catch (e) { reject(e); }\n        finally { this.activeCount--; this.checkDrained(); }\n      });\n    });\n  }\n\n  private checkDrained(): void {\n    if (this.drained && this.taskQueue.length === 0 && this.activeCount === 0) {\n      this.drainResolve?.();\n    }\n  }\n\n  async shutdown(): Promise<void> {\n    this.drained = true;\n    if (this.taskQueue.length === 0 && this.activeCount === 0) return;\n    await new Promise<void>(r => this.drainResolve = r);\n    for (const w of this.workers) w.shutdown();\n    await Promise.all(this.workers.map(w => w.join()));\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-readers-writers-lock-with-fairness",
      children: "TypeScript: Readers-Writers Lock with Fairness"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ReadersWritersLock {\n  private readers = 0;\n  private writing = false;\n  private readerWaiters: (() => void)[] = [];\n  private writerWaiters: (() => void)[] = [];\n  private writerActive = false;\n\n  async acquireRead(): Promise<void> {\n    if (!this.writing && this.writerWaiters.length === 0 && !this.writerActive) {\n      this.readers++;\n      return;\n    }\n    await new Promise<void>(r => this.readerWaiters.push(r));\n    this.readers++;\n  }\n\n  releaseRead(): void {\n    this.readers--;\n    if (this.readers === 0) this.tryActivateWriter();\n  }\n\n  async acquireWrite(): Promise<void> {\n    if (this.readers === 0 && !this.writing) {\n      this.writing = true;\n      this.writerActive = true;\n      return;\n    }\n    await new Promise<void>(r => this.writerWaiters.push(r));\n    this.writing = true;\n    this.writerActive = true;\n  }\n\n  releaseWrite(): void {\n    this.writing = false;\n    this.writerActive = false;\n    this.tryActivateReaders();\n    if (this.readerWaiters.length === 0) this.tryActivateWriter();\n  }\n\n  private tryActivateReaders(): void {\n    while (this.readerWaiters.length > 0 && !this.writing) {\n      this.readerWaiters.shift()!();\n    }\n  }\n\n  private tryActivateWriter(): void {\n    if (this.writerWaiters.length > 0 && this.readers === 0 && !this.writing) {\n      this.writerWaiters.shift()!();\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-dining-philosophers-with-waiter-arbitrator",
      children: "TypeScript: Dining Philosophers with Waiter Arbitrator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class Chopstick {\n  private held = false;\n  private waiters: (() => void)[] = [];\n\n  async acquire(): Promise<void> {\n    if (!this.held) { this.held = true; return; }\n    await new Promise<void>(r => this.waiters.push(r));\n    this.held = true;\n  }\n\n  release(): void {\n    this.held = false;\n    if (this.waiters.length > 0) this.waiters.shift()!();\n  }\n}\n\nclass Waiter {\n  private eating = new Set<number>();\n  constructor(private numPhilosophers: number) {}\n\n  async requestToEat(id: number): Promise<void> {\n    while (true) {\n      const left = id;\n      const right = (id + 1) % this.numPhilosophers;\n      if (!this.eating.has(left) && !this.eating.has(right)) {\n        this.eating.add(id);\n        return;\n      }\n      await new Promise(r => setTimeout(r, 10));\n    }\n  }\n\n  finishEating(id: number): void { this.eating.delete(id); }\n}\n\nclass DiningPhilosopher {\n  constructor(\n    private id: number,\n    private left: Chopstick,\n    private right: Chopstick,\n    private waiter: Waiter,\n    private name: string\n  ) {}\n\n  async dine(cycles: number): Promise<void> {\n    for (let i = 0; i < cycles; i++) {\n      await this.think();\n      await this.waiter.requestToEat(this.id);\n      await this.left.acquire();\n      await this.right.acquire();\n      await this.eat();\n      this.right.release();\n      this.left.release();\n      this.waiter.finishEating(this.id);\n    }\n  }\n\n  private async think(): Promise<void> {\n    await new Promise(r => setTimeout(r, Math.random() * 100));\n  }\n\n  private async eat(): Promise<void> {\n    await new Promise(r => setTimeout(r, Math.random() * 50));\n  }\n}\n\nasync function simulateDiningPhilosophers(): Promise<void> {\n  const N = 5;\n  const chopsticks = Array.from({ length: N }, () => new Chopstick());\n  const waiter = new Waiter(N);\n  const philosophers = Array.from({ length: N }, (_, i) =>\n    new DiningPhilosopher(i, chopsticks[i], chopsticks[(i + 1) % N], waiter, `Philosopher-${i}`)\n  );\n  await Promise.all(philosophers.map(p => p.dine(3)));\n  console.log('All philosophers finished dining — no deadlock occurred');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concurrency-models-comparison",
      children: "Concurrency Models Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph THREAD_BASED[\"Thread-Based Concurrency\"]\n        T1[\"Thread 1<br/>Stack + Registers\"]\n        T2[\"Thread 2<br/>Stack + Registers\"]\n        T3[\"Thread N<br/>Stack + Registers\"]\n        SHARED[\"Shared Memory<br/>Heap / Objects\"]\n        LOCK[\"Lock / Mutex / Semaphore<br/>Synchronization Primitives\"]\n        T1 & T2 & T3 --> SHARED\n        T1 & T2 & T3 -.-> LOCK\n    end\n\n    subgraph EVENT_LOOP[\"Event Loop / Async\"]\n        EL[\"Event Loop<br/>Single Thread\"]\n        TQ[\"Task Queue<br/>Microtasks > Macrotasks\"]\n        IO[\"I/O Poller<br/>epoll / IOCP / kqueue\"]\n        TIMER[\"Timer Heap<br/>setTimeout / setInterval\"]\n        CORO[\"Coroutines<br/>async / await\"]\n        EL --> TQ & IO & TIMER\n        TQ --> CORO\n    end\n\n    subgraph ACTOR_MODEL[\"Actor Model\"]\n        A1[\"Actor A<br/>State + Mailbox\"]\n        A2[\"Actor B<br/>State + Mailbox\"]\n        A3[\"Actor C<br/>State + Mailbox\"]\n        SUP[\"Supervisor<br/>Restart Strategy\"]\n        A1 -.->|message| A2\n        A2 -.->|message| A3\n        A3 -.->|message| A1\n        A1 & A2 & A3 --> SUP\n    end\n\n    classDef thread fill:#4A90D9,color:#fff\n    classDef event fill:#7B68EE,color:#fff\n    classDef actor fill:#2E8B57,color:#fff\n    classDef sync fill:#D32F2F,color:#fff\n    class T1,T2,T3 thread\n    class EL,IO,TIMER event\n    class A1,A2,A3,SUP actor\n    class LOCK sync\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// lld concurrency\n// distributed-systems-scalability implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'lld concurrency', data: { topic: 'distributed-systems-scalability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// lld concurrency - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'system-design demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'system-design', chapter: 'lld concurrency' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('system-design'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Race conditions require mutual exclusion: use mutex, semaphore, or read-write locks to protect critical sections."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deadlock requires four Coffman conditions; the most practical prevention is a global lock ordering to break circular wait."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lock-free programming uses CAS loops for thread safety without mutexes; the ABA problem is a critical concern that requires versioned references or hazard pointers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Amdahl's Law gives the serial-bottleneck speedup ceiling; Gustafson's Law gives the scaled speedup for larger problems on more processors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thread pools manage worker thread lifecycles: fixed pools for CPU-bound work, cached pools for bursty I/O, work-stealing pools for unbalanced loads."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Async/await provides cooperative concurrency on a single thread via event loops, futures, and coroutines."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Actor model eliminates shared state entirely, communicating through message passing with supervision hierarchies for fault tolerance."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Go's CSP model uses goroutines and channels with the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "select"
        }), " statement for composable concurrency."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Dining Philosophers problem illustrates deadlock, and solutions include resource hierarchy ordering and the Chandy-Misra distributed algorithm."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Concurrent data structures (LRU cache with lock striping, lock-free stack) balance correctness with performance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-world systems like Redis (single-threaded event loop) and NGINX (async I/O) demonstrate that threads are not always the right answer."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "1. Amdahl's Law: S = 1 / (s + (1-s)/N). With s = 0.05 (5% serial): at N = 32, S = 1 / (0.05 + 0.95/32) ≈ 13.5×. At N = 1024, S = 1 / (0.05 + 0.95/1024) ≈ 18.6×. The limit as N → ∞ is 1/0.05 = 20×. Diminishing returns occur because the serial fraction dominates: doubling cores from 512 to 1024 adds only 0.3× speedup.\n2. The four conditions: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait. Eliminating hold-and-wait (acquire all locks atomically) is impractical when locks are discovered dynamically (e.g., a transaction that locks rows as it scans). The most practical target is circular wait via a global lock ordering.\n3. In a lock-free stack: thread A reads top = node X, thread B pops X (now top = Y), thread B pushes X back (top = X again, but X's next pointer may differ). Thread A's CAS succeeds but the stack state is corrupted. Hazard pointers prevent this by ensuring no thread's referenced node is freed.\n4. Actor model: direct message passing to named actors. CSP: communication via anonymous channels. Actors encapsulate state per entity; CSP decouples senders from receivers via channel intermediaries. Go's select and Erlang's receive demonstrate the ergonomic differences.\n5. NGINX uses an event loop because web serving is I/O-bound. A single thread handles thousands of connections using epoll. Thread-per-connection outperforms only when each connection requires significant CPU (e.g., video transcoding per stream) where parallel computation justifies context switching."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "1. Lock striping implementation: create 16 buckets, each with a ReadWriteLock. For a put/get, hash the key to a bucket and acquire that bucket's lock. With 8 threads on 10,000 ops each, the striped version typically shows 4-8× throughput improvement over a single global lock because contention is reduced by the number of buckets.\n2. Resource hierarchy solution: number forks 0-4. Each philosopher picks up the lower-numbered fork first. Philosopher 4 (forks 4 and 0) picks up fork 0 first. This breaks the circular wait. The semaphore-based solution limits concurrency to 4 philosophers, guaranteeing at least one can eat.\n3. Async scraper typically completes 2-5× faster than thread-pool scraper because there is no thread creation/context-switch overhead and the event loop handles I/O waits more efficiently. The gap widens with more URLs because thread pools hit OS scheduling limits."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "Design a distributed rate limiter with token bucket: use a central Redis store for token state with Lua scripts for atomicity. Each `allow_request` call executes a Lua script that checks and decrements tokens atomically. For deadlock freedom, never acquire multiple locks — the Lua script operates on a single key. Metrics counters are atomic Redis INCR operations. Graceful degradation: if Redis is unreachable, fall back to a local in-memory token bucket that allows requests with degraded accuracy (may overshoot but never blocks).\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "For the toy Redis-style KV store: implement a single-threaded event loop that polls a command queue. Use a min-heap for TTL expiry (timer wheel approximation). Compare throughput: single-threaded achieves 50K-100K ops/sec on modern hardware with no locking overhead. Multi-threaded with sharded locks may achieve 200K-400K but adds complexity. Under Amdahl's Law, a single-threaded event loop has s = 1 (serial fraction = 100%), so speedup is exactly 1× regardless of cores — but the simplicity and predictability often wins for caching workloads where 100K ops/sec is sufficient."
      })]
    }), (0,jsx_runtime.jsx)(_components.p, {})]
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