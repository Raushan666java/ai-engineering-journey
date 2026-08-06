"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[24960],{

/***/ 26423
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_operating_systems_04_threads_md_4ab_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-operating-systems-04-threads-md-4ab.json
const site_docs_courses_operating_systems_04_threads_md_4ab_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/operating-systems/04-threads","title":"Chapter 4: Threads","description":"---","source":"@site/docs/courses/operating-systems/04-threads.md","sourceDirName":"courses/operating-systems","slug":"/operating-systems/04-threads","permalink":"/ai-engineering-journey/operating-systems/04-threads","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"04-threads","slug":"/operating-systems/04-threads","title":"Chapter 4: Threads","sidebar_label":"Chapter 4: Threads","sidebar_position":4},"sidebar":"coursesSidebar","previous":{"title":"Chapter 3: CPU Scheduling","permalink":"/ai-engineering-journey/operating-systems/03-cpu-scheduling"},"next":{"title":"Chapter 5: Process Synchronization","permalink":"/ai-engineering-journey/operating-systems/05-synchronization"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/operating-systems/04-threads.md


const frontMatter = {
	id: '04-threads',
	slug: '/operating-systems/04-threads',
	title: 'Chapter 4: Threads',
	sidebar_label: 'Chapter 4: Threads',
	sidebar_position: 4
};
const contentTitle = 'Chapter 4: Threads';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Threads Matter",
  "id": "why-threads-matter",
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
  "value": "Thread Concept",
  "id": "thread-concept",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 4
}, {
  "value": "Definition",
  "id": "definition",
  "level": 4
}, {
  "value": "Visualization",
  "id": "visualization",
  "level": 4
}, {
  "value": "Numbered Steps of Thread Creation",
  "id": "numbered-steps-of-thread-creation",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run: Creating Two Threads",
  "id": "step-by-step-dry-run-creating-two-threads",
  "level": 4
}, {
  "value": "C++ Implementation (std::thread)",
  "id": "c-implementation-stdthread",
  "level": 4
}, {
  "value": "Python Implementation (threading)",
  "id": "python-implementation-threading",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 4
}, {
  "value": "Advantages of Threads",
  "id": "advantages-of-threads",
  "level": 4
}, {
  "value": "Disadvantages of Threads",
  "id": "disadvantages-of-threads",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 4
}, {
  "value": "Thread vs Process Comparison",
  "id": "thread-vs-process-comparison",
  "level": 3
}, {
  "value": "User-Level Threads",
  "id": "user-level-threads",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 4
}, {
  "value": "Definition",
  "id": "definition-1",
  "level": 4
}, {
  "value": "How It Works",
  "id": "how-it-works",
  "level": 4
}, {
  "value": "Numbered Steps of User-Level Thread Creation",
  "id": "numbered-steps-of-user-level-thread-creation",
  "level": 4
}, {
  "value": "User-Level Thread Context Switch (Numbered Steps)",
  "id": "user-level-thread-context-switch-numbered-steps",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run: User-Level Thread Switch",
  "id": "step-by-step-dry-run-user-level-thread-switch",
  "level": 4
}, {
  "value": "C++ Simulation (User-Level Threads using ucontext)",
  "id": "c-simulation-user-level-threads-using-ucontext",
  "level": 4
}, {
  "value": "Python Implementation (user-level — threading module)",
  "id": "python-implementation-user-level--threading-module",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 4
}, {
  "value": "Advantages of User-Level Threads",
  "id": "advantages-of-user-level-threads",
  "level": 4
}, {
  "value": "Disadvantages of User-Level Threads",
  "id": "disadvantages-of-user-level-threads",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 4
}, {
  "value": "Kernel-Level Threads",
  "id": "kernel-level-threads",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 4
}, {
  "value": "Definition",
  "id": "definition-2",
  "level": 4
}, {
  "value": "How It Works",
  "id": "how-it-works-1",
  "level": 4
}, {
  "value": "Numbered Steps of Kernel-Level Thread Creation",
  "id": "numbered-steps-of-kernel-level-thread-creation",
  "level": 4
}, {
  "value": "Kernel-Level Thread Context Switch (Numbered Steps)",
  "id": "kernel-level-thread-context-switch-numbered-steps",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run: Kernel-Level Context Switch",
  "id": "step-by-step-dry-run-kernel-level-context-switch",
  "level": 4
}, {
  "value": "C++ Implementation (kernel threads via std::thread)",
  "id": "c-implementation-kernel-threads-via-stdthread",
  "level": 4
}, {
  "value": "Python Implementation (threading — actually kernel-backed)",
  "id": "python-implementation-threading--actually-kernel-backed",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 4
}, {
  "value": "Advantages of Kernel-Level Threads",
  "id": "advantages-of-kernel-level-threads",
  "level": 4
}, {
  "value": "Disadvantages of Kernel-Level Threads",
  "id": "disadvantages-of-kernel-level-threads",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 4
}, {
  "value": "User-Level vs Kernel-Level Threads — Full Comparison",
  "id": "user-level-vs-kernel-level-threads--full-comparison",
  "level": 3
}, {
  "value": "Multithreading Models",
  "id": "multithreading-models",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 4
}, {
  "value": "Overview of Models",
  "id": "overview-of-models",
  "level": 4
}, {
  "value": "Many-to-One Model",
  "id": "many-to-one-model",
  "level": 4
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 5
}, {
  "value": "Dry Run: Many-to-One Blocking Behavior",
  "id": "dry-run-many-to-one-blocking-behavior",
  "level": 5
}, {
  "value": "C++ Simulation",
  "id": "c-simulation",
  "level": 5
}, {
  "value": "Python Implementation",
  "id": "python-implementation",
  "level": 5
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 5
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages",
  "level": 5
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 5
}, {
  "value": "One-to-One Model",
  "id": "one-to-one-model",
  "level": 4
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-1",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 5
}, {
  "value": "Dry Run: One-to-One Blocking Behavior",
  "id": "dry-run-one-to-one-blocking-behavior",
  "level": 5
}, {
  "value": "C++ Implementation",
  "id": "c-implementation",
  "level": 5
}, {
  "value": "Python Implementation",
  "id": "python-implementation-1",
  "level": 5
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
  "level": 5
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-1",
  "level": 5
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 5
}, {
  "value": "Many-to-Many Model (Two-Level Model)",
  "id": "many-to-many-model-two-level-model",
  "level": 4
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-2",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode-5",
  "level": 5
}, {
  "value": "Dry Run: Many-to-Many Scheduling",
  "id": "dry-run-many-to-many-scheduling",
  "level": 5
}, {
  "value": "C++ Simulation (Many-to-Many Thread Pool)",
  "id": "c-simulation-many-to-many-thread-pool",
  "level": 5
}, {
  "value": "Python Simulation",
  "id": "python-simulation",
  "level": 5
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-5",
  "level": 5
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-2",
  "level": 5
}, {
  "value": "Edge Cases",
  "id": "edge-cases-5",
  "level": 5
}, {
  "value": "Thread Libraries",
  "id": "thread-libraries",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 4
}, {
  "value": "Overview",
  "id": "overview",
  "level": 4
}, {
  "value": "POSIX Threads (pthreads)",
  "id": "posix-threads-pthreads",
  "level": 4
}, {
  "value": "C++ Standard Threads (std::thread)",
  "id": "c-standard-threads-stdthread",
  "level": 4
}, {
  "value": "Python Threading Library",
  "id": "python-threading-library",
  "level": 4
}, {
  "value": "Thread Pools",
  "id": "thread-pools",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-5",
  "level": 4
}, {
  "value": "Definition",
  "id": "definition-3",
  "level": 4
}, {
  "value": "Numbered Steps: Thread Pool Operation",
  "id": "numbered-steps-thread-pool-operation",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-6",
  "level": 4
}, {
  "value": "Dry Run: Thread Pool with 2 Workers, 4 Tasks",
  "id": "dry-run-thread-pool-with-2-workers-4-tasks",
  "level": 4
}, {
  "value": "C++ Implementation (Thread Pool)",
  "id": "c-implementation-thread-pool",
  "level": 4
}, {
  "value": "Python Implementation (Thread Pool)",
  "id": "python-implementation-thread-pool",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-6",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-3",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-6",
  "level": 4
}, {
  "value": "Threading Issues",
  "id": "threading-issues",
  "level": 3
}, {
  "value": "fork() in Multithreaded Programs",
  "id": "fork-in-multithreaded-programs",
  "level": 4
}, {
  "value": "Thread Cancellation",
  "id": "thread-cancellation",
  "level": 4
}, {
  "value": "Signal Handling",
  "id": "signal-handling",
  "level": 4
}, {
  "value": "Thread Safety",
  "id": "thread-safety",
  "level": 4
}, {
  "value": "Race Conditions",
  "id": "race-conditions",
  "level": 4
}, {
  "value": "Threading Models Comparison (All Four Models)",
  "id": "threading-models-comparison-all-four-models",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 3
}, {
  "value": "Q1: What is the difference between a thread and a process?",
  "id": "q1-what-is-the-difference-between-a-thread-and-a-process",
  "level": 4
}, {
  "value": "Q2: How do you choose the optimal thread pool size?",
  "id": "q2-how-do-you-choose-the-optimal-thread-pool-size",
  "level": 4
}, {
  "value": "Q3: What is thread safety? How do you achieve it?",
  "id": "q3-what-is-thread-safety-how-do-you-achieve-it",
  "level": 4
}, {
  "value": "Q4: Explain deadlock and its four necessary conditions (Coffman conditions).",
  "id": "q4-explain-deadlock-and-its-four-necessary-conditions-coffman-conditions",
  "level": 4
}, {
  "value": "Q5: What is false sharing? How do you prevent it?",
  "id": "q5-what-is-false-sharing-how-do-you-prevent-it",
  "level": 4
}, {
  "value": "Q6: What happens when you call <code>fork()</code> in a multithreaded program?",
  "id": "q6-what-happens-when-you-call-fork-in-a-multithreaded-program",
  "level": 4
}, {
  "value": "Q7: User-level threads vs kernel-level threads — which is better?",
  "id": "q7-user-level-threads-vs-kernel-level-threads--which-is-better",
  "level": 4
}, {
  "value": "Q8: Explain Amdahl&#39;s Law in context of threads.",
  "id": "q8-explain-amdahls-law-in-context-of-threads",
  "level": 4
}, {
  "value": "Q9: What is a race condition? Give an example.",
  "id": "q9-what-is-a-race-condition-give-an-example",
  "level": 4
}, {
  "value": "Q10: How do you debug multithreaded programs?",
  "id": "q10-how-do-you-debug-multithreaded-programs",
  "level": 4
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 3
}, {
  "value": "Linux (NPTL — Native POSIX Threads Library)",
  "id": "linux-nptl--native-posix-threads-library",
  "level": 4
}, {
  "value": "Windows Threads",
  "id": "windows-threads",
  "level": 4
}, {
  "value": "Java Threads",
  "id": "java-threads",
  "level": 4
}, {
  "value": "Go Goroutines",
  "id": "go-goroutines",
  "level": 4
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Computing Pi with Multiple Threads",
  "id": "example-1-computing-pi-with-multiple-threads",
  "level": 3
}, {
  "value": "Example 2: Amdahl&#39;s Law",
  "id": "example-2-amdahls-law",
  "level": 3
}, {
  "value": "Example 3: Producer-Consumer with Condition Variables",
  "id": "example-3-producer-consumer-with-condition-variables",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Threading Models Comparison",
  "id": "threading-models-comparison",
  "level": 3
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
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Basic",
  "id": "basic",
  "level": 3
}, {
  "value": "Intermediate",
  "id": "intermediate",
  "level": 3
}, {
  "value": "Advanced",
  "id": "advanced",
  "level": 3
}, {
  "value": "TypeScript Thread Pool and Parallelism Simulator",
  "id": "typescript-thread-pool-and-parallelism-simulator",
  "level": 3
}, {
  "value": "Thread Safety in TypeScript: Race Condition Detector",
  "id": "thread-safety-in-typescript-race-condition-detector",
  "level": 3
}, {
  "value": "Additional Chapter Quiz Questions",
  "id": "additional-chapter-quiz-questions",
  "level": 3
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises",
  "level": 3
}, {
  "value": "Basic",
  "id": "basic-1",
  "level": 4
}, {
  "value": "Intermediate",
  "id": "intermediate-1",
  "level": 4
}, {
  "value": "Advanced",
  "id": "advanced-1",
  "level": 4
}, {
  "value": "Further Reading",
  "id": "further-reading",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
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
        id: "chapter-4-threads",
        children: "Chapter 4: Threads"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["<< ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/operating-systems/03-cpu-scheduling",
          children: "CPU Scheduling"
        })]
      }), " | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/operating-systems/05-synchronization",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next: Process Synchronization"
        })
      }), " >>"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define a thread and differentiate it from a process"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare user-level threads and kernel-level threads"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the three multithreading models (many-to-one, one-to-one, many-to-many)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use POSIX threads (pthreads) for multithreaded programming"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify issues in multithreaded programs (safety, liveness, performance)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand how threading maps to modern multicore hardware"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement multithreaded programs in C++ (std::thread) and Python (threading)"
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
        href: "../../assets/images/lessons/operating-systems/04-threads/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/operating-systems/04-threads/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/operating-systems/04-threads/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/operating-systems/04-threads/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/operating-systems/04-threads/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/operating-systems/04-threads/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-threads-matter",
      children: "Why Threads Matter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine an office with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "10 workers sharing one desk"
      }), ". Each worker has their own notebook (stack) and pen (registers), but they share the same desk, reference books (code section), filing cabinet (data section), and phone line (file descriptors). When one worker gets a call (blocking I/O), the others keep working. If they each had their own separate desk (process), they would need 10 desks — costly space, slow to set up, and they can't easily share information."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Threads are those workers sharing one desk."
      }), " A process is the desk itself. Threads within the same process share the address space but have their own stack and registers. This makes thread creation 10–100× faster than process creation because we don't duplicate the entire desk — just the notebook."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In modern computing:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "web server"
        }), " handles 10,000+ concurrent connections using thread pools"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "browser"
        }), " uses one thread for rendering, one for networking, one for JavaScript"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "database"
        }), " uses threads for parallel query execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Your ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "OS"
        }), " uses kernel threads to keep the UI responsive while background tasks run"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without threads, every concurrent task would require a separate process — more memory, slower creation, harder communication. Threads make concurrency practical."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thread Concept"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lightweight process; unit of CPU utilization with own stack/registers, shares address space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Why Threads"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Responsiveness, resource sharing, economy, scalability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "User-Level Threads"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed by thread library; fast but kernel sees single process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel-Level Threads"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed by OS; slower but kernel schedules independently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multithreading Models"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many-to-One, One-to-One, Many-to-Many, Two-Level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thread Libraries"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pthreads (POSIX), std::thread (C++), threading (Python)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thread Pools"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-created threads for efficient task execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Threading Issues"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fork() safety, cancellation, signal handling, race conditions, deadlock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real Systems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux NPTL (one-to-one), Windows (one-to-one), Java (JVM-threads), Go (goroutines)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.div, {
      className: "mermaid",
      children: "\nflowchart LR\n    A[Thread Concept] --> B[Why Threads Matter]\n    B --> C[Thread vs Process]\n    C --> D[User-Level vs Kernel-Level]\n    D --> E[Multithreading Models]\n    E --> F[Thread Libraries]\n    F --> G[Thread Pools & Issues]\n    G --> H[Interview Corner]\n    H --> I[Real-World Applications]\n    I --> J[Examples & Summary]\n"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/operating-systems/04-threads.png",
        alt: "Threads Overview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "thread-concept",
      children: "Thread Concept"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Office workers sharing a single desk."
        }), " Each worker gets their own notepad (stack) and pen (registers), but they all share the same desk surface (heap), reference library (code section), filing cabinet (global data), and office phone (file descriptors). Hiring a new worker just means handing them a fresh notepad — no need to buy a new desk."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "definition",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "thread"
      }), " is the basic unit of CPU utilization. It consists of:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Thread ID"
        }), " — unique identifier"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Program Counter (PC)"
        }), " — points to the next instruction to execute"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Register Set"
        }), " — CPU register state"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stack"
        }), " — local variables and function call frames"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Threads ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "share"
      }), " with sibling threads within the same process:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code section (text)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data section (global variables, heap)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open file descriptors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Signal handlers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Current working directory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User and group IDs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "visualization",
      children: "Visualization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Process Address Space\n┌────────────────────────────────────┐\n│          Code (text)               │  ← shared by all threads\n├────────────────────────────────────┤\n│          Data (globals)            │  ← shared by all threads\n├────────────────────────────────────┤\n│          Heap (dynamic)            │  ← shared by all threads\n├──────────┬──────────┬──────────────┤\n│ T1 Stack │ T2 Stack │ T3 Stack     │  ← each thread has its own\n│ T1 PC/R  │ T2 PC/R  │ T3 PC/R      │\n└──────────┴──────────┴──────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-of-thread-creation",
      children: "Numbered Steps of Thread Creation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Allocate a new thread control block (TCB) in the process's thread table"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign a unique thread ID"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Allocate a stack region (typically 1–8 MB for user threads)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize the stack with the thread function's arguments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set the program counter to the start of the thread function"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set the thread's register state to initial values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add the thread to the ready queue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The scheduler eventually picks up the thread for execution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION CreateThread(start_function, arg):\n    tcb = ALLOCATE_THREAD_CONTROL_BLOCK()\n    tcb.id = NEXT_THREAD_ID()\n    tcb.stack = ALLOCATE_STACK(STACK_SIZE)\n    tcb.stack.InitializeWith(start_function, arg)\n    tcb.pc = ADDRESS_OF(start_function)\n    tcb.state = READY\n    READY_QUEUE.ENQUEUE(tcb)\n    RETURN tcb.id\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-creating-two-threads",
      children: "Step-by-Step Dry Run: Creating Two Threads"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assume a single-core CPU. We create two threads that each print \"Hello from thread X\"."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial State:"
      }), " Main thread (T_main) running, ready queue empty."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Running"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ready Queue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T_main calls CreateThread(\"print_hello\", arg1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T_main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate TCB for T1, stack=0x7f00, assign ID=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T_main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1 state = READY, enqueue T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T_main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T_main calls CreateThread(\"print_hello\", arg2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T_main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate TCB for T2, stack=0x8f00, assign ID=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T_main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2 state = READY, enqueue T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T_main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1, T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timer interrupt → context switch needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T_main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1, T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save T_main registers to its TCB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T_main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1, T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dequeue T1 from ready queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T_main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restore T1 registers from its TCB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1 runs: set PC to print_hello"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1 loads arg into register, calls printf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Hello from thread 1\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1 returns, state = TERMINATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduler picks T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1→T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restore T2 registers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2 runs print_hello"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Hello from thread 2\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2 returns, state = TERMINATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-stdthread",
      children: "C++ Implementation (std::thread)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <thread>\n#include <vector>\n\nvoid print_hello(int id) {\n    std::cout << \"Hello from thread \" << id << \" (tid: \"\n              << std::this_thread::get_id() << \")\" << std::endl;\n}\n\nint main() {\n    std::vector<std::thread> threads;\n    const int NUM_THREADS = 5;\n\n    for (int i = 0; i < NUM_THREADS; ++i) {\n        threads.emplace_back(print_hello, i);\n    }\n\n    for (auto& t : threads) {\n        t.join();\n    }\n\n    std::cout << \"Main: All threads done.\" << std::endl;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Compile with: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "g++ -std=c++11 -pthread program.cpp -o program"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-threading",
      children: "Python Implementation (threading)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\nimport time\n\ndef print_hello(id):\n    print(f\"Hello from thread {id} (tid: {threading.get_ident()})\")\n\nthreads = []\nNUM_THREADS = 5\n\nfor i in range(NUM_THREADS):\n    t = threading.Thread(target=print_hello, args=(i,))\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()\n\nprint(\"Main: All threads done.\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate TCB + stack — fixed-size operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread termination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark TCB as free, release stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread context switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save/restore ~20 registers — constant time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check termination flag, block if not done"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread creation (kernel-level)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) where n = threads in process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel must update scheduler data structures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory overhead per thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(S) where S = stack size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typically 1–8 MB for user stack, ~16 KB for kernel stack"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages-of-threads",
      children: "Advantages of Threads"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Responsiveness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program stays responsive even if one thread blocks (e.g., UI thread while network thread waits)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resource Sharing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threads automatically share address space — no need for IPC mechanisms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Economy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread creation is 10–100× cheaper than process creation; context switch is 5–10× faster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threads can execute in parallel on multiple CPU cores"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threads communicate via shared memory — no pipes, sockets, or shared memory syscalls needed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "disadvantages-of-threads",
      children: "Disadvantages of Threads"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No protection between threads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One thread's wild pointer can corrupt another thread's stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronization complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared data requires locks, mutexes, semaphores — easy to introduce deadlocks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging difficulty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-deterministic interleaving makes bugs hard to reproduce"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signal handling ambiguity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which thread receives an asynchronous signal?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack size limitation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread stacks are fixed-size — recursion-heavy code can overflow"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Thread safety"
          }), ": If two threads write to the same global variable without synchronization, the result is undefined (data race). Example: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "counter++"
          }), " compiles to load-increment-store — two threads can interleave and lose one update."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Race condition"
          }), ": The outcome depends on the non-deterministic ordering of thread execution. A classic race: thread A checks if a file exists, thread B deletes it, then thread A tries to open it."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Stack overflow"
          }), ": Each thread has a fixed stack size (default ~8 MB on Linux, ~1 MB on Windows). Deep recursion or large stack allocations cause SIGSEGV. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pthread_attr_setstacksize()"
          }), " to adjust."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Thread creation failure"
          }), ": If the system runs out of memory or reaches the thread limit (", (0,jsx_runtime.jsx)(_components.code, {
            children: "/proc/sys/kernel/threads-max"
          }), "), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pthread_create()"
          }), " returns EAGAIN."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Detached threads"
          }), ": If a detached thread's function throws an unhandled exception (C++) or raises an exception (Python), the program terminates — there is no way to join and retrieve the exception."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "False sharing"
          }), ": Two threads modify different variables that happen to share the same cache line. The cache coherency protocol forces constant invalidation, killing performance (this is not a correctness bug but a performance disaster)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "thread-vs-process-comparison",
      children: "Thread vs Process Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Process"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Thread"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Address space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Creation time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (fork + COW setup)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (allocate TCB + stack)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heavy (MMU, TLB flush, page table switch)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lightweight (register save/restore only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPC (pipes, shared memory, sockets, signals)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct memory access (shared globals)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS-enforced isolation (segfault in one process doesn't affect others)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Programmer-managed (one thread crash = whole process crash)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resource overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (PCB, page tables, file descriptor table, signal table)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (just TCB + stack)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiprocessor scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes — processes can run on different cores"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes — threads can run on different cores"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ownership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Owns resources (files, sockets, signals)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shares process resources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Number limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (constrained by memory for address space)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (thousands per process possible)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-level-threads",
      children: "User-Level Threads"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A library with self-organizing reading groups."
        }), " A librarian (kernel) sees only one \"group\" checking in. Inside, the group coordinator (thread library) splits readers into smaller circles (threads). When one reader wants a new book, the coordinator quickly swaps them — no librarian needed. But if the whole group needs to check out together (blocking syscall), everyone waits."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "definition-1",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["User-level threads are managed entirely by a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "thread library in user space"
      }), " without any kernel involvement. The kernel sees only a single process with one program counter. The thread library handles creation, scheduling, and switching entirely in user mode."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "how-it-works",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Thread library maintains a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "thread table"
        }), " in user space (one entry per thread: PC, register state, stack pointer, state)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library implements its own scheduler (Round Robin, Priority, etc.)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Thread switching is done by ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "saving registers"
        }), " to the thread table and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "loading registers"
        }), " from the next thread"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A timer signal (SIGALRM, SIGVTALRM) can preempt the current thread"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-of-user-level-thread-creation",
      children: "Numbered Steps of User-Level Thread Creation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Thread library function (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "thread_create()"
        }), ") is called"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Library allocates a new entry in the user-space thread table"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Library allocates a stack from the process heap (using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "malloc"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Library initializes the stack frame with the thread function and arguments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Library sets the thread state to READY"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Library adds the thread to its internal ready queue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No system call is made — the kernel is not involved"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "user-level-thread-context-switch-numbered-steps",
      children: "User-Level Thread Context Switch (Numbered Steps)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Running thread calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "thread_yield()"
        }), " or a timer signal fires"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Library saves the current thread's registers (PC, SP, general-purpose registers) into the thread table"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Library sets the current thread's state to READY and enqueues it in the ready queue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Library dequeues the next thread from the ready queue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Library sets the next thread's state to RUNNING"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Library restores the next thread's registers from the thread table"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Library executes a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ret"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "jmp"
        }), " instruction to the next thread's saved PC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The next thread resumes execution — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no system call, no kernel trap, no mode switch"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION UserThreadCreate(start_func, arg):\n    tcb = MALLOC(sizeof(ThreadControlBlock))\n    tcb.id = next_thread_id++\n    tcb.stack = MALLOC(STACK_SIZE)\n    tcb.stack.InitializeWith(start_func, arg)\n    tcb.pc = start_func\n    tcb.sp = tcb.stack + STACK_SIZE  // stack grows down\n    tcb.state = READY\n    ready_queue.APPEND(tcb)\n    return tcb.id\n\nFUNCTION UserThreadYield():\n    running_tcb = ready_queue.REMOVE_CURRENT()\n    SAVE_REGISTERS(running_tcb)\n    running_tcb.state = READY\n    ready_queue.APPEND(running_tcb)\n    next_tcb = ready_queue.REMOVE_NEXT()\n    next_tcb.state = RUNNING\n    RESTORE_REGISTERS(next_tcb)\n    JUMP_TO(next_tcb.pc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-user-level-thread-switch",
      children: "Step-by-Step Dry Run: User-Level Thread Switch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two user-level threads T1 and T2 are managed by the thread library. No kernel-level threads exist."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Running"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ready Queue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Syscall?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T1 calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "thread_yield()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t=10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library saves T1's registers (eax=0x5, ebx=0x... , esp=0x7f00, eip=0x4012)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1→save"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t=10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library sets T1.state = READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2, T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t=10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library dequeues T2 from ready queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t=10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library sets T2.state = RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t=11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library restores T2's registers (eax=0x0, esp=0x8f00, eip=0x402a)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t=11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library jumps to T2's saved PC (0x402a)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t=11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2 resumes execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t=11"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key observation:"
      }), " Total context switch time ≈ 5–10 μs (just register save/restore + queue operations). No system call. No mode switch (user→kernel→user)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-simulation-user-level-threads-using-ucontext",
      children: "C++ Simulation (User-Level Threads using ucontext)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <ucontext.h>\n#include <vector>\n\nucontext_t main_ctx, t1_ctx, t2_ctx;\nchar t1_stack[8192], t2_stack[8192];\n\nvoid thread_function_1() {\n    std::cout << \"Thread 1: Running\" << std::endl;\n    swapcontext(&t1_ctx, &main_ctx);  // yield back to main\n    std::cout << \"Thread 1: Resumed\" << std::endl;\n}\n\nvoid thread_function_2() {\n    std::cout << \"Thread 2: Running\" << std::endl;\n    swapcontext(&t2_ctx, &main_ctx);  // yield back to main\n    std::cout << \"Thread 2: Resumed\" << std::endl;\n}\n\nint main() {\n    getcontext(&t1_ctx);\n    t1_ctx.uc_link = &main_ctx;\n    t1_ctx.uc_stack.ss_sp = t1_stack;\n    t1_ctx.uc_stack.ss_size = sizeof(t1_stack);\n    makecontext(&t1_ctx, thread_function_1, 0);\n\n    getcontext(&t2_ctx);\n    t2_ctx.uc_link = &main_ctx;\n    t2_ctx.uc_stack.ss_sp = t2_stack;\n    t2_ctx.uc_stack.ss_size = sizeof(t2_stack);\n    makecontext(&t2_ctx, thread_function_2, 0);\n\n    std::cout << \"Main: Starting threads...\" << std::endl;\n    swapcontext(&main_ctx, &t1_ctx);  // start T1\n    std::cout << \"Main: Back from T1\" << std::endl;\n    swapcontext(&main_ctx, &t2_ctx);  // start T2\n    std::cout << \"Main: Back from T2\" << std::endl;\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-user-level--threading-module",
      children: "Python Implementation (user-level — threading module)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python threads are user-level from the language perspective (managed by the Python interpreter) but are backed by kernel threads in CPython:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\nimport time\n\nresult = []\n\ndef worker(name):\n    for i in range(3):\n        result.append(f\"{name}: iteration {i}\")\n        time.sleep(0.001)  # yield opportunity\n\nthreads = []\nfor name in [\"A\", \"B\", \"C\"]:\n    t = threading.Thread(target=worker, args=(name,))\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()\n\nfor line in result:\n    print(line)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User-level thread creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just malloc TCB + stack — no syscall"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User-level context switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save/restore ~20 registers — no kernel trap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User-level thread join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check a flag in the TCB, busy-wait or yield"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blocking on I/O in one ULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocks all — kernel unaware of individual ULTs"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Creating N user-level threads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N allocations, no kernel involvement per thread"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages-of-user-level-threads",
      children: "Advantages of User-Level Threads"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ultra-fast creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No system call — pure user-space allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ultra-fast context switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save/restore registers — ~5–10 μs vs ~50–100 μs for kernel threads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OS-independent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works on any OS that supports processes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library can implement application-specific scheduling policies (e.g., priority, deadline)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Low memory overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only a TCB and a stack — no kernel stack or kernel TCB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No kernel involvement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No traps, no mode switches — all operations in user space"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "disadvantages-of-user-level-threads",
      children: "Disadvantages of User-Level Threads"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No true parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel schedules the process, not individual threads — one thread at a time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blocking syscall blocks all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If one thread calls read(), the entire process blocks — kernel doesn't know about other threads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Page fault blocks all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When one thread causes a page fault, the entire process waits for the page I/O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot leverage multi-core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only one kernel thread = only one CPU core used"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread library complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom scheduler, timer management, signal handling — all in user space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Priority inversion awareness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No way to signal the kernel about thread priorities"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Deadlock in user space"
          }), ": If the thread library's scheduler holds a lock while yielding, other threads can't acquire it — the library must be reentrant."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Blocking I/O in one thread"
          }), ": If T1 calls ", (0,jsx_runtime.jsx)(_components.code, {
            children: "read(fd, buf, 1024)"
          }), " and the file descriptor blocks, the kernel puts the entire process to sleep. T2 never runs even if it has work to do. Solution: use non-blocking I/O or check ", (0,jsx_runtime.jsx)(_components.code, {
            children: "select()"
          }), " before reading."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Timer signal race"
          }), ": If the thread library uses SIGVTALRM for preemption, a signal arriving during a library function can corrupt the thread table unless signals are masked during critical sections."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Stack exhaustion"
          }), ": With thousands of threads, total stack memory can exhaust the address space. Each thread's stack is allocated from the process heap — no swap or kernel stack to fall back on."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Non-preemptive library"
          }), ": If the library is cooperative (yield-based), one thread in an infinite loop halts all others — no preemption mechanism exists."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kernel-level-threads",
      children: "Kernel-Level Threads"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A restaurant with individual waitstaff."
        }), " Each waiter (kernel thread) is separately employed and managed by the manager (kernel). If one waiter takes a long time at a table, the others keep serving. The manager can assign waiters to different sections (CPU cores). Each waiter has their own notepad and apron (stack + registers) but shares the restaurant's kitchen (process resources)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Waitstaff can serve different tables in parallel (parallelism) and each waiter works independently — if one is slow, it doesn't affect others (independent blocking)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "definition-2",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kernel-level threads are managed directly by the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "operating system kernel"
      }), ". Each thread is a separately schedulable entity. The kernel maintains a thread control block (TCB) in kernel space for every thread."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "how-it-works-1",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The kernel maintains a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "thread table"
        }), " in kernel space (one entry per thread system-wide)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each thread has its own ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "kernel stack"
        }), " for handling system calls"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Thread creation, scheduling, and synchronization are done via ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "system calls"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The kernel scheduler treats each thread as an independent schedulable entity"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["On Linux, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clone()"
        }), " is the system call that creates kernel threads (with CLONE_VM flag to share address space)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-of-kernel-level-thread-creation",
      children: "Numbered Steps of Kernel-Level Thread Creation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Application calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pthread_create()"
        }), " (user space)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The pthread library calls the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clone()"
        }), " system call (or equivalent on other OS)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernel allocates a new thread ID (TID) system-wide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernel allocates a thread control block (TCB) in kernel memory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernel allocates a kernel stack (~16 KB) for handling syscalls and exceptions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernel sets up the user-space stack and instruction pointer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernel adds the thread to the scheduler's ready queue"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "clone()"
        }), " returns to user space with the new thread's TID"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The user-space thread continues from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clone()"
        }), " return in parallel"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "kernel-level-thread-context-switch-numbered-steps",
      children: "Kernel-Level Thread Context Switch (Numbered Steps)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Timer interrupt fires → CPU enters kernel mode (mode switch)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernel saves the current thread's registers onto its kernel stack"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernel saves the kernel stack pointer into the TCB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernel calls the scheduler to pick the next thread"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scheduler selects the next thread (may be from a different process)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If switching processes: switch page table (CR3 register) — TLB flush needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernel loads the next thread's kernel stack pointer from its TCB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernel restores the next thread's saved registers from its kernel stack"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU returns to user mode (mode switch) — thread resumes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION KernelThreadCreate(start_func, arg):\n    tid = ALLOCATE_THREAD_ID()\n    tcb = ALLOCATE_KERNEL_TCB()\n    tcb.tid = tid\n    tcb.pid = CURRENT_PROCESS.pid\n    tcb.user_stack = ALLOCATE_USER_STACK(USER_STACK_SIZE)\n    tcb.kernel_stack = ALLOCATE_KERNEL_STACK(KERNEL_STACK_SIZE)\n    tcb.pc = start_func\n    tcb.registers = INITIAL_REGISTER_STATE\n    tcb.page_table = CURRENT_PROCESS.page_table  // shared!\n    tcb.state = READY\n    SCHEDULER.ENQUEUE(tcb)\n    return tid\n\nFUNCTION KernelThreadSwitch():\n    SAVE_REGISTERS_TO_KERNEL_STACK(CURRENT_THREAD)\n    SAVE_KERNEL_SP_TO_TCB(CURRENT_THREAD)\n    CURRENT_THREAD.state = READY\n    SCHEDULER.ENQUEUE(CURRENT_THREAD)\n    next_thread = SCHEDULER.DEQUEUE()\n    IF next_thread.pid != CURRENT_THREAD.pid:\n        SWITCH_PAGE_TABLE(next_thread.page_table)  // expensive!\n    LOAD_KERNEL_SP_FROM_TCB(next_thread)\n    RESTORE_REGISTERS_FROM_KERNEL_STACK(next_thread)\n    RETURN_TO_USER_MODE()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-kernel-level-context-switch",
      children: "Step-by-Step Dry Run: Kernel-Level Context Switch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two kernel threads K1 and K2 in the same process on a single-core CPU."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Running"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ready Queue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K1 is running user code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t=50"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timer interrupt fires → CPU enters kernel mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t=50"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU pushes registers (eax, ebx, ecx, edx, esi, edi, ebp, esp, eip, eflags) onto K1's kernel stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t=51"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel saves kernel_stack_pointer to K1's TCB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t=51"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduler called → selects K2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t=51"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K1.state = READY, enqueue K1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K2, K1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t=52"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K2.state = RUNNING, dequeue K2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t=52"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load K2's kernel_stack_pointer from K2's TCB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t=52"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop registers from K2's kernel stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t=53"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "iret"
            }), " instruction → return to user mode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t=53"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K2 resumes execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t=53"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key observation:"
      }), " Total context switch ≈ 50–100 μs. Includes two mode switches (user→kernel→user), two stack operations, and scheduler dispatch. The TLB flush is avoided here because K1 and K2 share the same address space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-kernel-threads-via-stdthread",
      children: "C++ Implementation (kernel threads via std::thread)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <thread>\n#include <mutex>\n#include <vector>\n\nstd::mutex print_mutex;\n\nvoid worker(int id, int iterations) {\n    for (int i = 0; i < iterations; ++i) {\n        std::lock_guard<std::mutex> lock(print_mutex);\n        std::cout << \"Kernel thread \" << id\n                  << \" (system thread: \" << std::this_thread::get_id()\n                  << \") iteration \" << i << std::endl;\n    }\n}\n\nint main() {\n    std::vector<std::thread> threads;\n    const int NUM_THREADS = 4;\n\n    for (int i = 0; i < NUM_THREADS; ++i) {\n        threads.emplace_back(worker, i, 3);\n    }\n\n    std::cout << \"Main: \" << NUM_THREADS\n              << \" kernel threads created. They may run in parallel.\"\n              << std::endl;\n\n    for (auto& t : threads) {\n        t.join();\n    }\n\n    std::cout << \"Main: All threads completed.\" << std::endl;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-threading--actually-kernel-backed",
      children: "Python Implementation (threading — actually kernel-backed)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\nimport os\n\ndef worker(id, iterations):\n    for i in range(iterations):\n        print(f\"Kernel thread {id} (PID: {os.getpid()}, TID: {threading.get_ident()}) iteration {i}\")\n\nthreads = []\nNUM_THREADS = 4\n\nfor i in range(NUM_THREADS):\n    t = threading.Thread(target=worker, args=(i, 3))\n    threads.append(t)\n    t.start()\n\nprint(f\"Main: {NUM_THREADS} threads started (process PID: {os.getpid()})\")\n\nfor t in threads:\n    t.join()\n\nprint(\"Main: All threads done.\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel thread creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System call, allocate TCB + stacks — ~100× slower than user-level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel context switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save/restore registers + mode switch (user↔kernel) — ~50–100 μs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduler dispatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) or O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on scheduler (O(1) in Linux CFS, O(n) in older schedulers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Page table switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Single CR3 register write, but ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "TLB flush invalidates all cached translations"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread join (kernel)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait on kernel-managed futex/event object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blocking I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only the calling thread blocks — other threads in process continue"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiprocessor parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full — each kernel thread can run on a different CPU core"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages-of-kernel-level-threads",
      children: "Advantages of Kernel-Level Threads"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "True parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel schedules each thread independently — can run on multiple cores simultaneously"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Independent blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One thread blocking on I/O doesn't affect others in the same process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Preemption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel can preempt any thread at any time via timer interrupt — no cooperative yielding needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "System call safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each thread has its own kernel stack — simultaneous system calls from different threads are safe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Priority scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel can prioritize threads by type (UI thread gets higher priority than background computation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signal handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel can deliver signals to specific threads (synchronous signals go to the offending thread)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "disadvantages-of-kernel-level-threads",
      children: "Disadvantages of Kernel-Level Threads"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slow creation and switching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires system call (mode switch) — 50–100 μs vs 5–10 μs for user-level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Higher memory overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each thread needs a kernel stack (~16 KB) and a TCB in non-swappable kernel memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OS-specific API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pthreads (POSIX), Windows Thread API, Solaris threads — not portable at system-call level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creating 10,000 kernel threads consumes significant kernel memory and scheduler overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context switch penalty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full register save/restore + mode switch = ~10× slower than user-level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Portability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel threading models differ between OSes (Linux one-to-one, older Solaris many-to-many)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Thread limits"
          }), ": Linux limits threads per user (", (0,jsx_runtime.jsx)(_components.code, {
            children: "/proc/sys/kernel/threads-max"
          }), ", typically ~100,000) and per process (", (0,jsx_runtime.jsx)(_components.code, {
            children: "/proc/sys/vm/max_map_count"
          }), "). Exceeding these causes ", (0,jsx_runtime.jsx)(_components.code, {
            children: "EAGAIN"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Stack overflow"
          }), ": Kernel thread stack overflow writes into the guard page → SIGSEGV → whole process crashes. The kernel can detect this if guard pages are enabled (", (0,jsx_runtime.jsx)(_components.code, {
            children: "/proc/sys/vm/mmap_min_addr"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Priority inversion"
          }), ": A high-priority thread waits for a lock held by a low-priority thread that's been preempted by medium-priority threads. Linux addresses this with priority inheritance (RT mutexes)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Thread explosion"
          }), ": Creating too many kernel threads causes scheduler thrashing — the kernel spends more time switching between threads than doing useful work."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "fork() in threaded programs"
          }), ": Linux's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fork()"
          }), " duplicates only the calling thread in the child process. If the child doesn't call ", (0,jsx_runtime.jsx)(_components.code, {
            children: "exec()"
          }), " immediately, the other threads' states are lost — mutexes they held become permanently locked."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "setuid() in threads"
          }), ": When one thread calls ", (0,jsx_runtime.jsx)(_components.code, {
            children: "setuid()"
          }), ", should all threads in the process change their UID? POSIX says yes, but signal delivery semantics become ambiguous."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-level-vs-kernel-level-threads--full-comparison",
      children: "User-Level vs Kernel-Level Threads — Full Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "User-Level Threads"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kernel-Level Threads"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Managed by"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread library in user space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS kernel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Creation speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5–10 μs (no system call)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50–200 μs (clone syscall)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Context switch speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5–10 μs (register save/restore only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50–100 μs (mode switch + register save/restore)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallelism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (kernel sees one process)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full (kernel schedules each thread independently)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blocking I/O"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocks ALL threads in the process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocks only the calling thread"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (TCB + user stack only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (TCB + kernel stack + user stack)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel stack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~16 KB per thread (non-swappable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OS awareness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel is completely unaware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel sees and manages each thread"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scheduling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application-defined (cooperative or custom preemptive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS-defined (Round Robin, CFS, priority-based)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-core usage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot utilize multiple cores"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full multi-core utilization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thread count limit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can create thousands (limited by heap memory)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited by kernel memory and process limits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "System call overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System call blocks entire process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System call affects only the calling thread"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Portability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works on any OS with process support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS-specific APIs (pthreads is portable library interface)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Debugging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder — debugger sees only the process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easier — OS debugger sees individual threads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Preemption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires timer signal (SIGVTALRM) or cooperative yield"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full kernel preemption via timer interrupt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority inheritance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not possible (kernel doesn't know about thread states)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible (kernel can boost priority of lock holder)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Examples"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GNU Pth, early Solaris threads, fibers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux NPTL, Windows threads, Solaris 9+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fork in threaded program"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicates entire user-level thread state"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fork()"
            }), " duplicates only the calling kernel thread"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multithreading-models",
      children: "Multithreading Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A company's project management structure."
        }), " Different ways to organize teams and managers:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Many-to-One"
          }), ": Many employees (threads) report to one manager (kernel thread). If the manager is in a meeting, nobody can work. Simple but inefficient."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "One-to-One"
          }), ": Each employee has their own manager. Expensive (many managers) but everyone can work independently."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Many-to-Many"
          }), ": Employees are grouped into teams, each team has a manager. Fewer managers than employees, but managers can be dynamically reassigned."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "overview-of-models",
      children: "Overview of Models"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "User Threads : Kernel Threads"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Parallelism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Blocking"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Used In"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Many-to-One"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N : 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One blocks all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (user library only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solaris Green Threads, GNU Pth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "One-to-One"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N : N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (kernel TCB per thread)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux NPTL, Windows, Solaris 9+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Many-to-Many"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N : M (M <= N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library-controlled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (two schedulers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solaris 8, IRIX"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Two-Level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N : M + 1:1 optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full for bound threads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solaris 8-9 (hybrid)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "many-to-one-model",
      children: "Many-to-One Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Many user-level threads (N) are mapped to a single kernel thread (1)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User space:    T1    T2    T3    T4    T5\n                 \\    |    /\nKernel space:       K1          (single kernel entity)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A self-service checkout line. Multiple customers (threads) share one machine (kernel thread). If one customer has a price check (blocks), the entire line stops. Quick and cheap to add customers, but terrible throughput."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "numbered-steps",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thread library creates N user-level threads"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All N threads are mapped to the single kernel thread"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The kernel sees one process with one PC — it cannot distinguish threads"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The thread library handles scheduling in user space"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When any thread makes a blocking system call, the kernel blocks the entire process (all threads)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The thread library can use non-blocking I/O to mitigate blocking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION ManyToOneCreate(T count):\n    kernel_thread = KERNEL_CREATE_THREAD()\n    FOR i = 1 TO count:\n        user_tcb = ALLOC_USER_TCB()\n        user_tcb.map_to = kernel_thread\n        user_lib.ready_queue.ENQUEUE(user_tcb)\n    RETURN\n\nFUNCTION ManyToOneSchedule():\n    next = user_lib.ready_queue.DEQUEUE()\n    user_lib.SWITCH_TO(next)\n    // no kernel involvement — pure user space\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "dry-run-many-to-one-blocking-behavior",
      children: "Dry Run: Many-to-One Blocking Behavior"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two user threads T1 (doing file read) and T2 (computation). Single kernel thread K1."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "User Running"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kernel Running"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1 runs, calls read(fd, buf, 1024)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library sees T1 will block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library switches to T2 (user space)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1→T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2 runs computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Computing...\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2 eventually calls read() — library has no choice but to use kernel read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel blocks K1"
            }), " (single kernel thread) → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T1 and T2 both block"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "blocked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "blocked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "No progress possible"
            }), " until the file read completes"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "blocked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "blocked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "This is the fundamental problem:"
      }), " even though T1 was ready, it got blocked because T2 made a blocking call. In one-to-one, T2 would block alone and T1 would continue."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "c-simulation",
      children: "C++ Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <thread>\n#include <atomic>\n\n// Simulates many-to-one model — all threads share a single worker thread\nclass ManyToOnePool {\n    std::thread worker;\n    std::atomic<bool> running{false};\npublic:\n    void start() {\n        running = true;\n        worker = std::thread([this] {\n            while (running) {\n                std::cout << \"[Kernel thread] Running user tasks (one at a time)\" << std::endl;\n                std::this_thread::sleep_for(std::chrono::milliseconds(500));\n            }\n        });\n    }\n    void stop() { running = false; if (worker.joinable()) worker.join(); }\n};\n\nint main() {\n    ManyToOnePool pool;\n    pool.start();\n    std::cout << \"Many-to-One: All user threads map to one kernel thread\" << std::endl;\n    std::this_thread::sleep_for(std::chrono::seconds(2));\n    pool.stop();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "python-implementation",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\nimport time\n\n# Simulating many-to-one: Python threads with GIL act similar to many-to-one\n# (only one thread runs Python bytecode at a time due to GIL)\nshared_resource = 0\n\ndef user_thread(name):\n    global shared_resource\n    for i in range(5):\n        shared_resource += 1\n        print(f\"User thread {name}: iteration {i}, shared={shared_resource}\")\n        time.sleep(0.01)  # yield\n\nthreads = [threading.Thread(target=user_thread, args=(chr(65+i),)) for i in range(3)]\nfor t in threads: t.start()\nfor t in threads: t.join()\nprint(f\"Final shared: {shared_resource}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just alloc user TCB — no kernel involvement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pure user-space register save/restore"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blocking I/O impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocks N threads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single kernel thread means any block stops all"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One kernel thread = one CPU core"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory per thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~8 KB stack + TCB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No kernel stack per thread"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
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
            children: "Very fast thread creation and switching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No true parallelism on multi-core"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal memory overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocking system call blocks ALL threads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OS-independent — works anywhere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page fault blocks entire process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom scheduling policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot preempt threads (unless SIGVTALRM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can create thousands of threads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread library complexity increases"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cooperative vs preemptive scheduling"
          }), ": If threads are cooperative (yield-based), one thread in an infinite loop blocks everyone — even if other threads have urgent work."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Non-blocking I/O requirement"
          }), ": To mitigate the \"block all\" problem, the thread library must wrap blocking syscalls with non-blocking variants or use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "select()"
          }), "/", (0,jsx_runtime.jsx)(_components.code, {
            children: "epoll()"
          }), " to check availability first."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "GIL interaction"
          }), ": Python's Global Interpreter Lock behaves similarly to many-to-one for CPU-bound tasks — only one thread runs Python bytecode at a time, but I/O operations release the GIL."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "one-to-one-model",
      children: "One-to-One Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each user-level thread maps to a separate kernel-level thread."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User space:    T1    T2    T3    T4\n               |     |     |     |\nKernel space:  K1    K2    K3    K4\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Each employee has their own manager. If an employee makes a mistake (blocks), their manager handles it — other employees continue working. Hire 10 people, hire 10 managers. Expensive, but independent."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "numbered-steps-1",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["User thread calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pthread_create()"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::thread()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The library calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clone()"
        }), " (Linux) or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CreateThread()"
        }), " (Windows)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernel allocates a unique TCB and kernel stack"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernel creates the thread as a separate schedulable entity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernel may schedule the thread on a different CPU core"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When the thread makes a blocking system call, only that kernel thread blocks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Other threads continue executing independently"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION OneToOneCreate(user_func, arg):\n    tcb = KERNEL_CREATE_THREAD(user_func, arg)\n    // tcb has its own kernel stack, user stack, TID\n    SCHEDULER.ENQUEUE(tcb)\n    RETURN tcb.tid\n\nFUNCTION OneToOneBlock(tcb):\n    // Only THIS thread blocks\n    tcb.state = BLOCKED\n    SCHEDULER.SWITCH()  // picks next ready thread\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "dry-run-one-to-one-blocking-behavior",
      children: "Dry Run: One-to-One Blocking Behavior"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two kernel threads K1 (file read) and K2 (computation). Dual-core CPU."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Core 0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Core 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K1 starts file read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["K1 calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "read()"
            }), " → syscall → K1 blocks on I/O"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel moves K1 to wait queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel picks another thread (none available) for core 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K2 runs computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Computing...\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File read completes → K1 moves to ready queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel schedules K1 on core 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K1 processes read data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Got data!\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key:"
      }), " K2 was never blocked by K1's I/O. Both threads made independent progress. With many-to-one, step 2 would have blocked everything."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "c-implementation",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <thread>\n#include <vector>\n#include <numeric>\n\nvoid compute_partial_sum(const std::vector<int>& data, int start, int end, long long& result) {\n    result = std::accumulate(data.begin() + start, data.begin() + end, 0LL);\n    std::cout << \"Thread \" << std::this_thread::get_id()\n              << \" computed sum[\" << start << \":\" << end << \"] = \"\n              << result << std::endl;\n}\n\nint main() {\n    std::vector<int> data(1000000);\n    for (int i = 0; i < 1000000; ++i) data[i] = i;\n\n    const int NUM_THREADS = 4;\n    std::vector<std::thread> threads;\n    std::vector<long long> partials(NUM_THREADS, 0);\n    int chunk = 1000000 / NUM_THREADS;\n\n    for (int i = 0; i < NUM_THREADS; ++i) {\n        int start = i * chunk;\n        int end = (i == NUM_THREADS - 1) ? 1000000 : start + chunk;\n        threads.emplace_back(compute_partial_sum, std::cref(data), start, end, std::ref(partials[i]));\n    }\n\n    for (auto& t : threads) t.join();\n\n    long long total = std::accumulate(partials.begin(), partials.end(), 0LL);\n    std::cout << \"Total sum: \" << total << \" (expected: \" << 499999500000LL << \")\" << std::endl;\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "python-implementation-1",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\nimport time\n\ndef worker(name, duration):\n    print(f\"Thread {name}: Starting work for {duration}s\")\n    time.sleep(duration)  # blocks only this thread\n    print(f\"Thread {name}: Done\")\n\nthreads = [\n    threading.Thread(target=worker, args=(\"A\", 2)),\n    threading.Thread(target=worker, args=(\"B\", 1)),\n]\n\nstart = time.time()\nfor t in threads: t.start()\nfor t in threads: t.join()\nelapsed = time.time() - start\nprint(f\"Total time: {elapsed:.2f}s (would be ~3s with many-to-one, {elapsed:.2f}s with one-to-one on multi-core)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System call, allocate TCB + 2 stacks — ~100× slower than many-to-one"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mode switch + registers — ~50–100 μs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory per thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~8 MB user stack + ~16 KB kernel stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plus kernel TCB in non-swappable memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N kernel threads can run on N cores simultaneously"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blocking impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only the blocked thread is affected"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "advantages--disadvantages-1",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "True parallelism on multi-core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher creation overhead (system call)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blocking one thread doesn't affect others"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More memory per thread"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel handles scheduling and preemption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread count limited by kernel resources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Straightforward implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context switch is slower (mode switch)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Priority inheritance and RT scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creating thousands of threads impacts performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works well with synchronous I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not as scalable as many-to-many for huge thread counts"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Thread explosion"
          }), ": Creating 10,000 threads triggers all 10,000 system calls. Each thread needs ~8 MB virtual address space for its stack = 80 GB virtual memory. The kernel's scheduler also needs to manage 10,000 entities — O(10,000) scheduling overhead."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Priority inversion with real-time threads"
          }), ": A high-priority RT thread waiting for a lock held by a low-priority thread. Medium-priority threads preempt the low-priority holder. Linux addresses this with priority inheritance (", (0,jsx_runtime.jsx)(_components.code, {
            children: "PTHREAD_PRIO_INHERIT"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hard thread limit"
          }), ": Linux enforces ", (0,jsx_runtime.jsx)(_components.code, {
            children: "vm.max_map_count"
          }), " (default 65530) which limits the number of memory-mapped regions including thread stacks. Creating more threads than this limit causes create failures."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "many-to-many-model-two-level-model",
      children: "Many-to-Many Model (Two-Level Model)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multiple user-level threads multiplex onto a smaller or equal number of kernel threads."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User space:   T1   T2   T3   T4   T5   T6\n                \\   |   /     \\   |   /\n                LWP1         LWP2       LWP3\nKernel space:    K1           K2         K3\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A consulting firm with senior partners (kernel threads) and junior consultants (user threads). Multiple juniors report to each senior. If one senior is busy in a meeting, other seniors keep working. The juniors under the busy senior are blocked, but juniors under other seniors continue. Efficient — fewer managers than employees, but each manager handles their own team independently."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "numbered-steps-2",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The application creates N user-level threads"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The thread library creates M kernel threads (LWPs — LightWeight Processes), where M ≤ N"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library maps user threads to available LWPs dynamically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When a user thread is ready, the library assigns it to an idle LWP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a user thread blocks, the LWP enters the kernel — but other LWPs continue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library can also \"bind\" critical threads to dedicated LWPs (one-to-one for priority threads)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode-5",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION ManyToManyCreate(user_threads_count, kernel_threads_count):\n    FOR i = 1 TO kernel_threads_count:\n        lwp[i] = KERNEL_CREATE_THREAD()\n    FOR i = 1 TO user_threads_count:\n        ut[i] = ALLOC_USER_TCB()\n        ut[i].assigned_lwp = NULL  // not yet bound\n    RETURN\n\nFUNCTION ManyToManySchedule():\n    FOR each ready user thread u:\n        find idle LWP l\n        IF found:\n            u.assigned_lwp = l\n            SWITCH_LWP(l, u)  // context switch on kernel thread l to user thread u\n        ELSE:\n            u stays in ready queue\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "dry-run-many-to-many-scheduling",
      children: "Dry Run: Many-to-Many Scheduling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3 kernel threads (K1, K2, K3) and 6 user threads (T1-T6). All 6 user threads are compute-bound."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "K1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "K2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "K3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Blocked"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T4 ready, K3 idle (T3 blocked on I/O)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T5 ready, K2 idle (T2 blocked)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T3,T2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T3 unblocks → library finds all LWPs busy → T3 queued"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1 completes → library maps T3 to K1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T6 ready, no idle LWPs → T6 queued"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key:"
      }), " 3 kernel threads serve 6 user threads. Blocking doesn't stop all work — only the threads on the blocking LWP wait."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "c-simulation-many-to-many-thread-pool",
      children: "C++ Simulation (Many-to-Many Thread Pool)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <thread>\n#include <vector>\n#include <queue>\n#include <mutex>\n#include <condition_variable>\n#include <functional>\n#include <atomic>\n\nclass ManyToManyPool {\n    std::vector<std::thread> workers;\n    std::queue<std::function<void()>> tasks;\n    std::mutex mtx;\n    std::condition_variable cv;\n    std::atomic<bool> stop{false};\n\npublic:\n    ManyToManyPool(int num_lwp) {\n        for (int i = 0; i < num_lwp; ++i) {\n            workers.emplace_back([this] {\n                while (true) {\n                    std::function<void()> task;\n                    {\n                        std::unique_lock<std::mutex> lock(mtx);\n                        cv.wait(lock, [this] { return stop || !tasks.empty(); });\n                        if (stop && tasks.empty()) return;\n                        task = std::move(tasks.front());\n                        tasks.pop();\n                    }\n                    task();\n                }\n            });\n        }\n    }\n\n    void enqueue(std::function<void()> task) {\n        {\n            std::lock_guard<std::mutex> lock(mtx);\n            tasks.push(std::move(task));\n        }\n        cv.notify_one();\n    }\n\n    ~ManyToManyPool() {\n        stop = true;\n        cv.notify_all();\n        for (auto& w : workers) w.join();\n    }\n};\n\nint main() {\n    ManyToManyPool pool(3);  // 3 kernel threads (LWPs)\n\n    for (int i = 0; i < 6; ++i) {\n        pool.enqueue([i] {\n            std::cout << \"User thread \" << i\n                      << \" on LWP thread \" << std::this_thread::get_id()\n                      << std::endl;\n            std::this_thread::sleep_for(std::chrono::milliseconds(100));\n        });\n    }\n\n    std::this_thread::sleep_for(std::chrono::seconds(1));\n    std::cout << \"Many-to-Many: 3 LWPs handled 6 user threads\" << std::endl;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "python-simulation",
      children: "Python Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\nimport time\nimport queue\n\nclass ManyToManyScheduler:\n    def __init__(self, lwp_count):\n        self.task_queue = queue.Queue()\n        self.lwp_count = lwp_count\n        self.lwps = []\n\n    def _lwp_worker(self, lwp_id):\n        while True:\n            try:\n                user_thread_task = self.task_queue.get(timeout=1)\n                print(f\"LWP-{lwp_id} executing task on {threading.current_thread().name}\")\n                user_thread_task()\n                self.task_queue.task_done()\n            except queue.Empty:\n                break\n\n    def start(self):\n        for i in range(self.lwp_count):\n            t = threading.Thread(target=self._lwp_worker, args=(i,), name=f\"LWP-{i}\")\n            t.start()\n            self.lwps.append(t)\n\n    def enqueue(self, task):\n        self.task_queue.put(task)\n\n    def join(self):\n        for t in self.lwps: t.join()\n\nscheduler = ManyToManyScheduler(lwp_count=3)\nscheduler.start()\n\nfor i in range(6):\n    scheduler.enqueue(lambda i=i: print(f\"  User-thread {i} running\"))\n\nscheduler.join()\nprint(\"Many-to-Many: Complete\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "complexity-analysis-5",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread creation (user)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-level TCB allocation — same as many-to-one"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread creation (LWP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M system calls to create kernel threads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N/M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User scheduler maps N threads to M LWPs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blocking impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1/M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only threads on the blocking LWP are affected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Between many-to-one and one-to-one"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M kernel stacks + N user stacks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two schedulers (user + kernel) must coordinate"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "advantages--disadvantages-2",
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
            children: "Multiplexes many user threads onto few kernel threads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex to implement — two schedulers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "More parallelism than many-to-one"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can still have convoys (threads on same LWP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Less kernel overhead than one-to-one"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel scheduler doesn't know user thread priorities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can bind critical threads to dedicated LWPs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only a few OSes implement it (Solaris, IRIX)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient for apps with many threads but limited parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User library must handle all blocking scenarios"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "edge-cases-5",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Convoy problem"
          }), ": If N user threads are mapped to M LWPs and one LWP has a long-running user thread, other user threads waiting for that LWP are delayed — even if other LWPs are idle."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Starvation"
          }), ": The user-level scheduler must ensure fairness. A user thread that always gets selected by the user scheduler can monopolize an LWP."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Binding critical threads"
          }), ": Some implementations allow \"bound\" threads (one user thread → one dedicated kernel thread). This complicates the scheduling model — bound and unbound threads coexist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Upcall complexity"
          }), ": When a kernel thread blocks, the user-level scheduler needs an \"upcall\" from the kernel to reassign the blocking thread's user threads to other LWPs. This requires kernel support that most modern OSes don't provide."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "thread-libraries",
      children: "Thread Libraries"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A toolbox for building desks."
        }), " You could build a desk from raw lumber (raw kernel syscalls), or you could use a toolkit with pre-cut pieces and instructions (thread library). The toolkit hides the complexity of measurements and cuts — you just assemble. Different toolkits exist for different purposes: pthreads is the universal handyman's toolkit, C++ std::thread is the modern power-tool kit, Python threading is the \"quick assembly\" kit."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A thread library provides an API for creating, managing, and synchronizing threads. Three main approaches:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Library entirely in user space"
        }), " — no kernel support (GNU Pth)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Library backed by kernel threads"
        }), " — each library thread maps to a kernel thread (pthreads with NPTL)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hybrid"
        }), " — library manages user threads on top of kernel threads (older Solaris threads)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "posix-threads-pthreads",
      children: "POSIX Threads (pthreads)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The industry-standard threading API on Unix-like systems. IEEE POSIX 1003.1c defines the interface."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Functions:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "pthread_create()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create a new thread"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_join()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait for a thread to exit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_exit()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate the calling thread"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_self()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Get the calling thread's ID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_detach()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Make thread unjoinable (resources freed on exit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_cancel()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request thread cancellation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_mutex_lock()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acquire a mutex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_mutex_unlock()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release a mutex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_cond_wait()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait on a condition variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_cond_signal()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signal one waiting thread"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps: Creating Threads with pthreads"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Declare a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pthread_t"
        }), " variable to hold the thread ID"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define the thread function: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "void* thread_func(void* arg)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pthread_create(&tid, NULL, thread_func, arg)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The function runs in a new kernel thread"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pthread_join(tid, NULL)"
        }), " to wait for completion"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode for pthread_create:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION pthread_create(tid, attr, start_func, arg):\n    #if NPTL (one-to-one model):\n        clone_flags = CLONE_VM | CLONE_FILES | CLONE_SIGHAND | CLONE_THREAD\n        child_tid = clone(start_func, new_stack, clone_flags, arg)\n        *tid = child_tid\n        return 0 if success else error_code\n    #else (user-level):\n        allocate_user_tcb()\n        assign_to_next_available_lwp()\n        return 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run: Thread Join with pthreads"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T1 State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T2 State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Main State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Main creates T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Main creates T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Main calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_join(T1)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BLOCKED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1 finishes → T1 TERMINATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TERMINATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BLOCKED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread join unblocks main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TERMINATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Main calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_join(T2)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TERMINATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BLOCKED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2 finishes → main unblocked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TERMINATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TERMINATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation (pthreads C API)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <pthread.h>\n#include <stdlib.h>\n\n#define NUM_THREADS 5\n\ntypedef struct {\n    int id;\n    const char* message;\n} thread_data_t;\n\nvoid* thread_function(void* arg) {\n    thread_data_t* data = (thread_data_t*)arg;\n    printf(\"Thread %d: %s\\n\", data->id, data->message);\n    return NULL;\n}\n\nint main() {\n    pthread_t threads[NUM_THREADS];\n    thread_data_t data[NUM_THREADS];\n\n    for (int i = 0; i < NUM_THREADS; i++) {\n        data[i].id = i;\n        data[i].message = \"Hello from pthread!\";\n        int rc = pthread_create(&threads[i], NULL, thread_function, &data[i]);\n        if (rc) {\n            fprintf(stderr, \"Error creating thread %d: %d\\n\", i, rc);\n            exit(1);\n        }\n    }\n\n    for (int i = 0; i < NUM_THREADS; i++) {\n        pthread_join(threads[i], NULL);\n    }\n\n    printf(\"Main: All %d threads completed.\\n\", NUM_THREADS);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Compile with: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gcc program.c -lpthread"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation (via ctypes for demonstration)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\nimport time\n\ndef thread_function(id, message):\n    print(f\"Thread {id}: {message}\")\n\nNUM_THREADS = 5\nthreads = []\n\nfor i in range(NUM_THREADS):\n    t = threading.Thread(target=thread_function, args=(i, \"Hello from threading!\"))\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()\n\nprint(f\"Main: All {NUM_THREADS} threads completed.\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-standard-threads-stdthread",
      children: "C++ Standard Threads (std::thread)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern C++ thread support since C++11. Wraps pthreads (or Windows threads) with a type-safe, RAII interface."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Functions:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "std::thread(func, args...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create thread that runs func(args...)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "t.join()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait for thread t to finish"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "t.detach()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Let thread t run independently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::this_thread::get_id()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Get current thread's ID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::this_thread::sleep_for(dur)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sleep current thread"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::mutex"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutual exclusion lock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::lock_guard<mutex>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAII mutex wrapper"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::condition_variable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread notification"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Include ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<thread>"
        }), " header"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a callable (function, lambda, or functor)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::thread t(func, args...)"
        }), " — thread starts immediately"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "t.join()"
        }), " to wait for completion, or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "t.detach()"
        }), " to release"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Always join or detach before thread object destructor runs (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::terminate()"
        }), " is called)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode for std::thread constructor:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION std::thread::thread(func, args...):\n    // internally calls pthread_create or CreateThread\n    internal_tid = SYSTEM_CREATE_THREAD(func, args)\n    this.native_handle = internal_tid\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation (std::thread with lambda)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <thread>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<std::thread> threads;\n    const int COUNT = 5;\n\n    for (int i = 0; i < COUNT; ++i) {\n        threads.emplace_back([i] {\n            std::cout << \"Lambda thread \" << i\n                      << \" on core? \" << std::this_thread::get_id()\n                      << std::endl;\n        });\n    }\n\n    std::for_each(threads.begin(), threads.end(), [](std::thread& t) {\n        t.join();\n    });\n\n    std::cout << \"Main: All \" << COUNT << \" lambda threads done.\" << std::endl;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis for std::thread"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "std::thread construction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + syscall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wraps pthread_create/CreateThread"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "std:🧵:join()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block until futex/event signals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "std:🧵:detach()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark thread as detached in TCB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread destructor with no join/detach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "std::terminate()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safety: prevents silent thread leak"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages"
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
            children: "Type-safe and portable (POSIX + Windows)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Somewhat verbose for simple tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAII with lock_guard for exception safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in thread pool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda support makes inline threading natural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread destruction rules can surprise beginners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Part of the standard — no external dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in async/await pattern"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Unjoined thread"
          }), ": If a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::thread"
          }), " is destroyed without calling ", (0,jsx_runtime.jsx)(_components.code, {
            children: "join()"
          }), " or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "detach()"
          }), ", the program calls ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::terminate()"
          }), " and crashes. Always join or detach."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Exception in thread"
          }), ": Exceptions thrown in a thread function cannot be caught in the creating thread. The exception causes ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::terminate()"
          }), ". Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::exception_ptr"
          }), " or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::future"
          }), " to propagate exceptions."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Move-only threads"
          }), ": ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::thread"
          }), " is move-only (not copyable). You must use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::move()"
          }), " or emplace to put threads into containers."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-threading-library",
      children: "Python Threading Library"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Python's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "threading"
      }), " module provides thread support with a higher-level interface. Python threads are backed by OS threads (one-to-one), but the Global Interpreter Lock (GIL) serializes Python bytecode execution, making them behave like many-to-one for CPU-bound tasks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Functions:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "threading.Thread(target=func, args=())"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create a thread object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "t.start()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start the thread"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "t.join(timeout=None)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait for thread to finish"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "threading.current_thread()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Get current thread object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "threading.Lock()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutual exclusion lock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "threading.RLock()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reentrant lock (same thread can acquire multiple times)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "threading.Semaphore(n)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semaphore with initial value n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "threading.Event()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple signaling between threads"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Import the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "threading"
        }), " module"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define a function or callable class"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Thread"
        }), " object: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "t = threading.Thread(target=func, args=(arg,))"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "t.start()"
        }), " — thread begins execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optionally call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "t.join()"
        }), " to wait for completion"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\nimport time\n\ncounter = 0\ncounter_lock = threading.Lock()\n\ndef safe_increment(thread_id, iterations):\n    global counter\n    for i in range(iterations):\n        with counter_lock:\n            counter += 1\n    print(f\"Thread {thread_id}: done, counter = {counter}\")\n\nthreads = []\nfor i in range(5):\n    t = threading.Thread(target=safe_increment, args=(i, 10000))\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()\n\nprint(f\"Final counter: {counter} (expected: 50000)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + syscall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backed by OS thread creation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GIL acquisition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "But GIL contention hurts CPU-bound performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lock acquire/release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast path via Python's C implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait on kernel event"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages"
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
            children: "Very easy to use — simple API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GIL prevents true parallelism for CPU-bound Python code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Thread-local storage via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "threading.local()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I/O-bound tasks benefit despite GIL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in synchronization primitives (Lock, RLock, Semaphore, Event, Condition)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread lifecycle errors can be silent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Daemon threads for background tasks"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No built-in thread pool (use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "concurrent.futures"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "GIL and CPU-bound work"
          }), ": Python threads cannot execute pure Python bytecode in parallel. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "multiprocessing"
          }), " for CPU-bound tasks or release the GIL via C extensions (NumPy, Cython)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "I/O-bound is fine"
          }), ": The GIL is released during I/O operations (", (0,jsx_runtime.jsx)(_components.code, {
            children: "read()"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "write()"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sleep()"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "select()"
          }), "). Python threading excels for I/O-bound workloads."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Daemon threads"
          }), ": A ", (0,jsx_runtime.jsx)(_components.code, {
            children: "daemon=True"
          }), " thread is killed abruptly when the main thread exits — resources may be left in an inconsistent state."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Deadlock with multiple locks"
          }), ": Acquiring locks in different orders across threads causes deadlock. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "with lock:"
          }), " and acquire locks in a consistent global order."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "thread-pools",
      children: "Thread Pools"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-5",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A taxi fleet at an airport."
        }), " Instead of building a new car for every passenger (create thread per task), the taxi company keeps a fleet of 10 cars ready at the stand (thread pool). Passengers arrive and take the next available taxi. If all taxis are busy, passengers wait. When a taxi returns from a trip, it goes to the back of the queue — ready for the next passenger. No time wasted building cars."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "definition-3",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "thread pool"
      }), " creates a fixed number of threads at startup. These threads sit idle in a pool, waiting for work. When a task arrives, one idle thread is assigned. When the task completes, the thread returns to the pool."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-thread-pool-operation",
      children: "Numbered Steps: Thread Pool Operation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialization"
        }), ": Create N worker threads at program startup"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each worker thread enters a loop, waiting on a condition variable"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task submission"
        }), ": Main thread enqueues a task into a shared work queue"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Worker dispatch"
        }), ": The pool signals one idle worker"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The worker dequeues and executes the task"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task completion"
        }), ": Worker marks the task done and checks for more work"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no work, worker goes back to waiting"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shutdown"
        }), ": Pool signals all workers to exit and joins them"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-6",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION ThreadPoolCreate(num_threads):\n    FOR i = 1 TO num_threads:\n        worker = CREATE_THREAD(WorkerLoop)\n        pool.workers.APPEND(worker)\n    pool.task_queue = EMPTY_QUEUE()\n    pool.mutex = CREATE_MUTEX()\n    pool.cv = CREATE_CONDITION_VAR()\n\nFUNCTION ThreadPoolSubmit(task_func, arg):\n    task = ALLOCATE_TASK(task_func, arg)\n    LOCK(pool.mutex)\n    pool.task_queue.ENQUEUE(task)\n    UNLOCK(pool.mutex)\n    SIGNAL(pool.cv)  // wake one idle worker\n\nFUNCTION WorkerLoop():\n    WHILE pool is not shutdown:\n        LOCK(pool.mutex)\n        WHILE pool.task_queue is EMPTY and not shutdown:\n            WAIT(pool.cv, pool.mutex)  // releases mutex, blocks\n        IF shutdown: BREAK\n        task = pool.task_queue.DEQUEUE()\n        UNLOCK(pool.mutex)\n        task.func(task.arg)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-thread-pool-with-2-workers-4-tasks",
      children: "Dry Run: Thread Pool with 2 Workers, 4 Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pool: 2 worker threads (W1, W2). Tasks: T1 (2s), T2 (1s), T3 (1s), T4 (2s)."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "W1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "W2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Queue"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Submit T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "W1 picks T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T1(2s)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Submit T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T1(2s)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "W2 picks T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T1(2s)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T2(1s)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Submit T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T1(2s)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T2(1s)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Submit T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T1(2s)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T2(1s)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T3,T4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2 done → W2 picks T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T1(2s)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T3(1s)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1 done → W1 picks T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T4(2s)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T3(1s)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T3 done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T4(2s)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T4 done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Total wall time:"
      }), " 6s. Without pool (thread per task): 4 threads created, ~4ms overhead per creation. With pool: 0 creation overhead after initial 2 threads."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-thread-pool",
      children: "C++ Implementation (Thread Pool)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <thread>\n#include <vector>\n#include <queue>\n#include <mutex>\n#include <condition_variable>\n#include <functional>\n#include <atomic>\n\nclass ThreadPool {\n    std::vector<std::thread> workers;\n    std::queue<std::function<void()>> tasks;\n    std::mutex queue_mutex;\n    std::condition_variable cv;\n    std::atomic<bool> stop_flag{false};\n\npublic:\n    explicit ThreadPool(size_t num_threads) {\n        for (size_t i = 0; i < num_threads; ++i) {\n            workers.emplace_back([this] {\n                while (true) {\n                    std::function<void()> task;\n                    {\n                        std::unique_lock<std::mutex> lock(queue_mutex);\n                        cv.wait(lock, [this] {\n                            return stop_flag || !tasks.empty();\n                        });\n                        if (stop_flag && tasks.empty())\n                            return;\n                        task = std::move(tasks.front());\n                        tasks.pop();\n                    }\n                    task();\n                }\n            });\n        }\n    }\n\n    void enqueue(std::function<void()> task) {\n        {\n            std::lock_guard<std::mutex> lock(queue_mutex);\n            tasks.push(std::move(task));\n        }\n        cv.notify_one();\n    }\n\n    ~ThreadPool() {\n        stop_flag = true;\n        cv.notify_all();\n        for (auto& worker : workers) {\n            worker.join();\n        }\n    }\n};\n\nint main() {\n    ThreadPool pool(4);  // 4 worker threads\n\n    for (int i = 0; i < 8; ++i) {\n        pool.enqueue([i] {\n            std::cout << \"Task \" << i\n                      << \" executed by thread \" << std::this_thread::get_id()\n                      << std::endl;\n            std::this_thread::sleep_for(std::chrono::milliseconds(100));\n        });\n    }\n\n    std::this_thread::sleep_for(std::chrono::seconds(1));\n    std::cout << \"Main: All tasks submitted and completed.\" << std::endl;\n    // pool destructor will join all threads\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-thread-pool",
      children: "Python Implementation (Thread Pool)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from concurrent.futures import ThreadPoolExecutor\nimport threading\nimport time\n\ndef task(n):\n    thread_name = threading.current_thread().name\n    print(f\"Task {n} on {thread_name}\")\n    time.sleep(0.1)\n    return n * n\n\n# Using ThreadPoolExecutor (higher-level than manual pool)\nwith ThreadPoolExecutor(max_workers=4) as executor:\n    futures = [executor.submit(task, i) for i in range(8)]\n    results = [f.result() for f in futures]\n\nprint(f\"Results: {results}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-6",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pool initialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(P)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create P worker threads once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task submission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock + queue push + signal — queue may resize"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(task)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actual work — no overhead from thread creation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(P)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P workers execute up to P tasks in parallel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory (idle pool)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(P) * stack size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P threads * ~8 MB virtual stack each"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pool shutdown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(P)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signal + join all P workers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-3",
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
            children: "Eliminates per-task thread creation overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal pool size is workload-dependent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bounds resource usage (prevents thread explosion)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idle threads consume memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Smooths out bursty workloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue management adds complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Workers can be reused for multiple tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for very long-running tasks (they hold workers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to monitor and manage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor task prioritization (FIFO queue only)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-6",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pool sizing"
          }), ": Too few workers → tasks queue up (underutilization). Too many workers → context switch overhead dominates (CPU thrashing). Rule of thumb: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pool_size = num_cores * (1 + wait_time/service_time)"
          }), " for I/O-bound, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pool_size = num_cores"
          }), " for CPU-bound."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Starvation"
          }), ": If one task blocks indefinitely (infinite loop, deadlock), it ties up a worker forever → all workers eventually consumed → pool can't make progress. Consider task timeouts or cancellation mechanisms."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Task queue overflow"
          }), ": If tasks arrive faster than workers can process them, the queue grows indefinitely → memory exhaustion. Use a bounded queue with rejection or backpressure."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Graceful shutdown"
          }), ": Workers must finish their current task before exiting. Interrupting a worker mid-task can leave shared state inconsistent. Set a stop flag and allow the current task to complete."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Thread-local state"
          }), ": Workers hold thread-local data (e.g., database connections). Reusing workers means thread-local state persists across tasks. Task A's state might leak into task B's execution. Clean thread-locals between tasks."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "threading-issues",
      children: "Threading Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fork-in-multithreaded-programs",
      children: "fork() in Multithreaded Programs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If one thread calls ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fork()"
      }), ", the child process should duplicate only the calling thread or all threads? Two options:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "fork()"
        }), " duplicates only the calling thread (Linux behavior)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exec()"
        }), " is called immediately after fork(), only duplicating the calling thread is sufficient"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the child does not call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exec()"
        }), ", all threads should be duplicated"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Danger:"
      }), " If a non-forking thread holds a mutex, the mutex is duplicated in the locked state in the child — but the lock-holder thread doesn't exist in the child. The mutex is permanently locked. Solution: call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pthread_atfork()"
      }), " to register prepare/parent/child handlers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "thread-cancellation",
      children: "Thread Cancellation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A thread can be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cancelled"
      }), " before it finishes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deferred cancellation"
        }), ": Target thread periodically checks if it should cancel (safe, default). Thread must reach a cancellation point (", (0,jsx_runtime.jsx)(_components.code, {
          children: "pthread_testcancel()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "read()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "write()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sleep()"
        }), ", etc.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Asynchronous cancellation"
        }), ": Target thread is cancelled immediately (dangerous — could leave resources in inconsistent state, memory leaks)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "pthread_cancel(thread_id);  // Request cancellation (deferred by default)\npthread_setcanceltype(PTHREAD_CANCEL_ASYNCHRONOUS, NULL);  // async mode\npthread_setcancelstate(PTHREAD_CANCEL_DISABLE, NULL);  // disable cancellation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "signal-handling",
      children: "Signal Handling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Synchronous signals"
        }), ": Delivered to the offending thread (SIGSEGV for invalid memory access, SIGFPE for divide-by-zero, SIGILL for illegal instruction)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Asynchronous signals"
        }), ": Delivered to the process; the OS delivers to any thread not blocking the signal (SIGINT from Ctrl+C, SIGTERM, SIGHUP)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "pthread_sigmask()"
        }), " controls per-thread signal blocking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "sigwait()"
        }), " allows a dedicated thread to handle all signals"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "thread-safety",
      children: "Thread Safety"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A function is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "thread-safe"
      }), " if it works correctly when called simultaneously by multiple threads."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Achieving thread safety:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use mutexes to protect shared data"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use thread-local storage (", (0,jsx_runtime.jsx)(_components.code, {
          children: "__thread"
        }), " in C, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "thread_local"
        }), " in C++, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "threading.local()"
        }), " in Python)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use atomic operations for simple increments/updates"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Make functions ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "reentrant"
        }), " — rely only on parameters and local variables, not global state"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common non-thread-safe functions:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "strtok()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rand()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gmtime()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ctime()"
      }), " (they use static buffers). Use reentrant versions: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "strtok_r()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rand_r()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gmtime_r()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ctime_r()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "race-conditions",
      children: "Race Conditions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "race condition"
      }), " occurs when the behavior of a program depends on the relative timing of events in multiple threads."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Two threads increment a shared counter without synchronization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Thread A: load counter (value = 5)\nThread B: load counter (value = 5)      ← B loaded before A stored!\nThread A: increment (value = 6)\nThread A: store counter (= 6)\nThread B: increment (value = 6)          ← should be 7!\nThread B: store counter (= 6)            ← LOST UPDATE!\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention:"
      }), " Use mutexes, atomic operations, or lock-free data structures."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "threading-models-comparison-all-four-models",
      children: "Threading Models Comparison (All Four Models)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Many-to-One"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "One-to-One"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Many-to-Many"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Two-Level"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mapping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N user : 1 kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 user : 1 kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N user : M kernel (M ≤ N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N user : M kernel + bound 1:1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallelism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial (up to M cores)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full for bound, partial for unbound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blocking impact"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All threads block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only one thread blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threads on same LWP block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies by mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Creation speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest (~5 μs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (~100 μs + syscall)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (fast user + M syscalls)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Context switch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5 μs (user space)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50–100 μs (kernel)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5 μs (user) + occasional kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowest (~8 KB/thread)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest (~8 MB/thread)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (M kernel stacks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium-High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scalability (10K threads)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (kernel overload)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OS support"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires library only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most modern OSes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy (Solaris, IRIX)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy (Solaris 8/9)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scheduling control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application-defined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS-defined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two schedulers coordinate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex coordination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority inheritance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible (kernel handles)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Preemption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cooperative or signal-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full kernel preemption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library + kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library + kernel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Modern usage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fibers, coroutines, cooperative multitasking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default for Linux, Windows, macOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No longer mainstream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No longer mainstream"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q1-what-is-the-difference-between-a-thread-and-a-process",
      children: "Q1: What is the difference between a thread and a process?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A process is an independent execution entity with its own address space, resources, and IPC requirements. A thread is a lightweight execution unit within a process that shares the address space with sibling threads. Key differences: threads are cheaper to create (10–100× faster), communicate via shared memory (no IPC needed), and context switching is faster (no TLB flush within same process). However, threads lack protection boundaries — one thread crash kills the entire process."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q2-how-do-you-choose-the-optimal-thread-pool-size",
      children: "Q2: How do you choose the optimal thread pool size?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " It depends on the workload type:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CPU-bound tasks"
        }), " (computation-heavy, no waiting): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pool_size = number_of_cores"
        }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "num_cores + 1"
        }), " to compensate for page faults)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "I/O-bound tasks"
        }), " (network, disk, database): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pool_size = num_cores * (1 + wait_time / service_time)"
        }), ". If the I/O wait is 10× the compute time on 8 cores: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "8 * (1 + 10) = 88 threads"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mixed workload"
        }), ": Profile with different pool sizes and measure throughput. Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "num_cores * 2"
        }), " and tune."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rule of thumb for web servers"
        }), ": 200–400 threads for 8 cores with typical I/O workloads"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Formula derivation:"
      }), " For an I/O-bound task, a thread spends ", (0,jsx_runtime.jsx)(_components.code, {
        children: "W"
      }), " seconds waiting and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "S"
      }), " seconds computing. Each core can handle ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(W+S)/S"
      }), " threads without contention. Total: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cores * (W+S)/S = cores * (1 + W/S)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q3-what-is-thread-safety-how-do-you-achieve-it",
      children: "Q3: What is thread safety? How do you achieve it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A function or data structure is thread-safe if it behaves correctly when accessed by multiple threads simultaneously. Achieved through:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mutex exclusion"
        }), " — lock shared data before access"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic operations"
        }), " — hardware-guaranteed indivisible operations (CAS, fetch-and-add)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Thread-local storage"
        }), " — each thread has its own copy of data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Immutable data"
        }), " — read-only data is inherently thread-safe"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lock-free data structures"
        }), " — use atomic operations without mutexes (complex but high-performance)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reentrant functions"
        }), " — no internal static state, only use stack variables and parameters"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q4-explain-deadlock-and-its-four-necessary-conditions-coffman-conditions",
      children: "Q4: Explain deadlock and its four necessary conditions (Coffman conditions)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Deadlock occurs when two or more threads are blocked forever, each waiting for a resource the other holds. Four necessary conditions (all must hold):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mutual exclusion"
        }), " — resources cannot be shared"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hold and wait"
        }), " — a thread holds resources while waiting for others"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No preemption"
        }), " — resources cannot be forcibly taken from threads"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Circular wait"
        }), " — there exists a cycle of threads each waiting for the next"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention:"
      }), " Break any one condition (e.g., enforce lock ordering to break circular wait)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q5-what-is-false-sharing-how-do-you-prevent-it",
      children: "Q5: What is false sharing? How do you prevent it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " False sharing occurs when two threads modify different variables that reside on the same CPU cache line (typically 64 bytes). The cache coherency protocol invalidates the entire cache line, forcing memory re-reads — even though the threads modify unrelated data. This causes 10–100× performance degradation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention:"
      }), " Pad data structures to cache-line boundaries (64-byte alignment). In C++: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "alignas(64)"
      }), " or use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::hardware_destructive_interference_size"
      }), ". In C: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__attribute__((aligned(64)))"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "q6-what-happens-when-you-call-fork-in-a-multithreaded-program",
      children: ["Q6: What happens when you call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fork()"
      }), " in a multithreaded program?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " POSIX defines that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fork()"
      }), " duplicates only the calling thread in the child process. This creates several problems:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Other threads' mutexes are duplicated in locked state — lock-holder thread doesn't exist in child"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Memory locks (", (0,jsx_runtime.jsx)(_components.code, {
          children: "mlockall()"
        }), ") are inherited but unlock semantics are unclear"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "pthread_atfork()"
        }), " handlers can help: prepare (acquire all locks in parent), parent (release in parent), child (release in child)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exec()"
        }), " follows immediately, only duplicating the calling thread is sufficient"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q7-user-level-threads-vs-kernel-level-threads--which-is-better",
      children: "Q7: User-level threads vs kernel-level threads — which is better?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Neither is universally better; they serve different needs:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User-level"
        }), ": Best for applications needing fast creation/switching of many threads (10,000+) with cooperative scheduling and no parallelism requirement. Used in legacy systems, library-level threading, some runtime systems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kernel-level"
        }), ": Best for applications requiring true parallelism, independent blocking, OS scheduling, and preemption. Used in modern server applications, databases, UI frameworks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modern approach"
        }), ": Most systems use one-to-one (Linux NPTL, Windows) and handle scale via thread pools rather than massive thread counts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q8-explain-amdahls-law-in-context-of-threads",
      children: "Q8: Explain Amdahl's Law in context of threads."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Amdahl's Law gives the theoretical speedup from parallelization:\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Speedup = 1 / (S + (1-S)/N)"
      }), " where S = serial fraction, N = processors.\nWith 8 cores and 10% serial code: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Speedup = 1 / (0.1 + 0.9/8) = 4.7x"
      }), ". Even with infinite cores, maximum speedup is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1/S = 10x"
      }), ". This means thread-level parallelism has diminishing returns unless the serial portion is minimized."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q9-what-is-a-race-condition-give-an-example",
      children: "Q9: What is a race condition? Give an example."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A race condition occurs when the program's output depends on the non-deterministic interleaving of thread execution. Classic example: two threads incrementing a shared counter (", (0,jsx_runtime.jsx)(_components.code, {
        children: "counter++"
      }), "). The operation compiles to: (1) load counter into register, (2) increment register, (3) store register back. If both threads execute step 1 before either executes step 3, one increment is lost. The race condition manifests as the counter being less than expected."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q10-how-do-you-debug-multithreaded-programs",
      children: "Q10: How do you debug multithreaded programs?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Thread sanitizers"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clang -fsanitize=thread"
        }), " or GCC ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-fsanitize=thread"
        }), " detects data races at runtime"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Valgrind Helgrind/DRD"
        }), ": Tool for detecting synchronization errors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GDB"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "info threads"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "thread N"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "backtrace"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "set scheduler-locking on"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Strace/Ltrace"
        }), ": Trace system calls to understand thread blocking patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logging with thread IDs"
        }), ": Include ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::this_thread::get_id()"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pthread_self()"
        }), " in all log messages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assertions"
        }), ": Check invariants at synchronization points"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reproducibility"
        }), ": Stress testing with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stress"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "load"
        }), " tools to increase interleaving probability"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "linux-nptl--native-posix-threads-library",
      children: "Linux (NPTL — Native POSIX Threads Library)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Linux uses the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one-to-one model"
      }), " via NPTL (Native POSIX Thread Library), introduced in glibc 2.3.2 (Linux kernel 2.6)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key details:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each user thread maps to a separate kernel thread (one-to-one)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Threads are created via the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clone()"
        }), " system call with flags: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLONE_VM | CLONE_FILES | CLONE_SIGHAND | CLONE_THREAD"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Linux 2.6+ uses the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "O(1) scheduler"
        }), " and later ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Completely Fair Scheduler (CFS)"
        }), " for threads"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NPTL replaced the older LinuxThreads implementation which had significant limitations (signals, PID issues)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thread group concept: all threads in a process share the same PID (TGID = thread group ID) but have unique TIDs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Limitations of LinuxThreads (pre-NPTL):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each thread had a unique PID → signal delivery was broken (signals went to only one PID)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "getpid()"
        }), " returned different values in different threads"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thread limits were low (due to PID namespace exhaustion)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NPTL improvements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Threads share a TGID → signals work correctly"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "getpid()"
        }), " returns the same value in all threads of a process"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thread limit raised to ~100,000"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Futex (fast userspace mutex) for efficient synchronization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ example (checking Linux thread model):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <thread>\n#include <unistd.h>\n#include <sys/syscall.h>\n\nint main() {\n    auto t = std::thread([]{\n        std::cout << \"Thread TID: \" << syscall(SYS_gettid)\n                  << \" PID: \" << getpid()\n                  << \" TGID: \" << getpid()\n                  << \" (same as PID — one-to-one model)\" << std::endl;\n    });\n    t.join();\n    std::cout << \"Main TID: \" << syscall(SYS_gettid)\n              << \" PID: \" << getpid() << std::endl;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "windows-threads",
      children: "Windows Threads"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Windows uses the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one-to-one model"
      }), ". Each Windows thread is a kernel-managed entity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key details:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Created via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CreateThread()"
        }), " kernel32 API"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each thread has a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_ETHREAD"
        }), " (executive thread block) and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_KTHREAD"
        }), " (kernel thread block)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Threads are scheduled by the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Windows Dispatcher"
        }), " (priority-based, 32 levels: 0–31)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fiber API allows user-level threading on top of kernel threads (similar to many-to-many)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Windows supports ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "thread pools"
        }), " natively via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ThreadPool.h"
        }), " (C++17) or the older ", (0,jsx_runtime.jsx)(_components.code, {
          children: "QueueUserWorkItem()"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ example (Windows threads via Windows API):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <windows.h>\n#include <iostream>\n\nDWORD WINAPI ThreadProc(LPVOID lpParam) {\n    int id = (int)(INT_PTR)lpParam;\n    std::cout << \"Windows thread \" << id << \" running\" << std::endl;\n    return 0;\n}\n\nint main() {\n    HANDLE threads[5];\n    for (int i = 0; i < 5; ++i) {\n        threads[i] = CreateThread(\n            NULL,           // default security\n            0,              // default stack size\n            ThreadProc,     // thread function\n            (LPVOID)(INT_PTR)i,  // parameter\n            0,              // creation flags (0 = run immediately)\n            NULL            // thread ID (optional)\n        );\n    }\n    WaitForMultipleObjects(5, threads, TRUE, INFINITE);\n    for (auto h : threads) CloseHandle(h);\n    std::cout << \"All Windows threads done.\" << std::endl;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-threads",
      children: "Java Threads"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Java threads have evolved across JVM implementations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Original JDK 1.1 (Solaris)"
        }), ": Green threads (user-level, many-to-one) — no parallelism"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HotSpot JVM (Linux/Windows)"
        }), ": Native threads — one-to-one mapping to OS threads"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Java 21+ Virtual Threads"
        }), ": User-level threads (fibers) managed by the JVM — millions of threads possible. When a virtual thread blocks, it \"parks\" rather than blocking the underlying carrier thread."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key details:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "java.lang.Thread"
        }), " wraps an OS thread (pre-Java 21)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Executors.newCachedThreadPool()"
        }), " = thread pool that creates threads on demand"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Executors.newFixedThreadPool(n)"
        }), " = bounded pool"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Virtual Threads"
        }), " (Project Loom): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Thread.startVirtualThread(runnable)"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Executors.newVirtualThreadPerTaskExecutor()"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Example (Virtual Threads):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.concurrent.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // Virtual thread — user-level, millions possible\n        Thread vt = Thread.startVirtualThread(() -> {\n            System.out.println(\"Virtual thread: \" + Thread.currentThread());\n        });\n        vt.join();\n\n        // Platform thread — OS-backed\n        Thread pt = new Thread(() -> {\n            System.out.println(\"Platform thread: \" + Thread.currentThread());\n        });\n        pt.start();\n        pt.join();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "go-goroutines",
      children: "Go Goroutines"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Go uses a custom ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "M:N scheduling model"
      }), " — M goroutines (user-level) multiplexed onto N OS threads (kernel-level). This is essentially a many-to-many implementation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key details:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Goroutines are user-level threads (lightweight, ~2 KB stack initial)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Go runtime creates OS threads (", (0,jsx_runtime.jsx)(_components.code, {
          children: "M"
        }), ") that run a scheduler (", (0,jsx_runtime.jsx)(_components.code, {
          children: "P"
        }), " — processor context)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "GOMAXPROCS"
        }), " controls the number of OS threads used (default: number of CPU cores)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Goroutines are scheduled cooperatively and preemptively by the Go runtime"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Channels provide safe communication between goroutines (CSP model)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creating 1,000,000 goroutines is feasible (~2 GB total stack initially)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Go Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-go",
        children: "package main\n\nimport (\n    \"fmt\"\n    \"runtime\"\n    \"sync\"\n)\n\nfunc worker(id int, wg *sync.WaitGroup) {\n    defer wg.Done()\n    fmt.Printf(\"Goroutine %d on OS thread %d\\n\", id, runtime.GOMAXPROCS(0))\n}\n\nfunc main() {\n    var wg sync.WaitGroup\n    for i := 0; i < 10; i++ {\n        wg.Add(1)\n        go worker(i, &wg)  // goroutine — user-level\n    }\n    wg.Wait()\n    fmt.Println(\"All goroutines done.\")\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison of Real Systems:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linux NPTL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Windows"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Java (pre-21)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Java Virtual Threads"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Go Goroutines"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-to-One"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-to-One"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-to-One"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many-to-Many"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M:N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thread type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User (fiber)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Min stack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~8 MB VM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platform-dependent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2 KB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Max threads"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~16K per process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~16K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Millions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Millions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Creation speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100 μs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~150 μs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~150 μs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 μs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.2 μs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Context switch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50–100 μs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50–100 μs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50–100 μs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.1 μs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.1 μs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scheduling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CFS (kernel)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority (kernel)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CFS (kernel)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Work-stealing (JVM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Work-stealing (runtime)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Language integration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C/POSIX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Win32 API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JVM bytecode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JVM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native (Go compiler)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Desktop apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-concurrency servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud-native services"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-computing-pi-with-multiple-threads",
      children: "Example 1: Computing Pi with Multiple Threads"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <pthread.h>\n#include <stdlib.h>\n\n#define NUM_THREADS 4\n#define NUM_STEPS 1000000\n\ndouble step;\ndouble partial_sums[NUM_THREADS];\n\nvoid *compute(void *arg) {\n    int id = *(int *)arg;\n    double x, sum = 0.0;\n\n    for (int i = id; i < NUM_STEPS; i += NUM_THREADS) {\n        x = (i + 0.5) * step;\n        sum += 4.0 / (1.0 + x * x);\n    }\n\n    partial_sums[id] = sum;\n    return NULL;\n}\n\nint main() {\n    pthread_t threads[NUM_THREADS];\n    int ids[NUM_THREADS];\n\n    step = 1.0 / NUM_STEPS;\n\n    for (int i = 0; i < NUM_THREADS; i++) {\n        ids[i] = i;\n        pthread_create(&threads[i], NULL, compute, &ids[i]);\n    }\n\n    double total = 0.0;\n    for (int i = 0; i < NUM_THREADS; i++) {\n        pthread_join(threads[i], NULL);\n        total += partial_sums[i];\n    }\n\n    double pi = total * step;\n    printf(\"Computed pi = %.15f\\n\", pi);\n    printf(\"Error = %.15f\\n\", pi - 3.141592653589793);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-amdahls-law",
      children: "Example 2: Amdahl's Law"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The theoretical speedup from parallelization is bounded by the serial portion of the program:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Speedup = 1 / (S + (1-S)/N)\n\nWhere:\n  S = fraction of program that is serial\n  N = number of processors\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If 10% of a program is serial, the maximum speedup on 16 cores is:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Speedup = 1 / (0.1 + 0.9/16) = 1 / (0.1 + 0.05625) = 6.4x\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Even with infinite cores, the speedup cannot exceed 1/S = 10x."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Speedup table for varying cores and serial fractions:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Cores"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "S = 5%"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "S = 10%"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "S = 25%"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "S = 50%"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.9x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.8x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.6x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.3x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.5x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.1x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.3x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.6x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.9x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.7x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.9x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.8x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9.1x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.4x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.4x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.9x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13.6x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.3x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.8x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.0x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20.0x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.0x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.0x"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-producer-consumer-with-condition-variables",
      children: "Example 3: Producer-Consumer with Condition Variables"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <pthread.h>\n#include <stdlib.h>\n#include <unistd.h>\n\n#define BUFFER_SIZE 5\n\nint buffer[BUFFER_SIZE];\nint count = 0, in = 0, out = 0;\n\npthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;\npthread_cond_t not_full = PTHREAD_COND_INITIALIZER;\npthread_cond_t not_empty = PTHREAD_COND_INITIALIZER;\n\nvoid* producer(void* arg) {\n    int id = *(int*)arg;\n    for (int i = 0; i < 10; i++) {\n        pthread_mutex_lock(&mutex);\n        while (count == BUFFER_SIZE) {\n            pthread_cond_wait(&not_full, &mutex);\n        }\n        buffer[in] = i + id * 100;\n        printf(\"Producer %d: produced %d at slot %d\\n\", id, buffer[in], in);\n        in = (in + 1) % BUFFER_SIZE;\n        count++;\n        pthread_cond_signal(&not_empty);\n        pthread_mutex_unlock(&mutex);\n        usleep(100000);  // simulate work\n    }\n    return NULL;\n}\n\nvoid* consumer(void* arg) {\n    int id = *(int*)arg;\n    for (int i = 0; i < 10; i++) {\n        pthread_mutex_lock(&mutex);\n        while (count == 0) {\n            pthread_cond_wait(&not_empty, &mutex);\n        }\n        int item = buffer[out];\n        printf(\"Consumer %d: consumed %d from slot %d\\n\", id, item, out);\n        out = (out + 1) % BUFFER_SIZE;\n        count--;\n        pthread_cond_signal(&not_full);\n        pthread_mutex_unlock(&mutex);\n        usleep(200000);  // simulate work\n    }\n    return NULL;\n}\n\nint main() {\n    pthread_t producers[2], consumers[2];\n    int ids[2] = {1, 2};\n\n    pthread_create(&producers[0], NULL, producer, &ids[0]);\n    pthread_create(&producers[1], NULL, producer, &ids[1]);\n    pthread_create(&consumers[0], NULL, consumer, &ids[0]);\n    pthread_create(&consumers[1], NULL, consumer, &ids[1]);\n\n    for (int i = 0; i < 2; i++) {\n        pthread_join(producers[i], NULL);\n        pthread_join(consumers[i], NULL);\n    }\n\n    printf(\"All done. Final count: %d\\n\", count);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[TIP]\nThreads share the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "same address space"
        }), " — communication between threads is trivial (just read/write shared variables), but this introduces synchronization challenges. Thread creation is 10-100x faster than process creation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[WARNING]\nUser-level threads cannot take advantage of multiple CPU cores because the kernel sees only one process. Use kernel-level threads (one-to-one model) for true parallelism on multi-core systems."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[NOTE]\nThe ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "many-to-many"
        }), " model combines the best of both worlds: user-level thread management for fast operations plus kernel-level scheduling for true parallelism, but its complexity led to its abandonment in modern OSes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[IMPORTANT]\nThread pools should be sized based on workload: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "num_cores"
        }), " for CPU-bound, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "num_cores * (1 + wait/service)"
        }), " for I/O-bound. Getting pool size wrong leads to underutilization or thrashing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "User-Level Threads"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kernel-Level Threads"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Managed by"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread library (user space)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS kernel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (no system call) ~5 μs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (system call) ~50–100 μs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (kernel sees one process)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full (kernel schedules each thread)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One thread blocks → all block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent blocking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Creation time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5–10 μs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50–200 μs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory per thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~8 KB stack + TCB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~8 MB user stack + ~16 KB kernel stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot utilize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full utilization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max threads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thousands (heap-limited)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thousands (kernel-limited)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GNU Pth, fibers, green threads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux NPTL, Windows threads"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "threading-models-comparison",
      children: "Threading Models Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Many-to-One"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "One-to-One"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Many-to-Many"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Two-Level"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User : Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N : 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 : 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N : M (M ≤ N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N : M + 1:1 bound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full (bound)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LWP group blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modern OS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GIL (Python), fibers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux, Windows, macOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy only"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thread"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lightweight process with own stack and registers, sharing address space with siblings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "User-Level Thread"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread managed entirely in user space without kernel awareness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel-Level Thread"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread managed and scheduled by the OS kernel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thread Pool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collection of pre-created threads awaiting work assignments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallelism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple threads executing simultaneously on different CPU cores"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple threads making progress via interleaving (may run on one core)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Race Condition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program behavior depends on non-deterministic thread interleaving"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deadlock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two or more threads blocked forever waiting for each other's resources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "False Sharing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance degradation when threads modify different variables on the same cache line"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Amdahl's Law"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Formula for theoretical speedup from parallelization: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "1/(S + (1-S)/N)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TCB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread Control Block — kernel data structure containing thread state, registers, stack pointer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LWP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LightWeight Process — kernel thread used as an intermediate entity in many-to-many models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NPTL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native POSIX Threads Library — Linux's high-performance threading implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GIL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global Interpreter Lock — Python's mechanism that serializes bytecode execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Futex"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast userspace mutex — Linux's efficient hybrid user/kernel synchronization primitive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pthreads"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POSIX threads API — portable threading interface on Unix-like systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fiber"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-level thread that is cooperatively scheduled, typically manually yielded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Goroutine"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go language's lightweight user-level thread managed by the Go runtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Virtual Thread"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java 21+ user-level thread (Project Loom) for massive concurrency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CLONE_VM"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Linux ", (0,jsx_runtime.jsx)(_components.code, {
              children: "clone()"
            }), " flag that shares memory between parent and child (creates a thread-like entity)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Web Server"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Database"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Embedded System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Smartphone"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thread per Request"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serve concurrent HTTP connections (Apache prefork/worker)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event loop + worker threads (MySQL InnoDB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel sensor data processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle concurrent UI + network tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thread Pool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounded worker pool (NGINX, Tomcat)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection pool + query thread pool (PostgreSQL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed worker pool for real-time control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncTask thread pool (Android)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel Threads"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Needed for multi-core parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential for parallel query execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less critical (often single-core)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential for background services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "User-Level Threads"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coroutine-based servers (Nginx Lua, Go net/http)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-memory databases using fibers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lightweight task scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Green threads for async programming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "One-to-One Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux NPTL, Windows IIS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All major databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTOS threads (FreeRTOS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android ART threads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thread Safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request handler stateless design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACID transactions + MVCC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISR safety + atomic operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Main thread for UI, worker threads for data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Race Condition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data races in shared session state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lost update in concurrent transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared peripheral register access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UI update from background thread crash"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Amdahl's Law"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serial request parsing limits speedup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serial transaction log writes bounds throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serial ADC reads limit sampling rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serial rendering pipeline limits FPS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Main advantage of threads over processes?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Better security"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Lower creation overhead and shared address space"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Automatic synchronization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) No context switching needed"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In which model does the kernel see only one process?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Many-to-One"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) One-to-One"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Many-to-Many"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Two-level"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which thread type achieves true parallelism on multi-core?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) User-level threads"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Kernel-level threads"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Green threads"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Fiber threads"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the optimal thread pool size for CPU-bound tasks on 8 cores?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 4"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 8"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 64"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 256"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is NOT a necessary condition for deadlock?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Mutual exclusion"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Hold and wait"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Preemption"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Circular wait"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CLONE_VM"
          }), " do in Linux's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "clone()"
          }), " syscall?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Creates a new virtual memory area"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Shares memory between parent and child (thread creation)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Maps virtual to physical addresses"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Enables virtual memory management"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What happens when a user-level thread calls a blocking I/O operation?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Only that thread blocks, others continue"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) All threads in the process block"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) The kernel creates a new thread to handle I/O"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) The thread library switches to another thread automatically"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is TRUE about Go goroutines?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) They are kernel-level threads"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) They start with a ~2 KB stack"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) They cannot communicate via channels"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) They require a syscall to create"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is false sharing?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Two threads modifying the same variable without locks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Two threads modifying different variables on the same cache line"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) A thread incorrectly sharing its stack with another thread"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Sharing a mutex between unrelated threads"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "According to Amdahl's Law, if 25% of a program is serial, what is the maximum speedup with infinite cores?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 2x"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 4x"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 8x"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 16x"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-b, 2-a, 3-b, 4-b, 5-c, 6-b, 7-b, 8-b, 9-b, 10-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "thread"
        }), " is a lightweight unit of CPU execution sharing address space with sibling threads"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why threads matter"
        }), ": Responsiveness, resource sharing, economy, scalability — they make concurrent programming practical"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User-level threads"
        }), " are fast (no kernel involvement) but cannot utilize multiple cores or handle blocking calls well"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kernel-level threads"
        }), " support parallelism and independent blocking but have higher creation/switch overhead"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Four threading models"
        }), ": Many-to-One (simple, no parallelism), One-to-One (full parallelism, expensive), Many-to-Many (flexible, complex), Two-Level (hybrid, legacy)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Thread pools"
        }), " amortize creation cost and bound resource usage — size based on workload type"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "pthreads"
        }), " is the standard POSIX API; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "std::thread"
        }), " is C++11's portable wrapper; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Python threading"
        }), " is easy but GIL-limited for CPU-bound work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview essentials"
        }), ": thread vs process, pool sizing formula, deadlock conditions, Amdahl's Law, race conditions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-world"
        }), ": Linux uses NPTL (one-to-one), Windows uses one-to-one, Java evolved from green threads to native to virtual threads, Go uses M:N goroutine scheduling"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Amdahl's Law"
        }), " governs the theoretical speedup: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1/(S + (1-S)/N)"
        }), " — the serial portion is the bottleneck"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Threading issues"
        }), ": fork() in threaded programs is dangerous, cancellation can leak resources, signal handling requires care"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the differences between a thread and a process? List at least four."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a program that creates 10 threads, each printing its own ID. Verify that IDs from different threads can interleave."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What happens if you forget to call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pthread_join()"
        }), "? What if the main thread exits before all threads finish?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between concurrency and parallelism. Give a real-world example of each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the Global Interpreter Lock in Python? How does it affect thread performance?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a producer-consumer program using pthreads and a mutex-protected shared buffer. Create 2 producer threads and 2 consumer threads."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compare the performance of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fork()"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pthread_create()"
        }), ". Create 1000 processes vs 1000 threads, measuring total creation time."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the many-to-many threading model. Under what circumstances does it outperform one-to-one? When does it underperform?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a program that demonstrates a data race. Fix it using a mutex. Measure the difference in execution time."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a program that demonstrates false sharing. Measure the performance difference with and without cache-line padding."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a simple thread pool: a fixed set of worker threads that pull tasks from a queue. The queue should support ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enqueue(void (*function)(void*), void *arg)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a program that demonstrates the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "false sharing"
        }), " problem: two threads writing to adjacent heap variables that share a cache line. Measure the slowdown. Fix with alignment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The Linux ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clone()"
        }), " system call allows fine-grained control over what is shared between parent and child. Research the CLONE_VM, CLONE_FILES, and CLONE_SIGHAND flags. Write a small program that creates a process that shares memory with its parent (like a thread) but has its own PID."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the dining philosophers problem with N philosophers. Use mutexes for chopsticks. Detect and prevent deadlock. Measure how many philosophers can eat simultaneously."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a multithreaded web crawler that fetches pages concurrently using a thread pool. Respect ", (0,jsx_runtime.jsx)(_components.code, {
          children: "robots.txt"
        }), ". Limit concurrent connections. Handle errors gracefully."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-thread-pool-and-parallelism-simulator",
      children: "TypeScript Thread Pool and Parallelism Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following TypeScript implementation models thread pools, work stealing, Amdahl's Law computation, and race condition detection:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Thread Pool & Concurrency Simulator\n * Models: thread pool, work stealing, Amdahl's Law, race conditions\n */\ninterface Task {\n  id: number;\n  duration: number;   // simulated work units\n  type: 'cpu' | 'io';\n}\n\nclass ThreadPool {\n  private workers: number;\n  private queue: Task[] = [];\n  private completed = 0;\n  private totalTasks = 0;\n  private time = 0;\n  private log: string[] = [];\n\n  constructor(workers: number) {\n    this.workers = workers;\n  }\n\n  submit(tasks: Task[]): void {\n    this.queue.push(...tasks);\n    this.totalTasks += tasks.length;\n  }\n\n  run(): { makespan: number; throughput: number; avgLatency: number } {\n    const latencies: number[] = [];\n    const workerLoads = new Array(this.workers).fill(0);\n\n    while (this.completed < this.totalTasks || this.queue.length > 0) {\n      const availableWorkers = this.workers - workerLoads.filter(l => l > 0).length;\n\n      for (let w = 0; w < this.workers && this.queue.length > 0; w++) {\n        if (workerLoads[w] === 0) {\n          const task = this.queue.shift()!;\n          workerLoads[w] = task.duration;\n          latencies.push(this.time + task.duration);\n          this.log.push(`[t=${this.time}] Worker ${w} started Task ${task.id} (duration=${task.duration}, type=${task.type})`);\n        }\n      }\n\n      // Advance time by minimum remaining work\n      const minWork = Math.min(...workerLoads.filter(l => l > 0));\n      if (minWork === Infinity) break;\n\n      this.time += minWork;\n      for (let w = 0; w < this.workers; w++) {\n        if (workerLoads[w] > 0) {\n          workerLoads[w] -= minWork;\n          if (workerLoads[w] === 0) {\n            this.completed++;\n            this.log.push(`[t=${this.time}] Worker ${w} completed task — ${this.completed}/${this.totalTasks}`);\n          }\n        }\n      }\n    }\n\n    const makespan = this.time;\n    const throughput = this.totalTasks / makespan;\n    const avgLatency = latencies.reduce((s, l) => s + l, 0) / latencies.length;\n    return { makespan, throughput: parseFloat(throughput.toFixed(4)), avgLatency: parseFloat(avgLatency.toFixed(2)) };\n  }\n\n  getLog(): string[] { return [...this.log]; }\n}\n\n/**\n * Amdahl's Law calculator\n */\nfunction amdahlsLaw(serialFraction: number, numCores: number): number {\n  return 1 / (serialFraction + (1 - serialFraction) / numCores);\n}\n\n/**\n * Gustafson's Law (scaled speedup)\n */\nfunction gustafsonsLaw(serialFraction: number, numCores: number): number {\n  return serialFraction + (1 - serialFraction) * numCores;\n}\n\n/**\n * Optimal thread pool sizing\n */\nfunction optimalPoolSize(numCores: number, waitTime: number, serviceTime: number): number {\n  return numCores * (1 + waitTime / serviceTime);\n}\n\n// Amdahl's Law analysis\nconsole.log('=== Amdahl\\'s Law Speedup ===');\nfor (const s of [0.05, 0.10, 0.25, 0.50]) {\n  for (const cores of [1, 2, 4, 8, 16, 64]) {\n    console.log(`  S=${(s*100).toFixed(0)}% serial, ${cores} cores: ${amdahlsLaw(s, cores).toFixed(2)}x`);\n  }\n}\n\nconsole.log('\\n=== Optimal Thread Pool Size ===');\nconsole.log(`  CPU-bound (8 cores): ${optimalPoolSize(8, 0, 1)} threads`);\nconsole.log(`  I/O-bound (8 cores, wait=10ms, service=1ms): ${optimalPoolSize(8, 10, 1)} threads`);\nconsole.log(`  Mixed (8 cores, wait=2ms, service=1ms): ${optimalPoolSize(8, 2, 1)} threads`);\n\n// Thread pool simulation\nconsole.log('\\n=== Thread Pool Simulation ===');\nconst pool = new ThreadPool(4);\npool.submit([\n  { id: 1, duration: 5, type: 'cpu' },\n  { id: 2, duration: 3, type: 'io' },\n  { id: 3, duration: 7, type: 'cpu' },\n  { id: 4, duration: 2, type: 'io' },\n  { id: 5, duration: 4, type: 'cpu' },\n  { id: 6, duration: 6, type: 'io' },\n  { id: 7, duration: 8, type: 'cpu' },\n  { id: 8, duration: 3, type: 'io' }\n]);\nconsole.log(pool.run());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "thread-safety-in-typescript-race-condition-detector",
      children: "Thread Safety in TypeScript: Race Condition Detector"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Simple race condition detector for concurrent operations\n */\nclass RaceConditionDetector {\n  private counter = 0;\n  private expectedValue = 0;\n  private interleavings: string[] = [];\n\n  // Simulates counter++ without synchronization (3-step: load, inc, store)\n  async unsafeIncrement(id: number): Promise<void> {\n    const before = this.counter;\n    this.interleavings.push(`Thread ${id}: LOAD counter = ${before}`);\n\n    // Simulate context switch between load and store\n    await new Promise(r => setImmediate(r));\n\n    const after = before + 1;\n    this.interleavings.push(`Thread ${id}: STORE counter = ${after}`);\n    this.counter = after;\n  }\n\n  async runUnsafe(threads: number, iterations: number): Promise<number> {\n    this.counter = 0;\n    this.expectedValue = threads * iterations;\n    this.interleavings = [];\n\n    const promises: Promise<void>[] = [];\n    for (let t = 0; t < threads; t++) {\n      for (let i = 0; i < iterations; i++) {\n        promises.push(this.unsafeIncrement(t));\n      }\n    }\n\n    await Promise.all(promises);\n    return this.counter;\n  }\n\n  analyze(): string {\n    const actual = this.counter;\n    const expected = this.expectedValue;\n    const raceDetected = actual !== expected;\n    const lostUpdates = expected - actual;\n    return JSON.stringify({\n      expected,\n      actual,\n      raceDetected,\n      lostUpdates,\n      details: raceDetected\n        ? `${lostUpdates} increments lost due to race condition`\n        : 'No data race — all increments preserved'\n    }, null, 2);\n  }\n}\n\n// Demonstrate race condition\nasync function main() {\n  const detector = new RaceConditionDetector();\n  const result = await detector.runUnsafe(5, 1000);\n  console.log('Race Result:', detector.analyze());\n}\nmain();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-chapter-quiz-questions",
      children: "Additional Chapter Quiz Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the primary reason user-level threads cannot achieve parallelism on multi-core systems?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) They run at too low a priority"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) The kernel sees only one thread (the process)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) They don't have a stack"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) They cannot perform I/O"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is a \"fiber\" in Windows?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) A kernel-level thread"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) A user-level thread that is manually scheduled"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) A hardware thread"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) A type of process"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In Linux NPTL, what is the relationship between user threads and kernel threads?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Many user threads map to one kernel thread"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) One user thread maps to one kernel thread"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Many user threads map to many kernel threads"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) No relationship"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the main advantage of the many-to-many threading model?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Simpler implementation than one-to-one"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Combines fast user-level creation with kernel-level parallelism"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Requires no kernel support"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Uses the least memory"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following best describes Java Virtual Threads (Project Loom)?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Kernel threads managed by the JVM"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) User-level threads that can number in the millions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Native OS threads with a Java wrapper"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Thread pools that reuse kernel threads"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 11-b, 12-b, 13-b, 14-b, 15-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "basic-1",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a TypeScript function that calculates the optimal thread pool size for a given workload. The function should take: number of cores, average service time, and average wait time. Explain the formula."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "htop"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ps -eLf"
        }), " on a Linux system to identify which processes have multiple threads. Pick three multi-threaded processes and identify what each thread is likely doing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "intermediate-1",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "18",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a work-stealing thread pool simulator in TypeScript: each worker has its own task queue; when a worker's queue is empty, it steals tasks from another worker's queue. Compare the makespan of work-stealing vs. a global queue across 100 tasks with varying durations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproduce the race condition example above in TypeScript using async/await with setImmediate to force context switches. Show that without proper locking (an atomic counter or mutex), the final counter value is less than expected."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advanced-1",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "20",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a reader-writer lock in TypeScript using Promises. Multiple readers should be able to access simultaneously, but writers need exclusive access. Show that under a read-heavy workload (90% reads, 10% writes), the reader-writer lock outperforms a simple mutex."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a lock-free hash map in TypeScript using atomic operations and CAS (compare-and-swap) semantics. Support put(), get(), and delete(). Show that it is thread-safe without using any mutex or lock."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Silberschatz, Galvin, Gagne"
        }), " — Operating System Concepts (Chapter 4: Threads & Concurrency)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tanenbaum"
        }), " — Modern Operating Systems (Chapter 2: Processes and Threads)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Goetz et al."
        }), " — Java Concurrency in Practice"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Williams"
        }), " — C++ Concurrency in Action"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linux man pages"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pthread_create(3)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clone(2)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "futex(2)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sched(7)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NPTL Design"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.kernel.org/doc/ols/2002/ols2002-pages-286-296.pdf",
          children: "https://www.kernel.org/doc/ols/2002/ols2002-pages-286-296.pdf"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Amdahl's Law"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://en.wikipedia.org/wiki/Amdahl%27s_law",
          children: "https://en.wikipedia.org/wiki/Amdahl%27s_law"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Loom (Java Virtual Threads)"
        }), ": JEP 444"]
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