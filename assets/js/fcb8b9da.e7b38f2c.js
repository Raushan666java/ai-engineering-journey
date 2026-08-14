"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[78878],{

/***/ 37157
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_digital_logic_03_logic_gates_md_fcb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-digital-logic-03-logic-gates-md-fcb.json
const site_docs_courses_digital_logic_03_logic_gates_md_fcb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/digital-logic/03-logic-gates","title":"Chapter 3: Logic Gates","description":"Prereq: Chapter 2 (Boolean Algebra) ? gates implement the Boolean operations directly.","source":"@site/docs/courses/digital-logic/03-logic-gates.md","sourceDirName":"courses/digital-logic","slug":"/digital-logic/03-logic-gates","permalink":"/ai-engineering-journey/digital-logic/03-logic-gates","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"03-logic-gates","slug":"/digital-logic/03-logic-gates","title":"Chapter 3: Logic Gates","sidebar_label":"Chapter 3: Logic Gates","sidebar_position":3},"sidebar":"course-digital-logic","previous":{"title":"Chapter 2: Boolean Algebra","permalink":"/ai-engineering-journey/digital-logic/02-boolean-algebra"},"next":{"title":"Chapter 4: Karnaugh Maps","permalink":"/ai-engineering-journey/digital-logic/04-karnaugh-maps"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/digital-logic/03-logic-gates.md


const frontMatter = {
	id: '03-logic-gates',
	slug: '/digital-logic/03-logic-gates',
	title: 'Chapter 3: Logic Gates',
	sidebar_label: 'Chapter 3: Logic Gates',
	sidebar_position: 3
};
const contentTitle = 'Chapter 3: Logic Gates';

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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "3.1 Fundamental Logic Gates",
  "id": "31-fundamental-logic-gates",
  "level": 3
}, {
  "value": "3.1.1 AND Gate",
  "id": "311-and-gate",
  "level": 4
}, {
  "value": "3.1.2 OR Gate",
  "id": "312-or-gate",
  "level": 4
}, {
  "value": "3.1.3 NOT Gate (Inverter)",
  "id": "313-not-gate-inverter",
  "level": 4
}, {
  "value": "3.1.4 NAND Gate",
  "id": "314-nand-gate",
  "level": 4
}, {
  "value": "3.1.5 NOR Gate",
  "id": "315-nor-gate",
  "level": 4
}, {
  "value": "3.1.6 XOR Gate (Exclusive-OR)",
  "id": "316-xor-gate-exclusive-or",
  "level": 4
}, {
  "value": "3.1.7 XNOR Gate (Exclusive-NOR)",
  "id": "317-xnor-gate-exclusive-nor",
  "level": 4
}, {
  "value": "3.2 Universal Gates",
  "id": "32-universal-gates",
  "level": 3
}, {
  "value": "3.3 Gate-Level Minimisation",
  "id": "33-gate-level-minimisation",
  "level": 3
}, {
  "value": "3.4 Electrical Characteristics",
  "id": "34-electrical-characteristics",
  "level": 3
}, {
  "value": "3.4.1 Propagation Delay",
  "id": "341-propagation-delay",
  "level": 4
}, {
  "value": "3.4.2 Fan-In",
  "id": "342-fan-in",
  "level": 4
}, {
  "value": "3.4.3 Fan-Out",
  "id": "343-fan-out",
  "level": 4
}, {
  "value": "3.4.4 Noise Margin",
  "id": "344-noise-margin",
  "level": 4
}, {
  "value": "3.4.5 Power Dissipation",
  "id": "345-power-dissipation",
  "level": 4
}, {
  "value": "3.5 Logic Families",
  "id": "35-logic-families",
  "level": 3
}, {
  "value": "3.5.1 TTL (Transistor-Transistor Logic)",
  "id": "351-ttl-transistor-transistor-logic",
  "level": 4
}, {
  "value": "3.5.2 CMOS (Complementary Metal-Oxide-Semiconductor)",
  "id": "352-cmos-complementary-metal-oxide-semiconductor",
  "level": 4
}, {
  "value": "3.5.3 Comparison of TTL and CMOS",
  "id": "353-comparison-of-ttl-and-cmos",
  "level": 4
}, {
  "value": "3.6 Tri-State Logic",
  "id": "36-tri-state-logic",
  "level": 3
}, {
  "value": "3.7 Open-Drain and Open-Collector Outputs",
  "id": "37-open-drain-and-open-collector-outputs",
  "level": 3
}, {
  "value": "3.8 Schmitt Trigger Inputs",
  "id": "38-schmitt-trigger-inputs",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 3.1: Universal Gate Conversion",
  "id": "example-31-universal-gate-conversion",
  "level": 3
}, {
  "value": "Example 3.2: Propagation Delay Analysis",
  "id": "example-32-propagation-delay-analysis",
  "level": 3
}, {
  "value": "Example 3.3: Fan-Out Calculation",
  "id": "example-33-fan-out-calculation",
  "level": 3
}, {
  "value": "Example 3.4: Noise Margin Calculation",
  "id": "example-34-noise-margin-calculation",
  "level": 3
}, {
  "value": "Example 3.5: Dynamic Power Calculation",
  "id": "example-35-dynamic-power-calculation",
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
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "TypeScript Examples",
  "id": "typescript-examples",
  "level": 2
}, {
  "value": "Logic Gate Simulator",
  "id": "logic-gate-simulator",
  "level": 3
}, {
  "value": "Universal Gate Conversions",
  "id": "universal-gate-conversions",
  "level": 3
}, {
  "value": "Gate Network Composer",
  "id": "gate-network-composer",
  "level": 3
}, {
  "value": "Propagation Delay Simulator",
  "id": "propagation-delay-simulator",
  "level": 3
}, {
  "value": "Tri-State Bus Controller",
  "id": "tri-state-bus-controller",
  "level": 3
}, {
  "value": "Mermaid Diagrams",
  "id": "mermaid-diagrams",
  "level": 2
}, {
  "value": "Fundamental Logic Gate Symbols",
  "id": "fundamental-logic-gate-symbols",
  "level": 3
}, {
  "value": "Universal Gate Conversions (NAND)",
  "id": "universal-gate-conversions-nand",
  "level": 3
}, {
  "value": "Tri-State Bus Architecture",
  "id": "tri-state-bus-architecture",
  "level": 3
}, {
  "value": "CMOS Inverter Structure",
  "id": "cmos-inverter-structure",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 3
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
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "chapter-3-logic-gates",
        children: "Chapter 3: Logic Gates"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Chapter 2 (Boolean Algebra) ? gates implement the Boolean operations directly.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 4 (Karnaugh Maps) ? minimisation leads to optimal gate-level implementations."]
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
        href: "../../assets/images/lessons/digital-logic/03-logic-gates/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/03-logic-gates/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/digital-logic/03-logic-gates/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/03-logic-gates/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/digital-logic/03-logic-gates/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/03-logic-gates/visual-explanation.png",
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
        children: "Describe the operation and truth table of each fundamental logic gate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Draw circuit symbols and timing diagrams for all seven fundamental gates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Express any Boolean function using only NAND gates or only NOR gates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the electrical characteristics of TTL and CMOS logic families"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyse fan-in, fan-out, propagation delay, and noise margin from datasheets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the operation of tri-state logic and open-drain outputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform gate-level minimisation for reduced transistor count"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "Fundamental Gates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AND, OR, NOT, NAND, NOR, XOR, XNOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic building blocks of all digital circuits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Universal Gates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NAND/NOR implement any function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IC manufacturing prefers single gate type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gate-Level Minimisation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce transistor count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower cost, power, and area"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Electrical Characteristics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Propagation delay, fan-out"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determines maximum operating frequency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logic Families"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TTL vs CMOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-world voltage levels, speed, power trade-offs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tri-State Logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-impedance output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable shared bus architectures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open-Drain Outputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wired-AND connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-driver buses with pull-up resistors"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Boolean Expression] --> B[Gates]\n    B --> C[AND/OR/NOT]\n    B --> D[NAND/NOR - Universal]\n    B --> E[XOR/XNOR]\n    C --> F[Combinational Circuit]\n    D --> F\n    E --> F\n    F --> G[Physical Implementation]\n    G --> H[TTL]\n    G --> I[CMOS]\n    G --> J[Tri-State / Open-Drain]\n    style A fill:#e1f5fe\n    style F fill:#c8e6c9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-fundamental-logic-gates",
      children: "3.1 Fundamental Logic Gates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A logic gate is an electronic circuit that implements a Boolean function. The seven fundamental gates are AND, OR, NOT, NAND, NOR, XOR, and XNOR."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "311-and-gate",
      children: "3.1.1 AND Gate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The AND gate produces a HIGH output (1) only when all inputs are HIGH."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "A ? B"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Symbol: A D-shaped body with a flat left side. Output: 1 only if both inputs are 1."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Timing diagram"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "A   ___|````|___|````|___\nB   |````|___|````|_____\nY   |_________|````|____\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "312-or-gate",
      children: "3.1.2 OR Gate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The OR gate produces a HIGH output when any input is HIGH."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "A + B"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Symbol: A curved body tapering to a point on the output side."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "313-not-gate-inverter",
      children: "3.1.3 NOT Gate (Inverter)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The NOT gate produces the complement of its input."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "A'"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Symbol: A triangle pointing to the right with a small circle (bubble) at the output."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "314-nand-gate",
      children: "3.1.4 NAND Gate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The NAND gate is the complement of AND. It is a universal gate."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "(A ? B)'"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Symbol: An AND symbol followed by a bubble at the output."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "315-nor-gate",
      children: "3.1.5 NOR Gate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The NOR gate is the complement of OR. It is also a universal gate."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "(A + B)'"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Symbol: An OR symbol followed by a bubble at the output."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "316-xor-gate-exclusive-or",
      children: "3.1.6 XOR Gate (Exclusive-OR)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The XOR gate produces a HIGH output when the inputs differ."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "A ? B"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expression: A ? B = A'B + AB'"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "317-xnor-gate-exclusive-nor",
      children: "3.1.7 XNOR Gate (Exclusive-NOR)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The XNOR gate produces a HIGH output when the inputs are equal."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "(A ? B)'"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expression: A ? B = A?B + A'?B'"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Gate Symbols\"\n        AND[\"AND<br/>D-shape\"] --> NAND[\"NAND<br/>AND + bubble\"]\n        OR[\"OR<br/>Curved body\"] --> NOR[\"NOR<br/>OR + bubble\"]\n        NOT[\"NOT<br/>Triangle + bubble\"]\n        XOR[\"XOR<br/>OR + extra curve\"] --> XNOR[\"XNOR<br/>XOR + bubble\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-universal-gates",
      children: "3.2 Universal Gates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NAND and NOR are termed universal gates because either alone suffices to implement any Boolean expression."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NAND as universal gate"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NOT: Connect both inputs together: A' = (A?A)'"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AND: Complement the output of NAND: A?B = [(A?B)']'"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OR: Apply De Morgan's theorem: A + B = (A'?B')'"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NOR as universal gate"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NOT: Connect both inputs together: A' = (A + A)'"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OR: Complement the output of NOR: A + B = [(A + B)']'"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AND: Apply De Morgan's theorem: A?B = (A' + B')'"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-gate-level-minimisation",
      children: "3.3 Gate-Level Minimisation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gate-level minimisation reduces the number of gates (and thus transistors, area, and power) needed to implement a function."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example"
      }), ": Implement F = A?B + A?C using minimal gates."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Direct: Two AND gates and one OR gate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimised: F = A?(B + C) ? one AND, one OR (saves one gate)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Gate {\n    type: \"AND\" | \"OR\" | \"NOT\" | \"NAND\" | \"NOR\" | \"XOR\" | \"XNOR\";\n    inputs: string[];\n    output: string;\n}\n\nclass GateNetwork {\n    gates: Gate[] = [];\n\n    addGate(gate: Gate): void {\n        this.gates.push(gate);\n    }\n\n    simulate(inputs: Map<string, boolean>): Map<string, boolean> {\n        const values = new Map(inputs);\n        for (const gate of this.gates) {\n            const inputVals = gate.inputs.map(i => {\n                if (!values.has(i)) throw new Error(`Unknown input: ${i}`);\n                return values.get(i)!;\n            });\n            let output: boolean;\n            switch (gate.type) {\n                case \"AND\": output = inputVals.every(v => v); break;\n                case \"OR\": output = inputVals.some(v => v); break;\n                case \"NOT\": output = !inputVals[0]; break;\n                case \"NAND\": output = !inputVals.every(v => v); break;\n                case \"NOR\": output = !inputVals.some(v => v); break;\n                case \"XOR\": output = inputVals.reduce((a, b) => a !== b); break;\n                case \"XNOR\": output = !inputVals.reduce((a, b) => a !== b); break;\n            }\n            values.set(gate.output, output);\n        }\n        return values;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-electrical-characteristics",
      children: "3.4 Electrical Characteristics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "341-propagation-delay",
      children: "3.4.1 Propagation Delay"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Propagation delay t_p is the time required for a change at the input to propagate to the output. It is measured from the 50% transition point of the input waveform to the 50% transition point of the output waveform. Two measurements are specified: t_{PLH} (LOW-to-HIGH) and t_{PHL} (HIGH-to-LOW)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The propagation delay through a chain of gates determines the maximum clock frequency of a synchronous system. For a path with N gates: t_total = S t_{p_i}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    subgraph \"Timing Diagram\"\n        CLK[\"Clock\"] -->|\"t_PLH\"| Q1[\"Output ?\"]\n        CLK -->|\"t_PHL\"| Q2[\"Output ?\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "342-fan-in",
      children: "3.4.2 Fan-In"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fan-in is the number of inputs that a logic gate can support. A 2-input AND gate has a fan-in of 2. Gates with higher fan-in require more transistors and have longer propagation delays."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Typical fan-in limits:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standard TTL: 8-10 inputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CMOS: 4-6 inputs (limited by series transistor stacks)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a function requires more inputs than available, gates must be cascaded."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "343-fan-out",
      children: "3.4.3 Fan-Out"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fan-out is the maximum number of gate inputs that a single gate output can drive while maintaining correct logic levels. It is limited by the current sourcing and sinking capability of the output stage."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fan-out calculation: FO = I_{OH(max)} / I_{IH} or FO = I_{OL(max)} / I_{IL}, whichever is smaller."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Exceeding fan-out causes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Voltage levels beyond guaranteed thresholds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Slower switching (increased propagation delay)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Potential device damage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "344-noise-margin",
      children: "3.4.4 Noise Margin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Noise margin quantifies the circuit's immunity to voltage noise. It represents the difference between the guaranteed output voltage and the required input voltage for each logic state."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NM_{LOW} = V_{IL}(max) - V_{OL}(max)\nNM_{HIGH} = V_{OH}(min) - V_{IH}(min)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    subgraph \"Noise Margin Diagram\"\n        VOH[\"V_OH(min) = 2.7V\"] --> NMH[\"NM_HIGH = 0.7V\"]\n        NMH --> VIH[\"V_IH(min) = 2.0V\"]\n        VIL[\"V_IL(max) = 0.8V\"] --> NML[\"NM_LOW = 0.4V\"]\n        NML --> VOL[\"V_OL(max) = 0.4V\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "345-power-dissipation",
      children: "3.4.5 Power Dissipation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Power dissipation comprises static and dynamic components:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Static power"
      }), ": P_static = I_leak ? V_DD. In CMOS, static power is near-zero (leakage only)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dynamic power"
      }), ": P_dynamic = a ? C_L ? V_DD? ? f, where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a = activity factor (fraction of gates switching per cycle)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C_L = load capacitance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f = switching frequency"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-logic-families",
      children: "3.5 Logic Families"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "351-ttl-transistor-transistor-logic",
      children: "3.5.1 TTL (Transistor-Transistor Logic)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TTL logic uses bipolar junction transistors. Key characteristics:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supply voltage: 5 V ? 5%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logic LOW: 0 V to 0.8 V (input), 0 V to 0.4 V (output)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logic HIGH: 2.0 V to 5 V (input), 2.4 V to 5 V (output)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Typical propagation delay: 10 ns (standard TTL)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Noise margin: approximately 0.4 V"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TTL subfamilies include:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Subfamily"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prefix"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Power"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "74xx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 mW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Low-power"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "74Lxx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 mW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schottky"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "74Sxx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 mW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Low-power Schottky"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "74LSxx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 mW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced Schottky"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "74ASxx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 mW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "74Fxx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.5 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 mW"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "352-cmos-complementary-metal-oxide-semiconductor",
      children: "3.5.2 CMOS (Complementary Metal-Oxide-Semiconductor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMOS logic uses complementary pairs of p-channel and n-channel MOSFETs. Key characteristics:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supply voltage: 3 V to 15 V (varies by subfamily)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Near-zero static power consumption"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logic levels proportional to supply voltage: V_{IL} = 0.3V_{DD}, V_{IH} = 0.7V_{DD}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Typical propagation delay: 20-50 ns (standard CMOS)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High noise margin: approximately 0.4V_{DD}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High fan-out capability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMOS subfamilies:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Subfamily"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prefix"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Voltage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4000 series"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-15 V"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High-speed CMOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "74HC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-6 V"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced CMOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "74AC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-5 V"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Low-voltage CMOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "74LVC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.65-3.6 V"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "353-comparison-of-ttl-and-cmos",
      children: "3.5.3 Comparison of TTL and CMOS"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TTL (74LS)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CMOS (74HC)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advanced CMOS (74AC)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supply voltage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 V ? 5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-6 V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-5 V"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Power per gate (static)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 mW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.002 mW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.001 mW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Propagation delay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 ns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fan-out"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Noise margin LOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.4 V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.7 V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.8 V"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Noise margin HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.4 V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.2 V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.2 V"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-tri-state-logic",
      children: "3.6 Tri-State Logic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A three-state gate exhibits three output states: 0, 1, and high-impedance (Z). The enable input controls whether the gate drives the output or enters the high-impedance state, disconnecting from the bus."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Enable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "X"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Z (high-impedance)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tri-state buffers are essential for bus-oriented architectures where multiple outputs share a common wire. Only one buffer may be active at a time; otherwise, bus contention (simultaneous 0 and 1 drive) occurs, causing excessive current and potential damage."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    subgraph \"Tri-State Bus\"\n        D1[Device 1] -->|Tri-state| BUS[Shared Bus]\n        D2[Device 2] -->|Tri-state| BUS\n        D3[Device 3] -->|Tri-state| BUS\n        BUS --> R[Receiver]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "37-open-drain-and-open-collector-outputs",
      children: "3.7 Open-Drain and Open-Collector Outputs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An open-drain (CMOS) or open-collector (TTL) output can only pull the output LOW. When the output should be HIGH, the output transistor turns off (high-impedance). An external pull-up resistor is required to achieve the HIGH state."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Wired-AND connection"
      }), ": Multiple open-drain outputs connected to a common pull-up resistor implement a wired-AND function. The output is HIGH only if ALL gates are in the HIGH-impedance state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Applications:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "I?C bus (both SDA and SCL are open-drain)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interrupt lines (multiple devices share one interrupt input)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level shifting (pull-up to different voltage than the gate supply)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "38-schmitt-trigger-inputs",
      children: "3.8 Schmitt Trigger Inputs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Schmitt trigger inputs have hysteresis: the input threshold for LOW-to-HIGH transitions (V_T+) is higher than the threshold for HIGH-to-LOW transitions (V_T-). This provides noise immunity for slow or noisy input signals."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hysteresis voltage: V_H = V_T+ - V_T-"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Applications:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Debouncing mechanical switches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cleaning up slow edges"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receiving signals over long cables"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-31-universal-gate-conversion",
      children: "Example 3.1: Universal Gate Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement the function F = A?B + C?D using only NAND gates."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ": The function is in SOP form. Replace AND and OR with NAND equivalents.\nF = A?B + C?D\n= [(A?B)']' + [(C?D)']' (double complement)\n= ([A?B)'?(C?D)']' (De Morgan: X' + Y' = (X?Y)')\n= [(A?B)'?(C?D)']'"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implementation: Three NAND gates ? two for the AND functions, one for the OR."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-32-propagation-delay-analysis",
      children: "Example 3.2: Propagation Delay Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A logic circuit consists of five cascaded NAND gates. Each gate has t_{PLH} = 8 ns and t_{PHL} = 12 ns. A rising edge arrives at the input. Calculate the worst-case propagation delay through the chain."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ": For a rising edge, the first gate exhibits t_{PHL} = 12 ns (since the output falls). The second gate exhibits t_{PLH} = 8 ns. The pattern alternates. Worst case: 3 gates exhibit t_{PHL} and 2 exhibit t_{PLH}. Total delay = 3?12 + 2?8 = 36 + 16 = 52 ns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-33-fan-out-calculation",
      children: "Example 3.3: Fan-Out Calculation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A 74LS00 NAND gate has I_{OH} = -0.4 mA, I_{OL} = 8 mA, I_{IH} = 20 ?A, I_{IL} = -0.4 mA. Calculate the fan-out."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ":\nHIGH-state fan-out: |I_{OH}| / I_{IH} = 0.4 mA / 20 ?A = 400 ?A / 20 ?A = 20\nLOW-state fan-out: I_{OL} / |I_{IL}| = 8 mA / 0.4 mA = 20\nFan-out = min(20, 20) = 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-34-noise-margin-calculation",
      children: "Example 3.4: Noise Margin Calculation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A 74LS00 has V_{OH}(min) = 2.7 V, V_{OL}(max) = 0.5 V, V_{IH}(min) = 2.0 V, V_{IL}(max) = 0.8 V. Calculate noise margins."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ":\nNM_{HIGH} = 2.7 - 2.0 = 0.7 V\nNM_{LOW} = 0.8 - 0.5 = 0.3 V"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-35-dynamic-power-calculation",
      children: "Example 3.5: Dynamic Power Calculation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A CMOS gate operates at V_{DD} = 3.3 V, drives a 15 pF load, and switches at 100 MHz with an activity factor of 0.5. Calculate the dynamic power."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ": P = 0.5 ? 15?10^{-12} ? (3.3)^2 ? 100?10^6 = 0.5 ? 15 ? 10.89 ? 10^{-12} ? 10^8 = 0.5 ? 15 ? 10.89 ? 10^{-4} = 81.675 ? 10^{-4} = 8.1675 mW"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Logic Family"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Supply"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Static Power"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fan-Out"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Noise Margin"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TTL (74LS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 mW/gate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.4 V"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CMOS (74HC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-6V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.002 mW/gate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.7 V"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced CMOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.8-3.3V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Near zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-5 ns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.3 V"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Gate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output When"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symbol"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All inputs 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A?B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D-shape"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any input 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A+B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Curved body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triangle + bubble"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NAND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not all 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(A?B)'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AND + bubble"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No input 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(A+B)'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OR + bubble"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inputs differ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A?B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OR + extra curve"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XNOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inputs match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(A?B)'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XOR + bubble"
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
            children: "CPU Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALU logic gates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gates are the physical atoms of computation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded Systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TTL/CMOS level interfacing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Voltage compatibility is critical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Digital Circuits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IC fabrication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal gate reduces mask layers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Research"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Emerging logic tech"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversible/quantum gates studied"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NAND and NOR are universal"
        }), " ? master converting any expression to these gate types for IC design."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Propagation delay limits speed"
        }), " ? the critical path delay through gates determines max clock frequency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fan-out cannot be exceeded"
        }), " ? violating fan-out causes unreliable logic levels and potential damage."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CMOS dominates modern design"
        }), " ? near-zero static power makes CMOS the choice for most applications."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tri-state enables shared buses"
        }), " ? but ensuring only one driver is active at a time is critical."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Open-drain for wired-AND"
        }), " ? useful for shared interrupt lines and I?C protocol."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-examples",
      children: "TypeScript Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "logic-gate-simulator",
      children: "Logic Gate Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This class simulates all seven fundamental logic gates and demonstrates universal gate conversions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Bit = 0 | 1;\n\nclass LogicGate {\n  static and(a: Bit, b: Bit): Bit { return (a & b) as Bit; }\n  static or(a: Bit, b: Bit): Bit { return (a | b) as Bit; }\n  static not(a: Bit): Bit { return (a ^ 1) as Bit; }\n  static nand(a: Bit, b: Bit): Bit { return ((a & b) ^ 1) as Bit; }\n  static nor(a: Bit, b: Bit): Bit { return ((a | b) ^ 1) as Bit; }\n  static xor(a: Bit, b: Bit): Bit { return (a ^ b) as Bit; }\n  static xnor(a: Bit, b: Bit): Bit { return ((a ^ b) ^ 1) as Bit; }\n\n  static truthTable(gate: string, fn: (...args: Bit[]) => Bit, inputs: number = 2): void {\n    console.log(`\\n=== ${gate} Truth Table ===`);\n    const header = inputs === 2 ? \"A | B | F\" : \"A | F\";\n    console.log(`  ${header}`);\n    console.log(`  ${inputs === 2 ? \"--- | --- | ---\" : \"--- | ---\"}`);\n    const rows = inputs === 2 ? [[0, 0], [0, 1], [1, 0], [1, 1]] : [[0], [1]];\n    for (const args of rows) {\n      const result = fn(...(args as [Bit, Bit]));\n      console.log(`  ${args.join(\" | \")} | ${result}`);\n    }\n  }\n}\n\nconst gate = LogicGate;\nconsole.log(\"=== Fundamental Logic Gates ===\");\ngate.truthTable(\"AND\", gate.and);\ngate.truthTable(\"OR\", gate.or);\ngate.truthTable(\"NOT\", gate.not, 1);\ngate.truthTable(\"NAND\", gate.nand);\ngate.truthTable(\"NOR\", gate.nor);\ngate.truthTable(\"XOR\", gate.xor);\ngate.truthTable(\"XNOR\", gate.xnor);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "universal-gate-conversions",
      children: "Universal Gate Conversions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Demonstrating how NAND and NOR gates can implement all other gate types:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class UniversalGates {\n  // NAND-based implementations\n  static nandAsNot(a: Bit): Bit { return LogicGate.nand(a, a); }\n  static nandAsAnd(a: Bit, b: Bit): Bit { return this.nandAsNot(LogicGate.nand(a, b)); }\n  static nandAsOr(a: Bit, b: Bit): Bit {\n    return LogicGate.nand(this.nandAsNot(a), this.nandAsNot(b));\n  }\n  static nandAsXor(a: Bit, b: Bit): Bit {\n    const n1 = LogicGate.nand(a, b);\n    const n2 = LogicGate.nand(a, n1);\n    const n3 = LogicGate.nand(b, n1);\n    return LogicGate.nand(n2, n3);\n  }\n\n  // NOR-based implementations\n  static norAsNot(a: Bit): Bit { return LogicGate.nor(a, a); }\n  static norAsOr(a: Bit, b: Bit): Bit { return this.norAsNot(LogicGate.nor(a, b)); }\n  static norAsAnd(a: Bit, b: Bit): Bit {\n    return LogicGate.nor(this.norAsNot(a), this.norAsNot(b));\n  }\n  static norAsXor(a: Bit, b: Bit): Bit {\n    const n1 = LogicGate.nor(a, b);\n    const n2 = LogicGate.nor(a, n1);\n    const n3 = LogicGate.nor(b, n1);\n    return LogicGate.nor(n2, n3);\n  }\n}\n\nconst ug = UniversalGates;\nconsole.log(\"\\n=== NAND Universal Gate Conversions ===\");\nfor (const a of [0, 1] as Bit[]) {\n  for (const b of [0, 1] as Bit[]) {\n    console.log(`  A=${a} B=${b}: NOT=${ug.nandAsNot(a)} AND=${ug.nandAsAnd(a,b)} OR=${ug.nandAsOr(a,b)} XOR=${ug.nandAsXor(a,b)}`);\n  }\n}\n\nconsole.log(\"\\n=== NOR Universal Gate Conversions ===\");\nfor (const a of [0, 1] as Bit[]) {\n  for (const b of [0, 1] as Bit[]) {\n    console.log(`  A=${a} B=${b}: NOT=${ug.norAsNot(a)} OR=${ug.norAsOr(a,b)} AND=${ug.norAsAnd(a,b)} XOR=${ug.norAsXor(a,b)}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gate-network-composer",
      children: "Gate Network Composer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Building complex functions from fundamental gates:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class GateNetwork {\n  static halfAdder(a: Bit, b: Bit): { sum: Bit; carry: Bit } {\n    return { sum: LogicGate.xor(a, b), carry: LogicGate.and(a, b) };\n  }\n\n  static fullAdder(a: Bit, b: Bit, carryIn: Bit): { sum: Bit; carryOut: Bit } {\n    const ha1 = this.halfAdder(a, b);\n    const ha2 = this.halfAdder(ha1.sum, carryIn);\n    return {\n      sum: ha2.sum,\n      carryOut: LogicGate.or(ha1.carry, ha2.carry)\n    };\n  }\n\n  static fourBitRippleCarry(\n    a: [Bit, Bit, Bit, Bit],\n    b: [Bit, Bit, Bit, Bit]\n  ): { sum: [Bit, Bit, Bit, Bit]; carry: Bit; overflow: boolean } {\n    const fa0 = this.fullAdder(a[3], b[3], 0);\n    const fa1 = this.fullAdder(a[2], b[2], fa0.carryOut);\n    const fa2 = this.fullAdder(a[1], b[1], fa1.carryOut);\n    const fa3 = this.fullAdder(a[0], b[0], fa2.carryOut);\n    const overflow = fa2.carryOut !== fa3.carryOut;\n    return {\n      sum: [fa3.sum, fa2.sum, fa1.sum, fa0.sum],\n      carry: fa3.carryOut,\n      overflow\n    };\n  }\n\n  static mux2x1(sel: Bit, a: Bit, b: Bit): Bit {\n    return LogicGate.or(\n      LogicGate.and(LogicGate.not(sel), a),\n      LogicGate.and(sel, b)\n    );\n  }\n\n  static decoder1x2(input: Bit): [Bit, Bit] {\n    return [LogicGate.not(input), input];\n  }\n}\n\nconst net = GateNetwork;\nconsole.log(\"\\n=== Gate Network: 4-bit Ripple Carry ===\");\nconst a: [Bit, Bit, Bit, Bit] = [0, 1, 0, 1];\nconst b: [Bit, Bit, Bit, Bit] = [0, 0, 1, 1];\nconst r = net.fourBitRippleCarry(a, b);\nconsole.log(`  ${a.join(\"\")} + ${b.join(\"\")} = ${r.sum.join(\"\")} (carry=${r.carry}, overflow=${r.overflow})`);\n\nconsole.log(\"\\n=== Gate Network: 2-to-1 Multiplexer ===\");\nfor (const sel of [0, 1] as Bit[]) {\n  console.log(`  sel=${sel}: mux(${sel}, 1, 0) = ${net.mux2x1(sel, 1, 0)}`);\n}\n\nconsole.log(\"\\n=== Gate Network: 1-to-2 Decoder ===\");\nfor (const input of [0, 1] as Bit[]) {\n  const [y0, y1] = net.decoder1x2(input);\n  console.log(`  input=${input}: y0=${y0}, y1=${y1}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "propagation-delay-simulator",
      children: "Propagation Delay Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class TimingSimulator {\n  static readonly GATE_DELAY_NS: Record<string, number> = {\n    AND: 10, OR: 10, NAND: 8, NOR: 8, NOT: 5, XOR: 15, XNOR: 15\n  };\n\n  static criticalPath(gates: string[][]): { path: string[]; delay: number } {\n    let maxDelay = 0;\n    let maxPath: string[] = [];\n\n    for (const path of gates) {\n      const delay = path.reduce((sum, g) => sum + (this.GATE_DELAY_NS[g] ?? 10), 0);\n      if (delay > maxDelay) {\n        maxDelay = delay;\n        maxPath = path;\n      }\n    }\n    return { path: maxPath, delay: maxDelay };\n  }\n}\n\nconsole.log(\"\\n=== Propagation Delay Analysis ===\");\nconst paths = [\n  { name: \"4-bit AND chain\", gates: [\"AND\", \"AND\", \"AND\", \"AND\"] },\n  { name: \"Ripple-carry path\", gates: [\"XOR\", \"AND\", \"OR\", \"XOR\", \"AND\", \"OR\", \"XOR\"] },\n  { name: \"NAND-only decoder\", gates: [\"NAND\", \"NAND\", \"NAND\"] },\n  { name: \"XOR tree (8-bit)\", gates: [\"XOR\", \"XOR\", \"XOR\", \"XOR\", \"XOR\", \"XOR\", \"XOR\"] },\n];\n\nfor (const p of paths) {\n  const r = TimingSimulator.criticalPath([p.gates]);\n  console.log(`  ${p.name}: ${r.delay}ns (${p.gates.length} gates)`);\n}\n\nconst freq = 1_000_000_000 / TimingSimulator.criticalPath([paths[1].gates]).delay;\nconsole.log(`\\n  Max clock frequency (ripple-carry): ${(freq / 1_000_000).toFixed(2)} MHz`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tri-state-bus-controller",
      children: "Tri-State Bus Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class TriStateBus {\n  static drive(data: Bit, enable: Bit): Bit | null {\n    return enable ? data : null;\n  }\n\n  static priorityArbiter(requests: [Bit, Bit, Bit, Bit]): [Bit, Bit, Bit, Bit] {\n    const enables: [Bit, Bit, Bit, Bit] = [0, 0, 0, 0];\n    if (requests[0]) { enables[0] = 1; }\n    else if (requests[1]) { enables[1] = 1; }\n    else if (requests[2]) { enables[2] = 1; }\n    else if (requests[3]) { enables[3] = 1; }\n    return enables;\n  }\n}\n\nconsole.log(\"\\n=== Tri-State Bus Arbiter ===\");\nconst testRequests: [Bit, Bit, Bit, Bit][] = [\n  [0, 0, 0, 0], [1, 0, 0, 0], [0, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 1, 1, 1]\n];\nfor (const req of testRequests) {\n  const en = TriStateBus.priorityArbiter(req);\n  const active = en.findIndex(e => e === 1);\n  console.log(`  Req=${req.join(\"\")} ? En=${en.join(\"\")} (M${active >= 0 ? active + 1 : \"none\"} drives bus)`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-diagrams",
      children: "Mermaid Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fundamental-logic-gate-symbols",
      children: "Fundamental Logic Gate Symbols"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph AND[AND & NAND]\n        A1[A] -->|&| Y1[Y = A?B]\n        B1[B] -->|&| Y1\n    end\n    subgraph OR[OR & NOR]\n        A2[A] -->|=1| Y2[Y = A+B]\n        B2[B] -->|=1| Y2\n    end\n    subgraph NOT[NOT]\n        A3[A] -->|1| Y3[Y = A']\n    end\n    subgraph XOR[XOR & XNOR]\n        A4[A] -->|=1| Y4[Y = A?B]\n        B4[B] -->|=1| Y4\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "universal-gate-conversions-nand",
      children: "Universal Gate Conversions (NAND)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph NAND_Only[NAND as Universal Gate]\n        NA[INV: NAND A,A] --> NAo[A']\n        NAND_AB[NAND A,B] --> NAND_A[NAND with A,A] --> AAND[AND A?B]\n        NAND_AB2[NAND A,B] --> NAND_B\n        NA_A[NAND A,A] --> NAND_BB[NAND B,B] --> NAND_AB3[NAND ...] --> AOR[OR A+B]\n        N1[NAND A,B] --> NAND_N1[NAND A,N1]\n        N1 --> NAND_N2[NAND B,N1]\n        NAND_N1 --> NAND_N3[NAND N2,N3]\n        NAND_N2 --> NAND_N3\n        NAND_N3 --> AXOR[XOR A?B]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tri-state-bus-architecture",
      children: "Tri-State Bus Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    M1[Module 1] -->|Data| T1[Tri-State<br/>Buffer 1]\n    M2[Module 2] -->|Data| T2[Tri-State<br/>Buffer 2]\n    M3[Module 3] -->|Data| T3[Tri-State<br/>Buffer 3]\n    Arbiter[Priority<br/>Arbiter] -->|Enable 1| T1\n    Arbiter -->|Enable 2| T2\n    Arbiter -->|Enable 3| T3\n    T1 --> Bus[Shared Data Bus]\n    T2 --> Bus\n    T3 --> Bus\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cmos-inverter-structure",
      children: "CMOS Inverter Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    VDD[VDD] --> P[PMOS<br/>Q1]\n    Input[Input A] --> P\n    Input --> N[NMOS<br/>Q2]\n    P --> Output[Output Y = A']\n    N --> Output\n    N --> GND[GND]\n    subgraph Behavior\n        A1[\"A=0 ? P ON, N OFF ? Y=1\"] -->|Pull-up to VDD| H[Output = VDD]\n        A0[\"A=1 ? P OFF, N ON ? Y=0\"] -->|Pull-down to GND| L[Output = GND]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// logic gates\n// boolean-circuits-sequential implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'logic gates', data: { topic: 'boolean-circuits-sequential' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// logic gates - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'digital-circuits demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'digital-logic', chapter: 'logic gates' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('digital-circuits'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Seven fundamental gates exist: AND, OR, NOT, NAND, NOR, XOR, and XNOR."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NAND and NOR are universal gates ? any Boolean function can be constructed from either alone."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Three-state gates enable shared bus architectures by providing a high-impedance state."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open-drain outputs implement wired-AND connections with external pull-up resistors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TTL and CMOS are the dominant logic families, with CMOS prevailing in modern designs due to low power."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Key electrical parameters include propagation delay, fan-in, fan-out, and noise margin."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which gates are classified as universal?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) AND and OR"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) NAND and NOR"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) XOR and XNOR"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) NOT and Buffer"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A three-state gate's third output state is:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 0"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) High-impedance (Z)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Undefined"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CMOS logic's main advantage over TTL is:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Higher speed"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Lower static power consumption"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Lower cost"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Higher output voltage"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Fan-out is defined as:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The number of inputs a gate has"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The maximum number of gate inputs a single output can drive"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The propagation delay of a gate"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) The supply voltage range"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "An open-drain output requires:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) An internal pull-down resistor"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) An external pull-up resistor"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) A tri-state enable signal"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) A Schmitt trigger input"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answers</summary>\n1. B, 2. C, 3. B, 4. B, 5. B\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Draw the circuit symbols for all seven fundamental logic gates."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which gates are classified as universal? Explain why."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the function of the enable input on a tri-state buffer?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define propagation delay. Why does it matter in high-speed circuits?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name two advantages of CMOS over TTL."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show how to implement a 2-input AND gate using only NOR gates."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show how to implement a 2-input XOR gate using only NAND gates. Determine the minimum number of NAND gates required."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A 74LS00 quad NAND gate has the following specifications: V_{OH}(min) = 2.7 V, V_{OL}(max) = 0.5 V, V_{IH}(min) = 2.0 V, V_{IL}(max) = 0.8 V. Calculate the LOW and HIGH noise margins."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A CMOS inverter operates at V_{DD} = 3.3 V and switches at 100 MHz driving a 15 pF load. Calculate the dynamic power dissipation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the function F = (A + B)?C + D using only:\na) NAND gates\nb) NOR gates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A digital system uses a shared data bus driven by tri-state buffers from four different modules. Design the enable logic such that only one module drives the bus at any time. The module priorities are: Module 1 (highest), Module 2, Module 3, Module 4 (lowest). A higher-priority module's request inhibits all lower-priority modules from driving the bus. Provide the truth table, Boolean expressions for the enable signals, and a gate-level schematic description."
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