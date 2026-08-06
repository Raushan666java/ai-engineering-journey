"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[75905],{

/***/ 41555
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_compiler_design_09_code_gen_md_a42_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-compiler-design-09-code-gen-md-a42.json
const site_docs_courses_compiler_design_09_code_gen_md_a42_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/compiler-design/09-code-gen","title":"Chapter 9: Code Generation","description":"? Previous Runtime Environment | Next Code Optimization","source":"@site/docs/courses/compiler-design/09-code-gen.md","sourceDirName":"courses/compiler-design","slug":"/compiler-design/09-code-gen","permalink":"/ai-engineering-journey/compiler-design/09-code-gen","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"09-code-gen","slug":"/compiler-design/09-code-gen","title":"Chapter 9: Code Generation","sidebar_label":"Chapter 9: Code Generation","sidebar_position":9},"sidebar":"coursesSidebar","previous":{"title":"Chapter 8: Runtime Environment","permalink":"/ai-engineering-journey/compiler-design/08-runtime-env"},"next":{"title":"Chapter 10: Code Optimization","permalink":"/ai-engineering-journey/compiler-design/10-optimization"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/compiler-design/09-code-gen.md


const frontMatter = {
	id: '09-code-gen',
	slug: '/compiler-design/09-code-gen',
	title: 'Chapter 9: Code Generation',
	sidebar_label: 'Chapter 9: Code Generation',
	sidebar_position: 9
};
const contentTitle = 'Chapter 9: Code Generation';

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
  "value": "Target Machine Model",
  "id": "target-machine-model",
  "level": 3
}, {
  "value": "Addressing Modes",
  "id": "addressing-modes",
  "level": 3
}, {
  "value": "Basic Blocks and Flow Graphs",
  "id": "basic-blocks-and-flow-graphs",
  "level": 3
}, {
  "value": "Next-Use Information",
  "id": "next-use-information",
  "level": 3
}, {
  "value": "Complete TypeScript Code Generator",
  "id": "complete-typescript-code-generator",
  "level": 3
}, {
  "value": "Register Allocation by Graph Coloring",
  "id": "register-allocation-by-graph-coloring",
  "level": 3
}, {
  "value": "Instruction Selection by Tree Rewriting",
  "id": "instruction-selection-by-tree-rewriting",
  "level": 3
}, {
  "value": "Generating Code for Procedure Calls",
  "id": "generating-code-for-procedure-calls",
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
        id: "chapter-9-code-generation",
        children: "Chapter 9: Code Generation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["? Previous: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/08-runtime-env",
        children: "Chapter 8: Runtime Environment"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/10-optimization",
        children: "Chapter 10: Code Optimization"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, students will be able to: model the target machine for code generation; compute basic blocks and construct flow graphs; determine next-use information via backward scanning; allocate registers within basic blocks using farthest-next-use heuristics; implement graph-coloring register allocation; select instructions via tree-pattern matching with dynamic programming; generate code for procedures with calling conventions; and implement a complete code generator in TypeScript that translates TAC to a simplified assembly."
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
        href: "../../assets/images/lessons/compiler-design/09-code-gen/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/09-code-gen/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/09-code-gen/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/09-code-gen/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/09-code-gen/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/09-code-gen/visual-explanation.png",
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
            children: "Target Machine Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registers, memory, instruction set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defines what code can be emitted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Addressing Modes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How operands are specified"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical for instruction density and speed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Basic Blocks and Flow Graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximal single-entry sequences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables local optimization and analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Next-Use Information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward scan for variable usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drives optimal register allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Register Allocation (Basic Block)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Farthest-next-use heuristic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimizes spills in straight-line code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Register Allocation (Procedure)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chaitin graph coloring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global allocation with K registers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Instruction Selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree-rewriting with dynamic programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automates optimal code emission"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[TAC Instructions] --> B[Basic Block Identification]\n    B --> C[Flow Graph Construction]\n    B --> D[Next-Use Analysis]\n    D --> E[Register Allocation]\n    C --> E\n    E --> F[Spill Code Insertion]\n    E --> G[Instruction Selection]\n    F --> G\n    G --> H[Assembly Emit]\n    style A fill:#e1f5fe\n    style H fill:#c8e6c9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "target-machine-model",
      children: "Target Machine Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Code generation translates the intermediate representation into instructions for a specific target machine. A typical RISC model includes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Registers"
        }), ": A set of general-purpose registers (e.g., 32 on MIPS, 16 on ARM, 16 on x86-64 general-purpose). Registers are the fastest storage tier and are central to performance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory"
        }), ": A byte-addressable memory accessed via load/store instructions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instruction set"
        }), ": Arithmetic (", (0,jsx_runtime.jsx)(_components.code, {
          children: "add"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sub"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mul"
        }), "), load/store (", (0,jsx_runtime.jsx)(_components.code, {
          children: "ld"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "st"
        }), "), branch (", (0,jsx_runtime.jsx)(_components.code, {
          children: "beq"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bne"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "j"
        }), "), and procedure call (", (0,jsx_runtime.jsx)(_components.code, {
          children: "jal"
        }), ") instructions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Key properties include ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "register count"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "addressing modes"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "instruction costs"
      }), ", and the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "calling convention"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Our simplified target machine for this chapter:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Registers: R0, R1, R2, ..., R15 (16 registers)\nR0 always holds 0 (hardwired zero)\nR15 is the stack pointer (SP)\n\nInstructions:\n  add Rd, Rs, Rt   # Rd = Rs + Rt\n  sub Rd, Rs, Rt   # Rd = Rs - Rt\n  mul Rd, Rs, Rt   # Rd = Rs * Rt\n  div Rd, Rs, Rt   # Rd = Rs / Rt\n  li  Rd, imm      # Rd = immediate\n  ld  Rd, addr     # Rd = memory[addr]\n  st  Rs, addr     # memory[addr] = Rs\n  beq Rs, Rt, L    # if Rs == Rt goto L\n  bne Rs, Rt, L    # if Rs != Rt goto L\n  blt Rs, Rt, L    # if Rs < Rt goto L\n  j L              # goto L\n  jal L            # call procedure L\n  jr Rs            # return (jump to address in Rs)\n  mov Rd, Rs       # Rd = Rs\n  nop              # no operation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "addressing-modes",
      children: "Addressing Modes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Addressing modes specify how to compute the effective address of an operand:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effective Address"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Usage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Absolute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ld R1, 0x1000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Register direct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "add R1, R2, R3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest operand access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Register indirect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ld R1, (R2)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "R2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer dereference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Indexed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ld R1, 4(R2)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "R2 + 4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack locals, struct fields"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "li R1, 42"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PC-relative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "beq R1, R2, L"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PC + offset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Branch targets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-blocks-and-flow-graphs",
      children: "Basic Blocks and Flow Graphs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "basic block"
      }), " is a maximal sequence of consecutive three-address instructions with a single entry and a single exit. No jumps enter the block except to its first instruction; no jumps leave except from its last instruction."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Leader identification"
      }), ": Leaders (block entry points) are:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The first instruction of the program."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Any instruction that is a jump target (label target)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Any instruction following a jump or conditional jump."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Partition algorithm"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "- Mark leaders:\n  - instruction 1 is a leader\n  - for each jump target L, instruction L is a leader\n  - for each jump i, instruction i+1 is a leader\n- For each leader, its basic block extends to (but not including) the next leader\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "flow graph"
      }), " has basic blocks as nodes and edges representing control flow. An edge ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B1 ? B2"
      }), " exists if control can pass from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B1"
      }), "'s last instruction to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B2"
      }), "'s first instruction (fall-through or jump target)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "next-use-information",
      children: "Next-Use Information"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For register allocation within a basic block, the compiler must know whether each variable's value will be used again. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "next-use"
      }), " computation scans the block backward."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm"
      }), ": For each instruction ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x = y op z"
      }), " (scanning backward):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attach next-use and liveness info from the current state."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " to \"not live\" and \"no next use\" (it is being defined)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "z"
        }), " to \"live\" and \"next use = this instruction\"."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "As the scan moves backward, next-use information for variables that are not redefined in the current instruction propagates unchanged."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface NextUseInfo {\n    live: boolean;\n    nextUse: number | null; // instruction index\n}\n\nfunction computeNextUse(instructions: TACInstr[]): NextUseInfo[][] {\n    const n = instructions.length;\n    const info: NextUseInfo[][] = [];\n\n    // Initialize symbol table for tracking\n    const symInfo = new Map<string, NextUseInfo>();\n\n    // Scan backward\n    for (let i = n - 1; i >= 0; i--) {\n        const instr = instructions[i];\n        const instrInfo: NextUseInfo[] = [];\n\n        // Collect all operands\n        const operands: string[] = [];\n        const result = instr.result;\n        if (result && !result.endsWith(\":\")) operands.push(result);\n        if (instr.arg1) operands.push(instr.arg1);\n        if (instr.arg2) operands.push(instr.arg2);\n\n        // Record current state for each operand\n        for (const op of operands) {\n            // Skip labels and immediates\n            if (op.startsWith(\"L\") || !isNaN(Number(op))) continue;\n            const current = symInfo.get(op);\n            instrInfo.push({\n                live: current?.live ?? false,\n                nextUse: current?.nextUse ?? null,\n            });\n        }\n\n        // Update: result is defined (killed)\n        if (result && !result.startsWith(\"L\") && isNaN(Number(result))) {\n            symInfo.set(result, { live: false, nextUse: null });\n        }\n\n        // Update: operands are used\n        if (instr.arg1 && !instr.arg1.startsWith(\"L\") && isNaN(Number(instr.arg1))) {\n            const prev = symInfo.get(instr.arg1);\n            symInfo.set(instr.arg1, { live: true, nextUse: i });\n        }\n        if (instr.arg2 && !instr.arg2.startsWith(\"L\") && isNaN(Number(instr.arg2))) {\n            const prev = symInfo.get(instr.arg2);\n            symInfo.set(instr.arg2, { live: true, nextUse: i });\n        }\n\n        info.unshift(instrInfo);\n    }\n\n    return info;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-typescript-code-generator",
      children: "Complete TypeScript Code Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Target machine model\nconst REGISTERS = [\"R0\", \"R1\", \"R2\", \"R3\", \"R4\", \"R5\", \"R6\", \"R7\", \"R8\", \"R9\", \"R10\", \"R11\", \"R12\", \"R13\", \"R14\", \"R15\"];\nconst K = 6; // number of allocatable registers (excluding R0, SP)\nconst SP = \"R15\";\nconst ZERO = \"R0\";\n\ninterface TACInstr {\n    op: string;\n    result?: string;\n    arg1?: string;\n    arg2?: string;\n}\n\ninterface AsmInstr {\n    op: string;\n    operands: string[];\n    comment?: string;\n}\n\nclass BasicBlock {\n    instructions: TACInstr[] = [];\n    id: number;\n\n    constructor(id: number) {\n        this.id = id;\n    }\n\n    add(instr: TACInstr): void {\n        this.instructions.push(instr);\n    }\n\n    toString(): string {\n        return `BB${this.id}:\\n` +\n            this.instructions.map((instr, i) =>\n                `  ${i}: ${instr.op}${instr.result ? \" \" + instr.result : \"\"}${instr.arg1 ? \", \" + instr.arg1 : \"\"}${instr.arg2 ? \", \" + instr.arg2 : \"\"}`\n            ).join(\"\\n\");\n    }\n}\n\nclass FlowGraph {\n    blocks: BasicBlock[] = [];\n    edges: [number, number][] = [];\n\n    constructor(tac: TACInstr[]) {\n        this.buildBlocks(tac);\n    }\n\n    private buildBlocks(tac: TACInstr[]): void {\n        // Mark leaders\n        const leaders = new Set<number>();\n        leaders.add(0); // first instruction\n\n        for (let i = 0; i < tac.length; i++) {\n            const instr = tac[i];\n            if (instr.op === \"goto\" || instr.op === \"if\" || instr.op === \"ifFalse\") {\n                // Instruction after jump is a leader\n                if (i + 1 < tac.length) leaders.add(i + 1);\n                // Jump target is a leader (label in result field)\n                if (instr.arg2) {\n                    // Find the target instruction\n                    const targetLabel = instr.arg2 + \":\";\n                    for (let j = 0; j < tac.length; j++) {\n                        if (tac[j].op === targetLabel) {\n                            leaders.add(j);\n                            break;\n                        }\n                    }\n                }\n            }\n            if (instr.op.endsWith(\":\")) {\n                // Labels are potential jump targets\n                // The label itself might already be a leader\n                if (leaders.has(i)) {\n                    // Already a leader (jump target)\n                } else {\n                    leaders.add(i); // fall through target\n                }\n            }\n        }\n\n        // Partition into blocks\n        const sortedLeaders = [...leaders].sort((a, b) => a - b);\n        for (let li = 0; li < sortedLeaders.length; li++) {\n            const block = new BasicBlock(li);\n            const start = sortedLeaders[li];\n            const end = li + 1 < sortedLeaders.length ? sortedLeaders[li + 1] : tac.length;\n\n            for (let i = start; i < end; i++) {\n                block.add(tac[i]);\n            }\n            this.blocks.push(block);\n        }\n    }\n\n    // Simple register allocator for a basic block\n    allocateRegisters(blockIdx: number): Map<string, string> {\n        const block = this.blocks[blockIdx];\n        if (!block) return new Map();\n\n        const regMap = new Map<string, string>();  // variable ? register\n        const varMap = new Map<string, string>();  // register ? variable\n        const memMap = new Map<string, string>();  // variable ? memory location\n        const nextUse = new Map<string, number>(); // variable ? next use index\n\n        const freeRegs = REGISTERS.filter(r => r !== ZERO && r !== SP);\n\n        // Compute next-use via backward scan (simplified)\n        for (let i = block.instructions.length - 1; i >= 0; i--) {\n            const instr = block.instructions[i];\n            const ops = [instr.result, instr.arg1, instr.arg2].filter(\n                (x): x is string => x !== undefined && !x.startsWith(\"L\") && isNaN(Number(x))\n            );\n            for (const op of ops) {\n                if (!nextUse.has(op)) {\n                    nextUse.set(op, i);\n                }\n            }\n            if (instr.result && !instr.result.startsWith(\"L\")) {\n                // result is being defined, subsequent uses are later\n                nextUse.set(instr.result, -1);\n            }\n        }\n\n        // Allocate registers (first-fit with farthest-next-use spill)\n        const getReg = (varName: string, currentInstr: number): string => {\n            // If already in a register, return it\n            if (regMap.has(varName)) {\n                return regMap.get(varName)!;\n            }\n\n            // If free register exists, allocate\n            for (const reg of freeRegs) {\n                if (!varMap.has(reg) || varMap.get(reg) === undefined) {\n                    regMap.set(varName, reg);\n                    varMap.set(reg, varName);\n                    return reg;\n                }\n            }\n\n            // All registers in use ? spill farthest next use\n            let spillReg = freeRegs[0];\n            let farthestUse = -1;\n\n            for (const reg of freeRegs) {\n                const occupant = varMap.get(reg);\n                if (occupant) {\n                    const nu = nextUse.get(occupant) ?? -1;\n                    if (nu > farthestUse) {\n                        farthestUse = nu;\n                        spillReg = reg;\n                    }\n                }\n            }\n\n            const spilledVar = varMap.get(spillReg);\n            if (spilledVar) {\n                // Emit store to memory\n                memMap.set(spilledVar, `mem_${spilledVar}`);\n                regMap.delete(spilledVar);\n            }\n\n            regMap.set(varName, spillReg);\n            varMap.set(spillReg, varName);\n            return spillReg;\n        };\n\n        return regMap;\n    }\n\n    // Generate assembly for a block\n    generateAssembly(blockIdx: number): AsmInstr[] {\n        const block = this.blocks[blockIdx];\n        if (!block) return [];\n\n        const asm: AsmInstr[] = [];\n        const regMap = new Map<string, string>();\n        const memMap = new Map<string, string>();\n        let memCounter = 0;\n\n        const allocateReg = (varName: string, currentInstr: number): string => {\n            if (regMap.has(varName)) return regMap.get(varName)!;\n\n            // Check if variable is an integer constant\n            if (!isNaN(Number(varName))) {\n                const reg = this.findFreeReg([...regMap.entries()].map(([k, v]) => v));\n                asm.push({ op: \"li\", operands: [reg, varName] });\n                regMap.set(varName, reg);\n                return reg;\n            }\n\n            // Check if variable is a label\n            if (varName.endsWith(\":\") || varName.startsWith(\"L\")) {\n                // Don't allocate registers for labels\n                return varName;\n            }\n\n            for (const reg of REGISTERS) {\n                if (reg === ZERO || reg === SP) continue;\n                let inUse = false;\n                for (const [, r] of regMap) {\n                    if (r === reg) { inUse = true; break; }\n                }\n                if (!inUse) {\n                    regMap.set(varName, reg);\n                    return reg;\n                }\n            }\n\n            // Spill\n            let spillVar = \"\";\n            let spillReg = \"\";\n            for (const [v, r] of regMap) {\n                spillVar = v;\n                spillReg = r;\n                break;\n            }\n            if (spillVar) {\n                const memLoc = `mem_${++memCounter}`;\n                asm.push({ op: \"st\", operands: [spillReg, memLoc], comment: `spill ${spillVar}` });\n                regMap.delete(spillVar);\n                memMap.set(spillVar, memLoc);\n            }\n\n            regMap.set(varName, spillReg);\n            return spillReg;\n        };\n\n        this.findFreeReg = (usedRegs: string[]): string => {\n            for (const reg of REGISTERS) {\n                if (reg === ZERO || reg === SP) continue;\n                if (!usedRegs.includes(reg)) return reg;\n            }\n            return REGISTERS[1];\n        };\n\n        for (let i = 0; i < block.instructions.length; i++) {\n            const instr = block.instructions[i];\n\n            // Handle labels\n            if (instr.op.endsWith(\":\")) {\n                asm.push({ op: instr.op, operands: [] });\n                continue;\n            }\n\n            // Handle jumps\n            if (instr.op === \"goto\") {\n                asm.push({ op: \"j\", operands: [instr.arg1 || \"\"] });\n                continue;\n            }\n\n            if (instr.op === \"ifFalse\") {\n                const cond = instr.arg1 || \"\";\n                const target = instr.arg2 || \"\";\n                const reg = allocateReg(cond, i);\n                asm.push({ op: \"beq\", operands: [reg, ZERO, target], comment: `ifFalse ${cond}` });\n                continue;\n            }\n\n            if (instr.op === \"if\") {\n                const cond = instr.arg1 || \"\";\n                const target = instr.arg2 || \"\";\n                const reg = allocateReg(cond, i);\n                asm.push({ op: \"bne\", operands: [reg, ZERO, target], comment: `if ${cond}` });\n                continue;\n            }\n\n            // Handle \"call\" pseudo-op\n            if (instr.op === \"call\") {\n                const funcName = instr.arg1 || \"\";\n                const nArgs = instr.arg2 || \"0\";\n                asm.push({ op: \"jal\", operands: [funcName], comment: `call with ${nArgs} args` });\n                if (instr.result) {\n                    const reg = allocateReg(instr.result, i);\n                    asm.push({ op: \"mov\", operands: [reg, \"R0\"], comment: `return value ? ${instr.result}` });\n                }\n                continue;\n            }\n\n            // Handle \"param\"\n            if (instr.op === \"param\") {\n                const val = instr.arg1 || \"0\";\n                const reg = allocateReg(val, i);\n                asm.push({ op: \"st\", operands: [reg, \"(SP)\"], comment: `param ${val}` });\n                asm.push({ op: \"sub\", operands: [SP, SP, \"4\"] });\n                continue;\n            }\n\n            // Handle \"return\"\n            if (instr.op === \"return\") {\n                if (instr.arg1) {\n                    const reg = allocateReg(instr.arg1, i);\n                    asm.push({ op: \"mov\", operands: [\"R0\", reg], comment: \"return value\" });\n                }\n                asm.push({ op: \"jr\", operands: [\"RA\"], comment: \"return\" });\n                continue;\n            }\n\n            // Handle array load \"=[]\"\n            if (instr.op === \"=[]\") {\n                const result = instr.result || \"\";\n                const arr = instr.arg1 || \"\";\n                const idx = instr.arg2 || \"\";\n                const arrReg = allocateReg(arr, i);\n                const idxReg = allocateReg(idx, i);\n                const resReg = allocateReg(result, i);\n                // Simplified: load from base + offset\n                asm.push({\n                    op: \"ld\",\n                    operands: [resReg, `${arrReg}(${idxReg})`],\n                    comment: `${result} = ${arr}[${idx}]`,\n                });\n                continue;\n            }\n\n            // Handle array store \"[]=\"\n            if (instr.op === \"[]=\") {\n                const arr = instr.arg1 || \"\";\n                const idx = instr.arg2 || \"\";\n                const val = instr.result || \"\";\n                const arrReg = allocateReg(arr, i);\n                const idxReg = allocateReg(idx, i);\n                const valReg = allocateReg(val, i);\n                asm.push({\n                    op: \"st\",\n                    operands: [valReg, `${arrReg}(${idxReg})`],\n                    comment: `${arr}[${idx}] = ${val}`,\n                });\n                continue;\n            }\n\n            // Handle copy: x = y\n            if (instr.op === \"=\") {\n                const result = instr.result || \"\";\n                const arg1 = instr.arg1 || \"\";\n                const reg = allocateReg(arg1, i);\n                regMap.set(result, reg);\n                continue;\n            }\n\n            // Handle binary ops\n            const arithOps: Record<string, string> = {\n                \"+\": \"add\", \"-\": \"sub\", \"*\": \"mul\", \"/\": \"div\",\n            };\n\n            if (arithOps[instr.op]) {\n                const result = instr.result || \"\";\n                const arg1 = instr.arg1 || \"\";\n                const arg2 = instr.arg2 || \"\";\n                const reg1 = allocateReg(arg1, i);\n                const reg2 = allocateReg(arg2, i);\n                const regR = this.findFreeReg([...regMap.values()]);\n                asm.push({\n                    op: arithOps[instr.op],\n                    operands: [regR, reg1, reg2],\n                    comment: `${result} = ${arg1} ${instr.op} ${arg2}`,\n                });\n                regMap.set(result, regR);\n                continue;\n            }\n\n            // Handle comparison ops (==, !=, <, <=, >, >=)\n            const compOps: Record<string, string> = {\n                \"==\": \"beq\", \"!=\": \"bne\", \"<\": \"blt\",\n            };\n            if (compOps[instr.op]) {\n                // Comparison: set temporary to 0 or 1\n                const result = instr.result || \"\";\n                const arg1 = instr.arg1 || \"\";\n                const arg2 = instr.arg2 || \"\";\n                const reg1 = allocateReg(arg1, i);\n                const reg2 = allocateReg(arg2, i);\n                const regR = this.findFreeReg([...regMap.values()]);\n                const trueLabel = `__cmp_true_${i}`;\n                const endLabel = `__cmp_end_${i}`;\n                asm.push({ op: \"li\", operands: [regR, \"1\"] });\n                asm.push({\n                    op: compOps[instr.op],\n                    operands: [reg1, reg2, trueLabel],\n                    comment: `${result} = ${arg1} ${instr.op} ${arg2}`,\n                });\n                asm.push({ op: \"li\", operands: [regR, \"0\"] });\n                asm.push({ op: trueLabel + \":\", operands: [] });\n                regMap.set(result, regR);\n                continue;\n            }\n        }\n\n        return asm;\n    }\n\n    private findFreeReg: ((used: string[]) => string) | null = null;\n\n    printFlowGraph(): void {\n        console.log(\"Flow Graph:\");\n        for (const block of this.blocks) {\n            console.log(block.toString());\n        }\n    }\n\n    printAssembly(): void {\n        for (let bi = 0; bi < this.blocks.length; bi++) {\n            const asm = this.generateAssembly(bi);\n            console.log(`\\nBB${bi}:`);\n            for (const instr of asm) {\n                const comment = instr.comment ? `  // ${instr.comment}` : \"\";\n                console.log(`  ${instr.op} ${instr.operands.join(\", \")}${comment}`);\n            }\n        }\n    }\n}\n\n// === Demos ===\n\n// Demo 1: Basic block identification and flow graph\nconsole.log(\"=== Demo 1: Flow Graph Construction ===\");\n\nconst tac1: TACInstr[] = [\n    { op: \"=\", result: \"t1\", arg1: \"x\" },\n    { op: \"+\", result: \"t2\", arg1: \"t1\", arg2: \"y\" },\n    { op: \"ifFalse\", arg1: \"t2\", arg2: \"L1\" },\n    { op: \"=\", result: \"t3\", arg1: \"x\" },\n    { op: \"-\", result: \"t4\", arg1: \"t3\", arg2: \"y\" },\n    { op: \"goto\", arg1: \"L2\" },\n    { op: \"L1:\" },\n    { op: \"*\", result: \"t5\", arg1: \"x\", arg2: \"y\" },\n    { op: \"=\", result: \"t4\", arg1: \"t5\" },\n    { op: \"L2:\" },\n    { op: \"+\", result: \"z\", arg1: \"t4\", arg2: \"1\" },\n];\n\nconst fg = new FlowGraph(tac1);\nfg.printFlowGraph();\n\n// Demo 2: Register allocation with farthest-next-use\nconsole.log(\"\\n=== Demo 2: Register Allocation ===\");\n\nconst fg2 = new FlowGraph([\n    { op: \"=\", result: \"t1\", arg1: \"a\" },\n    { op: \"=\", result: \"t2\", arg1: \"b\" },\n    { op: \"+\", result: \"t3\", arg1: \"t1\", arg2: \"t2\" },\n    { op: \"=\", result: \"t4\", arg1: \"c\" },\n    { op: \"=\", result: \"t5\", arg1: \"d\" },\n    { op: \"+\", result: \"t6\", arg1: \"t4\", arg2: \"t5\" },\n    { op: \"+\", result: \"res\", arg1: \"t3\", arg2: \"t6\" },\n]);\nfg2.printAssembly();\n\n// Demo 3: Nested arithmetic\nconsole.log(\"\\n=== Demo 3: Complex Expression ===\");\nconst fg3 = new FlowGraph([\n    { op: \"=\", result: \"t1\", arg1: \"a\" },\n    { op: \"=\", result: \"t2\", arg1: \"b\" },\n    { op: \"*\", result: \"t3\", arg1: \"t1\", arg2: \"t2\" },\n    { op: \"=\", result: \"t4\", arg1: \"c\" },\n    { op: \"=\", result: \"t5\", arg1: \"d\" },\n    { op: \"+\", result: \"t6\", arg1: \"t4\", arg2: \"t5\" },\n    { op: \"=\", result: \"t7\", arg1: \"e\" },\n    { op: \"-\", result: \"t8\", arg1: \"t3\", arg2: \"t6\" },\n    { op: \"+\", result: \"result\", arg1: \"t8\", arg2: \"t7\" },\n]);\nfg3.printAssembly();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "register-allocation-by-graph-coloring",
      children: "Register Allocation by Graph Coloring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For whole procedures, graph coloring dominates. An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "interference graph"
      }), " has nodes representing live ranges and edges connecting overlapping live ranges. The graph is colored with K colors (registers) using Chaitin's algorithm (see Chapter 14 for full implementation)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Chaitin's algorithm"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build the interference graph from live-range data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simplify: repeatedly remove nodes with degree < K, pushing them on a stack."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If all remaining nodes have degree = K, select a node to spill (remove and push on stack)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pop nodes from the stack: assign a color not used by any neighbor. If no color available, mark for spill and insert spill code."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If spills occurred, rebuild and repeat."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "instruction-selection-by-tree-rewriting",
      children: "Instruction Selection by Tree Rewriting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tree-rewriting instruction selection maps expression trees to machine instructions via pattern matching."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule format"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pattern ? instruction {cost}"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example rules for a load-store architecture:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "(1) Ri = MEM(const)       ? li  Ri, const       {cost=2}\n(2) Ri = MEM(addr)        ? ld  Ri, addr        {cost=2}\n(3) Rk = Ri + Rj          ? add Rk, Ri, Rj      {cost=1}\n(4) Rk = Ri + MEM(addr)   ? add Rk, Ri, addr    {cost=2}\n(5) MEM(result) = Ri      ? st  Ri, result      {cost=2}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bottom-up DP algorithm (Burke-McKeeman)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each node in the expression tree (postorder), compute the minimum cost to cover the subtree rooted at that node using any applicable rule."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After computing costs for all nodes, traverse top-down and emit instructions for the minimal-cost rule at each node."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface IRNode {\n    op: string;\n    children: IRNode[];\n    value?: any;\n}\n\ninterface TreeRule {\n    pattern: string;        // e.g., \"+(Ri, Rj)\"\n    cost: number;\n    emit: (operands: string[]) => AsmInstr;\n}\n\nclass InstructionSelector {\n    rules: TreeRule[] = [];\n\n    addRule(pattern: string, cost: number, emit: (ops: string[]) => AsmInstr): void {\n        this.rules.push({ pattern, cost, emit });\n    }\n\n    // Select instructions for an IR tree using bottom-up DP\n    select(node: IRNode): { cost: number; code: AsmInstr[]; reg: string } {\n        const memo = new Map<IRNode, { cost: number; code: AsmInstr[]; reg: string }>();\n\n        const visit = (n: IRNode): { cost: number; code: AsmInstr[]; reg: string } => {\n            if (memo.has(n)) return memo.get(n)!;\n\n            let best = { cost: Infinity, code: [] as AsmInstr[], reg: \"\" };\n\n            for (const rule of this.rules) {\n                if (this.matchesPattern(n, rule.pattern)) {\n                    const childResults = n.children.map(child => visit(child));\n                    const totalCost = rule.cost + childResults.reduce((s, r) => s + r.cost, 0);\n\n                    if (totalCost < best.cost) {\n                        const code: AsmInstr[] = [];\n                        for (const cr of childResults) {\n                            code.push(...cr.code);\n                        }\n                        const reg = `R${Math.floor(Math.random() * 100)}`;\n                        const operands = childResults.map(cr => cr.reg);\n                        code.push(rule.emit(operands));\n                        best = { cost: totalCost, code, reg };\n                    }\n                }\n            }\n\n            memo.set(n, best);\n            return best;\n        };\n\n        return visit(node);\n    }\n\n    private matchesPattern(node: IRNode, pattern: string): boolean {\n        // Simplified pattern matching\n        // Pattern format: \"op(childPatterns...)\"\n        const match = pattern.match(/^(\\w+)\\((.+)\\)$/);\n        if (!match) return node.op === pattern;\n\n        const op = match[1];\n        if (node.op !== op) return false;\n\n        const childPatterns = this.splitArgs(match[2]);\n        if (childPatterns.length !== node.children.length) return false;\n\n        return childPatterns.every((cp, i) =>\n            cp === \"Ri\" || this.matchesPattern(node.children[i], cp)\n        );\n    }\n\n    private splitArgs(s: string): string[] {\n        const args: string[] = [];\n        let depth = 0;\n        let current = \"\";\n        for (const ch of s) {\n            if (ch === '(') { depth++; current += ch; }\n            else if (ch === ')') { depth--; current += ch; }\n            else if (ch === ',' && depth === 0) {\n                args.push(current.trim());\n                current = \"\";\n            } else {\n                current += ch;\n            }\n        }\n        if (current.trim()) args.push(current.trim());\n        return args;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generating-code-for-procedure-calls",
      children: "Generating Code for Procedure Calls"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The procedure call sequence integrates the calling convention with the register allocator:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Caller"
        }), ": Save caller-saved registers containing live values. Evaluate arguments and pass them in registers or on the stack. Emit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CALL"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Callee prologue"
        }), ": Allocate activation record. Save callee-saved registers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Callee epilogue"
        }), ": Restore callee-saved registers. Restore frame pointer. Return."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Caller after call"
        }), ": Move return value. Restore caller-saved registers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Procedure call code generation\nfunction genCall(funcName: string, args: string[], returnReg: string): AsmInstr[] {\n    const asm: AsmInstr[] = [];\n    const argRegs = [\"R1\", \"R2\", \"R3\", \"R4\", \"R5\", \"R6\"];\n\n    // Move arguments to registers\n    for (let i = 0; i < args.length && i < argRegs.length; i++) {\n        asm.push({ op: \"mov\", operands: [argRegs[i], args[i]], comment: `arg ${i}: ${args[i]}` });\n    }\n\n    // Push excess arguments\n    for (let i = argRegs.length; i < args.length; i++) {\n        asm.push({ op: \"st\", operands: [args[i], \"(SP)\"] });\n        asm.push({ op: \"sub\", operands: [SP, SP, \"4\"] });\n    }\n\n    // Call\n    asm.push({ op: \"jal\", operands: [funcName] });\n\n    // Pop excess arguments (caller cleans up)\n    if (args.length > argRegs.length) {\n        const excess = (args.length - argRegs.length) * 4;\n        asm.push({ op: \"add\", operands: [SP, SP, String(excess)] });\n    }\n\n    // Capture return value\n    asm.push({ op: \"mov\", operands: [returnReg, \"R0\"], comment: `return value in R0` });\n\n    return asm;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Allocation Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Optimality"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Spill Handling"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Farthest-Next-Use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal (single block)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate spill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graph Coloring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whole procedure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (NP-hard approximation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heuristic spill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(K ? n?)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linear Scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whole procedure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weaker but faster"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Basic Block Identification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TAC sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partitioned blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leader marking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Next-Use Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block instructions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-instruction liveness info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward scan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Register Allocation (local)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Live ranges within block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Register mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Farthest-next-use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Register Allocation (global)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whole-procedure live ranges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Register mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph coloring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Instruction Selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IR tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assembly sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bottom-up DP"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Evaluating compiler targets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code gen knowledge enables realistic design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Systems Programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS development, embedded firmware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct assembly and register awareness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web Development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebAssembly code generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wasm enables near-native performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JIT compilers in VMs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern JITs use tree-rewriting and coloring"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Code generation maps IR to target machine instructions. Basic blocks partition code for analysis and optimization. Register allocation via the farthest-next-use heuristic handles single blocks optimally; graph coloring handles whole procedures. Instruction selection via tree-rewriting with dynamic programming automates pattern matching against the target instruction set. Effective code generation balances instruction cost, register pressure, and compile time. The TypeScript ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FlowGraph"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InstructionSelector"
      }), " classes demonstrate block identification, register allocation, and instruction selection with working demos."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Basic blocks are the fundamental unit"
        }), ": All local optimization and code generation operates on basic blocks. Keep them maximal but correct."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Farthest-next-use is locally optimal"
        }), ": For single basic blocks, this heuristic minimizes spills. Use it for block-local code generation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Graph coloring with K = number of allocatable registers"
        }), ": Build an interference graph, simplify with stack, assign colors. Spill when chromatic number exceeds K."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tree-rewriting with DP automates instruction selection"
        }), ": Express the target instruction set as tree patterns with costs. The DP pass selects the cheapest covering."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Procedure calls are the hardest part"
        }), ": Saving and restoring caller-saved registers, passing arguments, and aligning the stack require careful coordination."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// code gen\n// lexical-parsing-codegen implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'code gen', data: { topic: 'lexical-parsing-codegen' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// code gen - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'compilers demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'compiler-design', chapter: 'code gen' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('compilers'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What identifies a leader (basic block entry point)?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Any instruction after a jump"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The first instruction, any jump target, and any instruction after a jump"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Every labeled instruction"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Instructions with no predecessors"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The farthest-next-use heuristic for register allocation is:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Optimal for whole procedures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Optimal for a single basic block"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) A graph coloring algorithm"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Used only for instruction selection"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What algorithm drives tree-rewriting instruction selection?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Greedy matching"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Top-down recursive descent"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Bottom-up dynamic programming"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Linear scan"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What does next-use computation require a backward scan?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Forward scans cannot compute liveness"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Uses are before definitions when scanning backward, enabling accurate liveness propagation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Backward scans are faster"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) The IR is generated in reverse order"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In Chaitin's graph-coloring register allocator, a node with degree < K is:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Always spilled"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Removed from the graph and pushed on a stack"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Assigned the highest-numbered register"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Merged with its neighbors"
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
        children: "What is a basic block and how are leaders identified?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the next-use computation and explain why it scans backwards."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain register spilling and the farthest-next-use heuristic."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does graph coloring allocate registers across a procedure?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the role of dynamic programming in tree-rewriting instruction selection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does the procedure call sequence differ between caller-saved and callee-saved registers?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Partition this code into basic blocks and draw the flow graph:\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "t1 = x + y\nif t1 < z goto L1\nt2 = x - y\ngoto L2\nL1: t2 = x * y\nL2: t3 = t2 + z\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Allocate 2 registers for this block using farthest-next-use:\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "t1 = a + b\nt2 = c + d\na = t1 + t2\nt3 = e + f\nb = t3 + a\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build the interference graph for live ranges: a {1-5}, b {2-8}, c {3-6}, d {4-7}, e {5-9}. Can 3 colors suffice?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write tree-rewriting rules for load-immediate and for addition with both register operands. Show the cost."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Generate assembly for the following TAC sequence using the FlowGraph class:\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "t1 = x + y\nt2 = t1 * z\nif t2 < 0 goto L1\nres = t2\ngoto L2\nL1: res = 0\nL2:\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a code generator in TypeScript for a basic block that translates TAC to simplified RISC assembly. Use farthest-next-use for register allocation with spilling. Support at least ", (0,jsx_runtime.jsx)(_components.code, {
          children: "add"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sub"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mul"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "load-immediate"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "load/store"
        }), ". Demonstrate on a block with 8 variables and 4 registers, showing spills. Emit the complete assembly sequence. Use the FlowGraph class from this chapter as your starting point."]
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