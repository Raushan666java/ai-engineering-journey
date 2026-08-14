"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[79808],{

/***/ 96640
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_digital_logic_15_advanced_topics_md_3fb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-digital-logic-15-advanced-topics-md-3fb.json
const site_docs_courses_digital_logic_15_advanced_topics_md_3fb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/digital-logic/15-advanced-topics","title":"Chapter 15: Advanced Topics in Digital Logic","description":"Prereq: All previous chapters ? this capstone chapter surveys advanced and emerging topics.","source":"@site/docs/courses/digital-logic/15-advanced-topics.md","sourceDirName":"courses/digital-logic","slug":"/digital-logic/15-advanced-topics","permalink":"/ai-engineering-journey/digital-logic/15-advanced-topics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"id":"15-advanced-topics","slug":"/digital-logic/15-advanced-topics","title":"Chapter 15: Advanced Topics in Digital Logic","sidebar_label":"Chapter 15: Advanced Topics in Digital Logic","sidebar_position":15},"sidebar":"course-digital-logic","previous":{"title":"Chapter 14: Timing Analysis","permalink":"/ai-engineering-journey/digital-logic/14-timing-analysis"},"next":{"title":"Digital Logic — Course Overview","permalink":"/ai-engineering-journey/digital-logic"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/digital-logic/15-advanced-topics.md


const frontMatter = {
	id: '15-advanced-topics',
	slug: '/digital-logic/15-advanced-topics',
	title: 'Chapter 15: Advanced Topics in Digital Logic',
	sidebar_label: 'Chapter 15: Advanced Topics in Digital Logic',
	sidebar_position: 15
};
const contentTitle = 'Chapter 15: Advanced Topics in Digital Logic';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "15.1 The Modern VLSI Design Flow",
  "id": "151-the-modern-vlsi-design-flow",
  "level": 2
}, {
  "value": "15.1.1 Key Milestones",
  "id": "1511-key-milestones",
  "level": 3
}, {
  "value": "15.2 Low-Power Design",
  "id": "152-low-power-design",
  "level": 2
}, {
  "value": "15.2.1 Power Components",
  "id": "1521-power-components",
  "level": 3
}, {
  "value": "15.2.2 Power Reduction Techniques",
  "id": "1522-power-reduction-techniques",
  "level": 3
}, {
  "value": "15.2.3 Multi-Vt Design",
  "id": "1523-multi-vt-design",
  "level": 3
}, {
  "value": "15.3 Design for Test (DFT)",
  "id": "153-design-for-test-dft",
  "level": 2
}, {
  "value": "15.3.1 Scan Chains",
  "id": "1531-scan-chains",
  "level": 3
}, {
  "value": "15.3.2 Built-In Self-Test (BIST)",
  "id": "1532-built-in-self-test-bist",
  "level": 3
}, {
  "value": "15.3.3 Fault Models",
  "id": "1533-fault-models",
  "level": 3
}, {
  "value": "15.4 Asynchronous Design",
  "id": "154-asynchronous-design",
  "level": 2
}, {
  "value": "15.4.1 Handshake Protocols",
  "id": "1541-handshake-protocols",
  "level": 3
}, {
  "value": "15.4.2 Synchronous vs Asynchronous",
  "id": "1542-synchronous-vs-asynchronous",
  "level": 3
}, {
  "value": "15.5 Reconfigurable Computing",
  "id": "155-reconfigurable-computing",
  "level": 2
}, {
  "value": "15.5.1 CGRA Architecture",
  "id": "1551-cgra-architecture",
  "level": 3
}, {
  "value": "15.5.2 Partial Reconfiguration",
  "id": "1552-partial-reconfiguration",
  "level": 3
}, {
  "value": "15.6 Emerging Technologies",
  "id": "156-emerging-technologies",
  "level": 2
}, {
  "value": "15.6.1 Quantum Computing",
  "id": "1561-quantum-computing",
  "level": 3
}, {
  "value": "15.6.2 Neuromorphic Computing",
  "id": "1562-neuromorphic-computing",
  "level": 3
}, {
  "value": "15.6.3 Silicon Photonics",
  "id": "1563-silicon-photonics",
  "level": 3
}, {
  "value": "15.7 Formal Verification",
  "id": "157-formal-verification",
  "level": 2
}, {
  "value": "15.8 Process Scaling and Moore&#39;s Law",
  "id": "158-process-scaling-and-moores-law",
  "level": 2
}, {
  "value": "15.8.1 Technology Nodes",
  "id": "1581-technology-nodes",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Final Assessment (Chapters 1?15)",
  "id": "final-assessment-chapters-115",
  "level": 2
}, {
  "value": "Answers",
  "id": "answers",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "chapter-15-advanced-topics-in-digital-logic",
        children: "Chapter 15: Advanced Topics in Digital Logic"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " All previous chapters ? this capstone chapter surveys advanced and emerging topics.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Your next course ? computer architecture, VLSI design, or embedded systems."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the conclusion of this chapter, the student shall be able to:"
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
        href: "../../assets/images/lessons/digital-logic/15-advanced-topics/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/15-advanced-topics/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/digital-logic/15-advanced-topics/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/15-advanced-topics/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/digital-logic/15-advanced-topics/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/15-advanced-topics/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the ASIC design flow from specification to tapeout"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain low-power design techniques at architecture, RTL, and gate levels"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyse design-for-test (DFT) structures including scan chains and BIST"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare asynchronous design styles with synchronous approaches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discuss reconfigurable computing and coarse-grained reconfigurable arrays"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate emerging technologies (quantum, neuromorphic, photonic computing)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the impact of process scaling on digital design"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply formal verification methods for safety-critical designs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "151-the-modern-vlsi-design-flow",
      children: "15.1 The Modern VLSI Design Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    SPEC[Specification] --> ARCH[Architecture Design]\n    ARCH --> RTL[RTL Coding<br>Verilog / VHDL]\n    RTL --> FUNC[Functional Verification]\n    FUNC --> SYNTH[Logic Synthesis]\n    SYNTH --> DFT[DFT Insertion]\n    DFT --> STA[Static Timing Analysis]\n    STA --> PR[Place & Route]\n    PR --> PV[Physical Verification<br>DRC / LVS]\n    PV --> TAP[Tapeout]\n    TAP --> FAB[Fabrication]\n    FAB --> TEST[ATE Test]\n    TEST --> SHIP[Ship]\n    FUNC --> |fail| RTL\n    STA --> |fail| SYNTH\n    PV --> |fail| PR\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1511-key-milestones",
      children: "15.1.1 Key Milestones"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Milestone"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Duration"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Specification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture document, ISA, interfaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3?6 months"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RTL coding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verilog/SystemVerilog implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6?12 months"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Functional verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simulation, UVM testbenches, coverage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6?12 months"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logic synthesis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTL ? gate-level netlist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2?4 weeks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Physical design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Floorplan, place, route, clock tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2?4 months"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Physical verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRC, LVS, antenna checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2?4 weeks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tapeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GDSII to mask shop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1?2 weeks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fabrication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wafer processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2?4 months"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ATE test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wafer sort, package test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1?2 months"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ASICProject {\n    estimatedCost(maskCost: number, waferCost: number, diePerWafer: number, yield: number): number {\n        const goodDie = diePerWafer * yield;\n        const costPerDie = (maskCost + waferCost) / goodDie;\n        return costPerDie;\n    }\n\n    scheduleMonths(complexity: 'simple' | 'medium' | 'complex'): number {\n        const months = { simple: 12, medium: 18, complex: 30 };\n        return months[complexity] + 6; // +6 for verification\n    }\n}\n\nconst project = new ASICProject();\nconsole.log(`Cost per die (28nm): $${project.estimatedCost(5000000, 3000, 500, 0.85).toFixed(2)}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "152-low-power-design",
      children: "15.2 Low-Power Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Power has become the primary design constraint in modern digital systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1521-power-components",
      children: "15.2.1 Power Components"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "P_total = P_dynamic + P_static + P_short_circuit\n\nP_dynamic = a ? C_L ? V_DD? ? f\nP_static = I_leak ? V_DD\nP_short_circuit = t_sc ? V_DD ? I_peak ? f\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class PowerModel {\n    static dynamicPower(\n        activity: number,   // switching activity (0..1)\n        capacitance: number, // load capacitance (F)\n        voltage: number,     // supply voltage (V)\n        frequency: number    // clock frequency (Hz)\n    ): number {\n        return activity * capacitance * voltage * voltage * frequency;\n    }\n\n    static staticPower(\n        leakageCurrent: number, // A\n        voltage: number         // V\n    ): number {\n        return leakageCurrent * voltage;\n    }\n\n    static totalPower(\n        dynPower: number,\n        staticPower: number\n    ): number {\n        return dynPower + staticPower;\n    }\n}\n\n// 7 nm processor core example\nconst dynP = PowerModel.dynamicPower(0.15, 2e-9, 0.75, 2e9);\nconst leakP = PowerModel.staticPower(0.5, 0.75);\nconsole.log(`Dynamic: ${dynP.toFixed(1)} W`);\nconsole.log(`Leakage: ${leakP.toFixed(2)} W`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1522-power-reduction-techniques",
      children: "15.2.2 Power Reduction Techniques"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Architecture Level\"\n        A1[Clock Gating]\n        A2[Power Gating]\n        A3[Voltage/Frequency Scaling]\n        A4[Parallelism ? Lower Voltage]\n    end\n    subgraph \"RTL Level\"\n        R1[Operand Isolation]\n        R2[Gray-Code Counters]\n        R3[FSM Encoding]\n        R4[Data Gating]\n    end\n    subgraph \"Gate Level\"\n        G1[Multi-Vt Cells]\n        G2[Gate Sizing]\n        G3[Pin Swapping]\n        G4[Clock Tree Optimisation]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class PowerSaving {\n    static clockGating(functionalPower: number, gatedFraction: number): number {\n        return functionalPower * (1 - gatedFraction);\n    }\n\n    static DVFS(basePower: number, voltageScale: number, freqScale: number): number {\n        // P ? V? ? f\n        return basePower * voltageScale * voltageScale * freqScale;\n    }\n\n    static powerGating(leakagePower: number, dutyCycle: number): number {\n        // Sleep mode reduces leakage by ~1000?\n        const sleepPower = leakagePower / 1000;\n        return leakagePower * dutyCycle + sleepPower * (1 - dutyCycle);\n    }\n}\n\nconsole.log(`After clock gating (40%): ${PowerSaving.clockGating(100, 0.4).toFixed(0)} W`);\nconsole.log(`After DVFS (0.8V, 0.7f): ${PowerSaving.DVFS(100, 0.8/1.0, 0.7).toFixed(1)} W`);\nconsole.log(`After power gating (30% active): ${PowerSaving.powerGating(30, 0.3).toFixed(1)} W`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1523-multi-vt-design",
      children: "15.2.3 Multi-Vt Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type VtType = 'HVT' | 'RVT' | 'LVT';\n\ninterface CellCharacteristic {\n    vt: VtType;\n    delay: number;  // ps\n    leakage: number; // nW\n}\n\nconst cells: CellCharacteristic[] = [\n    { vt: 'HVT', delay: 60, leakage: 0.5 },   // High threshold: slow, low leakage\n    { vt: 'RVT', delay: 40, leakage: 5 },     // Regular threshold: balanced\n    { vt: 'LVT', delay: 25, leakage: 100 }    // Low threshold: fast, high leakage\n];\n\nfunction selectVtCells(criticalPaths: number, totalPaths: number): void {\n    // Use LVT on critical paths, HVT on non-critical\n    const criticalPercent = criticalPaths / totalPaths;\n    console.log(`LVT on ${(criticalPercent * 100).toFixed(1)}% of paths`);\n    console.log(`HVT on ${((1 - criticalPercent) * 100).toFixed(1)}% of paths`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "153-design-for-test-dft",
      children: "15.3 Design for Test (DFT)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Testing ensures that manufactured chips are defect-free. DFT adds hardware to make testing easier and more thorough."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1531-scan-chains",
      children: "15.3.1 Scan Chains"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scan chains convert flip-flops into shift-register elements during test mode, enabling direct control and observation of internal state."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    subgraph \"Normal Mode\"\n        FF1[FF1] --> LOGIC[Combinational Logic] --> FF2[FF2]\n    end\n    subgraph \"Scan Mode\"\n        SI[Scan In] --> FF1\n        FF1 --> FF2\n        FF2 --> SO[Scan Out]\n    end\n    SE[Scan Enable] --> FF1\n    SE --> FF2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ScanFlop {\n    private data: number = 0;\n    private scanData: number = 0;\n\n    tick(D: number, scanIn: number, scanEnable: number, clk: number): { Q: number; scanOut: number } {\n        if (scanEnable) {\n            this.data = scanIn;\n            this.scanData = scanIn;\n        } else {\n            this.data = D;\n        }\n        return { Q: this.data, scanOut: this.scanData };\n    }\n}\n\nclass ScanChain {\n    private flops: ScanFlop[];\n    readonly length: number;\n\n    constructor(length: number) {\n        this.length = length;\n        this.flops = Array.from({ length }, () => new ScanFlop());\n    }\n\n    // Shift in test pattern\n    shiftIn(pattern: number[]): void {\n        for (let i = 0; i < this.length; i++) {\n            this.flops[i].tick(0, pattern[i] ?? 0, 1, 1);\n        }\n    }\n\n    // Capture response\n    capture(clk: number): void {\n        for (const f of this.flops) {\n            f.tick(0, 0, 0, clk);\n        }\n    }\n\n    // Shift out response\n    shiftOut(): number[] {\n        const response: number[] = [];\n        for (let i = this.length - 1; i >= 0; i--) {\n            const result = this.flops[i].tick(0, 0, 1, 1);\n            response.push(result.scanOut);\n        }\n        return response.reverse();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1532-built-in-self-test-bist",
      children: "15.3.2 Built-In Self-Test (BIST)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BIST uses on-chip pattern generation and response compaction to test memories and logic without external ATE."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class LFSR_BIST {\n    private lfsr: LFSR;   // pattern generator\n    private misr: LFSR;   // response compactor\n    private signature: number = 0;\n\n    constructor(width: number) {\n        this.lfsr = new LFSR(width, [width - 1, width - 2]);\n        this.misr = new LFSR(width, [width - 1, width - 2]);\n    }\n\n    generatePattern(): number {\n        return this.lfsr.tick();\n    }\n\n    compactResponse(response: number): void {\n        // Multiple-Input Signature Register (MISR)\n        this.signature ^= response;\n        this.signature = this.misr.tick();\n    }\n\n    getFinalSignature(): number {\n        return this.signature;\n    }\n\n    compare(goldenSignature: number): boolean {\n        return this.signature === goldenSignature;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1533-fault-models",
      children: "15.3.3 Fault Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type FaultType = 'stuck-at-0' | 'stuck-at-1' | 'transition' | 'bridging';\n\ninterface Fault {\n    net: string;\n    type: FaultType;\n}\n\nfunction faultCoverage(detected: Fault[], total: Fault[]): number {\n    return (detected.length / total.length) * 100;\n}\n\n// ATPG (Automatic Test Pattern Generation)\nfunction atpg(faults: Fault[], logic: (inputs: number[]) => number[]): number[][] {\n    // Simplified: generate patterns that propagate faults to outputs\n    const patterns: number[][] = [];\n    for (const fault of faults) {\n        // In real ATPG: D-algorithm, PODEM, or FAN\n        // For each fault, find an input pattern that:\n        // 1. Excites the fault (sets the node to opposite value)\n        // 2. Propagates the fault effect to an observable output\n    }\n    return patterns;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "154-asynchronous-design",
      children: "15.4 Asynchronous Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Asynchronous (clockless) circuits eliminate the global clock, using handshake protocols instead."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    subgraph \"Bundled Data\"\n        REQ[Request] --> C1[Controller 1]\n        C1 --> ACK[Acknowledge]\n        REQ --> C2[Controller 2]\n        ACK --> C2\n        DATA[Data Bus] --> LATCH1[Latch 1]\n        LATCH1 --> LATCH2[Latch 2]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1541-handshake-protocols",
      children: "15.4.1 Handshake Protocols"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type HandshakePhase = 'idle' | 'wait_req' | 'wait_ack' | 'done';\n\nclass BundledDataChannel {\n    private req: number = 0;\n    private ack: number = 0;\n    private data: number = 0;\n    private phase: HandshakePhase = 'idle';\n\n    // Sender\n    send(data: number): void {\n        this.data = data;\n        this.req = 1;\n        this.phase = 'wait_ack';\n        // Wait for ack\n        while (this.ack === 0) { /* spin */ }\n        this.req = 0;\n        this.phase = 'idle';\n    }\n\n    // Receiver\n    receive(): number {\n        this.ack = 0;\n        while (this.req === 0) { /* spin */ }\n        const data = this.data;\n        this.ack = 1;\n        this.phase = 'done';\n        return data;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1542-synchronous-vs-asynchronous",
      children: "15.4.2 Synchronous vs Asynchronous"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Synchronous"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Asynchronous"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global distribution required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No clock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Timing closure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex STA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local timing only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Power"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (clock toggling)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (activity-driven)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EMI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (clock harmonics)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (spread spectrum)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Design flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mature, automated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual, specialised"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Robustness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PVT-sensitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PVT-tolerant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounded by worst-case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average-case performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99% of chips"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMULET, Intel/i860 FIFO"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "155-reconfigurable-computing",
      children: "15.5 Reconfigurable Computing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Beyond FPGAs, reconfigurable computing includes coarse-grained reconfigurable arrays (CGRAs) and dynamic reconfiguration."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1551-cgra-architecture",
      children: "15.5.1 CGRA Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"CGRA Grid (4?4)\"\n        PE11[PE11] --> PE12[PE12]\n        PE11 --> PE21[PE21]\n        PE12 --> PE13[PE13]\n        PE12 --> PE22[PE22]\n        PE21 --> PE22\n        PE21 --> PE31[PE31]\n        PE22 --> PE23[PE23]\n        PE22 --> PE32[PE32]\n        PE31 --> PE32\n        PE31 --> PE41[PE41]\n        PE32 --> PE33[PE43]\n        PE32 --> PE42[PE42]\n    end\n    MEM[Memory] --> PE11\n    MEM --> PE12\n    MEM --> PE13\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class CGRA_PE {\n    private config: { op: string; reg: number } = { op: 'NOP', reg: 0 };\n    private output: number = 0;\n\n    configure(op: string, initialReg?: number): void {\n        this.config = { op, reg: initialReg ?? 0 };\n    }\n\n    execute(inputs: number[]): number {\n        switch (this.config.op) {\n            case 'ADD': this.output = inputs[0] + inputs[1]; break;\n            case 'MUL': this.output = inputs[0] * inputs[1]; break;\n            case 'AND': this.output = inputs[0] & inputs[1]; break;\n            case 'ACC': this.output = this.output + inputs[0]; break;\n            case 'PASS': this.output = inputs[0]; break;\n            default: this.output = 0;\n        }\n        return this.output;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1552-partial-reconfiguration",
      children: "15.5.2 Partial Reconfiguration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern FPGAs can reconfigure part of the device while the rest continues operating:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class PartialReconfiguration {\n    private regions: Map<string, number[]> = new Map();\n    private activeConfig: string = '';\n\n    defineRegion(name: string, bitstream: number[]): void {\n        this.regions.set(name, bitstream);\n    }\n\n    enableReconfiguration(regionName: string): void {\n        if (!this.regions.has(regionName)) return;\n\n        // Load new bitstream for this region\n        const config = this.regions.get(regionName)!;\n        this.activeConfig = regionName;\n\n        // Other regions continue operating unchanged\n        console.log(`Reconfigured region to ${regionName}`);\n    }\n\n    // Time to reconfigure = bitstream_size / configuration_port_bandwidth\n    reconfigurationTime(bitstreamSizeKB: number, bandwidthMBps: number): number {\n        return (bitstreamSizeKB / 1024) / bandwidthMBps; // seconds\n    }\n}\n\nconst pr = new PartialReconfiguration();\nconsole.log(`PR time (500 KB @ 400 MB/s): ${pr.reconfigurationTime(500, 400).toFixed(1)} ms`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "156-emerging-technologies",
      children: "15.6 Emerging Technologies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1561-quantum-computing",
      children: "15.6.1 Quantum Computing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quantum bits (qubits) exploit superposition and entanglement to perform computations that are intractable for classical computers."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Simplified quantum gate simulation (classical vector)\ntype Qubit = [number, number]; // [a, ?] where |?? = a|0? + ?|1?\n\nclass QuantumGate {\n    static hadamard(q: Qubit): Qubit {\n        // H = 1/v2 ? [[1, 1], [1, -1]]\n        const sqrt2 = Math.SQRT1_2;\n        return [\n            sqrt2 * (q[0] + q[1]),\n            sqrt2 * (q[0] - q[1])\n        ];\n    }\n\n    static cnot(control: Qubit, target: Qubit): [Qubit, Qubit] {\n        // CNOT: if control=1, flip target\n        // Simplified: assumes computational basis states\n        return [control, [target[1], target[0]]];\n    }\n\n    static measure(q: Qubit): number {\n        // |a|? = probability of |0?\n        const prob0 = q[0] * q[0];\n        return Math.random() < prob0 ? 0 : 1;\n    }\n}\n\n// Create a Bell state |F?? = (|00? + |11?)/v2\nconst q0: Qubit = [1, 0]; // |0?\nconst q1: Qubit = [1, 0]; // |0?\n\nconst hQ0 = QuantumGate.hadamard(q0);\nconst [bell0, bell1] = QuantumGate.cnot(hQ0, q1);\nconsole.log(`Bell state: |F??`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1562-neuromorphic-computing",
      children: "15.6.2 Neuromorphic Computing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Neuromorphic chips mimic biological neural networks using spiking neurons and synaptic weights."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class SpikingNeuron {\n    private membranePotential: number = 0;\n    readonly threshold: number;\n    readonly leakFactor: number;\n\n    constructor(threshold: number = 1.0, leakFactor: number = 0.95) {\n        this.threshold = threshold;\n        this.leakFactor = leakFactor;\n    }\n\n    integrate(inputSpikes: number[], weights: number[]): number {\n        // Weighted sum of input spikes\n        let sum = 0;\n        for (let i = 0; i < inputSpikes.length; i++) {\n            sum += inputSpikes[i] * weights[i];\n        }\n\n        this.membranePotential = this.membranePotential * this.leakFactor + sum;\n\n        if (this.membranePotential >= this.threshold) {\n            this.membranePotential = 0; // reset\n            return 1; // spike\n        }\n        return 0; // no spike\n    }\n}\n\n// Simple neural network layer\nclass NeuromorphicLayer {\n    private neurons: SpikingNeuron[];\n    private weights: number[][];\n\n    constructor(numInputs: number, numNeurons: number) {\n        this.neurons = Array.from({ length: numNeurons }, () => new SpikingNeuron());\n        this.weights = Array.from(\n            { length: numNeurons },\n            () => Array.from({ length: numInputs }, () => Math.random() * 2 - 1)\n        );\n    }\n\n    process(spikes: number[]): number[] {\n        return this.neurons.map((n, i) => n.integrate(spikes, this.weights[i]));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1563-silicon-photonics",
      children: "15.6.3 Silicon Photonics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Optical interconnects use light instead of electricity for data transmission, offering higher bandwidth and lower power."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class OpticalLink {\n    readonly wavelength: number; // nm\n    readonly dataRate: number;   // Gbps per wavelength\n    readonly channels: number;   // WDM channels\n\n    constructor(wavelength: number, dataRate: number, channels: number) {\n        this.wavelength = wavelength;\n        this.dataRate = dataRate;\n        this.channels = channels;\n    }\n\n    get totalBandwidth(): number {\n        return this.dataRate * this.channels;\n    }\n\n    energyPerBit(distance: number): number {\n        // ~1 pJ/bit for on-chip optical links\n        return 1e-12 + (distance * 1e-15); // J/bit\n    }\n}\n\nconst optic = new OpticalLink(1310, 25, 64);\nconsole.log(`Optical link bandwidth: ${optic.totalBandwidth} Gbps`);\nconsole.log(`Energy/bit at 10mm: ${(optic.energyPerBit(10) * 1e12).toFixed(1)} pJ`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "157-formal-verification",
      children: "15.7 Formal Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Formal methods mathematically prove that a design satisfies its specification, unlike simulation which only checks specific cases."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Simple property checking with BMC (Bounded Model Checking)\nclass PropertyChecker {\n    private stateCount: number;\n    private transitionFunc: (state: number, input: number) => number;\n\n    constructor(states: number, transition: (s: number, i: number) => number) {\n        this.stateCount = states;\n        this.transitionFunc = transition;\n    }\n\n    // Check: \"from any state, within K steps, the FSM reaches a valid state\"\n    checkReachability(targetStates: Set<number>, maxSteps: number): boolean {\n        for (let start = 0; start < this.stateCount; start++) {\n            let state = start;\n            let reached = false;\n\n            for (let step = 0; step < maxSteps; step++) {\n                if (targetStates.has(state)) {\n                    reached = true;\n                    break;\n                }\n                // Try both input values\n                state = this.transitionFunc(state, 0);\n            }\n\n            if (!reached && !targetStates.has(state)) {\n                console.log(`Counterexample: state ${start} cannot reach target in ${maxSteps} steps`);\n                return false;\n            }\n        }\n        return true;\n    }\n\n    // Check invariance: \"property P holds in all reachable states\"\n    checkInvariant(property: (state: number) => boolean, boundary: number): boolean {\n        const visited = new Set<number>();\n        const stack = [0]; // start state\n\n        while (stack.length > 0) {\n            const state = stack.pop()!;\n            if (visited.has(state)) continue;\n            visited.add(state);\n\n            if (!property(state)) {\n                console.log(`Property violated in state ${state}`);\n                return false;\n            }\n\n            if (visited.size < boundary) {\n                for (let i = 0; i < 2; i++) {\n                    stack.push(this.transitionFunc(state, i));\n                }\n            }\n        }\n        return true;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "158-process-scaling-and-moores-law",
      children: "15.8 Process Scaling and Moore's Law"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1581-technology-nodes",
      children: "15.8.1 Technology Nodes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Year"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gate Length"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "VDD"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Features"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "180 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1999"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "140 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.8 V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First copper interconnects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "130 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.3 V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-k dielectrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "90 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.2 V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strained silicon"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "65 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.1 V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-k + metal gate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "45 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "38 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0 V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immersion lithography"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "32 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.9 V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Second-gen high-k"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "28 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.85 V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HKMG bulk CMOS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.8 V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FinFET"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2018"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.75 V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EUV lithography"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.7 V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extreme UV"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2022"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 nm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.65 V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAA (Gate-All-Around)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function mooresLaw(year: number, baseYear: number, baseTransistors: number): number {\n    // Transistor count doubles every ~2 years\n    const generations = (year - baseYear) / 2;\n    return baseTransistors * Math.pow(2, generations);\n}\n\nfunction dennardScaling(prevNode: number, newNode: number, prevPower: number): number {\n    // Ideal Dennard: P scales with area (V??f, V ? L, f ? 1/L)\n    const scale = newNode / prevNode;\n    return prevPower * scale * scale; // area scales as L?\n}\n\nconst trCount = mooresLaw(2025, 2000, 42e6); // Pentium 4: 42M transistors\nconsole.log(`Projected transistor count (2025): ${(trCount / 1e9).toFixed(1)}B`);\n\nconst power = dennardScaling(7, 5, 100);\nconsole.log(`Scaled power (7nm ? 5nm ideal): ${power.toFixed(1)}%`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Low power is the defining constraint"
        }), " ? every modern design optimises for energy efficiency first"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DFT adds 5?15% area but saves millions in test cost"
        }), " ? scan chains and BIST are non-negotiable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Formal verification catches corner cases simulation misses"
        }), " ? use for control logic and safety-critical paths"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Asynchronous design remains niche"
        }), " ? despite advantages, the tool flow gap limits adoption"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Emerging technologies complement, not replace, CMOS"
        }), " ? quantum, photonic, and neuromorphic each target specific workloads"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// advanced topics\n// boolean-circuits-sequential implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'advanced topics', data: { topic: 'boolean-circuits-sequential' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// advanced topics - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'digital-circuits demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'digital-logic', chapter: 'advanced topics' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('digital-circuits'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This capstone chapter surveyed the advanced topics that shape modern digital logic design. The VLSI design flow encompasses specification through tapeout, with verification and timing closure consuming the majority of the schedule. Low-power techniques span architecture, RTL, and gate levels, driven by the end of Dennard scaling. DFT ensures manufacturing testability, while formal verification provides mathematical correctness guarantees. Asynchronous design, reconfigurable computing, and emerging technologies (quantum, neuromorphic, photonic) represent the future directions of the field. Together with the preceding 14 chapters, this completes a comprehensive foundation in digital logic engineering."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "final-assessment-chapters-115",
      children: "Final Assessment (Chapters 1?15)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " Which number system uses 4 bits per digit?\na) Binary\nb) Octal\nc) Hexadecimal\nd) BCD"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " De Morgan's theorem states that ?(A?B) equals:\na) ?A + ?B\nb) ?A ? ?B\nc) A + B\nd) ?(A + B)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " A Karnaugh map with 4 variables has how many cells?\na) 4\nb) 8\nc) 16\nd) 32"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " The critical path of a ripple-carry adder is proportional to:\na) log2(N)\nb) N\nc) N?\nd) 1"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Which flip-flop type toggles when both inputs are 1?\na) D\nb) SR\nc) JK\nd) T"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6."
      }), " One-hot encoding of 8 states requires how many flip-flops?\na) 3\nb) 8\nc) 16\nd) 4"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7."
      }), " An LFSR with maximal-length polynomial 5-bit produces how many states?\na) 5\nb) 31\nc) 32\nd) 25"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8."
      }), " SECDED Hamming code for 16 data bits requires how many check bits?\na) 4\nb) 5\nc) 6\nd) 7"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9."
      }), " The ideal SNR of a 14-bit ADC is approximately:\na) 74 dB\nb) 86 dB\nc) 98 dB\nd) 50 dB"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10."
      }), " In static timing analysis, a hold violation is fixed by:\na) Reducing clock frequency\nb) Adding delay to the data path\nc) Pipelining\nd) Increasing supply voltage"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answers",
      children: "Answers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q1: d | Q2: a | Q3: c | Q4: b | Q5: c | Q6: b | Q7: b | Q8: b | Q9: b | Q10: b"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "VLSI cost model:"
          }), " Write a TypeScript function that computes the die cost given\nwafer diameter, die area, defect density, and mask cost. Determine the optimal die size\nto minimise cost per good die."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Power management unit:"
          }), " Design a power management FSM with active, sleep, and\ndeep-sleep states. Calculate the energy savings for a 10% duty cycle workload."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BIST for SRAM:"
          }), " Implement a March C- algorithm for memory BIST. Generate the test\npatterns and verify that all stuck-at and transition faults are detected."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Asynchronous FIFO:"
          }), " Design a 4-deep asynchronous FIFO using bundled-data\nhandshaking between two clock domains. Simulate read and write operations."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Temporal property checking:"
          }), " Write a property checker that verifies \"after a\nrequest, the grant must be asserted within 5 cycles\" for a bus arbiter FSM."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Quantum adder:"
          }), " Implement a quantum ripple-carry adder using the simplified qubit\nmodel. Show the circuit depth and compare with classical adder complexity."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Neuromorphic pattern classifier:"
          }), " Build a single-layer spiking neural network that\nclassifies MNIST digits (simplified 4?4 grid). Train using spike-timing-dependent\nplasticity (STDP)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "FPGA vs ASIC crossover:"
          }), " Compute the economic crossover point between FPGA and\nASIC for various production volumes. Include NRE, unit cost, and time-to-market\npenalties."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "3D IC thermal analysis:"
          }), " Model the thermal profile of a 3D-stacked IC with four\ntiers. Calculate the maximum power density before thermal runaway occurs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Digital logic research paper:"
          }), " Write a 2-page research proposal on one emerging\ntopic (quantum error correction, photonic FPGAs, in-memory computing, or\napproximate computing). Include background, proposed approach, and evaluation\nmethodology."]
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