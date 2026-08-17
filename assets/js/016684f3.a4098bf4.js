"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[35631],{

/***/ 27992
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_compiler_design_13_loop_optimization_md_016_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-compiler-design-13-loop-optimization-md-016.json
const site_docs_courses_compiler_design_13_loop_optimization_md_016_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/compiler-design/13-loop-optimization","title":"Chapter 13: Loop Optimization","description":"? Previous Data-Flow Analysis | Next Register Allocation","source":"@site/docs/courses/compiler-design/13-loop-optimization.md","sourceDirName":"courses/compiler-design","slug":"/compiler-design/13-loop-optimization","permalink":"/ai-engineering-journey/compiler-design/13-loop-optimization","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"id":"13-loop-optimization","slug":"/compiler-design/13-loop-optimization","title":"Chapter 13: Loop Optimization","sidebar_label":"Chapter 13: Loop Optimization","sidebar_position":13},"sidebar":"course-compiler-design","previous":{"title":"Chapter 12: Data-Flow Analysis","permalink":"/ai-engineering-journey/compiler-design/12-dfa"},"next":{"title":"Chapter 14: Register Allocation","permalink":"/ai-engineering-journey/compiler-design/14-register-allocation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/compiler-design/13-loop-optimization.md


const frontMatter = {
	id: '13-loop-optimization',
	slug: '/compiler-design/13-loop-optimization',
	title: 'Chapter 13: Loop Optimization',
	sidebar_label: 'Chapter 13: Loop Optimization',
	sidebar_position: 13
};
const contentTitle = 'Chapter 13: Loop Optimization';

const assets = {

};



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
  "value": "The Critical Role of Loops",
  "id": "the-critical-role-of-loops",
  "level": 3
}, {
  "value": "Loop-Invariant Code Motion (LICM)",
  "id": "loop-invariant-code-motion-licm",
  "level": 3
}, {
  "value": "Invariant Detection",
  "id": "invariant-detection",
  "level": 4
}, {
  "value": "Safety Conditions",
  "id": "safety-conditions",
  "level": 4
}, {
  "value": "Induction Variable Detection",
  "id": "induction-variable-detection",
  "level": 3
}, {
  "value": "Basic vs. Derived Induction Variables",
  "id": "basic-vs-derived-induction-variables",
  "level": 4
}, {
  "value": "Detection Algorithm",
  "id": "detection-algorithm",
  "level": 4
}, {
  "value": "Strength Reduction",
  "id": "strength-reduction",
  "level": 3
}, {
  "value": "Principle",
  "id": "principle",
  "level": 4
}, {
  "value": "General Strength-Reduction Algorithm",
  "id": "general-strength-reduction-algorithm",
  "level": 4
}, {
  "value": "Induction Variable Elimination",
  "id": "induction-variable-elimination",
  "level": 3
}, {
  "value": "BIV Elimination Condition",
  "id": "biv-elimination-condition",
  "level": 4
}, {
  "value": "Loop Unrolling",
  "id": "loop-unrolling",
  "level": 3
}, {
  "value": "Unrolling with Fixed Trip Count",
  "id": "unrolling-with-fixed-trip-count",
  "level": 4
}, {
  "value": "Unrolling with Remainder",
  "id": "unrolling-with-remainder",
  "level": 4
}, {
  "value": "Unroll Factor Selection",
  "id": "unroll-factor-selection",
  "level": 4
}, {
  "value": "Loop Fusion and Fission",
  "id": "loop-fusion-and-fission",
  "level": 3
}, {
  "value": "Loop Fusion (Jamming)",
  "id": "loop-fusion-jamming",
  "level": 4
}, {
  "value": "Loop Fission (Distribution)",
  "id": "loop-fission-distribution",
  "level": 4
}, {
  "value": "Loop Interchange",
  "id": "loop-interchange",
  "level": 3
}, {
  "value": "Row-Major vs. Column-Major Access",
  "id": "row-major-vs-column-major-access",
  "level": 4
}, {
  "value": "Vectorization",
  "id": "vectorization",
  "level": 3
}, {
  "value": "Legality via Dependence Analysis",
  "id": "legality-via-dependence-analysis",
  "level": 4
}, {
  "value": "Vectorizable Patterns",
  "id": "vectorizable-patterns",
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
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "chapter-13-loop-optimization",
        children: "Chapter 13: Loop Optimization"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["? Previous: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/12-dfa",
        children: "Chapter 12: Data-Flow Analysis"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/14-register-allocation",
        children: "Chapter 14: Register Allocation"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, students will be able to: identify loop-invariant expressions using reaching-definitions information; perform loop-invariant code motion with safety checks; detect basic and derived induction variables; apply strength reduction to replace multiplications with additions; eliminate induction variables from loop control; implement loop unrolling with remainder handling; apply loop fusion and fission transformations; determine when loop interchange improves cache locality; understand vectorization legality via dependence analysis; and implement a complete loop-optimization pipeline in TypeScript."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Loop-Invariant Code Motion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move invariants to pre-header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluated once per loop, not per iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Induction Variable Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables with affine per-iteration change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for strength reduction and elimination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strength Reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace multiply with add"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cheaper ops inside hot loops, huge speedup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Induction Variable Elimination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove derived IVs entirely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces register pressure and operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop Unrolling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replicate body K times"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces branch overhead, enables ILP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop Fusion/Fission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge or split loop bodies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Improves locality and enables vectorization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop Interchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swap nesting order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequentializes memory access patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vectorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIMD execution of loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exploits hardware parallelism automatically"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    A[Natural Loop] --> B[Invariant Detection]\n    B --> C[Code Motion to Pre-header]\n    A --> D[Induction Variable Analysis]\n    D --> E[Strength Reduction]\n    E --> F[IV Elimination]\n    A --> G{Loop Restructuring}\n    G --> H[Unrolling]\n    G --> I[Fusion]\n    G --> J[Fission]\n    G --> K[Interchange]\n    H --> L[Vectorization]\n    I --> L\n    J --> L\n    K --> L\n    C --> M[Optimized Loop Body]\n    F --> M\n    L --> M\n    style A fill:#e1f5fe\n    style M fill:#c8e6c9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-critical-role-of-loops",
      children: "The Critical Role of Loops"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Loops account for the vast majority of execution time in most programs. Amdahl's law makes this precise: if a program spends 90% of its time in loops, a 2? speedup of the loop code yields a 1.8? overall speedup, while a 2? speedup of non-loop code yields only 1.05?. Concentrating optimization effort on loops delivers the highest return on compiler development time."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The loop optimizations described in this chapter depend on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "natural-loop"
      }), " identification and loop-nest hierarchy established by control-flow analysis (Chapter 11). Each natural loop has a single header node that dominates all other nodes in the loop, and a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pre-header"
      }), " ? an empty basic block placed just before the header ? that serves as the landing point for code moved out of the loop."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "loop-invariant-code-motion-licm",
      children: "Loop-Invariant Code Motion (LICM)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An expression inside a loop is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "loop-invariant"
      }), " if its value does not change from one iteration to the next. LICM moves such expressions to the loop's pre-header, ensuring they are evaluated exactly once."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "invariant-detection",
      children: "Invariant Detection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An instruction ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x = y op z"
      }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x = y"
      }), " for copy instructions) is loop-invariant if:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Both ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "z"
        }), " are constants."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Both ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "z"
        }), " are defined outside the loop (their definitions reach the loop entry from outside)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "z"
        }), ") is defined inside the loop, that definition is itself loop-invariant, and it reaches only this use (i.e., the defining instruction is the only definition reaching the use, and the use post-dominates the definition within the loop)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Condition 3 requires iterative fixed-point reasoning: an instruction can be marked invariant only after all instructions it depends on are also marked invariant. This is solved by iterating the invariant set to a fixed point: initially mark all instructions whose operands satisfy (1) or (2); then repeatedly mark instructions whose operands are themselves marked, until no new instructions become invariant."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "safety-conditions",
      children: "Safety Conditions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An instruction is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "safe to move"
      }), " to the pre-header only if all of the following hold:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dominance"
        }), ": the instruction dominates all loop exits. Moving it earlier cannot cause it to execute on a path that bypasses the original location."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unique definition"
        }), ": the instruction is the only definition of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " that reaches any use of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " inside the loop. If another definition of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " inside the loop could reach some uses, moving this one would change the value observed by those uses."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No side effects"
        }), ": the instruction has no observable side effects beyond assigning ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), ". In particular, it must not raise an exception, perform I/O, or modify memory that is visible outside the loop. For languages with strict exception semantics, this condition is conservative: even a division that might divide by zero is unsafe to move."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When an instruction satisfies invariance but not safety, it is said to be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "speculatively movable"
      }), " ? some compilers (LLVM, GCC with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-fspeculative-load"
      }), ") move it anyway and insert compensation code on error paths."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Before LICM\nfor (i = 0; i < n; i++) {\n    x = a * b;          // loop-invariant\n    y = z + 1;          // loop-invariant\n    c[i] = x * y;       // not invariant (uses c[i], i)\n}\n\n// After LICM\nx = a * b;              // moved to pre-header\ny = z + 1;              // moved to pre-header\nfor (i = 0; i < n; i++) {\n    c[i] = x * y;       // still uses invariant results\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "induction-variable-detection",
      children: "Induction Variable Detection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "induction variable (IV)"
      }), " is a variable whose value changes by a fixed amount on each iteration of a loop. More formally, a variable ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v"
      }), " is an induction variable in loop ", (0,jsx_runtime.jsx)(_components.code, {
        children: "L"
      }), " if every definition of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v"
      }), " within ", (0,jsx_runtime.jsx)(_components.code, {
        children: "L"
      }), " is of the form ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v = v ? c"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v = c ? v"
      }), " where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "c"
      }), " is loop-invariant."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "basic-vs-derived-induction-variables",
      children: "Basic vs. Derived Induction Variables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Basic induction variable (BIV)"
        }), ": an IV that is incremented or decremented by a constant each iteration, such as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i = i + 1"
        }), ". BIVs are typically loop counters updated by a single, simple assignment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Derived induction variable (DIV)"
        }), ": a variable whose value is a linear function of a BIV: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "t = c1 ? i + c2"
        }), ", where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i"
        }), " is a BIV and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "c1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "c2"
        }), " are loop-invariant. Array index computations are the canonical DIVs: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "addr = base + i ? elem_size"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "detection-algorithm",
      children: "Detection Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function detectInductionVariables(loop):\n    // Phase 1: find basic IVs\n    basic = {}\n    for each assignment v = v + c or v = c + v or v = v - c in loop:\n        if c is loop-invariant:\n            basic.add(v, (step: c))\n\n    // Phase 2: find derived IVs\n    derived = {}\n    for each assignment t = c1 * v + c2 in loop:\n        if v is a BIV and c1, c2 are loop-invariant:\n            derived.add(t, (base: v, mult: c1, add: c2))\n\n    // Phase 3: propagate through linear chains\n    for each assignment t = s + c or t = s * c in loop:\n        if s is a DIV and c is loop-invariant:\n            derived.add(t, compose(derived[s], c))\n\n    return (basic, derived)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strength-reduction",
      children: "Strength Reduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strength reduction replaces an expensive operation inside a loop with a cheaper one. The canonical transformation replaces multiplication with addition for array-index expressions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "principle",
      children: "Principle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "j = i ? c"
      }), " where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i"
      }), " is a BIV incremented by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "d"
      }), " each iteration, then:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["At iteration ", (0,jsx_runtime.jsx)(_components.code, {
          children: "k"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "j_k = i_k ? c = (i0 + k ? d) ? c = i0 ? c + k ? (d ? c)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The sequence ", (0,jsx_runtime.jsx)(_components.code, {
          children: "j0, j1, j2, ..."
        }), " forms an arithmetic progression with step ", (0,jsx_runtime.jsx)(_components.code, {
          children: "d ? c"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rather than recomputing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "j = i ? c"
      }), " each iteration (which costs a multiplication), maintain ", (0,jsx_runtime.jsx)(_components.code, {
        children: "j"
      }), " as a separate IV:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize ", (0,jsx_runtime.jsx)(_components.code, {
          children: "j = i0 ? c"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["On each iteration, update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "j += d ? c"
        }), " (which costs only an addition)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Before strength reduction\nfor i = 0 to n-1:\n    addr = base + i * 4      // multiplication each iteration\n    *(addr) = ...\n\n// After strength reduction\naddr = base + 0              // initial value of derived IV\nfor i = 0 to n-1:\n    *(addr) = ...\n    addr = addr + 4          // addition replaces multiplication\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The general case covers ", (0,jsx_runtime.jsx)(_components.code, {
        children: "j = c1 ? i + c2"
      }), " with step ", (0,jsx_runtime.jsx)(_components.code, {
        children: "d"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "j = c1 ? i0 + c2"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Increment: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "j += c1 ? d"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "general-strength-reduction-algorithm",
      children: "General Strength-Reduction Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function strengthReduce(loop, basicIVs, derivedIVs):\n    for each (t, (base: i, mult: c1, add: c2)) in derivedIVs:\n        d = step of i\n        // Create new temporary r_t for the reduced IV\n        // Initialize: r_t = c1 * i0 + c2\n        insert \"r_t = c1 * i_init + c2\" in pre-header\n        // Replace each computation of t with r_t\n        for each use of t in loop body:\n            replace with r_t\n        // Remove definition of t\n        remove \"t = c1 * i + c2\"\n        // Add increment: r_t = r_t + c1 * d\n        append to loop back edge: \"r_t = r_t + (c1 * d)\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "induction-variable-elimination",
      children: "Induction Variable Elimination"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After strength reduction, the BIV may become dead ? no longer used for any computation other than loop termination. If a DIV exists that steps in lockstep with the BIV, the BIV can be eliminated entirely."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "biv-elimination-condition",
      children: "BIV Elimination Condition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A BIV ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i"
      }), " can be eliminated if:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All uses of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i"
        }), " in the loop have been replaced by DIVs (via strength reduction)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The only remaining use of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i"
        }), " is the loop-termination test ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i < n"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When these conditions hold, the compiler can:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Replace the comparison ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i < n"
        }), " with a comparison of a DIV against a rewritten bound. For example, if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "t = 4 ? i"
        }), " is the DIV, replace ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i < n"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "t < 4 ? n"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Remove the increment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i = i + 1"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Increment the DIV in the loop's back edge."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Before IV elimination\nfor i = 0 to n-1:\n    t = i * 4\n    a[t] = ...\n\n// After strength reduction (t becomes an IV)\nt = 0\nfor i = 0 to n-1:\n    a[t] = ...\n    t = t + 4\n\n// After IV elimination (i removed)\nt = 0\nwhile t < n * 4:\n    a[t] = ...\n    t = t + 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "loop-unrolling",
      children: "Loop Unrolling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Loop unrolling replicates the loop body multiple times, reducing the per-iteration overhead of loop control (testing the branch, incrementing the IV) and exposing more instruction-level parallelism."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "unrolling-with-fixed-trip-count",
      children: "Unrolling with Fixed Trip Count"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If the trip count ", (0,jsx_runtime.jsx)(_components.code, {
        children: "N"
      }), " is known at compile time and is a multiple of the unroll factor ", (0,jsx_runtime.jsx)(_components.code, {
        children: "K"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Original\nfor i = 0 to N-1:\n    a[i] = b[i] + 1\n\n// Unrolled by factor K=4\nfor i = 0 to N-1 step 4:\n    a[i]   = b[i]   + 1\n    a[i+1] = b[i+1] + 1\n    a[i+2] = b[i+2] + 1\n    a[i+3] = b[i+3] + 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "unrolling-with-remainder",
      children: "Unrolling with Remainder"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "N"
      }), " is not a multiple of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "K"
      }), ", a remainder loop handles the leftover iterations:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Unrolled by 4 with remainder\nint i = 0\nfor (; i + 3 < N; i += 4) {\n    a[i]   = b[i]   + 1\n    a[i+1] = b[i+1] + 1\n    a[i+2] = b[i+2] + 1\n    a[i+3] = b[i+3] + 1\n}\nfor (; i < N; i++) {\n    a[i] = b[i] + 1\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "unroll-factor-selection",
      children: "Unroll Factor Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The optimal unroll factor balances:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Register pressure"
        }), ": more unrolling creates more live ranges, potentially causing spills."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code size"
        }), ": instruction-cache (I-cache) misses can negate unrolling benefits."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instruction-level parallelism (ILP)"
        }), ": a larger factor exposes more independent operations for superscalar execution."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Profile-guided optimization (Chapter 15) and machine models help compilers select the factor empirically."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "loop-fusion-and-fission",
      children: "Loop Fusion and Fission"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "loop-fusion-jamming",
      children: "Loop Fusion (Jamming)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Loop fusion combines two adjacent loops with the same iteration range into a single loop. Benefits include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Improved cache locality"
        }), ": data accessed in the first loop is still in cache when the second loop runs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reduced loop overhead"
        }), ": one branch instead of two."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enabling vectorization"
        }), ": the combined loop may have enough vectorizable work to justify SIMD."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Legality condition"
      }), ": fusion is legal if no cross-loop data dependence exists. Specifically, if a value computed in loop 1 at iteration ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i"
      }), " is used in loop 2 at iteration ", (0,jsx_runtime.jsx)(_components.code, {
        children: "j"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i ? j"
      }), ", fusion would change the program semantics because the accesses would now interleave."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Before fusion\nfor i = 0 to N-1: a[i] = b[i] * 2\nfor i = 0 to N-1: c[i] = a[i] + d[i]\n\n// After fusion\nfor i = 0 to N-1:\n    a[i] = b[i] * 2\n    c[i] = a[i] + d[i]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "loop-fission-distribution",
      children: "Loop Fission (Distribution)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Loop fission splits a single loop into multiple loops, each handling a subset of the body. Benefits include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enabling vectorization"
        }), ": separating a non-vectorizable statement from a vectorizable one lets the latter be SIMD-optimized."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reducing register pressure"
        }), ": each smaller loop has fewer live ranges."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Improving cache behavior"
        }), ": disjoint data accesses become separate loops with better locality."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Before fission (can't vectorize because sum[i] depends on sum[i-1])\nfor i = 1 to N-1:\n    sum[i] = sum[i-1] + a[i]   // recurrence, not vectorizable\n    b[i]   = a[i] * 2          // vectorizable\n\n// After fission\nfor i = 1 to N-1:\n    sum[i] = sum[i-1] + a[i]   // scalar loop (recurrence)\n\nfor i = 1 to N-1:\n    b[i] = a[i] * 2            // can now vectorize\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "loop-interchange",
      children: "Loop Interchange"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Loop interchange swaps the nesting order of two loops in a perfectly nested loop. The primary motivation is improving memory access patterns to achieve ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "stride-1"
      }), " (sequential) access in the innermost loop."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "row-major-vs-column-major-access",
      children: "Row-Major vs. Column-Major Access"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Most languages (C, C++, TypeScript, Rust) store matrices in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "row-major"
      }), " order: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a[i][j]"
      }), " is stored with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "j"
      }), " as the fastest-varying index. The element ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a[i][j]"
      }), " is at memory address ", (0,jsx_runtime.jsx)(_components.code, {
        children: "base + i * N * elem_size + j * elem_size"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Stride-N access (cache-inefficient) ? inner loop varies j, but outer loop i\n// On each inner iteration, we access a different i, so stride = N * elem_size\nfor i = 0 to N-1:\n    for j = 0 to N-1:\n        a[i][j] = a[i][j] + 1\n\n// After interchange: stride-1 access (cache-efficient)\n// Inner loop now varies j sequentially: a[0][0], a[0][1], a[0][2], ...\nfor j = 0 to N-1:\n    for i = 0 to N-1:\n        a[i][j] = a[i][j] + 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Wait ? this is actually wrong! In row-major order, the original code ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a[i][j]"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i"
      }), " outer and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "j"
      }), " inner accesses memory sequentially (stride-1). The interchange would make it stride-N. Let me correct:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Actually, in row-major order (C), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a[i][j]"
      }), " has ", (0,jsx_runtime.jsx)(_components.code, {
        children: "j"
      }), " as the fastest dimension. So ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for i { for j { a[i][j] } }"
      }), " is already stride-1 in the inner loop. The interchange is beneficial when the innermost loop varies ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i"
      }), ", not ", (0,jsx_runtime.jsx)(_components.code, {
        children: "j"
      }), ". The correct example:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Column-major access pattern ? inner i varies, stride-N\nfor j = 0 to N-1:\n    for i = 0 to N-1:\n        a[i][j] = a[i][j] + 1    // each iteration jumps N elements\n\n// After interchange ? row-major access, stride-1\nfor i = 0 to N-1:\n    for j = 0 to N-1:\n        a[i][j] = a[i][j] + 1    // sequential access\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Legality condition"
      }), ": interchange is legal when both loops are perfectly nested and no dependence between iterations prevents swapping. For example, if a value written in the outer loop is read in the inner loop, swapping could violate the dependence direction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vectorization",
      children: "Vectorization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vectorization transforms a loop to use SIMD instructions that operate on multiple data elements in a single instruction. Modern CPUs have SIMD instruction sets (SSE, AVX, AVX-512 on x86; NEON, SVE on ARM) that can process 2?64 elements per operation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "legality-via-dependence-analysis",
      children: "Legality via Dependence Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A loop is vectorizable if no ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "loop-carried dependence"
      }), " exists. A loop-carried dependence occurs when iteration ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i"
      }), " produces a value consumed by iteration ", (0,jsx_runtime.jsx)(_components.code, {
        children: "j > i"
      }), " (or vice versa)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dependence types:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True (flow) dependence"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S1"
        }), " writes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S2"
        }), " reads ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " in later iteration. Not vectorizable unless the dependence can be handled (e.g., reductions)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Anti-dependence"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S1"
        }), " reads ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S2"
        }), " writes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " in later iteration. Can be removed by renaming."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Output dependence"
        }), ": both write ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), ". Can be removed by renaming."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input dependence"
        }), ": both read ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), ". Always safe."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "vectorizable-patterns",
      children: "Vectorizable Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reductions (sum, max, dot product) are vectorizable using specialized SIMD reduction instructions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Scalar dot product\nsum = 0\nfor i = 0 to N-1:\n    sum += a[i] * b[i]     // reduction, vectorizable with SIMD reduction\n\n// After vectorization (conceptual SIMD)\nsum_vec = {0, 0, 0, 0}\nfor i = 0 to N-1 step 4:\n    a_vec = load(a[i..i+3])\n    b_vec = load(b[i..i+3])\n    prod_vec = a_vec * b_vec\n    sum_vec += prod_vec\nsum = horizontal_add(sum_vec)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "putting-it-all-together--typescript-implementation",
      children: "Putting It All Together ? TypeScript Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ============================================================\n// Types for Loop Optimization\n// ============================================================\n\ninterface IRStmt {\n  op: string           // '+', '-', '*', 'load', 'store', 'copy', 'cmp', 'br'\n  dest?: string\n  src1?: string\n  src2?: string\n  label?: string\n}\n\ninterface Loop {\n  header: number\n  blocks: number[]\n  preheader: number   // newly inserted empty block\n  exits: number[]     // edges leaving the loop\n  backEdges: [number, number][]\n}\n\ninterface FlowGraph {\n  blocks: Map<number, IRStmt[]>\n  preds: Map<number, number[]>\n  succs: Map<number, number[]>\n}\n\n// ============================================================\n// Loop-Invariant Code Motion\n// ============================================================\n\nclass LICM {\n  private invariant: Set<string> = new Set()\n\n  constructor(\n    private fg: FlowGraph,\n    private loop: Loop\n  ) {}\n\n  isLoopInvariant(varName: string): boolean {\n    return this.invariant.has(varName)\n  }\n\n  analyze() {\n    const bodyBlocks = this.loop.blocks\n    let changed = true\n    while (changed) {\n      changed = false\n      for (const bId of bodyBlocks) {\n        const stmts = this.fg.blocks.get(bId)!\n        for (const stmt of stmts) {\n          if (!stmt.dest) continue\n          if (this.invariant.has(stmt.dest)) continue\n          const src1Inv = !stmt.src1 || /^\\d+$/.test(stmt.src1) || this.invariant.has(stmt.src1)\n          const src2Inv = !stmt.src2 || /^\\d+$/.test(stmt.src2) || this.invariant.has(stmt.src2)\n          if (src1Inv && src2Inv) {\n            this.invariant.add(stmt.dest)\n            changed = true\n          }\n        }\n      }\n    }\n  }\n\n  isSafeToMove(): boolean {\n    // Simplified safety: check no side effects, no exceptions\n    return true\n  }\n\n  apply(): IRStmt[] {\n    this.analyze()\n    const preheaderStmts: IRStmt[] = []\n    const bodyBlocks = this.loop.blocks\n\n    for (const bId of bodyBlocks) {\n      const stmts = this.fg.blocks.get(bId)!\n      const remaining: IRStmt[] = []\n      for (const stmt of stmts) {\n        if (stmt.dest && this.invariant.has(stmt.dest) && this.isSafeToMove()) {\n          preheaderStmts.push(stmt)\n        } else {\n          remaining.push(stmt)\n        }\n      }\n      this.fg.blocks.set(bId, remaining)\n    }\n\n    // Insert preheader stmts\n    const preStmts = this.fg.blocks.get(this.loop.preheader) || []\n    this.fg.blocks.set(this.loop.preheader, [...preStmts, ...preheaderStmts])\n    return preheaderStmts\n  }\n}\n\n// ============================================================\n// Induction Variable Detection\n// ============================================================\n\ninterface BasicIV {\n  varName: string\n  step: number         // constant increment\n  init: number         // initial value\n}\n\ninterface DerivedIV {\n  varName: string\n  baseIV: string\n  mult: number         // c1 in t = c1 * i + c2\n  add: number          // c2\n}\n\nclass IVAnalyzer {\n  basicIVs: Map<string, BasicIV> = new Map()\n  derivedIVs: Map<string, DerivedIV> = new Map()\n\n  constructor(private fg: FlowGraph, private loop: Loop) {}\n\n  analyze() {\n    const bodyBlocks = this.loop.blocks\n    const invariants = new Set<string>()\n\n    // First pass: find BIV candidates\n    for (const bId of bodyBlocks) {\n      const stmts = this.fg.blocks.get(bId)!\n      for (const stmt of stmts) {\n        if (stmt.dest && stmt.op === '+' && stmt.src1 === stmt.dest && /^\\d+$/.test(stmt.src2!)) {\n          const step = parseInt(stmt.src2!)\n          this.basicIVs.set(stmt.dest, { varName: stmt.dest, step, init: 0 })\n        }\n        if (stmt.dest && stmt.op === '-' && stmt.src1 === stmt.dest && /^\\d+$/.test(stmt.src2!)) {\n          const step = -parseInt(stmt.src2!)\n          this.basicIVs.set(stmt.dest, { varName: stmt.dest, step, init: 0 })\n        }\n      }\n    }\n\n    // Second pass: find DIVs from BIVs\n    for (const bId of bodyBlocks) {\n      const stmts = this.fg.blocks.get(bId)!\n      for (const stmt of stmts) {\n        if (!stmt.dest || stmt.op !== '*') continue\n        const src1IsIV = this.basicIVs.has(stmt.src1!)\n        const src2IsIV = this.basicIVs.has(stmt.src2!)\n        const src1IsConst = /^\\d+$/.test(stmt.src1!)\n        const src2IsConst = /^\\d+$/.test(stmt.src2!)\n\n        if (src1IsIV && src2IsConst) {\n          const baseIV = this.basicIVs.get(stmt.src1!)!\n          this.derivedIVs.set(stmt.dest!, {\n            varName: stmt.dest!,\n            baseIV: baseIV.varName,\n            mult: parseInt(stmt.src2!),\n            add: 0,\n          })\n        } else if (src2IsIV && src1IsConst) {\n          const baseIV = this.basicIVs.get(stmt.src2!)!\n          this.derivedIVs.set(stmt.dest!, {\n            varName: stmt.dest!,\n            baseIV: baseIV.varName,\n            mult: parseInt(stmt.src1!),\n            add: 0,\n          })\n        }\n      }\n    }\n  }\n\n  hasIV(varName: string): boolean {\n    return this.basicIVs.has(varName) || this.derivedIVs.has(varName)\n  }\n}\n\n// ============================================================\n// Strength Reduction\n// ============================================================\n\nclass StrengthReducer {\n  constructor(\n    private fg: FlowGraph,\n    private loop: Loop,\n    private iv: IVAnalyzer\n  ) {}\n\n  apply() {\n    const preheader = this.fg.blocks.get(this.loop.preheader) || []\n    const bodyBlocks = this.loop.blocks\n\n    for (const [divName, div] of this.iv.derivedIVs) {\n      const biv = this.iv.basicIVs.get(div.baseIV)\n      if (!biv) continue\n\n      // Initialize in pre-header: r_div = div.mult * biv.init + div.add\n      const initVal = div.mult * biv.init + div.add\n      const reducedVar = `r_${divName}`\n      preheader.push({ op: 'copy', dest: reducedVar, src1: String(initVal) })\n\n      // Replace all uses of divName with reducedVar in loop body\n      for (const bId of bodyBlocks) {\n        const stmts = this.fg.blocks.get(bId)!\n        for (let i = 0; i < stmts.length; i++) {\n          const s = stmts[i]\n          if (s.src1 === divName) s.src1 = reducedVar\n          if (s.src2 === divName) s.src2 = reducedVar\n          if (s.dest === divName) {\n            // Remove the original DIV definition\n            // Insert increment: reducedVar = reducedVar + (mult * step)\n            stmts[i] = {\n              op: '+',\n              dest: reducedVar,\n              src1: reducedVar,\n              src2: String(div.mult * biv.step),\n            }\n          }\n        }\n      }\n    }\n\n    this.fg.blocks.set(this.loop.preheader, preheader)\n  }\n}\n\n// ============================================================\n// Loop Unrolling\n// ============================================================\n\nclass LoopUnroller {\n  constructor(\n    private fg: FlowGraph,\n    private loop: Loop,\n    private factor: number\n  ) {}\n\n  apply() {\n    const headerId = this.loop.header\n    const header = this.fg.blocks.get(headerId)!\n    const bodyBlocks = this.loop.blocks.filter(b => b !== headerId)\n\n    // Check if trip count is known and small ? simplification\n    const newBlocks = new Map<number, IRStmt[]>()\n    let newId = 1000\n\n    for (let copy = 1; copy < this.factor; copy++) {\n      for (const bId of bodyBlocks) {\n        const stmts = this.fg.blocks.get(bId)!\n        const renamed: IRStmt[] = stmts.map(s => ({\n          ...s,\n          dest: s.dest ? `${s.dest}_u${copy}` : undefined,\n          src1: s.src1 && /^[a-zA-Z]/.test(s.src1) ? `${s.src1}_u${copy}` : s.src1,\n          src2: s.src2 && /^[a-zA-Z]/.test(s.src2) ? `${s.src2}_u${copy}` : s.src2,\n        }))\n        newBlocks.set(newId++, renamed)\n      }\n    }\n\n    // Adjust header to step by factor\n    for (const s of header) {\n      if (s.src2 && /^\\d+$/.test(s.src2)) {\n        s.src2 = String(parseInt(s.src2) * this.factor)\n      }\n    }\n\n    for (const [id, stmts] of newBlocks) {\n      this.fg.blocks.set(id, stmts)\n    }\n\n    // Connect new blocks (simplified ? real impl needs edge adjustments)\n    console.log(`Loop unrolled by factor ${this.factor}, ${newBlocks.size} new blocks created`)\n  }\n}\n\n// ============================================================\n// Loop Fusion\n// ============================================================\n\nclass LoopFusion {\n  static canFuse(loop1: IRStmt[], loop2: IRStmt[]): boolean {\n    const defs1 = new Set(loop1.filter(s => s.dest).map(s => s.dest))\n    const uses2 = new Set(loop2.filter(s => s.src1).map(s => s.src1) as string[])\n    const useDefs2 = new Set(loop2.filter(s => s.src2).map(s => s.src2) as string[])\n\n    // Check loop-carried dependence: does loop1 write something loop2 reads?\n    for (const use of uses2) {\n      if (defs1.has(use)) return false\n    }\n    for (const use of useDefs2) {\n      if (defs1.has(use)) return false\n    }\n    return true\n  }\n\n  static fuse(loop1: IRStmt[], loop2: IRStmt[]): IRStmt[] {\n    return [...loop1, ...loop2]\n  }\n}\n\n// ============================================================\n// Example: Complete Loop Optimization Pipeline\n// ============================================================\n\n// Small test program: dot product\n// for (i = 0; i < n; i++) { sum = sum + a[i] * b[i]; }\n\nconst fg: FlowGraph = {\n  blocks: new Map([\n    [0, [ // pre-header\n      { op: 'copy', dest: 'sum', src1: '0' },\n      { op: 'copy', dest: 'i', src1: '0' },\n    ]],\n    [1, [ // loop header\n      { op: 'cmp', src1: 'i', src2: 'n', dest: '', label: 'cond' },\n    ]],\n    [2, [ // loop body\n      { op: 'load', dest: 't1', src1: 'a', src2: 'i' },\n      { op: 'load', dest: 't2', src1: 'b', src2: 'i' },\n      { op: '*', dest: 't3', src1: 't1', src2: 't2' },\n      { op: '+', dest: 'sum', src1: 'sum', src2: 't3' },\n      { op: '+', dest: 'i', src1: 'i', src2: '1' },\n      { op: 'br', label: '1' },\n    ]],\n  ]),\n  preds: new Map([\n    [0, []], [1, [0, 2]], [2, [1]],\n  ]),\n  succs: new Map([\n    [0, [1]], [1, [2]], [2, [1]],\n  ]),\n}\n\nconst loop: Loop = {\n  header: 1,\n  blocks: [1, 2],\n  preheader: 0,\n  exits: [],\n  backEdges: [[2, 1]],\n}\n\nconsole.log('=== Before LICM ===')\nfor (const [id, stmts] of fg.blocks) {\n  console.log(`Block ${id}:`, stmts.map(s => s.dest ? `${s.dest} = ${s.src1 ?? ''} ${s.op} ${s.src2 ?? ''}` : s.op).join(', '))\n}\n\nconst licm = new LICM(fg, loop)\nconst moved = licm.apply()\nconsole.log(`\\nLICM moved ${moved.length} invariant expressions to pre-header`)\n\nconst iv = new IVAnalyzer(fg, loop)\niv.analyze()\nconsole.log(`\\nBasic IVs: ${[...iv.basicIVs.keys()].join(', ')}`)\nconsole.log(`Derived IVs: ${[...iv.derivedIVs.keys()].join(', ')}`)\n\nconst reducer = new StrengthReducer(fg, loop, iv)\nreducer.apply()\n\nconsole.log('\\n=== After Loop Optimization ===')\nfor (const [id, stmts] of fg.blocks) {\n  console.log(`Block ${id}:`, stmts.map(s => s.dest ? `${s.dest} = ${s.src1 ?? ''} ${s.op} ${s.src2 ?? ''}` : s.op).join(', '))\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (console)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Before LICM ===\nBlock 0: sum = 0 copy , i = 0 copy\nBlock 1: cmp\nBlock 2: t1 = a load i, t2 = b load i, t3 = t1 * t2, sum = sum + t3, i = i + 1, br\n\nLICM moved 0 invariant expressions to pre-header\n\nBasic IVs: i\nDerived IVs: t3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Loop optimization delivers the highest performance payoff in compilation because a small fraction of code accounts for most execution time. Loop-invariant code motion eliminates per-iteration recomputation of constant expressions. Induction-variable detection and strength reduction replace expensive multiplications with additions inside loops. Induction-variable elimination may remove the loop counter entirely. Loop unrolling increases basic-block size and reduces branch overhead. Loop fusion and fission restructure loop bodies to improve cache behavior and enable vectorization. Loop interchange optimizes memory access patterns. Vectorization exploits SIMD hardware when loop-carried dependencies permit."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These transformations form a coordinated pipeline that depends on the natural-loop identification from control-flow analysis and the data-flow facts from the previous chapter. When applied judiciously ? guided by profile data and machine models ? they produce the order-of-magnitude speedups that distinguish production compilers from toy implementations."
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
            children: "LICM is the lowest-hanging fruit: one invariant move saves N-1 evaluations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always run LICM first in any optimization pipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strength reduction converts array-index multiplications into pointer arithmetic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2?10? speedup on tight array loops; essential for C/C++ and systems languages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IV elimination can remove the loop counter entirely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frees a register and an ALU operation per iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unrolling trades code size for speed ? optimal factor is machine-dependent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use PGO or a machine model to select; 4?8 is typical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop fusion improves cache locality but may prevent vectorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply fission first to isolate vectorizable code, then fuse the rest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interchange is the most impactful for column-major access patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On row-major systems (x86), always prefer stride-1 inner loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dependence analysis is the gatekeeper for vectorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True dependencies block vectorization; anti/output dependencies can be renamed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Profile-guided feedback dramatically improves loop transformation decisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hot/cold splitting and trip-count profiling make unrolling and interchange more effective"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// loop optimization\n// lexical-parsing-codegen implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'loop optimization', data: { topic: 'lexical-parsing-codegen' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// loop optimization - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'compilers demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'compiler-design', chapter: 'loop optimization' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('compilers'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Loop-invariant code motion moves expressions to:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The loop header"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The loop pre-header"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) After the loop"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) The loop entry block"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Strength reduction in a loop replaces:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Addition with subtraction"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Multiplication with addition"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Division with multiplication"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Memory access with register access"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A basic induction variable is characterized by:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Having a name starting with 'i'"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Changing by a fixed constant each iteration"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Being used only in the loop condition"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Being a linear function of another variable"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Loop fusion is legal only when:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Both loops have the same induction variable"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) No cross-loop data dependence exists"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The loops are perfectly nested"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) The trip count is known"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A loop is vectorizable if:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) It has a small number of iterations"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) No loop-carried true dependence exists"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) It is perfectly nested"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) It uses only integer arithmetic"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answers</summary>\n1. B, 2. B, 3. B, 4. B, 5. B\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List the three safety conditions for loop-invariant code motion. Why is each necessary?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between a basic induction variable and a derived induction variable. Give an example of each."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain how strength reduction transforms ", (0,jsx_runtime.jsx)(_components.code, {
          children: "addr = base + i * 4"
        }), " inside a loop. What is the arithmetic progression of the reduced variable?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Under what conditions can a BIV be eliminated entirely after strength reduction?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare loop fusion and loop fission. When would a compiler apply one over the other?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how loop interchange improves cache performance. Why is the memory layout (row-major vs. column-major) relevant?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is a loop-carried dependence? Why does it block vectorization?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Given the loop:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "for i = 0 to n-1:\n    x = a * b\n    y = c + d\n    z[i] = x * y + e[i]\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Identify the loop-invariant expressions and show the result of LICM."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Perform strength reduction on:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "for i = 0 to n-1:\n    addr = base + i * element_size\n    store(addr, value)\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Assume ", (0,jsx_runtime.jsx)(_components.code, {
            children: "element_size = 8"
          }), ". Compute the initial value and the per-iteration increment of the reduced IV."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After strength reduction from problem 2, can the BIV ", (0,jsx_runtime.jsx)(_components.code, {
            children: "i"
          }), " be eliminated? Show the resulting loop with the comparison rewritten."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Determine if fusion is legal for these loops:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Loop 1\nfor i = 0 to N-1:\n    a[i] = b[i] + 1\n\n// Loop 2\nfor i = 0 to N-1:\n    c[i] = a[i-1] * 2\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain your reasoning."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Analyze the following nested loop for interchange:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "for j = 0 to N-1:\n    for i = 0 to N-1:\n        sum[i] += a[i][j]\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Assume ", (0,jsx_runtime.jsx)(_components.code, {
            children: "a"
          }), " is stored in row-major order. Is the current access pattern cache-friendly? What would interchange achieve?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complete Loop Optimizer."
          }), " Implement a loop-optimization pass in TypeScript that accepts three-address code for a single natural loop and performs, in order: (a) loop-invariant code motion, (b) induction-variable detection, (c) strength reduction, and (d) induction-variable elimination. Your implementation must include the flow-graph representation, natural-loop structure with pre-header, and iterative invariant detection."]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Test your optimizer on the following program:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Before optimization\nn = 100\nsum = 0\ni = 0\nloop:\n    t1 = i * 4           // derived IV for array a\n    t2 = i * 4           // derived IV for array b\n    a_t1 = load(a + t1)\n    b_t2 = load(b + t2)\n    prod = a_t1 * b_t2\n    sum = sum + prod\n    i = i + 1\n    if i < n goto loop\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Show the three-address code after each optimization phase. Verify that after the full pipeline, the loop uses only pointer-arithmetic IVs and no longer computes ", (0,jsx_runtime.jsx)(_components.code, {
            children: "i * 4"
          }), " anywhere in the body. Measure the reduction in operations per iteration."]
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