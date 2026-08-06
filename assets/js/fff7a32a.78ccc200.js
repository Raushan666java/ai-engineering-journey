"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[17293],{

/***/ 13061
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_digital_logic_09_memory_md_fff_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-digital-logic-09-memory-md-fff.json
const site_docs_courses_digital_logic_09_memory_md_fff_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/digital-logic/09-memory","title":"Chapter 9: Semiconductor Memory","description":"Prereq: Chapter 8 (Registers and Counters) ? registers are the fastest, smallest memory elements; this chapter extends storage to arrays of cells.","source":"@site/docs/courses/digital-logic/09-memory.md","sourceDirName":"courses/digital-logic","slug":"/digital-logic/09-memory","permalink":"/ai-engineering-journey/digital-logic/09-memory","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"09-memory","slug":"/digital-logic/09-memory","title":"Chapter 9: Semiconductor Memory","sidebar_label":"Chapter 9: Semiconductor Memory","sidebar_position":9},"sidebar":"coursesSidebar","previous":{"title":"Chapter 8: Registers and Counters","permalink":"/ai-engineering-journey/digital-logic/08-registers-counters"},"next":{"title":"Chapter 10: Programmable Logic ? PLA and PAL","permalink":"/ai-engineering-journey/digital-logic/10-pla-pal"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/digital-logic/09-memory.md


const frontMatter = {
	id: '09-memory',
	slug: '/digital-logic/09-memory',
	title: 'Chapter 9: Semiconductor Memory',
	sidebar_label: 'Chapter 9: Semiconductor Memory',
	sidebar_position: 9
};
const contentTitle = 'Chapter 9: Semiconductor Memory';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "9.1 Memory Taxonomy",
  "id": "91-memory-taxonomy",
  "level": 2
}, {
  "value": "9.2 SRAM ? Static Random Access Memory",
  "id": "92-sram--static-random-access-memory",
  "level": 2
}, {
  "value": "9.2.1 6T SRAM Cell",
  "id": "921-6t-sram-cell",
  "level": 3
}, {
  "value": "9.2.2 SRAM Array Architecture",
  "id": "922-sram-array-architecture",
  "level": 3
}, {
  "value": "9.2.3 Sense Amplifier",
  "id": "923-sense-amplifier",
  "level": 3
}, {
  "value": "9.3 DRAM ? Dynamic Random Access Memory",
  "id": "93-dram--dynamic-random-access-memory",
  "level": 2
}, {
  "value": "9.3.1 1T1C DRAM Cell",
  "id": "931-1t1c-dram-cell",
  "level": 3
}, {
  "value": "9.3.2 DRAM Timing",
  "id": "932-dram-timing",
  "level": 3
}, {
  "value": "9.3.3 DRAM Refresh",
  "id": "933-dram-refresh",
  "level": 3
}, {
  "value": "9.3.4 SDRAM and DDR",
  "id": "934-sdram-and-ddr",
  "level": 3
}, {
  "value": "9.4 Non-Volatile Memory",
  "id": "94-non-volatile-memory",
  "level": 2
}, {
  "value": "9.4.1 Mask ROM",
  "id": "941-mask-rom",
  "level": 3
}, {
  "value": "9.4.2 PROM, EPROM, EEPROM",
  "id": "942-prom-eprom-eeprom",
  "level": 3
}, {
  "value": "9.4.3 Flash Memory",
  "id": "943-flash-memory",
  "level": 3
}, {
  "value": "9.5 Address Decoding",
  "id": "95-address-decoding",
  "level": 2
}, {
  "value": "9.5.1 Single-Level (NAND) Decoder",
  "id": "951-single-level-nand-decoder",
  "level": 3
}, {
  "value": "9.5.2 Two-Level (Pre-) Decoder",
  "id": "952-two-level-pre--decoder",
  "level": 3
}, {
  "value": "9.6 Error Detection and Correction",
  "id": "96-error-detection-and-correction",
  "level": 2
}, {
  "value": "9.6.1 Parity",
  "id": "961-parity",
  "level": 3
}, {
  "value": "9.6.2 Hamming Code (SECDED)",
  "id": "962-hamming-code-secded",
  "level": 3
}, {
  "value": "9.7 Memory Hierarchy and Cache",
  "id": "97-memory-hierarchy-and-cache",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "TypeScript Implementations",
  "id": "typescript-implementations",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "chapter-9-semiconductor-memory",
        children: "Chapter 9: Semiconductor Memory"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Chapter 8 (Registers and Counters) ? registers are the fastest, smallest memory elements; this chapter extends storage to arrays of cells.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 10 (PLA and PAL) ? programmable logic is a structured form of memory-based logic implementation."]
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
        href: "../../assets/images/lessons/digital-logic/09-memory/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/09-memory/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/digital-logic/09-memory/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/09-memory/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/digital-logic/09-memory/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/09-memory/visual-explanation.png",
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
        children: "Classify semiconductor memory by volatility, access method, and technology"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyse the internal structure and operation of SRAM and DRAM cells"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design address decoders and sense amplifiers for memory arrays"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare ROM, PROM, EPROM, EEPROM, and Flash memory technologies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate memory timing parameters (access time, cycle time, bandwidth)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain error detection and correction using Hamming codes and SECDED"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design memory hierarchy and cache coherence mechanisms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate power consumption for different memory technologies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "91-memory-taxonomy",
      children: "9.1 Memory Taxonomy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    MEM[Semiconductor Memory] --> RAM[RAM<br>Random Access]\n    MEM --> ROM[ROM<br>Read Only]\n    RAM --> SRAM[SRAM<br>Static]\n    RAM --> DRAM[DRAM<br>Dynamic]\n    DRAM --> SDR[SDRAM]\n    DRAM --> DDR[DDR SDRAM]\n    ROM --> PROM[PROM<br>Programmable]\n    ROM --> EPROM[EPROM<br>UV Erasable]\n    ROM --> EEPROM[EEPROM<br>Electrically Erasable]\n    ROM --> FLASH[Flash<br>NOR / NAND]\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SRAM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DRAM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flash (NOR)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flash (NAND)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Volatile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cell size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 transistors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1T + 1C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 floating-gate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 floating-gate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Density"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (1?10 ns)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (50 ns)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (70 ns read)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very slow (?s read)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Refresh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (64 ms)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write endurance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "105?106 cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10??105 cycles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Power"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (standby)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero (non-volatile)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "92-sram--static-random-access-memory",
      children: "9.2 SRAM ? Static Random Access Memory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SRAM stores each bit in a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cross-coupled inverter pair"
      }), " ? a bistable latch that holds data as long as power is applied."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "921-6t-sram-cell",
      children: "9.2.1 6T SRAM Cell"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    WL[Word Line] --> M5\n    WL --> M6\n    BL[Bit Line] --> M5[T5<br>Access]\n    BLB[?Bit Line] --> M6[T6<br>Access]\n    M5 --> Q[Q]\n    M5 --> Qb[?Q]\n    M5 --> M1[T1<br>Pull-Up]\n    M1 --> VDD[VDD]\n    M1 --> M2[T2<br>Pull-Down]\n    M2 --> GND[GND]\n    M6 --> M3[T3<br>Pull-Up]\n    M6 --> M4[T4<br>Pull-Down]\n    M3 --> VDD\n    M4 --> GND\n    subgraph Cross-Coupled Inverters\n        Q\n        Qb\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Operation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standby:"
        }), " WL = 0, access transistors off. Cross-coupled inverters hold the state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read:"
        }), " Precharge BL = BLB = VDD/2. Assert WL = 1. The cell pulls one bit line low; a sense amplifier detects the voltage difference."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write:"
        }), " Drive BL and BLB to complementary values. Assert WL = 1. The access transistors overpower the latch."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class SRAM6T {\n    private Q: number = 0;\n    private Qb: number = 1;\n\n    read(wl: number): { bl: number; blb: number } {\n        if (wl === 1) {\n            return { bl: this.Q, blb: this.Qb };\n        }\n        return { bl: 0, blb: 0 };\n    }\n\n    write(wl: number, bl: number, blb: number): void {\n        if (wl === 1) {\n            this.Q = bl;\n            this.Qb = blb;\n        }\n    }\n\n    get state(): string { return `Q=${this.Q} ?Q=${this.Qb}`; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "922-sram-array-architecture",
      children: "9.2.2 SRAM Array Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    ADDR[Address] --> ROW[Row Decoder]\n    ROW --> ARRAY[Memory Cell Array<br>M rows ? N columns]\n    ADDR --> COL[Column Decoder]\n    COL --> MUX[Column MUX]\n    ARRAY --> SA[Sense Amplifiers]\n    SA --> MUX\n    MUX --> DOUT[Data Out]\n    DIN[Data In] --> WR[Write Drivers]\n    WR --> ARRAY\n    CS[Chip Select] --> CTRL[Control Logic]\n    WE[Write Enable] --> CTRL\n    OE[Output Enable] --> CTRL\n    CTRL --> ARRAY\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class SRAMArray {\n    private cells: SRAM6T[][];\n    readonly rows: number;\n    readonly cols: number;\n\n    constructor(rows: number, cols: number) {\n        this.rows = rows;\n        this.cols = cols;\n        this.cells = Array.from(\n            { length: rows },\n            () => Array.from({ length: cols }, () => new SRAM6T())\n        );\n    }\n\n    read(address: number): number {\n        const row = address % this.rows;\n        const col = Math.floor(address / this.rows) % this.cols;\n        const cell = this.cells[row][col];\n        const result = cell.read(1);\n        return result.bl;\n    }\n\n    write(address: number, data: number): void {\n        const row = address % this.rows;\n        const col = Math.floor(address / this.rows) % this.cols;\n        const cell = this.cells[row][col];\n        cell.write(1, data, 1 - data);\n    }\n}\n\n// 64-word SRAM (8?8 array)\nconst ram = new SRAMArray(8, 8);\nram.write(0b001001, 1); // address 9, data 1\nconsole.log(ram.read(0b001001)); // 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "923-sense-amplifier",
      children: "9.2.3 Sense Amplifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The sense amplifier detects the tiny voltage difference (50?200 mV) between bit lines during a read and amplifies it to full CMOS levels."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class SenseAmp {\n    sense(bl: number, blb: number): number {\n        const diff = bl - blb;\n        if (Math.abs(diff) < 0.05) return 0.5; // metastable\n        return diff > 0 ? 1 : 0;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "93-dram--dynamic-random-access-memory",
      children: "9.3 DRAM ? Dynamic Random Access Memory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DRAM stores each bit on a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "capacitor"
      }), " that leaks charge over time, requiring periodic refresh."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "931-1t1c-dram-cell",
      children: "9.3.1 1T1C DRAM Cell"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A single transistor + capacitor cell is the densest memory cell in use."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class DRAMCell {\n    private charge: number = 0; // 0 or VDD\n\n    read(wl: number): number {\n        if (wl === 1) {\n            const stored = this.charge;\n            this.charge = stored; // restore after destructive read\n            return stored;\n        }\n        return 0; // High-Z\n    }\n\n    write(wl: number, data: number): void {\n        if (wl === 1) {\n            this.charge = data;\n        }\n    }\n\n    refresh(): void {\n        // Must be called every 64 ms\n        // Charge leaks through the access transistor and subthreshold leakage\n    }\n\n    get isCharged(): boolean { return this.charge > 0.5; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "932-dram-timing",
      children: "9.3.2 DRAM Timing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "          --------\nRAS      ?        ?\n    -----+        +------------\n               --------\nCAS          ?        ?\n    ---------+        +-------\n               --------\nData Out     ?XXXXXXXX?\n    ---------+        +-------\n    ?? tRCD ??? tCAS ??\n    ??------- tRC ----------??\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface DRAMTiming {\n    tRCD: number; // RAS to CAS delay\n    tCAS: number; // CAS latency\n    tRP: number;  // RAS precharge\n    tRC: number;  // Row cycle time\n}\n\nconst ddr4_3200: DRAMTiming = {\n    tRCD: 13.75,   // ns\n    tCAS: 13.75,   // ns (CL = 22 at 1600 MHz)\n    tRP: 13.75,    // ns\n    tRC: 45        // ns\n};\n\nfunction accessTime(timing: DRAMTiming): number {\n    return timing.tRCD + timing.tCAS;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "933-dram-refresh",
      children: "9.3.3 DRAM Refresh"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every row must be refreshed every 64 ms. With 8192 rows, the refresh interval per row is 64 ms / 8192 ? 7.8 ?s."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class DRAMController {\n    private cells: DRAMCell[][];\n    readonly rows: number;\n    readonly cols: number;\n    private refreshRow: number = 0;\n    private cycleCount: number = 0;\n\n    constructor(rows: number, cols: number) {\n        this.rows = rows;\n        this.cols = cols;\n        this.cells = Array.from(\n            { length: rows },\n            () => Array.from({ length: cols }, () => new DRAMCell())\n        );\n    }\n\n    read(row: number, col: number): number {\n        return this.cells[row][col].read(1);\n    }\n\n    write(row: number, col: number, data: number): void {\n        this.cells[row][col].write(1, data);\n    }\n\n    tick(): void {\n        this.cycleCount++;\n        // Refresh one row every N cycles\n        const refreshInterval = Math.floor(64000000 / this.rows / 10); // ~ns per row\n        if (this.cycleCount % refreshInterval === 0) {\n            const row = this.refreshRow;\n            for (let c = 0; c < this.cols; c++) {\n                const data = this.cells[row][c].read(1);\n                this.cells[row][c].write(1, data); // restore\n            }\n            this.refreshRow = (this.refreshRow + 1) % this.rows;\n        }\n    }\n\n    get refreshOverhead(): number {\n        return (this.rows / 64000) * 100; // refresh cycles per 1000 ?s\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "934-sdram-and-ddr",
      children: "9.3.4 SDRAM and DDR"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Generation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "I/O Clock"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prefetch"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "VDD"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SDRAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100?133 MHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100?133 MT/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.3 V"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DDR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "133?200 MHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "266?400 MT/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.5 V"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DDR2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200?533 MHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400?1066 MT/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.8 V"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DDR3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400?800 MHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "800?1600 MT/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5 V"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DDR4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "800?1600 MHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1600?3200 MT/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.2 V"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DDR5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1600?3200 MHz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3200?6400 MT/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.1 V"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function dramBandwidth(dataRate: number, busWidth: number, channels: number): number {\n    return (dataRate * busWidth * channels) / 8; // bytes/second\n}\n\nconsole.log(`DDR4-3200 ? 64-bit ? 1 ch: ${dramBandwidth(3200, 64, 1)} MB/s`); // 25600\nconsole.log(`DDR5-6400 ? 64-bit ? 2 ch: ${dramBandwidth(6400, 64, 2)} MB/s`); // 102400\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "94-non-volatile-memory",
      children: "9.4 Non-Volatile Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "941-mask-rom",
      children: "9.4.1 Mask ROM"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data is programmed during chip fabrication using the via mask. Used for fixed lookup tables and boot code."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class MaskROM {\n    private data: number[];\n\n    constructor(data: number[]) {\n        this.data = data;\n    }\n\n    read(address: number): number {\n        return this.data[address] ?? 0;\n    }\n}\n\n// Fixed sine lookup table (8 entries)\nconst sineLUT = new MaskROM([\n    0, 128, 181, 128, 0, 128, 181, 128\n]);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "942-prom-eprom-eeprom",
      children: "9.4.2 PROM, EPROM, EEPROM"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PROM:"
        }), " One-time programmable fuses or anti-fuses"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "EPROM:"
        }), " UV-erasable floating-gate transistors; erased in bulk"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "EEPROM:"
        }), " Electrically erasable byte-by-byte; uses tunnel injection"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "943-flash-memory",
      children: "9.4.3 Flash Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Flash memory is the dominant non-volatile technology. Two main variants:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NOR Flash"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NAND Flash"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cell arrangement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serial string"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (70?100 ns)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (?s reads)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (ms)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (?s page writes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Erase granularity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block (64?128 KB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block (64?512 KB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Density"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low?Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mass storage"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class NANDFlash {\n    private pages: number[][];\n    readonly pageSize: number;\n    readonly pagesPerBlock: number;\n    private eraseCounts: number[];\n\n    constructor(numBlocks: number, pagesPerBlock: number, pageSize: number) {\n        this.pageSize = pageSize;\n        this.pagesPerBlock = pagesPerBlock;\n        this.pages = Array.from(\n            { length: numBlocks * pagesPerBlock },\n            () => Array(pageSize).fill(0xFF)\n        );\n        this.eraseCounts = Array(numBlocks).fill(0);\n    }\n\n    read(page: number, offset: number): number {\n        return this.pages[page][offset] ?? 0xFF;\n    }\n\n    program(page: number, data: number[]): void {\n        // NAND programming only clears bits (1?0)\n        for (let i = 0; i < Math.min(data.length, this.pageSize); i++) {\n            this.pages[page][i] &= data[i];\n        }\n    }\n\n    erase(block: number): void {\n        const start = block * this.pagesPerBlock;\n        const end = start + this.pagesPerBlock;\n        for (let p = start; p < end; p++) {\n            this.pages[p] = Array(this.pageSize).fill(0xFF);\n        }\n        this.eraseCounts[block]++;\n    }\n\n    get wearLevel(): number[] {\n        return this.eraseCounts;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "95-address-decoding",
      children: "9.5 Address Decoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The address decoder selects one word line from 2? address lines. Two architectures:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "951-single-level-nand-decoder",
      children: "9.5.1 Single-Level (NAND) Decoder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A single NAND gate per word line with N inputs and a buffer."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "WL? = ?(A0 = a0 ? A1 = a1 ? ... ? A??1 = a??1)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Area:"
      }), " O(N ? 2?) ? scales poorly beyond 8?10 bits."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "952-two-level-pre--decoder",
      children: "9.5.2 Two-Level (Pre-) Decoder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Split address bits into pre-decode groups, then combine."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class PreDecoder {\n    readonly rowBits: number;\n    readonly groupSize: number;\n\n    constructor(rowBits: number, groupSize: number = 3) {\n        this.rowBits = rowBits;\n        this.groupSize = groupSize;\n    }\n\n    decode(address: number): number {\n        // 2-level decode: pre-decode groups of groupSize bits\n        const groups = Math.ceil(this.rowBits / this.groupSize);\n        const predecode = new Array(groups);\n\n        for (let g = 0; g < groups; g++) {\n            const shift = g * this.groupSize;\n            const bits = (address >> shift) & ((1 << this.groupSize) - 1);\n            predecode[g] = 1 << bits;\n        }\n\n        // Second level: AND pre-decode signals\n        // Each word line is the AND of one signal from each group\n        let wordLine = 0;\n        for (let w = 0; w < (1 << this.rowBits); w++) {\n            let match = true;\n            for (let g = 0; g < groups; g++) {\n                const shift = g * this.groupSize;\n                const bit = (w >> shift) & ((1 << this.groupSize) - 1);\n                if (!(predecode[g] & (1 << bit))) {\n                    match = false;\n                    break;\n                }\n            }\n            if (match) wordLine = w;\n        }\n        return wordLine;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "96-error-detection-and-correction",
      children: "9.6 Error Detection and Correction"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "961-parity",
      children: "9.6.1 Parity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Single-bit parity detects an odd number of errors. Used in DRAM row-based protection."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "962-hamming-code-secded",
      children: "9.6.2 Hamming Code (SECDED)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Single Error Correct, Double Error Detect (SECDED)"
      }), " code adds log2(N) + 1 check bits to an N-bit word."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For 64-bit data: 7 check bits needed (27 = 64 + 7 + 1 ? 128 = 72)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class HammingCode {\n    readonly dataBits: number;\n    readonly checkBits: number;\n\n    constructor(dataBits: number) {\n        this.dataBits = dataBits;\n        // Find smallest k such that 2^k >= dataBits + k + 1\n        let k = 1;\n        while ((1 << k) < dataBits + k + 1) k++;\n        this.checkBits = k;\n    }\n\n    encode(data: bigint): bigint {\n        let codeword = 0n;\n        let dataIdx = 0n;\n        for (let i = 0n; i < BigInt(this.dataBits + this.checkBits); i++) {\n            const pos = 1n << i;\n            if (pos & (pos - 1n)) { // Not a power of 2 ? data position\n                const dataBit = (data >> dataIdx) & 1n;\n                if (dataBit) codeword |= (1n << i);\n                dataIdx++;\n            }\n        }\n\n        // Calculate parity bits\n        for (let i = 0n; i < BigInt(this.checkBits); i++) {\n            const parityPos = 1n << i;\n            let parity = 0n;\n            for (let j = parityPos; j < BigInt(this.dataBits + this.checkBits); j++) {\n                if (j & parityPos) {\n                    parity ^= (codeword >> j) & 1n;\n                }\n            }\n            if (parity) codeword |= (1n << i);\n        }\n        return codeword;\n    }\n\n    decode(codeword: bigint): { data: bigint; corrected: boolean; errorPos: number } {\n        let syndrome = 0n;\n        for (let i = 0n; i < BigInt(this.checkBits); i++) {\n            const parityPos = 1n << i;\n            let parity = 0n;\n            for (let j = parityPos; j < BigInt(this.dataBits + this.checkBits); j++) {\n                if (j & parityPos) {\n                    parity ^= (codeword >> j) & 1n;\n                }\n            }\n            if (parity) syndrome |= (1n << i);\n        }\n\n        if (syndrome === 0n) {\n            // No error\n            return { data: this.extractData(codeword), corrected: false, errorPos: -1 };\n        }\n\n        // Correct the error\n        const corrected = codeword ^ (1n << syndrome);\n        return { data: this.extractData(corrected), corrected: true, errorPos: Number(syndrome) };\n    }\n\n    private extractData(codeword: bigint): bigint {\n        let data = 0n;\n        let dataIdx = 0n;\n        for (let i = 0n; i < BigInt(this.dataBits + this.checkBits); i++) {\n            const pos = 1n << i;\n            if (pos & (pos - 1n)) { // Not a power of 2\n                const bit = (codeword >> i) & 1n;\n                if (bit) data |= (1n << dataIdx);\n                dataIdx++;\n            }\n        }\n        return data;\n    }\n}\n\nconst hamming = new HammingCode(4);\nconst encoded = hamming.encode(0b1011n);\nconsole.log(`Encoded: ${encoded.toString(2).padStart(7, '0')}`);\n\n// Introduce single-bit error\nconst withError = encoded ^ (1n << 3n);\nconst result = hamming.decode(withError);\nconsole.log(`Decoded: ${result.data.toString(2)} corrected=${result.corrected}`); // 1011\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "97-memory-hierarchy-and-cache",
      children: "9.7 Memory Hierarchy and Cache"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    CPU[CPU Core] --> L1[L1 Cache<br>32?64 KB<br>1?2 ns]\n    L1 --> L2[L2 Cache<br>256?512 KB<br>3?10 ns]\n    L2 --> L3[L3 Cache<br>2?32 MB<br>10?30 ns]\n    L3 --> RAM[Main Memory<br>4?128 GB<br>50?100 ns]\n    RAM --> SSD[SSD<br>100 GB?4 TB<br>10?100 ?s]\n    SSD --> HDD[HDD<br>500 GB?20 TB<br>5?15 ms]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class CacheLine {\n    readonly tag: number;\n    readonly data: number[];\n    valid: boolean = false;\n    dirty: boolean = false;\n\n    constructor(tag: number, wordsPerLine: number) {\n        this.tag = tag;\n        this.data = Array(wordsPerLine).fill(0);\n    }\n}\n\nclass DirectMappedCache {\n    private lines: CacheLine[];\n    readonly numLines: number;\n    readonly wordsPerLine: number;\n\n    constructor(numLines: number, wordsPerLine: number) {\n        this.numLines = numLines;\n        this.wordsPerLine = wordsPerLine;\n        this.lines = Array.from(\n            { length: numLines },\n            (_, i) => new CacheLine(0, wordsPerLine)\n        );\n    }\n\n    access(address: number): { hit: boolean; data?: number } {\n        const blockSize = this.wordsPerLine;\n        const blockAddr = Math.floor(address / blockSize);\n        const offset = address % blockSize;\n        const index = blockAddr % this.numLines;\n        const tag = Math.floor(blockAddr / this.numLines);\n\n        const line = this.lines[index];\n        if (line.valid && line.tag === tag) {\n            return { hit: true, data: line.data[offset] };\n        }\n        return { hit: false };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SRAM is fast but large (6T/cell)"
        }), " ? used for caches and registers; 1?10 ns access"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DRAM is dense but needs refresh"
        }), " ? 1T1C cell requires periodic refresh, ~50 ns access"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NAND Flash is the highest density non-volatile memory"
        }), " ? page-based read/write, block erase"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Address pre-decoders save area"
        }), " ? multi-level decoding reduces transistor count by orders of magnitude"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ECC is essential for modern memories"
        }), " ? SECDED Hamming codes protect DRAM and Flash from soft errors"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === SRAM Array (8x8) ===\nclass SRAM8x8 {\n    private cells: number[][] = Array.from({ length: 8 }, () => new Array(8).fill(0));\n    private rowDecoder(row: number): number { return 1 << row; }\n    write(row: number, col: number, data: number): void {\n        if (row < 8 && col < 8) this.cells[row][col] = data & 1;\n    }\n    read(row: number, col: number): number {\n        return row < 8 && col < 8 ? this.cells[row][col] : 0;\n    }\n    writeWord(row: number, data: number): void {\n        for (let i = 0; i < 8; i++) this.cells[row][i] = (data >> i) & 1;\n    }\n    readWord(row: number): number {\n        return this.cells[row].reduce((v, b, i) => v | (b << i), 0);\n    }\n}\n\n// === DRAM Controller ===\nclass DRAMController {\n    private cells: Map<number, number> = new Map();\n    private rowBuffer = new Map<number, number>();\n    private lastRow = -1;\n    private readonly tRCD = 3, tCAS = 2, tRP = 2;\n    private cycles = 0;\n\n    constructor(private rows: number, private cols: number) {}\n\n    read(row: number, col: number): number {\n        if (this.lastRow !== row) {\n            this.cycles += this.tRP + this.tRCD;\n            this.lastRow = row;\n        }\n        this.cycles += this.tCAS;\n        const addr = (row << 4) | col;\n        return this.cells.get(addr) ?? 0;\n    }\n\n    write(row: number, col: number, data: number): void {\n        if (this.lastRow !== row) {\n            this.cycles += this.tRP + this.tRCD;\n            this.lastRow = row;\n        }\n        this.cycles += this.tCAS;\n        this.cells.set((row << 4) | col, data & 0xFF);\n    }\n\n    refreshAll(): void { this.cycles += this.rows * 8; }\n    totalCycles(): number { return this.cycles; }\n}\n\n// === Hamming SECDED (64-bit data) ===\nclass HammingSECDED {\n    private readonly checkBits: number[][];\n\n    constructor(private dataBits = 64) {\n        this.checkBits = [];\n        let c = 0;\n        while ((1 << c) < dataBits + c + 1) c++;\n        for (let i = 0; i < dataBits; i++) {\n            const bits: number[] = [];\n            const pos = i + c + 1;\n            for (let j = 0; j < c; j++) if (pos & (1 << j)) bits.push(j);\n            this.checkBits.push(bits);\n        }\n    }\n\n    encode(data: bigint): { codeword: bigint; parity: number } {\n        let code = data;\n        const pbits: number[] = [];\n        for (let c = 0; c < this.checkBits[0]?.length ?? 0; c++) {\n            let p = 0;\n            for (let i = 0; i < this.dataBits; i++) {\n                if (this.checkBits[i]?.includes(c)) p ^= Number((data >> BigInt(i)) & BigInt(1));\n            }\n            pbits.push(p);\n        }\n        const totalParity = pbits.reduce((a, b) => a ^ b, 0) ^ data.toString(2).split('').reduce((a, c) => a ^ parseInt(c), 0);\n        return { codeword: code, parity: totalParity };\n    }\n}\n\n// === ROM-based Sine LUT ===\nclass SineLUT {\n    private table: number[];\n    constructor(entries = 256) {\n        this.table = Array.from({ length: entries }, (_, i) =>\n            Math.round(127 * Math.sin((2 * Math.PI * i) / entries) + 128));\n    }\n    lookup(index: number): number { return this.table[index % this.table.length]; }\n    maxError(): number {\n        const ideal = Array.from({ length: this.table.length }, (_, i) => 127 * Math.sin((2 * Math.PI * i) / this.table.length) + 128);\n        return Math.max(...this.table.map((v, i) => Math.abs(v - ideal[i])));\n    }\n}\n\n// === Cache Simulator (4-way set-associative) ===\nclass CacheSim {\n    private lines: { tag: number; valid: boolean; lru: number; data: number }[][];\n    constructor(private sets: number, private ways: number) {\n        this.lines = Array.from({ length: sets }, () =>\n            Array.from({ length: ways }, () => ({ tag: 0, valid: false, lru: 0, data: 0 })));\n    }\n    access(addr: number): { hit: boolean; data: number } {\n        const setIdx = addr % this.sets;\n        const tag = Math.floor(addr / this.sets);\n        const set = this.lines[setIdx];\n        const hit = set.find(l => l.valid && l.tag === tag);\n        if (hit) {\n            hit.lru = 0;\n            set.forEach(l => l.lru++);\n            return { hit: true, data: hit.data };\n        }\n        const lruWay = set.reduce((min, l, i) => l.lru > set[min].lru ? i : min, 0);\n        set[lruWay] = { tag, valid: true, lru: 0, data: addr };\n        set.forEach(l => l.lru++);\n        return { hit: false, data: addr };\n    }\n    hitRate(accesses: number[]): number {\n        const hits = accesses.filter(a => this.access(a).hit).length;\n        return hits / accesses.length;\n    }\n}\n\n// === Memory Power Model ===\nclass MemoryPowerModel {\n    static estimateSRAM(capacityKB: number, accessRateMHz: number, techNm: number): number {\n        const cellPower = 0.5 * (techNm / 45) * capacityKB;\n        const dynamicPower = cellPower * (accessRateMHz / 100);\n        return dynamicPower; // mW\n    }\n    static estimateDRAM(capacityMB: number, accessRateMHz: number, techNm: number): number {\n        const cellPower = 0.1 * (techNm / 45) * capacityMB;\n        const refreshPower = cellPower * 0.05 * accessRateMHz;\n        return cellPower + refreshPower; // mW\n    }\n}\n\n// === Demo ===\nconst sram = new SRAM8x8();\nsram.writeWord(0, 0b11001010);\nconsole.log(`SRAM read word[0]: ${sram.readWord(0).toString(2).padStart(8, '0')}`);\n\nconst drc = new DRAMController(64, 16);\ndrc.write(0, 0, 0x42);\nconsole.log(`DRAM read(0,0): ${drc.read(0, 0)} (${drc.totalCycles()} cycles)`);\n\nconst sl = new SineLUT(256);\nconsole.log(`Sine LUT max error: ${sl.maxError().toFixed(3)}`);\n\nconst hs = new HammingSECDED(64);\nconsole.log(`Hamming SECDED codeword bits: ${hs.encode(BigInt(0xDEADBEEF)).codeword.toString(16)}`);\n\nconst cache = new CacheSim(8, 4);\nconst addrs = [0, 4, 8, 12, 0, 16, 20, 4, 24, 8];\nconsole.log(`Cache hit rate: ${(cache.hitRate(addrs) * 100).toFixed(0)}%`);\n\nconsole.log(`SRAM 256KB @ 45nm power: ${MemoryPowerModel.estimateSRAM(256, 100, 45).toFixed(2)} mW`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// memory\n// boolean-circuits-sequential implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'memory', data: { topic: 'boolean-circuits-sequential' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// memory - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'digital-circuits demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'digital-logic', chapter: 'memory' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('digital-circuits'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Semiconductor memory spans a wide design space from the 6T SRAM cell through 1T1C DRAM to floating-gate Flash. SRAM provides the fastest access (1?10 ns) at the cost of density, while DRAM offers higher density with refresh overhead. Flash memory provides non-volatile storage at the cost of write speed and endurance limits. Address decoding, sense amplification, and error correction circuits are critical enablers. The next chapter explores programmable logic arrays and PALs ? structured logic that bridges memory and computation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " An SRAM cell uses how many transistors in its standard 6T configuration?\na) 4\nb) 6\nc) 8\nd) 2"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " DRAM requires refresh because:\na) The capacitor leaks charge\nb) The transistor gate leaks\nc) The sense amplifier needs resets\nd) The address decoder drifts"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " A SECDED Hamming code for 64 data bits requires how many check bits?\na) 6\nb) 7\nc) 8\nd) 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " NAND Flash is organised for access at the granularity of:\na) Bits\nb) Bytes\nc) Words\nd) Pages"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " The main advantage of address pre-decoding is:\na) Faster access\nb) Lower power\nc) Reduced area\nd) Higher density"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answers",
      children: "Answers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q1: b | Q2: a | Q3: b | Q4: d | Q5: c"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SRAM array:"
          }), " Design and implement an 8?8 SRAM array in TypeScript with row decoder, column multiplexer, and sense amplifier."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DRAM controller:"
          }), " Implement a DRAM controller with auto-refresh. The controller should handle read, write, and refresh cycles with appropriate arbitration."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hamming SECDED:"
          }), " Extend the Hamming code implementation to 64 data bits. Test with single-bit errors and double-bit errors (the latter should be flagged without correction)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "NAND Flash controller:"
          }), " Design a Flash translation layer (FTL) that maps logical block addresses to physical pages with wear leveling."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cache performance:"
          }), " Simulate a 4-way set-associative cache with LRU replacement for a stream of addresses. Measure the hit rate for different cache sizes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ROM-based LUT:"
          }), " Implement a sine wave generator using a 256-entry lookup table stored in ROM. Compute the worst-case error vs. an ideal sine."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DDR timing:"
          }), " Write a TypeScript function that computes the total memory access latency given DDR timing parameters (tRCD, tCAS, tRP, tRC) and a burst length of 8."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Error rate analysis:"
          }), " For a memory with 10??? soft error rate per bit, compute the probability of an uncorrectable error in a 64-bit word with SECDEC over 1 year of continuous operation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Memory power model:"
          }), " Create a power estimation model for SRAM and DRAM at a given capacity, access rate, and technology node. Compare the energy per access."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hybrid memory cube:"
          }), " Research and describe the architecture of a 3D-stacked memory like HBM or HMC. Explain how TSVs (through-silicon vias) improve bandwidth over traditional DDR."]
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