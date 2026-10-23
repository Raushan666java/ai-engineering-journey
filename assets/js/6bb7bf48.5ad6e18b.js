"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[8690],{

/***/ 8082
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_digital_logic_02_boolean_algebra_md_6bb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-digital-logic-02-boolean-algebra-md-6bb.json
const site_docs_courses_digital_logic_02_boolean_algebra_md_6bb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/digital-logic/02-boolean-algebra","title":"Chapter 2: Boolean Algebra","description":"Prereq: Chapter 1 (Number Systems) ? binary values 0/1 are the domain of Boolean algebra.","source":"@site/docs/courses/digital-logic/02-boolean-algebra.md","sourceDirName":"courses/digital-logic","slug":"/digital-logic/02-boolean-algebra","permalink":"/ai-engineering-journey/digital-logic/02-boolean-algebra","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-boolean-algebra","slug":"/digital-logic/02-boolean-algebra","title":"Chapter 2: Boolean Algebra","sidebar_label":"Chapter 2: Boolean Algebra","sidebar_position":2},"sidebar":"course-digital-logic","previous":{"title":"Chapter 1: Introduction to Digital Logic","permalink":"/ai-engineering-journey/digital-logic/01-introduction"},"next":{"title":"Chapter 3: Logic Gates","permalink":"/ai-engineering-journey/digital-logic/03-logic-gates"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/digital-logic/02-boolean-algebra.md


const frontMatter = {
	id: '02-boolean-algebra',
	slug: '/digital-logic/02-boolean-algebra',
	title: 'Chapter 2: Boolean Algebra',
	sidebar_label: 'Chapter 2: Boolean Algebra',
	sidebar_position: 2
};
const contentTitle = 'Chapter 2: Boolean Algebra';

const assets = {

};



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
  "value": "2.1 Boolean Postulates",
  "id": "21-boolean-postulates",
  "level": 3
}, {
  "value": "2.2 Fundamental Theorems",
  "id": "22-fundamental-theorems",
  "level": 3
}, {
  "value": "2.2.1 Proof of Absorption Theorem",
  "id": "221-proof-of-absorption-theorem",
  "level": 4
}, {
  "value": "2.2.2 Proof of Consensus Theorem",
  "id": "222-proof-of-consensus-theorem",
  "level": 4
}, {
  "value": "2.3 De Morgan&#39;s Theorems",
  "id": "23-de-morgans-theorems",
  "level": 3
}, {
  "value": "2.4 Canonical Forms",
  "id": "24-canonical-forms",
  "level": 3
}, {
  "value": "2.4.1 Minterms and Maxterms",
  "id": "241-minterms-and-maxterms",
  "level": 4
}, {
  "value": "2.4.2 Sum-of-Products (SOP)",
  "id": "242-sum-of-products-sop",
  "level": 4
}, {
  "value": "2.4.3 Product-of-Sums (POS)",
  "id": "243-product-of-sums-pos",
  "level": 4
}, {
  "value": "2.4.4 Conversion Between SOP and POS",
  "id": "244-conversion-between-sop-and-pos",
  "level": 4
}, {
  "value": "2.5 NAND and NOR as Universal Gates",
  "id": "25-nand-and-nor-as-universal-gates",
  "level": 3
}, {
  "value": "2.6 XOR Applications",
  "id": "26-xor-applications",
  "level": 3
}, {
  "value": "2.7 Function Completeness",
  "id": "27-function-completeness",
  "level": 3
}, {
  "value": "2.8 Boolean Expression Minimisation",
  "id": "28-boolean-expression-minimisation",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 2.1: Algebraic Simplification with Proof Steps",
  "id": "example-21-algebraic-simplification-with-proof-steps",
  "level": 3
}, {
  "value": "Example 2.2: Conversion Between Canonical Forms",
  "id": "example-22-conversion-between-canonical-forms",
  "level": 3
}, {
  "value": "Example 2.3: De Morgan Application",
  "id": "example-23-de-morgan-application",
  "level": 3
}, {
  "value": "Example 2.4: NAND-Only Implementation",
  "id": "example-24-nand-only-implementation",
  "level": 3
}, {
  "value": "Example 2.5: XOR Application ? Parity Checker",
  "id": "example-25-xor-application--parity-checker",
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
  "value": "Truth Table Generator",
  "id": "truth-table-generator",
  "level": 3
}, {
  "value": "Boolean Expression Engine",
  "id": "boolean-expression-engine",
  "level": 3
}, {
  "value": "Algebraic Simplification Demonstrator",
  "id": "algebraic-simplification-demonstrator",
  "level": 3
}, {
  "value": "Boolean Function Equivalence Checker",
  "id": "boolean-function-equivalence-checker",
  "level": 3
}, {
  "value": "Mermaid Diagrams",
  "id": "mermaid-diagrams",
  "level": 2
}, {
  "value": "Boolean Algebra Hierarchy",
  "id": "boolean-algebra-hierarchy",
  "level": 3
}, {
  "value": "De Morgan&#39;s Law ? Gate Transformations",
  "id": "de-morgans-law--gate-transformations",
  "level": 3
}, {
  "value": "Canonical Form Conversion Flow",
  "id": "canonical-form-conversion-flow",
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
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "chapter-2-boolean-algebra",
        children: "Chapter 2: Boolean Algebra"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Chapter 1 (Number Systems) ? binary values 0/1 are the domain of Boolean algebra.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " Chapter 3 (Logic Gates) ? Boolean algebra directly describes gate behavior."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the conclusion of this chapter, the student shall be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State and apply the fundamental postulates and theorems of Boolean algebra"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simplify Boolean expressions using algebraic manipulation with formal proof steps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply De Morgan's theorems to complement expressions and convert gate types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Derive sum-of-products (SOP) and product-of-sums (POS) canonical forms from truth tables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement any Boolean function using only NAND or only NOR gates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyse XOR applications in parity, comparators, and adders"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine functional completeness of gate sets"
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
            children: "Boolean Postulates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OR, AND, NOT axioms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation of all digital logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental Theorems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idempotence, absorption, consensus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable algebraic simplification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "De Morgan's Theorems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complement of sum/product"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convert gate types (AND-OR ? NAND-NAND)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical Forms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOP and POS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniquely represent any Boolean function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NAND/NOR Universality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single gate type for any function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IC manufacturing prefers one gate type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XOR Applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parity, comparison, addition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key building block for arithmetic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function Completeness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal gate sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understanding logic universality"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[Boolean Postulates] --> B[Theorems & Laws]\r\n    B --> C[De Morgan's Theorems]\r\n    C --> D[SOP / POS Forms]\r\n    D --> E[Canonical Forms]\r\n    D --> F[NAND/NOR Universality]\r\n    B --> G[XOR Applications]\r\n    E --> H[Minimised Expression]\r\n    F --> H\r\n    G --> H\r\n    style A fill:#e1f5fe\r\n    style H fill:#c8e6c9"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-boolean-postulates",
      children: "2.1 Boolean Postulates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Boolean algebra, introduced by George Boole in 1854 and adapted by Claude Shannon in 1938 for switching circuit analysis, is a mathematical system defined on a set of two elements {0, 1} with operators + (OR) and ? (AND), and complement (NOT)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The fundamental postulates are as follows:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Postulate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OR Form"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AND Form"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x + 0 = x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x ? 1 = x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Commutativity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x + y = y + x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x ? y = y ? x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Associativity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(x + y) + z = x + (y + z)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(x ? y) ? z = x ? (y ? z)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x ? (y + z) = x?y + x?z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x + (y?z) = (x + y)?(x + z)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x + x' = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x ? x' = 0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-fundamental-theorems",
      children: "2.2 Fundamental Theorems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Theorem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OR Form"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AND Form"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Idempotence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x + x = x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x ? x = x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Null element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x + 1 = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x ? 0 = 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Involution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(x')' = x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Absorption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x + x?y = x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x?(x + y) = x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x?y + x?y' = x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(x + y)?(x + y') = x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consensus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x?y + x'?z + y?z = x?y + x'?z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(x+y)?(x'+z)?(y+z) = (x+y)?(x'+z)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "De Morgan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(x?y)' = x' + y'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(x + y)' = x'?y'"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "221-proof-of-absorption-theorem",
      children: "2.2.1 Proof of Absorption Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prove: x + x?y = x"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof"
      }), ":\r\nx + x?y = x?1 + x?y (Identity)\r\n= x?(1 + y) (Distributivity)\r\n= x?1 (Null element: 1 + y = 1)\r\n= x (Identity)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "222-proof-of-consensus-theorem",
      children: "2.2.2 Proof of Consensus Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prove: x?y + x'?z + y?z = x?y + x'?z"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof"
      }), ":\r\nx?y + x'?z + y?z = x?y + x'?z + y?z?(x + x') (Complement)\r\n= x?y + x'?z + x?y?z + x'?y?z (Distributivity)\r\n= x?y?(1 + z) + x'?z?(1 + y) (Distributivity)\r\n= x?y?1 + x'?z?1 (Null element)\r\n= x?y + x'?z (Identity)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-de-morgans-theorems",
      children: "2.3 De Morgan's Theorems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Augustus De Morgan formulated two transformation rules of singular importance:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 1"
      }), ": (x?y)' = x' + y'"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 2"
      }), ": (x + y)' = x'?y'"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These generalise to n variables:\r\n(x_1?x_2?...?x_n)' = x_1' + x_2' + ... + x_n'\r\n(x_1 + x_2 + ... + x_n)' = x_1'?x_2'?...?x_n'"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "De Morgan's theorems are essential for converting AND-OR networks to NAND-NAND or NOR-NOR equivalents."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof of Theorem 1 by truth table"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "x?y"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "(x?y)'"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "x'"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "y'"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "x' + y'"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
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
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
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
            children: "0"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The columns for (x?y)' and x' + y' match for all four input combinations, proving equivalence."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-canonical-forms",
      children: "2.4 Canonical Forms"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "241-minterms-and-maxterms",
      children: "2.4.1 Minterms and Maxterms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "minterm"
      }), " is a product term in which every variable appears exactly once, either complemented or uncomplemented. For n variables, there exist 2^n distinct minterms."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "maxterm"
      }), " is a sum term in which every variable appears exactly once. For n variables, there exist 2^n distinct maxterms."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "z"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Minterm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Maxterm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notation"
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
            children: "x'y'z'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x+y+z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M_0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x'y'z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x+y+z'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M_1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x'yz'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x+y'+z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M_2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x'yz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x+y'+z'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M_3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "xy'z'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x'+y+z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M_4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "xy'z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x'+y+z'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M_5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "xyz'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x'+y'+z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M_6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "xyz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "m_7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x'+y'+z'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M_7"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "242-sum-of-products-sop",
      children: "2.4.2 Sum-of-Products (SOP)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Boolean function expressed as the OR of minterms for which the function output is 1."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "F(x, y, z) = m_1 + m_3 + m_5 + m_7 = S(1, 3, 5, 7)\r\nF = x'y'z + x'yz + xy'z + xyz = z?(x'y' + x'y + xy' + xy) = z?(x'(y'+y) + x(y'+y)) = z?(x' + x) = z"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "243-product-of-sums-pos",
      children: "2.4.3 Product-of-Sums (POS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Boolean function expressed as the AND of maxterms for which the function output is 0."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "F(x, y, z) = M_0?M_2?M_4?M_6 = ?(0, 2, 4, 6)\r\nF = (x+y+z)?(x+y'+z)?(x'+y+z)?(x'+y'+z)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "244-conversion-between-sop-and-pos",
      children: "2.4.4 Conversion Between SOP and POS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Any Boolean function can be expressed in both forms. To convert:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SOP S(m_i) = POS ?(M_j) where j indexes the minterms NOT in the SOP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For an n-variable function: if F = S(m_i), then F' = S(m_j) where j ? i"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "F = ?(M_j) where j ? i"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-nand-and-nor-as-universal-gates",
      children: "2.5 NAND and NOR as Universal Gates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NAND and NOR are termed universal gates because either alone suffices to implement any Boolean expression."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NAND as universal gate"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NOT: A' = (A?A)'"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AND: A?B = [(A?B)']'"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OR: A + B = (A'?B')' = (A?A)'?(B?B)'"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NOR as universal gate"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NOT: A' = (A + A)'"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OR: A + B = [(A + B)']'"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AND: A?B = (A' + B')' = (A+A)' + (B+B)'"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph TD\r\n    subgraph \"NAND as Universal Gate\"\r\n        N1[NOT from NAND] --> N1d[\"A' = (A?A)''\"]\r\n        N2[AND from NAND] --> N2d[\"A?B = ((A?B)')'\"]\r\n        N3[OR from NAND] --> N3d[\"A+B = (A'?B')'\"]\r\n    end\r\n    style N1d fill:#c8e6c9\r\n    style N2d fill:#c8e6c9\r\n    style N3d fill:#c8e6c9"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-xor-applications",
      children: "2.6 XOR Applications"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The XOR (exclusive-OR) function produces 1 when inputs differ: A ? B = A'B + AB'."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Applications"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parity generation"
        }), ": XOR tree produces even/odd parity. An n-bit parity generator uses n-1 XOR gates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Magnitude comparison"
        }), ": A ? B = 0 when A = B. XOR followed by NOR produces equality detection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Half adder"
        }), ": Sum = A ? B, Carry = A?B."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Controlled inverter"
        }), ": B ? control. When control=1, output is B' (complement). When control=0, output is B."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pseudo-random number generation"
        }), ": Linear feedback shift registers (LFSRs) use XOR for feedback taps."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function xorParity(data: boolean[]): boolean {\r\n    return data.reduce((acc, bit) => acc !== bit, false);\r\n}\r\n\r\nfunction magnitudeEqual(a: boolean[], b: boolean[]): boolean {\r\n    return a.every((bit, i) => bit === b[i]);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "27-function-completeness",
      children: "2.7 Function Completeness"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A set of logic operators is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "functionally complete"
      }), " if any Boolean function can be expressed using only operators from that set."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Gate Set"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complete?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "{AND, OR, NOT}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard Boolean basis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "{AND, NOT}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NAND = (A?B)' can be built"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "{OR, NOT}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOR = (A+B)' can be built"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "{NAND}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal gate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "{NOR}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal gate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "{AND, OR}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot implement NOT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "{XOR, AND}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot implement OR/NOT alone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "{XOR, 1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear functions only"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof that {AND, NOT} is complete"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NOT is available"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A + B = (A'?B')' (De Morgan)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Since AND and NOT give us OR, every function is realizable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof that {NAND} is complete"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NOT: A' = (A?A)'"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AND: A?B = ((A?B)')'"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OR: A + B = (A'?B')' = ((A?A)'?(B?B)')'"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "28-boolean-expression-minimisation",
      children: "2.8 Boolean Expression Minimisation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface TruthTableEntry {\r\n    inputs: boolean[];\r\n    output: boolean;\r\n}\r\n\r\nfunction evaluateSOP(expression: string, variables: string[], values: boolean[]): boolean {\r\n    // Parse SOP expression like \"AB + A'C\" and evaluate\r\n    const terms = expression.split(\"+\").map(t => t.trim());\r\n    return terms.some(term => {\r\n        let result = true;\r\n        let i = 0;\r\n        while (i < term.length) {\r\n            const isComplemented = term[i] === \"'\";\r\n            const varName = isComplemented ? term[++i] : term[i];\r\n            const varIndex = variables.indexOf(varName);\r\n            if (varIndex === -1) throw new Error(`Unknown variable: ${varName}`);\r\n            const value = isComplemented ? !values[varIndex] : values[varIndex];\r\n            result &&= value;\r\n            i++;\r\n        }\r\n        return result;\r\n    });\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-21-algebraic-simplification-with-proof-steps",
      children: "Example 2.1: Algebraic Simplification with Proof Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Simplify F = x?y + x?z + y?z using Boolean algebra, showing each step."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ":\r\nF = x?y + x?z + y?z\r\n= x?y + x?z + y?z?(x + x') (Complement: x + x' = 1)\r\n= x?y + x?z + x?y?z + x'?y?z (Distributivity)\r\n= x?y?(1 + z) + x?z + x'?y?z (Distributivity)\r\n= x?y?1 + x?z + x'?y?z (Null element: 1 + z = 1)\r\n= x?y + x?z + x'?y?z (Identity)\r\n= x?y + z?(x + x'?y) (Distributivity)\r\n= x?y + z?(x + y) (Absorption: x + x'y = x + y)\r\n= x?y + x?z + y?z (Distributivity)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The expression returned to its original form ? it is a consensus form and cannot be simplified."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-22-conversion-between-canonical-forms",
      children: "Example 2.2: Conversion Between Canonical Forms"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given F(A,B,C) = S(0, 2, 4, 6), express F in POS form."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ": F = S(0, 2, 4, 6) means F = 1 for minterms 0, 2, 4, 6. F = 0 for minterms 1, 3, 5, 7.\r\nF' = S(1, 3, 5, 7) = A'B'C + A'BC + AB'C + ABC = C?(A'B' + A'B + AB' + AB) = C\r\nF = (F')' = C'\r\nIn POS: F = ?(1, 3, 5, 7) = M_1?M_3?M_5?M_7 = (A+B+C')?(A+B'+C')?(A'+B+C')?(A'+B'+C')"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The minimal expression is simply C'."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-23-de-morgan-application",
      children: "Example 2.3: De Morgan Application"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apply De Morgan's theorem to find the complement of F = (A + B?C)?(A' + C)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ":\r\nF' = [(A + B?C)?(A' + C)]' = (A + B?C)' + (A' + C)'"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apply De Morgan to each term:\r\n(A + B?C)' = A'?(B?C)' = A'?(B' + C')\r\n(A' + C)' = A?C'"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Therefore: F' = A'?(B' + C') + A?C' = A'?B' + A'?C' + A?C' = A'?B' + C'?(A' + A) = A'?B' + C'"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-24-nand-only-implementation",
      children: "Example 2.4: NAND-Only Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement F = A?B + C?D using only NAND gates."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ":\r\nF = A?B + C?D\r\n= [(A?B)']' + [(C?D)']' (Double complement)\r\n= ([(A?B)']'?[(C?D)']')' (De Morgan applied backwards: X+Y = (X'?Y')')\r\n= [(A?B)'?(C?D)']'"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implementation: Three NAND gates ? two for the AND functions, one for the OR function expressed as a NAND."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-25-xor-application--parity-checker",
      children: "Example 2.5: XOR Application ? Parity Checker"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a 4-bit even parity checker using XOR gates."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ": P = A ? B ? C ? D. P = 0 when there is an even number of 1s. Implementation uses three XOR gates in a tree structure: XOR1 = A?B, XOR2 = C?D, P = XOR1?XOR2."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function evenParity(bits: boolean[]): boolean {\r\n    return bits.reduce((p, b) => p !== b, false);\r\n}\r\n// evenParity([true, false, true, false]) ? false (2 ones = even)\r\n// evenParity([true, false, true, true]) ? true (3 ones = odd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Minimisation Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strengths"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weaknesses"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algebraic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insightful, no tool needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error-prone, no optimality guarantee"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "K-Map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "=4 variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visual, fast, optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unwieldy for 5+ variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quine-McCluskey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-16 variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithmic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow for many inputs"
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
            children: "Theorem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Absorption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x + x?y = x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminates redundant terms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x?y + x?y' = x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combines adjacent minterms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "De Morgan 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(x?y)' = x' + y'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AND ? NOR conversion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "De Morgan 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(x+y)' = x'?y'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OR ? NAND conversion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consensus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x?y + x'?z + y?z = x?y + x'?z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminates redundant term"
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
            children: "ALU control logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean minimisation reduces gate count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded Systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Firmware state machines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplified expressions save area"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Digital Circuits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IC design and synthesis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EDA tools use Boolean minimisation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Research"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formal verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean equivalence checking"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Proofs matter"
        }), " ? every algebraic simplification step should be justified by a postulate or theorem."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "De Morgan's theorems are the key to universality"
        }), " ? they convert between AND-OR and NAND-NAND forms."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical forms guarantee uniqueness"
        }), " ? any function has exactly one canonical SOP and one canonical POS."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "XOR is more useful than it seems"
        }), " ? parity, comparators, adders, and LFSRs all rely on XOR."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function completeness tells you what gates you need"
        }), " ? {NAND} alone suffices for any digital circuit."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-examples",
      children: "TypeScript Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "truth-table-generator",
      children: "Truth Table Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This class generates truth tables from Boolean expressions specified in SOP (sum-of-products) form:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface TruthTableRow {\r\n  inputs: Record<string, number>;\r\n  output: number;\r\n}\r\n\r\nclass TruthTableGenerator {\r\n  static generate(variables: string[], expression: (vals: Record<string, number>) => number): TruthTableRow[] {\r\n    const rows: TruthTableRow[] = [];\r\n    const n = variables.length;\r\n    for (let i = 0; i < 1 << n; i++) {\r\n      const vals: Record<string, number> = {};\r\n      for (let j = 0; j < n; j++) {\r\n        vals[variables[j]] = (i >> (n - 1 - j)) & 1;\r\n      }\r\n      rows.push({ inputs: vals, output: expression(vals) });\r\n    }\r\n    return rows;\r\n  }\r\n\r\n  static print(rows: TruthTableRow[], label: string = \"Truth Table\"): void {\r\n    const vars = Object.keys(rows[0].inputs);\r\n    const header = [...vars, \"F\"].join(\" | \");\r\n    const sep = vars.map(() => \"---\").join(\" | \") + \" | ---\";\r\n    console.log(`\\n=== ${label} ===`);\r\n    console.log(`| ${header} |`);\r\n    console.log(`| ${sep} |`);\r\n    for (const row of rows) {\r\n      const vals = vars.map(v => row.inputs[v]).join(\" | \");\r\n      console.log(`| ${vals} | ${row.output} |`);\r\n    }\r\n  }\r\n}\r\n\r\nconst F_A = TruthTableGenerator.generate([\"A\", \"B\"], ({ A, B }) => (A && B) ? 1 : 0);\r\nTruthTableGenerator.print(F_A, \"AND Gate\");\r\n\r\nconst F_XOR = TruthTableGenerator.generate([\"X\", \"Y\"], ({ X, Y }) => X ^ Y);\r\nTruthTableGenerator.print(F_XOR, \"XOR Gate\");\r\n\r\nconst F_MAJ = TruthTableGenerator.generate([\"A\", \"B\", \"C\"],\r\n  ({ A, B, C }) => (A + B + C >= 2) ? 1 : 0);\r\nTruthTableGenerator.print(F_MAJ, \"Majority Circuit\");\r\n\r\nconst F_SOP = TruthTableGenerator.generate([\"A\", \"B\", \"C\"],\r\n  ({ A, B, C }) => (!A && !B && C) || (!A && B && C) || (A && B && !C) ? 1 : 0);\r\nTruthTableGenerator.print(F_SOP, \"F = S(1,3,6)\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "boolean-expression-engine",
      children: "Boolean Expression Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A simple engine that tokenizes and evaluates Boolean expressions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type BoolToken =\r\n  | { type: \"VAR\"; name: string }\r\n  | { type: \"NOT\" }\r\n  | { type: \"AND\" }\r\n  | { type: \"OR\" }\r\n  | { type: \"XOR\" }\r\n  | { type: \"LPAREN\" }\r\n  | { type: \"RPAREN\" };\r\n\r\nclass BooleanEngine {\r\n  static tokenize(expr: string): BoolToken[] {\r\n    const tokens: BoolToken[] = [];\r\n    for (const ch of expr.replace(/\\s+/g, \"\")) {\r\n      if (/[A-Z]/i.test(ch)) tokens.push({ type: \"VAR\", name: ch.toUpperCase() });\r\n      else if (ch === \"'\" || ch === \"!\") tokens.push({ type: \"NOT\" });\r\n      else if (ch === \"?\" || ch === \"*\" || ch === \"&\") tokens.push({ type: \"AND\" });\r\n      else if (ch === \"+\" || ch === \"|\") tokens.push({ type: \"OR\" });\r\n      else if (ch === \"?\" || ch === \"^\") tokens.push({ type: \"XOR\" });\r\n      else if (ch === \"(\") tokens.push({ type: \"LPAREN\" });\r\n      else if (ch === \")\") tokens.push({ type: \"RPAREN\" });\r\n      else throw new Error(`Unknown token: ${ch}`);\r\n    }\r\n    return tokens;\r\n  }\r\n\r\n  static evaluate(expr: string, vars: Record<string, number>): number {\r\n    const t = this.tokenize(expr);\r\n    const evalExpr = (tokens: BoolToken[], start: number): { val: number; end: number } => {\r\n      let result: number = -1;\r\n      let op: string | null = null;\r\n      let i = start;\r\n      const next = (): number => {\r\n        if (i >= tokens.length) throw new Error(\"Unexpected end\");\r\n        const tok = tokens[i];\r\n        if (tok.type === \"NOT\") { i++; return next() ^ 1; }\r\n        if (tok.type === \"LPAREN\") { i++; const r = evalExpr(tokens, i); i = r.end; return r.val; }\r\n        if (tok.type === \"VAR\") { i++; return vars[tok.name] ?? 0; }\r\n        throw new Error(`Unexpected token at ${i}`);\r\n      };\r\n      result = next();\r\n      while (i < tokens.length) {\r\n        const tok = tokens[i];\r\n        if (tok.type === \"RPAREN\") { i++; break; }\r\n        if (tok.type === \"AND\" || tok.type === \"OR\" || tok.type === \"XOR\") {\r\n          op = tok.type; i++;\r\n          const r = next();\r\n          result = op === \"AND\" ? result & r : op === \"OR\" ? result | r : result ^ r;\r\n        } else break;\r\n      }\r\n      return { val: result, end: i };\r\n    };\r\n    return evalExpr(t, 0).val;\r\n  }\r\n\r\n  static generateTruthTable(expr: string, variables: string[]): TruthTableRow[] {\r\n    return TruthTableGenerator.generate(variables, (vals) => this.evaluate(expr, vals));\r\n  }\r\n}\r\n\r\nconst be = BooleanEngine;\r\nconsole.log(\"\\n=== Boolean Expression Evaluation ===\");\r\nconst vars1 = { A: 1, B: 0, C: 1 };\r\nconsole.log(`  A?B + C with A=1,B=0,C=1: ${be.evaluate(\"A*B+C\", vars1)}`);\r\nconsole.log(`  (A+B)'?C with A=1,B=0,C=1: ${be.evaluate(\"!(A+B)*C\", vars1)}`);\r\nconsole.log(`  A?B?C with A=1,B=0,C=1: ${be.evaluate(\"A^B^C\", vars1)}`);\r\n\r\nTruthTableGenerator.print(\r\n  be.generateTruthTable(\"(A+B)*(A+C)\", [\"A\", \"B\", \"C\"]),\r\n  \"F = (A+B)(A+C) = A + BC\"\r\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algebraic-simplification-demonstrator",
      children: "Algebraic Simplification Demonstrator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class BooleanSimplifier {\r\n  static absorptionLaw(a: number, b: number): Record<string, number> {\r\n    return {\r\n      \"A + A?B\": a | (a & b),\r\n      \"A\": a,\r\n      \"A?(A + B)\": a & (a | b),\r\n      \"Equal? A + A?B == A\": (a | (a & b)) === a ? 1 : 0,\r\n      \"Equal? A?(A+B) == A\": (a & (a | b)) === a ? 1 : 0,\r\n    };\r\n  }\r\n\r\n  static consensusLaw(a: number, b: number, c: number): Record<string, number> {\r\n    return {\r\n      \"A?B + A'?C + B?C\": (a & b) | ((a ^ 1) & c) | (b & c),\r\n      \"A?B + A'?C\": (a & b) | ((a ^ 1) & c),\r\n      \"Equal?\": ((a & b) | ((a ^ 1) & c) | (b & c)) === ((a & b) | ((a ^ 1) & c)) ? 1 : 0,\r\n    };\r\n  }\r\n\r\n  static deMorganVerify(a: number, b: number): Record<string, number> {\r\n    return {\r\n      \"(A?B)'\": ((a & b) ^ 1),\r\n      \"A' + B'\": ((a ^ 1) | (b ^ 1)),\r\n      \"Equal?\": ((a & b) ^ 1) === ((a ^ 1) | (b ^ 1)) ? 1 : 0,\r\n      \"(A+B)'\": ((a | b) ^ 1),\r\n      \"A'?B'\": ((a ^ 1) & (b ^ 1)),\r\n      \"Equal?\": ((a | b) ^ 1) === ((a ^ 1) & (b ^ 1)) ? 1 : 0,\r\n    };\r\n  }\r\n}\r\n\r\nconsole.log(\"\\n=== Absorption Law Verification ===\");\r\nfor (const a of [0, 1]) for (const b of [0, 1]) {\r\n  const r = BooleanSimplifier.absorptionLaw(a, b);\r\n  console.log(`  A=${a}, B=${b}: A+A?B=${r[\"A + A?B\"]}, A?(A+B)=${r[\"A?(A + B)\"]}, Equal? ${r[\"Equal? A + A?B == A\"]}`);\r\n}\r\n\r\nconsole.log(\"\\n=== Consensus Theorem Verification ===\");\r\nfor (const a of [0, 1]) for (const b of [0, 1]) for (const c of [0, 1]) {\r\n  const r = BooleanSimplifier.consensusLaw(a, b, c);\r\n  console.log(`  A=${a}, B=${b}, C=${c}: ${r[\"Equal?\"] ? \"A?B + A'?C + B?C = A?B + A'?C ?\" : \"FAIL\"}`);\r\n}\r\n\r\nconsole.log(\"\\n=== De Morgan's Theorem Verification ===\");\r\nconsole.log(\"  A B | (A?B)' | A'+B' | Equal | (A+B)' | A'?B' | Equal\");\r\nfor (const a of [0, 1]) for (const b of [0, 1]) {\r\n  const r = BooleanSimplifier.deMorganVerify(a, b);\r\n  console.log(`  ${a} ${b} |   ${r[\"(A?B)'\"]}    |  ${r[\"A' + B'\"]}    |  ${r[\"Equal?\"]}    |   ${r[\"(A+B)'\"]}    |  ${r[\"A'?B'\"]}    |  ${r[\"Equal?\"]}`);\r\n}\r\n\r\nconsole.log(\"\\n=== All Canonical Minterms (3 variables) ===\");\r\nconst allMinterms = TruthTableGenerator.generate([\"A\", \"B\", \"C\"],\r\n  () => 1);\r\nTruthTableGenerator.print(allMinterms, \"All 8 minterms\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "boolean-function-equivalence-checker",
      children: "Boolean Function Equivalence Checker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class FunctionChecker {\r\n  static areEquivalent(\r\n    vars: string[],\r\n    f1: (v: Record<string, number>) => number,\r\n    f2: (v: Record<string, number>) => number\r\n  ): boolean {\r\n    const n = vars.length;\r\n    for (let i = 0; i < 1 << n; i++) {\r\n      const vals: Record<string, number> = {};\r\n      for (let j = 0; j < n; j++) {\r\n        vals[vars[j]] = (i >> (n - 1 - j)) & 1;\r\n      }\r\n      if (f1(vals) !== f2(vals)) return false;\r\n    }\r\n    return true;\r\n  }\r\n\r\n  static checkDistributive(): void {\r\n    const vars = [\"A\", \"B\", \"C\"];\r\n    const lhs = (v: Record<string, number>) => v.A & (v.B | v.C);\r\n    const rhs = (v: Record<string, number>) => (v.A & v.B) | (v.A & v.C);\r\n    const distributive = this.areEquivalent(vars, lhs, rhs);\r\n    console.log(`  A?(B+C) == (A?B)+(A?C): ${distributive ? \"? EQUIVALENT\" : \"? NOT EQUIVALENT\"}`);\r\n  }\r\n\r\n  static checkXORProperties(): void {\r\n    const vars = [\"A\", \"B\"];\r\n    const xorComm = this.areEquivalent(vars,\r\n      v => v.A ^ v.B, v => v.B ^ v.A);\r\n    console.log(`  A?B == B?A: ${xorComm ? \"? COMMUTATIVE\" : \"? NOT\"}`);\r\n  }\r\n}\r\n\r\nconsole.log(\"\\n=== Function Equivalence ===\");\r\nFunctionChecker.checkDistributive();\r\nFunctionChecker.checkXORProperties();\r\n\r\nconst sopForm = (v: Record<string, number>) =>\r\n  ((~v.A) & (~v.B) & v.C) | ((~v.A) & v.B & v.C) | (v.A & v.B & (~v.C));\r\nconst simplified = (v: Record<string, number>) =>\r\n  ((~v.A) & v.C) | (v.A & v.B & (~v.C));\r\nconst equiv = FunctionChecker.areEquivalent([\"A\", \"B\", \"C\"], sopForm, simplified);\r\nconsole.log(`  F = S(1,3,6) simplified: ${equiv ? \"? EQUIVALENT\" : \"? NOT EQUIVALENT\"}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-diagrams",
      children: "Mermaid Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "boolean-algebra-hierarchy",
      children: "Boolean Algebra Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    BA[Boolean Algebra] --> P[Postulates]\r\n    BA --> T[Theorems]\r\n    BA --> C[Canonical Forms]\r\n    BA --> M[Minimisation]\r\n\r\n    P --> C1[Closure]\r\n    P --> C2[\"Identity: 0, 1\"]\r\n    P --> C3[Commutativity]\r\n    P --> C4[Distributivity]\r\n    P --> C5[Complements]\r\n    P --> C6[Associativity]\r\n\r\n    T --> DM[De Morgan's Laws]\r\n    T --> AB[Absorption]\r\n    T --> CN[Consensus]\r\n    T --> INV[Involution]\r\n    T --> SH[Shannon Expansion]\r\n\r\n    C --> SOP[\"Sum of Products<br/>S minterms\"]\r\n    C --> POS[\"Product of Sums<br/>? maxterms\"]\r\n\r\n    M --> ALG[Algebraic]\r\n    M --> KM[Karnaugh Maps]\r\n    M --> QMC[Quine-McCluskey]\r\n\r\n    DM -->|\"(A?B)' = A' + B'\"| DM1\r\n    DM -->|\"(A+B)' = A'?B'\"| DM2"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "de-morgans-law--gate-transformations",
      children: "De Morgan's Law ? Gate Transformations"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    subgraph Original\r\n        AND[AND Gate] --> NOT1[NOT]\r\n        AND -->|Output inverted| NAND_equiv[NAND]\r\n    end\r\n    subgraph Equivalent\r\n        NOT2[NOT] --> OR[OR Gate]\r\n        NOT2 --> OR\r\n        OR -->|Equivalent| NAND_equiv\r\n    end\r\n\r\n    subgraph Original2\r\n        OR2[OR Gate] --> NOT3[NOT]\r\n        OR2 -->|Output inverted| NOR_equiv[NOR]\r\n    end\r\n    subgraph Equivalent2\r\n        NOT4[NOT] --> AND2[AND Gate]\r\n        NOT4 --> AND2\r\n        AND2 -->|Equivalent| NOR_equiv\r\n    end"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "canonical-form-conversion-flow",
      children: "Canonical Form Conversion Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    F[\"F = A?B + C\"] -->|Expand missing vars| SOP[\"Canonical SOP<br/>F = S(5,6,7)\"]\r\n    F -->|Complement & expand| POS[\"Canonical POS<br/>F = ?(0,1,2,3,4)\"]\r\n    SOP -->|Complement & simplify| POS\r\n    POS -->|Complement & expand| SOP\r\n    SOP -->|Read from 1s in truth table| TT[Truth Table]\r\n    POS -->|Read from 0s in truth table| TT\r\n    TT -->|Minterms ? 1s| SOP\r\n    TT -->|Maxterms ? 0s| POS"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Truth Table Generator ===\r\nfunction truthTable(vars: number, expr: (inputs: number[]) => number): string {\r\n    let result = '';\r\n    const headers = Array.from({ length: vars }, (_, i) => String.fromCharCode(65 + i)).join(' | ');\r\n    result += `${headers} | F\\n${'---|-'.repeat(vars)}---|----\\n`;\r\n    for (let i = 0; i < (1 << vars); i++) {\r\n        const inputs = Array.from({ length: vars }, (_, j) => (i >> (vars - 1 - j)) & 1);\r\n        const out = expr(inputs);\r\n        result += `${inputs.join(' | ')} | ${out}\\n`;\r\n    }\r\n    return result;\r\n}\r\n\r\n// === Boolean Expression Evaluator ===\r\ntype GateOp = 'AND' | 'OR' | 'NAND' | 'NOR' | 'XOR' | 'XNOR' | 'NOT';\r\nfunction evaluateGate(op: GateOp, a: number, b: number = 0): number {\r\n    switch (op) {\r\n        case 'AND': return a & b;\r\n        case 'OR': return a | b;\r\n        case 'NAND': return ~(a & b) & 1;\r\n        case 'NOR': return ~(a | b) & 1;\r\n        case 'XOR': return a ^ b;\r\n        case 'XNOR': return ~(a ^ b) & 1;\r\n        case 'NOT': return ~a & 1;\r\n    }\r\n}\r\n\r\n// === Minterm / Maxterm Calculator ===\r\nfunction minterms(vars: number, expr: (inputs: number[]) => number): number[] {\r\n    const result: number[] = [];\r\n    for (let i = 0; i < (1 << vars); i++) {\r\n        const inputs = Array.from({ length: vars }, (_, j) => (i >> (vars - 1 - j)) & 1);\r\n        if (expr(inputs) === 1) result.push(i);\r\n    }\r\n    return result;\r\n}\r\nfunction maxterms(vars: number, expr: (inputs: number[]) => number): number[] {\r\n    const result: number[] = [];\r\n    for (let i = 0; i < (1 << vars); i++) {\r\n        const inputs = Array.from({ length: vars }, (_, j) => (i >> (vars - 1 - j)) & 1);\r\n        if (expr(inputs) === 0) result.push(i);\r\n    }\r\n    return result;\r\n}\r\n\r\n// === Boolean Simplifier (Algebraic rules) ===\r\nfunction simplifyBoolean(expr: string): string {\r\n    let s = expr\r\n        .replace(/A\\+A'?/g, '1').replace(/A'?\\+A/g, '1')\r\n        .replace(/A?A'?/g, '0').replace(/A'??A/g, '0')\r\n        .replace(/A\\+A/g, 'A').replace(/A?A/g, 'A')\r\n        .replace(/A\\+0/g, 'A').replace(/A?1/g, 'A')\r\n        .replace(/A?0/g, '0').replace(/A\\+1/g, '1')\r\n        .replace(/A''/g, 'A');\r\n    return s;\r\n}\r\n\r\n// === Dual Function ===\r\nfunction dual(expr: string): string {\r\n    return expr.replace(/\\+/g, 'T').replace(/?/g, '+').replace(/T/g, '?');\r\n}\r\n\r\n// === Boolean Difference (Shannon Expansion) ===\r\nfunction booleanDiff(expr: (x: number[]) => number, vars: number, idx: number): number[] {\r\n    const result: number[] = [];\r\n    for (let i = 0; i < (1 << (vars - 1)); i++) {\r\n        const inputs0: number[] = [];\r\n        const inputs1: number[] = [];\r\n        let pos = 0;\r\n        for (let j = 0; j < vars; j++) {\r\n            if (j === idx) { inputs0.push(0); inputs1.push(1); }\r\n            else {\r\n                const bit = (i >> (vars - 2 - pos)) & 1;\r\n                inputs0.push(bit); inputs1.push(bit);\r\n                pos++;\r\n            }\r\n        }\r\n        result.push(expr(inputs0) ^ expr(inputs1));\r\n    }\r\n    return result;\r\n}\r\n\r\n// === Demo ===\r\nconst f = (x: number[]) => (x[0] & x[1]) | (~x[0] & x[2]);\r\nconsole.log('Truth table for F = A?B + A\\'?C:');\r\nconsole.log(truthTable(3, f));\r\nconsole.log('Minterms:', minterms(3, f));\r\nconsole.log('Maxterms:', maxterms(3, f));\r\nconsole.log('Simplify A?B + A?B\\':', simplifyBoolean('A?B+A?B\\''));\r\nconsole.log('Dual of A+B?C:', dual('A+B?C'));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// boolean algebra\r\n// boolean-circuits-sequential implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\r\nclass Processor {\r\nprivate tasks: Task[] = []\r\nprivate maxConcurrency: number\r\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\r\nasync add(task: Omit<Task, \"status\">): Promise<void> {\r\nthis.tasks.push({ ...task, status: \"pending\" })\r\n}\r\nasync runAll(): Promise<void> {\r\nconst running: Promise<void>[] = []\r\nfor (const t of this.tasks) {\r\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\r\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\r\nrunning.push(p)\r\n}\r\nawait Promise.all(running)\r\n}\r\nprivate async execute(t: Task): Promise<void> {\r\nt.status = \"running\"\r\nawait new Promise(r => setTimeout(r, 10))\r\nt.status = \"done\"\r\n}\r\ngetResults(): Task[] { return this.tasks }\r\ngetStats(): { done: number; pending: number; running: number } {\r\nconst done = this.tasks.filter(t => t.status === \"done\").length\r\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\r\nconst running = this.tasks.filter(t => t.status === \"running\").length\r\nreturn { done, pending, running }\r\n}\r\n}\r\nasync function main() {\r\nconst proc = new Processor(2)\r\nawait proc.add({ id: '1', name: 'boolean algebra', data: { topic: 'boolean-circuits-sequential' } })\r\nawait proc.runAll()\r\nconsole.log('Stats:', proc.getStats())\r\n}\r\nmain().catch(console.error)\r\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// boolean algebra - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\r\nclass Cache {\r\nprivate store: Map<string, CacheEntry> = new Map()\r\nconstructor(private defaultTTL: number = 60000) {}\r\nset(key: string, value: unknown, ttl?: number): void {\r\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\r\n}\r\nget(key: string): unknown | undefined {\r\nconst entry = this.store.get(key)\r\nif (!entry) return undefined\r\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\r\nreturn entry.value\r\n}\r\ndelete(key: string): boolean { return this.store.delete(key) }\r\nclear(): void { this.store.clear() }\r\nsize(): number { return this.store.size }\r\nkeys(): string[] { return Array.from(this.store.keys()) }\r\n}\r\nclass Logger {\r\nprivate entries: string[] = []\r\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\r\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\r\nthis.entries.push(entry)\r\nconsole.log(entry)\r\n}\r\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\r\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\r\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\r\ngetLogs(): string[] { return [...this.entries] }\r\nclear(): void { this.entries = [] }\r\n}\r\nfunction computeHash(input: string): string {\r\nlet hash = 0\r\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\r\nreturn Math.abs(hash).toString(16)\r\n}\r\nasync function demo(): Promise<void> {\r\nconst cache = new Cache(5000)\r\ncache.set('key1', 'digital-circuits demo')\r\nconst log = new Logger()\r\nlog.info('Cache demo started', { course: 'digital-logic', chapter: 'boolean algebra' })\r\nconst v = cache.get(\"key1\")\r\nconsole.log('Cached:', v)\r\nconsole.log('Hash:', computeHash('digital-circuits'))\r\n}\r\ndemo()\r\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Boolean algebra, with operators AND, OR, and NOT on the set {0, 1}, is the mathematical foundation of digital logic design."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "De Morgan's theorems enable systematic transformation between AND-OR and OR-AND networks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sum-of-products and product-of-sums are canonical representations of Boolean functions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NAND and NOR are universal gates ? any Boolean function can be implemented using only one type."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "XOR has important applications in parity, comparison, and arithmetic circuits."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Function completeness analysis determines which gate sets are sufficient for universal computation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The adjacency theorem states:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) x + x?y = x"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) x?y + x?y' = x"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) (x?y)' = x' + y'"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) x?x' = 0"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "De Morgan's theorem converts an AND-OR expression to:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) SOP form"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) An equivalent NAND-NAND expression"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) POS form"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) A minterm list"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which gate set is NOT functionally complete?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) {NAND}"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) {AND, OR}"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) {NOR}"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) {AND, NOT}"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The XOR of four inputs equals 1 when:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) All inputs are 1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Exactly one input is 1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) An odd number of inputs are 1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) An even number of inputs are 1"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The consensus theorem eliminates which term?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) x?y"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) x'?z"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) y?z"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) None ? it adds a redundant term"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answers</summary>\n1. B, 2. B, 3. B, 4. C, 5. C\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State the three Boolean postulates and the five fundamental theorems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is a minterm? How many minterms exist for a function of n variables?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between sum-of-products and product-of-sums forms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that {NOR} is a functionally complete set."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is XOR useful for parity generation?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Simplify using algebraic manipulation (show each step with justification):\r\na) F = A?B + A?B' + A'?B\r\nb) G = (X + Y)?(X + Y')?(X' + Y)\r\nc) H = P?Q + P?R + Q?R"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Convert between canonical forms:\r\na) F(x,y,z) = S(0, 2, 4) to POS\r\nb) G(A,B,C) = ?(1, 3, 7) to SOP"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Apply De Morgan's theorem to:\r\na) (A?B + C)'\r\nb) [(A + B)?(C + D)]'\r\nc) (A' + B?C' + D?E)'"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement using only NAND gates:\r\na) F = A?B' + C?D\r\nb) G = (A + B)?(C + D)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a 3-bit even parity generator using XOR gates. Show the truth table and circuit."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a 4-bit prime number detector using Boolean algebra. The circuit accepts a 4-bit unsigned binary number (0-15) and outputs 1 when the input is prime. Prime numbers in this range are {2, 3, 5, 7, 11, 13}. Derive the minimal SOP expression using algebraic simplification, then implement it using only NAND gates. Compare the gate count with a direct AND-OR implementation."
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