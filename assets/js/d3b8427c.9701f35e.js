"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[31694],{

/***/ 23081
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_compiler_design_10_optimization_md_d3b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-compiler-design-10-optimization-md-d3b.json
const site_docs_courses_compiler_design_10_optimization_md_d3b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/compiler-design/10-optimization","title":"Chapter 10: Code Optimization","description":"? Previous Code Generation | Next Control-Flow Analysis","source":"@site/docs/courses/compiler-design/10-optimization.md","sourceDirName":"courses/compiler-design","slug":"/compiler-design/10-optimization","permalink":"/ai-engineering-journey/compiler-design/10-optimization","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"10-optimization","slug":"/compiler-design/10-optimization","title":"Chapter 10: Code Optimization","sidebar_label":"Chapter 10: Code Optimization","sidebar_position":10},"sidebar":"course-compiler-design","previous":{"title":"Chapter 9: Code Generation","permalink":"/ai-engineering-journey/compiler-design/09-code-gen"},"next":{"title":"Chapter 11: Control-Flow Analysis","permalink":"/ai-engineering-journey/compiler-design/11-cfa"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/compiler-design/10-optimization.md


const frontMatter = {
	id: '10-optimization',
	slug: '/compiler-design/10-optimization',
	title: 'Chapter 10: Code Optimization',
	sidebar_label: 'Chapter 10: Code Optimization',
	sidebar_position: 10
};
const contentTitle = 'Chapter 10: Code Optimization';

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
  "value": "Machine-Independent versus Machine-Dependent Optimization",
  "id": "machine-independent-versus-machine-dependent-optimization",
  "level": 3
}, {
  "value": "Peephole Optimization",
  "id": "peephole-optimization",
  "level": 3
}, {
  "value": "Complete TypeScript Peephole Optimizer",
  "id": "complete-typescript-peephole-optimizer",
  "level": 3
}, {
  "value": "Common-Subexpression Elimination",
  "id": "common-subexpression-elimination",
  "level": 3
}, {
  "value": "Dead-Code Elimination with Side-Effect Analysis",
  "id": "dead-code-elimination-with-side-effect-analysis",
  "level": 3
}, {
  "value": "Optimization-Enabling Analyses",
  "id": "optimization-enabling-analyses",
  "level": 3
}, {
  "value": "Fixed-Point Optimization Loop",
  "id": "fixed-point-optimization-loop",
  "level": 3
}, {
  "value": "Complete Demo",
  "id": "complete-demo",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 3
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 3
}, {
  "value": "Example 10.1: Peephole Optimization Sequence",
  "id": "example-101-peephole-optimization-sequence",
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
        id: "chapter-10-code-optimization",
        children: "Chapter 10: Code Optimization"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["? Previous: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/09-code-gen",
        children: "Chapter 9: Code Generation"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/11-cfa",
        children: "Chapter 11: Control-Flow Analysis"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, students will be able to: distinguish machine-independent from machine-dependent optimizations; apply peephole optimization techniques including redundant load/store elimination, constant folding, strength reduction, null-sequence elimination, and algebraic simplification; implement common-subexpression elimination; perform copy propagation and dead-code elimination; implement a fixed-point peephole optimizer in TypeScript; and understand how data-flow analyses enable more powerful global optimizations."
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
        href: "../../assets/images/lessons/compiler-design/10-optimization/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/10-optimization/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/10-optimization/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/10-optimization/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/10-optimization/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/10-optimization/visual-explanation.png",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Machine-Independent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IR-level transformations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Work on any target architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Machine-Dependent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target-specific improvements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exploit special instructions and pipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Peephole Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern-matching on small windows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, incremental, easy to implement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Common-Subexpression Elimination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reuse previously computed values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces redundant computation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copy Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace variables with their values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables further optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dead-Code Elimination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove unused computations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shrinks code and saves time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data-Flow Analysis Foundation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reaching defs, available expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables global optimizations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Generated Code] --> B[Peephole Optimizer]\n    B --> C{Improvement?}\n    C -->|Yes| B\n    C -->|No| D[Data-Flow Analysis]\n    D --> E[Global CSE]\n    D --> F[Dead-Code Elimination]\n    D --> G[Copy Propagation]\n    E --> H[Optimized Code]\n    F --> H\n    G --> H\n    style A fill:#e1f5fe\n    style H fill:#c8e6c9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "machine-independent-versus-machine-dependent-optimization",
      children: "Machine-Independent versus Machine-Dependent Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Code optimization encompasses any transformation of intermediate or target code that preserves the program's semantics while improving speed, code size, or energy consumption."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Machine-independent optimizations"
      }), " operate on the IR without reference to the target machine's instruction set or resource constraints. These include constant folding, dead-code elimination, common-subexpression elimination (CSE), and loop-invariant code motion. Their effectiveness is largely independent of target architecture."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Machine-dependent optimizations"
      }), " exploit specific target capabilities. These include instruction scheduling (minimizing pipeline stalls), register allocation (minimizing memory traffic), and exploitation of special addressing modes or SIMD instructions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "peephole-optimization",
      children: "Peephole Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Peephole optimization examines a short window (typically 2?5 instructions) of consecutive code and replaces matched patterns with equivalent but faster or shorter sequences."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common peephole patterns"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "After"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Savings"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redundant load/store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ST R1, M; LD R2, M"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ST R1, M; MOV R2, R1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 memory access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redundant load"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "LD R1, M; ... LD R2, M"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep first load, use MOV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 memory access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constant folding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "t = 2 * 3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "t = 6"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removed runtime computation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algebraic identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x + 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 instruction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algebraic identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x * 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 instruction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algebraic identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x * 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 instruction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strength reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x * 8"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x << 3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster operation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strength reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x / 4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x >> 2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster operation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Null sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MOV R1, R2; MOV R2, R1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "? (remove both)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 instructions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Jump to jump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "JMP L1; L1: JMP L2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "JMP L2; L1: JMP L2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 jump removed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Branch to next"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BEQ R1, R2, L; L:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "? (remove branch)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 instruction"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-typescript-peephole-optimizer",
      children: "Complete TypeScript Peephole Optimizer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface TACInstr {\n    op: string;\n    result?: string;\n    arg1?: string;\n    arg2?: string;\n}\n\nclass PeepholeOptimizer {\n    optimize(code: TACInstr[]): TACInstr[] {\n        let changed = true;\n        let pass = 0;\n\n        while (changed) {\n            changed = false;\n            pass++;\n            const result = this.pass(code);\n            changed = result.changed;\n            code = result.code;\n            console.log(`Pass ${pass}: code size ${code.length}, changed=${changed}`);\n        }\n\n        return code;\n    }\n\n    private pass(code: TACInstr[]): { code: TACInstr[]; changed: boolean } {\n        let changed = false;\n        let result = [...code];\n\n        // Apply each optimization in sequence\n        result = this.constFolding(result);\n        if (result.length !== code.length) { changed = true; code = result; }\n\n        result = this.strengthReduction(result);\n        if (result.length !== code.length) { changed = true; code = result; }\n\n        result = this.algebraicSimplification(result);\n        if (result.length !== code.length) { changed = true; code = result; }\n\n        result = this.copyPropagation(result);\n        if (result.length !== code.length) { changed = true; code = result; }\n\n        result = this.deadCodeElimination(result);\n        if (result.length !== code.length) { changed = true; code = result; }\n\n        result = this.constantPropagation(result);\n        if (result.length !== code.length) { changed = true; code = result; }\n\n        return { code: result, changed };\n    }\n\n    // Constant folding: evaluate constant expressions at compile time\n    private constFolding(code: TACInstr[]): TACInstr[] {\n        const result: TACInstr[] = [];\n\n        for (const instr of code) {\n            // Skip instructions without two operands\n            if (!instr.arg1 || !instr.arg2 ||\n                instr.op === \"goto\" || instr.op === \"if\" || instr.op === \"ifFalse\") {\n                result.push(instr);\n                continue;\n            }\n\n            const a1 = Number(instr.arg1);\n            const a2 = Number(instr.arg2);\n\n            if (!isNaN(a1) && !isNaN(a2)) {\n                let folded: number | null = null;\n                switch (instr.op) {\n                    case \"+\": folded = a1 + a2; break;\n                    case \"-\": folded = a1 - a2; break;\n                    case \"*\": folded = a1 * a2; break;\n                    case \"/\": folded = a2 !== 0 ? a1 / a2 : NaN; break;\n                    case \"==\": folded = a1 === a2 ? 1 : 0; break;\n                    case \"!=\": folded = a1 !== a2 ? 1 : 0; break;\n                    case \"<\": folded = a1 < a2 ? 1 : 0; break;\n                    case \"<=\": folded = a1 <= a2 ? 1 : 0; break;\n                    case \">\": folded = a1 > a2 ? 1 : 0; break;\n                    case \">=\": folded = a1 >= a2 ? 1 : 0; break;\n                }\n                if (folded !== null && !isNaN(folded)) {\n                    result.push({ op: \"=\", result: instr.result, arg1: String(folded) });\n                    console.log(`  [fold] folded ${instr.op} ${a1} ${a2} ? ${folded}`);\n                } else {\n                    result.push(instr);\n                }\n            } else {\n                result.push(instr);\n            }\n        }\n\n        return result;\n    }\n\n    // Strength reduction: replace expensive ops with cheaper ones\n    private strengthReduction(code: TACInstr[]): TACInstr[] {\n        const result: TACInstr[] = [];\n\n        for (const instr of code) {\n            if (instr.op === \"*\" && instr.arg2) {\n                const multiplier = Number(instr.arg2);\n                if (!isNaN(multiplier) && multiplier > 0) {\n                    // Power of 2: replace with shift\n                    if ((multiplier & (multiplier - 1)) === 0) {\n                        const shift = Math.log2(multiplier);\n                        result.push({\n                            op: \"<<\",\n                            result: instr.result,\n                            arg1: instr.arg1,\n                            arg2: String(shift),\n                        });\n                        console.log(`  [strength] x*${multiplier} ? x<<${shift}`);\n                        continue;\n                    }\n                    // x * 3 ? x + x + x (or x << 1 + x)\n                    // x * 5 ? x << 2 + x\n                    // x * 7 ? x << 3 - x\n                    if (multiplier === 3) {\n                        const temp = `__str_${result.length}`;\n                        result.push({ op: \"<<\", result: temp, arg1: instr.arg1, arg2: \"1\" });\n                        result.push({ op: \"+\", result: instr.result, arg1: temp, arg2: instr.arg1 });\n                        continue;\n                    }\n                    if (multiplier === 5) {\n                        const temp = `__str_${result.length}`;\n                        result.push({ op: \"<<\", result: temp, arg1: instr.arg1, arg2: \"2\" });\n                        result.push({ op: \"+\", result: instr.result, arg1: temp, arg2: instr.arg1 });\n                        continue;\n                    }\n                    if (multiplier === 7) {\n                        const temp = `__str_${result.length}`;\n                        result.push({ op: \"<<\", result: temp, arg1: instr.arg1, arg2: \"3\" });\n                        result.push({ op: \"-\", result: instr.result, arg1: temp, arg2: instr.arg1 });\n                        continue;\n                    }\n                    if (multiplier === 9) {\n                        const temp = `__str_${result.length}`;\n                        result.push({ op: \"<<\", result: temp, arg1: instr.arg1, arg2: \"3\" });\n                        result.push({ op: \"+\", result: instr.result, arg1: temp, arg2: instr.arg1 });\n                        continue;\n                    }\n                }\n            }\n\n            // Replace division by power of 2 with right shift (for positive integers)\n            if (instr.op === \"/\" && instr.arg2) {\n                const divisor = Number(instr.arg2);\n                if (!isNaN(divisor) && divisor > 0 && (divisor & (divisor - 1)) === 0) {\n                    const shift = Math.log2(divisor);\n                    result.push({\n                        op: \">>\",\n                        result: instr.result,\n                        arg1: instr.arg1,\n                        arg2: String(shift),\n                    });\n                    console.log(`  [strength] x/${divisor} ? x>>${shift}`);\n                    continue;\n                }\n            }\n\n            result.push(instr);\n        }\n\n        return result;\n    }\n\n    // Algebraic simplification: x + 0 ? x, x * 1 ? x, etc.\n    private algebraicSimplification(code: TACInstr[]): TACInstr[] {\n        const result: TACInstr[] = [];\n\n        for (const instr of code) {\n            if (instr.op === \"+\") {\n                if (instr.arg2 === \"0\") {\n                    result.push({ op: \"=\", result: instr.result, arg1: instr.arg1 });\n                    console.log(`  [algeb] x + 0 ? x`);\n                    continue;\n                }\n                if (instr.arg1 === \"0\") {\n                    result.push({ op: \"=\", result: instr.result, arg1: instr.arg2 });\n                    console.log(`  [algeb] 0 + y ? y`);\n                    continue;\n                }\n            }\n            if (instr.op === \"-\") {\n                if (instr.arg2 === \"0\") {\n                    result.push({ op: \"=\", result: instr.result, arg1: instr.arg1 });\n                    console.log(`  [algeb] x - 0 ? x`);\n                    continue;\n                }\n                if (instr.arg1 === instr.arg2) {\n                    result.push({ op: \"=\", result: instr.result, arg1: \"0\" });\n                    console.log(`  [algeb] x - x ? 0`);\n                    continue;\n                }\n            }\n            if (instr.op === \"*\") {\n                if (instr.arg2 === \"1\") {\n                    result.push({ op: \"=\", result: instr.result, arg1: instr.arg1 });\n                    console.log(`  [algeb] x * 1 ? x`);\n                    continue;\n                }\n                if (instr.arg2 === \"0\" || instr.arg1 === \"0\") {\n                    result.push({ op: \"=\", result: instr.result, arg1: \"0\" });\n                    console.log(`  [algeb] x * 0 ? 0`);\n                    continue;\n                }\n            }\n            if (instr.op === \"/\") {\n                if (instr.arg2 === \"1\") {\n                    result.push({ op: \"=\", result: instr.result, arg1: instr.arg1 });\n                    console.log(`  [algeb] x / 1 ? x`);\n                    continue;\n                }\n                if (instr.arg1 === \"0\") {\n                    result.push({ op: \"=\", result: instr.result, arg1: \"0\" });\n                    console.log(`  [algeb] 0 / x ? 0`);\n                    continue;\n                }\n            }\n            result.push(instr);\n        }\n\n        return result;\n    }\n\n    // Copy propagation: replace occurrences of a variable with its value\n    private copyPropagation(code: TACInstr[]): TACInstr[] {\n        const copies = new Map<string, string>(); // var ? value\n        const result: TACInstr[] = [];\n        let changed = false;\n\n        for (const instr of code) {\n            // Check for copy: x = y (op \"=\", arg1 is source)\n            if (instr.op === \"=\" && instr.result && instr.arg1) {\n                // Don't propagate constants (handled by constant folding)\n                if (isNaN(Number(instr.arg1))) {\n                    copies.set(instr.result, instr.arg1);\n                }\n            }\n\n            // If a variable used in argument has a known copy, substitute\n            const newInstr: TACInstr = { ...instr };\n\n            if (instr.arg1 && copies.has(instr.arg1) && instr.result !== instr.arg1) {\n                newInstr.arg1 = copies.get(instr.arg1)!;\n                changed = true;\n                console.log(`  [copy-prop] ${instr.arg1} ? ${newInstr.arg1} in ${instr.op}`);\n            }\n            if (instr.arg2 && copies.has(instr.arg2) && instr.result !== instr.arg2) {\n                newInstr.arg2 = copies.get(instr.arg2)!;\n                changed = true;\n                console.log(`  [copy-prop] ${instr.arg2} ? ${newInstr.arg2} in ${instr.op}`);\n            }\n\n            result.push(newInstr);\n        }\n\n        return result;\n    }\n\n    // Constant propagation: replace variable uses with constant values\n    private constantPropagation(code: TACInstr[]): TACInstr[] {\n        const constants = new Map<string, string>(); // var ? constant value\n        const result: TACInstr[] = [];\n        let changed = false;\n\n        for (const instr of code) {\n            // Track assignments of constants\n            if (instr.op === \"=\" && instr.result && instr.arg1) {\n                if (!isNaN(Number(instr.arg1))) {\n                    constants.set(instr.result, instr.arg1);\n                } else {\n                    // Variable assigned to another variable ? if that other variable\n                    // is a constant, propagate\n                    if (constants.has(instr.arg1)) {\n                        constants.set(instr.result, constants.get(instr.arg1)!);\n                    }\n                }\n            }\n\n            // Substitute constant values\n            const newInstr: TACInstr = { ...instr };\n            if (instr.arg1 && constants.has(instr.arg1)) {\n                newInstr.arg1 = constants.get(instr.arg1)!;\n                changed = true;\n                console.log(`  [const-prop] ${instr.arg1} ? ${newInstr.arg1}`);\n            }\n            if (instr.arg2 && constants.has(instr.arg2)) {\n                newInstr.arg2 = constants.get(instr.arg2)!;\n                changed = true;\n                console.log(`  [const-prop] ${instr.arg2} ? ${newInstr.arg2}`);\n            }\n\n            result.push(newInstr);\n        }\n\n        return result;\n    }\n\n    // Dead-code elimination: remove unused variable definitions\n    private deadCodeElimination(code: TACInstr[]): TACInstr[] {\n        // Count uses of each variable\n        const uses = new Map<string, number>();\n\n        for (const instr of code) {\n            for (const arg of [instr.arg1, instr.arg2]) {\n                if (arg && !arg.startsWith(\"__\") && isNaN(Number(arg))) {\n                    uses.set(arg, (uses.get(arg) ?? 0) + 1);\n                }\n            }\n        }\n\n        const result: TACInstr[] = [];\n        let removed = 0;\n\n        for (const instr of code) {\n            const resultVar = instr.result;\n            // Keep instruction if:\n            // 1. It has no result (control flow, label, etc.)\n            // 2. Its result is used elsewhere\n            // 3. Its result has side effects\n            // 4. It's a \"param\" or \"call\" (side effects)\n            if (!resultVar ||\n                resultVar.startsWith(\"__\") || // temp from strength reduction ? might still be needed\n                (uses.get(resultVar) ?? 0) > 0 ||\n                instr.op === \"param\" || instr.op === \"call\" || instr.op === \"return\" ||\n                instr.op === \"if\" || instr.op === \"ifFalse\" || instr.op === \"goto\" ||\n                instr.op.endsWith(\":\") ||\n                instr.op === \"=[]\" || instr.op === \"[]=\") {\n                result.push(instr);\n            } else {\n                console.log(`  [dce] removed dead: ${instr.op} ${instr.result}`);\n                removed++;\n            }\n        }\n\n        return result;\n    }\n\n    // Human-readable format\n    format(instr: TACInstr): string {\n        if (instr.op.endsWith(\":\")) return instr.op;\n        let s = \"\";\n        if (instr.result) s += instr.result + \" = \";\n        s += instr.op;\n        if (instr.arg1) s += \" \" + instr.arg1;\n        if (instr.arg2) s += \", \" + instr.arg2;\n        return s;\n    }\n\n    formatCode(code: TACInstr[]): string {\n        return code.map((instr, i) => `  ${i + 1}: ${this.format(instr)}`).join(\"\\n\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-subexpression-elimination",
      children: "Common-Subexpression Elimination"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If the same expression ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a + b"
      }), " appears at two points and the values of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "b"
      }), " have not changed between them, the second evaluation is redundant and can be replaced by a copy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class GlobalCSE {\n    // Available expressions analysis (simplified within a basic block)\n    eliminate(code: TACInstr[]): TACInstr[] {\n        const seen = new Map<string, string>(); // expression key ? result variable\n        const result: TACInstr[] = [];\n        let eliminated = 0;\n\n        for (const instr of code) {\n            // Only consider binary arithmetic operations\n            if (instr.arg1 && instr.arg2 &&\n                instr.result && !instr.result.startsWith(\"L\") &&\n                [\"+\", \"-\", \"*\", \"/\", \"%\", \"<<\", \">>\"].includes(instr.op)) {\n\n                const key = `${instr.op}:${instr.arg1}:${instr.arg2}`;\n\n                if (seen.has(key)) {\n                    // Expression already computed ? reuse\n                    const existingVar = seen.get(key)!;\n                    result.push({ op: \"=\", result: instr.result, arg1: existingVar });\n                    eliminated++;\n                    console.log(`  [CSE] reused ${existingVar} for ${instr.result} = ${instr.arg1} ${instr.op} ${instr.arg2}`);\n                } else {\n                    seen.set(key, instr.result);\n                    result.push(instr);\n                }\n            } else {\n                // Keep non-arithmetic instructions\n                result.push(instr);\n\n                // On assignment to a variable, invalidate expressions using that variable\n                if (instr.op === \"=\" && instr.result) {\n                    const invalidated: string[] = [];\n                    for (const [key] of seen) {\n                        if (key.includes(`:${instr.result}`) || key.endsWith(`:${instr.result}`)) {\n                            invalidated.push(key);\n                        }\n                    }\n                    for (const k of invalidated) seen.delete(k);\n                }\n            }\n        }\n\n        console.log(`  [CSE] eliminated ${eliminated} redundant computations`);\n        return result;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dead-code-elimination-with-side-effect-analysis",
      children: "Dead-Code Elimination with Side-Effect Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dead-code elimination must respect side effects. A function call with no used result cannot be removed if the function has observable side effects (I/O, exception throwing, infinite loops)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function hasSideEffects(instr: TACInstr): boolean {\n    const sideEffectingOps = new Set([\n        \"call\", \"param\", \"return\", \"[]=\", \"if\", \"ifFalse\", \"goto\",\n    ]);\n    return sideEffectingOps.has(instr.op) || instr.op.endsWith(\":\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "optimization-enabling-analyses",
      children: "Optimization-Enabling Analyses"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Optimizations rely on data-flow analyses:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Computes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Enables"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reaching definitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which definitions may reach a point"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSE, constant propagation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Available expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which expressions are already computed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Live variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which variables are needed later"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dead-code elimination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very-busy expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which expressions are computed on all paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code hoisting"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These analyses are covered in depth in Chapters 11 and 12."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fixed-point-optimization-loop",
      children: "Fixed-Point Optimization Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A correct optimizer must iterate transformations to a fixed point because one optimization may enable another:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Input Code] --> B[Constant Folding]\n    B --> C[Copy Propagation]\n    C --> D[CSE]\n    D --> E[Dead-Code Elim]\n    E --> F{Any Change?}\n    F -->|Yes| B\n    F -->|No| G[Optimized Code]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-demo",
      children: "Complete Demo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Demo ===\nconsole.log(\"=== Peephole Optimizer Demo ===\");\n\nconst optimizer = new PeepholeOptimizer();\nconst cse = new GlobalCSE();\n\n// Generate test code\nconst testCode: TACInstr[] = [\n    // Constant expressions\n    { op: \"*\", result: \"t1\", arg1: \"2\", arg2: \"3\" },\n    { op: \"+\", result: \"t2\", arg1: \"t1\", arg2: \"5\" },\n\n    // Copy propagation candidate\n    { op: \"=\", result: \"t3\", arg1: \"t2\" },\n    { op: \"+\", result: \"t4\", arg1: \"t3\", arg2: \"x\" },\n\n    // Algebraic simplification\n    { op: \"+\", result: \"t5\", arg1: \"t4\", arg2: \"0\" },\n    { op: \"*\", result: \"t6\", arg1: \"t5\", arg2: \"1\" },\n\n    // Strength reduction\n    { op: \"*\", result: \"t7\", arg1: \"y\", arg2: \"8\" },\n    { op: \"/\", result: \"t8\", arg1: \"z\", arg2: \"4\" },\n\n    // CSE candidate: y * 8 appears twice\n    { op: \"*\", result: \"t9\", arg1: \"y\", arg2: \"8\" },\n    { op: \"+\", result: \"t10\", arg1: \"t7\", arg2: \"t9\" },\n\n    // Dead code (t11, t12 never used)\n    { op: \"-\", result: \"t11\", arg1: \"a\", arg2: \"b\" },\n\n    // Used variable\n    { op: \"+\", result: \"result\", arg1: \"t10\", arg2: \"t8\" },\n\n    // More dead code\n    { op: \"*\", result: \"t12\", arg1: \"unused\", arg2: \"3\" },\n];\n\nconsole.log(\"\\nBefore optimization:\");\nconsole.log(optimizer.formatCode(testCode));\n\n// First pass: peephole\nconsole.log(\"\\n=== Phase 1: Peephole ===\");\nconst opt1 = optimizer.optimize(testCode);\n\n// Second pass: CSE\nconsole.log(\"\\n=== Phase 2: CSE ===\");\nconst opt2 = cse.eliminate(opt1);\n\n// Third pass: clean up with peephole again\nconsole.log(\"\\n=== Phase 3: Final Cleanup ===\");\nconst opt3 = optimizer.optimize(opt2);\n\nconsole.log(\"\\n=== Final Optimized Code ===\");\nconsole.log(optimizer.formatCode(opt3));\n\nconsole.log(`\\nSummary: ${testCode.length} ? ${opt3.length} instructions (${((1 - opt3.length / testCode.length) * 100).toFixed(0)}% reduction)`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Optimization"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Savings Potential"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constant Folding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate constants at compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strength Reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace expensive ops with cheap ones"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algebraic Simplification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply identity rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copy Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local/Global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace variables with known values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (enables others)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dead-Code Elimination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local/Global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove unused computations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local/Global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reuse previously computed expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n?)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop-Invariant Code Motion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hoist invariant code out of loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n?)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "After"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Store then load"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ST R1, M; LD R2, M"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ST R1, M; MOV R2, R1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constant expression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "t = 2 * 3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "t = 6"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mul by power of 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x * 8"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x << 3"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Div by power of 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x / 4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x >> 2"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x + 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mul by 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x * 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mul by 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x * 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subtract self"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x - x"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate expression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "t1 = a + b; t2 = a + b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "t1 = a + b; t2 = t1"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relevance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Language Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimization-friendly IR shape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IR determines transformation ease"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Systems Programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-performance computing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimized code can be 10? faster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web Development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScript JIT optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern JITs apply peephole + CSE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary optimization/transpilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Peephole rules apply to any ISA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scientific Computing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop nest optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop transformations improve cache behavior"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-101-peephole-optimization-sequence",
      children: "Example 10.1: Peephole Optimization Sequence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Input:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LD R1, b\nLD R2, c\nADD R3, R1, R2\nST a, R3\nLD R1, a\nLD R2, e\nADD R3, R1, R2\nST d, R3\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After redundant-load elimination (the load of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a"
      }), " is unnecessary ? ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R3"
      }), " already holds it):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LD R1, b\nLD R2, c\nADD R3, R1, R2\nST a, R3\nLD R2, e\nADD R3, R3, R2\nST d, R3\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This removes one ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LD"
      }), " instruction (a memory access), which is typically the most expensive operation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Code optimization improves program quality without changing its external behavior. Peephole optimization provides an efficient technique for local improvements through pattern matching. Algebraic simplification, constant folding, and strength reduction target common suboptimal patterns. Common-subexpression elimination reuses previously computed values. Copy propagation and constant propagation enable further optimization. Dead-code elimination removes unused computations. The TypeScript ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PeepholeOptimizer"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GlobalCSE"
      }), " classes demonstrate all these techniques with a fixed-point iteration loop."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Peephole is cheap and effective"
        }), ": A well-designed peephole optimizer with 20?30 patterns can achieve 10?30% code reduction with minimal compile-time overhead."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimizations interact"
        }), ": One optimization enables another. Always iterate to a fixed point. For example, constant folding may create new algebraic simplification opportunities."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dead-code elimination must respect side effects"
        }), ": Only remove instructions whose result is unused AND the instruction itself has no side effects. Function calls, stores to memory, and barrier instructions must never be removed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CSE within basic blocks is easy"
        }), ": Within a single block, available expressions are trivially computed by scanning forward. Across blocks, full available-expressions analysis (Chapter 12) is needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Strength reduction for multiply/divide by powers of 2 is safe for unsigned integers"
        }), ": Signed division by powers of 2 has edge cases with negative numbers ? the shift is not an exact replacement."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// optimization\n// lexical-parsing-codegen implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'optimization', data: { topic: 'lexical-parsing-codegen' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// optimization - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'compilers demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'compiler-design', chapter: 'optimization' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('compilers'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Which optimization replaces ", (0,jsx_runtime.jsx)(_components.code, {
            children: "x * 8"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "x << 3"
          }), "?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Constant folding"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Strength reduction"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Dead-code elimination"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Copy propagation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Redundant load elimination removes which pattern?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Two consecutive additions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) A store followed by a load of the same address with no intervening modification"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Any load that follows a store"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Instructions that compute unused results"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which optimization requires whole-procedure analysis rather than peephole matching?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Constant folding"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Algebraic simplification"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Global common-subexpression elimination"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Redundant store elimination"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the key invariant that all peephole optimizations must preserve?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Register count"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Program semantics (external behavior)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Number of instructions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Variable names"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why must peephole optimization iterate to a fixed point?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Because the peephole window is too small"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Because one optimization may enable another"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Because the compiler requires multiple passes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) To ensure all instructions are examined"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answers</summary>\n1. B, 2. B, 3. C, 4. B, 5. B\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish machine-independent and machine-dependent optimizations. Give two examples of each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the peephole optimization window, and how does the compiler examine candidate sequences?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how constant folding reduces runtime work. Provide three concrete examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is strength reduction? Give examples of three expensive operations and their cheaper equivalents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why must dead-code elimination respect side effects? Give an example of an instruction with side effects that cannot be removed even if its result is unused."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply peephole optimization to the following assembly sequence:\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "LD R1, x\nST R1, x\nLD R2, #4\nMUL R3, R1, R2\nST y, R3\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Perform constant folding on the expression ", (0,jsx_runtime.jsx)(_components.code, {
          children: "5 * (3 + 2) * a"
        }), ". Show the expression after each folding step."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply strength reduction to: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y = x * 16"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "z = w * 7"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a = b * 4 + c * 4"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Identify all dead-code candidates in the following basic block:\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "t1 = a + b\nt2 = a - b\nt1 = c * d\nx = t1 + t2\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show three full iterations of the peephole optimizer on a sequence of 8 instructions, demonstrating how one optimization enables another."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a peephole optimizer in TypeScript (based on the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PeepholeOptimizer"
        }), " class) that reads a sequence of three-address code instructions and applies the following transformations in a fixed-point loop: (a) constant folding, (b) strength reduction for multiplication by powers of two, (c) algebraic simplification, (d) copy propagation, (e) elimination of redundant stores followed by loads of the same variable, (f) dead-code elimination. The optimizer must continue iterating until no further improvements are possible. Demonstrate the optimizer on a test sequence of at least 15 instructions and show the output after each optimization pass. Print a summary showing the code size reduction percentage."]
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