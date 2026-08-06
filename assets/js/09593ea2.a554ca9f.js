"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[15241],{

/***/ 75541
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_compiler_design_11_cfa_md_095_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-compiler-design-11-cfa-md-095.json
const site_docs_courses_compiler_design_11_cfa_md_095_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/compiler-design/11-cfa","title":"Chapter 11: Control-Flow Analysis","description":"? Previous Code Optimization | Next Data-Flow Analysis","source":"@site/docs/courses/compiler-design/11-cfa.md","sourceDirName":"courses/compiler-design","slug":"/compiler-design/11-cfa","permalink":"/ai-engineering-journey/compiler-design/11-cfa","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"id":"11-cfa","slug":"/compiler-design/11-cfa","title":"Chapter 11: Control-Flow Analysis","sidebar_label":"Chapter 11: Control-Flow Analysis","sidebar_position":11},"sidebar":"coursesSidebar","previous":{"title":"Chapter 10: Code Optimization","permalink":"/ai-engineering-journey/compiler-design/10-optimization"},"next":{"title":"Chapter 12: Data-Flow Analysis","permalink":"/ai-engineering-journey/compiler-design/12-dfa"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/compiler-design/11-cfa.md


const frontMatter = {
	id: '11-cfa',
	slug: '/compiler-design/11-cfa',
	title: 'Chapter 11: Control-Flow Analysis',
	sidebar_label: 'Chapter 11: Control-Flow Analysis',
	sidebar_position: 11
};
const contentTitle = 'Chapter 11: Control-Flow Analysis';

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
  "value": "Basic Blocks Revisited",
  "id": "basic-blocks-revisited",
  "level": 3
}, {
  "value": "Complete TypeScript CFA Implementation",
  "id": "complete-typescript-cfa-implementation",
  "level": 3
}, {
  "value": "Dominators",
  "id": "dominators",
  "level": 3
}, {
  "value": "Lengauer-Tarjan Algorithm",
  "id": "lengauer-tarjan-algorithm",
  "level": 3
}, {
  "value": "Depth-First Spanning Tree",
  "id": "depth-first-spanning-tree",
  "level": 3
}, {
  "value": "Natural Loops",
  "id": "natural-loops",
  "level": 3
}, {
  "value": "Reducible Flow Graphs",
  "id": "reducible-flow-graphs",
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
  "value": "Example 11.1: Dominator and Loop Detection",
  "id": "example-111-dominator-and-loop-detection",
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
        id: "chapter-11-control-flow-analysis",
        children: "Chapter 11: Control-Flow Analysis"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["? Previous: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/10-optimization",
        children: "Chapter 10: Code Optimization"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/12-dfa",
        children: "Chapter 12: Data-Flow Analysis"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, students will be able to: identify basic blocks from intermediate-code sequences; construct flow graphs and edge types; compute dominators using the iterative data-flow algorithm; implement the Lengauer-Tarjan near-linear dominator algorithm; build depth-first spanning trees and classify edges; identify natural loops and their pre-headers; determine whether a flow graph is reducible; and implement a complete CFA framework in TypeScript."
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
        href: "../../assets/images/lessons/compiler-design/11-cfa/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/11-cfa/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/11-cfa/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/11-cfa/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/11-cfa/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/11-cfa/visual-explanation.png",
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
            children: "Basic Blocks Revisited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-entry, single-exit sequences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables graph-level analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flow Graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nodes = blocks, edges = control flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for all inter-procedural analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dominators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocks that must execute before"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables safe code motion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Depth-First Spanning Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS traversal and edge classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identifies back edges for loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Natural Loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-header cycles with back edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target for loop optimizations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reducibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured-property guarantee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensures fast analysis convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop Nests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Containment relationships between loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchy for optimization ordering"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[IR Code] --> B[Basic Blocks]\n    B --> C[Flow Graph]\n    C --> D[Depth-First Spanning Tree]\n    D --> E[Edge Classification]\n    E --> F[Natural Loops]\n    C --> G[Dominators]\n    G --> H[Dominator Tree]\n    H --> F\n    F --> I[Loop Nests]\n    C --> J[Reducibility Check]\n    style A fill:#e1f5fe\n    style I fill:#c8e6c9\n    style J fill:#c8e6c9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-blocks-revisited",
      children: "Basic Blocks Revisited"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A basic block is a maximal sequence of consecutive instructions with a single entry point (its first instruction) and a single exit point (its last instruction). Control enters at the top and leaves only at the bottom."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Leader identification"
      }), ": Leaders are:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The first instruction of the program."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Any instruction that is a jump target (label target)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Any instruction that immediately follows a jump or conditional jump."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Partition algorithm"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MarkLeader(1); // first instruction is a leader\nfor each instruction i:\n    if i has a label that is a jump target ? MarkLeader(i)\n    if i is a jump ? MarkLeader(i + 1)\nfor each leader, extend block to the next leader\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-typescript-cfa-implementation",
      children: "Complete TypeScript CFA Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface TACInstr {\n    op: string;\n    result?: string;\n    arg1?: string;\n    arg2?: string;\n}\n\nclass BasicBlock {\n    id: number;\n    instructions: TACInstr[] = [];\n    preds: Set<number> = new Set();\n    succs: Set<number> = new Set();\n\n    constructor(id: number) {\n        this.id = id;\n    }\n\n    add(instr: TACInstr): void {\n        this.instructions.push(instr);\n    }\n\n    get lastInstr(): TACInstr | undefined {\n        return this.instructions[this.instructions.length - 1];\n    }\n\n    get firstInstr(): TACInstr | undefined {\n        return this.instructions[0];\n    }\n\n    toString(): string {\n        const header = `BB${this.id} (preds=[${[...this.preds].join(\",\")}] succs=[${[...this.succs].join(\",\")}]):`;\n        const body = this.instructions.map(instr => this.format(instr)).join(\"\\n\");\n        return header + \"\\n\" + body;\n    }\n\n    private format(instr: TACInstr): string {\n        if (instr.op.endsWith(\":\")) return `  ${instr.op}`;\n        let s = \"  \";\n        if (instr.result) s += instr.result + \" = \";\n        s += instr.op;\n        if (instr.arg1) s += \" \" + instr.arg1;\n        if (instr.arg2) s += \", \" + instr.arg2;\n        return s;\n    }\n}\n\nclass FlowGraph {\n    blocks: BasicBlock[] = [];\n    entry: BasicBlock;\n    exit: BasicBlock;\n\n    constructor(tac: TACInstr[]) {\n        this.buildBlocks(tac);\n        this.buildEdges();\n        // Create entry/exit blocks\n        this.entry = this.blocks[0];\n        this.exit = new BasicBlock(-1);\n        // Add edges from all terminal blocks to exit\n        for (const block of this.blocks) {\n            const last = block.lastInstr;\n            if (last && ![\"goto\", \"if\", \"ifFalse\", \"return\"].includes(last.op) && !last.op.startsWith(\"L\")) {\n                this.addEdge(block.id, -1);\n            }\n        }\n        this.blocks.push(this.exit);\n    }\n\n    private buildBlocks(tac: TACInstr[]): void {\n        const leaders = new Set<number>();\n        leaders.add(0);\n\n        for (let i = 0; i < tac.length; i++) {\n            const instr = tac[i];\n            if (instr.op.endsWith(\":\")) {\n                // This is a label ? might be a jump target\n                // Only mark as leader if it's not already preceded by a leader\n                // and it appears after a jump\n            }\n            if (instr.op === \"goto\" || instr.op === \"if\" || instr.op === \"ifFalse\" || instr.op === \"return\") {\n                if (i + 1 < tac.length) leaders.add(i + 1);\n                // Find jump target label\n                if (instr.arg2 && instr.arg2.startsWith(\"L\")) {\n                    for (let j = 0; j < tac.length; j++) {\n                        if (tac[j].op === instr.arg2 + \":\") {\n                            leaders.add(j);\n                            break;\n                        }\n                    }\n                } else if (instr.arg1 && instr.arg1.startsWith(\"L\")) {\n                    for (let j = 0; j < tac.length; j++) {\n                        if (tac[j].op === instr.arg1 + \":\") {\n                            leaders.add(j);\n                            break;\n                        }\n                    }\n                }\n            }\n        }\n\n        // Partition into blocks\n        const sorted = [...leaders].sort((a, b) => a - b);\n        for (let li = 0; li < sorted.length; li++) {\n            const block = new BasicBlock(li);\n            const start = sorted[li];\n            const end = li + 1 < sorted.length ? sorted[li + 1] : tac.length;\n            for (let i = start; i < end; i++) {\n                block.add(tac[i]);\n            }\n            this.blocks.push(block);\n        }\n    }\n\n    private buildEdges(): void {\n        for (let i = 0; i < this.blocks.length; i++) {\n            const block = this.blocks[i];\n            const last = block.lastInstr;\n\n            if (!last) continue;\n\n            if (last.op === \"goto\") {\n                // Unconditional jump\n                const target = last.arg1 || \"\";\n                const targetIdx = this.findBlockIndex(target);\n                if (targetIdx >= 0) {\n                    this.addEdge(block.id, targetIdx);\n                }\n            } else if (last.op === \"if\" || last.op === \"ifFalse\") {\n                // Conditional jump: fall-through + target\n                const target = last.arg2 || \"\";\n                if (i + 1 < this.blocks.length) {\n                    this.addEdge(block.id, i + 1);\n                }\n                const targetIdx = this.findBlockIndex(target);\n                if (targetIdx >= 0) {\n                    this.addEdge(block.id, targetIdx);\n                }\n            } else if (last.op === \"return\") {\n                // Return: edge to exit\n            } else {\n                // Fall-through\n                if (i + 1 < this.blocks.length) {\n                    this.addEdge(block.id, i + 1);\n                }\n            }\n        }\n    }\n\n    private findBlockIndex(label: string): number {\n        for (let i = 0; i < this.blocks.length; i++) {\n            const first = this.blocks[i].firstInstr;\n            if (first && first.op === label + \":\") {\n                return i;\n            }\n        }\n        return -1;\n    }\n\n    addEdge(from: number, to: number): void {\n        const fromBlock = this.blocks.find(b => b.id === from);\n        const toBlock = this.blocks.find(b => b.id === to);\n        if (fromBlock && toBlock) {\n            fromBlock.succs.add(to);\n            toBlock.preds.add(from);\n        }\n    }\n\n    print(): void {\n        for (const block of this.blocks) {\n            console.log(block.toString());\n        }\n    }\n\n    numBlocks(): number { return this.blocks.length; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dominators",
      children: "Dominators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Block ", (0,jsx_runtime.jsx)(_components.code, {
        children: "d"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dominates"
      }), " block ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), " (written ", (0,jsx_runtime.jsx)(_components.code, {
        children: "d dom n"
      }), ") if every directed path from the entry to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), " passes through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "d"
      }), ". Domination is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reflexive"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "d dom d"
        }), " for all ", (0,jsx_runtime.jsx)(_components.code, {
          children: "d"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transitive"
        }), ": if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a dom b"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "b dom c"
        }), " then ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a dom c"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Antisymmetric"
        }), ": if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a dom b"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "b dom a"
        }), " then ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a = b"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "immediate dominator"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "idom(n)"
      }), " is the unique ", (0,jsx_runtime.jsx)(_components.code, {
        children: "d ? n"
      }), " such that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "d dom n"
      }), " and every other dominator of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), " dominates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "d"
      }), ". The immediate-dominator relation forms the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dominator tree"
      }), ", rooted at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "entry"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Iterative data-flow algorithm"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DOM(entry) = {entry}\nDOM(n) = {n} ? (n_{p in pred(n)} DOM(p))   for n ? entry\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is solved iteratively: initialize ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DOM(n)"
      }), " to all nodes, then repeatedly apply the equation until convergence."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class DominatorAnalysis {\n    private dom: Set<number>[] = [];\n    private idom: Map<number, number> = new Map();\n    private domTreeChildren: Map<number, number[]> = new Map();\n\n    constructor(private fg: FlowGraph) {\n        this.computeDominators();\n        this.computeIDOM();\n        this.buildDomTree();\n    }\n\n    private computeDominators(): void {\n        const n = this.fg.numBlocks();\n        const allNodes = new Set(this.fg.blocks.map(b => b.id));\n\n        // Initialize\n        this.dom = new Array(n);\n        for (const block of this.fg.blocks) {\n            if (block.id === 0) {\n                this.dom[0] = new Set([0]); // entry dominates itself\n            } else {\n                this.dom[block.id >= 0 ? block.id : this.dom.length - 1] = new Set(allNodes);\n            }\n        }\n\n        // Iterate\n        let changed = true;\n        let iterations = 0;\n        while (changed) {\n            changed = false;\n            iterations++;\n\n            for (const block of this.fg.blocks) {\n                const bId = block.id;\n                if (bId === 0) continue;\n                if (bId < 0) continue;\n\n                // Compute intersection of predecessors' DOM sets\n                let newDom = new Set(allNodes);\n                for (const predId of block.preds) {\n                    const predDom = this.dom[predId];\n                    if (predDom) {\n                        newDom = this.intersect(newDom, predDom);\n                    }\n                }\n                newDom.add(bId);\n\n                // Check for change\n                const oldDom = this.dom[bId];\n                if (!this.setsEqual(newDom, oldDom)) {\n                    this.dom[bId] = newDom;\n                    changed = true;\n                }\n            }\n        }\n\n        console.log(`  Dominator computation: ${iterations} iterations`);\n    }\n\n    private intersect(a: Set<number>, b: Set<number>): Set<number> {\n        const result = new Set<number>();\n        for (const x of a) {\n            if (b.has(x)) result.add(x);\n        }\n        return result;\n    }\n\n    private setsEqual(a: Set<number>, b: Set<number>): boolean {\n        if (a.size !== b.size) return false;\n        for (const x of a) if (!b.has(x)) return false;\n        return true;\n    }\n\n    private computeIDOM(): void {\n        for (const block of this.fg.blocks) {\n            const bId = block.id;\n            if (bId === 0) continue; // entry has no idom\n            if (bId < 0) continue;\n\n            const domSet = this.getDom(bId);\n            domSet.delete(bId); // remove self\n\n            // idom is the dominator that is dominated by all other dominators\n            for (const candidate of domSet) {\n                let isIDom = true;\n                for (const other of domSet) {\n                    if (candidate !== other && !this.dominates(candidate, other)) {\n                        isIDom = false;\n                        break;\n                    }\n                }\n                if (isIDom) {\n                    this.idom.set(bId, candidate);\n                    break;\n                }\n            }\n        }\n    }\n\n    private buildDomTree(): void {\n        for (const [child, parent] of this.idom) {\n            if (!this.domTreeChildren.has(parent)) {\n                this.domTreeChildren.set(parent, []);\n            }\n            this.domTreeChildren.get(parent)!.push(child);\n        }\n    }\n\n    dominates(a: number, b: number): boolean {\n        return this.getDom(b).has(a);\n    }\n\n    getDom(blockId: number): Set<number> {\n        return this.dom[blockId] ?? new Set();\n    }\n\n    getIDOM(blockId: number): number | undefined {\n        return this.idom.get(blockId);\n    }\n\n    getDomTreeChildren(blockId: number): number[] {\n        return this.domTreeChildren.get(blockId) ?? [];\n    }\n\n    printDominators(): void {\n        console.log(\"\\nDominators:\");\n        for (const block of this.fg.blocks) {\n            if (block.id < 0) continue;\n            console.log(`  BB${block.id}: dom = {${[...this.getDom(block.id)].join(\", \")}}`);\n        }\n    }\n\n    printDomTree(): void {\n        console.log(\"\\nDominator Tree:\");\n        this.printNode(0, 0);\n    }\n\n    private printNode(id: number, indent: number): void {\n        console.log(`${\"  \".repeat(indent)}BB${id}`);\n        for (const child of this.getDomTreeChildren(id)) {\n            this.printNode(child, indent + 1);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lengauer-tarjan-algorithm",
      children: "Lengauer-Tarjan Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Lengauer-Tarjan algorithm computes dominators in near-linear time ", (0,jsx_runtime.jsx)(_components.code, {
        children: "O(E?a(E,N))"
      }), " using three passes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DFS pass"
        }), ": Perform depth-first search, numbering nodes in preorder."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semi-dominator computation"
        }), ": Process nodes in reverse DFS order, computing semi-dominators via path compression."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dominator resolution"
        }), ": Convert semi-dominators to immediate dominators."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class LengauerTarjan {\n    private parent: number[] = [];           // DFS parent\n    private semi: number[] = [];             // semi-dominator number\n    private vertex: number[] = [];           // vertex by DFS number\n    private bucket: Map<number, number[]> = new Map();\n    private dom: number[] = [];              // immediate dominator\n    private best: number[] = [];             // for path compression\n    private ancestor: number[] = [];         // union-find ancestor\n    private label: number[] = [];            // node label\n    private dfn: number[] = [];              // DFS number\n    private dfnCounter = 0;\n\n    constructor(private fg: FlowGraph) {\n        const n = fg.blocks.length;\n        this.parent = new Array(n).fill(-1);\n        this.semi = new Array(n).fill(-1);\n        this.vertex = new Array(n).fill(-1);\n        this.dom = new Array(n).fill(-1);\n        this.best = [...Array(n).keys()];\n        this.ancestor = new Array(n).fill(-1);\n        this.label = [...Array(n).keys()];\n        this.dfn = new Array(n).fill(-1);\n\n        this.compute();\n    }\n\n    private compute(): void {\n        // Pass 1: DFS\n        this.dfs(0);\n\n        // Pass 2: Process in reverse DFS order\n        for (let i = this.vertex.length - 1; i >= 1; i--) {\n            const w = this.vertex[i];\n            if (w === -1) continue;\n\n            // For each predecessor v of w, compute semi-dominator\n            const block = this.fg.blocks[w];\n            for (const v of block.preds) {\n                if (v < 0 || v >= this.dfn.length) continue;\n\n                let u: number;\n                if (this.dfn[v] < this.dfn[w]) {\n                    u = v;\n                } else {\n                    u = this.eval(v);\n                }\n\n                if (this.dfn[this.semi[u]] < this.dfn[this.semi[w]]) {\n                    this.semi[w] = this.semi[u];\n                }\n            }\n\n            // Add w to bucket of semi[w]\n            const s = this.semi[w];\n            if (!this.bucket.has(s)) this.bucket.set(s, []);\n            this.bucket.get(s)!.push(w);\n\n            // Link w to its parent\n            this.link(this.parent[w], w);\n\n            // Process bucket of parent[w]\n            const p = this.parent[w];\n            if (this.bucket.has(p)) {\n                for (const v of this.bucket.get(p)!) {\n                    const u = this.eval(v);\n                    this.dom[v] = this.dfn[this.semi[u]] < this.dfn[this.semi[v]] ? u : p;\n                }\n                this.bucket.delete(p);\n            }\n        }\n\n        // Pass 3: Final dominator resolution\n        for (let i = 1; i < this.vertex.length; i++) {\n            const w = this.vertex[i];\n            if (w === -1) continue;\n            if (this.dom[w] !== this.semi[w]) {\n                this.dom[w] = this.dom[this.dom[w]];\n            }\n        }\n    }\n\n    private dfs(v: number): void {\n        this.semi[v] = v;\n        this.dfn[v] = this.dfnCounter;\n        this.vertex[this.dfnCounter] = v;\n        this.dfnCounter++;\n\n        const block = this.fg.blocks[v];\n        for (const succ of block.succs) {\n            if (succ < 0 || succ >= this.dfn.length) continue;\n            if (this.dfn[succ] === -1) {\n                this.parent[succ] = v;\n                this.dfs(succ);\n            }\n        }\n    }\n\n    private compress(v: number): void {\n        if (this.ancestor[this.ancestor[v]] !== -1) {\n            this.compress(this.ancestor[v]);\n            if (this.dfn[this.semi[this.label[this.ancestor[v]]]] <\n                this.dfn[this.semi[this.label[v]]]) {\n                this.label[v] = this.label[this.ancestor[v]];\n            }\n            this.ancestor[v] = this.ancestor[this.ancestor[v]];\n        }\n    }\n\n    private eval(v: number): number {\n        if (this.ancestor[v] === -1) {\n            return v;\n        }\n        this.compress(v);\n        return this.dfn[this.semi[this.label[this.ancestor[v]]]] <\n               this.dfn[this.semi[this.label[v]]]\n            ? this.label[this.ancestor[v]]\n            : this.label[v];\n    }\n\n    private link(v: number, w: number): void {\n        this.ancestor[w] = v;\n    }\n\n    getIDOM(blockId: number): number {\n        return this.dom[blockId];\n    }\n\n    dominates(a: number, b: number): boolean {\n        while (b !== -1 && b !== a) {\n            b = this.dom[b];\n        }\n        return b === a;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "depth-first-spanning-tree",
      children: "Depth-First Spanning Tree"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Depth-first search of the flow graph produces a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DFST"
      }), " with edges classified as:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tree edge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To an unvisited node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Part of the spanning tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Back edge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To an ancestor in the DFST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indicates a cycle (loop)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Forward edge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To a descendant (not a child)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redundant in DFS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cross edge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To a node in a different branch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Between unrelated subtrees"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Back edge test"
      }), ": Edge ", (0,jsx_runtime.jsx)(_components.code, {
        children: "m ? n"
      }), " is a back edge iff ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dfn(n) = dfn(m)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class DFSTBuilder {\n    dfn: number[] = [];           // DFS numbers\n    treeEdges: [number, number][] = [];\n    backEdges: [number, number][] = [];\n    forwardEdges: [number, number][] = [];\n    crossEdges: [number, number][] = [];\n    private visited: Set<number> = new Set();\n    private counter = 0;\n\n    constructor(private fg: FlowGraph) {\n        this.dfn = new Array(fg.blocks.length).fill(-1);\n    }\n\n    build(): void {\n        this.dfs(0);\n        this.classifyEdges();\n    }\n\n    private dfs(node: number): void {\n        this.visited.add(node);\n        this.dfn[node] = this.counter++;\n\n        const block = this.fg.blocks[node];\n        for (const succ of block.succs) {\n            if (succ < 0) continue;\n            if (!this.visited.has(succ)) {\n                this.treeEdges.push([node, succ]);\n                this.dfs(succ);\n            }\n        }\n    }\n\n    private classifyEdges(): void {\n        for (const block of this.fg.blocks) {\n            for (const succ of block.succs) {\n                if (succ < 0) continue;\n                const from = block.id;\n                if (this.treeEdges.some(([f, t]) => f === from && t === succ)) continue;\n\n                if (this.dfn[succ] <= this.dfn[from]) {\n                    this.backEdges.push([from, succ]);\n                } else if (this.dfn[succ] > this.dfn[from] &&\n                           this.visited.has(succ)) {\n                    this.forwardEdges.push([from, succ]);\n                } else {\n                    this.crossEdges.push([from, succ]);\n                }\n            }\n        }\n    }\n\n    print(): void {\n        console.log(\"\\nDFS numbers:\", this.dfn.map((d, i) => `BB${i}=${d}`).join(\", \"));\n        console.log(`Tree edges: ${this.treeEdges.map(([f, t]) => `BB${f}?BB${t}`).join(\", \")}`);\n        console.log(`Back edges: ${this.backEdges.map(([f, t]) => `BB${f}?BB${t}`).join(\", \")}`);\n        console.log(`Forward edges: ${this.forwardEdges.map(([f, t]) => `BB${f}?BB${t}`).join(\", \")}`);\n        console.log(`Cross edges: ${this.crossEdges.map(([f, t]) => `BB${f}?BB${t}`).join(\", \")}`);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "natural-loops",
      children: "Natural Loops"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "natural loop"
      }), " is defined by a back edge ", (0,jsx_runtime.jsx)(_components.code, {
        children: "m ? n"
      }), " and consists of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), " plus all nodes that can reach ", (0,jsx_runtime.jsx)(_components.code, {
        children: "m"
      }), " without passing through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), ". The node ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), " is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "loop header"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class NaturalLoop {\n    header: number;\n    body: Set<number>;\n\n    constructor(header: number, body: Set<number>) {\n        this.header = header;\n        this.body = body;\n    }\n\n    isNested(outer: NaturalLoop): boolean {\n        return outer.body.has(this.header) && this.header !== outer.header;\n    }\n\n    toString(): string {\n        return `loop header=BB${this.header} body={${[...this.body].sort((a, b) => a - b).map(b => \"BB\" + b).join(\", \")}}`;\n    }\n}\n\nclass LoopDetector {\n    loops: NaturalLoop[] = [];\n    private dominators: DominatorAnalysis;\n\n    constructor(private fg: FlowGraph, private backEdges: [number, number][]) {\n        this.dominators = new DominatorAnalysis(fg);\n        this.detectLoops();\n    }\n\n    private detectLoops(): void {\n        for (const [tail, header] of this.backEdges) {\n            const body = new Set<number>();\n            this.findBody(tail, header, body);\n            body.add(header);\n            this.loops.push(new NaturalLoop(header, body));\n        }\n    }\n\n    private findBody(tail: number, header: number, body: Set<number>): void {\n        const worklist = [tail];\n        while (worklist.length > 0) {\n            const node = worklist.pop()!;\n            if (node === header) continue;\n            if (body.has(node)) continue;\n            body.add(node);\n\n            const block = this.fg.blocks[node];\n            for (const pred of block.preds) {\n                if (pred >= 0 && !body.has(pred)) {\n                    worklist.push(pred);\n                }\n            }\n        }\n    }\n\n    printLoopNests(): void {\n        // Build nesting tree\n        const nested = new Map<number, number[]>(); // outer index ? inner indices\n        for (let i = 0; i < this.loops.length; i++) {\n            nested.set(i, []);\n        }\n        for (let i = 0; i < this.loops.length; i++) {\n            for (let j = 0; j < this.loops.length; j++) {\n                if (i !== j && this.loops[i].isNested(this.loops[j])) {\n                    nested.get(j)!.push(i);\n                }\n            }\n        }\n\n        console.log(\"\\nLoop Nests:\");\n        this.printLoopTree(nested, 0, new Set());\n    }\n\n    private printLoopTree(\n        nested: Map<number, number[]>,\n        idx: number,\n        visited: Set<number>\n    ): void {\n        if (visited.has(idx)) return;\n        visited.add(idx);\n        const loop = this.loops[idx];\n        console.log(`  ${loop.toString()}`);\n        for (const child of nested.get(idx)!) {\n            this.printLoopTree(nested, child, visited);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reducible-flow-graphs",
      children: "Reducible Flow Graphs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A flow graph is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reducible"
      }), " if it can be collapsed to a single node by repeatedly applying:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T1"
        }), ": Remove a self-loop. If node ", (0,jsx_runtime.jsx)(_components.code, {
          children: "n"
        }), " has edge ", (0,jsx_runtime.jsx)(_components.code, {
          children: "n ? n"
        }), ", remove it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T2"
        }), ": If node ", (0,jsx_runtime.jsx)(_components.code, {
          children: "n"
        }), " (not the entry) has a unique predecessor ", (0,jsx_runtime.jsx)(_components.code, {
          children: "m"
        }), ", merge ", (0,jsx_runtime.jsx)(_components.code, {
          children: "n"
        }), " into ", (0,jsx_runtime.jsx)(_components.code, {
          children: "m"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Equivalently, a reducible graph contains no cycle with two entry points. Structured programs (using only if-then-else, while, and for) always produce reducible flow graphs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ReducibilityCheck {\n    isReducible(fg: FlowGraph): boolean {\n        // T1/T2 reduction\n        let graph = new Set(fg.blocks.map(b => b.id));\n        let edges = new Map<number, Set<number>>();\n        for (const block of fg.blocks) {\n            edges.set(block.id, new Set(block.succs));\n        }\n\n        let changed = true;\n        while (changed) {\n            changed = false;\n\n            // T1: Remove self-loops\n            for (const [node, succs] of edges) {\n                if (succs.has(node)) {\n                    succs.delete(node);\n                    changed = true;\n                }\n            }\n\n            // T2: Merge node with unique predecessor\n            const predCounts = new Map<number, Set<number>>();\n            for (const [node, succs] of edges) {\n                for (const succ of succs) {\n                    if (!predCounts.has(succ)) predCounts.set(succ, new Set());\n                    predCounts.get(succ)!.add(node);\n                }\n            }\n\n            for (const [node, preds] of predCounts) {\n                if (node === 0) continue; // don't merge entry\n                if (preds.size === 1) {\n                    const pred = [...preds][0];\n                    // Merge node into pred\n                    const succs = edges.get(node) || new Set();\n                    for (const s of succs) {\n                        edges.get(pred)!.add(s);\n                    }\n                    edges.delete(node);\n                    graph.delete(node);\n                    changed = true;\n                    break; // restart after each T2\n                }\n            }\n        }\n\n        return graph.size === 1;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-demo",
      children: "Complete Demo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(\"=== Control-Flow Analysis Demo ===\");\n\n// TAC for a program with a nested loop and conditional\nconst tac: TACInstr[] = [\n    { op: \"=\", result: \"x\", arg1: \"0\" },\n    { op: \"=\", result: \"i\", arg1: \"0\" },\n    // Outer loop\n    { op: \"L1:\" },                             // outer loop header\n    { op: \"<\", result: \"t1\", arg1: \"i\", arg2: \"n\" },\n    { op: \"ifFalse\", arg1: \"t1\", arg2: \"L4\" }, // exit outer\n    // Inner loop\n    { op: \"=\", result: \"j\", arg1: \"0\" },\n    { op: \"L2:\" },                             // inner loop header\n    { op: \"<\", result: \"t2\", arg1: \"j\", arg2: \"m\" },\n    { op: \"ifFalse\", arg1: \"t2\", arg2: \"L3\" }, // exit inner\n    { op: \"+\", result: \"t3\", arg1: \"x\", arg2: \"1\" },\n    { op: \"=\", result: \"x\", arg1: \"t3\" },\n    { op: \"+\", result: \"t4\", arg1: \"j\", arg2: \"1\" },\n    { op: \"=\", result: \"j\", arg1: \"t4\" },\n    { op: \"goto\", arg1: \"L2\" },\n    // End inner\n    { op: \"L3:\" },\n    { op: \"+\", result: \"t5\", arg1: \"i\", arg2: \"1\" },\n    { op: \"=\", result: \"i\", arg1: \"t5\" },\n    { op: \"goto\", arg1: \"L1\" },\n    // Exit\n    { op: \"L4:\" },\n    { op: \"return\", arg1: \"x\" },\n];\n\n// Build flow graph\nconsole.log(\"Flow Graph:\");\nconst fg = new FlowGraph(tac);\nfg.print();\n\n// Compute dominators (iterative)\nconst dom = new DominatorAnalysis(fg);\ndom.printDominators();\ndom.printDomTree();\n\n// Build DFST and classify edges\nconst dfs = new DFSTBuilder(fg);\ndfs.build();\ndfs.print();\n\n// Detect loops\nconst loopDetector = new LoopDetector(fg, dfs.backEdges);\nloopDetector.printLoopNests();\n\n// Reducibility\nconst red = new ReducibilityCheck();\nconsole.log(`\\nReducible: ${red.isReducible(fg)}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dominator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d blocks every path entry?n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safety for code motion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative DF / Lengauer-Tarjan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate Dominator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique closest dominator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Builds dominator tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LT semi-dominator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Back Edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge where target = source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identifies loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS numbering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Natural Loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Header + nodes reaching tail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop optimization target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Back-edge flood fill"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reducible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1/T2 collapse to single node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast DF analysis convergence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1/T2 reduction"
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
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leader Marking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TAC sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lengauer-Tarjan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flow graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dominator tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E?a(E,N))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative Dominators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flow graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dominator set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N?) worst case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Natural Loop Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Back edges + dominators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N?E)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1/T2 Reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flow graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduced graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
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
            children: "Structured control flow guarantees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reducible graphs from structured languages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Systems Programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS control flow analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity analysis of kernel paths"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web Development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScript JIT optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JITs build flow graphs for hot code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code coverage tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flow graphs determine branch coverage"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-111-dominator-and-loop-detection",
      children: "Example 11.1: Dominator and Loop Detection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Flow graph edges: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "entry ? B1, B1 ? B2, B2 ? B3, B2 ? B4, B3 ? B2, B4 ? exit"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dominators"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "entry"
      }), " dominates all; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B1"
      }), " dominates all except ", (0,jsx_runtime.jsx)(_components.code, {
        children: "entry"
      }), "; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B2"
      }), " dominates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B2, B3, B4, exit"
      }), "; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B3"
      }), " only dominates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B3"
      }), "; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B4"
      }), " only dominates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B4"
      }), ". ", (0,jsx_runtime.jsx)(_components.code, {
        children: "idom(B1) = entry"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "idom(B2) = B1"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "idom(B3) = B2"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "idom(B4) = B2"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "idom(exit) = B2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Back edge"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B3 ? B2"
      }), " (B2 dominates B3). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Natural loop"
      }), ": header ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B2"
      }), ", body ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{B3}"
      }), ". Well-structured single-entry loop."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Control-flow analysis transforms instruction sequences into graphs. Dominators establish block hierarchy and enable safe code motion. Depth-first search identifies back edges for loop detection. Natural loops have a single header and are amenable to optimization. Reducibility ensures convergence properties for iterative algorithms. The TypeScript ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FlowGraph"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DominatorAnalysis"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LengauerTarjan"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DFSTBuilder"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LoopDetector"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReducibilityCheck"
      }), " classes implement the complete CFA pipeline with working demos."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Basic blocks are the atomic unit"
        }), ": All subsequent analyses operate on blocks, not individual instructions. Getting block identification right is essential."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lengauer-Tarjan is the production standard"
        }), ": The iterative data-flow algorithm is simpler to implement but O(N?). Use Lengauer-Tarjan for production compilers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Natural loops are the only \"real\" loops"
        }), ": Unstructured cycles (gotos into the middle of a loop body) cannot be analyzed as natural loops. They are rare in practice."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reducibility guarantees analysis speed"
        }), ": Irreducible graphs cause iterative data-flow analysis to require more iterations. Node splitting can repair irreducibility."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pre-headers simplify loop optimizations"
        }), ": Inserting a pre-header gives a single point for loop-invariant code motion and loop-rotation transformations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// cfa\n// lexical-parsing-codegen implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'cfa', data: { topic: 'lexical-parsing-codegen' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// cfa - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'compilers demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'compiler-design', chapter: 'cfa' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('compilers'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What condition defines a back edge in a depth-first spanning tree?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The edge points from a descendant to an ancestor"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) dfn(target) = dfn(source)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Both A and B"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) The edge connects two nodes in the same basic block"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the immediate dominator of a block n?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The entry block"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Any block that dominates n"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The unique block d ? n such that d dominates n and all other dominators of n dominate d"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) The block that immediately precedes n in the instruction sequence"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why does reducibility matter for compilers?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Reducible graphs are faster to construct"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) It guarantees fast convergence of iterative data-flow analysis"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Reducible graphs have fewer basic blocks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) It enables algebraic simplification"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the Lengauer-Tarjan algorithm, what does the semi-dominator of node w represent?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The immediate dominator of w"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The node with minimum DFS number reachable from w via zero or more back edges"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The parent of w in the DFST"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) The successor of w"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A natural loop consists of:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Any cycle in the flow graph"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) A back-edge tail plus all nodes that can reach the tail without passing through the header"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) All nodes with the same dominator"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Nodes connected by tree edges only"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answers</summary>\n1. C, 2. C, 3. B, 4. B, 5. B\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What distinguishes a basic block leader? How are blocks identified?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the dominator relationship and immediate dominator."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is a back edge in a DFST, and how is it related to natural loops?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define reducible flow graphs. Why is reducibility beneficial?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is a loop pre-header and what optimizations does it enable?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the iterative data-flow algorithm for dominators with the Lengauer-Tarjan algorithm."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For edges ", (0,jsx_runtime.jsx)(_components.code, {
          children: "entry?B1, B1?B2, B1?B3, B2?B4, B3?B4, B4?B5, B4?B6, B5?B7, B6?B7, B7?B1, B7?exit"
        }), ": compute dominators, draw the dominator tree, and identify natural loops."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform DFS on the flow graph from Problem 1. Assign dfn and classify each edge."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Convert this C code into a flow graph and identify all basic blocks:\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-c",
            children: "int x = 0;\nfor (int i = 0; i < n; i++) {\n    if (a[i] > 0) x += a[i];\n    else x -= a[i];\n}\nreturn x;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Determine reducibility of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "entry?A, A?B, A?C, B?D, C?D, D?C, D?exit"
        }), ". If irreducible, apply node splitting and show the result."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Using the TypeScript ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FlowGraph"
        }), " class, build the flow graph for the TAC sequence from Demo 1. Compute dominators, print the dominator tree, and identify all natural loops and their nesting relationships."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a complete CFA in TypeScript: take a TAC sequence, partition into basic blocks, build the flow graph, compute dominators using BOTH the iterative algorithm and Lengauer-Tarjan, build the DFST with edge classification, detect natural loops with nesting, and check reducibility. Test on code with three nested loops and conditionals. Print: flow graph with predecessor/successor lists, dominator tree, DFS numbers and edge classification, loop nest hierarchy, and reducibility verdict. Use the FlowGraph, DominatorAnalysis, LengauerTarjan, DFSTBuilder, LoopDetector, and ReducibilityCheck classes from this chapter."
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