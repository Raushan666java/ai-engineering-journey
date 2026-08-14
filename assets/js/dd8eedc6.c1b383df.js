"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[88842],{

/***/ 55190
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_operating_systems_11_file_system_impl_md_dd8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-operating-systems-11-file-system-impl-md-dd8.json
const site_docs_courses_operating_systems_11_file_system_impl_md_dd8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/operating-systems/11-file-system-impl","title":"Chapter 11: File System Implementation","description":"---","source":"@site/docs/courses/operating-systems/11-file-system-impl.md","sourceDirName":"courses/operating-systems","slug":"/operating-systems/11-file-system-impl","permalink":"/ai-engineering-journey/operating-systems/11-file-system-impl","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"id":"11-file-system-impl","slug":"/operating-systems/11-file-system-impl","title":"Chapter 11: File System Implementation","sidebar_label":"Chapter 11: File System Implementation","sidebar_position":11},"sidebar":"course-operating-systems","previous":{"title":"Chapter 10: File Systems","permalink":"/ai-engineering-journey/operating-systems/10-file-systems"},"next":{"title":"Chapter 12: Secondary Storage","permalink":"/ai-engineering-journey/operating-systems/12-secondary-storage"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/operating-systems/11-file-system-impl.md


const frontMatter = {
	id: '11-file-system-impl',
	slug: '/operating-systems/11-file-system-impl',
	title: 'Chapter 11: File System Implementation',
	sidebar_label: 'Chapter 11: File System Implementation',
	sidebar_position: 11
};
const contentTitle = 'Chapter 11: File System Implementation';

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
  "value": "1. File System Layers",
  "id": "1-file-system-layers",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "Layered Architecture",
  "id": "layered-architecture",
  "level": 3
}, {
  "value": "Numbered Steps — Read Operation",
  "id": "numbered-steps--read-operation",
  "level": 3
}, {
  "value": "Pseudocode — Layered Read",
  "id": "pseudocode--layered-read",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "C++ Implementation — FS Layer Simulation",
  "id": "c-implementation--fs-layer-simulation",
  "level": 3
}, {
  "value": "Python Implementation — FS Layer Simulation",
  "id": "python-implementation--fs-layer-simulation",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages of Layered Design",
  "id": "advantages--disadvantages-of-layered-design",
  "level": 3
}, {
  "value": "Edge Cases in Layered FS",
  "id": "edge-cases-in-layered-fs",
  "level": 3
}, {
  "value": "2. On-Disk Structures",
  "id": "2-on-disk-structures",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 3
}, {
  "value": "2.1 Boot Block",
  "id": "21-boot-block",
  "level": 3
}, {
  "value": "2.2 Superblock",
  "id": "22-superblock",
  "level": 3
}, {
  "value": "Superblock Fields",
  "id": "superblock-fields",
  "level": 4
}, {
  "value": "2.3 Inode Table",
  "id": "23-inode-table",
  "level": 3
}, {
  "value": "2.4 Data Blocks",
  "id": "24-data-blocks",
  "level": 3
}, {
  "value": "Numbered Steps — Mount a File System",
  "id": "numbered-steps--mount-a-file-system",
  "level": 3
}, {
  "value": "Pseudocode — Superblock Parse",
  "id": "pseudocode--superblock-parse",
  "level": 3
}, {
  "value": "Full Dry Run — Superblock Contents Trace",
  "id": "full-dry-run--superblock-contents-trace",
  "level": 3
}, {
  "value": "C++ Implementation — Superblock Simulator",
  "id": "c-implementation--superblock-simulator",
  "level": 3
}, {
  "value": "Python Implementation — Superblock Simulator",
  "id": "python-implementation--superblock-simulator",
  "level": 3
}, {
  "value": "Complexity Analysis — On-Disk Structures",
  "id": "complexity-analysis--on-disk-structures",
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
  "value": "3. Inode — Detailed Structure",
  "id": "3-inode--detailed-structure",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 3
}, {
  "value": "Inode Fields (ext4)",
  "id": "inode-fields-ext4",
  "level": 3
}, {
  "value": "Multi-Level Index Scheme",
  "id": "multi-level-index-scheme",
  "level": 3
}, {
  "value": "Maximum File Size Calculation (4 KB blocks, 4-byte pointers)",
  "id": "maximum-file-size-calculation-4-kb-blocks-4-byte-pointers",
  "level": 4
}, {
  "value": "Numbered Steps — Inode Lookup for Read",
  "id": "numbered-steps--inode-lookup-for-read",
  "level": 3
}, {
  "value": "Pseudocode — File Read via Inode Pointers",
  "id": "pseudocode--file-read-via-inode-pointers",
  "level": 3
}, {
  "value": "Dry Run — Inode Lookup for a 100 MB File",
  "id": "dry-run--inode-lookup-for-a-100-mb-file",
  "level": 3
}, {
  "value": "C++ Implementation — Inode Manager",
  "id": "c-implementation--inode-manager",
  "level": 3
}, {
  "value": "Python Implementation — Inode Manager",
  "id": "python-implementation--inode-manager",
  "level": 3
}, {
  "value": "Complexity Analysis — Inode Operations",
  "id": "complexity-analysis--inode-operations",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages of Inode Design",
  "id": "advantages--disadvantages-of-inode-design",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 3
}, {
  "value": "4. Directory Implementation",
  "id": "4-directory-implementation",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 3
}, {
  "value": "4.1 Linear List Implementation",
  "id": "41-linear-list-implementation",
  "level": 3
}, {
  "value": "Operations on Linear List",
  "id": "operations-on-linear-list",
  "level": 4
}, {
  "value": "Pseudocode — Linear Directory Lookup",
  "id": "pseudocode--linear-directory-lookup",
  "level": 4
}, {
  "value": "4.2 Hash Table Implementation",
  "id": "42-hash-table-implementation",
  "level": 3
}, {
  "value": "Pseudocode — Hash Directory Lookup",
  "id": "pseudocode--hash-directory-lookup",
  "level": 4
}, {
  "value": "Dry Run — Linear Lookup vs Hash Lookup",
  "id": "dry-run--linear-lookup-vs-hash-lookup",
  "level": 3
}, {
  "value": "C++ Implementation — Directory",
  "id": "c-implementation--directory",
  "level": 3
}, {
  "value": "Python Implementation — Directory",
  "id": "python-implementation--directory",
  "level": 3
}, {
  "value": "Directory Comparison",
  "id": "directory-comparison",
  "level": 3
}, {
  "value": "Edge Cases in Directory Implementation",
  "id": "edge-cases-in-directory-implementation",
  "level": 3
}, {
  "value": "5. Allocation Methods",
  "id": "5-allocation-methods",
  "level": 2
}, {
  "value": "5.1 Contiguous Allocation",
  "id": "51-contiguous-allocation",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 3
}, {
  "value": "How It Works",
  "id": "how-it-works",
  "level": 3
}, {
  "value": "Directory Entry (Contiguous)",
  "id": "directory-entry-contiguous",
  "level": 3
}, {
  "value": "Numbered Steps — Write with Contiguous Allocation",
  "id": "numbered-steps--write-with-contiguous-allocation",
  "level": 3
}, {
  "value": "Pseudocode — Contiguous Allocation",
  "id": "pseudocode--contiguous-allocation",
  "level": 3
}, {
  "value": "Full Dry Run — External Fragmentation",
  "id": "full-dry-run--external-fragmentation",
  "level": 3
}, {
  "value": "C++ Implementation — Contiguous Allocation",
  "id": "c-implementation--contiguous-allocation",
  "level": 3
}, {
  "value": "Python Implementation — Contiguous Allocation",
  "id": "python-implementation--contiguous-allocation",
  "level": 3
}, {
  "value": "Complexity Analysis — Contiguous Allocation",
  "id": "complexity-analysis--contiguous-allocation",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-1",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 3
}, {
  "value": "5.2 Linked Allocation",
  "id": "52-linked-allocation",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-5",
  "level": 3
}, {
  "value": "How It Works",
  "id": "how-it-works-1",
  "level": 3
}, {
  "value": "Numbered Steps — Read with Linked Allocation",
  "id": "numbered-steps--read-with-linked-allocation",
  "level": 3
}, {
  "value": "Pseudocode — Linked Allocation",
  "id": "pseudocode--linked-allocation",
  "level": 3
}, {
  "value": "Full Dry Run — Linked Allocation Walk",
  "id": "full-dry-run--linked-allocation-walk",
  "level": 3
}, {
  "value": "File Allocation Table (FAT)",
  "id": "file-allocation-table-fat",
  "level": 3
}, {
  "value": "FAT Variants",
  "id": "fat-variants",
  "level": 4
}, {
  "value": "FAT Walk for Direct Access (Simulated)",
  "id": "fat-walk-for-direct-access-simulated",
  "level": 4
}, {
  "value": "C++ Implementation — Linked Allocation &amp; FAT",
  "id": "c-implementation--linked-allocation--fat",
  "level": 3
}, {
  "value": "Python Implementation — Linked Allocation &amp; FAT",
  "id": "python-implementation--linked-allocation--fat",
  "level": 3
}, {
  "value": "Complexity Analysis — Linked Allocation",
  "id": "complexity-analysis--linked-allocation",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-2",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 3
}, {
  "value": "5.3 Indexed Allocation",
  "id": "53-indexed-allocation",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-6",
  "level": 3
}, {
  "value": "How It Works",
  "id": "how-it-works-2",
  "level": 3
}, {
  "value": "Numbered Steps — Read with Indexed Allocation",
  "id": "numbered-steps--read-with-indexed-allocation",
  "level": 3
}, {
  "value": "Pseudocode — Indexed Allocation",
  "id": "pseudocode--indexed-allocation",
  "level": 3
}, {
  "value": "Full Dry Run — Small File (1 block)",
  "id": "full-dry-run--small-file-1-block",
  "level": 3
}, {
  "value": "Full Dry Run — Medium File (100 blocks)",
  "id": "full-dry-run--medium-file-100-blocks",
  "level": 3
}, {
  "value": "Full Dry Run — Large File (2000 blocks)",
  "id": "full-dry-run--large-file-2000-blocks",
  "level": 3
}, {
  "value": "5.4 Indexed Variants",
  "id": "54-indexed-variants",
  "level": 3
}, {
  "value": "5.4.1 Linked Indexed Allocation",
  "id": "541-linked-indexed-allocation",
  "level": 4
}, {
  "value": "5.4.2 Multilevel Indexed Allocation",
  "id": "542-multilevel-indexed-allocation",
  "level": 4
}, {
  "value": "5.4.3 Combined Scheme (Unix Inode / ext4 Extents)",
  "id": "543-combined-scheme-unix-inode--ext4-extents",
  "level": 4
}, {
  "value": "C++ Implementation — Indexed Allocation",
  "id": "c-implementation--indexed-allocation",
  "level": 3
}, {
  "value": "Python Implementation — Indexed Allocation",
  "id": "python-implementation--indexed-allocation",
  "level": 3
}, {
  "value": "Complexity Analysis — Indexed Allocation",
  "id": "complexity-analysis--indexed-allocation",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-3",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 3
}, {
  "value": "6. Allocation Methods Comparison",
  "id": "6-allocation-methods-comparison",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-7",
  "level": 3
}, {
  "value": "Full Comparison Table",
  "id": "full-comparison-table",
  "level": 3
}, {
  "value": "When to Use Which",
  "id": "when-to-use-which",
  "level": 3
}, {
  "value": "7. Free Space Management",
  "id": "7-free-space-management",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-8",
  "level": 3
}, {
  "value": "7.1 Bit Vector (Bitmap)",
  "id": "71-bit-vector-bitmap",
  "level": 3
}, {
  "value": "Memory Calculation",
  "id": "memory-calculation",
  "level": 4
}, {
  "value": "Pseudocode — Bitmap Operations",
  "id": "pseudocode--bitmap-operations",
  "level": 4
}, {
  "value": "7.2 Linked List (Free List)",
  "id": "72-linked-list-free-list",
  "level": 3
}, {
  "value": "Pseudocode — Free List",
  "id": "pseudocode--free-list",
  "level": 4
}, {
  "value": "7.3 Grouping",
  "id": "73-grouping",
  "level": 3
}, {
  "value": "7.4 Counting",
  "id": "74-counting",
  "level": 3
}, {
  "value": "Pseudocode — Counting",
  "id": "pseudocode--counting",
  "level": 4
}, {
  "value": "C++ Implementation — Four Free Space Managers",
  "id": "c-implementation--four-free-space-managers",
  "level": 3
}, {
  "value": "Python Implementation — Four Free Space Managers",
  "id": "python-implementation--four-free-space-managers",
  "level": 3
}, {
  "value": "Free Space Management Comparison",
  "id": "free-space-management-comparison",
  "level": 3
}, {
  "value": "Complexity Analysis — Why",
  "id": "complexity-analysis--why",
  "level": 3
}, {
  "value": "Edge Cases — Free Space",
  "id": "edge-cases--free-space",
  "level": 3
}, {
  "value": "8. Interview Corner",
  "id": "8-interview-corner",
  "level": 2
}, {
  "value": "Q1: FAT vs Inode — Key Differences",
  "id": "q1-fat-vs-inode--key-differences",
  "level": 3
}, {
  "value": "Q2: Block Size vs Performance — Tradeoff",
  "id": "q2-block-size-vs-performance--tradeoff",
  "level": 3
}, {
  "value": "Q3: File System Overhead Breakdown",
  "id": "q3-file-system-overhead-breakdown",
  "level": 3
}, {
  "value": "Q4: How Does <code>stat</code> Work?",
  "id": "q4-how-does-stat-work",
  "level": 3
}, {
  "value": "Q5: What Happens When You <code>rm</code> a File?",
  "id": "q5-what-happens-when-you-rm-a-file",
  "level": 3
}, {
  "value": "Q6: Sparse Files",
  "id": "q6-sparse-files",
  "level": 3
}, {
  "value": "Q7: Why Does <code>df</code> Show Different Values Than Adding All Files?",
  "id": "q7-why-does-df-show-different-values-than-adding-all-files",
  "level": 3
}, {
  "value": "9. Applications in Real Systems",
  "id": "9-applications-in-real-systems",
  "level": 2
}, {
  "value": "9.1 ext4 (Linux)",
  "id": "91-ext4-linux",
  "level": 3
}, {
  "value": "9.2 NTFS (Windows)",
  "id": "92-ntfs-windows",
  "level": 3
}, {
  "value": "9.3 FAT32 (Legacy Windows/Removable)",
  "id": "93-fat32-legacy-windowsremovable",
  "level": 3
}, {
  "value": "10. File System Performance",
  "id": "10-file-system-performance",
  "level": 2
}, {
  "value": "Caching (Buffer Cache)",
  "id": "caching-buffer-cache",
  "level": 3
}, {
  "value": "Read-Ahead",
  "id": "read-ahead",
  "level": 3
}, {
  "value": "Journaling",
  "id": "journaling",
  "level": 3
}, {
  "value": "11. File System Types Comparison",
  "id": "11-file-system-types-comparison",
  "level": 2
}, {
  "value": "12. Examples",
  "id": "12-examples",
  "level": 2
}, {
  "value": "Example 1: Simulating a Simple File System",
  "id": "example-1-simulating-a-simple-file-system",
  "level": 3
}, {
  "value": "Example 2: Linked Allocation Walk",
  "id": "example-2-linked-allocation-walk",
  "level": 3
}, {
  "value": "Example 3: Ext4 Inode Exploration",
  "id": "example-3-ext4-inode-exploration",
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
  "value": "TypeScript Implementation — Journaling File System Simulator",
  "id": "typescript-implementation--journaling-file-system-simulator",
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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "chapter-11-file-system-implementation",
        children: "Chapter 11: File System Implementation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["<< ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/operating-systems/10-file-systems",
          children: "File Systems"
        })]
      }), " | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/operating-systems/12-secondary-storage",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next: Secondary Storage"
        })
      }), " >>"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the on-disk and in-memory structures of a file system"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare contiguous, linked, and indexed file allocation strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement free-space management using bitmaps and linked lists"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the role of the superblock, inodes, and directory entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze file system performance, including the impact of fragmentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand journaling and write-ahead logging for crash recovery"
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
        href: "../../assets/images/lessons/operating-systems/11-file-system-impl/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/operating-systems/11-file-system-impl/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/operating-systems/11-file-system-impl/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/operating-systems/11-file-system-impl/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/operating-systems/11-file-system-impl/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/operating-systems/11-file-system-impl/visual-explanation.png",
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
              children: "File System Layers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application -> logical FS -> file-org module -> I/O control -> devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "On-Disk Structures"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boot block, superblock, free-space mgmt, inodes, file data blocks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Directory Impl."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear list (simple, slow) vs hash table (fast, complex)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Contiguous"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast sequential/direct access; severe external fragmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linked"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No fragmentation; only sequential access (FAT helps)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Indexed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct access via index block; good for large files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Free-Space Mgmt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bit vector, linked list, group counting"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.div, {
      className: "mermaid",
      children: "\nflowchart LR\n    A[File System Layers] --> B[On-Disk Structures]\n    B --> C[Directory Implementation]\n    C --> D[Allocation Methods]\n    D --> E[Contiguous / Linked / Indexed]\n    E --> F[Free-Space Management]\n    F --> G[Efficiency & Performance]\n    G --> H[Summary]\n"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/operating-systems/11-file-system-impl.png",
        alt: "File System Implementation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-file-system-layers",
      children: "1. File System Layers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of a restaurant kitchen. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "application"
      }), " is the customer ordering food. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "logical file system"
      }), " is the chef deciding what to cook. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "file-organization module"
      }), " is the sous-chef who knows where each ingredient is stored. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "I/O control"
      }), " is the line cook who actually reaches into the fridge. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "device"
      }), " is the fridge itself. Each layer abstracts the one below so the customer never thinks about fridge mechanics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "layered-architecture",
      children: "Layered Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Application (open, read, write)\n       |\nLogical File System (manages metadata, directory structure)\n       |\nFile-Organization Module (maps logical blocks to physical blocks)\n       |\nI/O Control (device drivers, interrupts)\n       |\nDevices (disk, SSD, NVM)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps--read-operation",
      children: "Numbered Steps — Read Operation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Application calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "read(fd, buf, 512)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The logical file system looks up the file descriptor in the per-process open-file table, finds the inode number."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The file-organization module consults the inode's block pointers to determine which physical disk block(s) hold the requested data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the block is not in the page cache, a request is sent down to the I/O control layer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The device driver translates the logical block number into a disk address (cylinder, head, sector for HDD or LBA for SSD)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The disk hardware reads the sector(s) into a DMA buffer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data is copied from the DMA buffer through the page cache to the user-supplied buffer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The read returns the number of bytes transferred."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode--layered-read",
      children: "Pseudocode — Layered Read"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function read_file(fd, buf, count):\n    process_fd_table = get_current_process_fd_table()\n    sys_fd_entry = process_fd_table[fd]\n    inode_num = sys_fd_entry.inode_num\n    inode = inode_table[inode_num]\n    block_list = get_block_list(inode, sys_fd_entry.offset, count)\n    for each block_num in block_list:\n        if block_num in page_cache:\n            copy_from_page_cache(block_num, buf)\n        else:\n            phys_addr = logical_to_physical(block_num)\n            issue_disk_read(phys_addr, block_buffer)\n            page_cache_add(block_num, block_buffer)\n            copy_from_page_cache(block_num, buf)\n        advance(buf, block_size)\n    return bytes_read\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
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
            children: "Layered read (no cache)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct inode-to-block mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Layered read (cached)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) hash lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page cache hit is constant-time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Layered write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same mapping path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead per layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L) where L=3-5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function call + context switch per boundary"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(1) per block"
      }), ": The inode provides direct or indirect pointers that are computed in constant time (with at most 3 indirection levels for ext4). Each layer adds a fixed overhead but does not change asymptotic complexity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation--fs-layer-simulation",
      children: "C++ Implementation — FS Layer Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <unordered_map>\n#include <cstring>\n\nconst int BLOCK_SIZE = 4096;\nconst int NUM_BLOCKS = 1024;\n\nclass BlockDevice {\n    char disk[NUM_BLOCKS][BLOCK_SIZE];\npublic:\n    void read_block(int block_num, char* buffer) {\n        std::memcpy(buffer, disk[block_num], BLOCK_SIZE);\n    }\n    void write_block(int block_num, const char* data) {\n        std::memcpy(disk[block_num], data, BLOCK_SIZE);\n    }\n};\n\nclass PageCache {\n    std::unordered_map<int, char*> cache;\npublic:\n    bool is_cached(int block_num) {\n        return cache.find(block_num) != cache.end();\n    }\n    char* get(int block_num) {\n        return cache[block_num];\n    }\n    void put(int block_num, const char* data) {\n        char* copy = new char[BLOCK_SIZE];\n        std::memcpy(copy, data, BLOCK_SIZE);\n        cache[block_num] = copy;\n    }\n    ~PageCache() {\n        for (auto& [_, ptr] : cache) delete[] ptr;\n    }\n};\n\nclass IOController {\n    BlockDevice device;\n    PageCache cache;\npublic:\n    void read(int block_num, char* buffer) {\n        if (cache.is_cached(block_num)) {\n            std::memcpy(buffer, cache.get(block_num), BLOCK_SIZE);\n            std::cout << \"  [Cache HIT] block \" << block_num << \"\\n\";\n            return;\n        }\n        std::cout << \"  [Cache MISS] reading block \" << block_num << \" from disk\\n\";\n        device.read_block(block_num, buffer);\n        cache.put(block_num, buffer);\n    }\n    void write(int block_num, const char* data) {\n        device.write_block(block_num, data);\n        cache.put(block_num, data);\n    }\n};\n\nint main() {\n    IOController io;\n    char buf[BLOCK_SIZE] = {};\n    const char* msg = \"Hello from FS layers!\";\n    \n    io.write(5, msg);\n    io.read(5, buf);\n    std::cout << \"Read: \" << buf << \"\\n\";\n    io.read(5, buf); // second read hits cache\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation--fs-layer-simulation",
      children: "Python Implementation — FS Layer Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import os\n\nBLOCK_SIZE = 4096\n\nclass BlockDevice:\n    def __init__(self, num_blocks=1024):\n        self.disk = bytearray(num_blocks * BLOCK_SIZE)\n    def read_block(self, block_num):\n        start = block_num * BLOCK_SIZE\n        return bytes(self.disk[start:start + BLOCK_SIZE])\n    def write_block(self, block_num, data):\n        start = block_num * BLOCK_SIZE\n        data_bytes = data if isinstance(data, bytes) else data.encode()\n        self.disk[start:start + len(data_bytes)] = data_bytes\n        return len(data_bytes)\n\nclass PageCache:\n    def __init__(self):\n        self.cache = {}\n    def is_cached(self, block_num):\n        return block_num in self.cache\n    def get(self, block_num):\n        return self.cache[block_num]\n    def put(self, block_num, data):\n        self.cache[block_num] = bytearray(data)\n\nclass IOController:\n    def __init__(self, device):\n        self.device = device\n        self.cache = PageCache()\n    def read(self, block_num):\n        if self.cache.is_cached(block_num):\n            print(f\"  [Cache HIT] block {block_num}\")\n            return bytes(self.cache.get(block_num))\n        print(f\"  [Cache MISS] reading block {block_num} from disk\")\n        data = self.device.read_block(block_num)\n        self.cache.put(block_num, data)\n        return data\n    def write(self, block_num, data):\n        self.device.write_block(block_num, data)\n        self.cache.put(block_num, data)\n\nif __name__ == \"__main__\":\n    dev = BlockDevice()\n    io = IOController(dev)\n    io.write(5, \"FS Layers Demo!\")\n    print(io.read(5).rstrip(b'\\x00').decode())\n    print(io.read(5).rstrip(b'\\x00').decode())  # cached\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-of-layered-design",
      children: "Advantages & Disadvantages of Layered Design"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each layer hides complexity from the one above"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-layer optimizations are hard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Portability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only I/O control changes per device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance overhead per boundary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maintainability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layers can be swapped independently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging spans multiple layers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modularity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New file systems plug into same interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redundant checks across layers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upgrade one layer without touching others"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layering violations when performance matters"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-layered-fs",
      children: "Edge Cases in Layered FS"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Page cache eviction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LRU replacement may evict dirty blocks, forcing writeback before read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disk full during write"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IO controller gets -1 from device; logical FS must handle gracefully"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Device removed mid-operation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Driver returns error that propagates up all layers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrent access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Locking must coordinate across layers (inode lock + page cache lock)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Direct I/O bypass"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some apps bypass cache for raw device access, breaking the layering model"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-on-disk-structures",
      children: "2. On-Disk Structures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An office building. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "boot block"
      }), " is the security guard's initial checklist — get the building running. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "superblock"
      }), " is the building directory showing total floors, rooms per floor, and which rooms are occupied. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "inode table"
      }), " is the filing cabinet where each file folder (inode) stores metadata about a document. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "data blocks"
      }), " are the actual documents in the filing cabinet. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "directory"
      }), " is the index card catalog that maps document names to folder IDs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-boot-block",
      children: "2.1 Boot Block"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "boot block"
      }), " is the first sector (sector 0) of a partition. It contains code that the BIOS or UEFI loads into memory to bootstrap the operating system."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Boot Block Layout (512 bytes typical):\n┌──────────┬─────────────────────────────────────┐\n│ Offset   │ Content                              │\n├──────────┼─────────────────────────────────────┤\n│ 0-445    │ Bootstrap machine code               │\n│ 446-509  │ Partition table (4 × 16-byte entries)│\n│ 510-511  │ Boot signature (0x55AA)              │\n└──────────┴─────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-superblock",
      children: "2.2 Superblock"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "superblock"
      }), " is the metadata of the file system itself. It is replicated across the disk for redundancy (ext4 stores it at offset 1024, with backups in every block group)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "superblock-fields",
      children: "Superblock Fields"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "s_inodes_count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total inode count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "s_blocks_count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total block count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "s_free_blocks_count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free block count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "s_free_inodes_count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free inode count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "s_log_block_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block size = 1024 << s_log_block_size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "s_mtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last mount time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "s_magic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Magic signature (0xEF53 for ext4)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "s_state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mount state (clean, errors, etc.)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "s_lastcheck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last fsck time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "s_checkinterval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32-bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max time between fscks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-inode-table",
      children: "2.3 Inode Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "inode table"
      }), " is a contiguous array of inodes on disk. Each file/directory has exactly one inode. The inode number is an index into this table."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-data-blocks",
      children: "2.4 Data Blocks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data blocks occupy the bulk of the disk. They store:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File contents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Directory entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Indirect block pointers (for indexed allocation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Free list pointers (for linked allocation)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps--mount-a-file-system",
      children: "Numbered Steps — Mount a File System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The OS reads the boot block from sector 0 to determine if the partition is bootable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The OS reads the superblock (at offset 1024 for ext4) into memory."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The superblock is validated (magic number, checksum, state flag)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In-memory data structures are initialized: mount table entry, buffer cache."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The root directory inode (always inode 2 in ext4) is loaded into the in-memory inode table."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The file system is marked as mounted and ready for use."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode--superblock-parse",
      children: "Pseudocode — Superblock Parse"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function mount_fs(device):\n    boot_block = read_sector(device, 0)\n    if is_bootable(boot_block):\n        load_boot_loader(boot_block)\n    superblock = read_block(device, 1)  // offset 1024\n    if superblock.magic != EXT4_MAGIC:\n        return ERROR_INVALID_FS\n    if superblock.state != FS_CLEAN:\n        run_fsck(device)\n    init_mount_table(device, superblock)\n    root_inode = load_inode(2)  // ext4 root is always inode 2\n    set_current_directory(root_inode)\n    return SUCCESS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "full-dry-run--superblock-contents-trace",
      children: "Full Dry Run — Superblock Contents Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assume a 4 MB ext4 partition with 4 KB blocks."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "s_inodes_count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Room for 1024 inodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "s_blocks_count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024 blocks × 4 KB = 4 MB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "s_free_blocks_count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19 blocks used by metadata"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "s_free_inodes_count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14 inodes used by metadata"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "s_log_block_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block size = 1024 << 2 = 4096 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "s_mtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1700000000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last mounted Tue Nov 14 2023"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "s_magic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xEF53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Valid ext4 signature"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "s_state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean, unmounted properly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "s_lastcheck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1690000000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last fsck was months ago"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "s_checkinterval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15552000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "180 days between forced checks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation--superblock-simulator",
      children: "C++ Implementation — Superblock Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstring>\n\n#pragma pack(push, 1)\nstruct Superblock {\n    uint32_t inodes_count;\n    uint32_t blocks_count;\n    uint32_t free_blocks_count;\n    uint32_t free_inodes_count;\n    uint32_t log_block_size;\n    uint32_t mtime;\n    uint16_t magic;\n    uint16_t state;\n    uint32_t lastcheck;\n    uint32_t checkinterval;\n};\n#pragma pack(pop)\n\nclass BlockDevice {\n    char* disk;\n    int num_blocks;\n    int block_size;\npublic:\n    BlockDevice(int n, int bs) : num_blocks(n), block_size(bs) {\n        disk = new char[n * bs];\n        std::memset(disk, 0, n * bs);\n    }\n    void write_block(int n, const char* data) {\n        std::memcpy(disk + n * block_size, data, block_size);\n    }\n    void read_block(int n, char* data) {\n        std::memcpy(data, disk + n * block_size, block_size);\n    }\n    ~BlockDevice() { delete[] disk; }\n};\n\nclass SimpleFS {\n    BlockDevice* dev;\n    Superblock sb;\n    static const int BLOCK_SIZE = 4096;\npublic:\n    SimpleFS(BlockDevice* d, int num_blocks, int num_inodes) : dev(d) {\n        sb.inodes_count = num_inodes;\n        sb.blocks_count = num_blocks;\n        sb.free_blocks_count = num_blocks;\n        sb.free_inodes_count = num_inodes;\n        sb.log_block_size = 2;  // 4 KB\n        sb.magic = 0xEF53;\n        sb.state = 1;\n        sb.lastcheck = 1700000000;\n        sb.checkinterval = 15552000;\n        write_superblock();\n    }\n    void write_superblock() {\n        dev->write_block(1, (char*)&sb);\n        std::cout << \"Superblock written: magic=0x\" << std::hex << sb.magic\n                  << std::dec << \" blocks=\" << sb.blocks_count << \"\\n\";\n    }\n    void read_superblock() {\n        dev->read_block(1, (char*)&sb);\n        std::cout << \"Superblock read: free_blocks=\" << sb.free_blocks_count\n                  << \" free_inodes=\" << sb.free_inodes_count << \"\\n\";\n    }\n};\n\nint main() {\n    BlockDevice dev(1024, 4096);\n    SimpleFS fs(&dev, 1024, 256);\n    fs.read_superblock();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation--superblock-simulator",
      children: "Python Implementation — Superblock Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import struct\nimport ctypes\n\nBLOCK_SIZE = 4096\n\nclass Superblock(ctypes.Structure):\n    _fields_ = [\n        (\"inodes_count\", ctypes.c_uint32),\n        (\"blocks_count\", ctypes.c_uint32),\n        (\"free_blocks_count\", ctypes.c_uint32),\n        (\"free_inodes_count\", ctypes.c_uint32),\n        (\"log_block_size\", ctypes.c_uint32),\n        (\"mtime\", ctypes.c_uint32),\n        (\"magic\", ctypes.c_uint16),\n        (\"state\", ctypes.c_uint16),\n        (\"lastcheck\", ctypes.c_uint32),\n        (\"checkinterval\", ctypes.c_uint32),\n    ]\n\nclass BlockDevice:\n    def __init__(self, num_blocks=1024, block_size=4096):\n        self.disk = bytearray(num_blocks * block_size)\n        self.block_size = block_size\n        self.num_blocks = num_blocks\n    def write_block(self, n, data):\n        start = n * self.block_size\n        self.disk[start:start + len(data)] = data\n    def read_block(self, n, size=4096):\n        start = n * self.block_size\n        return self.disk[start:start + size]\n\ndef init_superblock(dev, num_blocks=1024, num_inodes=256):\n    sb = Superblock()\n    sb.inodes_count = num_inodes\n    sb.blocks_count = num_blocks\n    sb.free_blocks_count = num_blocks\n    sb.free_inodes_count = num_inodes\n    sb.log_block_size = 2\n    sb.magic = 0xEF53\n    sb.state = 1\n    sb.lastcheck = 1700000000\n    sb.checkinterval = 15552000\n    raw = bytes(sb)\n    dev.write_block(1, raw)\n    print(f\"Superblock initialized: {num_blocks} blocks, {num_inodes} inodes\")\n    return sb\n\ndef read_superblock(dev):\n    raw = dev.read_block(1, ctypes.sizeof(Superblock))\n    sb = Superblock.from_buffer_copy(raw)\n    print(f\"Free blocks: {sb.free_blocks_count}, Free inodes: {sb.free_inodes_count}\")\n    return sb\n\nif __name__ == \"__main__\":\n    dev = BlockDevice()\n    init_superblock(dev)\n    read_superblock(dev)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--on-disk-structures",
      children: "Complexity Analysis — On-Disk Structures"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Structure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Access Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Boot block read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed sector 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Superblock read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed offset 1024"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inode lookup by number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct index into table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Directory entry search (linear)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must scan all entries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Directory entry search (hash)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table lookup"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(1) for inode lookup"
      }), ": The inode table is a contiguous array. Given inode number i and inode size S, the disk offset is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "table_start + i * S"
      }), ". This is computed in constant time with one multiplication and one addition."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Boot block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, standardized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only 512 bytes — limits bootloader complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Superblock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single source of truth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catastrophic if corrupted (mitigated by backups)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inode table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast O(1) lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed size limits maximum file count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed layout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard to resize partition"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Superblock corruption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FS becomes unmountable; backups must be used"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inode exhaustion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot create new files even with free blocks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Block 0 corruption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boot block damaged; system won't boot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Power loss during superblock write"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Corrupted superblock; recovery via journal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partition smaller than metadata"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not enough room for inode table"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-inode--detailed-structure",
      children: "3. Inode — Detailed Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An inode is like a passport for a file. It carries all the identifying information: the holder's ID (inode number), permissions (what countries they can enter), timestamps (issue/expiry dates), and pointers to where the actual content is stored (visa stamps referencing specific pages)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inode-fields-ext4",
      children: "Inode Fields (ext4)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ext4 Inode (156 bytes):\n┌──────────────────────┬────────┬──────────────────────────────┐\n│ Field                │ Size   │ Description                  │\n├──────────────────────┼────────┼──────────────────────────────┤\n│ i_mode               │ 16-bit │ File type + permissions      │\n│ i_uid                │ 16-bit │ Owner user ID                │\n│ i_size               │ 64-bit │ File size in bytes           │\n│ i_atime              │ 64-bit │ Last access time (nanosec)   │\n│ i_ctime              │ 64-bit │ Last status change time      │\n│ i_mtime              │ 64-bit │ Last modification time       │\n│ i_dtime              │ 64-bit │ Deletion time                │\n│ i_gid                │ 16-bit │ Group ID                     │\n│ i_links_count        │ 16-bit │ Hard link count              │\n│ i_blocks             │ 64-bit │ Number of 512-byte blocks    │\n│ i_flags              │ 32-bit │ File attributes (extents, etc)│\n│ i_block[15]          │ 60 bytes│ Block pointers (ext4: extents)│\n│ i_generation         │ 32-bit │ File version (NFS)           │\n│ i_file_acl           │ 32-bit │ Extended attribute block     │\n│ i_size_high          │ 32-bit │ Upper 32 bits of size        │\n│ i_obso_faddr         │ 32-bit │ Obsolete fragment address    │\n│ i_extra_isize        │ 16-bit │ Extra inode size             │\n│ i_checksum_hi        │ 16-bit │ Upper checksum bits          │\n│ i_ctime_extra        │ 32-bit │ Extra ctime bits             │\n│ i_mtime_extra        │ 32-bit │ Extra mtime bits             │\n│ i_atime_extra        │ 32-bit │ Extra atime bits             │\n│ i_crtime             │ 64-bit │ Creation time (nanosec)      │\n│ i_crtime_extra       │ 32-bit │ Extra crtime bits            │\n│ i_checksum_lo        │ 32-bit │ Lower checksum bits          │\n└──────────────────────┴────────┴──────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-level-index-scheme",
      children: "Multi-Level Index Scheme"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The traditional ext2/3 inode uses 15 block pointers:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "i_block[0..11]  → 12 direct block pointers  (small files, fast access)\ni_block[12]     → 1 single indirect pointer  (medium files)\ni_block[13]     → 1 double indirect pointer  (large files)\ni_block[14]     → 1 triple indirect pointer  (huge files)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "maximum-file-size-calculation-4-kb-blocks-4-byte-pointers",
      children: "Maximum File Size Calculation (4 KB blocks, 4-byte pointers)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Calculation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Size"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direct (12)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 × 4 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48 KB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single indirect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4096/4) × 4 KB = 1024 × 4 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 MB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double indirect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024 × 1024 × 4 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 GB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Triple indirect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024 × 1024 × 1024 × 4 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 TB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "~4 TB + 4 GB + 4 MB + 48 KB"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps--inode-lookup-for-read",
      children: "Numbered Steps — Inode Lookup for Read"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The VFS receives a read request with file descriptor fd and offset."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "From the per-process file table, get the inode number."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Load the inode from disk (or in-memory cache)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute which logical block the offset falls in: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "block_num = offset / block_size"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If block_num < 12: use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i_block[block_num]"
        }), " (direct pointer)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If block_num < 12 + 1024: compute singly indirect offset."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If block_num < 12 + 1024 + 1024²: compute doubly indirect offset."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If block_num < 12 + 1024 + 1024² + 1024³: compute triply indirect offset."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read the physical block at the computed address."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode--file-read-via-inode-pointers",
      children: "Pseudocode — File Read via Inode Pointers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function read_from_inode(inode, offset, count):\n    block_size = 4096\n    pointers_per_block = block_size / 4  // 1024\n    start_block = offset / block_size\n    end_block = (offset + count - 1) / block_size\n    buf = []\n    for b = start_block to end_block:\n        if b < 12:\n            phys = inode.direct[b]\n        elif b < 12 + pointers_per_block:\n            idx = b - 12\n            indirect_block = read_block(inode.single_indirect)\n            phys = indirect_block[idx]\n        elif b < 12 + pointers_per_block + pointers_per_block^2:\n            idx = b - 12 - pointers_per_block\n            dbl_idx = idx / pointers_per_block\n            dbl_off = idx % pointers_per_block\n            dbl_block = read_block(inode.double_indirect)\n            indirect_block = read_block(dbl_block[dbl_idx])\n            phys = indirect_block[dbl_off]\n        else:\n            // triple indirect (similar pattern)\n        data = read_block(phys)\n        append_data(buf, data)\n    return buf\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--inode-lookup-for-a-100-mb-file",
      children: "Dry Run — Inode Lookup for a 100 MB File"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assume 4 KB blocks, 4-byte pointers (1024 per block)."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Byte Offset"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Logical Block"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pointer Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Computation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i_block[0] → block 45"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i_block[1] → block 89"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "49152"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single indirect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read i_block[12] → read block 200 (indirect block) → entry[0] → block 301"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "53248"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single indirect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "indirect_block[1] → block 302"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single indirect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4243456"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1036"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single indirect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "indirect_block[1023] → block 1324"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4247552"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1037"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double indirect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read i_block[13] → dbl_indirect → read block 1400 → entry[0] → read block 1500 (indirect) → entry[0] → block 1600"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double indirect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation--inode-manager",
      children: "C++ Implementation — Inode Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <cstring>\n\nconst int BLOCK_SIZE = 4096;\nconst int POINTERS_PER_BLOCK = BLOCK_SIZE / 4;  // 1024\nconst int NUM_DIRECT = 12;\n\nstruct Inode {\n    bool used;\n    int size;\n    int direct[NUM_DIRECT];\n    int single_indirect;\n    int double_indirect;\n    int triple_indirect;\n    int uid;\n    int gid;\n    int links_count;\n\n    Inode() : used(false), size(0), single_indirect(-1),\n              double_indirect(-1), triple_indirect(-1),\n              uid(0), gid(0), links_count(1) {\n        std::memset(direct, -1, sizeof(direct));\n    }\n};\n\nclass InodeManager {\n    Inode* inode_table;\n    int num_inodes;\n\npublic:\n    InodeManager(int n) : num_inodes(n) {\n        inode_table = new Inode[n];\n    }\n\n    int allocate_inode() {\n        for (int i = 0; i < num_inodes; i++) {\n            if (!inode_table[i].used) {\n                inode_table[i].used = true;\n                inode_table[i].size = 0;\n                inode_table[i].links_count = 1;\n                std::cout << \"Allocated inode \" << i << \"\\n\";\n                return i;\n            }\n        }\n        return -1;\n    }\n\n    void free_inode(int inum) {\n        if (inum >= 0 && inum < num_inodes) {\n            inode_table[inum].used = false;\n            std::cout << \"Freed inode \" << inum << \"\\n\";\n        }\n    }\n\n    int resolve_block(int inum, int logical_block) {\n        if (logical_block < NUM_DIRECT) {\n            return inode_table[inum].direct[logical_block];\n        }\n        int offset = logical_block - NUM_DIRECT;\n        if (offset < POINTERS_PER_BLOCK) {\n            return -2;  // need to read single indirect\n        }\n        offset -= POINTERS_PER_BLOCK;\n        if (offset < POINTERS_PER_BLOCK * POINTERS_PER_BLOCK) {\n            return -3;  // need to read double indirect\n        }\n        return -4;  // triple indirect\n    }\n\n    void print_inode(int inum) {\n        if (inum < 0 || inum >= num_inodes || !inode_table[inum].used) {\n            std::cout << \"Inode \" << inum << \": not in use\\n\";\n            return;\n        }\n        Inode& in = inode_table[inum];\n        std::cout << \"Inode \" << inum << \": size=\" << in.size\n                  << \" links=\" << in.links_count << \"\\n\";\n        std::cout << \"  Direct: \";\n        for (int i = 0; i < NUM_DIRECT; i++) {\n            if (in.direct[i] >= 0) std::cout << in.direct[i] << \" \";\n        }\n        std::cout << \"\\n  SingleIndirect=\" << in.single_indirect\n                  << \" DoubleIndirect=\" << in.double_indirect << \"\\n\";\n    }\n\n    ~InodeManager() { delete[] inode_table; }\n};\n\nint main() {\n    InodeManager mgr(128);\n    int ino = mgr.allocate_inode();\n    mgr.print_inode(ino);\n    mgr.free_inode(ino);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation--inode-manager",
      children: "Python Implementation — Inode Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "BLOCK_SIZE = 4096\nPOINTERS_PER_BLOCK = BLOCK_SIZE // 4\nNUM_DIRECT = 12\n\nclass Inode:\n    def __init__(self):\n        self.used = False\n        self.size = 0\n        self.direct = [-1] * NUM_DIRECT\n        self.single_indirect = -1\n        self.double_indirect = -1\n        self.triple_indirect = -1\n        self.uid = 0\n        self.gid = 0\n        self.links_count = 1\n\n    def __repr__(self):\n        if not self.used:\n            return \"Inode: unused\"\n        return (f\"Inode: size={self.size}, links={self.links_count}, \"\n                f\"direct={[d for d in self.direct if d >= 0]}\")\n\nclass InodeManager:\n    def __init__(self, num_inodes=128):\n        self.table = [Inode() for _ in range(num_inodes)]\n    def allocate_inode(self):\n        for i, inode in enumerate(self.table):\n            if not inode.used:\n                inode.used = True\n                print(f\"Allocated inode {i}\")\n                return i\n        return -1\n    def free_inode(self, inum):\n        if 0 <= inum < len(self.table):\n            self.table[inum].used = False\n    def resolve_block(self, inum, logical_block):\n        if logical_block < NUM_DIRECT:\n            return self.table[inum].direct[logical_block]\n        return -2  # indirect needed\n    def print_inode(self, inum):\n        if 0 <= inum < len(self.table) and self.table[inum].used:\n            print(self.table[inum])\n        else:\n            print(f\"Inode {inum}: not in use\")\n\nif __name__ == \"__main__\":\n    mgr = InodeManager(128)\n    ino = mgr.allocate_inode()\n    mgr.print_inode(ino)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--inode-operations",
      children: "Complexity Analysis — Inode Operations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Allocate inode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) worst, O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan for free entry; superblock tracks free count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Free inode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just mark unused"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direct block lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single indirect lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 block reads: indirect + data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double indirect lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 block reads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Triple indirect lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 block reads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inode table write to disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single block write"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why still O(1) for multi-level"
      }), ": The number of indirection levels is fixed (3 for ext2/3, 1 for ext4 extents). Even triple indirect requires exactly 4 block reads — constant time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-of-inode-design",
      children: "Advantages & Disadvantages of Inode Design"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Multi-level index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Huge files without huge inode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4+ reads for large files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direct pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero overhead for small files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed 12 direct slots"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed inode table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast O(1) lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limits max files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Separation of metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to cache, backup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two disk seeks per read (inode + data)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Inode exhaustion before block exhaustion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot create files even with free space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File larger than triple indirect max"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns EFBIG error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inode 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reserved — cannot be used for files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hard link count overflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited to 2^16 - 1 = 65535 links"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Corrupted indirect block pointer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Points to wrong data; fsck must repair"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-directory-implementation",
      children: "4. Directory Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A directory is like a phone book. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "linear list"
      }), " approach is a phone book printed alphabetically — you scan page by page until you find the name. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hash table"
      }), " approach is a phone book with tabs — you go directly to the correct section."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-linear-list-implementation",
      children: "4.1 Linear List Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A directory file contains a simple list of entries. Each entry maps a filename to an inode number."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Directory file (linear list):\n┌──────────┬────────────┬──────────┬──────┬─────────────┐\n│ inode #  │ rec_len    │ name_len │ type │ name         │\n├──────────┼────────────┼──────────┼──────┼─────────────┤\n│ 12345    │ 16         │ 4        │ reg  │ \"home\"       │\n│ 12346    │ 24         │ 11       │ reg  │ \"documents\"  │\n│ 12347    │ 40         │ 4        │ dir  │ \"docs\"       │\n│ 12348    │ 16         │ 6        │ reg  │ \"notes.txt\"  │\n└──────────┴────────────┴──────────┴──────┴─────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "operations-on-linear-list",
      children: "Operations on Linear List"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Steps"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lookup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan list from start; compare name strings; O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Create"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan for empty slot or append; O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark entry as empty (or compact); O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rename"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find entry; update name field; O(n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode--linear-directory-lookup",
      children: "Pseudocode — Linear Directory Lookup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function dir_lookup_linear(dir_inode, target_name):\n    dir_data = read_all_blocks(dir_inode)\n    offset = 0\n    while offset < dir_inode.size:\n        entry = parse_dir_entry(dir_data[offset:])\n        if entry.inode != 0 and entry.name == target_name:\n            return entry.inode\n        offset += entry.rec_len\n    return -1  // not found\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-hash-table-implementation",
      children: "4.2 Hash Table Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A hash table stores directory entries indexed by a hash of the filename. The directory file contains both the hash table and the entry data."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Hash Table Directory:\n┌──────┬──────────────────────────────────────────────────┐\n│ Hash │ Pointer to entry (or collision chain)            │\n├──────┼──────────────────────────────────────────────────┤\n│ 0xA3 │ → inode=12345, name=\"home\"                       │\n│ 0xB7 │ → inode=12347, name=\"docs\" → inode=12346, name=\"documents\" │\n│ 0xC1 │ → inode=12348, name=\"notes.txt\"                  │\n└──────┴──────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode--hash-directory-lookup",
      children: "Pseudocode — Hash Directory Lookup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function dir_lookup_hash(dir_inode, target_name):\n    hash = compute_hash(target_name)\n    dir_data = read_all_blocks(dir_inode)\n    entry_ptr = hash_table[hash % table_size]\n    while entry_ptr != NULL:\n        entry = read_entry(dir_data, entry_ptr)\n        if entry.name == target_name:\n            return entry.inode\n        entry_ptr = entry.next  // collision chain\n    return -1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--linear-lookup-vs-hash-lookup",
      children: "Dry Run — Linear Lookup vs Hash Lookup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Search for \"notes.txt\" in a directory with 1000 files."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Linear lookup:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Position"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Entry"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Match?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"home\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\".profile\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"documents\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
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
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "972"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15552"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"notes.txt\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total: 972 comparisons"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hash lookup:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Position"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Entry"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Match?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute hash(\"notes.txt\") = 0xC1"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table[0xC1 % 256] → entry at byte 16000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"notes.txt\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total: 1 hash + 1 comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation--directory",
      children: "C++ Implementation — Directory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <cstring>\n#include <functional>\n\nstruct DirEntry {\n    uint32_t inode;\n    uint16_t rec_len;\n    uint8_t name_len;\n    uint8_t file_type;\n    char name[255];\n};\n\nclass LinearDirectory {\n    std::vector<DirEntry> entries;\n\npublic:\n    void add_entry(uint32_t inode, const std::string& name, uint8_t type) {\n        DirEntry e;\n        e.inode = inode;\n        e.name_len = name.length();\n        e.file_type = type;\n        e.rec_len = 8 + e.name_len;  // minimum record length\n        std::memset(e.name, 0, 255);\n        std::memcpy(e.name, name.c_str(), e.name_len);\n        entries.push_back(e);\n    }\n\n    uint32_t lookup(const std::string& name) {\n        for (const auto& e : entries) {\n            if (e.inode != 0 && e.name_len == name.length() &&\n                std::memcmp(e.name, name.c_str(), e.name_len) == 0) {\n                return e.inode;\n            }\n        }\n        return 0;  // not found\n    }\n\n    bool remove(const std::string& name) {\n        for (auto& e : entries) {\n            if (e.inode != 0 && e.name_len == name.length() &&\n                std::memcmp(e.name, name.c_str(), e.name_len) == 0) {\n                e.inode = 0;  // mark deleted\n                return true;\n            }\n        }\n        return false;\n    }\n\n    void list() {\n        for (const auto& e : entries) {\n            if (e.inode != 0) {\n                std::cout << \"inode=\" << e.inode << \" name=\";\n                std::cout.write(e.name, e.name_len);\n                std::cout << \"\\n\";\n            }\n        }\n    }\n};\n\nclass HashDirectory {\n    static const int TABLE_SIZE = 64;\n    std::vector<DirEntry> table[TABLE_SIZE];\n\n    int hash(const std::string& name) {\n        std::hash<std::string> h;\n        return h(name) % TABLE_SIZE;\n    }\n\npublic:\n    void add_entry(uint32_t inode, const std::string& name, uint8_t type) {\n        DirEntry e;\n        e.inode = inode;\n        e.name_len = name.length();\n        e.file_type = type;\n        std::memset(e.name, 0, 255);\n        std::memcpy(e.name, name.c_str(), e.name_len);\n        int bucket = hash(name);\n        table[bucket].push_back(e);\n    }\n\n    uint32_t lookup(const std::string& name) {\n        int bucket = hash(name);\n        for (const auto& e : table[bucket]) {\n            if (e.inode != 0 && e.name_len == name.length() &&\n                std::memcmp(e.name, name.c_str(), e.name_len) == 0) {\n                return e.inode;\n            }\n        }\n        return 0;\n    }\n};\n\nint main() {\n    LinearDirectory dir;\n    dir.add_entry(100, \"readme.txt\", 0);\n    dir.add_entry(101, \"main.cpp\", 0);\n    dir.add_entry(200, \"docs\", 1);\n    dir.list();\n\n    uint32_t ino = dir.lookup(\"main.cpp\");\n    std::cout << \"main.cpp → inode \" << ino << \"\\n\";\n\n    dir.remove(\"readme.txt\");\n    std::cout << \"After removal:\\n\";\n    dir.list();\n\n    HashDirectory hdir;\n    hdir.add_entry(100, \"readme.txt\", 0);\n    ino = hdir.lookup(\"readme.txt\");\n    std::cout << \"Hash lookup: readme.txt → inode \" << ino << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation--directory",
      children: "Python Implementation — Directory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import hashlib\n\nclass DirEntry:\n    def __init__(self, inode, name, file_type=0):\n        self.inode = inode\n        self.name = name\n        self.file_type = file_type\n\nclass LinearDirectory:\n    def __init__(self):\n        self.entries = []\n    def add(self, inode, name, file_type=0):\n        self.entries.append(DirEntry(inode, name, file_type))\n    def lookup(self, name):\n        for e in self.entries:\n            if e.inode != 0 and e.name == name:\n                return e.inode\n        return None\n    def remove(self, name):\n        for e in self.entries:\n            if e.inode != 0 and e.name == name:\n                e.inode = 0  # mark deleted\n                return True\n        return False\n    def list(self):\n        for e in self.entries:\n            if e.inode != 0:\n                print(f\"inode={e.inode} name={e.name}\")\n\nclass HashDirectory:\n    def __init__(self, table_size=64):\n        self.table_size = table_size\n        self.table = [[] for _ in range(table_size)]\n    def _hash(self, name):\n        return int(hashlib.md5(name.encode()).hexdigest(), 16) % self.table_size\n    def add(self, inode, name, file_type=0):\n        bucket = self._hash(name)\n        self.table[bucket].append(DirEntry(inode, name, file_type))\n    def lookup(self, name):\n        bucket = self._hash(name)\n        for e in self.table[bucket]:\n            if e.name == name:\n                return e.inode\n        return None\n\nif __name__ == \"__main__\":\n    ld = LinearDirectory()\n    ld.add(101, \"main.py\")\n    ld.add(102, \"readme.md\")\n    ld.list()\n    print(f\"Lookup 'main.py': inode {ld.lookup('main.py')}\")\n    ld.remove(\"readme.md\")\n    ld.list()\n\n    hd = HashDirectory()\n    hd.add(201, \"notes.txt\")\n    print(f\"Hash lookup 'notes.txt': inode {hd.lookup('notes.txt')}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "directory-comparison",
      children: "Directory Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linear List"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hash Table"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lookup complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) average"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) scan + append"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) hash + append"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) scan + mark"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) hash + mark"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table size (fixed or dynamic)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collision handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chaining or open addressing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (scan entire list)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (direct jump)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Used in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple FS, small directories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UFS (dirhash), NTFS (B-tree), ext4 (htree)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-directory-implementation",
      children: "Edge Cases in Directory Implementation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linear List"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hash Table"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty directory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single \".\" and \"..\" entries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty hash table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Very long filename"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entire entry may span multiple dir blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash unaffected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pathological hash"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All names hash to same bucket → O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrent modification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need coarse lock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need per-bucket or per-entry lock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete + create same name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reuse stale entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Directory exceeds one block"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read linked/indexed list of blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-allocation-methods",
      children: "5. Allocation Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-contiguous-allocation",
      children: "5.1 Contiguous Allocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Contiguous allocation is like a library where every book must occupy a consecutive set of shelves. If you need 5 shelves for a book, you must find 5 empty shelves in a row. When books are removed, gaps appear between other books — and you can't fill those gaps with a book that needs more shelves than the gap provides."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-it-works",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each file occupies a set of contiguous blocks on disk. The directory entry stores the starting block and the length (in blocks)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Contiguous Allocation Layout:\nDisk Blocks: [0][1][2][3][4][5][6][7][8][9][10][11][12][13][14][15]\n             File A (start=1, len=5)    File B (start=10, len=3)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "directory-entry-contiguous",
      children: "Directory Entry (Contiguous)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌───────────┬────────────┬──────────┐\n│ Filename  │ Start Block│ Length   │\n├───────────┼────────────┼──────────┤\n│ file.txt  │ 5          │ 4        │\n│ data.bin  │ 12         │ 2        │\n└───────────┴────────────┴──────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps--write-with-contiguous-allocation",
      children: "Numbered Steps — Write with Contiguous Allocation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The file system receives a request to write N blocks of data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It searches the free-space bitmap (or list) for N consecutive free blocks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If found, it records the starting block number and length in the directory entry."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It marks those N blocks as used in the bitmap."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It writes data sequentially to the allocated blocks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If not enough contiguous space is available, the write fails with ENOSPC."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode--contiguous-allocation",
      children: "Pseudocode — Contiguous Allocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function allocate_contiguous(size_in_blocks):\n    for start = 0 to total_blocks - size_in_blocks:\n        if all_blocks_free(start, size_in_blocks):\n            for b = start to start + size_in_blocks - 1:\n                mark_block_used(b)\n            return start\n    return -1  // not enough contiguous space\n\nfunction read_contiguous(file, buffer, offset, count):\n    block = file.start_block + (offset / block_size)\n    read_from_block(block, buffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "full-dry-run--external-fragmentation",
      children: "Full Dry Run — External Fragmentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Disk has 16 blocks. Initially all free."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Create File A (4 blocks)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Search: blocks 0-3 free → allocate\nBitmap: [1][1][1][1][0][0][0][0][0][0][0][0][0][0][0][0]\n         File A\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Create File B (3 blocks)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Search: blocks 4-6 free → allocate\nBitmap: [1][1][1][1][1][1][1][0][0][0][0][0][0][0][0][0]\n         File A     File B\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Create File C (5 blocks)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Search: blocks 7-11 free → allocate\nBitmap: [1][1][1][1][1][1][1][1][1][1][1][1][0][0][0][0]\n         File A     File B     File C\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Delete File B (blocks 4-6)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Bitmap: [1][1][1][1][0][0][0][1][1][1][1][1][0][0][0][0]\n         File A      GAP     File C\n         Free blocks: 4,5,6,12,13,14,15\n         Contiguous groups: [4-6] (size 3), [12-15] (size 4)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5: Create File D (4 blocks)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Search for 4 consecutive free blocks:\n  Groups: [4-6] size 3 — too small\n           [12-15] size 4 — fits!\nAllocate blocks 12-15.\n\nBitmap: [1][1][1][1][0][0][0][1][1][1][1][1][1][1][1][1]\n         File A      GAP     File C     File D\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6: Create File E (4 blocks) — FAILS"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Search for 4 consecutive free blocks:\n  [4-6] size 3 — too small\n  No other group large enough.\n\nResult: ENOSPC even though 3 blocks are free!\nThis is EXTERNAL FRAGMENTATION.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "External Fragmentation Summary:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initially free: 16 blocks\nAfter operations: 3 blocks free but unusable (cannot allocate 4-block file)\nFragmentation = 3 wasted / 16 total = 18.75% wasted\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation--contiguous-allocation",
      children: "C++ Implementation — Contiguous Allocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <cstring>\n#include <string>\n\nconst int NUM_BLOCKS = 64;\nconst int BLOCK_SIZE = 512;\n\nclass ContiguousFS {\n    char disk[NUM_BLOCKS][BLOCK_SIZE];\n    bool bitmap[NUM_BLOCKS];\n\n    struct FileEntry {\n        std::string name;\n        int start_block;\n        int length;\n        bool used;\n    };\n\n    std::vector<FileEntry> files;\n\npublic:\n    ContiguousFS() {\n        std::memset(disk, 0, sizeof(disk));\n        std::memset(bitmap, 0, sizeof(bitmap));  // all free\n    }\n\n    int find_contiguous_space(int needed) {\n        int run = 0;\n        for (int i = 0; i < NUM_BLOCKS; i++) {\n            if (!bitmap[i]) {\n                run++;\n                if (run == needed) {\n                    return i - needed + 1;\n                }\n            } else {\n                run = 0;\n            }\n        }\n        return -1;\n    }\n\n    bool create_file(const std::string& name, int size_in_blocks) {\n        int start = find_contiguous_space(size_in_blocks);\n        if (start < 0) {\n            std::cout << \"Cannot create \" << name << \": no contiguous space (\"\n                      << size_in_blocks << \" blocks needed)\\n\";\n            return false;\n        }\n        for (int i = 0; i < size_in_blocks; i++) {\n            bitmap[start + i] = true;\n        }\n        files.push_back({name, start, size_in_blocks, true});\n        std::cout << \"Created \" << name << \" at block \" << start\n                  << \" (\" << size_in_blocks << \" blocks)\\n\";\n        return true;\n    }\n\n    bool delete_file(const std::string& name) {\n        for (auto& f : files) {\n            if (f.name == name && f.used) {\n                for (int i = 0; i < f.length; i++) {\n                    bitmap[f.start_block + i] = false;\n                }\n                f.used = false;\n                std::cout << \"Deleted \" << name << \" (blocks \"\n                          << f.start_block << \"-\" << f.start_block + f.length - 1 << \" freed)\\n\";\n                return true;\n            }\n        }\n        return false;\n    }\n\n    void print_bitmap() {\n        std::cout << \"Bitmap: \";\n        for (int i = 0; i < NUM_BLOCKS; i++) {\n            std::cout << (bitmap[i] ? '1' : '0');\n        }\n        std::cout << \"\\n\";\n    }\n\n    void print_fragmentation() {\n        int total_free = 0;\n        int max_run = 0;\n        int current_run = 0;\n        for (int i = 0; i < NUM_BLOCKS; i++) {\n            if (!bitmap[i]) {\n                total_free++;\n                current_run++;\n                if (current_run > max_run) max_run = current_run;\n            } else {\n                current_run = 0;\n            }\n        }\n        std::cout << \"Free blocks: \" << total_free\n                  << \" Max contiguous: \" << max_run\n                  << \" Wasted: \" << (total_free - max_run) << \"\\n\";\n    }\n};\n\nint main() {\n    ContiguousFS fs;\n    fs.create_file(\"A.txt\", 4);\n    fs.create_file(\"B.txt\", 3);\n    fs.create_file(\"C.txt\", 5);\n    fs.print_bitmap();\n\n    fs.delete_file(\"B.txt\");\n    fs.print_bitmap();\n\n    fs.create_file(\"D.txt\", 4);  // fits in blocks 12-15\n    fs.create_file(\"E.txt\", 4);  // should fail\n    fs.print_bitmap();\n    fs.print_fragmentation();\n\n    // Demonstrate compaction opportunity\n    fs.delete_file(\"A.txt\");\n    fs.delete_file(\"C.txt\");\n    fs.delete_file(\"D.txt\");\n    fs.print_bitmap();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation--contiguous-allocation",
      children: "Python Implementation — Contiguous Allocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ContiguousFS:\n    def __init__(self, num_blocks=64):\n        self.num_blocks = num_blocks\n        self.bitmap = [False] * num_blocks  # False = free\n        self.files = []\n\n    def _find_contiguous(self, needed):\n        run = 0\n        for i in range(self.num_blocks):\n            if not self.bitmap[i]:\n                run += 1\n                if run == needed:\n                    return i - needed + 1\n            else:\n                run = 0\n        return -1\n\n    def create_file(self, name, size):\n        start = self._find_contiguous(size)\n        if start < 0:\n            print(f\"Cannot create {name}: external fragmentation \"\n                  f\"(need {size}, no contiguous space)\")\n            return False\n        for i in range(size):\n            self.bitmap[start + i] = True\n        self.files.append({\"name\": name, \"start\": start, \"length\": size})\n        print(f\"Created {name} at block {start} ({size} blocks)\")\n        return True\n\n    def delete_file(self, name):\n        for f in self.files:\n            if f[\"name\"] == name:\n                for i in range(f[\"length\"]):\n                    self.bitmap[f[\"start\"] + i] = False\n                self.files.remove(f)\n                print(f\"Deleted {name}\")\n                return True\n        return False\n\n    def print_bitmap(self):\n        print(\"Bitmap:\", ''.join('1' if b else '0' for b in self.bitmap))\n\n    def fragmentation_report(self):\n        free = sum(1 for b in self.bitmap if not b)\n        max_run = 0\n        cur = 0\n        for b in self.bitmap:\n            if not b:\n                cur += 1\n                max_run = max(max_run, cur)\n            else:\n                cur = 0\n        print(f\"Free: {free}, Max contiguous: {max_run}, \"\n              f\"Wasted: {free - max_run}\")\n\n    def compact(self):\n        \"\"\"Compaction: move files to start of disk\"\"\"\n        target = 0\n        for f in sorted(self.files, key=lambda x: x[\"start\"]):\n            if f[\"start\"] != target:\n                print(f\"Moving {f['name']} from block {f['start']} to {target}\")\n                f[\"start\"] = target\n            target += f[\"length\"]\n        self.bitmap = [False] * self.num_blocks\n        for f in self.files:\n            for i in range(f[\"length\"]):\n                self.bitmap[f[\"start\"] + i] = True\n        print(\"Compaction complete\")\n\nif __name__ == \"__main__\":\n    fs = ContiguousFS(16)\n    fs.print_bitmap()\n    fs.create_file(\"A\", 4)\n    fs.create_file(\"B\", 3)\n    fs.create_file(\"C\", 5)\n    fs.print_bitmap()\n\n    fs.delete_file(\"B\")\n    fs.create_file(\"D\", 4)\n    fs.print_bitmap()\n\n    fs.create_file(\"E\", 4)  # should fail\n    fs.fragmentation_report()\n\n    print(\"\\n--- After compaction ---\")\n    fs.compact()\n    fs.create_file(\"E\", 4)  # now works\n    fs.print_bitmap()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--contiguous-allocation",
      children: "Complexity Analysis — Contiguous Allocation"
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
            children: "Allocate N blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(blocks) worst-case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must scan bitmap for N consecutive free bits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read block i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "start_block + i computed directly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write block i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same direct computation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark N contiguous bits as free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compact FS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(files × blocks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must move every file's data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Find free space (optimized)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) with run-length tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precompute largest hole"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(1) for access"
      }), ": Given start block S and block index i, physical block = S + i. This is a single addition."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-1",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Sequential access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent: read-ahead works perfectly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direct access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) computation, no indirection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivial — just start + length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero per-block overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "External fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Severe: holes cannot be filled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File growth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impossible without copying entire file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space estimation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must know file size at creation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compaction cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expensive, requires FS offline"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Disk full (no contiguous space)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns ENOSPC even if free blocks exist (fragmentation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File growth beyond allocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must allocate new location and copy entire file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Very large file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May not find enough contiguous blocks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Creating many small files"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works well until deletions create fragmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compaction during active use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dangerous — must suspend all I/O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File size zero"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can store as empty (start=0, len=0) or special flag"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-linked-allocation",
      children: "5.2 Linked Allocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-5",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Linked allocation is like a treasure hunt. Each clue (block) tells you where to find the next clue. You must follow the chain from start to end — you cannot skip ahead. If you want clue #50, you must read clues 1 through 49 first."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-it-works-1",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each block contains a pointer to the next block in the file. The directory entry stores the starting block and (optionally) the ending block."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Linked Allocation Layout:\nDirectory:  file.txt → start=7, end=23\n\nBlock 7:  [data... | next→23]\nBlock 23: [data... | next→17]\nBlock 17: [data... | next→→0]  (end, next = 0 or -1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps--read-with-linked-allocation",
      children: "Numbered Steps — Read with Linked Allocation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Look up the file in the directory, get the starting block number (e.g., 7)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read block 7 from disk."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy the data portion to the output buffer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extract the next pointer from the block header."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If next pointer is 0 (or -1), we have reached the end of the file."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otherwise, read the next block and repeat."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode--linked-allocation",
      children: "Pseudocode — Linked Allocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function read_linked_file(file_entry, buffer):\n    current_block = file_entry.start_block\n    while current_block != -1:\n        block_data = read_block(current_block)\n        data = block_data[0 : block_size - pointer_size]\n        next_block = block_data[block_size - pointer_size :]\n        append(buffer, data)\n        current_block = next_block\n\nfunction read_block_at_position(file_entry, position):\n    // Direct access NOT supported — must walk chain\n    current = file_entry.start_block\n    for i = 1 to position:\n        current = read_next_pointer(current)\n    return read_block(current)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "full-dry-run--linked-allocation-walk",
      children: "Full Dry Run — Linked Allocation Walk"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assume 512-byte blocks, 4-byte next pointer (508 bytes data per block)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "File \"report.txt\" — directory: start=3"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current Block"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Read Next Pointer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Bytes Accumulated"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "508"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ 15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1016"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ 22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1524"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ 31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2032"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ 42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2540"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ -1 (end)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3048"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total data: 3048 bytes, 6 blocks, 5 chain walks"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "To reach byte 2000 (logical block 3):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Position = 2000 / 508 = block index 3\nWalk: 3 → 8 → 15 → 22 (3 pointer dereferences)\nData read from block 22 at offset 2000 - 3*508 = 2000 - 1524 = 476\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "file-allocation-table-fat",
      children: "File Allocation Table (FAT)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FAT moves all the next pointers from the blocks themselves into a separate table stored in a reserved area of the disk. This table is cached in memory for fast lookup."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FAT Table (simplified):\nIndex: 0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15\nValue: -1  -1  -1   8  -1  -1  -1  15  22  -1  -1  -1  -1  -1  -1  -1\n\nFile: report.txt at FAT[3]:\n  Block 3 → FAT[3] = 8 → read block 8\n  Block 8 → FAT[8] = 22 → read block 22\n  Block 22 → FAT[22] = -1 → end\n\nFile: data.bin at FAT[7]:\n  Block 7 → FAT[7] = 15 → read block 15\n  Block 15 → FAT[15] = -1 → end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fat-variants",
      children: "FAT Variants"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Entry Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Clusters"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Volume"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FAT12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4,086"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 MB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FAT16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65,526"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 GB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FAT32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "268,435,456"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 TB (8 TB with 64 KB clusters)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exFAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2^32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128 PB"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fat-walk-for-direct-access-simulated",
      children: "FAT Walk for Direct Access (Simulated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since the FAT is cached in memory, we can simulate direct access:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function read_block_fat(start_cluster, target_index, fat_table):\n    current = start_cluster\n    for i = 0 to target_index:\n        current = fat_table[current]\n        if current == -1: return -1  // EOF\n    return current\n\n// For file at start=3, read logical block 3:\n// FAT[3] = 8, FAT[8] = 22, FAT[22] = 31 → cluster 31\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation--linked-allocation--fat",
      children: "C++ Implementation — Linked Allocation & FAT"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <cstring>\n#include <unordered_map>\n\nconst int BLOCK_SIZE = 512;\nconst int POINTER_SIZE = 4;\nconst int DATA_SIZE = BLOCK_SIZE - POINTER_SIZE;  // 508 bytes\n\nclass LinkedFS {\n    char disk[256][BLOCK_SIZE];  // 256 blocks of 512 bytes\n    bool bitmap[256];\n\n    struct FileRecord {\n        std::string name;\n        int start_block;\n        int end_block;\n    };\n    std::vector<FileRecord> files;\n\n    int read_next_pointer(int block_num) {\n        int next;\n        std::memcpy(&next, disk[block_num] + DATA_SIZE, POINTER_SIZE);\n        return next;\n    }\n\n    void write_next_pointer(int block_num, int next) {\n        std::memcpy(disk[block_num] + DATA_SIZE, &next, POINTER_SIZE);\n    }\n\npublic:\n    LinkedFS() {\n        std::memset(disk, 0, sizeof(disk));\n        std::memset(bitmap, 0, sizeof(bitmap));  // all free\n    }\n\n    int allocate_block() {\n        for (int i = 0; i < 256; i++) {\n            if (!bitmap[i]) {\n                bitmap[i] = true;\n                return i;\n            }\n        }\n        return -1;\n    }\n\n    bool create_file(const std::string& name, const std::string& data) {\n        int remaining = data.length();\n        int data_pos = 0;\n        int first_block = -1;\n        int prev_block = -1;\n\n        while (remaining > 0) {\n            int block = allocate_block();\n            if (block < 0) {\n                if (first_block >= 0) {\n                    // Free partial allocation\n                    int cur = first_block;\n                    while (cur >= 0) {\n                        int next = read_next_pointer(cur);\n                        bitmap[cur] = false;\n                        cur = next;\n                    }\n                }\n                std::cout << \"Disk full during write\\n\";\n                return false;\n            }\n\n            int to_write = (remaining > DATA_SIZE) ? DATA_SIZE : remaining;\n            std::memcpy(disk[block], data.c_str() + data_pos, to_write);\n            data_pos += to_write;\n            remaining -= to_write;\n\n            write_next_pointer(block, -1);  // default end\n\n            if (first_block < 0) first_block = block;\n            if (prev_block >= 0) write_next_pointer(prev_block, block);\n            prev_block = block;\n        }\n\n        files.push_back({name, first_block, prev_block});\n        std::cout << \"Created \" << name << \" starting at block \" << first_block << \"\\n\";\n        return true;\n    }\n\n    std::string read_file(const std::string& name) {\n        for (const auto& f : files) {\n            if (f.name == name) {\n                std::string result;\n                int cur = f.start_block;\n                while (cur >= 0) {\n                    result.append(disk[cur], DATA_SIZE);\n                    cur = read_next_pointer(cur);\n                }\n                // Trim null bytes\n                result.resize(strlen(result.c_str()));\n                return result;\n            }\n        }\n        return \"\";\n    }\n\n    void print_fat_like_table() {\n        std::cout << \"\\nFAT-like table:\\nIndex: \";\n        for (int i = 0; i < 24; i++) std::cout << i << \"  \";\n        std::cout << \"\\nValue: \";\n        for (int i = 0; i < 24; i++) {\n            if (!bitmap[i]) {\n                std::cout << \" -   \";\n            } else {\n                bool is_start = false;\n                for (const auto& f : files) {\n                    if (f.start_block == i) is_start = true;\n                }\n                int next = read_next_pointer(i);\n                if (next < 0) std::cout << \" END \";\n                else printf(\"%-5d\", next);\n            }\n        }\n        std::cout << \"\\n\\n\";\n    }\n\n    void walk_file(const std::string& name) {\n        for (const auto& f : files) {\n            if (f.name == name) {\n                std::cout << \"Walking \" << name << \": \";\n                int cur = f.start_block;\n                int idx = 0;\n                while (cur >= 0) {\n                    std::cout << cur;\n                    cur = read_next_pointer(cur);\n                    if (cur >= 0) std::cout << \" → \";\n                    idx++;\n                }\n                std::cout << \" (end, \" << idx << \" blocks)\\n\";\n                return;\n            }\n        }\n    }\n};\n\nclass FATFS {\n    static const int NUM_CLUSTERS = 256;\n    int fat[NUM_CLUSTERS];  // -1 = free, -2 = reserved, -3 = end, 0+ = next\n    char disk[NUM_CLUSTERS][BLOCK_SIZE];\n    std::unordered_map<std::string, int> directory;  // name → first cluster\n\npublic:\n    FATFS() {\n        std::memset(fat, -1, sizeof(fat));  // all free\n        std::memset(disk, 0, sizeof(disk));\n    }\n\n    int allocate_cluster() {\n        for (int i = 0; i < NUM_CLUSTERS; i++) {\n            if (fat[i] == -1) {\n                fat[i] = -3;  // mark as end-of-chain temporarily\n                return i;\n            }\n        }\n        return -1;\n    }\n\n    bool write_file(const std::string& name, const std::string& data) {\n        int first = -1;\n        int prev = -1;\n        int remaining = data.length();\n        int pos = 0;\n\n        while (remaining > 0) {\n            int cluster = allocate_cluster();\n            if (cluster < 0) return false;\n\n            int to_write = (remaining > BLOCK_SIZE) ? BLOCK_SIZE : remaining;\n            std::memcpy(disk[cluster], data.c_str() + pos, to_write);\n            pos += to_write;\n            remaining -= to_write;\n            fat[cluster] = -3;  // end of chain\n\n            if (first < 0) first = cluster;\n            if (prev >= 0) fat[prev] = cluster;\n            prev = cluster;\n        }\n\n        directory[name] = first;\n        return true;\n    }\n\n    std::string read_file(const std::string& name) {\n        if (directory.find(name) == directory.end()) return \"\";\n        std::string result;\n        int cluster = directory[name];\n        while (cluster != -3) {\n            result.append(disk[cluster], BLOCK_SIZE);\n            cluster = fat[cluster];\n        }\n        result.resize(strlen(result.c_str()));\n        return result;\n    }\n\n    int get_cluster_chain(const std::string& name, int pos) {\n        if (directory.find(name) == directory.end()) return -1;\n        int cluster = directory[name];\n        for (int i = 0; i < pos; i++) {\n            if (cluster == -3) return -1;\n            cluster = fat[cluster];\n        }\n        return cluster;\n    }\n\n    void print_fat() {\n        std::cout << \"FAT Table (first 32 entries):\\n\";\n        for (int i = 0; i < 32; i++) {\n            if (fat[i] == -1) std::cout << \"  .\";\n            else if (fat[i] == -3) std::cout << \" END\";\n            else printf(\"%4d\", fat[i]);\n            if ((i + 1) % 8 == 0) std::cout << \"\\n\";\n        }\n    }\n};\n\nint main() {\n    LinkedFS fs;\n    fs.create_file(\"report.txt\", \"This is linked allocation. \"\n        \"Each block points to the next. Direct access is slow. \"\n        \"FAT makes it faster by caching the chain in memory.\");\n    fs.walk_file(\"report.txt\");\n    std::cout << \"Content: \" << fs.read_file(\"report.txt\") << \"\\n\";\n\n    fs.create_file(\"data.bin\", \"Short file.\");\n    fs.walk_file(\"data.bin\");\n    fs.print_fat_like_table();\n\n    std::cout << \"=== FAT-based FS ===\\n\";\n    FATFS fatfs;\n    fatfs.write_file(\"notes.txt\", \"FAT-based file system demo with cached chain table.\");\n    std::cout << \"Read: \" << fatfs.read_file(\"notes.txt\") << \"\\n\";\n    fatfs.print_fat();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation--linked-allocation--fat",
      children: "Python Implementation — Linked Allocation & FAT"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import struct\n\nBLOCK_SIZE = 512\nDATA_SIZE = BLOCK_SIZE - 4  # 4 bytes for next pointer\n\nclass LinkedFS:\n    def __init__(self, num_blocks=256):\n        self.disk = bytearray(num_blocks * BLOCK_SIZE)\n        self.bitmap = [False] * num_blocks\n        self.files = {}\n\n    def _read_next(self, block):\n        offset = block * BLOCK_SIZE + DATA_SIZE\n        return struct.unpack_from('<i', self.disk, offset)[0]\n\n    def _write_next(self, block, next_block):\n        offset = block * BLOCK_SIZE + DATA_SIZE\n        struct.pack_into('<i', self.disk, offset, next_block)\n\n    def _write_data(self, block, data, offset=0, size=None):\n        if size is None:\n            size = len(data)\n        start = block * BLOCK_SIZE\n        self.disk[start:start + size] = data[:size]\n\n    def _read_data(self, block, size=DATA_SIZE):\n        start = block * BLOCK_SIZE\n        return bytes(self.disk[start:start + size])\n\n    def allocate_block(self):\n        for i, used in enumerate(self.bitmap):\n            if not used:\n                self.bitmap[i] = True\n                return i\n        return -1\n\n    def create_file(self, name, data):\n        remaining = len(data)\n        pos = 0\n        first = -1\n        prev = -1\n\n        while remaining > 0:\n            block = self.allocate_block()\n            if block < 0:\n                raise Exception(\"Disk full\")\n            to_write = min(remaining, DATA_SIZE)\n            self._write_data(block, data[pos:pos + to_write])\n            self._write_next(block, -1)\n            if first < 0:\n                first = block\n            if prev >= 0:\n                self._write_next(prev, block)\n            prev = block\n            pos += to_write\n            remaining -= to_write\n\n        self.files[name] = first\n        return first\n\n    def read_file(self, name):\n        if name not in self.files:\n            return b\"\"\n        result = bytearray()\n        cur = self.files[name]\n        while cur >= 0:\n            data = self._read_data(cur)\n            result.extend(data)\n            cur = self._read_next(cur)\n        return bytes(result).rstrip(b'\\x00')\n\n    def walk_chain(self, name):\n        if name not in self.files:\n            return\n        cur = self.files[name]\n        chain = []\n        while cur >= 0:\n            chain.append(cur)\n            cur = self._read_next(cur)\n        print(f\"Chain for '{name}': {' → '.join(map(str, chain))} ({len(chain)} blocks)\")\n\n    def print_fat_style(self):\n        print(\"\\nFAT-style table (blocks 0-31):\")\n        for i in range(32):\n            if self.bitmap[i]:\n                nxt = self._read_next(i)\n                label = \"END\" if nxt < 0 else f\"{nxt:2d}\"\n            else:\n                label = \" .\"\n            print(f\"{i:2d}:{label:3s}  \", end='')\n            if (i + 1) % 8 == 0:\n                print()\n        print()\n\n\nclass FATFS:\n    def __init__(self, num_clusters=256):\n        self.fat = [-1] * num_clusters  # -1 = free, -3 = end\n        self.disk = bytearray(num_clusters * BLOCK_SIZE)\n        self.dir = {}  # name → first cluster\n\n    def _alloc(self):\n        for i, v in enumerate(self.fat):\n            if v == -1:\n                self.fat[i] = -3\n                return i\n        return -1\n\n    def write_file(self, name, data):\n        first = -1\n        prev = -1\n        remaining = len(data)\n        pos = 0\n        while remaining > 0:\n            cl = self._alloc()\n            if cl < 0:\n                raise Exception(\"Disk full\")\n            to_write = min(remaining, BLOCK_SIZE)\n            start = cl * BLOCK_SIZE\n            self.disk[start:start + to_write] = data[pos:pos + to_write]\n            self.fat[cl] = -3\n            if first < 0:\n                first = cl\n            if prev >= 0:\n                self.fat[prev] = cl\n            prev = cl\n            pos += to_write\n            remaining -= to_write\n        self.dir[name] = first\n\n    def read_file(self, name):\n        if name not in self.dir:\n            return b\"\"\n        result = bytearray()\n        cl = self.dir[name]\n        while cl != -3:\n            start = cl * BLOCK_SIZE\n            result.extend(self.disk[start:start + BLOCK_SIZE])\n            cl = self.fat[cl]\n        return bytes(result).rstrip(b'\\x00')\n\n    def resolve_cluster(self, name, index):\n        \"\"\"Simulate direct access via FAT cache\"\"\"\n        if name not in self.dir:\n            return -1\n        cl = self.dir[name]\n        for _ in range(index):\n            if cl == -3:\n                return -1\n            cl = self.fat[cl]\n        return cl\n\nif __name__ == \"__main__\":\n    fs = LinkedFS()\n    fs.create_file(\"report.txt\", b\"This demonstrates linked allocation. \"\n                   b\"Each block has a 4-byte next pointer. \"\n                   b\"Walking the chain is O(n). \" * 5)\n    fs.walk_chain(\"report.txt\")\n    print(\"Content:\", fs.read_file(\"report.txt\").decode()[:80], \"...\")\n\n    print(\"\\n=== FAT FS ===\")\n    fat = FATFS()\n    fat.write_file(\"notes.txt\", b\"FAT file system with cached table for faster access.\")\n    print(\"Read:\", fat.read_file(\"notes.txt\").decode())\n    cl = fat.resolve_cluster(\"notes.txt\", 0)\n    print(f\"First cluster: {cl}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--linked-allocation",
      children: "Complexity Analysis — Linked Allocation"
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
            children: "Read sequentially"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per block amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each read advances one pointer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read block at position i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(i)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must walk chain from start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate new block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Take first free block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Append to file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link new block to end"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(blocks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Walk chain freeing each block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FAT directory lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cached table in memory"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(i) for direct access"
      }), ": To read block #50, we must follow 50 next pointers. This is 50 disk reads (or 50 FAT lookups if cached). This is the killer disadvantage of linked allocation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-2",
      children: "Advantages & Disadvantages"
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
            children: "Fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None external — any free block works"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal: 4 bytes per block for pointer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File growth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivial: just add blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space utilization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No compaction needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.78% overhead (4/512) per block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good with read-ahead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direct access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) even with FAT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reliability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One bad pointer loses rest of file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No separate structure (linked)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FAT requires separate disk area"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Bad block in chain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All subsequent blocks unreachable (no redundancy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cyclic pointer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite loop; FS check must detect cycles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zero-length file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "start = 0 (null) or special -1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single block file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next pointer = -1 immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FAT corruption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entire file system becomes unreadable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Very large file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many pointer dereferences; performance degrades"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-indexed-allocation",
      children: "5.3 Indexed Allocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-6",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Indexed allocation is like a library with a card catalog. Each book has a catalog card (the index block) listing every shelf location where that book's pages are stored. To read page 5, you check the catalog card for entry 5, then go directly to that shelf. Small books might have their catalog entries inside the card, while encyclopedias need extra card drawers (indirect index blocks)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-it-works-2",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each file has an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "index block"
      }), " containing an array of pointers to data blocks. The directory entry points to the index block."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Indexed Allocation:\nDirectory: file.txt → index_block = 8\n\nIndex Block 8: [19][ 7][32][15][ 0][ 4][...  1024 entries]\n                │   │   │   │   │   │\n                ▼   ▼   ▼   ▼   ▼   ▼\nData Blocks:   19   7  32  15   0   4 ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps--read-with-indexed-allocation",
      children: "Numbered Steps — Read with Indexed Allocation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Look up the file, get the index block number (e.g., 8)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read the index block from disk."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute the index into the index block: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "entry = offset / block_size"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read the data block pointer at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "index_block[entry]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read the data block at that pointer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy the relevant bytes to the output."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode--indexed-allocation",
      children: "Pseudocode — Indexed Allocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function read_indexed_file(index_block_num, offset, count):\n    block_size = 4096\n    pointers_per_block = block_size / 4  // 1024\n    index_block = read_block(index_block_num)\n    start_entry = offset / block_size\n    result = []\n    for i = start_entry to start_entry + ceil(count / block_size):\n        data_block = index_block[i]\n        data = read_block(data_block)\n        append(result, data)\n    return result\n\nfunction write_indexed_file(index_block_num, data):\n    index_block = allocate_block()  // for the index\n    num_blocks = ceil(len(data) / block_size)\n    for i = 0 to num_blocks - 1:\n        data_block = allocate_block()\n        index_block[i] = data_block\n        write_block(data_block, data[i * block_size : (i+1) * block_size])\n    write_block(index_block_num, index_block)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "full-dry-run--small-file-1-block",
      children: "Full Dry Run — Small File (1 block)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "File \"readme.txt\" — 500 bytes (fits in 1 block)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Directory entry: \"readme.txt\" → inode #42\n2. Inode 42 does NOT have indexed allocation (direct pointers used instead)\n3. i_block[0] = 15 → read data block 15\n4. Copy 500 bytes from block 15\nBlocks used: 1 data block + 0 index blocks (direct pointer in inode)\nOverhead: 0 extra blocks\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "full-dry-run--medium-file-100-blocks",
      children: "Full Dry Run — Medium File (100 blocks)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "File \"data.log\" — 400 KB (100 blocks × 4 KB)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Directory: \"data.log\" → inode #55\n2. Inode 55: i_block[0..11] → 12 direct pointers\n              i_block[12] → single indirect block #200\n3. Blocks 0-11: direct → read in 1 step each\n4. Block 12+: read index block 200, get data block pointers\n5. Total index blocks: 1 (single indirect)\nOverhead: 1 block for 100 data blocks = 1% overhead\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "full-dry-run--large-file-2000-blocks",
      children: "Full Dry Run — Large File (2000 blocks)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "File \"video.mp4\" — 8 MB (2000 blocks × 4 KB)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Directory: \"video.mp4\" → inode #88\n2. inode.i_block[0..11] → 12 direct (blocks 0-11)\n   inode.i_block[12] → single indirect block #400\n     Single indirect block 400 contains 1024 pointers (blocks 12-1035)\n   inode.i_block[13] → double indirect block #500\n     Double indirect block 500 → reads indirect block #600\n       Indirect block 600 contains pointers (blocks 1036-1999)\n3. For block #1500:\n   → not in direct (0-11)\n   → not in single indirect (12-1035)\n   → double indirect: entry (1500 - 12 - 1024) = 464\n   → read double indirect block 500 → entry[0] = 600 (since 464 < 1024)\n   → read single indirect block 600 → entry[464] = 890\n   → read data block 890\n4. Total reads for block 1500: index_block(500) + indirect_block(600) + data(890) = 3 reads\nOverhead: 1 single + 1 double + 1 indirect = 3 index blocks for 2000 data blocks = 0.15% overhead\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-indexed-variants",
      children: "5.4 Indexed Variants"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "541-linked-indexed-allocation",
      children: "5.4.1 Linked Indexed Allocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An index block is too small to hold all pointers. Multiple index blocks are linked together."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Linked Index Blocks:\nIndex Block 1: [p1][p2][p3]...[p1023] → Index Block 2\nIndex Block 2: [p1024][p1025]...[p2047] → Index Block 3\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Max file size"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(pointers_per_block^2) × block_size"
      }), " — very large.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Drawback"
      }), ": Large files require O(n) index block reads for the last block."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "542-multilevel-indexed-allocation",
      children: "5.4.2 Multilevel Indexed Allocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Index blocks point to other index blocks, forming a tree. The Unix inode uses this: single, double, triple indirect."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Multilevel Index (Unix inode):\ninode → [direct 0..11] → data blocks (12)\n      → [single indirect] → [indirect block] → data blocks (1024)\n      → [double indirect] → [indirect block] → [indirect block] → data (1024²)\n      → [triple indirect] → [indirect] → [indirect] → [indirect] → data (1024³)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Max file size (4 KB blocks, 4-byte pointers):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "12 × 4 KB + 1024 × 4 KB + 1024² × 4 KB + 1024³ × 4 KB ≈ 4 TB\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "543-combined-scheme-unix-inode--ext4-extents",
      children: "5.4.3 Combined Scheme (Unix Inode / ext4 Extents)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modern ext4 uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "extents"
      }), " instead of the traditional block pointer scheme. An extent is a range of contiguous blocks:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ext4 Extent:\nstruct ext4_extent {\n    uint32_t ee_block;    // First logical block\n    uint16_t ee_len;     // Number of blocks in extent\n    uint16_t ee_start_hi; // High 16 bits of start\n    uint32_t ee_start_lo; // Low 32 bits of start\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A single extent can describe up to 32,768 contiguous blocks (128 MB with 4 KB blocks). One inode can store 4 extents directly. If more are needed, a extent tree (B-tree) is used."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation--indexed-allocation",
      children: "C++ Implementation — Indexed Allocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <cstring>\n\nconst int BLOCK_SIZE = 4096;\nconst int POINTERS_PER_BLOCK = BLOCK_SIZE / sizeof(int);  // 1024 for 4-byte ints\n\nclass IndexedFS {\n    char disk[4096][BLOCK_SIZE];\n    bool bitmap[4096];\n\n    struct FileRecord {\n        std::string name;\n        int index_block;  // points to the index block\n    };\n    std::vector<FileRecord> files;\n\npublic:\n    IndexedFS() {\n        std::memset(disk, 0, sizeof(disk));\n        std::memset(bitmap, 0, sizeof(bitmap));\n    }\n\n    int allocate_block() {\n        for (int i = 0; i < 4096; i++) {\n            if (!bitmap[i]) {\n                bitmap[i] = true;\n                return i;\n            }\n        }\n        return -1;\n    }\n\n    bool create_file(const std::string& name, const char* data, int len) {\n        int num_data_blocks = (len + BLOCK_SIZE - 1) / BLOCK_SIZE;\n        if (num_data_blocks == 0) num_data_blocks = 1;\n\n        int idx_block = allocate_block();\n        if (idx_block < 0) return false;\n\n        int* index = reinterpret_cast<int*>(disk[idx_block]);\n        std::memset(index, -1, BLOCK_SIZE);\n\n        int written = 0;\n        for (int i = 0; i < num_data_blocks; i++) {\n            int db = allocate_block();\n            if (db < 0) {\n                // Free allocated blocks and index block\n                for (int j = 0; j < i; j++) {\n                    bitmap[index[j]] = false;\n                }\n                bitmap[idx_block] = false;\n                return false;\n            }\n            index[i] = db;\n            int copy_size = (len > BLOCK_SIZE) ? BLOCK_SIZE : len;\n            std::memcpy(disk[db], data + written, copy_size);\n            written += copy_size;\n            len -= copy_size;\n        }\n\n        files.push_back({name, idx_block});\n        std::cout << \"Created \" << name << \" (index=\" << idx_block\n                  << \", data_blocks=\" << num_data_blocks << \")\\n\";\n        return true;\n    }\n\n    std::string read_file(const std::string& name) {\n        for (const auto& f : files) {\n            if (f.name == name) {\n                std::string result;\n                int* index = reinterpret_cast<int*>(disk[f.index_block]);\n                for (int i = 0; i < POINTERS_PER_BLOCK; i++) {\n                    if (index[i] < 0) break;\n                    result.append(disk[index[i]], BLOCK_SIZE);\n                }\n                result.resize(strlen(result.c_str()));\n                return result;\n            }\n        }\n        return \"\";\n    }\n\n    bool read_block_at(const std::string& name, int block_index, char* out) {\n        for (const auto& f : files) {\n            if (f.name == name) {\n                int* index = reinterpret_cast<int*>(disk[f.index_block]);\n                if (block_index < 0 || block_index >= POINTERS_PER_BLOCK)\n                    return false;\n                int data_block = index[block_index];\n                if (data_block < 0) return false;\n                std::memcpy(out, disk[data_block], BLOCK_SIZE);\n                return true;\n            }\n        }\n        return false;\n    }\n\n    void print_file_index(const std::string& name) {\n        for (const auto& f : files) {\n            if (f.name == name) {\n                int* index = reinterpret_cast<int*>(disk[f.index_block]);\n                std::cout << \"Index block \" << f.index_block << \" for \" << name << \":\\n  \";\n                int count = 0;\n                for (int i = 0; i < POINTERS_PER_BLOCK; i++) {\n                    if (index[i] < 0) break;\n                    std::cout << index[i] << \" \";\n                    count++;\n                    if (count % 16 == 0) std::cout << \"\\n  \";\n                }\n                std::cout << \"\\n  (\" << count << \" data blocks)\\n\";\n                return;\n            }\n        }\n    }\n};\n\nint main() {\n    IndexedFS fs;\n\n    // Small file\n    fs.create_file(\"notes.txt\", \"Small file using indexed allocation.\", 40);\n\n    // Medium file\n    std::string big_data;\n    for (int i = 0; i < 5000; i++) big_data += \"Block of data for indexed allocation test. \";\n    fs.create_file(\"medium.txt\", big_data.c_str(), big_data.length());\n\n    fs.print_file_index(\"notes.txt\");\n    fs.print_file_index(\"medium.txt\");\n\n    char buf[BLOCK_SIZE];\n    if (fs.read_block_at(\"medium.txt\", 0, buf)) {\n        std::cout << \"First block of medium.txt: \"\n                  << std::string(buf, 60) << \"...\\n\";\n    }\n    if (fs.read_block_at(\"medium.txt\", 1, buf)) {\n        std::cout << \"Second block: \"\n                  << std::string(buf, 60) << \"...\\n\";\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation--indexed-allocation",
      children: "Python Implementation — Indexed Allocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import struct\n\nBLOCK_SIZE = 4096\nPOINTERS_PER_BLOCK = BLOCK_SIZE // 4  # 1024\n\nclass IndexedFS:\n    def __init__(self, num_blocks=4096):\n        self.disk = bytearray(num_blocks * BLOCK_SIZE)\n        self.bitmap = [False] * num_blocks\n        self.files = {}\n\n    def _alloc(self):\n        for i, used in enumerate(self.bitmap):\n            if not used:\n                self.bitmap[i] = True\n                return i\n        raise Exception(\"Disk full\")\n\n    def _read_index(self, block):\n        start = block * BLOCK_SIZE\n        return list(struct.unpack_from(f'<{POINTERS_PER_BLOCK}i', self.disk, start))\n\n    def _write_index(self, block, pointers):\n        start = block * BLOCK_SIZE\n        data = list(pointers) + [-1] * (POINTERS_PER_BLOCK - len(pointers))\n        struct.pack_into(f'<{POINTERS_PER_BLOCK}i', self.disk, start, *data)\n\n    def create_file(self, name, data):\n        num_blocks = max(1, (len(data) + BLOCK_SIZE - 1) // BLOCK_SIZE)\n        idx_block = self._alloc()\n        pointers = []\n\n        for i in range(num_blocks):\n            db = self._alloc()\n            pointers.append(db)\n            start = db * BLOCK_SIZE\n            chunk = data[i * BLOCK_SIZE:(i + 1) * BLOCK_SIZE]\n            self.disk[start:start + len(chunk)] = chunk\n\n        self._write_index(idx_block, pointers)\n        self.files[name] = idx_block\n        print(f\"Created '{name}': index={idx_block}, data_blocks={num_blocks}\")\n\n    def read_file(self, name):\n        if name not in self.files:\n            return b\"\"\n        idx = self.files[name]\n        pointers = self._read_index(idx)\n        result = bytearray()\n        for p in pointers:\n            if p < 0:\n                break\n            start = p * BLOCK_SIZE\n            result.extend(self.disk[start:start + BLOCK_SIZE])\n        return bytes(result).rstrip(b'\\x00')\n\n    def read_block_direct(self, name, block_idx):\n        \"\"\"Direct access — O(1) via index block\"\"\"\n        if name not in self.files:\n            return None\n        idx = self.files[name]\n        pointers = self._read_index(idx)\n        if block_idx >= len(pointers) or pointers[block_idx] < 0:\n            return None\n        p = pointers[block_idx]\n        start = p * BLOCK_SIZE\n        return bytes(self.disk[start:start + BLOCK_SIZE])\n\n    def print_index(self, name):\n        if name not in self.files:\n            return\n        idx = self.files[name]\n        pointers = self._read_index(idx)\n        valid = [p for p in pointers if p >= 0]\n        print(f\"Index block {idx} for '{name}': {valid[:20]}... ({len(valid)} total)\")\n\n\nclass MultilevelIndexFS:\n    \"\"\"Simulates Unix inode multi-level indexing\"\"\"\n    def __init__(self, num_blocks=16384):\n        self.disk = bytearray(num_blocks * BLOCK_SIZE)\n        self.bitmap = [False] * num_blocks\n        self.files = {}\n        self.NUM_DIRECT = 12\n        self.PPB = BLOCK_SIZE // 4  # 1024\n\n    def _alloc(self):\n        for i, used in enumerate(self.bitmap):\n            if not used:\n                self.bitmap[i] = True\n                return i\n        raise Exception(\"Disk full\")\n\n    def create_file(self, name, data):\n        num_blocks = max(1, (len(data) + BLOCK_SIZE - 1) // BLOCK_SIZE)\n        inode = {\"direct\": [-1] * self.NUM_DIRECT,\n                 \"single\": -1, \"double\": -1, \"triple\": -1, \"size\": len(data)}\n\n        def write_direct(i, db):\n            start = db * BLOCK_SIZE\n            chunk = data[i * BLOCK_SIZE:(i + 1) * BLOCK_SIZE]\n            self.disk[start:start + len(chunk)] = chunk\n\n        block_idx = 0\n\n        # Fill direct pointers (0-11)\n        while block_idx < num_blocks and block_idx < self.NUM_DIRECT:\n            db = self._alloc()\n            inode[\"direct\"][block_idx] = db\n            write_direct(block_idx, db)\n            block_idx += 1\n\n        # Single indirect\n        if block_idx < num_blocks:\n            sib = self._alloc()\n            inode[\"single\"] = sib\n            si_pointers = []\n            while block_idx < num_blocks and len(si_pointers) < self.PPB:\n                db = self._alloc()\n                si_pointers.append(db)\n                write_direct(block_idx, db)\n                block_idx += 1\n            # Write single indirect block\n            start = sib * BLOCK_SIZE\n            data_bytes = struct.pack(f'<{self.PPB}i',\n                                     *si_pointers + [-1] * (self.PPB - len(si_pointers)))\n            self.disk[start:start + len(data_bytes)] = data_bytes\n\n        self.files[name] = inode\n\n    def read_block_at(self, name, logical_block):\n        if name not in self.files:\n            return None\n        inode = self.files[name]\n\n        if logical_block < self.NUM_DIRECT:\n            db = inode[\"direct\"][logical_block]\n        else:\n            offset = logical_block - self.NUM_DIRECT\n            if offset < self.PPB:\n                sib = inode[\"single\"]\n                start = sib * BLOCK_SIZE + offset * 4\n                db = struct.unpack_from('<i', self.disk, start)[0]\n            else:\n                return None  # double/triple not implemented for brevity\n\n        if db < 0:\n            return None\n        start = db * BLOCK_SIZE\n        return bytes(self.disk[start:start + BLOCK_SIZE])\n\n    def print_inode(self, name):\n        if name not in self.files:\n            return\n        inode = self.files[name]\n        direct = [d for d in inode[\"direct\"] if d >= 0]\n        print(f\"Inode for '{name}': size={inode['size']}\")\n        print(f\"  Direct ({len(direct)}): {direct}\")\n        print(f\"  Single indirect: {inode['single']}\")\n\n\nif __name__ == \"__main__\":\n    ifs = IndexedFS()\n    ifs.create_file(\"small.txt\", b\"Hello from indexed allocation!\")\n    print(ifs.read_file(\"small.txt\").decode())\n    print(\"Direct access block 0:\", ifs.read_block_direct(\"small.txt\", 0)[:20])\n\n    ifs.create_file(\"big.txt\", b\"X\" * 50000)\n    ifs.print_index(\"big.txt\")\n\n    print(\"\\n=== Multilevel (Unix inode) ===\")\n    mfs = MultilevelIndexFS()\n    mfs.create_file(\"medium.bin\", b\"Y\" * 100000)\n    block_0 = mfs.read_block_at(\"medium.bin\", 0)\n    block_5 = mfs.read_block_at(\"medium.bin\", 5)\n    print(f\"Block 0: {block_0[:20]}\")\n    print(f\"Block 5: {block_5[:20]}\")\n    mfs.print_inode(\"medium.bin\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--indexed-allocation",
      children: "Complexity Analysis — Indexed Allocation"
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
            children: "Read sequential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index block gives data block directly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read block at position i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct index into block[i]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate file with N blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must allocate N data blocks + 1 index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Small file (< pointer count)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) index, O(1) data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single index block read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large file (multi-level)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log(N)) pointer reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must walk indirect tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) to O(log N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on indirection depth"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(1) for random access"
      }), ": The index block is an array. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "block[i]"
      }), " gives the i-th data block address directly. Even in multi-level schemes, the depth is fixed (max 4 for triple indirect, or effectively O(1) for ext4 extents)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-3",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Direct access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) via index block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No external fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal: index block overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File growth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to add blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May need new index block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Small files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Waste: full index block for tiny file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-level handles huge sizes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple indirection reads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 full block per file minimum"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Small file (1 block)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uses entire index block (4096 bytes for 1 data block) — 100% overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Index block exhaustion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must link to another index block or use multi-level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Corrupted index block"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entire file becomes inaccessible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Very large file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-level pointers add latency but work"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sparse file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index entries point to 0 (unallocated); read returns zeros"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-allocation-methods-comparison",
      children: "6. Allocation Methods Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-7",
      children: "Real-World Analogy"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Contiguous"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rows of lockers: each person gets a consecutive set. Moving requires finding a new row."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linked (FAT)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Treasure hunt: each clue points to the next. FAT = a master map showing all clue connections."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Indexed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Library catalog: one card per book listing all shelf locations."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-level (Unix)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filing cabinet: drawer tabs → folder tabs → document pages."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "full-comparison-table",
      children: "Full Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Contiguous"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linked (no FAT)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linked (with FAT)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Indexed (single)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Indexed (multilevel)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "External fragmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Internal fragmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last block only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last block + pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last block only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last block + index block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last block + index tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Direct (random) access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) with cached FAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) to O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sequential access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File growth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impossible without copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivial (append link)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivial (FAT update)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy (add to index)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-8 bytes/block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FAT size (fixed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 block/file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple blocks for large files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Maximum file size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Largest free hole"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Volume size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PPB × block_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(PPB^levels) × block_size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reliability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (chain breaks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better (FAT on disk)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (index separate)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (tree pointers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-world use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare (obsolete)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Obsolete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FAT32, exFAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some embedded FS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ext2/3/4, UFS, XFS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-which",
      children: "When to Use Which"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tiny embedded system (8 KB files)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero overhead, simple"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "USB flash drive (cross-platform)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FAT32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal compatibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database needing random access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indexed (ext4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) direct access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Video recording (sequential write)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous extents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No fragmentation, fast"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Large file server"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multilevel (XFS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles huge files, good concurrency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Log file (append only)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy append, fixed head"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OS root filesystem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indexed (ext4 extents)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balanced: small files fast, large files work"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-free-space-management",
      children: "7. Free Space Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-8",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Managing free space on disk is like a hotel's room availability system. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bit vector"
      }), " is a giant whiteboard with green/red magnets for each room. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "linked list"
      }), " is a concierge who asks each empty room \"which room is also empty?\" The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "grouping"
      }), " method is a list of lists — the concierge has a card with 50 rooms, and each of those rooms has a card with 50 more. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Counting"
      }), " tracks runs of adjacent empty rooms for contiguous allocation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-bit-vector-bitmap",
      children: "7.1 Bit Vector (Bitmap)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "One bit per block: 1 = free, 0 = allocated."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "memory-calculation",
      children: "Memory Calculation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Disk Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Block Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Blocks"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bitmap Size"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "262,144"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 KB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "268,435,456"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 MB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1,073,741,824"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128 MB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16 TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4,294,967,296"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "512 MB"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode--bitmap-operations",
      children: "Pseudocode — Bitmap Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function find_first_free(bitmap):\n    for each word in bitmap:\n        if word != 0xFFFFFFFF:  // has at least one zero (free) bit\n            for bit = 0 to 31:\n                if (word & (1 << bit)) == 0:\n                    return word_index * 32 + bit\n    return -1  // no free blocks\n\nfunction find_contiguous_free(bitmap, count):\n    // Scan for 'count' consecutive free bits\n    run = 0\n    for i = 0 to total_blocks - 1:\n        if is_free(bitmap, i):\n            run++\n            if run == count:\n                return i - count + 1\n        else:\n            run = 0\n    return -1\n\nfunction mark_used(bitmap, block):\n    bitmap[block / 8] &= ~(1 << (block % 8))\n\nfunction mark_free(bitmap, block):\n    bitmap[block / 8] |= (1 << (block % 8))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-linked-list-free-list",
      children: "7.2 Linked List (Free List)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Free blocks form a linked list. The superblock stores a pointer to the first free block."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Superblock → FreeBlock_1 → FreeBlock_5 → FreeBlock_12 → FreeBlock_33 → ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode--free-list",
      children: "Pseudocode — Free List"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function allocate_from_list():\n    if superblock.free_list_head == -1:\n        return -1  // no free blocks\n    block = superblock.free_list_head\n    superblock.free_list_head = read_next_free(block)\n    return block\n\nfunction free_to_list(block):\n    write_next_free(block, superblock.free_list_head)\n    superblock.free_list_head = block\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-grouping",
      children: "7.3 Grouping"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Store pointers to free blocks ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "inside"
      }), " free blocks. The first free block contains pointers to the next N free blocks, and the last of those pointers points to the next free block that contains more pointers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Grouping:\nSuperblock → FreeBlock_A [ptr to B, ptr to C, ptr to D, ..., ptr to N, next → FreeBlock_X]\nFreeBlock_X  [ptr to Y, ptr to Z, ...]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This gives O(1) allocation and deallocation in most cases."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-counting",
      children: "7.4 Counting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Track ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "extents"
      }), " (runs of consecutive free blocks). Each entry stores a starting block and a count."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Counting table:\n(start=10, len=5)  → free blocks 10,11,12,13,14\n(start=30, len=3)  → free blocks 30,31,32\n(start=100, len=20) → free blocks 100-119\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode--counting",
      children: "Pseudocode — Counting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function allocate_counting(count_needed):\n    for each extent (start, len):\n        if len >= count_needed:\n            allocate start for count_needed blocks\n            update extent: start += count_needed, len -= count_needed\n            if len == 0: remove extent\n            return start\n    return -1\n\nfunction free_counting(block, count):\n    merge with adjacent extents if possible\n    otherwise add new extent (block, count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation--four-free-space-managers",
      children: "C++ Implementation — Four Free Space Managers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <list>\n#include <cstring>\n#include <algorithm>\n\n// 1. Bitmap Free Space Manager\nclass BitmapFreeSpace {\n    unsigned char* bitmap;\n    int total_blocks;\npublic:\n    BitmapFreeSpace(int blocks) : total_blocks(blocks) {\n        int bytes = (blocks + 7) / 8;\n        bitmap = new unsigned char[bytes];\n        std::memset(bitmap, 0xFF, bytes);  // all 1 = free\n        // Mark last bits beyond total_blocks as 0 (used)\n        for (int i = blocks; i < bytes * 8; i++) {\n            bitmap[i / 8] &= ~(1 << (i % 8));\n        }\n    }\n\n    bool is_free(int block) {\n        return bitmap[block / 8] & (1 << (block % 8));\n    }\n\n    int allocate() {\n        for (int i = 0; i < total_blocks; i++) {\n            if (is_free(i)) {\n                bitmap[i / 8] &= ~(1 << (i % 8));\n                return i;\n            }\n        }\n        return -1;\n    }\n\n    int allocate_contiguous(int count) {\n        int run = 0;\n        for (int i = 0; i < total_blocks; i++) {\n            if (is_free(i)) {\n                run++;\n                if (run == count) {\n                    int start = i - count + 1;\n                    for (int j = start; j <= i; j++) {\n                        bitmap[j / 8] &= ~(1 << (j % 8));\n                    }\n                    return start;\n                }\n            } else {\n                run = 0;\n            }\n        }\n        return -1;\n    }\n\n    void free_block(int block) {\n        bitmap[block / 8] |= (1 << (block % 8));\n    }\n\n    int free_count() {\n        int count = 0;\n        for (int i = 0; i < total_blocks; i++) {\n            if (is_free(i)) count++;\n        }\n        return count;\n    }\n\n    ~BitmapFreeSpace() { delete[] bitmap; }\n};\n\n// 2. Linked List Free Space Manager\nclass LinkedListFreeSpace {\n    struct FreeBlock {\n        int block_num;\n    };\n    FreeBlock* free_blocks;\n    int head;\n    int total_blocks;\n    bool* allocated;\npublic:\n    LinkedListFreeSpace(int blocks) : head(-1), total_blocks(blocks) {\n        free_blocks = new FreeBlock[blocks];\n        allocated = new bool[blocks]();\n        // Initially all blocks are free, chain them\n        for (int i = 0; i < blocks - 1; i++) {\n            free_blocks[i].block_num = i + 1;\n        }\n        free_blocks[blocks - 1].block_num = -1;\n        head = 0;\n    }\n\n    int allocate() {\n        if (head < 0) return -1;\n        int block = head;\n        head = free_blocks[block].block_num;\n        allocated[block] = true;\n        return block;\n    }\n\n    void free_block(int block) {\n        if (block < 0 || block >= total_blocks) return;\n        allocated[block] = false;\n        free_blocks[block].block_num = head;\n        head = block;\n    }\n\n    int free_count() {\n        int count = 0;\n        int cur = head;\n        while (cur >= 0) {\n            count++;\n            cur = free_blocks[cur].block_num;\n        }\n        return count;\n    }\n\n    ~LinkedListFreeSpace() {\n        delete[] free_blocks;\n        delete[] allocated;\n    }\n};\n\n// 3. Grouping Free Space Manager\nclass GroupingFreeSpace {\n    static const int GROUP_SIZE = 100;\n    std::vector<int> free_list;  // small list in memory\n    int total_blocks;\npublic:\n    GroupingFreeSpace(int blocks) : total_blocks(blocks) {\n        for (int i = blocks - 1; i >= 0; i--) {\n            free_list.push_back(i);\n        }\n    }\n\n    int allocate() {\n        if (free_list.empty()) return -1;\n        int block = free_list.back();\n        free_list.pop_back();\n        return block;\n    }\n\n    void free_block(int block) {\n        free_list.push_back(block);\n    }\n\n    int free_count() { return free_list.size(); }\n};\n\n// 4. Counting Free Space Manager\nclass CountingFreeSpace {\n    struct Extent {\n        int start, len;\n    };\n    std::list<Extent> extents;\n    int total_blocks;\npublic:\n    CountingFreeSpace(int blocks) : total_blocks(blocks) {\n        extents.push_back({0, blocks});\n    }\n\n    int allocate(int needed) {\n        for (auto it = extents.begin(); it != extents.end(); ++it) {\n            if (it->len >= needed) {\n                int block = it->start;\n                it->start += needed;\n                it->len -= needed;\n                if (it->len == 0) extents.erase(it);\n                return block;\n            }\n        }\n        return -1;\n    }\n\n    void free_blocks(int block, int count) {\n        // Merge with adjacent extents\n        Extent new_ext = {block, count};\n        for (auto it = extents.begin(); it != extents.end(); ) {\n            if (it->start == block + count) {\n                new_ext.len += it->len;\n                it = extents.erase(it);\n            } else if (it->start + it->len == block) {\n                new_ext.start = it->start;\n                new_ext.len += it->len;\n                it = extents.erase(it);\n            } else {\n                ++it;\n            }\n        }\n        extents.push_back(new_ext);\n        extents.sort([](const Extent& a, const Extent& b) {\n            return a.start < b.start;\n        });\n    }\n\n    void print_extents() {\n        std::cout << \"Free extents:\\n\";\n        for (const auto& e : extents) {\n            std::cout << \"  blocks \" << e.start << \"-\" << e.start + e.len - 1\n                      << \" (\" << e.len << \" blocks)\\n\";\n        }\n    }\n\n    int free_count() {\n        int total = 0;\n        for (const auto& e : extents) total += e.len;\n        return total;\n    }\n};\n\nint main() {\n    std::cout << \"=== Bitmap Free Space ===\\n\";\n    BitmapFreeSpace bm(32);\n    int b1 = bm.allocate();\n    int b2 = bm.allocate_contiguous(3);\n    std::cout << \"Allocated blocks: \" << b1 << \", \" << b2 << \"-\" << b2 + 2 << \"\\n\";\n    bm.free_block(b1);\n    std::cout << \"Free count: \" << bm.free_count() << \"\\n\";\n\n    std::cout << \"\\n=== Linked List Free Space ===\\n\";\n    LinkedListFreeSpace ll(32);\n    int b = ll.allocate();\n    std::cout << \"Allocated block: \" << b << \"\\n\";\n    ll.free_block(b);\n    std::cout << \"Free count: \" << ll.free_count() << \"\\n\";\n\n    std::cout << \"\\n=== Counting Free Space ===\\n\";\n    CountingFreeSpace cf(64);\n    cf.print_extents();\n    int c1 = cf.allocate(5);\n    std::cout << \"Allocated 5 blocks starting at \" << c1 << \"\\n\";\n    cf.print_extents();\n    cf.free_blocks(c1, 5);\n    std::cout << \"After freeing:\\n\";\n    cf.print_extents();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation--four-free-space-managers",
      children: "Python Implementation — Four Free Space Managers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# 1. Bitmap Free Space\nclass BitmapFS:\n    def __init__(self, total_blocks):\n        self.total = total_blocks\n        self.bitmap = bytearray((total_blocks + 7) // 8)\n        # Set all bits to 1 (free)\n        for i in range(total_blocks):\n            self.bitmap[i // 8] |= (1 << (i % 8))\n\n    def _is_free(self, block):\n        return bool(self.bitmap[block // 8] & (1 << (block % 8)))\n\n    def allocate(self):\n        for i in range(self.total):\n            if self._is_free(i):\n                self.bitmap[i // 8] &= ~(1 << (i % 8))\n                return i\n        return -1\n\n    def allocate_contiguous(self, count):\n        run = 0\n        for i in range(self.total):\n            if self._is_free(i):\n                run += 1\n                if run == count:\n                    start = i - count + 1\n                    for j in range(start, i + 1):\n                        self.bitmap[j // 8] &= ~(1 << (j % 8))\n                    return start\n            else:\n                run = 0\n        return -1\n\n    def free_block(self, block):\n        self.bitmap[block // 8] |= (1 << (block % 8))\n\n    def free_count(self):\n        return sum(1 for i in range(self.total) if self._is_free(i))\n\n    def __str__(self):\n        return ''.join(str(b) for b in self.bitmap).rstrip('0')\n\n\n# 2. Linked List Free Space\nclass LinkedListFS:\n    def __init__(self, total_blocks):\n        self.head = 0\n        self.next_free = list(range(1, total_blocks)) + [-1]\n        self.allocated = [False] * total_blocks\n\n    def allocate(self):\n        if self.head < 0:\n            return -1\n        block = self.head\n        self.head = self.next_free[block]\n        self.allocated[block] = True\n        return block\n\n    def free_block(self, block):\n        if block < 0 or block >= len(self.next_free):\n            return\n        self.allocated[block] = False\n        self.next_free[block] = self.head\n        self.head = block\n\n    def free_count(self):\n        count = 0\n        cur = self.head\n        while cur >= 0:\n            count += 1\n            cur = self.next_free[cur]\n        return count\n\n\n# 3. Grouping Free Space\nclass GroupingFS:\n    def __init__(self, total_blocks):\n        self.free = list(range(total_blocks - 1, -1, -1))\n\n    def allocate(self):\n        return self.free.pop() if self.free else -1\n\n    def free_block(self, block):\n        self.free.append(block)\n\n    def free_count(self):\n        return len(self.free)\n\n\n# 4. Counting Free Space (extent-based)\nclass CountingFS:\n    def __init__(self, total_blocks):\n        self.extents = [(0, total_blocks)]\n\n    def allocate(self, needed):\n        for i, (start, length) in enumerate(self.extents):\n            if length >= needed:\n                self.extents[i] = (start + needed, length - needed)\n                if self.extents[i][1] == 0:\n                    self.extents.pop(i)\n                return start\n        return -1\n\n    def free_blocks(self, block, count):\n        new_start, new_len = block, count\n        merged = []\n        for start, length in self.extents:\n            if start == block + count:\n                new_len += length\n            elif start + length == block:\n                new_start = start\n                new_len += length\n            else:\n                merged.append((start, length))\n        merged.append((new_start, new_len))\n        merged.sort()\n        self.extents = merged\n\n    def print_extents(self):\n        for start, length in self.extents:\n            print(f\"  [{start}, {start + length - 1}] len={length}\")\n\n    def free_count(self):\n        return sum(l for _, l in self.extents)\n\n\nif __name__ == \"__main__\":\n    print(\"=== Bitmap ===\")\n    bm = BitmapFS(32)\n    a = bm.allocate()\n    b = bm.allocate_contiguous(4)\n    print(f\"Allocated: {a}, {b}-{b+3}\")\n    bm.free_block(a)\n    print(f\"Free count: {bm.free_count()}\")\n\n    print(\"\\n=== Counting ===\")\n    cf = CountingFS(64)\n    print(\"Initial extents:\")\n    cf.print_extents()\n    c1 = cf.allocate(10)\n    print(f\"Allocated 10 blocks at {c1}\")\n    cf.free_blocks(20, 5)\n    cf.print_extents()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "free-space-management-comparison",
      children: "Free Space Management Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Allocation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deallocation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Worst For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bit vector"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(blocks) scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) bit clear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (32 MB/TB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General purpose, contiguous search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very large disks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linked list"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal (1 ptr/block used)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple embedded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long chains, no contiguity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Grouping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (1 ptr/group)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequent alloc/free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory constrained"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Counting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(extents)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(extents) merge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (per-extent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highly fragmented disk"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--why",
      children: "Complexity Analysis — Why"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Allocation Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bitmap (first fit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(blocks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must scan potentially all bits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bitmap (optimized w/ word-level)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(blocks/32)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan 32-bit words, then find bit within word"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linked list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop head of list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Grouping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop from in-memory group"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Counting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(extents)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan extent list (small)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why linked list is O(1)"
      }), ": The head pointer is stored in the superblock. Dequeue it and update — two pointer operations regardless of list size."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why bitmap can be slow"
      }), ": For a 1 TB disk, scanning 268 million bits looking for a free block is expensive. Real systems use block-group-local bitmaps to keep each scan small."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases--free-space",
      children: "Edge Cases — Free Space"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bitmap"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linked List"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Counting"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disk full"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All bits 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "head = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No extents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single block free"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One bit set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One node in chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One extent of length 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Highly fragmented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many 0/1 transitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many small extents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Allocate contiguous"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must scan for run"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impossible directly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find extent with enough length"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrent allocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need lock on bitmap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need lock on head"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need lock on extent list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recovery after crash"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must rebuild by scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain may be broken"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extents must be rebuilt"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-interview-corner",
      children: "8. Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-fat-vs-inode--key-differences",
      children: "Q1: FAT vs Inode — Key Differences"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FAT (File Allocation Table)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inode (Unix)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Structure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single table for entire volume"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-file inode with pointers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Location"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed reserved area at partition start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spread across block groups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Direct access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Walk FAT chain (O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct/indirect pointers (O(1))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Directory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directory entries contain first cluster"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directory entries contain inode number"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Redundancy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single FAT (some have backup)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inode table has block group backups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Max file size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Volume size (4 GB for FAT32)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~4 TB with triple indirect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Metadata"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stored in directory entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stored in inode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hard links"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported (link count)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FAT cached in memory is fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-level can require multiple I/Os"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Used by"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MS-DOS, Windows (legacy), USB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux, BSD, macOS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-block-size-vs-performance--tradeoff",
      children: "Q2: Block Size vs Performance — Tradeoff"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Block Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Small Files"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Large Files"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Waste"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Throughput"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "512 bytes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (little waste)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (many seeks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1 KB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1% typical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2 KB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2% typical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4 KB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (40% waste on tiny files)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (fewer seeks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 4 KB/file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "8 KB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 8 KB/file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "64 KB (NTFS large cluster)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terrible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal for large files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extreme waste"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max throughput"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key formula"
      }), ": Internal fragmentation per file averages ", (0,jsx_runtime.jsx)(_components.code, {
        children: "block_size / 2"
      }), ". For a 4 KB block, each file wastes ~2 KB on average. With 100,000 small files, that's 200 MB of waste."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview answer framework"
      }), ": \"The optimal block size depends on the workload. For general-purpose systems, 4 KB is a common sweet spot: it keeps internal fragmentation under 2 KB per file while providing good throughput for large sequential I/O. Databases and video editing systems benefit from larger blocks (64 KB+), while systems with many tiny configuration files might prefer 1 KB blocks.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-file-system-overhead-breakdown",
      children: "Q3: File System Overhead Breakdown"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ext4 overhead on a 100 GB partition with 4 KB blocks:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "% of Volume"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Superblock + backups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.001%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Block group descriptors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~8 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.008%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inode table (128 bytes × number of inodes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~200 MB (1.6M inodes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.2%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Block bitmap (1 bit per block)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.003%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inode bitmap (1 bit per inode)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.2 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0002%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Journal (default 128 MB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~128 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.128%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reserved blocks for root (5%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total usable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "~94.6 GB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "~94.6%"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NTFS overhead:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MFT reserved zone: 12.5% of volume by default"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MFT entry (1 KB per file/directory)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$Bitmap, $LogFile, $Volume, $AttrDef, etc. (system metadata files)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight"
      }), ": The biggest waste is not metadata — it's internal fragmentation. A 10-byte file wastes 4,086 bytes in a 4 KB block."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q4-how-does-stat-work",
      children: ["Q4: How Does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "stat"
      }), " Work?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "stat"
      }), " system call reads the inode and returns its contents:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ stat /etc/passwd\n  File: /etc/passwd\n  Size: 2645            Blocks: 8          IO Block: 4096   regular file\nDevice: 801h/2049d      Inode: 1310945     Links: 1\nAccess: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)\nAccess: 2024-01-15 10:30:00.000000000 +0100\nModify: 2024-01-10 14:22:00.000000000 +0100\nChange: 2024-01-10 14:22:00.000000000 +0100\n Birth: 2023-12-01 00:00:00.000000000 +0100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What happens internally:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The VFS receives ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stat()"
        }), " with a pathname."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The directory path is traversed to find the inode number."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The inode is read from the inode table (or cache)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Fields from the inode are copied into the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stat"
        }), " struct."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The struct is returned to userspace."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q5-what-happens-when-you-rm-a-file",
      children: ["Q5: What Happens When You ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rm"
      }), " a File?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The directory entry is removed (name-to-inode mapping is deleted)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The inode's link count is decremented."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If link count reaches 0, the inode is marked free:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All data blocks are added to the free space manager."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The inode slot is marked as free."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the file was open in another process, the data remains accessible via the file descriptor (the in-memory inode persists until the last fd is closed)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-sparse-files",
      children: "Q6: Sparse Files"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sparse file"
      }), " is a file with \"holes\" — regions that were never written. Reading a hole returns zeros. The file system does not allocate disk blocks for holes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sparse file (100 GB logical, 4 KB actual):\nLogical blocks: [0][1][2][3][4][5]...[25,000,000]...[26,214,399]\n                ┌──────┐                                    ┌──────┐\n                │ 4 KB │  hole (no blocks allocated)         │ 4 KB │\n                │ data │  reads as zeros                     │ data │\n                └──────┘                                    └──────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Creating a sparse file:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ truncate -s 100G huge_file.img\n$ ls -lh huge_file.img\n-rw-r--r-- 1 user user 100G Jan 15 12:00 huge_file.img\n$ du -h huge_file.img\n0       huge_file.img    # No blocks actually allocated!\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "du"
      }), " shows actual usage (blocks allocated), while ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ls"
      }), " shows apparent size."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q7-why-does-df-show-different-values-than-adding-all-files",
      children: ["Q7: Why Does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "df"
      }), " Show Different Values Than Adding All Files?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "df"
      }), " command reports total blocks, used blocks, and available blocks. The discrepancy comes from:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reserved blocks"
        }), " (default 5% for root in ext4)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metadata blocks"
        }), " (inode table, bitmaps, superblock)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Journal"
        }), " space"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Directory overhead"
        }), " (even empty directories use an inode and blocks)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-applications-in-real-systems",
      children: "9. Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-ext4-linux",
      children: "9.1 ext4 (Linux)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ext4 Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Directory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Htree (B-tree on hash of filename) — O(log n) lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "156 bytes; extents instead of block pointers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Block allocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extent-based: multi-block allocator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Free space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-block-group bitmap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Journaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Journal (metadata+data), Ordered (default), Writeback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delayed allocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Waits before writing blocks to disk for better placement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Max file size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 TB (extents), 4 KB blocks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ext4 extent tree:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Inode.i_block[0..3] → extent header + 4 extent entries\n                 Each extent: (start block, length, physical start)\nIf 4 extents not enough → extent tree in data blocks (depth 1-2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-ntfs-windows",
      children: "9.2 NTFS (Windows)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NTFS Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Directory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree — O(log n) lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Master File Table (MFT)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array of 1 KB records, each describing one file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File records"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small files stored directly in MFT record (resident data)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Block pointers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extent-based: run-length encoding of contiguous ranges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Free space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$Bitmap file (one bit per cluster)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Journaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$LogFile — redo/undo logging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Max file size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 EB (theoretically), 256 TB practically"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NTFS MFT record layout:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MFT Record (1 KB):\n┌─────────────────────────────────┐\n│ FILE header (magic \"FILE\")      │  ← 42 bytes\n├─────────────────────────────────┤\n│ Fixup array                     │\n├─────────────────────────────────┤\n│ Attribute: $STANDARD_INFORMATION│  ← timestamps, permissions\n│ Attribute: $FILE_NAME           │  ← filename (Unicode)\n│ Attribute: $DATA (resident)     │  ← tiny file stored here!\n│ Attribute: $DATA (non-resident) │  ← run-list for large files\n│ Attribute: $BITMAP              │  ← for directories\n│ ...                             │\n│ Attribute: $END                 │\n└─────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resident vs non-resident data:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File < ~900 bytes: data stored directly in MFT record (0 extra blocks)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File > ~900 bytes: MFT contains run-list of cluster ranges"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-fat32-legacy-windowsremovable",
      children: "9.3 FAT32 (Legacy Windows/Removable)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FAT32 Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Directory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear list (simple)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File allocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FAT table (32-bit entries, 28 usable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Directory entry"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 bytes: name, attributes, times, first cluster, size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Free space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FAT entries = free cluster marker"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Journaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Max file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 GB (filesize stored in 32-bit field)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Max volume"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 TB (with 512-byte sectors)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "FAT32 directory entry (32 bytes):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Byte 0-7:    Filename (8.3 format)\nByte 8-10:   Extension\nByte 11:     Attributes (read-only, hidden, system, volume, directory, archive)\nByte 12-21:  Reserved (for long filename entries)\nByte 22-23:  Creation time\nByte 24-25:  Creation date\nByte 26-27:  First cluster (high 16 bits)\nByte 28-31:  File size\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Long filename (LFN) workaround"
      }), ": Multiple consecutive 32-byte entries with special attributes, preceding the 8.3 entry. First LFN entry = last part of name."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-file-system-performance",
      children: "10. File System Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "caching-buffer-cache",
      children: "Caching (Buffer Cache)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The OS maintains a cache of recently accessed disk blocks in memory. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "page cache"
      }), " (unified with virtual memory) caches file data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Application:   read(fd, buf, 1024)\n                   ↓\nPage Cache:   Check if block is cached\n              ├── Hit:  copy from cache → return\n              └── Miss: read from disk → add to cache → copy → return\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "read-ahead",
      children: "Read-Ahead"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a file is accessed sequentially, the OS anticipates the next few pages and reads them from disk before they are requested."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "journaling",
      children: "Journaling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Instead of directly modifying the file system, changes are first written to a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "journal"
      }), " (a log). After the journal entry is safely on disk, the changes are applied to the actual file system."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Operation: Delete file \"data.txt\"\n\n1. Write to journal: \"about to remove data.txt inode and 3 blocks\"\n2. Write journal commit record\n3. Actually remove the inode and free the blocks\n4. Mark journal entry as checkpointed (can be discarded)\n\nIf the system crashes during step 3:\n  On recovery, the journal contains an uncommitted entry:\n  - If no commit record: discard (changes were not applied)\n  - If commit record present: replay the operation (redo)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Journaling modes"
      }), " (ext3/4):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Journal"
        }), ": Everything is journaled (metadata + data). Most safe, slowest."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ordered"
        }), ": Only metadata is journaled, but data blocks are written first. Good compromise."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Writeback"
        }), ": Only metadata is journaled, no ordering guarantees. Fastest, least safe."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-file-system-types-comparison",
      children: "11. File System Types Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "FS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Volume"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max File Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Journaling"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Features"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FAT32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal compatibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NTFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACLs, compression, encryption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ext4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 EB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extents, delayed allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 EB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 EB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent parallel I/O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Btrfs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 EB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 EB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy-on-write, snapshots, RAID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ZFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 PB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 PB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pooled storage, checksums, COW"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-examples",
      children: "12. Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-simulating-a-simple-file-system",
      children: "Example 1: Simulating a Simple File System"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <string.h>\n#include <stdbool.h>\n\n#define BLOCK_SIZE 4096\n#define NUM_BLOCKS 1024\n#define NUM_INODES 128\n\n// Simulated disk\nchar disk[NUM_BLOCKS][BLOCK_SIZE];\n\n// Bitmap — one bit per block\nunsigned char free_blocks[NUM_BLOCKS / 8];\n\ntypedef struct {\n    bool used;\n    int size;           // File size in bytes\n    int direct_blocks[12];\n    int single_indirect;\n} inode_t;\n\ninode_t inodes[NUM_INODES];\n\nbool is_block_free(int block) {\n    return !(free_blocks[block / 8] & (1 << (block % 8)));\n}\n\nvoid mark_block_used(int block) {\n    free_blocks[block / 8] |= (1 << (block % 8));\n}\n\nvoid mark_block_free(int block) {\n    free_blocks[block / 8] &= ~(1 << (block % 8));\n}\n\nint allocate_block() {\n    for (int i = 0; i < NUM_BLOCKS; i++) {\n        if (is_block_free(i)) {\n            mark_block_used(i);\n            return i;\n        }\n    }\n    return -1;  // No free blocks\n}\n\nint allocate_inode() {\n    for (int i = 0; i < NUM_INODES; i++) {\n        if (!inodes[i].used) {\n            inodes[i].used = true;\n            inodes[i].size = 0;\n            for (int j = 0; j < 12; j++) {\n                inodes[i].direct_blocks[j] = -1;\n            }\n            inodes[i].single_indirect = -1;\n            return i;\n        }\n    }\n    return -1;\n}\n\nint write_file(int inode_num, const char *data, int len) {\n    int blocks_needed = (len + BLOCK_SIZE - 1) / BLOCK_SIZE;\n    int written = 0;\n\n    for (int i = 0; i < blocks_needed && i < 12; i++) {\n        int block = allocate_block();\n        if (block < 0) return -1;\n        inodes[inode_num].direct_blocks[i] = block;\n\n        int to_write = (len > BLOCK_SIZE) ? BLOCK_SIZE : len;\n        memcpy(disk[block], data + written, to_write);\n        written += to_write;\n        len -= to_write;\n    }\n\n    inodes[inode_num].size = written;\n    return written;\n}\n\nvoid read_file(int inode_num, char *buffer) {\n    int remaining = inodes[inode_num].size;\n\n    for (int i = 0; i < 12 && remaining > 0; i++) {\n        int block = inodes[inode_num].direct_blocks[i];\n        if (block < 0) break;\n\n        int to_read = (remaining > BLOCK_SIZE) ? BLOCK_SIZE : remaining;\n        memcpy(buffer, disk[block], to_read);\n        buffer += to_read;\n        remaining -= to_read;\n    }\n}\n\nint main() {\n    memset(free_blocks, 0, sizeof(free_blocks));    // All blocks free\n    memset(inodes, 0, sizeof(inodes));              // No inodes used\n\n    int ino = allocate_inode();\n    printf(\"Allocated inode %d\\n\", ino);\n\n    const char *text = \"Hello from our simulated file system!\";\n    int written = write_file(ino, text, strlen(text) + 1);\n    printf(\"Wrote %d bytes\\n\", written);\n\n    char buffer[256] = {0};\n    read_file(ino, buffer);\n    printf(\"Read back: %s\\n\", buffer);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-linked-allocation-walk",
      children: "Example 2: Linked Allocation Walk"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ ls -la\ntotal 16\ndrwxr-xr-x  2 user user 4096 Jan 15 12:00 .\ndrwxr-xr-x  4 user user 4096 Jan 15 11:00 ..\n-rw-r--r--  1 user user 8192 Jan 15 12:00 testfile.bin\n\n# A 8192-byte file uses 2 blocks of 4096 bytes\n# With linked allocation (4-byte pointers):\n# Block A: [4092 bytes data][→ Block B]\n# Block B: [4092 bytes data][END]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-ext4-inode-exploration",
      children: "Example 3: Ext4 Inode Exploration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ dd if=/dev/sda1 of=superblock.bin bs=1024 count=1 skip=1\n$ hexdump -C superblock.bin | head -5\n00000000  00 00 00 00 00 00 00 00  00 00 04 00 00 00 00 00  |................|\n...\n$ debugfs -R \"stat /etc/passwd\" /dev/sda1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Contiguous"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linked"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Indexed (Unix inode)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ext. Frag."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direct Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Seq. Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-block pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index block(s)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max File Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited by contiguous space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very large (indirect blocks)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Superblock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FS metadata: size, block count, free-block count, inode count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index node — metadata + block pointers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FAT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File Allocation Table — linked-list table cached in memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bit Vector"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitmap where each bit = free (1) or used (0) block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-Level Index"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inode indirect block pointers (single/double/triple)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Extent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous block range (start + length)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MFT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master File Table — NTFS per-file record"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Journal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-ahead log for crash recovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sparse file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File with unallocated holes (reads zeros)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Block group"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ext4 subdivision with local bitmap + inode table"
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
            children: "Embedded System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Smartphone"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extents (multi-block)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linked (FAT table)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max File Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 TiB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 EiB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 GiB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 EiB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FS Check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e2fsck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "chkdsk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "scandisk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fsck_apfs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Journaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (metadata)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (full)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which allocation method suffers external fragmentation?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Contiguous"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Linked"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Indexed"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) FAT"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The inode multi-level index allows:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Faster sequential access"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Small file efficiency + large file support"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Simplified directory lookup"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Journaling without overhead"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Advantage of indexed over linked allocation?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Less overhead"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Support for direct (random) access"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Simpler implementation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Better space utilization"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which free space method uses the least memory?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Bitmap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Linked list"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Grouping"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Counting"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In ext4, what data structure replaced the traditional block pointer scheme?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) FAT"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Extents"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) B-tree"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Hash table"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the primary purpose of a journal in a journaling file system?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Speed up file reads"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Prevent file system corruption after crashes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Compress file data"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Encrypt file metadata"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the ext4 block group, what does the block bitmap track?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Which inodes are in use"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Which data blocks are free/allocated"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Which block groups are active"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Which superblock is primary vs backup"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which file system stores file data directly in the directory entry for very small files?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) ext4"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) NTFS (resident data in MFT)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) FAT32"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) XFS"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the key advantage of extent-based allocation over traditional block pointer schemes?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Simpler code"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Fewer metadata lookups for large contiguous files"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Better support for small files"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) No fragmentation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a 32-bit FAT file system with 4 KB clusters, what is the maximum partition size?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) 4 GB"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 8 GB"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 16 TB"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 2 TB"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-a, 2-b, 3-b, 4-d, 5-b, 6-b, 7-b, 8-b, 9-b, 10-c"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation--journaling-file-system-simulator",
      children: "TypeScript Implementation — Journaling File System Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * JournalingFileSystem: A TypeScript simulator demonstrating\n * write-ahead journaling (WAL) for crash recovery in file systems.\n * \n * Operations are logged to a journal before modifying the main data store.\n * On recovery, the journal is replayed to restore consistency.\n */\n\ntype JournalEntryType = 'CREATE' | 'WRITE' | 'DELETE' | 'CHECKPOINT';\n\ninterface JournalEntry {\n  seq: number;\n  type: JournalEntryType;\n  path: string;\n  data?: string;\n  /** Transaction state: 'pending' | 'committed' | 'rolled-back' */\n  state: 'pending' | 'committed' | 'rolled-back';\n}\n\ninterface FileData {\n  content: string;\n  createdAt: number;\n}\n\nclass JournalingFileSystem {\n  private files: Map<string, FileData> = new Map();\n  private journal: JournalEntry[] = [];\n  private seqCounter: number = 0;\n  private checkpointSeq: number = 0;\n\n  /** Write a journal entry before performing the operation */\n  private logEntry(type: JournalEntryType, path: string, data?: string): number {\n    const seq = ++this.seqCounter;\n    this.journal.push({ seq, type, path, data, state: 'pending' });\n    return seq;\n  }\n\n  /** Mark a journal entry as committed (operation completed successfully) */\n  private commitEntry(seq: number): void {\n    const entry = this.journal.find(e => e.seq === seq);\n    if (entry) entry.state = 'committed';\n  }\n\n  /** CREATE operation with journaling */\n  createFile(path: string, content: string = ''): boolean {\n    if (this.files.has(path)) return false;\n    const seq = this.logEntry('CREATE', path, content);\n    this.files.set(path, { content, createdAt: Date.now() });\n    this.commitEntry(seq);\n    return true;\n  }\n\n  /** WRITE operation with journaling */\n  writeFile(path: string, content: string): boolean {\n    if (!this.files.has(path)) return false;\n    const seq = this.logEntry('WRITE', path, content);\n    this.files.set(path, { content, createdAt: this.files.get(path)!.createdAt });\n    this.commitEntry(seq);\n    return true;\n  }\n\n  /** DELETE operation with journaling */\n  deleteFile(path: string): boolean {\n    if (!this.files.has(path)) return false;\n    const seq = this.logEntry('DELETE', path);\n    this.files.delete(path);\n    this.commitEntry(seq);\n    return true;\n  }\n\n  /** Simulate a crash: clear all in-memory data, journal survives */\n  simulateCrash(): void {\n    console.log('[CRASH] System crashed! In-memory data lost.');\n    this.files.clear();\n  }\n\n  /** Recover from journal: replay all committed entries */\n  recover(): void {\n    console.log('[RECOVERY] Starting journal replay...');\n    const committed = this.journal.filter(\n      e => e.state === 'committed' && e.seq > this.checkpointSeq\n    );\n\n    for (const entry of committed) {\n      switch (entry.type) {\n        case 'CREATE':\n        case 'WRITE':\n          this.files.set(entry.path, {\n            content: entry.data || '',\n            createdAt: Date.now()\n          });\n          console.log(`  [REPLAY] ${entry.type} ${entry.path}`);\n          break;\n        case 'DELETE':\n          this.files.delete(entry.path);\n          console.log(`  [REPLAY] DELETE ${entry.path}`);\n          break;\n        case 'CHECKPOINT':\n          this.checkpointSeq = entry.seq;\n          console.log(`  [REPLAY] CHECKPOINT at seq=${entry.seq}`);\n          break;\n      }\n    }\n    console.log(`[RECOVERY] Replayed ${committed.length} entries. Files restored: ${this.files.size}`);\n  }\n\n  /** Create a checkpoint: truncate the journal up to this point */\n  checkpoint(): void {\n    const seq = ++this.seqCounter;\n    this.journal.push({ seq, type: 'CHECKPOINT', path: '', state: 'committed' });\n    this.checkpointSeq = seq;\n    // Remove old journal entries (simulated by marking)\n    this.journal = this.journal.filter(e => e.seq >= this.checkpointSeq);\n    console.log(`[CHECKPOINT] Journal trimmed at seq=${seq}`);\n  }\n\n  /** Display current file system state */\n  status(): void {\n    console.log('\\n=== File System State ===');\n    if (this.files.size === 0) {\n      console.log('  (empty — no files)');\n    } else {\n      for (const [path, data] of this.files) {\n        console.log(`  ${path}: ${data.content.substring(0, 40)}...`);\n      }\n    }\n    console.log(`  Total files: ${this.files.size}`);\n    console.log(`  Journal entries: ${this.journal.length}`);\n    console.log('========================\\n');\n  }\n}\n\n// Simulate a crash-and-recover scenario\nconst jfs = new JournalingFileSystem();\n\nconsole.log('=== Phase 1: Normal Operations ===');\njfs.createFile('/etc/config.json', '{\"debug\": true}');\njfs.createFile('/var/log/app.log', 'INFO: starting application');\njfs.writeFile('/var/log/app.log', 'INFO: processing request #42');\njfs.status();\n\nconsole.log('=== Phase 2: Crash! ===');\njfs.simulateCrash();\njfs.status(); // Should show (empty)\n\nconsole.log('=== Phase 3: Recovery ===');\njfs.recover();\njfs.status(); // Files should be restored from journal\n\nconsole.log('=== Phase 4: Delete with Journal ===');\njfs.deleteFile('/etc/config.json');\njfs.checkpoint();\njfs.status();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A file system's on-disk structure includes boot block, superblock, free-space management, inode table, and data blocks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inodes store file metadata and point to data blocks via direct, indirect, double, and triple pointers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Allocation methods: contiguous (fast but rigid), linked (flexible but slow), indexed (direct access, overhead)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Free space is tracked with bitmaps (fast, compact), linked lists (simple), grouping (efficient), or counting (contiguous-aware)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contiguous allocation suffers external fragmentation; linked and indexed do not"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Directory implementation: linear list (simple O(n)) vs hash table (fast O(1)) vs B-tree (log n, used in NTFS/ext4)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The page cache dramatically improves performance by caching recently accessed blocks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Journaling prevents file system corruption by writing intent logs before modifying data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ext4 uses extents for contiguous multi-block allocation, replacing the traditional indirect pointer scheme"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NTFS stores small files directly in the MFT record (resident data)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FAT32 is obsolete but still used for removable media due to universal compatibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ext4, NTFS, and XFS are dominant file systems, each with different trade-offs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What information is stored in a superblock? List at least five fields."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is an inode? How does it differ from a directory entry?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the maximum file size for ext4 with 4 KB blocks using the inode structure described (12 direct + single + double + triple indirect). Assume 8-byte block pointers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Draw the bit vector for a disk where blocks 2, 5, 7-10, and 15 are allocated (20 blocks total)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a simple disk simulator with 256 blocks of 512 bytes each. Use a bitmap for free-space management. Support ", (0,jsx_runtime.jsx)(_components.code, {
          children: "write_file(name, data)"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "read_file(name)"
        }), " using indexed allocation."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When a file is deleted, the inode's link count decreases. Only when it reaches 0 is the file truly deleted. Write a program that creates a file, opens it, deletes it (while it's open), and shows that the data is still accessible via the open file descriptor."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare ordered journaling vs writeback journaling in ext4. What differences in recovery behavior do you see?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simulate external fragmentation with contiguous allocation: allocate a mix of files (3 blocks, 5 blocks, 2 blocks, 4 blocks), delete the second and fourth files, then try to allocate a 5-block file. Show the bitmap at each step."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a simplified ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ext4-like"
        }), " file system in a file (using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dd"
        }), " to create a 100 MB disk image). Implement the superblock, block group descriptors, inode table, block bitmap, and inode bitmap. Support ", (0,jsx_runtime.jsx)(_components.code, {
          children: "create_file()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "delete_file()"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "read_file()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dd"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "debugfs"
        }), " to explore a real ext4 file system. Find the location of the superblock, examine the inode of a small file (< 48 KB) and note which direct blocks it uses. Create a large file (> 100 MB) and examine its indirect and double-indirect blocks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design and implement a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "copy-on-write"
        }), " file system in a file-backed image. When a block is modified, allocate a new block and update the inode. This is the approach used by btrfs and ZFS for snapshots."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the four free space management methods in a single program and compare their performance for allocating 1000 blocks with random free/allocate patterns. Measure fragmentation and throughput."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Journal replay analyzer"
          }), ": Extend the TypeScript JournalingFileSystem simulator to handle \"partial crashes\" where some entries are committed and others are still pending. Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "simulatePartialCrash()"
          }), " method that randomly marks half the pending entries as committed before the crash."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Inode pointer walker"
          }), ": Write a program that, given an inode number, walks the direct, single indirect, double indirect, and triple indirect pointer chains on a real ext4 file system (using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "debugfs"
          }), " or direct block device reads). Print the physical block numbers at each level."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Extent tree visualizer"
          }), ": For ext4 files using extents, write a program that reads the extent tree from an inode and prints each extent's logical block, physical block, and length. Show how a fragmented file's extent tree differs from a contiguous file's."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bitmap allocator simulator"
          }), ": Implement a bitmap-based block allocator in TypeScript. Support ", (0,jsx_runtime.jsx)(_components.code, {
            children: "allocate(n)"
          }), " — finds ", (0,jsx_runtime.jsx)(_components.code, {
            children: "n"
          }), " contiguous free blocks (first-fit), and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "free(blockNum, n)"
          }), " — marks them as free. Simulate a workload of 100 random allocate/free operations. Track fragmentation percentage over time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Resident data analyzer"
          }), ": Write a program that identifies which files in an NTFS volume have resident data (stored directly in the MFT record). Compare the distribution of resident vs non-resident files by file size. What is the maximum size for resident data in NTFS?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Directory implementation benchmark"
          }), ": Implement three directory implementations (linear list, sorted array with binary search, and hash table) in TypeScript. Benchmark ", (0,jsx_runtime.jsx)(_components.code, {
            children: "lookup(filename)"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "insert(filename)"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "delete(filename)"
          }), " operations for each. Use 10,000 entries and measure average operation time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "fsck simulation"
          }), ": Write a simplified file system checker that validates: inode-bitmap consistency (every inode referenced by a directory is marked used), block-bitmap consistency (every block referenced by an inode is marked used), directory entry validity (every entry points to a valid inode), and link count accuracy. Report all inconsistencies found."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sparse file support"
          }), ": Extend the inode-based file system simulator to support sparse files — files with unallocated blocks (holes). A hole read returns zeros without consuming disk space. Implement ", (0,jsx_runtime.jsx)(_components.code, {
            children: "seek"
          }), " beyond end-of-file to create holes. Track the difference between logical file size and physical block allocation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Superblock backup comparison"
          }), ": Write a program that reads the primary superblock and all backup superblocks from an ext4 file system. Compare the fields and report any discrepancies. Explain the significance of backup superblocks for recovery."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Directory index comparison"
          }), ": Compare the performance of linear directories (ext2-style) vs B-tree directories (ext3/4-style with htree). Write a benchmark that creates 100,000 files in a directory and measures: creation time, lookup time for existing files, lookup time for non-existent files, and deletion time. Explain the O(n) vs O(log n) difference."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Group descriptor analyzer"
          }), ": Write a program that reads all block group descriptors from an ext4 file system. For each block group, print: block bitmap location, inode bitmap location, inode table location, free blocks count, free inodes count, and used directory count. Visualize the block group layout."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "File system aging simulation"
          }), ": Simulate a file system over time — starting empty, then performing 10,000 file create/delete operations. Track: number of free extents of each size, fragmentation percentage, average allocation latency, time to find a contiguous block of a given size. Show how the system degrades and when compaction would help."]
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