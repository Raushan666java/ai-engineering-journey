"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[85497],{

/***/ 50127
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_software_engineering_14_formal_methods_md_7c1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-software-engineering-14-formal-methods-md-7c1.json
const site_docs_courses_software_engineering_14_formal_methods_md_7c1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/software-engineering/14-formal-methods","title":"Formal Methods","description":"Learning Objectives","source":"@site/docs/courses/software-engineering/14-formal-methods.md","sourceDirName":"courses/software-engineering","slug":"/software-engineering/14-formal-methods","permalink":"/ai-engineering-journey/software-engineering/14-formal-methods","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"id":"14-formal-methods","slug":"/software-engineering/14-formal-methods","title":"Formal Methods","sidebar_label":"Formal Methods","sidebar_position":14},"sidebar":"course-software-engineering","previous":{"title":"Security Engineering","permalink":"/ai-engineering-journey/software-engineering/13-security-engineering"},"next":{"title":"Software Metrics and Measurement","permalink":"/ai-engineering-journey/software-engineering/15-metrics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/software-engineering/14-formal-methods.md


const frontMatter = {
	id: '14-formal-methods',
	slug: '/software-engineering/14-formal-methods',
	title: 'Formal Methods',
	sidebar_label: 'Formal Methods',
	sidebar_position: 14
};
const contentTitle = 'Formal Methods';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "What are Formal Methods?",
  "id": "what-are-formal-methods",
  "level": 3
}, {
  "value": "Formal vs Informal Methods",
  "id": "formal-vs-informal-methods",
  "level": 3
}, {
  "value": "Propositional and Predicate Logic",
  "id": "propositional-and-predicate-logic",
  "level": 3
}, {
  "value": "Propositional Logic",
  "id": "propositional-logic",
  "level": 4
}, {
  "value": "Predicate Logic",
  "id": "predicate-logic",
  "level": 4
}, {
  "value": "Finite State Machines (FSMs)",
  "id": "finite-state-machines-fsms",
  "level": 3
}, {
  "value": "Statecharts (David Harel)",
  "id": "statecharts-david-harel",
  "level": 4
}, {
  "value": "Temporal Logic",
  "id": "temporal-logic",
  "level": 3
}, {
  "value": "Hoare Logic and Weakest Preconditions",
  "id": "hoare-logic-and-weakest-preconditions",
  "level": 3
}, {
  "value": "Invariants",
  "id": "invariants",
  "level": 3
}, {
  "value": "The Z Notation",
  "id": "the-z-notation",
  "level": 3
}, {
  "value": "B-Method",
  "id": "b-method",
  "level": 3
}, {
  "value": "Abstract Machine Structure",
  "id": "abstract-machine-structure",
  "level": 4
}, {
  "value": "Refinement",
  "id": "refinement",
  "level": 4
}, {
  "value": "Alloy",
  "id": "alloy",
  "level": 3
}, {
  "value": "TLA+ (Temporal Logic of Actions)",
  "id": "tla-temporal-logic-of-actions",
  "level": 3
}, {
  "value": "Model Checking",
  "id": "model-checking",
  "level": 3
}, {
  "value": "Explicit-State Model Checking (SPIN)",
  "id": "explicit-state-model-checking-spin",
  "level": 4
}, {
  "value": "Symbolic Model Checking (NuSMV)",
  "id": "symbolic-model-checking-nusmv",
  "level": 4
}, {
  "value": "State Explosion Problem",
  "id": "state-explosion-problem",
  "level": 4
}, {
  "value": "Theorem Proving",
  "id": "theorem-proving",
  "level": 3
}, {
  "value": "Coq Example — Proof of commutativity of addition:",
  "id": "coq-example--proof-of-commutativity-of-addition",
  "level": 4
}, {
  "value": "Isabelle/HOL Example:",
  "id": "isabellehol-example",
  "level": 4
}, {
  "value": "Applications of Formal Methods",
  "id": "applications-of-formal-methods",
  "level": 3
}, {
  "value": "Aviation (DO-178C Level A)",
  "id": "aviation-do-178c-level-a",
  "level": 4
}, {
  "value": "Railway Signalling",
  "id": "railway-signalling",
  "level": 4
}, {
  "value": "Medical Devices",
  "id": "medical-devices",
  "level": 4
}, {
  "value": "Autonomous Vehicles",
  "id": "autonomous-vehicles",
  "level": 4
}, {
  "value": "Case Studies",
  "id": "case-studies",
  "level": 3
}, {
  "value": "Therac-25 Radiation Overdose (1985-1987)",
  "id": "therac-25-radiation-overdose-1985-1987",
  "level": 4
}, {
  "value": "Airbus A380 Flight Control",
  "id": "airbus-a380-flight-control",
  "level": 4
}, {
  "value": "London Stock Exchange (Taurus Disaster)",
  "id": "london-stock-exchange-taurus-disaster",
  "level": 4
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: FSM Implementation in TypeScript",
  "id": "example-1-fsm-implementation-in-typescript",
  "level": 3
}, {
  "value": "Example 2: Hoare Logic Verification",
  "id": "example-2-hoare-logic-verification",
  "level": 3
}, {
  "value": "Example 3: Type System as Formal Method",
  "id": "example-3-type-system-as-formal-method",
  "level": 3
}, {
  "value": "Example 4: Model Checker (Simple)",
  "id": "example-4-model-checker-simple",
  "level": 3
}, {
  "value": "Example 5: Formal Specification Pattern",
  "id": "example-5-formal-specification-pattern",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "TypeScript: Formal Methods Classes",
  "id": "typescript-formal-methods-classes",
  "level": 3
}, {
  "value": "TypeScript: Formal Verification Tools",
  "id": "typescript-formal-verification-tools",
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
    br: "br",
    code: "code",
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
        id: "formal-methods",
        children: "Formal Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, the student will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the role of formal methods in software engineering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write formal specifications using propositional and predicate logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct Finite State Machines (FSMs) and statecharts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply model checking with temporal logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the Z notation for formal specifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify program correctness with Hoare Logic and weakest preconditions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define and prove invariants for system properties"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply formal specification to TypeScript code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare Z, B-Method, Alloy, and TLA+ for different use cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand model checking tools (SPIN, NuSMV) and theorem provers (Coq, Isabelle)"
      }), "\n"]
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
        href: "../../assets/images/lessons/software-engineering/14-formal-methods/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/software-engineering/14-formal-methods/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/software-engineering/14-formal-methods/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/software-engineering/14-formal-methods/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/software-engineering/14-formal-methods/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/software-engineering/14-formal-methods/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-are-formal-methods",
      children: "What are Formal Methods?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Formal methods are mathematically based techniques for the specification, development, and verification of software systems. They provide a rigorous foundation for demonstrating that a system meets its requirements."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    FM[Formal Methods] --> SPEC[Formal Specification]\n    FM --> VERIF[Verification]\n    FM --> REFINE[Refinement]\n    \n    SPEC --> Z[Z Notation]\n    SPEC --> B[B-Method]\n    SPEC --> VDM[VDM]\n    SPEC --> ALLOY[Alloy]\n    SPEC --> TLA[TLA+]\n    \n    VERIF --> MC[Model Checking]\n    VERIF --> TP[Theorem Proving]\n    VERIF --> SC[Static Analysis]\n    \n    MC --> SPIN[SPIN / Promela]\n    MC --> NUSMV[NuSMV]\n    \n    TP --> COQ[Coq]\n    TP --> ISABELLE[Isabelle]\n    TP --> LEAN[Lean 4]\n    \n    REFINE --> CF[Correctness by Construction]\n    REFINE --> SD[Stepwise Refinement]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why formal methods matter:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eliminate ambiguity in requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove the absence of entire classes of defects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify critical properties: safety, security, liveness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Industrial success stories: Intel CPU verification, Paris Metro Line 14, Mondex smart card"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "formal-vs-informal-methods",
      children: "Formal vs Informal Methods"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formal Methods"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Informal/Traditional Methods"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Specification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precise mathematical notation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural language, diagrams"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ambiguity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None — unambiguous interpretation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High — subject to interpretation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Verification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mathematical proof or exhaustive check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testing, inspection, review"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Completeness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can prove absence of certain defects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot prove absence — only presence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High upfront (training, tooling)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower upfront, higher later"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scalability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited by state explosion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scales to large systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Applicability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safety-critical, security-critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General-purpose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Automation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (model checkers, provers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (test tooling)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Standards"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DO-178C (aviation), IEC 61508 (industrial)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISO 9001, CMMI"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "propositional-and-predicate-logic",
      children: "Propositional and Predicate Logic"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "propositional-logic",
      children: "Propositional Logic"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symbol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Truth Table"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Negation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "¬p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T→F, F→T"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conjunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p ∧ q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p and q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TT→T"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disjunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p ∨ q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p or q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FF→F"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p → q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "if p then q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TF→F"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Biconditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p ↔ q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p iff q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TT→T, FF→T"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "predicate-logic",
      children: "Predicate Logic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Predicate logic extends propositional logic with quantifiers:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Universal quantifier (∀):"
        }), " \"For all\" — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "∀x ∈ ℕ: x ≥ 0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Existential quantifier (∃):"
        }), " \"There exists\" — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "∃x ∈ ℕ: x = 42"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — Binary search specification:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "∀a: ARRAY[ℕ] OF ℤ; target: ℤ •\n  sorted(a) →\n    (result ≠ -1 → a[result] = target)\n    ∧ (result = -1 → ∀i: ℕ • i < len(a) → a[i] ≠ target)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finite-state-machines-fsms",
      children: "Finite State Machines (FSMs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An FSM is defined by a 5-tuple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(S, Σ, δ, s₀, F)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "S:"
        }), " Finite set of states"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Σ:"
        }), " Finite alphabet of input symbols"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "δ: S × Σ → S:"
        }), " Transition function"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "s₀:"
        }), " Initial state"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F ⊆ S:"
        }), " Set of accepting states"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    IDLE[Idle] -->|User Unlocks| AUTH[Authenticating]\n    AUTH -->|Success| OPEN[Open]\n    AUTH -->|Failure| IDLE\n    OPEN -->|Time Elapsed / 30s| IDLE\n    OPEN -->|Button Pressed| IDLE\n    AUTH -->|3 Failures| LOCKED[Locked]\n    LOCKED -->|Admin Reset| IDLE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "statecharts-david-harel",
      children: "Statecharts (David Harel)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Statecharts extend FSMs with hierarchy, concurrency, and communication."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Active\"\n        direction LR\n        AUTH2[Authenticated] --> AUTHORIZED[Authorised]\n        AUTH2 --> UNAUTHORIZED[Unauthorised]\n    end\n    \n    subgraph \"Session\"\n        IDLE2[Idle] --> ACTIVE[Active]\n        ACTIVE -->|Timeout| IDLE2\n    end\n    \n    subgraph \"Phone\"\n        ON[On] --> OFF[Off]\n        OFF --> ON\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "temporal-logic",
      children: "Temporal Logic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Temporal logic extends predicate logic with operators for reasoning about time."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LTL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CTL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Globally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AG p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p holds always"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eventually"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AF p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p holds eventually"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Next"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AX p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p holds in next state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Until"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p U q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A[p U q]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p holds until q holds"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Safety Property:"
      }), " \"Something bad never happens\" — e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "G ¬(deadlock)"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Liveness Property:"
      }), " \"Something good eventually happens\" — e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "F (request_satisfied)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hoare-logic-and-weakest-preconditions",
      children: "Hoare Logic and Weakest Preconditions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hoare Triple:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{P} C {Q}"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "P:"
        }), " Precondition (must be true before execution)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "C:"
        }), " Command (code fragment)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q:"
        }), " Postcondition (must be true after execution)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — Absolute value:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{ x ∈ ℤ }\nif x ≥ 0 then y := x else y := -x\n{ y ≥ 0 ∧ (y = x ∨ y = -x) }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Weakest Precondition:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "wp(C, Q)"
      }), " is the weakest predicate P such that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{P} C {Q}"
      }), " holds."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Assignment axiom:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "wp(x := E, Q) = Q[E/x]"
      }), " (substitute E for x in Q)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "wp(y := x + 1, y > 0) = (x + 1 > 0) = (x > -1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hoare Logic Rules:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{Q[E/x]} x := E {Q}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Substitute expression for variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{P} S1 {R}, {R} S2 {Q} ⇒ {P} S1;S2 {Q}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain two commands"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{P ∧ B} S1 {Q}, {P ∧ ¬B} S2 {Q} ⇒ {P} if B then S1 else S2 {Q}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Branch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{I ∧ B} S {I} ⇒ {I} while B do S {I ∧ ¬B}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "While loop with invariant I"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "P → P', {P'} C {Q'}, Q' → Q ⇒ {P} C {Q}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strengthen pre, weaken post"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "invariants",
      children: "Invariants"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "invariant"
      }), " is a predicate that holds at specific points in program execution:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loop invariants:"
        }), " Hold before and after each loop iteration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Class invariants:"
        }), " Hold before and after each public method"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data invariants:"
        }), " Constraints on data structures"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — Loop invariant for binary search:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "∀i: ℕ | i < low • a[i] < target\n∧ ∀i: ℕ | i > high • a[i] > target\n∧ low ≤ high + 1\n∧ sorted(a)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-z-notation",
      children: "The Z Notation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Z (pronounced \"Zed\") is a formal specification language based on set theory and first-order predicate logic."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Z schema structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SchemaName _________________________________\n  declarations\n  ──────────────────────────────────────────\n  predicates\n___________________________________________\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — Library system:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Book ______________________________________\n  id: ℕ\n  title: seq ℂhar\n  author: seq ℂhar\n  isbn: seq ℂhar\n  available: 𝔹\n──────────────────────────────────────────\n  #title > 0\n  #isbn = 13\n__________________________________________\n\nBorrowBook ________________________________\n  ΔLibrary\n  memberId?: ℕ\n  bookId?: ℕ\n  response!: 𝔹\n──────────────────────────────────────────\n  bookId? ∈ dom(books)\n  memberId? ∈ dom(members)\n  books(bookId).available = True\n  response! = True\n  books' = books ⊕ {bookId ↦ (books(bookId))' where available' = False}\n  members' = members ⊕ {memberId ↦ (members(memberId))' where borrowed' = {bookId}}\n__________________________________________\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Z Schema Calculus:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Z schemas can be combined using operators:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema inclusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "S ≙ T1 ∧ T2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Include all declarations and predicates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema conjunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "S ≙ S1 ∧ S2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both schemas hold"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema disjunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "S ≙ S1 ∨ S2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At least one schema holds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema negation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "¬S"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negate all predicates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema hiding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "S \\ (x)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hide variable x from schema"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema projection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "S ↾ (x)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep only variable x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema composition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "S1 ⨟ S2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential composition (after S1, S2 holds)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema piping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "S1 >> S2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output of S1 feeds input of S2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b-method",
      children: "B-Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The B-Method is a formal method for specifying, designing, and coding software systems using abstract machines."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "abstract-machine-structure",
      children: "Abstract Machine Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MACHINE Library\nSETS BookStatus = {available, borrowed}\nVARIABLES books, members\nINVARIANT\n  books ∈ ℙ(Book) ∧ members ∈ ℙ(Member) ∧\n  ∀b · b ∈ books ⇒ b.status ∈ BookStatus\nINITIALISATION\n  books := {} || members := {}\nOPERATIONS\n  borrowBook(bookId, memberId) =\n    PRE\n      bookId ∈ books ∧ memberId ∈ members ∧\n      books(bookId).status = available\n    THEN\n      books(bookId).status := borrowed ||\n      members(memberId).borrowed := members(memberId).borrowed ∪ {bookId}\n    END\nEND\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "refinement",
      children: "Refinement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Refinement transforms an abstract specification into a concrete implementation while preserving correctness:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "REFINEMENT Library_i\nREFINES Library\nVARIABLES books_table, members_table\nINVARIANT\n  books_table ∈ Book → BookStatus ∧\n  members_table ∈ Member → ℙ(Book)\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof Obligations:"
      }), " For each refinement, we must prove:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The invariant holds initially"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each operation preserves the invariant"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The concrete specification is a valid refinement of the abstract one"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alloy",
      children: "Alloy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alloy is a lightweight formal method based on relational logic. It is particularly suited for early-stage modelling and automated analysis."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Concepts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Signatures:"
        }), " Define types and their relationships"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Facts:"
        }), " Constraints that always hold"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Predicates:"
        }), " Named constraints that can be invoked"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Asserts:"
        }), " Properties to check"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instances:"
        }), " Find configurations that satisfy constraints (via SAT solving)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Alloy model: Library system\nsig Book { isbn: one String, title: one String }\nsig Member { id: one Int, borrowed: set Book }\nsig Library {\n  books: set Book,\n  members: set Member,\n  borrows: Member → Book\n}\n\nfact NoDuplicateIsbn { all b1, b2: Book | b1.isbn = b2.isbn ⇒ b1 = b2 }\nfact BookOwnership { all b: Book | one l: Library | b in l.books }\n\npred Borrow[m: Member, b: Book, l, l': Library] {\n  b in l.books\n  m in l.members\n  b not in m.borrowed\n  l'.books = l.books\n  l'.members = l.members\n  l'.borrows = l.borrows + m → b\n}\n\nassert NoDuplicateBorrow { all m: Member | no disj b1, b2: Book | m → b1 in Library.borrows and m → b2 in Library.borrows }\ncheck NoDuplicateBorrow for 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tla-temporal-logic-of-actions",
      children: "TLA+ (Temporal Logic of Actions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TLA+, created by Leslie Lamport, is used for specifying and verifying concurrent and distributed systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Concepts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State:"
        }), " Assignment of values to variables"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " A relation between old and new states"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Behavior:"
        }), " Infinite sequence of states"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Specification:"
        }), " Initial predicate ∧ □[Next]_vars ∧ Liveness"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Invariant:"
        }), " A predicate that holds in all reachable states"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "---------------------------- MODULE SimpleClock ----------------------------\nEXTENDS Naturals\nVARIABLES hour, minute\n\nInit ≜ hour ∈ {1..12} ∧ minute ∈ {0..59}\n\nTick ≜\n  ∧ minute' = (minute + 1) % 60\n  ∧ hour' = IF minute = 59 THEN (hour % 12) + 1 ELSE hour\n\nNext ≜ Tick\n\nSpec ≜ Init ∧ □[Next]_⟨hour, minute⟩\n\nHourInvariant ≜ hour ∈ {1..12}\nMinuteInvariant ≜ minute ∈ {0..59}\n=============================================================================\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Model checking in TLA+:"
      }), " TLC (the TLA+ model checker) can check invariants by exploring all reachable states. For the SimpleClock, it would verify that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HourInvariant"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MinuteInvariant"
      }), " hold in all states."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "model-checking",
      children: "Model Checking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Model checking is an automated technique for verifying finite-state systems against temporal logic properties."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "explicit-state-model-checking-spin",
      children: "Explicit-State Model Checking (SPIN)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SPIN uses Promela (Process Meta Language) to model systems. It explores all reachable states explicitly."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* Promela model: Mutual exclusion */\nbool wantp = false, wantq = false;\n\nactive proctype p() {\n  do\n  :: wantp = true;\n     !wantq;\n     /* critical section */\n     wantp = false;\n     /* non-critical section */\n  od\n}\n\nactive proctype q() {\n  do\n  :: wantq = true;\n     !wantp;\n     /* critical section */\n     wantq = false;\n     /* non-critical section */\n  od\n}\n\nltl mutex { □ (!(p:critical && q:critical)) }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "symbolic-model-checking-nusmv",
      children: "Symbolic Model Checking (NuSMV)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NuSMV uses Binary Decision Diagrams (BDDs) to represent states symbolically, handling larger state spaces."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MODULE main\nVAR\n  request : boolean;\n  state : {idle, busy, done};\n\nASSIGN\n  init(state) := idle;\n  next(state) := case\n    state = idle & request : busy;\n    state = busy : done;\n    state = done : idle;\n    TRUE : state;\n  esac;\n\n-- CTL properties\nSPEC AG (state = busy -> AF state = done)\nSPEC EF (state = done)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    TM[Model Checking Process] --> MODEL[Build System Model]\n    TM --> PROP[Define Properties in LTL / CTL]\n    TM --> TOOL[Choose Model Checker]\n    \n    MODEL --> SPIN[SPIN / Promela]\n    MODEL --> NUSMV[NuSMV]\n    MODEL --> TLC[TLC for TLA+]\n    \n    TOOL --> EXPLORE[Explore State Space]\n    EXPLORE --> SAT{Satisfies?}\n    SAT -->|Yes| VERIFIED[Property Verified]\n    SAT -->|No| COUNTEREX[Counterexample Found]\n    COUNTEREX --> DEBUG[Debug & Refine Model]\n    DEBUG --> MODEL\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "state-explosion-problem",
      children: "State Explosion Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The number of states grows exponentially with system components. Mitigation strategies:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Abstraction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce detail while preserving relevant properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model data as intervals instead of exact values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Symmetry reduction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exploit symmetries in the model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Treat identical processes as interchangeable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial order reduction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid exploring interleavings that lead to the same state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event ordering independence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BDD-based (symbolic)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Represent states as Boolean formulas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NuSMV uses BDDs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bounded model checking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limit search depth to k steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CBMC, SAT-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compositional verification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify components separately, then compose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assume-guarantee reasoning"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "theorem-proving",
      children: "Theorem Proving"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Theorem proving uses deductive reasoning to prove properties about programs. Unlike model checking, it can handle infinite state spaces but requires human guidance."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Logic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strengths"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notable Projects"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Coq"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calculus of Inductive Constructions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proof assistant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rich type system, extraction to OCaml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CompCert verified C compiler"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Isabelle/HOL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher-Order Logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generic proof assistant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highly automated, large library"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sel4 microkernel verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lean 4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependent Type Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern proof assistant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, mathlib, community"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mathematics formalisation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PVS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher-Order Logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safety-critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Powerful decision procedures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NASA systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ACL2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First-Order Logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Industrial verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated, Lisp-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMD/Intel CPU verification"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "coq-example--proof-of-commutativity-of-addition",
      children: "Coq Example — Proof of commutativity of addition:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-coq",
        children: "Theorem add_comm : ∀ n m : nat, n + m = m + n.\nProof.\n  intros n m.\n  induction n as [| n' IH].\n  - simpl. rewrite -> plus_n_O. reflexivity.\n  - simpl. rewrite -> IH. rewrite -> plus_n_Sm. reflexivity.\nQed.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "isabellehol-example",
      children: "Isabelle/HOL Example:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-isabelle",
        children: "theorem add_comm: \"n + m = m + n\"\napply (induct_tac n)\napply auto\ndone\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "applications-of-formal-methods",
      children: "Applications of Formal Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "aviation-do-178c-level-a",
      children: "Aviation (DO-178C Level A)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Airbus A380: Formal methods used for flight control software verification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Boeing 787: Model-based development of systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tools: SCADE, Simulink Design Verifier"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "railway-signalling",
      children: "Railway Signalling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Paris Metro Line 14: B-Method used to develop automatic train control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "London Underground: Z notation for signalling requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "European Train Control System (ETCS): Formal specification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "medical-devices",
      children: "Medical Devices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Therac-25 (post-accident): Formal verification mandated for safety-critical medical software"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FDA guidance: Increasingly recommends formal methods for Class III devices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "autonomous-vehicles",
      children: "Autonomous Vehicles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Safety validation of perception systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verification of planning algorithms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISO 26262: Formal methods recommended for ASIL D"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-studies",
      children: "Case Studies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "therac-25-radiation-overdose-1985-1987",
      children: "Therac-25 Radiation Overdose (1985-1987)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " 6 patients received massive radiation overdoses, 3 died."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      }), " A race condition in the software between the electron beam setup and the treatment table positioning. When the operator edited the treatment data too quickly, the electron beam could fire at full power in the wrong configuration."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Formal Analysis:"
      }), " Post-accident analysis showed that a simple FSM with safety invariants would have caught the flaw. The software had no concurrency safeguards, no state validation, and reused code from earlier models without re-verification."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lessons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Concurrent software requires formal reasoning about interleavings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code reuse does not preserve safety properties without re-verification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Safety-critical systems need formal verification, not just testing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    THERAC[Therac-25 Software] --> SETUP[Treatment Setup]\n    SETUP --> EDIT[Operator Edits Data]\n    EDIT --> RACE{Race Condition}\n    RACE -->|Fast Edit| BEAM[Beam Fires at Full Power]\n    RACE -->|Normal| CORRECT[Correct Treatment]\n    BEAM --> OVERDOSE[Radiation Overdose]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "airbus-a380-flight-control",
      children: "Airbus A380 Flight Control"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " First civil aircraft with formal methods in its development process."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Application:"
      }), " The A380's flight control software was verified using the SCADE tool suite, which generates production code from formal models. The formal specification eliminated ambiguity in control laws and enabled exhaustive verification of failure modes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Formal Methods Used:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model-based development with SCADE (SafeCASE)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Formal verification of control laws"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic code generation from verified models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coverage analysis of all possible system states"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Results:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "50% reduction in integration defects compared to A340"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Successful DO-178C certification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "More than 500,000 hours of formal verification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "london-stock-exchange-taurus-disaster",
      children: "London Stock Exchange (Taurus Disaster)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " £75 million wasted (in 1990s currency), project cancelled after 5 years."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      }), " The Taurus paperless settlement system specifications were inconsistent and incomplete. The formal specification revealed fundamental design flaws: the system could deadlock under certain transaction sequences, and the data model violated referential integrity constraints."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Formal Methods Application:"
      }), " A subsequent formal analysis using Z notation uncovered dozens of inconsistencies in the 10,000-page requirements document. The analysis showed that the proposed architecture could not satisfy the transaction throughput requirements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lessons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Formal methods are most valuable when applied early"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Informal specifications can hide contradictions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mathematical analysis prevents costly late-stage failures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-fsm-implementation-in-typescript",
      children: "Example 1: FSM Implementation in TypeScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type State = string;\ntype Event = string;\n\ninterface Transition {\n  from: State;\n  to: State;\n  on: Event;\n}\n\nclass FiniteStateMachine {\n  private currentState: State;\n  private readonly transitions: Map<string, Transition>;\n  private readonly states: Set<State>;\n  private readonly acceptingStates: Set<State>;\n  private history: { from: State; on: Event; to: State }[] = [];\n\n  constructor(\n    initialState: State,\n    transitions: Transition[],\n    acceptingStates: State[]\n  ) {\n    this.currentState = initialState;\n    this.states = new Set(transitions.flatMap((t) => [t.from, t.to]));\n    this.acceptingStates = new Set(acceptingStates);\n    this.transitions = new Map();\n    for (const t of transitions) {\n      this.transitions.set(`${t.from}:${t.on}`, t);\n    }\n  }\n\n  public transition(event: Event): boolean {\n    const key = `${this.currentState}:${event}`;\n    const transition = this.transitions.get(key);\n    if (!transition) return false;\n    this.history.push({ from: this.currentState, on: event, to: transition.to });\n    this.currentState = transition.to;\n    return true;\n  }\n\n  public isInAcceptingState(): boolean {\n    return this.acceptingStates.has(this.currentState);\n  }\n\n  public getCurrentState(): State { return this.currentState; }\n\n  public getHistory(): { from: State; on: Event; to: State }[] {\n    return [...this.history];\n  }\n\n  public reset(): void {\n    this.currentState = [...this.states][0];\n    this.history = [];\n  }\n\n  public verifySafetyProperty(badStates: State[]): boolean {\n    return !badStates.includes(this.currentState);\n  }\n}\n\n// Door lock FSM\nconst doorFSM = new FiniteStateMachine(\n  'idle',\n  [\n    { from: 'idle', to: 'authenticating', on: 'unlock' },\n    { from: 'authenticating', to: 'open', on: 'auth_success' },\n    { from: 'authenticating', to: 'idle', on: 'auth_failure' },\n    { from: 'authenticating', to: 'locked', on: 'three_failures' },\n    { from: 'open', to: 'idle', on: 'timeout' },\n    { from: 'open', to: 'idle', on: 'close' },\n    { from: 'locked', to: 'idle', on: 'admin_reset' },\n  ],\n  ['open']\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-hoare-logic-verification",
      children: "Example 2: Hoare Logic Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Predicate = (state: Record<string, number>) => boolean;\n\nclass HoareVerifier {\n  public verifyAssignment(\n    precondition: Predicate,\n    variable: string,\n    expression: (state: Record<string, number>) => number,\n    state: Record<string, number>\n  ): boolean {\n    const wpState = { ...state };\n    wpState[variable] = expression(state);\n    return precondition(wpState);\n  }\n\n  public weakestPrecondition(\n    command: string,\n    postcondition: Predicate\n  ): (state: Record<string, number>) => boolean {\n    const match = command.match(/^(\\w+)\\s*:=\\s*(.+)$/);\n    if (match) {\n      const varName = match[1];\n      const exprStr = match[2];\n      return (state: Record<string, number>) => {\n        const substituted = this.substitute(state, varName, exprStr);\n        return postcondition(substituted);\n      };\n    }\n    throw new Error(`Unsupported command: ${command}`);\n  }\n\n  private substitute(\n    state: Record<string, number>,\n    variable: string,\n    expression: string\n  ): Record<string, number> {\n    const freeState = { ...state };\n    return freeState;\n  }\n}\n\ninterface LoopInvariantCheck {\n  invariant: string;\n  holdsInitially: boolean;\n  preservesInvariant: boolean;\n  ensuresPostcondition: boolean;\n}\n\nclass InvariantChecker {\n  public checkLoopInvariant(\n    invariant: Predicate,\n    condition: Predicate,\n    body: (state: Record<string, number>) => Record<string, number>,\n    initialState: Record<string, number>\n  ): LoopInvariantCheck {\n    const holdsInitially = invariant(initialState);\n    let preservesInvariant = true;\n    if (condition(initialState)) {\n      const afterBody = body(initialState);\n      preservesInvariant = invariant(afterBody);\n    }\n    return {\n      invariant: invariant.toString(),\n      holdsInitially,\n      preservesInvariant,\n      ensuresPostcondition: preservesInvariant,\n    };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-type-system-as-formal-method",
      children: "Example 3: Type System as Formal Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript's type system provides formal guarantees\n\ntype RequestState =\n  | { status: 'pending'; createdAt: Date }\n  | { status: 'approved'; approvedBy: string; approvedAt: Date }\n  | { status: 'rejected'; reason: string; rejectedAt: Date }\n  | { status: 'cancelled'; cancelledBy: string };\n\nclass RequestManager {\n  private request!: RequestState;\n\n  public createInitial(): void {\n    this.request = { status: 'pending', createdAt: new Date() };\n  }\n\n  public approve(approvedBy: string): void {\n    if (this.request.status !== 'pending') {\n      throw new Error('Can only approve pending requests');\n    }\n    this.request = { status: 'approved', approvedBy, approvedAt: new Date() };\n  }\n\n  public reject(reason: string): void {\n    if (this.request.status !== 'pending') {\n      throw new Error('Can only reject pending requests');\n    }\n    this.request = { status: 'rejected', reason, rejectedAt: new Date() };\n  }\n\n  public cancel(cancelledBy: string): void {\n    if (this.request.status === 'cancelled' || this.request.status === 'rejected') {\n      throw new Error('Cannot cancel a completed request');\n    }\n    this.request = { status: 'cancelled', cancelledBy };\n  }\n\n  public isValidTransition(target: 'approved' | 'rejected' | 'cancelled'): boolean {\n    const allowedTransitions: Record<string, string[]> = {\n      pending: ['approved', 'rejected', 'cancelled'],\n      approved: ['cancelled'],\n      rejected: [],\n      cancelled: [],\n    };\n    return allowedTransitions[this.request.status]?.includes(target) ?? false;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-model-checker-simple",
      children: "Example 4: Model Checker (Simple)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface KripkeStructure {\n  states: string[];\n  initialStates: string[];\n  transitions: [string, string][];\n  labeling: Map<string, string[]>;\n}\n\nclass ModelChecker {\n  private structure: KripkeStructure;\n\n  constructor(structure: KripkeStructure) {\n    this.structure = structure;\n  }\n\n  public checkAG(proposition: string): boolean {\n    const reachable = this.computeReachable();\n    for (const state of reachable) {\n      const labels = this.structure.labeling.get(state) ?? [];\n      if (!labels.includes(proposition)) return false;\n    }\n    return true;\n  }\n\n  public checkEF(proposition: string): boolean {\n    const visited = new Set<string>();\n    const dfs = (state: string): boolean => {\n      if (visited.has(state)) return false;\n      visited.add(state);\n      const labels = this.structure.labeling.get(state) ?? [];\n      if (labels.includes(proposition)) return true;\n      for (const [from, to] of this.structure.transitions) {\n        if (from === state && dfs(to)) return true;\n      }\n      return false;\n    };\n    for (const initial of this.structure.initialStates) {\n      if (dfs(initial)) return true;\n    }\n    return false;\n  }\n\n  private computeReachable(): Set<string> {\n    const reachable = new Set<string>();\n    const queue: string[] = [...this.structure.initialStates];\n    while (queue.length > 0) {\n      const state = queue.shift()!;\n      if (reachable.has(state)) continue;\n      reachable.add(state);\n      const adj = this.getTransitionsFrom(state);\n      queue.push(...adj.filter((s) => !reachable.has(s)));\n    }\n    return reachable;\n  }\n\n  private getTransitionsFrom(state: string): string[] {\n    return this.structure.transitions\n      .filter(([from]) => from === state)\n      .map(([, to]);\n  }\n\n  public findCounterexample(proposition: string): string[] | null {\n    const path: string[] = [];\n    const visited = new Set<string>();\n    const dfs = (state: string): boolean => {\n      if (visited.has(state)) return false;\n      visited.add(state);\n      path.push(state);\n      const labels = this.structure.labeling.get(state) ?? [];\n      if (!labels.includes(proposition)) return true;\n      for (const [from, to] of this.structure.transitions) {\n        if (from === state && dfs(to)) return true;\n      }\n      path.pop();\n      return false;\n    };\n    for (const initial of this.structure.initialStates) {\n      if (dfs(initial)) return path;\n    }\n    return null;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-formal-specification-pattern",
      children: "Example 5: Formal Specification Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Specification<T> {\n  isSatisfiedBy(candidate: T): boolean;\n  and(other: Specification<T>): Specification<T>;\n  or(other: Specification<T>): Specification<T>;\n  not(): Specification<T>;\n}\n\nabstract class AbstractSpecification<T> implements Specification<T> {\n  abstract isSatisfiedBy(candidate: T): boolean;\n\n  public and(other: Specification<T>): Specification<T> {\n    return new AndSpecification(this, other);\n  }\n\n  public or(other: Specification<T>): Specification<T> {\n    return new OrSpecification(this, other);\n  }\n\n  public not(): Specification<T> {\n    return new NotSpecification(this);\n  }\n}\n\nclass AndSpecification<T> extends AbstractSpecification<T> {\n  constructor(private left: Specification<T>, private right: Specification<T>) { super(); }\n  public isSatisfiedBy(candidate: T): boolean {\n    return this.left.isSatisfiedBy(candidate) && this.right.isSatisfiedBy(candidate);\n  }\n}\n\nclass OrSpecification<T> extends AbstractSpecification<T> {\n  constructor(private left: Specification<T>, private right: Specification<T>) { super(); }\n  public isSatisfiedBy(candidate: T): boolean {\n    return this.left.isSatisfiedBy(candidate) || this.right.isSatisfiedBy(candidate);\n  }\n}\n\nclass NotSpecification<T> extends AbstractSpecification<T> {\n  constructor(private spec: Specification<T>) { super(); }\n  public isSatisfiedBy(candidate: T): boolean {\n    return !this.spec.isSatisfiedBy(candidate);\n  }\n}\n\ninterface Transfer {\n  fromAccount: string;\n  toAccount: string;\n  amount: number;\n  timestamp: Date;\n}\n\nclass AmountLimitSpec extends AbstractSpecification<Transfer> {\n  constructor(private maxAmount: number) { super(); }\n  public isSatisfiedBy(t: Transfer): boolean { return t.amount <= this.maxAmount; }\n}\n\nclass DifferentAccountsSpec extends AbstractSpecification<Transfer> {\n  public isSatisfiedBy(t: Transfer): boolean { return t.fromAccount !== t.toAccount; }\n}\n\nclass PositiveAmountSpec extends AbstractSpecification<Transfer> {\n  public isSatisfiedBy(t: Transfer): boolean { return t.amount > 0; }\n}\n\nconst transferSpec = new PositiveAmountSpec()\n  .and(new AmountLimitSpec(10000))\n  .and(new DifferentAccountsSpec());\n\nfunction validateTransfer(transfer: Transfer): { valid: boolean; violations: string[] } {\n  const violations: string[] = [];\n  if (!new PositiveAmountSpec().isSatisfiedBy(transfer)) violations.push('Must be positive');\n  if (!new AmountLimitSpec(10000).isSatisfiedBy(transfer)) violations.push('Exceeds limit');\n  if (!new DifferentAccountsSpec().isSatisfiedBy(transfer)) violations.push('Same account');\n  return { valid: violations.length === 0, violations };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Formal methods apply mathematical techniques to software specification, development, and verification. Propositional and predicate logic provide the foundation for precise specifications. Finite State Machines model discrete system behaviour. Temporal logic (LTL, CTL) enables reasoning about properties over time. Hoare Logic verifies program correctness using preconditions, postconditions, and weakest preconditions. Invariants capture properties that must hold at specific program points. The Z notation structures formal specifications using schemas with schema calculus for composition. The B-Method uses abstract machines, refinement, and proof obligations. Alloy provides lightweight automated analysis via relational logic and SAT solving. TLA+ excels at specifying concurrent and distributed systems. Model checking automatically verifies temporal properties by exhaustively exploring system states (SPIN, NuSMV). Theorem proving (Coq, Isabelle, Lean) handles infinite state spaces with human guidance. While formal methods are most commonly applied to safety-critical and security-critical systems (aviation, railway, medical), even lightweight applications such as the specification pattern in TypeScript improve software quality."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Formal methods are not all-or-nothing"
        }), " — even partial application (lightweight formal methods) catches defects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Invariants are the most practical formal technique"
        }), " — state them, enforce them, test them"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model checking is limited by state space"
        }), " — use abstraction to manage complexity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Correctness by construction"
        }), " — build correct programs incrementally via refinement"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Formal specs expose ambiguity"
        }), " — the act of writing a formal spec finds requirements gaps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical systems justify formal methods"
        }), " — safety-critical, security-critical, or where failure costs exceed verification costs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Choose the right tool"
        }), " — Z for data-oriented specs, TLA+ for concurrent protocols, Alloy for lightweight exploration, Coq for full verification"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: A Hoare triple {P} C {Q} expresses that:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) If P is true, then C will not crash"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) If P holds before executing C, then Q holds after"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Q is the precondition for C"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) P and Q are equivalent"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: B"
      }), " — {P} C {Q} means if precondition P holds before executing command C, then postcondition Q holds afterwards."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: In temporal logic, \"something bad never happens\" is what kind of property?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Liveness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Safety"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Fairness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Reachability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: B"
      }), " — Safety properties assert that \"something bad never happens\" (e.g., G ¬deadlock)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: The weakest precondition wp(x := x + 1, x > 0) is:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) x > 0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) x > -1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) x > 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) x + 1 > 0"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: B"
      }), " — wp(x := E, Q) = Q[E/x]. Substituting x+1 for x in \"x > 0\" gives \"x+1 > 0\", which simplifies to \"x > -1\"."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: Which formal modelling language uses schemas with declarations and predicates?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) B-Method"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Z Notation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) VDM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Alloy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: B"
      }), " — Z notation structures specifications using schemas with declarations above the line and predicates below."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: Statecharts extend FSMs with:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Object orientation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Hierarchy, concurrency, and communication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Temporal logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Probability distributions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: B"
      }), " — Statecharts (Harel) add hierarchy (nested states), concurrency (orthogonal regions), and communication."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-formal-methods-classes",
      children: "TypeScript: Formal Methods Classes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === ZSchemaEngine: Z notation schema parser and validator ===\ninterface ZSchema { name: string; declarations: string[]; predicates: string[]; includes: string[]; }\nclass ZSchemaEngine {\n  private schemas: Map<string, ZSchema> = new Map();\n  private validationErrors: string[] = [];\n\n  public defineSchema(name: string, declarations: string[], predicates: string[]): ZSchema {\n    if (!/^[A-Z][a-zA-Z0-9]*$/.test(name)) {\n      this.validationErrors.push(`Schema name \"${name}\" must start with uppercase`);\n    }\n    const schema: ZSchema = { name, declarations, predicates, includes: [] };\n    this.schemas.set(name, schema);\n    return schema;\n  }\n\n  public includeSchema(parentName: string, childName: string): ZSchema | null {\n    const parent = this.schemas.get(parentName);\n    const child = this.schemas.get(childName);\n    if (!parent || !child) {\n      this.validationErrors.push(`Cannot include: schema not found`);\n      return null;\n    }\n    const combined: ZSchema = {\n      name: `${parentName}_${childName}`,\n      declarations: [...parent.declarations, ...child.declarations],\n      predicates: [...parent.predicates, ...child.predicates],\n      includes: [parentName, childName],\n    };\n    this.schemas.set(combined.name, combined);\n    return combined;\n  }\n\n  public hideVariable(schemaName: string, variable: string): ZSchema | null {\n    const schema = this.schemas.get(schemaName);\n    if (!schema) return null;\n    const hidden: ZSchema = {\n      name: `${schemaName}\\\\${variable}`,\n      declarations: schema.declarations.filter(d => !d.startsWith(variable)),\n      predicates: schema.predicates,\n      includes: schema.includes,\n    };\n    this.schemas.set(hidden.name, hidden);\n    return hidden;\n  }\n\n  public projectVariable(schemaName: string, variable: string): ZSchema | null {\n    const schema = this.schemas.get(schemaName);\n    if (!schema) return null;\n    const projected: ZSchema = {\n      name: `${schemaName}↾${variable}`,\n      declarations: schema.declarations.filter(d => d.startsWith(variable)),\n      predicates: schema.predicates.filter(p => p.includes(variable)),\n      includes: [],\n    };\n    this.schemas.set(projected.name, projected);\n    return projected;\n  }\n\n  public composeSchemas(first: string, second: string): ZSchema | null {\n    const s1 = this.schemas.get(first);\n    const s2 = this.schemas.get(second);\n    if (!s1 || !s2) return null;\n    const composed: ZSchema = {\n      name: `${first}⨟${second}`,\n      declarations: [...s1.declarations, ...s2.declarations.map(d => d + \"'\")],\n      predicates: [\n        ...s1.predicates,\n        ...s2.predicates,\n        `${first} holds before ${second}`,\n      ],\n      includes: [first, second],\n    };\n    return composed;\n  }\n\n  public validate(schemaName: string): { valid: boolean; errors: string[] } {\n    const schema = this.schemas.get(schemaName);\n    if (!schema) return { valid: false, errors: [`Schema \"${schemaName}\" not found`] };\n    const errors: string[] = [];\n    if (schema.declarations.length === 0) errors.push('No declarations');\n    for (const decl of schema.declarations) {\n      if (!decl.includes(':') && !decl.includes(';')) errors.push(`Invalid declaration: \"${decl}\"`);\n    }\n    if (schema.predicates.length === 0) errors.push('No predicates');\n    return { valid: errors.length === 0, errors };\n  }\n\n  public getErrors(): string[] { return [...this.validationErrors]; }\n}\n\n// === TLAStateExplorer: Explore state space of a TLA+ specification ===\ninterface TLASpec { name: string; variables: string[]; init: Record<string, unknown>; actions: TLAAction[]; invariants: string[]; }\ninterface TLAAction { name: string; guard: string; updates: Record<string, unknown>; }\ninterface TLAState { id: number; values: Record<string, unknown>; label: string; }\n\nclass TLAStateExplorer {\n  private states: TLAState[] = [];\n  private transitions: [number, number, string][] = [];\n  private stateCounter = 0;\n\n  public loadSpec(spec: TLASpec): void {\n    this.states = [{ id: this.stateCounter++, values: { ...spec.init }, label: 'initial' }];\n  }\n\n  public explore(spec: TLASpec, maxSteps: number = 10): { states: TLAState[]; transitions: [number, number, string][] } {\n    const queue: number[] = [0];\n    let steps = 0;\n    while (queue.length > 0 && steps < maxSteps) {\n      const currentId = queue.shift()!;\n      const currentState = this.states.find(s => s.id === currentId);\n      if (!currentState) continue;\n      for (const action of spec.actions) {\n        const guardHolds = this.evaluateGuard(action.guard, currentState.values);\n        if (guardHolds) {\n          const newValues = { ...currentState.values, ...action.updates };\n          const existing = this.states.find(s =>\n            JSON.stringify(s.values) === JSON.stringify(newValues)\n          );\n          if (existing) {\n            this.transitions.push([currentId, existing.id, action.name]);\n          } else {\n            const newId = this.stateCounter++;\n            this.states.push({ id: newId, values: newValues, label: `${action.name}_${newId}` });\n            this.transitions.push([currentId, newId, action.name]);\n            queue.push(newId);\n          }\n        }\n      }\n      steps++;\n    }\n    return { states: this.states, transitions: this.transitions };\n  }\n\n  private evaluateGuard(guard: string, values: Record<string, unknown>): boolean {\n    if (guard === 'true') return true;\n    if (guard === 'false') return false;\n    const match = guard.match(/(\\w+)\\s*(<|>|<=|>=|=|!=)\\s*(.+)/);\n    if (match) {\n      const varName = match[1];\n      const op = match[2];\n      const rhs = match[3].trim();\n      const lhsVal = values[varName] as number;\n      const rhsVal = /^\\d+$/.test(rhs) ? parseInt(rhs, 10) : (values[rhs] as number);\n      const ops: Record<string, (a: number, b: number) => boolean> = {\n        '<': (a, b) => a < b, '>': (a, b) => a > b, '<=': (a, b) => a <= b,\n        '>=': (a, b) => a >= b, '=': (a, b) => a === b, '!=': (a, b) => a !== b,\n      };\n      return ops[op]?.(lhsVal, rhsVal) ?? false;\n    }\n    return true;\n  }\n\n  public checkInvariant(invariant: string, spec: TLASpec): { holds: boolean; violatedStates: TLAState[] } {\n    const violated: TLAState[] = [];\n    for (const state of this.states) {\n      const holds = this.evaluateGuard(invariant, state.values);\n      if (!holds) violated.push(state);\n    }\n    return { holds: violated.length === 0, violatedStates: violated };\n  }\n\n  public getReachableStates(): TLAState[] { return [...this.states]; }\n  public getTransitionCount(): number { return this.transitions.length; }\n}\n\n// === HoareTripleValidator: Validate Hoare triples ===\ntype Command = { type: 'assign'; variable: string; expression: string } | { type: 'if'; condition: string; then: Command[]; else: Command[] } | { type: 'while'; condition: string; body: Command[]; invariant?: string } | { type: 'sequence'; commands: Command[] };\n\nclass HoareTripleValidator {\n  private counterexamples: string[] = [];\n\n  public validateTriple(precondition: string, program: Command[], postcondition: string): { valid: boolean; path: string[] } {\n    const symbolicState: Record<string, string> = {};\n    const path: string[] = [];\n    const result = this.executeSymbolic(precondition, program, symbolicState, path);\n    if (result === null) return { valid: false, path: this.counterexamples };\n    const postHolds = this.checkPostcondition(result, postcondition);\n    return { valid: postHolds, path };\n  }\n\n  private executeSymbolic(pre: string, commands: Command[], state: Record<string, string>, path: string[]): Record<string, string> | null {\n    let currentPre = pre;\n    const currentState = { ...state };\n    for (const cmd of commands) {\n      switch (cmd.type) {\n        case 'assign': {\n          path.push(`${cmd.variable} := ${cmd.expression}`);\n          const wp = this.weakestPrecondition(cmd, currentPre);\n          currentPre = wp;\n          currentState[cmd.variable] = cmd.expression;\n          break;\n        }\n        case 'if': {\n          path.push(`if ${cmd.condition}`);\n          state['_condition'] = cmd.condition;\n          const thenResult = this.executeSymbolic(`${currentPre} ∧ ${cmd.condition}`, cmd.then, currentState, path);\n          if (thenResult === null) { path.push('then branch failed'); return null; }\n          const elseResult = this.executeSymbolic(`${currentPre} ∧ ¬(${cmd.condition})`, cmd.else, currentState, path);\n          if (elseResult === null) { path.push('else branch failed'); return null; }\n          return thenResult;\n        }\n        case 'while': {\n          const invariant = cmd.invariant ?? 'true';\n          path.push(`while ${cmd.condition} invariant {${invariant}}`);\n          const bodyResult = this.executeSymbolic(`${invariant} ∧ ${cmd.condition}`, cmd.body, currentState, path);\n          if (bodyResult === null) return null;\n          currentPre = `${invariant} ∧ ¬(${cmd.condition})`;\n          break;\n        }\n        case 'sequence':\n          return this.executeSymbolic(currentPre, cmd.commands, currentState, path);\n      }\n    }\n    return currentState;\n  }\n\n  private weakestPrecondition(cmd: Command, postcondition: string): string {\n    if (cmd.type === 'assign') {\n      return postcondition.replace(new RegExp(cmd.variable, 'g'), `(${cmd.expression})`);\n    }\n    return postcondition;\n  }\n\n  private checkPostcondition(state: Record<string, string>, postcondition: string): boolean {\n    try {\n      return eval(postcondition.replace(/\\b(\\w+)\\b/g, (match) => {\n        if (state[match] !== undefined) return state[match];\n        if (/^\\d+$/.test(match)) return match;\n        if (match === 'true' || match === 'false') return match;\n        if (['∧', '∨', '¬', '→', '↔', '=', '>', '<', '≥', '≤'].includes(match)) return match;\n        if (['+', '-', '*', '/', '%', '&&', '||', '!', '==', '!=', '>=', '<='].includes(match)) return match;\n        return match;\n      })) as boolean;\n    } catch {\n      return false;\n    }\n  }\n}\n\n// === InvariantChecker: System invariant verification ===\ninterface SystemState { variables: Record<string, number>; timestep: number; }\ntype InvariantFn = (state: SystemState) => boolean;\n\nclass InvariantChecker<T> {\n  private invariants: Map<string, { check: InvariantFn; description: string }> = new Map();\n  private violations: { name: string; state: SystemState; description: string }[] = [];\n\n  public addInvariant(name: string, description: string, check: InvariantFn): void {\n    this.invariants.set(name, { check, description });\n  }\n\n  public checkAll(state: SystemState): { passed: number; failed: number; violations: { name: string; description: string }[] } {\n    const failures: { name: string; description: string }[] = [];\n    for (const [name, inv] of this.invariants) {\n      if (!inv.check(state)) {\n        failures.push({ name, description: inv.description });\n        this.violations.push({ name, state, description: inv.description });\n      }\n    }\n    return {\n      passed: this.invariants.size - failures.length,\n      failed: failures.length,\n      violations: failures,\n    };\n  }\n\n  public checkTrace(states: SystemState[]): { totalViolations: number; timeline: { timestep: number; violated: string[] }[] } {\n    const timeline: { timestep: number; violated: string[] }[] = [];\n    for (const state of states) {\n      const result = this.checkAll(state);\n      if (result.failed > 0) {\n        timeline.push({ timestep: state.timestep, violated: result.violations.map(v => v.name) });\n      }\n    }\n    return { totalViolations: this.violations.length, timeline };\n  }\n\n  public getViolationReport(): string {\n    if (this.violations.length === 0) return 'No violations found';\n    const byName = new Map<string, number>();\n    for (const v of this.violations) {\n      byName.set(v.name, (byName.get(v.name) ?? 0) + 1);\n    }\n    const lines = ['=== Invariant Violation Report ==='];\n    for (const [name, count] of byName) {\n      lines.push(`  ${name}: violated ${count}x`);\n    }\n    lines.push(`Total: ${this.violations.length} violations across ${byName.size} invariants`);\n    return lines.join('\\n');\n  }\n\n  public reset(): void { this.violations = []; }\n}\n\n// === Example usage ===\nconst engine = new ZSchemaEngine();\nengine.defineSchema('Book', ['id: ℕ', 'title: seq ℂhar', 'author: seq ℂhar', 'available: 𝔹'], ['#title > 0']);\nengine.defineSchema('Member', ['id: ℕ', 'name: seq ℂhar', 'borrowed: ℙ Book'], ['true']);\nconst combined = engine.includeSchema('Book', 'Member');\nconsole.log('Z Schema validation:', engine.validate('Book'));\nconsole.log('Combined schema:', combined?.name);\n\nconst spec: TLASpec = {\n  name: 'SimpleClock',\n  variables: ['hour', 'minute'],\n  init: { hour: 12, minute: 0 },\n  actions: [\n    { name: 'Tick', guard: 'minute < 59', updates: { minute: 0 } },\n    { name: 'TickRollover', guard: 'minute >= 59', updates: { minute: 0, hour: 0 } },\n  ],\n  invariants: ['hour >= 1', 'hour <= 12'],\n};\nconst explorer = new TLAStateExplorer();\nexplorer.loadSpec(spec);\nconst result = explorer.explore(spec, 5);\nconsole.log('TLA explored states:', result.states.length);\n\nconst validator = new HoareTripleValidator();\nconst swapProgram: Command[] = [\n  { type: 'assign', variable: 'temp', expression: 'x' },\n  { type: 'assign', variable: 'x', expression: 'y' },\n  { type: 'assign', variable: 'y', expression: 'temp' },\n];\nconst swapResult = validator.validateTriple('x = a ∧ y = b', swapProgram, 'x = b ∧ y = a');\nconsole.log('Hoare swap valid:', swapResult.valid);\n\nconst invChecker = new InvariantChecker<SystemState>();\ninvChecker.addInvariant('positive', 'All variables must be non-negative', (s) =>\n  Object.values(s.variables).every(v => v >= 0)\n);\ninvChecker.addInvariant('bounded', 'Values must be under 100', (s) =>\n  Object.values(s.variables).every(v => v < 100)\n);\nconst trace = [\n  { variables: { x: 5, y: 10 }, timestep: 0 },\n  { variables: { x: -1, y: 20 }, timestep: 1 },\n  { variables: { x: 50, y: 150 }, timestep: 2 },\n];\nconsole.log('Invariant trace check:', invChecker.checkTrace(trace));\nconsole.log(invChecker.getViolationReport());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-formal-verification-tools",
      children: "TypeScript: Formal Verification Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Propositional Logic Prover ===\ntype Formula = { type: 'var'; name: string } | { type: 'not'; operand: Formula } | { type: 'and'; left: Formula; right: Formula } | { type: 'or'; left: Formula; right: Formula } | { type: 'implies'; left: Formula; right: Formula };\n\nfunction evaluateFormula(formula: Formula, env: Map<string, boolean>): boolean {\n  switch (formula.type) {\n    case 'var': return env.get(formula.name) ?? false;\n    case 'not': return !evaluateFormula(formula.operand, env);\n    case 'and': return evaluateFormula(formula.left, env) && evaluateFormula(formula.right, env);\n    case 'or': return evaluateFormula(formula.left, env) || evaluateFormula(formula.right, env);\n    case 'implies': return !evaluateFormula(formula.left, env) || evaluateFormula(formula.right, env);\n  }\n}\n\nfunction isTautology(formula: Formula, vars: string[]): boolean {\n  const total = 1 << vars.length;\n  for (let i = 0; i < total; i++) {\n    const env = new Map<string, boolean>();\n    for (let j = 0; j < vars.length; j++) env.set(vars[j], (i & (1 << (vars.length - 1 - j))) !== 0);\n    if (!evaluateFormula(formula, env)) return false;\n  }\n  return true;\n}\n\n// === Propositional Logic Evaluator ===\ntype TruthTable = Record<string, boolean>;\nfunction evaluate(expr: string, vars: TruthTable): boolean {\n  let s = expr;\n  for (const [k, v] of Object.entries(vars)) s = s.replace(new RegExp(k, 'g'), v ? 'true' : 'false');\n  return Function(`return (${s})`)();\n}\nconsole.log(evaluate('a && b || !c', { a: true, b: false, c: true }));\n\n// === LTL Property Checker ===\ntype LTLOperator = 'G' | 'F' | 'X' | 'U';\ninterface LTLProperty { formula: string; trace: boolean[] }\nfunction checkLTL(prop: LTLProperty): boolean {\n  switch (prop.formula[0] as LTLOperator) {\n    case 'G': return prop.trace.every((v) => v);\n    case 'F': return prop.trace.some((v) => v);\n    case 'X': return prop.trace.length > 1 && prop.trace[1];\n    default: return false;\n  }\n}\nconsole.log(checkLTL({ formula: 'G(ok)', trace: [true, true, true, true] }));\nconsole.log(checkLTL({ formula: 'F(error)', trace: [false, false, true] }));\n\n// === Model Checking Path Generator ===\ninterface FSMCheck { states: string[]; alphabet: string[]; transitions: Map<string, Map<string, string>>; initial: string; accepting: string[]; }\nfunction generateAllPaths(fsm: FSMCheck, maxDepth: number): string[][] {\n  const paths: string[][] = [];\n  function dfs(state: string, path: string[]): void {\n    if (path.length >= maxDepth) { paths.push(path); return; }\n    const trans = fsm.transitions.get(state);\n    if (!trans) { paths.push(path); return; }\n    for (const [symbol, next] of trans) { dfs(next, [...path, symbol]); }\n  }\n  dfs(fsm.initial, []);\n  return paths;\n}\n\nconst fsmCheck: FSMCheck = {\n  states: ['S0', 'S1', 'S2'],\n  alphabet: ['0', '1'],\n  transitions: new Map([\n    ['S0', new Map([['0', 'S0'], ['1', 'S1']])],\n    ['S1', new Map([['0', 'S2'], ['1', 'S0']])],\n    ['S2', new Map([['0', 'S1'], ['1', 'S2']])],\n  ]),\n  initial: 'S0',\n  accepting: ['S0'],\n};\nconsole.log(generateAllPaths(fsmCheck, 3).slice(0, 5));\n\n// === Refinement Chain Verifier ===\ninterface RefinementStep { level: number; abstract: string; concrete: string; proofObligations: number; verified: boolean; }\nfunction verifyRefinementChain(chain: RefinementStep[]): { valid: boolean; gapAt: number[] } {\n  const gaps: number[] = [];\n  for (let i = 0; i < chain.length - 1; i++) {\n    if (chain[i].verified !== chain[i + 1].verified) gaps.push(i);\n  }\n  return { valid: gaps.length === 0, gapAt: gaps };\n}\nconsole.log(verifyRefinementChain([\n  { level: 0, abstract: 'Spec', concrete: 'Design A', proofObligations: 10, verified: true },\n  { level: 1, abstract: 'Design A', concrete: 'Design B', proofObligations: 8, verified: true },\n  { level: 2, abstract: 'Design B', concrete: 'Code', proofObligations: 15, verified: true },\n]));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between propositional logic and predicate logic?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the five components of a Finite State Machine."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a safety property and a liveness property in temporal logic?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the concept of weakest precondition with an example."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is a loop invariant and why is it useful?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare Z notation and B-Method. When would you use each?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What causes state explosion in model checking and how can it be mitigated?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write an FSM specification for a vending machine that accepts coins (5, 10, 25 cents), displays credit, dispenses items costing 75 cents, and returns change."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Using Hoare logic, prove that the following program correctly computes the maximum of two numbers:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if a ≥ b then max := a else max := b\n{ max = max(a, b) }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a Z schema for a library borrowing system that tracks member id, book id, due date, and fines."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use TLA+ syntax to specify a simple mutual exclusion protocol for two processes. Define the invariant that both processes cannot be in the critical section simultaneously."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A nuclear reactor control system has four states (STARTUP, POWER_OPERATION, SHUTDOWN, EMERGENCY) with the following constraints:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "From STARTUP, can transition to POWER_OPERATION only if temperature < 300°C and pressure < 150 bar"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "From POWER_OPERATION, transition to SHUTDOWN if temperature > 350°C or pressure > 170 bar"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "From any state, transition to EMERGENCY if radiation > 100 µSv/h"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "From EMERGENCY, only transition to SHUTDOWN is allowed (after radiation < 10)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never reach a state where both temperature > 400°C AND pressure > 200 bar simultaneously"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Formalise this system as an FSM with guards. Implement a TypeScript formal verifier that checks all reachable states for safety property violations. Generate counterexamples for any invalid configurations."
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