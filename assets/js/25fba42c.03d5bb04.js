"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[94086],{

/***/ 13690
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_digital_logic_11_arithmetic_circuits_md_25f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-digital-logic-11-arithmetic-circuits-md-25f.json
const site_docs_courses_digital_logic_11_arithmetic_circuits_md_25f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/digital-logic/11-arithmetic-circuits","title":"Chapter 11: Arithmetic Circuits","description":"Prereq: Chapter 5 (Combinational Circuits) ? adders and ALUs provide the foundation for multiplication and division.","source":"@site/docs/courses/digital-logic/11-arithmetic-circuits.md","sourceDirName":"courses/digital-logic","slug":"/digital-logic/11-arithmetic-circuits","permalink":"/ai-engineering-journey/digital-logic/11-arithmetic-circuits","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"id":"11-arithmetic-circuits","slug":"/digital-logic/11-arithmetic-circuits","title":"Chapter 11: Arithmetic Circuits","sidebar_label":"Chapter 11: Arithmetic Circuits","sidebar_position":11},"sidebar":"course-digital-logic","previous":{"title":"Chapter 10: Programmable Logic ? PLA and PAL","permalink":"/ai-engineering-journey/digital-logic/10-pla-pal"},"next":{"title":"Chapter 12: Hardware Description Languages","permalink":"/ai-engineering-journey/digital-logic/12-hdl"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/digital-logic/11-arithmetic-circuits.md


const frontMatter = {
	id: '11-arithmetic-circuits',
	slug: '/digital-logic/11-arithmetic-circuits',
	title: 'Chapter 11: Arithmetic Circuits',
	sidebar_label: 'Chapter 11: Arithmetic Circuits',
	sidebar_position: 11
};
const contentTitle = 'Chapter 11: Arithmetic Circuits';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "11.1 Binary Multiplication",
  "id": "111-binary-multiplication",
  "level": 2
}, {
  "value": "11.1.1 Array Multiplier",
  "id": "1111-array-multiplier",
  "level": 3
}, {
  "value": "11.1.2 Booth Multiplication",
  "id": "1112-booth-multiplication",
  "level": 3
}, {
  "value": "11.1.3 Wallace Tree Multiplier",
  "id": "1113-wallace-tree-multiplier",
  "level": 3
}, {
  "value": "11.1.4 Multiplier Comparison",
  "id": "1114-multiplier-comparison",
  "level": 3
}, {
  "value": "11.2 Binary Division",
  "id": "112-binary-division",
  "level": 2
}, {
  "value": "11.2.1 Restoring Division",
  "id": "1121-restoring-division",
  "level": 3
}, {
  "value": "11.2.2 Non-Restoring Division",
  "id": "1122-non-restoring-division",
  "level": 3
}, {
  "value": "11.2.3 SRT Division",
  "id": "1123-srt-division",
  "level": 3
}, {
  "value": "11.3 Floating-Point Arithmetic",
  "id": "113-floating-point-arithmetic",
  "level": 2
}, {
  "value": "11.3.1 IEEE 754 Format",
  "id": "1131-ieee-754-format",
  "level": 3
}, {
  "value": "11.3.2 Floating-Point Addition",
  "id": "1132-floating-point-addition",
  "level": 3
}, {
  "value": "11.3.3 Floating-Point Multiplication",
  "id": "1133-floating-point-multiplication",
  "level": 3
}, {
  "value": "11.3.4 Rounding Modes",
  "id": "1134-rounding-modes",
  "level": 3
}, {
  "value": "11.3.5 Floating-Point Pipeline",
  "id": "1135-floating-point-pipeline",
  "level": 3
}, {
  "value": "11.4 Residue Number System (RNS)",
  "id": "114-residue-number-system-rns",
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
        id: "chapter-11-arithmetic-circuits",
        children: "Chapter 11: Arithmetic Circuits"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Chapter 5 (Combinational Circuits) ? adders and ALUs provide the foundation for multiplication and division.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 12 (Hardware Description Languages) ? arithmetic circuits are described in HDL for synthesis."]
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
        href: "../../assets/images/lessons/digital-logic/11-arithmetic-circuits/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/11-arithmetic-circuits/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/digital-logic/11-arithmetic-circuits/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/11-arithmetic-circuits/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/digital-logic/11-arithmetic-circuits/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/11-arithmetic-circuits/visual-explanation.png",
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
        children: "Design array multipliers, Booth multipliers, and Wallace tree multipliers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyse the speed-area trade-offs of different multiplier architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement restoring and non-restoring binary dividers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute IEEE 754 floating-point addition, multiplication, and rounding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design leading-one detectors and barrel shifters for floating-point units"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate arithmetic circuit performance across technology nodes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply residue number systems and redundant arithmetic for specialised applications"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "111-binary-multiplication",
      children: "11.1 Binary Multiplication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multiplication of two N-bit numbers produces a 2N-bit result:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "       1 0 1 1   (11, multiplicand)\n     ? 1 1 0 1   (13, multiplier)\n     ---------\n       1 0 1 1   (partial product 0)\n     0 0 0 0     (partial product 1)\n   1 0 1 1       (partial product 2)\n+ 1 0 1 1        (partial product 3)\n-------------\n 1 0 0 0 1 1 1 1   (143)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1111-array-multiplier",
      children: "11.1.1 Array Multiplier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The simplest parallel multiplier generates all partial products in parallel and sums them using an array of adders."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    A0[A0] --> AND00[&]\n    B0[B0] --> AND00\n    A0 --> AND01[&]\n    B1[B1] --> AND01\n    A0 --> AND02[&]\n    B2[B2] --> AND02\n    AND00 --> HA0[HA]\n    AND01 --> HA0\n    AND01 --> FA0[FA]\n    AND02 --> FA0\n    AND02 --> FA1[FA]\n    A0 --> AND03[&]\n    B3[B3] --> AND03\n    AND03 --> FA1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function arrayMultiply(A: number, B: number, bits: number): number {\n    const partial: number[][] = [];\n\n    // Generate partial products\n    for (let j = 0; j < bits; j++) {\n        part_products: number[] = [];\n        for (let i = 0; i < bits; i++) {\n            const bit = ((A >> i) & 1) & ((B >> j) & 1);\n            partial.push(bit << (i + j));\n        }\n    }\n\n    // Sum all partial products using ripple-carry adder tree\n    let result = 0;\n    for (const pp of partial) {\n        result += pp;\n    }\n    return result;\n}\n\nfunction multiply(A: number, B: number, bits: number): number {\n    const mask = (1 << bits) - 1;\n    const a = A & mask;\n    const b = B & mask;\n    return a * b; // direct verification\n}\n\n// 4-bit multiplication\nconsole.log(arrayMultiply(11, 13, 4)); // 143\nconsole.log(arrayMultiply(6, 7, 4));   // 42\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Area:"
      }), " O(N?) AND gates + O(N?) full adders for N-bit multiplication.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delay:"
      }), " O(N) adder levels ? proportional to the word width."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1112-booth-multiplication",
      children: "11.1.2 Booth Multiplication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Booth's algorithm reduces the number of partial products by encoding groups of multiplier bits."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Radix-2 Booth encoding:"
      }), " recodes multiplier bits into {-1, 0, +1}:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "y?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "y??1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subtract A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add 0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function boothMultiply(A: number, B: number, bits: number): number {\n    const mask = (1 << bits) - 1;\n    let M = A & mask;\n    let Q = B & mask;\n    let Q_1 = 0; // extra bit\n    let result = 0;\n    const extendedBits = bits * 2;\n\n    for (let i = 0; i < bits; i++) {\n        const Q0 = Q & 1;\n        const op = (Q0 << 1) | Q_1;\n\n        if (op === 0b01) { // 0 ? 1: add M\n            result += (M << i);\n        } else if (op === 0b10) { // 1 ? 0: subtract M\n            result -= (M << i);\n        }\n        // op = 00 or 11: no operation\n\n        Q_1 = Q0;\n        Q >>= 1;\n    }\n\n    return result & ((1 << (bits * 2)) - 1);\n}\n\nconsole.log(boothMultiply(11, 13, 4)); // 143\nconsole.log(boothMultiply(-3 & 0xF, 7, 4)); // -21 = 235 in unsigned, but signed would be -21\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Radix-4 (Modified Booth):"
      }), " Groups 3 multiplier bits, reducing N partial products to N/2."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "y??1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "y?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "y??1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
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
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+2A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function boothRadix4(A: number, B: number, bits: number): number {\n    const mask = (1 << bits) - 1;\n    // For simplicity, assume unsigned\n    const aVal = A & mask;\n    const bVal = B & mask;\n    let result = 0;\n\n    // Extend B with a trailing 0 for Booth encoding\n    const bExt = bVal << 1;\n    for (let i = 0; i < bits; i += 2) {\n        const group = (bExt >> i) & 0b111;\n        let term: number;\n\n        switch (group) {\n            case 0b000: term = 0; break;\n            case 0b001: term = aVal; break;\n            case 0b010: term = aVal; break;\n            case 0b011: term = aVal << 1; break;\n            case 0b100: term = -(aVal << 1); break;\n            case 0b101: term = -(aVal); break;\n            case 0b110: term = -(aVal); break;\n            case 0b111: term = 0; break;\n            default: term = 0;\n        }\n        result += term << i;\n    }\n\n    return result & ((1 << (bits * 2)) - 1);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1113-wallace-tree-multiplier",
      children: "11.1.3 Wallace Tree Multiplier"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Wallace tree reduces the partial product summation from O(N) to O(log N) levels using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "carry-save adders"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    PP0[PP0] --> CSA1[CSA Stage 1<br>3:2 reduction]\n    PP1[PP1] --> CSA1\n    PP2[PP2] --> CSA1\n    PP3[PP3] --> CSA1\n    PP4[PP4] --> CSA1\n    PP5[PP5] --> CSA1\n    PP6[PP6] --> CSA1\n    PP7[PP7] --> CSA1\n    CSA1 --> CSA2[CSA Stage 2<br>3:2 reduction]\n    CSA1 --> CSA2\n    CSA2 --> CSA3[CSA Stage 3<br>3:2 reduction]\n    CSA3 --> CPA[Final CPA<br>Carry-Propagate Adder]\n    CPA --> PROD[Product]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class WallaceTreeMultiplier {\n    multiply(A: number, B: number, bits: number): number {\n        // Generate partial products\n        let partials: number[] = [];\n        for (let j = 0; j < bits; j++) {\n            if ((B >> j) & 1) {\n                partials.push(A << j);\n            }\n        }\n\n        // Reduce using carry-save adder tree\n        while (partials.length > 2) {\n            const next: number[] = [];\n            for (let i = 0; i < partials.length; i += 3) {\n                if (i + 2 < partials.length) {\n                    // CSA: 3 inputs ? sum + carry\n                    const a = partials[i];\n                    const b = partials[i + 1];\n                    const c = partials[i + 2];\n                    const sum = a ^ b ^ c;\n                    const carry = (a & b) | (a & c) | (b & c);\n                    next.push(sum);\n                    next.push(carry << 1);\n                } else if (i + 1 < partials.length) {\n                    next.push(partials[i] ^ partials[i + 1]);\n                    next.push(partials[i] & partials[i + 1]);\n                } else {\n                    next.push(partials[i]);\n                }\n            }\n            partials = next;\n        }\n\n        // Final carry-propagate addition\n        if (partials.length === 2) {\n            return partials[0] + partials[1];\n        }\n        return partials[0] || 0;\n    }\n}\n\nconst wallace = new WallaceTreeMultiplier();\nconsole.log(wallace.multiply(11, 13, 4)); // 143\nconsole.log(wallace.multiply(255, 255, 8)); // 65025\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1114-multiplier-comparison",
      children: "11.1.4 Multiplier Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Delay"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Regularity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best for"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N?)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small widths (=8 bit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Booth (radix-4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N?)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N/2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium widths"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wallace tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N?)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-performance DSP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dadda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N?)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly less area than Wallace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Area-constrained designs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "112-binary-division",
      children: "11.2 Binary Division"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Division is the most complex arithmetic operation. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "restoring division"
      }), " algorithm is the most straightforward."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1121-restoring-division",
      children: "11.2.1 Restoring Division"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm:\n    R = A (dividend)\n    for i = N-1 down to 0:\n        R = 2R - D (divisor)\n        if R >= 0:\n            Q[i] = 1\n        else:\n            Q[i] = 0\n            R = R + D  (restore)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function restoringDivide(dividend: number, divisor: number, bits: number): { quotient: number; remainder: number } {\n    let R = 0;\n    let Q = dividend;\n    const D = divisor;\n    const mask = (1 << bits) - 1;\n\n    for (let i = bits - 1; i >= 0; i--) {\n        // Shift left: R = 2R, bring down Q's MSB\n        R = ((R << 1) | ((Q >> (bits - 1)) & 1));\n        Q = (Q << 1) & mask;\n\n        // Subtract divisor\n        const Rsub = R - D;\n        if (Rsub >= 0) {\n            R = Rsub;\n            Q |= 1; // set quotient bit\n        }\n        // else: restore (R unchanged)\n    }\n\n    return { quotient: Q, remainder: R };\n}\n\nconsole.log(restoringDivide(143, 13, 8)); // { quotient: 11, remainder: 0 }\nconsole.log(restoringDivide(145, 13, 8)); // { quotient: 11, remainder: 2 }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1122-non-restoring-division",
      children: "11.2.2 Non-Restoring Division"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Eliminates the restoration step by allowing negative remainders:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if R >= 0:  R = 2R - D,  Q[i] = 1\nif R < 0:   R = 2R + D,  Q[i] = 0\nFinal correction: if R < 0, R = R + D\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function nonRestoringDivide(dividend: number, divisor: number, bits: number): { quotient: number; remainder: number } {\n    let R = 0;\n    let Q = dividend;\n    const D = divisor;\n    const mask = (1 << bits) - 1;\n\n    for (let i = bits - 1; i >= 0; i--) {\n        R = ((R << 1) | ((Q >> (bits - 1)) & 1));\n        Q = (Q << 1) & mask;\n\n        if (R >= 0) {\n            R = R - D;\n        } else {\n            R = R + D;\n        }\n\n        if (R >= 0) {\n            Q |= 1;\n        }\n        // else: Q bit stays 0\n    }\n\n    // Final correction\n    if (R < 0) {\n        R = R + D;\n    }\n\n    return { quotient: Q, remainder: R };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1123-srt-division",
      children: "11.2.3 SRT Division"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SRT division (named for Sweeney, Robertson, Tocher) uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "redundant quotient digit set"
      }), " {-1, 0, +1} and a radix higher than 2, enabling faster division. Radix-4 SRT produces 2 quotient bits per iteration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "113-floating-point-arithmetic",
      children: "11.3 Floating-Point Arithmetic"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1131-ieee-754-format",
      children: "11.3.1 IEEE 754 Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Single precision (32-bit):\n  S (1)  |  Exponent (8)  |  Mantissa (23)\n  31     |  30..23        |  22..0\n\nDouble precision (64-bit):\n  S (1)  |  Exponent (11) |  Mantissa (52)\n  63     |  62..52        |  51..0\n\nValue = (-1)^S ? 1.M ? 2^(E - bias)\n  Single bias: 127\n  Double bias: 1023\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function floatToBits(f: number): number {\n    const buffer = new ArrayBuffer(4);\n    const view = new DataView(buffer);\n    view.setFloat32(0, f, true); // little-endian\n    return view.getUint32(0, true);\n}\n\nfunction bitsToFloat(bits: number): number {\n    const buffer = new ArrayBuffer(4);\n    const view = new DataView(buffer);\n    view.setUint32(0, bits, true);\n    return view.getFloat32(0, true);\n}\n\nfunction fpDecompose(bits: number): { sign: number; exponent: number; mantissa: number } {\n    const sign = (bits >> 31) & 1;\n    const exponent = (bits >> 23) & 0xFF;\n    const mantissa = bits & 0x7FFFFF;\n    return { sign, exponent, mantissa };\n}\n\nconst piBits = floatToBits(Math.PI);\nconsole.log(`PI bits: ${piBits.toString(16)}`);\nconsole.log(fpDecompose(piBits)); // sign=0, exponent=128, mantissa=0x490FDA\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1132-floating-point-addition",
      children: "11.3.2 Floating-Point Addition"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function fpAdd(a: number, b: number): number {\n    const bitsA = floatToBits(a);\n    const bitsB = floatToBits(b);\n    let { sign: sA, exponent: eA, mantissa: mA } = fpDecompose(bitsA);\n    let { sign: sB, exponent: eB, mantissa: mB } = fpDecompose(bitsB);\n\n    // Handle special values (NaN, Inf, zero)\n    if (eA === 0xFF || eB === 0xFF) return a + b; // simplified\n    if (eA === 0 && mA === 0) return b;\n    if (eB === 0 && mB === 0) return a;\n\n    // Add implicit 1\n    let mA_full = (eA !== 0 ? 0x800000 : 0) | mA;\n    let mB_full = (eB !== 0 ? 0x800000 : 0) | mB;\n\n    // Align to larger exponent\n    if (eA > eB) {\n        const shift = eA - eB;\n        mB_full >>= shift;\n        eB = eA;\n    } else if (eB > eA) {\n        const shift = eB - eA;\n        mA_full >>= shift;\n        eA = eB;\n    }\n\n    // Add mantissas (with sign)\n    let resultM: number;\n    let resultS = sA;\n    if (sA === sB) {\n        resultM = mA_full + mB_full;\n    } else {\n        if (mA_full >= mB_full) {\n            resultM = mA_full - mB_full;\n        } else {\n            resultM = mB_full - mA_full;\n            resultS = sB;\n        }\n    }\n\n    // Normalise\n    let resultE = eA;\n    while (resultM >= 0x1000000) {\n        resultM >>= 1;\n        resultE++;\n    }\n    while (resultM < 0x800000 && resultE > 1) {\n        resultM <<= 1;\n        resultE--;\n    }\n\n    // Round (truncation ? simplified)\n    const resultM_final = (resultM & 0x7FFFFF);\n    const resultBits = (resultS << 31) | ((resultE & 0xFF) << 23) | resultM_final;\n    return bitsToFloat(resultBits);\n}\n\nconst sum = fpAdd(3.14159, 2.71828);\nconsole.log(`3.14159 + 2.71828 = ${sum}`); // ~5.85987\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1133-floating-point-multiplication",
      children: "11.3.3 Floating-Point Multiplication"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function fpMultiply(a: number, b: number): number {\n    const bitsA = floatToBits(a);\n    const bitsB = floatToBits(b);\n    const { sign: sA, exponent: eA, mantissa: mA } = fpDecompose(bitsA);\n    const { sign: sB, exponent: eB, mantissa: mB } = fpDecompose(bitsB);\n\n    // Special values\n    if (eA === 0xFF || eB === 0xFF) return a * b; // simplified\n    if (eA === 0 && mA === 0) return 0;\n    if (eB === 0 && mB === 0) return 0;\n\n    // Add implicit 1\n    const mA_full = (eA !== 0 ? 0x800000 : 0) | mA;\n    const mB_full = (eB !== 0 ? 0x800000 : 0) | mB;\n\n    // Multiply mantissas (24 ? 24 ? 48 bits)\n    const productM = mA_full * mB_full;\n\n    // Add exponents (subtract bias once)\n    let resultE = eA + eB - 127;\n\n    // Sign: XOR\n    const resultS = sA ^ sB;\n\n    // Normalise\n    let resultM = productM >> 24; // keep 24 bits\n    if (resultM >= 0x1000000) {\n        resultM >>= 1;\n        resultE++;\n    }\n\n    // Round\n    const resultM_final = (resultM & 0x7FFFFF);\n    const resultBits = (resultS << 31) | ((resultE & 0xFF) << 23) | resultM_final;\n    return bitsToFloat(resultBits);\n}\n\nconst product = fpMultiply(3.14159, 2.0);\nconsole.log(`3.14159 ? 2.0 = ${product}`); // ~6.28318\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1134-rounding-modes",
      children: "11.3.4 Rounding Modes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IEEE 754 defines four rounding modes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "enum RoundingMode {\n    RNE, // Round to Nearest, ties to Even (default)\n    RTZ, // Round toward Zero\n    RDN, // Round toward -Infinity\n    RUP  // Round toward +Infinity\n}\n\nfunction round(result: number, guard: number, round: number, sticky: number, mode: RoundingMode, sign: number): number {\n    switch (mode) {\n        case RoundingMode.RNE:\n            // Round to nearest ? if tie, round to even (LSB = 0)\n            if (round === 1 && (guard === 1 || sticky === 1)) return result + 1;\n            if (guard === 1 && round === 0 && sticky === 0 && (result & 1)) return result + 1;\n            return result;\n\n        case RoundingMode.RTZ:\n            return result; // truncate\n\n        case RoundingMode.RDN:\n            if (sign === 1 && (guard | round | sticky)) return result + 1;\n            return result;\n\n        case RoundingMode.RUP:\n            if (sign === 0 && (guard | round | sticky)) return result + 1;\n            return result;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1135-floating-point-pipeline",
      children: "11.3.5 Floating-Point Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    subgraph \"4-Stage FP Add Pipeline\"\n        S1[Stage 1<br>Exponent Compare] --> S2[Stage 2<br>Align Mantissa]\n        S2 --> S3[Stage 3<br>Add / Normalise]\n        S3 --> S4[Stage 4<br>Round / Pack]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class FloatingPointPipeline {\n    private stages: number[][] = [[], [], [], []];\n    readonly latency = 4;\n\n    push(a: number, b: number, op: 'add' | 'mul'): void {\n        this.stages[0].push(a, b, op === 'add' ? 0 : 1);\n    }\n\n    tick(): number | null {\n        // Process stage 3 ? output\n        const result = this.stages[3].length > 0 ? this.stages[3].shift() : null;\n\n        // Shift pipeline stages\n        for (let s = 2; s >= 0; s--) {\n            this.stages[s + 1] = this.stages[s];\n        }\n        this.stages[0] = [];\n\n        return result;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "114-residue-number-system-rns",
      children: "11.4 Residue Number System (RNS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RNS represents numbers as tuples of residues modulo pairwise coprime moduli, enabling parallel addition, subtraction, and multiplication without carry propagation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Moduli: m1 = 3, m2 = 5, m3 = 7 (pairwise coprime)\nNumber x = 11:\n  r1 = 11 mod 3 = 2\n  r2 = 11 mod 5 = 1\n  r3 = 11 mod 7 = 4\n  RNS(11) = (2, 1, 4)\n\nAddition: (2,1,4) + (1,3,5) = (0,4,2)  [mod 3,5,7 respectively]\n  ? Chinese Remainder Theorem ? result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class RNS {\n    readonly moduli: number[];\n\n    constructor(moduli: number[]) {\n        this.moduli = moduli;\n    }\n\n    encode(x: number): number[] {\n        return this.moduli.map(m => ((x % m) + m) % m);\n    }\n\n    add(a: number[], b: number[]): number[] {\n        return a.map((ai, i) => (ai + b[i]) % this.moduli[i]);\n    }\n\n    multiply(a: number[], b: number[]): number[] {\n        return a.map((ai, i) => (ai * b[i]) % this.moduli[i]);\n    }\n\n    // Chinese Remainder Theorem to reconstruct\n    decode(residues: number[]): number {\n        let M = this.moduli.reduce((p, m) => p * m, 1);\n        let result = 0;\n        for (let i = 0; i < this.moduli.length; i++) {\n            const mi = this.moduli[i];\n            const Mi = M / mi;\n            // Compute Mi_inv such that Mi * Mi_inv = 1 (mod mi)\n            const Mi_inv = this.modInverse(Mi % mi, mi);\n            result = (result + residues[i] * Mi * Mi_inv) % M;\n        }\n        return result;\n    }\n\n    private modInverse(a: number, m: number): number {\n        a = ((a % m) + m) % m;\n        for (let x = 1; x < m; x++) {\n            if ((a * x) % m === 1) return x;\n        }\n        return 1;\n    }\n}\n\nconst rns = new RNS([3, 5, 7]);\nconst a = rns.encode(11);\nconst b = rns.encode(13);\nconst sumRns = rns.add(a, b);\nconsole.log(`RNS 11+13 = ${rns.decode(sumRns)}`); // 24\nconst prodRns = rns.multiply(a, b);\nconsole.log(`RNS 11?13 = ${rns.decode(prodRns)}`); // 143\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wallace trees are fastest but irregular"
        }), " ? use for high-performance DSP; for most applications, Booth + compressor trees are sufficient"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Division is 5?10? slower than multiplication"
        }), " ? avoid division in inner loops; use multiplication by reciprocal where possible"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IEEE 754 compliance is non-trivial"
        }), " ? subnormals, NaNs, and rounding modes add significant hardware complexity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RNS enables parallel arithmetic"
        }), " ? ideal for DSP and cryptography where addition/multiplication dominate"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pipeline FPUs for throughput"
        }), " ? a 4-stage FP adder pipeline achieves one result per cycle at the cost of 4-cycle latency"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Array Multiplier (4-bit) ===\nfunction arrayMultiplier(a: number, b: number): number {\n    let sum = 0;\n    for (let i = 0; i < 4; i++) {\n        if ((b >> i) & 1) sum += (a << i);\n    }\n    return sum;\n}\n\n// === Booth Radix-4 Multiplier ===\nfunction boothMultiplier(m: number, r: number, bits = 8): number {\n    let a = m << (bits + 1);\n    let q = r << 1;\n    let prevBit = 0;\n    const mask = (1 << (2 * bits + 1)) - 1;\n    for (let i = 0; i < bits; i++) {\n        const q0 = (q >> 1) & 1;\n        const q_1 = prevBit;\n        const op = (q0 << 1) | q_1;\n        switch (op) {\n            case 1: a += (m << 1); break;\n            case 2: a -= (m << 1); break;\n        }\n        a &= mask;\n        prevBit = q & 1;\n        q = (q >> 1) | ((a & 1) << (2 * bits));\n        a >>= 1;\n    }\n    return (q >> 1) & ((1 << (2 * bits)) - 1);\n}\n\n// === Wallace Tree (partial product reduction) ===\nfunction wallaceTree(partials: number[]): number {\n    let carry = 0, sum = 0;\n    while (partials.length > 2) {\n        const next: number[] = [];\n        for (let i = 0; i + 2 < partials.length; i += 3) {\n            const a = partials[i], b = partials[i + 1], c = partials[i + 2];\n            sum = a ^ b ^ c;\n            carry = (a & b) | (b & c) | (c & a);\n            next.push(sum, carry << 1);\n        }\n        const rem = partials.length % 3;\n        if (rem >= 1) next.push(partials[partials.length - rem]);\n        if (rem >= 2) next.push(partials[partials.length - rem + 1]);\n        partials = next;\n    }\n    return partials.reduce((a, b) => a + b, 0);\n}\n\n// === Restoring Division ===\nfunction restoringDivide(dividend: number, divisor: number, bits = 8): { quotient: number; remainder: number } {\n    let rem = 0, quot = dividend;\n    for (let i = 0; i < bits; i++) {\n        rem = (rem << 1) | ((quot >> (bits - 1)) & 1);\n        quot <<= 1;\n        const diff = rem - divisor;\n        if (diff >= 0) { rem = diff; quot |= 1; }\n    }\n    return { quotient: quot & ((1 << bits) - 1), remainder: rem };\n}\n\n// === SRT Radix-2 Division ===\nfunction srtDivide(dividend: number, divisor: number, bits = 8): { quotient: number; remainder: number } {\n    let rem = 0, quot = 0;\n    for (let i = 0; i < bits; i++) {\n        rem = (rem << 1) | ((dividend >> (bits - 1 - i)) & 1);\n        let qBit = 0;\n        if (rem >= divisor) { rem -= divisor; qBit = 1; }\n        else if (rem <= -divisor) { rem += divisor; qBit = -1; }\n        quot = (quot << 1) | (qBit & 1);\n    }\n    return { quotient: quot, remainder: rem };\n}\n\n// === IEEE 754 Single-Precision FP Adder ===\nfunction fp32Add(a: number, b: number): number {\n    const fv = new Float32Array([a, b]);\n    const dv = new DataView(fv.buffer);\n    return a + b;\n}\nfunction fp32Bits(f: number): string {\n    const buf = new ArrayBuffer(4);\n    new Float32Array(buf)[0] = f;\n    const bits = new Uint32Array(buf)[0];\n    const sign = (bits >> 31) & 1;\n    const exp = (bits >> 23) & 0xFF;\n    const mant = bits & 0x7FFFFF;\n    return `${sign} ${exp.toString(2).padStart(8, '0')} ${mant.toString(2).padStart(23, '0')}`;\n}\n\n// === Kogge-Stone Adder (16-bit) ===\nfunction koggeStoneAdd(a: number, b: number): { sum: number; carry: number } {\n    let g = a & b;\n    let p = a ^ b;\n    for (let i = 1; i < 16; i <<= 1) {\n        const gNext = g | (p & (g >> i));\n        const pNext = p & (p >> i);\n        const mask = (1 << i) - 1;\n        g = gNext; p = pNext;\n    }\n    const sum = (a ^ b) ^ (g << 1);\n    return { sum: sum & 0xFFFF, carry: (g >> 15) & 1 };\n}\n\n// === Pipelined Multiply-Accumulate ===\nclass PipelinedMAC {\n    private pipe: { a: number; b: number }[] = [];\n    private acc = 0;\n    constructor(private stages = 4) {}\n\n    tick(a: number, b: number): { result: number; valid: boolean } {\n        this.pipe.unshift({ a, b });\n        if (this.pipe.length > this.stages) {\n            const oldest = this.pipe.pop()!;\n            this.acc += oldest.a * oldest.b;\n        }\n        return { result: this.acc, valid: this.pipe.length >= this.stages };\n    }\n}\n\n// === Fused Multiply-Add (FMA) ===\nfunction fma(a: number, b: number, c: number): number {\n    const product = a * b;\n    const sum = new Float64Array([product + c])[0];\n    return sum;\n}\n\n// === RNS with moduli set ===\nclass RNSSystem {\n    constructor(private moduli: number[]) {}\n    encode(x: number): number[] { return this.moduli.map(m => ((x % m) + m) % m); }\n    decode(residues: number[]): number {\n        let M = this.moduli.reduce((a, b) => a * b, 1);\n        let x = 0;\n        for (let i = 0; i < this.moduli.length; i++) {\n            const Mi = M / this.moduli[i];\n            let inv = 0;\n            for (let j = 1; j < this.moduli[i]; j++) if ((Mi * j) % this.moduli[i] === 1) { inv = j; break; }\n            x += residues[i] * Mi * inv;\n        }\n        return ((x % M) + M) % M;\n    }\n    add(a: number[], b: number[]): number[] { return a.map((v, i) => (v + b[i]) % this.moduli[i]); }\n    multiply(a: number[], b: number[]): number[] { return a.map((v, i) => (v * b[i]) % this.moduli[i]); }\n}\n\n// === Demo ===\nconsole.log(`Array 12?10 = ${arrayMultiplier(12, 10)}`);\nconsole.log(`Booth 7?-3 = ${boothMultiplier(7, -3 & 0xFF)}`);\nconsole.log(`Restoring 100?7 = ${JSON.stringify(restoringDivide(100, 7))}`);\nconsole.log(`Kogge-Stone 0xA5+0x5A = ${koggeStoneAdd(0xA5, 0x5A).sum.toString(16)}`);\nconsole.log(`FP32 3.14159 bits: ${fp32Bits(3.14159)}`);\n\nconst mac = new PipelinedMAC(3);\nmac.tick(3, 4); mac.tick(2, 5); mac.tick(1, 6);\nconsole.log(`Pipelined MAC: ${mac.tick(0, 0).result}`);\n\nconst rns = new RNSSystem([3, 5, 7]);\nconst enc = rns.encode(11);\nconst enc2 = rns.encode(13);\nconsole.log(`RNS 11+13 = ${rns.decode(rns.add(enc, enc2))}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// arithmetic circuits\n// boolean-circuits-sequential implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'arithmetic circuits', data: { topic: 'boolean-circuits-sequential' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// arithmetic circuits - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'digital-circuits demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'digital-logic', chapter: 'arithmetic circuits' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('digital-circuits'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Arithmetic circuits form the computational core of digital processors. This chapter covered the full spectrum from simple array multipliers through Booth encoding, Wallace trees, and SRT division to IEEE 754 floating-point units. Each arithmetic operation presents unique trade-offs between speed, area, and power. Multipliers dominate DSP datapath area, while dividers floaters remain the most complex arithmetic blocks. Residue number systems offer an alternative path for specialised high-throughput applications. The next chapter introduces hardware description languages ? the tools used to specify and synthesise these circuits."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " A Wallace tree multiplier reduces partial product addition from O(N) to:\na) O(N?)\nb) O(log N)\nc) O(N log N)\nd) O(1)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " Radix-4 Booth encoding reduces the number of partial products by approximately:\na) 25%\nb) 33%\nc) 50%\nd) 75%"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " In IEEE 754 single precision, the exponent bias is:\na) 127\nb) 128\nc) 1023\nd) 255"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " The default IEEE 754 rounding mode is:\na) Round toward zero\nb) Round to nearest, ties to even\nc) Round toward +infinity\nd) Round toward -infinity"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " SRT division uses which quotient digit set?\na) {0, 1}\nb) {-1, 0, +1}\nc) {-2, -1, 0, +1, +2}\nd) {0, 1, 2}"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answers",
      children: "Answers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Q1: b | Q2: c | Q3: a | Q4: b | Q5: b"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multiplier comparison:"
          }), " Implement 8-bit array, Booth (radix-4), and Wallace tree multipliers. Compare their gate counts and critical path delays."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "FP addition test:"
          }), " Implement a complete IEEE 754 single-precision adder with all four rounding modes. Test with corner cases (NaN, Infinity, zero, subnormals)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SRT radix-2 divider:"
          }), " Implement a radix-2 SRT divider using the redundant digit set {-1, 0, +1}. Compare the number of iterations with restoring division."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Merged multiply-add:"
          }), " Design a fused multiply-add (FMA) unit that computes A ? B + C with a single rounding step. Show the area and delay advantage over separate multiply + add."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RNS filter:"
          }), " Implement a 4-tap FIR filter using RNS with moduli {7, 11, 13, 17}. Compare the power consumption with a conventional binary FIR filter."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Division by convergence:"
          }), " Implement Newton-Raphson division that computes the reciprocal of the divisor using multiplication, then multiplies by the dividend. How many iterations are needed for 24-bit precision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Kogge-Stone adder:"
          }), " Implement a 16-bit Kogge-Stone prefix adder. Compare its delay characteristics with a ripple-carry and carry-lookahead adder."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Subnormal support:"
          }), " Extend the FP adder to handle subnormal numbers (exponent = 0, mantissa = 0.M). Show how the implicit bit changes for subnormals."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multiply-accumulate (MAC):"
          }), " Design a pipelined MAC unit that can perform one multiply-accumulate per cycle with 4-cycle latency. Show the pipeline stages and bypass logic."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Decimal floating point:"
          }), " Research IEEE 754-2008 decimal64 format (DPD encoding). Implement a decimal addition algorithm in TypeScript."]
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