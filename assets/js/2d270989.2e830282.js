"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[10884],{

/***/ 37803
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_digital_logic_07_state_machines_md_2d2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-digital-logic-07-state-machines-md-2d2.json
const site_docs_courses_digital_logic_07_state_machines_md_2d2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/digital-logic/07-state-machines","title":"Chapter 7: State Machines","description":"Prereq: Chapter 6 (Sequential Circuits) ? flip-flops provide the state memory for state machines.","source":"@site/docs/courses/digital-logic/07-state-machines.md","sourceDirName":"courses/digital-logic","slug":"/digital-logic/07-state-machines","permalink":"/ai-engineering-journey/digital-logic/07-state-machines","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"07-state-machines","slug":"/digital-logic/07-state-machines","title":"Chapter 7: State Machines","sidebar_label":"Chapter 7: State Machines","sidebar_position":7},"sidebar":"coursesSidebar","previous":{"title":"Chapter 6: Sequential Circuits","permalink":"/ai-engineering-journey/digital-logic/06-sequential-circuits"},"next":{"title":"Chapter 8: Registers and Counters","permalink":"/ai-engineering-journey/digital-logic/08-registers-counters"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/digital-logic/07-state-machines.md


const frontMatter = {
	id: '07-state-machines',
	slug: '/digital-logic/07-state-machines',
	title: 'Chapter 7: State Machines',
	sidebar_label: 'Chapter 7: State Machines',
	sidebar_position: 7
};
const contentTitle = 'Chapter 7: State Machines';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "7.1 Introduction to State Machines",
  "id": "71-introduction-to-state-machines",
  "level": 2
}, {
  "value": "7.1.1 Formal Definition",
  "id": "711-formal-definition",
  "level": 3
}, {
  "value": "7.1.2 Mealy vs Moore Models",
  "id": "712-mealy-vs-moore-models",
  "level": 3
}, {
  "value": "7.2 FSM Design Methodology",
  "id": "72-fsm-design-methodology",
  "level": 2
}, {
  "value": "7.2.1 Design Flow",
  "id": "721-design-flow",
  "level": 3
}, {
  "value": "7.2.2 Example: Sequence Detector",
  "id": "722-example-sequence-detector",
  "level": 3
}, {
  "value": "7.2.3 Mealy Implementation",
  "id": "723-mealy-implementation",
  "level": 3
}, {
  "value": "7.3 State Minimisation",
  "id": "73-state-minimisation",
  "level": 2
}, {
  "value": "7.3.1 Implication Table Method",
  "id": "731-implication-table-method",
  "level": 3
}, {
  "value": "7.3.2 Partitioning Method",
  "id": "732-partitioning-method",
  "level": 3
}, {
  "value": "7.4 State Encoding",
  "id": "74-state-encoding",
  "level": 2
}, {
  "value": "7.4.1 Binary (Sequential) Encoding",
  "id": "741-binary-sequential-encoding",
  "level": 3
}, {
  "value": "7.4.2 One-Hot Encoding",
  "id": "742-one-hot-encoding",
  "level": 3
}, {
  "value": "7.4.3 Gray Encoding",
  "id": "743-gray-encoding",
  "level": 3
}, {
  "value": "7.4.4 Encoding Selection Guide",
  "id": "744-encoding-selection-guide",
  "level": 3
}, {
  "value": "7.5 Implementing FSMs with Different Flip-Flops",
  "id": "75-implementing-fsms-with-different-flip-flops",
  "level": 2
}, {
  "value": "7.5.1 D Flip-Flop Implementation",
  "id": "751-d-flip-flop-implementation",
  "level": 3
}, {
  "value": "7.5.2 JK Flip-Flop Implementation",
  "id": "752-jk-flip-flop-implementation",
  "level": 3
}, {
  "value": "7.5.3 T Flip-Flop Implementation",
  "id": "753-t-flip-flop-implementation",
  "level": 3
}, {
  "value": "7.6 ASM Charts",
  "id": "76-asm-charts",
  "level": 2
}, {
  "value": "7.6.1 ASM Components",
  "id": "761-asm-components",
  "level": 3
}, {
  "value": "7.6.2 ASM to Hardware",
  "id": "762-asm-to-hardware",
  "level": 3
}, {
  "value": "7.7 Common FSM Design Patterns",
  "id": "77-common-fsm-design-patterns",
  "level": 2
}, {
  "value": "7.7.1 Traffic Light Controller",
  "id": "771-traffic-light-controller",
  "level": 3
}, {
  "value": "7.7.2 UART Receiver",
  "id": "772-uart-receiver",
  "level": 3
}, {
  "value": "7.7.3 Vending Machine Controller",
  "id": "773-vending-machine-controller",
  "level": 3
}, {
  "value": "7.8 Lock-Up States and Self-Starting Design",
  "id": "78-lock-up-states-and-self-starting-design",
  "level": 2
}, {
  "value": "7.9 Glitch-Free Outputs",
  "id": "79-glitch-free-outputs",
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
        id: "chapter-7-state-machines",
        children: "Chapter 7: State Machines"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Chapter 6 (Sequential Circuits) ? flip-flops provide the state memory for state machines.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 8 (Registers and Counters) ? application-specific sequential structures."]
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
        href: "../../assets/images/lessons/digital-logic/07-state-machines/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/07-state-machines/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/digital-logic/07-state-machines/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/07-state-machines/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/digital-logic/07-state-machines/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/07-state-machines/visual-explanation.png",
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
        children: "Distinguish between Mealy and Moore state machine models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct state diagrams and state tables from informal specifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design state machines using D, JK, and T flip-flops"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimise state tables using implication charts and partitioning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose optimal state encoding schemes (binary, one-hot, Gray)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyse and avoid state machine hazards (glitches, lock-up states)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement algorithmic state machines (ASM) charts for complex controllers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply state machine design patterns in practical systems"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "71-introduction-to-state-machines",
      children: "7.1 Introduction to State Machines"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "finite state machine (FSM)"
      }), " is a sequential circuit with a finite number of states that transitions between states based on inputs. FSMs are the foundation of digital controllers, protocol engines, and sequential logic design."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    Inputs[Inputs] --> CL[Combinational<br>Next-State Logic]\n    CL --> NS[Next State]\n    NS --> REG[State<br>Register]\n    REG --> CS[Current State]\n    CS --> CL\n    CS --> OL[Combinational<br>Output Logic]\n    OL --> Outputs[Outputs]\n    CLK[Clock] --> REG\n    RST[Reset] --> REG\n    style REG fill:#f9f,stroke:#333,stroke-width:2px\n    style CL fill:#e6f3ff,stroke:#4a90d9,stroke-width:2px\n    style OL fill:#e6f3ff,stroke:#4a90d9,stroke-width:2px\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "711-formal-definition",
      children: "7.1.1 Formal Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An FSM is a 6-tuple (S, G, S, s0, d, ?) where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S = input alphabet"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "G = output alphabet"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S = finite set of states"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "s0 ? S = initial state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d: S ? S ? S = next-state function (transition function)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "?: S ? G (Moore) or ?: S ? S ? G (Mealy) = output function"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "712-mealy-vs-moore-models",
      children: "7.1.2 Mealy vs Moore Models"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mealy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Moore"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output depends on"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current state + inputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current state only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output timing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can change mid-cycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changes only on clock edge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Number of states"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typically fewer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typically more"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output glitches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible (input-dependent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (registered output)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster (output available immediately)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One cycle delay"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    subgraph Mealy\n        M_IN[Inputs] --> M_CL[Combinational]\n        M_CL --> M_OUT[Output]\n        M_CL --> M_NS[Next State]\n        M_NS --> M_REG[State Reg]\n        M_REG --> M_CL\n    end\n    subgraph Moore\n        MO_IN[Inputs] --> MO_CL[Combinational]\n        MO_CL --> MO_NS[Next State]\n        MO_NS --> MO_REG[State Reg]\n        MO_REG --> MO_OL[Output Logic]\n        MO_OL --> MO_OUT[Output]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "72-fsm-design-methodology",
      children: "7.2 FSM Design Methodology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "721-design-flow",
      children: "7.2.1 Design Flow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Word description:"
        }), " understand the problem"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State diagram:"
        }), " graphical representation of states and transitions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State table:"
        }), " tabular form of the state diagram"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State minimisation:"
        }), " reduce redundant states"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State encoding:"
        }), " assign binary codes to states"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next-state logic:"
        }), " derive minimised Boolean equations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Output logic:"
        }), " derive output equations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementation:"
        }), " map to flip-flops and gates"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "722-example-sequence-detector",
      children: "7.2.2 Example: Sequence Detector"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a Moore FSM that detects the sequence \"101\" on a serial input X and asserts output Z=1 when the sequence is completed."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    S0((S0<br>Z=0)) --> |0| S0\n    S0 --> |1| S1((S1<br>Z=0))\n    S1 --> |0| S2((S2<br>Z=0))\n    S1 --> |1| S1\n    S2 --> |0| S0\n    S2 --> |1| S3((S3<br>Z=1))\n    S3 --> |0| S2\n    S3 --> |1| S1\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Present State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Next State (X=0)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Next State (X=1)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output Z"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type State = 'S0' | 'S1' | 'S2' | 'S3';\n\nfunction sequenceDetectorMoore(inputs: number[]): number[] {\n    let state: State = 'S0';\n    const output: number[] = [];\n\n    for (const x of inputs) {\n        let z = 0;\n        switch (state) {\n            case 'S0': state = x === 0 ? 'S0' : 'S1'; break;\n            case 'S1': state = x === 0 ? 'S2' : 'S1'; break;\n            case 'S2':\n                if (x === 0) state = 'S0';\n                else { state = 'S3'; }\n                break;\n            case 'S3':\n                z = 1;\n                state = x === 0 ? 'S2' : 'S1';\n                break;\n        }\n        output.push(z);\n    }\n    return output;\n}\n\n// Test: detect \"101\" in stream\nconst test = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1];\nconsole.log(sequenceDetectorMoore(test).join('')); // 0010001001\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "723-mealy-implementation",
      children: "7.2.3 Mealy Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The same sequence detector in Mealy form uses only 3 states:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    S0((S0)) --> |0/0| S0\n    S0 --> |1/0| S1((S1))\n    S1 --> |0/0| S2((S2))\n    S1 --> |1/0| S1\n    S2 --> |0/0| S0\n    S2 --> |1/1| S1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function sequenceDetectorMealy(inputs: number[]): number[] {\n    let state: State = 'S0';\n    const output: number[] = [];\n\n    for (const x of inputs) {\n        let z = 0;\n        const nextState = state;\n\n        switch (nextState) {\n            case 'S0':\n                if (x === 1) { state = 'S1'; z = 0; }\n                break;\n            case 'S1':\n                if (x === 0) state = 'S2';\n                else state = 'S1';\n                break;\n            case 'S2':\n                if (x === 1) { state = 'S1'; z = 1; }\n                else state = 'S0';\n                break;\n        }\n        output.push(z);\n    }\n    return output;\n}\n\nconsole.log(sequenceDetectorMealy(test).join('')); // 0000001001 (output on same cycle)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key difference:"
      }), " The Mealy machine asserts output Z during the same cycle it sees the final \"1\", while the Moore machine waits one clock cycle."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "73-state-minimisation",
      children: "7.3 State Minimisation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reducing the number of states simplifies the combinational logic and reduces the flip-flop count (log2N flops for N states)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "731-implication-table-method",
      children: "7.3.1 Implication Table Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The implication table (pair chart) systematically finds equivalent states."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm:\n1. Draw a triangular table of all state pairs (i, j) where i < j\n2. Mark (i, j) as incompatible if outputs differ\n3. For remaining pairs, list implied pairs from next-state transitions\n4. Propagate: if any implied pair is incompatible, mark this pair\n5. Repeat step 4 until no changes occur\n6. Unmarked pairs are equivalent ? merge them\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type StateTable = {\n    states: string[];\n    nextState: Record<string, number[]>; // state -> [next for input 0, next for input 1]\n    output: Record<string, number[]>;    // state -> [output for input 0, output for input 1]\n};\n\nfunction minimiseMealy(table: StateTable): string[][] {\n    const n = table.states.length;\n    const incompatible: boolean[][] = Array.from(\n        { length: n }, () => Array(n).fill(false)\n    );\n\n    // Phase 1: mark pairs with different outputs\n    for (let i = 0; i < n; i++) {\n        for (let j = i + 1; j < n; j++) {\n            const si = table.states[i];\n            const sj = table.states[j];\n            for (let k = 0; k < 2; k++) {\n                if (table.output[si][k] !== table.output[sj][k]) {\n                    incompatible[i][j] = true;\n                    break;\n                }\n            }\n        }\n    }\n\n    // Phase 2: propagate implied incompatibilities\n    let changed = true;\n    while (changed) {\n        changed = false;\n        for (let i = 0; i < n; i++) {\n            for (let j = i + 1; j < n; j++) {\n                if (incompatible[i][j]) continue;\n                const si = table.states[i];\n                const sj = table.states[j];\n                for (let k = 0; k < 2; k++) {\n                    const ni = table.nextState[si][k];\n                    const nj = table.nextState[sj][k];\n                    const a = Math.min(ni, nj);\n                    const b = Math.max(ni, nj);\n                    if (a !== b && incompatible[a][b]) {\n                        incompatible[i][j] = true;\n                        changed = true;\n                    }\n                }\n            }\n        }\n    }\n\n    // Collect equivalent classes\n    const visited = new Set<number>();\n    const classes: string[][] = [];\n    for (let i = 0; i < n; i++) {\n        if (visited.has(i)) continue;\n        const eq: string[] = [table.states[i]];\n        visited.add(i);\n        for (let j = i + 1; j < n; j++) {\n            if (!incompatible[i][j]) {\n                eq.push(table.states[j]);\n                visited.add(j);\n            }\n        }\n        classes.push(eq);\n    }\n    return classes;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "732-partitioning-method",
      children: "7.3.2 Partitioning Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An alternative approach that partitions states into equivalence classes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P0 = partition by output values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P1 = partition by 1-step next-state behaviour (states that transition to same P0-class)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P??1 = partition by k+1-step behaviour"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stop when P? = P??1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "74-state-encoding",
      children: "7.4 State Encoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "State encoding assigns binary codes to symbolic states. The choice of encoding directly affects logic complexity and circuit speed."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "741-binary-sequential-encoding",
      children: "7.4.1 Binary (Sequential) Encoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assigns consecutive binary values to states."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "S0 = 00, S1 = 01, S2 = 10, S3 = 11\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fewest flip-flops (log2N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More combinational logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Natural for counters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple bit transitions between states"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "742-one-hot-encoding",
      children: "7.4.2 One-Hot Encoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each state gets its own flip-flop; exactly one flip-flop is high at any time."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "S0 = 0001, S1 = 0010, S2 = 0100, S3 = 1000\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (2-level logic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many flip-flops (N for N states)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple next-state equations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Area-inefficient for large FSMs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No decoding needed for Moore outputs"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class OneHotFSM {\n    private state: number;\n\n    constructor(numStates: number) {\n        this.state = 1; // state 0 is active (LSB)\n    }\n\n    transition(nextStateBit: number): void {\n        this.state = 1 << nextStateBit;\n    }\n\n    get activeState(): number {\n        // Returns index of the set bit\n        return Math.log2(this.state);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "743-gray-encoding",
      children: "7.4.3 Gray Encoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consecutive states differ by exactly one bit."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "S0 = 000, S1 = 001, S2 = 011, S3 = 010, S4 = 110, S5 = 111\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal bit transitions (low power)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More complex state assignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces switching activity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May not minimise logic optimally"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "744-encoding-selection-guide",
      children: "7.4.4 Encoding Selection Guide"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Constraint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Encoding"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum area"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-hot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum power"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gray"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FPGA target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-hot (many flip-flops available)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASIC target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control-dominant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-hot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data-dominant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "75-implementing-fsms-with-different-flip-flops",
      children: "7.5 Implementing FSMs with Different Flip-Flops"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "751-d-flip-flop-implementation",
      children: "7.5.1 D Flip-Flop Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "D flip-flops are the simplest: Q? = D, so the next-state equations are directly the D inputs."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using the 101 Moore detector with binary encoding (S0=00, S1=01, S2=10, S3=11):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "State bits: Q1, Q0\nNext state: D1, D0\n\nFrom the state table:\nD1 = Q1?Q0'?X + Q1'?Q0?X + Q1?Q0?X'\nD0 = Q1'?Q0'?X + Q1'?Q0?X' + Q1?Q0?X\nZ  = Q1?Q0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function dffImpl(Q1: number, Q0: number, X: number) {\n    const D1 = (Q1 & ~Q0 & X) | (~Q1 & Q0 & X) | (Q1 & Q0 & ~X);\n    const D0 = (~Q1 & ~Q0 & X) | (~Q1 & Q0 & ~X) | (Q1 & Q0 & X);\n    const Z = Q1 & Q0;\n    return { D1, D0, Z };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "752-jk-flip-flop-implementation",
      children: "7.5.2 JK Flip-Flop Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JK flip-flops often require less external logic because of their toggle capability."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "From excitation table:\nJ1 = Q0?X + Q0'?X = X\nK1 = Q0?X' + Q0'?X' = X'\nJ0 = Q1'?X + Q1?X = X\nK0 = Q1'?X + Q1?X' + Q1'?X' = X' + Q1\nZ  = Q1?Q0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function jkImpl(Q1: number, Q0: number, X: number) {\n    const J1 = X;\n    const K1 = ~X & 1;\n    const J0 = X;\n    const K0 = (~X & 1) | Q1;\n    const Z = Q1 & Q0;\n    return { J1, K1, J0, K0, Z };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "753-t-flip-flop-implementation",
      children: "7.5.3 T Flip-Flop Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "T flip-flops are useful when many transitions are toggles."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "T1 = Q1? ? Q1\nT0 = Q0? ? Q0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "76-asm-charts",
      children: "7.6 ASM Charts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithmic State Machine (ASM) chart"
      }), " is a flowchart-like representation that bridges state diagrams and hardware implementation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    START([Start]) --> SB[State Box<br>State S0]\n    SB --> DC{Decision<br>Box<br>Test X}\n    DC --> |0| SB2[State Box<br>State S1]\n    DC --> |1| CO[Conditional<br>Output Box<br>Z = 1]\n    CO --> SB2\n    SB2 --> SB\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "761-asm-components",
      children: "7.6.1 ASM Components"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Symbol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rectangle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State box"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State name and Moore outputs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diamond"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decision box"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tests an input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Oval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional output box"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mealy output"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "762-asm-to-hardware",
      children: "7.6.2 ASM to Hardware"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each ASM block corresponds directly to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One state flip-flop"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Next-state logic derived from decision boxes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Output logic from conditional and state boxes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ASMController {\n    state: number = 0;\n\n    // ASM block for a traffic light controller\n    tick(carSensor: number, clk: number): { highway: string; farm: string } {\n        switch (this.state) {\n            case 0: // Highway green, farm red\n                if (carSensor) this.state = 1; // Car on farm road detected\n                return { highway: 'GREEN', farm: 'RED' };\n            case 1: // Highway yellow, farm red (delay state)\n                this.state = 2;\n                return { highway: 'YELLOW', farm: 'RED' };\n            case 2: // Highway red, farm green\n                this.state = 3;\n                return { highway: 'RED', farm: 'GREEN' };\n            case 3: // Highway red, farm yellow\n                this.state = 0;\n                return { highway: 'RED', farm: 'YELLOW' };\n            default:\n                this.state = 0;\n                return { highway: 'GREEN', farm: 'RED' };\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "77-common-fsm-design-patterns",
      children: "7.7 Common FSM Design Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "771-traffic-light-controller",
      children: "7.7.1 Traffic Light Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    HG((HW Green<br>Farm Red)) --> |car| HY((HW Yellow<br>Farm Red))\n    HG --> |no car| HG\n    HY --> HR((HW Red<br>Farm Green))\n    HR --> HR\n    HR --> FR((HW Red<br>Farm Yellow))\n    FR --> HG\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "enum TLState { HIGHWAY_GREEN, HIGHWAY_YELLOW, FARM_GREEN, FARM_YELLOW }\n\nclass TrafficLightController {\n    state: TLState = TLState.HIGHWAY_GREEN;\n    private timer: number = 0;\n\n    tick(carSensor: number, clk: number) {\n        this.timer++;\n        switch (this.state) {\n            case TLState.HIGHWAY_GREEN:\n                if (carSensor && this.timer >= 30) {\n                    this.state = TLState.HIGHWAY_YELLOW;\n                    this.timer = 0;\n                }\n                break;\n            case TLState.HIGHWAY_YELLOW:\n                if (this.timer >= 3) {\n                    this.state = TLState.FARM_GREEN;\n                    this.timer = 0;\n                }\n                break;\n            case TLState.FARM_GREEN:\n                if (this.timer >= 15) {\n                    this.state = TLState.FARM_YELLOW;\n                    this.timer = 0;\n                }\n                break;\n            case TLState.FARM_YELLOW:\n                if (this.timer >= 3) {\n                    this.state = TLState.HIGHWAY_GREEN;\n                    this.timer = 0;\n                }\n                break;\n        }\n    }\n\n    get lights(): { highway: string; farm: string } {\n        switch (this.state) {\n            case TLState.HIGHWAY_GREEN: return { highway: 'GREEN', farm: 'RED' };\n            case TLState.HIGHWAY_YELLOW: return { highway: 'YELLOW', farm: 'RED' };\n            case TLState.FARM_GREEN: return { highway: 'RED', farm: 'GREEN' };\n            case TLState.FARM_YELLOW: return { highway: 'RED', farm: 'YELLOW' };\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "772-uart-receiver",
      children: "7.7.2 UART Receiver"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A UART receiver FSM samples a serial line at 16x the baud rate:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "enum UARTState { IDLE, START, DATA, STOP }\n\nclass UARTReceiver {\n    state: UARTState = UARTState.IDLE;\n    private bitCount: number = 0;\n    private data: number = 0;\n\n    tick(rxLine: number, clk: number): number | null {\n        switch (this.state) {\n            case UARTState.IDLE:\n                if (rxLine === 0) { // Start bit detected\n                    this.state = UARTState.START;\n                    this.bitCount = 0;\n                }\n                break;\n\n            case UARTState.START:\n                this.state = UARTState.DATA;\n                this.data = 0;\n                this.bitCount = 0;\n                break;\n\n            case UARTState.DATA:\n                this.data |= (rxLine << this.bitCount);\n                this.bitCount++;\n                if (this.bitCount >= 8) {\n                    this.state = UARTState.STOP;\n                }\n                break;\n\n            case UARTState.STOP:\n                this.state = UARTState.IDLE;\n                return this.data; // Return received byte\n        }\n        return null;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "773-vending-machine-controller",
      children: "7.7.3 Vending Machine Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class VendingMachineFSM {\n    private state: number = 0; // Amount collected (0, 5, 10, 15 cents)\n    readonly itemPrice = 15;\n\n    insertCoin(coin: number): { dispense: boolean; change: number } {\n        this.state += coin;\n        if (this.state >= this.itemPrice) {\n            const change = this.state - this.itemPrice;\n            this.state = 0;\n            return { dispense: true, change };\n        }\n        return { dispense: false, change: 0 };\n    }\n\n    get amountCollected(): number { return this.state; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "78-lock-up-states-and-self-starting-design",
      children: "7.8 Lock-Up States and Self-Starting Design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lock-up state"
      }), " is an unused state that the FSM enters (due to noise or power-up) and cannot leave without a reset. All FSMs should be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "self-starting"
      }), " ? every state (including unused ones) must have a transition path to a valid state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Self-starting check: verify all unused state codes transition to valid states\nfunction checkSelfStarting(transitionFn: (state: number, input: number) => number, numStates: number): string[] {\n    const validStates = new Set<number>();\n    const visited = new Set<number>();\n    const issues: string[] = [];\n\n    // Find reachable states\n    function explore(state: number): void {\n        if (visited.has(state)) return;\n        visited.add(state);\n        if (state < numStates) validStates.add(state);\n        for (let input = 0; input < 2; input++) {\n            explore(transitionFn(state, input));\n        }\n    }\n    explore(0);\n\n    // Check unused states for self-starting property\n    const totalCodes = 1 << Math.ceil(Math.log2(numStates));\n    for (let s = 0; s < totalCodes; s++) {\n        if (!validStates.has(s)) {\n            const n0 = transitionFn(s, 0);\n            const n1 = transitionFn(s, 1);\n            if (!validStates.has(n0) && !validStates.has(n1)) {\n                issues.push(`State ${s} may be a lock-up state`);\n            }\n        }\n    }\n    return issues;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "79-glitch-free-outputs",
      children: "7.9 Glitch-Free Outputs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mealy machines can produce output glitches when inputs change. Mitigation strategies:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    Input[Input] --> FSM[FSM Logic]\n    FSM --> REG[Output<br>Register]\n    CLK --> REG\n    REG --> OUT[Output]\n    style REG fill:#f9f,stroke:#333,stroke-width:2px\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Registered outputs:"
        }), " add output flip-flops clocked by the same clock"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Moore outputs:"
        }), " inherently glitch-free (driven from state register)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-hot encoding:"
        }), " simpler output logic, fewer glitch paths"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class GlitchFreeMealy {\n    private nextOutput: number = 0;\n    private currentOutput: number = 0;\n\n    compute(input: number, clk: number): number {\n        if (clk === 1) {\n            this.currentOutput = this.nextOutput;\n        }\n        return this.currentOutput;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start with a state diagram"
        }), " ? it forces you to enumerate all states and transitions before coding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-hot for FPGAs, binary for ASICs"
        }), " ? match the encoding to the target technology"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Make FSMs self-starting"
        }), " ? always verify that unused states transition to a known valid state"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Register Mealy outputs"
        }), " ? registered outputs eliminate glitches without adding latency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Separate next-state and output logic"
        }), " ? clean RTL code matches the structural diagram"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === FSM Base ===\ntype State = string;\ntype FSMTranisition = { from: State; input: number; to: State };\ntype FSMOutput = { state: State; output: number };\n\n// === Moore Machine Simulator ===\nclass MooreFSM {\n    private current: State;\n    constructor(\n        private states: State[],\n        private transitions: FSMTranisition[],\n        private outputs: Map<State, number>,\n        initial: State\n    ) { this.current = initial; }\n\n    step(input: number): FSMOutput {\n        const next = this.transitions.find(t => t.from === this.current && t.input === input);\n        if (next) this.current = next.to;\n        return { state: this.current, output: this.outputs.get(this.current) ?? 0 };\n    }\n}\n\n// === Mealy Machine Simulator ===\nclass MealyFSM {\n    private current: State;\n    constructor(\n        private states: State[],\n        private transitions: Map<string, { to: State; output: number }>,\n        initial: State\n    ) { this.current = initial; }\n\n    step(input: number): FSMOutput {\n        const key = `${this.current}:${input}`;\n        const t = this.transitions.get(key);\n        if (t) {\n            this.current = t.to;\n            return { state: this.current, output: t.output };\n        }\n        return { state: this.current, output: 0 };\n    }\n}\n\n// === Sequence Detector (1101 Moore) ===\nclass SequenceDetector1101 {\n    private state = 0; // 0=S0,1=S1,2=S2,3=S3,4=S4\n    step(input: number): number {\n        switch (this.state) {\n            case 0: this.state = input === 1 ? 1 : 0; break;\n            case 1: this.state = input === 1 ? 2 : 0; break;\n            case 2: this.state = input === 0 ? 3 : 2; break;\n            case 3: this.state = input === 1 ? 4 : 0; break;\n            case 4: this.state = input === 1 ? 2 : 0; return 1;\n        }\n        return 0;\n    }\n}\n\n// === State Minimization (Implication Table) ===\nfunction minimizeStates(states: number[], transitions: number[][], outputs: number[][]): number[] {\n    const n = states.length;\n    const eq: boolean[][] = Array.from({ length: n }, () => new Array(n).fill(true));\n    for (let i = 0; i < n; i++)\n        for (let j = 0; j < i; j++)\n            if (outputs[i].some((o, k) => o !== outputs[j][k])) eq[i][j] = false;\n    let changed = true;\n    while (changed) {\n        changed = false;\n        for (let i = 0; i < n; i++) {\n            for (let j = 0; j < i; j++) {\n                if (!eq[i][j]) continue;\n                for (let k = 0; k < transitions[i].length; k++) {\n                    const ni = transitions[i][k], nj = transitions[j][k];\n                    if (ni !== nj && !eq[Math.max(ni, nj)][Math.min(ni, nj)]) {\n                        eq[i][j] = false; changed = true; break;\n                    }\n                }\n            }\n        }\n    }\n    const mapping = new Map<number, number>();\n    const result: number[] = [];\n    for (let i = 0; i < n; i++) {\n        let found = false;\n        for (let j = 0; j < i; j++) if (eq[i][j]) { mapping.set(i, mapping.get(j)!); found = true; break; }\n        if (!found) { mapping.set(i, i); result.push(i); }\n    }\n    return result;\n}\n\n// === ASM Chart Interpreter ===\nclass ASMInterpreter {\n    execute(asm: { cond: (s: number, i: number) => boolean; t: State; f: State }[], state: State, input: number): State {\n        for (const block of asm) {\n            if (block.cond(0, input)) return block.t;\n        }\n        return state;\n    }\n}\n\n// === Vending Machine FSM ===\nclass VendingMachineFSM {\n    private state = 0; // 0=idle, 5=5c, 10=10c, 15=15c\n    private readonly price = 15;\n    private readonly outputs = new Map<State, string>();\n\n    insert(coin: number): { dispense: boolean; change: number } {\n        this.state += coin;\n        if (this.state >= this.price) {\n            const change = this.state - this.price;\n            this.state = 0;\n            return { dispense: true, change };\n        }\n        return { dispense: false, change: 0 };\n    }\n}\n\n// === Demo ===\nconst seq = new SequenceDetector1101();\nconst bits = [1, 1, 0, 1, 0, 1, 1, 0, 1, 1];\nconsole.log('1101 Sequence Detector:');\nconsole.log(bits.map(b => `in=${b} out=${seq.step(b)}`).join(', '));\n\nconst vending = new VendingMachineFSM();\nconsole.log('\\nVending Machine:');\n[10, 5, 25].forEach(c => console.log(`Insert ${c}c:`, JSON.stringify(vending.insert(c))));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// state machines\n// boolean-circuits-sequential implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'state machines', data: { topic: 'boolean-circuits-sequential' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// state machines - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'digital-circuits demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'digital-logic', chapter: 'state machines' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('digital-circuits'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Finite state machines provide the theoretical framework for sequential control in digital systems. This chapter covered Mealy and Moore models, the complete design flow from state diagram to gate-level implementation, state minimisation using implication tables, encoding strategies (binary, one-hot, Gray), and practical implementation with D, JK, and T flip-flops. ASM charts bridge the gap between algorithms and hardware, while design patterns for traffic light controllers, UART receivers, and vending machines demonstrate real-world applications. The next chapter examines specialised sequential structures: registers and counters."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " A Moore machine's output depends on:\na) The current state only\nb) The current state and inputs\nc) The inputs only\nd) The next state only"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " One-hot encoding requires how many flip-flops for N states?\na) N\nb) log2N\nc) 2N\nd) N/2"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " The first step in state minimisation using implication tables is:\na) Mark pairs with different outputs as incompatible\nb) Mark all pairs as compatible\nc) Merge equivalent states\nd) Assign binary codes"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " A lock-up state is:\na) A state that has locked output values\nb) An unused state with no path back to valid states\nc) A state used only during reset\nd) A state where the clock is locked"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Which FSM model typically requires fewer states?\na) Moore\nb) Mealy\nc) Both require the same number\nd) It depends on the application"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answers",
      children: "Answers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q1: a | Q2: a | Q3: a | Q4: b | Q5: b"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sequence detector:"
          }), " Design a Moore FSM that detects \"1101\" on a serial input. Draw the state diagram, create the state table, and implement in TypeScript."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "State minimisation:"
          }), " Given a 6-state Mealy machine with outputs, use the implication table method to find the minimal number of states. Verify with TypeScript."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "One-hot vs binary:"
          }), " Implement a 4-state FSM using both one-hot and binary encoding. Compare the gate counts and critical path delays."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "JK implementation:"
          }), " Convert the 101 Moore sequence detector from D to JK implementation. Derive the JK input equations and implement in TypeScript."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Traffic light with pedestrian:"
          }), " Extend the traffic light controller to include a pedestrian crossing button and walk/don't-walk signals."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Self-starting analysis:"
          }), " Given a 4-state FSM with 4 flip-flops (16 possible states), write TypeScript to analyse which states are lock-up states and design the transitions to make it self-starting."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ASM chart to hardware:"
          }), " Convert the vending machine controller to an ASM chart, then derive the next-state and output equations."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "UART transmitter:"
          }), " Design the transmitting side of a UART FSM. The transmitter converts parallel bytes to a serial stream with start, data, and stop bits."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "FSM with timer:"
          }), " Design a 4-state FSM where each state includes a counter that determines how many cycles to stay in that state before transitioning."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "FSM decomposition:"
          }), " Decompose a 16-state traffic light controller with complex timing into two communicating FSMs (main controller + timer). Compare the logic complexity."]
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