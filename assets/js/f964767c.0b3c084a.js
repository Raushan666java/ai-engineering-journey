"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[24079],{

/***/ 86670
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_digital_logic_01_introduction_md_f96_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-digital-logic-01-introduction-md-f96.json
const site_docs_courses_digital_logic_01_introduction_md_f96_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/digital-logic/01-introduction","title":"Chapter 1: Introduction to Digital Logic","description":"Prereq: Basic arithmetic (decimal operations).","source":"@site/docs/courses/digital-logic/01-introduction.md","sourceDirName":"courses/digital-logic","slug":"/digital-logic/01-introduction","permalink":"/ai-engineering-journey/digital-logic/01-introduction","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-introduction","slug":"/digital-logic/01-introduction","title":"Chapter 1: Introduction to Digital Logic","sidebar_label":"Chapter 1: Introduction to Digital Logic","sidebar_position":1},"sidebar":"coursesSidebar","previous":{"title":"Digital Logic — Course Overview","permalink":"/ai-engineering-journey/digital-logic"},"next":{"title":"Chapter 2: Boolean Algebra","permalink":"/ai-engineering-journey/digital-logic/02-boolean-algebra"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/digital-logic/01-introduction.md


const frontMatter = {
	id: '01-introduction',
	slug: '/digital-logic/01-introduction',
	title: 'Chapter 1: Introduction to Digital Logic',
	sidebar_label: 'Chapter 1: Introduction to Digital Logic',
	sidebar_position: 1
};
const contentTitle = 'Chapter 1: Introduction to Digital Logic';

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
  "value": "1.1 Analog vs Digital Systems",
  "id": "11-analog-vs-digital-systems",
  "level": 3
}, {
  "value": "1.2 Positional Number Systems",
  "id": "12-positional-number-systems",
  "level": 3
}, {
  "value": "1.2.1 Decimal System (Base 10)",
  "id": "121-decimal-system-base-10",
  "level": 4
}, {
  "value": "1.2.2 Binary System (Base 2)",
  "id": "122-binary-system-base-2",
  "level": 4
}, {
  "value": "1.2.3 Octal System (Base 8)",
  "id": "123-octal-system-base-8",
  "level": 4
}, {
  "value": "1.2.4 Hexadecimal System (Base 16)",
  "id": "124-hexadecimal-system-base-16",
  "level": 4
}, {
  "value": "1.3 Base Conversion",
  "id": "13-base-conversion",
  "level": 3
}, {
  "value": "1.3.1 Conversion to Decimal",
  "id": "131-conversion-to-decimal",
  "level": 4
}, {
  "value": "1.3.2 Conversion from Decimal ? Integer Part",
  "id": "132-conversion-from-decimal--integer-part",
  "level": 4
}, {
  "value": "1.3.3 Conversion from Decimal ? Fractional Part",
  "id": "133-conversion-from-decimal--fractional-part",
  "level": 4
}, {
  "value": "1.3.4 Shortcut Conversions",
  "id": "134-shortcut-conversions",
  "level": 4
}, {
  "value": "1.4 Signed Number Representations",
  "id": "14-signed-number-representations",
  "level": 3
}, {
  "value": "1.4.1 Sign-Magnitude",
  "id": "141-sign-magnitude",
  "level": 4
}, {
  "value": "1.4.2 Ones&#39; Complement",
  "id": "142-ones-complement",
  "level": 4
}, {
  "value": "1.4.3 Two&#39;s Complement",
  "id": "143-twos-complement",
  "level": 4
}, {
  "value": "1.4.4 Sign Extension",
  "id": "144-sign-extension",
  "level": 4
}, {
  "value": "1.5 Overflow Detection",
  "id": "15-overflow-detection",
  "level": 3
}, {
  "value": "1.6 Binary-Coded Decimal (BCD)",
  "id": "16-binary-coded-decimal-bcd",
  "level": 3
}, {
  "value": "1.7 Gray Code",
  "id": "17-gray-code",
  "level": 3
}, {
  "value": "1.8 Error Detection and Correction Codes",
  "id": "18-error-detection-and-correction-codes",
  "level": 3
}, {
  "value": "1.8.1 Parity Bit",
  "id": "181-parity-bit",
  "level": 4
}, {
  "value": "1.8.2 Hamming Code",
  "id": "182-hamming-code",
  "level": 4
}, {
  "value": "1.8.3 ASCII Code",
  "id": "183-ascii-code",
  "level": 4
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1.1: Binary to Decimal Conversion",
  "id": "example-11-binary-to-decimal-conversion",
  "level": 3
}, {
  "value": "Example 1.2: Decimal to Binary Conversion",
  "id": "example-12-decimal-to-binary-conversion",
  "level": 3
}, {
  "value": "Example 1.3: Two&#39;s Complement Arithmetic with Overflow Detection",
  "id": "example-13-twos-complement-arithmetic-with-overflow-detection",
  "level": 3
}, {
  "value": "Example 1.4: BCD Addition",
  "id": "example-14-bcd-addition",
  "level": 3
}, {
  "value": "Example 1.5: Hamming Code Generation",
  "id": "example-15-hamming-code-generation",
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
  "value": "Number System Evolution",
  "id": "number-system-evolution",
  "level": 2
}, {
  "value": "TypeScript Examples",
  "id": "typescript-examples",
  "level": 2
}, {
  "value": "Number System Converter",
  "id": "number-system-converter",
  "level": 3
}, {
  "value": "Binary Adder Simulation",
  "id": "binary-adder-simulation",
  "level": 3
}, {
  "value": "BCD Adder Correction",
  "id": "bcd-adder-correction",
  "level": 3
}, {
  "value": "Mermaid Diagrams",
  "id": "mermaid-diagrams",
  "level": 2
}, {
  "value": "Number System Interconversion",
  "id": "number-system-interconversion",
  "level": 3
}, {
  "value": "Two&#39;s Complement Overflow Detection",
  "id": "twos-complement-overflow-detection",
  "level": 3
}, {
  "value": "4-Bit Ripple-Carry Adder",
  "id": "4-bit-ripple-carry-adder",
  "level": 3
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
    em: "em",
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
        id: "chapter-1-introduction-to-digital-logic",
        children: "Chapter 1: Introduction to Digital Logic"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Basic arithmetic (decimal operations).\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 2 (Boolean Algebra) ? digital circuits operate on binary values manipulated by Boolean logic."]
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
        href: "../../assets/images/lessons/digital-logic/01-introduction/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/01-introduction/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/digital-logic/01-introduction/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/01-introduction/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/digital-logic/01-introduction/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/digital-logic/01-introduction/visual-explanation.png",
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
        children: "Differentiate between analog and digital signals and identify the advantages of digital systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert numbers among decimal, binary, octal, and hexadecimal bases using algorithmic methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Represent signed integers using sign-magnitude, ones' complement, and two's complement notation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect overflow in binary arithmetic operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encode decimal digits using binary-coded decimal (BCD) with correction logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct and interpret Gray code sequences and understand their applications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain basic error detection codes including parity and Hamming codes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Analog vs Digital"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous vs discrete signals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for understanding digital abstraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Number Systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Positional weighted representation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every digital system uses binary internally"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Base Conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithms for radix transformation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Translating human-machine representation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signed Representations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two's complement dominance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negative numbers in ALU hardware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overflow Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carry vs overflow distinction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct arithmetic in finite bit widths"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BCD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-bit per decimal digit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial computation precision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gray Code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-bit transitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error reduction in encoders and state machines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error Detection Codes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parity and Hamming codes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reliable data transmission and storage"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Digital Systems] --> B[Number Systems]\n    B --> C[Binary]\n    B --> D[Octal]\n    B --> E[Hexadecimal]\n    C --> F[Signed Representation]\n    F --> G[Sign-Magnitude]\n    F --> H[Ones' Complement]\n    F --> I[Two's Complement]\n    C --> J[BCD]\n    C --> K[Gray Code]\n    C --> L[Error Detection]\n    I --> M[ALU Arithmetic]\n    style A fill:#e1f5fe\n    style M fill:#c8e6c9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-analog-vs-digital-systems",
      children: "1.1 Analog vs Digital Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "analog"
      }), " signal is continuous in both time and amplitude. It can take any value within a range. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "digital"
      }), " signal is discrete ? it takes only a finite set of values, typically two (0 and 1) in binary logic."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analog"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Digital"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signal values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite continuum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finite discrete set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Noise immunity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (noise accumulates)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (signal can be regenerated)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Difficult (degrades)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy (exact copies)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specialised circuits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General-purpose programmable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (requires more bandwidth)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern digital systems dominate because of noise immunity, reproducibility, and programmability. Most real-world signals (sound, image, temperature) are analog and must be converted to digital using analog-to-digital converters (ADCs)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    subgraph Analog\n        A1((Continuous Waveform))\n    end\n    subgraph Digital\n        A2[Discrete Samples]\n        A3[Binary 0/1]\n    end\n    A1 -->|ADC| A2 -->|Quantization| A3\n    style A3 fill:#c8e6c9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-positional-number-systems",
      children: "1.2 Positional Number Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A positional number system represents quantities using an ordered set of digits, wherein each digit position carries a weight equal to a power of the base ", (0,jsx_runtime.jsx)(_components.em, {
        children: "r"
      }), ". The general form of a number in base ", (0,jsx_runtime.jsx)(_components.em, {
        children: "r"
      }), " is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "N = d_{n-1} * r^{n-1} + d_{n-2} * r^{n-2} + ... + d_0 * r^0 + d_{-1} * r^{-1} + ... + d_{-m} * r^{-m}"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["where each digit ", (0,jsx_runtime.jsx)(_components.em, {
        children: "d_i"
      }), " satisfies 0 = ", (0,jsx_runtime.jsx)(_components.em, {
        children: "d_i"
      }), " = ", (0,jsx_runtime.jsx)(_components.em, {
        children: "r"
      }), " - 1."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "121-decimal-system-base-10",
      children: "1.2.1 Decimal System (Base 10)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The decimal system employs ten digits {0, 1, 2, 3, 4, 5, 6, 7, 8, 9} with positional weights that are powers of ten. Example: 345.67 = 3?10? + 4?10? + 5?10? + 6?10?? + 7?10??."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "122-binary-system-base-2",
      children: "1.2.2 Binary System (Base 2)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The binary system employs two digits {0, 1}, termed bits (binary digits). Positional weights are powers of two. This is the fundamental number system of all digital electronic computers because two stable states (on/off, high/low voltage) map naturally to 0 and 1."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Power of 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2^7"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2^6"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2^5"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2^4"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2^3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2^2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2^1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2^0"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decimal Value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "123-octal-system-base-8",
      children: "1.2.3 Octal System (Base 8)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The octal system employs eight digits {0, 1, 2, 3, 4, 5, 6, 7}. It serves as a compact representation of binary data, wherein three binary bits map to one octal digit."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "124-hexadecimal-system-base-16",
      children: "1.2.4 Hexadecimal System (Base 16)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The hexadecimal system employs sixteen digits {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F}, where A through F represent decimal values 10 through 15 respectively. Each hexadecimal digit maps to four binary bits."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-base-conversion",
      children: "1.3 Base Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "131-conversion-to-decimal",
      children: "1.3.1 Conversion to Decimal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To convert a number from any base to decimal, expand the number using the positional weight formula and sum."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm"
      }), ": For each digit ", (0,jsx_runtime.jsx)(_components.em, {
        children: "d_i"
      }), " at position ", (0,jsx_runtime.jsx)(_components.em, {
        children: "i"
      }), " (where position 0 is the least significant digit), compute ", (0,jsx_runtime.jsx)(_components.em, {
        children: "d_i"
      }), " ? ", (0,jsx_runtime.jsx)(_components.em, {
        children: "r^i"
      }), " and accumulate the sum."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example"
      }), ": Convert 2A3_16 to decimal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2A3_16 = 2 ? 16? + A ? 16? + 3 ? 16? = 2 ? 256 + 10 ? 16 + 3 ? 1 = 512 + 160 + 3 = 675_10"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "132-conversion-from-decimal--integer-part",
      children: "1.3.2 Conversion from Decimal ? Integer Part"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Repeated division algorithm"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Divide the integer by the target base ", (0,jsx_runtime.jsx)(_components.em, {
          children: "r"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Record the remainder as the least significant digit."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat with the quotient until the quotient is 0."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The remainders in reverse order form the converted number."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function decimalToBase(n: number, base: number): string {\n    const digits = \"0123456789ABCDEF\";\n    if (n === 0) return \"0\";\n    let result = \"\";\n    while (n > 0) {\n        result = digits[n % base] + result;\n        n = Math.floor(n / base);\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "133-conversion-from-decimal--fractional-part",
      children: "1.3.3 Conversion from Decimal ? Fractional Part"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Repeated multiplication algorithm"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Multiply the fraction by the target base ", (0,jsx_runtime.jsx)(_components.em, {
          children: "r"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Record the integer part as the next digit."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat with the fractional part until it reaches 0 or the desired precision."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "134-shortcut-conversions",
      children: "1.3.4 Shortcut Conversions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Binary to octal"
      }), ": Group binary bits in sets of three from the radix point. Replace each group with the equivalent octal digit."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Binary to hexadecimal"
      }), ": Group binary bits in sets of four from the radix point. Replace each group with the equivalent hexadecimal digit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Binary: 11010110] --> B[Group 4: 1101]\n    A --> C[Group 4: 0110]\n    B --> D[D]\n    C --> E[6]\n    D --> F[Hex: D6]\n    style F fill:#c8e6c9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-signed-number-representations",
      children: "1.4 Signed Number Representations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Digital systems require methods for representing negative integers. Four principal representations exist."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "141-sign-magnitude",
      children: "1.4.1 Sign-Magnitude"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The most significant bit (MSB) indicates sign: 0 for positive, 1 for negative. The remaining bits represent the magnitude. For an ", (0,jsx_runtime.jsx)(_components.em, {
        children: "n"
      }), "-bit word, the range is -(2^{n-1} - 1) to +(2^{n-1} - 1). Two representations for zero exist: +0 and -0."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "142-ones-complement",
      children: "1.4.2 Ones' Complement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Negative numbers are formed by complementing every bit of the positive representation. The range is -(2^{n-1} - 1) to +(2^{n-1} - 1). Two representations for zero persist."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "143-twos-complement",
      children: "1.4.3 Two's Complement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Negative numbers are formed by taking the ones' complement and adding 1. The range is -2^{n-1} to +(2^{n-1} - 1). A unique representation for zero exists. Two's complement is the dominant signed representation because addition hardware need not distinguish signed from unsigned operands."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm to compute two's complement"
      }), ": Invert all bits, then add 1."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function twosComplement(bits: string): string {\n    // Invert all bits\n    let inverted = bits.split(\"\").map(b => b === \"0\" ? \"1\" : \"0\").join(\"\");\n    // Add 1\n    let result = \"\";\n    let carry = 1;\n    for (let i = inverted.length - 1; i >= 0; i--) {\n        const sum = parseInt(inverted[i]) + carry;\n        result = (sum % 2) + result;\n        carry = Math.floor(sum / 2);\n    }\n    return result;\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Decimal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "4-Bit Two's Complement"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "+7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0111"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "+6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0110"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "+5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0101"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "+4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "+3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0011"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "+2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0010"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "+1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0001"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1111"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1110"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1101"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1011"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1010"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "144-sign-extension",
      children: "1.4.4 Sign Extension"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To widen a two's complement number from ", (0,jsx_runtime.jsx)(_components.em, {
        children: "m"
      }), " bits to ", (0,jsx_runtime.jsx)(_components.em, {
        children: "n"
      }), " bits (", (0,jsx_runtime.jsx)(_components.em, {
        children: "n"
      }), " > ", (0,jsx_runtime.jsx)(_components.em, {
        children: "m"
      }), "), copy the sign bit into all added higher-order bit positions. This operation preserves the numeric value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example: Extend 1011 (-5 in 4 bits) to 8 bits: 11111011. The value remains -5."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-overflow-detection",
      children: "1.5 Overflow Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Overflow occurs when the result of an arithmetic operation exceeds the representable range of the number system. In two's complement addition, overflow is detected by comparing the carry into the sign bit with the carry out of the sign bit. Overflow = C_in ? C_out."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cases"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding two positive numbers yields a negative result ? overflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding two negative numbers yields a positive result ? overflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding a positive and negative number never overflows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function detectOverflow(a: number, b: number, result: number, bits: number): boolean {\n    const maxPositive = Math.pow(2, bits - 1) - 1;\n    const minNegative = -Math.pow(2, bits - 1);\n    // Check sign consistency\n    if (a > 0 && b > 0 && result < 0) return true;\n    if (a < 0 && b < 0 && result >= 0) return true;\n    return false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-binary-coded-decimal-bcd",
      children: "1.6 Binary-Coded Decimal (BCD)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BCD encodes each decimal digit as a 4-bit binary sequence. The weighted codes use bits with weights 8, 4, 2, 1 (natural BCD). Only the ten codes 0000 through 1001 are valid; codes 1010 through 1111 are invalid."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Decimal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BCD"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0001"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0010"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0011"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0101"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0110"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0111"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1001"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BCD addition requires correction when the sum exceeds 9: add 6 (0110) to the result to skip the invalid codes."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function bcdAdd(a: number, b: number): { sum: number; carry: number } {\n    let rawSum = a + b;\n    let carry = 0;\n    if (rawSum > 9) {\n        rawSum += 6;\n        carry = 1;\n    }\n    return { sum: rawSum & 0xF, carry };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-gray-code",
      children: "1.7 Gray Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gray code (reflected binary code) is a binary sequence wherein successive values differ in exactly one bit position. This property is valuable for reducing switching errors in mechanical encoders and for state machines where single-bit transitions prevent glitches."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Construction"
      }), ": The ", (0,jsx_runtime.jsx)(_components.em, {
        children: "n"
      }), "-bit Gray code is recursively generated from the (", (0,jsx_runtime.jsx)(_components.em, {
        children: "n"
      }), " - 1)-bit Gray code by prefixing 0 to the existing sequence and then 1 to the reversed sequence."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Decimal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Binary"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gray Code"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0001"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0011"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0010"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0110"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0111"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0101"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0111"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0100"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Binary to Gray"
      }), ": G_i = B_i ? B_{i+1}. For example, binary 1011 ? Gray: G_3 = 1, G_2 = 1?0=1, G_1 = 0?1=1, G_0 = 1?1=0 ? 1110."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gray to Binary"
      }), ": B_i = G_i ? B_{i+1}, computed from MSB to LSB."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function binaryToGray(binary: string): string {\n    let gray = binary[0];\n    for (let i = 0; i < binary.length - 1; i++) {\n        gray += (parseInt(binary[i]) ^ parseInt(binary[i + 1])).toString();\n    }\n    return gray;\n}\n\nfunction grayToBinary(gray: string): string {\n    let binary = gray[0];\n    for (let i = 1; i < gray.length; i++) {\n        binary += (parseInt(gray[i]) ^ parseInt(binary[i - 1])).toString();\n    }\n    return binary;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18-error-detection-and-correction-codes",
      children: "1.8 Error Detection and Correction Codes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "181-parity-bit",
      children: "1.8.1 Parity Bit"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A parity bit is appended to data to make the total number of 1s either even (even parity) or odd (odd parity). A single parity bit can detect any odd number of bit errors but cannot correct errors."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function computeParity(data: string, even: boolean = true): string {\n    const ones = data.split(\"\").filter(b => b === \"1\").length;\n    const parity = even ? (ones % 2 === 0 ? \"0\" : \"1\") : (ones % 2 === 0 ? \"1\" : \"0\");\n    return data + parity;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "182-hamming-code",
      children: "1.8.2 Hamming Code"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hamming codes can detect and correct single-bit errors. For data bits ", (0,jsx_runtime.jsx)(_components.em, {
        children: "d"
      }), ", the number of parity bits ", (0,jsx_runtime.jsx)(_components.em, {
        children: "p"
      }), " satisfies 2^p = d + p + 1. Parity bits occupy positions that are powers of 2."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a (7,4) Hamming code with 4 data bits and 3 parity bits:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Positions: 1 (P1), 2 (P2), 3 (D1), 4 (P3), 5 (D2), 6 (D3), 7 (D4)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P1 covers positions 1,3,5,7 (binary xxx1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P2 covers positions 2,3,6,7 (binary xx1x)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P3 covers positions 4,5,6,7 (binary x1xx)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "On decoding, the syndrome bits identify the erroneous bit position."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "183-ascii-code",
      children: "1.8.3 ASCII Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ASCII (American Standard Code for Information Interchange) is a 7-bit character encoding standard. Extended ASCII uses 8 bits. ASCII assigns numeric codes to letters, digits, punctuation, and control characters."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Character"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ASCII (Binary)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ASCII (Hex)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "41"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0110000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0110001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0100000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-11-binary-to-decimal-conversion",
      children: "Example 1.1: Binary to Decimal Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Convert 110101.101_2 to decimal."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ": Expand using positional weights:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "110101.101_2 = 1?2^5 + 1?2^4 + 0?2^3 + 1?2^2 + 0?2^1 + 1?2^0 + 1?2^{-1} + 0?2^{-2} + 1?2^{-3}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "= 32 + 16 + 0 + 4 + 0 + 1 + 0.5 + 0 + 0.125 = 53.625_10"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-12-decimal-to-binary-conversion",
      children: "Example 1.2: Decimal to Binary Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Convert 89.375_10 to binary."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ": Integer part (89): 89 ? 2 = 44 rem 1 (LSB); 44 ? 2 = 22 rem 0; 22 ? 2 = 11 rem 0; 11 ? 2 = 5 rem 1; 5 ? 2 = 2 rem 1; 2 ? 2 = 1 rem 0; 1 ? 2 = 0 rem 1 (MSB). Reading upward: 1011001_2."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fractional part (0.375): 0.375 ? 2 = 0.750 int 0 (MSB); 0.750 ? 2 = 1.500 int 1; 0.500 ? 2 = 1.000 int 1 (LSB). Reading downward: 011_2."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Result: 1011001.011_2"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-13-twos-complement-arithmetic-with-overflow-detection",
      children: "Example 1.3: Two's Complement Arithmetic with Overflow Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compute 7 + 5 and 7 + (-5) using 4-bit two's complement. Detect overflow."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ":\n+7 = 0111_2; +5 = 0101_2; -5 = 1011_2."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "7 + 5: 0111 + 0101 = 1100. Carry into sign = 0, carry out = 0. Overflow = 0?0 = 0. Result: 1100 = -4. This is correct (no overflow) but the result is negative because we exceeded the positive range."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wait ? 7 + 5 = 12, but 4-bit two's complement max is 7. So actually 1100 is -4, and overflow = Cin?Cout = 0?0 = 0? Let me recheck: 0111 + 0101 = 1100. Cin_to_MSB = carry from bit 2 to bit 3 = 1 (1+0+carry1=10). Cout = 0 (no carry out of MSB). Overflow = 1?0 = 1. Yes, overflow occurred."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "7 + (-5): 0111 + 1011 = 1 0010. Discard carry-out. Cin = 1, Cout = 1. Overflow = 1?1 = 0. Result: 0010 = +2. Correct, no overflow."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-14-bcd-addition",
      children: "Example 1.4: BCD Addition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add 7 (0111_BCD) and 6 (0110_BCD)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ": 0111 + 0110 = 1101. This is 13, which exceeds 9. Correction: add 6 (0110): 1101 + 0110 = 1 0011. Result: 0001 0011 = 13 in BCD. Carry = 1."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-15-hamming-code-generation",
      children: "Example 1.5: Hamming Code Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generate a (7,4) Hamming code for data bits 1011."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ": Data bits: D1=1, D2=0, D3=1, D4=1."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P1 = D1?D2?D4 = 1?0?1 = 0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P2 = D1?D3?D4 = 1?1?1 = 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P3 = D2?D3?D4 = 0?1?1 = 0"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Codeword: P1 P2 D1 P3 D2 D3 D4 = 0 1 1 0 0 1 1 = 0110011"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Representation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Zero Count"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Range (n bits)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hardware Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sign-Magnitude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (+0, -0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-(2^{n-1}-1) to +(2^{n-1}-1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate sign logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ones' Complement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-(2^{n-1}-1) to +(2^{n-1}-1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-around carry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Two's Complement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2^{n-1} to +(2^{n-1}-1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single adder for all"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BCD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (0000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 to 10^{n/4}-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correction logic needed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Conversion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary ? Decimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum powers of 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1101 = 8+4+0+1 = 13"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decimal ? Binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeat divide by 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13 ? 2 = 6 r1 ? 1101"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary ? Hex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group 4 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1101 0110 = D6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary ? Gray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G_i = B_i ? B_{i+1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1011 ? 1110"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gray ? Binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B_i = G_i ? B_{i+1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1110 ? 1011"
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
            children: "ALU signed arithmetic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two's complement enables unified adder"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded Systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BCD for financial transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precision decimal representation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Digital Circuits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gray code for state machines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-bit transitions prevent glitches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Communications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hamming codes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error correction in memory and transmission"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Two's complement is universal"
        }), " ? learn it well. The same adder circuit handles signed and unsigned addition, simplifying ALU design."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Overflow ? carry"
        }), " ? carry indicates unsigned overflow; XOR of carry-in/carry-out indicates signed overflow."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gray code prevents glitches"
        }), " ? when crossing clock domains or using mechanical encoders, Gray code eliminates race conditions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BCD correction is simple"
        }), " ? anytime a BCD sum exceeds 9, add 6 to produce the correct digit and carry."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parity is cheap, Hamming is robust"
        }), " ? parity adds 1 bit for detection; Hamming adds log2(n) bits for single-error correction."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "number-system-evolution",
      children: "Number System Evolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "timeline\n    title Evolution of Number Systems in Computing\n    Early Mechanical : Binary-coded decimal (BCD) : Relays use 2-state logic\n    Vacuum Tubes : Binary arithmetic becomes standard : ENIAC uses decimal\n    Transistors : Hexadecimal for memory addressing : Octal for Unix permissions\n    Integrated Circuits : Two's complement universal : IEEE 754 for floating-point\n    Modern VLSI : Gray code for state machines : Hamming codes for ECC memory\n    Future : Post-binary logic explored : Ternary / quantum computing\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-examples",
      children: "TypeScript Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "number-system-converter",
      children: "Number System Converter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following TypeScript class implements conversions between binary, decimal, octal, and hexadecimal:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class NumberSystemConverter {\n  static toDecimal(value: string, base: number): number {\n    const result = parseInt(value, base);\n    if (isNaN(result)) throw new Error(`Invalid ${base}-base value: ${value}`);\n    return result;\n  }\n\n  static fromDecimal(value: number, base: number): string {\n    if (!Number.isInteger(value) || value < 0)\n      throw new Error(\"Non-negative integer required\");\n    return value.toString(base).toUpperCase();\n  }\n\n  static binToDec(bin: string): number { return this.toDecimal(bin, 2); }\n  static decToBin(dec: number): string { return this.fromDecimal(dec, 2); }\n  static hexToDec(hex: string): number { return this.toDecimal(hex, 16); }\n  static decToHex(dec: number): string { return this.fromDecimal(dec, 16); }\n  static octToDec(oct: string): number { return this.toDecimal(oct, 8); }\n  static decToOct(dec: number): string { return this.fromDecimal(dec, 8); }\n  static binToHex(bin: string): string {\n    return this.fromDecimal(this.binToDec(bin), 16);\n  }\n  static hexToBin(hex: string): string {\n    return this.fromDecimal(this.hexToDec(hex), 2);\n  }\n\n  static twosComplement(value: number, bits: number): string {\n    if (value >= 0) return value.toString(2).padStart(bits, \"0\");\n    return ((1 << bits) + value).toString(2);\n  }\n\n  static fromTwosComplement(bin: string): number {\n    const bits = bin.length;\n    const val = parseInt(bin, 2);\n    return val >= 1 << (bits - 1) ? val - (1 << bits) : val;\n  }\n}\n\nconst cvt = NumberSystemConverter;\nconsole.log(\"=== Conversions ===\");\nconsole.log(`  218 decimal     ? ${cvt.decToBin(218)} binary`);\nconsole.log(`  DA hex          ? ${cvt.hexToDec(\"DA\")} decimal`);\nconsole.log(`  332 octal       ? ${cvt.octToDec(\"332\")} decimal`);\nconsole.log(`  218 decimal     ? ${cvt.decToHex(218)} hex`);\nconsole.log(`  1010 binary     ? ${cvt.binToDec(\"1010\")} decimal`);\nconsole.log(`  15 decimal      ? ${cvt.decToOct(15)} octal`);\nconsole.log(`  11011010 binary ? ${cvt.binToHex(\"11011010\")} hex`);\nconsole.log(`  -6 (4-bit)      ? ${cvt.twosComplement(-6, 4)}`);\nconsole.log(`  1010 (2's C)    ? ${cvt.fromTwosComplement(\"1010\")} decimal`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "binary-adder-simulation",
      children: "Binary Adder Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Half adders, full adders, and ripple-carry adders form the arithmetic core of every ALU:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface AdderResult {\n  sum: number;\n  carryOut: number;\n}\n\nclass HalfAdder {\n  static add(a: number, b: number): AdderResult {\n    return { sum: a ^ b, carryOut: a & b };\n  }\n}\n\nclass FullAdder {\n  static add(a: number, b: number, carryIn: number): AdderResult {\n    return {\n      sum: a ^ b ^ carryIn,\n      carryOut: (a & b) | (carryIn & (a ^ b))\n    };\n  }\n}\n\nclass BinaryAdder {\n  static addNBits(a: number, b: number, bits: number) {\n    const aBits: number[] = [];\n    const bBits: number[] = [];\n    for (let i = 0; i < bits; i++) {\n      aBits.push((a >> i) & 1);\n      bBits.push((b >> i) & 1);\n    }\n    const sumBits: number[] = [];\n    let carry = 0;\n    for (let i = 0; i < bits; i++) {\n      const fa = FullAdder.add(aBits[i], bBits[i], carry);\n      sumBits.push(fa.sum);\n      carry = fa.carryOut;\n    }\n    sumBits.reverse();\n    const sum = parseInt(sumBits.join(\"\"), 2);\n    const msbA = aBits[bits - 1];\n    const msbB = bBits[bits - 1];\n    const msbS = sumBits[0];\n    const overflow = (msbA === msbB) && (msbS !== msbA);\n    return { sum, carry, overflow, sumBits: sumBits.join(\"\") };\n  }\n}\n\nconsole.log(\"\\n=== Half Adder Truth Table ===\");\nfor (const a of [0, 1]) {\n  for (const b of [0, 1]) {\n    const r = HalfAdder.add(a, b);\n    console.log(`  ${a} + ${b}: sum=${r.sum}, carry=${r.carryOut}`);\n  }\n}\n\nconsole.log(\"\\n=== Full Adder Truth Table ===\");\nfor (const a of [0, 1]) {\n  for (const b of [0, 1]) {\n    for (const ci of [0, 1]) {\n      const r = FullAdder.add(a, b, ci);\n      console.log(`  ${a}+${b}+${ci}: sum=${r.sum}, cout=${r.carryOut}`);\n    }\n  }\n}\n\nconsole.log(\"\\n=== 4-bit Addition ===\");\nconst testPairs = [[3, 4], [7, 1], [11, 5], [9, 8], [-3, 5]];\nfor (const [a, b] of testPairs) {\n  const safeA = a >= 0 ? a : (1 << 4) + a;\n  const safeB = b >= 0 ? b : (1 << 4) + b;\n  const r = BinaryAdder.addNBits(safeA, safeB, 4);\n  const aStr = safeA.toString(2).padStart(4, \"0\");\n  const bStr = safeB.toString(2).padStart(4, \"0\");\n  console.log(`  ${aStr} + ${bStr} = ${r.sumBits} (carry=${r.carry}, overflow=${r.overflow})`);\n}\n\nconsole.log(\"\\n=== Gray Code Generation ===\");\nfunction grayCode(n: number): string[] {\n  const result: string[] = [];\n  for (let i = 0; i < 1 << n; i++) {\n    result.push((i ^ (i >> 1)).toString(2).padStart(n, \"0\"));\n  }\n  return result;\n}\nconsole.log(grayCode(3).map((c, i) => `  G(${i.toString(2).padStart(3,\"0\")}) = ${c}`).join(\"\\n\"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bcd-adder-correction",
      children: "BCD Adder Correction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class BCDAdder {\n  static add4Bit(a: number, b: number): { digit: number; carry: number } {\n    const raw = a + b;\n    if (raw <= 9) return { digit: raw, carry: 0 };\n    const corrected = raw + 6;\n    return { digit: corrected & 0xF, carry: 1 };\n  }\n\n  static addDecimal(a: number, b: number): number {\n    let result = 0;\n    let carry = 0;\n    let multiplier = 1;\n    while (a > 0 || b > 0 || carry > 0) {\n      const da = a % 10;\n      const db = b % 10;\n      const r = this.add4Bit(da + carry, db);\n      result += r.digit * multiplier;\n      carry = r.carry;\n      a = Math.floor(a / 10);\n      b = Math.floor(b / 10);\n      multiplier *= 10;\n    }\n    return result;\n  }\n}\n\nconsole.log(\"\\n=== BCD Addition ===\");\nconsole.log(`  5 + 3 = ${BCDAdder.addDecimal(5, 3)} (correct: 8)`);\nconsole.log(`  8 + 7 = ${BCDAdder.addDecimal(8, 7)} (correct: 15)`);\nconsole.log(`  19 + 25 = ${BCDAdder.addDecimal(19, 25)} (correct: 44)`);\nconsole.log(`  49 + 38 = ${BCDAdder.addDecimal(49, 38)} (correct: 87)`);\nconsole.log(`  589 + 326 = ${BCDAdder.addDecimal(589, 326)} (correct: 915)`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-diagrams",
      children: "Mermaid Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "number-system-interconversion",
      children: "Number System Interconversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    Dec[Decimal<br/>Base 10] -->|?2 read remainder| Bin[Binary<br/>Base 2]\n    Bin -->|? digit ? 2n| Dec\n    Dec -->|?8 read remainder| Oct[Octal<br/>Base 8]\n    Oct -->|? digit ? 8n| Dec\n    Dec -->|?16 read remainder| Hex[Hex<br/>Base 16]\n    Hex -->|? digit ? 16n| Dec\n    Bin -->|group 4 bits from right| Hex\n    Hex -->|expand 1 digit to 4 bits| Bin\n    Bin -->|group 3 bits from right| Oct\n    Oct -->|expand 1 digit to 3 bits| Bin\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "twos-complement-overflow-detection",
      children: "Two's Complement Overflow Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Addition Operation] --> Check{Sign of inputs?}\n    Check -->|Same sign| Compare{Input sign vs<br/>result sign?}\n    Compare -->|Same| OK[No overflow ?]\n    Compare -->|Different| OVF[Overflow ?]\n    Check -->|Different signs| OK2[No overflow ?<br/>(result always valid)]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-bit-ripple-carry-adder",
      children: "4-Bit Ripple-Carry Adder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Inputs\n        direction LR\n        A0[A0=1] B0[B0=0] Cin[C0=0]\n        A1[A1=0] B1[B1=1]\n        A2[A2=1] B2[B2=1]\n        A3[A3=0] B3[B3=0]\n    end\n    subgraph Adders\n        FA0[FA0] -->|C1=0| FA1[FA1]\n        FA1 -->|C2=1| FA2[FA2]\n        FA2 -->|C3=0| FA3[FA3]\n    end\n    subgraph Outputs\n        S0[S0=1] S1[S1=0] S2[S2=1] S3[S3=1] Cout[C4=0]\n    end\n    A0 & B0 & Cin --> FA0 --> S0\n    A1 & B1 --> FA1 --> S1\n    A2 & B2 --> FA2 --> S2\n    A3 & B3 --> FA3 --> S3\n    FA3 --> Cout\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Number System Conversions ===\nfunction toBinary(n: number, bits = 8): string {\n    if (n < 0) return twosComplement(n, bits);\n    return n.toString(2).padStart(bits, '0').slice(-bits);\n}\nfunction toHex(b: string): string { return parseInt(b, 2).toString(16).toUpperCase(); }\nfunction toOctal(b: string): string { return parseInt(b, 2).toString(8); }\nfunction fromBinary(s: string): number { return parseInt(s, 2); }\nfunction fromHex(s: string): number { return parseInt(s, 16); }\n\n// === Signed Representations ===\nfunction signMagnitude(v: number, bits = 8): string {\n    const sign = v < 0 ? '1' : '0';\n    return sign + Math.abs(v).toString(2).padStart(bits - 1, '0');\n}\nfunction onesComplement(v: number, bits = 8): string {\n    if (v >= 0) return v.toString(2).padStart(bits, '0');\n    return Math.abs(v).toString(2).padStart(bits, '0')\n        .replace(/0/g, 'x').replace(/1/g, '0').replace(/x/g, '1');\n}\nfunction twosComplement(v: number, bits = 8): string {\n    if (v >= 0) return v.toString(2).padStart(bits, '0');\n    const one = onesComplement(v, bits);\n    return (parseInt(one, 2) + 1).toString(2).padStart(bits, '0');\n}\n\n// === Overflow Detection ===\nfunction overflowDetect(a: number, b: number, sum: number, bits = 8): boolean {\n    const msb = 1 << (bits - 1);\n    return ((a & msb) === (b & msb)) && ((a & msb) !== (sum & msb));\n}\n\n// === BCD Adder ===\nfunction bcdEncode(n: number): number[] {\n    return n.toString().split('').map(d => parseInt(d));\n}\nfunction bcdAddDigits(a: number[], b: number[]): { sum: number[]; carry: number } {\n    const align = Math.max(a.length, b.length);\n    const result: number[] = [];\n    let carry = 0;\n    for (let i = align - 1; i >= 0; i--) {\n        const da = a[i - (align - a.length)] ?? 0;\n        const db = b[i - (align - b.length)] ?? 0;\n        let s = da + db + carry;\n        if (s > 9) { s += 6; carry = 1; } else { carry = 0; }\n        result.unshift(s & 0xF);\n    }\n    return { sum: result, carry };\n}\n\n// === Gray Code ===\nfunction grayEncode(n: number): number { return n ^ (n >> 1); }\nfunction grayDecode(g: number, bits = 4): number {\n    let b = g;\n    for (let i = bits - 1; i > 0; i--) b ^= (b >> i);\n    return b;\n}\nfunction graySequence(bits = 4): number[] {\n    return Array.from({ length: 1 << bits }, (_, i) => grayEncode(i));\n}\n\n// === Hamming (7,4) Code ===\nfunction hammingEncode74(data4: number): number {\n    const d = [(data4 >> 3) & 1, (data4 >> 2) & 1, (data4 >> 1) & 1, data4 & 1];\n    const p1 = d[0] ^ d[1] ^ d[3], p2 = d[0] ^ d[2] ^ d[3], p3 = d[1] ^ d[2] ^ d[3];\n    return (p1 << 6) | (p2 << 5) | (d[0] << 4) | (p3 << 3) | (d[1] << 2) | (d[2] << 1) | d[3];\n}\nfunction hammingDecode74(cw: number): { data: number; error: number } {\n    const b = [0, 1, 2, 3, 4, 5, 6].map(i => (cw >> (6 - i)) & 1);\n    const s1 = b[0] ^ b[2] ^ b[4] ^ b[6];\n    const s2 = b[1] ^ b[2] ^ b[5] ^ b[6];\n    const s3 = b[3] ^ b[4] ^ b[5] ^ b[6];\n    const err = s1 | (s2 << 1) | (s3 << 2);\n    const fixed = err ? (cw ^ (1 << (7 - err))) : cw;\n    const data = ((fixed >> 4) & 1) << 3 | ((fixed >> 2) & 1) << 2 | ((fixed >> 1) & 1) << 1 | (fixed & 1);\n    return { data, error: err };\n}\n\n// === Demo ===\nconsole.log(`Binary(42) = ${toBinary(42)}`);\nconsole.log(`TwosComplement(-42) = ${twosComplement(-42)}`);\nconsole.log(`Gray(3) sequence: ${graySequence(3).map(g => toBinary(g, 3)).join(', ')}`);\nconsole.log(`Hamming encode 1010: ${hammingEncode74(0b1010).toString(2).padStart(7, '0')}`);\nconst test = hammingEncode74(0b1010);\nconst flipped = test ^ 0b0001000;\nconsole.log(`Decode (flipped): data=${hammingDecode74(flipped).data.toString(2).padStart(4, '0')}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// introduction\n// boolean-circuits-sequential implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'introduction', data: { topic: 'boolean-circuits-sequential' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// introduction - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'digital-circuits demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'digital-logic', chapter: 'introduction' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('digital-circuits'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Positional number systems represent quantities using weighted digit positions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The binary system (base 2) is fundamental to all digital computing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Octal and hexadecimal provide compact notation for binary data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Base conversion between any two radices proceeds via repeated division (integer part) or multiplication (fractional part)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two's complement is the standard signed representation, enabling unified addition hardware."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overflow occurs when the result exceeds the representable range; detect via Cin?Cout."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BCD encodes decimal digits in 4-bit binary groups for precision-sensitive applications."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gray code ensures single-bit transitions between adjacent values."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error detection and correction codes (parity, Hamming) improve reliability."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Two's complement is the dominant signed representation because:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) It has two representations for zero"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The same adder circuit handles both signed and unsigned operations"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) It requires fewer bits than sign-magnitude"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) It does not support negative numbers"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Gray code ensures which property between successive values?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) All bits change"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Exactly one bit changes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The numeric difference is always 1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) No bits change"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Overflow in two's complement addition is detected by:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Checking if the result is negative"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) XOR of carry-in and carry-out of the sign bit"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Checking if the result is zero"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) AND of both sign bits"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BCD addition of 9 + 7 produces what invalid result requiring correction?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 1111 (valid), no correction needed"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 1 0000 (valid BCD), no correction"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 1 0000 (invalid ? sum > 9), add 6 to correct"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 0110 (valid), no correction"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A (7,4) Hamming code can:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Detect only single-bit errors"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Correct single-bit errors and detect double-bit errors"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Correct double-bit errors"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Detect triple-bit errors only"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answers</summary>\n1. B, 2. B, 3. B, 4. C, 5. B\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why the binary number system is used in digital computers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert 110110_2 to decimal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert 3A7_16 to decimal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How many bits are required to represent decimal numbers from 0 to 10000?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between ones' complement and two's complement representation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Perform the base conversions:\na) 237_10 to binary\nb) 11001101_2 to hexadecimal\nc) 0.6875_10 to binary\nd) 101110.101_2 to octal"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Represent -42 in 8-bit sign-magnitude, ones' complement, and two's complement."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Perform the following 6-bit two's complement additions and indicate overflow:\na) 101011 + 001001\nb) 011100 + 001010\nc) 110110 + 101001"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Encode the decimal number 589 in BCD and perform BCD addition with 326. Apply the correction step where necessary."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Generate the 5-bit Gray code sequence and verify the single-bit transition property for all 32 entries."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Encode the 4-bit data 1010 using a (7,4) Hamming code. Show all parity bit calculations."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a circuit that accepts a 4-bit binary number and outputs its two's complement. The circuit should also produce an error flag when the input is 1000 (-8), since this value has no positive counterpart in 4-bit two's complement. Describe the truth table and minimal logic expressions."
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