"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[93698],{

/***/ 62817
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_operating_systems_02_processes_md_34e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-operating-systems-02-processes-md-34e.json
const site_docs_courses_operating_systems_02_processes_md_34e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/operating-systems/02-processes","title":"Chapter 2: Processes","description":"---","source":"@site/docs/courses/operating-systems/02-processes.md","sourceDirName":"courses/operating-systems","slug":"/operating-systems/02-processes","permalink":"/ai-engineering-journey/operating-systems/02-processes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-processes","slug":"/operating-systems/02-processes","title":"Chapter 2: Processes","sidebar_label":"Chapter 2: Processes","sidebar_position":2},"sidebar":"course-operating-systems","previous":{"title":"Chapter 1: Introduction to Operating Systems","permalink":"/ai-engineering-journey/operating-systems/01-introduction"},"next":{"title":"Chapter 3: CPU Scheduling","permalink":"/ai-engineering-journey/operating-systems/03-cpu-scheduling"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/operating-systems/02-processes.md


const frontMatter = {
	id: '02-processes',
	slug: '/operating-systems/02-processes',
	title: 'Chapter 2: Processes',
	sidebar_label: 'Chapter 2: Processes',
	sidebar_position: 2
};
const contentTitle = 'Chapter 2: Processes';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Process Management Matters",
  "id": "why-process-management-matters",
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
  "value": "Process Concept",
  "id": "process-concept",
  "level": 3
}, {
  "value": "Real-World Analogy: Blueprint vs Building Under Construction",
  "id": "real-world-analogy-blueprint-vs-building-under-construction",
  "level": 4
}, {
  "value": "Definition",
  "id": "definition",
  "level": 4
}, {
  "value": "Algorithm: Process Lifecycle Overview",
  "id": "algorithm-process-lifecycle-overview",
  "level": 4
}, {
  "value": "Pseudocode: Process Object",
  "id": "pseudocode-process-object",
  "level": 4
}, {
  "value": "Dry Run: Process Creation",
  "id": "dry-run-process-creation",
  "level": 4
}, {
  "value": "C++ Implementation: Process Abstraction",
  "id": "c-implementation-process-abstraction",
  "level": 4
}, {
  "value": "Python Implementation: Process Abstraction",
  "id": "python-implementation-process-abstraction",
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
  "value": "Process in Memory",
  "id": "process-in-memory",
  "level": 3
}, {
  "value": "Real-World Analogy: Office Building Floors",
  "id": "real-world-analogy-office-building-floors",
  "level": 4
}, {
  "value": "Memory Layout",
  "id": "memory-layout",
  "level": 4
}, {
  "value": "Algorithm: Memory Allocation Steps",
  "id": "algorithm-memory-allocation-steps",
  "level": 4
}, {
  "value": "Pseudocode: Memory Layout Setup",
  "id": "pseudocode-memory-layout-setup",
  "level": 4
}, {
  "value": "Dry Run: Memory Layout for a Simple Program",
  "id": "dry-run-memory-layout-for-a-simple-program",
  "level": 4
}, {
  "value": "C++ Implementation: Memory Layout",
  "id": "c-implementation-memory-layout",
  "level": 4
}, {
  "value": "Python Implementation: Memory Layout Visualization",
  "id": "python-implementation-memory-layout-visualization",
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
  "value": "Process States",
  "id": "process-states",
  "level": 3
}, {
  "value": "Real-World Analogy: Restaurant Order Lifecycle",
  "id": "real-world-analogy-restaurant-order-lifecycle",
  "level": 4
}, {
  "value": "The Classic Five-State Model",
  "id": "the-classic-five-state-model",
  "level": 4
}, {
  "value": "Algorithm: State Transitions",
  "id": "algorithm-state-transitions",
  "level": 4
}, {
  "value": "Pseudocode: Process State Machine",
  "id": "pseudocode-process-state-machine",
  "level": 4
}, {
  "value": "Dry Run Trace Table: Process State Changes",
  "id": "dry-run-trace-table-process-state-changes",
  "level": 4
}, {
  "value": "C++ Implementation: Process State Machine",
  "id": "c-implementation-process-state-machine",
  "level": 4
}, {
  "value": "Python Implementation: Process State Machine",
  "id": "python-implementation-process-state-machine",
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
  "value": "Process Control Block (PCB)",
  "id": "process-control-block-pcb",
  "level": 3
}, {
  "value": "Real-World Analogy: Employee File in HR",
  "id": "real-world-analogy-employee-file-in-hr",
  "level": 4
}, {
  "value": "Definition",
  "id": "definition-1",
  "level": 4
}, {
  "value": "PCB Contents",
  "id": "pcb-contents",
  "level": 4
}, {
  "value": "Algorithm: PCB Operations",
  "id": "algorithm-pcb-operations",
  "level": 4
}, {
  "value": "Pseudocode: PCB Structure and Operations",
  "id": "pseudocode-pcb-structure-and-operations",
  "level": 4
}, {
  "value": "Dry Run Trace Table: PCB Lifecycle",
  "id": "dry-run-trace-table-pcb-lifecycle",
  "level": 4
}, {
  "value": "C++ Implementation: PCB and Process Table",
  "id": "c-implementation-pcb-and-process-table",
  "level": 4
}, {
  "value": "Python Implementation: PCB",
  "id": "python-implementation-pcb",
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
  "value": "Context Switch",
  "id": "context-switch",
  "level": 3
}, {
  "value": "Real-World Analogy: Switching Workers on an Assembly Line",
  "id": "real-world-analogy-switching-workers-on-an-assembly-line",
  "level": 4
}, {
  "value": "Definition",
  "id": "definition-2",
  "level": 4
}, {
  "value": "Algorithm: Context Switch Steps",
  "id": "algorithm-context-switch-steps",
  "level": 4
}, {
  "value": "Pseudocode: Context Switch",
  "id": "pseudocode-context-switch",
  "level": 4
}, {
  "value": "Dry Run Trace Table: Context Switch (P0 -&gt; P1)",
  "id": "dry-run-trace-table-context-switch-p0---p1",
  "level": 4
}, {
  "value": "C++ Implementation: Context Switch Simulation",
  "id": "c-implementation-context-switch-simulation",
  "level": 4
}, {
  "value": "Python Implementation: Context Switch",
  "id": "python-implementation-context-switch",
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
  "value": "Process Creation",
  "id": "process-creation",
  "level": 3
}, {
  "value": "Real-World Analogy: Factory Duplicating a Machine",
  "id": "real-world-analogy-factory-duplicating-a-machine",
  "level": 4
}, {
  "value": "Process Creation with fork() and exec()",
  "id": "process-creation-with-fork-and-exec",
  "level": 4
}, {
  "value": "Algorithm: fork() + exec() + wait()",
  "id": "algorithm-fork--exec--wait",
  "level": 4
}, {
  "value": "Pseudocode: fork-exec-wait Pattern",
  "id": "pseudocode-fork-exec-wait-pattern",
  "level": 4
}, {
  "value": "Dry Run Trace Table: fork-exec-wait",
  "id": "dry-run-trace-table-fork-exec-wait",
  "level": 4
}, {
  "value": "C++ Implementation: Unix fork-exec-wait",
  "id": "c-implementation-unix-fork-exec-wait",
  "level": 4
}, {
  "value": "Python Implementation: Process Creation Simulation",
  "id": "python-implementation-process-creation-simulation",
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
  "value": "Process Termination",
  "id": "process-termination",
  "level": 3
}, {
  "value": "Real-World Analogy: Employee Resignation",
  "id": "real-world-analogy-employee-resignation",
  "level": 4
}, {
  "value": "Termination Events",
  "id": "termination-events",
  "level": 4
}, {
  "value": "Algorithm: Process Termination",
  "id": "algorithm-process-termination",
  "level": 4
}, {
  "value": "Pseudocode: Process Termination",
  "id": "pseudocode-process-termination",
  "level": 4
}, {
  "value": "Dry Run Trace Table: Zombie Creation and Cleanup",
  "id": "dry-run-trace-table-zombie-creation-and-cleanup",
  "level": 4
}, {
  "value": "C++ Implementation: Zombie and Orphan",
  "id": "c-implementation-zombie-and-orphan",
  "level": 4
}, {
  "value": "Python Implementation: Zombie and Orphan",
  "id": "python-implementation-zombie-and-orphan",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-6",
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
  "value": "Interprocess Communication (IPC)",
  "id": "interprocess-communication-ipc",
  "level": 3
}, {
  "value": "Real-World Analogy: Two Coworkers Communicating",
  "id": "real-world-analogy-two-coworkers-communicating",
  "level": 4
}, {
  "value": "Independent vs Cooperating Processes",
  "id": "independent-vs-cooperating-processes",
  "level": 4
}, {
  "value": "Algorithm: IPC Decision Flow",
  "id": "algorithm-ipc-decision-flow",
  "level": 4
}, {
  "value": "Shared Memory",
  "id": "shared-memory",
  "level": 3
}, {
  "value": "Real-World Analogy: Whiteboard in Shared Office",
  "id": "real-world-analogy-whiteboard-in-shared-office",
  "level": 4
}, {
  "value": "Definition",
  "id": "definition-3",
  "level": 4
}, {
  "value": "Algorithm: Shared Memory IPC",
  "id": "algorithm-shared-memory-ipc",
  "level": 4
}, {
  "value": "Pseudocode: Shared Memory Producer-Consumer",
  "id": "pseudocode-shared-memory-producer-consumer",
  "level": 4
}, {
  "value": "Dry Run Trace Table: Shared Memory Producer-Consumer",
  "id": "dry-run-trace-table-shared-memory-producer-consumer",
  "level": 4
}, {
  "value": "C++ Implementation: Shared Memory (POSIX)",
  "id": "c-implementation-shared-memory-posix",
  "level": 4
}, {
  "value": "Python Implementation: Shared Memory",
  "id": "python-implementation-shared-memory",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-7",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-7",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-7",
  "level": 4
}, {
  "value": "Message Passing",
  "id": "message-passing",
  "level": 3
}, {
  "value": "Real-World Analogy: Postal Mail System",
  "id": "real-world-analogy-postal-mail-system",
  "level": 4
}, {
  "value": "Definition",
  "id": "definition-4",
  "level": 4
}, {
  "value": "Algorithm: Message Passing (POSIX Message Queues)",
  "id": "algorithm-message-passing-posix-message-queues",
  "level": 4
}, {
  "value": "Pseudocode: Message Passing",
  "id": "pseudocode-message-passing",
  "level": 4
}, {
  "value": "Dry Run Trace Table: Message Passing",
  "id": "dry-run-trace-table-message-passing",
  "level": 4
}, {
  "value": "C++ Implementation: POSIX Message Queue",
  "id": "c-implementation-posix-message-queue",
  "level": 4
}, {
  "value": "Python Implementation: Message Queue",
  "id": "python-implementation-message-queue",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-8",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-8",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-8",
  "level": 4
}, {
  "value": "Pipes",
  "id": "pipes",
  "level": 3
}, {
  "value": "Real-World Analogy: Water Pipe Connecting Two Tanks",
  "id": "real-world-analogy-water-pipe-connecting-two-tanks",
  "level": 4
}, {
  "value": "Definition",
  "id": "definition-5",
  "level": 4
}, {
  "value": "Algorithm: Anonymous Pipe",
  "id": "algorithm-anonymous-pipe",
  "level": 4
}, {
  "value": "Pseudocode: Pipe Communication",
  "id": "pseudocode-pipe-communication",
  "level": 4
}, {
  "value": "Dry Run Trace Table: Pipe Data Flow",
  "id": "dry-run-trace-table-pipe-data-flow",
  "level": 4
}, {
  "value": "C++ Implementation: Anonymous Pipe",
  "id": "c-implementation-anonymous-pipe",
  "level": 4
}, {
  "value": "Python Implementation: Pipe",
  "id": "python-implementation-pipe",
  "level": 4
}, {
  "value": "Named Pipe (FIFO) C++ Implementation",
  "id": "named-pipe-fifo-c-implementation",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-9",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-9",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-9",
  "level": 4
}, {
  "value": "Process vs Thread: Comprehensive Comparison",
  "id": "process-vs-thread-comprehensive-comparison",
  "level": 3
}, {
  "value": "Real-World Analogy: Factory vs Assembly Line Workers",
  "id": "real-world-analogy-factory-vs-assembly-line-workers",
  "level": 4
}, {
  "value": "Comparison Table",
  "id": "comparison-table",
  "level": 4
}, {
  "value": "When to Use Process vs Thread",
  "id": "when-to-use-process-vs-thread",
  "level": 4
}, {
  "value": "IPC Methods Comprehensive Comparison",
  "id": "ipc-methods-comprehensive-comparison",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 3
}, {
  "value": "Zombie vs Orphan",
  "id": "zombie-vs-orphan",
  "level": 4
}, {
  "value": "Context Switch Cost",
  "id": "context-switch-cost",
  "level": 4
}, {
  "value": "IPC Performance",
  "id": "ipc-performance",
  "level": 4
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 3
}, {
  "value": "Linux: fork() + exec() + COW",
  "id": "linux-fork--exec--cow",
  "level": 4
}, {
  "value": "Windows: CreateProcess()",
  "id": "windows-createprocess",
  "level": 4
}, {
  "value": "POSIX IPC Summary",
  "id": "posix-ipc-summary",
  "level": 4
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Process Tree with ps",
  "id": "example-1-process-tree-with-ps",
  "level": 3
}, {
  "value": "Example 2: Visualizing Process State Changes",
  "id": "example-2-visualizing-process-state-changes",
  "level": 3
}, {
  "value": "Example 3: Process Pipeline (ls | wc -l)",
  "id": "example-3-process-pipeline-ls--wc--l",
  "level": 3
}, {
  "value": "Example 4: Producer-Consumer with Shared Memory and Semaphores",
  "id": "example-4-producer-consumer-with-shared-memory-and-semaphores",
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
  "value": "TypeScript Process Lifecycle Simulator",
  "id": "typescript-process-lifecycle-simulator",
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
  "id": "basic",
  "level": 4
}, {
  "value": "Intermediate",
  "id": "intermediate",
  "level": 4
}, {
  "value": "Advanced",
  "id": "advanced",
  "level": 4
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
  "id": "basic-1",
  "level": 3
}, {
  "value": "Intermediate",
  "id": "intermediate-1",
  "level": 3
}, {
  "value": "Advanced",
  "id": "advanced-1",
  "level": 3
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
        id: "chapter-2-processes",
        children: "Chapter 2: Processes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["<< ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/operating-systems/01-introduction",
          children: "Introduction to Operating Systems"
        })]
      }), " | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/operating-systems/03-cpu-scheduling",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next: CPU Scheduling"
        })
      }), " >>"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define a process and differentiate it from a program"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the five-state process model and transitions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the structure and contents of a Process Control Block"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand context switching and its overhead"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement process creation and termination using Unix system calls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare interprocess communication methods: shared memory and message passing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between independent and cooperating processes"
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
        href: "../../assets/images/lessons/operating-systems/02-processes/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/operating-systems/02-processes/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/operating-systems/02-processes/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/operating-systems/02-processes/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/operating-systems/02-processes/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/operating-systems/02-processes/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-process-management-matters",
      children: "Why Process Management Matters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine a car factory assembly line. Multiple car models → sedans, SUVs, trucks → move through the same line simultaneously. Each vehicle is at a different stage: one getting an engine, another getting painted, a third undergoing quality inspection. The factory manager (OS) must track each vehicle's status, allocate resources (workers, tools, paint), switch between tasks efficiently, and handle emergencies (defective parts, stalled machines). Without this management, chaos ensues → collisions, idle workers, missed deadlines."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A computer operates identically. Multiple programs (processes) share the CPU, memory, and I/O devices. The OS must:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track each process's state (what stage it's in)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Save/restore progress when switching (context switch)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Allocate memory, CPU time, and I/O fairly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable processes to communicate safely (IPC)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clean up finished processes without resource leaks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without process management, a single crash takes down the entire system. Process management is the foundation of multitasking, responsiveness, and reliability in every modern OS."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Process Concept"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active instance of a program; has text, data, heap, stack sections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Process States"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New -> Ready -> Running -> Waiting -> Terminated (five-state model)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PCB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "task_struct in Linux; holds PID, PC, registers, scheduling info, memory mgmt, I/O status"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Context Switch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Saving/restoring process state; pure overhead (1-10 microsec)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Process Creation"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fork()"
            }), " creates child; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "exec()"
            }), " replaces program image"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared memory (fast, needs sync) vs message passing (structured, works cross-network)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.div, {
      className: "mermaid",
      children: "\nflowchart LR\n    A[Process Concept] --> B[Process in Memory]\n    B --> C[Process States]\n    C --> D[PCB & Context Switch]\n    D --> E[Process Creation & Termination]\n    E --> F[IPC: Shared Memory vs Message Passing]\n    F --> G[Examples & Summary]\n"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/operating-systems/02-processes.png",
        alt: "Process States"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-concept",
      children: "Process Concept"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-blueprint-vs-building-under-construction",
      children: "Real-World Analogy: Blueprint vs Building Under Construction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "program"
      }), " is like a building blueprint → a static document describing what to build. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "process"
      }), " is the actual construction site → workers moving, materials arriving, foundation being laid. One blueprint can produce multiple construction sites (running multiple instances of the same program)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "definition",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "process"
      }), " is an instance of a program in execution. While a program is a passive entity (a file on disk), a process is active → it has a program counter, register values, a stack, and data sections."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The key insight: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one program can produce many processes"
      }), ". Opening three terminal windows running ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bash"
      }), " creates three processes from the same binary."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-process-lifecycle-overview",
      children: "Algorithm: Process Lifecycle Overview"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program Loaded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS reads executable from disk into memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCB Created"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS allocates and initializes a Process Control Block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Allocated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text, data, heap, stack sections are set up"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ready Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process is placed in the ready queue awaiting CPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dispatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduler selects process and CPU begins execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instructions are fetched, decoded, executed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Termination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process exits; OS reclaims all resources"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-process-object",
      children: "Pseudocode: Process Object"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Process:\n    pid: int\n    state: enum {NEW, READY, RUNNING, WAITING, TERMINATED}\n    program_counter: address\n    registers: RegisterFile\n    memory: MemoryLayout\n    open_files: List<FileDescriptor>\n    \n    function create(program_path):\n        load executable from disk\n        allocate memory (text, data, heap, stack)\n        initialize PCB with default values\n        assign unique PID\n        set state = NEW\n        add to ready queue\n        return PCB\n    \n    function terminate():\n        save exit status\n        close all open files\n        release memory\n        set state = TERMINATED\n        notify parent process\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-process-creation",
      children: "Dry Run: Process Creation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PC"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shell"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["User types ", (0,jsx_runtime.jsx)(_components.code, {
              children: "./myprog"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loads binary into memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NEW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x400000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocates PCB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NEW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x400000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moves to ready queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x400000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dispatches to CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x400000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fetches first instruction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x400004"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calls exit()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TERMINATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reclaims resources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-process-abstraction",
      children: "C++ Implementation: Process Abstraction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <queue>\n#include <cstdint>\n\nenum class ProcessState { NEW, READY, RUNNING, WAITING, TERMINATED };\n\nstruct PCB {\n    uint32_t pid;\n    ProcessState state;\n    uint64_t program_counter;\n    uint64_t registers[32];\n    uint64_t stack_pointer;\n    uint64_t base_register;\n    uint64_t limit_register;\n    uint32_t priority;\n    uint64_t cpu_burst_time;\n    uint64_t total_cpu_time;\n};\n\nclass ProcessManager {\n    std::queue<PCB*> ready_queue;\n    std::vector<PCB*> all_processes;\n    uint32_t next_pid = 1;\n\npublic:\n    PCB* create_process() {\n        PCB* pcb = new PCB();\n        pcb->pid = next_pid++;\n        pcb->state = ProcessState::NEW;\n        pcb->program_counter = 0;\n        pcb->stack_pointer = 0xFFFFFFFF;\n        pcb->priority = 0;\n        pcb->cpu_burst_time = 0;\n        pcb->total_cpu_time = 0;\n        pcb->state = ProcessState::READY;\n        ready_queue.push(pcb);\n        all_processes.push_back(pcb);\n        std::cout << \"Process \" << pcb->pid << \" created and ready\\n\";\n        return pcb;\n    }\n\n    void dispatch() {\n        if (ready_queue.empty()) return;\n        PCB* pcb = ready_queue.front();\n        ready_queue.pop();\n        pcb->state = ProcessState::RUNNING;\n        std::cout << \"Process \" << pcb->pid << \" dispatched to CPU\\n\";\n    }\n\n    void terminate(PCB* pcb) {\n        pcb->state = ProcessState::TERMINATED;\n        std::cout << \"Process \" << pcb->pid << \" terminated\\n\";\n    }\n};\n\nint main() {\n    ProcessManager pm;\n    PCB* p1 = pm.create_process();\n    PCB* p2 = pm.create_process();\n    pm.dispatch();\n    pm.terminate(p1);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-process-abstraction",
      children: "Python Implementation: Process Abstraction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from enum import Enum\nfrom dataclasses import dataclass, field\nfrom typing import List\nfrom collections import deque\n\nclass ProcessState(Enum):\n    NEW = 1\n    READY = 2\n    RUNNING = 3\n    WAITING = 4\n    TERMINATED = 5\n\n@dataclass\nclass PCB:\n    pid: int\n    state: ProcessState = ProcessState.NEW\n    program_counter: int = 0\n    registers: List[int] = field(default_factory=lambda: [0] * 32)\n    stack_pointer: int = 0xFFFFFFFF\n    priority: int = 0\n    cpu_burst_time: int = 0\n    total_cpu_time: int = 0\n\nclass ProcessManager:\n    def __init__(self):\n        self.ready_queue = deque()\n        self.all_processes = []\n        self.next_pid = 1\n\n    def create_process(self):\n        pcb = PCB(pid=self.next_pid)\n        self.next_pid += 1\n        pcb.state = ProcessState.READY\n        self.ready_queue.append(pcb)\n        self.all_processes.append(pcb)\n        print(f\"Process {pcb.pid} created and ready\")\n        return pcb\n\n    def dispatch(self):\n        if not self.ready_queue:\n            return None\n        pcb = self.ready_queue.popleft()\n        pcb.state = ProcessState.RUNNING\n        print(f\"Process {pcb.pid} dispatched to CPU\")\n        return pcb\n\n    def terminate(self, pcb):\n        pcb.state = ProcessState.TERMINATED\n        print(f\"Process {pcb.pid} terminated\")\n\npm = ProcessManager()\np1 = pm.create_process()\np2 = pm.create_process()\npm.dispatch()\npm.terminate(p1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process Creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) where n = process size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCB allocation is constant; memory copy is proportional to process size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process Dispatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simply dequeues from ready queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process Termination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) ammortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant-time PCB removal; GC may defer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Processes are isolated → one crash cannot directly affect another"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPC overhead required for cross-process communication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each process has separate address space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context switching is expensive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean abstraction for multitasking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creation overhead (fork copies address space)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works on single-core to many-core systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of processes limited by PID table and memory"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fork Bomb"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process recursively creates infinite children, exhausting system resources"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OS limits max processes per user (", (0,jsx_runtime.jsx)(_components.code, {
              children: "ulimit -u"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PID Exhaustion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All PIDs in use, no new processes can be created"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recycle PIDs; 16-bit PID on Linux (65535 max by default, configurable to 4M)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zombie Flood"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent never calls wait(), children accumulate as zombies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent must call wait() or use SIGCHLD handler; init adopts orphans"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resource Exhaustion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory or file descriptors depleted by runaway process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS enforces per-process resource limits (rlimit)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-in-memory",
      children: "Process in Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-office-building-floors",
      children: "Real-World Analogy: Office Building Floors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A process's memory is like an office building. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "text section"
      }), " is the building's structural blueprint (fixed, read-only). The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "data section"
      }), " is the building directory (global info). The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "heap"
      }), " is the storage warehouse (grows as needed). The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "stack"
      }), " is the elevator shaft (grows and shrinks per floor/function call)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "memory-layout",
      children: "Memory Layout"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+------------------+  high address\n|      Stack       |  Local variables, function parameters, return addresses\n|       |          |\n|       v          |\n|       ^          |\n|      Heap        |  Dynamically allocated memory (malloc, new)\n+------------------+\n|      Data        |  Global and static variables\n+------------------+\n|      Text        |  Program code (machine instructions)\n+------------------+  low address\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Text section"
        }), ": Contains compiled binary code. Read-only to prevent accidental modification."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data section"
        }), ": Global and static variables (BSS for uninitialized data, initialized data segment)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Heap"
        }), ": Dynamically allocated memory → grows upward toward higher addresses."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stack"
        }), ": Function call frames, local variables → grows downward."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-memory-allocation-steps",
      children: "Algorithm: Memory Allocation Steps"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load Text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS reads code segment from executable into memory at base address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initialize Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global/static variables copied from executable image"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero BSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uninitialized global variables set to zero"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Setup Heap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap starts after data segment, managed by brk/sbrk or mmap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Setup Stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack pointer set to highest user address, grows downward"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set PC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program counter set to _start (entry point)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-memory-layout-setup",
      children: "Pseudocode: Memory Layout Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function setup_memory_layout(executable):\n    text_base = allocate_pages(executable.text_size, READ_ONLY | EXECUTABLE)\n    copy_from_disk(executable.text, text_base)\n    \n    data_base = text_base + executable.text_size\n    allocate_pages(executable.data_size, READ_WRITE)\n    copy_from_disk(executable.data, data_base)\n    \n    bss_base = data_base + executable.data_size\n    zero_fill(bss_base, executable.bss_size)\n    \n    heap_base = bss_base + executable.bss_size\n    heap_end = heap_base\n    \n    stack_base = HIGHEST_USER_ADDRESS\n    stack_pointer = stack_base\n    \n    pc = executable.entry_point\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-memory-layout-for-a-simple-program",
      children: "Dry Run: Memory Layout for a Simple Program"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Segment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Start Address"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Contents"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x400000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Machine code of program"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x402000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global int x = 42; static char buffer[256]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x404000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global int y (uninitialized, zeroed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Heap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x406000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 KB (start)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty; grows via malloc()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x7FFFFFFF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 KB (max)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grows downward; main() frame"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-memory-layout",
      children: "C++ Implementation: Memory Layout"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstdlib>\n#include <cstring>\n\nint global_var = 42;               // Data section (initialized)\nstatic int static_var;             // BSS section (uninitialized, zero)\nconst int const_var = 100;         // Text section (rodata)\n\nvoid show_addresses() {\n    int local_var = 0;             // Stack\n    int* heap_var = new int(99);   // Heap\n    static int local_static = 5;   // Data section\n\n    std::cout << \"Text (function): \" << (void*)&show_addresses << \"\\n\";\n    std::cout << \"Data (global): \" << &global_var << \"\\n\";\n    std::cout << \"BSS (static): \" << &static_var << \"\\n\";\n    std::cout << \"Heap: \" << heap_var << \"\\n\";\n    std::cout << \"Stack: \" << &local_var << \"\\n\";\n\n    delete heap_var;\n}\n\nint main() {\n    show_addresses();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-memory-layout-visualization",
      children: "Python Implementation: Memory Layout Visualization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import sys\nimport ctypes\n\nclass MemoryLayoutDemo:\n    class_var = 42  # Class-level (data segment equivalent)\n\n    def __init__(self):\n        self.instance_var = 10  # Heap-allocated\n\n    def show(self):\n        local_var = 5      # Stack-allocated\n        dynamic_list = [1, 2, 3]  # Heap-allocated via PyObject\n\n        print(f\"Code (function): {hex(id(self.show))}\")\n        print(f\"Class var (data): {hex(id(MemoryLayoutDemo.class_var))}\")\n        print(f\"Instance var (heap): {hex(id(self.instance_var))}\")\n        print(f\"Local var (stack-like): {hex(id(local_var))}\")\n        print(f\"Dynamic list (heap): {hex(id(dynamic_list))}\")\n\ndemo = MemoryLayoutDemo()\ndemo.show()\n"
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
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Layout Creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must copy n bytes of program from disk to memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack Frame Push"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just decrements stack pointer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Heap Allocation (malloc)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) to O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small allocs fast via freelist; large may need syscall"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Heap Deallocation (free)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns block to freelist; coalescing may be O(n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-1",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segments protect code from data corruption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fragmentation can waste memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Growth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack and heap grow dynamically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow corrupts adjacent memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sharing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text section can be shared between processes (reentrant code)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each process needs its own data/heap/stack copy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only text prevents code injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context switch must remap entire address space"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stack Overflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function calls exceed available stack space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS delivers SIGSEGV; ulimit -s controls max stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Heap Fragmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many small allocs/frees create non-contiguous free holes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compaction (not in C/C++), slab allocator in kernel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory Leak"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocated heap memory never freed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS reclaims all memory on process termination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Null Pointer Dereference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accessing address 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MMU traps access; OS delivers SIGSEGV to process"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-states",
      children: "Process States"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-restaurant-order-lifecycle",
      children: "Real-World Analogy: Restaurant Order Lifecycle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A restaurant order goes through stages: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "New"
      }), " (customer places order), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ready"
      }), " (order ticket on the kitchen board), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Running"
      }), " (chef is cooking), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Waiting/Blocked"
      }), " (waiting for an ingredient to arrive), and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Terminated"
      }), " (meal served, ticket removed). The chef (CPU) can only cook one order at a time but keeps multiple orders in various stages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-classic-five-state-model",
      children: "The Classic Five-State Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "          +-----------------------+\n          |         NEW           |\n          +-----------------------+\n                    | admitted\n                    v\n          +-----------------------+\n    +-----|        READY          |<------+\n    |     +-----------------------+       |\n    |               | scheduler dispatch  |\n    |               v                     |\n    |     +-----------------------+       |\n    |     |       RUNNING         |       |\n    |     +-----------------------+       |\n    |          |              |          |\n    |   I/O or event     interrupt       |\n    |          |              |          |\n    |          v              +----------+\n    |     +-----------------------+\n    |     |   WAITING (BLOCKED)   |\n    |     +-----------------------+\n    |               | I/O or event completion\n    +---------------+\n    \n          +-----------------------+\n          |      TERMINATED       |\n          +-----------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "New"
        }), ": Process is being created"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ready"
        }), ": Process is in memory, waiting to be assigned to CPU"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Running"
        }), ": Instructions are being executed on the CPU"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Waiting (Blocked)"
        }), ": Process is waiting for some event (I/O completion, signal)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Terminated"
        }), ": Process has finished execution"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-state-transitions",
      children: "Algorithm: State Transitions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Next State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Responsible"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NEW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process admitted to system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS Scheduler"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduler dispatches process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS Scheduler"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process requests I/O or waits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAITING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process (via syscall)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time slice expires (interrupt)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS Scheduler / Timer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process exits or is killed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TERMINATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process / OS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAITING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I/O completes or event arrives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware / OS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Process remains ready)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-process-state-machine",
      children: "Pseudocode: Process State Machine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "states = {NEW, READY, RUNNING, WAITING, TERMINATED}\n\ntransitions = {\n    NEW:      {admitted: READY},\n    READY:    {dispatch: RUNNING},\n    RUNNING:  {interrupt: READY, io_wait: WAITING, exit: TERMINATED},\n    WAITING:  {io_complete: READY},\n    TERMINATED: {}\n}\n\nfunction transition(process, event):\n    if event not in transitions[process.state]:\n        error(\"Invalid transition\")\n    process.state = transitions[process.state][event]\n    log(\"Process\", process.pid, \"->\", process.state)\n    \n    if process.state == TERMINATED:\n        release_resources(process)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-table-process-state-changes",
      children: "Dry Run Trace Table: Process State Changes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Process A State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Process B State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Process C State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ready Queue"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System boot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NEW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A admitted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A dispatched"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timer interrupt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NEW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B admitted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A, B]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B dispatched"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B requests disk I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAITING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A dispatched"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAITING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B I/O complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[B]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C created"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NEW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[B, C]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A exits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TERMINATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[B, C]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B dispatched"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[C]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-process-state-machine",
      children: "C++ Implementation: Process State Machine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <unordered_map>\n#include <queue>\n#include <vector>\n\nenum class State { NEW, READY, RUNNING, WAITING, TERMINATED };\nenum class Event { ADMITTED, DISPATCH, INTERRUPT, IO_WAIT, IO_COMPLETE, EXIT };\n\nstd::string state_name(State s) {\n    static const char* names[] = {\"NEW\",\"READY\",\"RUNNING\",\"WAITING\",\"TERMINATED\"};\n    return names[static_cast<int>(s)];\n}\n\nstruct Process {\n    int pid;\n    State state;\n    Process(int id) : pid(id), state(State::NEW) {}\n};\n\nclass StateMachine {\n    std::unordered_map<State, std::unordered_map<Event, State>> rules;\n\npublic:\n    StateMachine() {\n        rules[State::NEW][Event::ADMITTED] = State::READY;\n        rules[State::READY][Event::DISPATCH] = State::RUNNING;\n        rules[State::RUNNING][Event::INTERRUPT] = State::READY;\n        rules[State::RUNNING][Event::IO_WAIT] = State::WAITING;\n        rules[State::RUNNING][Event::EXIT] = State::TERMINATED;\n        rules[State::WAITING][Event::IO_COMPLETE] = State::READY;\n    }\n\n    bool transition(Process& p, Event e) {\n        auto state_it = rules.find(p.state);\n        if (state_it == rules.end()) return false;\n        auto event_it = state_it->second.find(e);\n        if (event_it == state_it->second.end()) return false;\n        State old = p.state;\n        p.state = event_it->second;\n        std::cout << \"P\" << p.pid << \": \" << state_name(old)\n                  << \" --[\" << event_name(e) << \"]--> \" << state_name(p.state) << \"\\n\";\n        return true;\n    }\n\n    static std::string event_name(Event e) {\n        static const char* names[] = {\"ADMITTED\",\"DISPATCH\",\"INTERRUPT\",\n                                       \"IO_WAIT\",\"IO_COMPLETE\",\"EXIT\"};\n        return names[static_cast<int>(e)];\n    }\n};\n\nint main() {\n    StateMachine sm;\n    Process p(1);\n    sm.transition(p, Event::ADMITTED);\n    sm.transition(p, Event::DISPATCH);\n    sm.transition(p, Event::IO_WAIT);\n    sm.transition(p, Event::IO_COMPLETE);\n    sm.transition(p, Event::DISPATCH);\n    sm.transition(p, Event::EXIT);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-process-state-machine",
      children: "Python Implementation: Process State Machine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from enum import Enum\n\nclass State(Enum):\n    NEW = 0\n    READY = 1\n    RUNNING = 2\n    WAITING = 3\n    TERMINATED = 4\n\nclass Event(Enum):\n    ADMITTED = 0\n    DISPATCH = 1\n    INTERRUPT = 2\n    IO_WAIT = 3\n    IO_COMPLETE = 4\n    EXIT = 5\n\nclass Process:\n    def __init__(self, pid):\n        self.pid = pid\n        self.state = State.NEW\n\nclass StateMachine:\n    def __init__(self):\n        self.rules = {\n            State.NEW:     {Event.ADMITTED: State.READY},\n            State.READY:   {Event.DISPATCH: State.RUNNING},\n            State.RUNNING: {Event.INTERRUPT: State.READY,\n                            Event.IO_WAIT: State.WAITING,\n                            Event.EXIT: State.TERMINATED},\n            State.WAITING: {Event.IO_COMPLETE: State.READY},\n        }\n\n    def transition(self, process, event):\n        if process.state not in self.rules:\n            return False\n        if event not in self.rules[process.state]:\n            return False\n        old_state = process.state\n        process.state = self.rules[process.state][event]\n        print(f\"P{process.pid}: {old_state.name} --[{event.name}]--> {process.state.name}\")\n        return True\n\nsm = StateMachine()\np = Process(1)\nfor e in [Event.ADMITTED, Event.DISPATCH, Event.IO_WAIT,\n          Event.IO_COMPLETE, Event.DISPATCH, Event.EXIT]:\n    sm.transition(p, e)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State Transition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash map lookup on enum pairs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ready Queue Enqueue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue push is constant time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ready Queue Dequeue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue pop is constant time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State Diagram Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(S*E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(S*E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S = states, E = events; typically trivial (5x5)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-2",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clarity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple 5-state model is easy to understand and implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real systems need 7+ states (add suspend states)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State transitions are O(1) operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Starvation possible if low-priority processes never get CPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Predictability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic state machine simplifies scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not model NUMA or cache affinity effects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Portability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All major OSes implement this model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suspended/blocked distinction missing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Starvation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-priority process never gets CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use aging (gradually increase priority over time)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deadlock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process A waits on B, B waits on A → both stuck in WAITING forever"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS must detect via cycle detection or use timeout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State Confusion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Race condition where two events fire simultaneously"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock state transitions with spinlock/mutex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Infinite Loop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process in RUNNING never yields CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timer interrupt forces preemption after quantum expires"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Orphan in Waiting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent dies while child is waiting on I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child becomes orphan; init (PID 1) adopts and eventually cleans up"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-control-block-pcb",
      children: "Process Control Block (PCB)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-employee-file-in-hr",
      children: "Real-World Analogy: Employee File in HR"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every employee has an HR file containing their employee ID, job title, current assignment, salary, skills, performance reviews, and project history. When a manager needs to reassign the employee, the HR file is retrieved, updated, and filed. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PCB"
      }), " is the OS's HR file for each process → it contains everything the kernel needs to manage, schedule, and track that process."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "definition-1",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The OS maintains a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process Control Block"
      }), " for every process → a data structure that holds all information needed to manage that process. Also known as a task control block. On Linux, the PCB is the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "task_struct"
      }), " structure in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<linux/sched.h>"
      }), " containing hundreds of fields."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pcb-contents",
      children: "PCB Contents"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process ID (PID)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique integer identifier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Program counter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address of the next instruction to execute"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU registers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All registers saved during context switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU scheduling info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority, scheduling queue pointers, scheduling parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page tables, segment tables, memory limits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accounting info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU time used, time limits, account numbers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I/O status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List of open files, I/O requests, allocated devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current process state (NEW, READY, etc.)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointers to parent process, children, siblings"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-pcb-operations",
      children: "Algorithm: PCB Operations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create PCB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate kernel memory, assign PID, initialize all fields to defaults"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On interrupt/syscall, copy CPU registers into PCB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Change process state field (e.g., RUNNING to READY)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch PCB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update kernel's current pointer to the new process's PCB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restore Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy new PCB's register values back to physical CPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete PCB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On termination, release kernel memory, recycle PID"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-pcb-structure-and-operations",
      children: "Pseudocode: PCB Structure and Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct PCB:\n    pid: int\n    state: {NEW, READY, RUNNING, WAITING, TERMINATED}\n    program_counter: address\n    registers: array[32] of word\n    stack_pointer: address\n    page_table: PageTable\n    file_table: array[256] of FileDescriptor\n    priority: int (0-139, lower = higher priority)\n    cpu_time: int (total CPU time used)\n    parent_pid: int\n    children: list of pid\n    scheduling_pointers: {next, prev} in ready_queue\n\nfunction create_pcb(parent_pcb):\n    new_pcb = allocate_kernel_memory(sizeof(PCB))\n    new_pcb.pid = allocate_pid()\n    new_pcb.state = NEW\n    new_pcb.parent_pid = parent_pcb.pid if parent_pcb else 0\n    new_pcb.program_counter = 0\n    copy_memory_layout(parent_pcb, new_pcb)  # COW optimization\n    add_to_process_list(new_pcb)\n    return new_pcb\n\nfunction save_context(pcb):\n    pcb.program_counter = READ_CPU_REGISTER(PC)\n    pcb.stack_pointer = READ_CPU_REGISTER(SP)\n    for i in 0..31:\n        pcb.registers[i] = READ_CPU_REGISTER(R[i])\n\nfunction restore_context(pcb):\n    WRITE_CPU_REGISTER(PC, pcb.program_counter)\n    WRITE_CPU_REGISTER(SP, pcb.stack_pointer)\n    for i in 0..31:\n        WRITE_CPU_REGISTER(R[i], pcb.registers[i])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-table-pcb-lifecycle",
      children: "Dry Run Trace Table: PCB Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider process P1 being created, running, context-switched, and terminated:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Priority"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CPU Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Registers"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create P1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NEW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "zeros"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Admit P1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "zeros"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dispatch P1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x400000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xFFFF0000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execute instr 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x400004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xFFFF0000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R1=42"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timer interrupt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x400008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xFFFEFFF8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R1=42,R2=7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dispatch P1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x400008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xFFFEFFF8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R1=42,R2=7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P1 calls exit()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TERMINATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete P1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-pcb-and-process-table",
      children: "C++ Implementation: PCB and Process Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <array>\n#include <cstdint>\n#include <list>\n\nconst int MAX_FILES = 256;\nconst int MAX_CHILDREN = 64;\n\nstruct PageTableEntry {\n    uint64_t frame_number;\n    bool present;\n    bool writable;\n};\n\nstruct FileDescriptor {\n    bool in_use;\n    uint32_t inode;\n    uint64_t offset;\n    uint32_t flags;\n};\n\nenum class ProcState { NEW, READY, RUNNING, WAITING, TERMINATED };\n\nstruct PCB {\n    uint32_t pid;\n    ProcState state;\n    uint64_t program_counter;\n    std::array<uint64_t, 32> registers;\n    uint64_t stack_pointer;\n    PageTableEntry page_table[1024];\n    FileDescriptor file_table[MAX_FILES];\n    int32_t priority;\n    uint64_t cpu_time_used;\n    uint32_t parent_pid;\n    std::vector<uint32_t> children;\n    PCB* next_ready;\n};\n\nclass ProcessTable {\n    std::list<PCB> table;\n    uint32_t next_pid = 1;\n\npublic:\n    PCB* create(uint32_t parent_pid = 0) {\n        table.emplace_back();\n        PCB* pcb = &table.back();\n        pcb->pid = next_pid++;\n        pcb->state = ProcState::NEW;\n        pcb->program_counter = 0;\n        pcb->registers.fill(0);\n        pcb->stack_pointer = 0;\n        pcb->priority = 120;\n        pcb->cpu_time_used = 0;\n        pcb->parent_pid = parent_pid;\n        pcb->next_ready = nullptr;\n        for (auto& fd : pcb->file_table) fd.in_use = false;\n        std::cout << \"PCB created: PID=\" << pcb->pid << \"\\n\";\n        return pcb;\n    }\n\n    PCB* find(uint32_t pid) {\n        for (auto& p : table)\n            if (p.pid == pid) return &p;\n        return nullptr;\n    }\n\n    void remove(uint32_t pid) {\n        table.remove_if([pid](const PCB& p) { return p.pid == pid; });\n        std::cout << \"PCB removed: PID=\" << pid << \"\\n\";\n    }\n\n    void save_context(PCB* pcb, uint64_t pc, uint64_t sp,\n                      const std::array<uint64_t,32>& regs) {\n        pcb->program_counter = pc;\n        pcb->stack_pointer = sp;\n        pcb->registers = regs;\n    }\n};\n\nint main() {\n    ProcessTable pt;\n    PCB* p1 = pt.create();\n    PCB* p2 = pt.create(1);\n\n    std::array<uint64_t, 32> regs = {0};\n    regs[0] = 42; regs[1] = 100;\n    pt.save_context(p1, 0x400010, 0xFFFEFFF8, regs);\n\n    std::cout << \"P1 PC: 0x\" << std::hex << p1->program_counter << \"\\n\";\n    std::cout << \"P1 R0: \" << std::dec << p1->registers[0] << \"\\n\";\n    pt.remove(1);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-pcb",
      children: "Python Implementation: PCB"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\nfrom enum import Enum\nfrom typing import List, Optional\n\nclass ProcState(Enum):\n    NEW = 1\n    READY = 2\n    RUNNING = 3\n    WAITING = 4\n    TERMINATED = 5\n\n@dataclass\nclass PageTableEntry:\n    frame_number: int = 0\n    present: bool = False\n    writable: bool = False\n\n@dataclass\nclass PCB:\n    pid: int\n    state: ProcState = ProcState.NEW\n    program_counter: int = 0\n    registers: List[int] = field(default_factory=lambda: [0] * 32)\n    stack_pointer: int = 0\n    priority: int = 120\n    cpu_time_used: int = 0\n    parent_pid: int = 0\n    children: List[int] = field(default_factory=list)\n    page_table: List[PageTableEntry] = field(default_factory=list)\n\nclass ProcessTable:\n    def __init__(self):\n        self.table: dict[int, PCB] = {}\n        self.next_pid = 1\n\n    def create(self, parent_pid=0) -> PCB:\n        pcb = PCB(\n            pid=self.next_pid,\n            parent_pid=parent_pid,\n            state=ProcState.NEW\n        )\n        self.table[self.next_pid] = pcb\n        self.next_pid += 1\n        print(f\"PCB created: PID={pcb.pid}\")\n        return pcb\n\n    def find(self, pid: int) -> Optional[PCB]:\n        return self.table.get(pid)\n\n    def remove(self, pid: int):\n        if pid in self.table:\n            del self.table[pid]\n            print(f\"PCB removed: PID={pid}\")\n\n    def save_context(self, pcb: PCB, pc: int, sp: int, regs: List[int]):\n        pcb.program_counter = pc\n        pcb.stack_pointer = sp\n        pcb.registers = regs[:32]\n\npt = ProcessTable()\np1 = pt.create()\np2 = pt.create(parent_pid=1)\nregs = [0] * 32\nregs[0] = 42\npt.save_context(p1, 0x400010, 0xFFFEFFF8, regs)\nprint(f\"P1 PC: {hex(p1.program_counter)}, R0: {p1.registers[0]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PCB Creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate fixed-size struct, assign PID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context Save"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R = number of registers (typically 16-32)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context Restore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as save; register count is constant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PCB Lookup by PID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table on PID; n = active processes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PCB Deletion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free kernel memory, recycle PID"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-3",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Completeness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCB holds ALL process metadata in one structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large PCB (several KB) consumes kernel memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lookup by PID is O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Saving/restoring all registers on every switch costs cycles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each process has independent PCB and address space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot share metadata between related processes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/proc filesystem exposes PCB fields for monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hundreds of fields in task_struct increase complexity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PID Table Full"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum number of processes reached"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ENOMEM returned; wait for processes to exit and recycle PIDs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Race Condition on Context Save"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupt during PCB field updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable interrupts during critical PCB sections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Corrupted PCB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory error damages kernel data structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel panics (cannot recover from corrupted scheduling data)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Negative PID"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PID overflow on 16-bit systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux defaults to 32768 max PID; configurable up to 4,194,304"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stale PCB Pointers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCB freed but pointer still referenced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference counting or RCU (Read-Copy-Update) in kernel"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "context-switch",
      children: "Context Switch"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-switching-workers-on-an-assembly-line",
      children: "Real-World Analogy: Switching Workers on an Assembly Line"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine an assembly line where one worker installs engines and another installs wheels. When the whistle blows, Worker A must ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "save"
      }), " their progress (which car, which bolt, torque wrench setting), step aside, and Worker B must ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "restore"
      }), " their setup (tools, position, parts). The time spent swapping is lost production → no cars move during the changeover. Context switching is identical: the CPU saves one process's state and loads another's, doing zero productive work during the swap."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "definition-2",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When the OS switches from one process to another, it must save the state of the currently running process and restore the saved state of the next process. This is called a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "context switch"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Process P0                    Scheduler                   Process P1\n   |                             |                            |\n   |         running             |                            |\n   |<----------------------------+---------------------------->|\n   |                      interrupt or system call            |\n   |                             |                            |\n   |                    save state of P0                      |\n   |                    into PCB0                             |\n   |                             |                            |\n   |                    reload state of P1                    |\n   |                    from PCB1                             |\n   |                             |                            |\n   |                             |          running           |\n   |<----------------------------+---------------------------->|\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Context switch time is pure overhead"
      }), " → the CPU does no useful work during a switch. Typical switch time is 1-10 microseconds (thousands of cycles). Modern systems may do hundreds or thousands of context switches per second."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-context-switch-steps",
      children: "Algorithm: Context Switch Steps"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trap/Interrupt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current process triggers timer interrupt, I/O interrupt, or syscall"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch to Kernel Mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU changes privilege level, uses kernel stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save User Registers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push all general-purpose registers onto kernel stack (or PCB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save PC and SP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save program counter and stack pointer into current PCB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Change current process state to READY (if preempted) or WAITING"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch Stack Pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Point SP to kernel stack of next process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load TLB/Page Table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch address space (flush TLB or load new page table base)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load PC and SP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restore program counter and stack pointer from next process's PCB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restore User Registers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop all registers from kernel stack of next process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return to User Mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU switches to user mode, starts executing new process"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-context-switch",
      children: "Pseudocode: Context Switch"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function context_switch(next_pcb):\n    # Save current process state\n    current_pcb = get_current_process()\n    \n    current_pcb.program_counter = READ_SPECIAL_REGISTER(PC)\n    current_pcb.stack_pointer = READ_SPECIAL_REGISTER(SP)\n    for reg in GENERAL_PURPOSE_REGISTERS:\n        current_pcb.registers[reg] = READ_SPECIAL_REGISTER(reg)\n    \n    current_pcb.state = READY  # or WAITING if I/O\n    \n    # Switch to next process\n    set_current_process(next_pcb)\n    \n    SET_PAGE_TABLE(next_pcb.page_table)  # may flush TLB\n    WRITE_SPECIAL_REGISTER(SP, next_pcb.stack_pointer)\n    \n    for reg in GENERAL_PURPOSE_REGISTERS:\n        WRITE_SPECIAL_REGISTER(reg, next_pcb.registers[reg])\n    \n    WRITE_SPECIAL_REGISTER(PC, next_pcb.program_counter)\n    # CPU now executes next_pcb's next instruction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-table-context-switch-p0---p1",
      children: "Dry Run Trace Table: Context Switch (P0 -> P1)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PC (P0)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SP (P0)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "R0 (P0)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PC (P1)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SP (P1)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "R0 (P1)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "New State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P0 executing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x4010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xE000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xD000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IRQ fires"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x4010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xE000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trap to kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x4010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xE000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save P0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x4010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xE000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(stored)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCB0 updated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCB0.PC=0x4010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCB0.SP=0xE000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCB0.R0=42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MMU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load P1 page table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restore P1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "from PCB1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "from PCB1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "from PCB1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P1 executing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xD000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total switching time: Steps 1-7 = approximately 1-10 microseconds of pure overhead."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-context-switch-simulation",
      children: "C++ Implementation: Context Switch Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <chrono>\n#include <thread>\n\nstruct Context {\n    uint64_t pc;\n    uint64_t sp;\n    std::vector<uint64_t> registers;\n    \n    Context() : pc(0), sp(0), registers(32, 0) {}\n};\n\nclass SimpleOS {\n    Context pcb[2];\n    int current_pid = 0;\n    int switch_count = 0;\n    \npublic:\n    SimpleOS() {\n        pcb[0].pc = 0x4000; pcb[0].sp = 0xE000;\n        pcb[1].pc = 0x5000; pcb[1].sp = 0xD000;\n        pcb[1].registers[0] = 99;\n    }\n    \n    void context_switch() {\n        int next_pid = 1 - current_pid;\n        \n        // Save current context\n        pcb[current_pid].pc = current_pid == 0 ? 0x4010 : 0x5010;\n        pcb[current_pid].sp = current_pid == 0 ? 0xDFFF : 0xCFFF;\n        pcb[current_pid].registers[0] = 42;\n        \n        std::cout << \"Saved P\" << current_pid << \": PC=0x\" << std::hex\n                  << pcb[current_pid].pc << \" SP=0x\" << pcb[current_pid].sp << \"\\n\";\n        \n        // Simulate TLB flush cost\n        volatile int tlb_flush = 0;\n        for (int i = 0; i < 100; i++) tlb_flush++;\n        \n        // Restore next context\n        current_pid = next_pid;\n        switch_count++;\n        \n        std::cout << \"Restored P\" << current_pid << \": PC=0x\" << std::hex\n                  << pcb[current_pid].pc << \" SP=0x\" << pcb[current_pid].sp\n                  << \" R0=\" << std::dec << pcb[current_pid].registers[0] << \"\\n\";\n        std::cout << \"Switch #\" << switch_count << \" complete\\n\";\n    }\n    \n    void benchmark_switches(int n) {\n        auto start = std::chrono::high_resolution_clock::now();\n        for (int i = 0; i < n; i++) context_switch();\n        auto end = std::chrono::high_resolution_clock::now();\n        auto ns = std::chrono::duration_cast<std::chrono::nanoseconds>(end - start).count();\n        std::cout << n << \" context switches: \" << ns << \" ns avg \"\n                  << (ns / n) << \" ns/switch\\n\";\n    }\n};\n\nint main() {\n    SimpleOS os;\n    os.context_switch();\n    os.benchmark_switches(10);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-context-switch",
      children: "Python Implementation: Context Switch"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\nfrom dataclasses import dataclass, field\nfrom typing import List\n\n@dataclass\nclass Context:\n    pc: int = 0\n    sp: int = 0\n    registers: List[int] = field(default_factory=lambda: [0] * 32)\n\nclass SimpleOS:\n    def __init__(self):\n        self.pcb = [Context(pc=0x4000, sp=0xE000),\n                    Context(pc=0x5000, sp=0xD000)]\n        self.pcb[1].registers[0] = 99\n        self.current_pid = 0\n        self.switch_count = 0\n\n    def context_switch(self):\n        next_pid = 1 - self.current_pid\n\n        # Save current\n        self.pcb[self.current_pid].pc = 0x4010 if self.current_pid == 0 else 0x5010\n        self.pcb[self.current_pid].sp = 0xDFFF if self.current_pid == 0 else 0xCFFF\n        self.pcb[self.current_pid].registers[0] = 42\n\n        print(f\"Saved P{self.current_pid}: PC={hex(self.pcb[self.current_pid].pc)} \"\n              f\"SP={hex(self.pcb[self.current_pid].sp)}\")\n\n        # TLB flush simulation\n        for _ in range(100):\n            pass\n\n        # Restore next\n        self.current_pid = next_pid\n        self.switch_count += 1\n        p = self.pcb[self.current_pid]\n        print(f\"Restored P{self.current_pid}: PC={hex(p.pc)} SP={hex(p.sp)} R0={p.registers[0]}\")\n\n    def benchmark(self, n):\n        start = time.perf_counter_ns()\n        for _ in range(n):\n            self.context_switch()\n        end = time.perf_counter_ns()\n        avg = (end - start) / n\n        print(f\"{n} switches: {avg:.0f} ns avg per switch\")\n\nos = SimpleOS()\nos.context_switch()\nos.benchmark(100)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context Save"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R = register count (16-32), constant per architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context Restore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as save"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TLB Flush"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single instruction on x86 (INVLPG or MOV CR3)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full Switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(R) + microcode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Register ops + MMU operations + cache effects"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why context switching is expensive:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Register save/restore"
        }), ": 16-32 general-purpose + control registers copied (hundreds of cycles)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TLB flush"
        }), ": The Translation Lookaside Buffer must be invalidated, causing TLB misses for the next process (thousands of cycles)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache pollution"
        }), ": L1/L2/L3 cache contents from the old process are largely useless for the new one → the new process starts with a \"cold\" cache"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pipeline drain"
        }), ": The CPU pipeline must be flushed and refilled"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kernel entry/exit"
        }), ": Switching to kernel mode and back adds hundreds of cycles"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-4",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete process isolation via separate address spaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLB flush + cache miss penalties are severe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Preemption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fair CPU sharing between all processes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-10 microsec overhead per switch Ã— thousands per second = significant waste"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Responsiveness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-latency response to I/O events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threads (same address space) switch 2-10x faster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Portability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Well-defined hardware mechanism across architectures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every architecture needs custom assembly for save/restore"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TLB Thrashing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-frequency switches cause constant TLB misses, near-zero useful work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increase time quantum; use larger page sizes (huge pages)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cache Cold Start"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New process finds L1/L2 cache empty, suffers hundreds of misses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache affinity scheduling (keep process on same core)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interrupt During Switch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested interrupt occurs while saving/restoring state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable interrupts during critical context switch section"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Null PCB Pointer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduler tries to switch to non-existent process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel BUG_ON check; panic if scheduling data is corrupted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overhead Dominance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "So many processes that 90%+ CPU time is context switching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increase quantum or reduce process count; use hybrid threading"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-creation",
      children: "Process Creation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-factory-duplicating-a-machine",
      children: "Real-World Analogy: Factory Duplicating a Machine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A factory has a CNC machine running Program X. To run Program Y without stopping X, the factory buys an identical CNC machine (the \"child\"), copies the setup, then loads Program Y onto it. The original machine continues running Program X. This is exactly the Unix ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fork()"
      }), " + ", (0,jsx_runtime.jsx)(_components.code, {
        children: "exec()"
      }), " pattern → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fork()"
      }), " duplicates the process, then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "exec()"
      }), " replaces the child's program. The two-step design allows the child to adjust settings (file descriptors, signals) before loading the new program."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "process-creation-with-fork-and-exec",
      children: "Process Creation with fork() and exec()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Processes create other processes via system calls. On Unix: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fork()"
      }), ". On Windows: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CreateProcess()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "fork()"
      }), " creates an almost exact copy of the calling process. The child gets a copy of the parent's address space, file descriptors, and signal handlers. The difference: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fork()"
      }), " returns the child's PID to the parent and 0 to the child."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "exec()"
      }), " replaces the current process's memory with a new program. The PID does not change, but the text, data, heap, and stack are completely replaced."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-fork--exec--wait",
      children: "Algorithm: fork() + exec() + wait()"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fork()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System call traps to kernel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocates new PCB and PID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child process created"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copies parent's address space (COW)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child has same memory layout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copies file descriptors and signal handlers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child inherits open files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns from fork()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent gets child PID; child gets 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Continues execution OR calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "wait()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent can do work in parallel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "execvp(\"/bin/ls\", args)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Child's memory replaced with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ls"
            }), " binary"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs new program"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ls"
            }), " executes and prints directory"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "exit()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child enters ZOMBIE state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "wait()"
            }), " returns child exit status"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zombie cleaned up; PID recycled"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-fork-exec-wait-pattern",
      children: "Pseudocode: fork-exec-wait Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function fork():\n    new_pcb = allocate_pcb()\n    new_pcb.pid = allocate_pid()\n    new_pcb.state = READY\n    new_pcb.parent_pid = current.pid\n    \n    # Copy-On-Write: share pages, mark read-only\n    for each page in current.page_table:\n        new_pcb.page_table[page] = current.page_table[page]\n        set_page_read_only(current.page_table[page])\n    \n    copy_file_descriptors(current, new_pcb)\n    copy_signal_handlers(current, new_pcb)\n    \n    add_to_ready_queue(new_pcb)\n    return new_pcb.pid   # to parent\n    # return 0            # to child (kernel does this via stack copy)\n\nfunction exec(path, argv):\n    load_program_from_disk(path)\n    free_current_memory()\n    setup_new_memory_layout()\n    copy_argv_to_stack(argv)\n    set_program_counter(entry_point)\n    # PID unchanged, just memory replaced\n\nfunction wait(pid):\n    while child_process(pid).state != TERMINATED:\n        sleep()  # block until child exit\n    exit_status = child_process(pid).exit_code\n    release_pcb(child_process(pid))\n    return exit_status\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-table-fork-exec-wait",
      children: "Dry Run Trace Table: fork-exec-wait"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Process"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Open FDs"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running shell"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bash image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdin,stdout,stderr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bash"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["User types ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ls"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bash image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdin,stdout,stderr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calls fork()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "trap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bash image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdin,stdout,stderr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "501"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NEW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "copy of bash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdin,stdout,stderr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marks pages COW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "501"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shares bash pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdin,stdout,stderr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fork() returns 501"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x2004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bash image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdin,stdout,stderr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ls child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fork() returns 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "501"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x2004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shares with bash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdin,stdout,stderr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ls child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calls exec(ls)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "501"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "trap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdin,stdout,stderr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loads /bin/ls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "501"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ls image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdin,stdout,stderr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ls child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs ls binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "501"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ls image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdin,stdout,stderr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ls child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ls completes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "501"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TERMINATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ls image (zombie)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "closed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wait() returns 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x3000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bash image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdin,stdout,stderr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reclaims zombie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "501"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "freed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-unix-fork-exec-wait",
      children: "C++ Implementation: Unix fork-exec-wait"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <sys/types.h>\n#include <sys/wait.h>\n#include <unistd.h>\n#include <cstring>\n#include <cerrno>\n\nint main() {\n    pid_t pid = fork();\n\n    if (pid < 0) {\n        std::cerr << \"Fork failed: \" << strerror(errno) << \"\\n\";\n        return 1;\n    }\n\n    if (pid == 0) {\n        // CHILD: replace with new program\n        std::cout << \"Child PID=\" << getpid()\n                  << \" Parent PID=\" << getppid() << \"\\n\";\n        execlp(\"/bin/ls\", \"ls\", \"-l\", nullptr);\n        // Only reached if exec fails\n        std::cerr << \"Exec failed: \" << strerror(errno) << \"\\n\";\n        _exit(127);\n    } else {\n        // PARENT: wait for child\n        std::cout << \"Parent: created child PID=\" << pid << \"\\n\";\n        int status;\n        waitpid(pid, &status, 0);\n        if (WIFEXITED(status)) {\n            std::cout << \"Child exited with status \"\n                      << WEXITSTATUS(status) << \"\\n\";\n        }\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-process-creation-simulation",
      children: "Python Implementation: Process Creation Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import os\nimport sys\nimport time\n\ndef fork_exec_wait():\n    pid = os.fork()\n\n    if pid < 0:\n        print(\"Fork failed\", file=sys.stderr)\n        sys.exit(1)\n\n    if pid == 0:\n        # CHILD: Replace with new program\n        print(f\"Child PID={os.getpid()} Parent PID={os.getppid()}\")\n        try:\n            os.execvp(\"/bin/ls\", [\"ls\", \"-l\"])\n        except FileNotFoundError:\n            print(\"Exec failed\", file=sys.stderr)\n            os._exit(127)\n    else:\n        # PARENT: Wait for child\n        print(f\"Parent: created child PID={pid}\")\n        child_pid, exit_status = os.waitpid(pid, 0)\n        if os.WIFEXITED(exit_status):\n            print(f\"Child exited with status {os.WEXITSTATUS(exit_status)}\")\n\nif __name__ == \"__main__\":\n    fork_exec_wait()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-5",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fork()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) (COW)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(address space) with COW optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy-On-Write shares pages; only copies when written"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fork() without COW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Naive fork copies entire address space (n = process size)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exec()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loads new program of size m from disk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wait()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocking syscall; scheduler picks another process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COW page fault"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy single page on first write"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Copy-On-Write matters"
      }), ": Naive fork() copies all memory (could be GB). COW shares pages as read-only. When either process writes, a page fault copies that single page. Most ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fork()"
      }), " calls are immediately followed by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "exec()"
      }), ", so COW avoids copying pages that are about to be discarded. This makes fork() O(1) in the common case."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-5",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fork()+exec()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-step design allows child setup before exec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two syscalls instead of one"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Near-instant fork; only modified pages copied"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly higher page fault rate after fork"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PID Semantics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PID unchanged across exec()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process identity tied to PID; can't change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child inherits env, FDs, signals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inadvertent inheritance can cause bugs (e.g., dup FDs)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-5",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fork Bomb"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process recursively creates infinite children"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ulimit -u"
            }), " limits user processes; system hits ", (0,jsx_runtime.jsx)(_components.code, {
              children: "max_pid"
            }), " limit"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Exec Failure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "exec() can't find or load the binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child must handle error (os._exit(127) in Unix convention)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "COW Race"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both parent and child write to same page simultaneously"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware MMU serializes page faults; kernel copies once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File Descriptor Leak"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child inherits open FDs it doesn't need"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Close unnecessary FDs in child before exec(); or set FD_CLOEXEC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "vfork() Blocking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vfork() blocks parent until child exec()/exit()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent cannot run until child releases address space"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-termination",
      children: "Process Termination"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-employee-resignation",
      children: "Real-World Analogy: Employee Resignation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An employee resigns. They must: finish their current task or hand it off, return company equipment (laptop, badge), close outstanding accounts, and submit final paperwork. HR records the termination, releases their desk, and notifies relevant parties. If the manager never acknowledges the exit paperwork, the employee stays in the system as a \"ghost\" (zombie). If the manager leaves before the employee, a department head (init) handles the offboarding."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "termination-events",
      children: "Termination Events"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A process terminates when:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["It calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exit()"
        }), " (normal termination)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["It returns from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main()"
        }), " (implicit exit)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It receives a signal it cannot handle (e.g., SIGKILL)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It causes an unrecoverable error (segmentation fault)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-process-termination",
      children: "Algorithm: Process Termination"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "exit()"
            }), " or triggers fatal error"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flushes I/O buffers, closes open files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Releases allocated memory (heap, stack)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closes all file descriptors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sends SIGCHLD signal to parent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sets process state to TERMINATED (zombie)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stores exit status in PCB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives SIGCHLD (or blocks on wait())"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "wait()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "waitpid()"
            }), " to read exit status"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removes PCB, recycles PID"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-process-termination",
      children: "Pseudocode: Process Termination"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function exit(exit_code):\n    # Step 1: Cleanup\n    for fd in current.file_table:\n        if fd.in_use:\n            close_file(fd)\n    \n    release_memory(current)\n    current.exit_code = exit_code\n    current.state = TERMINATED\n    \n    # Step 2: Notify parent\n    parent = get_pcb(current.parent_pid)\n    parent.signal_queue.add(SIGCHLD)\n    \n    # Step 3: Reparent children\n    for child in current.children:\n        child.parent_pid = INIT_PID\n    \n    # Step 4: Orphan cleanup by init\n    schedule()  # Let init process take over\n\nfunction waitpid(pid, options):\n    child = find_child(pid)\n    if child.state != TERMINATED:\n        if options & WNOHANG:\n            return 0  # non-blocking: no status yet\n        else:\n            block_until_state(child, TERMINATED)\n    \n    exit_code = child.exit_code\n    release_pcb(child)  # Free zombie\n    return exit_code\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-table-zombie-creation-and-cleanup",
      children: "Dry Run Trace Table: Zombie Creation and Cleanup"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Parent (P500)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Child (P501)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Zombie?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent running shell"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NEW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fork() called"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child dispatched"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child does work"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TERMINATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child calls exit() → zombie created"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TERMINATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent gets CPU, doesn't call wait() yet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TERMINATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent doing other work"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(cleaned)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent finally calls waitpid()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child's PID and PCB released"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-zombie-and-orphan",
      children: "C++ Implementation: Zombie and Orphan"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <sys/types.h>\n#include <sys/wait.h>\n#include <unistd.h>\n\n// Zombie demo: parent doesn't wait for child\nvoid zombie_demo() {\n    pid_t pid = fork();\n    if (pid == 0) {\n        std::cout << \"Child PID=\" << getpid() << \" exiting\\n\";\n        _exit(0);\n    } else {\n        std::cout << \"Parent sleeping... check zombie via 'ps'\\n\";\n        sleep(10);  // During this time, child is a zombie\n        int status;\n        waitpid(pid, &status, 0);  // Clean up zombie\n        std::cout << \"Zombie cleaned. Child status: \"\n                  << WEXITSTATUS(status) << \"\\n\";\n    }\n}\n\n// Orphan demo: parent exits before child\nvoid orphan_demo() {\n    pid_t pid = fork();\n    if (pid == 0) {\n        sleep(2);\n        std::cout << \"Child PID=\" << getpid()\n                  << \" PPID=\" << getppid() << \"\\n\";\n        // PPID should be 1 (init) after parent exits\n        _exit(0);\n    } else {\n        std::cout << \"Parent exiting. Child becomes orphan.\\n\";\n        _exit(0);\n    }\n}\n\nint main() {\n    std::cout << \"=== Zombie Demo ===\\n\";\n    zombie_demo();\n    // Orphan demo disabled by default; uncomment to test\n    // std::cout << \"\\n=== Orphan Demo ===\\n\";\n    // orphan_demo();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-zombie-and-orphan",
      children: "Python Implementation: Zombie and Orphan"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import os\nimport time\nimport sys\n\ndef zombie_demo():\n    pid = os.fork()\n    if pid == 0:\n        print(f\"Child PID={os.getpid()} exiting\")\n        os._exit(0)\n    else:\n        print(f\"Parent sleeping; child is zombie for 10s\")\n        time.sleep(5)\n        # Check for zombie with: ps aux | grep Z\n        input(\"Check zombie status, then press Enter...\")\n        child_pid, status = os.waitpid(pid, 0)\n        print(f\"Zombie cleaned. Exit status: {os.WEXITSTATUS(status)}\")\n\ndef orphan_demo():\n    pid = os.fork()\n    if pid == 0:\n        time.sleep(2)\n        print(f\"Child PID={os.getpid()} PPID={os.getppid()}\")\n        os._exit(0)\n    else:\n        print(f\"Parent PID={os.getpid()} exiting now\")\n        os._exit(0)\n\nif __name__ == \"__main__\":\n    # zombie_demo()\n    # orphan_demo()\n    print(\"Run zombie_demo() or orphan_demo() individually\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-6",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exit()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(F + M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F = open files to close, M = memory regions to release"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PCB Reclamation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free single kernel struct; PID added to free list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signal Delivery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add SIGCHLD flag to parent's pending signal set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Orphan Reparenting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C = number of child processes; reparent each to init"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-6",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zombie Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent can read exit status at its convenience"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCB consumed until wait() called; zombie leaks possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signal Notification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGCHLD enables async cleanup in parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent must handle signal properly or ignore will cause zombie leak"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Orphan Reparenting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guarantees no unparented process forever"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "init (PID 1) must be designed to never exit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resource Cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS guarantees resource reclamation on exit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cleanup can be slow if many resources to release"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-6",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zombie Flood"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thousands of zombies accumulate; PID table full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent must call wait() in a loop or use SIGCHLD handler"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Double Wait"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent calls wait() twice for same child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Second call returns error ECHILD (no such child)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Orphan Chain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grandparent dies before parent; child inherits chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All orphans eventually adopted by init (PID 1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Init as Parent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PID 1 exits (should never happen)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel panic → no init process means no orphan cleanup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Killed Before Cleanup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent killed before calling wait()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "init inherits all children of killed parent and cleans them"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interprocess-communication-ipc",
      children: "Interprocess Communication (IPC)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-two-coworkers-communicating",
      children: "Real-World Analogy: Two Coworkers Communicating"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alice and Bob work in the same office but different rooms. They can communicate in two ways:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Shared whiteboard"
          }), ": Alice writes on a whiteboard in the hallway; Bob reads it. Fast → no waiting for a messenger. But they need a protocol (who erases, who writes, when to read). If Alice writes while Bob reads, Bob sees partial data (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "shared memory"
          }), " with synchronization needed)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Messenger"
          }), ": Alice writes a note and sends it through interoffice mail. Bob receives the sealed envelope. Slower (mailroom involvement) but safe → Bob reads a complete message when ready, and this works even if Bob is in another city (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "message passing"
          }), ")."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "independent-vs-cooperating-processes",
      children: "Independent vs Cooperating Processes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Processes are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "independent"
      }), " if they cannot affect or be affected by other processes. They are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cooperating"
      }), " if they can interact. Reasons for cooperation:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Information sharing"
        }), ": Multiple users accessing the same database"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Computation speedup"
        }), ": Breaking a task into sub-tasks running in parallel"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modularity"
        }), ": Separate components for separate functions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Convenience"
        }), ": A user running multiple tasks simultaneously"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-ipc-decision-flow",
      children: "Algorithm: IPC Decision Flow"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "No"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Do processes share physical memory?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go to step 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use message passing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is maximum throughput critical?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use shared memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go to step 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is synchronization complexity acceptable?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use shared memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use message passing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does IPC need to work across network?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use sockets/message passing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go to step 2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shared-memory",
      children: "Shared Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-whiteboard-in-shared-office",
      children: "Real-World Analogy: Whiteboard in Shared Office"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A team shares a whiteboard. Anyone can write data, and everyone else sees it instantly → zero delay. But if two people write simultaneously, the result is illegible. They need a rule: only one person writes at a time (mutex), and a reader must wait until the writer finishes (synchronization). Shared memory works the same way → it's the fastest IPC because data isn't copied through the kernel after setup, but synchronization primitives (mutexes, semaphores) are mandatory."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "definition-3",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A region of memory is shared between processes. Once mapped, data written by one process is immediately visible to others. This is the fastest IPC method (no kernel involvement after setup)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-shared-memory-ipc",
      children: "Algorithm: Shared Memory IPC"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actor"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create shared memory segment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Producer / Consumer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attach segment to process address space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both processes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write data to shared region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Producer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronize (semaphore/mutex)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read data from shared region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detach shared segment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove shared segment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One process"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-shared-memory-producer-consumer",
      children: "Pseudocode: Shared Memory Producer-Consumer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SHARED struct {\n    int buffer[BUFFER_SIZE];\n    int count;\n    sem_t mutex;\n    sem_t empty;\n    sem_t full;\n} shared_data;\n\nfunction producer():\n    attach_shared_memory(SHM_KEY)\n    while True:\n        item = produce_item()\n        sem_wait(shared.empty)    # Wait if buffer full\n        sem_wait(shared.mutex)    # Exclusive access\n        shared.buffer[shared.count] = item\n        shared.count++\n        sem_post(shared.mutex)    # Release lock\n        sem_post(shared.full)     # Signal consumer\n\nfunction consumer():\n    attach_shared_memory(SHM_KEY)\n    while True:\n        sem_wait(shared.full)     # Wait if buffer empty\n        sem_wait(shared.mutex)    # Exclusive access\n        item = shared.buffer[--shared.count]\n        sem_post(shared.mutex)    # Release lock\n        sem_post(shared.empty)    # Signal producer\n        consume_item(item)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-table-shared-memory-producer-consumer",
      children: "Dry Run Trace Table: Shared Memory Producer-Consumer"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "mutex"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "empty"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "full"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create segment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUFSIZE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Producer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "produce_item=42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUFSIZE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Producer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sem_wait(empty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUFSIZE-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Producer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sem_wait(mutex)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[ ]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUFSIZE-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Producer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "write 42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[42]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUFSIZE-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Producer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sem_post(mutex)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[42]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUFSIZE-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Producer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sem_post(full)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[42]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUFSIZE-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sem_wait(full)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[42]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUFSIZE-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sem_wait(mutex)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[42]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUFSIZE-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "read 42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUFSIZE-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sem_post(mutex)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUFSIZE-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sem_post(empty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUFSIZE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-shared-memory-posix",
      children: "C++ Implementation: Shared Memory (POSIX)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <sys/mman.h>\n#include <sys/stat.h>\n#include <fcntl.h>\n#include <unistd.h>\n#include <cstring>\n#include <semaphore.h>\n\nconst char* SHM_NAME = \"/myshm\";\nconst int SHM_SIZE = 4096;\n\nstruct SharedBuffer {\n    sem_t mutex;\n    char data[1024];\n    int ready;\n};\n\nint main(int argc, char* argv[]) {\n    if (argc < 2) {\n        std::cerr << \"Usage: \" << argv[0] << \" (producer|consumer)\\n\";\n        return 1;\n    }\n\n    bool is_producer = (strcmp(argv[1], \"producer\") == 0);\n\n    int fd = shm_open(SHM_NAME, O_CREAT | O_RDWR, 0666);\n    ftruncate(fd, SHM_SIZE);\n    auto* buf = (SharedBuffer*)mmap(nullptr, SHM_SIZE,\n                   PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);\n    close(fd);\n\n    if (is_producer) {\n        sem_init(&buf->mutex, 1, 1);\n        buf->ready = 0;\n\n        sem_wait(&buf->mutex);\n        strcpy(buf->data, \"Hello from producer process!\");\n        buf->ready = 1;\n        sem_post(&buf->mutex);\n\n        std::cout << \"Producer wrote: \" << buf->data << \"\\n\";\n    } else {\n        // Consumer: read when ready\n        while (!buf->ready) usleep(1000);\n\n        sem_wait(&buf->mutex);\n        std::cout << \"Consumer read: \" << buf->data << \"\\n\";\n        sem_post(&buf->mutex);\n    }\n\n    munmap(buf, SHM_SIZE);\n    if (is_producer) shm_unlink(SHM_NAME);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-shared-memory",
      children: "Python Implementation: Shared Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import mmap\nimport struct\nimport time\nimport os\n\nSHM_SIZE = 4096\n\ndef producer():\n    fd = os.open(\"/dev/shm/myshm\", os.O_CREAT | os.O_RDWR, 0o666)\n    os.ftruncate(fd, SHM_SIZE)\n    mm = mmap.mmap(fd, SHM_SIZE)\n    os.close(fd)\n\n    message = b\"Hello from producer!\"\n    mm[0:4] = struct.pack(\"I\", len(message))\n    mm[4:4+len(message)] = message\n    mm[4+len(message)] = 1  # ready flag\n    print(f\"Producer wrote: {message.decode()}\")\n    mm.close()\n\ndef consumer():\n    fd = os.open(\"/dev/shm/myshm\", os.O_RDWR, 0o666)\n    mm = mmap.mmap(fd, SHM_SIZE)\n    os.close(fd)\n\n    while mm[4 + struct.unpack(\"I\", mm[0:4])[0]] != 1:\n        time.sleep(0.01)\n\n    msg_len = struct.unpack(\"I\", mm[0:4])[0]\n    msg = mm[4:4+msg_len].decode()\n    print(f\"Consumer read: {msg}\")\n    mm.close()\n    os.remove(\"/dev/shm/myshm\")\n\nif __name__ == \"__main__\":\n    import sys\n    if len(sys.argv) > 1 and sys.argv[1] == \"consumer\":\n        consumer()\n    elif len(sys.argv) > 1 and sys.argv[1] == \"prod\":\n        producer()\n    else:\n        print(\"Usage: py shm.py (prod|consumer)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-7",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shared Memory Create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel allocates pages for the segment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Attach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maps shared pages into process page table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Write (after setup)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct memory access → no kernel involved"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Read (after setup)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct memory read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Semaphore Lock/Unlock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atomic test-and-set in user space (futex)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Detach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unmaps pages from process page table"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why shared memory is fastest"
      }), ": After initial setup, reads and writes are plain memory operations (load/store). No system calls, no kernel copies, no context switches. The data path is: Process A writes to address X -> hardware writes to physical page -> Process B reads from mapped address X -> same physical page returns data. This is 10-100x faster than message passing for large data transfers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-7",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest IPC → no kernel after setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires synchronization (mutex/semaphore)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Volume"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient for large data transfers (MB+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared region size fixed at creation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero Copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No data copying between processes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page-table manipulation overhead on attach/detach"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simplicity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map once, read/write directly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Race conditions if synchronization forgotten"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-7",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Race Condition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two processes write simultaneously"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must use mutex/semaphore for all writes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deadlock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Producer waiting for empty, consumer waiting for full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use semaphore ordering to prevent circular wait"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory Corruption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One process writes past buffer bounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in protection → use fixed-size or guard pages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Orphaned Segment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process crashes after creating shared memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shm_unlink() or ipcrm to remove; survives reboot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stale Data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumer reads data that producer hasn't finished writing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use synchronization (ready flag, mutex) before reading"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "message-passing",
      children: "Message Passing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-postal-mail-system",
      children: "Real-World Analogy: Postal Mail System"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alice writes a letter, puts it in an envelope, addresses it to Bob, and drops it in a mailbox. The postal service (kernel) picks up the letter, transports it (copies data), and delivers it to Bob's mailbox. Bob retrieves the letter when ready. This works even if Alice is in New York and Bob is in London (distributed). The postal service handles buffering, routing, and delivery guarantees. The tradeoff: mail is slower than walking to a shared whiteboard, but it's safer and works across cities."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "definition-4",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Processes communicate by exchanging messages through the kernel. Messages are sent and received via system calls. No shared address space is needed → making this suitable for distributed systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-message-passing-posix-message-queues",
      children: "Algorithm: Message Passing (POSIX Message Queues)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create or open message queue with mq_open()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sender"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prepare message buffer with type and data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sender"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Call mq_send() → kernel copies message into kernel buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stores message in queue (may block if queue full)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receiver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Call mq_receive() → kernel copies message to user buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receiver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process the received message"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Close queue with mq_close()"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-message-passing",
      children: "Pseudocode: Message Passing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SENDER:\n    mqd = mq_open(\"/myqueue\", O_CREAT | O_WRONLY, 0666, NULL)\n    message.type = MSG_TYPE_DATA\n    message.data = \"Hello from sender\"\n    mq_send(mqd, &message, sizeof(message), priority=0)\n    mq_close(mqd)\n\nRECEIVER:\n    mqd = mq_open(\"/myqueue\", O_RDONLY)\n    mq_receive(mqd, &buffer, buffer_size, &priority)\n    print(\"Received:\", buffer.data)\n    mq_close(mqd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-table-message-passing",
      children: "Dry Run Trace Table: Message Passing"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Queue State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sender Buffer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Receiver Buffer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue created"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sender"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prepare message \"Hello\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Hello\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sender"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mq_send()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[\"Hello\"]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Hello\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy to kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[\"Hello\"]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(copied)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sender"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[\"Hello\"]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receiver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mq_receive()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Hello\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy to user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(copied)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receiver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Print message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Hello\" -> printed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-posix-message-queue",
      children: "C++ Implementation: POSIX Message Queue"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <fcntl.h>\n#include <sys/stat.h>\n#include <mqueue.h>\n#include <cstring>\n#include <cstdlib>\n\nconst char* QUEUE_NAME = \"/myipcqueue\";\nconst size_t MAX_MSG_SIZE = 256;\n\nstruct Message {\n    long type;\n    char data[248];\n};\n\nint main(int argc, char* argv[]) {\n    if (argc < 2) {\n        std::cerr << \"Usage: \" << argv[0] << \" (sender|receiver)\\n\";\n        return 1;\n    }\n\n    bool is_sender = (strcmp(argv[1], \"sender\") == 0);\n\n    struct mq_attr attr;\n    attr.mq_flags = 0;\n    attr.mq_maxmsg = 10;\n    attr.mq_msgsize = MAX_MSG_SIZE;\n    attr.mq_curmsgs = 0;\n\n    mqd_t mqd = mq_open(QUEUE_NAME, O_CREAT | O_RDWR, 0666, &attr);\n\n    if (is_sender) {\n        Message msg;\n        msg.type = 1;\n        strcpy(msg.data, \"Hello via message queue!\");\n        mq_send(mqd, (char*)&msg, sizeof(Message), 0);\n        std::cout << \"Sender sent: \" << msg.data << \"\\n\";\n    } else {\n        Message msg;\n        unsigned int priority;\n        ssize_t n = mq_receive(mqd, (char*)&msg, MAX_MSG_SIZE, &priority);\n        if (n >= 0) {\n            std::cout << \"Receiver got: \" << msg.data << \"\\n\";\n        }\n    }\n\n    mq_close(mqd);\n    if (is_sender) mq_unlink(QUEUE_NAME);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-message-queue",
      children: "Python Implementation: Message Queue"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import posix_ipc\nimport sys\nimport time\n\nQUEUE_NAME = \"/myipcqueue\"\n\ndef sender():\n    mq = posix_ipc.MessageQueue(QUEUE_NAME,\n                                posix_ipc.O_CREAT | posix_ipc.O_RDWR)\n    mq.send(b\"Hello via message queue!\")\n    print(\"Sender sent the message\")\n    mq.close()\n\ndef receiver():\n    mq = posix_ipc.MessageQueue(QUEUE_NAME, posix_ipc.O_RDWR)\n    message, priority = mq.receive()\n    print(f\"Receiver got: {message.decode()}\")\n    mq.close()\n    posix_ipc.unlink_message_queue(QUEUE_NAME)\n\nif __name__ == \"__main__\":\n    if len(sys.argv) > 1 and sys.argv[1] == \"sender\":\n        sender()\n    elif len(sys.argv) > 1 and sys.argv[1] == \"receiver\":\n        time.sleep(0.5)\n        receiver()\n    else:\n        print(\"Usage: py msg.py (sender|receiver)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-8",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mq_open()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opens kernel object by name"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mq_send()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must copy n-byte message from user to kernel space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mq_receive()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copies n-byte message from kernel to user space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blocking Send"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) if queue not full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m) total"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocks process; O(m) for m messages in queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blocking Receive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) if queue not empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wakes only when a message is available"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why message passing is slower than shared memory"
      }), ": Every send/receive requires:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A system call (user->kernel mode switch)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy data from user buffer to kernel buffer (for send)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy data from kernel buffer to user buffer (for receive)\nEach copy traverses the memory bus. For large data (MB+), this overhead dominates. Shared memory avoids both system calls and data copies after initialization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-8",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel isolates messages; no shared state corruption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel copies data twice → slower"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works across network (sockets, RPC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires marshalling/serialization for complex data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel handles buffering; optional blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed queue size; full queue blocks sender"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message boundaries preserved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed message size limits; variable-size overhead"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-8",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Queue Full"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sender tries to send to full queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block (default); or use O_NONBLOCK for EAGAIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Queue Empty"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receiver tries to receive from empty queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block (default); or use O_NONBLOCK for EAGAIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Message Overflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message exceeds max size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mq_send() fails with EMSGSIZE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Orphaned Queue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No processes have queue open"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue persists until mq_unlink(); survives in kernel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority Inversion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-priority messages block high-priority ones"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use message priorities; kernel delivers highest priority first"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pipes",
      children: "Pipes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-water-pipe-connecting-two-tanks",
      children: "Real-World Analogy: Water Pipe Connecting Two Tanks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A pipe connects two water tanks → water flows from one end (write) to the other (read). Data flows in one direction only (half-duplex). If you fill the pipe completely, the sender must wait until the receiver drains some water. If the receiver drains faster than the sender fills, the receiver waits. In Unix, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "anonymous pipes"
      }), " connect parent-child processes; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "named pipes (FIFOs)"
      }), " connect any processes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "definition-5",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pipe"
      }), " is a unidirectional communication channel between processes. Data written to the write end can be read from the read end. Anonymous pipes (", (0,jsx_runtime.jsx)(_components.code, {
        children: "pipe()"
      }), ") work between related processes. Named pipes (", (0,jsx_runtime.jsx)(_components.code, {
        children: "mkfifo()"
      }), ") work between any processes and persist beyond process lifetimes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-anonymous-pipe",
      children: "Algorithm: Anonymous Pipe"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pipe(int fd[2])"
            }), " → fd[0] for read, fd[1] for write"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fork()"
            }), " → child inherits both ends"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Close unused read end ", (0,jsx_runtime.jsx)(_components.code, {
              children: "close(fd[0])"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Close unused write end ", (0,jsx_runtime.jsx)(_components.code, {
              children: "close(fd[1])"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write data to fd[1] → data flows into kernel buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read data from fd[0] → data flows out of kernel buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Close fd[1] when done → sends EOF to child"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Close fd[0] → pipe fully closed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-pipe-communication",
      children: "Pseudocode: Pipe Communication"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PIPE:\n    fd = [read_end, write_end]\n    pipe(fd)          # Create pipe\n\nPARENT:\n    close(fd[0])      # Close unused read end\n    write(fd[1], \"Hello child\", 12)\n    close(fd[1])      # Signal EOF\n    wait(NULL)         # Wait for child\n\nCHILD:\n    close(fd[1])      # Close unused write end\n    while read(fd[0], buffer, 256) > 0:\n        print(buffer)  # Process data\n    close(fd[0])       # Done\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-table-pipe-data-flow",
      children: "Dry Run Trace Table: Pipe Data Flow"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pipe Buffer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "fd[0] (read)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "fd[1] (write)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pipe(fd) creates [3,4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (open)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 (open)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fork(); child gets [3,4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (open)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 (open)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "close(3) → parent reads nothing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (closed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 (open)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "close(4) → child writes nothing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (open)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 (closed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "write(4, \"Hello\") → 5 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Hello\" (5/65536)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "closed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 (open)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "read(3, buf, 256) → reads \"Hello\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (open)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "closed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "close(4) → write end closed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "closed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 (closed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "read(3) returns 0 (EOF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (open)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "closed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "close(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (closed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 (closed)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-anonymous-pipe",
      children: "C++ Implementation: Anonymous Pipe"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <unistd.h>\n#include <sys/wait.h>\n#include <cstring>\n\nint main() {\n    int fd[2];\n    if (pipe(fd) == -1) {\n        std::cerr << \"Pipe failed\\n\";\n        return 1;\n    }\n\n    pid_t pid = fork();\n    if (pid < 0) {\n        std::cerr << \"Fork failed\\n\";\n        return 1;\n    }\n\n    if (pid == 0) {\n        // CHILD: read from pipe, write to stdout\n        close(fd[1]);  // Close unused write end\n        char buffer[256];\n        ssize_t n;\n        while ((n = read(fd[0], buffer, sizeof(buffer) - 1)) > 0) {\n            buffer[n] = '\\0';\n            std::cout << \"Child received: \" << buffer;\n        }\n        close(fd[0]);\n    } else {\n        // PARENT: write to pipe\n        close(fd[0]);  // Close unused read end\n        const char* msg = \"Hello from parent!\\n\";\n        write(fd[1], msg, strlen(msg));\n        close(fd[1]);  // Signal EOF\n        wait(nullptr);\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-pipe",
      children: "Python Implementation: Pipe"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import os\nimport sys\n\ndef pipe_demo():\n    r_fd, w_fd = os.pipe()\n\n    pid = os.fork()\n    if pid < 0:\n        print(\"Fork failed\", file=sys.stderr)\n        sys.exit(1)\n\n    if pid == 0:\n        # CHILD: read from pipe\n        os.close(w_fd)\n        data = os.read(r_fd, 256).decode()\n        print(f\"Child received: {data}\")\n        os.close(r_fd)\n        os._exit(0)\n    else:\n        # PARENT: write to pipe\n        os.close(r_fd)\n        os.write(w_fd, b\"Hello from parent!\\n\")\n        os.close(w_fd)\n        os.waitpid(pid, 0)\n\nif __name__ == \"__main__\":\n    pipe_demo()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "named-pipe-fifo-c-implementation",
      children: "Named Pipe (FIFO) C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <fcntl.h>\n#include <sys/stat.h>\n#include <unistd.h>\n#include <cstring>\n\nconst char* FIFO_PATH = \"/tmp/myfifo\";\n\nint main(int argc, char* argv[]) {\n    if (argc < 2) {\n        std::cerr << \"Usage: \" << argv[0] << \" (writer|reader)\\n\";\n        return 1;\n    }\n\n    // Create FIFO (once)\n    mkfifo(FIFO_PATH, 0666);\n\n    if (strcmp(argv[1], \"writer\") == 0) {\n        int fd = open(FIFO_PATH, O_WRONLY);\n        const char* msg = \"Hello via FIFO!\";\n        write(fd, msg, strlen(msg) + 1);\n        close(fd);\n        std::cout << \"Writer sent: \" << msg << \"\\n\";\n    } else {\n        int fd = open(FIFO_PATH, O_RDONLY);\n        char buffer[256];\n        read(fd, buffer, sizeof(buffer));\n        std::cout << \"Reader got: \" << buffer << \"\\n\";\n        close(fd);\n        unlink(FIFO_PATH);\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-9",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pipe()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates kernel buffer and two file descriptors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "write() to pipe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) for small writes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(buffer_size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel copies data into buffer; blocks if full"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "read() from pipe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) for small reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel copies data from buffer; blocks if empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIFO open(write)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocks until reader opens; or use O_NONBLOCK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIFO open(read)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocks until writer opens; or use O_NONBLOCK"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-9",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simplicity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal API (read/write/close)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unidirectional only (need two pipes for bidirectional)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel buffer minimizes context switches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed buffer size (65536 bytes on Linux)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Named (FIFO)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works between unrelated processes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIFO pathname persists on filesystem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works with select/poll/epoll"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot seek (stream-based, not message-based)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-9",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Broken Pipe"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reader closes pipe; writer tries to write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGPIPE signal delivered; write returns EPIPE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pipe Full / Blocked Writer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer full (65536 bytes); writer blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use O_NONBLOCK on write fd; write returns EAGAIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty Pipe / Blocked Reader"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No data; reader blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use O_NONBLOCK on read fd; read returns EAGAIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deadlock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two pipes; each process waits for the other"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use proper protocol design; avoid circular dependencies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FIFO Reader Misses Data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIFO unlinked while reader opens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reader blocks until writer opens; cannot open for reading if no writer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-vs-thread-comprehensive-comparison",
      children: "Process vs Thread: Comprehensive Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-factory-vs-assembly-line-workers",
      children: "Real-World Analogy: Factory vs Assembly Line Workers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "process"
      }), " is like an entire factory → its own building, tools, raw materials, and workers. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "thread"
      }), " is like a single worker on an assembly line within that factory. Multiple workers (threads) in the same factory share the building, tools, and inventory (memory). They can hand each other parts instantly. But if one worker makes a mistake (crash), the entire factory may shut down. Switching to a different factory is expensive (bring all new tools). Switching to a different worker on the same line is cheap."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "comparison-table",
      children: "Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Process"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Thread"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Address Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate address space per process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shares address space with all threads in same process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Creation Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (fork + exec, PCB allocation, memory copy via COW)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (clone with CLONE_VM, just new stack + TCB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Context Switch Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-10 microseconds (TLB flush + cache cold)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.1-1 microseconds (no TLB flush, cache warm)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires kernel IPC (shared memory, pipes, sockets)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct memory access (shared heap; just need mutex)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Crash Isolation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High → one process crash doesn't affect others"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low → one thread crash (e.g., SIGSEGV) kills all threads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resource Overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High → full PCB, page tables, file descriptor table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low → just TCB, stack, and thread-local storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory Overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each process has own text/data/heap/stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threads share text/data/heap; each has private stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Synchronization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel-level IPC needed (slower)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-level synchronization (mutex, spinlock) is faster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Programmer Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower → no shared state bugs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher → race conditions, deadlocks, data races"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scheduling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel schedules every process independently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel schedules threads (or user-level thread scheduler)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Max Instances"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited by PID table + memory (thousands)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited by memory + stack size (tens of thousands)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Typical Use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent applications (browser, editor, server)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel subtasks (web server handling concurrent requests)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Creation Syscall"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fork()"
            }), " → creates almost complete copy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_create()"
            }), " → creates lightweight execution context"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Portability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same across all OSes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POSIX threads; Windows threads differ"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "when-to-use-process-vs-thread",
      children: "When to Use Process vs Thread"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Choose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Running a different program"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "exec() replaces entire address space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Serving thousands of clients"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower overhead per connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Need crash isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crash in one client doesn't take down others"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU-bound computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Share cache, avoid TLB flushes between subtasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Running untrusted code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate address space provides security isolation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I/O-bound work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context switch is cheaper; overlap I/O with computation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ipc-methods-comprehensive-comparison",
      children: "IPC Methods Comprehensive Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Shared Memory"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Message Passing"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pipes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sockets"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Direction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest (direct memory)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (kernel copies)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (protocol stack)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel Involvement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only setup/detach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every send/receive (syscall)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every read/write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every send/recv"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sync Required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (mutex/semaphore)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (kernel manages queue)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (kernel buffer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (kernel manages)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured messages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Byte stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Byte stream / datagram"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Process Relationship"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any processes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any processes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Related (anon) / Any (FIFO)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any (even across network)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network Support"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (same machine only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (via RPC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (same machine)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (TCP/UDP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Buffering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (direct access)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Max Data Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited (segment size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (mq_msgsize)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65536 bytes default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Preserves Messages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (raw bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (byte stream)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (SOCK_DGRAM) / No (SOCK_STREAM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "API Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (mmap/shm)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (mq_open/send/receive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (read/write)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (socket/bind/connect)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use Case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-throughput local data sharing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured communication, microservices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent-child data flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-server, distributed systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel Memory Usage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per segment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per queue + messages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per pipe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per socket + buffers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Persistence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Until destroyed or reboot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Until unlinked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Until both ends closed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Until socket closed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "zombie-vs-orphan",
      children: "Zombie vs Orphan"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Zombie Process"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Orphan Process"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process terminated but PCB still in table waiting for parent's wait()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process whose parent terminated before the child"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TERMINATED (dead, but not cleaned)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RUNNING / READY / WAITING (still alive)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resource Consumption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only PCB (minimal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full resources (memory, FDs, etc.)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cleanup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent calls wait() / waitpid()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adopted by init (PID 1), which calls wait()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Danger"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PID table exhaustion if many accumulate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (gets new parent automatically)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Detection"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ps"
            }), " shows state Z"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PPID becomes 1 (or subreaper PID)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prevention"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always call wait(); use SIGCHLD handler; set SA_NOCLDWAIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No prevention needed; OS handles"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Zombie: process exits, parent hasn't called wait(). PCB retained for exit status.\n         `ps -l` shows \"Z\". Can exhaust PID table. Fix: wait() or SIGCHLD handler.\n\nOrphan: parent exits before child. init (PID 1) inherits child.\n         `getppid()` returns 1. No resource leak → init cleans up.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "context-switch-cost",
      children: "Context Switch Cost"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why context switching is expensive (interview answer):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Register save/restore"
        }), ": 16-32 registers Ã— 8 bytes each = 128-256 bytes must be saved to PCB and restored from next PCB (~50-100 cycles)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TLB flush"
        }), ": Switching address spaces requires invalidating the TLB. Next process will suffer TLB misses on first access to every page (~500-2000 cycles total)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache pollution"
        }), ": L1 cache (32KB), L2 cache (256KB), L3 cache (8-32MB) mostly contain old process data. New process starts \"cold\" → every memory access is a cache miss (~100-300 cycles per miss)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pipeline drain"
        }), ": Modern CPUs are deeply pipelined (14-19 stages in Skylake). A context switch flushes the pipeline, costing ~20-40 cycles"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kernel entry/exit"
        }), ": Switching to ring 0 and back adds ~200-500 cycles"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total: ~1000-10000 cycles lost, or 1-10 microseconds per switch."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mitigation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Larger time quantum (reduce switch frequency)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Threads (same address space = no TLB flush)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cache affinity scheduling (keep thread on same core)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Huge pages (reduce TLB misses after switch)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ipc-performance",
      children: "IPC Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview answer for IPC performance ranking:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Shared Memory"
          }), " → Fastest. After mmap, all operations are user-space memory reads/writes. No syscalls, no kernel copies. Throughput can exceed 10 GB/s on modern hardware. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Downside"
          }), ": synchronization required."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pipes/Unix Domain Sockets"
          }), " → Fast for local IPC. Kernel copies data once (user->kernel->user). Typical throughput: 1-5 GB/s. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Downside"
          }), ": context switches for each read/write."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "POSIX Message Queues"
          }), " → Moderate speed. Kernel copies messages; priority scheduling built-in. Throughput: 500 MB/s - 1 GB/s. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Downside"
          }), ": fixed message sizes, queue limits."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "TCP Sockets (loopback)"
          }), " → Slowest for local IPC. Full network stack traversed (even on loopback). Throughput: 100-500 MB/s. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Downside"
          }), ": protocol overhead, but natively works across machines."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Performance comparison for 1 MB transfer:\n  Shared Memory:    ~0.1 ms  (zero copy after setup)\n  Pipe:             ~0.5 ms  (one kernel copy)\n  Message Queue:    ~0.8 ms  (two kernel copies + priority sort)\n  TCP Loopback:     ~2.0 ms  (full network stack + checksums)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb"
      }), ": Prefer shared memory for maximum throughput and large data. Prefer pipes or message queues for simplicity and structure. Prefer sockets when cross-network communication is required."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "linux-fork--exec--cow",
      children: "Linux: fork() + exec() + COW"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the Linux kernel, process creation is through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "clone()"
      }), " which is the syscall underlying both ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fork()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pthread_create()"
      }), ". The task_struct in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<linux/sched.h>"
      }), " is the PCB."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Kernel internals (simplified)\nstruct task_struct {\n    volatile long state;           // -1 unrunnable, 0 runnable, >0 stopped\n    void *stack;                   // Kernel stack\n    unsigned int flags;            // Per-process flags (PF_KTHREAD, etc.)\n    int on_cpu;                    // Which CPU is executing\n    int prio, static_prio;        // Dynamic and static priority\n    struct list_head tasks;        // Linked list of all processes\n    struct mm_struct *mm;         // Memory descriptor (page tables)\n    struct mm_struct *active_mm;  // Active memory descriptor\n    pid_t pid;                     // Process ID\n    struct task_struct *parent;   // Parent process\n    struct list_head children;    // List of children\n    struct files_struct *files;   // Open file descriptors\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key Linux features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Copy-On-Write fork"
        }), ": fork() is implemented via clone(SIGCHLD, 0). Pages are marked read-only and shared until written."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PID recycling"
        }), ": Linux can handle up to 4,194,304 PIDs (configurable via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/proc/sys/kernel/pid_max"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OOM Killer"
        }), ": When memory runs out, Out-Of-Memory killer selects a process to terminate using a heuristic score (oom_score)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "windows-createprocess",
      children: "Windows: CreateProcess()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Windows uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CreateProcess()"
      }), " → a single syscall that both creates a new process and loads the executable (no fork/exec separation)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Windows process creation\n#include <windows.h>\n#include <iostream>\n\nint main() {\n    STARTUPINFO si = { sizeof(si) };\n    PROCESS_INFORMATION pi;\n\n    BOOL success = CreateProcess(\n        L\"C:\\\\Windows\\\\System32\\\\notepad.exe\",  // Application\n        NULL,           // Command line\n        NULL,           // Process security attributes\n        NULL,           // Thread security attributes\n        FALSE,          // Handle inheritance\n        0,              // Creation flags\n        NULL,           // Environment block\n        NULL,           // Current directory\n        &si,            // Startup info\n        &pi             // Process information\n    );\n\n    if (success) {\n        std::cout << \"Process created. PID=\" << pi.dwProcessId << \"\\n\";\n        WaitForSingleObject(pi.hProcess, INFINITE);  // Like wait()\n        CloseHandle(pi.hProcess);\n        CloseHandle(pi.hThread);\n    } else {\n        std::cerr << \"CreateProcess failed: \" << GetLastError() << \"\\n\";\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key Windows differences from Unix:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CreateProcess()"
        }), " is a single call → no fork/exec split (Windows uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CreateProcess()"
        }), ", and processes can spawn children via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CreateProcess()"
        }), " only)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Handle inheritance"
        }), ": Child processes can inherit handles; controlled by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bInheritHandles"
        }), " parameter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Jobs"
        }), ": Windows has Job objects → groups of processes managed together (CPU limits, memory limits, kill on job close)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Process Environment Block (PEB)"
        }), ": Windows' equivalent of PCB, accessed via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "NtQueryInformationProcess()"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "posix-ipc-summary",
      children: "POSIX IPC Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "IPC Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "POSIX API"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Syscalls"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Persistence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shared Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POSIX shared memory"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "shm_open()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mmap()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ftruncate()"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Until ", (0,jsx_runtime.jsx)(_components.code, {
              children: "shm_unlink()"
            }), " or reboot"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "System V Shared Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System V IPC"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "shmget()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "shmat()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "shmdt()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "shmctl()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Until removed or reboot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Message Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POSIX message queue"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "mq_open()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mq_send()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mq_receive()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mq_close()"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Until ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mq_unlink()"
            }), " or reboot"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "System V Message Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System V IPC"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "msgget()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "msgsnd()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "msgrcv()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "msgctl()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Until removed or reboot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anonymous Pipe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POSIX pipes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pipe()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "read()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "write()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "close()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Until both ends closed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Named Pipe (FIFO)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POSIX FIFO"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "mkfifo()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "open()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "read()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "write()"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Until ", (0,jsx_runtime.jsx)(_components.code, {
              children: "unlink()"
            }), " removes path"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unix Domain Socket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POSIX sockets"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "socket()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bind()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "connect()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "send()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "recv()"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Until ", (0,jsx_runtime.jsx)(_components.code, {
              children: "unlink()"
            }), " removes path"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POSIX signals"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kill()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "signal()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sigaction()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate delivery"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-process-tree-with-ps",
      children: "Example 1: Process Tree with ps"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ ps -eo pid,ppid,comm,state,wchan\n  PID  PPID COMMAND         S WCHAN\n    1     0 systemd         S -\n  345     1 sshd            S poll_schedule_timeout\n  678   345 bash            S wait_woken\n  712   678 ps              R -\n  890     1 cron            S hrtimer_nanosleep\n  891     1 rsyslogd        S do_sys_poll\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation"
      }), ": PID 1 (systemd/init) is the root of all processes. sshd (PID 345) runs as a child of systemd, waiting for connections. bash is a child of sshd (user logged in). ps runs directly from bash with state R (running). The WCHAN column shows what the kernel function the process is blocked on."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-visualizing-process-state-changes",
      children: "Example 2: Visualizing Process State Changes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <unistd.h>\n#include <sys/wait.h>\n\nint main() {\n    pid_t pid = fork();\n\n    if (pid == 0) {\n        std::cout << \"Child: Entering RUNNING state\\n\";\n        sleep(2);  // Child moves to WAITING (sleep)\n        std::cout << \"Child: Woke up, back in RUNNING\\n\";\n    } else {\n        std::cout << \"Parent: In RUNNING, waiting for child\\n\";\n        wait(NULL);  // Parent could be in WAITING if child not yet done\n        std::cout << \"Parent: Child finished\\n\";\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "State transitions in this program:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parent: RUNNING -> WAITING (wait()) -> RUNNING (child exits) -> TERMINATED"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Child: RUNNING -> WAITING (sleep()) -> RUNNING (wake) -> TERMINATED"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-process-pipeline-ls--wc--l",
      children: "Example 3: Process Pipeline (ls | wc -l)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <unistd.h>\n#include <sys/wait.h>\n\nint main() {\n    int fd[2];\n    pipe(fd);\n    pid_t pid = fork();\n\n    if (pid == 0) {\n        // Child: run \"ls\", write to pipe\n        close(fd[0]);                // Close read end\n        dup2(fd[1], STDOUT_FILENO);  // Redirect stdout to pipe\n        close(fd[1]);\n        execlp(\"ls\", \"ls\", nullptr);  // ls writes to pipe instead of terminal\n    } else {\n        // Parent: run \"wc -l\", read from pipe\n        close(fd[1]);                // Close write end\n        dup2(fd[0], STDIN_FILENO);   // Redirect stdin from pipe\n        close(fd[0]);\n        wait(nullptr);               // Wait for ls to finish\n        execlp(\"wc\", \"wc\", \"-l\", nullptr);  // wc reads from pipe\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How shell pipelines work"
      }), ": The shell creates a pipe, forks two child processes, redirects stdout of the first to the pipe's write end, and stdin of the second from the pipe's read end. Data flows directly: ls -> [pipe kernel buffer] -> wc."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-producer-consumer-with-shared-memory-and-semaphores",
      children: "Example 4: Producer-Consumer with Shared Memory and Semaphores"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <pthread.h>\n#include <semaphore.h>\n#include <unistd.h>\n\nconst int BUFFER_SIZE = 5;\nint buffer[BUFFER_SIZE];\nint in = 0, out = 0;\n\nsem_t empty, full, mutex;\n\nvoid* producer(void* arg) {\n    for (int i = 0; i < 10; i++) {\n        sem_wait(&empty);\n        sem_wait(&mutex);\n\n        buffer[in] = i;\n        std::cout << \"Produced: \" << i << \" at \" << in << \"\\n\";\n        in = (in + 1) % BUFFER_SIZE;\n\n        sem_post(&mutex);\n        sem_post(&full);\n        usleep(50000);\n    }\n    return nullptr;\n}\n\nvoid* consumer(void* arg) {\n    for (int i = 0; i < 10; i++) {\n        sem_wait(&full);\n        sem_wait(&mutex);\n\n        int val = buffer[out];\n        std::cout << \"Consumed: \" << val << \" from \" << out << \"\\n\";\n        out = (out + 1) % BUFFER_SIZE;\n\n        sem_post(&mutex);\n        sem_post(&empty);\n        usleep(100000);\n    }\n    return nullptr;\n}\n\nint main() {\n    sem_init(&empty, 0, BUFFER_SIZE);\n    sem_init(&full, 0, 0);\n    sem_init(&mutex, 0, 1);\n\n    pthread_t p, c;\n    pthread_create(&p, nullptr, producer, nullptr);\n    pthread_create(&c, nullptr, consumer, nullptr);\n\n    pthread_join(p, nullptr);\n    pthread_join(c, nullptr);\n\n    sem_destroy(&empty);\n    sem_destroy(&full);\n    sem_destroy(&mutex);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[TIP]\nThe ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fork()"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exec()"
        }), " pattern is the Unix way of creating processes. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fork()"
        }), " duplicates the current process, then ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exec()"
        }), " replaces it with a new program. This two-step design allows the child to modify its environment (file descriptors, signals) before loading the new program."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[TIP]\nUse Copy-On-Write (COW) thoughtfully → fork() is fast because pages are shared until written. But if the child writes to many pages immediately, COW overhead can exceed naive copy. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vfork()"
        }), " if the child will immediately exec() without writing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[WARNING]\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Zombie processes"
        }), " are terminated processes whose parent has not called ", (0,jsx_runtime.jsx)(_components.code, {
          children: "wait()"
        }), ". They only consume a PCB entry but can exhaust the PID table if accumulated. Always call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "wait()"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "waitpid()"
        }), " in the parent. Alternatively, set a SIGCHLD handler with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SA_NOCLDWAIT"
        }), " to auto-reap children."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[WARNING]\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Fork bombs"
        }), " can crash a system by exhausting the PID table and memory. Protect against them with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ulimit -u"
        }), " (max user processes). If you suspect a fork bomb, use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kill -STOP -1"
        }), " to freeze all processes, then kill the offending process."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[NOTE]\nContext switching is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "pure overhead"
        }), " → the CPU does zero useful work during a switch. Modern systems do hundreds to thousands of context switches per second, making switch efficiency critical. Use threads (same address space) when you need parallelism without the context switch penalty."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[NOTE]\nLinux's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pthread_create()"
        }), " internally uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clone()"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLONE_VM | CLONE_THREAD"
        }), " flags. This shares the address space but creates a separate task_struct and stack. This is why threads are sometimes called \"lightweight processes.\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Shared Memory"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Message Passing"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (kernel bypass after setup)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (kernel copies messages)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit (mutex/semaphore needed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit (blocking send/recv)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (race conditions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (kernel-managed buffers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed Support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (needs shared physical memory)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (works across network)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-throughput local data sharing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured communication, distributed systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Granularity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw bytes (arbitrary size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-size messages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel Mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User mode after setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every call enters kernel mode"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Process"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program in execution with own address space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PCB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process Control Block → kernel data structure for process metadata"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Context Switch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Saving/restoring CPU state when switching processes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "fork()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System call to create a child process (Unix)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "exec()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System call to replace current process image"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zombie"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Terminated process awaiting parent ", (0,jsx_runtime.jsx)(_components.code, {
              children: "wait()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Orphan"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Process whose parent died; adopted by ", (0,jsx_runtime.jsx)(_components.code, {
              children: "init"
            }), " (PID 1)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "COW"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy-On-Write → shares pages until one process writes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interprocess Communication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Shared Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPC via directly accessible common memory region"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Message Passing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPC via kernel-mediated message exchange"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pipe"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unidirectional byte stream between processes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FIFO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Named pipe → pipe that exists as a filesystem entry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Semaphore"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronization primitive for IPC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mutex"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutual exclusion lock for shared resource access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "task_struct"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux kernel's PCB structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "createProcess()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows API for process creation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-process-lifecycle-simulator",
      children: "TypeScript Process Lifecycle Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following TypeScript code models process states, transitions, context switching, and IPC:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Process Lifecycle & IPC Simulator\n * Demonstrates 5-state model, context switching, and pipe IPC\n */\ntype ProcessState = 'new' | 'ready' | 'running' | 'waiting' | 'terminated';\n\ninterface Process {\n  pid: number;\n  state: ProcessState;\n  programCounter: number;\n  registers: number[];\n  priority: number;\n  arrivalTime: number;\n  burstTime: number;\n  memorySize: number;\n  waitTime: number;\n  turnaroundTime: number;\n}\n\nclass ProcessManager {\n  private processes: Map<number, Process> = new Map();\n  private readyQueue: Process[] = [];\n  private running: Process | null = null;\n  private nextPid = 1;\n  private clock = 0;\n  private totalContextSwitches = 0;\n  private log: string[] = [];\n\n  createProcess(priority: number, burstTime: number): number {\n    const pid = this.nextPid++;\n    const proc: Process = {\n      pid, state: 'new', programCounter: 0,\n      registers: Array(16).fill(0), priority,\n      arrivalTime: this.clock, burstTime,\n      memorySize: 1024 * (1 + Math.floor(Math.random() * 8)),\n      waitTime: 0, turnaroundTime: 0\n    };\n    this.processes.set(pid, proc);\n    this.log.push(`[t=${this.clock}] Process ${pid} created (priority=${priority}, burst=${burstTime})`);\n    this.admitProcess(pid);\n    return pid;\n  }\n\n  private admitProcess(pid: number): void {\n    const proc = this.processes.get(pid);\n    if (!proc || proc.state !== 'new') return;\n    proc.state = 'ready';\n    this.readyQueue.push(proc);\n    this.log.push(`[t=${this.clock}] Process ${pid} admitted → READY queue`);\n  }\n\n  scheduleRoundRobin(quantum: number): void {\n    if (this.readyQueue.length === 0 && !this.running) {\n      this.log.push(`[t=${this.clock}] CPU idle — no processes ready`);\n      this.clock += 1;\n      return;\n    }\n\n    // Preempt running process if quantum expired\n    if (this.running) {\n      this.totalContextSwitches++;\n      this.log.push(`[t=${this.clock}] Context switch: saving state of P${this.running.pid}`);\n      \n      // Save register state (simplified)\n      this.running.registers = this.running.registers.map(r => r + 1);\n      \n      if (this.running.burstTime > 0) {\n        this.running.state = 'ready';\n        this.readyQueue.push(this.running);\n        this.log.push(`[t=${this.clock}] P${this.running.pid} preempted → READY (burst remaining: ${this.running.burstTime})`);\n      }\n    }\n\n    // Pick next process from ready queue\n    if (this.readyQueue.length > 0) {\n      const next = this.readyQueue.shift()!;\n      this.running = next;\n      next.state = 'running';\n\n      // Execute for quantum or until completion\n      const execTime = Math.min(quantum, next.burstTime);\n      next.burstTime -= execTime;\n      this.clock += execTime;\n\n      this.log.push(`[t=${this.clock}] P${next.pid} RUNNING for ${execTime}ms`);\n\n      if (next.burstTime <= 0) {\n        next.state = 'terminated';\n        next.turnaroundTime = this.clock - next.arrivalTime;\n        this.log.push(`[t=${this.clock}] P${next.pid} TERMINATED (turnaround=${next.turnaroundTime})`);\n        this.running = null;\n      }\n    }\n  }\n\n  simulatePipeIPC(senderPid: number, receiverPid: number, data: string): void {\n    this.log.push(`[t=${this.clock}] IPC: P${senderPid} writes \"${data}\" to pipe`);\n    this.log.push(`[t=${this.clock}] IPC: P${receiverPid} reads \"${data}\" from pipe`);\n    this.log.push(`[t=${this.clock}] Pipe buffer: kernel-managed ${data.length}-byte transfer`);\n  }\n\n  getStats(): string {\n    const processes = Array.from(this.processes.values());\n    const avgTurnaround = processes.reduce((s, p) => s + p.turnaroundTime, 0) / processes.length;\n    return JSON.stringify({\n      totalProcesses: this.processes.size,\n      contextSwitches: this.totalContextSwitches,\n      avgTurnaroundTime: avgTurnaround.toFixed(2),\n      currentClock: this.clock,\n      runningPid: this.running?.pid ?? null,\n      readyQueueLength: this.readyQueue.length\n    }, null, 2);\n  }\n\n  getLog(): string[] {\n    return [...this.log];\n  }\n}\n\n// Usage: simulate 3 processes with RR scheduling (quantum=5ms)\nconst pm = new ProcessManager();\npm.createProcess(1, 12);  // pid=1, burst=12\npm.createProcess(1, 8);   // pid=2, burst=8\npm.createProcess(2, 20);  // pid=3, burst=20\n\nfor (let i = 0; i < 15; i++) {\n  pm.scheduleRoundRobin(5);\n}\n\npm.simulatePipeIPC(1, 2, \"Hello from P1 to P2 via pipe\");\nconsole.log(pm.getLog().join('\\n'));\nconsole.log(pm.getStats());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-chapter-quiz-questions",
      children: "Additional Chapter Quiz Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the minimum number of process states in the five-state model?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 3"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 4"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 5"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 7"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In Linux, what does the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "WCHAN"
          }), " field in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ps"
          }), " output represent?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) The CPU core the process is running on"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) The kernel function the process is blocked in"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) The wait channel for I/O"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) The priority level"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is true about Copy-On-Write (COW)?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Pages are copied immediately after fork"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Pages are shared until one process writes to them"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) COW eliminates the need for fork"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) COW only works with threads"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What happens when a child process calls ", (0,jsx_runtime.jsx)(_components.code, {
            children: "exec()"
          }), "?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) The child continues running the parent's code"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) The child's address space is replaced with a new program"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) The parent process is terminated"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) The child becomes a zombie"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fork()"
          }), " system call, what value does the child process receive as the return value?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) The parent's PID"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 0"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) -1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) The child's own PID"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which IPC mechanism requires the least kernel intervention after setup?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Pipes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Message queues"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Shared memory"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Sockets"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 9-c, 10-b, 11-b, 12-b, 13-b, 14-c"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trace the process state transitions of a program that reads a file: start with NEW, show every state change through READY, RUNNING, WAITING (during I/O), back to READY, RUNNING, and finally TERMINATED."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "14",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a TypeScript program that simulates process scheduling using a priority queue. Create 10 processes with random burst times (1-20ms) and priorities (1-5). Schedule them using preemptive priority scheduling and report average waiting time, turnaround time, and CPU utilization."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ps -eo pid,ppid,stat,wchan,comm"
        }), " on a Linux system and identify: which process has the most children, which processes are in uninterruptible sleep (D state), and what kernel functions they're blocked on. Explain each WCHAN value."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a complete process lifecycle simulator in TypeScript with: process creation (fork simulation), scheduling (Round Robin), context switching (with register save/restore), IPC via shared memory (simulated with typed arrays), and termination with zombie detection. Measure context switch overhead."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Research and implement the Linux ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clone()"
        }), " syscall's flag-based resource sharing in TypeScript. Create a function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cloneProcess(flags: CloneFlags): number"
        }), " where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLONE_VM"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLONE_FILES"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLONE_SIGHAND"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLONE_THREAD"
        }), " control whether memory, file descriptors, signal handlers, and thread group are shared. Show how ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fork()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pthread_create()"
        }), " are both special cases of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clone()"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "fork()/exec()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spawn CGI scripts, worker processes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create worker for each query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execute user commands"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App launch via Activity/Zygote"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPC: Shared Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache sharing between workers (Nginx shmem)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer pool (shared between connections)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupt-to-task data sharing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ContentProvider data sharing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPC: Message Passing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request queuing (Apache worker queue)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query routing to executors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inter-task communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android Binder IPC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pipes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CGI data piping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device driver data flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shell pipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Process Lifecycle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection-per-fork (Apache prefork)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction commit/rollback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Activity lifecycle (onCreate/onDestroy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zombies/Orphans"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apache reaps child processes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-running workers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Watchdog timer cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zygote manages app processes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Context Switching"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread pool minimizes switches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I/O wait during queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupt handler priority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UI thread vs background threads"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which section of a process's memory contains the program counter and local variables?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Text"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Data"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Stack"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Heap"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What system call creates a new process in Unix?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) exec()"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) fork()"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) clone()"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) spawn()"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A process that has finished execution but still has an entry in the process table is called:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Orphan"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Zombie"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Daemon"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Ghost"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which IPC method requires explicit synchronization?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Shared memory"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Message passing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Signals"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Pipes"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Context switch time is:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Productive work (CPU processes data)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Pure overhead (CPU saves/restores state)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Optional (only needed for I/O)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Always zero (instantaneous)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What happens when ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fork()"
          }), " is called?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) The current process is replaced by a new program"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) A child process is created as an (almost) exact copy of the parent"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) The process terminates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) A thread is created"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The Linux PCB is called:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) proc_struct"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) task_struct"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) process_block"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) pcb_struct"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which is NOT a valid process state in the five-state model?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) NEW"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) SUSPENDED"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) READY"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) WAITING"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer Key:"
      }), " 1-c, 2-b, 3-b, 4-a, 5-b, 6-b, 7-b, 8-b (SUSPENDED is an additional state, not in the basic five-state model)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A process is an active instance of a program, containing text, data, heap, and stack"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The five-state model: NEW -> READY -> RUNNING -> WAITING -> TERMINATED"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The PCB (task_struct in Linux) holds every piece of state the kernel needs about a process"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Context switching is pure overhead → saving and restoring process state takes 1-10 microseconds"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "fork()"
        }), " creates a child; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exec()"
        }), " replaces the current program; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exit()"
        }), " terminates"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IPC: shared memory (fast, needs synchronization) or message passing (slower, more structured)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pipes provide simple unidirectional communication between related processes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Zombies are dead processes waiting for parent ", (0,jsx_runtime.jsx)(_components.code, {
          children: "wait()"
        }), "; orphans are adopted by init"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Threads are lightweight processes sharing address space → cheaper to create and switch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy-On-Write (COW) optimizes fork by sharing pages until modification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process management is the foundation of multitasking, isolation, and IPC in modern operating systems"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-1",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Draw the process state diagram. Identify which transitions are initiated by the OS, which by the process, and which by hardware."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ps -eo pid,ppid,state,wchan,comm"
        }), " on your system. Identify the state of each process. Which processes are waiting? What are they waiting on (wchan)?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a program that creates a zombie process. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ps"
        }), " to confirm the zombie exists (state Z)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate-1",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a program that creates three child processes. Each child prints its PID and exits. The parent waits for all children in order and prints their exit statuses. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "waitpid()"
        }), " with the WNOHANG option to demonstrate non-blocking wait."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the performance of shared memory vs message passing. Write programs that transfer 1 MB of data using each method and measure the time."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain the orphan process scenario. Write a program where the parent exits before the child. Verify that ", (0,jsx_runtime.jsx)(_components.code, {
          children: "init"
        }), " (PID 1) becomes the child's new parent using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getppid()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a shell pipeline simulation: create a parent and child connected by a pipe. The parent writes lines of text; the child reads and counts words (like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "wc -w"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-1",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a simple producer-consumer using shared memory and a circular buffer. The producer writes integers 0-999; the consumer reads and prints them. Use atomic operations or a flag for synchronization."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vfork()"
        }), " system call creates a child that shares the parent's address space and blocks the parent until the child calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exec()"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exit()"
        }), ". Research why ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vfork()"
        }), " exists, then write a benchmark comparing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fork()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vfork()"
        }), " latency over 10,000 iterations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design and implement a message-passing library in C that provides ", (0,jsx_runtime.jsx)(_components.code, {
          children: "send(pid, msg)"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "recv(pid, &msg)"
        }), " using POSIX message queues. The library should handle messages up to 1024 bytes and support non-blocking receives."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a program that measures the average context switch time between two processes using a pipe. (Hint: use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clock_gettime()"
        }), " and pass timestamps through the pipe to measure round-trip time.)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Research Linux cgroups (control groups). Write a program that limits a child process's memory to 64 MB using cgroup v2 and demonstrates OOM behavior when the child exceeds the limit."
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