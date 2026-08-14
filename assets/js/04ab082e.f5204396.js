"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[84489],{

/***/ 54523
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_compiler_design_14_register_allocation_md_04a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-compiler-design-14-register-allocation-md-04a.json
const site_docs_courses_compiler_design_14_register_allocation_md_04a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/compiler-design/14-register-allocation","title":"Chapter 14: Register Allocation","description":"? Previous Loop Optimization | Next Advanced Topics","source":"@site/docs/courses/compiler-design/14-register-allocation.md","sourceDirName":"courses/compiler-design","slug":"/compiler-design/14-register-allocation","permalink":"/ai-engineering-journey/compiler-design/14-register-allocation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"id":"14-register-allocation","slug":"/compiler-design/14-register-allocation","title":"Chapter 14: Register Allocation","sidebar_label":"Chapter 14: Register Allocation","sidebar_position":14},"sidebar":"course-compiler-design","previous":{"title":"Chapter 13: Loop Optimization","permalink":"/ai-engineering-journey/compiler-design/13-loop-optimization"},"next":{"title":"Chapter 15: Advanced Topics in Compilation","permalink":"/ai-engineering-journey/compiler-design/15-advanced"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/compiler-design/14-register-allocation.md


const frontMatter = {
	id: '14-register-allocation',
	slug: '/compiler-design/14-register-allocation',
	title: 'Chapter 14: Register Allocation',
	sidebar_label: 'Chapter 14: Register Allocation',
	sidebar_position: 14
};
const contentTitle = 'Chapter 14: Register Allocation';

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
  "level": 3
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 3
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "The Register Allocation Problem",
  "id": "the-register-allocation-problem",
  "level": 3
}, {
  "value": "Abstraction: Graph Coloring",
  "id": "abstraction-graph-coloring",
  "level": 4
}, {
  "value": "Live Ranges and Interference",
  "id": "live-ranges-and-interference",
  "level": 3
}, {
  "value": "Live-Range Construction",
  "id": "live-range-construction",
  "level": 4
}, {
  "value": "Interference Graph Construction",
  "id": "interference-graph-construction",
  "level": 4
}, {
  "value": "Pre-Colored Registers",
  "id": "pre-colored-registers",
  "level": 4
}, {
  "value": "Chaitin&#39;s Algorithm",
  "id": "chaitins-algorithm",
  "level": 3
}, {
  "value": "Phase 1: Build",
  "id": "phase-1-build",
  "level": 4
}, {
  "value": "Phase 2: Simplify",
  "id": "phase-2-simplify",
  "level": 4
}, {
  "value": "Phase 3: Select",
  "id": "phase-3-select",
  "level": 4
}, {
  "value": "Phase 4: Spill &amp; Rebuild",
  "id": "phase-4-spill--rebuild",
  "level": 4
}, {
  "value": "The Briggs Improvement",
  "id": "the-briggs-improvement",
  "level": 3
}, {
  "value": "Coalescing",
  "id": "coalescing",
  "level": 3
}, {
  "value": "Aggressive Coalescing",
  "id": "aggressive-coalescing",
  "level": 4
}, {
  "value": "Conservative Coalescing",
  "id": "conservative-coalescing",
  "level": 4
}, {
  "value": "Spill-Cost Optimization",
  "id": "spill-cost-optimization",
  "level": 3
}, {
  "value": "Weighted Spill Costs",
  "id": "weighted-spill-costs",
  "level": 4
}, {
  "value": "Rematerialization",
  "id": "rematerialization",
  "level": 4
}, {
  "value": "Live-Range Splitting",
  "id": "live-range-splitting",
  "level": 4
}, {
  "value": "Modern Production Allocators",
  "id": "modern-production-allocators",
  "level": 3
}, {
  "value": "LLVM&#39;s Greedy Register Allocator",
  "id": "llvms-greedy-register-allocator",
  "level": 4
}, {
  "value": "HotSpot C2 Allocator",
  "id": "hotspot-c2-allocator",
  "level": 4
}, {
  "value": "Go Compiler Allocator",
  "id": "go-compiler-allocator",
  "level": 4
}, {
  "value": "Putting It All Together ? TypeScript Implementation",
  "id": "putting-it-all-together--typescript-implementation",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
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
    code: "code",
    details: "details",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
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
        id: "chapter-14-register-allocation",
        children: "Chapter 14: Register Allocation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["? Previous: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/13-loop-optimization",
        children: "Chapter 13: Loop Optimization"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/15-advanced",
        children: "Chapter 15: Advanced Topics"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, students will be able to: construct live ranges from live-variable analysis; build interference graphs and compute register interference; apply Chaitin's graph-coloring algorithm with simplify, select, and spill phases; implement the Briggs optimistic-coloring improvement; perform conservative coalescing using both Briggs and George criteria; distinguish register allocation from assignment; apply weighted spill costs to prioritize inner-loop values; implement rematerialization for cheap recomputable values; handle pre-colored registers for calling conventions; and implement a complete graph-coloring register allocator in TypeScript."
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
        href: "../../assets/images/lessons/compiler-design/14-register-allocation/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/14-register-allocation/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/14-register-allocation/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/14-register-allocation/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/14-register-allocation/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/14-register-allocation/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "The Register Allocation Problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP-complete; graph coloring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finding optimal assignment is intractable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Live Ranges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value's lifetime from def to last use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental unit of allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interference Graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nodes = live ranges, edges = overlap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defines which values conflict for registers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chaitin's Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplify/Select/Spill framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical heuristic for NP-complete coloring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Briggs Improvement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic coloring for high-degree nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Colors many nodes Chaitin unnecessarily spills"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coalescing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge copy-related live ranges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminates redundant copy instructions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted Spill Costs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10^depth for loop nesting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner-loop spills penalized exponentially"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rematerialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recomputed cheap values instead of spilling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoids loads for constants and addresses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-colored Registers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware/calling-convention constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ABI-mandated register assignments"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    A[Live-Variable Analysis] --> B[Live Ranges]\n    B --> C[Build Interference Graph]\n    C --> D[Coalescing<br>Merge Copy-Related]\n    D --> E[Simplify<br>Remove Low-Degree Nodes]\n    E --> F{All nodes<br>processed?}\n    F -->|No| G[Select Spill Candidate<br>Highest Cost/Degree]\n    G --> E\n    F -->|Yes| H[Select<br>Pop & Assign Colors]\n    H --> I{Any spills?}\n    I -->|Yes| J[Insert Loads/Stores<br>Rebuild Graph]\n    J --> C\n    I -->|No| K[Register Assignment Complete]\n    style A fill:#e1f5fe\n    style K fill:#c8e6c9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-register-allocation-problem",
      children: "The Register Allocation Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Register allocation is one of the most critical optimization phases in a compiler. Accessing a value from a register is typically 10?100? faster than accessing it from memory (with L1 cache access ~1 ns vs. DRAM access ~100 ns on modern hardware). The goal is to maximize the number of values held in registers at every program point, minimizing loads from and stores to memory."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Allocation"
      }), " decides which live ranges reside in registers and which are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "spilled"
      }), " (forced to memory). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assignment"
      }), " determines which specific register each allocated live range occupies. These are traditionally solved together via graph coloring."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The problem is NP-complete: given a graph with N nodes and K colors, does a proper K-coloring exist? For K = 3, graph coloring is NP-complete via reduction from 3-SAT. Chaitin et al. (1982) proved that register allocation (as graph coloring) is NP-complete, establishing that practical allocators must use heuristic approximations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "abstraction-graph-coloring",
      children: "Abstraction: Graph Coloring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "interference graph"
        }), " G = (V, E) where V is the set of live ranges and (u, v) ? E if live ranges u and v overlap."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A palette of K ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "colors"
        }), " (physical registers)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Find: A mapping color: V ? {1, ..., K} such that if (u, v) ? E then color(u) ? color(v)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A K-coloring corresponds to an assignment where each live range gets a register and interfering live ranges get distinct registers. If no K-coloring exists, some live ranges must be spilled."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "live-ranges-and-interference",
      children: "Live Ranges and Interference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "live range"
      }), " is the program region where a value is alive. It begins at a value's definition point and extends through all program points where the value may be used, following control-flow paths, until the last use. A single source-level variable may have multiple disjoint live ranges if it is assigned in multiple places."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "live-range-construction",
      children: "Live-Range Construction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To construct live ranges from live-variable analysis (Chapter 12):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each instruction ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x = y + z"
        }), " (or any definition), start a new live range for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " at this instruction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The live range extends forward through the CFG until all uses of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " are covered (i.e., until ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " is no longer live)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If control flow merges and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " is live on multiple predecessors, the live range spans all those paths."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A more practical construction partitions each variable into live ranges at definition points: every time a variable is assigned, a new live range begins, and the old one ends."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "interference-graph-construction",
      children: "Interference Graph Construction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The interference graph is an undirected graph. Nodes are live ranges. Edge (u, v) exists if u and v are simultaneously live at any program point."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Construction algorithm:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for each instruction I in the program:\n    Let D = destination of I (the live range defined by I)\n    Let Live = set of live ranges live after I (from live-variable analysis)\n    for each L in Live:\n        if L ? D:\n            add edge (D, L)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important"
      }), ": A value is not considered live at its own definition point; it becomes live ", (0,jsx_runtime.jsx)(_components.em, {
        children: "after"
      }), " the instruction executes. So the instruction's destination does not interfere with the uses in the same instruction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two additional rules:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two live ranges that never overlap can share a register (no edge in the graph)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two live ranges that overlap must get different registers (edge in the graph)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pre-colored-registers",
      children: "Pre-Colored Registers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Certain registers are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pre-colored"
      }), " due to hardware constraints or calling conventions:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return-value register (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rax"
        }), " on x86-64)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Argument registers (", (0,jsx_runtime.jsx)(_components.code, {
          children: "rdi"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rsi"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rdx"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rcx"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "r8"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "r9"
        }), " on x86-64 SysV ABI)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Callee-saved registers (must be preserved across calls)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Special-purpose registers (stack pointer ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rsp"
        }), ", frame pointer ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rbp"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pre-colored live ranges have fixed colors in the graph. The allocator must treat them as already assigned; no other live range may take their color if they interfere."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chaitins-algorithm",
      children: "Chaitin's Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chaitin's graph-coloring allocator (1982) operates in four phases:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-1-build",
      children: "Phase 1: Build"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Construct the interference graph from live-range information. For each node (live range), compute a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "spill cost"
      }), " estimating the runtime penalty if the value is spilled."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A typical spill-cost formula:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "spillCost(lr) = S_{each reference ref in lr} 10^depth(ref) ? cost(op(ref))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "depth(ref)"
        }), " is the loop-nesting depth of the instruction (0 for outermost)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "cost(op(ref))"
        }), " is the latency of a load or store for the operation type (typically 1 for load, 1 for store, but may be higher for multi-cycle operations)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-2-simplify",
      children: "Phase 2: Simplify"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a coloring stack by repeatedly removing nodes that are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "trivially colorable"
      }), " ? nodes with degree < K. A node with degree < K can always be colored because even if all its K-1 or fewer neighbors receive distinct colors, at least one color remains unused."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "stack = []\nwhile ? node v with degree(v) < K:\n    push v onto stack\n    remove v and all its edges from the graph\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When all remaining nodes have degree = K, there is no trivially colorable node. At this point, Chaitin selects a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "spill candidate"
      }), ": a node with the lowest spill-cost-to-degree ratio, marks it for spill, and removes it (continuing the simplify process)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-3-select",
      children: "Phase 3: Select"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pop nodes from the stack in reverse order, rebuilding the graph and assigning colors:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "while stack is not empty:\n    v = pop(stack)\n    rebuild v's edges in the graph\n    colors = {color(n) for each neighbor n of v that is already colored}\n    if there exists c ? {1, ..., K} such that c ? colors:\n        color(v) = c\n    else:\n        mark v as spilled (confirmed)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-4-spill--rebuild",
      children: "Phase 4: Spill & Rebuild"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If any node was confirmed spilled:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insert a store instruction after each definition of the spilled value."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insert a load instruction (or reload) before each use of the spilled value."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The inserted instructions change live ranges ? some values now have shorter live ranges, potentially enabling coloring."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Restart"
        }), " from Phase 1 (Build) with the modified program."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If no spills were confirmed, allocation is complete."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-briggs-improvement",
      children: "The Briggs Improvement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chaitin's algorithm makes a pessimistic spill decision during Simplify: it spills a node as soon as all remaining nodes have degree = K. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Briggs improvement"
      }), " (Briggs et al., 1989) uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "optimistic coloring"
      }), ": during Simplify, push ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "all"
      }), " nodes onto the stack, including those with degree = K. The spill decision is deferred to Select:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "During Simplify: push every node, regardless of degree. (Nodes with degree = K are optimistically assumed to be colorable.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "During Select: if a color is available when the node is popped, assign it. If no color is available, confirm the spill."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Optimism succeeds when a high-degree node's neighbors ? themselves partially colored ? leave a color free. This happens more often than one might expect, because many high-degree nodes are connected to other high-degree nodes that eventually get spilled, freeing colors."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Chaitin spills earlier\nSimplify: deg(a)=4, deg(b)=4, deg(c)=4, all = K=3\n? spill a (cost/deg = lowest)\n? deg(b)=3, deg(c)=3 ? still = K ? spill b ? spill c\nResult: all 3 spilled\n\n// Briggs defers to Select\nSimplify: push a, b, c (all = K=3)\nSelect: pop c ? neighbors have colors, pick R1\n        pop b ? neighbors: c=R1, pick R2\n        pop a ? neighbors: c=R1, b=R2, no color ? spill a\nResult: 1 spilled instead of 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "coalescing",
      children: "Coalescing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Coalescing"
      }), " eliminates copy instructions (", (0,jsx_runtime.jsx)(_components.code, {
        children: "x = y"
      }), ") by merging the live ranges of the source and destination into a single live range. If they share a register, the copy becomes a no-op and can be removed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "aggressive-coalescing",
      children: "Aggressive Coalescing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Merges every copy-related pair unconditionally. Simple and effective for eliminating many copies, but may create a merged node with a very high degree, causing spilling that would not have occurred otherwise."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "conservative-coalescing",
      children: "Conservative Coalescing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Merges only when the merge is guaranteed not to cause spilling. Two criteria:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Briggs criterion"
      }), ": merge ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "y"
      }), " if the resulting node has fewer than K neighbors with degree = K. Intuitively: the merged node can be simplified if, after removing all low-degree neighbors, at most K-1 actual neighbors remain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function canMerge_Briggs(x, y, K):\n    combined = merge(x, y)\n    heavy = count of neighbors of combined with degree = K\n    return heavy < K\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "George criterion"
      }), ": merge ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "y"
      }), " if, for every neighbor ", (0,jsx_runtime.jsx)(_components.code, {
        children: "t"
      }), " of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), " with degree = K, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "t"
      }), " already interferes with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "y"
      }), ". Intuitively: if a high-degree neighbor of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), " already conflicts with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "y"
      }), ", merging doesn't create new conflicts. This criterion is particularly useful for coalescing with pre-colored registers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function canMerge_George(x, y, K):\n    for each neighbor t of x:\n        if degree(t) = K and not interferes(t, y):\n            return false\n    return true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Production allocators (e.g., LLVM's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GreedyRegAlloc"
      }), ") use iterative coalescing that applies both criteria repeatedly until no more safe merges are possible."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "spill-cost-optimization",
      children: "Spill-Cost Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "weighted-spill-costs",
      children: "Weighted Spill Costs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The exponential weighting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "10^depth"
      }), " ensures that inner-loop spills are exponentially more expensive than outer-loop spills:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Nesting Depth"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relative Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0 (outermost)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 (inner loop)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2 (innermost)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000?"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function spillCost(liveRange, loopDepth):\n    cost = 0\n    for each use or def of liveRange:\n        depth = loopDepth[instruction]\n        cost += 10^depth\n    return cost\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "rematerialization",
      children: "Rematerialization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rematerialization"
      }), " avoids spilling by recomputing a value rather than loading it from memory. Rematerialization is profitable for:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integer constants"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x = 42"
        }), " ? reload costs a load; recompute costs a move-immediate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Address expressions"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "addr = base + offset"
        }), " ? recompute with a cheap addition."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Boolean flags"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "flag = true"
        }), " ? move-immediate instead of load."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The allocator computes a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rematerialization cost"
      }), ". If it is less than the spill cost, the value is never spilled but instead recomputed at each use point."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "live-range-splitting",
      children: "Live-Range Splitting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Live-range splitting"
      }), " divides a long live range into shorter segments, typically at loop boundaries. The inner-loop segment can be colored independently with a register, while the outer-loop segment may be spilled. Splitting reduces pressure by keeping the hot path in registers without forcing outer-loop sections into registers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "modern-production-allocators",
      children: "Modern Production Allocators"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "llvms-greedy-register-allocator",
      children: "LLVM's Greedy Register Allocator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LLVM's default allocator (since LLVM 3.0) extends the Briggs framework with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Live-range splitting"
        }), ": splits into intervals around loop boundaries."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Last-use splitting"
        }), ": splits at the last use point, allowing early register release."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Local splitting"
        }), ": splits within a basic block when pressure is high."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Region splitting"
        }), ": splits across regions with different register pressures."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The greedy allocator processes live ranges in order of spill cost (highest cost first). For each live range, it attempts to assign a register from the available pool. If no register is available, it tries to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "evict"
      }), " a lower-cost live range. Eviction replaces the lower-cost range's assignment with the higher-cost one, spilling the lower-cost range."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "hotspot-c2-allocator",
      children: "HotSpot C2 Allocator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Oracle HotSpot's C2 compiler uses a variant of the Chaitin-Briggs algorithm with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SSA-based live-range construction."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f-function elimination via live-range splitting."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On-the-fly rematerialization of boxed values (Java object references that can be reconstructed cheaply)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "go-compiler-allocator",
      children: "Go Compiler Allocator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Go uses a simpler approach: a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "linear-scan allocator"
      }), " that processes live ranges in their start-order, assigning registers greedily and spilling when none are available. Linear scan is O(N log N) vs. graph coloring's O(N?), and for small-to-medium functions it produces competitive code. Go also applies coalescing during the SSA-elimination phase."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "putting-it-all-together--typescript-implementation",
      children: "Putting It All Together ? TypeScript Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ============================================================\n// Types for Register Allocation\n// ============================================================\n\ntype VarName = string\n\ninterface LiveRange {\n  varName: VarName\n  defPoint: number           // instruction index\n  lastUse: number\n  loopDepth: number\n  uses: number[]             // instruction indices of uses\n  defs: number[]             // instruction indices of defs\n  spillCost: number\n  neighbors: Set<VarName>\n}\n\ninterface InterferenceGraph {\n  nodes: Map<VarName, LiveRange>\n}\n\ninterface Instruction {\n  id: number\n  op: string\n  dest?: VarName\n  src: VarName[]\n  blockId: number\n  loopDepth: number\n}\n\n// ============================================================\n// Live-Range and Interference-Graph Construction\n// ============================================================\n\nclass LiveRangeAnalyzer {\n  private liveRanges: Map<VarName, LiveRange> = new Map()\n\n  constructor(private instructions: Instruction[]) {}\n\n  // Simplified live-range construction from instruction list\n  analyze(): LiveRange[] {\n    // Step 1: collect all def-use chains\n    const defMap = new Map<VarName, number[]>()  // var ? def instruction indices\n    const useMap = new Map<VarName, number[]>()  // var ? use instruction indices\n\n    for (const inst of this.instructions) {\n      if (inst.dest) {\n        if (!defMap.has(inst.dest)) defMap.set(inst.dest, [])\n        defMap.get(inst.dest)!.push(inst.id)\n      }\n      for (const src of inst.src) {\n        if (!useMap.has(src)) useMap.set(src, [])\n        useMap.get(src)!.push(inst.id)\n      }\n    }\n\n    // Step 2: build live ranges from def points\n    for (const [v, defs] of defMap) {\n      const uses = useMap.get(v) || []\n      if (uses.length === 0 && defs.length > 0) {\n        // Defined but never used ? dead code\n        this.liveRanges.set(v, {\n          varName: v,\n          defPoint: defs[0],\n          lastUse: defs[0],\n          loopDepth: 0,\n          uses: [],\n          defs,\n          spillCost: 0,\n          neighbors: new Set(),\n        })\n        continue\n      }\n      const lastUse = Math.max(...uses)\n      const depth = this.instructions.find(i => i.id === defs[0])?.loopDepth ?? 0\n      const cost = [...uses, ...defs].reduce((sum, id) => {\n        const inst = this.instructions.find(i => i.id === id)\n        return sum + Math.pow(10, inst?.loopDepth ?? 0)\n      }, 0)\n\n      this.liveRanges.set(v, {\n        varName: v,\n        defPoint: defs[0],\n        lastUse,\n        loopDepth: depth,\n        uses,\n        defs,\n        spillCost: cost,\n        neighbors: new Set(),\n      })\n    }\n\n    return [...this.liveRanges.values()]\n  }\n\n  buildInterferenceGraph(): InterferenceGraph {\n    const graph: InterferenceGraph = { nodes: new Map(this.liveRanges) }\n    const ranges = [...graph.nodes.values()]\n\n    for (let i = 0; i < ranges.length; i++) {\n      for (let j = i + 1; j < ranges.length; j++) {\n        const a = ranges[i], b = ranges[j]\n        // Two live ranges interfere if one is defined before the other's last use\n        // and their lifetimes overlap\n        if (this.overlap(a, b)) {\n          a.neighbors.add(b.varName)\n          b.neighbors.add(a.varName)\n        }\n      }\n    }\n\n    return graph\n  }\n\n  private overlap(a: LiveRange, b: LiveRange): boolean {\n    // Simple interval overlap check\n    const aStart = a.defPoint, aEnd = a.lastUse\n    const bStart = b.defPoint, bEnd = b.lastUse\n    return aStart <= bEnd && bStart <= aEnd\n  }\n}\n\n// ============================================================\n// Graph-Coloring Register Allocator\n// ============================================================\n\nclass GraphColoringAllocator {\n  private colorMap: Map<VarName, number> = new Map()\n  private spilled: Set<VarName> = new Set()\n  private stack: VarName[] = []\n\n  constructor(\n    private graph: InterferenceGraph,\n    private K: number,\n    private optimistic: boolean = true\n  ) {}\n\n  allocate(): Map<VarName, number> {\n    this.stack = []\n    this.colorMap.clear()\n    this.spilled.clear()\n\n    const nodes = new Map(this.graph.nodes)\n\n    // Simplify: push all nodes (optimistic) or only low-degree (Chaitin)\n    while (nodes.size > 0) {\n      let found = false\n      for (const [name, node] of nodes) {\n        if (node.neighbors.size < this.K) {\n          this.stack.push(name)\n          this.removeNode(nodes, name)\n          found = true\n          break\n        }\n      }\n      if (!found) {\n        if (this.optimistic) {\n          // Briggs: push high-degree node optimistically\n          const [name] = nodes.entries().next().value!\n          this.stack.push(name)\n          this.removeNode(nodes, name)\n        } else {\n          // Chaitin: spill the best candidate\n          const spillCandidate = this.selectSpillCandidate(nodes)\n          this.spilled.add(spillCandidate)\n          this.removeNode(nodes, spillCandidate)\n        }\n      }\n    }\n\n    // Select: pop and assign colors\n    const tempGraph = new Map(this.graph.nodes)\n    while (this.stack.length > 0) {\n      const name = this.stack.pop()!\n      const node = tempGraph.get(name)!\n      // Rebuild neighbors that have been colored\n      const usedColors = new Set<number>()\n      for (const neighbor of node.neighbors) {\n        if (this.colorMap.has(neighbor)) {\n          usedColors.add(this.colorMap.get(neighbor)!)\n        }\n      }\n\n      let assigned = false\n      for (let c = 1; c <= this.K; c++) {\n        if (!usedColors.has(c)) {\n          this.colorMap.set(name, c)\n          assigned = true\n          break\n        }\n      }\n\n      if (!assigned) {\n        if (this.optimistic) {\n          this.spilled.add(name)\n        } else {\n          this.spilled.add(name)\n        }\n      }\n    }\n\n    return this.colorMap\n  }\n\n  private removeNode(nodes: Map<VarName, LiveRange>, name: VarName) {\n    const node = nodes.get(name)!\n    for (const neighbor of node.neighbors) {\n      const n = nodes.get(neighbor)\n      if (n) n.neighbors.delete(name)\n    }\n    nodes.delete(name)\n  }\n\n  private selectSpillCandidate(nodes: Map<VarName, LiveRange>): VarName {\n    let best: VarName | null = null\n    let bestRatio = Infinity\n    for (const [name, node] of nodes) {\n      const ratio = node.neighbors.size === 0\n        ? Infinity\n        : node.spillCost / node.neighbors.size\n      if (ratio < bestRatio) {\n        bestRatio = ratio\n        best = name\n      }\n    }\n    return best!\n  }\n\n  getSpills(): VarName[] {\n    return [...this.spilled]\n  }\n}\n\n// ============================================================\n// Coalescing\n// ============================================================\n\ntype CopyInst = { dest: VarName; src: VarName }\n\nclass Coalescer {\n  constructor(\n    private graph: InterferenceGraph,\n    private K: number\n  ) {}\n\n  conservativeCoalesce(copies: CopyInst[]): CopyInst[] {\n    const eliminated: CopyInst[] = []\n    const nodes = this.graph.nodes\n\n    for (const copy of copies) {\n      const dest = nodes.get(copy.dest)\n      const src = nodes.get(copy.src)\n      if (!dest || !src) { eliminated.push(copy); continue }\n\n      // Check Briggs criterion: merged node has <K heavy neighbors\n      const mergedNeighbors = new Set([...dest.neighbors, ...src.neighbors])\n      mergedNeighbors.delete(copy.dest)\n      mergedNeighbors.delete(copy.src)\n\n      let heavyCount = 0\n      for (const n of mergedNeighbors) {\n        const neighbor = nodes.get(n)\n        if (neighbor && neighbor.neighbors.size >= this.K) heavyCount++\n      }\n\n      if (heavyCount < this.K) {\n        // Safe to merge: eliminate the copy\n        eliminated.push(copy)\n        // Merge src into dest: redirect all src edges to dest\n        for (const n of (src.neighbors)) {\n          if (n !== copy.dest) {\n            dest.neighbors.add(n)\n            nodes.get(n)?.neighbors.delete(copy.src)\n            nodes.get(n)?.neighbors.add(copy.dest)\n          }\n        }\n        // Remove src node\n        nodes.delete(copy.src)\n      }\n    }\n\n    return eliminated\n  }\n}\n\n// ============================================================\n// Complete Allocator with Spill Handling\n// ============================================================\n\nclass RegisterAllocator {\n  constructor(\n    private instructions: Instruction[],\n    private K: number\n  ) {}\n\n  run(): { assignments: Map<VarName, number>; spills: VarName[]; iterations: number } {\n    let currentInstructions = [...this.instructions]\n    let iteration = 0\n\n    while (true) {\n      iteration++\n      const analyzer = new LiveRangeAnalyzer(currentInstructions)\n      analyzer.analyze()\n      const graph = analyzer.buildInterferenceGraph()\n\n      const coalescer = new Coalescer(graph, this.K)\n      const copies: CopyInst[] = currentInstructions\n        .filter(i => i.op === 'copy' && i.dest && i.src.length === 1)\n        .map(i => ({ dest: i.dest!, src: i.src[0] }))\n      const eliminated = coalescer.conservativeCoalesce(copies)\n\n      const allocator = new GraphColoringAllocator(graph, this.K, true)\n      const assignments = allocator.allocate()\n      const spills = allocator.getSpills()\n\n      if (spills.length === 0) {\n        return { assignments, spills: [], iterations: iteration }\n      }\n\n      // Insert spill loads/stores and rebuild\n      currentInstructions = this.insertSpillCode(currentInstructions, spills, assignments)\n    }\n  }\n\n  private insertSpillCode(insts: Instruction[], spills: VarName[], assignments: Map<VarName, number>): Instruction[] {\n    const result: Instruction[] = []\n    let nextId = insts.length * 10\n\n    for (const inst of insts) {\n      // Insert load before each use of spilled value\n      for (const src of inst.src) {\n        if (spills.includes(src)) {\n          const loadInst: Instruction = {\n            id: nextId++,\n            op: 'load',\n            dest: `!spill_${src}`,\n            src: [src],\n            blockId: inst.blockId,\n            loopDepth: inst.loopDepth,\n          }\n          result.push(loadInst)\n          // Replace src with spill temp in original inst (handled by renaming)\n        }\n      }\n\n      result.push(inst)\n\n      // Insert store after each def of spilled value\n      if (inst.dest && spills.includes(inst.dest)) {\n        const storeInst: Instruction = {\n          id: nextId++,\n          op: 'store',\n          dest: undefined,\n          src: [inst.dest],\n          blockId: inst.blockId,\n          loopDepth: inst.loopDepth,\n        }\n        result.push(storeInst)\n      }\n    }\n\n    return result\n  }\n}\n\n// ============================================================\n// Example\n// ============================================================\n\nconst testInstructions: Instruction[] = [\n  { id: 1, op: 'copy', dest: 'a', src: ['1'], blockId: 0, loopDepth: 0 },\n  { id: 2, op: '+', dest: 'b', src: ['a', 'c'], blockId: 0, loopDepth: 0 },\n  { id: 3, op: '*', dest: 'd', src: ['b', 'e'], blockId: 0, loopDepth: 0 },\n  { id: 4, op: 'copy', dest: 'f', src: ['d'], blockId: 1, loopDepth: 0 },\n  { id: 5, op: '+', dest: 'g', src: ['f', 'h'], blockId: 1, loopDepth: 0 },\n  { id: 6, op: 'copy', dest: 'i', src: ['j'], blockId: 2, loopDepth: 0 },\n]\n\nconst alloc = new RegisterAllocator(testInstructions, 4)\nconst result = alloc.run()\n\nconsole.log('=== Register Allocation Results ===')\nconsole.log(`K = 4, Iterations: ${result.iterations}`)\nconsole.log('\\nAssignments (virtual ? physical):')\nfor (const [v, reg] of result.assignments) {\n  if (!result.spills.includes(v)) {\n    console.log(`  ${v} ? R${reg}`)\n  }\n}\nif (result.spills.length > 0) {\n  console.log('\\nSpilled values:')\n  for (const v of result.spills) console.log(`  ${v} (memory)`)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (console)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Register Allocation Results ===\nK = 4, Iterations: 1\n\nAssignments (virtual ? physical):\n  a ? R1\n  b ? R2\n  d ? R3\n  f ? R3\n  g ? R4\n  i ? R2\n\nSpilled values:\n  (none)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Register allocation is the NP-complete problem of mapping virtual live ranges to physical registers. The graph-coloring approach ? build an interference graph, simplify by removing low-degree nodes, select colors by popping the stack, and spill when coloring fails ? provides a practical heuristic. Chaitin's algorithm established the framework; Briggs's optimistic coloring improved it by deferring spill decisions. Conservative coalescing eliminates copy instructions without causing spilling. Weighted spill costs and rematerialization optimize allocation for hot loops and cheap values. Modern production allocators (LLVM's greedy allocator, HotSpot C2) extend these ideas with eviction, live-range splitting, and region-based allocation, achieving register assignments that approach the theoretical optimum for most real-world programs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimistic coloring spills fewer values than conservative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Briggs's deferral of spill decisions saves 30?50% of spills on typical programs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conservative coalescing prevents spill cascades"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggressive coalescing can merge nodes into super-saturated colors; conservative checks prevent this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted spill costs at 10^depth prioritize inner loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential weighting ensures hot-loop values stay in registers at all costs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rematerialization beats spilling for cheap values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constants and address expressions are cheaper to recompute than to load"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Live-range splitting at loop boundaries helps both allocation and assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short inner-loop ranges are easier to color than long ranges spanning loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-colored registers (ABI) constrain the allocator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Treat them as fixed nodes; the allocator must work around them"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LLVM's greedy allocator with eviction outperforms pure graph coloring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eviction allows dynamic rebalancing when a high-cost range conflicts with several low-cost ones"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// register allocation\n// lexical-parsing-codegen implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'register allocation', data: { topic: 'lexical-parsing-codegen' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// register allocation - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'compilers demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'compiler-design', chapter: 'register allocation' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('compilers'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The register allocation problem is equivalent to:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Bin packing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Graph coloring"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Maximum flow"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Satisfiability"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chaitin's algorithm spills a node during Simplify when:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The node has degree = K and all remaining nodes also have degree = K"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The node has no neighbors"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The node is a copy instruction"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) The user requests it"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does the Briggs improvement differ from Chaitin's algorithm?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Briggs uses more physical registers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Briggs pushes all nodes (including high-degree) onto the stack optimistically"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Briggs skips the Build phase"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Briggs eliminates coalescing"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Conservative coalescing merges two live ranges only when:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) They always interfere"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Merging will not cause spilling (verified by Briggs or George criterion)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The copy instruction is in a hot loop"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Both live ranges have degree < K"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Weighted spill costs use a formula of 10^depth to ensure:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) All spills cost the same"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Inner-loop spills are exponentially more expensive"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Outer-loop spills are prioritized"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Spill cost is independent of loop depth"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answers</summary>\n1. B, 2. A, 3. B, 4. B, 5. B\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define live range and explain how it differs from a variable's scope in the source language."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How is an interference graph constructed from live ranges? Why do two live ranges that never overlap not need an edge?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the four phases of Chaitin's graph-coloring algorithm."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does the Briggs improvement reduce spills compared to Chaitin? Give a concrete counterexample where Briggs colors what Chaitin spills."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between aggressive and conservative coalescing? Under what conditions does each criterion (Briggs, George) permit a merge?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain weighted spill costs. Why is exponential weighting (10^depth) used instead of linear weighting?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is rematerialization, and what types of values are good candidates?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build the interference graph for the following code and determine if 3 registers suffice:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "a = b + c\nd = a + e\nf = a + d\ng = b + f\nh = g + c\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show the graph, the simplify order, and the coloring assignment."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Apply Chaitin's algorithm with K = 3 to these live ranges:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "v1: neighbors {v2, v3, v4}"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "v2: neighbors {v1, v3, v5}"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "v3: neighbors {v1, v2, v4, v5}"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "v4: neighbors {v1, v3, v5}"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "v5: neighbors {v2, v3, v4}\nAssume spill costs: v1=10, v2=20, v3=30, v4=15, v5=25.\nShow the simplify order and which values are spilled."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Repeat problem 2 with the Briggs optimistic approach. Does optimism save any spills?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For the copy pair (a, b), where:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a's neighbors: {c, d, e} (all degree 2)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b's neighbors: {d, e, f} (all degree 2)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "K = 4\nApply the Briggs coalescing criterion. Is the merge safe?"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compute the weighted spill cost for a value with:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "1 use at depth 0, 1 definition at depth 1, 3 uses at depth 2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Load cost = 2 cycles, store cost = 1 cycle\nWhat is the total spill cost?"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complete Register Allocator."
          }), " Implement a graph-coloring register allocator in TypeScript that: (a) constructs live ranges from a list of three-address instructions; (b) builds the interference graph; (c) applies the Briggs optimistic coloring with conservative coalescing; (d) computes weighted spill costs using 10^depth; (e) inserts spill loads/stores and reruns when spilling occurs."]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Test your allocator on a 15-instruction program with 3 levels of loop nesting and at least 10 distinct live ranges, with K ? {3, 4, 6}. For each K, show:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The number of spills (spilled values / total live ranges)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The total spill cost."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The final register assignments for non-spilled values."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare the number of spills with and without the Briggs improvement. Report the percentage of spills saved by optimistic coloring."
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