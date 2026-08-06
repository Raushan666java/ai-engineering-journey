"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[30999],{

/***/ 8942
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_digital_logic_10_pla_pal_md_4c3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-digital-logic-10-pla-pal-md-4c3.json
const site_docs_courses_digital_logic_10_pla_pal_md_4c3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/digital-logic/10-pla-pal","title":"Chapter 10: Programmable Logic ? PLA and PAL","description":"Prereq: Chapter 4 (Karnaugh Maps) and Chapter 5 (Combinational Circuits) ? programmable logic implements sum-of-products expressions.","source":"@site/docs/courses/digital-logic/10-pla-pal.md","sourceDirName":"courses/digital-logic","slug":"/digital-logic/10-pla-pal","permalink":"/ai-engineering-journey/digital-logic/10-pla-pal","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"10-pla-pal","slug":"/digital-logic/10-pla-pal","title":"Chapter 10: Programmable Logic ? PLA and PAL","sidebar_label":"Chapter 10: Programmable Logic ? PLA and PAL","sidebar_position":10},"sidebar":"coursesSidebar","previous":{"title":"Chapter 9: Semiconductor Memory","permalink":"/ai-engineering-journey/digital-logic/09-memory"},"next":{"title":"Chapter 11: Arithmetic Circuits","permalink":"/ai-engineering-journey/digital-logic/11-arithmetic-circuits"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/digital-logic/10-pla-pal.md


const frontMatter = {
	id: '10-pla-pal',
	slug: '/digital-logic/10-pla-pal',
	title: 'Chapter 10: Programmable Logic ? PLA and PAL',
	sidebar_label: 'Chapter 10: Programmable Logic ? PLA and PAL',
	sidebar_position: 10
};
const contentTitle = 'Chapter 10: Programmable Logic ? PLA and PAL';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "10.1 Evolution of Programmable Logic",
  "id": "101-evolution-of-programmable-logic",
  "level": 2
}, {
  "value": "10.2 PROM-Based Logic",
  "id": "102-prom-based-logic",
  "level": 2
}, {
  "value": "10.3 Programmable Logic Array (PLA)",
  "id": "103-programmable-logic-array-pla",
  "level": 2
}, {
  "value": "10.3.1 PLA Structure",
  "id": "1031-pla-structure",
  "level": 3
}, {
  "value": "10.3.2 PLA Minimisation",
  "id": "1032-pla-minimisation",
  "level": 3
}, {
  "value": "10.4 Programmable Array Logic (PAL)",
  "id": "104-programmable-array-logic-pal",
  "level": 2
}, {
  "value": "10.4.1 PAL Architecture",
  "id": "1041-pal-architecture",
  "level": 3
}, {
  "value": "10.4.2 PAL vs PLA Comparison",
  "id": "1042-pal-vs-pla-comparison",
  "level": 3
}, {
  "value": "10.4.3 Registered PAL Outputs",
  "id": "1043-registered-pal-outputs",
  "level": 3
}, {
  "value": "10.5 Complex PLDs (CPLDs)",
  "id": "105-complex-plds-cplds",
  "level": 2
}, {
  "value": "10.6 FPGAs ? Field Programmable Gate Arrays",
  "id": "106-fpgas--field-programmable-gate-arrays",
  "level": 2
}, {
  "value": "10.6.1 LUT-Based Logic",
  "id": "1061-lut-based-logic",
  "level": 3
}, {
  "value": "10.6.2 FPGA Slice Architecture",
  "id": "1062-fpga-slice-architecture",
  "level": 3
}, {
  "value": "10.6.3 FPGA Routing",
  "id": "1063-fpga-routing",
  "level": 3
}, {
  "value": "10.7 Implementing State Machines in PLDs",
  "id": "107-implementing-state-machines-in-plds",
  "level": 2
}, {
  "value": "10.7.1 One-Hot Encoding in FPGAs",
  "id": "1071-one-hot-encoding-in-fpgas",
  "level": 3
}, {
  "value": "10.8 Technology Comparison",
  "id": "108-technology-comparison",
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
        id: "chapter-10-programmable-logic--pla-and-pal",
        children: "Chapter 10: Programmable Logic ? PLA and PAL"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Chapter 4 (Karnaugh Maps) and Chapter 5 (Combinational Circuits) ? programmable logic implements sum-of-products expressions.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 11 (Arithmetic Circuits) ? arithmetic building blocks often use PLD structures for control logic."]
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
        href: "../../assets/images/lessons/digital-logic/10-pla-pal/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/10-pla-pal/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/digital-logic/10-pla-pal/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/10-pla-pal/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/digital-logic/10-pla-pal/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/10-pla-pal/visual-explanation.png",
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
        children: "Distinguish between PROM, PLA, PAL, and CPLD/FPGA architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and program a PLA for arbitrary combinational logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyse the trade-offs between PAL (fixed OR) and PLA (programmable OR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement state machines using programmable logic devices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate logic capacity, speed, and power for different PLD families"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare ISP (in-system programmable) vs. one-time programmable devices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Translate Boolean equations into PLA/PAL fuse patterns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "101-evolution-of-programmable-logic",
      children: "10.1 Evolution of Programmable Logic"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    subgraph \"Early 1970s\"\n        PROM[PROM<br>Fixed AND, Programmable OR]\n    end\n    subgraph \"Mid 1970s\"\n        PLA[PLA<br>Programmable AND + OR]\n    end\n    subgraph \"Late 1970s\"\n        PAL[PAL<br>Programmable AND, Fixed OR]\n    end\n    subgraph \"1980s\"\n        GAL[GAL<br>Reprogrammable PAL]\n        CPLD[CPLD<br>Multiple PAL blocks]\n    end\n    subgraph \"1985?present\"\n        FPGA[FPGA<br>LUT-based, SRAM config]\n    end\n    PROM --> PLA --> PAL\n    PAL --> GAL\n    PAL --> CPLD --> FPGA\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "102-prom-based-logic",
      children: "10.2 PROM-Based Logic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A PROM (programmable read-only memory) can implement any combinational function. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "address lines"
      }), " serve as inputs, and the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "data lines"
      }), " serve as outputs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "An n-input, m-output PROM = AND array (fixed) + OR array (programmable)\n    = n:2n decoder + m OR gates\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    A0[A0] --> DEC[2n ? n<br>Decoder]\n    A1[A1] --> DEC\n    A2[A2] --> DEC\n    DEC --> W0[Word 0]\n    DEC --> W1[Word 1]\n    DEC --> Wn[Word 2n??]\n    W0 --> OR1[OR1]\n    W1 --> OR1\n    W0 --> OR2[OR2]\n    Wn --> OR1\n    Wn --> OR2\n    OR1 --> Y0[Y0]\n    OR2 --> Y1[Y1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class PROM {\n    private words: number[];\n    readonly addressBits: number;\n    readonly dataBits: number;\n\n    constructor(addressBits: number, dataBits: number) {\n        this.addressBits = addressBits;\n        this.dataBits = dataBits;\n        this.words = Array(1 << addressBits).fill(0);\n    }\n\n    program(address: number, data: number): void {\n        this.words[address] = data & ((1 << this.dataBits) - 1);\n    }\n\n    read(address: number): number {\n        return this.words[address] ?? 0;\n    }\n\n    // Implement F(A,B,C) = Sm(1,3,5,6) using PROM\n    static implementFunction(addr: number): number {\n        const truthTable: number[] = [\n            0b00, // 000 ? 0\n            0b01, // 001 ? 1\n            0b00, // 010 ? 0\n            0b01, // 011 ? 1\n            0b00, // 100 ? 0\n            0b01, // 101 ? 1\n            0b10, // 110 ? 1 (bit 1)\n            0b00  // 111 ? 0\n        ];\n        return truthTable[addr] ?? 0;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Limitation:"
      }), " A PROM uses a full decoder ? it allocates one word line for every minterm, even for don't-care conditions. A 16-input function needs 2?6 = 65,536 word lines, most unused."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "103-programmable-logic-array-pla",
      children: "10.3 Programmable Logic Array (PLA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A PLA has both a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "programmable AND array"
      }), " and a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "programmable OR array"
      }), ", sharing product terms across multiple outputs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"AND Array (Programmable)\"\n        A0[A0] --> AND1[&]\n        A0N[?A0] --> AND1\n        A1[A1] --> AND1\n        A1N[?A1] --> AND1\n        A1 --> AND2[&]\n        A1N --> AND2\n        AND1 --> P1[P1 = A0?A1]\n        AND2 --> P2[P2 = ?A1]\n    end\n    subgraph \"OR Array (Programmable)\"\n        P1 --> OR1[=1]\n        P2 --> OR1\n        P1 --> OR2[=1]\n        AND1 --> OR2\n        OR1 --> Y0[Y0]\n        OR2 --> Y1[Y1]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1031-pla-structure",
      children: "10.3.1 PLA Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input buffers:"
        }), " generate true and complement of each input"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AND array:"
        }), " each product term connects to any input (or its complement) via programmable connections"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OR array:"
        }), " each output sums selected product terms"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class PLA {\n    private productTerms: number[][]; // each term: [inputMask, outputMask]\n    readonly numInputs: number;\n    readonly numOutputs: number;\n    readonly numTerms: number;\n\n    constructor(numInputs: number, numOutputs: number, numTerms: number) {\n        this.numInputs = numInputs;\n        this.numOutputs = numOutputs;\n        this.numTerms = numTerms;\n        this.productTerms = [];\n    }\n\n    // Program a product term\n    // inputMask: bit = 1 ? true, 0 ? complement, X ? don't connect\n    //   For each input bit: 2 bits: [true, complement]\n    //   true=1, comp=1, neither=don't care\n    addTerm(inputMask: number[], outputMask: number[]): void {\n        // inputMask[i] = 1 for true, 0 for complement, -1 for don't care\n        const encodedInput = inputMask.map(m => m === 1 ? 0b10 : m === 0 ? 0b01 : 0b00);\n        const encodedOutput = outputMask.reduce((acc, b, i) => acc | (b << i), 0);\n        this.productTerms.push([...encodedInput, encodedOutput]);\n    }\n\n    evaluate(inputs: number[]): number[] {\n        const outputs = Array(this.numOutputs).fill(0);\n\n        for (const term of this.productTerms) {\n            let termActive = true;\n            const encodedInput = term.slice(0, this.numInputs);\n            const outputMask = term[this.numInputs];\n\n            for (let i = 0; i < this.numInputs; i++) {\n                const inputVal = inputs[i];\n                const trueBit = (encodedInput[i] >> 1) & 1;\n                const compBit = encodedInput[i] & 1;\n\n                if (trueBit && compBit) continue; // don't care\n                if (trueBit && inputVal !== 1) { termActive = false; break; }\n                if (compBit && inputVal !== 0) { termActive = false; break; }\n            }\n\n            if (termActive) {\n                for (let o = 0; o < this.numOutputs; o++) {\n                    if ((outputMask >> o) & 1) outputs[o] = 1;\n                }\n            }\n        }\n        return outputs;\n    }\n\n    // Implement a full adder using PLA\n    static fullAdderPLA(): PLA {\n        const pla = new PLA(3, 2, 7); // 3 inputs, 2 outputs, 7 product terms\n\n        // Sum = Sm(1,2,4,7)\n        pla.addTerm([1, 0, 0], [1, 0]); // A??B??C\n        pla.addTerm([0, 1, 0], [1, 0]); // ?A?B??C\n        pla.addTerm([0, 0, 1], [1, 0]); // ?A??B?C\n        pla.addTerm([1, 1, 1], [1, 0]); // A?B?C\n\n        // Cout = Sm(3,5,6,7)\n        pla.addTerm([1, 1, -1], [0, 1]); // A?B\n        pla.addTerm([1, -1, 1], [0, 1]); // A?C\n        pla.addTerm([-1, 1, 1], [0, 1]); // B?C\n\n        return pla;\n    }\n}\n\n// Verify full adder PLA\nconst faPLA = PLA.fullAdderPLA();\nfor (let i = 0; i < 8; i++) {\n    const inputs = [(i >> 2) & 1, (i >> 1) & 1, i & 1];\n    const outputs = faPLA.evaluate(inputs);\n    console.log(`A=${inputs[0]} B=${inputs[1]} Cin=${inputs[2]} ? Sum=${outputs[0]} Cout=${outputs[1]}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1032-pla-minimisation",
      children: "10.3.2 PLA Minimisation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Minimising the number of product terms is critical for PLA area efficiency:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function minimisePLA(truthTable: number[][], numInputs: number): number[][] {\n    // Combine adjacent minterms using the uniting theorem\n    // A?B?C + A?B??C = A?B (C eliminated)\n    const terms: number[][] = [];\n    let current = truthTable.map(row => [...row]);\n\n    let changed = true;\n    while (changed) {\n        changed = false;\n        const next: number[][] = [];\n        const used = new Array(current.length).fill(false);\n\n        for (let i = 0; i < current.length; i++) {\n            for (let j = i + 1; j < current.length; j++) {\n                const diff = current[i].map((v, k) => v !== current[j][k] ? k : -1)\n                    .filter(k => k >= 0 && k < numInputs);\n                if (diff.length === 1) {\n                    // Adjacent ? merge\n                    const merged = [...current[i]];\n                    merged[diff[0]] = -1; // don't care\n                    next.push(merged);\n                    used[i] = used[j] = true;\n                    changed = true;\n                }\n            }\n        }\n\n        // Add remaining uncombined terms\n        for (let i = 0; i < current.length; i++) {\n            if (!used[i]) next.push(current[i]);\n        }\n\n        // Deduplicate\n        const unique = new Set(next.map(t => t.join(',')));\n        current = Array.from(unique).map(s => s.split(',').map(Number));\n    }\n\n    return current;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "104-programmable-array-logic-pal",
      children: "10.4 Programmable Array Logic (PAL)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A PAL has a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "programmable AND array"
      }), " but a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "fixed OR array"
      }), ". Each output has a fixed set of product terms (typically 4?8)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    A0[A0] --> AND1[&]\n    A0N[?A0] --> AND1\n    A1[A1] --> AND1\n    AND1 --> OR1[=1<br>Fixed 4-input]\n    A0 --> AND2[&]\n    A1N[?A1] --> AND2\n    AND2 --> OR1\n    OR1 --> Y0[Y0<br>Registered or Combinational]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1041-pal-architecture",
      children: "10.4.1 PAL Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class PAL {\n    private andArray: number[][][]; // [output][productTerm][inputConnect]\n    readonly numInputs: number;\n    readonly numOutputs: number;\n    readonly termsPerOutput: number;\n\n    constructor(numInputs: number, numOutputs: number, termsPerOutput: number) {\n        this.numInputs = numInputs;\n        this.numOutputs = numOutputs;\n        this.termsPerOutput = termsPerOutput;\n        // Initialize: all connections present (fuse intact)\n        this.andArray = Array.from(\n            { length: numOutputs },\n            () => Array.from(\n                { length: termsPerOutput },\n                () => Array(numInputs * 2).fill(1) // true + complement per input\n            )\n        );\n    }\n\n    // Blow fuse: disconnect input from product term\n    // inputIdx: 0..numInputs-1, polarity: 0=true, 1=complement\n    disconnectFuse(output: number, term: number, inputIdx: number, polarity: number): void {\n        this.andArray[output][term][inputIdx * 2 + polarity] = 0;\n    }\n\n    programProductTerm(output: number, term: number, inputValues: number[]): void {\n        // inputValues[i] = 1 (true), 0 (complement), -1 (don't connect)\n        for (let i = 0; i < this.numInputs; i++) {\n            if (inputValues[i] === -1) {\n                this.andArray[output][term][i * 2] = 0;\n                this.andArray[output][term][i * 2 + 1] = 0;\n            } else if (inputValues[i] === 1) {\n                this.andArray[output][term][i * 2 + 1] = 0; // disconnect complement\n            } else {\n                this.andArray[output][term][i * 2] = 0; // disconnect true\n            }\n        }\n    }\n\n    evaluate(inputs: number[]): number[] {\n        const outputs = Array(this.numOutputs).fill(0);\n\n        for (let o = 0; o < this.numOutputs; o++) {\n            for (let t = 0; t < this.termsPerOutput; t++) {\n                let termActive = true;\n                for (let i = 0; i < this.numInputs; i++) {\n                    const trueConnected = this.andArray[o][t][i * 2];\n                    const compConnected = this.andArray[o][t][i * 2 + 1];\n                    const inputVal = inputs[i];\n\n                    if (trueConnected && compConnected) continue; // both intact ? don't care\n                    if (trueConnected && inputVal !== 1) { termActive = false; break; }\n                    if (compConnected && inputVal !== 0) { termActive = false; break; }\n                }\n                if (termActive) {\n                    outputs[o] = 1;\n                    break; // Fixed OR ? first active term wins\n                }\n            }\n        }\n        return outputs;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1042-pal-vs-pla-comparison",
      children: "10.4.2 PAL vs PLA Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PLA"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PAL"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AND array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Programmable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Programmable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OR array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Programmable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (share terms)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (dedicated terms)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (two programmable arrays)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster (fixed OR)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Area efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better for complex functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better for simple functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable delay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (varies with programming)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (fixed OR delay)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1043-registered-pal-outputs",
      children: "10.4.3 Registered PAL Outputs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Many PALs include a D flip-flop on each output, enabling state machine implementation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "            +---------+\nInputs ----?? AND/OR  +----? D Q ----? Registered Output\n            ?  Array  ?     ?   ?\n            +---------+     ?   ?\n                            ?   +--? Feedback to array\n                            ?\n                          Clock\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class RegisteredPAL {\n    private pal: PAL;\n    private regs: number[];\n    readonly numInputs: number;\n    readonly numOutputs: number;\n\n    constructor(numInputs: number, numOutputs: number, termsPerOutput: number) {\n        this.pal = new PAL(numInputs + numOutputs, numOutputs, termsPerOutput);\n        this.regs = Array(numOutputs).fill(0);\n        this.numInputs = numInputs;\n        this.numOutputs = numOutputs;\n    }\n\n    tick(inputs: number[], clk: number): number[] {\n        // Feedback current state as inputs\n        const allInputs = [...inputs, ...this.regs];\n        const nextOutputs = this.pal.evaluate(allInputs);\n\n        if (clk === 1) {\n            this.regs = nextOutputs;\n        }\n        return this.regs;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "105-complex-plds-cplds",
      children: "10.5 Complex PLDs (CPLDs)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A CPLD integrates multiple PAL-like blocks on a single chip, connected by a programmable interconnect."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    IOB[I/O Block] --> SW[Switch Matrix]\n    subgraph \"Logic Blocks\"\n        LB1[Logic Block<br>16 macrocells]\n        LB2[Logic Block<br>16 macrocells]\n        LB3[Logic Block<br>16 macrocells]\n        LB4[Logic Block<br>16 macrocells]\n    end\n    SW --> LB1\n    SW --> LB2\n    SW --> LB3\n    SW --> LB4\n    LB1 --> SW\n    LB2 --> SW\n    LB3 --> SW\n    LB4 --> SW\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Vendor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Family"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Macrocells"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Feature"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Altera (Intel)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAX 3000/7000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32?512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EEPROM-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Xilinx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XC9500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "36?288"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISP, 5V/3.3V"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lattice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ispMACH 4000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32?512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very fast (3.5 ns)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Microchip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ATF150x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32?128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low power"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CPLD vs FPGA:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "CPLD"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FPGA"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logic element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product-term macrocell"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LUT + flip-flop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-volatile (Flash/EEPROM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Volatile (SRAM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic (fixed delay)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable (routing delays)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Density"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low?Medium (up to ~1000 macrocells)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (millions of LUTs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Glue logic, simple FSMs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex datapaths, DSP, CPUs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "106-fpgas--field-programmable-gate-arrays",
      children: "10.6 FPGAs ? Field Programmable Gate Arrays"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The FPGA dominates modern programmable logic. It uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lookup table (LUT)"
      }), " based architecture."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1061-lut-based-logic",
      children: "10.6.1 LUT-Based Logic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An N-input LUT is a small SRAM that stores the truth table of any N-variable function. A 4-LUT (16?1 SRAM) can implement any 4-input function."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class LUT4 {\n    private sram: number[] = Array(16).fill(0);\n\n    program(truthTable: number[]): void {\n        for (let i = 0; i < 16 && i < truthTable.length; i++) {\n            this.sram[i] = truthTable[i] & 1;\n        }\n    }\n\n    evaluate(inputs: number[]): number {\n        const addr = (inputs[3] << 3) | (inputs[2] << 2) | (inputs[1] << 1) | inputs[0];\n        return this.sram[addr] ?? 0;\n    }\n\n    // Configure as any 2-input gate\n    static and(): LUT4 {\n        const lut = new LUT4();\n        lut.program([0, 0, 0, 1]);\n        return lut;\n    }\n\n    static xor(): LUT4 {\n        const lut = new LUT4();\n        lut.program([0, 1, 1, 0]);\n        return lut;\n    }\n}\n\nconst xorLUT = LUT4.xor();\nconsole.log(`1 ? 0 = ${xorLUT.evaluate([1, 0, 0, 0])}`); // 1\nconsole.log(`1 ? 1 = ${xorLUT.evaluate([1, 1, 0, 0])}`); // 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1062-fpga-slice-architecture",
      children: "10.6.2 FPGA Slice Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"FPGA Slice\"\n        LUT[4-input LUT] --> MUX[F_MUX]\n        REG[D Flip-Flop] --> MUX\n        LUT --> REG\n        CLK[Clock] --> REG\n        CE[Clock Enable] --> REG\n        SR[Set/Reset] --> REG\n        MUX --> OUT[Output]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A modern FPGA slice contains:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two 6-input LUTs (or one 7-input LUT)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two flip-flops"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fast carry chain logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiplexers for routing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class FPGASlice {\n    private lut: LUT4;\n    private flop: DFlipFlop;\n    private regOut: boolean = false; // true = registered output\n\n    constructor() {\n        this.lut = new LUT4();\n        this.flop = new DFlipFlop();\n    }\n\n    configure(lutTruthTable: number[], registered: boolean): void {\n        this.lut.program(lutTruthTable);\n        this.regOut = registered;\n    }\n\n    evaluate(inputs: number[], clk: number): number {\n        const combOut = this.lut.evaluate(inputs);\n        if (this.regOut) {\n            this.flop.update(combOut, clk);\n            return this.flop.Q;\n        }\n        return combOut;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1063-fpga-routing",
      children: "10.6.3 FPGA Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configurable routing connects LUTs, flip-flops, and I/O pins through:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Switch boxes:"
        }), " connect horizontal and vertical routing channels"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connection boxes:"
        }), " connect logic blocks to routing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PI (programmable interconnect point):"
        }), " SRAM-controlled pass transistor"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class SwitchBox {\n    private connections: Map<string, boolean> = new Map();\n\n    connect(from: string, to: string): void {\n        this.connections.set(`${from}?${to}`, true);\n    }\n\n    disconnect(from: string, to: string): void {\n        this.connections.delete(`${from}?${to}`);\n    }\n\n    isConnected(from: string, to: string): boolean {\n        return this.connections.has(`${from}?${to}`);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "107-implementing-state-machines-in-plds",
      children: "10.7 Implementing State Machines in PLDs"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1071-one-hot-encoding-in-fpgas",
      children: "10.7.1 One-Hot Encoding in FPGAs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPGAs have many flip-flops, making one-hot encoding the natural choice:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class FPGAStateMachine {\n    private slices: FPGASlice[];\n    readonly numStates: number;\n\n    constructor(numStates: number) {\n        this.numStates = numStates;\n        this.slices = Array.from({ length: numStates }, () => new FPGASlice());\n    }\n\n    configure(transitions: number[][]): void {\n        // transitions[state] = [nextStateIfInput0, nextStateIfInput1]\n        for (let s = 0; s < this.numStates; s++) {\n            const tt = Array(16).fill(0);\n            for (let input = 0; input < 2; input++) {\n                const ns = transitions[s][input];\n                for (let nsBit = 0; nsBit < this.numStates; nsBit++) {\n                    const addr = (nsBit << 1) | input;\n                    tt[addr] = (ns >> nsBit) & 1;\n                }\n            }\n            this.slices[s].configure(tt, true);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "108-technology-comparison",
      children: "10.8 Technology Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Device"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Config Storage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reconfigurable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Logic Density"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Power"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NRE Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fuse/Anti-fuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PLA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fuse/EPROM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fuse/EEPROM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPLD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EEPROM/Flash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (ISP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FPGA (SRAM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SRAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FPGA (Flash)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "104 cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom masks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PALs are best for simple glue logic"
        }), " ? small, fast, predictable delay; ideal for address decoding and bus interfaces"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PLAs share product terms efficiently"
        }), " ? use when outputs share common logic (e.g., ALU control)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-hot FSMs fit FPGAs naturally"
        }), " ? abundant flip-flops and wide OR gates make one-hot encoding optimal"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LUTs are universal"
        }), " ? a K-input LUT implements any K-variable function, making FPGAs flexible for any logic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PLD choice depends on volume"
        }), " ? PALs/CPLDs for low?medium volume, FPGAs for prototyping/medium volume, ASICs for >100K units"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Product Term ===\ntype ProductTerm = { inputs: number; mask: number; output: number };\ntype PLASpec = { inputs: number; outputs: number; terms: ProductTerm[] };\n\n// === PLA Simulator (Programmable AND + OR) ===\nclass PLASim {\n    constructor(private spec: PLASpec) {}\n    evaluate(input: number): number[] {\n        const results = new Array(this.spec.outputs).fill(0);\n        for (const term of this.spec.terms) {\n            const match = (input & term.mask) === term.inputs;\n            if (match) results[term.output] ^= 1;\n        }\n        return results;\n    }\n    productTermCount(): number { return this.spec.terms.length; }\n}\n\n// === PAL Simulator (fixed OR array) ===\nclass PALSim {\n    private andTerms: { inputs: number[]; inverted: boolean[] }[];\n\n    constructor(private inputs: number, private outputs: number, andArray: { inputs: number[]; inverted: boolean[] }[]) {\n        this.andTerms = andArray;\n    }\n\n    evaluate(input: number): number[] {\n        const results = new Array(this.outputs).fill(0);\n        for (let o = 0; o < this.outputs; o++) {\n            let product = 1;\n            for (let t = o * 4; t < Math.min((o + 1) * 4, this.andTerms.length); t++) {\n                let term = 1;\n                for (let i = 0; i < this.andTerms[t]?.inputs.length ?? 0; i++) {\n                    const bit = (input >> this.andTerms[t].inputs[i]) & 1;\n                    term &= this.andTerms[t].inverted[i] ? (~bit & 1) : bit;\n                }\n                product = (product | term); // sum of products\n            }\n            results[o] = product;\n        }\n        return results;\n    }\n}\n\n// === PROM Simulator ===\nclass PROMSim {\n    private words: number[];\n    constructor(private addrBits: number, private dataBits: number) {\n        this.words = new Array(1 << addrBits).fill(0);\n    }\n    program(addr: number, data: number): void { this.words[addr] = data & ((1 << this.dataBits) - 1); }\n    read(addr: number): number { return this.words[addr] ?? 0; }\n    implementFunction(truthTable: { input: number; output: number }[]): void {\n        for (const entry of truthTable) this.program(entry.input, entry.output);\n    }\n}\n\n// === LUT (K-input) Emulator ===\nclass LUT {\n    private sram: number[];\n    constructor(private k: number) { this.sram = new Array(1 << k).fill(0); }\n    configure(truthTable: number[]): void {\n        if (truthTable.length === (1 << this.k)) this.sram = [...truthTable];\n    }\n    evaluate(input: number): number { return this.sram[input & ((1 << this.k) - 1)] ?? 0; }\n    implementFunction(fn: (inputs: number[]) => number): void {\n        const table: number[] = [];\n        for (let i = 0; i < (1 << this.k); i++) {\n            const ins = Array.from({ length: this.k }, (_, j) => (i >> (this.k - 1 - j)) & 1);\n            table.push(fn(ins));\n        }\n        this.configure(table);\n    }\n}\n\n// === Quine-McCluskey Minimizer ===\nclass QuineMcCluskey {\n    minimize(minterms: number[], vars: number): string[] {\n        const groups: Map<number, number[]> = new Map();\n        for (const m of minterms) {\n            const ones = m.toString(2).split('1').length - 1;\n            if (!groups.has(ones)) groups.set(ones, []);\n            groups.get(ones)!.push(m);\n        }\n        const primes: string[] = [];\n        let combined = true;\n        let implicants = minterms.map(m => ({ value: m, mask: 0, used: false }));\n        while (combined) {\n            combined = false;\n            const next: { value: number; mask: number; used: boolean }[] = [];\n            for (let i = 0; i < implicants.length; i++) {\n                for (let j = i + 1; j < implicants.length; j++) {\n                    const diff = implicants[i].value ^ implicants[j].value;\n                    const maskDiff = implicants[i].mask ^ implicants[j].mask;\n                    if ((diff & (diff - 1)) === 0 && maskDiff === 0) {\n                        const val = implicants[i].value & ~diff;\n                        const mask = implicants[i].mask | diff;\n                        if (!next.some(n => n.value === val && n.mask === mask)) {\n                            next.push({ value: val, mask, used: false });\n                        }\n                        implicants[i].used = true;\n                        implicants[j].used = true;\n                        combined = true;\n                    }\n                }\n            }\n            for (const imp of implicants) if (!imp.used) primes.push(`${imp.value.toString(2).padStart(vars, '0')}`);\n            implicants = next;\n        }\n        for (const imp of implicants) primes.push(`${imp.value.toString(2).padStart(vars, '0')}`);\n        return [...new Set(primes)];\n    }\n}\n\n// === GAL/CPLD Output Logic Macrocell ===\nclass OLMC {\n    private xor: number = 0;\n    private outputMux: 'reg' | 'comb' = 'comb';\n    private flipFlop = 0;\n\n    configure(xor: number, mode: 'reg' | 'comb'): void { this.xor = xor; this.outputMux = mode; }\n    compute(andResult: number, clk: number): number {\n        let result = andResult ^ this.xor;\n        if (this.outputMux === 'reg') {\n            if (clk) this.flipFlop = result;\n            return this.flipFlop;\n        }\n        return result;\n    }\n}\n\n// === FPGA Switch Box Router ===\nclass SwitchBox {\n    private connections: boolean[][];\n\n    constructor(private wires: number) {\n        this.connections = Array.from({ length: wires }, () => new Array(wires).fill(false));\n    }\n    connect(w1: number, w2: number): void { this.connections[w1][w2] = this.connections[w2][w1] = true; }\n    canRoute(from: number, to: number): boolean { return this.connections[from][to]; }\n    routeProbability(utilization: number): number {\n        const available = this.wires * (this.wires - 1) / 2;\n        const used = Math.floor(available * utilization);\n        return used / available;\n    }\n}\n\n// === ASIC vs FPGA Break-Even Calculator ===\nclass CostModel {\n    static breakEven(fpgaUnit: number, asicNRE: number, asicUnit: number): number {\n        return Math.ceil(asicNRE / (fpgaUnit - asicUnit));\n    }\n}\n\n// === Demo ===\nconst qm = new QuineMcCluskey();\nconsole.log('Q-M minimization of F=S(0,1,2,4,5,6)@3:');\nconsole.log(qm.minimize([0, 1, 2, 4, 5, 6], 3));\n\nconst lut = new LUT(3);\nlut.implementFunction((ins) => (ins[0] & ins[1]) | (~ins[0] & ins[2]) ? 1 : 0);\nconsole.log(`LUT(3) F=A?B+A'?C evaluate(5=101): ${lut.evaluate(5)}`);\n\nconst prom = new PROMSim(3, 1);\nprom.implementFunction([{ input: 3, output: 1 }, { input: 5, output: 1 }, { input: 6, output: 1 }, { input: 7, output: 1 }]);\nconsole.log(`PROM F=S(3,5,6,7) read(5): ${prom.read(5)}`);\n\nconst sb = new SwitchBox(40);\nsb.connect(0, 1); sb.connect(0, 2);\nconsole.log(`Switch box route prob @80%: ${(sb.routeProbability(0.8) * 100).toFixed(1)}%`);\nconsole.log(`ASIC break-even @$50/$5/$250K: ${CostModel.breakEven(50, 250000, 5)} units`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// pla pal\n// boolean-circuits-sequential implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'pla pal', data: { topic: 'boolean-circuits-sequential' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// pla pal - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'digital-circuits demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'digital-logic', chapter: 'pla pal' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('digital-circuits'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Programmable logic devices span a wide range from simple PROM-based logic through PLA, PAL, CPLD, and FPGA architectures. Each offers a different trade-off between flexibility, speed, density, and non-recurring engineering cost. PLAs provide the most flexible two-level logic (programmable AND and OR), PALs offer faster predictable delays (fixed OR), and FPGAs dominate high-density applications with LUT-based logic and abundant flip-flops. Understanding these trade-offs is essential for selecting the right implementation technology for any digital design."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " A PAL differs from a PLA in that:\na) The AND array is fixed\nb) The OR array is fixed\nc) The outputs are registered\nd) It uses LUTs instead of product terms"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " A 4-input LUT can implement how many different functions?\na) 16\nb) 256\nc) 65,536\nd) 4"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " Which device type has both programmable AND and OR arrays?\na) PROM\nb) PAL\nc) PLA\nd) CPLD"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " The main advantage of one-hot encoding in FPGAs is:\na) Fewer flip-flops\nb) Faster operation\nc) Lower power\nd) Simpler decoding"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " CPLDs combine multiple:\na) LUTs\nb) PAL-like blocks\nc) Microprocessors\nd) DRAM cells"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answers",
      children: "Answers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q1: b | Q2: c | Q3: c | Q4: b | Q5: b"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "PLA implementation:"
          }), " Design a PLA for a BCD to 7-segment decoder. Minimise the number of product terms. Implement in TypeScript and verify all 10 valid BCD inputs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "PAL state machine:"
          }), " Use a registered PAL with 4 inputs, 4 outputs, and 4 terms/output to implement a 4-state traffic light controller."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "PROM vs PLA comparison:"
          }), " Implement the function F(A,B,C,D) = Sm(0,3,5,6,9,10,12,15) using both a PROM and a PLA. Compare the number of word lines vs. product terms required."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CPLD timing analysis:"
          }), " A CPLD has a tPD (propagation delay) of 7.5 ns. What is the maximum frequency for a state machine with three levels of logic between flip-flops?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "FPGA LUT cascading:"
          }), " Show how to implement a 7-input function using two 4-LUTs and a multiplexer. Write TypeScript to verify correctness."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "GAL emulation:"
          }), " Implement a generic array logic (GAL) device in TypeScript that can be configured as any PAL type (16V8, 20V8, 22V10). Include an OLMC (output logic macrocell) configuration register."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "PLA minimisation:"
          }), " Write a TypeScript program that takes a truth table (up to 6 inputs) and produces minimised PLA product terms using the Quine-McCluskey algorithm."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Routing analysis:"
          }), " Model an FPGA routing channel with 40 wires and switch boxes. Calculate the probability that a connection between two LUTs can be routed given 80% switch box utilisation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ASIC vs FPGA cost:"
          }), " Compute the break-even quantity where an ASIC becomes cheaper than an FPGA. Assume FPGA cost = $50/unit, ASIC NRE = $250K, ASIC unit cost = $5."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dynamic partial reconfiguration:"
          }), " Research and describe how partial reconfiguration works in Xilinx 7-series FPGAs. Write a TypeScript simulation of a reconfigurable partition switching between an FIR filter and an FFT."]
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