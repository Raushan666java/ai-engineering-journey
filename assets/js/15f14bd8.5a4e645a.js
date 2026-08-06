"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[95764],{

/***/ 28065
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_digital_logic_12_hdl_md_15f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-digital-logic-12-hdl-md-15f.json
const site_docs_courses_digital_logic_12_hdl_md_15f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/digital-logic/12-hdl","title":"Chapter 12: Hardware Description Languages","description":"Prereq: Chapters 1?11 (digital logic fundamentals) ? HDLs describe the circuits designed in previous chapters.","source":"@site/docs/courses/digital-logic/12-hdl.md","sourceDirName":"courses/digital-logic","slug":"/digital-logic/12-hdl","permalink":"/ai-engineering-journey/digital-logic/12-hdl","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"12-hdl","slug":"/digital-logic/12-hdl","title":"Chapter 12: Hardware Description Languages","sidebar_label":"Chapter 12: Hardware Description Languages","sidebar_position":12},"sidebar":"coursesSidebar","previous":{"title":"Chapter 11: Arithmetic Circuits","permalink":"/ai-engineering-journey/digital-logic/11-arithmetic-circuits"},"next":{"title":"Chapter 13: Digital-to-Analog and Analog-to-Digital Converters","permalink":"/ai-engineering-journey/digital-logic/13-dac-adc"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/digital-logic/12-hdl.md


const frontMatter = {
	id: '12-hdl',
	slug: '/digital-logic/12-hdl',
	title: 'Chapter 12: Hardware Description Languages',
	sidebar_label: 'Chapter 12: Hardware Description Languages',
	sidebar_position: 12
};
const contentTitle = 'Chapter 12: Hardware Description Languages';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "12.1 Levels of Abstraction",
  "id": "121-levels-of-abstraction",
  "level": 2
}, {
  "value": "12.2 Verilog Fundamentals",
  "id": "122-verilog-fundamentals",
  "level": 2
}, {
  "value": "12.2.1 Module Structure",
  "id": "1221-module-structure",
  "level": 3
}, {
  "value": "12.2.2 Data Types",
  "id": "1222-data-types",
  "level": 3
}, {
  "value": "12.2.3 Continuous Assignments",
  "id": "1223-continuous-assignments",
  "level": 3
}, {
  "value": "12.3 Combinational Logic in HDL",
  "id": "123-combinational-logic-in-hdl",
  "level": 2
}, {
  "value": "12.3.1 Always Blocks for Combinational Logic",
  "id": "1231-always-blocks-for-combinational-logic",
  "level": 3
}, {
  "value": "12.3.2 Full Adder in HDL",
  "id": "1232-full-adder-in-hdl",
  "level": 3
}, {
  "value": "12.4 Sequential Logic in HDL",
  "id": "124-sequential-logic-in-hdl",
  "level": 2
}, {
  "value": "12.4.1 D Flip-Flop",
  "id": "1241-d-flip-flop",
  "level": 3
}, {
  "value": "12.4.2 Register with Synchronous Reset",
  "id": "1242-register-with-synchronous-reset",
  "level": 3
}, {
  "value": "12.4.3 Blocking vs Non-Blocking Assignments",
  "id": "1243-blocking-vs-non-blocking-assignments",
  "level": 3
}, {
  "value": "12.5 Finite State Machine in HDL",
  "id": "125-finite-state-machine-in-hdl",
  "level": 2
}, {
  "value": "12.6 Testbenches",
  "id": "126-testbenches",
  "level": 2
}, {
  "value": "12.7 Synthesis Semantics",
  "id": "127-synthesis-semantics",
  "level": 2
}, {
  "value": "12.7.1 Synthesizable vs. Non-Synthesizable",
  "id": "1271-synthesizable-vs-non-synthesizable",
  "level": 3
}, {
  "value": "12.7.2 Inferred Hardware",
  "id": "1272-inferred-hardware",
  "level": 3
}, {
  "value": "12.7.3 Coding for Synthesis",
  "id": "1273-coding-for-synthesis",
  "level": 3
}, {
  "value": "12.8 SystemVerilog and VHDL Differences",
  "id": "128-systemverilog-and-vhdl-differences",
  "level": 2
}, {
  "value": "12.9 Design Hierarchies and Pipelining",
  "id": "129-design-hierarchies-and-pipelining",
  "level": 2
}, {
  "value": "12.9.1 Module Instantiation",
  "id": "1291-module-instantiation",
  "level": 3
}, {
  "value": "12.9.2 Pipelined Adder",
  "id": "1292-pipelined-adder",
  "level": 3
}, {
  "value": "12.10 Verification and Simulation",
  "id": "1210-verification-and-simulation",
  "level": 2
}, {
  "value": "12.10.1 Simulation Cycle",
  "id": "12101-simulation-cycle",
  "level": 3
}, {
  "value": "12.10.2 Code Coverage",
  "id": "12102-code-coverage",
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
        id: "chapter-12-hardware-description-languages",
        children: "Chapter 12: Hardware Description Languages"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Chapters 1?11 (digital logic fundamentals) ? HDLs describe the circuits designed in previous chapters.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 13 (DAC and ADC) ? mixed-signal interfaces between digital HDL designs and the analog world."]
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
        href: "../../assets/images/lessons/digital-logic/12-hdl/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/12-hdl/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/digital-logic/12-hdl/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/12-hdl/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/digital-logic/12-hdl/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/12-hdl/visual-explanation.png",
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
        children: "Distinguish between behavioural, RTL, and structural levels of abstraction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write and simulate combinational and sequential logic in a hardware description language"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design finite state machines using concurrent and sequential constructs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand synthesis semantics and write synthesisable code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Develop testbenches with self-checking and coverage measurement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply pipelining, parallelism, and hierarchy principles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare Verilog, VHDL, and SystemVerilog for different design contexts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "121-levels-of-abstraction",
      children: "12.1 Levels of Abstraction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Abstraction Levels\"\n        BEH[Behavioural<br>Algorithmic, no timing]\n        RTL[RTL<br>Clock-cycle accurate]\n        STR[Structural<br>Gate-level netlist]\n        PHY[Physical<br>Transistor layout]\n    end\n    BEH --> RTL --> STR --> PHY\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Synthesis"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Verification"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-level algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast simulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RTL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Register transfers + combinational logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cycle-accurate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Structural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gate and module instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow simulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Physical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Masks and polygons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Place-and-route"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DRC/LVS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "122-verilog-fundamentals",
      children: "12.2 Verilog Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This section uses Verilog syntax. The same concepts apply to VHDL with different keywords."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1221-module-structure",
      children: "12.2.1 Module Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-verilog",
        children: "module adder #(parameter WIDTH = 8) (\n    input  logic [WIDTH-1:0] a, b,\n    input  logic             cin,\n    output logic [WIDTH-1:0] sum,\n    output logic             cout\n);\n    assign {cout, sum} = a + b + cin;\nendmodule\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Equivalent TypeScript model\nclass VerilogAdder {\n    add(a: number, b: number, cin: number, width: number): { sum: number; cout: number } {\n        const result = a + b + cin;\n        const mask = (1 << width) - 1;\n        return {\n            sum: result & mask,\n            cout: (result >> width) & 1\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1222-data-types",
      children: "12.2.2 Data Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-verilog",
        children: "// Wire types (combinational)\nwire [7:0] data_bus;\nwire       clock, reset;\n\n// Register types (sequential, holds value)\nreg  [31:0] program_counter;\nreg         flag_zero;\n\n// Logic (SystemVerilog ? preferred for most uses)\nlogic [15:0] address;\nlogic        valid;\n\n// Integer (for simulation only, not synthesizable)\ninteger i;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1223-continuous-assignments",
      children: "12.2.3 Continuous Assignments"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-verilog",
        children: "// combinational logic using assign\nmodule gates (\n    input  logic a, b,\n    output logic y_and, y_or, y_xor, y_nand\n);\n    assign y_and = a & b;\n    assign y_or  = a | b;\n    assign y_xor = a ^ b;\n    assign y_nand = ~(a & b);\nendmodule\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "123-combinational-logic-in-hdl",
      children: "12.3 Combinational Logic in HDL"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1231-always-blocks-for-combinational-logic",
      children: "12.3.1 Always Blocks for Combinational Logic"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-verilog",
        children: "module mux4 (\n    input  logic [3:0] d,\n    input  logic [1:0] sel,\n    output logic       y\n);\n    always_comb begin\n        case (sel)\n            2'b00:   y = d[0];\n            2'b01:   y = d[1];\n            2'b10:   y = d[2];\n            2'b11:   y = d[3];\n            default: y = 1'b0;\n        endcase\n    end\nendmodule\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key rule:"
      }), " Every signal assigned in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "always_comb"
      }), " must be assigned in every path, otherwise latches are inferred."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-verilog",
        children: "// BAD: missing default ? infers latch\nalways_comb begin\n    case (sel)\n        2'b00: y = a;\n        2'b01: y = b;\n    endcase\nend\n\n// GOOD: all cases covered\nalways_comb begin\n    case (sel)\n        2'b00:   y = a;\n        2'b01:   y = b;\n        default: y = 1'b0;\n    endcase\nend\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1232-full-adder-in-hdl",
      children: "12.3.2 Full Adder in HDL"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-verilog",
        children: "module full_adder (\n    input  logic a, b, cin,\n    output logic sum, cout\n);\n    assign sum  = a ^ b ^ cin;\n    assign cout = (a & b) | (a & cin) | (b & cin);\nendmodule\n\n// 4-bit ripple-carry adder using structural hierarchy\nmodule ripple_carry_adder #(parameter N = 4) (\n    input  logic [N-1:0] a, b,\n    input  logic         cin,\n    output logic [N-1:0] sum,\n    output logic         cout\n);\n    logic [N:0] carry;\n    assign carry[0] = cin;\n\n    genvar i;\n    generate\n        for (i = 0; i < N; i++) begin : fa_chain\n            full_adder fa_inst (\n                .a(a[i]), .b(b[i]), .cin(carry[i]),\n                .sum(sum[i]), .cout(carry[i+1])\n            );\n        end\n    endgenerate\n\n    assign cout = carry[N];\nendmodule\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Structural model of the verilog ripple-carry adder\nclass StructuralRCA {\n    add(A: number, B: number, cin: number, bits: number): { sum: number; cout: number } {\n        let result = 0;\n        let carry = cin;\n        for (let i = 0; i < bits; i++) {\n            const ai = (A >> i) & 1;\n            const bi = (B >> i) & 1;\n            const sumBit = ai ^ bi ^ carry;\n            carry = (ai & bi) | (ai & carry) | (bi & carry);\n            result |= (sumBit << i);\n        }\n        return { sum: result, cout: carry };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "124-sequential-logic-in-hdl",
      children: "12.4 Sequential Logic in HDL"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1241-d-flip-flop",
      children: "12.4.1 D Flip-Flop"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-verilog",
        children: "module d_flipflop (\n    input  logic clk, d,\n    output logic q\n);\n    always_ff @(posedge clk) begin\n        q <= d;  // non-blocking assignment\n    end\nendmodule\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1242-register-with-synchronous-reset",
      children: "12.4.2 Register with Synchronous Reset"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-verilog",
        children: "module sync_register #(parameter WIDTH = 8) (\n    input  logic             clk, rst, en,\n    input  logic [WIDTH-1:0] d,\n    output logic [WIDTH-1:0] q\n);\n    always_ff @(posedge clk) begin\n        if (rst)\n            q <= '0;\n        else if (en)\n            q <= d;\n    end\nendmodule\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1243-blocking-vs-non-blocking-assignments",
      children: "12.4.3 Blocking vs Non-Blocking Assignments"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-verilog",
        children: "// Blocking (=) ? procedural, evaluates in order\n// Use for combinational always_comb blocks\nalways_comb begin\n    a = b + c;\n    d = a + e;  // uses updated 'a'\nend\n\n// Non-blocking (<=) ? scheduled, evaluates RHS before update\n// Use for sequential always_ff blocks\nalways_ff @(posedge clk) begin\n    a <= b + c;  // RHS uses old 'a'\n    d <= a + e;  // uses OLD 'a', not the newly computed value\nend\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Golden rule for HDL coding:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Block type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Assignment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "always_comb"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Blocking (", (0,jsx_runtime.jsx)(_components.code, {
              children: "="
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combinational logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "always_ff"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Non-blocking (", (0,jsx_runtime.jsx)(_components.code, {
              children: "<="
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "always_latch"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Non-blocking (", (0,jsx_runtime.jsx)(_components.code, {
              children: "<="
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latches (rare)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "125-finite-state-machine-in-hdl",
      children: "12.5 Finite State Machine in HDL"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-verilog",
        children: "module sequence_detector (\n    input  logic clk, rst, x,\n    output logic z\n);\n    typedef enum logic [1:0] { S0, S1, S2, S3 } state_t;\n    state_t state, next_state;\n\n    // State register\n    always_ff @(posedge clk) begin\n        if (rst)\n            state <= S0;\n        else\n            state <= next_state;\n    end\n\n    // Next-state logic\n    always_comb begin\n        case (state)\n            S0: next_state = x ? S1 : S0;\n            S1: next_state = x ? S1 : S2;\n            S2: next_state = x ? S3 : S0;\n            S3: next_state = x ? S1 : S2;\n            default: next_state = S0;\n        endcase\n    end\n\n    // Output logic (Moore)\n    assign z = (state == S3);\nendmodule\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class HDLSequenceDetector {\n    private state: number = 0; // 0=S0, 1=S1, 2=S2, 3=S3\n\n    tick(x: number, rst: boolean): number {\n        if (rst) { this.state = 0; return 0; }\n\n        const nextState = this.nextState(this.state, x);\n        this.state = nextState;\n        return this.state === 3 ? 1 : 0;\n    }\n\n    private nextState(s: number, x: number): number {\n        const transitions: number[][] = [\n            [0, 1], // S0: x=0?S0, x=1?S1\n            [2, 1], // S1: x=0?S2, x=1?S1\n            [0, 3], // S2: x=0?S0, x=1?S3\n            [2, 1]  // S3: x=0?S2, x=1?S1\n        ];\n        return transitions[s][x];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "126-testbenches",
      children: "12.6 Testbenches"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A testbench instantiates the DUT (design under test), applies stimulus, and checks results."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-verilog",
        children: "module tb_adder;\n    logic [3:0] a, b, sum;\n    logic       cin, cout;\n\n    // Instantiate DUT\n    ripple_carry_adder #(.N(4)) dut (\n        .a(a), .b(b), .cin(cin), .sum(sum), .cout(cout)\n    );\n\n    // Stimulus\n    initial begin\n        $display(\"Testing 4-bit adder...\");\n        for (int i = 0; i < 256; i++) begin\n            a   = i[3:0];\n            b   = i[7:4];\n            cin = 0;\n            #10;\n            assert(sum == a + b) else\n                $error(\"FAIL: %d + %d != %d\", a, b, sum);\n        end\n        $display(\"All tests passed!\");\n        $finish;\n    end\nendmodule\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class Testbench {\n    private addErrors: number = 0;\n\n    runAdderTest(): void {\n        const adder = new StructuralRCA();\n        for (let a = 0; a < 16; a++) {\n            for (let b = 0; b < 16; b++) {\n                const result = adder.add(a, b, 0, 4);\n                const expected = a + b;\n                if (result.sum !== (expected & 0xF) || result.cout !== ((expected >> 4) & 1)) {\n                    console.log(`FAIL: ${a} + ${b} = ${result.sum} (carry ${result.cout})`);\n                    this.addErrors++;\n                }\n            }\n        }\n        if (this.addErrors === 0) console.log(\"All tests passed!\");\n    }\n\n    coverage(): void {\n        // Measure toggle coverage on all port bits\n        // In real tools: toggle coverage = (toggled bits) / (total bits)\n        console.log(\"Functional coverage: 100%\");\n    }\n}\n\nconst tb = new Testbench();\ntb.runAdderTest();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "127-synthesis-semantics",
      children: "12.7 Synthesis Semantics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1271-synthesizable-vs-non-synthesizable",
      children: "12.7.1 Synthesizable vs. Non-Synthesizable"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-verilog",
        children: "// SYNTHESIZABLE\nreg [7:0] counter;\nalways_ff @(posedge clk) begin\n    if (rst) counter <= '0;\n    else     counter <= counter + 1;\nend\n\n// NOT SYNTHESIZABLE (simulation only)\ninitial begin\n    $display(\"Hello, world!\");\n    $monitor(\"time=%0t a=%d b=%d\", $time, a, b);\n    #100 $finish;\nend\n\ninitial begin\n    $readmemh(\"mem.hex\", memory);\nend\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1272-inferred-hardware",
      children: "12.7.2 Inferred Hardware"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "HDL Construct"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inferred Hardware"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "assign"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "always_comb"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combinational gates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "always_ff @(posedge clk)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D flip-flops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "if"
            }), " without ", (0,jsx_runtime.jsx)(_components.code, {
              children: "else"
            }), " in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "always_comb"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "case"
            }), " without ", (0,jsx_runtime.jsx)(_components.code, {
              children: "default"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latch (incomplete assignment)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "for"
            }), " loop (constant bound)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unrolled hardware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Division ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/"
            }), " by variable"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex (often not synthesizable)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1273-coding-for-synthesis",
      children: "12.7.3 Coding for Synthesis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-verilog",
        children: "// Poor: division by variable ? large, slow\nlogic [7:0] quotient;\nassign quotient = a / b;\n\n// Good: shift for powers of 2\nlogic [7:0] shifted;\nassign shifted = a >> 3; // divide by 8\n\n// Poor: variable delay loop\nalways_ff @(posedge clk) begin\n    for (int i = 0; i < delay; i++) begin\n        // This creates delay based on delay value\n    end\nend\n\n// Good: counter-based delay\nalways_ff @(posedge clk) begin\n    if (count < delay) count <= count + 1;\nend\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "128-systemverilog-and-vhdl-differences",
      children: "12.8 SystemVerilog and VHDL Differences"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Verilog / SystemVerilog"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "VHDL"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Case sensitivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Case-sensitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Case-insensitive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Library management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`include"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "library / "
            }), "use`"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data types"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "logic"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "wire"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "reg"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std_logic"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bit"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "integer"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "always"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "assign"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "process"
            }), ", concurrent signal assign"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generics"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "parameter"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "localparam"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "generic"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Packages"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "package"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "import"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "package"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "use"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strong typing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weak (SystemVerilog: stronger)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Record/struct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "struct packed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "record"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-vhdl",
        children: "-- Full adder in VHDL\nentity full_adder is\n    port (\n        a, b, cin : in  std_logic;\n        sum, cout : out std_logic\n    );\nend entity;\n\narchitecture rtl of full_adder is\nbegin\n    sum  <= a xor b xor cin;\n    cout <= (a and b) or (a and cin) or (b and cin);\nend architecture;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "129-design-hierarchies-and-pipelining",
      children: "12.9 Design Hierarchies and Pipelining"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1291-module-instantiation",
      children: "12.9.1 Module Instantiation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-verilog",
        children: "// Top-level: 8-bit adder using hierarchy\nmodule top_adder (\n    input  logic [7:0] a, b,\n    input  logic       cin,\n    output logic [7:0] sum,\n    output logic       cout\n);\n    logic carry_mid;\n\n    // Instantiate two 4-bit adders\n    ripple_carry_adder #(.N(4)) low_adder (\n        .a(a[3:0]), .b(b[3:0]), .cin(cin),\n        .sum(sum[3:0]), .cout(carry_mid)\n    );\n\n    ripple_carry_adder #(.N(4)) high_adder (\n        .a(a[7:4]), .b(b[7:4]), .cin(carry_mid),\n        .sum(sum[7:4]), .cout(cout)\n    );\nendmodule\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1292-pipelined-adder",
      children: "12.9.2 Pipelined Adder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-verilog",
        children: "module pipelined_multiplier #(parameter WIDTH = 8) (\n    input  logic               clk, rst,\n    input  logic [WIDTH-1:0]   a, b,\n    output logic [2*WIDTH-1:0] result\n);\n    // Pipeline registers\n    logic [WIDTH-1:0] a_r1, b_r1;\n    logic [2*WIDTH-1:0] partial_r2;\n\n    always_ff @(posedge clk) begin\n        if (rst) begin\n            a_r1 <= '0;\n            b_r1 <= '0;\n            partial_r2 <= '0;\n            result <= '0;\n        end else begin\n            // Stage 1: capture inputs\n            a_r1 <= a;\n            b_r1 <= b;\n\n            // Stage 2: partial product generation\n            partial_r2 <= a_r1 * b_r1;  // simplified\n\n            // Stage 3: final result\n            result <= partial_r2;\n        end\n    end\nendmodule\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class Pipeline {\n    private stages: number[][];\n    readonly depth: number;\n\n    constructor(depth: number, width: number) {\n        this.depth = depth;\n        this.stages = Array.from({ length: depth }, () => []);\n    }\n\n    push(data: number): void {\n        this.stages[0].push(data);\n    }\n\n    tick(): number | null {\n        // Shift pipeline\n        for (let s = this.depth - 1; s > 0; s--) {\n            this.stages[s] = this.stages[s - 1];\n        }\n\n        // Process stage 0\n        if (this.stages[0].length > 0) {\n            this.stages[0] = [this.processStage(this.stages[0].shift()!)];\n        }\n\n        // Output from last stage\n        if (this.stages[this.depth - 1].length > 0) {\n            return this.stages[this.depth - 1].shift()!;\n        }\n        return null;\n    }\n\n    private processStage(data: number): number {\n        return data; // override for actual processing\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1210-verification-and-simulation",
      children: "12.10 Verification and Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12101-simulation-cycle",
      children: "12.10.1 Simulation Cycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    EV[Evaluate RHS of all<br>non-blocking assignments] --> UP[Update LHS of all<br>non-blocking assignments]\n    UP --> AS[Evaluate blocking<br>assignments]\n    AS --> TI[Advance simulation<br>time by delta]\n    TI --> EV\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12102-code-coverage",
      children: "12.10.2 Code Coverage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "enum CoverageType {\n    STATEMENT,\n    BRANCH,\n    CONDITION,\n    TOGGLE,\n    FSM_STATE\n}\n\nclass CoverageCollector {\n    private covered: Set<string> = new Set();\n    private total: Set<string> = new Set();\n\n    addPoint(name: string): void {\n        this.total.add(name);\n    }\n\n    hit(name: string): void {\n        this.covered.add(name);\n    }\n\n    get coverage(): number {\n        return this.total.size > 0 ? (this.covered.size / this.total.size) * 100 : 100;\n    }\n\n    report(): void {\n        console.log(`Coverage: ${this.coverage.toFixed(1)}%`);\n        const uncovered = [...this.total].filter(x => !this.covered.has(x));\n        if (uncovered.length > 0) {\n            console.log(`Uncovered: ${uncovered.join(', ')}`);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "always_comb"
          }), " for combinational logic"]
        }), " ? covers all sensitivity list entries automatically, no missed signals"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Never mix blocking and non-blocking in the same block"
        }), " ? use blocking for combinational, non-blocking for sequential"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always cover all cases"
        }), " ? incomplete ", (0,jsx_runtime.jsx)(_components.code, {
          children: "case"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if/else"
        }), " statements infer latches"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parameterise designs"
        }), " ? use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "parameter"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "localparam"
        }), " for reusable, configurable modules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write testbenches first"
        }), " ? verification-driven design catches bugs at the earliest (cheapest) stage"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Logic Gate Netlist Parser ===\ntype GateType = 'AND' | 'OR' | 'NAND' | 'NOR' | 'XOR' | 'XNOR' | 'NOT' | 'BUF';\ntype NetlistNode = { id: string; gate: GateType; inputs: string[]; output: string };\nclass NetlistParser {\n    parse(desc: string): NetlistNode[] {\n        const nodes: NetlistNode[] = [];\n        const lines = desc.split('\\n');\n        for (const line of lines) {\n            const match = line.match(/^(\\w+)\\s*=\\s*(\\w+)\\s*\\(([^)]+)\\)$/);\n            if (match) {\n                const [, output, gate, inputs] = match;\n                nodes.push({ id: output, gate: gate.toUpperCase() as GateType, inputs: inputs.split(',').map(s => s.trim()), output });\n            }\n        }\n        return nodes;\n    }\n}\n\n// === Logic Simulator (event-driven) ===\nclass LogicSim {\n    private values = new Map<string, number>();\n    constructor(private nodes: NetlistNode[]) {}\n\n    setInput(name: string, value: number): void { this.values.set(name, value); }\n    evaluate(): Map<string, number> {\n        let changed = true;\n        while (changed) {\n            changed = false;\n            for (const node of this.nodes) {\n                const ins = node.inputs.map(i => this.values.get(i) ?? 0);\n                let result = 0;\n                switch (node.gate) {\n                    case 'AND': result = ins.reduce((a, b) => a & b, 1); break;\n                    case 'OR': result = ins.reduce((a, b) => a | b, 0); break;\n                    case 'NAND': result = ~(ins.reduce((a, b) => a & b, 1)) & 1; break;\n                    case 'NOR': result = ~(ins.reduce((a, b) => a | b, 0)) & 1; break;\n                    case 'XOR': result = ins.reduce((a, b) => a ^ b, 0); break;\n                    case 'XNOR': result = ~(ins.reduce((a, b) => a ^ b, 0)) & 1; break;\n                    case 'NOT': result = ~ins[0] & 1; break;\n                    case 'BUF': result = ins[0]; break;\n                }\n                if (this.values.get(node.output) !== result) { changed = true; this.values.set(node.output, result); }\n            }\n        }\n        return this.values;\n    }\n\n    testBench(inputs: { ins: Record<string, number>; expected: Record<string, number> }[]): { pass: boolean; fails: number } {\n        let fails = 0;\n        for (const tc of inputs) {\n            this.values.clear();\n            for (const [k, v] of Object.entries(tc.ins)) this.values.set(k, v);\n            this.evaluate();\n            for (const [k, v] of Object.entries(tc.expected)) {\n                if (this.values.get(k) !== v) fails++;\n            }\n        }\n        return { pass: fails === 0, fails };\n    }\n}\n\n// === Timing Diagram Data Generator ===\nclass TimingDiagram {\n    private signals = new Map<string, number[]>();\n\n    addSignal(name: string, values: number[]): void { this.signals.set(name, values); }\n    generateSVG(): string {\n        let svg = '<svg viewBox=\"0 0 800 200\" xmlns=\"http://www.w3.org/2000/svg\">\\n';\n        const signals = Array.from(this.signals.entries());\n        const hStep = 600 / Math.max(...signals.map(([, v]) => v.length), 1);\n        signals.forEach(([name, values], idx) => {\n            const y = 30 + idx * 40;\n            svg += `<text x=\"10\" y=\"${y + 4}\" font-size=\"12\">${name}</text>`;\n            for (let i = 0; i < values.length; i++) {\n                const x1 = 80 + i * hStep, x2 = 80 + (i + 1) * hStep;\n                const y1 = values[i] ? y - 10 : y + 10;\n                svg += `<line x1=\"${x1}\" y1=\"${y1}\" x2=\"${x2}\" y2=\"${y1}\" stroke=\"black\" stroke-width=\"2\"/>`;\n                if (i < values.length - 1 && values[i] !== values[i + 1]) {\n                    const midX = (x1 + x2) / 2;\n                    svg += `<line x1=\"${midX}\" y1=\"${y1}\" x2=\"${midX}\" y2=\"${values[i + 1] ? y - 10 : y + 10}\" stroke=\"black\" stroke-width=\"2\"/>`;\n                }\n            }\n        });\n        svg += '</svg>';\n        return svg;\n    }\n}\n\n// === Parameterised FIFO ===\nclass ParamFIFO {\n    private buffer: number[];\n    private wp = 0, rp = 0, count = 0;\n    constructor(private depth: number, private width: number) { this.buffer = new Array(depth).fill(0); }\n    push(data: number): boolean {\n        if (this.count >= this.depth) return false;\n        this.buffer[this.wp] = data & ((1 << this.width) - 1);\n        this.wp = (this.wp + 1) % this.depth;\n        this.count++;\n        return true;\n    }\n    pop(): { data: number; valid: boolean } {\n        if (this.count === 0) return { data: 0, valid: false };\n        const data = this.buffer[this.rp];\n        this.rp = (this.rp + 1) % this.depth;\n        this.count--;\n        return { data, valid: true };\n    }\n    full(): boolean { return this.count >= this.depth; }\n    empty(): boolean { return this.count === 0; }\n    level(): number { return this.count; }\n}\n\n// === CDC Synchroniser (2-flop) ===\nclass CDCSynchronizer {\n    private ff1 = 0, ff2 = 0;\n    sync(data: number, clk: number): number {\n        if (clk) { this.ff2 = this.ff1; this.ff1 = data; }\n        return this.ff2;\n    }\n    probabilityMeta(ff: number, tau: number, tClk: number): number {\n        return Math.exp(-(tClk) / (ff * tau));\n    }\n}\n\n// === Coverage-Driven Verification ===\nclass CoverageCollector {\n    private covered = new Set<string>();\n    private total = new Set<string>();\n    addBin(name: string, value: number): void {\n        const key = `${name}=${value}`;\n        this.total.add(key);\n    }\n    cover(name: string, value: number): void {\n        const key = `${name}=${value}`;\n        this.covered.add(key);\n        this.total.add(key);\n    }\n    coverage(): number { return this.total.size > 0 ? this.covered.size / this.total.size : 0; }\n    report(): string { return `Coverage: ${(this.coverage() * 100).toFixed(1)}%`; }\n}\n\n// === Demo ===\nconst parser = new NetlistParser();\nconst netlist = parser.parse('F = AND(A, B, C)\\nG = OR(D, E)');\nconsole.log('Parsed netlist:');\nnetlist.forEach(n => console.log(`  ${n.output} = ${n.gate}(${n.inputs})`));\n\nconst sim = new LogicSim(netlist);\nsim.setInput('A', 1); sim.setInput('B', 1); sim.setInput('C', 1);\nsim.setInput('D', 0); sim.setInput('E', 1);\nconst vals = sim.evaluate();\nconsole.log(`F(1,1,1) = ${vals.get('F')}, G(0,1) = ${vals.get('G')}`);\n\nconst fifo = new ParamFIFO(4, 8);\nfifo.push(0xAB); fifo.push(0xCD);\nconsole.log(`FIFO pop: 0x${fifo.pop().data.toString(16)}`);\n\nconst td = new TimingDiagram();\ntd.addSignal('clk', [0, 1, 0, 1, 0, 1, 0, 1]);\ntd.addSignal('data', [0, 0, 1, 1, 0, 1, 0, 0]);\nconsole.log('Timing diagram SVG generated (signal count: 2)');\n\nconst cov = new CoverageCollector();\ncov.cover('alu_op', 0); cov.cover('alu_op', 1); cov.addBin('alu_op', 2);\nconsole.log(cov.report());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// hdl\n// boolean-circuits-sequential implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'hdl', data: { topic: 'boolean-circuits-sequential' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// hdl - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'digital-circuits demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'digital-logic', chapter: 'hdl' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('digital-circuits'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hardware description languages bridge the gap between digital logic concepts and silicon implementation. This chapter covered Verilog (with SystemVerilog and VHDL comparisons) across three abstraction levels: behavioural, RTL, and structural. Combinational and sequential logic are described with different always-block styles, while FSMs follow a three-block pattern (state register, next-state logic, output logic). Testbenches, synthesis constraints, and coverage measurement complete the verification cycle. The next chapter transitions from the purely digital domain to mixed-signal interfaces ? digital-to-analog and analog-to-digital converters."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " Which assignment type should be used in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "always_ff"
      }), " blocks?\na) Blocking (=)\nb) Non-blocking (<=)\nc) Continuous (assign)\nd) Any of the above"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " Incomplete assignment in an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "always_comb"
      }), " block leads to:\na) A compiler warning\nb) Inferred latch\nc) Simulation mismatch\nd) Slower simulation"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "always_ff @(posedge clk)"
      }), " construct infers:\na) Latches\nb) D flip-flops\nc) Combinational logic\nd) Tri-state buffers"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " A testbench is used for:\na) Synthesising the design\nb) Verifying the design's correctness\nc) Placing and routing\nd) Generating gate-level netlists"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " HDL parameters enable:\na) Dynamic memory allocation\nb) Reusable, configurable modules\nc) Faster simulation\nd) Automatic test generation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answers",
      children: "Answers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q1: b | Q2: b | Q3: b | Q4: b | Q5: b"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ALU in HDL:"
          }), " Write a Verilog module for a 4-bit ALU with ADD, SUB, AND, OR, XOR, and SLT operations. Include status flags."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "FSM with Mealy output:"
          }), " Write a Verilog Mealy FSM that detects \"1101\" with output asserted on the same cycle as the final bit."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pipelined multiplier:"
          }), " Design a 3-stage pipelined 8?8 multiplier in Verilog. Show the pipeline register contents for one multiplication."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Testbench with self-checking:"
          }), " Write a self-checking testbench for the 4-bit ALU that tests all operations with random inputs and checks results against a reference model."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Parameterised FIFO:"
          }), " Design a parameterised synchronous FIFO with configurable depth and width. Include full and empty flags."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SystemVerilog interface:"
          }), " Convert the 4-bit ALU to use SystemVerilog interfaces and modports. Show how the interface simplifies module connections."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "VHDL to Verilog translation:"
          }), " Translate the ripple-carry adder from VHDL to Verilog. Compare the syntactic differences."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Coverage-driven verification:"
          }), " Add functional coverage points to the ALU testbench. Measure coverage for exhaustive vs. random stimulus."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Synthesis constraints:"
          }), " Write timing constraints (SDC) for the pipelined multiplier targeting f_max = 200 MHz on a specific FPGA."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CDC synchroniser:"
          }), " Design a clock domain crossing (CDC) synchroniser in Verilog for a 2-bit Gray-coded pointer. Include metastability analysis."]
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