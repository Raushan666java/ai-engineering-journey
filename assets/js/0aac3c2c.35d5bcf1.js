"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[41129],{

/***/ 78633
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_operating_systems_08_memory_management_md_0aa_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-operating-systems-08-memory-management-md-0aa.json
const site_docs_courses_operating_systems_08_memory_management_md_0aa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/operating-systems/08-memory-management","title":"Chapter 8: Memory Management","description":"---","source":"@site/docs/courses/operating-systems/08-memory-management.md","sourceDirName":"courses/operating-systems","slug":"/operating-systems/08-memory-management","permalink":"/ai-engineering-journey/operating-systems/08-memory-management","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"08-memory-management","slug":"/operating-systems/08-memory-management","title":"Chapter 8: Memory Management","sidebar_label":"Chapter 8: Memory Management","sidebar_position":8},"sidebar":"coursesSidebar","previous":{"title":"Chapter 7: Deadlocks","permalink":"/ai-engineering-journey/operating-systems/07-deadlocks"},"next":{"title":"Chapter 9: Virtual Memory","permalink":"/ai-engineering-journey/operating-systems/09-virtual-memory"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/operating-systems/08-memory-management.md


const frontMatter = {
	id: '08-memory-management',
	slug: '/operating-systems/08-memory-management',
	title: 'Chapter 8: Memory Management',
	sidebar_label: 'Chapter 8: Memory Management',
	sidebar_position: 8
};
const contentTitle = 'Chapter 8: Memory Management';

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
  "value": "Address Binding",
  "id": "address-binding",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 4
}, {
  "value": "The Three Binding Stages",
  "id": "the-three-binding-stages",
  "level": 4
}, {
  "value": "Step-by-Step Process of Execution-Time Binding",
  "id": "step-by-step-process-of-execution-time-binding",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation",
  "level": 4
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table",
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
  "value": "Logical vs Physical Address",
  "id": "logical-vs-physical-address",
  "level": 3
}, {
  "value": "Hardware View",
  "id": "hardware-view",
  "level": 4
}, {
  "value": "Detailed Comparison",
  "id": "detailed-comparison",
  "level": 4
}, {
  "value": "Real-World Analogy: Hotel Room Keys",
  "id": "real-world-analogy-hotel-room-keys",
  "level": 4
}, {
  "value": "Address Space Sizes",
  "id": "address-space-sizes",
  "level": 4
}, {
  "value": "Translation illustrated for a 32-bit system",
  "id": "translation-illustrated-for-a-32-bit-system",
  "level": 4
}, {
  "value": "MMU — Memory Management Unit",
  "id": "mmu--memory-management-unit",
  "level": 3
}, {
  "value": "MMU Architecture",
  "id": "mmu-architecture",
  "level": 4
}, {
  "value": "MMU Components",
  "id": "mmu-components",
  "level": 4
}, {
  "value": "Real-World Analogy: Embassy Translation Office",
  "id": "real-world-analogy-embassy-translation-office",
  "level": 4
}, {
  "value": "MMU Responsibilities",
  "id": "mmu-responsibilities",
  "level": 4
}, {
  "value": "Pseudocode for TLB-aware MMU Translation",
  "id": "pseudocode-for-tlb-aware-mmu-translation",
  "level": 4
}, {
  "value": "Contiguous Allocation",
  "id": "contiguous-allocation",
  "level": 3
}, {
  "value": "Fixed Partitioning",
  "id": "fixed-partitioning",
  "level": 4
}, {
  "value": "Dynamic Partitioning (Variable Partition)",
  "id": "dynamic-partitioning-variable-partition",
  "level": 4
}, {
  "value": "Multiple Partition Allocation",
  "id": "multiple-partition-allocation",
  "level": 4
}, {
  "value": "Real-World Analogy: Airport Parking Lot",
  "id": "real-world-analogy-airport-parking-lot",
  "level": 4
}, {
  "value": "Step-by-Step: Process Loading in Dynamic Partitioning",
  "id": "step-by-step-process-loading-in-dynamic-partitioning",
  "level": 4
}, {
  "value": "Dynamic Storage Allocation",
  "id": "dynamic-storage-allocation",
  "level": 3
}, {
  "value": "1. First-Fit",
  "id": "1-first-fit",
  "level": 4
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 5
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-1",
  "level": 5
}, {
  "value": "Python Implementation",
  "id": "python-implementation-1",
  "level": 5
}, {
  "value": "2. Best-Fit",
  "id": "2-best-fit",
  "level": 4
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 5
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 5
}, {
  "value": "C++ Implementation (Best-Fit as extension)",
  "id": "c-implementation-best-fit-as-extension",
  "level": 5
}, {
  "value": "Python Implementation (Best-Fit)",
  "id": "python-implementation-best-fit",
  "level": 5
}, {
  "value": "3. Worst-Fit",
  "id": "3-worst-fit",
  "level": 4
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 5
}, {
  "value": "C++ Implementation (Worst-Fit)",
  "id": "c-implementation-worst-fit",
  "level": 5
}, {
  "value": "4. Next-Fit",
  "id": "4-next-fit",
  "level": 4
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 5
}, {
  "value": "C++ Implementation (Next-Fit)",
  "id": "c-implementation-next-fit",
  "level": 5
}, {
  "value": "Full Dry Run: Same Allocation Sequence Across All Four Algorithms",
  "id": "full-dry-run-same-allocation-sequence-across-all-four-algorithms",
  "level": 4
}, {
  "value": "First-Fit Trace",
  "id": "first-fit-trace",
  "level": 5
}, {
  "value": "Best-Fit Trace",
  "id": "best-fit-trace",
  "level": 5
}, {
  "value": "Worst-Fit Trace",
  "id": "worst-fit-trace",
  "level": 5
}, {
  "value": "Next-Fit Trace",
  "id": "next-fit-trace",
  "level": 5
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages Table",
  "id": "advantages--disadvantages-table",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 4
}, {
  "value": "Fragmentation",
  "id": "fragmentation",
  "level": 3
}, {
  "value": "External Fragmentation",
  "id": "external-fragmentation",
  "level": 4
}, {
  "value": "Internal Fragmentation",
  "id": "internal-fragmentation",
  "level": 4
}, {
  "value": "Measuring Fragmentation",
  "id": "measuring-fragmentation",
  "level": 4
}, {
  "value": "Compaction",
  "id": "compaction",
  "level": 4
}, {
  "value": "Real-World Analogy: Hard Drive Files",
  "id": "real-world-analogy-hard-drive-files",
  "level": 4
}, {
  "value": "Paging",
  "id": "paging",
  "level": 3
}, {
  "value": "Core Concepts",
  "id": "core-concepts",
  "level": 4
}, {
  "value": "Step-by-Step: How Address Translation Works in Paging",
  "id": "step-by-step-how-address-translation-works-in-paging",
  "level": 4
}, {
  "value": "Full Dry Run: Logical Address → Physical Address",
  "id": "full-dry-run-logical-address--physical-address",
  "level": 4
}, {
  "value": "Page Table Entry (PTE) Structure",
  "id": "page-table-entry-pte-structure",
  "level": 4
}, {
  "value": "Page Table Structures",
  "id": "page-table-structures",
  "level": 4
}, {
  "value": "1. Single-Level Page Table",
  "id": "1-single-level-page-table",
  "level": 5
}, {
  "value": "2. Hierarchical (Multi-Level) Page Table",
  "id": "2-hierarchical-multi-level-page-table",
  "level": 5
}, {
  "value": "Full Four-Level Page Walk Dry Run",
  "id": "full-four-level-page-walk-dry-run",
  "level": 5
}, {
  "value": "3. Hashed Page Table",
  "id": "3-hashed-page-table",
  "level": 5
}, {
  "value": "4. Inverted Page Table",
  "id": "4-inverted-page-table",
  "level": 5
}, {
  "value": "Real-World Analogy: Library Books",
  "id": "real-world-analogy-library-books",
  "level": 4
}, {
  "value": "C++ Implementation: Simulated Paging System",
  "id": "c-implementation-simulated-paging-system",
  "level": 4
}, {
  "value": "Python Implementation: TLB Simulation with LRU",
  "id": "python-implementation-tlb-simulation-with-lru",
  "level": 4
}, {
  "value": "Effective Access Time (EAT) Formula",
  "id": "effective-access-time-eat-formula",
  "level": 4
}, {
  "value": "Worked Example",
  "id": "worked-example",
  "level": 5
}, {
  "value": "Impact of TLB Hit Rate",
  "id": "impact-of-tlb-hit-rate",
  "level": 5
}, {
  "value": "Hierarchical Page Table Implementation",
  "id": "hierarchical-page-table-implementation",
  "level": 4
}, {
  "value": "Complexity Analysis of Paging",
  "id": "complexity-analysis-of-paging",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-1",
  "level": 4
}, {
  "value": "Edge Cases in Paging",
  "id": "edge-cases-in-paging",
  "level": 4
}, {
  "value": "Segmentation",
  "id": "segmentation",
  "level": 3
}, {
  "value": "Segment Table",
  "id": "segment-table",
  "level": 4
}, {
  "value": "Full Segment Translation Dry Run",
  "id": "full-segment-translation-dry-run",
  "level": 4
}, {
  "value": "Real-World Analogy: Office Building",
  "id": "real-world-analogy-office-building",
  "level": 4
}, {
  "value": "Segmentation Advantages &amp; Disadvantages",
  "id": "segmentation-advantages--disadvantages",
  "level": 4
}, {
  "value": "C++: Segment Translation Simulator",
  "id": "c-segment-translation-simulator",
  "level": 4
}, {
  "value": "Segmentation with Paging (x86 Architecture)",
  "id": "segmentation-with-paging-x86-architecture",
  "level": 3
}, {
  "value": "x86 Protected Mode Translation",
  "id": "x86-protected-mode-translation",
  "level": 4
}, {
  "value": "Flat Memory Model in Linux",
  "id": "flat-memory-model-in-linux",
  "level": 4
}, {
  "value": "x86-64: Segmentation in 64-bit Mode",
  "id": "x86-64-segmentation-in-64-bit-mode",
  "level": 4
}, {
  "value": "Real-World Analogy: Shipping Warehouse",
  "id": "real-world-analogy-shipping-warehouse",
  "level": 4
}, {
  "value": "Swapping",
  "id": "swapping",
  "level": 3
}, {
  "value": "Standard Swapping",
  "id": "standard-swapping",
  "level": 4
}, {
  "value": "Swapping with Paging (Demand Paging)",
  "id": "swapping-with-paging-demand-paging",
  "level": 4
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Fragmentation Types",
  "id": "fragmentation-types",
  "level": 3
}, {
  "value": "TLB Reach",
  "id": "tlb-reach",
  "level": 3
}, {
  "value": "Page Size Trade-Offs",
  "id": "page-size-trade-offs",
  "level": 3
}, {
  "value": "TLB and Context Switch",
  "id": "tlb-and-context-switch",
  "level": 3
}, {
  "value": "Thrashing",
  "id": "thrashing",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "x86-64 Page Tables (Intel/AMD)",
  "id": "x86-64-page-tables-intelamd",
  "level": 3
}, {
  "value": "ARMv8-A Page Tables",
  "id": "armv8-a-page-tables",
  "level": 3
}, {
  "value": "Linux Buddy Allocator",
  "id": "linux-buddy-allocator",
  "level": 3
}, {
  "value": "Windows Memory Manager",
  "id": "windows-memory-manager",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Address Translation with Paging (Full Walk)",
  "id": "example-1-address-translation-with-paging-full-walk",
  "level": 3
}, {
  "value": "Example 2: Memory Allocation Simulation (Complete)",
  "id": "example-2-memory-allocation-simulation-complete",
  "level": 3
}, {
  "value": "Example 3: Page Table Size Calculation",
  "id": "example-3-page-table-size-calculation",
  "level": 3
}, {
  "value": "TypeScript Memory Management Simulator",
  "id": "typescript-memory-management-simulator",
  "level": 3
}, {
  "value": "Effective Access Time Calculation",
  "id": "effective-access-time-calculation",
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
}, {
  "value": "Answers to Quiz",
  "id": "answers-to-quiz",
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
        id: "chapter-8-memory-management",
        children: "Chapter 8: Memory Management"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["<< ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/operating-systems/07-deadlocks",
          children: "Deadlocks"
        })]
      }), " | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/operating-systems/09-virtual-memory",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next: Virtual Memory"
        })
      }), " >>"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the distinction between logical and physical addresses with real-world analogies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe address binding at compile, load, and execution time with detailed steps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement and trace contiguous memory allocation algorithms (first-fit, best-fit, worst-fit, next-fit)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design paged memory systems with hierarchical, hashed, and inverted page tables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute full page-table walk dry runs from logical to physical addresses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain segmentation, segment-table organization, and combined segmentation-with-paging"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze complexity trade-offs (time, space, fragmentation) for every memory management scheme"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Map concepts to real systems: x86-64, ARM, Linux buddy allocator, huge pages, TLB reach"
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
        href: "../../assets/images/lessons/operating-systems/08-memory-management/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/operating-systems/08-memory-management/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/operating-systems/08-memory-management/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/operating-systems/08-memory-management/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/operating-systems/08-memory-management/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/operating-systems/08-memory-management/visual-explanation.png",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Address Binding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time, load-time, execution-time binding; relocation at different stages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Logical vs Physical"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU generates logical addresses; MMU translates to physical at runtime using base/limit registers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Contiguous Allocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process loaded into contiguous memory partition; suffers external fragmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dynamic Storage Allocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First-fit (fast), Best-fit (minimizes waste), Worst-fit (avoids tiny holes), Next-fit (rotational)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Paging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-size pages/frames; eliminates external fragmentation; page table maps pages to frames"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Segmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable-sized logical segments; matches programmer view; suffers external fragmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Segmentation + Paging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combine segments + paging for efficient use; segments mapped to pages in x86 architecture"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.div, {
      className: "mermaid",
      children: "\nflowchart LR\n    A[Address Binding] --> B[Logical vs Physical Addresses]\n    B --> C[MMU & Relocation]\n    C --> D[Contiguous Allocation]\n    D --> E[Fixed Partitioning]\n    D --> F[Dynamic Partitioning]\n    E --> G[Fragmentation]\n    F --> G\n    G --> H[Paging]\n    G --> I[Segmentation]\n    H --> J[Page Tables: Single / Multi / Hashed / Inverted]\n    H --> K[TLB & Effective Access Time]\n    I --> L[Segmentation with Paging]\n    K --> M[Interview Corner & Real Systems]\n    L --> M\n    M --> N[Summary]\n"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/operating-systems/08-memory-management.png",
        alt: "Memory Allocation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "address-binding",
      children: "Address Binding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Address binding"
      }), " is the process of mapping program instructions and data to memory addresses. The stage at which this binding occurs determines flexibility, performance, and security characteristics of the resulting program."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Airline Seat Assignment"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compile-time binding"
          }), ": You buy a specific seat (14A) when booking — that seat is locked regardless of flight changes."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Load-time binding"
          }), ": The airline assigns your seat at the gate based on availability when you board."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Execution-time binding"
          }), ": The flight attendant reseats you mid-flight to balance the aircraft."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each later stage offers more flexibility but requires more infrastructure (hardware or software support)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-three-binding-stages",
      children: "The Three Binding Stages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Compile-time Binding"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If the memory location of a process is known ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "in advance"
      }), " at compile time, the compiler can generate ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "absolute code"
      }), ". The addresses in the compiled binary are hardcoded."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Programmer writes:    int x = 10;\nCompiler sees:        LOAD R1, [0x1000]   // x is hardcoded at address 0x1000\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Must recompile"
        }), " to relocate the program."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used by simple embedded systems and MS-DOS .COM files."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the starting address changes, every absolute reference breaks."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Load-time Binding"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The compiler generates ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "relocatable code"
      }), " (object files with relative addresses). The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "loader"
      }), " performs final address binding when loading the program into memory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Object file:          LOAD R1, [R2 + 0x100]    // relative offset\nLoader adds base:     Physical = Base + 0x100\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The process must be loaded into a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "contiguous block"
        }), " of memory."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The base address is added to every relative reference at load time."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the program is swapped out and later reloaded at a different address, it must be rebound (reloaded)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Execution-time Binding (Runtime Binding)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Binding is delayed until the process is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "running"
      }), ". Hardware (the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MMU"
      }), ") performs translation on every memory access."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Every instruction execution:\n  CPU produces logical address → MMU adds relocation register → physical address\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used by all modern general-purpose operating systems (Linux, Windows, macOS)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Requires ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "hardware support"
        }), " (MMU, TLB)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Enables ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "swapping"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "paging"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "virtual memory"
        }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "process isolation"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-process-of-execution-time-binding",
      children: "Step-by-Step Process of Execution-Time Binding"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: CPU fetches instruction\n        └── Instruction contains a LOGICAL address (e.g., 0x1000)\n\nStep 2: CPU sends logical address to MMU\n\nStep 3: MMU adds current relocation register value (e.g., 0x400000)\n        └── Physical = 0x1000 + 0x400000 = 0x401000\n\nStep 4: MMU sends physical address to memory bus\n\nStep 5: Memory controller reads physical address 0x401000\n\nStep 6: Data returned to CPU via MMU\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE translate_address(logical_addr, relocation_register):\n    physical_addr ← logical_addr + relocation_register\n    IF physical_addr < relocation_register + limit_register:\n        RETURN physical_addr    // Valid access\n    ELSE:\n        RAISE segmentation_fault    // Out of bounds\n    END IF\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstdint>\n#include <stdexcept>\n\nclass MMUSimulator {\nprivate:\n    uint32_t relocation_register;\n    uint32_t limit_register;\n\npublic:\n    MMUSimulator(uint32_t base, uint32_t limit)\n        : relocation_register(base), limit_register(limit) {}\n\n    uint32_t translate(uint32_t logical_address) {\n        uint32_t physical_address = logical_address + relocation_register;\n\n        if (physical_address >= relocation_register + limit_register) {\n            throw std::out_of_range(\n                \"Segmentation fault: address \" +\n                std::to_string(physical_address) + \" out of bounds [0, \" +\n                std::to_string(relocation_register + limit_register) + \")\"\n            );\n        }\n        std::cout << \"Logical: 0x\" << std::hex << logical_address\n                  << \" + Base: 0x\" << relocation_register\n                  << \" = Physical: 0x\" << physical_address << std::dec << \"\\n\";\n        return physical_address;\n    }\n\n    void set_base_limit(uint32_t base, uint32_t limit) {\n        relocation_register = base;\n        limit_register = limit;\n    }\n};\n\nint main() {\n    MMUSimulator mmu(0x400000, 0x100000); // Base = 4MB, Limit = 1MB\n\n    try {\n        mmu.translate(0x001000); // Valid → 0x401000\n        mmu.translate(0x00F000); // Valid → 0x40F000\n        mmu.translate(0x200000); // Invalid → exception (beyond limit)\n    } catch (const std::exception& e) {\n        std::cerr << \"Error: \" << e.what() << \"\\n\";\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MMUSimulator:\n    def __init__(self, base: int, limit: int):\n        self.relocation_register = base\n        self.limit_register = limit\n\n    def translate(self, logical_address: int) -> int:\n        physical_address = logical_address + self.relocation_register\n        upper_bound = self.relocation_register + self.limit_register\n\n        if physical_address >= upper_bound:\n            raise MemoryError(\n                f\"Segmentation fault: {hex(physical_address)} \"\n                f\"out of bounds [0x0, {hex(upper_bound)})\"\n            )\n\n        print(f\"Logical: {hex(logical_address)} + \"\n              f\"Base: {hex(self.relocation_register)} = \"\n              f\"Physical: {hex(physical_address)}\")\n        return physical_address\n\n    def set_base_limit(self, base: int, limit: int):\n        self.relocation_register = base\n        self.limit_register = limit\n\n\nif __name__ == \"__main__\":\n    mmu = MMUSimulator(0x400000, 0x100000)\n    try:\n        mmu.translate(0x001000)\n        mmu.translate(0x200000)\n    except MemoryError as e:\n        print(f\"Error: {e}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-table",
      children: "Dry Run Trace Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Logical Addr"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relocation Register"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Limit Register"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Physical Addr"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Valid?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU issues LOAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x001000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x400000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x100000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MMU adds base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x001000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x400000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x100000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x401000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounds check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x401000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x401000 < 0x500000 ✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return phys addr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x401000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU issues LOAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x200000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x400000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x100000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MMU adds base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x200000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x400000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x100000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x600000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounds check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x600000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x600000 >= 0x500000 ✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raise segfault"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exception"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (execution)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One addition + one comparison per memory access — constant, hardware-pipelined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two registers (base + limit) per process stored in PCB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Context switch cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reload MMU registers with new process base/limit"
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
            children: "Simple hardware — just adders and comparators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires contiguous memory allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast — single-cycle translation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suffers external fragmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in protection via limit register"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No paging — entire process must be in memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal context-switch cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot support virtual memory > physical RAM"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Logical address = 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Translated to base address — valid first byte of process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Address + base overflows uint32"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wraparound; must be checked by hardware (carry flag)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Limit register = 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every access fails immediately — process can't run"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-threaded access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each thread shares same base/limit — all threads mapped to same physical region"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "logical-vs-physical-address",
      children: "Logical vs Physical Address"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every memory address generated by the CPU is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "logical address"
      }), " (also called a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "virtual address"
      }), "). The actual memory hardware sees and responds to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "physical addresses"
      }), ". The MMU sits between them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "hardware-view",
      children: "Hardware View"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  CPU (logical addr)          MMU (translation)        Memory Bus (physical addr)\n┌─────────────────────┐   ┌──────────────────────┐   ┌─────────────────────────┐\n│ LOAD R1, [0x1000]   │──→│ Physical = Logical   │──→│ Address 0x401000        │\n│                     │   │         + Base        │   │ Contains value 0x42     │\n│ Logical = 0x1000    │   │ 0x1000 + 0x400000    │   │                         │\n│                     │   │         = 0x401000    │   │                         │\n└─────────────────────┘   └──────────────────────┘   └─────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "detailed-comparison",
      children: "Detailed Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Logical Address"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Physical Address"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Generated by"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU (by the instruction)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory unit (after MMU translation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Also called"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real address, absolute address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Visibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visible to programmer/compiler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not visible to the program"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical address space (per-process)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical address space (system-wide)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determined by CPU bits (32-bit → 4 GB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determined by RAM installed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Persistence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changes per process (each process has its own)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed for each physical memory location"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Binding time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime (every instruction)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At memory access time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "User program sees"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical addresses only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never sees physical addresses directly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Protection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-process isolation via MMU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared across all processes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Swapping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical space can exceed physical (demand paging)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounded by physical RAM size"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-hotel-room-keys",
      children: "Real-World Analogy: Hotel Room Keys"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Logical address"
          }), " = Your room key number (Room 205). Every guest thinks they have \"Room 205\" regardless of which floor they're on."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Physical address"
          }), " = The actual physical room (Building 2, Floor 4, Room 5). Two different hotels can both have \"Room 205\" — the logical-to-physical mapping is unique per hotel (per process)."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "MMU"
          }), " = The front desk clerk who tells you \"Room 205 is actually around the corner.\""]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "TLB"
          }), " = Your memory of which way to turn — you don't ask the front desk every time."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "address-space-sizes",
      children: "Address Space Sizes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Logical Address Bits"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Logical Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Physical Address Bits"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Physical RAM"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8-bit (6502)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64 KB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "32-bit (x86)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 (PAE: 36)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 GB (64 GB with PAE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "64-bit (x86-64)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48 (current)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 TB (up to 52 bits in future)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARMv8-A (64-bit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40-48"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 TB - 256 TB"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "translation-illustrated-for-a-32-bit-system",
      children: "Translation illustrated for a 32-bit system"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Logical Address (32 bits):\n┌──────────────────────────┬────────────────────┐\n│     Page Number (20)     │   Offset (12)      │\n│     0x00002              │     0xA5C          │\n└──────────────────────────┴────────────────────┘\n         │\n         ▼\n   Page Table (per-process)\n   ┌───────┬────────┐\n   │Page 0 │ Frame 8│\n   │Page 1 │ Frame 3│\n   │Page 2 │ Frame 12│\n   │...    │ ...    │\n   └───────┴────────┘\n         │ Page 2 → Frame 12 = 0xC\n         ▼\nPhysical Address (32 bits):\n┌──────────────────────────┬────────────────────┐\n│     Frame Number (20)    │   Offset (12)      │\n│     0x0000C              │     0xA5C          │\n└──────────────────────────┴────────────────────┘\n  = 0x0000C << 12 | 0xA5C = 0xCA5C\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mmu--memory-management-unit",
      children: "MMU — Memory Management Unit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MMU"
      }), " is a hardware component that performs runtime translation of logical addresses to physical addresses. It is a critical part of the CPU's memory subsystem."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mmu-architecture",
      children: "MMU Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                    ┌─────────────────────────────────────────────────┐\n                    │                  CPU Core                       │\n                    │  ┌──────────┐    ┌──────────┐                  │\n                    │  │  ALU     │    │  Control  │                  │\n                    │  └────┬─────┘    └─────┬────┘                  │\n                    │       │                │                        │\n                    │       ▼                ▼                        │\n                    │  ┌──────────────────────────────────┐           │\n                    │  │           MMU                     │           │\n                    │  │  ┌─────────┐  ┌───────────────┐  │           │\n                    │  │  │ Segment │  │   Page Unit    │  │           │\n                    │  │  │  Unit   │  │ ┌───────────┐ │  │           │\n                    │  │  │(optional)│  │ │ Page Table │ │  │           │\n                    │  │  └─────────┘  │ │   Walker   │ │  │           │\n                    │  │               │ └───────────┘ │  │           │\n                    │  │               │ ┌───────────┐ │  │           │\n                    │  │               │ │   TLB     │ │  │           │\n                    │  │               │ └───────────┘ │  │           │\n                    │  │               └───────────────┘  │           │\n                    │  └──────────────────────────────────┘           │\n                    │                    │                             │\n                    └────────────────────┼───────────────────────────┘\n                                         │ Physical Address\n                                         ▼\n                              ┌─────────────────────┐\n                              │   Memory Bus / RAM   │\n                              └─────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mmu-components",
      children: "MMU Components"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Segment Unit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Translates logical → linear address (x86 real/protected mode)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 cycle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Page Unit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Translates linear → physical address via page tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 cycle (TLB hit) to 100+ cycles (walk)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TLB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache for recent page table entries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5-1 cycle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Page Table Walker"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware state machine that walks multi-level page tables on TLB miss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-4 memory accesses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Protection Check Unit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validates access rights (R/W/X, supervisor/user)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In parallel with translation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-embassy-translation-office",
      children: "Real-World Analogy: Embassy Translation Office"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The MMU is like the translation office at an embassy. A citizen (CPU) writes a letter in their native language (logical address). The translation office converts it to the host country's language (physical address) and verifies the citizen is allowed in that area (protection check). The TLB is like a pocket phrasebook — for common phrases, no translation office visit needed."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mmu-responsibilities",
      children: "MMU Responsibilities"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Address Translation:"
        }), " Convert every logical address to a physical address in 0-1 cycles"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Protection Checking:"
        }), " Verify the access (read/write/execute) is permitted for the current privilege level"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache Control:"
        }), " Set cacheability attributes per page (uncacheable, write-through, write-back)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TLB Management:"
        }), " Handle TLB misses by walking page tables or trapping to OS"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory Attributes:"
        }), " Mark pages as non-executable (NX bit), non-cacheable (for MMIO), or read-only"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-for-tlb-aware-mmu-translation",
      children: "Pseudocode for TLB-aware MMU Translation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE mmu_translate(logical_addr, process_id):\n    page_number ← logical_addr >> PAGE_SHIFT\n    offset ← logical_addr & PAGE_MASK\n\n    // Step 1: Check TLB\n    tlb_entry ← tlb_lookup(process_id, page_number)\n    IF tlb_entry found:\n        frame_number ← tlb_entry.frame\n        HIT_STATISTICS.increment()\n        RETURN (frame_number << PAGE_SHIFT) | offset\n\n    // Step 2: TLB Miss — walk page table\n    MISS_STATISTICS.increment()\n    page_table_entry ← walk_page_table(page_number)\n\n    IF page_table_entry.valid == 0:\n        RAISE page_fault\n\n    // Step 3: Check permissions\n    IF not has_permission(page_table_entry, current_access_type):\n        RAISE protection_fault\n\n    // Step 4: Update TLB (may evict old entry)\n    tlb_insert(process_id, page_number, page_table_entry.frame)\n\n    RETURN (page_table_entry.frame << PAGE_SHIFT) | offset\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "contiguous-allocation",
      children: "Contiguous Allocation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "contiguous memory allocation"
      }), ", each process occupies a single contiguous block of physical memory. This was the dominant model in early operating systems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fixed-partitioning",
      children: "Fixed Partitioning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Memory is divided into ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "fixed-size partitions"
      }), " at boot time. Each partition can hold one process."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Memory Layout (Fixed Partitions):\n┌────────────────────┬──────────────────────┬──────────────────────┐\n│ Partition 0        │ Partition 1          │ Partition 2          │\n│ 0 MB — 256 MB     │ 256 MB — 512 MB     │ 512 MB — 768 MB     │\n│ Process A (200 MB) │ Process B (100 MB)  │ Free                 │\n├────────────────────┼──────────────────────┼──────────────────────┤\n│ Partition 3        │ Partition 4          │ Partition 5          │\n│ 768 MB — 896 MB   │ 896 MB — 960 MB     │ 960 MB — 1024 MB    │\n│ Free               │ Process C (30 MB)   │ Free                 │\n└────────────────────┴──────────────────────┴──────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " A process of 300 MB cannot run even though only 364 MB is used — the free memory is fragmented across small partitions (256 MB max in any single partition)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dynamic-partitioning-variable-partition",
      children: "Dynamic Partitioning (Variable Partition)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Partitions are created dynamically to match the exact size of each process."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Memory after some allocations:\n┌──────────┬──────────────┬──────────┬──────────────┬──────────┐\n│  OS      │  Process A   │  Free    │  Process B   │  Free    │\n│  (200MB) │  (150MB)     │  (100MB) │  (80MB)      │  (470MB) │\n└──────────┴──────────────┴──────────┴──────────────┴──────────┘\n0         200            350        450            530        1000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "multiple-partition-allocation",
      children: "Multiple Partition Allocation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiple Partition Method"
      }), ": A set of fixed/variable partitions is maintained. When a new process arrives, it is placed in the smallest available partition large enough (or a variable-sized hole)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-airport-parking-lot",
      children: "Real-World Analogy: Airport Parking Lot"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Contiguous allocation"
          }), " = You must park your car in a single continuous parking spot. If you have a long car (large process), you need a long uninterrupted space."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Fixed partitions"
          }), " = The lot has pre-marked spots of various sizes (compact, sedan, SUV). An SUV spot stays empty if no SUV arrives, even if several compact spots are free."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dynamic partitions"
          }), " = Valet parking arranges cars bumper-to-bumper in any available gap."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "External fragmentation"
          }), " = After cars leave, empty spaces are scattered across the lot — no single gap is big enough for the next bus."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compaction"
          }), " = The valet shifts all cars to one side to consolidate all empty space."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-process-loading-in-dynamic-partitioning",
      children: "Step-by-Step: Process Loading in Dynamic Partitioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initial Free List: [{start: 200, size: 800}]\n\nStep 1: Process P1 (size 120) arrives\n    Find hole ≥ 120 → hole at 200, size 800\n    Split: Allocate [200, 120], Remaining free [320, 680]\n    Free List: [{start: 320, size: 680}]\n\nStep 2: Process P2 (size 250) arrives\n    Find hole ≥ 250 → hole at 320, size 680\n    Split: Allocate [320, 250], Remaining free [570, 430]\n    Free List: [{start: 570, size: 430}]\n\nStep 3: Process P3 (size 100) arrives\n    Find hole ≥ 100 → hole at 570, size 430\n    Split: Allocate [570, 100], Remaining free [670, 330]\n    Free List: [{start: 670, size: 330}]\n\nStep 4: Process P1 terminates (returns 120 MB at 200)\n    Free List: [{start: 200, size: 120}, {start: 670, size: 330}]\n    Merge adjacent? No (200 + 120 = 320 ≠ 670)\n\nStep 5: Process P2 terminates (returns 250 MB at 320)\n    Free List: [{start: 200, size: 120}, {start: 320, size: 250}, {start: 670, size: 330}]\n    Merge: [200, 120] and [320, 250] are adjacent (200+120=320) → merge to [200, 370]\n    Free List: [{start: 200, size: 370}, {start: 670, size: 330}]\n\nStep 6: Process P4 (size 500) arrives\n    Largest free hole is 370 — not enough!\n    Out of memory (external fragmentation)\n    Solution: Compact or swap a process out\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dynamic-storage-allocation",
      children: "Dynamic Storage Allocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a process is loaded into memory, the OS must decide which free hole to allocate. Four classic algorithms exist."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-first-fit",
      children: "1. First-Fit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Allocate the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "first"
      }), " hole that is large enough."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parking lot"
        }), ": Drive in and take the first empty spot that fits your car. Don't check further spots — just park."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE first_fit(request_size):\n    FOR each hole in free_list:\n        IF hole.size ≥ request_size:\n            // Allocate from this hole\n            allocated ← {start: hole.start, size: request_size}\n            hole.start ← hole.start + request_size\n            hole.size ← hole.size - request_size\n            IF hole.size == 0:\n                REMOVE hole from free_list\n            END IF\n            RETURN allocated\n        END IF\n    END FOR\n    RETURN NULL  // Not enough memory\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "c-implementation-1",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <list>\n#include <algorithm>\n\nstruct Hole {\n    uint32_t start;\n    uint32_t size;\n};\n\nstruct AllocResult {\n    uint32_t start;\n    uint32_t size;\n    bool success;\n};\n\nclass MemoryAllocator {\nprivate:\n    std::list<Hole> free_list;\n    uint32_t total_memory;\n\n    void merge_adjacent() {\n        free_list.sort([](const Hole& a, const Hole& b) {\n            return a.start < b.start;\n        });\n        for (auto it = free_list.begin(); it != free_list.end(); ++it) {\n            auto next = std::next(it);\n            if (next != free_list.end() &&\n                it->start + it->size == next->start) {\n                it->size += next->size;\n                free_list.erase(next);\n                --it; // Recheck from this position\n            }\n        }\n    }\n\npublic:\n    MemoryAllocator(uint32_t total) : total_memory(total) {\n        free_list.push_back({0, total});\n    }\n\n    AllocResult allocate_first_fit(uint32_t size) {\n        for (auto it = free_list.begin(); it != free_list.end(); ++it) {\n            if (it->size >= size) {\n                uint32_t alloc_start = it->start;\n                it->start += size;\n                it->size -= size;\n                if (it->size == 0) {\n                    free_list.erase(it);\n                }\n                std::cout << \"First-fit: Allocated \" << size\n                          << \" at address \" << alloc_start << \"\\n\";\n                return {alloc_start, size, true};\n            }\n        }\n        std::cout << \"First-fit: Allocation failed for \" << size << \"\\n\";\n        return {0, 0, false};\n    }\n\n    void release(uint32_t start, uint32_t size) {\n        std::cout << \"Releasing \" << size << \" at \" << start << \"\\n\";\n        free_list.push_back({start, size});\n        merge_adjacent();\n    }\n\n    void print_free_list() {\n        std::cout << \"Free list: \";\n        for (const auto& h : free_list) {\n            std::cout << \"[\" << h.start << \", \" << h.start + h.size - 1\n                      << \" size=\" << h.size << \"] \";\n        }\n        std::cout << \"\\n\";\n    }\n};\n\nint main() {\n    MemoryAllocator alloc(1024);\n\n    alloc.allocate_first_fit(200);  // Alloc at 0\n    alloc.allocate_first_fit(150);  // Alloc at 200\n    alloc.print_free_list();        // Free: [350, 1023] size=674\n\n    alloc.release(0, 200);          // Free: [0,199] + [350,1023]\n    alloc.print_free_list();\n\n    alloc.allocate_first_fit(100);  // First-fit: takes [0,99]\n    alloc.print_free_list();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "python-implementation-1",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\nfrom typing import Optional\n\n\n@dataclass\nclass Hole:\n    start: int\n    size: int\n\n\nclass MemoryAllocator:\n    def __init__(self, total: int):\n        self.free_list = [Hole(0, total)]\n        self.total = total\n\n    def _merge_adjacent(self):\n        self.free_list.sort(key=lambda h: h.start)\n        i = 0\n        while i < len(self.free_list) - 1:\n            curr = self.free_list[i]\n            next_ = self.free_list[i + 1]\n            if curr.start + curr.size == next_.start:\n                curr.size += next_.size\n                self.free_list.pop(i + 1)\n            else:\n                i += 1\n\n    def allocate_first_fit(self, size: int) -> Optional[int]:\n        for i, hole in enumerate(self.free_list):\n            if hole.size >= size:\n                alloc_start = hole.start\n                hole.start += size\n                hole.size -= size\n                if hole.size == 0:\n                    self.free_list.pop(i)\n                print(f\"First-fit: Allocated {size} at {alloc_start}\")\n                return alloc_start\n        print(f\"First-fit: Failed for {size}\")\n        return None\n\n    def release(self, start: int, size: int):\n        print(f\"Releasing {size} at {start}\")\n        self.free_list.append(Hole(start, size))\n        self._merge_adjacent()\n\n    def print_free_list(self):\n        print(\"Free list:\", [(h.start, h.start + h.size - 1, h.size)\n                             for h in self.free_list])\n\n\nif __name__ == \"__main__\":\n    alloc = MemoryAllocator(1024)\n    alloc.allocate_first_fit(200)\n    alloc.allocate_first_fit(150)\n    alloc.release(0, 200)\n    alloc.print_free_list()\n    alloc.allocate_first_fit(100)\n    alloc.print_free_list()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2-best-fit",
      children: "2. Best-Fit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Allocate the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "smallest"
      }), " hole that is large enough. Minimizes wasted space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Packing suitcases"
        }), ": You measure every empty space in the trunk and choose the one where your suitcase fits most snugly — minimal wasted cubic inches."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCEDURE best_fit(request_size):\n    best_hole ← NULL\n    best_index ← -1\n\n    FOR each hole in free_list:\n        IF hole.size ≥ request_size:\n            IF best_hole is NULL OR hole.size < best_hole.size:\n                best_hole ← hole\n                best_index ← current_index\n            END IF\n        END IF\n    END FOR\n\n    IF best_hole is not NULL:\n        // Allocate from best_hole\n        allocated ← {start: best_hole.start, size: request_size}\n        best_hole.start ← best_hole.start + request_size\n        best_hole.size ← best_hole.size - request_size\n        IF best_hole.size == 0:\n            REMOVE best_hole from free_list\n        END IF\n        RETURN allocated\n    END IF\n    RETURN NULL\nEND PROCEDURE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "c-implementation-best-fit-as-extension",
      children: "C++ Implementation (Best-Fit as extension)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "AllocResult allocate_best_fit(uint32_t size) {\n    auto best_it = free_list.end();\n    uint32_t best_remainder = UINT32_MAX;\n\n    for (auto it = free_list.begin(); it != free_list.end(); ++it) {\n        if (it->size >= size) {\n            uint32_t remainder = it->size - size;\n            if (remainder < best_remainder) {\n                best_remainder = remainder;\n                best_it = it;\n            }\n        }\n    }\n\n    if (best_it != free_list.end()) {\n        uint32_t alloc_start = best_it->start;\n        best_it->start += size;\n        best_it->size -= size;\n        if (best_it->size == 0) {\n            free_list.erase(best_it);\n        }\n        std::cout << \"Best-fit: Allocated \" << size\n                  << \" at address \" << alloc_start << \"\\n\";\n        return {alloc_start, size, true};\n    }\n    std::cout << \"Best-fit: Allocation failed for \" << size << \"\\n\";\n    return {0, 0, false};\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "python-implementation-best-fit",
      children: "Python Implementation (Best-Fit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def allocate_best_fit(self, size: int) -> Optional[int]:\n    best_idx = -1\n    best_remainder = float('inf')\n\n    for i, hole in enumerate(self.free_list):\n        if hole.size >= size:\n            remainder = hole.size - size\n            if remainder < best_remainder:\n                best_remainder = remainder\n                best_idx = i\n\n    if best_idx >= 0:\n        hole = self.free_list[best_idx]\n        alloc_start = hole.start\n        hole.start += size\n        hole.size -= size\n        if hole.size == 0:\n            self.free_list.pop(best_idx)\n        print(f\"Best-fit: Allocated {size} at {alloc_start}\")\n        return alloc_start\n    print(f\"Best-fit: Failed for {size}\")\n    return None\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3-worst-fit",
      children: "3. Worst-Fit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Allocate the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "largest"
      }), " hole. Intention: the remaining free space is still large enough to be useful for another allocation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Packing suitcases"
        }), ": You choose the largest empty spot, even if your suitcase is small. That way, the remaining space in that spot is still big enough for another suitcase later."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "c-implementation-worst-fit",
      children: "C++ Implementation (Worst-Fit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "AllocResult allocate_worst_fit(uint32_t size) {\n    auto worst_it = free_list.end();\n    uint32_t worst_size = 0;\n\n    for (auto it = free_list.begin(); it != free_list.end(); ++it) {\n        if (it->size >= size && it->size > worst_size) {\n            worst_size = it->size;\n            worst_it = it;\n        }\n    }\n\n    if (worst_it != free_list.end()) {\n        uint32_t alloc_start = worst_it->start;\n        worst_it->start += size;\n        worst_it->size -= size;\n        if (worst_it->size == 0) {\n            free_list.erase(worst_it);\n        }\n        std::cout << \"Worst-fit: Allocated \" << size\n                  << \" at address \" << alloc_start << \"\\n\";\n        return {alloc_start, size, true};\n    }\n    std::cout << \"Worst-fit: Allocation failed for \" << size << \"\\n\";\n    return {0, 0, false};\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "4-next-fit",
      children: "4. Next-Fit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Same as first-fit, but the search starts from where the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "previous allocation ended"
      }), ", not from the beginning. This distributes allocations more evenly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parking lot"
        }), ": Instead of always starting from the entrance, you start from where you last parked. This wears out the lot more evenly — all areas get used, not just the front."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "c-implementation-next-fit",
      children: "C++ Implementation (Next-Fit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class MemoryAllocatorWithNextFit : public MemoryAllocator {\nprivate:\n    std::list<Hole>::iterator last_alloc;\n\npublic:\n    MemoryAllocatorWithNextFit(uint32_t total)\n        : MemoryAllocator(total), last_alloc(free_list.begin()) {}\n\n    AllocResult allocate_next_fit(uint32_t size) {\n        auto start_it = last_alloc;\n        auto it = last_alloc;\n\n        do {\n            if (it->size >= size) {\n                uint32_t alloc_start = it->start;\n                it->start += size;\n                it->size -= size;\n                if (it->size == 0) {\n                    it = free_list.erase(it);\n                    if (it == free_list.end()) it = free_list.begin();\n                } else {\n                    ++it;\n                }\n                last_alloc = it;\n                std::cout << \"Next-fit: Allocated \" << size\n                          << \" at address \" << alloc_start << \"\\n\";\n                return {alloc_start, size, true};\n            }\n            ++it;\n            if (it == free_list.end()) it = free_list.begin();\n        } while (it != start_it);\n\n        std::cout << \"Next-fit: Allocation failed for \" << size << \"\\n\";\n        return {0, 0, false};\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "full-dry-run-same-allocation-sequence-across-all-four-algorithms",
      children: "Full Dry Run: Same Allocation Sequence Across All Four Algorithms"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initial memory: 0 MB — 1024 MB (all free)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Allocation sequence: A(200), B(150), C(100), free A, D(80), free C, E(300)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "first-fit-trace",
      children: "First-Fit Trace"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Allocated At"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Free List After"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[{0, 1024}]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A(200)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[{200, 824}]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B(150)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[{350, 674}]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C(100)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "350"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[{450, 574}]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[{0, 200}, {450, 574}]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D(80)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[{80, 120}, {450, 574}]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[{80, 120}, {450, 574}] (merge doesn't apply — 80+120=200 ≠ 450)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E(300)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "450 (first hole ≥ 300)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[{80, 120}, {750, 274}]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "best-fit-trace",
      children: "Best-Fit Trace"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Allocated At"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[{0, 1024}]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A(200)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only hole, remainder 824"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B(150)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only hole, remainder 674"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C(100)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "350"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only hole, remainder 574"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[{0, 200}, {450, 574}]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D(80)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hole 0 has size 200 (rem 120), hole 450 has size 574 (rem 494) — 120 < 494"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[{80, 120}, {450, 574}]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E(300)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "450"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hole 80 has size 120 (too small), hole 450 has size 574 — smallest feasible"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "worst-fit-trace",
      children: "Worst-Fit Trace"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Allocated At"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[{0, 1024}]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A(200)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only hole"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B(150)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only hole"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C(100)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "350"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only hole"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[{0, 200}, {450, 574}]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D(80)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "450"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hole 450 has size 574 (largest), hole 0 has size 200"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[{0, 200}, {370, 124}] (merge: A + D merged? No. 0+200=200 ≠ 370. Actually: free C is at 350-450, adjacent to D at 450-530 → merge to hole at 350 size 124 + 80 = wait, C was at 350-450, D is at 450-530. Free C returns 350-450. Adjacent to D's hole [370, 124]... Let me redo this properly. Initially after step 3: A[0,200], B[200,350], C[350,450]. Step 4: free A → [{0,200}, {450,574}]. Step 5: D(80) → worst-fit allocates at 450 → [{0,200}, {530,494}]. Step 6: free C (at 350, size 100) → [{0,200}, {350,100}, {530,494}]. Step 6 merge: B is process at 200-350, free [350,450] adjacent to free... no, B is allocated. So no merge between 200 and 350. But wait, we need to check adjacency: 200 (A's freed space) + 200 = 400 ≠ 350. So no merge. [{0,200}, {350,100}, {530,494}]. Step 7: E(300) → worst-fit takes 530 (largest at 494)... wait 494 ≥ 300 and 200 < 300? No. Actually 200 < 300 so only {530,494} qualifies. Alloc at 530. → [{0,200}, {350,100}, {830,194}]."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E(300)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "530"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only hole large enough is 494"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "next-fit-trace",
      children: "Next-Fit Trace"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Allocate At"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Search Start"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Free List"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[{0, 1024}]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A(200)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "start=0 → after 200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[{200, 824}]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B(150)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "start=200 → after 350"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[{350, 674}]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C(100)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "350"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "start=350 → after 450"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[{450, 574}]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(last_alloc still at 450-end boundary)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[{0,200}, {450,574}]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D(80)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "450"
            }), " (start search from last_alloc=450)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[{0,200}, {530,494}]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free C(350,100)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[{0,200}, {350,100}, {530,494}]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E(300)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "530"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search from 350 (last ended at 530+80) → 350 too small → 530 fits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[{0,200}, {350,100}, {830,194}]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Search Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Insertion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory Overhead"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fragmentation Tendency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "First-Fit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) average O(n/2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) split"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal (no tracking)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate — leaves small holes near front"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best-Fit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) full scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) split"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly more (tracks best)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst — leaves tiny unusable holes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Worst-Fit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) full scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) split"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly more"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better — leaves large remaining holes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Next-Fit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) worst-case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) split"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate — spreads fragmentation evenly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why these complexities?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "n"
        }), " = number of free holes. In the worst case (highly fragmented memory), n can be O(number of allocated blocks). First-fit stops early on average (O(n/2)). Best-fit and worst-fit always scan all holes."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All algorithms are O(1) for the actual allocation (just pointer arithmetic on the chosen hole)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Merging adjacent freed holes requires O(m log m) sort or O(m) linear scan where m is number of freed regions."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-table",
      children: "Advantages & Disadvantages Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "First-Fit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest average case; simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scatters small holes at front of memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best-Fit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uses smallest suitable hole; minimizes waste per allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Produces many tiny useless holes; slowest search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Worst-Fit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaves large holes that remain useful"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wastes large holes on small requests; poor memory utilization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Next-Fit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evenly distributes allocations; no front-bias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be slower than first-fit worst-case (full wrap-around)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Allocation size = 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Should return error or NULL; wastes no memory but must be handled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Allocation larger than any hole"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All four algorithms fail — must compact, swap, or wait"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Exactly matching hole"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perfect fit — no remaining fragment; hole is removed from free list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adjacent holes on free"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must merge — otherwise fragmentation worsens over time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Free entire memory at once"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After merging, list reverts to single hole of total size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Request exactly at top/bottom"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works normally; boundary checking needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multiple allocations same size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best-fit degenerates to first-fit if searching from same point"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrent frees"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Locking required; two concurrent frees of adjacent blocks must merge atomically"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fragmentation",
      children: "Fragmentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fragmentation is the wasted memory that occurs when free space is not contiguous or when allocated blocks are larger than needed."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "external-fragmentation",
      children: "External Fragmentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total free memory exists but is broken into small, non-contiguous chunks. No single chunk satisfies a request."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Memory Layout with External Fragmentation:\n┌──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┐\n│  P1  │ Free │  P2  │ Free │  P3  │ Free │  P4  │ Free │\n│ 100M │  10M │ 200M │  5M  │ 150M │  8M  │ 180M │ 12M  │\n└──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┘\nTotal free: 35 MB but largest hole is 12 MB.\nA process needing 20 MB cannot be loaded.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      }), " Variable-sized allocations and deallocations over time create a checkerboard pattern."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compaction:"
        }), " Move allocated processes to one end of memory → coalesce all free space."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Paging:"
        }), " Use fixed-size pages → no external fragmentation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Segregation:"
        }), " Use separate pools for different size classes (buddy system, slab allocator)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "internal-fragmentation",
      children: "Internal Fragmentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Allocated memory block is larger than the process requested; the excess inside the block is wasted."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Process needs 18 KB → allocated 20 KB (fixed partition of 20 KB)\n┌──────────────────────────────┐\n│  18 KB used    │ 2 KB waste  │  ← Internal fragmentation (inside block)\n└──────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      }), " Fixed-size partitions, page-aligned allocation, rounding up to alignment boundaries."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " A process needs 35,000 bytes. With 4 KB pages:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Required pages = ceil(35000 / 4096) = ceil(8.54) = 9 pages = 36,864 bytes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wasted = 36,864 - 35,000 = 1,864 bytes (internal fragmentation)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Small page sizes (4 KB wastes less than 64 KB pages)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Slab allocator (exact-size caches within pages)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Variable partition allocation (exact fit)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "measuring-fragmentation",
      children: "Measuring Fragmentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "External fragmentation ratio:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "F_ext = 1 - (largest_free_hole / total_free_memory)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If total free = 100 MB and largest hole = 30 MB: F_ext = 0.7 (70% of free memory is unavailable)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal fragmentation ratio:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "F_int = 1 - (requested_size / allocated_size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If requested 18 KB, allocated 20 KB: F_int = 0.1 (10% waste)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "compaction",
      children: "Compaction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compaction rearranges memory to merge all free holes into a single large block."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Before Compaction:\n┌──────┬──────┬──────┬──────┬──────┐\n│  P1  │ Free │  P2  │ Free │  P3  │\n│  80M │  20M │ 150M │  30M │ 100M │\n└──────┴──────┴──────┴──────┴──────┘\nTotal: 380 MB used, 50 MB free (fragmented)\n\nAfter Compaction:\n┌──────────────────────┬──────────────┐\n│  P1  │  P2  │  P3    │   Free       │\n│ 80M  │ 150M │ 100M   │   50 MB      │\n└──────────────────────┴──────────────┘\nTotal: 330 MB used, 50 MB free (contiguous)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cost:"
      }), " Compaction is expensive — O(n) where n is number of allocated processes. Every process must be relocated, which means updating all pointers. Only works if processes support dynamic binding (runtime relocation via MMU)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-hard-drive-files",
      children: "Real-World Analogy: Hard Drive Files"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "External fragmentation"
        }), " = Your hard drive has 50 GB free, but it's scattered in 1 GB chunks across the platter. A 10 GB file can't be saved. You need to defragment (compaction)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Internal fragmentation"
        }), " = You save a 3 KB text file. The filesystem allocates a 4 KB cluster. You wasted 1 KB of disk space inside the block."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "paging",
      children: "Paging"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Paging"
      }), " solves the external fragmentation problem by dividing both logical and physical memory into fixed-size blocks. Paging is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "invisible to the programmer"
      }), " — it's entirely handled by the MMU."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "core-concepts",
      children: "Core Concepts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Page"
        }), ": Fixed-size block of logical memory (typically 4 KB)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frame"
        }), ": Fixed-size block of physical memory — exactly the same size as a page."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Page Table"
        }), ": Per-process data structure mapping page numbers to frame numbers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Logical Memory (Process A):         Physical Memory:\n┌───────────────┐                   ┌───────────────┐\n│ Page 0        │────┐              │ Frame 0       │\n├───────────────┤    │              ├───────────────┤\n│ Page 1        │    ├─────────────→│ Frame 8       │  ← Page 0 of A\n├───────────────┤    │              ├───────────────┤\n│ Page 2        │    │              │ Frame 9       │  ← Page 3 of B\n├───────────────┤    │              ├───────────────┤\n│ Page 3        │───→│              │ Frame 12      │  ← Page 2 of A\n└───────────────┘    │              ├───────────────┤\n                     │              │ Frame 3       │  ← Page 1 of A\n                     │              ├───────────────┤\n                     └────────────→ │ ...           │\n                                    └───────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-how-address-translation-works-in-paging",
      children: "Step-by-Step: How Address Translation Works in Paging"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Given: 32-bit logical address, 4 KB page size (2^12 bytes)\n\nLOGICAL ADDRESS FORMAT:\n┌──────────────────────┬──────────────────────┐\n│   Page Number (p)    │   Offset (d)         │\n│    20 bits           │   12 bits            │\n│    bits 31-12        │   bits 11-0          │\n└──────────────────────┴──────────────────────┘\n\nStep 1: CPU issues LOAD from address 0x2A5C\n\nStep 2: Split into page number and offset\n    Page number = 0x2A5C >> 12 = 0x2\n    Offset = 0x2A5C & 0xFFF = 0xA5C\n\nStep 3: Look up page 2 in the page table\n    Page table[2] = Frame 12 = 0xC\n\nStep 4: Construct physical address\n    Physical = (Frame << 12) | Offset\n             = (0xC << 12) | 0xA5C\n             = 0xC000 | 0xA5C\n             = 0xCA5C\n\nStep 5: Memory controller reads physical address 0xCA5C\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "full-dry-run-logical-address--physical-address",
      children: "Full Dry Run: Logical Address → Physical Address"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Page size = 4 KB (2^12), offset = 12 bits"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Page table:\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "Page"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Frame"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Valid"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "8"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Yes"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Yes"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "2"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "12"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Yes"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "No"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Translate logical address 0x2A5C:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value (Binary)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value (Hex)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0000 0000 0000 0000 0010 1010 0101 1100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00002A5C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract page (bits 31-12)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0000 0000 0000 0000 0010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract offset (bits 11-0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1010 0101 1100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xA5C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lookup page 2 in PT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frame = 12 = 0xC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shift frame: 0xC << 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0000 0000 0000 1100 0000 0000 0000 0000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x000C000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OR with offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0000 0000 0000 1100 1010 0101 1100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x000CA5C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0xCA5C"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Translate logical address 0x35A0 (page 3, which is invalid):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x000035A0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x35A0 >> 12 = 0x3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x35A0 & 0xFFF = 0x5A0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page table[3].valid = false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PAGE FAULT → trap to OS"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS checks: page on disk?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If yes → load from swap. If not → segfault."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "page-table-entry-pte-structure",
      children: "Page Table Entry (PTE) Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A page table entry contains more than just the frame number. Typical 32-bit PTE:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "31      12|11|10|9|8|7|6|5|4|3|2|1|0\n┌─────────┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┐\n│ Frame Address (20) │G│S│0│A│D│A│C│W│U│R│P│\n│                     │ │ │ │ │ │ │ │ │ │ │ │\n└─────────────────────┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┘\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Bit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P (Present)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is page in physical memory?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R/W"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-write (0 = read-only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "U/S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User/supervisor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PWT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page write-through"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page cache disabled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accessed (set by hardware on read/write)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dirty (set by hardware on write)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page attribute table index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global page (don't flush from TLB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9-11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Available"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS can use these bits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12-31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frame Address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical frame number (20 bits → 1M frames × 4 KB = 4 GB)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "page-table-structures",
      children: "Page Table Structures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "1-single-level-page-table",
      children: "1. Single-Level Page Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Simplest form: one array of PTEs per process."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "32-bit address, 4 KB pages → 2^20 = 1,048,576 entries\nEach entry: 4 bytes → page table size = 4 MB per process\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " 4 MB per process. For 100 processes = 400 MB just for page tables."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "2-hierarchical-multi-level-page-table",
      children: "2. Hierarchical (Multi-Level) Page Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Breaks the page table into multiple levels. Only populated levels are allocated."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Two-Level Page Table (32-bit):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Logical Address:\n┌───────────────────┬───────────────────┬──────────────────────┐\n│  p1 (10 bits)     │  p2 (10 bits)     │  offset (12 bits)    │\n│  Index outer PT   │  Index inner PT   │  Page offset         │\n│  0-1023            │  0-1023           │  0-4095              │\n└───────────────────┴───────────────────┴──────────────────────┘\n\nTranslation:\n    PT1[p1] → points to a PT2 page\n    PT2[p2] → contains the frame number\n    Physical = (frame << 12) | offset\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory savings:"
      }), " Outer page table = 1024 entries × 4 bytes = 4 KB. Inner tables allocated only for used page ranges. A process using 8 MB of memory (2048 pages) needs 2 inner tables = 8 KB + 4 KB = 12 KB total, vs 4 MB for single-level."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Four-Level Page Table (x86-64, 48-bit):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Logical Address (48-bit, 4 KB pages):\n┌──────┬──────┬──────┬──────┬──────────────┐\n│ p1(9)│ p2(9)│ p3(9)│ p4(9)│ offset (12) │\n└──────┴──────┴──────┴──────┴──────────────┘\n\nEach level: 512 entries (9 bits), each entry 8 bytes = 4 KB table\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "full-four-level-page-walk-dry-run",
      children: "Full Four-Level Page Walk Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      }), " x86-64, 4 KB pages, logical address 0x7F3A4B2C1000"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Extract indices\n    p1 = (0x7F3A4B2C1000 >> 39) & 0x1FF = 0xFE (510)\n    p2 = (0x7F3A4B2C1000 >> 30) & 0x1FF = 0x1D0 (464)\n    p3 = (0x7F3A4B2C1000 >> 21) & 0x1FF = 0x0D9 (217)\n    p4 = (0x7F3A4B2C1000 >> 12) & 0x1FF = 0x0C1 (193)\n    offset = 0x7F3A4B2C1000 & 0xFFF = 0x000\n\nStep 2: Walk\n    CR3 → PML4 table base (physical): 0x1A00000\n    PML4[p1=510] = 0x1B00067 → next table at 0x1B00000\n\n    Page Directory Pointer Table[p2=464] = 0x1C00067 → next at 0x1C00000\n\n    Page Directory[p3=217] = 0x1D00067 → next at 0x1D00000\n\n    Page Table[p4=193] = 0x00000000_1E000067 → frame = 0x1E00000\n\nStep 3: Physical address = 0x1E00000 << 12 | 0x000 = 0x1E00000000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "3-hashed-page-table",
      children: "3. Hashed Page Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For address spaces larger than 32 bits. The virtual page number is hashed, and the hash chain is searched."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Virtual Page Number → Hash Function → Hash Table\n                                        │\n                                   ┌────┴────┐\n                                   │ Linked  │\n                                   │  List   │\n                                   │ (chain) │\n                                   └─────────┘\n                                   Compare: (PID, VPN) match?\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Clustered Page Tables:"
      }), " A variant where each hash entry contains multiple consecutive page mappings (a \"cluster\"), exploiting spatial locality."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "4-inverted-page-table",
      children: "4. Inverted Page Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Instead of one entry per page (per process), there is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one entry per physical frame"
      }), ". Each entry stores (process ID, page number)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Physical Frames:\n┌────────────┬────────────┬────────────┬────────────┬────────────┐\n│ Frame 0    │ Frame 1    │ Frame 2    │ Frame 3    │ Frame 4    │\n│ (PID1,Pg3) │ (PID2,Pg0) │ (PID1,Pg7) │ (Free)     │ (PID3,Pg2) │\n└────────────┴────────────┴────────────┴────────────┴────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Size:"
      }), " 4 GB RAM / 4 KB pages = 1,048,576 entries — much smaller than per-process page tables."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Translation requires searching the entire table. Solution: hash the (PID, VPN) pair to index directly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-library-books",
      children: "Real-World Analogy: Library Books"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pages"
          }), " = Individual book pages (fixed size)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Frames"
          }), " = Slots on the bookshelf (same size as pages)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Page table"
          }), " = The library catalog: \"Moby-Dick, Chapter 3 is on Shelf 4, Shelf 5 and Shelf 12.\" (Not contiguous!)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "TLB"
          }), " = Your mental map of where the last 16 books you read are — you don't check the catalog for those."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-level page table"
          }), " = Catalog in sections: \"Literature section starts at Row 5, American authors start at Shelf 3...\""]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Inverted page table"
          }), " = Labels on each shelf slot saying which book and chapter is there."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-simulated-paging-system",
      children: "C++ Implementation: Simulated Paging System"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <unordered_map>\n#include <cstdint>\n#include <iomanip>\n#include <random>\n\nclass PagingSimulator {\nprivate:\n    static constexpr uint32_t PAGE_SIZE = 4096;\n    static constexpr uint32_t PAGE_SHIFT = 12;\n    static constexpr uint32_t PAGE_MASK = 0xFFF;\n    static constexpr uint32_t NUM_FRAMES = 256;\n\n    std::vector<uint32_t> page_table; // page → frame mapping\n    std::vector<bool> frame_free;\n    uint32_t page_faults;\n    uint32_t total_accesses;\n\npublic:\n    PagingSimulator(uint32_t num_pages)\n        : page_table(num_pages, UINT32_MAX)\n        , frame_free(NUM_FRAMES, true)\n        , page_faults(0), total_accesses(0) {}\n\n    struct TranslationResult {\n        uint32_t physical_address;\n        bool page_fault;\n        uint32_t page_number;\n        uint32_t frame_number;\n        uint32_t offset;\n    };\n\n    TranslationResult translate(uint32_t logical_address) {\n        total_accesses++;\n\n        uint32_t page_number = logical_address >> PAGE_SHIFT;\n        uint32_t offset = logical_address & PAGE_MASK;\n\n        TranslationResult result;\n        result.page_number = page_number;\n        result.offset = offset;\n\n        // Check page table\n        if (page_number >= page_table.size() ||\n            page_table[page_number] == UINT32_MAX) {\n            // Page fault\n            result.page_fault = true;\n            page_faults++;\n            return result;\n        }\n\n        uint32_t frame = page_table[page_number];\n        result.frame_number = frame;\n        result.physical_address = (frame << PAGE_SHIFT) | offset;\n        result.page_fault = false;\n        return result;\n    }\n\n    void load_page(uint32_t page_number, uint32_t frame_number) {\n        if (page_number < page_table.size() && frame_number < NUM_FRAMES) {\n            page_table[page_number] = frame_number;\n            frame_free[frame_number] = false;\n        }\n    }\n\n    void print_stats() {\n        std::cout << \"Total accesses: \" << total_accesses << \"\\n\";\n        std::cout << \"Page faults: \" << page_faults << \"\\n\";\n        std::cout << \"Page fault rate: \"\n                  << (total_accesses > 0 ?\n                      (100.0 * page_faults / total_accesses) : 0.0)\n                  << \"%\\n\";\n    }\n};\n\nint main() {\n    PagingSimulator pager(1024); // 1024 virtual pages\n\n    // Load some pages into frames\n    pager.load_page(0, 8);\n    pager.load_page(1, 3);\n    pager.load_page(2, 12);\n    pager.load_page(5, 45);\n\n    // Test translations\n    uint32_t test_addrs[] = {0x2A5C, 0x1000, 0x5000, 0x5ABC, 0x9999};\n    for (uint32_t addr : test_addrs) {\n        auto result = pager.translate(addr);\n        std::cout << \"Logical: 0x\" << std::hex << std::setw(8) << std::setfill('0') << addr\n                  << \" Page: 0x\" << result.page_number\n                  << \" Offset: 0x\" << result.offset << std::dec;\n        if (result.page_fault) {\n            std::cout << \" → PAGE FAULT\\n\";\n        } else {\n            std::cout << \" → Physical: 0x\" << std::hex << result.physical_address << std::dec << \"\\n\";\n        }\n    }\n\n    pager.print_stats();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-tlb-simulation-with-lru",
      children: "Python Implementation: TLB Simulation with LRU"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\nfrom collections import OrderedDict\n\n\nclass TLB:\n    def __init__(self, size: int):\n        self.size = size\n        self.entries: OrderedDict[int, int] = OrderedDict()\n        self.hits = 0\n        self.misses = 0\n\n    def lookup(self, page_number: int) -> int | None:\n        if page_number in self.entries:\n            self.entries.move_to_end(page_number)\n            self.hits += 1\n            return self.entries[page_number]\n        self.misses += 1\n        return None\n\n    def insert(self, page_number: int, frame_number: int):\n        if page_number in self.entries:\n            self.entries.move_to_end(page_number)\n            return\n        if len(self.entries) >= self.size:\n            self.entries.popitem(last=False)\n        self.entries[page_number] = frame_number\n\n    def hit_rate(self) -> float:\n        total = self.hits + self.misses\n        return self.hits / total if total > 0 else 0.0\n\n\nclass PageTable:\n    def __init__(self, num_pages: int):\n        self.entries: dict[int, int] = {}\n\n    def lookup(self, page_number: int) -> int | None:\n        return self.entries.get(page_number, None)\n\n    def insert(self, page_number: int, frame_number: int):\n        self.entries[page_number] = frame_number\n\n\nclass PagingWithTLB:\n    def __init__(self, tlb_size: int, num_frames: int):\n        self.tlb = TLB(tlb_size)\n        self.page_table = PageTable(1_000_000)\n        self.frames = list(range(num_frames))\n        self.next_frame = 0\n        self.page_faults = 0\n        self.accesses = 0\n\n    def _alloc_frame(self, page_number: int) -> int:\n        frame = self.frames[self.next_frame % len(self.frames)]\n        self.next_frame += 1\n        self.page_table.insert(page_number, frame)\n        self.page_faults += 1\n        return frame\n\n    def translate(self, logical_address: int) -> int:\n        self.accesses += 1\n        page_number = logical_address >> 12\n        offset = logical_address & 0xFFF\n\n        # Check TLB first\n        frame = self.tlb.lookup(page_number)\n        if frame is None:\n            # TLB miss → check page table\n            frame = self.page_table.lookup(page_number)\n            if frame is None:\n                # Page fault → allocate frame\n                frame = self._alloc_frame(page_number)\n            self.tlb.insert(page_number, frame)\n\n        return (frame << 12) | offset\n\n    def report(self):\n        print(f\"Accesses: {self.accesses}\")\n        print(f\"Page faults: {self.page_faults} \"\n              f\"({100 * self.page_faults / self.accesses:.2f}%)\")\n        print(f\"TLB hits: {self.tlb.hits} \"\n              f\"(hit rate: {self.tlb.hit_rate() * 100:.2f}%)\")\n\n\ndef simulate_workload(tlb_size: int, num_accesses: int = 10000) -> PagingWithTLB:\n    system = PagingWithTLB(tlb_size, num_frames=256)\n    rng = random.Random(42)\n\n    for _ in range(num_accesses):\n        # 80% local access, 20% random → working set pattern\n        if rng.random() < 0.8:\n            addr = rng.randint(0, 100) << 12\n        else:\n            addr = rng.randint(0, 10000) << 12\n        system.translate(addr)\n\n    return system\n\n\nif __name__ == \"__main__\":\n    for tlb_size in [8, 16, 32, 64, 128]:\n        system = simulate_workload(tlb_size)\n        print(f\"\\nTLB size: {tlb_size}\")\n        system.report()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "effective-access-time-eat-formula",
      children: "Effective Access Time (EAT) Formula"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EAT = TLB_hit_ratio × (TLB_access_time + memory_access_time)\n    + TLB_miss_ratio × (TLB_access_time + page_table_walk_time + memory_access_time)\n\nWhere:\n  page_table_walk_time = depth × memory_access_time\n  (depth = number of levels in the page table)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "worked-example",
      children: "Worked Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TLB access: 1 ns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory access: 100 ns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TLB hit ratio: 99%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "4-level page table (walk = 4 × 100 ns = 400 ns on miss)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EAT = 0.99 × (1 + 100) + 0.01 × (1 + 400 + 100)\n    = 0.99 × 101   + 0.01 × 501\n    = 99.99        + 5.01\n    = 105.0 ns\n\nWithout TLB: 400 ns (walk) + 100 ns (access) = 500 ns per access!\nWith TLB (99%): 105 ns → ~4.8× improvement\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "impact-of-tlb-hit-rate",
      children: "Impact of TLB Hit Rate"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Hit Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "EAT (1-level)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "EAT (4-level)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "vs Without TLB"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "90%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "111 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "151 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.3× slower"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "95%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "106 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "126 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.0× slower"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "98%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "103 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "109 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.6× slower"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "99%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "102 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "105 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.8× faster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "99.9%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100.1 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100.5 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.0× faster"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "hierarchical-page-table-implementation",
      children: "Hierarchical Page Table Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <cstdint>\n\nclass TwoLevelPageTable {\nprivate:\n    static constexpr uint32_t PAGE_SIZE = 4096;\n    static constexpr uint32_t P1_BITS = 10;\n    static constexpr uint32_t P2_BITS = 10;\n    static constexpr uint32_t OFFSET_BITS = 12;\n    static constexpr uint32_t P1_MASK = 0x3FF;\n    static constexpr uint32_t P2_MASK = 0x3FF;\n\n    struct InnerTable {\n        std::vector<uint32_t> entries;\n        InnerTable() : entries(1024, 0) {} // 1024 entries → preset=false\n    };\n\n    std::vector<InnerTable*> outer_table;\n\n    uint32_t get_p1(uint32_t addr) const {\n        return (addr >> (P2_BITS + OFFSET_BITS)) & P1_MASK;\n    }\n\n    uint32_t get_p2(uint32_t addr) const {\n        return (addr >> OFFSET_BITS) & P2_MASK;\n    }\n\npublic:\n    TwoLevelPageTable() : outer_table(1024, nullptr) {}\n\n    void map(uint32_t logical_addr, uint32_t frame_number, bool present = true) {\n        uint32_t p1 = get_p1(logical_addr);\n        uint32_t p2 = get_p2(logical_addr);\n\n        if (outer_table[p1] == nullptr) {\n            outer_table[p1] = new InnerTable();\n        }\n\n        // Encode present bit in bit 0, frame number in bits 12-31\n        outer_table[p1]->entries[p2] = (frame_number << 12) | (present ? 1 : 0);\n    }\n\n    uint32_t translate(uint32_t logical_addr, bool& success) {\n        uint32_t p1 = get_p1(logical_addr);\n        uint32_t p2 = get_p2(logical_addr);\n        uint32_t offset = logical_addr & 0xFFF;\n\n        if (outer_table[p1] == nullptr) {\n            success = false;\n            return 0;\n        }\n\n        uint32_t pte = outer_table[p1]->entries[p2];\n        if (!(pte & 1)) { // Present bit\n            success = false;\n            return 0;\n        }\n\n        uint32_t frame = pte >> 12;\n        success = true;\n        return (frame << 12) | offset;\n    }\n};\n\nint main() {\n    TwoLevelPageTable pt;\n\n    // Map logical 0x00002A5C → frame 12\n    pt.map(0x00002A5C, 12);\n\n    bool ok;\n    uint32_t phys = pt.translate(0x00002A5C, ok);\n    std::cout << \"Translated: 0x\" << std::hex << phys\n              << \" (success=\" << std::dec << ok << \")\\n\";\n\n    phys = pt.translate(0xDEADBEEF, ok);\n    std::cout << \"Translated invalid: success=\" << ok << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-of-paging",
      children: "Complexity Analysis of Paging"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Page table lookup (direct)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array index into page table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Page table walk (hierarchical)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(depth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "depth = number of levels (2-5), each is a memory access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TLB lookup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware associative cache (CAM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TLB miss handling (hardware)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(depth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware walks page table, fills TLB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TLB miss handling (software)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(depth + trap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trap to OS, fills TLB, return"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Page table size (single-level)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(VPN_range)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2^entries — grows with address space, not usage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Page table size (hierarchical)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(used_pages × depth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only allocate inner tables for used ranges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inverted page table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(physical_frames)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 entry per frame — far smaller for large address spaces"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-1",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Drawback"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fragmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No external fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal fragmentation (< 1 page per process)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Protection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-page R/W/X bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be set for every page"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sharing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy: map same frame in multiple page tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires careful synchronization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sparseness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-level PT handles sparse address spaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Walk takes multiple memory accesses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLB makes common case fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLB miss is expensive (hundreds of cycles)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical reduces overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-level wastes 4 MB+ per process"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-in-paging",
      children: "Edge Cases in Paging"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Page table self-reference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used by OS to access page tables; one recursive entry maps the PT itself"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Huge pages (2 MB, 1 GB)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single PTE maps large range; reduces TLB pressure but increases internal fragmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-contiguous page table allocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-level PT naturally handles this; inner tables allocated on demand"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Page table overflow (32-bit)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-level PT for 32-bit = 4 MB — fits in contiguous physical memory but wastes space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "64-bit with single-level PT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impossible — 2^52 entries would be 32 PB of page table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Copy-on-write (fork)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page tables marked read-only; actual frame duplicated only on write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NUMA memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page tables must be local to the accessing core for performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PCIe MMIO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical address range mapped to devices, not RAM; marked uncacheable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "segmentation",
      children: "Segmentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Segmentation"
      }), " is a memory management scheme that divides a program into ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "logical segments"
      }), " that match the programmer's view: code, data, stack, heap, shared libraries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "segment-table",
      children: "Segment Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each segment has a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "base"
      }), " (starting physical address) and a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "limit"
      }), " (size). The logical address is a (segment_number, offset) pair."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Logical Address:\n┌──────────────────┬────────────────────────┐\n│ Segment Number   │   Offset within Segment │\n│     s            │        d                │\n└──────────────────┴────────────────────────┘\n        │\n        ▼\n┌────────────────────────────────────────────┐\n│            Segment Table                    │\n├──────┬──────────┬──────────┬────────────────┤\n│ Seg# │  Base    │  Limit   │  Protection   │\n├──────┼──────────┼──────────┼────────────────┤\n│  0   │ 0x400000 │ 0x010000 │   R-X (Code)  │\n│  1   │ 0x500000 │ 0x020000 │   RW- (Data)  │\n│  2   │ 0x700000 │ 0x100000 │   RW- (Heap)  │\n│  3   │ 0xFFFF000│ 0x001000 │   RW- (Stack) │\n│  4   │ 0x600000 │ 0x005000 │   R-- (Const) │\n└──────┴──────────┴──────────┴────────────────┘\n        │\n        ▼\nPhysical Address = Base + Offset\n  (if offset < Limit, else segmentation fault)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "full-segment-translation-dry-run",
      children: "Full Segment Translation Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Segment table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Segment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Base"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Limit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0 (Code)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x400000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x10000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 (Data)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x500000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x20000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2 (Stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xFFF0000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x1000"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Translate logical address (Seg=1, Offset=0x1234):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract segment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x1234"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check: offset ≤ Limit?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x1234 < 0x20000 ✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical = Base + Offset"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["0x500000 + 0x1234 = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "0x501234"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Translate logical address (Seg=2, Offset=0x2000):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract segment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x2000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check: offset ≤ Limit?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x2000 > 0x1000 ✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Segmentation fault — offset beyond limit"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-office-building",
      children: "Real-World Analogy: Office Building"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Segments"
          }), " are like different zones in an office building:\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Segment 0 = Lobby (code) — you enter here"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Segment 1 = Filing room (data) — storage area"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Segment 2 = Conference room (stack) — temporary workspace"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Segment 3 = Parking garage (heap) — variable sized"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Each zone has a maximum capacity (limit)."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The segment table is the building directory: \"Filing room is in the east wing, room 101-250.\""
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "segmentation-advantages--disadvantages",
      children: "Segmentation Advantages & Disadvantages"
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
            children: "Matches programmer's logical view of memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External fragmentation (variable-sized segments)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Each segment has independent protection (R/W/X)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must find contiguous physical memory per segment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Segments can grow independently (stack, heap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complicated memory management (compaction needed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simplifies sharing of code segments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segment table limited by hardware register count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No internal fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segments must fit in physical memory entirely"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-segment-translation-simulator",
      children: "C++: Segment Translation Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <cstdint>\n#include <string>\n\nstruct Segment {\n    std::string name;\n    uint32_t base;\n    uint32_t limit;\n    uint32_t protection; // 0=R, 1=RW, 2=RX, 3=RWX\n};\n\nclass SegmentationSimulator {\nprivate:\n    std::vector<Segment> segment_table;\n\npublic:\n    void add_segment(const std::string& name, uint32_t base,\n                     uint32_t limit, uint32_t prot) {\n        segment_table.push_back({name, base, limit, prot});\n    }\n\n    struct Result {\n        uint32_t physical;\n        bool ok;\n        std::string reason;\n    };\n\n    Result translate(uint32_t segment, uint32_t offset) {\n        if (segment >= segment_table.size()) {\n            return {0, false, \"Invalid segment number\"};\n        }\n\n        const auto& seg = segment_table[segment];\n        if (offset >= seg.limit) {\n            return {0, false,\n                \"Offset \" + std::to_string(offset) +\n                \" exceeds segment limit \" + std::to_string(seg.limit)};\n        }\n\n        return {seg.base + offset, true, \"OK\"};\n    }\n\n    void dump_table() {\n        std::cout << \"Segment Table:\\n\";\n        std::cout << \"  #  | Name  | Base    | Limit   | Prot\\n\";\n        std::cout << \"-----|-------|---------|---------|-----\\n\";\n        for (size_t i = 0; i < segment_table.size(); i++) {\n            auto& s = segment_table[i];\n            std::cout << \"  \" << i << \" | \" << s.name\n                      << \" | 0x\" << std::hex << s.base\n                      << \" | 0x\" << s.limit\n                      << \" | 0x\" << s.protection << std::dec << \"\\n\";\n        }\n    }\n};\n\nint main() {\n    SegmentationSimulator sim;\n    sim.add_segment(\"Code\",  0x400000, 0x10000, 2); // RX\n    sim.add_segment(\"Data\",  0x500000, 0x20000, 1); // RW\n    sim.add_segment(\"Stack\", 0xFFF0000, 0x1000, 1); // RW\n\n    sim.dump_table();\n\n    auto r1 = sim.translate(1, 0x1234);\n    std::cout << \"Seg 1, Off 0x1234 → 0x\" << std::hex\n              << r1.physical << std::dec\n              << \" (\" << r1.reason << \")\\n\";\n\n    auto r2 = sim.translate(2, 0x2000);\n    std::cout << \"Seg 2, Off 0x2000 → \"\n              << (r2.ok ? \"0x\" + std::to_string(r2.physical) : r2.reason) << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "segmentation-with-paging-x86-architecture",
      children: "Segmentation with Paging (x86 Architecture)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modern CPUs combine both schemes: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "segmentation"
      }), " provides logical organization, and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "paging"
      }), " manages physical memory. The CPU first translates the logical address through segmentation to get a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "linear address"
      }), ", then translates that through paging to get the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "physical address"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Logical Address → [Segmentation Unit] → Linear Address → [Paging Unit] → Physical Address\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "x86-protected-mode-translation",
      children: "x86 Protected Mode Translation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Logical Address (48-bit far pointer):\n┌──────────────────┬────────────────────────────┐\n│ Segment Selector │       Offset (32-bit)      │\n│    16 bits       │                            │\n└──────────────────┴────────────────────────────┘\n        │\n        ▼\n┌──────────────────────┐\n│  Segment Descriptor  │\n│  (Global/Local DT)   │\n├──────────────────────┤\n│ Base = 0x00000000    │  ← In flat model, base = 0\n│ Limit = 0xFFFFFFFF   │  ← Limit = 4 GB\n│ G-bit = 1            │  ← Granularity: 4 KB units\n│ DPL = 0              │  ← Privilege level\n└──────────────────────┘\n        │\n        ▼\nLinear Address = Segment.Base + Offset = 0 + Offset = Offset (in flat mode)\n        │\n        ▼\n┌──────────────────────┐\n│   Page Translation   │\n│   (2-level for 32-bit│\n│   4-level for 64-bit)│\n└──────────────────────┘\n        │\n        ▼\nPhysical Address (sent to memory bus)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "flat-memory-model-in-linux",
      children: "Flat Memory Model in Linux"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Linux sets up all four segments (kernel code, kernel data, user code, user data) with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Base = 0x00000000"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Limit = 0xFFFFFFFF"
        }), " (4 GB for 32-bit) or 0xFFFFFFFFFF... (for 64-bit)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This effectively ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "disables segmentation"
      }), " — the logical address IS the linear address. All memory protection is handled by the paging unit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why does Linux do this?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Portability:"
        }), " Most RISC architectures (ARM, RISC-V) don't support segmentation at all."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simplicity:"
        }), " One less layer of translation to manage."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flat addressing:"
        }), " Easier to implement mmap, shared memory, and demand paging."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "x86-64-segmentation-in-64-bit-mode",
      children: "x86-64: Segmentation in 64-bit Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In 64-bit (long) mode:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Segmentation is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "mostly disabled"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CS (code segment) controls privilege level and 64/32-bit mode"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DS, ES, SS segment bases are treated as 0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FS and GS segments CAN have non-zero bases (used for thread-local storage, per-CPU data)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Linux uses:\n  GS: per-CPU data area (current task pointer, etc.)\n  FS: thread-local storage (TLS) for user-space\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-shipping-warehouse",
      children: "Real-World Analogy: Shipping Warehouse"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Segments"
          }), " = Labeled crates (Kitchen Stuff, Bedroom Stuff). Matches how you think about your belongings."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pages"
          }), " = Standard-sized boxes that the moving company requires. You repack your crates into boxes."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Segmentation + Paging"
          }), " = The crates exist logically, but inside they're packed into uniform boxes for efficient stacking on the truck."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Flat model"
          }), " = The moving company just stacks boxes directly — the crates are \"virtual labels\" where every crate has the same size."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "swapping",
      children: "Swapping"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A process can be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "swapped"
      }), " temporarily out of memory to a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "backing store"
      }), " (swap partition on disk)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "standard-swapping",
      children: "Standard Swapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. OS selects victim process\n2. Write entire process image → swap partition\n3. Update PCB: mark as swapped\n4. Free the process's memory\n5. When needed: read back from swap → find new memory location → reload\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Swapping entire processes is slow (gigabytes of I/O). Rarely used in modern systems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "swapping-with-paging-demand-paging",
      children: "Swapping with Paging (Demand Paging)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Only individual pages are swapped, not entire processes. This is the foundation of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "virtual memory"
      }), " (next chapter)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Process tries to access a page not in memory\n2. MMU triggers a page fault\n3. OS reads the needed page from swap\n4. Process continues (only the needed page was loaded)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fragmentation-types",
      children: "Fragmentation Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Occurs In"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "External"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable-sized allocations create scattered free holes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous allocation, Segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compaction, Paging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Internal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocated block larger than requested (rounding)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed partitions, Paging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smaller page size, Slab allocator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Segment fragmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segments of varying sizes cause fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combine with paging"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tlb-reach",
      children: "TLB Reach"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "TLB Reach"
      }), " = Number of TLB entries × Page size."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "With 64 TLB entries and 4 KB pages:\n  TLB reach = 64 × 4 KB = 256 KB\n\nWith 64 TLB entries and 2 MB huge pages:\n  TLB reach = 64 × 2 MB = 128 MB\n\nWith 64 TLB entries and 1 GB huge pages:\n  TLB reach = 64 × 1 GB = 64 GB\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Modern applications have working sets much larger than 256 KB. A database processing 1 GB of data will experience heavy TLB thrashing with 4 KB pages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Huge pages"
        }), " (2 MB, 1 GB): Cover more memory per TLB entry."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-level TLB"
        }), ": L1 (small, fast) + L2 (larger, slightly slower) caches."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Page table walk caches"
        }), ": Cache intermediate page table entries (PML4, PDPT, PD entries)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "page-size-trade-offs",
      children: "Page Size Trade-Offs"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Page Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "4 KB"
            }), " (default)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal internal waste, fine-grained protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large page tables, many TLB misses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "2 MB"
            }), " (huge)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Larger TLB reach, smaller page tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More internal waste (avg 1 MB/region)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "1 GB"
            }), " (gigantic)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Massive TLB reach, minimal page table overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very large internal waste, coarse-grained"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "64 KB"
            }), " (ARM)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good TLB reach, larger than 4KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compatibility issues with 4 KB assumptions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Typical workloads:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Databases:"
        }), " Benefit from 2 MB huge pages (large contiguous working set)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HPC / Scientific computing:"
        }), " Benefit from 1 GB pages (very large arrays)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "General-purpose desktop:"
        }), " 4 KB is optimal (sparse access patterns, many small allocations)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tlb-and-context-switch",
      children: "TLB and Context Switch"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["On context switch, the TLB must be flushed unless it supports ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "address space identifiers (ASIDs)"
      }), "."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Overhead"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Full TLB flush"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalidate all entries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High — repopulate on next accesses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Global pages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark OS/kernel pages as global (bit 8 in PTE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium — kernel entries survive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ASIDs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tag each TLB entry with a process ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low — only flush on PID reuse"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "thrashing",
      children: "Thrashing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Thrashing"
      }), " occurs when the system spends more time swapping pages in/out than executing. The OS detects thrashing via:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CPU utilization drops"
        }), " while page fault rate spikes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Working set model"
        }), ": If total working set > physical memory → thrashing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduce degree of multiprogramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use a local page replacement algorithm (per-process)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Increase physical memory."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "x86-64-page-tables-intelamd",
      children: "x86-64 Page Tables (Intel/AMD)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4-level paging"
        }), " (48-bit virtual address space): PML4 → PDPT → PD → PT"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5-level paging"
        }), " (57-bit): Adds PML5 level — available on Ice Lake and later"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Page size: 4 KB (default), 2 MB (via PS=1 in PD entry), 1 GB (via PS=1 in PDPT entry)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PCID"
        }), " (Process Context IDentifier): TLB entries tagged with PCID — no flush on context switch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "INVPCID"
        }), " instruction: Invalidate specific TLB entries by PCID"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "x86-64 4-Level Page Table Walk (48-bit):\n┌─────────────────────────────────────────────────────────────┐\n│ CR3 → PML4 Table (4 KB, 512 entries × 8 bytes = 4 KB)      │\n│        │                                                     │\n│        └── PML4[Index1] → PDP Table (4 KB, 512 entries)     │\n│               │                                              │\n│               └── PDP[Index2] → PD Table (4 KB, 512 entries)│\n│                      │                                       │\n│                      └── PD[Index3] → PT Table (4 KB, 512)  │\n│                             │                                │\n│                             └── PT[Index4] → Frame           │\n└─────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "armv8-a-page-tables",
      children: "ARMv8-A Page Tables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports 4 KB, 16 KB, 64 KB pages"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2-4 level page tables"
        }), " depending on granule size"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stage 1 translation"
        }), ": Virtual address → Intermediate physical address (IPA)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stage 2 translation"
        }), ": IPA → Physical address (hypervisor stage)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Two-stage translation"
        }), " enables hardware-virtualized memory management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Translation Granule"
        }), ": 4 KB (most common), 16 KB, 64 KB"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TTBR0"
        }), " (user) and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "TTBR1"
        }), " (kernel) — separate page table bases"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ARMv8 4 KB granule, 4-level:\n┌──────────────────────────────────────────┐\n│ TTBR0/1 → Level 0 Table (4 KB)          │\n│             │                             │\n│             └─ L0[Index0] → Level 1      │\n│                    │                      │\n│                    └─ L1[Index1] → L2    │\n│                           │               │\n│                           └─ L2[I2] → L3 │\n│                                  │        │\n│                                  └─ Frame │\n└──────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linux-buddy-allocator",
      children: "Linux Buddy Allocator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Linux uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "buddy allocator"
      }), " for managing physical page frames. It divides memory into power-of-2 sized blocks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Order 0:  4 KB pages (single page frames)\nOrder 1:  8 KB (2 pages)\nOrder 2:  16 KB (4 pages)\nOrder 3:  32 KB (8 pages)\nOrder 4:  64 KB (16 pages)\n...\nOrder 10: 4 MB (1024 pages)\n\nAllocation: Round up request to next power of 2 → check free list.\n  If no block at that order, take larger block, split into two \"buddies\".\n  Give one buddy, put the other on the lower-order free list.\n\nFree: Merge with buddy if free, promoting to higher order.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example: Allocating 15 KB (need 16 KB block = order 2):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Request 15 KB → round up to 16 KB → check order-2 free list\n2. If order-2 empty, check order-3 (32 KB):\n   - Split order-3 block into two order-2 buddies (A, B)\n   - Return A to caller\n   - Add B to order-2 free list\n3. On free: merge A with B if B is still free → restore order-3 block\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fast allocation (no complex search — just check buddy list)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple coalescing (buddies always adjacent, easy to detect)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No external fragmentation within the allocator"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "windows-memory-manager",
      children: "Windows Memory Manager"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Windows uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "demand-paged"
      }), " virtual memory system with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Working set management"
        }), ": Per-process trim policy when memory is low"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modified page writer"
        }), ": Asynchronously writes dirty pages to disk"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AWE (Address Windowing Extensions)"
        }), ": Allows 32-bit processes to access > 4 GB RAM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Superfetch/Prefetch"
        }), ": Predicts page usage patterns and pre-loads pages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory compression"
        }), ": Compresses pages instead of writing to disk (Windows 10+)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-address-translation-with-paging-full-walk",
      children: "Example 1: Address Translation with Paging (Full Walk)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "32-bit logical address space"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Page size = 4 KB (2¹² bytes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Page table:"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Page"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frame"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Valid"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Translate logical address 0x2A5C to physical:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Address = 0x00002A5C\n        Binary:  0000 0000 0000 0000 0010 1010 0101 1100\n\nStep 2: Page Number = Address >> 12\n        0x00002A5C >> 12 = 0x00002 = Page 2\n\nStep 3: Offset = Address & 0xFFF\n        0x00002A5C & 0xFFF = 0xA5C\n\nStep 4: Page Table[2] → Frame 12 = 0xC\n\nStep 5: Physical = (Frame << 12) | Offset\n        0xC << 12 = 0xC000\n        0xC000 | 0xA5C = 0xCA5C\n\nResult: 0x2A5C → 0xCA5C\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-memory-allocation-simulation-complete",
      children: "Example 2: Memory Allocation Simulation (Complete)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nstruct MemoryBlock {\n    int start;\n    int size;\n    bool free;\n    int process_id;\n};\n\nclass MemoryManager {\n    std::vector<MemoryBlock> blocks;\n\n    void merge() {\n        std::sort(blocks.begin(), blocks.end(),\n            [](auto& a, auto& b) { return a.start < b.start; });\n        for (size_t i = 0; i + 1 < blocks.size(); i++) {\n            if (blocks[i].free && blocks[i + 1].free &&\n                blocks[i].start + blocks[i].size == blocks[i + 1].start) {\n                blocks[i].size += blocks[i + 1].size;\n                blocks.erase(blocks.begin() + i + 1);\n                i--;\n            }\n        }\n    }\n\npublic:\n    MemoryManager(int total_size) {\n        blocks.push_back({0, total_size, true, -1});\n    }\n\n    int allocate(int process_id, int size, const std::string& strategy) {\n        size_t target = blocks.size();\n        size_t best_idx = blocks.size();\n        int best_remainder = INT_MAX;\n\n        for (size_t i = 0; i < blocks.size(); i++) {\n            if (!blocks[i].free || blocks[i].size < size) continue;\n\n            if (strategy == \"first\" && target == blocks.size()) {\n                target = i;\n                break;  // First-fit: stop at first\n            }\n            if (strategy == \"best\") {\n                int rem = blocks[i].size - size;\n                if (rem < best_remainder) {\n                    best_remainder = rem;\n                    best_idx = i;\n                }\n            }\n            if (strategy == \"worst\" && blocks[i].size > (target < blocks.size() ?\n                blocks[target].size : 0)) {\n                target = i;\n            }\n        }\n\n        if (strategy == \"best\" && best_idx < blocks.size()) target = best_idx;\n        if (target >= blocks.size()) return -1;\n\n        auto& hole = blocks[target];\n        int addr = hole.start;\n        if (hole.size == size) {\n            hole.free = false;\n            hole.process_id = process_id;\n        } else {\n            hole.start += size;\n            hole.size -= size;\n            blocks.insert(blocks.begin() + target,\n                {addr, size, false, process_id});\n        }\n        return addr;\n    }\n\n    void deallocate(int process_id) {\n        for (auto& b : blocks) {\n            if (!b.free && b.process_id == process_id) {\n                b.free = true;\n                b.process_id = -1;\n            }\n        }\n        merge();\n    }\n\n    void print() {\n        printf(\"Memory Map:\\n\");\n        for (auto& b : blocks) {\n            printf(\"  [%4d-%4d] %s\", b.start, b.start + b.size - 1,\n                   b.free ? \"FREE\" : (\"PID=\" + std::to_string(b.process_id)).c_str());\n            if (b.free) printf(\" (size=%d)\", b.size);\n            printf(\"\\n\");\n        }\n    }\n};\n\nint main() {\n    MemoryManager mm(1024);\n    mm.print();\n\n    int a = mm.allocate(1, 200, \"first\");\n    int b = mm.allocate(2, 150, \"first\");\n    printf(\"P1 at %d, P2 at %d\\n\", a, b);\n    mm.print();\n\n    mm.deallocate(1);\n    mm.print();\n\n    int d = mm.allocate(4, 80, \"best\");\n    printf(\"P4 at %d (best-fit)\\n\", d);\n    mm.print();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-page-table-size-calculation",
      children: "Example 3: Page Table Size Calculation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " 64-bit address space, 4 KB pages, 4-level page table. What is the total page table overhead for a process using 1 GB of memory?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Page size = 4 KB = 2^12\nAddress bits = 48 (x86-64 currently uses 48 bits)\nLevels = 4\nEach level index: (48 - 12) / 4 = 9 bits per level\nEntries per level: 2^9 = 512\nEach entry: 8 bytes\nTable size per level: 512 × 8 = 4 KB\n\nFor 1 GB = 2^30 bytes:\n  Pages needed = 2^30 / 2^12 = 2^18 = 262,144 pages\n  Page table entries = 262,144 entries\n  Inner (L4) page tables needed:\n    Entries per table: 512\n    Tables needed: 262,144 / 512 = 512 L4 tables\n\n  L3 tables needed: 512 L4 tables / 512 entries per L3 = 1 L3 table\n  (In practice: ceil(512 / 512) = 1)\n\n  L2 tables: 1 (from L3) / 512 = 1 (truncated)\n  L1 (PML4): always 1\n\n  Memory overhead:\n    PML4:  1 × 4 KB =   4 KB\n    L3:    1 × 4 KB =   4 KB\n    L2:    1 × 4 KB =   4 KB\n    L4:  512 × 4 KB = 2048 KB = 2 MB\n\n  Total page table memory: ~2.016 MB for 1 GB of mapped memory.\n  Overhead ratio: 2.016 MB / 1024 MB ≈ 0.2%\n\nCompare to single-level page table for 48-bit:\n  2^36 entries × 8 bytes = 2^39 bytes = 512 GB — impossible!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-memory-management-simulator",
      children: "TypeScript Memory Management Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following TypeScript implementation models paging, TLB with LRU, page table walk, and dynamic allocation strategies:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Memory Management Simulator\n * Implements: paging, TLB with LRU, page table walk,\n *             first/best/worst-fit allocation, buddy allocator\n */\ninterface PageTableEntry {\n  frameNumber: number;\n  valid: boolean;\n  dirty: boolean;\n  referenced: boolean;\n}\n\nclass PagingSimulator {\n  private pageTable: Map<number, PageTableEntry> = new Map();\n  private frameSize: number;\n  private totalFrames: number;\n  private freeFrames: Set<number>;\n  private tlb: { page: number; frame: number; lastAccess: number }[] = [];\n  private tlbSize: number;\n  private tlbHits = 0;\n  private tlbMisses = 0;\n  private accessTime = 0;\n\n  constructor(frameSize: number, totalFrames: number, tlbSize: number) {\n    this.frameSize = frameSize;\n    this.totalFrames = totalFrames;\n    this.freeFrames = new Set(Array.from({ length: totalFrames }, (_, i) => i));\n    this.tlbSize = tlbSize;\n  }\n\n  translateAddress(logicalAddress: number): { physicalAddress: number; tlbHit: boolean; pageFault: boolean } {\n    const pageNumber = Math.floor(logicalAddress / this.frameSize);\n    const offset = logicalAddress % this.frameSize;\n    this.accessTime++;\n\n    // Check TLB first\n    const tlbEntry = this.tlb.find(e => e.page === pageNumber);\n    if (tlbEntry) {\n      this.tlbHits++;\n      tlbEntry.lastAccess = this.accessTime;\n      return { physicalAddress: tlbEntry.frame * this.frameSize + offset, tlbHit: true, pageFault: false };\n    }\n\n    this.tlbMisses++;\n\n    // Check page table\n    const pte = this.pageTable.get(pageNumber);\n    if (pte && pte.valid) {\n      // TLB miss but page is in memory — update TLB\n      this.updateTLB(pageNumber, pte.frameNumber);\n      pte.referenced = true;\n      return { physicalAddress: pte.frameNumber * this.frameSize + offset, tlbHit: false, pageFault: false };\n    }\n\n    // Page fault — allocate frame\n    if (this.freeFrames.size === 0) {\n      return { physicalAddress: -1, tlbHit: false, pageFault: true };\n    }\n\n    const frame = this.freeFrames.values().next().value;\n    this.freeFrames.delete(frame);\n    this.pageTable.set(pageNumber, { frameNumber: frame, valid: true, dirty: false, referenced: true });\n    this.updateTLB(pageNumber, frame);\n\n    return { physicalAddress: frame * this.frameSize + offset, tlbHit: false, pageFault: true };\n  }\n\n  private updateTLB(page: number, frame: number): void {\n    if (this.tlb.length >= this.tlbSize) {\n      // LRU eviction\n      const lru = this.tlb.reduce((min, e) => e.lastAccess < min.lastAccess ? e : min);\n      const idx = this.tlb.indexOf(lru);\n      this.tlb[idx] = { page, frame, lastAccess: this.accessTime };\n    } else {\n      this.tlb.push({ page, frame, lastAccess: this.accessTime });\n    }\n  }\n\n  getStats(): string {\n    const totalAccesses = this.tlbHits + this.tlbMisses;\n    return JSON.stringify({\n      tlbHits: this.tlbHits,\n      tlbMisses: this.tlbMisses,\n      tlbHitRate: (this.tlbHits / totalAccesses * 100).toFixed(2) + '%',\n      pageTableEntries: this.pageTable.size,\n      freeFrames: this.freeFrames.size,\n      totalFrames: this.totalFrames\n    }, null, 2);\n  }\n}\n\nclass MemoryAllocator {\n  private holes: { start: number; size: number }[] = [];\n  private totalMemory: number;\n\n  constructor(totalMemory: number) {\n    this.totalMemory = totalMemory;\n    this.holes.push({ start: 0, size: totalMemory });\n  }\n\n  allocate(size: number, strategy: 'first' | 'best' | 'worst' | 'next'): number | null {\n    let selected: { idx: number; hole: { start: number; size: number } } | null = null;\n    let nextIdx = 0;\n\n    switch (strategy) {\n      case 'first': {\n        for (let i = 0; i < this.holes.length; i++) {\n          if (this.holes[i].size >= size) {\n            selected = { idx: i, hole: this.holes[i] };\n            break;\n          }\n        }\n        break;\n      }\n      case 'best': {\n        let minWaste = Infinity;\n        for (let i = 0; i < this.holes.length; i++) {\n          const waste = this.holes[i].size - size;\n          if (waste >= 0 && waste < minWaste) {\n            minWaste = waste;\n            selected = { idx: i, hole: this.holes[i] };\n          }\n        }\n        break;\n      }\n      case 'worst': {\n        let maxSize = -1;\n        for (let i = 0; i < this.holes.length; i++) {\n          if (this.holes[i].size >= size && this.holes[i].size > maxSize) {\n            maxSize = this.holes[i].size;\n            selected = { idx: i, hole: this.holes[i] };\n          }\n        }\n        break;\n      }\n      case 'next': {\n        for (let i = nextIdx; i < this.holes.length; i++) {\n          if (this.holes[i].size >= size) {\n            selected = { idx: i, hole: this.holes[i] };\n            nextIdx = i;\n            break;\n          }\n        }\n        if (!selected) {\n          for (let i = 0; i < nextIdx; i++) {\n            if (this.holes[i].size >= size) {\n              selected = { idx: i, hole: this.holes[i] };\n              nextIdx = i;\n              break;\n            }\n          }\n        }\n        break;\n      }\n    }\n\n    if (!selected) return null;\n\n    const { idx, hole } = selected;\n    const address = hole.start;\n\n    if (hole.size === size) {\n      this.holes.splice(idx, 1);\n    } else {\n      this.holes[idx] = { start: hole.start + size, size: hole.size - size };\n    }\n\n    return address;\n  }\n\n  free(address: number, size: number): void {\n    this.holes.push({ start: address, size });\n    this.holes.sort((a, b) => a.start - b.start);\n    this.mergeAdjacent();\n  }\n\n  private mergeAdjacent(): void {\n    for (let i = 0; i < this.holes.length - 1; i++) {\n      if (this.holes[i].start + this.holes[i].size === this.holes[i + 1].start) {\n        this.holes[i].size += this.holes[i + 1].size;\n        this.holes.splice(i + 1, 1);\n        i--;\n      }\n    }\n  }\n\n  printHoles(): string {\n    return this.holes.map(h => `[${h.start}-${h.start + h.size - 1}] (${h.size} KB)`).join(', ');\n  }\n}\n\n// Paging demo\nconsole.log('=== Paging with TLB ===');\nconst paging = new PagingSimulator(4096, 64, 4);\nfor (let i = 0; i < 100; i++) {\n  const addr = Math.floor(Math.random() * 0x100000);\n  paging.translateAddress(addr);\n}\nconsole.log(paging.getStats());\n\n// Allocation demo\nconsole.log('\\n=== Memory Allocation ===');\nconst alloc = new MemoryAllocator(1024);\nconsole.log('Initial:', alloc.printHoles());\nconsole.log('First-fit 200:', alloc.allocate(200, 'first'));\nconsole.log('Best-fit 100:', alloc.allocate(100, 'best'));\nconsole.log('Free at 0 size 200');\nalloc.free(0, 200);\nconsole.log('After free:', alloc.printHoles());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "effective-access-time-calculation",
      children: "Effective Access Time Calculation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Effective Access Time (EAT) formula captures TLB performance:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EAT = Hit_Ratio × (TLB_Access + Memory_Access) + Miss_Ratio × (TLB_Access + Page_Walk + Memory_Access)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1:"
      }), " TLB hit rate = 98%, TLB access = 2 ns, memory access = 100 ns, page walk = 100 ns (single level)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EAT = 0.98 × (2 + 100) + 0.02 × (2 + 100 + 100)\n    = 0.98 × 102 + 0.02 × 202\n    = 99.96 + 4.04\n    = 104.0 ns \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2:"
      }), " Four-level page table (4 page walks = 400 ns)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EAT = 0.98 × (2 + 100) + 0.02 × (2 + 400 + 100)\n    = 0.98 × 102 + 0.02 × 502\n    = 99.96 + 10.04\n    = 110.0 ns\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-chapter-quiz-questions",
      children: "Additional Chapter Quiz Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the TLB reach with 32 entries and 4 KB pages?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 32 KB"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 128 KB"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 256 KB"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 512 KB"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which page table structure uses a hash function to map virtual pages to physical frames?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Hierarchical page table"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Hashed page table"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Inverted page table"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Single-level page table"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the primary advantage of an inverted page table?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Faster lookups"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Proportional to physical memory size, not virtual address space"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Simpler implementation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) No TLB needed"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the buddy allocator, what happens when you free a block that is adjacent to its buddy?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Both blocks remain separate"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) The blocks are merged into a larger block"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) The blocks are zeroed"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Nothing special happens"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is compaction in memory management?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Compressing memory pages"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Moving allocated processes to consolidate free memory"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Reducing page table size"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Merging adjacent free blocks"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 9-b, 10-b, 11-b, 12-b, 13-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate the effective access time for a system with 95% TLB hit rate, 1 ns TLB access, 50 ns memory access, and a two-level page table (50 ns per walk). Show all steps."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "14",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a TypeScript program that simulates a multi-level page table for a 32-bit system with 4 KB pages. Given a logical address, walk through each level to find the physical address. Support 2-level and 3-level page table configurations."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "buddy allocator"
        }), " in TypeScript: allocate and free memory in power-of-2-sized blocks. Show the free list at each order after a sequence of allocations and deallocations. Demonstrate coalescing when buddies are freed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a TypeScript program that implements and benchmarks the four dynamic allocation strategies (first-fit, best-fit, worst-fit, next-fit) on a simulated 1 MB heap. Run 1000 random allocation/free operations and measure: average allocation time, external fragmentation (total free space in largest hole), and allocation success rate."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "TLB simulator"
        }), " with LRU replacement policy. Process a random sequence of 10,000 page accesses (50-200 distinct pages). Measure hit rate for TLB sizes of 4, 8, 16, 32, and 64 entries. Plot the hit rate vs. TLB size relationship."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Contiguous"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Paging"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Segmentation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Seg+Paging"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fragmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal (small)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Address Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One linear space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple logical segments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segments of pages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Programmer View"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invisible (completely transparent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matches program structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best of both"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sharing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy (share frames)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy (share segments)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Protection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base/limit registers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page-level R/W/X"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segment-level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-page"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page tables (multi-level reduces)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segment table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Growing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed at load time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pages added on demand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segments can grow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On demand"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hardware support"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MMU with base/limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MMU + TLB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MMU + segment registers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full MMU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OS Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Early Unix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux, Windows, macOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS/2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intel x86-64"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Logical Address"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address generated by CPU; also called virtual address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Physical Address"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actual address in RAM; seen by memory unit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MMU"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware that translates logical to physical addresses at runtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Page"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-size block of logical memory (typically 4 KB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Frame"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-size block of physical memory (same size as page)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Page Table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-process data structure mapping page numbers to frame numbers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TLB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware cache for fast page table lookups (Translation Lookaside Buffer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PTBR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page Table Base Register — points to the active page table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Paging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory scheme using fixed-size pages to eliminate external fragmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Segmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory scheme using variable-sized logical segments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "External Fragmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free memory scattered in small holes between allocated blocks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Internal Fragmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wasted space inside an allocated block beyond requested size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compaction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moving processes to consolidate free memory into one contiguous hole"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EAT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Effective Access Time = (HR × TLB_time) + (MR × (TLB_time + walk_time + mem_time))"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Paging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard memory management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 MB huge pages common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Often runs without MMU (bare metal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guest OS uses nested paging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Segmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x86 legacy mode only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not used"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical segments for memory-mapped I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not used"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TLB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crucial for connection handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large TLB needed for buffer pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple or no TLB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtualized TLB (nested)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Large Pages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Helpful for caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical for performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rarely supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used for graphics drivers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Swapping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal (in-memory)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Often disabled (direct I/O)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No swap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compressed swap (zRAM)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which technique divides memory into fixed-size blocks?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Paging"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Segmentation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Contiguous allocation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Dynamic partitioning"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The MMU is responsible for:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Managing disk storage"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Translating logical to physical addresses"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Scheduling processes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Handling I/O"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is external fragmentation?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Wasted space inside allocated blocks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Wasted space between allocated blocks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Page table overflow"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) TLB miss penalty"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which dynamic allocation algorithm searches from the last allocation point?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) First-fit"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Best-fit"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Worst-fit"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Next-fit"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the effective access time with 98% TLB hit rate, 1 ns TLB access, 100 ns memory access?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 101 ns"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 102 ns"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 103 ns"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 151 ns"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a two-level page table for 32-bit with 4 KB pages, how many bits index the outer table?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 8"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 10"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 12"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 20"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Inverted page tables have one entry per:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Page"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Process"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Frame"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Segment"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is TLB reach with 64 entries and 2 MB pages?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 256 KB"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 128 MB"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 64 MB"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 512 KB"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logical addresses are mapped to physical addresses by the MMU, enabling relocation and protection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Address binding occurs at compile time, load time, or execution time — modern OS use execution-time binding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contiguous allocation suffers from external fragmentation; compaction can reclaim wasted space"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dynamic storage allocation: First-fit (fastest average), Best-fit (minimal waste per alloc), Worst-fit (leaves large holes), Next-fit (no front-bias)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Paging eliminates external fragmentation using fixed-size pages and frames; page tables map between them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Page table structures: single (simple but large), hierarchical (saves memory), hashed (for >32 bit), inverted (tiny but slow)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TLB caches recent page table lookups; TLB reach = entries × page size"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Effective access time: EAT = HR × (TLB + mem) + MR × (TLB + walk + mem)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Segmentation matches the programmer's view with variable-sized logical segments; combined with paging in modern x86"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linux uses flat segmentation (base=0, limit=max) and relies entirely on paging for protection"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-1",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given a 32-bit logical address and a 4 KB page size, how many entries are in a single-level page table? How much memory does the page table consume?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is external fragmentation? How does paging solve it? What new problem does it introduce?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a TLB has 98% hit rate, TLB access takes 2 ns, and memory access takes 100 ns, what is the EAT? A two-level page table? A four-level?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between compile-time, load-time, and execution-time address binding."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate-1",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a memory allocator that tracks free holes and supports first-fit, best-fit, worst-fit, and next-fit allocation. Use a linked list of hole descriptors. Test it with a sequence of requests and releases."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For a 64-bit address space with 4 KB pages, a single-level page table would need 2^52 entries (quadrillions). Explain how a four-level page table works and calculate how much memory the top-level table consumes."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "two-level page table"
        }), " for a 32-bit system with 4 KB pages. Show how the logical address 0x12345678 is translated, given appropriate page table entries. Walk through every step with binary values."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simulate the buddy allocator: allocate and free blocks of sizes 64 KB, 128 KB, 32 KB, and 256 KB from an initial 1 MB pool. Show the resulting free lists at each order after each operation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-1",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a program that simulates a TLB with LRU replacement. Process a random sequence of page numbers (10,000 accesses, 10-100 distinct pages) and measure the hit rate for TLB sizes of 8, 16, 32, 64, and 128 entries. Plot the results."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The x86-64 architecture supports 4 KB, 2 MB, and 1 GB page sizes. Write a program that allocates a 1 GB memory region using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mmap()"
        }), " and measures TLB miss rate with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "perf stat -e dTLB-load-misses"
        }), ". Test with 4 KB pages (default) vs 2 MB huge pages (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mmap"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAP_HUGETLB"
        }), "). Explain the difference."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a simple ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "inverted page table"
        }), " with hashing. Support insert and lookup operations indexed by (process_id, page_number). Compare its memory usage with a traditional page table for a system with 1 GB RAM and 4 KB pages."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the four dynamic allocation algorithms in Python and run a simulation with 1000 random allocations and deallocations. Measure: average allocation time per algorithm, total external fragmentation after 1000 operations, and largest remaining free hole. Which algorithm wins on each metric?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answers-to-quiz",
      children: "Answers to Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Paging"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Translating logical to physical addresses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Wasted space between allocated blocks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Next-fit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0.98 × (1 + 100) + 0.02 × (1 + 100 + 100) = 0.98 × 101 + 0.02 × 201 = 98.98 + 4.02 = 103.0 ns (answer: c)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) 10 (32 - 12 = 20 bits for page number; split into 10 + 10)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Frame"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) 128 MB (64 × 2 MB = 128 MB)"
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