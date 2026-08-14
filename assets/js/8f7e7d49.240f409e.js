"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[39725],{

/***/ 88213
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_operating_systems_12_secondary_storage_md_8f7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-operating-systems-12-secondary-storage-md-8f7.json
const site_docs_courses_operating_systems_12_secondary_storage_md_8f7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/operating-systems/12-secondary-storage","title":"Chapter 12: Secondary Storage","description":"---","source":"@site/docs/courses/operating-systems/12-secondary-storage.md","sourceDirName":"courses/operating-systems","slug":"/operating-systems/12-secondary-storage","permalink":"/ai-engineering-journey/operating-systems/12-secondary-storage","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"12-secondary-storage","slug":"/operating-systems/12-secondary-storage","title":"Chapter 12: Secondary Storage","sidebar_label":"Chapter 12: Secondary Storage","sidebar_position":12},"sidebar":"course-operating-systems","previous":{"title":"Chapter 11: File System Implementation","permalink":"/ai-engineering-journey/operating-systems/11-file-system-impl"},"next":{"title":"Chapter 13: I/O Systems","permalink":"/ai-engineering-journey/operating-systems/13-io-systems"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/operating-systems/12-secondary-storage.md


const frontMatter = {
	id: '12-secondary-storage',
	slug: '/operating-systems/12-secondary-storage',
	title: 'Chapter 12: Secondary Storage',
	sidebar_label: 'Chapter 12: Secondary Storage',
	sidebar_position: 12
};
const contentTitle = 'Chapter 12: Secondary Storage';

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
  "value": "1. Disk Structure",
  "id": "1-disk-structure",
  "level": 2
}, {
  "value": "1.1 Physical Anatomy",
  "id": "11-physical-anatomy",
  "level": 3
}, {
  "value": "1.2 Disk Geometry Terms",
  "id": "12-disk-geometry-terms",
  "level": 3
}, {
  "value": "1.3 Disk Access Time",
  "id": "13-disk-access-time",
  "level": 3
}, {
  "value": "1.4 Real-World Analogy: Library Bookshelf",
  "id": "14-real-world-analogy-library-bookshelf",
  "level": 3
}, {
  "value": "1.5 Advantages &amp; Disadvantages of HDDs",
  "id": "15-advantages--disadvantages-of-hdds",
  "level": 3
}, {
  "value": "1.6 Edge Cases",
  "id": "16-edge-cases",
  "level": 3
}, {
  "value": "2. Disk Scheduling Algorithms",
  "id": "2-disk-scheduling-algorithms",
  "level": 2
}, {
  "value": "Common Benchmark Queue",
  "id": "common-benchmark-queue",
  "level": 3
}, {
  "value": "2.1 FCFS (First-Come, First-Served)",
  "id": "21-fcfs-first-come-first-served",
  "level": 3
}, {
  "value": "2.2 SSTF (Shortest Seek Time First)",
  "id": "22-sstf-shortest-seek-time-first",
  "level": 3
}, {
  "value": "2.3 SCAN (Elevator Algorithm)",
  "id": "23-scan-elevator-algorithm",
  "level": 3
}, {
  "value": "2.4 C-SCAN (Circular SCAN)",
  "id": "24-c-scan-circular-scan",
  "level": 3
}, {
  "value": "2.5 LOOK (Elevator, Early Turnaround)",
  "id": "25-look-elevator-early-turnaround",
  "level": 3
}, {
  "value": "2.6 C-LOOK (Circular LOOK)",
  "id": "26-c-look-circular-look",
  "level": 3
}, {
  "value": "2.7 Comparison Table",
  "id": "27-comparison-table",
  "level": 3
}, {
  "value": "2.8 SSTF vs SCAN Starvation Analysis",
  "id": "28-sstf-vs-scan-starvation-analysis",
  "level": 3
}, {
  "value": "2.9 Complexity Summary",
  "id": "29-complexity-summary",
  "level": 3
}, {
  "value": "2.10 Combined Edge Cases",
  "id": "210-combined-edge-cases",
  "level": 3
}, {
  "value": "3. Disk Management",
  "id": "3-disk-management",
  "level": 2
}, {
  "value": "3.1 Formatting",
  "id": "31-formatting",
  "level": 3
}, {
  "value": "3.2 Boot Block",
  "id": "32-boot-block",
  "level": 3
}, {
  "value": "3.3 Bad Block Handling",
  "id": "33-bad-block-handling",
  "level": 3
}, {
  "value": "3.4 Disk Management Edge Cases",
  "id": "34-disk-management-edge-cases",
  "level": 3
}, {
  "value": "4. RAID",
  "id": "4-raid",
  "level": 2
}, {
  "value": "4.1 RAID Levels",
  "id": "41-raid-levels",
  "level": 3
}, {
  "value": "RAID 0 (Striping)",
  "id": "raid-0-striping",
  "level": 4
}, {
  "value": "RAID 1 (Mirroring)",
  "id": "raid-1-mirroring",
  "level": 4
}, {
  "value": "RAID 5 (Striping with Distributed Parity)",
  "id": "raid-5-striping-with-distributed-parity",
  "level": 4
}, {
  "value": "RAID 6 (Striping with Dual Parity)",
  "id": "raid-6-striping-with-dual-parity",
  "level": 4
}, {
  "value": "RAID 10 (RAID 1+0 → Striped Mirrors)",
  "id": "raid-10-raid-10--striped-mirrors",
  "level": 4
}, {
  "value": "4.2 RAID Comparison",
  "id": "42-raid-comparison",
  "level": 3
}, {
  "value": "4.3 RAID Reliability Calculation",
  "id": "43-raid-reliability-calculation",
  "level": 3
}, {
  "value": "4.4 RAID Edge Cases",
  "id": "44-raid-edge-cases",
  "level": 3
}, {
  "value": "5. Swap Space Management",
  "id": "5-swap-space-management",
  "level": 2
}, {
  "value": "5.1 Swap Partition vs Swap File",
  "id": "51-swap-partition-vs-swap-file",
  "level": 3
}, {
  "value": "5.2 Swap Sizing",
  "id": "52-swap-sizing",
  "level": 3
}, {
  "value": "5.3 Swap Pseudocode",
  "id": "53-swap-pseudocode",
  "level": 3
}, {
  "value": "5.4 Swap Edge Cases",
  "id": "54-swap-edge-cases",
  "level": 3
}, {
  "value": "6. Interview Corner",
  "id": "6-interview-corner",
  "level": 2
}, {
  "value": "6.1 Scheduling Selection Criteria",
  "id": "61-scheduling-selection-criteria",
  "level": 3
}, {
  "value": "6.2 RAID Reliability → Interview Answer",
  "id": "62-raid-reliability--interview-answer",
  "level": 3
}, {
  "value": "6.3 Swap Sizing → Interview Answer",
  "id": "63-swap-sizing--interview-answer",
  "level": 3
}, {
  "value": "6.4 Common Q&amp;A",
  "id": "64-common-qa",
  "level": 3
}, {
  "value": "7. Applications in Real Systems",
  "id": "7-applications-in-real-systems",
  "level": 2
}, {
  "value": "7.1 Linux I/O Schedulers",
  "id": "71-linux-io-schedulers",
  "level": 3
}, {
  "value": "7.2 Windows Storage Stack",
  "id": "72-windows-storage-stack",
  "level": 3
}, {
  "value": "7.3 Hardware RAID Controllers",
  "id": "73-hardware-raid-controllers",
  "level": 3
}, {
  "value": "7.4 Real-World Configurations",
  "id": "74-real-world-configurations",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Disk Scheduling Simulation (Complete C)",
  "id": "example-1-disk-scheduling-simulation-complete-c",
  "level": 3
}, {
  "value": "Example 2: Estimating Disk Throughput",
  "id": "example-2-estimating-disk-throughput",
  "level": 3
}, {
  "value": "Example 3: TypeScript RAID Performance Calculator",
  "id": "example-3-typescript-raid-performance-calculator",
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
  "value": "Additional Exercises",
  "id": "additional-exercises",
  "level": 3
}, {
  "value": "A.1 SSTF Starvation → Full Worked Example",
  "id": "a1-sstf-starvation--full-worked-example",
  "level": 3
}, {
  "value": "A.2 Head Movement Calculation Formula",
  "id": "a2-head-movement-calculation-formula",
  "level": 3
}, {
  "value": "A.3 Average Seek Time Approximation",
  "id": "a3-average-seek-time-approximation",
  "level": 3
}, {
  "value": "Appendix B: Disk Scheduling with Multiple Disks (Modern Context)",
  "id": "appendix-b-disk-scheduling-with-multiple-disks-modern-context",
  "level": 2
}, {
  "value": "B.1 NUMA-Aware Scheduling",
  "id": "b1-numa-aware-scheduling",
  "level": 3
}, {
  "value": "B.2 Multi-Queue Block Layer (blk-mq)",
  "id": "b2-multi-queue-block-layer-blk-mq",
  "level": 3
}, {
  "value": "B.3 NVMe SSD Considerations",
  "id": "b3-nvme-ssd-considerations",
  "level": 3
}, {
  "value": "Appendix C: Additional Utility Functions",
  "id": "appendix-c-additional-utility-functions",
  "level": 2
}, {
  "value": "C.1 Compute Seek Distance in Python (All Algorithms)",
  "id": "c1-compute-seek-distance-in-python-all-algorithms",
  "level": 3
}, {
  "value": "C.2 Random Queue Generator",
  "id": "c2-random-queue-generator",
  "level": 3
}, {
  "value": "C.3 Full Simulation Runner",
  "id": "c3-full-simulation-runner",
  "level": 3
}, {
  "value": "Appendix D: Additional RAID Details",
  "id": "appendix-d-additional-raid-details",
  "level": 2
}, {
  "value": "D.1 Nested RAID Levels",
  "id": "d1-nested-raid-levels",
  "level": 3
}, {
  "value": "D.2 RAID Controller Cache Strategies",
  "id": "d2-raid-controller-cache-strategies",
  "level": 3
}, {
  "value": "D.3 RAID Rebuild Time Factors",
  "id": "d3-raid-rebuild-time-factors",
  "level": 3
}, {
  "value": "D.4 RAID vs Erasure Coding",
  "id": "d4-raid-vs-erasure-coding",
  "level": 3
}, {
  "value": "Appendix E: Advanced Topics",
  "id": "appendix-e-advanced-topics",
  "level": 2
}, {
  "value": "E.1 Log-Structured File Systems",
  "id": "e1-log-structured-file-systems",
  "level": 3
}, {
  "value": "E.2 Zoned Storage (SMR, ZNS)",
  "id": "e2-zoned-storage-smr-zns",
  "level": 3
}, {
  "value": "E.3 Persistent Memory (PMEM)",
  "id": "e3-persistent-memory-pmem",
  "level": 3
}, {
  "value": "Appendix F: Formulas Reference",
  "id": "appendix-f-formulas-reference",
  "level": 2
}, {
  "value": "Appendix G: Glossary of Terms",
  "id": "appendix-g-glossary-of-terms",
  "level": 2
}, {
  "value": "Appendix H: Quick Problem Solving",
  "id": "appendix-h-quick-problem-solving",
  "level": 2
}, {
  "value": "H.1 Given a request sequence, find total seek",
  "id": "h1-given-a-request-sequence-find-total-seek",
  "level": 3
}, {
  "value": "H.2 Given head movement, find scheduling algorithm",
  "id": "h2-given-head-movement-find-scheduling-algorithm",
  "level": 3
}, {
  "value": "H.3 Disk access time calculation",
  "id": "h3-disk-access-time-calculation",
  "level": 3
}, {
  "value": "H.4 RAID capacity calculation",
  "id": "h4-raid-capacity-calculation",
  "level": 3
}, {
  "value": "H.5 Swap sizing decision",
  "id": "h5-swap-sizing-decision",
  "level": 3
}, {
  "value": "Appendix I: Key Takeaways by Topic",
  "id": "appendix-i-key-takeaways-by-topic",
  "level": 2
}, {
  "value": "Disk Structure",
  "id": "disk-structure",
  "level": 3
}, {
  "value": "Disk Scheduling",
  "id": "disk-scheduling",
  "level": 3
}, {
  "value": "Disk Management",
  "id": "disk-management",
  "level": 3
}, {
  "value": "RAID",
  "id": "raid",
  "level": 3
}, {
  "value": "Swap Space",
  "id": "swap-space",
  "level": 3
}, {
  "value": "Real Systems",
  "id": "real-systems",
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
        id: "chapter-12-secondary-storage",
        children: "Chapter 12: Secondary Storage"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["<< ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/operating-systems/11-file-system-impl",
          children: "File System Implementation"
        })]
      }), " | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/operating-systems/13-io-systems",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next: I/O Systems"
        })
      }), " >>"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe disk hardware: platters, tracks, sectors, cylinders, seek time, rotational latency, transfer time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement and compare disk scheduling algorithms (FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate disk access latency and total seek distance with trace tables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze starvation and fairness tradeoffs in SSTF vs SCAN"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain disk formatting, partitioning, boot block, and bad-block management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design RAID structures and compare RAID levels (0, 1, 5, 6, 10)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand swap space management (partition vs file-based)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe real-world I/O schedulers (Linux CFQ, Deadline, NOOP; Windows storport)"
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
        href: "../../assets/images/lessons/operating-systems/12-secondary-storage/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/operating-systems/12-secondary-storage/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/operating-systems/12-secondary-storage/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/operating-systems/12-secondary-storage/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/operating-systems/12-secondary-storage/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/operating-systems/12-secondary-storage/visual-explanation.png",
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
              children: "Disk Structure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platters, tracks, sectors, cylinders; data read via actuator arm over spinning platters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disk Scheduling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK → minimize seek time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disk Management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partitioning, formatting, boot block, bad block handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RAID"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redundant Array of Independent Disks: striping, mirroring, parity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Swap Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual memory paging area on disk; raw partition or file-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stable Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-ahead logging ensures data survives crashes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real I/O Schedulers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux CFQ, Deadline, NOOP; Windows Storport; RAID controller cache"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.div, {
      className: "mermaid",
      children: "\nflowchart LR\n    A[Disk Structure] --> B[Disk Scheduling]\n    B --> C[FCFS / SSTF / SCAN / C-SCAN / LOOK / C-LOOK]\n    C --> D[Disk Management]\n    D --> E[RAID Levels]\n    E --> F[Swap Space & Stable Storage]\n    F --> G[Real-World I/O Schedulers]\n    G --> H[Interview Corner]\n    H --> I[Summary]\n"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-disk-structure",
      children: "1. Disk Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-physical-anatomy",
      children: "1.1 Physical Anatomy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Magnetic hard disk drives (HDDs) consist of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Platters"
        }), ": Rigid disks coated with magnetic material (typically 1–4 per drive)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Surfaces"
        }), ": Top and bottom of each platter (each has a dedicated read/write head)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracks"
        }), ": Concentric circles on a surface (100K–1M per surface)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sectors"
        }), ": Smallest addressable unit (typically 512 bytes or 4 KB)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cylinders"
        }), ": Set of tracks at the same radius across all platters"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read/Write Head"
        }), ": One per surface, mounted on actuator arm"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                    ┌─────────────────┐\n                    │   Spindle       │\n                    │    ┌──┐         │\n                    │  ┌─┴──┴─┐       │\n                    │  │Platter│       │\n                    │  │ 0     │       │\n                    │  ├──────┤       │\n                   ┌┼─┤Platter│       │\n                   │└┐│ 1     │       │\n                   └─┘├──────┤       │\n                    │  │Platter│       │\n                    │  │ 2     │       │\n                    │  └──────┘       │\n                    │  Read/Write     │\n                    │  Heads (arm)    │\n                    └─────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-disk-geometry-terms",
      children: "1.2 Disk Geometry Terms"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Track"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concentric ring on one platter surface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100K–1M tracks/surface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sector"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smallest addressable data unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "512 B or 4 KB (Advanced Format)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cylinder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same track index across all platters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as track count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cluster/Block"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group of sectors (file-system unit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 KB–64 KB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zone Bit Recording"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outer tracks hold more sectors than inner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5–2× more in outer zone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Actuator Arm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Positions R/W heads across platters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 10 ms full stroke"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spindle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rotates platters at constant RPM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5400, 7200, 10000, 15000 RPM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Areal Density"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bits per unit area"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 Tb/in² (2025 gen)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-disk-access-time",
      children: "1.3 Disk Access Time"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Access Time = Seek Time + Rotational Latency + Transfer Time\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Seek Time"
      }), " → Move actuator arm to correct cylinder (3–15 ms, avg 4–10 ms). Dominant factor (70–80% of access time)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rotational Latency"
      }), " → Time for sector to rotate under head. Average = half rotation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "7200 RPM: 60/7200 = 8.33 ms/rotation → avg 4.17 ms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "15000 RPM: 60/15000 = 4 ms/rotation → avg 2 ms"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Transfer Time"
      }), " → Read/write data once positioned (100–200 MB/s). 4 KB / 150 MB/s ≈ 0.027 ms."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Seek"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rotate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Transfer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ratio"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random 4 KB (7200 RPM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.17 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.027 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9.2 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100K× L1 cache"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential 1 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.17 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.67 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.84 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-real-world-analogy-library-bookshelf",
      children: "1.4 Real-World Analogy: Library Bookshelf"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HDD as a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "high-rise library with a single elevator"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Platters"
        }), " = Floors; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracks"
        }), " = Bookshelf rows; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Sectors"
        }), " = Books"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cylinder"
        }), " = Same shelf position across all floors (vertical column)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Seek"
        }), " = Elevator moving between floors; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Rotation"
        }), " = Walking along row"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transfer"
        }), " = Pulling book off shelf"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An elevator zigzagging between random floors (FCFS) wastes time. Moving directionally (SCAN) is efficient."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-advantages--disadvantages-of-hdds",
      children: "1.5 Advantages & Disadvantages of HDDs"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost/GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low (~$15/TB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 24+ TB/drive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random IOPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100–200 (vs SSD ~100K+)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential BW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~200 MB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Durability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mechanical; shock sensitive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Power"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5–15 W continuously"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5–15 ms (1000× worse than SSD)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-edge-cases",
      children: "1.6 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "No seek (contiguous access):"
      }), " All requests on same cylinder → seek = 0. Throughput approaches max (~200 MB/s)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fragmented file:"
      }), " File scattered across cylinders → seek per block. Random 4 KB IOPS ~100–200 vs sequential ~50K+ equivalent."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Zoned bit recording:"
      }), " Outer tracks have more sectors. Requests to outer cylinders complete faster per track."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-disk-scheduling-algorithms",
      children: "2. Disk Scheduling Algorithms"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reorder pending I/O request queue to minimize seek time (dominant component)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-benchmark-queue",
      children: "Common Benchmark Queue"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All examples: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[98, 183, 37, 122, 14, 124, 65, 67]"
      }), ", head=53, disk 0–199."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-fcfs-first-come-first-served",
      children: "2.1 FCFS (First-Come, First-Served)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Elevator processes floor requests in button-press order → zigzags wildly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receive queue in FIFO order."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move from current to first request."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distance = |current − target|. Add to total. Set current = target."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat for each remaining request."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return total."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION FCFS(queue, head):\n    total ← 0; current ← head\n    FOR each request IN queue:\n        total += |current − request|\n        current ← request\n    RETURN total\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Request"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Distance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "53"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "98"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "53 → 98"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "98"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "183"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "85"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "130"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ 183"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "183"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "37"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "146"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "276"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ 37"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "37"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "122"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "85"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "361"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ 122"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "122"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "108"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "469"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ 14"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "124"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "579"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ 124"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "124"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "59"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "638"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ 65"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "640"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ 67"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total: 640 cylinders"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <cstdlib>\nusing namespace std;\n\nint fcfs(const vector<int>& req, int head) {\n    int total = 0, cur = head;\n    cout << \"FCFS: \" << head;\n    for (int r : req) {\n        total += abs(cur - r); cur = r;\n        cout << \" -> \" << cur;\n    }\n    cout << \" | Total: \" << total << \"\\n\";\n    return total;\n}\n\nint main() {\n    vector<int> req = {98, 183, 37, 122, 14, 124, 65, 67};\n    fcfs(req, 53);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def fcfs(requests: list, head: int) -> int:\n    total, cur = 0, head\n    path = [str(head)]\n    for r in requests:\n        total += abs(cur - r); cur = r\n        path.append(str(cur))\n    print(f\"FCFS: {' -> '.join(path)} | Total: {total}\")\n    return total\n\nrequests = [98, 183, 37, 122, 14, 124, 65, 67]\nfcfs(requests, 53)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity: O(n)"
      }), " time, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "O(1)"
      }), " space. Single pass, no aux storage."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Simple, starvation-free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High seek (640); wild oscillations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fair (FIFO order)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor throughput under mixed load"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      }), " Empty = 0. Same cylinder = 0. Alternating extremes [199,0,199,0] → 1194 total (thrashing)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-sstf-shortest-seek-time-first",
      children: "2.2 SSTF (Shortest Seek Time First)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Courier delivers to nearest address first → distant customer may wait forever."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan entire pending queue at current position."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pick nearest request by distance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move there, service, remove from pending."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat until queue empty."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sum all distances."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION SSTF(queue, head):\n    total ← 0; current ← head; pending ← copy(queue)\n    WHILE pending NOT EMPTY:\n        nearest ← argmin over pending of |current − r|\n        total += |current − nearest|\n        current ← nearest\n        REMOVE nearest FROM pending\n    RETURN total\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pending"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Nearest"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dist"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "53"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65 (12)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ 65"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(98,183,37,122,14,124,67)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67 (2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ 67"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(98,183,37,122,14,124)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "37 (30)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ 37"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "37"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(98,183,122,14,124)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14 (23)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ 14"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(98,183,122,124)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "98 (84)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "84"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "151"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ 98"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "98"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(183,122,124)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "122 (24)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "175"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ 122"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "122"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(183,124)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "124 (2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "177"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ 124"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "124"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(183)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "183 (59)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "59"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "236"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ 183"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total: 236 cylinders"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Starvation:"
      }), " Head=53, queue=[65, 183]. Pick 65. Before servicing 183, new [67,37] arrive. Pick 67, 37. More nearby arrivals keep 183 waiting forever."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <cstdlib>\n#include <climits>\nusing namespace std;\n\nint sstf(const vector<int>& req, int head) {\n    int total = 0, cur = head, n = req.size();\n    vector<bool> done(n, false);\n    cout << \"SSTF: \" << head;\n    for (int c = 0; c < n; c++) {\n        int minD = INT_MAX, idx = -1;\n        for (int i = 0; i < n; i++)\n            if (!done[i] && abs(cur - req[i]) < minD)\n                { minD = abs(cur - req[i]); idx = i; }\n        total += minD; cur = req[idx]; done[idx] = true;\n        cout << \" -> \" << cur;\n    }\n    cout << \" | Total: \" << total << \"\\n\";\n    return total;\n}\n\nint main() {\n    vector<int> req = {98, 183, 37, 122, 14, 124, 65, 67};\n    sstf(req, 53);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def sstf(requests: list, head: int) -> int:\n    total, cur = 0, head\n    pending, path = requests[:], [str(head)]\n    while pending:\n        nearest = min(pending, key=lambda r: abs(cur - r))\n        total += abs(cur - nearest); cur = nearest\n        path.append(str(cur)); pending.remove(nearest)\n    print(f\"SSTF: {' -> '.join(path)} | Total: {total}\")\n    return total\n\nsstf([98, 183, 37, 122, 14, 124, 65, 67], 53)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity: O(n²)"
      }), " time (scan for each request), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "O(n)"
      }), " space (visited flags)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Lower seek than FCFS (236)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Starvation"
            }), " → distant requests may wait forever"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast nearby response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²) → expensive for large queues"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      }), " Tie → pick any. Same cylinder → 0. Large queue (~50M distance calculations for 10K requests)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-scan-elevator-algorithm",
      children: "2.3 SCAN (Elevator Algorithm)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Elevator moves one direction, servicing requests. Reverses at top floor → no starvation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose direction (toward 0 or max). Sort queue ascending."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partition into left (< head) and right (≥ head)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move in chosen direction, service encountered requests."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["At ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "physical disk end"
        }), " (0 or 199), reverse."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Service remaining in reverse direction."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sum all distances."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION SCAN(queue, head, disk_size, toward_zero):\n    sorted ← SORT(queue); left ← [r< head]; right ← [r ≥ head]\n    total ← 0; current ← head\n    IF toward_zero:\n        FOR r IN REVERSE(left): total += |cur − r|; cur ← r\n        total += cur; cur ← 0\n        FOR r IN right: total += |cur − r|; cur ← r\n    RETURN total\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace (toward 0):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sorted: [14, 37, 65, 67, 98, 122, 124, 183]\nLeft: [37, 14] → Right: [65, 67, 98, 122, 124, 183]"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Move"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Distance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Start 53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "53 → 37"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "37 service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "37 → 14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14 service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "39"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14 → 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "disk end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "53"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0 → 65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reverse, service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "118"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "65 → 67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "67 → 98"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "151"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "98 → 122"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "175"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "122 → 124"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "177"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "124 → 183"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "59"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "236"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total: 236 cylinders"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <cstdlib>\nusing namespace std;\n\nint scan(const vector<int>& req, int head, int ds, bool tz) {\n    int total = 0, cur = head;\n    vector<int> s = req; sort(s.begin(), s.end());\n    cout << \"SCAN: \" << head;\n    vector<int> L, R;\n    for (int r : s) if (r < head) L.push_back(r); else R.push_back(r);\n    if (tz) {\n        for (int i = L.size()-1; i >=0; i--)\n            { total += abs(cur-L[i]); cur=L[i]; cout << \" -> \" << cur; }\n        if (cur != 0) { total += cur; cur = 0; cout << \" -> \" << cur; }\n        for (int r : R) { total += abs(cur-r); cur=r; cout << \" -> \" << cur; }\n    }\n    cout << \" | Total: \" << total << \"\\n\";\n    return total;\n}\n\nint main() {\n    vector<int> req = {98, 183, 37, 122, 14, 124, 65, 67};\n    scan(req, 53, 200, true);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def scan(requests: list, head: int, ds: int = 200, tz: bool = True) -> int:\n    total, cur = 0, head\n    s = sorted(requests)\n    L = [r for r in s if r < head]; R = [r for r in s if r >= head]\n    path = [str(head)]\n    if tz:\n        for r in reversed(L):\n            total += abs(cur - r); cur = r; path.append(str(cur))\n        if cur != 0: total += cur; cur = 0; path.append(str(cur))\n        for r in R: total += abs(cur - r); cur = r; path.append(str(cur))\n    print(f\"SCAN: {' -> '.join(path)} | Total: {total}\")\n    return total\n\nscan([98, 183, 37, 122, 14, 124, 65, 67], 53, 200, True)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity: O(n log n)"
      }), " time (sort), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "O(n)"
      }), " space (partitions)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
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
            children: "No starvation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-uniform wait (edges slower)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Good seek (236)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Goes to disk end unnecessarily"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Directional sweep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direction choice affects total"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      }), " No requests in direction → waste. Head at extreme → reversal. All one side → like FCFS."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-c-scan-circular-scan",
      children: "2.4 C-SCAN (Circular SCAN)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Tram runs clockwise only. Passengers board during clockwise sweep. Returns empty to start. Uniform wait times."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sort ascending. Partition left/right."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Service left (toward 0)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["At 0, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "jump"
        }), " to 199 (no service)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Service right descending from 199."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Jump adds disk_size − 1 to total."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION CSCAN(queue, head, disk_size):\n    sorted ← SORT(queue); left ← [r< head]; right ← [r ≥ head]\n    total ← 0; cur ← head\n    FOR r IN REVERSE(left): total += |cur − r|; cur ← r\n    total += cur; cur ← 0\n    total += (disk_size − 1); cur ← disk_size − 1\n    FOR r IN REVERSE(right): total += |cur − r|; cur ← r\n    RETURN total\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Move"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Distance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Start 53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "53 → 37"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "37 → 14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "39"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14 → 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "disk end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "53"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0 → 199"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "jump"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "199"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "252"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "199 → 183"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "268"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "183 → 124"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "59"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "327"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "124 → 122"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "329"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "122 → 98"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "353"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "98 → 67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "384"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "67 → 65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "386"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total: 386 cylinders"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <cstdlib>\nusing namespace std;\n\nint cscan(const vector<int>& req, int head, int ds) {\n    int total = 0, cur = head;\n    vector<int> s = req; sort(s.begin(), s.end());\n    cout << \"C-SCAN: \" << head;\n    vector<int> L, R;\n    for (int r : s) if (r < head) L.push_back(r); else R.push_back(r);\n    for (int i = L.size()-1; i >=0; i--)\n        { total += abs(cur-L[i]); cur=L[i]; cout << \" -> \" << cur; }\n    if (cur != 0) { total += cur; cur = 0; cout << \" -> \" << cur; }\n    cout << \" -> jump\"; total += (ds-1); cur = ds-1;\n    for (int i = R.size()-1; i >=0; i--)\n        { total += abs(cur-R[i]); cur=R[i]; cout << \" -> \" << cur; }\n    cout << \" | Total: \" << total << \"\\n\";\n    return total;\n}\n\nint main() {\n    vector<int> req = {98, 183, 37, 122, 14, 124, 65, 67};\n    cscan(req, 53, 200);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def cscan(requests: list, head: int, ds: int = 200) -> int:\n    total, cur = 0, head\n    s = sorted(requests); L = [r for r in s if r < head]; R = [r for r in s if r >= head]\n    path = [str(head)]\n    for r in reversed(L):\n        total += abs(cur - r); cur = r; path.append(str(cur))\n    if cur != 0: total += cur; cur = 0; path.append(str(cur))\n    total += (ds - 1); cur = ds - 1; path.append(\"jump\")\n    for r in reversed(R):\n        total += abs(cur - r); cur = r; path.append(str(cur))\n    print(f\"C-SCAN: {' -> '.join(path)} | Total: {total}\")\n    return total\n\ncscan([98, 183, 37, 122, 14, 124, 65, 67], 53, 200)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity: O(n log n)"
      }), " time, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "O(n)"
      }), " space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
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
            children: "Uniform waiting time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty jump adds 199"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No starvation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worse seek than SCAN/LOOK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable max wait"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-look-elevator-early-turnaround",
      children: "2.5 LOOK (Elevator, Early Turnaround)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Elevator that checks ahead → turns at last requested floor. No empty trips."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sort ascending. Partition left/right."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Service left (toward 0)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["At ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "last left request"
        }), " (NOT disk end), reverse."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Service right (ascending)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sum all."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION LOOK(queue, head):\n    sorted ← SORT(queue); left ← [r< head]; right ← [r ≥ head]\n    total ← 0; cur ← head\n    FOR r IN REVERSE(left): total += |cur − r|; cur ← r\n    FOR r IN right: total += |cur − r|; cur ← r\n    RETURN total\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Move"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Distance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Start 53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "53 → 37"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "37 → 14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "39"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14 → 65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reverse at last left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "51"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "65 → 67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "92"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "67 → 98"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "123"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "98 → 122"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "147"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "122 → 124"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "149"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "124 → 183"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "59"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "208"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Total: 208 cylinders"
      }), " (28 less than SCAN → no 14→0→65 waste)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <cstdlib>\nusing namespace std;\n\nint look(const vector<int>& req, int head) {\n    int total = 0, cur = head;\n    vector<int> s = req; sort(s.begin(), s.end());\n    cout << \"LOOK: \" << head;\n    vector<int> L, R;\n    for (int r : s) if (r < head) L.push_back(r); else R.push_back(r);\n    for (int i = L.size()-1; i >=0; i--)\n        { total += abs(cur-L[i]); cur=L[i]; cout << \" -> \" << cur; }\n    for (int r : R) { total += abs(cur-r); cur=r; cout << \" -> \" << cur; }\n    cout << \" | Total: \" << total << \"\\n\";\n    return total;\n}\n\nint main() {\n    vector<int> req = {98, 183, 37, 122, 14, 124, 65, 67};\n    look(req, 53);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def look(requests: list, head: int) -> int:\n    total, cur = 0, head\n    s = sorted(requests); L = [r for r in s if r < head]; R = [r for r in s if r >= head]\n    path = [str(head)]\n    for r in reversed(L): total += abs(cur - r); cur = r; path.append(str(cur))\n    for r in R: total += abs(cur - r); cur = r; path.append(str(cur))\n    print(f\"LOOK: {' -> '.join(path)} | Total: {total}\")\n    return total\n\nlook([98, 183, 37, 122, 14, 124, 65, 67], 53)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity: O(n log n)"
      }), " time, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "O(n)"
      }), " space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Best total seek"
            }), " (208)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-uniform wait at edges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No starvation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge cylinders wait longer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No unnecessary travel"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-c-look-circular-look",
      children: "2.6 C-LOOK (Circular LOOK)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Same tram as C-SCAN, but when last passenger boards, it returns to the first waiting passenger on other side. No route-end travel."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sort ascending. Partition left/right."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Service left (toward 0)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["At last left request, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "jump"
        }), " directly to farthest right request."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Service right descending from farthest."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Jump = |last_left − farthest_right|."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION CLOOK(queue, head):\n    sorted ← SORT(queue); left ← [r< head]; right ← [r ≥ head]\n    total ← 0; cur ← head\n    FOR r IN REVERSE(left): total += |cur − r|; cur ← r\n    total += |cur − right[last]|; cur ← right[last]\n    FOR r IN REVERSE(right): total += |cur − r|; cur ← r\n    RETURN total\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Move"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Distance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Start 53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "53 → 37"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "37 → 14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "39"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14 → 183"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "jump"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "169"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "208"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "183 → 124"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "59"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "267"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "124 → 122"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "269"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "122 → 98"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "293"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "98 → 67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "324"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "67 → 65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "326"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Total: 326 cylinders"
      }), " (between LOOK 208 and C-SCAN 386)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <cstdlib>\nusing namespace std;\n\nint clook(const vector<int>& req, int head) {\n    int total = 0, cur = head;\n    vector<int> s = req; sort(s.begin(), s.end());\n    cout << \"C-LOOK: \" << head;\n    vector<int> L, R;\n    for (int r : s) if (r < head) L.push_back(r); else R.push_back(r);\n    for (int i = L.size()-1; i >=0; i--)\n        { total += abs(cur-L[i]); cur=L[i]; cout << \" -> \" << cur; }\n    if (!R.empty()) {\n        int far = R.back(); total += abs(cur-far); cur = far; cout << \" -> \" << cur;\n        for (int i = R.size()-2; i >=0; i--)\n            { total += abs(cur-R[i]); cur=R[i]; cout << \" -> \" << cur; }\n    }\n    cout << \" | Total: \" << total << \"\\n\";\n    return total;\n}\n\nint main() {\n    vector<int> req = {98, 183, 37, 122, 14, 124, 65, 67};\n    clook(req, 53);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def clook(requests: list, head: int) -> int:\n    total, cur = 0, head\n    s = sorted(requests); L = [r for r in s if r < head]; R = [r for r in s if r >= head]\n    path = [str(head)]\n    for r in reversed(L): total += abs(cur - r); cur = r; path.append(str(cur))\n    if R:\n        far = R[-1]; total += abs(cur - far); cur = far; path.append(str(cur))\n        for r in reversed(R[:-1]): total += abs(cur - r); cur = r; path.append(str(cur))\n    print(f\"C-LOOK: {' -> '.join(path)} | Total: {total}\")\n    return total\n\nclook([98, 183, 37, 122, 14, 124, 65, 67], 53)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity: O(n log n)"
      }), " time, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "O(n)"
      }), " space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Better seek than C-SCAN (326 vs 386)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jump overhead vs LOOK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uniform wait, no starvation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly more complex"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "27-comparison-table",
      children: "2.7 Comparison Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Same queue ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[98, 183, 37, 122, 14, 124, 65, 67]"
      }), ", head=53, disk 0–199:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total Seek"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "vs FCFS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Starvation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Uniform"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FCFS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "640"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SSTF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "236"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−63%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SCAN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "236"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−63%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C-SCAN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "386"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−40%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LOOK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "208"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "−68%"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C-LOOK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "326"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−49%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LOOK has lowest seek (208). C-LOOK/C-SCAN provide best fairness. Choice depends on workload."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "28-sstf-vs-scan-starvation-analysis",
      children: "2.8 SSTF vs SCAN Starvation Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SSTF"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SCAN"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nearest distance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next in sweep direction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Starvation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            }), " → distant may wait forever"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "No"
            }), " → direction reversal guarantees service"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Head=50, queue=[1000,51,52,49,48...]: SSTF serves 47–52 cluster forever, 1000 never reached"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Head=50, toward 0: services 49,48... reverses at 0, goes up to 1000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high (µs to ∞)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounded by sweep time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Verdict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsuitable for production kernels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe for all workloads"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "29-complexity-summary",
      children: "2.9 Complexity Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why Space"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FCFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No aux structures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSTF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visited flags"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted + partitions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C-SCAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted + partitions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOOK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted + partitions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C-LOOK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted + partitions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSTF O(n²) becomes prohibitive at scale (10K req → ~50M distance calcs)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "210-combined-edge-cases",
      children: "2.10 Combined Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FCFS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SSTF"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SCAN"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C-SCAN"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LOOK"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C-LOOK"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Same cylinder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All left of head"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arrival"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nearest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left→0→reverse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left→0→jump→desc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left→reverse at min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left→jump→max→desc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alternating extremes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max thrashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directional (good)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jump overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directional (best)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jump overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent arrivals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Added to tail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May starve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next sweep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next sweep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next sweep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next sweep"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-disk-management",
      children: "3. Disk Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-formatting",
      children: "3.1 Formatting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Low-Level (Physical):"
      }), " Divides disk into sectors (headers, data, ECC). Done at factory. Advanced Format: 4 KB physical sectors for better ECC."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Partitioning:"
      }), " Logical groups of cylinders, each treated as separate device. Partition table in MBR (≤2 TB, ≤4 primaries) or GPT (>2 TB, ≤128 partitions, backup at end)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Logical Formatting (mkfs):"
      }), " Creates superblock, inode table/bitmap, free block bitmap, root directory for a specific FS type (ext4, NTFS, XFS, Btrfs)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Disk Layout:\n┌─────────────┬─────────────┬─────────────┬─────────────┐\n│ Partition 1 │ Partition 2 │ Partition 3 │ Partition 4 │\n│ (ext4)      │ (NTFS)      │ (swap)      │ (XFS)       │\n└─────────────┴─────────────┴─────────────┴─────────────┘\n┌───────────────────────────────────────────────────────┐\n│ GPT Header (LBA 1)       │ Partition entries (LBA 2–33) │\n└───────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-boot-block",
      children: "3.2 Boot Block"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MBR (Master Boot Record):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LBA 0, 512 bytes: 440 boot code + 4 sig + 64 partition table + 2 (0xAA55)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BIOS loads MBR → boot code loads active partition's VBR → OS kernel."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Limits: ≤2 TB, ≤4 primary partitions."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPT (GUID Partition Table):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LBA 0: protective MBR (backward compat)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LBA 1: GPT header; LBA 2–33: partition entries (128 × 128 bytes)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backup GPT at last LBAs for redundancy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UEFI firmware standard. Supports >2 TB and unlimited partitions (128 by convention)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-bad-block-handling",
      children: "3.3 Bad Block Handling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sector Sparing (Forwarding):"
      }), " Controller remaps bad sector LBA to a spare from reserved pool."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "P-List"
        }), " (primary): Factory-detected defects."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "G-List"
        }), " (grown): Lifecycle defects, remapped dynamically."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transparent to OS → controller handles on every read/write."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Bad sector detected → controller remaps LBA to spare sector → OS none the wiser\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sector Slipping:"
      }), " During low-level format, sectors shifted past bad sector. Bad sector never gets LBAs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Modern Practice:"
      }), " Reed-Solomon/LDPC ECC recovers marginal sectors. S.M.A.R.T. tracks reallocated counts. Increasing reallocations → imminent failure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-disk-management-edge-cases",
      children: "3.4 Disk Management Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Increasing bad blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S.M.A.R.T. alert → replace drive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bad block in FS metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fsck/chkdsk attempts recovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bad block during write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller remaps (G-List grows)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bad block during read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC retry → remap; data loss if ECC fails"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MBR sector goes bad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catastrophic (GPT backup can recover)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partition table corrupt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPT has backup; MBR has none"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4K sector on 512B OS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alignment issues; modern OS handles transparently"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-raid",
      children: "4. RAID"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Redundant Array of Independent Disks:"
      }), " Multiple physical disks for reliability, performance, or both. Implemented via:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hardware RAID"
        }), ": Dedicated controller with processor + cache (battery/NVDIMM backed)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Software RAID"
        }), ": OS-level (Linux mdadm, Windows Storage Spaces, ZFS)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-raid-levels",
      children: "4.1 RAID Levels"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "raid-0-striping",
      children: "RAID 0 (Striping)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data split into stripes, written across all disks in parallel."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Disk 0    Disk 1    Disk 2\nstripe0   stripe1   stripe2\nstripe3   stripe4   stripe5\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Min disks:"
        }), " 2 | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Capacity:"
        }), " N × disk (100%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read:"
        }), " Excellent (parallel) | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Write:"
        }), " Excellent (parallel)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reliability:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "None"
        }), " → any single failure destroys all data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use:"
        }), " Scratch space, temp files, non-critical throughput"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "raid-1-mirroring",
      children: "RAID 1 (Mirroring)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data written identically to two+ disks."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Disk 0    Disk 1\nblock 0   block 0\nblock 1   block 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Min disks:"
        }), " 2 | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Capacity:"
        }), " N/2 × disk (50%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read:"
        }), " Good (read from either, 2× for 2-disk) | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Write:"
        }), " Slower (write to both)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reliability:"
        }), " Excellent → survive N−1 of N failures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use:"
        }), " OS partitions, transaction logs, critical metadata"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "raid-5-striping-with-distributed-parity",
      children: "RAID 5 (Striping with Distributed Parity)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XOR parity distributed across all disks (no dedicated parity disk)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Disk 0  Disk 1  Disk 2  Disk 3\nD0      D1      D2      P0-2\nD3      D4      P3-5    D5\nD6      P6-8    D7      D8\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Min disks:"
        }), " 3 | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Capacity:"
        }), " (N−1)/N × disk"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read:"
        }), " Excellent | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Write:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Poor → 4 I/O penalty per small write"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RAID 5 Write Penalty (4 I/Os):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Read old data block"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Read old parity block"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Write new data block"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Write new parity block"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reliability:"
        }), " Survives 1 disk failure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use:"
        }), " Bulk storage, file servers, media archives"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "raid-6-striping-with-dual-parity",
      children: "RAID 6 (Striping with Dual Parity)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two parity blocks per stripe (P+Q or Reed-Solomon)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Min disks:"
        }), " 4 | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Capacity:"
        }), " (N−2)/N × disk"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read:"
        }), " Excellent | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Write:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Very poor → 6 I/O penalty"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reliability:"
        }), " Survives 2 simultaneous failures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use:"
        }), " Large arrays where rebuild time is long (protects against second failure during rebuild)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "raid-10-raid-10--striped-mirrors",
      children: "RAID 10 (RAID 1+0 → Striped Mirrors)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mirror pairs (RAID 1) striped together (RAID 0)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "            RAID 0\n       ┌──────┬──────┐\n     RAID 1  RAID 1  RAID 1\n    ┌───┐   ┌───┐   ┌───┐\n   D0  D1  D2  D3  D4  D5\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Min disks:"
        }), " 4 | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Capacity:"
        }), " N/2 × disk (50%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read:"
        }), " Excellent (any disk) | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Write:"
        }), " Good (both in one mirror pair)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reliability:"
        }), " Very good (one failure per mirror set)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Most common enterprise RAID"
        }), " → databases, production workloads"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-raid-comparison",
      children: "4.2 RAID Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Min Disks"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Redundancy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Read"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Write"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Capacity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost Eff."
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mirror (N−1 fail)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single parity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Poor"
            }), " (4 IO)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(N−1)/N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dual parity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Very poor"
            }), " (6 IO)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(N−2)/N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mirror per pair"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4 × 1 TB disks capacity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Usable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Note"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No redundancy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two 2-disk mirrors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 parity equivalent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 parity equivalent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two striped mirror pairs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-raid-reliability-calculation",
      children: "4.3 RAID Reliability Calculation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MTTF of one disk = M (say 1M hours ≈ 114 years)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RAID 0:"
      }), " MTTF = M / N (N disks → N× failure probability)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RAID 1 (2-disk):"
      }), " Survives as long as ≥1 disk lives. Approx MTTF >> M."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RAID 5 (N disks):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(data loss) = P(any fails) × P(second fails during rebuild)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["With 4 × 4 TB, 10 hr rebuild, M=1M hr:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "P(first failure/year) = 8766/1M ≈ 0.0088 (0.88%)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "P(second during rebuild) = 10/1M ≈ 0.00001 (0.001%)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "P(data loss/year) ≈ 0.0088 × 0.00001 × 4 × 3 ≈ 1 × 10⁻⁹"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RAID 6:"
      }), " Survives 2 failures. Need 3rd during rebuild. Much safer for large arrays."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RAID 10:"
      }), " Survives as long as no mirror pair loses both disks. More robust than RAID 5 for same usable capacity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-raid-edge-cases",
      children: "4.4 RAID Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAID 5 failure during rebuild"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Second failure = data loss (RAID 6 protects)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAID 10 single failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mirror serves reads; hot-swap rebuilds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAID 0 failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete data loss → no recovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple failures in RAID 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OK if different mirror sets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Controller cache battery fail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-back → write-through (perf drop)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rebuild I/O load"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Saturates disk I/O, degrades workload"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSD+HDD in same set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited to slowest → not recommended"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ">2 TB on MBR RAID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must use GPT"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-swap-space-management",
      children: "5. Swap Space Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Extends physical memory by providing paging area on disk."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-swap-partition-vs-swap-file",
      children: "5.1 Swap Partition vs Swap File"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Swap Partition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Swap File"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "What"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dedicated raw partition (no FS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File within existing FS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Perf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly faster (contiguous, no FS overhead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly slower (FS metadata + fragmentation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed size; repartition to change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resizable (grow/shrink file)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hibernation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required by many OS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported on modern Linux"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fragmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible over time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Examples"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Linux ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/dev/sda3"
            }), " as swap"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Linux ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/swapfile"
            }), "; Win ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pagefile.sys"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-swap-sizing",
      children: "5.2 Swap Sizing"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Desktop 4–8 GB RAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2–4 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Light paging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Desktop 16+ GB RAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4–8 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Emergency headroom; hibernation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Server 64+ GB RAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8–16 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Emergency only; avoid swapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hibernation-enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAM × 1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must hold full RAM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None/minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DB manages own memory"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-swap-pseudocode",
      children: "5.3 Swap Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SWAP-IN(page):\n    Find free frame in physical memory\n    IF none: evict victim page (LRU/Clock)\n        IF victim dirty: write victim to swap\n    Read requested page from swap into free frame\n    Update page table (present=1, frame=free)\n\nSWAP-OUT(page):\n    IF page not in swap: allocate swap slot; write page\n    Update page table (present=0, swap_loc=slot)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-swap-edge-cases",
      children: "5.4 Swap Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thrashing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS spends more time swapping than executing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Swap too small"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OOM killer activates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Swap file fragmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increases swap-out latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SSD as swap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster than HDD swap; wear concern if heavy swapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No swap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System limited to physical RAM; OOM sooner"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linux swappiness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0–100; default 60; higher = more aggressive swapping"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-interview-corner",
      children: "6. Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-scheduling-selection-criteria",
      children: "6.1 Scheduling Selection Criteria"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Factor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommendation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fairness critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C-SCAN or C-LOOK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOOK (lowest seek)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FCFS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C-SCAN (predictable wait)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSD (no seek)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FCFS or NOOP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DB with own I/O mgmt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOOP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed random+sequential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deadline or C-LOOK"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-raid-reliability--interview-answer",
      children: "6.2 RAID Reliability → Interview Answer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " \"5 × 4 TB disks. Compare RAID 0/1/5/6/10 usable capacity, min disks, failure tolerance.\""]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Usable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Min Disks"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Failure Tolerance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 TB (100%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 TB (50%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 of 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 TB (80%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 TB (60%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 TB (50%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 2 (per mirror pair)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Harder:"
      }), " \"4-disk RAID 5, MTTF=1M hr, rebuild=12 hr. Compute data loss probability.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(any fail/yr) = 8766/1M ≈ 0.0088"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(second fail during rebuild) = 12/1M = 0.000012"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(data loss/yr) ≈ 0.0088 × 0.000012 × 4 × 3 ≈ 1.3 × 10⁻⁹"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-swap-sizing--interview-answer",
      children: "6.3 Swap Sizing → Interview Answer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " \"How much swap for 128 GB RAM Linux server?\"\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " \"Minimal swap (4–8 GB). Server should be sized to never swap → swapping kills performance. Some swap needed as emergency headroom and for kdump crash dumps. Hibernation requires swap ≥ RAM.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-common-qa",
      children: "6.4 Common Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: Why does C-SCAN have worse seek than SCAN but is still preferred?"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " C-SCAN provides uniform waiting times. SCAN favors middle cylinders (serviced twice per cycle). C-SCAN services each cylinder exactly once per cycle → critical for real-time/multimedia."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: Why RAID 5 write penalty?"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Small write = 4 I/Os: read old data + read old parity + XOR + write new data + write new parity = 4 disk I/Os for 1 logical write. RAID 6 = 6 I/Os."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: Can SSTF avoid starvation?"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Yes → add request aging. When age > threshold, reduce effective distance. Similar to Linux Deadline scheduler."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: 4K Advanced Format alignment issue?"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " OS expecting 512B on 4K physical drive causes read-modify-write per 512B access. Modern OS align partitions to 4K boundaries transparently."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-applications-in-real-systems",
      children: "7. Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-linux-io-schedulers",
      children: "7.1 Linux I/O Schedulers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Select per device: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "echo <scheduler> > /sys/block/<dev>/queue/scheduler"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CFQ (Completely Fair Queueing):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One queue per process; allocates time slices."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Groups sync (reads) and async (writes) separately."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Good for desktops; higher CPU overhead."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deadline Scheduler:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Three queues: sorted-by-LBA, read-FIFO, write-FIFO."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read deadline = 500 ms; write deadline = 5 s."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritizes reads over writes; prevents read starvation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Common for databases."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOOP Scheduler:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple FIFO + adjacent merge. No reordering."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best for SSDs and hardware RAID controllers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lowest CPU overhead."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BFQ and Kyber:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BFQ: Better fairness than CFQ."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kyber: Low-overhead, adaptive; designed for NVMe SSDs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-windows-storage-stack",
      children: "7.2 Windows Storage Stack"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Windows: I/O Manager → Volume Manager → Class Driver → Port Driver → Storage Driver"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storport"
        }), ": Enterprise storage framework (FC, SAS, iSCSI)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "StorAHCI"
        }), ": SATA SSDs/HDDs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stornvme"
        }), ": NVMe PCIe SSDs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage Spaces"
        }), ": Software RAID/volume mgmt (like Linux mdadm/LVM)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage QoS"
        }), ": Min/max IOPS per VM (Hyper-V)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Windows Scheduling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No user-selectable scheduler (unlike Linux)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "I/O priority: Idle, Very Low, Low, Normal, High, Critical."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SysMain (Superfetch)"
        }), ": Prefetches frequently used data; manages page file."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-hardware-raid-controllers",
      children: "7.3 Hardware RAID Controllers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Entry-Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Enterprise"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Examples"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LSI MegaRAID, Adaptec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcom 9560, Dell PERC H750"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cache"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "512 MB–2 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2–8 GB NVDIMM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cache Backup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Battery (BBU)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NVDIMM to flash on power loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Features"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAID 0/1/5/10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All + RAID 6, hot spare, dedup, encryption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interface"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SATA/SAS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAS3/4, NVMe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OS Transparent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-real-world-configurations",
      children: "7.4 Real-World Configurations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Workload"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Config"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Web server"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAID 1 (OS) + RAID 5 (content)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS reliability + efficient bulk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OLTP database"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAID 10 (16+ disks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max IOPS for logs + data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data warehouse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAID 5/6 (large, sequential)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Striping + parity protection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Virtualization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAID 10 (SSD+HDD tiers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VMs on SSD; backups on HDD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Media streaming"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAID 0 or 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max throughput; content replaceable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Desktop PC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAID 1 or single SSD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reliability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linux swap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dedicated partition on HDD/SSD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate from FS; raw blocks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-disk-scheduling-simulation-complete-c",
      children: "Example 1: Disk Scheduling Simulation (Complete C)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\n#define REQUESTS 8\n#define DISK_MAX 200\n\nvoid fcfs(int queue[], int n, int start) {\n    int total = 0;\n    printf(\"FCFS: %d\", start);\n    for (int i = 0; i < n; i++) {\n        total += abs(start - queue[i]);\n        start = queue[i];\n        printf(\" -> %d\", start);\n    }\n    printf(\" | Total: %d\\n\", total);\n}\n\nvoid scan(int queue[], int n, int start) {\n    int total = 0, cur = start;\n    int sorted[n];\n    for (int i = 0; i < n; i++) sorted[i] = queue[i];\n    for (int i = 0; i < n-1; i++)\n        for (int j = 0; j < n-i-1; j++)\n            if (sorted[j] > sorted[j+1]) {\n                int t = sorted[j]; sorted[j] = sorted[j+1]; sorted[j+1] = t;\n            }\n    printf(\"SCAN: %d\", start);\n    int left[n], right[n], lc = 0, rc = 0;\n    for (int i = 0; i < n; i++)\n        if (sorted[i] < start) left[lc++] = sorted[i];\n        else right[rc++] = sorted[i];\n    for (int i = lc-1; i >= 0; i--) {\n        total += abs(cur - left[i]); cur = left[i]; printf(\" -> %d\", cur);\n    }\n    if (cur != 0) { total += cur; cur = 0; printf(\" -> %d\", cur); }\n    for (int i = 0; i < rc; i++) {\n        total += abs(cur - right[i]); cur = right[i]; printf(\" -> %d\", cur);\n    }\n    printf(\" | Total: %d\\n\", total);\n}\n\nvoid cscan(int queue[], int n, int start) {\n    int total = 0, cur = start;\n    int sorted[n];\n    for (int i = 0; i < n; i++) sorted[i] = queue[i];\n    for (int i = 0; i < n-1; i++)\n        for (int j = 0; j < n-i-1; j++)\n            if (sorted[j] > sorted[j+1]) {\n                int t = sorted[j]; sorted[j] = sorted[j+1]; sorted[j+1] = t;\n            }\n    printf(\"C-SCAN: %d\", start);\n    int left[n], right[n], lc = 0, rc = 0;\n    for (int i = 0; i < n; i++)\n        if (sorted[i] < start) left[lc++] = sorted[i];\n        else right[rc++] = sorted[i];\n    for (int i = lc-1; i >= 0; i--) {\n        total += abs(cur - left[i]); cur = left[i]; printf(\" -> %d\", cur);\n    }\n    if (cur != 0) { total += cur; cur = 0; printf(\" -> %d\", cur); }\n    printf(\" -> jump\"); total += DISK_MAX - 1; cur = DISK_MAX - 1;\n    for (int i = rc-1; i >= 0; i--) {\n        total += abs(cur - right[i]); cur = right[i]; printf(\" -> %d\", cur);\n    }\n    printf(\" | Total: %d\\n\", total);\n}\n\nvoid look(int queue[], int n, int start) {\n    int total = 0, cur = start;\n    int sorted[n];\n    for (int i = 0; i < n; i++) sorted[i] = queue[i];\n    for (int i = 0; i < n-1; i++)\n        for (int j = 0; j < n-i-1; j++)\n            if (sorted[j] > sorted[j+1]) {\n                int t = sorted[j]; sorted[j] = sorted[j+1]; sorted[j+1] = t;\n            }\n    printf(\"LOOK: %d\", start);\n    int left[n], right[n], lc = 0, rc = 0;\n    for (int i = 0; i < n; i++)\n        if (sorted[i] < start) left[lc++] = sorted[i];\n        else right[rc++] = sorted[i];\n    for (int i = lc-1; i >= 0; i--) {\n        total += abs(cur - left[i]); cur = left[i]; printf(\" -> %d\", cur);\n    }\n    for (int i = 0; i < rc; i++) {\n        total += abs(cur - right[i]); cur = right[i]; printf(\" -> %d\", cur);\n    }\n    printf(\" | Total: %d\\n\", total);\n}\n\nvoid clook(int queue[], int n, int start) {\n    int total = 0, cur = start;\n    int sorted[n];\n    for (int i = 0; i < n; i++) sorted[i] = queue[i];\n    for (int i = 0; i < n-1; i++)\n        for (int j = 0; j < n-i-1; j++)\n            if (sorted[j] > sorted[j+1]) {\n                int t = sorted[j]; sorted[j] = sorted[j+1]; sorted[j+1] = t;\n            }\n    printf(\"C-LOOK: %d\", start);\n    int left[n], right[n], lc = 0, rc = 0;\n    for (int i = 0; i < n; i++)\n        if (sorted[i] < start) left[lc++] = sorted[i];\n        else right[rc++] = sorted[i];\n    for (int i = lc-1; i >= 0; i--) {\n        total += abs(cur - left[i]); cur = left[i]; printf(\" -> %d\", cur);\n    }\n    if (rc > 0) {\n        total += abs(cur - right[rc-1]); cur = right[rc-1]; printf(\" -> %d\", cur);\n        for (int i = rc-2; i >= 0; i--) {\n            total += abs(cur - right[i]); cur = right[i]; printf(\" -> %d\", cur);\n        }\n    }\n    printf(\" | Total: %d\\n\", total);\n}\n\nint main() {\n    int queue[] = {98, 183, 37, 122, 14, 124, 65, 67};\n    int start = 53;\n    fcfs(queue, REQUESTS, start);\n    scan(queue, REQUESTS, start);\n    cscan(queue, REQUESTS, start);\n    look(queue, REQUESTS, start);\n    clook(queue, REQUESTS, start);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-estimating-disk-throughput",
      children: "Example 2: Estimating Disk Throughput"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main() {\n    double avg_seek = 5.0;          // ms\n    double rpm = 7200.0;\n    double rot_lat = (60.0 / rpm / 2.0) * 1000.0;  // ms\n    double xfer_rate = 150.0;       // MB/s\n    int block = 4096;               // bytes\n\n    double xfer_time = (block / 1024.0 / 1024.0) / xfer_rate * 1000.0;\n    double random = avg_seek + rot_lat + xfer_time;\n    double rand_iops = 1000.0 / random;\n    double seq = (1.0 / xfer_rate) * 1000.0;\n    double seq_bw = 1.0 / (seq / 1000.0);\n\n    printf(\"7200 RPM HDD:\\n\");\n    printf(\"Rotational latency: %.2f ms\\n\", rot_lat);\n    printf(\"Transfer time (4 KB): %.4f ms\\n\", xfer_time);\n    printf(\"\\nRandom 4 KB: %.3f ms (%.0f IOPS)\\n\", random, rand_iops);\n    printf(\"Sequential: ~%.0f MB/s\\n\", seq_bw);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-typescript-raid-performance-calculator",
      children: "Example 3: TypeScript RAID Performance Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * RaidPerformanceCalculator: Models RAID 0, 1, 5, 6, and 10\n * to compute effective capacity, IOPS, throughput, and fault tolerance.\n */\ninterface RaidConfig {\n  level: number;\n  numDisks: number;\n  diskSizeGB: number;\n  diskIOPS: number;\n  diskThroughputMBs: number; // sequential MB/s per disk\n}\n\ninterface RaidResult {\n  level: number;\n  usableCapacityGB: number;\n  capacityEfficiency: number;  // %\n  readIOPS: number;\n  writeIOPS: number;\n  readThroughputMBs: number;\n  writeThroughputMBs: number;\n  maxFailures: number;\n  rebuildTimeHours: number;    // estimated for full disk\n}\n\nclass RaidCalculator {\n  compute(config: RaidConfig): RaidResult {\n    const { level, numDisks, diskSizeGB, diskIOPS, diskThroughputMBs } = config;\n    const totalRaw = numDisks * diskSizeGB;\n\n    let usableCapacityGB: number;\n    let writePenalty: number;\n    let maxFailures: number;\n\n    switch (level) {\n      case 0: // Striping\n        usableCapacityGB = totalRaw;\n        writePenalty = 1;\n        maxFailures = 0;\n        break;\n      case 1: // Mirroring\n        usableCapacityGB = diskSizeGB; // N/2 disks usable (assuming 2-disk mirror sets)\n        writePenalty = 2;\n        maxFailures = Math.floor(numDisks / 2);\n        break;\n      case 5: // Striping with parity\n        usableCapacityGB = (numDisks - 1) * diskSizeGB;\n        writePenalty = 4; // Read old data, read old parity, write new data, write new parity\n        maxFailures = 1;\n        break;\n      case 6: // Striping with double parity\n        usableCapacityGB = (numDisks - 2) * diskSizeGB;\n        writePenalty = 6; // Two data reads, two parity reads, two writes\n        maxFailures = 2;\n        break;\n      case 10: // Mirror + Stripe\n        usableCapacityGB = (numDisks / 2) * diskSizeGB;\n        writePenalty = 2;\n        maxFailures = Math.floor(numDisks / 2);\n        break;\n      default:\n        throw new Error(`Unsupported RAID level: ${level}`);\n    }\n\n    const capacityEfficiency = (usableCapacityGB / totalRaw) * 100;\n    const readIOPS = numDisks * diskIOPS; // All disks can serve reads\n    const writeIOPS = (numDisks * diskIOPS) / writePenalty; // Penalty reduces effective write IOPS\n    const readThroughputMBs = numDisks * diskThroughputMBs;\n    const writeThroughputMBs = (numDisks * diskThroughputMBs) / writePenalty;\n    // Estimate rebuild time: reading all data from surviving disks\n    const rebuildTimeHours = (usableCapacityGB / diskThroughputMBs) / 3600 * 1.1; // 10% overhead\n\n    return {\n      level, usableCapacityGB: Math.round(usableCapacityGB * 10) / 10,\n      capacityEfficiency: Math.round(capacityEfficiency * 10) / 10,\n      readIOPS: Math.round(readIOPS), writeIOPS: Math.round(writeIOPS),\n      readThroughputMBs: Math.round(readThroughputMBs),\n      writeThroughputMBs: Math.round(writeThroughputMBs),\n      maxFailures, rebuildTimeHours: Math.round(rebuildTimeHours * 10) / 10\n    };\n  }\n\n  compare(configs: RaidConfig[]): void {\n    console.log('='.repeat(120));\n    console.log('RAID Level Comparison');\n    console.log('='.repeat(120));\n    console.log(\n      'Level | Disks | Raw(TB) | Usable(TB) | Eff.% | Read IOPS | Write IOPS | Read(MB/s) | Write(MB/s) | MaxFail | Rebuild(h)'\n    );\n    console.log('-'.repeat(120));\n\n    for (const cfg of configs) {\n      const r = this.compute(cfg);\n      console.log(\n        `  ${String(r.level).padEnd(4)} | ${cfg.numDisks} | ${(cfg.numDisks * cfg.diskSizeGB / 1000).toFixed(1)}TB | ` +\n        `${(r.usableCapacityGB / 1000).toFixed(1)}TB | ${r.capacityEfficiency}% | ` +\n        `${r.readIOPS.toLocaleString()} | ${r.writeIOPS.toLocaleString()} | ` +\n        `${r.readThroughputMBs} | ${r.writeThroughputMBs} | ${r.maxFailures} | ${r.rebuildTimeHours}h`\n      );\n    }\n  }\n}\n\n// Example: 6 × 1TB SAS disks, each 180 IOPS, 200 MB/s sequential\nconst calc = new RaidCalculator();\nconst configs: RaidConfig[] = [\n  { level: 0, numDisks: 6, diskSizeGB: 1000, diskIOPS: 180, diskThroughputMBs: 200 },\n  { level: 1, numDisks: 6, diskSizeGB: 1000, diskIOPS: 180, diskThroughputMBs: 200 },\n  { level: 5, numDisks: 6, diskSizeGB: 1000, diskIOPS: 180, diskThroughputMBs: 200 },\n  { level: 6, numDisks: 6, diskSizeGB: 1000, diskIOPS: 180, diskThroughputMBs: 200 },\n  { level: 10, numDisks: 6, diskSizeGB: 1000, diskIOPS: 180, diskThroughputMBs: 200 },\n];\ncalc.compare(configs);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[TIP]\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SCAN (elevator)"
        }), " moves in one direction, services all requests, then reverses. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "C-SCAN"
        }), " provides uniform wait times by servicing only in one direction then jumping back."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[WARNING]\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SSTF"
        }), " may cause ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "starvation"
        }), " → distant cylinder requests may be delayed indefinitely if nearby requests keep arriving."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[NOTE]\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RAID 0"
        }), " improves performance with no redundancy. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RAID 1"
        }), " doubles reliability. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RAID 5"
        }), " balances performance, capacity, and reliability. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RAID 10"
        }), " combines both for production workloads."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Starvation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Throughput"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Uniformity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FCFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order of arrival"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSTF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closest request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One direction then reverse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C-SCAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One direction only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOOK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only to last request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Highest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C-LOOK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last request, one direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Seek Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time to move disk arm to desired cylinder"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rotational Latency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time for sector to rotate under head"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cylinder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same track across all platter surfaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SSTF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shortest Seek Time First (prone to starvation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SCAN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elevator algorithm (direction-based sweep)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C-SCAN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circular SCAN (uniform wait times)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LOOK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCAN without end-to-end travel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C-LOOK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circular version of LOOK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RAID"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple disks for perf and/or reliability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Swap Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk space for paging virtual memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "S.M.A.R.T."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-Monitoring Analysis and Reporting Technology"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MBR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master Boot Record (legacy partition table)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GPT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GUID Partition Table (modern, >2 TB)"
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
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Web Server"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Database"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Embedded"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Smartphone"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disk Sched."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elevator (deadline)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Noop (DB manages)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C-LOOK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CFQ/BFQ"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAID 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scratch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temp storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not production"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAID 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS partition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAID 5/6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bulk data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Media archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General storage"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which algorithm provides most uniform waiting time?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) SSTF"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) C-SCAN"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) FCFS"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) LOOK"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What does RAID stand for?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Redundant Array of Independent Disks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Random Access Integrated Drive"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Reliable Array of Internet Devices"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Rapid Access Information Disk"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which RAID level provides striping with parity?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) RAID 0"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) RAID 1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) RAID 5"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) RAID 10"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which scheduling algorithm can cause starvation?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) FCFS"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) SSTF"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) SCAN"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) C-SCAN"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the average rotational latency for a 7200 RPM drive?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 2 ms"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 4.17 ms"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 8.33 ms"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 5 ms"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which RAID level can survive two simultaneous disk failures?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) RAID 0"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) RAID 1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) RAID 5"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) RAID 6"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the RAID 5 write penalty in terms of I/Os?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 3"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 4"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 6"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which component dominates disk access time?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Transfer time"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Seek time"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Rotational latency"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Controller overhead"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the effective capacity of RAID 5 with 6 × 2 TB disks?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 12 TB"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 10 TB"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 8 TB"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 6 TB"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which I/O scheduler is best suited for NVMe SSDs?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) CFQ"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Deadline"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) NOOP (or None)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) BFQ"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the total access time for a 7200 RPM drive with 5 ms seek time and 4 KB transfer at 150 MB/s?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 9.17 ms"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 9.20 ms"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 9.24 ms"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 13.34 ms"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In GPT, where is the backup partition table stored?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) At the beginning of the disk"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) At the end of the disk"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) In the MBR"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) On a separate disk"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the purpose of Native Command Queuing (NCQ)?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Enable hot-swapping of drives"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Allow the drive to reorder commands for efficiency"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Provide encryption at the drive level"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Monitor drive health via S.M.A.R.T."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which term describes a group of sectors as the smallest file system allocation unit?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Track"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Cylinder"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Cluster (block)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Platter"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the RAID 6 write penalty?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 2 I/Os"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 4 I/Os"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 6 I/Os"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 8 I/Os"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-b, 2-a, 3-c, 4-b, 5-b, 6-d, 7-c, 8-b, 9-b, 10-c, 11-c, 12-b, 13-b, 14-c, 15-c"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disk access time = seek + rotation + transfer; seek dominates (~5–10 ms)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SCAN/C-SCAN and LOOK/C-LOOK reduce total arm movement compared to FCFS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C-SCAN and C-LOOK provide uniform waiting times; LOOK achieves lowest seek (208)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SSTF can cause ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "starvation"
        }), " → unsuitable for production kernels"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAID 0 (striping) improves performance; RAID 1 (mirroring) improves reliability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAID 5/6 use parity for space-efficient redundancy; RAID 10 combines both"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAID 5 has a 4 I/O write penalty; RAID 6 has 6 I/O write penalty"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bad blocks handled by sector sparing (remapping) or sector slipping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Swap space extends virtual memory onto disk; partition vs file tradeoffs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linux provides CFQ, Deadline, NOOP, BFQ, Kyber I/O schedulers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Windows uses Storport framework with multi-level I/O priority"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given a disk with 200 cylinders, compute total head movement for FCFS and SCAN for queue: [86, 147, 12, 95, 177, 23, 55, 104]. Head starts at 50 moving toward 0."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the three components of disk access time? Which is typically the largest?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe RAID 0, RAID 1, and RAID 5. Effective capacity with 4 × 1 TB disks for each?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a complete disk scheduling simulator supporting FCFS, SCAN, C-SCAN, LOOK, C-LOOK. Generate random queues and compare total seek, wait variance, max wait."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the RAID 5 write penalty. Why is RAID 5 write slower than a single disk? Use a 4-disk example."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare SSTF and SCAN. Under what conditions does SSTF starve a request? Propose a fix."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a benchmark measuring random vs sequential I/O using O_DIRECT. Test 512B, 4 KB, 64 KB, 1 MB. Report IOPS and throughput."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Research Linux CFQ and Deadline I/O schedulers. Write a test mixing random reads with sequential writes. Compare latency/throughput under each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a FUSE file system presenting a RAID 0 view of two directories. Stripe data across both in 4 KB chunks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute RAID reliability: For a 6-disk RAID 5 array with 6 TB disks, MTTF=800K hr, rebuild=16 hr, what is the probability of data loss within 5 years?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "IOPS vs throughput benchmark"
          }), ": Write a program that measures both IOPS (random 4 KB reads) and sequential throughput (1 MB reads) on a real disk. Use direct I/O (O_DIRECT on Linux) to bypass the page cache. Run 5 iterations and report min, max, avg, and standard deviation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Disk scheduling visualizer"
          }), ": Extend the disk scheduling simulator to generate Gantt-chart-style output showing when each request is serviced under FCFS, SSTF, SCAN, C-SCAN, LOOK, and C-LOOK. For a given queue, print a horizontal timeline showing service order and wait times."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SSTF starvation detector"
          }), ": Write a simulation that demonstrates SSTF starvation. Generate a continuous stream of requests in cylinders 0-50 while a single request sits at cylinder 199. Count how many local requests arrive before the distant request is serviced. Show that with SCAN, the distant request is always serviced within one sweep."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RAID reliability calculator"
          }), ": Extend the TypeScript RaidCalculator to compute probability of data loss over a given time period using the formula: P_loss = 1 - e^(-N * (N-1) * MTTF_disk * rebuild_time / MTTF²). Compare RAID 5, RAID 6, and RAID 10 for a 10-disk array over 5 years."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Swap sizing simulator"
          }), ": Write a program that monitors system memory usage over time (using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/proc/meminfo"
          }), " on Linux) and recommends swap size based on: peak memory pressure, hibernation requirements, and a configurable safety margin (default 20%). Test by running a memory-intensive workload and measuring peak swap usage."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Zoned storage simulator"
          }), ": Implement a simplified ZNS (Zoned Namespaces) SSD simulator in TypeScript. Create zones of 256 MB each. Each zone must be written sequentially and reset before rewriting. Simulate a workload of random writes and measure write amplification factor (WAF = total physical writes / total logical writes)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "NVMe vs HDD latency analyzer"
          }), ": Create a mathematical model comparing NVMe SSD latency vs HDD latency. For HDD: seek(5ms) + rotation(4.17ms) + transfer(0.04ms) = 9.2ms. For NVMe: queue_dispatch(10μs) + NAND_access(50μs) + transfer(5μs) = 65μs. Compute the ratio and show how queue depth affects performance for each."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "blk-mq simulator"
          }), ": Implement a simplified multi-queue block layer. Create N software submission queues (one per CPU core), each with a lockless ring buffer. A hardware dispatch queue pulls from software queues in round-robin. Measure throughput scaling from 1 to 32 cores vs a single-queue implementation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Power-aware disk scheduler"
          }), ": Design and implement a disk scheduler that batches idle periods to allow the disk to enter a low-power state. If the queue is empty for longer than ", (0,jsx_runtime.jsx)(_components.code, {
            children: "idle_threshold"
          }), " (e.g., 100ms), send the disk to sleep. Wake on next I/O. Measure power savings vs throughput impact using a simulation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SMR drive simulator"
          }), ": Implement a shingled magnetic recording (SMR) drive simulator where tracks overlap. Writes to a zone must be sequential. Random writes require a read-merge-write cycle. Track the number of drive-managed vs host-managed operations and compute the write amplification for a random workload."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "a1-sstf-starvation--full-worked-example",
      children: "A.1 SSTF Starvation → Full Worked Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider this dynamic scenario where requests arrive over time:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial state:"
      }), " Head at 50. Queue initially empty."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Arriving Request"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current Queue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SSTF Choice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SCAN Choice (toward 0)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "55"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[55]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "55 (dist 5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next in sweep (will get on way to 0 then reverse)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[53]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "53 (dist 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1000]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ignores"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "52"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[52, 1000]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "52 (dist 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "54"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[54, 1000]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "54 (dist 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "51"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[51, 1000]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "51 (dist 3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "t=6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1001, 1000]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001 (dist 950) vs 1000 (dist 949) → 1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SSTF result:"
      }), " Request 1000 keeps being deferred because closer requests keep arriving. It may never be serviced."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SCAN result:"
      }), " After servicing the 50–55 cluster on the initial sweep toward 0, the arm reaches 0, reverses, and sweeps upward past 50, 51, 52, 53, 54, 55, then continues to 1000. The distant request ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "is serviced"
      }), " on the return sweep → eventually."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "a2-head-movement-calculation-formula",
      children: "A.2 Head Movement Calculation Formula"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For any scheduling algorithm, the total seek distance is:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "total_seek = Σ(i=1 to n) |pos(i-1) - pos(i)|\n\nwhere:\n  pos(0) = initial head position\n  pos(i) = cylinder of the i-th serviced request\n  n = number of requests in queue\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For FCFS, pos(i) follows arrival order. For SCAN/LOOK, pos(i) follows the direction-based sweep order after sorting."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "a3-average-seek-time-approximation",
      children: "A.3 Average Seek Time Approximation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The average seek distance ≈ (1/3) × full stroke. If full stroke = 199 cylinders, avg seek ≈ 66 cylinders. This is used in analytical modeling when exact request distribution is unknown."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-b-disk-scheduling-with-multiple-disks-modern-context",
      children: "Appendix B: Disk Scheduling with Multiple Disks (Modern Context)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b1-numa-aware-scheduling",
      children: "B.1 NUMA-Aware Scheduling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern multi-socket servers may have storage controllers attached to specific NUMA nodes. Scheduling must consider:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which NUMA node owns the storage controller"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cost of cross-NUMA memory access for DMA buffers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pin I/O completion interrupts to the same NUMA node as the requesting process"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b2-multi-queue-block-layer-blk-mq",
      children: "B.2 Multi-Queue Block Layer (blk-mq)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Linux's multi-queue block layer (blk-mq) replaces the single-queue elevator for fast devices (NVMe, multi-core systems):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One software queue per CPU core (lockless submission)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One hardware dispatch queue per device"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scales to millions of IOPS on NVMe SSDs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schedulers (kyber, bfq, mq-deadline) plug into blk-mq"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b3-nvme-ssd-considerations",
      children: "B.3 NVMe SSD Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NVMe SSDs have no seek time → scheduling algorithms that minimize seek (SCAN, C-SCAN, LOOK) provide ZERO benefit:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Request reordering wastes CPU cycles needlessly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NOOP or FCFS is optimal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Key metrics: queue depth (typical 64K commands), parallel I/O via multiple queues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NUMA affinity and interrupt coalescing matter more than LBA ordering"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-c-additional-utility-functions",
      children: "Appendix C: Additional Utility Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c1-compute-seek-distance-in-python-all-algorithms",
      children: "C.1 Compute Seek Distance in Python (All Algorithms)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def compute_seek(path: list) -> int:\n    \"\"\"Compute total seek distance from a path of cylinder positions.\"\"\"\n    return sum(abs(path[i] - path[i-1]) for i in range(1, len(path)))\n\n# Benchmark\nqueue = [98, 183, 37, 122, 14, 124, 65, 67]\nhead = 53\n\n# FCFS path\nfcfs_path = [head] + queue\nprint(f\"FCFS seek: {compute_seek(fcfs_path)}\")  # 640\n\n# SSTF path (from trace)\nsstf_path = [53, 65, 67, 37, 14, 98, 122, 124, 183]\nprint(f\"SSTF seek: {compute_seek(sstf_path)}\")  # 236\n\n# SCAN path (toward 0)\nscan_path = [53, 37, 14, 0, 65, 67, 98, 122, 124, 183]\nprint(f\"SCAN seek: {compute_seek(scan_path)}\")  # 236\n\n# C-SCAN path\ncscan_path = [53, 37, 14, 0, 199, 183, 124, 122, 98, 67, 65]\nprint(f\"C-SCAN seek: {compute_seek(cscan_path)}\")  # 386\n\n# LOOK path\nlook_path = [53, 37, 14, 65, 67, 98, 122, 124, 183]\nprint(f\"LOOK seek: {compute_seek(look_path)}\")  # 208\n\n# C-LOOK path\nclook_path = [53, 37, 14, 183, 124, 122, 98, 67, 65]\nprint(f\"C-LOOK seek: {compute_seek(clook_path)}\")  # 326\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c2-random-queue-generator",
      children: "C.2 Random Queue Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\n\ndef generate_queue(size: int, max_cylinder: int = 199) -> list:\n    return [random.randint(0, max_cylinder) for _ in range(size)]\n\n# Example: generate 20 random requests\nqueue = generate_queue(20)\nhead = random.randint(0, 199)\nprint(f\"Queue: {queue}\")\nprint(f\"Head: {head}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c3-full-simulation-runner",
      children: "C.3 Full Simulation Runner"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\nfrom typing import Callable\n\ndef fcfs(req: list, head: int) -> int:\n    total, cur = 0, head\n    for r in req: total += abs(cur - r); cur = r\n    return total\n\ndef sstf(req: list, head: int) -> int:\n    total, cur = 0, head\n    pending = req[:]\n    while pending:\n        nearest = min(pending, key=lambda r: abs(cur - r))\n        total += abs(cur - nearest); cur = nearest\n        pending.remove(nearest)\n    return total\n\ndef scan(req: list, head: int, ds: int = 200, tz: bool = True) -> int:\n    total, cur = 0, head\n    s = sorted(req); L = [r for r in s if r < head]; R = [r for r in s if r >= head]\n    if tz:\n        for r in reversed(L): total += abs(cur - r); cur = r\n        if cur != 0: total += cur; cur = 0\n        for r in R: total += abs(cur - r); cur = r\n    return total\n\ndef cscan(req: list, head: int, ds: int = 200) -> int:\n    total, cur = 0, head\n    s = sorted(req); L = [r for r in s if r < head]; R = [r for r in s if r >= head]\n    for r in reversed(L): total += abs(cur - r); cur = r\n    if cur != 0: total += cur; cur = 0\n    total += (ds - 1); cur = ds - 1\n    for r in reversed(R): total += abs(cur - r); cur = r\n    return total\n\ndef look(req: list, head: int) -> int:\n    total, cur = 0, head\n    s = sorted(req); L = [r for r in s if r < head]; R = [r for r in s if r >= head]\n    for r in reversed(L): total += abs(cur - r); cur = r\n    for r in R: total += abs(cur - r); cur = r\n    return total\n\ndef clook(req: list, head: int) -> int:\n    total, cur = 0, head\n    s = sorted(req); L = [r for r in s if r < head]; R = [r for r in s if r >= head]\n    for r in reversed(L): total += abs(cur - r); cur = r\n    if R:\n        far = R[-1]; total += abs(cur - far); cur = far\n        for r in reversed(R[:-1]): total += abs(cur - r); cur = r\n    return total\n\nalgorithms = {\n    'FCFS': fcfs,\n    'SSTF': sstf,\n    'SCAN': scan,\n    'C-SCAN': lambda r, h: cscan(r, h, 200),\n    'LOOK': look,\n    'C-LOOK': clook,\n}\n\n# Simulate 100 random workloads and compare\nfor _ in range(5):\n    req = generate_queue(10)\n    head = random.randint(0, 199)\n    print(f\"\\nQueue: {req}, Head: {head}\")\n    results = {name: algo(req, head) for name, algo in algorithms.items()}\n    best = min(results, key=results.get)\n    for name, seek in sorted(results.items(), key=lambda x: x[1]):\n        print(f\"  {name:8s}: {seek:4d} cylinders {' ← best' if name == best else ''}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-d-additional-raid-details",
      children: "Appendix D: Additional RAID Details"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "d1-nested-raid-levels",
      children: "D.1 Nested RAID Levels"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Beyond the standard levels, nested RAID combines multiple levels:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Nested RAID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Composition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Min Disks"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RAID 01 (0+1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Striped mirrors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Similar to RAID 10 but less tolerant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RAID 10 (1+0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mirrored stripes (most common)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production databases, VMs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RAID 50 (5+0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Striped RAID 5 arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large-scale storage with parity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RAID 60 (6+0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Striped RAID 6 arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum reliability at scale"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RAID 01 vs RAID 10:"
      }), " RAID 10 can survive multiple failures (one per mirror). RAID 01 can only survive one failure total (if the wrong disk fails, the entire RAID 0 is lost)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "d2-raid-controller-cache-strategies",
      children: "D.2 RAID Controller Cache Strategies"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Risk"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write-Through"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write acknowledged only after written to disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safer; slower writes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write-Back"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write acknowledged when cached (flushed later)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster; data loss on power loss without BBU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write-Back with BBU"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Battery-backed cache; survives power loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best perf + safety"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write-Back with NVDIMM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-volatile DIMM; survives power loss without battery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern replacement for BBU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Read-Ahead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache predicts sequential access; prefetches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wastes bandwidth on random I/O"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "d3-raid-rebuild-time-factors",
      children: "D.3 RAID Rebuild Time Factors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rebuild time depends on:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disk capacity"
        }), ": Larger disks take longer (4 TB vs 24 TB)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disk speed"
        }), ": 7200 RPM vs 15000 RPM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Array load"
        }), ": Rebuild competes with production I/O"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RAID level"
        }), ": RAID 5/6 rebuild requires parity recomputation; RAID 1/10 is simple copy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Controller resources"
        }), ": Dedicated XOR engine vs CPU-driven"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Typical rebuild speeds: 50–200 MB/s. For a 4 TB disk: 4 TB / 100 MB/s ≈ 40,960 seconds ≈ 11.4 hours."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "d4-raid-vs-erasure-coding",
      children: "D.4 RAID vs Erasure Coding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For large-scale storage (>100 disks), erasure coding (Reed-Solomon, LRC) is preferred over RAID:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traditional RAID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Erasure Coding"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parity overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer (1 or 2 disks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable (e.g., 10+2 = 20%)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Failure tolerance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1–2 disks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable (any k of n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage efficiency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50–80% (RAID 5/6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70–90% (configurable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rebuild IO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full disk read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed across all disks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<24 disks per array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100+ disk object stores (Ceph, MinIO)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-e-advanced-topics",
      children: "Appendix E: Advanced Topics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e1-log-structured-file-systems",
      children: "E.1 Log-Structured File Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Log-structured file systems (LFS, F2FS) treat the entire disk as a circular log:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Writes are always sequential (append to log) → no seeks on write"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reads may require random access (lookup in map)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Garbage collection reclaims old versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modern implementations: F2FS (Flash-Friendly File System), ZFS (COW + log)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e2-zoned-storage-smr-zns",
      children: "E.2 Zoned Storage (SMR, ZNS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SMR (Shingled Magnetic Recording):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tracks overlap like roof shingles (higher density)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sequential write required within zones; random write requires read-merge-write"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Drive-managed (transparent to OS) or host-managed (OS must manage writes)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ZNS (Zoned Namespaces) SSDs:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NVMe SSDs organized into zones (typically 256 MB–1 GB each)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each zone must be written sequentially and erased before rewriting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces write amplification vs conventional SSDs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires zone-aware file systems (F2FS with ZNS support)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e3-persistent-memory-pmem",
      children: "E.3 Persistent Memory (PMEM)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Intel Optane DC Persistent Memory (discontinued) and CXL-attached memory:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Byte-addressable, near-DRAM speeds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Persist data across power cycles (like storage)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accessed via load/store instructions (no block I/O stack)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File systems: PMFS, NOVA, ext4-DAX, XFS-DAX"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eliminates page cache double-buffering"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-f-formulas-reference",
      children: "Appendix F: Formulas Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rotational latency (avg)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(60 / RPM) / 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(60/7200)/2 = 4.17 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transfer time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BlockSize / TransferRate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 KB / 150 MB/s = 0.027 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total access time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seek + Rotation + Transfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 + 4.17 + 0.027 = 9.2 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random IOPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000 / TotalAccessMs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000 / 9.2 ≈ 109 IOPS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Seek distance (FCFS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Σ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prev − next"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAID 5 capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(N−1) × disk_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 × 1 TB = 3 TB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAID 6 capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(N−2) × disk_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 × 1 TB = 2 TB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAID 10 capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(N/2) × disk_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 × 1 TB = 2 TB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAID 5 write penalty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 I/Os per logical write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 logical → 4 physical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAID 6 write penalty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 I/Os per logical write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 logical → 6 physical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MTTF RAID 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M / N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1M/4 = 250K hr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Average seek distance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1/3 × full stroke"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "199/3 ≈ 66"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-g-glossary-of-terms",
      children: "Appendix G: Glossary of Terms"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Full Form"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ATA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced Technology Attachment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel interface standard for connecting storage devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SATA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serial ATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serial replacement for ATA; 6 Gbps max"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SAS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serial Attached SCSI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise storage interface; supports higher reliability and dual-porting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NVMe"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-Volatile Memory Express"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol designed for SSDs over PCIe; low latency, high queue depth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LBA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical Block Address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear addressing scheme for disk sectors (replaces CHS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CHS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cylinder-Head-Sector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy addressing using physical geometry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RPM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Revolutions Per Minute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spin speed of disk platters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input/Output Operations Per Second"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance metric for random access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MTTF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mean Time To Failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average operational lifetime of a component"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MTBF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mean Time Between Failures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average time between failures (includes repair time)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "S.M.A.R.T."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-Monitoring Analysis and Reporting Technology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drive health monitoring system"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ECC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error-Correcting Code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redundant data that allows recovery of corrupted sectors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BBU"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Battery Backup Unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protects RAID cache contents during power loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NVDIMM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-Volatile DIMM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory that retains data after power loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DMA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct Memory Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allows hardware to transfer data without CPU involvement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TCQ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tagged Command Queuing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native SCSI command reordering at disk level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NCQ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native Command Queuing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SATA equivalent of TCQ"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "blk-mq"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block Multi-Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux multi-queue block layer for fast devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CFQ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Completely Fair Queueing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux I/O scheduler with per-process fairness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BFQ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Budget Fair Queueing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enhanced CFQ with better latency guarantees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SMR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shingled Magnetic Recording"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-density HDD technology with sequential write zones"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ZNS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zoned Namespaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NVMe SSD zone interface for reduced write amplification"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-h-quick-problem-solving",
      children: "Appendix H: Quick Problem Solving"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "h1-given-a-request-sequence-find-total-seek",
      children: "H.1 Given a request sequence, find total seek"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Queue [86, 147, 12, 95, 177, 23, 55, 104], head=50, disk 0–199. Compute FCFS."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "50 → 86 (36) → 147 (61) → 12 (135) → 95 (83) → 177 (82) → 23 (154) → 55 (32) → 104 (49)\nTotal = 36+61+135+83+82+154+32+49 = 632 cylinders\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "h2-given-head-movement-find-scheduling-algorithm",
      children: "H.2 Given head movement, find scheduling algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Head=50, requests [10, 80, 20, 90]. Path: 50 → 20 → 10 → 80 → 90. Total=120. Which algorithm?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " This is LOOK (going toward 0 first). The arm goes to 20 then 10 (last left), reverses to 80 then 90 (right). No travel to disk end 0 or 199. SCAN would have gone 50 → 20 → 10 → 0 → 80 → 90 (total 150). The difference of 30 is the unnecessary 10→0→80 trip."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "h3-disk-access-time-calculation",
      children: "H.3 Disk access time calculation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " 10000 RPM drive, avg seek=6 ms, transfer rate=200 MB/s, block=8 KB. Random vs sequential?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rotational latency = (60/10000)/2 = 3 ms\nTransfer = 8 KB / 200 MB/s = 0.04 ms\nRandom = 6 + 3 + 0.04 = 9.04 ms → 110 IOPS\nSequential (1 MB) = 3 + 0 + 5.12 ms = 8.12 ms → 123 MB/s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "h4-raid-capacity-calculation",
      children: "H.4 RAID capacity calculation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " 6 × 2 TB disks in RAID 5 vs RAID 10 vs RAID 6."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RAID 5: (6-1)/6 × 12 TB = 10 TB usable (83%)\nRAID 6: (6-2)/6 × 12 TB = 8 TB usable (67%)\nRAID 10: 6/2 × 2 TB = 6 TB usable (50%)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "h5-swap-sizing-decision",
      children: "H.5 Swap sizing decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " 32 GB RAM Linux workstation used for development. How much swap?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " 4–8 GB swap. Enough for emergency headroom and hibernation. The system should rarely swap; if swap usage exceeds 1 GB regularly, add more RAM."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-i-key-takeaways-by-topic",
      children: "Appendix I: Key Takeaways by Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "disk-structure",
      children: "Disk Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Seek time dominates access latency (70–80% of total)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sequential I/O is ~1000× more efficient than random I/O on HDDs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cylinder = same track across all platters (move head once, access all surfaces)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "disk-scheduling",
      children: "Disk Scheduling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FCFS: Simple but worst seek; no starvation"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SSTF: Better seek but dangerous → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "starvation"
        }), " makes it unsuitable for production"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SCAN: Direction-based sweep; good seek; non-uniform wait"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C-SCAN: Uniform wait at cost of extra jump (seek 386 vs 208)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["LOOK: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Best seek"
        }), " (208); no unnecessary end-to-end travel"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C-LOOK: Circular variant; between C-SCAN and LOOK in performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For SSDs: NOOP or FCFS → mechanical seek doesn't exist"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "disk-management",
      children: "Disk Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MBR: Legacy, ≤2 TB, ≤4 partitions, no redundancy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPT: Modern, >2 TB, 128+ partitions, backup at disk end"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bad blocks: S.M.A.R.T. → increasing reallocations = drive failing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "raid",
      children: "RAID"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAID 0: Speed, no safety (scratch only)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAID 1: Safety, 50% capacity (OS, logs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAID 5: Balance, 4 I/O write penalty (bulk storage)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAID 6: Dual protection, 6 I/O write penalty (large arrays)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAID 10: Speed + safety (production databases → most common enterprise choice)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "swap-space",
      children: "Swap Space"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partition: Faster, fixed size, needed for hibernation on many OS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File: Flexible, resizable, slightly slower"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rule: If you're using swap regularly, add more RAM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Swappiness (Linux): Default 60; lower = less aggressive swapping"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-systems",
      children: "Real Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linux: CFQ (fairness), Deadline (predictable latency), NOOP (SSD/fast devices)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Windows: Storport driver framework with I/O priority tiers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "blk-mq: Modern Linux multi-queue for NVMe (>1M IOPS)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAID controllers: Write-back with BBU/NVDIMM for best performance"
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