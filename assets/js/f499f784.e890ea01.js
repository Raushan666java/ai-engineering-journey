"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[88966],{

/***/ 93790
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_operating_systems_13_io_systems_md_f49_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-operating-systems-13-io-systems-md-f49.json
const site_docs_courses_operating_systems_13_io_systems_md_f49_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/operating-systems/13-io-systems","title":"Chapter 13: I/O Systems","description":"---","source":"@site/docs/courses/operating-systems/13-io-systems.md","sourceDirName":"courses/operating-systems","slug":"/operating-systems/13-io-systems","permalink":"/ai-engineering-journey/operating-systems/13-io-systems","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"id":"13-io-systems","slug":"/operating-systems/13-io-systems","title":"Chapter 13: I/O Systems","sidebar_label":"Chapter 13: I/O Systems","sidebar_position":13},"sidebar":"coursesSidebar","previous":{"title":"Chapter 12: Secondary Storage","permalink":"/ai-engineering-journey/operating-systems/12-secondary-storage"},"next":{"title":"Chapter 14: Linux Kernel Internals","permalink":"/ai-engineering-journey/operating-systems/14-linux-kernel"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/operating-systems/13-io-systems.md


const frontMatter = {
	id: '13-io-systems',
	slug: '/operating-systems/13-io-systems',
	title: 'Chapter 13: I/O Systems',
	sidebar_label: 'Chapter 13: I/O Systems',
	sidebar_position: 13
};
const contentTitle = 'Chapter 13: I/O Systems';

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
  "value": "1. I/O Hardware",
  "id": "1-io-hardware",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 4
}, {
  "value": "Device Types",
  "id": "device-types",
  "level": 4
}, {
  "value": "CPU-Device Communication Methods",
  "id": "cpu-device-communication-methods",
  "level": 4
}, {
  "value": "Numbered Steps: CPU Writes to a Device (Memory-Mapped)",
  "id": "numbered-steps-cpu-writes-to-a-device-memory-mapped",
  "level": 4
}, {
  "value": "Dry Run Trace: Memory-Mapped I/O Write",
  "id": "dry-run-trace-memory-mapped-io-write",
  "level": 4
}, {
  "value": "C++ Implementation: Simulated Device Register",
  "id": "c-implementation-simulated-device-register",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation",
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
  "value": "2. Polling (Programmed I/O)",
  "id": "2-polling-programmed-io",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 4
}, {
  "value": "Numbered Steps: Polling Read",
  "id": "numbered-steps-polling-read",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 4
}, {
  "value": "Dry Run Trace: Polling 3 Bytes from Keyboard",
  "id": "dry-run-trace-polling-3-bytes-from-keyboard",
  "level": 4
}, {
  "value": "C++ Implementation: Polling with Timer",
  "id": "c-implementation-polling-with-timer",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-1",
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
  "value": "3. Interrupts",
  "id": "3-interrupts",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 4
}, {
  "value": "Numbered Steps: Interrupt-Driven Read",
  "id": "numbered-steps-interrupt-driven-read",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 4
}, {
  "value": "Interrupt Vector Table Layout",
  "id": "interrupt-vector-table-layout",
  "level": 4
}, {
  "value": "Dry Run Trace: Keyboard Interrupt",
  "id": "dry-run-trace-keyboard-interrupt",
  "level": 4
}, {
  "value": "C++ Implementation: Interrupt Simulation",
  "id": "c-implementation-interrupt-simulation",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-2",
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
  "value": "4. DMA (Direct Memory Access)",
  "id": "4-dma-direct-memory-access",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 4
}, {
  "value": "Numbered Steps: DMA Transfer",
  "id": "numbered-steps-dma-transfer",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 4
}, {
  "value": "Dry Run Trace: DMA Transfer of 4 KB Block",
  "id": "dry-run-trace-dma-transfer-of-4-kb-block",
  "level": 4
}, {
  "value": "C++ Implementation: DMA Transfer Simulation",
  "id": "c-implementation-dma-transfer-simulation",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-3",
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
  "value": "5. Polling vs Interrupt vs DMA - Comparison",
  "id": "5-polling-vs-interrupt-vs-dma---comparison",
  "level": 3
}, {
  "value": "Decision Flowchart",
  "id": "decision-flowchart",
  "level": 4
}, {
  "value": "6. I/O Software Layers (4-Layer Model)",
  "id": "6-io-software-layers-4-layer-model",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 4
}, {
  "value": "Layer Diagram",
  "id": "layer-diagram",
  "level": 4
}, {
  "value": "Layer 4: User-Level I/O",
  "id": "layer-4-user-level-io",
  "level": 4
}, {
  "value": "Layer 3: Device-Independent OS I/O",
  "id": "layer-3-device-independent-os-io",
  "level": 4
}, {
  "value": "Layer 2: Device Drivers",
  "id": "layer-2-device-drivers",
  "level": 4
}, {
  "value": "Layer 1: Interrupt Handlers",
  "id": "layer-1-interrupt-handlers",
  "level": 4
}, {
  "value": "Linux Implementation Example",
  "id": "linux-implementation-example",
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
  "value": "7. Device Drivers",
  "id": "7-device-drivers",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-5",
  "level": 4
}, {
  "value": "Numbered Steps: Driver I/O Request Lifecycle",
  "id": "numbered-steps-driver-io-request-lifecycle",
  "level": 4
}, {
  "value": "Pseudocode: Block Device Driver",
  "id": "pseudocode-block-device-driver",
  "level": 4
}, {
  "value": "Dry Run Trace: Driver Read with DMA",
  "id": "dry-run-trace-driver-read-with-dma",
  "level": 4
}, {
  "value": "C++ Implementation: Driver Framework",
  "id": "c-implementation-driver-framework",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-4",
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
  "value": "8. Character vs Block Devices",
  "id": "8-character-vs-block-devices",
  "level": 3
}, {
  "value": "Character Device Flow",
  "id": "character-device-flow",
  "level": 4
}, {
  "value": "Block Device Flow",
  "id": "block-device-flow",
  "level": 4
}, {
  "value": "C++: Character vs Block Abstraction",
  "id": "c-character-vs-block-abstraction",
  "level": 4
}, {
  "value": "9. Kernel I/O Subsystem",
  "id": "9-kernel-io-subsystem",
  "level": 3
}, {
  "value": "Components",
  "id": "components",
  "level": 4
}, {
  "value": "Key Kernel Services",
  "id": "key-kernel-services",
  "level": 4
}, {
  "value": "10. I/O Scheduling",
  "id": "10-io-scheduling",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-6",
  "level": 4
}, {
  "value": "Numbered Steps: Deadline Algorithm",
  "id": "numbered-steps-deadline-algorithm",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 4
}, {
  "value": "Dry Run Trace: Deadline Scheduler",
  "id": "dry-run-trace-deadline-scheduler",
  "level": 4
}, {
  "value": "C++ Implementation: I/O Scheduler",
  "id": "c-implementation-io-scheduler",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-5",
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
  "value": "11. Buffering",
  "id": "11-buffering",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-7",
  "level": 4
}, {
  "value": "Single Buffering",
  "id": "single-buffering",
  "level": 4
}, {
  "value": "Double Buffering",
  "id": "double-buffering",
  "level": 4
}, {
  "value": "Circular Buffer (Ring Buffer)",
  "id": "circular-buffer-ring-buffer",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-7",
  "level": 4
}, {
  "value": "Buffering Comparison",
  "id": "buffering-comparison",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-7",
  "level": 4
}, {
  "value": "12. Caching",
  "id": "12-caching",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-8",
  "level": 4
}, {
  "value": "Cache vs Buffer",
  "id": "cache-vs-buffer",
  "level": 4
}, {
  "value": "Page Cache in Linux",
  "id": "page-cache-in-linux",
  "level": 4
}, {
  "value": "C++ Implementation: LRU Cache",
  "id": "c-implementation-lru-cache",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-6",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-8",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-7",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-8",
  "level": 4
}, {
  "value": "13. Spooling",
  "id": "13-spooling",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-9",
  "level": 4
}, {
  "value": "Numbered Steps: Printer Spooler",
  "id": "numbered-steps-printer-spooler",
  "level": 4
}, {
  "value": "Pseudocode: Print Spooler",
  "id": "pseudocode-print-spooler",
  "level": 4
}, {
  "value": "Dry Run Trace: Printer Spooler",
  "id": "dry-run-trace-printer-spooler",
  "level": 4
}, {
  "value": "C++ Implementation: Print Spooler",
  "id": "c-implementation-print-spooler",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-7",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-9",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-8",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-9",
  "level": 4
}, {
  "value": "14. Error Handling",
  "id": "14-error-handling",
  "level": 3
}, {
  "value": "Error Classification",
  "id": "error-classification",
  "level": 4
}, {
  "value": "POSIX Error Codes",
  "id": "posix-error-codes",
  "level": 4
}, {
  "value": "C++: I/O with Error Handling",
  "id": "c-io-with-error-handling",
  "level": 4
}, {
  "value": "15. Interview Corner",
  "id": "15-interview-corner",
  "level": 3
}, {
  "value": "Q1: DMA vs PIO - When would you choose one over the other?",
  "id": "q1-dma-vs-pio---when-would-you-choose-one-over-the-other",
  "level": 4
}, {
  "value": "Q2: How do you design an interrupt handler for a high-frequency device (e.g., 10GbE NIC)?",
  "id": "q2-how-do-you-design-an-interrupt-handler-for-a-high-frequency-device-eg-10gbe-nic",
  "level": 4
}, {
  "value": "Q3: What is mmap vs read for file I/O? When to use each?",
  "id": "q3-what-is-mmap-vs-read-for-file-io-when-to-use-each",
  "level": 4
}, {
  "value": "Q4: What is zero-copy I/O and how does it work?",
  "id": "q4-what-is-zero-copy-io-and-how-does-it-work",
  "level": 4
}, {
  "value": "Q5: What happens when you press a key on the keyboard - full path?",
  "id": "q5-what-happens-when-you-press-a-key-on-the-keyboard---full-path",
  "level": 4
}, {
  "value": "Q6: What is the difference between blocking, non-blocking, and asynchronous I/O?",
  "id": "q6-what-is-the-difference-between-blocking-non-blocking-and-asynchronous-io",
  "level": 4
}, {
  "value": "Q7: What is io_uring and why is it important?",
  "id": "q7-what-is-io_uring-and-why-is-it-important",
  "level": 4
}, {
  "value": "Q8: What is the difference between buffered and direct I/O?",
  "id": "q8-what-is-the-difference-between-buffered-and-direct-io",
  "level": 4
}, {
  "value": "Q9: How do you debug I/O performance issues?",
  "id": "q9-how-do-you-debug-io-performance-issues",
  "level": 4
}, {
  "value": "Q10: Explain the Linux Storage Stack from application to disk.",
  "id": "q10-explain-the-linux-storage-stack-from-application-to-disk",
  "level": 4
}, {
  "value": "16. Applications in Real Systems",
  "id": "16-applications-in-real-systems",
  "level": 3
}, {
  "value": "Linux I/O Stack - Full Diagram",
  "id": "linux-io-stack---full-diagram",
  "level": 4
}, {
  "value": "VFS (Virtual File System)",
  "id": "vfs-virtual-file-system",
  "level": 4
}, {
  "value": "Device Mapper",
  "id": "device-mapper",
  "level": 4
}, {
  "value": "Linux I/O Schedulers",
  "id": "linux-io-schedulers",
  "level": 4
}, {
  "value": "Real-World Performance Numbers",
  "id": "real-world-performance-numbers",
  "level": 4
}, {
  "value": "NUMA I/O Affinity",
  "id": "numa-io-affinity",
  "level": 4
}, {
  "value": "Linux Tuning for High-Performance I/O",
  "id": "linux-tuning-for-high-performance-io",
  "level": 4
}, {
  "value": "STREAMS (System V)",
  "id": "streams-system-v",
  "level": 4
}, {
  "value": "I/O in Virtualized Environments",
  "id": "io-in-virtualized-environments",
  "level": 4
}, {
  "value": "17. I/O Models",
  "id": "17-io-models",
  "level": 3
}, {
  "value": "Blocking I/O Pseudocode",
  "id": "blocking-io-pseudocode",
  "level": 4
}, {
  "value": "Non-Blocking I/O Example",
  "id": "non-blocking-io-example",
  "level": 4
}, {
  "value": "I/O Multiplexing with epoll",
  "id": "io-multiplexing-with-epoll",
  "level": 4
}, {
  "value": "18. Examples",
  "id": "18-examples",
  "level": 3
}, {
  "value": "Example 1: Character Device - Reading Keyboard Input",
  "id": "example-1-character-device---reading-keyboard-input",
  "level": 4
}, {
  "value": "Example 2: Measuring I/O Performance",
  "id": "example-2-measuring-io-performance",
  "level": 4
}, {
  "value": "19. Concept Comparisons",
  "id": "19-concept-comparisons",
  "level": 3
}, {
  "value": "I/O Methods",
  "id": "io-methods",
  "level": 4
}, {
  "value": "Buffering Strategies",
  "id": "buffering-strategies",
  "level": 4
}, {
  "value": "Block vs Character",
  "id": "block-vs-character",
  "level": 4
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 3
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 3
}, {
  "value": "TypeScript I/O Simulator — DMA vs Interrupt vs Polling",
  "id": "typescript-io-simulator--dma-vs-interrupt-vs-polling",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
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
  "value": "Additional Exercises",
  "id": "additional-exercises",
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
        id: "chapter-13-io-systems",
        children: "Chapter 13: I/O Systems"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["<< ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/operating-systems/12-secondary-storage",
          children: "Secondary Storage"
        })]
      }), " | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/operating-systems/14-linux-kernel",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next: The Linux Kernel"
        })
      }), " >>"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe I/O hardware components: ports, buses, controllers, and devices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare programmed I/O, interrupt-driven I/O, and DMA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the interrupt handling sequence in a modern OS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design the kernel I/O subsystem: buffering, caching, spooling, error handling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the device driver interface and the I/O request life cycle"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the performance implications of different I/O models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze polling vs interrupt vs DMA trade-offs with complexity bounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement buffering strategies (single, double, circular) and spooling mechanisms"
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
        href: "../../assets/images/lessons/operating-systems/13-io-systems/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/operating-systems/13-io-systems/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/operating-systems/13-io-systems/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/operating-systems/13-io-systems/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/operating-systems/13-io-systems/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/operating-systems/13-io-systems/visual-explanation.png",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "I/O Hardware"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ports, buses, controllers; devices have data/command/status registers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Polling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU busy-waits on status register; simple but CPU-wasteful"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interrupts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device signals CPU via IRQ; enables concurrency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DMA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct Memory Access: device transfers data directly to/from memory without CPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "I/O Software Layers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-layer model: User, Device-independent, Driver, Interrupt handler"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Device Drivers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel modules understanding device protocols; standard interface to OS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Character vs Block"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Char: byte stream, no seeking; Block: fixed-size blocks, random access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Buffering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single/double/circular; decouples producer and consumer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spooling/Caching"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spooling manages shared device access; caching keeps frequent data ready"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "I/O Scheduling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reorder requests for efficiency; deadline/CFQ/NOW-BSQ"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.div, {
      className: "mermaid",
      children: "\nflowchart LR\n    A[I/O Hardware Basics] --> B[Ports / Buses / Controllers]\n    B --> C[I/O Control Methods]\n    C --> D[Polling]\n    C --> E[Interrupts]\n    C --> F[DMA]\n    D --> G[Device Drivers]\n    E --> G\n    F --> G\n    G --> H[I/O Software Layers]\n    H --> I[Buffering & Caching & Spooling]\n    I --> J[I/O Scheduling]\n    J --> K[I/O Performance]\n    K --> L[Real Systems: Linux I/O Stack]\n    L --> M[Summary]\n"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/operating-systems/13-io-systems.png",
        alt: "I/O Systems"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-io-hardware",
      children: "1. I/O Hardware"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["I/O devices vary enormously in function, but they share common hardware interfaces. Every device connects through a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "controller"
      }), " that communicates with the CPU via ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "registers"
      }), " (data, command, status) over a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bus"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "A restaurant kitchen (CPU) communicates with the waitstaff (device) through a service window (registers). The chef reads order tickets (data register), checks the order-ready light (status register), and writes fire commands (command register)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "device-types",
      children: "Device Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Interface"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Character"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keyboard, mouse, serial ports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-1000 B/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupt-driven"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk, SSD, USB storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-5000 MB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA, block commands"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethernet, Wi-Fi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-100 Gb/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA, packet-oriented"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cpu-device-communication-methods",
      children: "CPU-Device Communication Methods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Port-mapped I/O"
        }), ": Special CPU instructions (", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OUT"
        }), " on x86) read/write device registers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory-mapped I/O"
        }), ": Device registers appear in the memory address space; regular load/store instructions access them."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hybrid"
        }), ": Some devices use port I/O for control and memory-mapped for data (e.g., x86 VGA)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Memory-mapped I/O:\nCPU Address Space:\n+------------------------+\n| RAM                    |\n+------------------------+\n| Device registers       |  <- Reading/writing here\n| (Video RAM, NIC,      |     communicates with device\n|  disk controller)      |\n+------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-cpu-writes-to-a-device-memory-mapped",
      children: "Numbered Steps: CPU Writes to a Device (Memory-Mapped)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CPU executes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "store"
        }), " instruction targeting device register address."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bus logic decodes address, identifies as device register."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Value written to device controller's data register."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Device controller interprets command and acts (e.g., send byte on network)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Device sets status register to READY or ERROR."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU reads status register on next interaction."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-memory-mapped-io-write",
      children: "Dry Run Trace: Memory-Mapped I/O Write"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CPU Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Address"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Device State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOAD R1, 0x41"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x41"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDLE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STORE R1, [0xE000]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xE000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x41"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUSY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device receives 0x41"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PROCESSING"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device sends byte to network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSMITTING"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set status = READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xE004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU polls, sees READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xE004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READY"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-simulated-device-register",
      children: "C++ Implementation: Simulated Device Register"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstdint>\n#include <thread>\n#include <chrono>\n\nclass DeviceController {\n    uint8_t data_reg;\n    uint8_t status_reg;\n    uint8_t cmd_reg;\npublic:\n    DeviceController() : data_reg(0), status_reg(0), cmd_reg(0) {}\n\n    void write_command(uint8_t cmd) {\n        cmd_reg = cmd;\n        status_reg = 0x02; // BUSY\n        std::thread([this]() {\n            std::this_thread::sleep_for(std::chrono::milliseconds(10));\n            if (cmd_reg == 0x01) { // WRITE\n                status_reg = 0x01; // READY\n            } else if (cmd_reg == 0x02) { // READ\n                data_reg = 0xFF;\n                status_reg = 0x01;\n            }\n        }).detach();\n    }\n\n    uint8_t read_status() const { return status_reg; }\n    uint8_t read_data() const { return data_reg; }\n    bool is_ready() const { return status_reg == 0x01; }\n};\n\nint main() {\n    DeviceController dev;\n    dev.write_command(0x01);\n    while (!dev.is_ready()) {}\n    std::cout << \"Device ready after write\\n\";\n    dev.write_command(0x02);\n    while (!dev.is_ready()) {}\n    std::cout << \"Device data: 0x\" << std::hex << (int)dev.read_data() << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\nimport time\n\nclass DeviceController:\n    def __init__(self):\n        self.data_reg = 0\n        self.status_reg = 0\n        self.cmd_reg = 0\n\n    def write_command(self, cmd):\n        self.cmd_reg = cmd\n        self.status_reg = 2\n        def process():\n            time.sleep(0.01)\n            if cmd == 1:\n                self.status_reg = 1\n            elif cmd == 2:\n                self.data_reg = 0xFF\n                self.status_reg = 1\n        threading.Thread(target=process, daemon=True).start()\n\n    def is_ready(self):\n        return self.status_reg == 1\n\n    def read_data(self):\n        return self.data_reg\n\ndev = DeviceController()\ndev.write_command(1)\nwhile not dev.is_ready(): pass\nprint(\"Device ready after write\")\ndev.write_command(2)\nwhile not dev.is_ready(): pass\nprint(f\"Device data: 0x{dev.read_data():02x}\")\n"
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
            children: "Register read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single memory/port access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Register write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single memory/port access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device status check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read one register"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple hardware interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU must handle each transfer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No special CPU instructions needed (MMIO)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port I/O requires privileged instructions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Universal across device types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited address space for port I/O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast for small control operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No parallelism without interrupts"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Device not responding"
        }), ": Status register returns 0xFF (all bits set) - timeout and reset."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Register aliasing"
        }), ": Same address maps to different registers depending on access order."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bus arbitration failure"
        }), ": Device cannot get bus access; watchdog timer triggers reset."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Endianness mismatch"
        }), ": Device uses big-endian, CPU is little-endian; byte-swap needed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-polling-programmed-io",
      children: "2. Polling (Programmed I/O)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Polling is the simplest I/O method: the CPU repeatedly checks a device's status register until the device signals readiness."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "A student repeatedly checks their phone for a text reply instead of doing homework. The phone (device) never initiates communication; the student (CPU) must keep checking the screen (status register)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-polling-read",
      children: "Numbered Steps: Polling Read"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Application requests data from device."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU reads device status register."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If status != READY, go back to step 2 (busy-wait)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU reads data from device data register."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU copies data to memory."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return data to application."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE polling_read(device):\n    WHILE (device.status_reg != READY):\n        NOP\n    END WHILE\n    data = device.data_reg\n    RETURN data\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-polling-3-bytes-from-keyboard",
      children: "Dry Run Trace: Polling 3 Bytes from Keyboard"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status Read"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CPU Cycles Wasted"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xE004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00 (NOT READY)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue polling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xE004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00 (NOT READY)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue polling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xE004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00 (NOT READY)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue polling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xE004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x01 (READY)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read data byte A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 wasted, 1 useful"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xE004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00 (NOT READY)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue polling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xE004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x01 (READY)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read data byte B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 wasted, 1 useful"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xE004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00 (NOT READY)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue polling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xE004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00 (NOT READY)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue polling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xE004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x01 (READY)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read data byte C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 wasted, 1 useful"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Total"
      }), ": 3 useful reads, 9 CPU cycles wasted polling."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-polling-with-timer",
      children: "C++ Implementation: Polling with Timer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <chrono>\n#include <thread>\n#include <vector>\n\nclass PollingDevice {\n    volatile bool ready;\n    std::vector<char> buffer;\n    size_t pos;\npublic:\n    PollingDevice() : ready(false), pos(0) {\n        buffer = {'H', 'e', 'l', 'l', 'o'};\n        std::thread([this]() {\n            for (char c : buffer) {\n                std::this_thread::sleep_for(std::chrono::milliseconds(50));\n                ready = true;\n                std::this_thread::sleep_for(std::chrono::milliseconds(10));\n            }\n        }).detach();\n    }\n\n    bool is_ready() volatile { return ready; }\n\n    char read_byte() {\n        while (!is_ready()) {} // busy-wait\n        ready = false;\n        return buffer[pos++];\n    }\n};\n\nint main() {\n    PollingDevice dev;\n    auto start = std::chrono::steady_clock::now();\n    for (int i = 0; i < 5; i++) {\n        char c = dev.read_byte();\n        auto now = std::chrono::steady_clock::now();\n        auto ms = std::chrono::duration_cast<std::chrono::milliseconds>(now - start).count();\n        std::cout << \"t=\" << ms << \"ms: Read '\" << c << \"'\\n\";\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-1",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\nimport threading\n\nclass PollingDevice:\n    def __init__(self):\n        self._ready = False\n        self._buffer = list(\"Hello\")\n        self._pos = 0\n        def simulate():\n            for ch in self._buffer:\n                time.sleep(0.05)\n                self._ready = True\n                time.sleep(0.01)\n        threading.Thread(target=simulate, daemon=True).start()\n\n    @property\n    def ready(self):\n        return self._ready\n\n    def read_byte(self):\n        while not self.ready:\n            pass\n        self._ready = False\n        val = self._buffer[self._pos]\n        self._pos += 1\n        return val\n\ndev = PollingDevice()\nstart = time.time()\nfor i in range(5):\n    c = dev.read_byte()\n    print(f\"t={(time.time()-start)*1000:.0f}ms: Read '{c}'\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Best-case latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device already ready"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(poll_count)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on device speed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU utilization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100% during wait"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU spins doing nothing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 / (poll_interval + transfer_time)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wasted cycles reduce rate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Energy efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU stays active and busy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-1",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simplest to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU is wasted while waiting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No special hardware needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No concurrent computation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic timing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not scalable for multiple devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor energy efficiency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Good for very fast devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Falls apart with slow devices"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Polling a disconnected device"
        }), ": Status register returns garbage; need timeout."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interrupt storm during polling"
        }), ": NMI or higher-priority events preempt polling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Device ready flip-flop"
        }), ": Device toggles ready faster than poll interval; missed data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache coherency"
        }), ": Volatile qualifier required, otherwise compiler optimizes away the read."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-interrupts",
      children: "3. Interrupts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Interrupt-driven I/O lets the device notify the CPU when it needs attention, freeing the CPU to do useful work."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Instead of checking the mailbox every minute (polling), you install a bell that rings when mail arrives. The bell (interrupt) lets you read a book (compute) until mail (data) arrives."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-interrupt-driven-read",
      children: "Numbered Steps: Interrupt-Driven Read"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU initiates I/O operation on device."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU saves current process context and switches to another process."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Device processes the request."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Device asserts interrupt request line (IRQ)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU finishes current instruction, checks for pending interrupts."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU saves state (PC, registers, PSW) to kernel stack."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU looks up Interrupt Vector Table (IVT) using IRQ number."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU loads and executes Interrupt Service Routine (ISR)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISR reads data from device, acknowledges interrupt."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISR returns from interrupt (IRET) - CPU restores saved state."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU resumes the interrupted process."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE interrupt_handler(irq_number):\n    SAVE registers onto kernel stack\n    device = lookup_device(irq_number)\n    data = READ(device.data_reg)\n    SEND_ACK(device)\n    IF data_requested_by_process:\n        COPY data to process buffer\n        MARK process as READY\n    END IF\n    RESTORE registers\n    IRET\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "interrupt-vector-table-layout",
      children: "Interrupt Vector Table Layout"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "IVT base address stored in IDTR register:\n+---------+----------------------------+\n| Entry 0 | Divide-by-zero handler      |\n| Entry 1 | Debug handler               |\n| Entry 2 | NMI handler                 |\n| Entry 3 | Breakpoint handler          |\n|   ...   | ...                         |\n| Entry 32| IRQ 0 - Timer               |\n| Entry 33| IRQ 1 - Keyboard            |\n| Entry 34| IRQ 2 - Cascade             |\n|   ...   | ...                         |\n| Entry 39| IRQ 7 - Parallel port (LPT) |\n| Entry 40| IRQ 8 - RTC                 |\n+---------+----------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-keyboard-interrupt",
      children: "Dry Run Trace: Keyboard Interrupt"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "IRQ"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CPU Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x4012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executing add eax, ebx (user process)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x4013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IRQ1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keyboard asserts IRQ1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x4013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IRQ1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU checks interrupt flag (IF=1), acknowledges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x4013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IRQ1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU saves SS, SP, EFLAGS, CS, EIP to kernel stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0040"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IRQ1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU loads IVT[33] -> handler at 0x00400020"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x4020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IRQ1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISR: read keyboard data port (0x60) -> A (0x41)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x4025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IRQ1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISR: store to key buffer, send EOI to PIC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x4030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IRQ1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISR: IRET - restore EIP, CS, EFLAGS, SS, SP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x4013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resume: add eax, ebx completes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-interrupt-simulation",
      children: "C++ Implementation: Interrupt Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <functional>\n#include <thread>\n#include <chrono>\n\nclass InterruptController {\n    using ISR = std::function<void()>;\n    std::vector<ISR> vector_table;\npublic:\n    void register_handler(int irq, ISR handler) {\n        if (irq >= (int)vector_table.size())\n            vector_table.resize(irq + 1);\n        vector_table[irq] = handler;\n    }\n\n    void fire(int irq) {\n        std::cout << \"[PIC] Firing IRQ \" << irq << \"\\n\";\n        if (irq < (int)vector_table.size() && vector_table[irq])\n            vector_table[irq]();\n    }\n};\n\nstruct CPUState {\n    uint64_t rip;\n    uint64_t rsp;\n};\n\nclass InterruptDrivenIO {\n    InterruptController pic;\n    CPUState saved_state;\n    char key_buffer[256];\n    int buf_pos;\npublic:\n    InterruptDrivenIO() : buf_pos(0) {\n        pic.register_handler(1, [this]() {\n            std::cout << \"[ISR] Saving CPU state...\\n\";\n            saved_state = {0x4013, 0x7FFF};\n            char key = 'A' + (buf_pos % 26);\n            key_buffer[buf_pos++] = key;\n            std::cout << \"[ISR] Key pressed: \" << key << \"\\n\";\n            std::cout << \"[ISR] Acknowledge interrupt (EOI)\\n\";\n            std::cout << \"[ISR] Restore state, IRET\\n\";\n        });\n    }\n\n    void user_process() {\n        std::cout << \"[USER] Running computation...\\n\";\n        std::this_thread::sleep_for(std::chrono::milliseconds(100));\n        std::cout << \"[USER] Still computing...\\n\";\n        std::this_thread::sleep_for(std::chrono::milliseconds(100));\n        std::cout << \"[USER] Buffer contains: \";\n        for (int i = 0; i < buf_pos; i++)\n            std::cout << key_buffer[i];\n        std::cout << \"\\n\";\n    }\n\n    void device_simulator() {\n        std::this_thread::sleep_for(std::chrono::milliseconds(50));\n        pic.fire(1);\n        std::this_thread::sleep_for(std::chrono::milliseconds(80));\n        pic.fire(1);\n    }\n\n    void run() {\n        std::thread dev([this]() { device_simulator(); });\n        user_process();\n        dev.join();\n    }\n};\n\nint main() {\n    InterruptDrivenIO io;\n    io.run();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-2",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\nimport threading\nfrom dataclasses import dataclass\nfrom typing import List, Callable\n\n@dataclass\nclass CPUState:\n    rip: int = 0\n    rsp: int = 0\n\nclass InterruptController:\n    def __init__(self):\n        self.vector_table: List[Callable] = []\n\n    def register_handler(self, irq: int, handler: Callable):\n        while len(self.vector_table) <= irq:\n            self.vector_table.append(None)\n        self.vector_table[irq] = handler\n\n    def fire(self, irq: int):\n        print(f\"[PIC] Firing IRQ {irq}\")\n        if irq < len(self.vector_table) and self.vector_table[irq]:\n            self.vector_table[irq]()\n\nclass InterruptDrivenIO:\n    def __init__(self):\n        self.pic = InterruptController()\n        self.key_buffer: List[str] = []\n        self._lock = threading.Lock()\n\n        def keyboard_isr():\n            print(\"[ISR] Saving CPU state...\")\n            saved = CPUState(rip=0x4013, rsp=0x7FFF)\n            key = chr(ord('A') + (len(self.key_buffer) % 26))\n            with self._lock:\n                self.key_buffer.append(key)\n            print(f\"[ISR] Key pressed: {key}\")\n            print(f\"[ISR] Acknowledge interrupt (EOI)\")\n            print(f\"[ISR] Restore state, IRET\")\n\n        self.pic.register_handler(1, keyboard_isr)\n\n    def user_process(self):\n        print(\"[USER] Running computation...\")\n        time.sleep(0.1)\n        print(\"[USER] Still computing...\")\n        time.sleep(0.1)\n        with self._lock:\n            print(f\"[USER] Buffer contains: {''.join(self.key_buffer)}\")\n\n    def device_sim(self):\n        time.sleep(0.05)\n        self.pic.fire(1)\n        time.sleep(0.08)\n        self.pic.fire(1)\n\n    def run(self):\n        t = threading.Thread(target=self.device_sim)\n        t.start()\n        self.user_process()\n        t.join()\n\nio = InterruptDrivenIO()\nio.run()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Interrupt latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-100 CPU cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save state, vector lookup, jump"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ISR execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(handler_work)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on device complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context switch overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100-1000 cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save/restore registers, TLB flush"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max interrupt rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100K-1M IRQ/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited by save/restore overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU utilization (idle)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Near 0%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU does useful work until interrupt"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-2",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU can multitask while waiting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead of context switching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient for slow/rare events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupt storm can overwhelm CPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven model is natural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared data needs synchronization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scales better than polling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NMI/latency issues in real-time systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interrupt storm"
        }), ": Device floods CPU with interrupts -> live-lock. Mitigation: interrupt coalescing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nested interrupts"
        }), ": Higher-priority IRQ interrupts a lower-priority ISR -> stack overflow risk."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spurious interrupt"
        }), ": Device asserts IRQ but does not drive data; must check status in ISR."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lost interrupt"
        }), ": Device asserts IRQ but CPU misses it; watchdog timer or polling fallback."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shared IRQ"
        }), ": Multiple devices share same IRQ line; ISR must probe each device."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-dma-direct-memory-access",
      children: "4. DMA (Direct Memory Access)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DMA allows a dedicated controller to transfer data directly between device and memory without CPU intervention for each byte."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Instead of a courier hand-carrying each package from the warehouse (device) to the truck (memory) one at a time (interrupt-driven), a conveyor belt (DMA controller) moves entire pallets directly. The manager (CPU) presses start and gets notified when done."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-dma-transfer",
      children: "Numbered Steps: DMA Transfer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU programs DMA controller: source address, destination address, byte count, transfer direction."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DMA controller asserts bus request (BREQ)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU grants bus control (BGNT) and disconnects from bus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DMA controller transfers data: read from device, write to memory (or vice versa)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DMA controller increments addresses, decrements byte count."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Steps 4-5 repeat until byte count reaches zero."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DMA controller asserts interrupt to signal completion."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU resumes normal operation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE dma_transfer(device, memory_addr, byte_count):\n    dma_controller.source_addr = device.data_port\n    dma_controller.dest_addr = memory_addr\n    dma_controller.byte_count = byte_count\n    dma_controller.control = DMA_READ\n    dma_controller.start = 1\n\n    // DMA runs independently:\n    // WHILE dma_controller.byte_count > 0:\n    //     READ from device_port\n    //     WRITE to memory[dest_addr]\n    //     dest_addr++\n    //     byte_count--\n    // END WHILE\n\n    // CPU is free during this time\n    WAIT_FOR_INTERRUPT from DMA\n    READ dma_controller.status\n    IF status == DMA_ERROR:\n        HANDLE error\n    ELSE:\n        RETURN OK\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-dma-transfer-of-4-kb-block",
      children: "Dry Run Trace: DMA Transfer of 4 KB Block"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bus Master"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bytes Left"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CPU Activity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU writes DMA registers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Setup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA asserts BREQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running user code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU grants bus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU->DMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running user code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA reads 512B from disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3584"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running user code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA writes 512B to memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running user code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA reads next 512B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2560"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running user code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA writes to memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running user code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "... continues ..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running user code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA byte_count = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running user code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA asserts IRQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupted, runs ISR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU reads status, handles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Done"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Total CPU involvement"
      }), ": Step 1 (setup) + Step 10 (interrupt). All data movement is DMA."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-dma-transfer-simulation",
      children: "C++ Implementation: DMA Transfer Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <thread>\n#include <chrono>\n#include <cstring>\n\nclass DMAController {\n    uint32_t src_addr, dst_addr, byte_count;\n    uint8_t direction; // 0=DEV->MEM, 1=MEM->DEV\n    bool busy, error;\npublic:\n    DMAController() : busy(false), error(false) {}\n\n    void program(uint32_t src, uint32_t dst, uint32_t count, uint8_t dir) {\n        src_addr = src; dst_addr = dst;\n        byte_count = count; direction = dir;\n    }\n\n    void start() {\n        busy = true; error = false;\n        std::cout << \"[DMA] Transfer started: \" << byte_count\n                  << \" bytes\\n\";\n    }\n\n    bool is_busy() const { return busy; }\n    bool has_error() const { return error; }\n\n    void simulate_transfer() {\n        std::this_thread::sleep_for(std::chrono::microseconds(byte_count / 10));\n        busy = false;\n        std::cout << \"[DMA] Transfer complete\\n\";\n    }\n};\n\nclass Memory {\n    uint8_t data[65536];\npublic:\n    void write(uint32_t addr, const uint8_t* buf, uint32_t len) {\n        memcpy(data + addr, buf, len);\n    }\n    uint8_t read(uint32_t addr) { return data[addr]; }\n};\n\nint main() {\n    DMAController dma;\n    Memory mem;\n    uint32_t disk_buffer = 0x1000;\n    uint32_t memory_addr = 0x4000;\n    uint32_t transfer_size = 4096;\n    uint8_t disk_data[4096];\n    memset(disk_data, 'A', 4096);\n\n    std::cout << \"[CPU] Programming DMA controller...\\n\";\n    dma.program(disk_buffer, memory_addr, transfer_size, 0);\n    dma.start();\n\n    std::cout << \"[CPU] DMA is running - CPU can do other work!\\n\";\n    for (int i = 0; i < 5; i++) {\n        std::cout << \"[CPU] Computing iteration \" << i << \"...\\n\";\n        std::this_thread::sleep_for(std::chrono::milliseconds(1));\n    }\n\n    dma.simulate_transfer();\n    mem.write(memory_addr, disk_data, transfer_size);\n    std::cout << \"[CPU] DMA finished. Transferred \" << transfer_size << \" bytes.\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-3",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\nimport threading\n\nclass DMAController:\n    def __init__(self):\n        self.src_addr = 0\n        self.dst_addr = 0\n        self.byte_count = 0\n        self.direction = 0\n        self.busy = False\n        self.error = False\n\n    def program(self, src, dst, count, direction):\n        self.src_addr = src\n        self.dst_addr = dst\n        self.byte_count = count\n        self.direction = direction\n\n    def start(self):\n        self.busy = True\n        self.error = False\n        dir_str = \"DEV->MEM\" if self.direction == 0 else \"MEM->DEV\"\n        print(f\"[DMA] Transfer started: {self.byte_count} bytes, {dir_str}\")\n\n    def is_busy(self):\n        return self.busy\n\n    def simulate_transfer(self):\n        time.sleep(self.byte_count / 100000)\n        self.busy = False\n        print(\"[DMA] Transfer complete\")\n\ndma = DMAController()\nprint(\"[CPU] Programming DMA controller...\")\ndma.program(src=0x1000, dst=0x4000, count=4096, direction=0)\ndma.start()\n\nprint(\"[CPU] DMA is running - CPU can do other work!\")\nfor i in range(5):\n    print(f\"[CPU] Computing iteration {i}...\")\n    time.sleep(0.001)\n\ndma.simulate_transfer()\nprint(f\"[CPU] DMA finished. Transferred {4096} bytes.\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "CPU setup overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write 3-4 registers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transfer throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to bus bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory bandwidth limits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU utilization during transfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA owns the bus or cycle-steals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency (first byte)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Setup + bus arbitration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on bus protocol"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead per transfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 interrupt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One IRQ per DMA completion"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-3",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero CPU data copying"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA controller hardware cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "True parallelism (CPU + DMA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bus contention with CPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High throughput for block I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache coherency issues"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ideal for multimedia/streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scatter-gather requires complex DMA"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DMA buffer collision"
        }), ": DMA writes to memory the CPU is accessing -> stale cache data. Solution: cache flushing or coherent DMA."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bus deadlock"
        }), ": DMA and CPU both need bus; priority arbitration, starvation prevention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scatter-gather DMA"
        }), ": Non-contiguous physical pages; DMA must handle descriptor rings."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IOMMU protection"
        }), ": DMA attacks (evil DMA); IOMMU restricts which memory regions DMA can access."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DMA during power transitions"
        }), ": Device suspended mid-transfer; abort and retry."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-polling-vs-interrupt-vs-dma---comparison",
      children: "5. Polling vs Interrupt vs DMA - Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Polling (PIO)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Interrupt-Driven"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DMA"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU role"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checks status loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Starts I/O, handles IRQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Programs DMA, handles completion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU reads/writes each byte"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU reads/writes each byte"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device to Memory (CPU bypassed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Per-byte CPU cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (poll + read)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (save + ISR + restore)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero (during transfer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Per-transfer CPU cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N * poll_cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N * (save + ISR + restore)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-time setup + one IRQ"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on poll frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast response to events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Setup + arbitration delay"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process runs between interrupts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU works during transfer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Energy efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PIC, programmable interrupt controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA controller"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast/simple devices, embedded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Character devices, keyboards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block devices, network, video"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block transfers, slow devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-frequency events, bulk data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small transfers (overhead ratio)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "decision-flowchart",
      children: "Decision Flowchart"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Is the device very fast (microsecond-level response)?\n    Yes -> Can you afford 100% CPU during wait?\n        Yes -> Polling\n        No -> Interrupt-driven\n    No -> (millisecond-level or event-driven)\n        Is transfer size > ~256 bytes?\n            Yes -> DMA\n            No -> Interrupt-driven\n        Real-time deadline?\n            Yes -> Polling (deterministic latency)\n            No -> Interrupt-driven or DMA\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-io-software-layers-4-layer-model",
      children: "6. I/O Software Layers (4-Layer Model)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The I/O software stack is organized into four layers that abstract hardware details progressively."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Shipping a package: User (writes address) -> Post office sorting (device-independent formatting) -> Local carrier (driver for your street) -> Delivery person (last-mile hardware handler)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "layer-diagram",
      children: "Layer Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+------------------------------------------+\n| User-Level I/O Software                  | Layer 4\n| (stdio, iostream, printf, scanf)         |\n+------------------------------------------+\n| Device-Independent OS I/O Layer          | Layer 3\n| (system calls, naming, protection,        |\n|  buffering, caching, spooling)           |\n+------------------------------------------+\n| Device Drivers                            | Layer 2\n| (understands device protocol,            |\n|  translates generic to specific)         |\n+------------------------------------------+\n| Interrupt Handlers / Hardware             | Layer 1\n| (responds to IRQ, minimal code)          |\n+------------------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "layer-4-user-level-io",
      children: "Layer 4: User-Level I/O"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf()"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scanf()"
        }), ", C++'s ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::cout"
        }), ", Python's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "input()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Buffered stdio hides syscall overhead"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Formatting, line editing, character translation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "layer-3-device-independent-os-io",
      children: "Layer 3: Device-Independent OS I/O"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Service"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "System calls"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "read()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "write()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "open()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "close()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ioctl()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device naming"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "/dev/sda"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/dev/tty0"
            }), " - abstraction of device identity"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permissions on device files (owner/group/world)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buffering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel buffers decouple app from device speed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page cache, buffer cache, dentry cache"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serialize access to exclusive devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retry transient errors, propagate persistent errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I/O scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reorder requests for performance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "layer-2-device-drivers",
      children: "Layer 2: Device Drivers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardware-specific code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maps generic commands to device register operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles device interrupts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One driver per device family (or per device)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "layer-1-interrupt-handlers",
      children: "Layer 1: Interrupt Handlers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lowest level - runs in interrupt context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot block, cannot call most kernel functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Should be extremely fast (bottom-half for heavy work)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Saves data, acknowledges IRQ, schedules softirq/tasklet"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "linux-implementation-example",
      children: "Linux Implementation Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Layer 4 (User):\n// char buf[1024];\n// int n = read(fd, buf, 1024);\n\n// Layer 3 (VFS - Virtual File System):\nssize_t vfs_read(struct file *filp, char __user *buf,\n                 size_t count, loff_t *pos) {\n    ssize_t ret;\n    if (filp->f_op->read)\n        ret = filp->f_op->read(filp, buf, count, pos);\n    else if (filp->f_op->read_iter)\n        ret = filp->f_op->read_iter(filp, buf, count, pos);\n    return ret;\n}\n\n// Layer 2 (Device Driver - e.g., AHCI disk driver):\nstatic ssize_t ahci_read(struct file *filp, char __user *buf,\n                         size_t count, loff_t *pos) {\n    // Translate to AHCI command\n    // Program DMA descriptor\n    // Ring doorbell register\n    return count;\n}\n\n// Layer 1 (Interrupt Handler):\nstatic irqreturn_t ahci_interrupt(int irq, void *dev_id) {\n    // Read interrupt status register\n    // Acknowledge IRQ\n    // Wake up waiting process\n    return IRQ_HANDLED;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User-level I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(buffer_size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(buffer_size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffered formatting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device-independent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) to O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(buffer_size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syscall overhead + copy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device driver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(register_ops)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(driver_state)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device register access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupt handler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) preferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be minimal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-4",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Separation of concerns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layer-crossing overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware independence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More code = more bugs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reusable across drivers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each layer adds latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User programs are portable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging across layers is hard"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Layer bypass"
        }), ": User program uses mmap to skip layers -> coherency issues."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priority inversion"
        }), ": High-priority user thread blocked on low-priority driver."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mock device drivers"
        }), ": Testing higher layers requires fake lower layers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-device-drivers",
      children: "7. Device Drivers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A device driver is kernel code that acts as a translator between the OS and specific hardware."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-5",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "A translator (driver) between a diplomat (OS) and a local official (device). The diplomat speaks one language (generic interface), the official speaks another (device protocol). The translator converts."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-driver-io-request-lifecycle",
      children: "Numbered Steps: Driver I/O Request Lifecycle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Application calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "read(fd, buf, count)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["VFS dispatches to driver's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "read"
        }), " function via file operations table."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Driver validates parameters and checks device state."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Driver formats device-specific command (e.g., ATA command block)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Driver writes command to device registers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If PIO: driver polls for completion."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If DMA: driver programs DMA engine, starts transfer, returns."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Device generates interrupt on completion."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interrupt handler identifies which driver owns this IRQ."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handler reads status, signals completion to waiting process."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data is copied to user buffer (if PIO) or already in place (DMA)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Driver returns bytes read to VFS, which returns to application."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-block-device-driver",
      children: "Pseudocode: Block Device Driver"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STRUCTURE block_device_driver:\n    .major\n    .ops\n    .queue\n    .lock\n    .hw_state\n\nFUNCTION driver_read(request):\n    LOCK(driver.lock)\n    cmd = FORMAT_ATA_COMMAND(request.lba, request.count)\n    WRITE_REGISTER(device.cmd_reg, cmd)\n    WRITE_REGISTER(device.lba_reg, request.lba)\n    WRITE_REGISTER(device.count_reg, request.count)\n    IF use_dma:\n        dma.program(device.data_port, request.buffer, request.count)\n        dma.start()\n        UNLOCK(driver.lock)\n        RETURN PENDING\n    ELSE:\n        FOR i = 0 TO request.count:\n            WHILE (READ_REGISTER(device.status) & BSY): NOP\n            request.buffer[i] = READ_REGISTER(device.data)\n        UNLOCK(driver.lock)\n        RETURN OK\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-driver-read-with-dma",
      children: "Dry Run Trace: Driver Read with DMA"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "read(fd, buf, 8192)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "filp->f_op->read(file, buf, 8192, &pos)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ext4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File to block mapping: logical blocks 42-43"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request merged into elevator queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCSI layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "scsi_dispatch_cmd()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Driver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program DMA: address=0x2000, count=8KB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transfer starts - CPU returns to app"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sends data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writes to 0x2000-0x3FFF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assert IRQ when done"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Driver ISR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read status, wake up waiting process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "buf now contains data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-driver-framework",
      children: "C++ Implementation: Driver Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <functional>\n#include <map>\n\nstruct file_operations {\n    std::function<int(char*, size_t)> read;\n    std::function<int(const char*, size_t)> write;\n    std::function<int()> open;\n    std::function<int()> release;\n    std::function<int(int, void*)> ioctl;\n};\n\nclass DeviceDriver {\n    std::string name;\n    int major;\nprotected:\n    file_operations ops;\npublic:\n    DeviceDriver(const std::string& n, int maj) : name(n), major(maj) {}\n    virtual ~DeviceDriver() = default;\n\n    std::string get_name() const { return name; }\n    int get_major() const { return major; }\n    file_operations* get_ops() { return &ops; }\n\n    virtual int init_device() = 0;\n    virtual void shutdown_device() = 0;\n};\n\nclass SimpleCharDriver : public DeviceDriver {\n    char buffer[256];\n    int buf_pos;\npublic:\n    SimpleCharDriver() : DeviceDriver(\"simple_char\", 42), buf_pos(0) {\n        ops.read = [this](char* buf, size_t count) -> int {\n            int to_copy = std::min(count, (size_t)buf_pos);\n            memcpy(buf, buffer, to_copy);\n            if (to_copy < buf_pos)\n                memmove(buffer, buffer + to_copy, buf_pos - to_copy);\n            buf_pos -= to_copy;\n            std::cout << \"[DRV] Read \" << to_copy << \" bytes\\n\";\n            return to_copy;\n        };\n        ops.write = [this](const char* buf, size_t count) -> int {\n            int to_copy = std::min(count, (size_t)(256 - buf_pos));\n            memcpy(buffer + buf_pos, buf, to_copy);\n            buf_pos += to_copy;\n            std::cout << \"[DRV] Wrote \" << to_copy << \" bytes\\n\";\n            return to_copy;\n        };\n    }\n\n    int init_device() override {\n        std::cout << \"[DRV] Initializing \" << get_name() << \"\\n\";\n        return 0;\n    }\n\n    void shutdown_device() override {\n        std::cout << \"[DRV] Shutting down\\n\";\n    }\n};\n\nint main() {\n    SimpleCharDriver driver;\n    driver.init_device();\n    char data[] = \"Hello, device!\";\n    driver.get_ops()->write(data, sizeof(data));\n    char readbuf[64] = {0};\n    driver.get_ops()->read(readbuf, 64);\n    std::cout << \"Read back: \" << readbuf << \"\\n\";\n    driver.shutdown_device();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-4",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from abc import ABC, abstractmethod\n\nclass FileOperations:\n    def __init__(self):\n        self.read = None\n        self.write = None\n        self.open = None\n        self.release = None\n        self.ioctl = None\n\nclass DeviceDriver(ABC):\n    def __init__(self, name, major):\n        self.name = name\n        self.major = major\n        self.ops = FileOperations()\n\n    @abstractmethod\n    def init_device(self): pass\n\n    @abstractmethod\n    def shutdown_device(self): pass\n\nclass SimpleCharDriver(DeviceDriver):\n    def __init__(self):\n        super().__init__(\"simple_char\", 42)\n        self.buffer = bytearray()\n        self.ops.read = self._read\n        self.ops.write = self._write\n\n    def _read(self, buf, count):\n        to_copy = min(count, len(self.buffer))\n        result = bytes(self.buffer[:to_copy])\n        self.buffer = self.buffer[to_copy:]\n        print(f\"[DRV] Read {to_copy} bytes: {result}\")\n        return result\n\n    def _write(self, data, count):\n        self.buffer.extend(data[:count])\n        print(f\"[DRV] Wrote {count} bytes\")\n        return count\n\n    def init_device(self):\n        print(f\"[DRV] Initializing {self.name} at major {self.major}\")\n        return 0\n\n    def shutdown_device(self):\n        print(\"[DRV] Shutting down\")\n\ndriver = SimpleCharDriver()\ndriver.init_device()\ndriver.ops.write(b\"Hello, device!\", 14)\ndata = driver.ops.read(None, 64)\nprint(f\"Read back: {data}\")\ndriver.shutdown_device()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-5",
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
            children: "Driver init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(hw_init)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device detection + register setup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read (PIO)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N bytes copied through CPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read (DMA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Setup + wait for completion interrupt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupt handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status read + wakeup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ioctl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(command)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device-specific control operation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-5",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standard kernel interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel-space bugs crash system"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must handle every device variation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hot-plug support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Race conditions with concurrent access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Power management hooks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex DMA/SG handling"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-5",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Device hot-unplug"
        }), ": Driver reads status, device gone; return I/O error gracefully."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Concurrent access"
        }), ": Multiple threads on same device; lock request queue, serialize."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Power transition"
        }), ": Device suspends mid-I/O; abort, requeue, or retry on resume."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Faulty device"
        }), ": Status returns garbage; check magic numbers, implement timeout."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module unloading"
        }), ": Device still has pending I/O; drain queue before unload."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-character-vs-block-devices",
      children: "8. Character vs Block Devices"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Character Device"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Block Device"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Byte stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-size blocks (512B-4KB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Seeking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random access by block number"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buffering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line or raw mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page cache + buffer cache"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random + sequential"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keyboard, mouse, serial, TTY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk, SSD, CD-ROM, partition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device file"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "/dev/tty0"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/dev/random"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "/dev/sda"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/dev/nvme0n1"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Driver interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "char_device_operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "block_device_operations + request queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Major numbers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 (TTY), 1 (mem), 10 (misc)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 (SD), 259 (NVMe)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typically no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page cache (yes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rarely (small transfers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always for bulk I/O"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "character-device-flow",
      children: "Character Device Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User: read(fd, buf, 100)\n  V\nKernel: tty_read()\n  V\nLine discipline: process special chars (^C, ^D, backspace)\n  V\nSerial driver: read UART register\n  V\nDevice: provides one byte at a time via interrupt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "block-device-flow",
      children: "Block Device Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User: read(fd, buf, 4096)\n  V\nVFS: vfs_read() -> ext4_file_read()\n  V\next4: logical offset -> physical block number (inode lookup)\n  V\nPage cache: check if page is already cached -> hit/miss\n  V\nBlock layer: submit_bio(struct bio)\n  V\nI/O scheduler: merge, sort requests (deadline/CFQ)\n  V\nDevice driver: translate BIO -> NVMe command or ATA command\n  V\nDMA: NVMe SQ doorbell -> controller reads command -> DMA data\n  V\nInterrupt: completion -> wake up waiting process\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-character-vs-block-abstraction",
      children: "C++: Character vs Block Abstraction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n\nclass CharacterDevice {\nprotected:\n    std::vector<char> buffer;\npublic:\n    virtual ssize_t read(char* buf, size_t count) = 0;\n    virtual ssize_t write(const char* buf, size_t count) = 0;\n    virtual ~CharacterDevice() = default;\n};\n\nclass BlockDevice {\nprotected:\n    static const size_t BLOCK_SIZE = 4096;\n    std::vector<std::vector<char>> blocks;\npublic:\n    virtual ssize_t read_block(size_t n, char* buf) = 0;\n    virtual ssize_t write_block(size_t n, const char* buf) = 0;\n    virtual size_t block_count() const = 0;\n    virtual ~BlockDevice() = default;\n};\n\nclass SerialPort : public CharacterDevice {\npublic:\n    ssize_t read(char* buf, size_t count) override {\n        if (buffer.empty()) return 0;\n        size_t n = std::min(count, buffer.size());\n        std::copy(buffer.begin(), buffer.begin() + n, buf);\n        buffer.erase(buffer.begin(), buffer.begin() + n);\n        return n;\n    }\n\n    ssize_t write(const char* buf, size_t count) override {\n        std::cout << \"[SERIAL] TX: \";\n        for (size_t i = 0; i < count; i++) std::cout << buf[i];\n        std::cout << \"\\n\";\n        return count;\n    }\n};\n\nclass SSD : public BlockDevice {\npublic:\n    SSD() { blocks.resize(1024, std::vector<char>(BLOCK_SIZE, 0)); }\n\n    ssize_t read_block(size_t n, char* buf) override {\n        if (n >= blocks.size()) return -1;\n        std::copy(blocks[n].begin(), blocks[n].end(), buf);\n        return BLOCK_SIZE;\n    }\n\n    ssize_t write_block(size_t n, const char* buf) override {\n        if (n >= blocks.size()) return -1;\n        std::copy(buf, buf + BLOCK_SIZE, blocks[n].begin());\n        return BLOCK_SIZE;\n    }\n\n    size_t block_count() const override { return blocks.size(); }\n};\n\nint main() {\n    SSD ssd;\n    char data[4096] = \"Block data content\";\n    ssd.write_block(42, data);\n    char readback[4096] = {0};\n    ssd.read_block(42, readback);\n    std::cout << \"Block 42: \" << readback << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9-kernel-io-subsystem",
      children: "9. Kernel I/O Subsystem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The kernel I/O subsystem provides a unified framework for all I/O operations across devices."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "components",
      children: "Components"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+----------------------------------------+\n| System Calls (read/write/open)          |\n+----------------------------------------+\n| VFS  | Device Files  | Socket Layer     |\n+------+---------------+------------------+\n| I/O Scheduler  | Block Layer (bio)      |\n+----------------+-----------------------+\n| Page Cache | Buffer Cache | Dentry Cache|\n+----------------------------------------+\n| Device Drivers (char, block, network)   |\n+----------------------------------------+\n| Interrupt Handlers (top-half + bottom)  |\n+----------------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "key-kernel-services",
      children: "Key Kernel Services"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Service"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I/O Scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reorder and merge block I/O requests for efficiency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buffering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decouple producer/consumer speed mismatches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep frequently accessed data in memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serialize access to exclusive devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retry transient, report persistent errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device file permissions, capability checks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/dev/sda, /dev/ttyS0 - consistent device naming"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10-io-scheduling",
      children: "10. I/O Scheduling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "I/O scheduling reorders and merges pending I/O requests to improve throughput and fairness."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-6",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "An elevator (disk head) carries passengers (I/O requests). Serving floor 3, then floor 10, then floor 4 means wasted travel. The elevator scheduler reorders: 3, 4, 10."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-deadline-algorithm",
      children: "Numbered Steps: Deadline Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New I/O request arrives (block number, read/write, process ID)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scheduler inserts request into sorted queue (by block number)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scheduler assigns expiration deadline (500ms for reads, 5s for writes)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scheduler inserts into read FIFO and write FIFO (by deadline)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When dispatch is called:\na. If any request in FIFO has expired, serve FIFO (starvation prevention).\nb. Otherwise, serve from sorted queue (elevator/SSTF order)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adjacent requests are merged (same block = merge)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Driver receives merged optimal request."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CLASS IOScheduler:\n    sorted_queue = PRIORITY_QUEUE(key = block_number)\n    read_fifo = QUEUE()\n    write_fifo = QUEUE()\n\n    FUNCTION add_request(req):\n        sorted_queue.push(req)\n        IF req.type == READ: read_fifo.push(req)\n        ELSE: write_fifo.push(req)\n        MERGE_ADJACENT()\n    END FUNCTION\n\n    FUNCTION dispatch():\n        current_time = NOW()\n        IF read_fifo.front().deadline < current_time:\n            RETURN read_fifo.pop()\n        IF write_fifo.front().deadline < current_time:\n            RETURN write_fifo.pop()\n        RETURN sorted_queue.pop()\n    END FUNCTION\n\n    FUNCTION merge_adjacent():\n        // Combine adjacent blocks into one larger request\n    END FUNCTION\nEND CLASS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-deadline-scheduler",
      children: "Dry Run Trace: Deadline Scheduler"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Req"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Block"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sorted Queue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deadlines"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dispatch"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[100A]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t+500ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WRITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[50B, 100A]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t+5s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[50B, 100A, 200C]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t+500ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "55"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WRITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[50B, 55D, 100A, 200C]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t+5s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[50B, 55D, 100A, 200C]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50B (sorted)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[100A, 200C]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100A (sorted)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "READ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[60E, 200C]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t+500ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[60E, 200C]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "expired"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60E (FIFO)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[200C]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200C (sorted)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-io-scheduler",
      children: "C++ Implementation: I/O Scheduler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <queue>\n#include <vector>\n#include <algorithm>\n#include <cstdint>\n\nstruct IORequest {\n    uint64_t block;\n    bool is_read;\n    int pid;\n    uint64_t deadline_ms;\n    bool operator<(const IORequest& other) const {\n        return block > other.block;\n    }\n};\n\nclass DeadlineIOScheduler {\n    std::priority_queue<IORequest> sorted_queue;\n    std::vector<IORequest> read_fifo, write_fifo;\n    uint64_t current_ms;\n    static constexpr uint64_t READ_DEADLINE = 500;\n    static constexpr uint64_t WRITE_DEADLINE = 5000;\n\npublic:\n    DeadlineIOScheduler() : current_ms(0) {}\n\n    void add_request(uint64_t block, bool is_read, int pid) {\n        uint64_t deadline = current_ms + (is_read ? READ_DEADLINE : WRITE_DEADLINE);\n        sorted_queue.push({block, is_read, pid, deadline});\n        (is_read ? read_fifo : write_fifo).push_back({block, is_read, pid, deadline});\n    }\n\n    IORequest dispatch() {\n        for (auto* fifo : {&read_fifo, &write_fifo}) {\n            auto it = std::find_if(fifo->begin(), fifo->end(),\n                [this](const IORequest& r) { return r.deadline_ms <= current_ms; });\n            if (it != fifo->end()) {\n                IORequest req = *it;\n                fifo->erase(it);\n                return req;\n            }\n        }\n        if (!sorted_queue.empty()) {\n            IORequest req = sorted_queue.top();\n            sorted_queue.pop();\n            auto& fifo = req.is_read ? read_fifo : write_fifo;\n            fifo.erase(std::remove_if(fifo.begin(), fifo.end(),\n                [&](const IORequest& r) { return r.block == req.block; }), fifo.end());\n            return req;\n        }\n        return {0, false, 0, 0};\n    }\n\n    void tick(uint64_t ms) { current_ms += ms; }\n    bool empty() const { return sorted_queue.empty(); }\n};\n\nint main() {\n    DeadlineIOScheduler sched;\n    sched.add_request(100, true, 1);\n    sched.add_request(50, false, 2);\n    sched.add_request(200, true, 3);\n    sched.add_request(55, false, 4);\n    while (!sched.empty()) { sched.tick(100); sched.dispatch(); }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-5",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import heapq\nfrom dataclasses import dataclass\nfrom typing import List\n\n@dataclass\nclass IORequest:\n    block: int; is_read: bool; pid: int; deadline: int\n    def __lt__(self, other):\n        return self.block < other.block\n\nclass DeadlineIOScheduler:\n    READ_DEADLINE = 500; WRITE_DEADLINE = 5000\n\n    def __init__(self):\n        self.sorted_queue: List[IORequest] = []\n        self.read_fifo: List[IORequest] = []\n        self.write_fifo: List[IORequest] = []\n        self.current_ms = 0\n\n    def add_request(self, block, is_read, pid):\n        deadline = self.current_ms + (self.READ_DEADLINE if is_read else self.WRITE_DEADLINE)\n        req = IORequest(block=block, is_read=is_read, pid=pid, deadline=deadline)\n        heapq.heappush(self.sorted_queue, req)\n        (self.read_fifo if is_read else self.write_fifo).append(req)\n\n    def dispatch(self):\n        for fifo in (self.read_fifo, self.write_fifo):\n            expired = [r for r in fifo if r.deadline <= self.current_ms]\n            if expired:\n                req = expired[0]; fifo.remove(req); return req\n        if self.sorted_queue:\n            req = heapq.heappop(self.sorted_queue)\n            (self.read_fifo if req.is_read else self.write_fifo).remove(req)\n            return req\n    def tick(self, ms): self.current_ms += ms\n    def empty(self): return len(self.sorted_queue) == 0\n\nsched = DeadlineIOScheduler()\nsched.add_request(100, True, 1)\nsched.add_request(50, False, 2)\nsched.add_request(200, True, 3)\nsched.add_request(55, False, 4)\nwhile not sched.empty():\n    sched.tick(100); sched.dispatch()\n"
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
            children: "Request insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority queue push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Request dispatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop + deadline scan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Request merge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacent block check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deadline check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M) + O(log N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan FIFO (M) + pop queue"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-6",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Increased throughput via merging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Starvation possible (without deadline)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fairness across processes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reduced seek time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not optimal for SSDs (no seek)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-6",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty queue"
        }), ": Dispatch returns immediately with no-op."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read starvation"
        }), ": Burst of writes delays reads indefinitely; deadline prevents this."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Process exits with pending I/O"
        }), ": Drain or cancel requests."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Device removal mid-queue"
        }), ": Cancel all pending, return error."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-buffering",
      children: "11. Buffering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A buffer is a memory region that holds data in transit between two devices or between device and application."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-7",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "A water tank (buffer) between a slow well (producer) and a fast tap (consumer). The tank fills when the well pumps and drains when the tap opens. Without the tank, the tap sputters."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "single-buffering",
      children: "Single Buffering"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Producer -> [Buffer] -> Consumer\n\nOne buffer shared between producer and consumer.\nAt any time, either the producer fills or the consumer drains.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation: Single Buffer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <thread>\n\ntemplate<typename T>\nclass SingleBuffer {\n    T data;\n    bool full;\npublic:\n    SingleBuffer() : full(false) {}\n\n    void put(const T& item) {\n        while (full) std::this_thread::yield();\n        data = item;\n        full = true;\n    }\n\n    T get() {\n        while (!full) std::this_thread::yield();\n        full = false;\n        return data;\n    }\n};\n\nint main() {\n    SingleBuffer<char> buf;\n    std::thread producer([&]() {\n        for (char c : \"Hello\") { buf.put(c); std::this_thread::sleep_for(std::chrono::milliseconds(50)); }\n    });\n    std::thread consumer([&]() {\n        for (int i = 0; i < 5; i++) { char c = buf.get(); std::cout << c; }\n    });\n    producer.join(); consumer.join();\n    std::cout << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading, time\n\nclass SingleBuffer:\n    def __init__(self):\n        self.data = None\n        self.full = False\n        self._lock = threading.Lock()\n        self._cond = threading.Condition(self._lock)\n\n    def put(self, item):\n        with self._lock:\n            while self.full: self._cond.wait()\n            self.data = item; self.full = True; self._cond.notify()\n\n    def get(self):\n        with self._lock:\n            while not self.full: self._cond.wait()\n            self.full = False; self._cond.notify(); return self.data\n\nbuf = SingleBuffer()\ndef producer():\n    for c in \"Hello\": buf.put(c); time.sleep(0.05)\ndef consumer():\n    for _ in range(5): print(buf.get(), end='', flush=True)\nthreading.Thread(target=producer).start()\nthreading.Thread(target=consumer).start()\ntime.sleep(1); print()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "double-buffering",
      children: "Double Buffering"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Buffer A: [ being consumed -> ]   Consumer reads from A\nBuffer B: [ <- producer fills  ]   Producer writes to B\n\nWhen A is empty and B is full: swap roles.\nEliminates waiting - producer and consumer work in parallel.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Diagram:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Time t0: A=[data ready]  B=[empty]\n         consumer reads A, producer fills B\n\nTime t1: A=[empty]       B=[data ready]\n         producer fills A,  consumer reads B\n\nTime t2: A=[data ready]  B=[empty]\n         consumer reads A, producer fills B\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation: Double Buffer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <thread>\n#include <vector>\n#include <atomic>\n\ntemplate<typename T>\nclass DoubleBuffer {\n    std::vector<T> buffers[2];\n    std::atomic<int> read_idx{0};\n    std::atomic<int> write_idx{1};\n    static const size_t CAP = 256;\n\npublic:\n    DoubleBuffer() { buffers[0].reserve(CAP); buffers[1].reserve(CAP); }\n\n    void produce(const T& item) { buffers[write_idx.load()].push_back(item); }\n\n    void swap() {\n        int w = write_idx.exchange(read_idx);\n        read_idx.store(w);\n        buffers[write_idx.load()].clear();\n    }\n\n    const std::vector<T>& consume() const { return buffers[read_idx.load()]; }\n};\n\nint main() {\n    DoubleBuffer<int> db;\n    std::thread producer([&]() {\n        for (int i = 0; i < 100; i++) { db.produce(i); std::this_thread::sleep_for(std::chrono::milliseconds(1)); if (i % 10 == 0) db.swap(); }\n    });\n    std::thread consumer([&]() {\n        for (int i = 0; i < 10; i++) { std::this_thread::sleep_for(std::chrono::milliseconds(5)); db.swap(); auto data = db.consume(); std::cout << \"Consumed \" << data.size() << \" items\\n\"; }\n    });\n    producer.join(); consumer.join();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading, time\n\nclass DoubleBuffer:\n    def __init__(self):\n        self.buffers = [[], []]\n        self.read_idx = 0; self.write_idx = 1\n        self._lock = threading.Lock()\n\n    def produce(self, item):\n        with self._lock: self.buffers[self.write_idx].append(item)\n\n    def swap(self):\n        with self._lock:\n            self.read_idx, self.write_idx = self.write_idx, self.read_idx\n            self.buffers[self.write_idx].clear()\n            return list(self.buffers[self.read_idx])\n\ndb = DoubleBuffer()\ndef producer():\n    for i in range(100): db.produce(i); time.sleep(0.001)\ndef consumer():\n    for _ in range(10): time.sleep(0.005); data = db.swap(); print(f\"Consumed {len(data)} items\")\nthreading.Thread(target=producer).start()\nthreading.Thread(target=consumer).start()\ntime.sleep(1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "circular-buffer-ring-buffer",
      children: "Circular Buffer (Ring Buffer)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "A fixed-size array with head and tail pointers that wrap around.\n\n   head -> [ | | |X|X|X|X| | | ] <- tail\n\nProduce at tail; consume at head. Full when (tail+1) % N == head.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation: Circular Buffer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <optional>\n\ntemplate<typename T>\nclass CircularBuffer {\n    std::vector<T> buffer;\n    size_t head, tail;\n    bool full_flag;\npublic:\n    CircularBuffer(size_t size) : buffer(size), head(0), tail(0), full_flag(false) {}\n\n    bool enqueue(const T& item) {\n        if (full_flag) return false;\n        buffer[tail] = item;\n        tail = (tail + 1) % buffer.size();\n        if (tail == head) full_flag = true;\n        return true;\n    }\n\n    std::optional<T> dequeue() {\n        if (empty()) return std::nullopt;\n        T item = buffer[head];\n        head = (head + 1) % buffer.size();\n        full_flag = false;\n        return item;\n    }\n\n    bool empty() const { return !full_flag && head == tail; }\n    bool full() const { return full_flag; }\n};\n\nint main() {\n    CircularBuffer<int> cb(8);\n    for (int i = 0; i < 6; i++) cb.enqueue(i * 10);\n    while (!cb.empty()) {\n        auto val = cb.dequeue();\n        if (val) std::cout << \"Dequeued \" << *val << \"\\n\";\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Optional, List\n\nclass CircularBuffer:\n    def __init__(self, size: int):\n        self.buffer: List[Optional[int]] = [None] * size\n        self.size = size; self.head = 0; self.tail = 0; self.full_flag = False\n\n    def enqueue(self, item: int) -> bool:\n        if self.full_flag: return False\n        self.buffer[self.tail] = item\n        self.tail = (self.tail + 1) % self.size\n        if self.tail == self.head: self.full_flag = True\n        return True\n\n    def dequeue(self) -> Optional[int]:\n        if self.empty(): return None\n        item = self.buffer[self.head]\n        self.head = (self.head + 1) % self.size\n        self.full_flag = False\n        return item\n\n    def empty(self): return not self.full_flag and self.head == self.tail\n    def full(self): return self.full_flag\n\ncb = CircularBuffer(8)\nfor i in range(6): cb.enqueue(i * 10)\nwhile not cb.empty():\n    val = cb.dequeue()\n    if val is not None: print(f\"Dequeued {val}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-7",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Enqueue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dequeue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One slot, must wait for consumer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swap pointers O(1); two full buffers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Circular buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array with modulo arithmetic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "buffering-comparison",
      children: "Buffering Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Single"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Double"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Circular"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (swap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-grained"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory waste"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wastes 1 slot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple sync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audio/video streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network ring buffers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-7",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Buffer overflow"
        }), ": Producer faster than consumer; data loss. Back-pressure needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Buffer underflow"
        }), ": Consumer faster than producer; stale data. Wait or return empty."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wrap-around"
        }), ": Circular buffer tail passes head; overwrite old data. Check full_flag."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-producer/consumer"
        }), ": Need atomic increment or locking around head/tail."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache line bouncing"
        }), ": Head and tail on same cache line; false sharing. Pad to separate lines."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-caching",
      children: "12. Caching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A cache holds copies of frequently accessed data for faster access on subsequent requests."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-8",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "A toolbox (cache) next to your workbench. Instead of walking to the hardware store (disk) for every screw (data block), you keep frequently used screws in the toolbox."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cache-vs-buffer",
      children: "Cache vs Buffer"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cache"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Speed up repeated access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decouple producer/consumer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kept for potential reuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transient, consumed once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eviction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LRU, LFU, ARC algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page cache (Linux VM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdio buffer, DMA ring buffer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "page-cache-in-linux",
      children: "Page Cache in Linux"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Application: read(fd, buf, 4096)\n    V\nVFS: lookup page in page cache\n    Hit -> copy from page cache -> return (fast!)\n    Miss -> allocate page -> submit I/O -> DMA fills page\n            -> add to page cache -> copy to user -> return\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-lru-cache",
      children: "C++ Implementation: LRU Cache"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <unordered_map>\n#include <list>\n#include <cstdint>\n\nclass PageCache {\n    size_t capacity;\n    std::list<std::pair<uint64_t, std::vector<char>>> lru_list;\n    std::unordered_map<uint64_t, decltype(lru_list)::iterator> map;\n\npublic:\n    PageCache(size_t cap) : capacity(cap) {}\n\n    bool get(uint64_t block_num, std::vector<char>& data) {\n        auto it = map.find(block_num);\n        if (it == map.end()) return false;\n        lru_list.splice(lru_list.begin(), lru_list, it->second);\n        data = it->second->second;\n        return true;\n    }\n\n    void put(uint64_t block_num, const std::vector<char>& data) {\n        auto it = map.find(block_num);\n        if (it != map.end()) {\n            it->second->second = data;\n            lru_list.splice(lru_list.begin(), lru_list, it->second);\n            return;\n        }\n        if (lru_list.size() >= capacity) {\n            map.erase(lru_list.back().first);\n            lru_list.pop_back();\n        }\n        lru_list.emplace_front(block_num, data);\n        map[block_num] = lru_list.begin();\n    }\n};\n\nint main() {\n    PageCache cache(3);\n    std::vector<char> block(4096, 'A');\n    cache.put(100, block); cache.get(100, block);\n    cache.put(200, block); cache.put(300, block);\n    cache.get(200, block);\n    cache.put(400, block); // evicts 100\n    std::vector<char> unused;\n    std::cout << \"Block 100 \" << (cache.get(100, unused) ? \"HIT\" : \"MISS\") << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-6",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import OrderedDict\nfrom typing import Optional, List\n\nclass PageCache:\n    def __init__(self, capacity: int):\n        self.cache: OrderedDict[int, List[int]] = OrderedDict()\n        self.capacity = capacity\n\n    def get(self, block_num: int) -> Optional[List[int]]:\n        if block_num not in self.cache: return None\n        self.cache.move_to_end(block_num)\n        return self.cache[block_num]\n\n    def put(self, block_num: int, data: List[int]):\n        if block_num in self.cache:\n            self.cache.move_to_end(block_num)\n            self.cache[block_num] = data\n            return\n        if len(self.cache) >= self.capacity:\n            self.cache.popitem(last=False)\n        self.cache[block_num] = data\n\ncache = PageCache(3)\nblock = [0x41] * 4096\ncache.put(100, block); cache.get(100)\ncache.put(200, block); cache.put(300, block)\ncache.get(200)\ncache.put(400, block)  # evicts 100\nprint(f\"Block 100 cached: {cache.get(100) is not None}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-8",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Cache lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash map + list splice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amortized; eviction O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eviction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove LRU tail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Miss penalty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(I/O time)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(block)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk/network I/O dominates"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-7",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dramatically reduces I/O latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache coherency complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces device contention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory pressure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transparent to applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stale data (stale cache problem)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-8",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache thrashing"
        }), ": Working set exceeds cache; constant misses. Increase cache or change eviction policy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stale data"
        }), ": Device writes bypass cache; cache has outdated copy; invalidate on write."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write-back delay"
        }), ": Data written to cache but not device; crash loses data; use write-through or journaling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NUMA locality"
        }), ": Cache on wrong NUMA node; cross-node memory access; bind cache to local node."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-spooling",
      children: "13. Spooling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A spool (Simultaneous Peripheral Operations On-Line) holds output for a device that cannot serve interleaved requests."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-9",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "A deli counter with a ticket system. Multiple customers (applications) take numbers (spool files) and wait. The deli worker (device) serves one ticket at a time. Without tickets, customers would shout over each other."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbered-steps-printer-spooler",
      children: "Numbered Steps: Printer Spooler"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Application A calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "write(printer_fd, \"Report A\", 8)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernel sees device is exclusive, writes data to spool file job001."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Application B calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "write(printer_fd, \"Report B\", 8)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernel writes data to spool file job002."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Print daemon (background process) monitors spool directory."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Daemon picks job001, opens printer device, sends data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Daemon marks job001 as printed, deletes spool file."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Daemon picks job002, sends to printer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both applications got immediate completion - no waiting."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-print-spooler",
      children: "Pseudocode: Print Spooler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE spooler_daemon():\n    WHILE TRUE:\n        spool_files = LIST_FILES(\"/var/spool/printer/\")\n        SORT spool_files by creation time\n        FOR each file IN spool_files:\n            IF file.status == PENDING:\n                printer = OPEN(\"/dev/lp0\")\n                data = READ(file)\n                WRITE(printer, data)\n                CLOSE(printer)\n                DELETE(file)\n        SLEEP(1 second)\nEND PROCEDURE\n\nPROCEDURE print_document(document):\n    job_id = GENERATE_UNIQUE_ID()\n    spool_path = \"/var/spool/printer/\" + job_id + \".spool\"\n    WRITE_FILE(spool_path, document)\n    MARK as PENDING\n    RETURN job_id\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-printer-spooler",
      children: "Dry Run Trace: Printer Spooler"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "App A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "App B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Spool Dir"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Printer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Daemon"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Submit Report"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sleeping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "job001.spool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sleeping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Submit Invoice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "job001, job002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sleeping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return OK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "job001, job002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wake, pick job001"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App runs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return OK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "job001(printing), job002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUSY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sending to printer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "job002, done: job001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "job001 done, pick job002"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "job002(printing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUSY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sending job002"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "done: job002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "job002 done, sleep"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-print-spooler",
      children: "C++ Implementation: Print Spooler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\n#include <thread>\n#include <chrono>\n#include <filesystem>\n\nnamespace fs = std::filesystem;\n\nclass PrintSpooler {\n    fs::path spool_dir;\n    bool running;\n    std::string gen_id() {\n        static int c = 0;\n        return \"job\" + std::to_string(++c);\n    }\n\npublic:\n    PrintSpooler(const std::string& dir = \"/tmp/spool\") : spool_dir(dir), running(false) {\n        fs::create_directories(spool_dir);\n    }\n\n    std::string submit(const std::string& doc) {\n        auto id = gen_id();\n        std::ofstream out(spool_dir / (id + \".spool\"));\n        out << doc;\n        std::cout << \"[SPOOL] Submitted \" << id << \"\\n\";\n        return id;\n    }\n\n    void daemon_start() {\n        running = true;\n        std::thread([this]() {\n            while (running) {\n                std::vector<fs::path> jobs;\n                for (auto& e : fs::directory_iterator(spool_dir))\n                    if (e.path().extension() == \".spool\") jobs.push_back(e.path());\n                std::sort(jobs.begin(), jobs.end());\n                for (auto& j : jobs) {\n                    std::ifstream in(j);\n                    std::string c((std::istreambuf_iterator<char>(in)), {});\n                    std::cout << \"[DAEMON] Printing \" << j.stem() << \": \" << c << \"\\n\";\n                    std::this_thread::sleep_for(std::chrono::milliseconds(300));\n                    fs::remove(j);\n                }\n                std::this_thread::sleep_for(std::chrono::seconds(1));\n            }\n        }).detach();\n    }\n\n    void daemon_stop() { running = false; }\n};\n\nint main() {\n    PrintSpooler sp;\n    sp.daemon_start();\n    std::this_thread::sleep_for(std::chrono::milliseconds(100));\n    sp.submit(\"Quarterly Report\");\n    sp.submit(\"Invoice #12345\");\n    sp.submit(\"Meeting Notes\");\n    std::this_thread::sleep_for(std::chrono::seconds(2));\n    sp.daemon_stop();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-7",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import os, time, threading, uuid\n\nclass PrintSpooler:\n    def __init__(self, spool_dir=\"/tmp/spool\"):\n        self.spool_dir = spool_dir; self.running = False\n        os.makedirs(spool_dir, exist_ok=True)\n\n    def submit(self, doc: str) -> str:\n        jid = str(uuid.uuid4())[:8]\n        with open(os.path.join(self.spool_dir, f\"{jid}.spool\"), 'w') as f:\n            f.write(doc)\n        print(f\"[SPOOL] Submitted {jid}\"); return jid\n\n    def daemon_start(self):\n        self.running = True\n        def run():\n            while self.running:\n                jobs = sorted([os.path.join(self.spool_dir, f)\n                    for f in os.listdir(self.spool_dir) if f.endswith('.spool')])\n                for j in jobs:\n                    with open(j) as f: c = f.read()\n                    print(f\"[DAEMON] Printing {os.path.basename(j)}: {c}\")\n                    time.sleep(0.3); os.remove(j)\n                time.sleep(1)\n        threading.Thread(target=run, daemon=True).start()\n\n    def daemon_stop(self): self.running = False\n\nsp = PrintSpooler()\nsp.daemon_start()\ntime.sleep(0.1)\nsp.submit(\"Quarterly Report\")\nsp.submit(\"Invoice #12345\")\ntime.sleep(2)\nprint(\"Done\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-9",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Spool submission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(doc_size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(doc_size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write document to disk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Daemon poll"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan directory, N = spool count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Print job"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(doc_size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read + send to device"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Job removal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File delete"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-8",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No application blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk space for spool files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Serializes exclusive devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Daemon overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Crash resilience (spool on disk)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary files need cleanup"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-9",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spool disk full"
        }), ": ENOSPC -> reject submission, notify user."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Daemon crash"
        }), ": Pending jobs remain on disk; restart daemon picks them up."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Printer jam"
        }), ": Job stays marked printing; timeout, requeue, or notify admin."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Privilege escalation"
        }), ": Spool files readable by other users; set restrictive permissions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Giant spool file"
        }), ": Print 1000 pages; daemon should stream, not load entirely into memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-error-handling",
      children: "14. Error Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "I/O errors occur at many levels. The kernel I/O subsystem layers error handling."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "error-classification",
      children: "Error Classification"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling Strategy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bad sector, cable disconnect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retry, then report"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Command timeout, protocol error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reset device, retry command"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Driver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA failure, register stuck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reinitialize, recover"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OOM, buffer allocation fail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return ENOMEM, try smaller transfer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Corrupted inode, full disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return EIO, ENOSPC"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "posix-error-codes",
      children: "POSIX Error Codes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define EIO       5   // I/O hardware error\n#define EAGAIN   11   // Try again (non-blocking)\n#define ENOSPC   28   // No space left on device\n#define EINTR     4   // Interrupted by signal\n#define EBADF     9   // Bad file descriptor\n#define EFAULT   14   // Bad memory address\n#define ENXIO     6   // Device not configured\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-io-with-error-handling",
      children: "C++: I/O with Error Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <system_error>\n\nenum class IOError { NONE, HARDWARE_FAILURE, TIMEOUT, DEVICE_NOT_FOUND, RETRY_EXHAUSTED };\n\nclass Device {\npublic:\n    IOError read_sector(int lba, char* buf) {\n        int retries = 3;\n        while (retries--) {\n            int status = hw_read(lba, buf);\n            if (status == 0) return IOError::NONE;\n            if (status == -ETIMEDOUT) { reset_device(); continue; }\n            if (status == -ENXIO) return IOError::DEVICE_NOT_FOUND;\n        }\n        return IOError::RETRY_EXHAUSTED;\n    }\nprivate:\n    int hw_read(int lba, char* buf) {\n        static int call = 0;\n        return (++call <= 2) ? -ETIMEDOUT : 0;\n    }\n    void reset_device() { std::cout << \"[DEV] Reset device\\n\"; }\n};\n\nint main() {\n    Device disk;\n    char buf[512];\n    IOError err = disk.read_sector(100, buf);\n    switch (err) {\n        case IOError::NONE: std::cout << \"Read OK\\n\"; break;\n        case IOError::RETRY_EXHAUSTED: std::cout << \"Failed after retries\\n\"; break;\n        default: std::cout << \"Unrecoverable error\\n\"; break;\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-interview-corner",
      children: "15. Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q1-dma-vs-pio---when-would-you-choose-one-over-the-other",
      children: "Q1: DMA vs PIO - When would you choose one over the other?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": PIO (Programmed I/O) is simpler with lower per-transfer overhead for small transfers. DMA has higher setup overhead (programming DMA registers) but zero per-byte CPU cost. Choose PIO for transfers under ~256 bytes (register operations). Choose DMA for bulk transfers (disk, network, video). DMA also enables true parallelism - CPU computes while data moves."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q2-how-do-you-design-an-interrupt-handler-for-a-high-frequency-device-eg-10gbe-nic",
      children: "Q2: How do you design an interrupt handler for a high-frequency device (e.g., 10GbE NIC)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Use a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bottom-half"
      }), " model:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Top-half"
        }), " (interrupt context): Minimal - save packet descriptor, acknowledge IRQ, schedule NAPI/softirq."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bottom-half"
        }), " (softirq context): Process packets, DMA new buffers, handle protocols."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interrupt coalescing"
        }), ": Hardware waits for N packets or T timer before raising IRQ - reduces IRQ rate 10-100x."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NAPI (New API)"
        }), ": Switch to polling mode under high load - disables interrupts, polls device directly."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Top-half: minimal, runs in interrupt context\nstatic irqreturn_t nic_irq_handler(int irq, void *dev_id) {\n    struct nic_device *nic = dev_id;\n    napi_schedule(&nic->napi); // schedule bottom-half\n    return IRQ_HANDLED;\n}\n\n// Bottom-half: runs in softirq context\nstatic int nic_poll(struct napi_struct *napi, int budget) {\n    struct nic_device *nic = container_of(napi, struct nic_device, napi);\n    int work_done = 0;\n    while (work_done < budget) {\n        struct packet *pkt = nic_read_packet(nic);\n        if (!pkt) break;\n        netif_receive_skb(pkt->skb);\n        work_done++;\n    }\n    if (work_done < budget)\n        napi_complete(napi); // re-enable interrupts\n    return work_done;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q3-what-is-mmap-vs-read-for-file-io-when-to-use-each",
      children: "Q3: What is mmap vs read for file I/O? When to use each?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "read()"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "mmap()"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "syscall -> copy to user buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map file pages into process address space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data copied twice (disk->kernel->user)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data copied once (disk->page cache)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Page fault"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes, on first access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syscall overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per read() call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only during mmap() setup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential access, small reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random access, large files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shared memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (MAP_SHARED)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Truncation safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGBUS if file truncated"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// read() - traditional\nchar buf[4096];\nread(fd, buf, 4096);  // syscall + copy\n\n// mmap() - memory-mapped\nchar *map = mmap(NULL, 4096, PROT_READ, MAP_PRIVATE, fd, 0);\nchar c = map[0];  // page fault on first access, then direct access\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q4-what-is-zero-copy-io-and-how-does-it-work",
      children: "Q4: What is zero-copy I/O and how does it work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Zero-copy eliminates redundant data copying between kernel and user space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Traditional: 4 copies\nchar buf[4096];\nread(fd, buf, 4096);   // copy 1: disk->kernel, copy 2: kernel->user\nwrite(sock, buf, 4096); // copy 3: user->kernel, copy 4: kernel->NIC\n\n// Zero-copy with sendfile: 0 copies\nsendfile(out_fd, in_fd, NULL, 4096);\n// DMA disk->page cache, then DMA page cache->NIC\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Linux zero-copy methods"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Copies"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CPU"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "read + write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 (DMA+CPU+CPU+DMA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mmap + write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (DMA+DMA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sendfile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (DMA+DMA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "splice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (DMA+DMA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q5-what-happens-when-you-press-a-key-on-the-keyboard---full-path",
      children: "Q5: What happens when you press a key on the keyboard - full path?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Key press closes circuit on keyboard matrix."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keyboard controller scans matrix, generates scancode."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Controller asserts IRQ1 on PIC/APIC."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU saves state, vectors to keyboard ISR (entry 33 in IVT)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISR reads port 0x60 (data register) -> scancode."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISR translates scancode to ASCII (via keymap)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISR stores character in tty input buffer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISR sends EOI to PIC, returns (IRET)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TTY line discipline processes character (echo, buffer, signal check)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When read() is waiting, wake up process."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "read() copies character from kernel buffer to user buffer."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q6-what-is-the-difference-between-blocking-non-blocking-and-asynchronous-io",
      children: "Q6: What is the difference between blocking, non-blocking, and asynchronous I/O?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Blocking"
        }), ": Process sleeps until I/O completes. Simple but ties up a thread."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-blocking"
        }), ": Returns immediately (EAGAIN). Caller must retry in a loop or use event notification."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "I/O multiplexing"
        }), " (select/poll/epoll): Single thread waits on multiple file descriptors."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Asynchronous"
        }), " (aio_read, io_uring): Initiates I/O, gets completion event later. True parallelism with single thread."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q7-what-is-io_uring-and-why-is-it-important",
      children: "Q7: What is io_uring and why is it important?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": io_uring (Linux 5.1+) is a modern async I/O interface using shared submission and completion queues (SQ/CQ) in mmap'd memory. Key advantages:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zero syscalls for most operations (kernel reads SQ directly)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports all I/O types (read, write, open, accept, sendmsg, recvmsg)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Batching: submit many requests, reap many completions in one syscall"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Polling mode: kernel busy-polls for completions (userspace polling)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// io_uring submission-completion cycle\nstruct io_uring ring;\nio_uring_queue_init(256, &ring, 0);\n\n// Prepare SQE (submission queue entry)\nstruct io_uring_sqe *sqe = io_uring_get_sqe(&ring);\nio_uring_prep_read(sqe, fd, buf, 4096, 0);\n\n// Submit (one syscall: io_uring_enter)\nio_uring_submit(&ring);\n\n// Reap completion (may block, or use peek)\nstruct io_uring_cqe *cqe;\nio_uring_wait_cqe(&ring, &cqe);\n// cqe->res has result\nio_uring_cqe_seen(&ring, cqe);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q8-what-is-the-difference-between-buffered-and-direct-io",
      children: "Q8: What is the difference between buffered and direct I/O?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffered I/O"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direct I/O"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uses page cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bypasses page cache"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write semantics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-back (delayed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-through (immediate)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No alignment needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be block-aligned"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for repeated reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for large sequential"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May lose data on crash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data safe (O_SYNC/O_DIRECT)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q9-how-do-you-debug-io-performance-issues",
      children: "Q9: How do you debug I/O performance issues?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "iostat -x 1"
        }), " - per-device utilization, await, svctm, queue size."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "iotop"
        }), " - per-process I/O usage."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "blktrace"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "blkparse"
        }), " - full I/O trace with timestamps."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "perf top"
        }), " - kernel hotspots (driver, scheduler, VFS)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "strace -e trace=read,write"
        }), " - syscall tracing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "sar -d"
        }), " - historical I/O statistics."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "q10-explain-the-linux-storage-stack-from-application-to-disk",
      children: "Q10: Explain the Linux Storage Stack from application to disk."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Application: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "write(fd, buf, 4096)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["glibc: syscall wrapper -> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sys_write"
        }), " (CPU enters kernel mode)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["VFS: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vfs_write()"
        }), " -> file's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "write"
        }), " operation."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Filesystem (ext4): allocate blocks, update inode, create journal entry."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Page cache: data is copied to a dirty page."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Block layer: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "submit_bio()"
        }), " -> I/O scheduler (deadline/kyber/BFQ)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Device mapper (optional): LVM/dm-crypt/RAID translation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Block driver: NVMe driver formats command, writes to SQ doorbell."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DMA: NVMe controller reads command via PCIe, DMAs data from memory."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interrupt: completion interrupt fires, driver completes BIO, page marked clean."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-applications-in-real-systems",
      children: "16. Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "linux-io-stack---full-diagram",
      children: "Linux I/O Stack - Full Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+----------------------------------------------+\n| System Calls (read, write, open, ioctl)       |\n+----------------------------------------------+\n| VFS (Virtual File System)                     |\n| ext4  btrfs  XFS  NFS  tmpfs  overlayfs      |\n+----------------------------------------------+\n| Page Cache (mmap, buffered I/O)               |\n+----------------------------------------------+\n| Block Layer                                   |\n| I/O Schedulers (deadline, kyber, BFQ)          |\n| Block MQ (multi-queue)                        |\n| Device Mapper (LVM, dm-crypt, RAID)           |\n+----------------------------------------------+\n| Device Drivers                                |\n| NVMe  AHCI (SATA)  virtio_blk  USB storage    |\n+----------------------------------------------+\n| DMA Engine -> IOMMU -> Device                  |\n+----------------------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "vfs-virtual-file-system",
      children: "VFS (Virtual File System)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VFS provides a uniform file interface regardless of underlying filesystem."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// VFS key structures (simplified)\nstruct file {\n    struct file_operations *f_op;\n    struct dentry *f_dentry;\n    loff_t f_pos;\n    unsigned int f_flags;\n};\n\nstruct file_operations {\n    ssize_t (*read)(struct file *, char __user *, size_t, loff_t *);\n    ssize_t (*write)(struct file *, const char __user *, size_t, loff_t *);\n    int (*open)(struct inode *, struct file *);\n    int (*release)(struct inode *, struct file *);\n    int (*mmap)(struct file *, struct vm_area_struct *);\n};\n\nstruct inode {\n    struct inode_operations *i_op;\n    struct address_space *i_mapping; // page cache\n    dev_t i_rdev; // device number\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "device-mapper",
      children: "Device Mapper"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Linux Device Mapper maps virtual block devices to physical devices."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+------------------------------+\n| /dev/mapper/root             |  LVM logical volume\n+------------------------------+\n| Device Mapper                |  linear/RAID/crypt/snapshot\n+------------------------------+\n| /dev/sda2  /dev/sdb1         |  physical partitions\n+------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common Device Mapper targets:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concatenate devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LVM linear LV"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "striped"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAID 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LVM striped LV"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mirror"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAID 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LVM mirrored LV"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "crypt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dm-crypt encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LUKS encrypted volume"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "snapshot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy-on-write snapshots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LVM snapshots"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSD caching of HDD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bcache, lvmcache"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "raid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAID 4/5/6/10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MD RAID via dm-raid"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "linux-io-schedulers",
      children: "Linux I/O Schedulers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scheduler"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deadline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-request deadline + FIFO + sorted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General purpose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kyber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token-bucket latency control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NVMe, fast SSDs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BFQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted fair queuing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interactive desktop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mq-deadline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deadline for blk-mq"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default on modern kernels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No reordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NVMe with FTL"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-performance-numbers",
      children: "Real-World Performance Numbers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Device"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Interface"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sequential"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Random IOPS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "I/O Method"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HDD (15K RPM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SATA 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 MB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~200 IOPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA + IRQ"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SATA SSD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SATA 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "550 MB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~90K IOPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA + IRQ"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NVMe SSD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCIe 4.0 x4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7000 MB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1M IOPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA + MSI-X + poll"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10GbE NIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCIe 3.0 x8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Gb/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~14.8M pps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA + NAPI + RSS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optane Persistent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDR4 bus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 GB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2.5M IOPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA + mmap"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numa-io-affinity",
      children: "NUMA I/O Affinity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "On multi-socket systems, I/O interrupts should be handled on the same NUMA node as the application to avoid cross-node memory access."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Socket 0               Socket 1\n+-------------------+  +-------------------+\n| CPU cores 0-7     |  | CPU cores 8-15    |\n| LLC (L3)          |  | LLC (L3)          |\n+-------------------+  +-------------------+\n| Memory             |  | Memory            |\n| controller         |  | controller        |\n+-------------------+  +-------------------+\n| NVMe0 IRQ pinned  |  | NVMe1 IRQ pinned |\n| to core 2         |  | to core 10        |\n+-------------------+  +-------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "linux-tuning-for-high-performance-io",
      children: "Linux Tuning for High-Performance I/O"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Set I/O scheduler for NVMe (none = no reordering)\necho none > /sys/block/nvme0n1/queue/scheduler\n\n# Increase request queue depth\necho 1024 > /sys/block/nvme0n1/queue/nr_requests\n\n# Set read-ahead (KB)\nblockdev --setra 4096 /dev/nvme0n1\n\n# Disable merging (NVMe doesn't need it)\necho 0 > /sys/block/nvme0n1/queue/nomerges\n\n# Set CPU governor to performance\ncpupower frequency-set -g performance\n\n# Set IRQ affinity for NVMe to dedicated cores\necho 2 > /proc/irq/124/smp_affinity  # core 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "streams-system-v",
      children: "STREAMS (System V)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "STREAMS provide a framework for building character I/O as a pipeline of processing modules."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Application\n    V\nStream Head  - Interface to user space\n    V\nModule 1     - Line discipline (e.g., terminal processing)\n    V\nModule 2     - Protocol processing\n    V\nDriver        - Device hardware interface\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used in System V Unix for networking and terminal I/O. Linux does not use STREAMS (uses different architecture with TTY layer and network stack)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "io-in-virtualized-environments",
      children: "I/O in Virtualized Environments"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Virtualization"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "I/O Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Overhead"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full emulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QEMU emulates device in software"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Paravirtualization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "virtio: guest driver + host backend"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SR-IOV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware: device appears directly to guest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Near-native"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VFIO passthrough"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whole PCI device to single guest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# virtio: paravirtualized I/O in Linux guests\n# Guest sees /dev/vda (virtio-blk) or /dev/vda (virtio-scsi)\n# Host provides backend (QEMU, vhost, vhost-user)\n\n# NVMe MDev: mediated device, shares single NVMe\n# Each guest gets isolated queue pair\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-io-models",
      children: "17. I/O Models"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blocking I/O"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process sleeps until I/O completes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process is blocked"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-blocking I/O"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "read() returns immediately with EAGAIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU can do other work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must poll or use event-driven"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "I/O multiplexing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "select()/poll()/epoll() - wait on multiple fds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single thread manages many I/Os"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System call overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Signal-driven I/O"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGIO when device is ready"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asynchronous notification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signal handling complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Asynchronous I/O"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "aio_read()/io_uring - callback on completion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex API"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "blocking-io-pseudocode",
      children: "Blocking I/O Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE blocking_read(fd, buffer, count):\n    result = SYSCALL_read(fd, buffer, count)\n    // Process moved to WAITING state\n    // Scheduler runs another process\n    // When I/O completes, process moves to READY\n    RETURN result\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "non-blocking-io-example",
      children: "Non-Blocking I/O Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <fcntl.h>\n#include <unistd.h>\n#include <errno.h>\n\nint main() {\n    int fd = open(\"/dev/tty\", O_RDONLY | O_NONBLOCK);\n    if (fd < 0) { perror(\"open\"); return 1; }\n\n    char buffer[256];\n    ssize_t n;\n\n    while (1) {\n        n = read(fd, buffer, sizeof(buffer) - 1);\n        if (n > 0) {\n            buffer[n] = '\\0';\n            printf(\"Got: %s\", buffer); break;\n        } else if (n == 0) { printf(\"EOF\\n\"); break; }\n        else if (errno == EAGAIN) {\n            printf(\"No input yet - doing other work...\\n\");\n            sleep(1);\n        } else { perror(\"read\"); break; }\n    }\n    close(fd);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "io-multiplexing-with-epoll",
      children: "I/O Multiplexing with epoll"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <sys/epoll.h>\n#include <fcntl.h>\n#include <unistd.h>\n\n#define MAX_EVENTS 10\n\nint main() {\n    int epoll_fd = epoll_create1(0);\n    if (epoll_fd < 0) { perror(\"epoll_create\"); return 1; }\n\n    struct epoll_event event;\n    event.events = EPOLLIN;\n    event.data.fd = STDIN_FILENO;\n    epoll_ctl(epoll_fd, EPOLL_CTL_ADD, STDIN_FILENO, &event);\n\n    struct epoll_event events[MAX_EVENTS];\n    printf(\"Waiting for input (5 second timeout)...\\n\");\n\n    int nfds = epoll_wait(epoll_fd, events, MAX_EVENTS, 5000);\n    if (nfds < 0) { perror(\"epoll_wait\"); return 1; }\n    else if (nfds == 0) printf(\"Timeout - no input received\\n\");\n    else printf(\"Input available on fd %d!\\n\", events[0].data.fd);\n\n    close(epoll_fd);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18-examples",
      children: "18. Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "example-1-character-device---reading-keyboard-input",
      children: "Example 1: Character Device - Reading Keyboard Input"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <termios.h>\n#include <unistd.h>\n\nint main() {\n    struct termios old, new;\n    tcgetattr(STDIN_FILENO, &old);\n    new = old;\n    new.c_lflag &= ~(ICANON | ECHO);\n    tcsetattr(STDIN_FILENO, TCSANOW, &new);\n\n    printf(\"Type characters (press 'q' to quit):\\n\");\n    char c;\n    while (read(STDIN_FILENO, &c, 1) == 1) {\n        if (c == 'q') break;\n        printf(\"You pressed: '%c' (0x%02x)\\n\", c, c);\n    }\n    tcsetattr(STDIN_FILENO, TCSANOW, &old);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "example-2-measuring-io-performance",
      children: "Example 2: Measuring I/O Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n#include <fcntl.h>\n#include <unistd.h>\n#include <sys/time.h>\n\ndouble get_time() {\n    struct timeval tv;\n    gettimeofday(&tv, NULL);\n    return tv.tv_sec + tv.tv_usec / 1000000.0;\n}\n\nint main() {\n    int fd = open(\"test.dat\", O_CREAT | O_WRONLY | O_TRUNC | O_SYNC, 0644);\n    if (fd < 0) { perror(\"open\"); return 1; }\n\n    int block_size = 4096;\n    int num_blocks = 256;\n    char *buffer = malloc(block_size);\n\n    double start = get_time();\n    for (int i = 0; i < num_blocks; i++)\n        write(fd, buffer, block_size);\n    double elapsed = get_time() - start;\n    double throughput = (num_blocks * block_size) / (1024.0 * 1024.0) / elapsed;\n\n    printf(\"Wrote %d blocks of %d bytes (O_SYNC)\\n\", num_blocks, block_size);\n    printf(\"Time: %.3f seconds\\n\", elapsed);\n    printf(\"Throughput: %.2f MB/s\\n\", throughput);\n\n    free(buffer);\n    close(fd);\n    unlink(\"test.dat\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[TIP]\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DMA"
        }), " is essential for high-throughput I/O. Without it, the CPU must copy every byte from device to memory."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "io_uring"
        }), " (Linux 5.1+) for modern high-performance async I/O - it eliminates most syscall overhead by using shared submission/completion queues."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[WARNING]\nInterrupt-driven I/O is fine for character devices but too much overhead for block devices. For bulk transfers, DMA is essential. Each interrupt requires a full context switch."
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Always handle ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "spurious interrupts"
        }), " - a device may assert IRQ without actually requiring service. Check the status register before assuming data is available."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[NOTE]\nThe ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "device driver"
        }), " layer provides a uniform interface so the same system calls (read(), write(), ioctl()) work across different hardware."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Linux unifies the buffer cache and page cache into a single ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "page cache"
        }), " since kernel 2.4. This avoids double-caching and simplifies memory management."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19-concept-comparisons",
      children: "19. Concept Comparisons"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "io-methods",
      children: "I/O Methods"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Programmed I/O"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Interrupt-Driven"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DMA"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU Role"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polls device until ready"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Starts I/O, gets interrupt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initiates, DMA does rest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU each byte"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU each byte"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device <-> Memory directly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Per-byte Overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high (busy-waits)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (ISR per byte)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero during transfer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Per-transfer Overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) (setup + one IRQ)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process runs between IRQs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU + DMA concurrent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple/slow devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Character devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Energy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "buffering-strategies",
      children: "Buffering Strategies"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Single Buffer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Double Buffer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Circular Buffer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 units"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N units (fixed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Producer/consumer parallel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decoupled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wasted space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2x memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 slot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swap (no wait)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overwrite or block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple sync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audio/video streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network ring, DMA"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "block-vs-character",
      children: "Block vs Character"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Character"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Block"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random (block address)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Min transfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 byte"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 block (512B-4KB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (page cache)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DMA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/dev/tty0, /dev/random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/dev/sda, /dev/nvme0n1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "DMA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct Memory Access - hardware for device-to-memory transfers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Device Driver"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel module providing standard interface to specific hardware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Buffering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary storage for speed mismatches between devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spooling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managing shared exclusive-access devices (e.g., printer queue)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory-Mapped I/O"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device registers mapped into CPU address space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interrupt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware signal causing CPU to save state and run handler"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PIO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Programmed I/O - CPU handles every byte transfer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ISR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupt Service Routine - kernel code that handles an interrupt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IOMMU"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I/O Memory Management Unit - translates device DMA addresses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "VFS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual File System - uniform file interface across filesystems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MMIO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory-Mapped I/O - device accessible via load/store"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Polling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU repeatedly checks device status register"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IRQ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupt ReQuest - hardware line device uses to signal CPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bottom Half"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deferred interrupt processing (softirq, tasklet, workqueue)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zero-Copy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data transfer without intermediate CPU copies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "io_uring"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux async I/O with shared submission/completion queues"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "I/O Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA (NVMe, AHCI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA (ring buffers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA (framebuffer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA (UHCI/EHCI)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Driver Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block driver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network driver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRM/KMS driver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USB core + class"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buffering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Socket buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Back buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OHCI/EHCI frame lists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I/O Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epoll/io_uring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "async I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polling + interrupts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupt-driven"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page cache (zRAM)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which I/O method needs least CPU for large transfers?\na) Programmed I/O  b) Interrupt-driven I/O  c) DMA  d) Memory-mapped I/O"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Main purpose of a device driver?\na) Uniform kernel interface  b) Speed up hardware  c) Manage memory  d) Schedule processes"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Buffering is used to:\na) Increase disk space  b) Handle speed mismatches  c) Reduce power  d) Encrypt data"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which buffer type is best for audio streaming?\na) Single buffer  b) Double buffer  c) Circular buffer  d) No buffer"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What does VFS stand for?\na) Virtual File System  b) Very Fast Storage  c) Variable Frequency System  d) Virtual Function Stack"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In Linux, what unifies the buffer cache and page cache?\na) dentry cache  b) inode cache  c) page cache  d) slab allocator"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which I/O model uses epoll()?\na) Blocking I/O  b) Non-blocking I/O  c) I/O multiplexing  d) Asynchronous I/O"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the primary disadvantage of polling?\na) Complex implementation  b) Wastes CPU cycles  c) Requires special hardware  d) Cannot be interrupted"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What type of device is /dev/tty0?\na) Block device  b) Character device  c) Network device  d) Pseudo-device"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which feature prevents DMA from accessing unauthorized memory?\na) Page cache  b) IOMMU  c) VFS  d) Device mapper"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the sequence of events in an interrupt-driven I/O operation?\na) Device signals IRQ → CPU saves context → ISR runs → CPU restores context\nb) CPU polls device → reads data → clears flag\nc) DMA controller transfers → CPU saves context → IRQ fires\nd) CPU writes command → device writes to memory → CPU reads"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a double-buffering scheme, what is the primary advantage over single buffering?\na) Less memory usage\nb) Producer and consumer can work concurrently on different buffers\nc) Simpler implementation\nd) No need for synchronization"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the main purpose of the IOMMU?\na) Accelerate file system operations\nb) Translate device DMA addresses to physical memory addresses\nc) Manage interrupt routing between devices\nd) Provide virtual memory for GPU"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is NOT a benefit of using spooling?\na) Allows multiple processes to share a device without conflict\nb) Decouples the producer from the device speed\nc) Reduces the total amount of I/O performed\nd) Enables scheduling and prioritization of I/O jobs"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the Linux I/O stack, what is the correct order from top to bottom?\na) Device driver → Block layer → Page cache → VFS → Application\nb) Application → VFS → Page cache → Block layer → Device driver → Device\nc) Application → Page cache → VFS → Device driver → Device\nd) Application → Block layer → VFS → Page cache → Device driver"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-c, 2-a, 3-b, 4-c, 5-a, 6-c, 7-c, 8-b, 9-b, 10-b, 11-a, 12-b, 13-b, 14-c, 15-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-io-simulator--dma-vs-interrupt-vs-polling",
      children: "TypeScript I/O Simulator — DMA vs Interrupt vs Polling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * IOSimulator: Compares three I/O methods — Polling, Interrupt-Driven, and DMA —\n * in terms of CPU utilization, transfer time, and concurrency.\n */\ninterface IoConfig {\n  method: 'polling' | 'interrupt' | 'dma';\n  dataSizeBytes: number;\n  transferRateBps: number;  // device throughput (bytes/sec)\n  cpuSpeed: number;         // instructions per second\n  cpuInstPerCheck: number;  // instructions per polling check\n  interruptOverhead: number; // microseconds for ISR save/restore\n  dmaSetupOverhead: number;  // microseconds to program DMA controller\n}\n\ninterface IoResult {\n  method: string;\n  transferTimeMs: number;\n  cpuBusyTimeMs: number;\n  cpuUtilization: number;   // %\n  totalTimeMs: number;\n  concurrencyPossible: boolean;\n}\n\nclass IOAnalyzer {\n  analyze(config: IoConfig): IoResult {\n    const transferTimeSec = config.dataSizeBytes / config.transferRateBps;\n    const transferTimeMs = transferTimeSec * 1000;\n\n    let cpuBusyTimeMs: number;\n    let concurrencyPossible: boolean;\n\n    switch (config.method) {\n      case 'polling': {\n        // CPU busy-waits checking device status register\n        const checksPerSec = config.cpuSpeed / config.cpuInstPerCheck;\n        const totalChecks = transferTimeSec * checksPerSec;\n        const overheadPerCheckUs = (config.cpuInstPerCheck / config.cpuSpeed) * 1_000_000;\n        cpuBusyTimeMs = (totalChecks * overheadPerCheckUs) / 1000;\n        concurrencyPossible = false;\n        break;\n      }\n      case 'interrupt': {\n        // CPU initiates I/O, gets interrupt per block (assume 4KB blocks)\n        const numBlocks = Math.ceil(config.dataSizeBytes / 4096);\n        const isrTimeMs = (numBlocks * config.interruptOverhead) / 1000;\n        // During I/O, CPU can run other processes between interrupts\n        cpuBusyTimeMs = config.dmaSetupOverhead / 1000 + isrTimeMs;\n        concurrencyPossible = true;\n        break;\n      }\n      case 'dma': {\n        // Setup DMA, device transfers directly to memory\n        cpuBusyTimeMs = config.dmaSetupOverhead / 1000 + 0.005; // tiny completion IRQ\n        concurrencyPossible = true;\n        break;\n      }\n    }\n\n    const totalTimeMs = transferTimeMs + cpuBusyTimeMs;\n    const cpuUtilization = (cpuBusyTimeMs / totalTimeMs) * 100;\n\n    return {\n      method: config.method,\n      transferTimeMs: Math.round(transferTimeMs * 100) / 100,\n      cpuBusyTimeMs: Math.round(cpuBusyTimeMs * 100) / 100,\n      cpuUtilization: Math.round(cpuUtilization * 100) / 100,\n      totalTimeMs: Math.round(totalTimeMs * 100) / 100,\n      concurrencyPossible\n    };\n  }\n\n  compare(configs: IoConfig[]): void {\n    console.log('='.repeat(100));\n    console.log('I/O Method Comparison (1 MB transfer)');\n    console.log('='.repeat(100));\n    console.log(\n      'Method       | Transfer(ms) | CPU Busy(ms) | CPU Util(%) | Total(ms) | Concurrent?'\n    );\n    console.log('-'.repeat(100));\n\n    for (const cfg of configs) {\n      const r = this.analyze(cfg);\n      console.log(\n        `${r.method.padEnd(12)} | ${String(r.transferTimeMs).padStart(11)} | ` +\n        `${String(r.cpuBusyTimeMs).padStart(11)} | ${String(r.cpuUtilization).padStart(10)} | ` +\n        `${String(r.totalTimeMs).padStart(9)} | ${r.concurrencyPossible ? 'Yes' : 'No '}`\n      );\n    }\n  }\n}\n\n// Simulate reading 1 MB from a 500 MB/s NVMe device on a 3 GHz CPU\nconst analyzer = new IOAnalyzer();\nconst scenarios: IoConfig[] = [\n  {\n    method: 'polling',\n    dataSizeBytes: 1_048_576,\n    transferRateBps: 500_000_000,\n    cpuSpeed: 3_000_000_000,\n    cpuInstPerCheck: 10,\n    interruptOverhead: 2,\n    dmaSetupOverhead: 5,\n  },\n  {\n    method: 'interrupt',\n    dataSizeBytes: 1_048_576,\n    transferRateBps: 500_000_000,\n    cpuSpeed: 3_000_000_000,\n    cpuInstPerCheck: 10,\n    interruptOverhead: 2,\n    dmaSetupOverhead: 5,\n  },\n  {\n    method: 'dma',\n    dataSizeBytes: 1_048_576,\n    transferRateBps: 500_000_000,\n    cpuSpeed: 3_000_000_000,\n    cpuInstPerCheck: 10,\n    interruptOverhead: 2,\n    dmaSetupOverhead: 5,\n  },\n];\n\nanalyzer.compare(scenarios);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "I/O devices communicate via ports, memory-mapped registers, or a hybrid approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Polling wastes CPU; interrupts allow overlap of I/O and computation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DMA transfers data directly between device and memory without CPU involvement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The kernel I/O subsystem provides scheduling, buffering, caching, spooling, and error handling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Device drivers act as translators between the kernel and hardware"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Five I/O models: blocking, non-blocking, multiplexing, signal-driven, asynchronous"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "epoll (Linux) enables efficient I/O multiplexing for thousands of connections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The page cache unifies file caching with virtual memory management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Buffering strategies: single, double, circular - each with different concurrency trade-offs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spooling serializes access to shared exclusive devices (printers, tape drives)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linux I/O stack: VFS -> page cache -> block layer -> device drivers -> DMA -> device"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview topics: DMA vs PIO, interrupt handler design, mmap vs read, zero-copy, io_uring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is DMA and why is it important for block I/O? Walk through a DMA transfer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between buffering and caching? Give an example of each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between blocking and non-blocking I/O. When would you use each?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a character device and a block device? Give three examples of each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does spooling differ from buffering? Why do printers need spooling?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a program that measures the overhead of system calls. Call getpid() in a loop 1M times."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a simple I/O scheduler using FCFS and deadline-aware approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain spooling. Implement a simple print spooler using a directory for spool files."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a circular buffer with one producer and one consumer without locks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare single vs double buffering for a simulated audio player."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Benchmark read()/write() vs mmap(). Create 512 MB file, sum integers, compare."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement an epoll-based TCP echo server handling 1000+ connections."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a Linux kernel module creating a character device with circular buffer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement zero-copy file transfer using splice() or sendfile()."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a DMA controller simulator in C++ with scatter-gather descriptor lists."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "I/O method latency analyzer"
          }), ": Extend the TypeScript IOSimulator to include: memory-mapped I/O (MMIO) with bus transaction overhead, port-mapped I/O with IN/OUT instruction overhead, and hybrid approaches. Compare all five methods across small (64B), medium (64KB), and large (64MB) transfers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Zero-copy vs buffered I/O benchmark"
          }), ": Write a benchmark comparing ", (0,jsx_runtime.jsx)(_components.code, {
            children: "read()"
          }), "/", (0,jsx_runtime.jsx)(_components.code, {
            children: "write()"
          }), " (buffered I/O) vs ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sendfile()"
          }), " (zero-copy) for transferring a 1 GB file over a TCP socket. Measure: CPU utilization, throughput, latency percentiles (p50, p95, p99), and context switches per second."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interrupt coalescing simulator"
          }), ": Implement a model of interrupt coalescing where the device waits for a batch of events before raising an IRQ. Compare latency (increased due to batching) vs CPU utilization (decreased due to fewer IRQs). Find the optimal coalescing threshold for a 10 GbE NIC producing 1M packets/sec."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Block device scheduler comparison"
          }), ": Implement three I/O schedulers in TypeScript — NOOP (FIFO), Deadline (per-request deadlines), and CFQ (per-process fairness). Generate a mixed workload of 80% reads (latency-sensitive) and 20% writes (throughput-oriented). Measure avg read latency, write throughput, and fairness index."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "io_uring async I/O simulator"
          }), ": Design and implement a simplified io_uring model in TypeScript. Features: submission queue (SQ) and completion queue (CQ) as shared ring buffers, batched submission with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "io_uring_enter()"
          }), ", support for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "readv"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "writev"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fsync"
          }), " operations, and polled I/O mode (SQPOLL). Compare throughput vs traditional synchronous I/O for random 4KB reads."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Spooling system with priorities"
          }), ": Implement a print spooler that supports priority levels (1=urgent, 5=normal, 10=low). Jobs are queued by priority, then FIFO within priority. Support ", (0,jsx_runtime.jsx)(_components.code, {
            children: "submitJob(name, priority, data)"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "listQueue()"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "cancelJob(id)"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "processNext()"
          }), ". Measure average wait time by priority level."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Circular buffer with overflow handling"
          }), ": Implement three variants of a circular buffer in TypeScript: overwrite-oldest (for real-time data), block-when-full (for reliable data transfer), and discard-newest (for sensor data where fresh data is less important). Benchmark throughput and data loss percentage for each variant under a bursty producer."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interrupt handler latency profiler"
          }), ": Write a program that measures interrupt handling latency on a real Linux system. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "perf"
          }), " or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ftrace"
          }), " to measure: time from IRQ assertion to ISR entry, ISR execution time (top half), bottom half scheduling delay, and bottom half execution time (tasklet/workqueue). Report average, min, max, and distribution."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "MMIO vs Port I/O benchmark"
          }), ": On an x86 system, write a kernel module that benchmarks: MMIO reads/writes (via ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ioread32"
          }), "/", (0,jsx_runtime.jsx)(_components.code, {
            children: "iowrite32"
          }), ") and port I/O (via ", (0,jsx_runtime.jsx)(_components.code, {
            children: "inl"
          }), "/", (0,jsx_runtime.jsx)(_components.code, {
            children: "outl"
          }), "). Measure latency per access and throughput. Explain differences in terms of bus transaction types."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Energy-aware I/O scheduling"
          }), ": Design and implement an I/O scheduler that minimizes energy consumption by: backing idle periods to allow device power state transitions, prioritizing small requests to complete quickly, and batching large transfer requests for efficiency. Model energy vs latency trade-offs for a simulated SSD with 4 power states (active, idle, standby, sleep)."]
        }), "\n"]
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