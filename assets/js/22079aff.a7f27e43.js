"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[94694],{

/***/ 40711
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_digital_logic_08_registers_counters_md_220_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-digital-logic-08-registers-counters-md-220.json
const site_docs_courses_digital_logic_08_registers_counters_md_220_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/digital-logic/08-registers-counters","title":"Chapter 8: Registers and Counters","description":"Prereq: Chapters 6?7 (Sequential Circuits, State Machines) ? registers and counters are specialised sequential structures.","source":"@site/docs/courses/digital-logic/08-registers-counters.md","sourceDirName":"courses/digital-logic","slug":"/digital-logic/08-registers-counters","permalink":"/ai-engineering-journey/digital-logic/08-registers-counters","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"08-registers-counters","slug":"/digital-logic/08-registers-counters","title":"Chapter 8: Registers and Counters","sidebar_label":"Chapter 8: Registers and Counters","sidebar_position":8},"sidebar":"coursesSidebar","previous":{"title":"Chapter 7: State Machines","permalink":"/ai-engineering-journey/digital-logic/07-state-machines"},"next":{"title":"Chapter 9: Semiconductor Memory","permalink":"/ai-engineering-journey/digital-logic/09-memory"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/digital-logic/08-registers-counters.md


const frontMatter = {
	id: '08-registers-counters',
	slug: '/digital-logic/08-registers-counters',
	title: 'Chapter 8: Registers and Counters',
	sidebar_label: 'Chapter 8: Registers and Counters',
	sidebar_position: 8
};
const contentTitle = 'Chapter 8: Registers and Counters';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "8.1 Register Architectures",
  "id": "81-register-architectures",
  "level": 2
}, {
  "value": "8.1.1 Register with Synchronous Clear and Load",
  "id": "811-register-with-synchronous-clear-and-load",
  "level": 3
}, {
  "value": "8.1.2 Bidirectional Shift Register",
  "id": "812-bidirectional-shift-register",
  "level": 3
}, {
  "value": "8.1.3 Barrel Shifter",
  "id": "813-barrel-shifter",
  "level": 3
}, {
  "value": "8.2 Advanced Counter Designs",
  "id": "82-advanced-counter-designs",
  "level": 2
}, {
  "value": "8.2.1 Modulo-N Counter",
  "id": "821-modulo-n-counter",
  "level": 3
}, {
  "value": "8.2.2 BCD Counter (Decade Counter)",
  "id": "822-bcd-counter-decade-counter",
  "level": 3
}, {
  "value": "8.2.3 Gray Code Counter",
  "id": "823-gray-code-counter",
  "level": 3
}, {
  "value": "8.2.4 Programmable Counter",
  "id": "824-programmable-counter",
  "level": 3
}, {
  "value": "8.3 Linear Feedback Shift Registers",
  "id": "83-linear-feedback-shift-registers",
  "level": 2
}, {
  "value": "8.3.1 Maximal-Length Polynomials",
  "id": "831-maximal-length-polynomials",
  "level": 3
}, {
  "value": "8.3.2 LFSR Applications",
  "id": "832-lfsr-applications",
  "level": 3
}, {
  "value": "8.4 Johnson Counter",
  "id": "84-johnson-counter",
  "level": 2
}, {
  "value": "8.4.1 Decoding Johnson Counter States",
  "id": "841-decoding-johnson-counter-states",
  "level": 3
}, {
  "value": "8.5 Frequency Dividers",
  "id": "85-frequency-dividers",
  "level": 2
}, {
  "value": "8.5.1 50% Duty Cycle Dividers",
  "id": "851-50-duty-cycle-dividers",
  "level": 3
}, {
  "value": "8.6 Performance Comparison",
  "id": "86-performance-comparison",
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
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "chapter-8-registers-and-counters",
        children: "Chapter 8: Registers and Counters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Chapters 6?7 (Sequential Circuits, State Machines) ? registers and counters are specialised sequential structures.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 9 (Memory) ? registers provide the smallest, fastest storage in the memory hierarchy."]
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
        href: "../../assets/images/lessons/digital-logic/08-registers-counters/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/08-registers-counters/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/digital-logic/08-registers-counters/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/08-registers-counters/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/digital-logic/08-registers-counters/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/08-registers-counters/visual-explanation.png",
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
        children: "Design and analyse parallel-load, shift, and universal registers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct synchronous and asynchronous binary counters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement decade, modulo-N, and programmable counters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyse trade-offs between ripple and synchronous counter topologies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design ring counters, Johnson counters, and LFSR sequence generators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply counters in frequency division, timing generation, and control applications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate counter performance in terms of speed, power, and area"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "81-register-architectures",
      children: "8.1 Register Architectures"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "register"
      }), " is an array of bistable elements sharing a common clock. While Chapter 6 introduced basic registers, this section covers advanced register architectures and applications."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "811-register-with-synchronous-clear-and-load",
      children: "8.1.1 Register with Synchronous Clear and Load"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class AdvancedRegister {\n    private flops: DFlipFlop[];\n    readonly width: number;\n\n    constructor(width: number) {\n        this.width = width;\n        this.flops = Array.from({ length: width }, () => new DFlipFlop());\n    }\n\n    get value(): number {\n        let val = 0;\n        for (let i = 0; i < this.width; i++) {\n            val |= (this.flops[i].Q << i);\n        }\n        return val;\n    }\n\n    operate(\n        data: number,\n        clr: number,  // synchronous clear (active high)\n        load: number, // parallel load enable\n        clk: number\n    ): void {\n        for (let i = 0; i < this.width; i++) {\n            let d: number;\n            if (clr === 1) d = 0;\n            else if (load === 1) d = (data >> i) & 1;\n            else d = this.flops[i].Q; // hold\n            this.flops[i].update(d, clk);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "812-bidirectional-shift-register",
      children: "8.1.2 Bidirectional Shift Register"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class BidirectionalShiftRegister {\n    private flops: DFlipFlop[];\n    readonly width: number;\n\n    constructor(width: number) {\n        this.width = width;\n        this.flops = Array.from({ length: width }, () => new DFlipFlop());\n    }\n\n    get value(): number {\n        let val = 0;\n        for (let i = 0; i < this.width; i++) {\n            val |= (this.flops[i].Q << i);\n        }\n        return val;\n    }\n\n    shift(dir: number, serialIn: number, clk: number): number {\n        // dir = 1 for right, 0 for left\n        const serialOut = dir === 1\n            ? this.flops[this.width - 1].Q\n            : this.flops[0].Q;\n\n        if (dir === 1) { // Shift right (MSB first)\n            for (let i = this.width - 1; i > 0; i--) {\n                this.flops[i].update(this.flops[i - 1].Q, clk);\n            }\n            this.flops[0].update(serialIn, clk);\n        } else { // Shift left (LSB first)\n            for (let i = 0; i < this.width - 1; i++) {\n                this.flops[i].update(this.flops[i + 1].Q, clk);\n            }\n            this.flops[this.width - 1].update(serialIn, clk);\n        }\n        return serialOut;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "813-barrel-shifter",
      children: "8.1.3 Barrel Shifter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A barrel shifter can shift or rotate an N-bit word by any number of positions in one clock cycle."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class BarrelShifter {\n    shift(data: number, amount: number, direction: 'left' | 'right', width: number): number {\n        const mask = (1 << width) - 1;\n        data &= mask;\n        amount %= width;\n\n        if (direction === 'left') {\n            return ((data << amount) | (data >> (width - amount))) & mask;\n        } else {\n            return ((data >> amount) | (data << (width - amount))) & mask;\n        }\n    }\n}\n\nconst bs = new BarrelShifter();\nconsole.log(bs.shift(0b0110, 2, 'left', 4).toString(2).padStart(4, '0')); // 1001\nconsole.log(bs.shift(0b0110, 1, 'right', 4).toString(2).padStart(4, '0')); // 0011\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hardware implementation:"
      }), " A barrel shifter is implemented as a crossbar switch or a multi-stage multiplexer tree. A 4-bit barrel shifter uses 4:1 multiplexers per output bit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    D0[D0] --> M0[4:1 MUX]\n    D1[D1] --> M0\n    D2[D2] --> M0\n    D3[D3] --> M0\n    S[Shift Amount] --> M0\n    M0 --> Y0[Y0]\n    D0 --> M1[4:1 MUX]\n    D1 --> M1\n    D2 --> M1\n    D3 --> M1\n    S --> M1\n    M1 --> Y1[Y1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "82-advanced-counter-designs",
      children: "8.2 Advanced Counter Designs"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "821-modulo-n-counter",
      children: "8.2.1 Modulo-N Counter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A modulo-N counter counts from 0 to N-1 and then wraps. When N ? 2?, the counter must detect the terminal count and reset."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ModNCounter {\n    private count: number = 0;\n    readonly modulus: number;\n\n    constructor(modulus: number) {\n        this.modulus = modulus;\n    }\n\n    tick(): number {\n        this.count = (this.count + 1) % this.modulus;\n        return this.count;\n    }\n\n    get value(): number { return this.count; }\n    get terminalCount(): boolean { return this.count === this.modulus - 1; }\n}\n\n// Mod-10 counter (BCD counter)\nconst bcdCounter = new ModNCounter(10);\nfor (let i = 0; i < 15; i++) {\n    console.log(`Tick ${i}: ${bcdCounter.tick()}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "822-bcd-counter-decade-counter",
      children: "8.2.2 BCD Counter (Decade Counter)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A BCD counter counts 0?9 and wraps. It requires 4 flip-flops but only 10 of 16 states are used."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class BCDCounter {\n    private flops: TFlipFlop[];\n\n    constructor() {\n        this.flops = Array.from({ length: 4 }, () => new TFlipFlop());\n    }\n\n    get value(): number {\n        let val = 0;\n        for (let i = 0; i < 4; i++) {\n            val |= (this.flops[i].Q << i);\n        }\n        return val;\n    }\n\n    tick(clk: number): void {\n        // T inputs for BCD counting 0?1?2?...?9?0\n        const Q = this.value;\n        const T0 = 1;  // always toggle\n        const T1 = Q & 1;  // toggle when Q0=1\n        const T2 = (Q & 0b11) === 0b11;  // toggle when Q1=Q0=1\n        const T3 = ((Q & 0b111) === 0b111) || ((Q & 0b0111) === 0b0101);\n        // When Q=1001 (9), T3=1 and T1=T2=0 so next state is 0000\n\n        this.flops[0].update(T0, clk);\n        this.flops[1].update(T1, clk);\n        this.flops[2].update(T2, clk);\n        this.flops[3].update(T3, clk);\n    }\n}\n\nconst bcd = new BCDCounter();\nfor (let i = 0; i < 16; i++) {\n    bcd.tick(1);\n    console.log(`BCD: ${bcd.value}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "823-gray-code-counter",
      children: "8.2.3 Gray Code Counter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gray code counters change only one bit per transition, minimising switching noise and power consumption."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    G0((000)) --> G1((001))\n    G1 --> G3((011))\n    G3 --> G2((010))\n    G2 --> G6((110))\n    G6 --> G7((111))\n    G7 --> G5((101))\n    G5 --> G4((100))\n    G4 --> G0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class GrayCounter {\n    private value: number = 0;\n    private binValue: number = 0;\n\n    tick(): number {\n        this.binValue = (this.binValue + 1) & 0xF;\n        this.value = this.binValue ^ (this.binValue >> 1);\n        return this.value;\n    }\n\n    get value(): number { return this.value; }\n}\n\nconst gray = new GrayCounter();\nfor (let i = 0; i < 8; i++) {\n    console.log(`Step ${i}: ${gray.tick().toString(2).padStart(4, '0')}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "824-programmable-counter",
      children: "8.2.4 Programmable Counter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A programmable counter loads a starting value and counts down (or up) to zero, asserting a terminal count flag."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ProgrammableCounter {\n    private value: number = 0;\n    private loaded: boolean = false;\n\n    load(data: number): void {\n        this.value = data;\n        this.loaded = true;\n    }\n\n    tick(): boolean {\n        if (!this.loaded) return false;\n        if (this.value === 0) return true; // terminal count\n        this.value--;\n        return this.value === 0;\n    }\n\n    get currentValue(): number { return this.value; }\n}\n\n// Divide-by-7 frequency divider\nconst prog = new ProgrammableCounter();\nprog.load(6); // counts 6,5,4,3,2,1,0 ? 7 cycles\nlet output = 0;\nfor (let cycle = 0; cycle < 20; cycle++) {\n    const tc = prog.tick();\n    if (tc) {\n        output ^= 1;\n        prog.load(6); // reload\n    }\n    console.log(`Cycle ${cycle}: count=${prog.currentValue}, out=${output}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "83-linear-feedback-shift-registers",
      children: "8.3 Linear Feedback Shift Registers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An LFSR generates a maximal-length pseudo-random sequence using a shift register with feedback from selected tap positions. LFSRs are used in PRNGs, CRC calculations, and built-in self-test (BIST)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    XOR[?] --> FF0[DFF0]\n    FF0 --> FF1[DFF1]\n    FF1 --> FF2[DFF2]\n    FF2 --> FF3[DFF3]\n    FF3 --> XOR\n    FF3 --> OUT[Output]\n    FF1 --> XOR\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class LFSR {\n    private state: number;\n    readonly width: number;\n    readonly taps: number[];\n\n    constructor(width: number, taps: number[], seed?: number) {\n        this.width = width;\n        this.taps = taps;\n        this.state = seed ?? 1; // seed must be non-zero\n    }\n\n    tick(): number {\n        let feedback = 0;\n        for (const tap of this.taps) {\n            feedback ^= (this.state >> tap) & 1;\n        }\n        this.state = ((this.state << 1) | feedback) & ((1 << this.width) - 1);\n        return this.state;\n    }\n\n    get currentState(): number { return this.state; }\n\n    // Generate a sequence and detect when it repeats (cycle length)\n    sequenceLength(): number {\n        const seen = new Set<number>();\n        let steps = 0;\n        while (!seen.has(this.state)) {\n            seen.add(this.state);\n            this.tick();\n            steps++;\n        }\n        return steps;\n    }\n}\n\n// 4-bit LFSR with polynomial x4 + x? + 1 (taps at positions 3 and 2)\nconst lfsr4 = new LFSR(4, [3, 2], 0b0001);\nconsole.log(`4-bit LFSR state sequence:`);\nfor (let i = 0; i < 18; i++) {\n    console.log(`  ${i}: ${lfsr4.currentState.toString(2).padStart(4, '0')}`);\n    lfsr4.tick();\n}\n\n// 8-bit LFSR with polynomial x8 + x6 + x5 + x4 + 1\nconst lfsr8 = new LFSR(8, [7, 5, 4, 3], 0b00000001);\nconsole.log(`8-bit LFSR cycle length: ${lfsr8.sequenceLength()}`); // 255 (maximal)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "831-maximal-length-polynomials",
      children: "8.3.1 Maximal-Length Polynomials"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Width"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Polynomial"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Taps (0-indexed)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cycle Length"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x? + x? + 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2, 1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x4 + x? + 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x5 + x? + 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4, 2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x6 + x5 + 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5, 4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "63"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x7 + x6 + 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[6, 5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "127"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x8 + x6 + x5 + x4 + 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[7, 5, 4, 3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "255"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x?6 + x?4 + x?? + x?? + 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[15, 13, 12, 10]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65535"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "832-lfsr-applications",
      children: "8.3.2 LFSR Applications"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class LFSR_PRNG {\n    private lfsr: LFSR;\n\n    constructor(seed?: number) {\n        this.lfsr = new LFSR(16, [15, 13, 12, 10], seed ?? 0xACE1);\n    }\n\n    next(): number {\n        for (let i = 0; i < 16; i++) this.lfsr.tick();\n        return this.lfsr.currentState;\n    }\n\n    // Generate a random integer in [0, max)\n    nextInt(max: number): number {\n        return this.next() % max;\n    }\n}\n\nclass CRC8 {\n    private state: number = 0;\n\n    update(byte: number): number {\n        this.state ^= byte;\n        for (let i = 0; i < 8; i++) {\n            if (this.state & 0x80) {\n                this.state = ((this.state << 1) ^ 0x07) & 0xFF;\n            } else {\n                this.state = (this.state << 1) & 0xFF;\n            }\n        }\n        return this.state;\n    }\n\n    get result(): number { return this.state; }\n}\n\nconst crc = new CRC8();\ncrc.update(0x41); // 'A'\ncrc.update(0x42); // 'B'\nconsole.log(`CRC-8 of \"AB\": ${crc.result.toString(16)}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "84-johnson-counter",
      children: "8.4 Johnson Counter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Johnson counter (twisted ring counter) complements the serial output and feeds it back, producing 2N unique states from N flip-flops."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    INV[NOT] --> FF0[DFF0]\n    FF0 --> FF1[DFF1]\n    FF1 --> FF2[DFF2]\n    FF2 --> FF3[DFF3]\n    FF3 --> INV\n    CLK --> FF0\n    CLK --> FF1\n    CLK --> FF2\n    CLK --> FF3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class JohnsonCounter {\n    private value: number = 0;\n    readonly width: number;\n\n    constructor(width: number) {\n        this.width = width;\n    }\n\n    tick(): number {\n        const msb = (this.value >> (this.width - 1)) & 1;\n        const feedback = (~msb) & 1;\n        this.value = ((this.value << 1) | feedback) & ((1 << this.width) - 1);\n        return this.value;\n    }\n\n    get currentValue(): number { return this.value; }\n}\n\nconst jc = new JohnsonCounter(4);\njc.tick(); // skip the all-zeros initial state\nfor (let i = 0; i < 8; i++) {\n    console.log(`Johnson ${i}: ${jc.currentValue.toString(2).padStart(4, '0')}`);\n    jc.tick();\n}\n// Output: 0001, 0011, 0111, 1111, 1110, 1100, 1000, 0000 (and repeats)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "841-decoding-johnson-counter-states",
      children: "8.4.1 Decoding Johnson Counter States"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each Johnson counter state requires a 2-input AND gate to decode (vs. N-input for a ring counter), saving significant logic."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "4-bit Johnson"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Decode Equation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?Q3??Q0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?Q3?Q0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?Q2?Q1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0111"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?Q1?Q2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1111"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q3?Q0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q3??Q0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q2??Q1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q1??Q2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "85-frequency-dividers",
      children: "8.5 Frequency Dividers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Counters are natural frequency dividers. A modulo-N counter divides the input frequency by N."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function frequencyDivider(inputFreq: number, outputFreq: number): number {\n    if (outputFreq === 0) return Infinity;\n    return Math.round(inputFreq / outputFreq);\n}\n\n// Generate a 1 Hz signal from a 50 MHz clock\nclass FDivider {\n    private count: number = 0;\n    readonly divisor: number;\n\n    constructor(divisor: number) {\n        this.divisor = divisor;\n    }\n\n    tick(): number {\n        this.count = (this.count + 1) % this.divisor;\n        return this.count === 0 ? 1 : 0;\n    }\n}\n\nconst divider = new FDivider(50_000_000); // 50 MHz ? 1 Hz\nlet outputPulse = 0;\nfor (let cycle = 0; cycle < 100_000_000; cycle++) {\n    const pulse = divider.tick();\n    if (pulse && outputPulse === 0) {\n        // Toggle output on each pulse\n        outputPulse ^= 1;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "851-50-duty-cycle-dividers",
      children: "8.5.1 50% Duty Cycle Dividers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For even divisors, the output toggles at half the divisor count, producing a perfect 50% duty cycle."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class DutyCycleDivider {\n    private count: number = 0;\n    readonly halfDivisor: number;\n\n    constructor(divisor: number) {\n        this.halfDivisor = divisor / 2;\n    }\n\n    tick(): number {\n        this.count = (this.count + 1) % (this.halfDivisor * 2);\n        return this.count < this.halfDivisor ? 0 : 1;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "86-performance-comparison",
      children: "8.6 Performance Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Counter Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max Freq"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flip-Flops"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Logic Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Power"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Glitch-Free"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ripple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N?) AND gates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LFSR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) XOR gates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Johnson"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use LFSRs for PRNGs"
        }), " ? they produce maximal-length pseudo-random sequences with minimal hardware"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binary counters are area-efficient"
        }), " ? for datapath applications where the count value matters"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gray code counters reduce power"
        }), " ? single-bit transitions minimise switching activity in clock domain crossings"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Johnson counters simplify decoding"
        }), " ? 2-input AND gates replace N-input gates for state decoding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Programmable counters provide flexibility"
        }), " ? software-configurable division ratios without changing hardware"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Universal Shift Register (4-bit) ===\nclass UniversalShiftRegister {\n    private data = 0;\n    constructor(private bits = 4) {}\n    load(value: number): void { this.data = value & ((1 << this.bits) - 1); }\n    shiftLeft(serialIn = 0): void { this.data = ((this.data << 1) | serialIn) & ((1 << this.bits) - 1); }\n    shiftRight(serialIn = 0): void { this.data = (this.data >> 1) | (serialIn << (this.bits - 1)); }\n    hold(): void {}\n    read(): number { return this.data; }\n    operate(mode: number, serialIn: number, parallelIn?: number): number {\n        switch (mode) {\n            case 0: this.hold(); break;\n            case 1: this.shiftLeft(serialIn); break;\n            case 2: this.shiftRight(serialIn); break;\n            case 3: if (parallelIn !== undefined) this.load(parallelIn); break;\n        }\n        return this.read();\n    }\n}\n\n// === Barrel Shifter (8-bit) ===\nclass BarrelShifter {\n    shiftLeft(value: number, amount: number, bits = 8): number {\n        return ((value << amount) | (value >> (bits - amount))) & ((1 << bits) - 1);\n    }\n    shiftRight(value: number, amount: number, bits = 8): number {\n        return (value >> amount) | ((value << (bits - amount)) & ((1 << bits) - 1));\n    }\n    rotate(value: number, amount: number, bits = 8): number {\n        amount = ((amount % bits) + bits) % bits;\n        return this.shiftLeft(value, amount, bits);\n    }\n}\n\n// === Ripple Counter ===\nclass RippleCounter {\n    private flops: number[] = [];\n    constructor(private stages: number) { this.flops = new Array(stages).fill(0); }\n    tick(): number[] {\n        let toggle = 1;\n        for (let i = 0; i < this.stages; i++) {\n            if (toggle) { this.flops[i] ^= 1; toggle = this.flops[i] === 0 ? 1 : 0; }\n            else break;\n        }\n        return [...this.flops];\n    }\n    value(): number { return this.flops.reduce((v, f, i) => v | (f << i), 0); }\n}\n\n// === Synchronous Counter ===\nclass SyncCounter {\n    private count = 0;\n    constructor(private modulus: number) {}\n    tick(enable = true, load?: number): number {\n        if (load !== undefined) this.count = load & (this.modulus - 1);\n        else if (enable) this.count = (this.count + 1) % this.modulus;\n        return this.count;\n    }\n}\n\n// === BCD Counter ===\nclass BCDCounter {\n    private count = 0;\n    tick(): { value: number; carry: number } {\n        this.count = (this.count + 1) % 10;\n        return { value: this.count, carry: this.count === 0 ? 1 : 0 };\n    }\n}\n\n// === Johnson Counter ===\nclass JohnsonCounter {\n    private state = 0;\n    constructor(private stages: number) { this.state = 0; }\n    tick(): number {\n        const lsb = ~(this.state >> (this.stages - 1)) & 1;\n        this.state = ((this.state << 1) | lsb) & ((1 << this.stages) - 1);\n        return this.state;\n    }\n    value(): string { return this.state.toString(2).padStart(this.stages, '0'); }\n}\n\n// === LFSR (Maximal Length) ===\nclass LFSR {\n    private state: number;\n    constructor(private bits: number, private taps: number[], seed = 1) {\n        this.state = seed & ((1 << bits) - 1);\n        if (this.state === 0) this.state = 1;\n    }\n    next(): number {\n        const feedback = this.taps.reduce((xor, t) => xor ^ ((this.state >> (t - 1)) & 1), 0);\n        this.state = ((this.state << 1) | feedback) & ((1 << this.bits) - 1);\n        return this.state;\n    }\n    sequence(): number[] {\n        const seen = new Set<number>();\n        const seq: number[] = [];\n        while (!seen.has(this.state)) {\n            seen.add(this.state);\n            seq.push(this.state);\n            this.next();\n        }\n        return seq;\n    }\n}\n\n// === Programmable Divider ===\nclass ProgDivider {\n    private count = 0;\n    constructor(private divisor: number) {}\n    tick(): number {\n        this.count = (this.count + 1) % this.divisor;\n        return this.count === 0 ? 1 : 0;\n    }\n}\n\n// === PWM Generator ===\nclass PWMGenerator {\n    private counter = 0;\n    constructor(private period: number, private dutyCycle: number) {}\n    tick(): number {\n        this.counter = (this.counter + 1) % this.period;\n        return this.counter < this.dutyCycle ? 1 : 0;\n    }\n    setDuty(percent: number): void { this.dutyCycle = Math.floor((percent / 100) * this.period); }\n}\n\n// === CRC-16-CCITT Generator ===\nclass CRC16 {\n    compute(data: number[], poly = 0x1021): number {\n        let crc = 0xFFFF;\n        for (const byte of data) {\n            crc ^= (byte << 8);\n            for (let i = 0; i < 8; i++) {\n                if (crc & 0x8000) crc = (crc << 1) ^ poly;\n                else crc <<= 1;\n                crc &= 0xFFFF;\n            }\n        }\n        return crc ^ 0xFFFF;\n    }\n    verify(data: number[], crc: number, poly = 0x1021): boolean {\n        return this.compute(data, poly) === crc;\n    }\n}\n\n// === Ring Counter ===\nclass RingCounter {\n    private state: number;\n    constructor(private stages: number) { this.state = 1; }\n    tick(): number {\n        this.state = ((this.state << 1) | (this.state >> (this.stages - 1))) & ((1 << this.stages) - 1);\n        return this.state;\n    }\n    value(): string { return this.state.toString(2).padStart(this.stages, '0'); }\n}\n\n// === Demo ===\nconst usr = new UniversalShiftRegister();\nconsole.log(`Load 0b1011: ${usr.operate(3, 0, 0b1011).toString(2).padStart(4, '0')}`);\nconsole.log(`Shift left(1): ${usr.operate(1, 1).toString(2).padStart(4, '0')}`);\nconsole.log(`Shift right(0): ${usr.operate(2, 0).toString(2).padStart(4, '0')}`);\n\nconst rc = new RippleCounter(4);\nconsole.log('\\nRipple Counter (8 ticks):');\nfor (let i = 0; i < 8; i++) { rc.tick(); process.stdout.write(`${rc.value()} `); }\n\nconst lfsr = new LFSR(5, [5, 2]);\nconsole.log(`\\n\\nLFSR(5,x^5+x^2+1) sequence length: ${lfsr.sequence().length}`);\n\nconst bcd = new BCDCounter();\nconsole.log('\\nBCD Counter (15 ticks):');\nfor (let i = 0; i < 15; i++) process.stdout.write(`${bcd.tick().value} `);\n\nconst jc = new JohnsonCounter(4);\nconsole.log('\\n\\nJohnson Counter (10 ticks):');\nfor (let i = 0; i < 10; i++) { console.log(`  ${jc.tick().toString(2).padStart(4, '0')}`); }\n\nconst crc = new CRC16();\nconst data = [0x48, 0x65, 0x6C, 0x6C, 0x6F];\nconst c = crc.compute(data);\nconsole.log(`\\nCRC-16 of [Hello]: 0x${c.toString(16).toUpperCase()}`);\nconsole.log(`Verify: ${crc.verify(data, c)}`);\n\nconst pwm = new PWMGenerator(100, 30);\nconsole.log(`\\nPWM duty 30%: ${Array.from({ length: 20 }, () => pwm.tick()).join('')}`);\n\nconst barrel = new BarrelShifter();\nconsole.log(`Barrel shift 0xF0 << 3: ${barrel.shiftLeft(0xF0, 3).toString(16)}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// registers counters\n// boolean-circuits-sequential implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'registers counters', data: { topic: 'boolean-circuits-sequential' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// registers counters - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'digital-circuits demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'digital-logic', chapter: 'registers counters' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('digital-circuits'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Registers and counters are the workhorses of sequential digital systems. This chapter covered advanced register architectures (universal shift registers, barrel shifters), a range of counter designs (BCD, Gray, programmable, Johnson, LFSR), and their applications in frequency division, sequence generation, and timing control. The LFSR in particular is a versatile building block for PRNGs, CRCs, and BIST. The next chapter moves to larger-scale storage ? semiconductor memory architectures."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " An N-bit Johnson counter produces how many unique states?\na) N\nb) 2N\nc) 2?\nd) N?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What is the cycle length of a maximal-length 5-bit LFSR?\na) 5\nb) 31\nc) 32\nd) 25"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " A barrel shifter shifts data by:\na) 1 bit per clock cycle\nb) Any number of bits in one cycle\nc) N bits in N cycles\nd) Only one direction"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " A BCD counter has a modulus of:\na) 10\nb) 16\nc) 8\nd) 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " The main advantage of a synchronous counter over a ripple counter is:\na) Lower power\nb) Fewer flip-flops\nc) Higher maximum clock frequency\nd) Lower cost"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answers",
      children: "Answers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q1: b | Q2: b | Q3: b | Q4: a | Q5: c"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Universal register:"
          }), " Implement a 4-bit universal shift register with hold, shift-left, shift-right, and parallel-load modes. Verify through simulation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "LFSR sequence analysis:"
          }), " For a 5-bit LFSR with polynomial x5 + x? + 1, generate the full state sequence and verify it is maximal length (31 states, excluding 0)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Modulo-60 counter:"
          }), " Design a cascaded counter (mod-10 + mod-6) that counts from 0 to 59. Implement the two-counter cascade in TypeScript."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Barrel shifter design:"
          }), " Implement an 8-bit barrel shifter in TypeScript. Count the number of 2:1 and 4:1 multiplexers required for the hardware implementation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Frequency synthesis:"
          }), " Design a programmable frequency divider that can generate any output frequency from 1 Hz to 10 MHz from a 50 MHz input clock."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CRC generator:"
          }), " Implement a CRC-16-CCITT generator using LFSR principles. Compute the CRC for a test packet and verify against a known-good implementation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Ring vs Johnson counter:"
          }), " Implement both a 4-bit ring counter and a 4-bit Johnson counter. Compare their state sequences, decoding requirements, and fault tolerance."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Counter-based PWM:"
          }), " Design a pulse-width modulator using a programmable counter. The duty cycle should be adjustable from 0% to 100% in 10% steps."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Parallel-to-serial converter:"
          }), " Design a circuit that loads an 8-bit word in parallel and shifts it out serially at a higher clock rate. Include a \"data valid\" strobe."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dual-modulus prescaler:"
          }), " Implement a divide-by-128/129 dual-modulus prescaler used in PLL frequency synthesisers. Explain how it achieves fractional-N division."]
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