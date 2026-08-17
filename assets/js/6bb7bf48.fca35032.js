"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[98690],{

/***/ 68082
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
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
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
        }), " Chapter 1 (Number Systems) ? binary values 0/1 are the domain of Boolean algebra.\n", (0,jsx_runtime.jsx)(_components.strong, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Boolean Postulates] --> B[Theorems & Laws]\n    B --> C[De Morgan's Theorems]\n    C --> D[SOP / POS Forms]\n    D --> E[Canonical Forms]\n    D --> F[NAND/NOR Universality]\n    B --> G[XOR Applications]\n    E --> H[Minimised Expression]\n    F --> H\n    G --> H\n    style A fill:#e1f5fe\n    style H fill:#c8e6c9\n"
      })
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
      }), ":\nx + x?y = x?1 + x?y (Identity)\n= x?(1 + y) (Distributivity)\n= x?1 (Null element: 1 + y = 1)\n= x (Identity)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "222-proof-of-consensus-theorem",
      children: "2.2.2 Proof of Consensus Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prove: x?y + x'?z + y?z = x?y + x'?z"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof"
      }), ":\nx?y + x'?z + y?z = x?y + x'?z + y?z?(x + x') (Complement)\n= x?y + x'?z + x?y?z + x'?y?z (Distributivity)\n= x?y?(1 + z) + x'?z?(1 + y) (Distributivity)\n= x?y?1 + x'?z?1 (Null element)\n= x?y + x'?z (Identity)"]
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
      children: "These generalise to n variables:\n(x_1?x_2?...?x_n)' = x_1' + x_2' + ... + x_n'\n(x_1 + x_2 + ... + x_n)' = x_1'?x_2'?...?x_n'"
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
      children: "F(x, y, z) = m_1 + m_3 + m_5 + m_7 = S(1, 3, 5, 7)\nF = x'y'z + x'yz + xy'z + xyz = z?(x'y' + x'y + xy' + xy) = z?(x'(y'+y) + x(y'+y)) = z?(x' + x) = z"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "243-product-of-sums-pos",
      children: "2.4.3 Product-of-Sums (POS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Boolean function expressed as the AND of maxterms for which the function output is 0."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "F(x, y, z) = M_0?M_2?M_4?M_6 = ?(0, 2, 4, 6)\nF = (x+y+z)?(x+y'+z)?(x'+y+z)?(x'+y'+z)"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"NAND as Universal Gate\"\n        N1[NOT from NAND] --> N1d[\"A' = (A?A)''\"]\n        N2[AND from NAND] --> N2d[\"A?B = ((A?B)')'\"]\n        N3[OR from NAND] --> N3d[\"A+B = (A'?B')'\"]\n    end\n    style N1d fill:#c8e6c9\n    style N2d fill:#c8e6c9\n    style N3d fill:#c8e6c9\n"
      })
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
        children: "function xorParity(data: boolean[]): boolean {\n    return data.reduce((acc, bit) => acc !== bit, false);\n}\n\nfunction magnitudeEqual(a: boolean[], b: boolean[]): boolean {\n    return a.every((bit, i) => bit === b[i]);\n}\n"
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
        children: "interface TruthTableEntry {\n    inputs: boolean[];\n    output: boolean;\n}\n\nfunction evaluateSOP(expression: string, variables: string[], values: boolean[]): boolean {\n    // Parse SOP expression like \"AB + A'C\" and evaluate\n    const terms = expression.split(\"+\").map(t => t.trim());\n    return terms.some(term => {\n        let result = true;\n        let i = 0;\n        while (i < term.length) {\n            const isComplemented = term[i] === \"'\";\n            const varName = isComplemented ? term[++i] : term[i];\n            const varIndex = variables.indexOf(varName);\n            if (varIndex === -1) throw new Error(`Unknown variable: ${varName}`);\n            const value = isComplemented ? !values[varIndex] : values[varIndex];\n            result &&= value;\n            i++;\n        }\n        return result;\n    });\n}\n"
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
      }), ":\nF = x?y + x?z + y?z\n= x?y + x?z + y?z?(x + x') (Complement: x + x' = 1)\n= x?y + x?z + x?y?z + x'?y?z (Distributivity)\n= x?y?(1 + z) + x?z + x'?y?z (Distributivity)\n= x?y?1 + x?z + x'?y?z (Null element: 1 + z = 1)\n= x?y + x?z + x'?y?z (Identity)\n= x?y + z?(x + x'?y) (Distributivity)\n= x?y + z?(x + y) (Absorption: x + x'y = x + y)\n= x?y + x?z + y?z (Distributivity)"]
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
      }), ": F = S(0, 2, 4, 6) means F = 1 for minterms 0, 2, 4, 6. F = 0 for minterms 1, 3, 5, 7.\nF' = S(1, 3, 5, 7) = A'B'C + A'BC + AB'C + ABC = C?(A'B' + A'B + AB' + AB) = C\nF = (F')' = C'\nIn POS: F = ?(1, 3, 5, 7) = M_1?M_3?M_5?M_7 = (A+B+C')?(A+B'+C')?(A'+B+C')?(A'+B'+C')"]
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
      }), ":\nF' = [(A + B?C)?(A' + C)]' = (A + B?C)' + (A' + C)'"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apply De Morgan to each term:\n(A + B?C)' = A'?(B?C)' = A'?(B' + C')\n(A' + C)' = A?C'"
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
      }), ":\nF = A?B + C?D\n= [(A?B)']' + [(C?D)']' (Double complement)\n= ([(A?B)']'?[(C?D)']')' (De Morgan applied backwards: X+Y = (X'?Y')')\n= [(A?B)'?(C?D)']'"]
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
        children: "function evenParity(bits: boolean[]): boolean {\n    return bits.reduce((p, b) => p !== b, false);\n}\n// evenParity([true, false, true, false]) ? false (2 ones = even)\n// evenParity([true, false, true, true]) ? true (3 ones = odd)\n"
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
        children: "interface TruthTableRow {\n  inputs: Record<string, number>;\n  output: number;\n}\n\nclass TruthTableGenerator {\n  static generate(variables: string[], expression: (vals: Record<string, number>) => number): TruthTableRow[] {\n    const rows: TruthTableRow[] = [];\n    const n = variables.length;\n    for (let i = 0; i < 1 << n; i++) {\n      const vals: Record<string, number> = {};\n      for (let j = 0; j < n; j++) {\n        vals[variables[j]] = (i >> (n - 1 - j)) & 1;\n      }\n      rows.push({ inputs: vals, output: expression(vals) });\n    }\n    return rows;\n  }\n\n  static print(rows: TruthTableRow[], label: string = \"Truth Table\"): void {\n    const vars = Object.keys(rows[0].inputs);\n    const header = [...vars, \"F\"].join(\" | \");\n    const sep = vars.map(() => \"---\").join(\" | \") + \" | ---\";\n    console.log(`\\n=== ${label} ===`);\n    console.log(`| ${header} |`);\n    console.log(`| ${sep} |`);\n    for (const row of rows) {\n      const vals = vars.map(v => row.inputs[v]).join(\" | \");\n      console.log(`| ${vals} | ${row.output} |`);\n    }\n  }\n}\n\nconst F_A = TruthTableGenerator.generate([\"A\", \"B\"], ({ A, B }) => (A && B) ? 1 : 0);\nTruthTableGenerator.print(F_A, \"AND Gate\");\n\nconst F_XOR = TruthTableGenerator.generate([\"X\", \"Y\"], ({ X, Y }) => X ^ Y);\nTruthTableGenerator.print(F_XOR, \"XOR Gate\");\n\nconst F_MAJ = TruthTableGenerator.generate([\"A\", \"B\", \"C\"],\n  ({ A, B, C }) => (A + B + C >= 2) ? 1 : 0);\nTruthTableGenerator.print(F_MAJ, \"Majority Circuit\");\n\nconst F_SOP = TruthTableGenerator.generate([\"A\", \"B\", \"C\"],\n  ({ A, B, C }) => (!A && !B && C) || (!A && B && C) || (A && B && !C) ? 1 : 0);\nTruthTableGenerator.print(F_SOP, \"F = S(1,3,6)\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "boolean-expression-engine",
      children: "Boolean Expression Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A simple engine that tokenizes and evaluates Boolean expressions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type BoolToken =\n  | { type: \"VAR\"; name: string }\n  | { type: \"NOT\" }\n  | { type: \"AND\" }\n  | { type: \"OR\" }\n  | { type: \"XOR\" }\n  | { type: \"LPAREN\" }\n  | { type: \"RPAREN\" };\n\nclass BooleanEngine {\n  static tokenize(expr: string): BoolToken[] {\n    const tokens: BoolToken[] = [];\n    for (const ch of expr.replace(/\\s+/g, \"\")) {\n      if (/[A-Z]/i.test(ch)) tokens.push({ type: \"VAR\", name: ch.toUpperCase() });\n      else if (ch === \"'\" || ch === \"!\") tokens.push({ type: \"NOT\" });\n      else if (ch === \"?\" || ch === \"*\" || ch === \"&\") tokens.push({ type: \"AND\" });\n      else if (ch === \"+\" || ch === \"|\") tokens.push({ type: \"OR\" });\n      else if (ch === \"?\" || ch === \"^\") tokens.push({ type: \"XOR\" });\n      else if (ch === \"(\") tokens.push({ type: \"LPAREN\" });\n      else if (ch === \")\") tokens.push({ type: \"RPAREN\" });\n      else throw new Error(`Unknown token: ${ch}`);\n    }\n    return tokens;\n  }\n\n  static evaluate(expr: string, vars: Record<string, number>): number {\n    const t = this.tokenize(expr);\n    const evalExpr = (tokens: BoolToken[], start: number): { val: number; end: number } => {\n      let result: number = -1;\n      let op: string | null = null;\n      let i = start;\n      const next = (): number => {\n        if (i >= tokens.length) throw new Error(\"Unexpected end\");\n        const tok = tokens[i];\n        if (tok.type === \"NOT\") { i++; return next() ^ 1; }\n        if (tok.type === \"LPAREN\") { i++; const r = evalExpr(tokens, i); i = r.end; return r.val; }\n        if (tok.type === \"VAR\") { i++; return vars[tok.name] ?? 0; }\n        throw new Error(`Unexpected token at ${i}`);\n      };\n      result = next();\n      while (i < tokens.length) {\n        const tok = tokens[i];\n        if (tok.type === \"RPAREN\") { i++; break; }\n        if (tok.type === \"AND\" || tok.type === \"OR\" || tok.type === \"XOR\") {\n          op = tok.type; i++;\n          const r = next();\n          result = op === \"AND\" ? result & r : op === \"OR\" ? result | r : result ^ r;\n        } else break;\n      }\n      return { val: result, end: i };\n    };\n    return evalExpr(t, 0).val;\n  }\n\n  static generateTruthTable(expr: string, variables: string[]): TruthTableRow[] {\n    return TruthTableGenerator.generate(variables, (vals) => this.evaluate(expr, vals));\n  }\n}\n\nconst be = BooleanEngine;\nconsole.log(\"\\n=== Boolean Expression Evaluation ===\");\nconst vars1 = { A: 1, B: 0, C: 1 };\nconsole.log(`  A?B + C with A=1,B=0,C=1: ${be.evaluate(\"A*B+C\", vars1)}`);\nconsole.log(`  (A+B)'?C with A=1,B=0,C=1: ${be.evaluate(\"!(A+B)*C\", vars1)}`);\nconsole.log(`  A?B?C with A=1,B=0,C=1: ${be.evaluate(\"A^B^C\", vars1)}`);\n\nTruthTableGenerator.print(\n  be.generateTruthTable(\"(A+B)*(A+C)\", [\"A\", \"B\", \"C\"]),\n  \"F = (A+B)(A+C) = A + BC\"\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algebraic-simplification-demonstrator",
      children: "Algebraic Simplification Demonstrator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class BooleanSimplifier {\n  static absorptionLaw(a: number, b: number): Record<string, number> {\n    return {\n      \"A + A?B\": a | (a & b),\n      \"A\": a,\n      \"A?(A + B)\": a & (a | b),\n      \"Equal? A + A?B == A\": (a | (a & b)) === a ? 1 : 0,\n      \"Equal? A?(A+B) == A\": (a & (a | b)) === a ? 1 : 0,\n    };\n  }\n\n  static consensusLaw(a: number, b: number, c: number): Record<string, number> {\n    return {\n      \"A?B + A'?C + B?C\": (a & b) | ((a ^ 1) & c) | (b & c),\n      \"A?B + A'?C\": (a & b) | ((a ^ 1) & c),\n      \"Equal?\": ((a & b) | ((a ^ 1) & c) | (b & c)) === ((a & b) | ((a ^ 1) & c)) ? 1 : 0,\n    };\n  }\n\n  static deMorganVerify(a: number, b: number): Record<string, number> {\n    return {\n      \"(A?B)'\": ((a & b) ^ 1),\n      \"A' + B'\": ((a ^ 1) | (b ^ 1)),\n      \"Equal?\": ((a & b) ^ 1) === ((a ^ 1) | (b ^ 1)) ? 1 : 0,\n      \"(A+B)'\": ((a | b) ^ 1),\n      \"A'?B'\": ((a ^ 1) & (b ^ 1)),\n      \"Equal?\": ((a | b) ^ 1) === ((a ^ 1) & (b ^ 1)) ? 1 : 0,\n    };\n  }\n}\n\nconsole.log(\"\\n=== Absorption Law Verification ===\");\nfor (const a of [0, 1]) for (const b of [0, 1]) {\n  const r = BooleanSimplifier.absorptionLaw(a, b);\n  console.log(`  A=${a}, B=${b}: A+A?B=${r[\"A + A?B\"]}, A?(A+B)=${r[\"A?(A + B)\"]}, Equal? ${r[\"Equal? A + A?B == A\"]}`);\n}\n\nconsole.log(\"\\n=== Consensus Theorem Verification ===\");\nfor (const a of [0, 1]) for (const b of [0, 1]) for (const c of [0, 1]) {\n  const r = BooleanSimplifier.consensusLaw(a, b, c);\n  console.log(`  A=${a}, B=${b}, C=${c}: ${r[\"Equal?\"] ? \"A?B + A'?C + B?C = A?B + A'?C ?\" : \"FAIL\"}`);\n}\n\nconsole.log(\"\\n=== De Morgan's Theorem Verification ===\");\nconsole.log(\"  A B | (A?B)' | A'+B' | Equal | (A+B)' | A'?B' | Equal\");\nfor (const a of [0, 1]) for (const b of [0, 1]) {\n  const r = BooleanSimplifier.deMorganVerify(a, b);\n  console.log(`  ${a} ${b} |   ${r[\"(A?B)'\"]}    |  ${r[\"A' + B'\"]}    |  ${r[\"Equal?\"]}    |   ${r[\"(A+B)'\"]}    |  ${r[\"A'?B'\"]}    |  ${r[\"Equal?\"]}`);\n}\n\nconsole.log(\"\\n=== All Canonical Minterms (3 variables) ===\");\nconst allMinterms = TruthTableGenerator.generate([\"A\", \"B\", \"C\"],\n  () => 1);\nTruthTableGenerator.print(allMinterms, \"All 8 minterms\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "boolean-function-equivalence-checker",
      children: "Boolean Function Equivalence Checker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class FunctionChecker {\n  static areEquivalent(\n    vars: string[],\n    f1: (v: Record<string, number>) => number,\n    f2: (v: Record<string, number>) => number\n  ): boolean {\n    const n = vars.length;\n    for (let i = 0; i < 1 << n; i++) {\n      const vals: Record<string, number> = {};\n      for (let j = 0; j < n; j++) {\n        vals[vars[j]] = (i >> (n - 1 - j)) & 1;\n      }\n      if (f1(vals) !== f2(vals)) return false;\n    }\n    return true;\n  }\n\n  static checkDistributive(): void {\n    const vars = [\"A\", \"B\", \"C\"];\n    const lhs = (v: Record<string, number>) => v.A & (v.B | v.C);\n    const rhs = (v: Record<string, number>) => (v.A & v.B) | (v.A & v.C);\n    const distributive = this.areEquivalent(vars, lhs, rhs);\n    console.log(`  A?(B+C) == (A?B)+(A?C): ${distributive ? \"? EQUIVALENT\" : \"? NOT EQUIVALENT\"}`);\n  }\n\n  static checkXORProperties(): void {\n    const vars = [\"A\", \"B\"];\n    const xorComm = this.areEquivalent(vars,\n      v => v.A ^ v.B, v => v.B ^ v.A);\n    console.log(`  A?B == B?A: ${xorComm ? \"? COMMUTATIVE\" : \"? NOT\"}`);\n  }\n}\n\nconsole.log(\"\\n=== Function Equivalence ===\");\nFunctionChecker.checkDistributive();\nFunctionChecker.checkXORProperties();\n\nconst sopForm = (v: Record<string, number>) =>\n  ((~v.A) & (~v.B) & v.C) | ((~v.A) & v.B & v.C) | (v.A & v.B & (~v.C));\nconst simplified = (v: Record<string, number>) =>\n  ((~v.A) & v.C) | (v.A & v.B & (~v.C));\nconst equiv = FunctionChecker.areEquivalent([\"A\", \"B\", \"C\"], sopForm, simplified);\nconsole.log(`  F = S(1,3,6) simplified: ${equiv ? \"? EQUIVALENT\" : \"? NOT EQUIVALENT\"}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-diagrams",
      children: "Mermaid Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "boolean-algebra-hierarchy",
      children: "Boolean Algebra Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    BA[Boolean Algebra] --> P[Postulates]\n    BA --> T[Theorems]\n    BA --> C[Canonical Forms]\n    BA --> M[Minimisation]\n\n    P --> C1[Closure]\n    P --> C2[Identity: 0, 1]\n    P --> C3[Commutativity]\n    P --> C4[Distributivity]\n    P --> C5[Complements]\n    P --> C6[Associativity]\n\n    T --> DM[De Morgan's Laws]\n    T --> AB[Absorption]\n    T --> CN[Consensus]\n    T --> INV[Involution]\n    T --> SH[Shannon Expansion]\n\n    C --> SOP[Sum of Products<br/>S minterms]\n    C --> POS[Product of Sums<br/>? maxterms]\n\n    M --> ALG[Algebraic]\n    M --> KM[Karnaugh Maps]\n    M --> QMC[Quine-McCluskey]\n\n    DM -->|(A?B)' = A' + B'| DM1\n    DM -->|(A+B)' = A'?B'| DM2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "de-morgans-law--gate-transformations",
      children: "De Morgan's Law ? Gate Transformations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Original\n        AND[AND Gate] --> NOT1[NOT]\n        AND -->|Output inverted| NAND_equiv[NAND]\n    end\n    subgraph Equivalent\n        NOT2[NOT] --> OR[OR Gate]\n        NOT2 --> OR\n        OR -->|Equivalent| NAND_equiv\n    end\n\n    subgraph Original2\n        OR2[OR Gate] --> NOT3[NOT]\n        OR2 -->|Output inverted| NOR_equiv[NOR]\n    end\n    subgraph Equivalent2\n        NOT4[NOT] --> AND2[AND Gate]\n        NOT4 --> AND2\n        AND2 -->|Equivalent| NOR_equiv\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "canonical-form-conversion-flow",
      children: "Canonical Form Conversion Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    F[F = A?B + C] -->|Expand missing vars| SOP[Canonical SOP<br/>F = S(5,6,7)]\n    F -->|Complement & expand| POS[Canonical POS<br/>F = ?(0,1,2,3,4)]\n    SOP -->|Complement & simplify| POS\n    POS -->|Complement & expand| SOP\n    SOP -->|Read from 1s in truth table| TT[Truth Table]\n    POS -->|Read from 0s in truth table| TT\n    TT -->|Minterms ? 1s| SOP\n    TT -->|Maxterms ? 0s| POS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Truth Table Generator ===\nfunction truthTable(vars: number, expr: (inputs: number[]) => number): string {\n    let result = '';\n    const headers = Array.from({ length: vars }, (_, i) => String.fromCharCode(65 + i)).join(' | ');\n    result += `${headers} | F\\n${'---|-'.repeat(vars)}---|----\\n`;\n    for (let i = 0; i < (1 << vars); i++) {\n        const inputs = Array.from({ length: vars }, (_, j) => (i >> (vars - 1 - j)) & 1);\n        const out = expr(inputs);\n        result += `${inputs.join(' | ')} | ${out}\\n`;\n    }\n    return result;\n}\n\n// === Boolean Expression Evaluator ===\ntype GateOp = 'AND' | 'OR' | 'NAND' | 'NOR' | 'XOR' | 'XNOR' | 'NOT';\nfunction evaluateGate(op: GateOp, a: number, b: number = 0): number {\n    switch (op) {\n        case 'AND': return a & b;\n        case 'OR': return a | b;\n        case 'NAND': return ~(a & b) & 1;\n        case 'NOR': return ~(a | b) & 1;\n        case 'XOR': return a ^ b;\n        case 'XNOR': return ~(a ^ b) & 1;\n        case 'NOT': return ~a & 1;\n    }\n}\n\n// === Minterm / Maxterm Calculator ===\nfunction minterms(vars: number, expr: (inputs: number[]) => number): number[] {\n    const result: number[] = [];\n    for (let i = 0; i < (1 << vars); i++) {\n        const inputs = Array.from({ length: vars }, (_, j) => (i >> (vars - 1 - j)) & 1);\n        if (expr(inputs) === 1) result.push(i);\n    }\n    return result;\n}\nfunction maxterms(vars: number, expr: (inputs: number[]) => number): number[] {\n    const result: number[] = [];\n    for (let i = 0; i < (1 << vars); i++) {\n        const inputs = Array.from({ length: vars }, (_, j) => (i >> (vars - 1 - j)) & 1);\n        if (expr(inputs) === 0) result.push(i);\n    }\n    return result;\n}\n\n// === Boolean Simplifier (Algebraic rules) ===\nfunction simplifyBoolean(expr: string): string {\n    let s = expr\n        .replace(/A\\+A'?/g, '1').replace(/A'?\\+A/g, '1')\n        .replace(/A?A'?/g, '0').replace(/A'??A/g, '0')\n        .replace(/A\\+A/g, 'A').replace(/A?A/g, 'A')\n        .replace(/A\\+0/g, 'A').replace(/A?1/g, 'A')\n        .replace(/A?0/g, '0').replace(/A\\+1/g, '1')\n        .replace(/A''/g, 'A');\n    return s;\n}\n\n// === Dual Function ===\nfunction dual(expr: string): string {\n    return expr.replace(/\\+/g, 'T').replace(/?/g, '+').replace(/T/g, '?');\n}\n\n// === Boolean Difference (Shannon Expansion) ===\nfunction booleanDiff(expr: (x: number[]) => number, vars: number, idx: number): number[] {\n    const result: number[] = [];\n    for (let i = 0; i < (1 << (vars - 1)); i++) {\n        const inputs0: number[] = [];\n        const inputs1: number[] = [];\n        let pos = 0;\n        for (let j = 0; j < vars; j++) {\n            if (j === idx) { inputs0.push(0); inputs1.push(1); }\n            else {\n                const bit = (i >> (vars - 2 - pos)) & 1;\n                inputs0.push(bit); inputs1.push(bit);\n                pos++;\n            }\n        }\n        result.push(expr(inputs0) ^ expr(inputs1));\n    }\n    return result;\n}\n\n// === Demo ===\nconst f = (x: number[]) => (x[0] & x[1]) | (~x[0] & x[2]);\nconsole.log('Truth table for F = A?B + A\\'?C:');\nconsole.log(truthTable(3, f));\nconsole.log('Minterms:', minterms(3, f));\nconsole.log('Maxterms:', maxterms(3, f));\nconsole.log('Simplify A?B + A?B\\':', simplifyBoolean('A?B+A?B\\''));\nconsole.log('Dual of A+B?C:', dual('A+B?C'));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// boolean algebra\n// boolean-circuits-sequential implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'boolean algebra', data: { topic: 'boolean-circuits-sequential' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// boolean algebra - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'digital-circuits demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'digital-logic', chapter: 'boolean algebra' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('digital-circuits'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
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
          children: "Simplify using algebraic manipulation (show each step with justification):\na) F = A?B + A?B' + A'?B\nb) G = (X + Y)?(X + Y')?(X' + Y)\nc) H = P?Q + P?R + Q?R"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Convert between canonical forms:\na) F(x,y,z) = S(0, 2, 4) to POS\nb) G(A,B,C) = ?(1, 3, 7) to SOP"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Apply De Morgan's theorem to:\na) (A?B + C)'\nb) [(A + B)?(C + D)]'\nc) (A' + B?C' + D?E)'"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement using only NAND gates:\na) F = A?B' + C?D\nb) G = (A + B)?(C + D)"
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