"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[9237],{

/***/ 5834
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_digital_logic_05_combinational_circuits_md_1dd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-digital-logic-05-combinational-circuits-md-1dd.json
const site_docs_courses_digital_logic_05_combinational_circuits_md_1dd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/digital-logic/05-combinational-circuits","title":"Chapter 5: Combinational Circuits","description":"Prereq: Chapter 4 (Karnaugh Maps) ? minimised expressions are the building blocks for efficient combinational circuits.","source":"@site/docs/courses/digital-logic/05-combinational-circuits.md","sourceDirName":"courses/digital-logic","slug":"/digital-logic/05-combinational-circuits","permalink":"/ai-engineering-journey/digital-logic/05-combinational-circuits","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"05-combinational-circuits","slug":"/digital-logic/05-combinational-circuits","title":"Chapter 5: Combinational Circuits","sidebar_label":"Chapter 5: Combinational Circuits","sidebar_position":5},"sidebar":"course-digital-logic","previous":{"title":"Chapter 4: Karnaugh Maps","permalink":"/ai-engineering-journey/digital-logic/04-karnaugh-maps"},"next":{"title":"Chapter 6: Sequential Circuits","permalink":"/ai-engineering-journey/digital-logic/06-sequential-circuits"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/digital-logic/05-combinational-circuits.md


const frontMatter = {
	id: '05-combinational-circuits',
	slug: '/digital-logic/05-combinational-circuits',
	title: 'Chapter 5: Combinational Circuits',
	sidebar_label: 'Chapter 5: Combinational Circuits',
	sidebar_position: 5
};
const contentTitle = 'Chapter 5: Combinational Circuits';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "5.1 Introduction to Combinational Circuits",
  "id": "51-introduction-to-combinational-circuits",
  "level": 2
}, {
  "value": "5.1.1 Formal Definition",
  "id": "511-formal-definition",
  "level": 3
}, {
  "value": "5.1.2 Design Procedure",
  "id": "512-design-procedure",
  "level": 3
}, {
  "value": "5.2 Binary Adders",
  "id": "52-binary-adders",
  "level": 2
}, {
  "value": "5.2.1 Half Adder",
  "id": "521-half-adder",
  "level": 3
}, {
  "value": "5.2.2 Full Adder",
  "id": "522-full-adder",
  "level": 3
}, {
  "value": "5.2.3 Ripple-Carry Adder (RCA)",
  "id": "523-ripple-carry-adder-rca",
  "level": 3
}, {
  "value": "5.2.4 Carry-Lookahead Adder (CLA)",
  "id": "524-carry-lookahead-adder-cla",
  "level": 3
}, {
  "value": "5.2.5 Carry-Select Adder",
  "id": "525-carry-select-adder",
  "level": 3
}, {
  "value": "5.3 Binary Subtractors",
  "id": "53-binary-subtractors",
  "level": 2
}, {
  "value": "5.4 Multiplexers",
  "id": "54-multiplexers",
  "level": 2
}, {
  "value": "5.4.1 2:1 Multiplexer",
  "id": "541-21-multiplexer",
  "level": 3
}, {
  "value": "5.4.2 4:1 Multiplexer",
  "id": "542-41-multiplexer",
  "level": 3
}, {
  "value": "5.4.3 Using Multiplexers for Logic Implementation",
  "id": "543-using-multiplexers-for-logic-implementation",
  "level": 3
}, {
  "value": "5.5 Demultiplexers",
  "id": "55-demultiplexers",
  "level": 2
}, {
  "value": "5.6 Encoders",
  "id": "56-encoders",
  "level": 2
}, {
  "value": "5.6.1 4:2 Priority Encoder",
  "id": "561-42-priority-encoder",
  "level": 3
}, {
  "value": "5.7 Decoders",
  "id": "57-decoders",
  "level": 2
}, {
  "value": "5.7.1 3:8 Decoder",
  "id": "571-38-decoder",
  "level": 3
}, {
  "value": "5.7.2 Decoder-Based Logic Implementation",
  "id": "572-decoder-based-logic-implementation",
  "level": 3
}, {
  "value": "5.8 Magnitude Comparators",
  "id": "58-magnitude-comparators",
  "level": 2
}, {
  "value": "5.8.1 1-Bit Comparator",
  "id": "581-1-bit-comparator",
  "level": 3
}, {
  "value": "5.8.2 Iterative N-Bit Comparator",
  "id": "582-iterative-n-bit-comparator",
  "level": 3
}, {
  "value": "5.9 Arithmetic Logic Unit",
  "id": "59-arithmetic-logic-unit",
  "level": 2
}, {
  "value": "5.9.1 4-Bit ALU Design",
  "id": "591-4-bit-alu-design",
  "level": 3
}, {
  "value": "5.9.2 Status Flags",
  "id": "592-status-flags",
  "level": 3
}, {
  "value": "5.10 Code Converters",
  "id": "510-code-converters",
  "level": 2
}, {
  "value": "5.10.1 BCD to 7-Segment Decoder",
  "id": "5101-bcd-to-7-segment-decoder",
  "level": 3
}, {
  "value": "5.10.2 Binary to Gray Code",
  "id": "5102-binary-to-gray-code",
  "level": 3
}, {
  "value": "5.11 Parity Generators and Checkers",
  "id": "511-parity-generators-and-checkers",
  "level": 2
}, {
  "value": "5.12 Timing Hazards in Combinational Circuits",
  "id": "512-timing-hazards-in-combinational-circuits",
  "level": 2
}, {
  "value": "5.12.1 Static Hazards",
  "id": "5121-static-hazards",
  "level": 3
}, {
  "value": "5.12.2 Dynamic Hazards",
  "id": "5122-dynamic-hazards",
  "level": 3
}, {
  "value": "5.12.3 Hazard Detection and Elimination",
  "id": "5123-hazard-detection-and-elimination",
  "level": 3
}, {
  "value": "5.13 Practical Design Considerations",
  "id": "513-practical-design-considerations",
  "level": 2
}, {
  "value": "5.13.1 Fan-Out and Loading",
  "id": "5131-fan-out-and-loading",
  "level": 3
}, {
  "value": "5.13.2 Propagation Delay Comparison",
  "id": "5132-propagation-delay-comparison",
  "level": 3
}, {
  "value": "5.13.3 Power Optimisation",
  "id": "5133-power-optimisation",
  "level": 3
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
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "chapter-5-combinational-circuits",
        children: "Chapter 5: Combinational Circuits"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Chapter 4 (Karnaugh Maps) ? minimised expressions are the building blocks for efficient combinational circuits.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 6 (Sequential Circuits) ? combinational logic feeds the next-state logic of sequential systems."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the conclusion of this chapter, the student shall be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyse and design half-adder, full-adder, and ripple-carry adder circuits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement carry-lookahead and carry-select adders for high-performance arithmetic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct subtractors using 2's complement addition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design multiplexers, demultiplexers, encoders, and decoders from fundamental gates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build magnitude comparators using iterative logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Combine arithmetic and logic operations into a functional ALU"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct BCD adders, code converters, and parity generators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate propagation delay and area trade-offs across circuit families"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "51-introduction-to-combinational-circuits",
      children: "5.1 Introduction to Combinational Circuits"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "combinational circuit"
      }), " is a digital circuit whose output depends ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "only on the present combination of inputs"
      }), " ? it has no memory, no feedback path, and no clock. Every combinational circuit can be described by a set of Boolean functions, a truth table, or a netlist of gates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "511-formal-definition",
      children: "5.1.1 Formal Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A combinational circuit with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), " binary inputs and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "m"
      }), " binary outputs realises ", (0,jsx_runtime.jsx)(_components.code, {
        children: "m"
      }), " switching functions:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "y? = f?(x1, x2, ..., x?)   for j = 1, 2, ..., m\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "delay"
      }), " through the circuit is the time from an input change until all outputs settle to their final values. This delay limits the maximum clock frequency in sequential systems that use combinational logic in their datapath."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph LR\r\n    A[Inputs x1?x?] --> B[Combinational<br>Logic]\r\n    B --> C[Outputs y1?y?]\r\n    style B fill:#e6f3ff,stroke:#4a90d9,stroke-width:2px"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "512-design-procedure",
      children: "5.1.2 Design Procedure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Specification"
        }), " ? state what the circuit does"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Truth table"
        }), " ? enumerate all 2n input combinations and the required outputs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Boolean equations"
        }), " ? derive minimised SOP or POS expressions (use K-maps or QMC)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logic diagram"
        }), " ? map equations to gates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verification"
        }), " ? simulate or test the circuit"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "52-binary-adders",
      children: "5.2 Binary Adders"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Addition is the fundamental arithmetic operation. All other arithmetic (subtraction, multiplication, division) builds on addition."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "521-half-adder",
      children: "5.2.1 Half Adder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The half adder adds two 1-bit binary digits and produces a sum and a carry."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sum (S)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Carry (C)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "S = A ? B\r\nC = A ? B\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph LR\r\n    A[A] --> XOR[?]\r\n    B[B] --> XOR\r\n    A --> AND[&]\r\n    B --> AND\r\n    XOR --> S[Sum]\r\n    AND --> C[Carry]\r\n    style XOR fill:#f9f,stroke:#333,stroke-width:1px\r\n    style AND fill:#9f9,stroke:#333,stroke-width:1px"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "522-full-adder",
      children: "5.2.2 Full Adder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The full adder adds three 1-bit inputs: A, B, and Carry-In (C??)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function fullAdder(A: number, B: number, Cin: number): { sum: number; Cout: number } {\r\n    const sum = A ^ B ^ Cin;\r\n    const Cout = (A & B) | (A & Cin) | (B & Cin);\r\n    return { sum, Cout };\r\n}\r\n\r\n// Verify truth table\r\nfor (let i = 0; i < 8; i++) {\r\n    const A = (i >> 2) & 1;\r\n    const B = (i >> 1) & 1;\r\n    const Cin = i & 1;\r\n    const { sum, Cout } = fullAdder(A, B, Cin);\r\n    console.log(`${A} ${B} ${Cin} | ${sum} ${Cout}`);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Minimised SOP equations"
      }), " (from K-map):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sum    = A ? B ? C??\r\nC???  = A?B + A?C?? + B?C??\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph TD\r\n    A[A] --> XOR1[?]\r\n    B[B] --> XOR1\r\n    XOR1 --> XOR2[?]\r\n    Cin[C??] --> XOR2\r\n    XOR2 --> Sum[Sum]\r\n    A --> AND1[&]\r\n    B --> AND1\r\n    A --> AND2[&]\r\n    Cin --> AND2\r\n    B --> AND3[&]\r\n    Cin --> AND3\r\n    AND1 --> OR[=1]\r\n    AND2 --> OR\r\n    AND3 --> OR\r\n    OR --> Cout[C???]\r\n    style XOR1 fill:#f9f,stroke:#333,stroke-width:1px\r\n    style XOR2 fill:#f9f,stroke:#333,stroke-width:1px\r\n    style OR fill:#ff9,stroke:#333,stroke-width:1px"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "523-ripple-carry-adder-rca",
      children: "5.2.3 Ripple-Carry Adder (RCA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An N-bit ripple-carry adder cascades N full adders, with the carry-out of stage ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i"
      }), " feeding the carry-in of stage ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i+1"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph LR\r\n    subgraph Stage 0\r\n        FA0[FA] --> C1[C1]\r\n    end\r\n    subgraph Stage 1\r\n        FA1[FA] --> C2[C2]\r\n    end\r\n    subgraph \"...\"\r\n        FAi[FA] --> Ck[C??1]\r\n    end\r\n    subgraph Stage N-1\r\n        FAf[FA] --> Cout[C???]\r\n    end\r\n    A0[A0] --> FA0\r\n    B0[B0] --> FA0\r\n    A1[A1] --> FA1\r\n    B1[B1] --> FA1\r\n    An[A???1?] --> FAf\r\n    Bn[B???1?] --> FAf\r\n    C1 --> FA1\r\n    Ck --> FAf"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface FAOutput { sum: number; Cout: number; }\r\n\r\nfunction fullAdder(A: number, B: number, Cin: number): FAOutput {\r\n    return {\r\n        sum: A ^ B ^ Cin,\r\n        Cout: (A & B) | (A & Cin) | (B & Cin)\r\n    };\r\n}\r\n\r\nfunction rippleCarryAdd(A: number, B: number, bits: number): { sum: number; Cout: number } {\r\n    let result = 0;\r\n    let carry = 0;\r\n    for (let i = 0; i < bits; i++) {\r\n        const aBit = (A >> i) & 1;\r\n        const bBit = (B >> i) & 1;\r\n        const fa = fullAdder(aBit, bBit, carry);\r\n        result |= (fa.sum << i);\r\n        carry = fa.Cout;\r\n    }\r\n    return { sum: result, Cout: carry };\r\n}\r\n\r\n// 4-bit example\r\nconst a = 0b0110; // 6\r\nconst b = 0b0101; // 5\r\nconst r = rippleCarryAdd(a, b, 4);\r\nconsole.log(`${a} + ${b} = ${r.sum} (carry: ${r.Cout})`); // 11\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical path delay:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "t?? = (N - 1) ? t??? + t???\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "t???"
      }), " is the carry propagation delay of one FA and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "t???"
      }), " is the final sum delay. For N=64 bits, this delay becomes prohibitive (?3?5 ns per stage ? 200?300 ns total)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "524-carry-lookahead-adder-cla",
      children: "5.2.4 Carry-Lookahead Adder (CLA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The CLA eliminates the ripple delay by computing all carries in parallel using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "generate"
      }), " (G) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "propagate"
      }), " (P) signals."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "G? = A? ? B?          // generate: this stage creates a carry\r\nP? = A? ? B?         // propagate: this stage passes a carry through\r\n\r\nC0 = C??\r\nC1 = G0 + P0 ? C0\r\nC2 = G1 + P1 ? G0 + P1 ? P0 ? C0\r\nC3 = G2 + P2 ? G1 + P2 ? P1 ? G0 + P2 ? P1 ? P0 ? C0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each carry is a 2-level AND-OR expression, regardless of N. Practical CLA adders use 4-bit blocks (lookahead width of 4) to limit fan-in."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function cla4(A: number, B: number, Cin: number): { sum: number; Cout: number } {\r\n    const G = Array(4);\r\n    const P = Array(4);\r\n    for (let i = 0; i < 4; i++) {\r\n        const ai = (A >> i) & 1;\r\n        const bi = (B >> i) & 1;\r\n        G[i] = ai & bi;\r\n        P[i] = ai ^ bi;\r\n    }\r\n\r\n    // Carry equations (2-level logic)\r\n    const C = Array(5);\r\n    C[0] = Cin;\r\n    C[1] = G[0] | (P[0] & C[0]);\r\n    C[2] = G[1] | (P[1] & G[0]) | (P[1] & P[0] & C[0]);\r\n    C[3] = G[2] | (P[2] & G[1]) | (P[2] & P[1] & G[0]) | (P[2] & P[1] & P[0] & C[0]);\r\n    C[4] = G[3] | (P[3] & G[2]) | (P[3] & P[2] & G[1]) | (P[3] & P[2] & P[1] & G[0])\r\n         | (P[3] & P[2] & P[1] & P[0] & C[0]);\r\n\r\n    let sum = 0;\r\n    for (let i = 0; i < 4; i++) {\r\n        sum |= ((P[i] ^ C[i]) << i);\r\n    }\r\n    return { sum, Cout: C[4] };\r\n}\r\n\r\n// 4-bit CLA example\r\nconst r2 = cla4(0b0110, 0b0101, 0);\r\nconsole.log(`CLA: 6 + 5 = ${r2.sum}, Cout=${r2.Cout}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CLA delay:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tCLA = t?,9 + t?,? + t???"
      }), " ? 4?5 gate levels regardless of word width (with block fan-in constraints)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "525-carry-select-adder",
      children: "5.2.5 Carry-Select Adder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The carry-select adder (CSA) computes sums for both possible carry-in values (0 and 1) in parallel, then uses a multiplexer to select the correct result once the actual carry arrives."
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph TD\r\n    subgraph \"Low N/2 bits\"\r\n        RCA0[RCA C??=0] --> S0[Sum0]\r\n        RCA1[RCA C??=1] --> S1[Sum1]\r\n        RCAR[RCA real] --> SL[Low Sum]\r\n        RCAR --> CM[Mux]\r\n    end\r\n    subgraph \"High N/2 bits\"\r\n        RCAH0[RCA C??=0] --> S0H[Sum0]\r\n        RCAH1[RCA C??=1] --> S1H[Sum1]\r\n        CM --> SH[High Sum]\r\n    end\r\n    CM --> Cout[C???]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Delay:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tCSA = tRCA12 + tMux"
      }), " ? roughly half the delay of a full ripple-carry adder."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "53-binary-subtractors",
      children: "5.3 Binary Subtractors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Subtraction is performed by adding the 2's complement of the subtrahend:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "A - B = A + (?B + 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "full subtractor"
      }), " has three inputs (A, B, Borrow-In) and two outputs (Difference, Borrow-Out):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Diff = A ? B ? B??\r\nB??? = ?A?B + ?A?B?? + B?B??\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "adder-subtractor"
      }), " unit uses a control line (SUB) to select between addition and subtraction:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function addSub(A: number, B: number, sub: boolean, bits: number): number {\r\n    const bInput = sub ? (~B) & ((1 << bits) - 1) : B;\r\n    const carryIn = sub ? 1 : 0;\r\n    let result = 0;\r\n    let carry = carryIn;\r\n    for (let i = 0; i < bits; i++) {\r\n        const aBit = (A >> i) & 1;\r\n        const bBit = (bInput >> i) & 1;\r\n        const fa = fullAdder(aBit, bBit, carry);\r\n        result |= (fa.sum << i);\r\n        carry = fa.Cout;\r\n    }\r\n    return result;\r\n}\r\n\r\nconsole.log(`6 + 5 = ${addSub(6, 5, false, 4)}`);  // 11\r\nconsole.log(`6 - 5 = ${addSub(6, 5, true, 4)}`);   // 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "54-multiplexers",
      children: "5.4 Multiplexers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "multiplexer (MUX)"
      }), " selects one of 2n data inputs and routes it to the output based on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), " select lines."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "541-21-multiplexer",
      children: "5.4.1 2:1 Multiplexer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "S = 0 ? Y = A\r\nS = 1 ? Y = B\r\n\r\nY = (?S ? A) + (S ? B)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function mux2(A: number, B: number, S: number): number {\r\n    return (S === 0) ? A : B;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "542-41-multiplexer",
      children: "5.4.2 4:1 Multiplexer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Y = (?S1??S0?D0) + (?S1?S0?D1) + (S1??S0?D2) + (S1?S0?D3)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function mux4(D: number[], S: number): number {\r\n    // S is 2-bit select [S1, S0]\r\n    const idx = S & 0b11;\r\n    return D[idx];\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph TD\r\n    D0[D0] --> AND0[&]\r\n    D1[D1] --> AND1[&]\r\n    D2[D2] --> AND2[&]\r\n    D3[D3] --> AND3[&]\r\n    S0[?S1] --> AND0\r\n    S0A[?S0] --> AND0\r\n    S0B[?S1] --> AND1\r\n    S1C[S0] --> AND1\r\n    S1D[S1] --> AND2\r\n    S0E[?S0] --> AND2\r\n    S1F[S1] --> AND3\r\n    S1G[S0] --> AND3\r\n    AND0 --> OR[=1]\r\n    AND1 --> OR\r\n    AND2 --> OR\r\n    AND3 --> OR\r\n    OR --> Y[Y]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "543-using-multiplexers-for-logic-implementation",
      children: "5.4.3 Using Multiplexers for Logic Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Any Boolean function can be implemented using a multiplexer by tying data inputs to VCC or GND based on the truth table. An n-variable function requires a 2n:1 MUX."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Implement F(A,B,C) = Sm(1,3,5,6) using an 8:1 MUX\r\nfunction implWithMux(A: number, B: number, C: number): number {\r\n    const truthTable = [0, 1, 0, 1, 0, 1, 1, 0]; // D0..D7\r\n    const select = (A << 2) | (B << 1) | C;\r\n    return truthTable[select];\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "55-demultiplexers",
      children: "5.5 Demultiplexers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "demultiplexer (DEMUX)"
      }), " routes one data input to one of 2n outputs based on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), " select lines."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function demux1x4(D: number, S: number): number[] {\r\n    const Y = [0, 0, 0, 0];\r\n    const idx = S & 0b11;\r\n    Y[idx] = D;\r\n    return Y;\r\n}\r\n\r\nconsole.log(demux1x4(1, 0b10)); // [0, 0, 1, 0]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "56-encoders",
      children: "5.6 Encoders"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "encoder"
      }), " converts 2n input lines into an n-bit binary code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "561-42-priority-encoder",
      children: "5.6.1 4:2 Priority Encoder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A priority encoder handles multiple active inputs by encoding the highest-priority one."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function priorityEncoder4(I: number[]): { code: number; valid: boolean } {\r\n    // I[3] has highest priority, I[0] lowest\r\n    if (I[3]) return { code: 0b11, valid: true };\r\n    if (I[2]) return { code: 0b10, valid: true };\r\n    if (I[1]) return { code: 0b01, valid: true };\r\n    if (I[0]) return { code: 0b00, valid: true };\r\n    return { code: 0b00, valid: false };\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "57-decoders",
      children: "5.7 Decoders"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "decoder"
      }), " converts an n-bit binary code into 2n mutually exclusive output lines."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "571-38-decoder",
      children: "5.7.1 3:8 Decoder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function decoder3to8(A: number): number[] {\r\n    const Y = Array(8).fill(0);\r\n    const idx = A & 0b111;\r\n    Y[idx] = 1;\r\n    return Y;\r\n}\r\n\r\n// Active-high output\r\nconsole.log(decoder3to8(5)); // [0,0,0,0,0,1,0,0]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "572-decoder-based-logic-implementation",
      children: "5.7.2 Decoder-Based Logic Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Any n-variable function can be implemented with an n:2n decoder and an OR gate ? a direct realisation of the canonical sum-of-minterms form."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Implement F = Sm(1,3,5,6) using a 3:8 decoder\r\nfunction decoderLogic(A: number, B: number, C: number): number {\r\n    const minterms = decoder3to8((A << 2) | (B << 1) | C);\r\n    // OR together minterms 1, 3, 5, 6\r\n    return minterms[1] | minterms[3] | minterms[5] | minterms[6];\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "58-magnitude-comparators",
      children: "5.8 Magnitude Comparators"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A comparator determines the relationship between two binary numbers: A > B, A = B, or A < B."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "581-1-bit-comparator",
      children: "5.8.1 1-Bit Comparator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "E = (A ? B)'        // A equals B\r\nL = ?A ? B          // A less than B\r\nG = A ? ?B          // A greater than B\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "582-iterative-n-bit-comparator",
      children: "5.8.2 Iterative N-Bit Comparator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface CmpResult { greater: number; equal: number; less: number; }\r\n\r\nfunction compare(A: number, B: number, bits: number): CmpResult {\r\n    let greater = 0;\r\n    let equal = 1;\r\n    let less = 0;\r\n\r\n    for (let i = bits - 1; i >= 0; i--) {\r\n        const ai = (A >> i) & 1;\r\n        const bi = (B >> i) & 1;\r\n        const newGreater = (ai & ~bi) | (equal & ai & ~bi);\r\n        const newLess = (~ai & bi) | (equal & ~ai & bi);\r\n        equal = equal & (ai ^ bi) ^ 1;\r\n        greater = newGreater;\r\n        less = newLess;\r\n    }\r\n    return { greater, equal, less };\r\n}\r\n\r\nconsole.log(compare(0b1010, 0b0110, 4)); // { greater: 1, equal: 0, less: 0 }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "59-arithmetic-logic-unit",
      children: "5.9 Arithmetic Logic Unit"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The ALU is the computational core of a processor ? a single combinational circuit that performs multiple arithmetic and logic operations selected by control lines."
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph TD\r\n    A[A Operand] --> ALU\r\n    B[B Operand] --> ALU\r\n    Op[Opcode] --> ALU\r\n    ALU --> Result[Result]\r\n    ALU --> Flags[Status Flags<br>Zero, Carry, Overflow, Negative]\r\n    style ALU fill:#e6f3ff,stroke:#4a90d9,stroke-width:2px"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "591-4-bit-alu-design",
      children: "5.9.1 4-Bit ALU Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type ALUOp = 'ADD' | 'SUB' | 'AND' | 'OR' | 'XOR' | 'SLT';\r\n\r\ninterface ALUResult {\r\n    value: number;\r\n    zero: boolean;\r\n    carry: boolean;\r\n    overflow: boolean;\r\n    negative: boolean;\r\n}\r\n\r\nfunction alu(A: number, B: number, op: ALUOp, bits: number): ALUResult {\r\n    const maxVal = (1 << bits) - 1;\r\n    const signBit = 1 << (bits - 1);\r\n    let value = 0;\r\n    let carry = false;\r\n    let overflow = false;\r\n\r\n    switch (op) {\r\n        case 'ADD': {\r\n            const r = rippleCarryAdd(A, B, bits);\r\n            value = r.sum & maxVal;\r\n            carry = r.Cout !== 0;\r\n            overflow = ((A & signBit) === (B & signBit)) &&\r\n                       ((value & signBit) !== (A & signBit));\r\n            break;\r\n        }\r\n        case 'SUB': {\r\n            const negB = (~B) & maxVal;\r\n            const r = rippleCarryAdd(A, negB + 1, bits);\r\n            value = r.sum & maxVal;\r\n            overflow = ((A & signBit) !== ((negB + 1) & signBit)) &&\r\n                       ((value & signBit) !== (A & signBit));\r\n            break;\r\n        }\r\n        case 'AND': value = A & B; break;\r\n        case 'OR':  value = A | B; break;\r\n        case 'XOR': value = A ^ B; break;\r\n        case 'SLT': value = (A < B) ? 1 : 0; break;\r\n    }\r\n\r\n    const negative = (value & signBit) !== 0;\r\n    const zero = value === 0;\r\n\r\n    return { value, zero, carry, overflow, negative };\r\n}\r\n\r\n// Example: compute flags\r\nconst r3 = alu(0b0111, 0b0001, 'ADD', 4); // 7 + 1 = 8\r\nconsole.log(r3); // value=8, zero=false, carry=false, overflow=true, negative=true\r\n\r\nconst r4 = alu(0b0010, 0b0011, 'SUB', 4); // 2 - 3 = -1\r\nconsole.log(r4); // value=15 (1111), zero=false, negative=true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "592-status-flags",
      children: "5.9.2 Status Flags"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero (Z):"
        }), " asserted when the result is all zeros"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Carry (C):"
        }), " asserted when addition produces a carry out of the MSB"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Overflow (V):"
        }), " asserted when signed arithmetic overflows the representable range"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Negative (N):"
        }), " equals the MSB of the result (sign bit)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "510-code-converters",
      children: "5.10 Code Converters"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5101-bcd-to-7-segment-decoder",
      children: "5.10.1 BCD to 7-Segment Decoder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Converts a 4-bit BCD digit to the 7-segment display pattern (a?g)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function bcdTo7Seg(bcd: number): string {\r\n    const patterns: Record<number, string> = {\r\n        0: '1111110', 1: '0110000', 2: '1101101', 3: '1111001',\r\n        4: '0110011', 5: '1011011', 6: '1011111', 7: '1110000',\r\n        8: '1111111', 9: '1111011'\r\n    };\r\n    return patterns[bcd] || '0000000';\r\n}\r\n\r\nfor (let d = 0; d <= 9; d++) {\r\n    console.log(`${d}: ${bcdTo7Seg(d)}`);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph TD\r\n    subgraph \"7-Segment Display\"\r\n        A[--- a ---]\r\n        B[\"|\"]\r\n        C[\"|\"]\r\n        D[--- g ---]\r\n        E[\"|\"]\r\n        F[\"|\"]\r\n        G[--- d ---]\r\n    end"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5102-binary-to-gray-code",
      children: "5.10.2 Binary to Gray Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function binToGray(bin: number): number {\r\n    return bin ^ (bin >> 1);\r\n}\r\n\r\nfunction grayToBin(gray: number, bits: number): number {\r\n    let bin = 0;\r\n    for (let i = bits - 1; i >= 0; i--) {\r\n        bin |= ((gray >> i) & 1) ^ ((bin >> (i + 1)) & 1) << i;\r\n    }\r\n    return bin;\r\n}\r\n\r\nfor (let i = 0; i < 8; i++) {\r\n    const g = binToGray(i);\r\n    const b = grayToBin(g, 3);\r\n    console.log(`${i} ? ${g} ? ${b}`);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "511-parity-generators-and-checkers",
      children: "5.11 Parity Generators and Checkers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parity bits detect single-bit errors in data transmission."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function evenParity(data: number, bits: number): number {\r\n    let p = 0;\r\n    for (let i = 0; i < bits; i++) {\r\n        p ^= (data >> i) & 1;\r\n    }\r\n    return p; // parity bit\r\n}\r\n\r\nfunction checkEvenParity(data: number, parity: number, bits: number): boolean {\r\n    let p = parity;\r\n    for (let i = 0; i < bits; i++) {\r\n        p ^= (data >> i) & 1;\r\n    }\r\n    return p === 0; // true if no error\r\n}\r\n\r\nconst data = 0b1011010;\r\nconst p = evenParity(data, 7);\r\nconsole.log(`Data: ${data.toString(2)}, Parity: ${p}`); // 0\r\nconsole.log(`Check: ${checkEvenParity(data, p, 7)}`);   // true\r\nconsole.log(`With error: ${checkEvenParity(data, p ^ 1, 7)}`); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "512-timing-hazards-in-combinational-circuits",
      children: "5.12 Timing Hazards in Combinational Circuits"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hazard"
      }), " is a momentary glitch on the output caused by unequal propagation delays through different paths."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5121-static-hazards",
      children: "5.12.1 Static Hazards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static-1 hazard:"
        }), " output should remain 1 but briefly dips to 0"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static-0 hazard:"
        }), " output should remain 0 but briefly rises to 1"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph LR\r\n    A[A] --> AND1[&]\r\n    A --> INV[NOT]\r\n    INV --> AND2[&]\r\n    B[B] --> AND1\r\n    B --> AND2\r\n    AND1 --> OR[=1]\r\n    AND2 --> OR\r\n    OR --> Y[Y]\r\n    style Y fill:#faa,stroke:#f00,stroke-width:2px"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The circuit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Y = A?B + ?A?B"
      }), " has a static-1 hazard when B=1 and A transitions. The fix is to add the consensus term ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B"
      }), " (redundant logic)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5122-dynamic-hazards",
      children: "5.12.2 Dynamic Hazards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dynamic hazard"
      }), " causes the output to oscillate multiple times before settling. These occur when there are three or more paths with different delays."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5123-hazard-detection-and-elimination",
      children: "5.12.3 Hazard Detection and Elimination"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hazards are detected by examining the K-map: if adjacent minterms are covered by different product terms, a hazard exists. The fix is to add the redundant prime implicant that bridges the gap."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Hazard-prone circuit: F = A?B + ?A?C\r\nfunction hazardF(A: number, B: number, C: number): number {\r\n    return (A & B) | (~A & C);\r\n}\r\n\r\n// Hazard-free circuit: F = A?B + ?A?C + B?C (consensus term added)\r\nfunction hazardFreeF(A: number, B: number, C: number): number {\r\n    return (A & B) | (~A & C) | (B & C);\r\n}\r\n\r\n// Test all transitions\r\nfor (let a = 0; a <= 1; a++) {\r\n    for (let b = 0; b <= 1; b++) {\r\n        for (let c = 0; c <= 1; c++) {\r\n            const f1 = hazardF(a, b, c);\r\n            const f2 = hazardFreeF(a, b, c);\r\n            console.log(`A=${a} B=${b} C=${c} ? F=${f1} F_hf=${f2}`);\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "513-practical-design-considerations",
      children: "5.13 Practical Design Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5131-fan-out-and-loading",
      children: "5.13.1 Fan-Out and Loading"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each gate output can drive a limited number of inputs (fan-out). Exceeding the fan-out degrades noise margins and increases delay."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Gate Family"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Fan-Out"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TTL (74LS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10?20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CMOS (74HC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced CMOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5132-propagation-delay-comparison",
      children: "5.13.2 Propagation Delay Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Adder Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "4-bit Delay"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "16-bit Delay"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "64-bit Delay"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ripple-Carry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 tp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 tp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64 tp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Carry-Lookahead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 tp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 tp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 tp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Carry-Select"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 tp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 tp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 tp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Brent-Kung"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 tp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 tp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5133-power-optimisation",
      children: "5.13.3 Power Optimisation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Operand isolation:"
        }), " gate the inputs to unused ALU functions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data gating:"
        }), " disable the adder when the ALU performs a logic operation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Low-power encoding:"
        }), " use Gray code for multi-bit transitions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ripple-carry adders are simple but slow"
        }), " ? use CLA or CSA for high-performance datapaths"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiplexers implement any Boolean function"
        }), " ? a 2n:1 MUX + inverter is universal for n-variable functions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priority encoders prevent metastability"
        }), " ? always handle the case where no input is active"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hazards matter in asynchronous paths"
        }), " ? add redundant consensus terms to eliminate static hazards"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design for testability"
        }), " ? include scan chains and observability points in complex combinational blocks"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Decoder (N:2^N) ===\r\nclass Decoder {\r\n    static decode(input: number, n: number): number[] {\r\n        const outputs = new Array(1 << n).fill(0);\r\n        if (input < outputs.length) outputs[input] = 1;\r\n        return outputs;\r\n    }\r\n}\r\n\r\n// === Priority Encoder ===\r\nclass PriorityEncoder {\r\n    static encode(inputs: number[]): { code: number; valid: boolean } {\r\n        for (let i = inputs.length - 1; i >= 0; i--) {\r\n            if (inputs[i] === 1) return { code: i, valid: true };\r\n        }\r\n        return { code: 0, valid: false };\r\n    }\r\n}\r\n\r\n// === Multiplexer ===\r\nclass Multiplexer {\r\n    static mux2(inputs: [number, number], sel: number): number { return inputs[sel]; }\r\n    static mux4(inputs: number[], sel: number): number { return inputs[sel] ?? 0; }\r\n    static mux8(inputs: number[], sel: number): number { return inputs[sel] ?? 0; }\r\n}\r\n\r\n// === Demultiplexer ===\r\nclass Demultiplexer {\r\n    static demux1_2(input: number, sel: number): number[] {\r\n        const out = [0, 0]; out[sel] = input; return out;\r\n    }\r\n    static demux1_4(input: number, sel: number): number[] {\r\n        const out = [0, 0, 0, 0]; out[sel] = input; return out;\r\n    }\r\n}\r\n\r\n// === Comparator ===\r\nclass Comparator {\r\n    static compare4(a: number, b: number): { gt: number; eq: number; lt: number } {\r\n        return {\r\n            gt: a > b ? 1 : 0,\r\n            eq: a === b ? 1 : 0,\r\n            lt: a < b ? 1 : 0,\r\n        };\r\n    }\r\n    static compare8(a: number, b: number): { gt: number; eq: number; lt: number } {\r\n        const h = Comparator.compare4(a >> 4, b >> 4);\r\n        if (h.gt || h.lt) return h;\r\n        return Comparator.compare4(a & 0xF, b & 0xF);\r\n    }\r\n}\r\n\r\n// === ALU (4-bit) ===\r\nclass ALU4 {\r\n    static operate(a: number, b: number, op: number): { result: number; flags: { zero: number; carry: number } } {\r\n        let result = 0;\r\n        switch (op) {\r\n            case 0: result = a & b; break;       // AND\r\n            case 1: result = a | b; break;       // OR\r\n            case 2: result = a ^ b; break;       // XOR\r\n            case 3: result = ~a & 0xF; break;    // NOT A\r\n            case 4: result = (a + b) & 0xF; break; // ADD\r\n            case 5: result = (a - b) & 0xF; break; // SUB\r\n            case 6: result = (a << 1) & 0xF; break; // SHL\r\n            case 7: result = (a >> 1) & 0xF; break; // SHR\r\n        }\r\n        const carry = op === 4 && (a + b) > 15 ? 1 : op === 5 && a < b ? 1 : 0;\r\n        return { result, flags: { zero: result === 0 ? 1 : 0, carry } };\r\n    }\r\n}\r\n\r\n// === Full Adder ===\r\nfunction fullAdder(a: number, b: number, cin: number): { sum: number; cout: number } {\r\n    const sum = a ^ b ^ cin;\r\n    const cout = (a & b) | (cin & (a ^ b));\r\n    return { sum, cout };\r\n}\r\n\r\n// === Ripple-Carry Adder (8-bit) ===\r\nfunction rippleCarry8(a: number, b: number): { sum: number; carry: number } {\r\n    let sum = 0, carry = 0;\r\n    for (let i = 0; i < 8; i++) {\r\n        const ba = (a >> i) & 1, bb = (b >> i) & 1;\r\n        const fa = fullAdder(ba, bb, carry);\r\n        sum |= (fa.sum << i);\r\n        carry = fa.cout;\r\n    }\r\n    return { sum, carry };\r\n}\r\n\r\n// === Parity Generator / Checker ===\r\nclass Parity {\r\n    static evenParity(data: number, bits: number): number {\r\n        let p = 0;\r\n        for (let i = 0; i < bits; i++) p ^= (data >> i) & 1;\r\n        return p;\r\n    }\r\n    static checkEven(data: number, bits: number, parity: number): boolean {\r\n        return Parity.evenParity(data, bits) === parity;\r\n    }\r\n}\r\n\r\n// === Demo ===\r\nconsole.log('Decoder 3:8 input=5:', Decoder.decode(5, 3));\r\nconsole.log('PriorityEncoder [0,1,0,1]:', PriorityEncoder.encode([0, 1, 0, 1]));\r\nconsole.log('MUX4([10,20,30,40], sel=2):', Multiplexer.mux4([10, 20, 30, 40], 2));\r\nconsole.log('ALU4 ADD(7, 6):', ALU4.operate(7, 6, 4));\r\nconsole.log('RippleCarry8(200, 55):', rippleCarry8(200, 55));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// combinational circuits\r\n// boolean-circuits-sequential implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\r\nclass Processor {\r\nprivate tasks: Task[] = []\r\nprivate maxConcurrency: number\r\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\r\nasync add(task: Omit<Task, \"status\">): Promise<void> {\r\nthis.tasks.push({ ...task, status: \"pending\" })\r\n}\r\nasync runAll(): Promise<void> {\r\nconst running: Promise<void>[] = []\r\nfor (const t of this.tasks) {\r\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\r\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\r\nrunning.push(p)\r\n}\r\nawait Promise.all(running)\r\n}\r\nprivate async execute(t: Task): Promise<void> {\r\nt.status = \"running\"\r\nawait new Promise(r => setTimeout(r, 10))\r\nt.status = \"done\"\r\n}\r\ngetResults(): Task[] { return this.tasks }\r\ngetStats(): { done: number; pending: number; running: number } {\r\nconst done = this.tasks.filter(t => t.status === \"done\").length\r\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\r\nconst running = this.tasks.filter(t => t.status === \"running\").length\r\nreturn { done, pending, running }\r\n}\r\n}\r\nasync function main() {\r\nconst proc = new Processor(2)\r\nawait proc.add({ id: '1', name: 'combinational circuits', data: { topic: 'boolean-circuits-sequential' } })\r\nawait proc.runAll()\r\nconsole.log('Stats:', proc.getStats())\r\n}\r\nmain().catch(console.error)\r\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// combinational circuits - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\r\nclass Cache {\r\nprivate store: Map<string, CacheEntry> = new Map()\r\nconstructor(private defaultTTL: number = 60000) {}\r\nset(key: string, value: unknown, ttl?: number): void {\r\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\r\n}\r\nget(key: string): unknown | undefined {\r\nconst entry = this.store.get(key)\r\nif (!entry) return undefined\r\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\r\nreturn entry.value\r\n}\r\ndelete(key: string): boolean { return this.store.delete(key) }\r\nclear(): void { this.store.clear() }\r\nsize(): number { return this.store.size }\r\nkeys(): string[] { return Array.from(this.store.keys()) }\r\n}\r\nclass Logger {\r\nprivate entries: string[] = []\r\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\r\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\r\nthis.entries.push(entry)\r\nconsole.log(entry)\r\n}\r\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\r\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\r\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\r\ngetLogs(): string[] { return [...this.entries] }\r\nclear(): void { this.entries = [] }\r\n}\r\nfunction computeHash(input: string): string {\r\nlet hash = 0\r\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\r\nreturn Math.abs(hash).toString(16)\r\n}\r\nasync function demo(): Promise<void> {\r\nconst cache = new Cache(5000)\r\ncache.set('key1', 'digital-circuits demo')\r\nconst log = new Logger()\r\nlog.info('Cache demo started', { course: 'digital-logic', chapter: 'combinational circuits' })\r\nconst v = cache.get(\"key1\")\r\nconsole.log('Cached:', v)\r\nconsole.log('Hash:', computeHash('digital-circuits'))\r\n}\r\ndemo()\r\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Combinational circuits form the computational fabric of digital systems. This chapter covered the full design spectrum: from simple half-adders through carry-lookahead adders, multiplexers, decoders, encoders, comparators, and a complete ALU. Each circuit type was presented with minimised Boolean equations, gate-level implementations, TypeScript simulations, and practical trade-off analysis. The next chapter extends these concepts by adding state ? introducing sequential circuits that combine combinational logic with memory elements."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What is the critical path delay of a 32-bit ripple-carry adder?\r\na) t_FA + 31 ? t_carry\r\nb) 32 ? t_FA\r\nc) t_carry + t_sum\r\nd) log2(32) ? t_FA"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " The carry-lookahead adder computes carries in parallel using which two signals?\r\na) Generate and Propagate\r\nb) Set and Reset\r\nc) Lookahead and Feedback\r\nd) Sum and Carry"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " A 4:1 multiplexer requires how many select lines?\r\na) 1\r\nb) 2\r\nc) 3\r\nd) 4"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " A static-1 hazard occurs when:\r\na) The output oscillates before settling\r\nb) The output is stuck at 1 regardless of input\r\nc) The output briefly drops to 0 when it should remain 1\r\nd) The output briefly rises to 1 when it should remain 0"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " In a priority encoder, when multiple inputs are active simultaneously:\r\na) All active inputs are encoded\r\nb) The lowest-priority input is encoded\r\nc) The highest-priority input is encoded\r\nd) The output is undefined"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answers",
      children: "Answers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q1: a | Q2: a | Q3: b | Q4: c | Q5: c"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Ripple-carry adder:"
          }), " Write a TypeScript function that computes the sum of two 8-bit numbers using a cascade of full adders. Verify correctness for 10 random test cases."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CLA extension:"
          }), " Extend the 4-bit CLA to handle 8 bits using two 4-bit CLA blocks with block generate/propagate logic. Measure the delay improvement over ripple-carry."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Priority encoder:"
          }), " Design a 16:4 priority encoder using a hierarchical approach (four 4:2 encoders feeding a second-stage encoder). Implement in TypeScript."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ALU extension:"
          }), " Add shift-left, shift-right, and NOR operations to the 4-bit ALU. Show the control encoding and verify with a test harness."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hazard analysis:"
          }), " For the function F = A?C + B??C, identify all static hazards and write TypeScript code to verify the hazard-free version."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Comparator tree:"
          }), " Design an 8-bit comparator using a tree of 4-bit comparator blocks. Implement in TypeScript and compare the delay with an iterative design."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BCD to excess-3 converter:"
          }), " Write truth tables, minimise using K-maps, and implement a BCD-to-Excess-3 code converter in TypeScript."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Parity checker network:"
          }), " Design a 16-bit parity generator/checker using a tree of 2-input XOR gates. Measure the critical path depth."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-function logic unit:"
          }), " Design a circuit that can perform any of the 16 possible 2-input Boolean functions (AND, OR, XOR, NAND, etc.) using a single 4:1 MUX per output bit."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "FPGA adder comparison:"
          }), " Write TypeScript to model the area (gate count) and delay for 8-bit RCA, CLA, and carry-select adders. Plot the trade-off curve."]
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



/***/ }

}]);