"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[35305],{

/***/ 91389
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_discrete_mathematics_12_boolean_md_f3f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-discrete-mathematics-12-boolean-md-f3f.json
const site_docs_courses_discrete_mathematics_12_boolean_md_f3f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/discrete-mathematics/12-boolean","title":"Chapter 12: Boolean Algebra","description":"Previous Algebraic Structures | Next Probability","source":"@site/docs/courses/discrete-mathematics/12-boolean.md","sourceDirName":"courses/discrete-mathematics","slug":"/discrete-mathematics/12-boolean","permalink":"/ai-engineering-journey/discrete-mathematics/12-boolean","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"12-boolean","slug":"/discrete-mathematics/12-boolean","title":"Chapter 12: Boolean Algebra","sidebar_label":"Chapter 12: Boolean Algebra","sidebar_position":12},"sidebar":"coursesSidebar","previous":{"title":"Chapter 11: Algebraic Structures","permalink":"/ai-engineering-journey/discrete-mathematics/11-algebra"},"next":{"title":"Chapter 13: Probability","permalink":"/ai-engineering-journey/discrete-mathematics/13-probability"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/discrete-mathematics/12-boolean.md


const frontMatter = {
	id: '12-boolean',
	slug: '/discrete-mathematics/12-boolean',
	title: 'Chapter 12: Boolean Algebra',
	sidebar_label: 'Chapter 12: Boolean Algebra',
	sidebar_position: 12
};
const contentTitle = 'Chapter 12: Boolean Algebra';

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
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "12.1 Definition",
  "id": "121-definition",
  "level": 3
}, {
  "value": "12.2 Basic Identities",
  "id": "122-basic-identities",
  "level": 3
}, {
  "value": "12.3 Duality",
  "id": "123-duality",
  "level": 3
}, {
  "value": "12.4 Boolean Functions",
  "id": "124-boolean-functions",
  "level": 3
}, {
  "value": "12.5 Logic Gates",
  "id": "125-logic-gates",
  "level": 3
}, {
  "value": "12.6 Minimization with Karnaugh Maps",
  "id": "126-minimization-with-karnaugh-maps",
  "level": 3
}, {
  "value": "12.7 Quine-McCluskey Algorithm",
  "id": "127-quine-mccluskey-algorithm",
  "level": 3
}, {
  "value": "12.8 Don&#39;t Care Conditions",
  "id": "128-dont-care-conditions",
  "level": 3
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Examples",
  "id": "examples",
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
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "12.6 Boolean Function Implementations in TypeScript",
  "id": "126-boolean-function-implementations-in-typescript",
  "level": 3
}, {
  "value": "12.7 K-Map Minimization Algorithm",
  "id": "127-k-map-minimization-algorithm",
  "level": 3
}, {
  "value": "12.8 Quine-McCluskey Algorithm",
  "id": "128-quine-mccluskey-algorithm",
  "level": 3
}, {
  "value": "12.9 Logic Gate Implementation",
  "id": "129-logic-gate-implementation",
  "level": 3
}, {
  "value": "12.10 Boolean Algebra in Circuit Design",
  "id": "1210-boolean-algebra-in-circuit-design",
  "level": 3
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises",
  "level": 2
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
        id: "chapter-12-boolean-algebra",
        children: "Chapter 12: Boolean Algebra"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/discrete-mathematics/11-algebra",
          children: "Chapter 11: Algebraic Structures"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/discrete-mathematics/13-probability",
          children: "Chapter 13: Probability"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
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
        href: "../../assets/images/lessons/discrete-mathematics/12-boolean/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/discrete-mathematics/12-boolean/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/discrete-mathematics/12-boolean/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/discrete-mathematics/12-boolean/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/discrete-mathematics/12-boolean/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/discrete-mathematics/12-boolean/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define Boolean algebra and identify its axioms and properties"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simplify Boolean expressions using identities and laws"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply De Morgan's laws to transform expressions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert between Boolean functions and truth tables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Represent Boolean functions using sum-of-products and product-of-sums"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and analyze logic gate circuits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimize Boolean expressions using Karnaugh maps and the Quine-McCluskey algorithm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the relationship between Boolean algebra and digital logic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean Algebra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operations on ${0,1}$: $+$, $\\cdot$, $'$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every Boolean algebra satisfies the same axioms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Basic Identities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idempotent, absorption, complement, involution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplifying expressions before building circuits saves hardware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "De Morgan's Laws"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$(x+y)' = x'y'$, $(xy)' = x' + y'$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NAND/NOR are universal gates ? any circuit can use only NAND"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truth table $\\rightarrow$ expression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Express as sum of minterms or product of maxterms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logic Gates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AND, OR, NOT, NAND, NOR, XOR, XNOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal gates (NAND, NOR) implement any function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace $+$ with $\\cdot$ and $0$ with $1$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every theorem has a dual; proving one proves both"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minterms & Maxterms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product terms (AND) and sum terms (OR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOP selects rows where $f=1$; POS selects rows where $f=0$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Karnaugh Maps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visual minimization for up to 4 variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacent cells differ by one literal for simplification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quine-McCluskey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithmic minimization for any number of variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finds all prime implicants then selects essential ones"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Boolean Algebra] --> B[Axioms]\n    B --> C[Closure]\n    B --> D[Identity]\n    B --> E[Complement]\n    B --> F[Associative]\n    B --> G[Distributive]\n    A --> H[Identities]\n    H --> I[Idempotent]\n    H --> J[De Morgan]\n    H --> K[Absorption]\n    A --> L[Boolean Functions]\n    L --> M[Truth Tables]\n    L --> N[SOP / POS]\n    L --> O[Minterms / Maxterms]\n    A --> P[Logic Gates]\n    A --> Q[Minimization]\n    Q --> R[Karnaugh Maps]\n    Q --> S[Quine-McCluskey]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-definition",
      children: "12.1 Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Boolean algebra"
      }), " is a set $B$ with two binary operations $+$ (OR), $\\cdot$ (AND), and a unary operation $'$ (complement/NOT), satisfying:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Closure:"
        }), " $a + b \\in B$, $a \\cdot b \\in B$, $a' \\in B$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identity:"
        }), " $a + 0 = a$, $a \\cdot 1 = a$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complements:"
        }), " $a + a' = 1$, $a \\cdot a' = 0$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Associativity:"
        }), " $(a + b) + c = a + (b + c)$, $(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Commutativity:"
        }), " $a + b = b + a$, $a \\cdot b = b \\cdot a$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distributivity:"
        }), " $a + (b \\cdot c) = (a + b) \\cdot (a + c)$ and $a \\cdot (b + c) = (a \\cdot b) + (a \\cdot c)$."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The standard Boolean algebra is $B = {0, 1}$ with these operations."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Boolean algebra is an algebraic structure on ${0,1}$ with AND, OR, and NOT ? every identity follows from the six axiom groups."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-basic-identities",
      children: "12.2 Basic Identities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 12.1 (Idempotent laws)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$x + x = x$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$x \\cdot x = x$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 12.2 (Domination laws)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$x + 1 = 1$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$x \\cdot 0 = 0$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 12.3 (Absorption laws)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$x + (x \\cdot y) = x$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$x \\cdot (x + y) = x$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 12.4 (Involution law)."
      }), " $(x')' = x$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 12.5 (De Morgan's laws)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$(x + y)' = x' \\cdot y'$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$(x \\cdot y)' = x' + y'$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Absorption eliminates redundancy ($x + xy = x$); De Morgan converts AND to OR and vice versa by complementing all variables."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-duality",
      children: "12.3 Duality"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dual"
      }), " of a Boolean expression replaces $+$ with $\\cdot$, $\\cdot$ with $+$, $0$ with $1$, and $1$ with $0$. The dual of every Boolean identity is also an identity."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Dual of $x + (y \\cdot z)$ is $x \\cdot (y + z)$.\nDual of $x + 0 = x$ is $x \\cdot 1 = x$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Duality halves the work ? every proven identity gives its dual for free."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "124-boolean-functions",
      children: "12.4 Boolean Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An $n$-variable Boolean function is a function $f: {0,1}^n \\rightarrow {0,1}$. It can be represented by:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "truth table"
        }), " listing all $2^n$ input combinations and the output."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Boolean expression"
        }), " using $+$, $\\cdot$, and $'$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Karnaugh map"
        }), " for visual simplification."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 12.6 (Number of Boolean functions)."
      }), " There are $2^{2^n}$ distinct $n$-variable Boolean functions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Minterm:"
      }), " A product (AND) term where each variable appears once, either complemented or uncomplemented. For $n$ variables, there are $2^n$ minterms."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Maxterm:"
      }), " A sum (OR) term where each variable appears once, either complemented or uncomplemented."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sum-of-products (SOP):"
      }), " OR of minterms where $f = 1$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Product-of-sums (POS):"
      }), " AND of maxterms where $f = 0$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type TruthTable = { inputs: number[][]; output: number[] };\n\nfunction evaluateBooleanExpr(\n  inputs: number[],\n  sop: string[][], // array of minterm groups (each is an array of literals)\n): number {\n  let result = 0; // OR over all product terms\n  for (const term of sop) {\n    let product = 1;\n    for (let i = 0; i < term.length; i++) {\n      if (term[i] === \"1\") product *= inputs[i];\n      else if (term[i] === \"0\") product *= 1 - inputs[i];\n      // \"X\" means don't care\n    }\n    result = result || product;\n  }\n  return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Any Boolean function can be expressed as either a sum of minterms (SOP) or a product of maxterms (POS); these are canonical forms."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "125-logic-gates",
      children: "12.5 Logic Gates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AND gate (2-input):"
      }), " Output is 1 iff both inputs are 1. Symbol: $\\cdot$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "OR gate (2-input):"
      }), " Output is 1 iff at least one input is 1. Symbol: $+$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT gate (inverter):"
      }), " Output is the complement of the input. Symbol: $'$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NAND gate:"
      }), " NOT(AND). Output is 0 iff both inputs are 1. Universal gate."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NOR gate:"
      }), " NOT(OR). Output is 1 iff both inputs are 0. Universal gate."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "XOR gate:"
      }), " Output is 1 iff inputs differ."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "XNOR gate:"
      }), " Output is 1 iff inputs are equal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Bit = 0 | 1;\n\nfunction AND(a: Bit, b: Bit): Bit { return (a && b) ? 1 : 0; }\nfunction OR(a: Bit, b: Bit): Bit { return (a || b) ? 1 : 0; }\nfunction NOT(a: Bit): Bit { return a ? 0 : 1; }\nfunction NAND(a: Bit, b: Bit): Bit { return NOT(AND(a, b)); }\nfunction NOR(a: Bit, b: Bit): Bit { return NOT(OR(a, b)); }\nfunction XOR(a: Bit, b: Bit): Bit { return a !== b ? 1 : 0; }\nfunction XNOR(a: Bit, b: Bit): Bit { return a === b ? 1 : 0; }\n\n// Half adder\nfunction halfAdder(a: Bit, b: Bit): { sum: Bit; carry: Bit } {\n  return { sum: XOR(a, b), carry: AND(a, b) };\n}\n\n// Full adder\nfunction fullAdder(a: Bit, b: Bit, carryIn: Bit): { sum: Bit; carryOut: Bit } {\n  const s1 = XOR(a, b);\n  const sum = XOR(s1, carryIn);\n  const carryOut = OR(AND(a, b), AND(s1, carryIn));\n  return { sum, carryOut };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " NAND and NOR are universal ? any Boolean function can be implemented entirely with NAND gates or entirely with NOR gates."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "126-minimization-with-karnaugh-maps",
      children: "12.6 Minimization with Karnaugh Maps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Karnaugh map (K-map):"
      }), " A graphical method for minimizing Boolean expressions with up to 4-6 variables."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rules for K-map minimization:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adjacent cells differ by exactly one variable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group adjacent 1s in rectangles of size $2^k$ (1, 2, 4, 8, ...)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Groups must be rectangular, not diagonal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the largest possible groups."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Groups may wrap around edges."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each group corresponds to an implicant where the changing variable is eliminated."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example (2-variable K-map):"
      }), " $f(x,y) = xy + x'y$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "      y=0  y=1\nx=0  | 0 | 1 |\nx=1  | 0 | 1 |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Groups: column $y=1$ ? $y$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " K-maps minimize Boolean expressions by grouping adjacent 1s into the largest power-of-2 rectangles, eliminating variables that change within the group."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "127-quine-mccluskey-algorithm",
      children: "12.7 Quine-McCluskey Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An algorithmic (tabular) method for minimizing Boolean functions with any number of variables."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List all minterms where $f = 1$ (don't cares included)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group minterms by the number of 1s in their binary representation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Combine pairs differing by exactly one bit ? the differing bit becomes \"don't care\" ($-$)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat until no further combination is possible."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The remaining terms are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "prime implicants"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use a prime implicant chart to select the minimal set covering all minterms."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function countOnes(n: number, bits: number): number {\n  let count = 0;\n  for (let i = 0; i < bits; i++) {\n    if ((n >> i) & 1) count++;\n  }\n  return count;\n}\n\nfunction differsByOneBit(a: number, b: number): number | null {\n  const diff = a ^ b;\n  if (diff === 0) return null;\n  // Check if diff is a power of 2 (exactly one bit differs)\n  return (diff & (diff - 1)) === 0 ? diff : null;\n}\n\nfunction quineMcCluskey(minterms: number[], variables: number): number[][] {\n  const terms: { value: number; mask: number; combined: boolean }[] =\n    minterms.map(m => ({ value: m, mask: 0, combined: false }));\n  // Implementation continues with pairing and chart covering\n  return [];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Quine-McCluskey algorithmically finds all prime implicants and selects the minimum cover ? it is the computational version of K-map minimization."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "128-dont-care-conditions",
      children: "12.8 Don't Care Conditions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Don't care conditions"
      }), " are input combinations that cannot occur or whose output value is irrelevant. They can be treated as either 0 or 1 to simplify the expression."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In K-maps, don't cares are marked as \"X\" and included in a group only if they help form a larger group."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 12.7 (Don't care optimization)."
      }), " If a don't care condition appears in a prime implicant that covers only also-covered or don't-care minterms, it does not need to be covered separately."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Don't cares are wildcards ? use them to create larger K-map groups but never force them to be covered."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Distinction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OR of AND terms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum of minterms where $f=1$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical form for PLA implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AND of OR terms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product of maxterms where $f=0$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May be simpler for functions with many 1s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minterm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product term including every variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$2^n$ possible per function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truth table row selector"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maxterm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum term including every variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Converse of minterm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truth table complement selector"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "K-map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visual minimization (up to 4-6 vars)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency = differs by one literal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hand minimization for small functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quine-McCluskey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithmic minimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tabular, any variable count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated circuit synthesis"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Boolean Law"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AND Form"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OR Form"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$x \\cdot 1 = x$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$x + 0 = x$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Domination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$x \\cdot 0 = 0$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$x + 1 = 1$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Idempotent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$x \\cdot x = x$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$x + x = x$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$x \\cdot x' = 0$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$x + x' = 1$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Absorption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$x \\cdot (x + y) = x$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$x + (x \\cdot y) = x$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "De Morgan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$(x \\cdot y)' = x' + y'$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$(x + y)' = x' \\cdot y'$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Involution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$(x')' = x$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$(x')' = x$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Computer Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cryptography"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AI/ML"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Software Engineering"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALU design, control units"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S-box optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decision trees, rule learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional logic optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "De Morgan's Laws"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gate-level optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Refactoring conditionals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "K-maps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU register minimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quine-McCluskey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VLSI synthesis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean function representation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logic Gates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full adder, multiplexer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES circuit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neural network threshold gates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitwise operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Don't Cares"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State machine optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing data handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default cases in switch"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "De Morgan's law $(x + y)'$ equals:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $x' + y'$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $x' \\cdot y'$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $x \\cdot y$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $x + y'$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** $(x + y)' = x' \\cdot y'$."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How many Boolean functions exist for 3 variables?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 8"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 64"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 256"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 512"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** $2^{2^3} = 2^8 = 256$ distinct Boolean functions for 3 variables."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The absorption law $x + (x \\cdot y)$ simplifies to:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $x$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $y$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $x + y$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $xy$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**A)** $x + (x \\cdot y) = x$ by the absorption law."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which gate is NOT universal (cannot implement any Boolean function by itself)?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) NAND"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) NOR"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) AND"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) None of the above"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** AND alone cannot implement NOT, so it is not universal. NAND and NOR are universal."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A K-map groups cells that differ by:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Exactly one variable"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Different output values"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) No variables"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Two or more variables"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**A)** Adjacent cells in a K-map differ by exactly one variable, enabling simplification."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 12.1"
      }), " (Boolean identity proof). Prove $x + x'y = x + y$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof."
      }), " $x + x'y = (x + x')(x + y) = 1 \\cdot (x + y) = x + y$. $\\square$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 12.2"
      }), " (De Morgan extended). Simplify $(x + y + z)'$:\n$(x + y + z)' = x' \\cdot y' \\cdot z'$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 12.3"
      }), " (Truth table to SOP). $f(x,y,z) = 1$ for inputs 001, 010, 111.\nSOP: $f = x'y'z + x'yz' + xyz$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 12.4"
      }), " (Half adder circuit). Sum $= A \\oplus B$, Carry $= AB$."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sum"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Carry"
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
        className: "language-typescript",
        children: "function halfAdderCircuit(a: Bit, b: Bit) {\n  const sum = XOR(a, b);\n  const carry = AND(a, b);\n  return { sum, carry };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 12.5"
      }), " (K-map minimization). $f(x,y,z) = \\sum m(0,2,4,5,6)$.\nK-map:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "     yz\n     00  01  11  10\nx=0 | 1 | 0 | 0 | 1 |\nx=1 | 1 | 1 | 0 | 1 |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Groups: $z'$ (columns 00 and 10) and $y$ (bottom row for 01, but larger group: $z'$ covers 4 cells). Minimal: $f = z' + xy'$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 12.6"
      }), " (NAND as universal gate). Implement NOT using NAND: $x' = x \\text{ NAND } x$. Implement AND: $xy = (x \\text{ NAND } y)'$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 12.7"
      }), " (Don't care optimization). $f(w,x,y,z) = \\sum m(0,2,5,7,8,10) + d(13,15)$. The don't cares at 13 and 15 (binary 1101, 1111) can group with 5 (0101) and 7 (0111) to form $x'z$, eliminating $w$ and $y$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 12.8"
      }), " (Boolean function count for 2 variables). There are $2^{2^2} = 16$ possible 2-variable Boolean functions, including AND, OR, XOR, NAND, NOR, XNOR, implication, etc."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 12.9"
      }), " (Duality). Dual of $x + yz = (x + y)(x + z)$ is $x(y + z) = xy + xz$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 12.10"
      }), " (Full adder in gates)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function fullAdderGates(a: Bit, b: Bit, cin: Bit): { sum: Bit; cout: Bit } {\n  const aXORb = XOR(a, b);\n  const sum = XOR(aXORb, cin);\n  const cout = OR(AND(a, b), AND(aXORb, cin));\n  return { sum, cout };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Bit = 0 | 1;\n\n// --- Gate Library ---\nconst AND = (a: Bit, b: Bit): Bit => (a && b) as Bit;\nconst OR = (a: Bit, b: Bit): Bit => (a || b) as Bit;\nconst NOT = (a: Bit): Bit => (1 - a) as Bit;\nconst NAND = (a: Bit, b: Bit): Bit => NOT(AND(a, b));\nconst NOR = (a: Bit, b: Bit): Bit => NOT(OR(a, b));\nconst XOR = (a: Bit, b: Bit): Bit => (a !== b ? 1 : 0) as Bit;\nconst XNOR = (a: Bit, b: Bit): Bit => (a === b ? 1 : 0) as Bit;\n\nconsole.log('AND(1,0):', AND(1, 0)); // 0\nconsole.log('XOR(1,0):', XOR(1, 0)); // 1\n\n// --- Boolean Expression Simplifier (using identities) ---\nfunction simplifyExpr(expr: string): string {\n  // Apply basic Boolean identities iteratively\n  let s = expr;\n  const rules: [RegExp, string][] = [\n    [/A \\+ A/g, 'A'], [/A \\* A/g, 'A'],\n    [/A \\+ 0/g, 'A'], [/A \\* 1/g, 'A'],\n    [/A \\* 0/g, '0'], [/A \\+ 1/g, '1'],\n    [/A \\+ A'/g, '1'], [/A \\* A'/g, '0'],\n    [/A''/g, 'A'],\n  ];\n  for (let i = 0; i < 10; i++) for (const [pattern, repl] of rules) s = s.replace(pattern, repl);\n  return s;\n}\nconsole.log('Simplify A+A:', simplifyExpr('A + A')); // A\n\n// --- SOP / POS Converter ---\nfunction sopFromTruthTable(vars: number, truthTable: number[]): string {\n  const terms: string[] = [];\n  for (let i = 0; i < truthTable.length; i++) {\n    if (truthTable[i] === 1) {\n      const term: string[] = [];\n      for (let j = 0; j < vars; j++) {\n        const bit = (i >> (vars - 1 - j)) & 1;\n        term.push(bit ? `x${j+1}` : `x${j+1}'`);\n      }\n      terms.push(term.join(''));\n    }\n  }\n  return terms.join(' + ') || '0';\n}\n// XOR truth table: x1 ? x2\nconst xorTT = [0, 1, 1, 0];\nconsole.log('XOR SOP:', sopFromTruthTable(2, xorTT)); // x1'x2 + x1x2'\n\n// --- Logic Circuit Simulator ---\nfunction halfAdder(a: Bit, b: Bit): { sum: Bit; carry: Bit } {\n  return { sum: XOR(a, b), carry: AND(a, b) };\n}\nfunction fullAdder(a: Bit, b: Bit, cin: Bit): { sum: Bit; cout: Bit } {\n  const ha1 = halfAdder(a, b);\n  const ha2 = halfAdder(ha1.sum, cin);\n  return { sum: ha2.sum, cout: OR(ha1.carry, ha2.carry) };\n}\nconsole.log('Half adder (1,1):', halfAdder(1, 1)); // {sum:0, carry:1}\nconsole.log('Full adder (1,1,0):', fullAdder(1, 1, 0)); // {sum:0, cout:1}\n\n// --- 4-bit Ripple Carry Adder ---\nfunction rippleCarry4(a: Bit[], b: Bit[]): { sum: Bit[]; cout: Bit } {\n  let carry: Bit = 0;\n  const sum: Bit[] = [];\n  for (let i = 3; i >= 0; i--) {\n    const fa = fullAdder(a[i], b[i], carry);\n    sum.unshift(fa.sum);\n    carry = fa.cout;\n  }\n  return { sum, cout: carry };\n}\nconst A: Bit[] = [1, 0, 1, 0]; // 10\nconst B: Bit[] = [0, 1, 1, 0]; // 6\nconsole.log('4-bit add 1010+0110:', rippleCarry4(A, B)); // {sum:[1,0,0,0], cout:0} = 8\n\n// --- Minterm/Maxterm Counter ---\nfunction mintermCount(n: number): number { return 1 << n; }\nconsole.log('Minterms for 3 vars:', mintermCount(3)); // 8\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// --- Boolean Expression Evaluator ---\nfunction evalExpr(expr: string, vars: Record<string, boolean>): boolean {\n  const tokens = expr.match(/[A-Za-z]+|[??????]|[()]/g) ?? [];\n  const prec: Record<string, number> = { '?': 4, '?': 3, '?': 2, '?': 1, '?': 1, '?': 1 };\n  const output: string[] = [], ops: string[] = [];\n  for (const t of tokens) {\n    if (t in vars) output.push(t);\n    else if (t === '(') ops.push(t);\n    else if (t === ')') { while (ops.length && ops[ops.length-1] !== '(') output.push(ops.pop()!); ops.pop(); }\n    else { while (ops.length && ops[ops.length-1] !== '(' && (prec[ops[ops.length-1]] ?? 0) >= (prec[t] ?? 0)) output.push(ops.pop()!); ops.push(t); }\n  }\n  while (ops.length) output.push(ops.pop()!);\n  const stack: boolean[] = [];\n  for (const t of output) {\n    if (t in vars) stack.push(vars[t]);\n    else if (t === '?') stack.push(!stack.pop()!);\n    else { const b = stack.pop()!, a = stack.pop()!;\n      if (t === '?') stack.push(a && b);\n      else if (t === '?') stack.push(a || b);\n      else if (t === '?') stack.push(!a || b);\n      else if (t === '?') stack.push(a === b);\n      else if (t === '?') stack.push(a !== b);\n    }\n  }\n  return stack[0];\n}\nconsole.log('(p ? q) ? r:', evalExpr('(p ? q) ? r', {p:true, q:true, r:false}));\n\n// --- DNF/CNF Converter (from truth table) ---\nfunction truthTableToForm(t: boolean[][], form: 'dnf' | 'cnf'): string {\n  const vars = ['p', 'q', 'r'];\n  if (form === 'dnf')\n    return t.filter(r => r[r.length-1]).map(r =>\n      r.slice(0,-1).map((v, i) => (v ? '' : '?') + vars[i]).join('?')).join(' ? ');\n  return t.filter(r => !r[r.length-1]).map(r =>\n    r.slice(0,-1).map((v, i) => (v ? '?' : '') + vars[i]).join('?')).join(' ? ');\n}\n// p ? q truth table\nconst xorTTbl: boolean[][] = [[1,1,0],[1,0,1],[0,1,1],[0,0,0]];\nconsole.log('\\nXOR DNF:', truthTableToForm(xorTTbl, 'dnf'));\nconsole.log('XOR CNF:', truthTableToForm(xorTTbl, 'cnf'));\n\n// --- Satisfiability Checker (naive, 3 vars) ---\nfunction isSatisfiable(expr: (v: boolean[]) => boolean, vars: number): boolean {\n  for (let i = 0; i < (1 << vars); i++) {\n    const vals: boolean[] = [];\n    for (let j = vars - 1; j >= 0; j--) vals.push(Boolean(i & (1 << j)));\n    if (expr(vals)) return true;\n  }\n  return false;\n}\nconst unsat = (v: boolean[]) => v[0] && !v[0];\nconsole.log('\\np ? ?p satisfiable:', isSatisfiable(unsat, 1));\n\n// --- Boolean Function Minimization (Quine-McCluskey helper) ---\nfunction binaryRep(n: number, bits: number): string {\n  return n.toString(2).padStart(bits, '0');\n}\nfunction combineTerms(a: string, b: string): string | null {\n  let diff = -1;\n  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) { if (diff !== -1) return null; diff = i; }\n  if (diff === -1) return null;\n  return a.slice(0, diff) + '-' + a.slice(diff + 1);\n}\nconst minterms = [0, 1, 2, 5, 7]; // for 3 vars\nconst bits = 3;\nconsole.log('\\nMinterms:', minterms.map(m => binaryRep(m, bits)).join(', '));\n// First-level combination\nconst combined = new Set<string>();\nfor (let i = 0; i < minterms.length; i++)\n  for (let j = i + 1; j < minterms.length; j++) {\n    const c = combineTerms(binaryRep(minterms[i], bits), binaryRep(minterms[j], bits));\n    if (c) combined.add(c);\n  }\nconsole.log('Combined (1st pass):', [...combined].join(', '));\n\n// --- XOR/XNOR Gate Simulation ---\nfunction xorGate(a: boolean, b: boolean): boolean { return a !== b; }\nfunction xnorGate(a: boolean, b: boolean): boolean { return a === b; }\nfunction halfAdder(a: boolean, b: boolean): { sum: boolean; carry: boolean } {\n  return { sum: xorGate(a, b), carry: a && b };\n}\nconst ha = halfAdder(true, true);\nconsole.log('\\nHalf adder (1+1): sum=', ha.sum, 'carry=', ha.carry);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// boolean\n// sets-graphs-probability implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'boolean', data: { topic: 'sets-graphs-probability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// boolean - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'discrete-math demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'discrete-mathematics', chapter: 'boolean' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('discrete-math'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Boolean algebra is the algebraic foundation of digital logic, operating on ${0,1}$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Key identities: idempotent, domination, absorption, involution, De Morgan."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Duality: swapping $+$ and $\\cdot$, $0$ and $1$, yields a valid dual identity."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Boolean functions are represented by truth tables, SOP, or POS expressions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR) implement Boolean operations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NAND and NOR are universal; any function can be built from just NAND gates."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimization reduces circuit complexity via K-maps or Quine-McCluskey."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simplify before building"
        }), " ? a minimized expression means fewer gates, less power, and less cost."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NAND is universal"
        }), " ? any circuit can be implemented using only NAND gates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Don't cares are your friend"
        }), " ? use them to form larger K-map groups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "De Morgan transforms circuit types"
        }), " ? use it to convert AND-OR to NAND-NAND or OR-AND to NOR-NOR."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K-maps work up to 4 variables"
        }), " ? for more, use Quine-McCluskey algorithmically."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "126-boolean-function-implementations-in-typescript",
      children: "12.6 Boolean Function Implementations in TypeScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type BooleanFunc = (inputs: boolean[]) => boolean;\n\nfunction evaluateSOP(\n  minterms: number[][],\n  inputs: boolean[]\n): boolean {\n  return minterms.some(term =>\n    term.every((lit, i) => lit === 1 ? inputs[i] : !inputs[i])\n  );\n}\n\nfunction evaluatePOS(\n  maxterms: number[][],\n  inputs: boolean[]\n): boolean {\n  return maxterms.every(term =>\n    term.some((lit, i) => lit === 1 ? inputs[i] : !inputs[i])\n  );\n}\n\nfunction truthTable(func: BooleanFunc, n: number): boolean[][] {\n  const table: boolean[][] = [];\n  for (let i = 0; i < (1 << n); i++) {\n    const inputs: boolean[] = [];\n    for (let j = n - 1; j >= 0; j--) {\n      inputs.push(Boolean((i >> j) & 1));\n    }\n    table.push([...inputs, func(inputs)]);\n  }\n  return table;\n}\n\n// XOR: a ? b = a'b + ab'\nconst xor: BooleanFunc = ([a, b]) => (a !== b);\nconst xorTable = truthTable(xor, 2);\nconsole.table(xorTable); // 00?0, 01?1, 10?1, 11?0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "127-k-map-minimization-algorithm",
      children: "12.7 K-Map Minimization Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Karnaugh maps"
      }), " provide a visual method for minimizing Boolean expressions with up to 6 variables."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function kmap2var(minterms: number[]): string {\n  const grid = [\n    [minterms.includes(0), minterms.includes(1)],\n    [minterms.includes(2), minterms.includes(3)]\n  ];\n  const terms: string[] = [];\n\n  // Check for whole row/column coverage\n  if (grid[0][0] && grid[0][1]) terms.push(\"a'\");\n  if (grid[1][0] && grid[1][1]) terms.push(\"a\");\n  if (grid[0][0] && grid[1][0]) terms.push(\"b'\");\n  if (grid[0][1] && grid[1][1]) terms.push(\"b\");\n\n  // Single cells not covered\n  const vars = [\"a\", \"b\"];\n  for (let i = 0; i < 2; i++) {\n    for (let j = 0; j < 2; j++) {\n      if (grid[i][j] && !terms.some(t => t.includes(vars[0]) || t.includes(vars[1]))) {\n        terms.push(`${i === 0 ? \"a'\" : \"a\"}${j === 0 ? \"b'\" : \"b\"}`);\n      }\n    }\n  }\n  return terms.join(\" + \") || \"0\";\n}\n\n// Example: f(a,b) = Sm(0,1,3) = a'b' + a'b + ab = a' + b\nconsole.log(kmap2var([0, 1, 3])); // a' + b\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4-variable K-map grouping rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Groups must be rectangular and contain $2^k$ cells."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Groups wrap around edges and corners."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each group corresponds to an implicant where variables are constant."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose the minimum number of largest possible groups."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"K-map for f=Sm(0,1,3,4,7,8,12,15)\"\n        A[\"ab\\cd 00 01 11 10\"]\n        A --> B[\"00: 1 1 0 1\"]\n        A --> C[\"01: 0 0 1 0\"]\n        A --> D[\"11: 1 0 1 0\"]\n        A --> E[\"10: 1 0 0 0\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "128-quine-mccluskey-algorithm",
      children: "12.8 Quine-McCluskey Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quine-McCluskey"
      }), " algorithm systematically minimizes Boolean functions with any number of variables."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function quineMcCluskey(minterms: number[], n: number): string[] {\n  // Step 1: Group minterms by number of 1s\n  const groups: Map<number, number[]> = new Map();\n  for (const m of minterms) {\n    const ones = m.toString(2).padStart(n, '0').split('1').length - 1;\n    if (!groups.has(ones)) groups.set(ones, []);\n    groups.get(ones)!.push(m);\n  }\n\n  // Step 2: Combine adjacent groups\n  const combined = new Set<number>();\n  const primes: string[] = [];\n  const groupKeys = [...groups.keys()].sort();\n\n  for (let i = 0; i < groupKeys.length - 1; i++) {\n    const g1 = groups.get(groupKeys[i])!;\n    const g2 = groups.get(groupKeys[i + 1])!;\n    for (const a of g1) {\n      for (const b of g2) {\n        const diff = a ^ b;\n        if ((diff & (diff - 1)) === 0) { // power of 2\n          combined.add(a);\n          combined.add(b);\n          const merged = a & (b ^ diff);\n          const bitStr = merged.toString(2).padStart(n, '0');\n          const dashPos = Math.log2(diff);\n          const term = bitStr.split('').map((c, idx) =>\n            idx === n - 1 - dashPos ? '-' : c\n          ).join('');\n          if (!primes.includes(term)) primes.push(term);\n        }\n      }\n    }\n  }\n\n  return primes;\n}\n\n// Minimize f(a,b,c) = Sm(0,2,5,7)\nconst primes = quineMcCluskey([0, 2, 5, 7], 3);\nconsole.log(primes);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "129-logic-gate-implementation",
      children: "12.9 Logic Gate Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Universal gates"
      }), " (NAND, NOR) can implement any Boolean function."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function nand(a: boolean, b: boolean): boolean { return !(a && b); }\nfunction nor(a: boolean, b: boolean): boolean { return !(a || b); }\n\n// NOT using NAND\nfunction notNAND(a: boolean): boolean { return nand(a, a); }\n\n// AND using NAND\nfunction andNAND(a: boolean, b: boolean): boolean {\n  const y = nand(a, b);\n  return nand(y, y);\n}\n\n// OR using NAND\nfunction orNAND(a: boolean, b: boolean): boolean {\n  return nand(nand(a, a), nand(b, b));\n}\n\n// XOR using NAND gates (4 NAND gates)\nfunction xorNAND(a: boolean, b: boolean): boolean {\n  const w1 = nand(a, b);\n  const w2 = nand(a, w1);\n  const w3 = nand(b, w1);\n  return nand(w2, w3);\n}\n\nconsole.log(xorNAND(true, false)); // true\nconsole.log(xorNAND(false, true)); // true\nconsole.log(xorNAND(true, true));  // false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1210-boolean-algebra-in-circuit-design",
      children: "12.10 Boolean Algebra in Circuit Design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 12.6"
      }), " (Full adder implementation). A full adder sums three bits ($A, B, C_\\text{in}$) producing sum $S$ and carry $C_\\text{out}$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$S = A \\oplus B \\oplus C_\\text{in}$$\n$$C_\\text{out} = AB + AC_\\text{in} + BC_\\text{in}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function fullAdder(A: boolean, B: boolean, Cin: boolean): { S: boolean; Cout: boolean } {\n  return {\n    S: A !== B !== Cin,\n    Cout: (A && B) || (A && Cin) || (B && Cin)\n  };\n}\n\nfunction fourBitAdder(A: boolean[], B: boolean[]): { S: boolean[]; Cout: boolean } {\n  const S: boolean[] = [];\n  let Cin = false;\n  for (let i = 3; i >= 0; i--) {\n    const result = fullAdder(A[i], B[i], Cin);\n    S[i] = result.S;\n    Cin = result.Cout;\n  }\n  return { S, Cout: Cin };\n}\n\n// 5 + 3 = 8: 0101 + 0011 = 1000\nconst A = [false, true, false, true]; // 0101\nconst B = [false, false, true, true]; // 0011\nconsole.log(fourBitAdder(A, B)); // S=[1,0,0,0], Cout=false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof 12.3 (De Morgan's laws in Boolean algebra)."
      }), " $\\overline{x + y} = \\overline{x} \\cdot \\overline{y}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof by truth table."
      }), " For all $(x, y) \\in {0, 1}^2$, both sides produce the same output: $x+y$ is 1 except when $x=y=0$; complement gives 1 only when $x=y=0$, same as $\\overline{x} \\cdot \\overline{y}$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Simplify $f(a,b,c) = a'bc + ab'c + abc' + abc$ using a K-map."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show that NOR is also a universal gate by expressing NOT, AND, and OR using only NOR gates."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a 4-to-1 multiplexer using only NAND gates."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Write a TypeScript function ", (0,jsx_runtime.jsx)(_components.code, {
            children: "booleanFunctionToSOP"
          }), " that converts any truth table (array of input/output pairs) to SOP form."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove that the dual of any Boolean algebra identity is also an identity."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State De Morgan's laws for Boolean algebra."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the dual of $x \\cdot (y + z')$?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How many Boolean functions exist for 4 variables?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between SOP and POS?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List three Boolean algebra identities."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Simplify $f(x,y) = x'y + xy + xy'$ using Boolean identities."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use a K-map to minimize $f(w,x,y,z) = \\sum m(0,1,3,4,7,8,12,15)$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement XOR using only NAND gates."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write the SOP expression for $f(a,b,c) = 1$ when the binary input represents an odd number."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Convert the expression $(x + y')(y + z')$ to SOP form."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a 2-to-1 multiplexer using logic gates: $f = s' \\cdot A + s \\cdot B$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use Quine-McCluskey to minimize $f(w,x,y,z) = \\sum m(0,2,4,6,8,10,12,14)$."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove that every Boolean function can be expressed using only NAND gates."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show that the set ${\\text{AND}, \\text{NOT}}$ is universal but the set ${\\text{AND}, \\text{OR}}$ is not."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a 4-bit ripple-carry adder using full adders. Write the TypeScript implementation and compute the gate count."
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