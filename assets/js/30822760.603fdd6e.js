"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[90447],{

/***/ 84717
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_discrete_mathematics_03_predicates_md_308_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-discrete-mathematics-03-predicates-md-308.json
const site_docs_courses_discrete_mathematics_03_predicates_md_308_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/discrete-mathematics/03-predicates","title":"Chapter 3: Predicates and Quantifiers","description":"Previous Logic | Next Proof Techniques","source":"@site/docs/courses/discrete-mathematics/03-predicates.md","sourceDirName":"courses/discrete-mathematics","slug":"/discrete-mathematics/03-predicates","permalink":"/ai-engineering-journey/discrete-mathematics/03-predicates","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"03-predicates","slug":"/discrete-mathematics/03-predicates","title":"Chapter 3: Predicates and Quantifiers","sidebar_label":"Chapter 3: Predicates and Quantifiers","sidebar_position":3},"sidebar":"course-discrete-mathematics","previous":{"title":"Chapter 2: Logic","permalink":"/ai-engineering-journey/discrete-mathematics/02-logic"},"next":{"title":"Chapter 4: Proof Techniques","permalink":"/ai-engineering-journey/discrete-mathematics/04-proofs"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/discrete-mathematics/03-predicates.md


const frontMatter = {
	id: '03-predicates',
	slug: '/discrete-mathematics/03-predicates',
	title: 'Chapter 3: Predicates and Quantifiers',
	sidebar_label: 'Chapter 3: Predicates and Quantifiers',
	sidebar_position: 3
};
const contentTitle = 'Chapter 3: Predicates and Quantifiers';

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
  "value": "3.1 Predicates",
  "id": "31-predicates",
  "level": 3
}, {
  "value": "3.2 Quantifiers",
  "id": "32-quantifiers",
  "level": 3
}, {
  "value": "3.3 Translation between English and Logic",
  "id": "33-translation-between-english-and-logic",
  "level": 3
}, {
  "value": "3.4 Negating Quantified Statements",
  "id": "34-negating-quantified-statements",
  "level": 3
}, {
  "value": "3.5 Nested Quantifiers",
  "id": "35-nested-quantifiers",
  "level": 3
}, {
  "value": "3.6 Negating Nested Quantifiers",
  "id": "36-negating-nested-quantifiers",
  "level": 3
}, {
  "value": "3.7 Uniqueness Quantifier",
  "id": "37-uniqueness-quantifier",
  "level": 3
}, {
  "value": "3.8 Validity of Arguments with Quantifiers",
  "id": "38-validity-of-arguments-with-quantifiers",
  "level": 3
}, {
  "value": "3.9 Prenex Normal Form",
  "id": "39-prenex-normal-form",
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
  "value": "3.6 Quantifier Evaluation in TypeScript",
  "id": "36-quantifier-evaluation-in-typescript",
  "level": 3
}, {
  "value": "3.7 Negation of Quantified Statements ? Normalization",
  "id": "37-negation-of-quantified-statements--normalization",
  "level": 3
}, {
  "value": "3.8 Prenex Normal Form and Skolemization",
  "id": "38-prenex-normal-form-and-skolemization",
  "level": 3
}, {
  "value": "3.9 First-Order Logic in Practice",
  "id": "39-first-order-logic-in-practice",
  "level": 3
}, {
  "value": "3.10 Inference with Quantifiers",
  "id": "310-inference-with-quantifiers",
  "level": 3
}, {
  "value": "3.11 Limitations of First-Order Logic",
  "id": "311-limitations-of-first-order-logic",
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
        id: "chapter-3-predicates-and-quantifiers",
        children: "Chapter 3: Predicates and Quantifiers"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/discrete-mathematics/02-logic",
          children: "Chapter 2: Logic"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/discrete-mathematics/04-proofs",
          children: "Chapter 4: Proof Techniques"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/discrete-mathematics/03-predicates.png",
        alt: "Predicates and Quantifiers Overview"
      })
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
        href: "../../assets/images/lessons/discrete-mathematics/03-predicates/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/discrete-mathematics/03-predicates/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/discrete-mathematics/03-predicates/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/discrete-mathematics/03-predicates/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/discrete-mathematics/03-predicates/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/discrete-mathematics/03-predicates/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define predicates and their truth sets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use universal ($\\forall$) and existential ($\\exists$) quantifiers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Translate between English statements and quantified logical expressions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Negate quantified statements correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle nested quantifiers of arbitrary depth"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine the truth value of quantified statements over different domains"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply inference rules for quantified statements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the limitations and power of first-order logic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Predicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$P(x)$ is a statement whose truth depends on $x$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predicates become propositions when variables are assigned specific values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Universal Quantifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\forall x; P(x)$ means \"for all $x$, $P(x)$\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A single counterexample disproves a universal claim"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Existential Quantifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\exists x; P(x)$ means \"there exists $x$ such that $P(x)$\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proving existence requires just one example"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Translation Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"All A are B\" uses $\\rightarrow$; \"Some A are B\" uses $\\land$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The choice of connective is critical for correct translation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantifier Negation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\neg \\forall \\equiv \\exists \\neg$ and $\\neg \\exists \\equiv \\forall \\neg$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negating a quantifier flips it and pushes negation inward"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested Quantifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\forall x; \\exists y$ is NOT the same as $\\exists y; \\forall x$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order matters ? reversing quantifiers changes meaning completely"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uniqueness Quantifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\exists!x; P(x)$ means exactly one $x$ satisfies $P(x)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Useful for expressing \"exactly one\" in specifications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inference Rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal instantiation, existential generalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formal reasoning with quantified statements"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Predicates and Truth Sets] --> B[Universal Quantifier]\n    A --> C[Existential Quantifier]\n    B --> D[English-Logic Translation]\n    C --> D\n    D --> E[Negating Quantified Statements]\n    E --> F[Nested Quantifiers]\n    F --> G[Uniqueness Quantifier]\n    G --> H[Validity and Inference Rules]\n    H --> I[First-Order Logic Applications]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-predicates",
      children: "3.1 Predicates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "predicate"
      }), " $P(x)$ is a statement whose truth depends on the value of the variable $x$. The domain of $x$ is the set of values it may take. Once $x$ is assigned a specific value, $P(x)$ becomes a proposition."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example: $P(x)$ = \"$x$ is prime\". When $x = 2$, $P(2)$ is true; when $x = 4$, $P(4)$ is false."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "truth set"
      }), " of a predicate $P(x)$ over domain $D$ is:\n$${x \\in D \\mid P(x)}$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A predicate can have multiple variables: $Q(x, y)$ = \"$x$ loves $y$\". The truth set becomes a subset of $D_1 \\times D_2$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A predicate is like a function that returns a truth value ? it only becomes a proposition when its variable is bound to a specific value."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-quantifiers",
      children: "3.2 Quantifiers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Universal quantifier:"
      }), " $\\forall x; P(x)$ means \"$P(x)$ is true for all $x$ in the domain.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Existential quantifier:"
      }), " $\\exists x; P(x)$ means \"there exists at least one $x$ in the domain such that $P(x)$ is true.\""]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Statement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "True when"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "False when"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\forall x; P(x)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$P(x)$ true for every element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "at least one counterexample"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\exists x; P(x)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "at least one element makes $P(x)$ true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$P(x)$ false for all elements"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Universal\n        direction TB\n        A1[?x Px]\n        A2[All elements satisfy P]\n    end\n    subgraph Existential\n        direction TB\n        B1[?x Px]\n        B2[At least one element satisfies P]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " $\\forall$ requires all elements to satisfy the condition; $\\exists$ requires at least one ? they are duals via negation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-translation-between-english-and-logic",
      children: "3.3 Translation between English and Logic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "English often uses implicit quantifiers. Careful translation requires identifying the domain and quantifier type."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"All cats are mammals\": $\\forall x;(\\text{Cat}(x) \\rightarrow \\text{Mammal}(x))$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Some cats are black\": $\\exists x;(\\text{Cat}(x) \\land \\text{Black}(x))$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"No cats are fish\": $\\forall x;(\\text{Cat}(x) \\rightarrow \\neg\\text{Fish}(x))$ or $\\neg\\exists x;(\\text{Cat}(x) \\land \\text{Fish}(x))$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Not all cats are black\": $\\neg\\forall x;(\\text{Cat}(x) \\rightarrow \\text{Black}(x))$ or $\\exists x;(\\text{Cat}(x) \\land \\neg\\text{Black}(x))$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Every student has a computer\": $\\forall x;(\\text{Student}(x) \\rightarrow \\exists y;(\\text{Computer}(y) \\land \\text{Owns}(x, y)))$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note the pattern: \"all\" uses $\\rightarrow$; \"some\" uses $\\land$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common translation errors:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\forall x;(\\text{Cat}(x) \\land \\text{Black}(x))$ means \"everything is a black cat\" ? wrong!"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\exists x;(\\text{Cat}(x) \\rightarrow \\text{Black}(x))$ is trivially true if any non-cat exists ? wrong!"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Translate \"all A are B\" as $\\forall x (A(x) \\rightarrow B(x))$ and \"some A are B\" as $\\exists x (A(x) \\land B(x))$ ? mixing these up is the most common quantifier mistake."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-negating-quantified-statements",
      children: "3.4 Negating Quantified Statements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 3.1 (Quantifier Negation)."
      }), "\n$$\\neg \\forall x; P(x) \\equiv \\exists x; \\neg P(x)$$\n$$\\neg \\exists x; P(x) \\equiv \\forall x; \\neg P(x)$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In words: the negation of \"all are true\" is \"at least one is false\". The negation of \"some are true\" is \"none are true\"."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function negateUniversal<T>(domain: T[], predicate: (x: T) => boolean): boolean {\n  // ??x P(x) = ?x ?P(x)\n  return domain.some(x => !predicate(x));\n}\n\nfunction negateExistential<T>(domain: T[], predicate: (x: T) => boolean): boolean {\n  // ??x P(x) = ?x ?P(x)\n  return domain.every(x => !predicate(x));\n}\n\nconst nums = [1, 2, 3, 4, 5];\nconsole.log(negateUniversal(nums, x => x > 0)); // false (?x x>0 is true, so negation is false)\nconsole.log(negateExistential(nums, x => x > 10)); // true (no element > 10)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Negating a quantified statement flips every $\\forall$ to $\\exists$ and vice versa, then pushes the negation past all quantifiers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-nested-quantifiers",
      children: "3.5 Nested Quantifiers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When quantifiers appear within each other, order matters."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Statement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\forall x; \\forall y; P(x,y)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$P(x,y)$ holds for all pairs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\forall x; \\exists y; P(x,y)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For every $x$, there exists some $y$ (may depend on $x$)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\exists x; \\forall y; P(x,y)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "There exists an $x$ that works for all $y$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\exists x; \\exists y; P(x,y)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "There exists a pair $(x,y)$ satisfying $P$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important:"
      }), " $\\forall x; \\exists y; P(x,y)$ and $\\exists y; \\forall x; P(x,y)$ are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " equivalent."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example over integers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\forall x; \\exists y; (y = x + 1)$: TRUE ? for each $x$, choose $y = x + 1$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\exists y; \\forall x; (y = x + 1)$: FALSE ? no single $y$ equals $x + 1$ for all $x$."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function checkForallExists(domain: number[]): boolean {\n  // ?x ?y (y > x)\n  return domain.every(x => domain.some(y => y > x));\n}\n\nfunction checkExistsForall(domain: number[]): boolean {\n  // ?y ?x (y > x)\n  return domain.some(y => domain.every(x => y > x));\n}\n\nconst nums = [1, 2, 3];\nconsole.log(checkForallExists(nums)); // false (3 is not less than any element)\nconsole.log(checkExistsForall(nums)); // false (no single element > all others in [1,2,3])\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " With nested quantifiers, order determines meaning ? $\\forall x; \\exists y$ allows $y$ to depend on $x$, while $\\exists y; \\forall x$ requires a single $y$ that works for all $x$."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-negating-nested-quantifiers",
      children: "3.6 Negating Nested Quantifiers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apply quantifier negation rules sequentially, from left to right:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\neg \\forall x; \\exists y; P(x,y) \\equiv \\exists x; \\neg \\exists y; P(x,y) \\equiv \\exists x; \\forall y; \\neg P(x,y)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For three quantifiers:\n$$\\neg \\forall x; \\exists y; \\forall z; P(x,y,z) \\equiv \\exists x; \\forall y; \\exists z; \\neg P(x,y,z)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Procedure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flip $\\forall \\leftrightarrow \\exists$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push negation past each quantifier."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Negate the innermost predicate."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Negating nested quantifiers is mechanical ? flip each quantifier and push the negation through, working left to right."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "37-uniqueness-quantifier",
      children: "3.7 Uniqueness Quantifier"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "uniqueness quantifier"
      }), " $\\exists!x; P(x)$ means \"there exists exactly one $x$ such that $P(x)$.\" It can be expressed using $\\forall$ and $\\exists$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\exists!x; P(x) \\equiv \\exists x; (P(x) \\land \\forall y; (P(y) \\rightarrow y = x))$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This says: there is some $x$ satisfying $P$, and any $y$ satisfying $P$ must equal $x$."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function existsUnique<T>(domain: T[], predicate: (x: T) => boolean): boolean {\n  const satisfying = domain.filter(predicate);\n  return satisfying.length === 1;\n}\n\nconsole.log(existsUnique([1, 2, 3, 4, 5], x => x % 2 === 0)); // false (2 and 4)\nconsole.log(existsUnique([1, 2, 3, 4, 5], x => x === 3));      // true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " $\\exists!x; P(x)$ ? \"there exists exactly one\" ? is shorthand for existence plus uniqueness."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "38-validity-of-arguments-with-quantifiers",
      children: "3.8 Validity of Arguments with Quantifiers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An argument form with quantifiers is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "valid"
      }), " iff whenever all premises are true, the conclusion is also true. Inference rules for quantifiers include:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Universal instantiation:"
        }), " $\\forall x; P(x) \\implies P(c)$ for any particular $c$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Universal generalization:"
        }), " $P(c)$ for arbitrary $c \\implies \\forall x; P(x)$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Existential instantiation:"
        }), " $\\exists x; P(x) \\implies P(c)$ for some new $c$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Existential generalization:"
        }), " $P(c) \\implies \\exists x; P(x)$"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example (syllogism):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All humans are mortal. $\\forall x; (H(x) \\rightarrow M(x))$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Socrates is a human. $H(s)$\nTherefore: Socrates is mortal. $M(s)$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof."
      }), " From (1) by universal instantiation: $H(s) \\rightarrow M(s)$. From (2): $H(s)$. By modus ponens: $M(s)$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Universal instantiation (from \"all\" to \"any particular\") and existential generalization (from \"a specific example\" to \"some\") are the workhorse inference rules for quantified arguments."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "39-prenex-normal-form",
      children: "3.9 Prenex Normal Form"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A formula is in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "prenex normal form"
      }), " if all quantifiers appear at the front (prefix) followed by a quantifier-free matrix (body)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Conversion to prenex normal form:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eliminate $\\rightarrow$ and $\\leftrightarrow$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push negations inward (using quantifier negation)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rename bound variables to avoid conflicts."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move all quantifiers to the front."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Convert $\\neg\\forall x; (P(x) \\rightarrow \\exists y; Q(x,y))$ to prenex form."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 1: $\\neg\\forall x; (\\neg P(x) \\lor \\exists y; Q(x,y))$\nStep 2: $\\exists x; \\neg(\\neg P(x) \\lor \\exists y; Q(x,y)) \\equiv \\exists x; (P(x) \\land \\neg\\exists y; Q(x,y))$\nStep 3: $\\exists x; (P(x) \\land \\forall y; \\neg Q(x,y))$\nStep 4: $\\exists x; \\forall y; (P(x) \\land \\neg Q(x,y))$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " When translating \"every student has a computer,\" use $\\forall x (S(x) \\rightarrow C(x))$ ? NOT $\\forall x (S(x) \\land C(x))$, which incorrectly claims everyone is a student with a computer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " To disprove a universal statement $\\forall x; P(x)$, find exactly one counterexample ? that's sufficient and often easier than attempting a proof."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " The statement \"some A are B\" translates to $\\exists x (A(x) \\land B(x))$, NOT $\\exists x (A(x) \\rightarrow B(x))$ ? the latter would be trivially true if there is any element that is not A."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Existential instantiation introduces a NEW constant symbol, not one already in use. This prevents incorrect deductions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Predicate $P(x)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Statement whose truth depends on $x$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not a proposition until $x$ is bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expressing properties of elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\forall x; P(x)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$P(x)$ holds for all $x$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal quantifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"All,\" \"every,\" \"each\" statements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\exists x; P(x)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$P(x)$ holds for some $x$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Existential quantifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Some,\" \"there exists,\" \"at least one\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\forall x; \\exists y; P(x,y)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For each $x$, some $y$ works"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$y$ can depend on $x$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Every student has an advisor\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\exists y; \\forall x; P(x,y)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One $y$ works for all $x$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$y$ is independent of $x$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"There is a universal advisor\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\exists!x; P(x)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exactly one $x$ satisfies $P$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Existence + uniqueness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"There is exactly one solution\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\neg \\forall x; P(x)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalent to $\\exists x; \\neg P(x)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flips quantifier, negates predicate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disproving universal claims"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prenex Normal Form"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All quantifiers at front"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard form for first-order logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated theorem proving"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Statement"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\forall$ Negation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\neg \\forall x; P(x) \\equiv \\exists x; \\neg P(x)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\exists$ Negation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\neg \\exists x; P(x) \\equiv \\forall x; \\neg P(x)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Universal Instantiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\forall x; P(x) \\implies P(c)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Universal Generalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$P(c)$ (arbitrary $c$) $\\implies \\forall x; P(x)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Existential Instantiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\exists x; P(x) \\implies P(c)$ (new $c$)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Existential Generalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$P(c) \\implies \\exists x; P(x)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"All A are B\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\forall x (A(x) \\rightarrow B(x))$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"Some A are B\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\exists x (A(x) \\land B(x))$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"No A are B\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\forall x (A(x) \\rightarrow \\neg B(x))$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uniqueness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\exists!x; P(x) \\equiv \\exists x (P(x) \\land \\forall y (P(y) \\rightarrow y = x))$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How Predicates and Quantifiers Apply"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL queries: WHERE = predicate, EXISTS = $\\exists$, ALL = $\\forall$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Programming Languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type systems use $\\forall$ for polymorphic types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Software Verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formal specifications use quantified logic to assert invariants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mathematics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Definitions of limits, continuity, and convergence use nested quantifiers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI and Knowledge Representation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First-order logic is the foundation of many knowledge bases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Networking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packet filtering rules use quantified conditions on packet properties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Formal Methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model checkers and theorem provers use quantified logic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The negation of $\\forall x; (P(x) \\rightarrow Q(x))$ is:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $\\forall x; (P(x) \\land \\neg Q(x))$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $\\exists x; (P(x) \\land \\neg Q(x))$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $\\exists x; (\\neg P(x) \\land Q(x))$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $\\forall x; (\\neg P(x) \\rightarrow Q(x))$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** $\\neg \\forall x (P(x) \\rightarrow Q(x)) \\equiv \\exists x \\neg(P(x) \\rightarrow Q(x)) \\equiv \\exists x (P(x) \\land \\neg Q(x))$"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which statement is true when the domain is integers?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $\\forall x; \\exists y; (y = x + 1)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $\\exists y; \\forall x; (y = x + 1)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $\\forall x; \\forall y; (x < y)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $\\exists x; \\forall y; (x > y)$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**A)** For every integer $x$, we can pick $y = x + 1$ ? this is always true over $\\mathbb{Z}$."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "\"Every cat is a mammal\" translates to:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $\\forall x; (Cat(x) \\land Mammal(x))$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $\\exists x; (Cat(x) \\rightarrow Mammal(x))$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $\\forall x; (Cat(x) \\rightarrow Mammal(x))$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $\\forall x; (Mammal(x) \\rightarrow Cat(x))$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** \"All A are B\" = $\\forall x (A(x) \\rightarrow B(x))$."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The prenex normal form of $\\neg \\exists x; \\forall y; P(x,y)$ is:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $\\forall x; \\exists y; \\neg P(x,y)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $\\exists x; \\forall y; \\neg P(x,y)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $\\forall x; \\forall y; \\neg P(x,y)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $\\exists x; \\exists y; \\neg P(x,y)$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**A)** $\\neg \\exists x\\; \\forall y\\; P(x,y) \\equiv \\forall x\\; \\neg \\forall y\\; P(x,y) \\equiv \\forall x\\; \\exists y\\; \\neg P(x,y)$."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which inference rule allows concluding $P(c)$ from $\\forall x; P(x)$?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Universal generalization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Universal instantiation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Existential generalization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Existential instantiation"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Universal instantiation: from \"all\" we can deduce \"any particular one.\""
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3.1"
      }), " (Truth value). Let domain be $\\mathbb{Z}$. Determine truth:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\forall x; (x^2 \\geq 0)$: True ? squares of integers are nonnegative."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\exists x; (x^2 = 2)$: False ? no integer squares to 2."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\forall x; \\exists y; (y = x^2)$: True ? for each $x$, we can choose $y = x^2$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\exists y; \\forall x; (y = x^2)$: False ? no single integer equals all squares."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3.2"
      }), " (Translation). Translate \"Every student in this class has taken exactly one math course.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let $S(x)$ = \"$x$ is a student in this class\", $M(x,y)$ = \"$x$ has taken math course $y$\". Then:\n$$\\forall x; \\big(S(x) \\rightarrow \\exists y; (M(x,y) \\land \\forall z; (M(x,z) \\rightarrow z = y))\\big)$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3.3"
      }), " (Negation). Negate \"All prime numbers are odd.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " Let domain be $\\mathbb{Z}^+$, $P(x)$ = \"$x$ is prime\", $O(x)$ = \"$x$ is odd\". The statement is $\\forall x; (P(x) \\rightarrow O(x))$. Negation:\n$$\\neg \\forall x; (P(x) \\rightarrow O(x)) \\equiv \\exists x; \\neg(P(x) \\rightarrow O(x)) \\equiv \\exists x; (P(x) \\land \\neg O(x))$$\nSo the negation is \"There exists a prime number that is even.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3.4"
      }), " (Nested negation). Negate $\\forall x; \\exists y; \\forall z; P(x,y,z)$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " Move negation inward step by step:\n$$\\neg \\forall x; \\exists y; \\forall z; P(x,y,z)$$\n$$\\equiv \\exists x; \\neg \\exists y; \\forall z; P(x,y,z)$$\n$$\\equiv \\exists x; \\forall y; \\neg \\forall z; P(x,y,z)$$\n$$\\equiv \\exists x; \\forall y; \\exists z; \\neg P(x,y,z)$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3.5"
      }), " (Validity). Determine whether the argument is valid:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Premises:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\forall x; (P(x) \\rightarrow Q(x))$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\forall x; (Q(x) \\rightarrow R(x))$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Conclusion: $\\forall x; (P(x) \\rightarrow R(x))$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " Pick an arbitrary element $c$. From (1), $P(c) \\rightarrow Q(c)$. From (2), $Q(c) \\rightarrow R(c)$. By hypothetical syllogism (transitivity of implication), $P(c) \\rightarrow R(c)$. Since $c$ was arbitrary, $\\forall x; (P(x) \\rightarrow R(x))$ holds. Valid."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3.6"
      }), " (TypeScript quantifier simulation)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Predicate<T> = (x: T) => boolean;\n\nfunction forAll<T>(domain: T[], pred: Predicate<T>): boolean {\n  return domain.every(pred);\n}\n\nfunction exists<T>(domain: T[], pred: Predicate<T>): boolean {\n  return domain.some(pred);\n}\n\nconst people = [\n  { name: \"Alice\", age: 25 },\n  { name: \"Bob\", age: 17 },\n  { name: \"Charlie\", age: 30 },\n];\n\n// ?x (Person(x) ? Age(x) = 18)\nconsole.log(forAll(people, p => p.age >= 18)); // false (Bob is 17)\n\n// ?x (Person(x) ? Name(x) = \"Alice\")\nconsole.log(exists(people, p => p.name === \"Alice\")); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3.7"
      }), " (Prenex normal form conversion). Convert $\\forall x; P(x) \\rightarrow \\exists y; Q(y)$ to prenex normal form."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " $\\neg\\forall x; P(x) \\lor \\exists y; Q(y) \\equiv \\exists x; \\neg P(x) \\lor \\exists y; Q(y) \\equiv \\exists x; \\exists y; (\\neg P(x) \\lor Q(y))$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// --- Quantifier Evaluation ---\ntype Predicate<T> = (x: T) => boolean;\n\nfunction forAll<T>(domain: T[], p: Predicate<T>): boolean {\n  return domain.every(p);\n}\nfunction exists<T>(domain: T[], p: Predicate<T>): boolean {\n  return domain.some(p);\n}\n\nconst numbers = [1, 2, 3, 4, 5];\nconsole.log('?x > 0:', forAll(numbers, n => n > 0));  // true\nconsole.log('?x even:', exists(numbers, n => n % 2 === 0)); // true\n\n// --- Nested Quantifier Checker ---\nfunction nestedForAllExists<T, U>(\n  domainA: T[], domainB: U[],\n  p: (x: T, y: U) => boolean\n): boolean {\n  return forAll(domainA, x => exists(domainB, y => p(x, y)));\n}\n\nconst people = ['Alice', 'Bob'];\nconst items = ['Apple', 'Banana'];\nconst likes = (p: string, i: string) =>\n  (p === 'Alice' && i === 'Apple') || (p === 'Bob' && i === 'Banana');\nconsole.log('?x?y likes(x,y):', nestedForAllExists(people, items, likes)); // true\n\n// --- Quantifier Negation Converter ---\ntype QuantifiedExpr = \n  | { type: 'forall'; var: string; pred: QuantifiedExpr }\n  | { type: 'exists'; var: string; pred: QuantifiedExpr }\n  | { type: 'not'; expr: QuantifiedExpr }\n  | { type: 'pred'; name: string; arg: string };\n\nfunction negate(expr: QuantifiedExpr): QuantifiedExpr {\n  switch (expr.type) {\n    case 'forall':\n      return { type: 'exists', var: expr.var, pred: negate(expr.pred) };\n    case 'exists':\n      return { type: 'forall', var: expr.var, pred: negate(expr.pred) };\n    case 'not':\n      return expr.expr;\n    case 'pred':\n      return { type: 'not', expr };\n  }\n}\n// ??x P(x) ? ?x ?P(x)\nconst expr: QuantifiedExpr = { type: 'forall', var: 'x', pred: { type: 'pred', name: 'P', arg: 'x' } };\nconst negated = negate(expr);\nconsole.log('Negated:', JSON.stringify(negated));\n// {\"type\":\"exists\",\"var\":\"x\",\"pred\":{\"type\":\"not\",\"expr\":{\"type\":\"pred\",\"name\":\"P\",\"arg\":\"x\"}}}\n\n// --- Prenex Normal Form Converter (simplified) ---\nfunction toPrenex(expr: QuantifiedExpr): QuantifiedExpr {\n  if (expr.type === 'not') {\n    const inner = toPrenex(expr.expr);\n    if (inner.type === 'forall') return { type: 'exists', var: inner.var, pred: { type: 'not', ...toPrenex(inner.pred) } as QuantifiedExpr };\n    if (inner.type === 'exists') return { type: 'forall', var: inner.var, pred: { type: 'not', ...toPrenex(inner.pred) } as QuantifiedExpr };\n  }\n  return expr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// --- Quantifier Expansion Tester ---\nfunction forall<T>(domain: T[], pred: (x: T) => boolean): boolean {\n  return domain.every(pred);\n}\nfunction exists<T>(domain: T[], pred: (x: T) => boolean): boolean {\n  return domain.some(pred);\n}\nconst nums = [0, 1, 2, 3, 4, 5];\nconsole.log('?x?{0..5}: x=0:', forall(nums, x => x >= 0));   // true\nconsole.log('?x?{0..5}: x>4:', exists(nums, x => x > 4));     // true\nconsole.log('?x?{0..5}: x>3:', forall(nums, x => x > 3));     // false\nconsole.log('?x?{0..5}: x<0:', exists(nums, x => x < 0));     // false\n\n// --- Nested Quantifier Checker ---\nfunction nestedQuantifier<T1, T2>(\n  domain1: T1[], domain2: T2[],\n  order: 'forall-exists' | 'exists-forall' | 'forall-forall' | 'exists-exists',\n  pred: (x: T1, y: T2) => boolean): boolean {\n  if (order === 'forall-exists') return domain1.every(x => domain2.some(y => pred(x, y)));\n  if (order === 'exists-forall') return domain1.some(x => domain2.every(y => pred(x, y)));\n  if (order === 'forall-forall') return domain1.every(x => domain2.every(y => pred(x, y)));\n  return domain1.some(x => domain2.some(y => pred(x, y)));\n}\n// For every integer there exists a larger integer\nconst ints = [0, 1, 2, 3, 4, 5];\nconsole.log('\\n?x?y: y > x:', nestedQuantifier(ints, ints, 'forall-exists', (x, y) => y > x)); // true\nconsole.log('?x?y: y > x:', nestedQuantifier(ints, ints, 'exists-forall', (x, y) => y > x)); // false\n\n// --- Domain Model Checker ---\ntype DomainConstraint = { quantifier: 'forall' | 'exists', var: string, pred: (val: number) => boolean };\nfunction checkModel(domain: number[], constraints: DomainConstraint[]): boolean {\n  return constraints.every(c =>\n    c.quantifier === 'forall' ? domain.every(c.pred) : domain.some(c.pred)\n  );\n}\nconst model: DomainConstraint[] = [\n  { quantifier: 'forall', var: 'x', pred: x => x > 0 },\n  { quantifier: 'exists', var: 'y', pred: y => y === 3 }\n];\nconsole.log('\\nModel check (positives, contains 3):', checkModel([1, 2, 3], model)); // true\nconsole.log('Model check (positives, no 3):', checkModel([1, 2, 4], model));       // false\n\n// --- Predicate Transformer ---\nfunction negateQuantified<T>(domain: T[], quantifier: 'forall' | 'exists', pred: (x: T) => boolean): { quantifier: string; result: boolean } {\n  if (quantifier === 'forall') {\n    // ??x P(x) = ?x ?P(x)\n    const result = domain.some(x => !pred(x));\n    return { quantifier: '?x ?P(x)', result };\n  } else {\n    // ??x P(x) = ?x ?P(x)\n    const result = domain.every(x => !pred(x));\n    return { quantifier: '?x ?P(x)', result };\n  }\n}\nconsole.log('\\nNegate ?x (x>0) on [1,-2,3]:', negateQuantified([1, -2, 3], 'forall', x => x > 0));\nconsole.log('Negate ?x (x<0) on [1,2,3]:', negateQuantified([1, 2, 3], 'exists', x => x < 0));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// predicates\n// sets-graphs-probability implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'predicates', data: { topic: 'sets-graphs-probability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// predicates - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'discrete-math demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'discrete-mathematics', chapter: 'predicates' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('discrete-math'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Predicates are statements that depend on variables. Quantifiers $\\forall$ and $\\exists$ bind variables."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\neg \\forall x; P(x) \\equiv \\exists x; \\neg P(x)$ and $\\neg \\exists x; P(x) \\equiv \\forall x; \\neg P(x)$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nested quantifier order matters; negate from left to right."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Translation between English and logic requires careful choice of $\\rightarrow$ vs $\\land$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prenex normal form places all quantifiers at the front."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inference rules for quantifiers enable formal reasoning."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "First-order logic is strictly more expressive than propositional logic."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-quantifier-evaluation-in-typescript",
      children: "3.6 Quantifier Evaluation in TypeScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function forall<T>(domain: T[], predicate: (x: T) => boolean): boolean {\n  return domain.every(predicate);\n}\n\nfunction exists<T>(domain: T[], predicate: (x: T) => boolean): boolean {\n  return domain.some(predicate);\n}\n\nfunction evaluateQuantified(\n  domain: number[],\n  expression: string\n): { result: boolean; counterexample?: any } {\n  if (expression === \"?x (x > 0)\" && domain[0] === 1) {\n    const allPos = domain.every(x => x > 0);\n    return allPos\n      ? { result: true }\n      : { result: false, counterexample: domain.find(x => x <= 0) };\n  }\n  if (expression === \"?x (x < 0)\") {\n    const found = domain.some(x => x < 0);\n    return found\n      ? { result: true, example: domain.find(x => x < 0) }\n      : { result: false };\n  }\n  return { result: false };\n}\n\nconst domain = [-2, -1, 0, 1, 2];\nconsole.log(forall(domain, x => x > 0)); // false\nconsole.log(exists(domain, x => x < 0)); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evaluation of nested quantifiers over finite domains."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function evaluateNested(\n  domain: number[],\n  quantifiers: (\"forall\" | \"exists\")[],\n  predicate: (args: number[]) => boolean\n): boolean {\n  function recurse(vars: number[], depth: number): boolean {\n    if (depth === quantifiers.length) return predicate(vars);\n    const q = quantifiers[depth];\n    if (q === \"forall\") return domain.every(v => recurse([...vars, v], depth + 1));\n    return domain.some(v => recurse([...vars, v], depth + 1));\n  }\n  return recurse([], 0);\n}\n\n// ?x ?y (x + y = 0) over [-2, -1, 0, 1, 2]\nconst result1 = evaluateNested(\n  [-2, -1, 0, 1, 2],\n  [\"forall\", \"exists\"],\n  ([x, y]) => x + y === 0\n);\nconsole.log(result1); // true\n\n// ?y ?x (x + y = 0) ? same domain\nconst result2 = evaluateNested(\n  [-2, -1, 0, 1, 2],\n  [\"exists\", \"forall\"],\n  ([x, y]) => x + y === 0\n);\nconsole.log(result2); // false (no single y works for all x)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "37-negation-of-quantified-statements--normalization",
      children: "3.7 Negation of Quantified Statements ? Normalization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 3.3 (Quantifier Negation)."
      }), "\n$$\\neg \\forall x; P(x) \\equiv \\exists x; \\neg P(x)$$\n$$\\neg \\exists x; P(x) \\equiv \\forall x; \\neg P(x)$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function negate(formula: string): string {\n  if (formula.startsWith(\"?\")) return formula.replace(\"?\", \"?\").replace(\"P\", \"?P\");\n  if (formula.startsWith(\"?\")) return formula.replace(\"?\", \"?\").replace(\"P\", \"?P\");\n  return `?(${formula})`;\n}\n\nconsole.log(negate(\"?x P(x)\"));  // ?x ?P(x)\nconsole.log(negate(\"?x P(x)\"));  // ?x ?P(x)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "38-prenex-normal-form-and-skolemization",
      children: "3.8 Prenex Normal Form and Skolemization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 3.9 (Prenex Normal Form)."
      }), " A formula where all quantifiers appear at the front:\n$$Q_1 x_1; Q_2 x_2; \\ldots; Q_n x_n; (\\text{quantifier-free formula})$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Conversion algorithm:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eliminate $\\rightarrow$ and $\\leftrightarrow$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push negations inward using De Morgan and quantifier negation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rename bound variables to avoid capture."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move all quantifiers to the front."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Skolemization"
      }), " removes existential quantifiers by introducing Skolem constants/functions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function toPrenex(formula: string): string {\n  // ?x ?y (P(x) ? Q(y)) ? ?x ?y (?P(x) ? Q(y)) ? ?x ?y (?P(x) ? Q(y))\n  // Already in prenex form\n  return formula;\n}\n\n// Example: \"Every rational number has a multiplicative inverse if nonzero\"\n// ?x ? Q (x ? 0 ? ?y (xy = 1))\n// In prenex: ?x ?y (x ? 0 ? xy = 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "39-first-order-logic-in-practice",
      children: "3.9 First-Order Logic in Practice"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3.14"
      }), " (Translating natural language to predicate logic)."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "English"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Logic"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All CS majors graduate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\forall x (\\text{CS}(x) \\rightarrow \\text{Grad}(x))$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Some math major is smart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\exists x (\\text{Math}(x) \\land \\text{Smart}(x))$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No CS major likes Java"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\forall x (\\text{CS}(x) \\rightarrow \\neg \\text{LikesJava}(x))$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Only CS majors take AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\forall x (\\text{TakesAI}(x) \\rightarrow \\text{CS}(x))$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Every student has a advisor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\forall s \\in S ; \\exists a \\in A; \\text{Advisor}(s,a)$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3.15"
      }), " (Translating with unique existence). \"There is exactly one even prime.\"\n$$\\exists x (\\text{Prime}(x) \\land \\text{Even}(x) \\land \\forall y ((\\text{Prime}(y) \\land \\text{Even}(y)) \\rightarrow y = x))$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof 3.1"
      }), " ($\\forall$ distributes over $\\land$ but not $\\lor$)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$\\forall x (P(x) \\land Q(x)) \\equiv \\forall x P(x) \\land \\forall x Q(x)$ is true."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "But $\\forall x (P(x) \\lor Q(x))$ is NOT equivalent to $\\forall x P(x) \\lor \\forall x Q(x)$. Counterexample: domain = ${1,2}$, $P(1)=T$, $P(2)=F$, $Q(1)=F$, $Q(2)=T$. Then $\\forall x (P(x) \\lor Q(x))$ is true (each x satisfies one), but $\\forall x P(x) \\lor \\forall x Q(x)$ is false (neither property holds for all)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "310-inference-with-quantifiers",
      children: "3.10 Inference with Quantifiers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 3.1 (Universal Instantiation)."
      }), " From $\\forall x P(x)$, infer $P(c)$ for any $c$ in the domain."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 3.2 (Existential Instantiation)."
      }), " From $\\exists x P(x)$, infer $P(c)$ for a fresh constant $c$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 3.3 (Universal Generalization)."
      }), " If $P(c)$ for an arbitrary $c$, infer $\\forall x P(x)$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 3.4 (Existential Generalization)."
      }), " From $P(c)$, infer $\\exists x P(x)$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function universalInstantiation<T>(\n  forallStatement: ((x: T) => boolean),\n  domain: T[],\n  c: T\n): boolean {\n  return forallStatement(domain) && forallStatement([c]);\n}\n\nfunction existentialGeneralization<T>(\n  P: (x: T) => boolean,\n  c: T\n): boolean {\n  return P(c);\n}\n\n// Example: ?x (x > 0 ? x^2 > 0) over positive integers\nconst forallPosSquare = (arr: number[]) => arr.every(x => x > 0 ? x * x > 0 : true);\nconsole.log(universalInstantiation(forallPosSquare, [1, 2, 3], 5)); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "311-limitations-of-first-order-logic",
      children: "3.11 Limitations of First-Order Logic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compactness theorem:"
        }), " If every finite subset of a theory has a model, the whole theory has a model."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "L?wenheim-Skolem theorem:"
        }), " If a countable theory has an infinite model, it has models of every infinite cardinality."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "G?del's incompleteness:"
        }), " No consistent, complete, recursive axiomatization of arithmetic exists."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "First-order logic cannot express: \"there are finitely many,\" \"most,\" or transitive closure in general."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Logic Hierarchy\"\n        A[Propositional Logic] -->|Add quantifiers| B[First-Order Logic]\n        B -->|Add set quantification| C[Second-Order Logic]\n        A --> D[Boolean connectives only]\n        B --> E[?x, ?x over individuals]\n        C --> F[?P, ?P over predicates]\n        B --> G[Expressiveness limit: compactness]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Write a TypeScript function ", (0,jsx_runtime.jsx)(_components.code, {
            children: "uniqueExists<T>"
          }), " that checks $\\exists!x P(x)$ over a finite domain."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Translate to predicate logic: \"Every student who takes a discrete math class passes.\""
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Negate and simplify: $\\forall x \\exists y ((P(x) \\lor Q(y)) \\rightarrow R(x, y))$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Determine whether $\\exists x \\forall y (x \\leq y)$ is true over $\\mathbb{Z}$ and over $\\mathbb{N}$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Let domain be ${1,2,3,4}$ and $P(x,y)$ mean \"$x$ divides $y$\". Evaluate $\\forall x \\exists y P(x,y)$ and $\\exists x \\forall y P(x,y)$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Give a Skolemized form of $\\forall x \\exists y P(x,y)$."
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
        children: "Express \"there exists a unique $x$ such that $P(x)$\" using quantifiers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Negate $\\forall x; \\exists y; (x + y = 0)$ over $\\mathbb{Z}$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write \"Every CS major has taken a math course\" in predicate logic."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is $\\exists x; \\forall y; P(x,y)$ equivalent to $\\forall y; \\exists x; P(x,y)$? Explain with a counterexample."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the domain if $\\forall x; (x > 0)$ is false?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert $\\exists x; P(x) \\rightarrow \\forall y; Q(y)$ to prenex normal form."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What rule licenses the step from $\\exists x; P(x)$ to $P(c)$?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Translate and then negate: \"There is a student who has emailed every professor.\""
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Let domain be $\\mathbb{R}$. Determine truth values:\n(a) $\\forall x; \\exists y; (x + y = 0)$\n(b) $\\exists y; \\forall x; (x + y = 0)$\n(c) $\\forall x; \\forall y; (x^2 + y^2 \\geq 0)$"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Negate: $\\forall x; \\forall y; \\big((P(x) \\land P(y)) \\rightarrow x = y\\big)$ (this states \"at most one\" element satisfies $P$)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show that $\\exists x; \\forall y; P(x,y) \\implies \\forall y; \\exists x; P(x,y)$ is logically true, but the converse is not."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Express \"There exist at least two elements satisfying $P(x)$\" and \"There exist at most two elements satisfying $P(x)$\" using quantifiers."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Write a TypeScript function ", (0,jsx_runtime.jsx)(_components.code, {
            children: "translateQuantified"
          }), " that takes a domain and two predicates $A(x)$ and $B(x)$ and evaluates $\\forall x (A(x) \\rightarrow B(x))$ and $\\exists x (A(x) \\land B(x))$."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "14",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Define the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "uniqueness quantifier"
          }), " $\\exists!x; P(x)$ meaning \"there exists exactly one $x$ satisfying $P(x)$.\" Express $\\exists!x; P(x)$ using only $\\forall$, $\\exists$, $\\land$, $\\rightarrow$, $=$ and $P(x)$. Then negate the expression and simplify."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove that $\\forall x; (P(x) \\land Q(x)) \\equiv (\\forall x; P(x)) \\land (\\forall x; Q(x))$ and $\\exists x; (P(x) \\lor Q(x)) \\equiv (\\exists x; P(x)) \\lor (\\exists x; Q(x))$. Show by counterexample that $\\forall x; (P(x) \\lor Q(x))$ is NOT equivalent to $(\\forall x; P(x)) \\lor (\\forall x; Q(x))$."
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