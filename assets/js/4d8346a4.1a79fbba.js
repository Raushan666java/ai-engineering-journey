"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[35197],{

/***/ 19989
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_compiler_design_15_advanced_md_4d8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-compiler-design-15-advanced-md-4d8.json
const site_docs_courses_compiler_design_15_advanced_md_4d8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/compiler-design/15-advanced","title":"Chapter 15: Advanced Topics in Compilation","description":"? Previous Register Allocation | Next: Index","source":"@site/docs/courses/compiler-design/15-advanced.md","sourceDirName":"courses/compiler-design","slug":"/compiler-design/15-advanced","permalink":"/ai-engineering-journey/compiler-design/15-advanced","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"id":"15-advanced","slug":"/compiler-design/15-advanced","title":"Chapter 15: Advanced Topics in Compilation","sidebar_label":"Chapter 15: Advanced Topics in Compilation","sidebar_position":15},"sidebar":"coursesSidebar","previous":{"title":"Chapter 14: Register Allocation","permalink":"/ai-engineering-journey/compiler-design/14-register-allocation"},"next":{"title":"Digital Logic — Course Overview","permalink":"/ai-engineering-journey/digital-logic"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/compiler-design/15-advanced.md


const frontMatter = {
	id: '15-advanced',
	slug: '/compiler-design/15-advanced',
	title: 'Chapter 15: Advanced Topics in Compilation',
	sidebar_label: 'Chapter 15: Advanced Topics in Compilation',
	sidebar_position: 15
};
const contentTitle = 'Chapter 15: Advanced Topics in Compilation';

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
  "value": "Just-In-Time Compilation",
  "id": "just-in-time-compilation",
  "level": 3
}, {
  "value": "Tiered Compilation",
  "id": "tiered-compilation",
  "level": 4
}, {
  "value": "The Trade-Off",
  "id": "the-trade-off",
  "level": 4
}, {
  "value": "Deoptimization",
  "id": "deoptimization",
  "level": 4
}, {
  "value": "Oracle HotSpot JVM: A Case Study",
  "id": "oracle-hotspot-jvm-a-case-study",
  "level": 3
}, {
  "value": "Google V8 JavaScript Engine: A Case Study",
  "id": "google-v8-javascript-engine-a-case-study",
  "level": 3
}, {
  "value": "Interprocedural Analysis and Optimization",
  "id": "interprocedural-analysis-and-optimization",
  "level": 3
}, {
  "value": "Call-Graph Construction",
  "id": "call-graph-construction",
  "level": 4
}, {
  "value": "Inlining",
  "id": "inlining",
  "level": 4
}, {
  "value": "Mod/Ref Analysis",
  "id": "modref-analysis",
  "level": 4
}, {
  "value": "Profile-Guided Optimization",
  "id": "profile-guided-optimization",
  "level": 3
}, {
  "value": "Phase 1: Instrumentation",
  "id": "phase-1-instrumentation",
  "level": 4
}, {
  "value": "Phase 2: Training",
  "id": "phase-2-training",
  "level": 4
}, {
  "value": "Phase 3: Optimization",
  "id": "phase-3-optimization",
  "level": 4
}, {
  "value": "Static Single Assignment (SSA) Form",
  "id": "static-single-assignment-ssa-form",
  "level": 3
}, {
  "value": "SSA Construction Algorithm",
  "id": "ssa-construction-algorithm",
  "level": 4
}, {
  "value": "SSA Optimizations",
  "id": "ssa-optimizations",
  "level": 4
}, {
  "value": "The Sea-of-Nodes IR",
  "id": "the-sea-of-nodes-ir",
  "level": 3
}, {
  "value": "Auto-Parallelization",
  "id": "auto-parallelization",
  "level": 3
}, {
  "value": "Loop-Carried Dependence Analysis",
  "id": "loop-carried-dependence-analysis",
  "level": 4
}, {
  "value": "The Polytope Model",
  "id": "the-polytope-model",
  "level": 4
}, {
  "value": "Parallelization Transformations",
  "id": "parallelization-transformations",
  "level": 4
}, {
  "value": "Speculative Parallelization",
  "id": "speculative-parallelization",
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
        id: "chapter-15-advanced-topics-in-compilation",
        children: "Chapter 15: Advanced Topics in Compilation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["? Previous: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/14-register-allocation",
        children: "Chapter 14: Register Allocation"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design",
        children: "Index"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, students will be able to: explain the architecture of just-in-time compilers including tiered compilation and deoptimization; compare JIT and AOT compilation strategies; perform interprocedural analysis including call-graph construction and mod/ref analysis; implement profile-guided optimization workflows; construct and work with static single assignment (SSA) form; implement SSA construction using dominance frontiers and f-function insertion; describe auto-parallelization techniques including dependence analysis and the polytope model; and understand the trade-offs in modern compiler design for production systems."
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
        href: "../../assets/images/lessons/compiler-design/15-advanced/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/15-advanced/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/15-advanced/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/15-advanced/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/15-advanced/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/15-advanced/visual-explanation.png",
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
            children: "JIT Compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime adaptive compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balances startup speed and peak performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tiered Compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-level optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interpreter ? baseline ? optimized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deoptimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rollback to interpreter on speculation failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables aggressive but correct optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interprocedural Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-function analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inlining, constant propagation across calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Profile-Guided Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime profiles guide compiler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10?30% improvement beyond static opts alone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSA Form"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each variable assigned once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplifies all data-flow analyses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSA Construction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f-function placement via dominance frontiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables modern compiler IRs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-Parallelization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic parallel code generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exploits multi-core without manual threading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Polytope Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Math framework for loop analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proves legality of parallelization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph JIT[\"Just-In-Time Compilation\"]\n        A[Interpreter] -->|Counter| B[Baseline JIT]\n        B -->|Counter| C[Optimizing JIT]\n        C -->|Deopt| A\n    end\n    subgraph AOT[\"Ahead-Of-Time Compilation\"]\n        D[Source] --> E[Profile Data]\n        E --> F[PGO Compilation]\n        F --> G[Optimized Binary]\n    end\n    subgraph Advanced[\"Advanced Techniques\"]\n        H[SSA Form] --> I[SSA-based Optimizations]\n        J[IPA] --> K[Inlining / Mod-Ref]\n        L[Auto-Parallel] --> M[Dependence Analysis]\n    end\n    JIT --> H\n    AOT --> H\n    H --> N[Production Compiler]\n    J --> N\n    L --> N\n    style A fill:#e1f5fe\n    style N fill:#c8e6c9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "just-in-time-compilation",
      children: "Just-In-Time Compilation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Just-in-time (JIT) compilation translates intermediate code into native machine code at ", (0,jsx_runtime.jsx)(_components.em, {
        children: "runtime"
      }), ", combining the portability of an interpreted IR with execution speeds approaching those of ahead-of-time (AOT) compiled code. JIT compilers are central to modern language runtimes: Java (HotSpot), JavaScript (V8), C# (.NET RyuJIT), Lua (LuaJIT), and Python (PyPy, though tracing)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "tiered-compilation",
      children: "Tiered Compilation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A modern JIT does not compile a method from cold start to fully optimized code. Instead, it uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tiered compilation"
      }), ": multiple optimization levels that trade compilation speed for peak performance."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Optimization Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Compile Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Execution Speed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interpreter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 (interpreted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slowest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Baseline JIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal (C1/Sparkplug)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (~ms)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profiling JIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "With instrumentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good with data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full Optimizing JIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggressive (C2/TurboFan)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (~100ms+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Threshold-driven promotion"
      }), ": Each method maintains a call counter. When it exceeds a threshold, it is promoted to the next tier. HotSpot uses:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CompileThreshold"
        }), " (default 10,000 in client mode, 15,000 in server mode): number of invocations before compilation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TieredCompilation"
        }), " (default in JDK 8+): methods start interpreted, are compiled with C1 after ~2,000 invocations, and promoted to C2 after ~15,000 invocations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-trade-off",
      children: "The Trade-Off"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Compilation at runtime consumes CPU cycles that could otherwise execute user code. The JIT must be fast enough that the compiled code's speedup pays back the compilation overhead within a reasonable time. This is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "compilation-time vs. peak-performance"
      }), " trade-off:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "C1 (Client compiler)"
        }), ": lightweight, performs basic inlining, dead-code elimination, and peephole optimization. Compiles in milliseconds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "C2 (Server compiler)"
        }), ": heavyweight, performs all global optimizations (loop transformations, SSA-based GVN, graph-coloring register allocation). Compiles in tens to hundreds of milliseconds."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V8 uses a three-tier system:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sparkplug"
        }), ": very fast baseline compiler, one pass over bytecode (no IR), produces mediocre code but compiles in microseconds. Replaced the old full-codegen."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TurboFan"
        }), ": full optimizing compiler, SSA-based IR, performs type specialization using observed types from inline caches."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maglev"
        }), ": mid-tier (recently introduced), between Sparkplug and TurboFan, uses SSA but simpler passes than TurboFan."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "deoptimization",
      children: "Deoptimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deoptimization is the mechanism that makes aggressive speculative compilation safe. The optimizer makes assumptions about the program's runtime behavior:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Class hierarchy assumption"
        }), ": \"the receiver of this virtual call is always of type ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Foo"
        }), ".\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type assumption"
        }), ": \"this variable is always an integer.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constant assumption"
        }), ": \"this field always has value ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), ".\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If runtime profiling shows these assumptions hold 99.9% of the time, the optimizer compiles the code assuming them, with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "guard checks"
      }), " and a fallback. When a guard fails:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Execution must ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "bail out"
        }), " to a point where the interpreter can resume with correct state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The JIT records a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "debugging map"
        }), " at each safepoint, mapping optimized-code virtual registers to interpreter-frame slots."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execution rolls back to the interpreter, and the deoptimized code is recompiled with a broader set of assumptions (or remains interpreted)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "speculative optimization"
      }), " is what enables Java and JavaScript to achieve C-like performance for numeric code while retaining dynamic dispatch semantics."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example (HotSpot deoptimization)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Java source\nint result = obj.compute();   // virtual dispatch\n\n// After C2 optimization (speculative)\n// Assumption: obj.getClass() == Foo.class\n// Check: if obj.getClass() ? Foo.class ? deoptimize!\n0x1234: mov rcx, [rsp+0x10]     // load obj\n0x1238: cmp [rcx-8], Foo_layout  // check class\n0x1240: jne deopt_bailout        // guard failed\n0x1246: call Foo::compute        // direct call (no vtable)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oracle-hotspot-jvm-a-case-study",
      children: "Oracle HotSpot JVM: A Case Study"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HotSpot's C2 compiler is one of the most sophisticated JIT compilers ever built. Key features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SSA-based IR"
        }), " (Ideal Graph): a sea-of-nodes representation where data flow and control flow are unified in a single graph."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Global Value Numbering"
        }), " (GVN): uses the ideal graph to prove expression equivalence via hash-based value numbering over SSA."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Escape Analysis"
        }), ": determines whether an object's lifetime is bounded by a method or thread. If an object does not escape, it can be stack-allocated or scalar-replaced (its fields promoted to registers)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intrinsics"
        }), ": C2 recognizes over 100 Java methods (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Math.sin"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "System.arraycopy"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "String.compareTo"
        }), ") and replaces them with hand-tuned assembly sequences or optimized library calls."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "On-Stack Replacement"
        }), " (OSR): when a loop becomes hot but the enclosing method is still interpreted, OSR compiles the loop independently and transfers execution from the interpreter loop to the compiled loop without method-return overhead."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adaptive Optimization"
        }), ": C2 monitors the performance of compiled code and recompiles it with different optimizations if the performance counters indicate problems (e.g., too many cache misses, branch mispredictions)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "google-v8-javascript-engine-a-case-study",
      children: "Google V8 JavaScript Engine: A Case Study"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V8 compiles JavaScript through multiple tiers:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Source Code\n    ? Parser\nAST (Abstract Syntax Tree)\n    ? Ignition (Interpreter)\nBytecode\n    ? Sparkplug (Baseline Compiler)\nNative machine code (warm)\n    ? Maglev (Mid-tier Compiler)\nOptimized native code (hot)\n    ? TurboFan (Optimizing Compiler)\nHighly optimized native code (very hot)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hidden classes"
      }), " (Maps): JavaScript objects are dictionaries at the specification level, but V8 gives objects with the same property layout the same hidden class. Property access is then a fixed offset load rather than a hash-table lookup. When a new property is added, a transition tree connects hidden classes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inline caching"
      }), " (IC): V8 caches the result of a property lookup at each call site. Initially, the cache is empty (uninitialized state). After one execution, it records the hidden class and the property offset (monomorphic state). If a different hidden class appears, it transitions to polymorphic (up to 4 classes) or megamorphic (full lookup)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deoptimization in V8"
      }), ": When TurboFan speculates on types (e.g., \"this property is always an integer\"), a guard checks the type. If the guard fails, execution bails out to Ignition bytecode at the next loop back edge or method entry. V8 maintains a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deoptimization state"
      }), " encoded as a sequence of bytecode offsets and register mappings."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interprocedural-analysis-and-optimization",
      children: "Interprocedural Analysis and Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Interprocedural analysis (IPA) extends compiler reasoning across function boundaries. While intraprocedural analysis treats each function as a black box, IPA considers the entire program's call graph."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "call-graph-construction",
      children: "Call-Graph Construction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "call graph"
      }), " is a directed graph where nodes are functions and edges represent call sites. For statically typed languages (C, Rust), the call graph is precise for direct calls. For languages with function pointers, virtual dispatch, or dynamic typing, the compiler must overapproximate the set of possible callees."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Techniques for constructing call graphs:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Class Hierarchy Analysis (CHA)"
        }), ": for a virtual call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x.f()"
        }), ", all subclasses of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), "'s declared type that override ", (0,jsx_runtime.jsx)(_components.code, {
          children: "f"
        }), " are potential callees. CHA is cheap but imprecise for deep or wide class hierarchies."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rapid Type Analysis (RTA)"
        }), ": refines CHA by only considering classes that are instantiated (allocated) somewhere in the program. If class ", (0,jsx_runtime.jsx)(_components.code, {
          children: "B"
        }), " extends ", (0,jsx_runtime.jsx)(_components.code, {
          children: "A"
        }), " but never instantiated, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "B.f()"
        }), " is not a possible callee."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variable Type Analysis (VTA)"
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pointer Analysis"
        }), ": tracks the flow of object references through assignments, parameters, and returns. More precise but more expensive (typically O(N?) for Andersen-style inclusion-based analysis)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Profiling"
        }), ": the JIT can instrument call sites and record actual receiver types at runtime. This is the most precise technique ? it observes reality."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "inlining",
      children: "Inlining"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inlining replaces a call site with a copy of the callee's body. Benefits:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eliminates call overhead (frame setup, argument passing, return)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exposes the callee's code to surrounding optimizations (CSE, constant propagation, code motion)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables constant propagation across the call boundary."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inlining decisions are based on heuristics:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function size"
        }), ": small functions are inlined eagerly (typically functions under 35 bytecodes in HotSpot)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Call frequency"
        }), ": frequently called functions are inlined more aggressively."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Depth"
        }), ": deeply nested inlining is limited (typically 3?5 levels) to prevent code explosion."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic profiling"
        }), ": a call site that always resolves to the same target is a prime candidate."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "modref-analysis",
      children: "Mod/Ref Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mod/Ref analysis"
      }), " determines which memory locations a function may modify or reference. This enables:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code motion across calls"
        }), ": if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "f()"
        }), " does not modify global ", (0,jsx_runtime.jsx)(_components.code, {
          children: "g"
        }), ", a load of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "g"
        }), " can be hoisted above the call."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alias analysis refinement"
        }), ": if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "f()"
        }), " only modifies its argument and not other reachable memory, the compiler can be less conservative with other pointers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parallelization"
        }), ": if two calls modify disjoint memory regions, they can execute in parallel."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "profile-guided-optimization",
      children: "Profile-Guided Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Profile-guided optimization (PGO) uses runtime profiling data to guide compiler decisions. The workflow has three phases:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-1-instrumentation",
      children: "Phase 1: Instrumentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The compiler inserts counters into the binary at key points:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge counters"
        }), ": at each control-flow edge, record how many times it was taken."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Block counters"
        }), ": record execution frequency of each basic block."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Branch-taken counters"
        }), ": record which direction each branch most commonly goes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Value profiles"
        }), ": for loads and comparisons, record the most common values encountered."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Instrumentation overhead is typically 10?30% slower execution."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-2-training",
      children: "Phase 2: Training"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The instrumented binary runs on representative inputs:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ideal training set"
        }), ": inputs that match production workloads in behavior, data distribution, and control flow."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple training runs"
        }), ": several inputs may be needed to exercise different code paths."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache simulation"
        }), ": optional hardware-counter-based profiling (PEBS on x86, SPE on ARM) records cache misses, branch mispredictions, and TLB misses."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-3-optimization",
      children: "Phase 3: Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The compiler reads profile data and uses it to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Branch biasing"
        }), ": predict the most likely direction for each branch. Inverts the static prediction for cold paths."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function ordering"
        }), ": hot functions (frequently called) are placed together in the binary to improve instruction-cache locality."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Basic-block reordering"
        }), ": cold basic blocks (exception paths, rarely-taken branches) are moved out of the hot code region."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inlining decisions"
        }), ": profile data provides accurate call frequency, replacing heuristics with measured data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loop unrolling"
        }), ": measured trip counts inform the optimal unroll factor."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Register allocation"
        }), ": hot paths get preferential register pressure (weighted spill costs become profile-weighted)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PGO typically yields 10?30% performance improvement over static optimization alone and is widely used in game engines, database systems, and large-scale services."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "static-single-assignment-ssa-form",
      children: "Static Single Assignment (SSA) Form"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Static single assignment form is an intermediate representation in which each variable is assigned exactly once in the text of the program. When multiple definitions reach a use point, a f-function (phi-function) merges them:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Original\nx = 1\nif (cond) {\n    x = 2\n}\ny = x + 1\n\n// SSA form\nx1 = 1\nif (cond) {\n    x2 = 2\n}\nx3 = f(x1, x2)\ny1 = x3 + 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The f-function selects the value of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), " based on which control-flow path was taken at runtime: if control came from the entry block, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x3 = x1 = 1"
      }), "; if from the then-block, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x3 = x2 = 2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ssa-construction-algorithm",
      children: "SSA Construction Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Construction proceeds in two steps: f-insertion and renaming."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: f-Function Placement"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["f-functions are placed at ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dominance frontier"
      }), " (DF) boundaries. For each variable ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v"
      }), " defined at block ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute the dominance frontier ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DF(B)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Place a f-function for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v"
        }), " in each block ", (0,jsx_runtime.jsx)(_components.code, {
          children: "B' ? DF(B)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["This placement may cause ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v"
        }), " to become defined in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "B'"
        }), "; iterate: add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "B'"
        }), " to the set of defining blocks and continue until all necessary f-functions are inserted."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The dominance frontier of block ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B"
      }), " is the set of blocks ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B'"
      }), " such that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "B"
        }), " dominates a predecessor of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "B'"
        }), "; and"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "B"
        }), " does not strictly dominate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "B'"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Intuitively, f-functions are needed where a definition in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B"
      }), " can reach ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B'"
      }), " through multiple paths ? the maximal boundary where dominance stops holding."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function insertPhiFunctions(fg, defBlocks):\n    // defBlocks: map var ? list of blocks that define it\n    for each variable v:\n        worklist = defBlocks[v]\n        df_blocks = {}\n        while worklist is not empty:\n            B = pop(worklist)\n            for D in DF[B]:\n                if D not in df_blocks[v]:\n                    insert f(v) in D\n                    df_blocks[v].add(D)\n                    worklist.add(D)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Renaming"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rename each variable so that every definition has a unique subscript:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Traverse the dominator tree in preorder."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "At each block, process f-functions first (define new names for their results)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process each non-f instruction: rename uses to the current reaching definition, then define a new name for the result."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recursively visit children in the dominator tree."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After returning from children, pop the name stack (restore reaching definitions for siblings)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "stack: Map<varName, list<version>>\ncounter: Map<varName, int>\n\nfunction rename(B):\n    for each f in B: push new name for f.dest\n    for each instruction I in B:\n        for each use u in I:\n            I.u = top(stack[u])\n        if I has dest d:\n            newName = counter[d]++\n            I.dest = d_newName\n            push(d_newName, stack[d])\n    for each child C in domChildren(B):\n        rename(C)\n    for each f and instruction with new names in B:\n        pop(stack)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ssa-optimizations",
      children: "SSA Optimizations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSA simplifies many optimizations because each variable has a single definition point:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Global Value Numbering (GVN)"
        }), ": two expressions ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a + b"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "c + d"
        }), " are equivalent if, after renaming, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a = c"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "b = d"
        }), " (both defined at the same SSA version). Hash-based GVN becomes trivial."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dead-Code Elimination"
        }), ": if an SSA value has no uses, its defining instruction can be removed (no need to scan for other uses of the same variable)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constant Propagation"
        }), ": the lattice algorithm (Chapter 12) processes f-functions as merge points. SSA's explicit f-functions make the algorithm simpler and more precise (SCCP)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conditional Constant Propagation"
        }), " (SCCP, Wegman-Zadeck): simultaneously propagates constants and marks unreachable code. Uses two worklists: one for SSA edges (value propagation) and one for CFG edges (executability). If a branch condition becomes constant, one successor is marked unreachable."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-sea-of-nodes-ir",
      children: "The Sea-of-Nodes IR"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LLVM uses SSA form. C2 (HotSpot) and TurboFan (V8) use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sea-of-nodes"
      }), ", an extension of SSA where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nodes represent operations (additions, loads, branches, f-functions)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Edges represent both data flow and control flow."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The graph is not constrained to basic-block boundaries ? operations float freely, ordered only by data dependencies and side-effect constraints."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The sea-of-nodes enables ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "global code motion"
      }), ": an operation can be placed at any point after its inputs are available and before its outputs are used, regardless of basic-block structure. This subsumes LICM, global scheduling, and partial redundancy elimination into a single graph transformation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "auto-parallelization",
      children: "Auto-Parallelization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Auto-parallelization transforms sequential code into parallel code automatically, targeting multi-core processors or SIMD units. The compiler must verify correctness via dependence analysis."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "loop-carried-dependence-analysis",
      children: "Loop-Carried Dependence Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Two iterations of a loop are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "independent"
      }), " if no value produced in one iteration is consumed or overwritten by another. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "loop-carried dependence"
      }), " exists otherwise."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Formally, for statements S1 at iteration i and S2 at iteration j, there exists a dependence if:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S1 writes to memory location L at iteration i."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S2 reads or writes to L at iteration j."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "i ? j (or i = j for intra-iteration dependence)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dependence direction vectors capture the relationship:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "(=)"
        }), ": S1 and S2 at the same iteration (intra-iteration)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "(<)"
        }), ": S1 at iteration i, S2 at iteration i + k, k > 0 (flow: later iteration depends on earlier)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "(>)"
        }), ": S1 at iteration i + k, S2 at iteration i (anti: earlier iteration depends on later ? only possible with output dependencies)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A loop is fully parallelizable if the direction vector contains no \"<\" entries."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-polytope-model",
      children: "The Polytope Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "affine loop nests"
      }), " ? loops where bounds and array indices are linear functions of loop variables ? the polytope model provides a mathematical framework for dependence analysis."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each loop iteration is a point in an integer polyhedron (the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "iteration space"
      }), "). Each array access is defined by an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "access function"
      }), " that maps iteration points to array indices:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// a[i][j] = a[i-1][j] + a[i][j-1]\n// Access function for RHS a[i-1][j]:  a(i, j) = (i-1, j)\n\n// Dependence exists if:\n// ? (i1, j1), (i2, j2) in iteration space such that\n// a writes at (i1, j1) and reads at (i2, j2) with same (or overlapping) address\n// A write a[i1][j1] and read a[i2-1][j2] with i1 = i2-1, j1 = j2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The dependence problem reduces to solving a system of linear inequalities. Non-affine loops (with indirection) cannot be analyzed by the polytope model and require runtime tests or conservative assumptions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parallelization-transformations",
      children: "Parallelization Transformations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When dependence analysis identifies a loop as parallelizable:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DOALL"
        }), " parallelism: loop iterations are independent and can be distributed across threads. No synchronization needed between iterations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DOACROSS"
        }), " parallelism: loop-carried dependencies exist but can be handled with synchronization (pipelined parallelism)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When dependence prevents full parallelization, the compiler may:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Privatization"
        }), ": give each thread a private copy of a variable. Only changes the thread's copy, avoiding conflicts. Applies when a variable is written in one iteration and read in the same or a later iteration but with thread-local access."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reduction recognition"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sum += a[i]"
        }), " is associative and commutative. Each thread accumulates a partial sum, and the final sum merges them. Parallel reduction is linear: O(N/P + P) vs. serial O(N)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loop distribution"
        }), ": separate vectorizable code from non-vectorizable code. The vectorizable part runs as SIMD; the non-vectorizable part runs scalarly."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "speculative-parallelization",
      children: "Speculative Parallelization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern processors can speculatively execute loop iterations out of order (hardware speculation). The compiler can be more aggressive in parallelization, relying on hardware to detect and recover from dependence violations. This is the basis of Transactional Memory approaches."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "putting-it-all-together--typescript-implementation",
      children: "Putting It All Together ? TypeScript Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ============================================================\n// SSA Construction\n// ============================================================\n\ninterface Block {\n  id: number\n  stmts: string[]\n  preds: number[]\n  succs: number[]\n  idom?: number           // immediate dominator\n  domChildren: number[]\n  df: Set<number>         // dominance frontier\n}\n\ninterface Phi {\n  dest: string\n  args: string[]          // one per predecessor\n  blockId: number\n}\n\nclass SSAConstructor {\n  private versionCounters: Map<string, number> = new Map()\n  private nameStack: Map<string, string[]> = new Map()\n  private phis: Phi[] = []\n  private ssaStmts: Map<number, string[]> = new Map()\n\n  constructor(private blocks: Block[]) {\n    for (const b of blocks) {\n      this.ssaStmts.set(b.id, [])\n    }\n  }\n\n  computeDominators() {\n    // Simplified dominator tree for small examples\n    // Real implementation uses Lengauer-Tarjan (Chapter 11)\n    const n = this.blocks.length\n    const doms: Map<number, number> = new Map()\n    doms.set(this.blocks[0].id, this.blocks[0].id)\n\n    let changed = true\n    while (changed) {\n      changed = false\n      for (let i = 1; i < n; i++) {\n        const b = this.blocks[i]\n        if (b.preds.length === 0) continue\n        let newIdom = b.preds[0]\n        for (let j = 1; j < b.preds.length; j++) {\n          const p = b.preds[j]\n          if (doms.has(p)) {\n            newIdom = this.intersect(doms, p, newIdom)\n          }\n        }\n        if (doms.get(b.id) !== newIdom) {\n          doms.set(b.id, newIdom!)\n          changed = true\n        }\n      }\n    }\n\n    for (let i = 1; i < n; i++) {\n      const b = this.blocks[i]\n      const idom = doms.get(b.id)\n      if (idom !== undefined && idom !== b.id) {\n        b.idom = idom\n        this.blocks.find(d => d.id === idom)?.domChildren.push(b.id)\n      }\n    }\n  }\n\n  private intersect(doms: Map<number, number>, finger1: number, finger2: number): number {\n    let f1 = finger1, f2 = finger2\n    while (f1 !== f2) {\n      while (f1 < f2) { f1 = doms.get(f1) ?? f1 }\n      while (f2 < f1) { f2 = doms.get(f2) ?? f2 }\n    }\n    return f1\n  }\n\n  computeDominanceFrontiers() {\n    for (const b of this.blocks) {\n      if (b.preds.length < 2) continue\n      for (const p of b.preds) {\n        let runner = p\n        while (runner !== b.idom) {\n          const runnerBlock = this.blocks.find(x => x.id === runner)!\n          runnerBlock.df.add(b.id)\n          runner = runnerBlock.idom ?? runner\n          if (runner === undefined) break\n        }\n      }\n    }\n  }\n\n  insertPhiFunctions() {\n    const defBlocks = new Map<string, number[]>()\n    for (const b of this.blocks) {\n      for (const stmt of b.stmts) {\n        const lhs = stmt.split('=')[0].trim()\n        if (!defBlocks.has(lhs)) defBlocks.set(lhs, [])\n        defBlocks.get(lhs)!.push(b.id)\n      }\n    }\n\n    for (const [varName, defs] of defBlocks) {\n      const worklist = [...defs]\n      const phiPlaced = new Set<number>()\n\n      while (worklist.length > 0) {\n        const bId = worklist.pop()!\n        const block = this.blocks.find(b => b.id === bId)!\n        for (const dfBlockId of block.df) {\n          if (!phiPlaced.has(dfBlockId)) {\n            phiPlaced.add(dfBlockId)\n            const phi: Phi = {\n              dest: varName,\n              args: [],\n              blockId: dfBlockId,\n            }\n            this.phis.push(phi)\n            worklist.push(dfBlockId)\n          }\n        }\n      }\n    }\n  }\n\n  rename() {\n    // Initialize counters\n    for (const b of this.blocks) {\n      for (const stmt of b.stmts) {\n        const lhs = stmt.split('=')[0].trim()\n        if (!this.versionCounters.has(lhs)) this.versionCounters.set(lhs, 0)\n        if (!this.nameStack.has(lhs)) this.nameStack.set(lhs, [])\n        // Also add used variables\n        const rhs = stmt.split('=')[1]\n        if (rhs) {\n          const vars = rhs.match(/[a-zA-Z_]\\w*/g) || []\n          for (const v of vars) {\n            if (!this.versionCounters.has(v)) this.versionCounters.set(v, 0)\n            if (!this.nameStack.has(v)) this.nameStack.set(v, [])\n          }\n        }\n      }\n    }\n\n    this.renameBlock(this.blocks[0].id)\n  }\n\n  private renameBlock(bId: number) {\n    const block = this.blocks.find(b => b.id === bId)!\n    const pushes: Array<{ varName: string; newName: string }> = []\n\n    // Process f-functions in this block\n    for (const phi of this.phis.filter(p => p.blockId === bId)) {\n      const newName = `${phi.dest}_${this.versionCounters.get(phi.dest)!}`\n      this.versionCounters.set(phi.dest, this.versionCounters.get(phi.dest)! + 1)\n      this.nameStack.get(phi.dest)!.push(newName)\n      pushes.push({ varName: phi.dest, newName })\n      // f dest gets new name\n      this.ssaStmts.get(bId)!.push(`${newName} = f(...)`)\n    }\n\n    // Rename regular statements\n    for (const stmt of block.stmts) {\n      const eqIdx = stmt.indexOf('=')\n      const lhs = stmt.substring(0, eqIdx).trim()\n      const rhs = stmt.substring(eqIdx + 1).trim()\n\n      // Rename uses on RHS\n      const renamedRhs = rhs.replace(/[a-zA-Z_]\\w*/g, (match) => {\n        const stack = this.nameStack.get(match)\n        if (stack && stack.length > 0) return stack[stack.length - 1]\n        return match\n      })\n\n      // Create new version for LHS\n      const newLhs = `${lhs}_${this.versionCounters.get(lhs)!}`\n      this.versionCounters.set(lhs, this.versionCounters.get(lhs)! + 1)\n      this.nameStack.get(lhs)!.push(newLhs)\n      pushes.push({ varName: lhs, newName: newLhs })\n\n      this.ssaStmts.get(bId)!.push(`${newLhs} = ${renamedRhs}`)\n    }\n\n    // Visit children\n    for (const childId of block.domChildren) {\n      this.renameBlock(childId)\n    }\n\n    // Pop stacks\n    for (const { varName } of pushes) {\n      this.nameStack.get(varName)!.pop()\n    }\n  }\n\n  getSSA(): Phi[] {\n    return this.phis\n  }\n\n  getSSAStmts(): Map<number, string[]> {\n    return this.ssaStmts\n  }\n}\n\n// ============================================================\n// SSA-Based Global Value Numbering\n// ============================================================\n\nclass GVN {\n  private valueTable: Map<string, string> = new Map()\n\n  constructor(private ssaStmts: Map<number, string[]>) {}\n\n  apply(): Map<number, string[]> {\n    const result = new Map<number, string[]>()\n    for (const [bId, stmts] of this.ssaStmts) {\n      const newStmts: string[] = []\n      for (const stmt of stmts) {\n        // Skip f-functions\n        if (stmt.includes('f')) { newStmts.push(stmt); continue }\n\n        const eqIdx = stmt.indexOf('=')\n        const lhs = stmt.substring(0, eqIdx).trim()\n        const rhs = stmt.substring(eqIdx + 1).trim()\n\n        // Hash the RHS\n        const hash = this.hashRHS(rhs)\n        if (this.valueTable.has(hash)) {\n          // Redundant expression: replace with previously computed value\n          const canonical = this.valueTable.get(hash)!\n          newStmts.push(`${lhs} = ${canonical} (via GVN)`)\n        } else {\n          this.valueTable.set(hash, lhs)\n          newStmts.push(stmt)\n        }\n      }\n      result.set(bId, newStmts)\n    }\n    return result\n  }\n\n  private hashRHS(rhs: string): string {\n    // Simplified: the RHS string itself is the hash\n    // A real GVN would normalize commutative operands\n    return rhs.replace(/\\s+/g, '')\n  }\n}\n\n// ============================================================\n// Example: SSA Construction\n// ============================================================\n\n// Flow graph for: x = 1; if (cond) { x = 2; } y = x + 1;\nconst exampleBlocks: Block[] = [\n  { id: 0, stmts: ['x = 1'], preds: [], succs: [1], domChildren: [], df: new Set() },\n  { id: 1, stmts: ['if cond goto 2 else 3'], preds: [0], succs: [2, 3], domChildren: [], df: new Set() },\n  { id: 2, stmts: ['x = 2'], preds: [1], succs: [3], domChildren: [], df: new Set() },\n  { id: 3, stmts: ['y = x + 1'], preds: [1, 2], succs: [], domChildren: [], df: new Set() },\n]\n\nconst ssa = new SSAConstructor(exampleBlocks)\nssa.computeDominators()\nssa.computeDominanceFrontiers()\nssa.insertPhiFunctions()\nssa.rename()\n\nconsole.log('=== SSA Form ===')\nconst ssaStmts = ssa.getSSAStmts()\nconst phis = ssa.getSSA()\nfor (const phi of phis) {\n  console.log(`Block ${phi.blockId}: f(${phi.dest})`)\n}\nfor (const [bId, stmts] of ssaStmts) {\n  console.log(`Block ${bId}: ${stmts.join('; ')}`)\n}\n\n// ============================================================\n// Example: Simple JIT Emulator\n// ============================================================\n\ninterface JITMethod {\n  name: string\n  bytecode: string[]      // simplified bytecode\n  invocationCount: number\n  compiled: boolean\n  compilationLevel: number\n}\n\nclass SimpleJIT {\n  private methods: Map<string, JITMethod> = new Map()\n\n  // Thresholds\n  static readonly TIER1_THRESHOLD = 3   // baseline compile\n  static readonly TIER2_THRESHOLD = 10  // optimize\n\n  registerMethod(name: string, bytecode: string[]) {\n    this.methods.set(name, {\n      name,\n      bytecode,\n      invocationCount: 0,\n      compiled: false,\n      compilationLevel: 0,\n    })\n  }\n\n  invoke(methodName: string, ...args: number[]): number {\n    const method = this.methods.get(methodName)!\n    if (!method) throw new Error(`Method ${methodName} not found`)\n\n    method.invocationCount++\n\n    // Tiered compilation decision\n    if (method.invocationCount === SimpleJIT.TIER1_THRESHOLD) {\n      console.log(`[JIT] Compiling ${methodName} at baseline (Tier 1)`)\n      method.compiled = true\n      method.compilationLevel = 1\n    } else if (method.invocationCount === SimpleJIT.TIER2_THRESHOLD) {\n      console.log(`[JIT] Recompiling ${methodName} with optimizations (Tier 2)`)\n      method.compilationLevel = 2\n    }\n\n    // Execute (simplified ? real JIT executes compiled code)\n    return this.execute(method, args)\n  }\n\n  private execute(method: JITMethod, args: number[]): number {\n    if (method.compiled) {\n      // Simulate compiled execution speed\n      return this.interpExecute(method, args)\n    }\n    return this.interpExecute(method, args)\n  }\n\n  private interpExecute(method: JITMethod, args: number[]): number {\n    let stack: number[] = [...args]\n    const vars: Map<string, number> = new Map()\n\n    for (const bc of method.bytecode) {\n      const parts = bc.split(' ')\n      switch (parts[0]) {\n        case 'push': stack.push(Number(parts[1])); break\n        case 'load': stack.push(vars.get(parts[1]) ?? 0); break\n        case 'store': vars.set(parts[1], stack.pop()!); break\n        case 'add': { const b = stack.pop()!, a = stack.pop()!; stack.push(a + b); break }\n        case 'sub': { const b = stack.pop()!, a = stack.pop()!; stack.push(a - b); break }\n        case 'mul': { const b = stack.pop()!, a = stack.pop()!; stack.push(a * b); break }\n        case 'ret': return stack.pop()!\n      }\n    }\n    return stack.pop() ?? 0\n  }\n}\n\n// Test the JIT emulator\nconst jit = new SimpleJIT()\njit.registerMethod('add', [\n  'push 5',\n  'load a',\n  'add',\n  'store result',\n  'load result',\n  'ret',\n])\n\nconsole.log('\\n=== Simple JIT Emulator ===')\nfor (let i = 0; i < 12; i++) {\n  const result = jit.invoke('add', i)\n  if (i < 3) console.log(`[Interpret] add(${i}) = ${result}`)\n  else if (i < 10) console.log(`[Tier 1]    add(${i}) = ${result}`)\n  else console.log(`[Tier 2]    add(${i}) = ${result}`)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (console)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== SSA Form ===\nBlock 3: f(x)\nBlock 0: x_0 = 1\nBlock 1: if cond goto 2 else 3\nBlock 2: x_1 = 2\nBlock 3: x_2 = f(...); y_0 = x_2 + 1\n\n=== Simple JIT Emulator ===\n[Interpret] add(0) = 5\n[Interpret] add(1) = 6\n[Interpret] add(2) = 7\n[JIT] Compiling add at baseline (Tier 1)\n[Tier 1]    add(3) = 8\n...\n[JIT] Recompiling add with optimizations (Tier 2)\n[Tier 2]    add(10) = 15\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern compilation extends far beyond the classic phase-by-phase pipeline. Just-in-time compilers adapt at runtime through tiered compilation and deoptimization, trading compilation speed for peak performance. Interprocedural analysis breaks the function-boundary barrier, enabling inlining, constant propagation across calls, and mod/ref analysis. Profile-guided optimization replaces static heuristics with real-world execution data, yielding 10?30% improvements. Static single assignment form ? where each variable is defined exactly once ? is the dominant IR in production compilers (LLVM, V8 TurboFan, HotSpot C2) because it simplifies all data-flow analyses, enabling global value numbering, dead-code elimination, and sparse conditional constant propagation. Auto-parallelization exploits multi-core hardware by proving loop iterations independent via dependence analysis and the polytope model. Together, these advanced topics represent the frontier of production compiler technology, transforming source code into machine code that approaches the limits of what the hardware can deliver."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "SSA form makes every data-flow analysis simpler and faster"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One definition per variable eliminates reaching-definitions tedium; GVN becomes hash lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dominance frontiers are the key concept for SSA construction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Once understood, f-placement follows mechanically from the CFG dominator tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JIT compilers sacrifice compile time to gain runtime adaptability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tiered compilation is essential: baseline gets warm code fast, optimizer gets hot code peak"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deoptimization is what makes aggressive speculation safe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without it, JITs would be forced to compile conservatively, losing most of their advantage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inlining is the most important interprocedural optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It exposes optimization opportunities across call boundaries that no other technique can match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PGO fills the gap between static analysis and real-world execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profile data improves branch prediction, inlining, and layout by replacing heuristics with measurements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-parallelization is limited by dependence analysis precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The polytope model handles affine loops exactly; non-affine code requires runtime techniques"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "The sea-of-nodes IR subsumes multiple optimizations into one"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global code motion + LICM + PRE become a single graph transformation on the sea of nodes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// advanced\n// lexical-parsing-codegen implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'advanced', data: { topic: 'lexical-parsing-codegen' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// advanced - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'compilers demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'compiler-design', chapter: 'advanced' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('compilers'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What mechanism allows JIT compilers to make aggressive optimistic assumptions without risking correctness?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Type-checking every instruction"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Deoptimization (bailout to interpreter)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Runtime verification of all paths"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Conservative compilation only"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In SSA form, f-functions are placed at:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Every basic block entry"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Control-flow merge points where multiple definitions converge"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Loop headers only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Every variable definition"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Profile-guided optimization typically improves performance over static optimization by:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 1?2%"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 10?30%"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 50?100%"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 200%+"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is NOT a benefit of SSA form?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Each variable is assigned exactly once"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Global value numbering becomes hash-based"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Register allocation becomes unnecessary"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Dead-code elimination requires no liveness analysis"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The polytope model for dependence analysis works for:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Any loop with arbitrary array indices"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Affine loop nests with linear bounds and indices"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Only perfectly nested loops"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Only loops without function calls"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answers</summary>\n1. B, 2. B, 3. B, 4. C, 5. B\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the three tiers of compilation in the HotSpot JVM. What triggers promotion between tiers?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is deoptimization and why is it essential for speculative just-in-time compilation?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the purpose of f-functions in SSA form. How does the dominance frontier determine their placement?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare CHA, RTA, and VTA for call-graph construction. Which is most precise? Which is cheapest?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is profile-guided optimization and what performance improvements can it typically provide?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the concept of a loop-carried dependence. What direction vectors indicate a loop is fully parallelizable?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does the sea-of-nodes IR differ from traditional basic-block-based IR? What advantages does it provide?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Convert the following code into SSA form, inserting f-functions where necessary:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-c",
            children: "int f(int n) {\n    int x = 0;\n    int i = 0;\n    while (i < n) {\n        x = x + i;\n        i = i + 1;\n    }\n    return x;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show the dominator tree, dominance frontiers, f-placement, and renamed variables."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For the call graph with edges: main ? A, main ? B, A ? C, A ? D, B ? D, D ? E:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Which functions are strong inlining candidates if all call counts equal and function sizes are A:100, B:20, C:30, D:60, E:10 instructions?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Assume an inlining budget of 200 instructions total. Justify your choices."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Given the following loop:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-c",
            children: "for (i = 1; i < N; i++) {\n    a[i] = a[i-1] + b[i];\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Identify the loop-carried dependence. Show the dependence direction vector. Can this loop be parallelized? If not, what transformation would enable partial parallelization?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Profile-guided optimization uses runtime data. List three specific decisions that profile data improves, explaining how the data changes the compiler's behavior in each case."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare JIT and AOT compilation along these axes: (a) peak performance, (b) startup time, (c) portability, (d) code size, (e) security. For each axis, explain which approach wins and why."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SSA Construction and Optimization."
          }), " Implement a complete SSA construction pass in TypeScript. Your implementation must: (a) compute the dominator tree for a given flow graph; (b) compute dominance frontiers for each block; (c) insert f-functions at all necessary merge points; (d) rename variables so each definition has a unique SSA name."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Then implement an SSA-based optimization: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Global Value Numbering"
          }), " using hash-based expression lookup that replaces redundant computations."]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Test your SSA constructor + GVN on the following program (expressed as a flow graph with 6 basic blocks, a loop, and a conditional):"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Before SSA\nB0: x = 5\n    y = a + b\n    goto B1\nB1: if cond goto B2 else B3\nB2: z = a + b        // redundant: a+b already computed in B0\n    x = x + z\n    goto B4\nB3: w = a + b        // redundant: a+b already computed in B0\n    x = x + w\n    goto B4\nB4: result = x + y\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Show: (a) the dominator tree, (b) dominance frontiers, (c) the CFG with f-functions inserted, (d) the renamed SSA form, (e) the GVN-optimized SSA form where ", (0,jsx_runtime.jsx)(_components.code, {
            children: "a+b"
          }), " is computed once and reused in B2 and B3."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tiered JIT Emulator."
          }), " Extend the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SimpleJIT"
          }), " class with a simple optimization pass that runs at Tier 2. The optimizer should: (a) perform constant folding on the bytecode (\"push 2; push 3; add\" ? \"push 5\"), (b) eliminate dead stores (a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "store"
          }), " followed by another ", (0,jsx_runtime.jsx)(_components.code, {
            children: "store"
          }), " to the same variable with no ", (0,jsx_runtime.jsx)(_components.code, {
            children: "load"
          }), " in between), and (c) inline small methods (methods with = 3 bytecode instructions). Show the bytecode before and after optimization for a test method, and measure the execution speedup between Tier 1 (no optimization) and Tier 2 (optimized) over 10,000 invocations."]
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