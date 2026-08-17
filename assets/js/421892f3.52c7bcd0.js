"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[11254],{

/***/ 71333
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_artificial_intelligence_07_fol_md_421_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-artificial-intelligence-07-fol-md-421.json
const site_docs_courses_artificial_intelligence_07_fol_md_421_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/artificial-intelligence/07-fol","title":"Chapter 7: First-Order Logic and Inference","description":"Previous Knowledge Representation | Next Logical Reasoning and Inference","source":"@site/docs/courses/artificial-intelligence/07-fol.md","sourceDirName":"courses/artificial-intelligence","slug":"/artificial-intelligence/07-fol","permalink":"/ai-engineering-journey/artificial-intelligence/07-fol","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"07-fol","slug":"/artificial-intelligence/07-fol","title":"Chapter 7: First-Order Logic and Inference","sidebar_label":"Chapter 7: First-Order Logic and Inference","sidebar_position":12},"sidebar":"course-artificial-intelligence","previous":{"title":"Chapter 6: Logical Agents and Propositional Logic","permalink":"/ai-engineering-journey/artificial-intelligence/06-logic"},"next":{"title":"Chapter 7: Logical Reasoning and Inference","permalink":"/ai-engineering-journey/artificial-intelligence/07-logical-reasoning"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/artificial-intelligence/07-fol.md


const frontMatter = {
	id: '07-fol',
	slug: '/artificial-intelligence/07-fol',
	title: 'Chapter 7: First-Order Logic and Inference',
	sidebar_label: 'Chapter 7: First-Order Logic and Inference',
	sidebar_position: 12
};
const contentTitle = 'Chapter 7: First-Order Logic and Inference';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why FOL Matters — Contracts, Not Facts",
  "id": "why-fol-matters--contracts-not-facts",
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
  "value": "Propositional Logic vs First-Order Logic",
  "id": "propositional-logic-vs-first-order-logic",
  "level": 3
}, {
  "value": "Why First-Order Logic?",
  "id": "why-first-order-logic",
  "level": 3
}, {
  "value": "Syntax of FOL",
  "id": "syntax-of-fol",
  "level": 3
}, {
  "value": "Semantics of FOL",
  "id": "semantics-of-fol",
  "level": 3
}, {
  "value": "Quantifiers: Universal and Existential",
  "id": "quantifiers-universal-and-existential",
  "level": 3
}, {
  "value": "Substitution",
  "id": "substitution",
  "level": 3
}, {
  "value": "Unification",
  "id": "unification",
  "level": 3
}, {
  "value": "Skolemization",
  "id": "skolemization",
  "level": 3
}, {
  "value": "CNF Conversion (Conjunctive Normal Form)",
  "id": "cnf-conversion-conjunctive-normal-form",
  "level": 3
}, {
  "value": "FOL Inference Methods",
  "id": "fol-inference-methods",
  "level": 3
}, {
  "value": "Lifting Lemma",
  "id": "lifting-lemma",
  "level": 3
}, {
  "value": "Resolution Principle in FOL",
  "id": "resolution-principle-in-fol",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — FOL Syntax",
  "id": "quick-reference--fol-syntax",
  "level": 2
}, {
  "value": "Edge Cases Summary",
  "id": "edge-cases-summary",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Q1: Explain the Unification Algorithm with Occurs Check",
  "id": "q1-explain-the-unification-algorithm-with-occurs-check",
  "level": 3
}, {
  "value": "Q2: How Does Resolution Work in FOL? Why is it Refutation-Complete?",
  "id": "q2-how-does-resolution-work-in-fol-why-is-it-refutation-complete",
  "level": 3
}, {
  "value": "Q3: Steps to Convert FOL to CNF",
  "id": "q3-steps-to-convert-fol-to-cnf",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
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
  "value": "Summary",
  "id": "summary",
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
    hr: "hr",
    img: "img",
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
        id: "chapter-7-first-order-logic-and-inference",
        children: "Chapter 7: First-Order Logic and Inference"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/06-knowledge-representation",
        children: "Chapter 6: Knowledge Representation"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/07-logical-reasoning",
        children: "Chapter 7: Logical Reasoning and Inference"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the limitations of Propositional Logic and the advantages of First-Order Logic (FOL)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the syntax of FOL: objects, relations, functions, and quantifiers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Translate complex natural language sentences into FOL."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the processes of Unification and Lifting in logical inference."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare Forward Chaining and Backward Chaining inference strategies."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert FOL sentences to Conjunctive Normal Form (CNF) via Skolemization."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the unification algorithm and resolution principle in FOL theorem proving."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-fol-matters--contracts-not-facts",
      children: "Why FOL Matters — Contracts, Not Facts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy (Contract Law):"
      }), " Propositional Logic is like a checklist of facts — \"It is raining,\" \"The contract was signed.\" But contracts are far richer: they say \"Every party must sign before the effective date\" (universal claim) and \"There exists a notary who witnessed the signatures\" (existential claim). A contract that said only \"Party A signed. Party B signed. Effective date passed.\" would miss the conditional structure and the scope of obligations. FOL is the language of contracts — it says ", (0,jsx_runtime.jsx)(_components.em, {
        children: "for every"
      }), " object of a certain kind, ", (0,jsx_runtime.jsx)(_components.em, {
        children: "there exists"
      }), " some relation or object that satisfies a condition. Without FOL, you cannot represent general truths that span entire classes of objects, and no AI system can reason about the world beyond isolated facts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters in AI:"
      }), " Every modern knowledge representation system — from Prolog compilers to the Semantic Web (OWL), from automated theorem provers to database query engines — uses FOL or a decidable subset of it. Mastering FOL is the gateway to understanding how machines represent ", (0,jsx_runtime.jsx)(_components.em, {
        children: "general knowledge"
      }), ", not just specific facts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Topics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Terms"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Why FOL?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Objects, relations, functions, quantifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expressive power vs PL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax of FOL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constants, predicates, functions, variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atomic sentences, terms, well-formed formulas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Semantics of FOL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interpretation, domain, model, truth conditions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Herbrand interpretation, satisfaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal (∀), Existential (∃), nested quantifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scope, bound vs free variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Substitution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable substitution, ground substitution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{var/term}, composition of substitutions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MGU, occurs check, unification algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most General Unifier, disagreement set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Skolemization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminating existential quantifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skolem constant, Skolem function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CNF Conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normalization for resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prenex form, conjunctive normal form"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inference in FOL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal instantiation, lifting, resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Soundness, completeness, semi-decidability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inference Strategies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward chaining, backward chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data-driven, goal-driven"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[PL Limitations] --> B[FOL]\n    B --> C[Syntax: Terms & Formulas]\n    B --> D[Semantics: Interpretation]\n    B --> E[Quantifiers: ∀ and ∃]\n    C --> F[Substitution]\n    F --> G[Unification & MGU]\n    E --> H[Skolemization]\n    H --> I[CNF Conversion]\n    I --> J[Resolution Principle]\n    B --> K[Inference Strategies]\n    K --> L[Forward Chaining]\n    K --> M[Backward Chaining]\n    G --> N[Lifting Lemma]\n    N --> O[Generalized Modus Ponens]\n    J --> P[Refutation Completeness]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/artificial-intelligence/ch07-fol.png",
        alt: "First-Order Logic"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " FOL extends propositional logic with objects, relations, functions, and quantifiers — enabling the representation of general truths about entire classes of objects rather than just specific facts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "propositional-logic-vs-first-order-logic",
      children: "Propositional Logic vs First-Order Logic"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Propositional Logic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "First-Order Logic"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Atomic Unit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Propositions (A, B, C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predicates applied to terms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Objects"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not representable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constants, variables, functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Relations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not representable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predicates of any arity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Quantifiers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∀ (for all), ∃ (there exists)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Expressiveness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specific facts only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General truths about classes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Human(Socrates) → Mortal(Socrates)"
            }), " cannot be expressed as a schema — must enumerate"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "∀x (Human(x) → Mortal(x))"
            }), " captures the general rule once"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truth-table decidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semi-decidable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Domain Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed, implicit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit, any cardinality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Variables"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes — with substitution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Functions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes — term construction"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-first-order-logic",
      children: "Why First-Order Logic?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["While Propositional Logic assumes the world contains facts, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "First-Order Logic (FOL)"
      }), " assumes the world contains:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Objects"
        }), ": People, houses, numbers, colors, days of the week."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Relations"
        }), ": Red, round, brother of, bigger than, located-in."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functions"
        }), ": Father of, best friend, plus one, capital-city-of."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This allows for much more expressive power, especially when combined with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "quantifiers"
      }), ". In PL you would need a separate rule for every person: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Human(Socrates) → Mortal(Socrates)"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Human(Plato) → Mortal(Plato)"
      }), ", ... In FOL, one axiom suffices: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "∀x (Human(x) → Mortal(x))"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-of-fol",
      children: "Syntax of FOL"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy (Grammar of a Language):"
      }), " Just as English grammar defines how nouns, verbs, and adjectives combine into valid sentences, FOL syntax defines how terms, predicates, and quantifiers combine into well-formed formulas (WFFs). You cannot write \"Runs quickly John\" in English; likewise, you cannot write ", (0,jsx_runtime.jsx)(_components.code, {
        children: "∀P(x)"
      }), " in FOL — quantifiers range over objects, not predicates in first-order logic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alphabet of FOL:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Symbol Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specific objects"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "john"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "2"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "red"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "null"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Placeholders for objects"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "x"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "y"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "z"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "person1"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Predicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relations or properties"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Brother(_, _)"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IsMortal(_)"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "< (_, _)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map objects to objects"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fatherOf(_)"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "plusOne(_)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connectives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical operators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∧, ∨, ¬, →, ↔"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scope operators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∀, ∃"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Punctuation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grouping"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "("
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ")"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ","
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Well-Formed Formulas (WFFs):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "term"
        }), " is a constant, a variable, or a function applied to terms: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fatherOf(john)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "42"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "atomic formula"
        }), " is a predicate applied to terms: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Brother(john, richard)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IsMortal(x)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complex formulas"
        }), " are built from atomic formulas using connectives and quantifiers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm: Parse and Validate an FOL WFF"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: A string expression E\nOutput: True if E is a valid WFF, False otherwise\n\n1. TOKENIZE E into symbols (constants, variables, predicates, operators)\n2. IDENTIFY quantifiers ∀ and ∃; ensure each binds a variable\n3. CHECK that every predicate has the correct arity of arguments\n4. VERIFY that arguments are valid terms (constants, variables, or function applications)\n5. VERIFY that connectives (∧, ∨, ¬, →, ↔) appear between valid subformulas\n6. ENSURE all parentheses are balanced\n7. RETURN True if all checks pass, else False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function isWFF(expr):\n    tokens ← tokenize(expr)\n    stack ← []\n    for token in tokens:\n        if token is quantifier:\n            expect(variable after quantifier)\n        else if token is predicate:\n            expect(correct arity of terms in parentheses)\n        else if token is '(':\n            stack.push(token)\n        else if token is ')':\n            if stack empty: return False; stack.pop()\n    return stack empty\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import re\n\ndef tokenize(expr):\n    pattern = r'∀|∃|[∧∨¬→↔]|[a-zA-Z_][a-zA-Z0-9_]*|[()]'\n    return re.findall(pattern, expr)\n\ndef is_wff(expr):\n    tokens = tokenize(expr)\n    paren_count = 0\n    i = 0\n    while i < len(tokens):\n        t = tokens[i]\n        if t in {'∀', '∃'}:\n            if i + 1 >= len(tokens) or not tokens[i + 1].islower():\n                return False\n            i += 1\n        elif t.isupper() and t not in {'∀', '∃'}:\n            if i + 1 < len(tokens) and tokens[i + 1] == '(':\n                pass\n        elif t == '(':\n            paren_count += 1\n        elif t == ')':\n            paren_count -= 1\n            if paren_count < 0: return False\n        i += 1\n    return paren_count == 0\n\nprint(is_wff(\"∀x Human(x) → Mortal(x)\"))\nprint(is_wff(\"∀ ∀x Px\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time: O(n)"
        }), " where n is the number of tokens — each token is visited exactly once."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space: O(1)"
        }), " auxiliary (only a counter for parentheses), or O(n) if building a parse tree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why linear?"
        }), " WFF validation is essentially a parenthesis-checking problem with additional syntactic guards for quantifiers and arity; no backtracking is required."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Empty expression → False (no valid formula)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Quantifier without variable (", (0,jsx_runtime.jsx)(_components.code, {
          children: "∀ (P(x))"
        }), ") → invalid."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Free variable in a sentence (formula with no quantifier binding it) — allowed in FOL but not in a closed formula (sentence)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nested quantifiers with same variable name — shadowing is allowed but error-prone in practice."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "semantics-of-fol",
      children: "Semantics of FOL"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy (Interpretation in Court):"
      }), " A contract clause means nothing until a judge interprets it against a specific situation. \"The vehicle must be registered\" — does \"vehicle\" mean cars only, or bicycles too? In FOL, a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "model"
      }), " (or interpretation) assigns real meaning to symbols: constants pick out objects, predicates pick out sets of tuples, functions pick out mappings. Only then does a formula become true or false."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Formal Definition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "interpretation"
      }), " (model) ", (0,jsx_runtime.jsx)(_components.em, {
        children: "M"
      }), " consists of:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "domain"
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "D"
        }), " (non-empty set of objects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "assignment"
        }), " that maps:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Each constant ", (0,jsx_runtime.jsx)(_components.em, {
              children: "c"
            }), " → an element of ", (0,jsx_runtime.jsx)(_components.em, {
              children: "D"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Each predicate ", (0,jsx_runtime.jsx)(_components.em, {
              children: "P"
            }), " of arity ", (0,jsx_runtime.jsx)(_components.em, {
              children: "n"
            }), " → a set of ", (0,jsx_runtime.jsx)(_components.em, {
              children: "n"
            }), "-tuples from ", (0,jsx_runtime.jsx)(_components.em, {
              children: "D"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Each function ", (0,jsx_runtime.jsx)(_components.em, {
              children: "f"
            }), " of arity ", (0,jsx_runtime.jsx)(_components.em, {
              children: "n"
            }), " → a function from ", (0,jsx_runtime.jsx)(_components.em, {
              children: "D^n"
            }), " → ", (0,jsx_runtime.jsx)(_components.em, {
              children: "D"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Truth conditions"
      }), " under interpretation ", (0,jsx_runtime.jsx)(_components.em, {
        children: "M"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "P(t₁, ..., tₙ)"
        }), " is true iff the tuple of interpretations of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "t₁...tₙ"
        }), " is in the set assigned to ", (0,jsx_runtime.jsx)(_components.em, {
          children: "P"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "∀x φ[x]"
        }), " is true iff for every ", (0,jsx_runtime.jsx)(_components.em, {
          children: "d"
        }), " ∈ ", (0,jsx_runtime.jsx)(_components.em, {
          children: "D"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "φ[d]"
        }), " is true."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "∃x φ[x]"
        }), " is true iff there exists some ", (0,jsx_runtime.jsx)(_components.em, {
          children: "d"
        }), " ∈ ", (0,jsx_runtime.jsx)(_components.em, {
          children: "D"
        }), " such that ", (0,jsx_runtime.jsx)(_components.code, {
          children: "φ[d]"
        }), " is true."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "φ ∧ ψ"
        }), " is true iff both φ and ψ are true (similarly for other connectives)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace — Semantics of ∀x (Human(x) → Mortal(x)):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Interpretation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Domain D"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Human"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Mortal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Formula True?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "M1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{Socrates, Plato}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{Socrates, Plato}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{Socrates, Plato}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes — every human is mortal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "M2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{Socrates, Plato, Zeus}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{Socrates, Plato, Zeus}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{Socrates, Plato}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No — Zeus is human but not mortal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "M3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{Socrates, Plato, Zeus}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{Socrates, Plato}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{Socrates, Plato}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes — the non-human Zeus is irrelevant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "M4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Invalid — domain must be non-empty"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Checking truth in a finite model of size |", (0,jsx_runtime.jsx)(_components.em, {
          children: "D"
        }), "| = ", (0,jsx_runtime.jsx)(_components.em, {
          children: "k"
        }), " for a formula of length ", (0,jsx_runtime.jsx)(_components.em, {
          children: "n"
        }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "O(k^n)"
        }), " worst-case (quantifier alternation)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why exponential?"
        }), " Each universal quantifier adds a factor of ", (0,jsx_runtime.jsx)(_components.em, {
          children: "k"
        }), ": checking ", (0,jsx_runtime.jsx)(_components.code, {
          children: "∀x ∀y P(x,y)"
        }), " requires ", (0,jsx_runtime.jsx)(_components.em, {
          children: "k²"
        }), " evaluations."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This is why FOL model checking is PSPACE-complete in general, but for finite models, bounded model checking can be practical."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quantifiers-universal-and-existential",
      children: "Quantifiers: Universal and Existential"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy (Employee Handbook):"
      }), " A company policy might say \"Every employee must complete the training\" (∀) — this applies universally across all employees. Or \"There exists a backup server in case of failure\" (∃) — there is at least one, but it does not have to be every server. Mix them: \"Every department has at least one manager who approves expense reports\" — ∀x (Department(x) → ∃y (Manager(y) ∧ ApprovesExpense(y,x)))."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Quantifier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "True When"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "False When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀x P(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "For all x, P holds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Every domain element satisfies P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "At least one counterexample"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∃x P(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "There exists x such that P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "At least one domain element satisfies P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No element satisfies P"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nested Quantifier Patterns:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Example in FOL"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀x ∀y P(x,y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "For every pair, P holds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀x ∀y (Brother(x,y) → Sibling(x,y))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∃x ∃y P(x,y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "There exists a pair where P holds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∃x ∃y (Parent(x,y))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀x ∃y P(x,y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Every x has some y related to it"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀x Person(x) → ∃y Mother(y,x)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∃x ∀y P(x,y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "There is an x that relates to every y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∃x ∀y (Loves(x,y)) — universal lover"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀x ∃y Loves(y,x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Everyone is loved by someone (OK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Distinct from ∀x ∃y Loves(x,y) — everyone loves someone"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty domain:"
        }), " FOL and most logics require a non-empty domain; otherwise ∀x P(x) would be vacuously true and ∃x P(x) would be false for all P."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variable capture:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "∀x (∃x P(x))"
        }), " — the inner ∃x ", (0,jsx_runtime.jsx)(_components.em, {
          children: "shadows"
        }), " the outer ∀. The outer quantifier is effectively dead. Most practical reasoners rename variables to avoid this."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "substitution",
      children: "Substitution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy (Mail Merge):"
      }), " A form letter says \"Dear {Name}, your order #{OrderID} has shipped.\" The substitution ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{Name/John, OrderID/1024}"
      }), " fills in the blanks. In FOL, substitution is the same idea — replace variables with terms before applying inference rules."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "substitution"
      }), " θ is a finite set of mappings ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{v₁/t₁, v₂/t₂, ..., vₙ/tₙ}"
      }), " where each ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vᵢ"
      }), " is a distinct variable and each ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tᵢ"
      }), " is a term (not containing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vᵢ"
      }), " in most practical cases — see occurs check)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Types of Substitutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ground substitution:"
        }), " Maps every variable to a ground term (no variables). Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{x/john, y/richard}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variable-pure substitution:"
        }), " Maps variables to variables. Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{x/y, y/z}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty substitution:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{}"
        }), " — no replacements; identity operation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm: Apply Substitution θ to Expression E"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: Expression E, substitution θ = {v₁/t₁, ..., vₙ/tₙ}\nOutput: Expression Eθ with all vᵢ replaced by tᵢ\n\n1. IF E is a constant, RETURN E\n2. IF E is a variable vᵢ IN θ, RETURN tᵢ\n3. IF E is a variable NOT IN θ, RETURN E\n4. IF E is a compound (function or predicate applied to args A₁..Aₙ):\n   a. FOR each arg Aᵢ:\n      Aᵢ' ← ApplySubstitution(Aᵢ, θ)\n   b. RETURN the reconstructed expression with A₁'..Aₙ'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function applySubstitution(expr, theta):\n    if isConstant(expr) or isPredicateSymbol(expr):\n        return expr\n    if isVariable(expr):\n        return theta[expr] if expr in theta else expr\n    if isCompound(expr):\n        newArgs ← [applySubstitution(arg, theta) for arg in expr.args]\n        return Compound(expr.functor, newArgs)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def apply_substitution(expr, theta):\n    \"\"\"\n    expr: tuple ('var', name) or ('const', name) or ('func', name, args) or ('pred', name, args)\n    theta: dict {var_name: term}\n    \"\"\"\n    kind = expr[0]\n    if kind == 'const':\n        return expr\n    if kind == 'var':\n        var_name = expr[1]\n        return theta.get(var_name, expr)\n    if kind in ('func', 'pred'):\n        _, name, args = expr\n        new_args = [apply_substitution(a, theta) for a in args]\n        return (kind, name, tuple(new_args))\n\n# Example\ntheta = {'x': ('const', 'john')}\nexpr = ('pred', 'Knows', (('var', 'x'), ('const', 'mary')))\nresult = apply_substitution(expr, theta)\nprint(result)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Composition of Substitutions:"
      }), " If θ₁ = {x/A} and θ₂ = {y/B}, then θ₁ ∘ θ₂ is the substitution you get by applying θ₂ then θ₁ (or equivalently, combining and resolving)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time: O(n)"
        }), " where n is the number of symbols in the expression — each symbol is visited once."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space: O(n)"
        }), " for the new expression."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why linear?"
        }), " No backtracking; it is a simple tree traversal with dictionary lookup at each variable node."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty substitution {}"
        }), " applies no change — identity function."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Circular substitution"
        }), " {x/f(x)} — leads to infinite terms. The occurs check prevents this."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Overlapping substitutions"
        }), " {x/y, y/f(x)} — composition may produce unexpected results if applied sequentially without normalization."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unification",
      children: "Unification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy (Marriage Registration):"
      }), " Two incomplete forms say \"Bride: Alice Smith\" and \"Groom: X\" and another form says \"Bride: Y\" and \"Groom: Bob Jones.\" A registrar matches them by finding the substitution {X/Bob Jones, Y/Alice Smith} that makes both forms describe the same couple. Unification is finding a substitution that makes two logical expressions identical."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Two expressions E₁ and E₂ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "unify"
      }), " under substitution θ if E₁θ = E₂θ. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Most General Unifier (MGU)"
      }), " is the substitution that makes them identical while imposing the fewest constraints."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm: Unification (with Occurs Check)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: Two expressions E₁, E₂\nOutput: MGU θ or FAIL\n\n1. IF E₁ and E₂ are identical constants or variables, RETURN {}\n2. IF E₁ is a variable:\n   a. IF E₁ occurs in E₂ (occurs check), RETURN FAIL\n   b. RETURN {E₁/E₂}\n3. IF E₂ is a variable:\n   a. IF E₂ occurs in E₁, RETURN FAIL\n   b. RETURN {E₂/E₁}\n4. IF E₁ and E₂ are both compound (same functor/arity):\n   a. θ ← {}\n   b. FOR each pair of corresponding arguments (A₁, A₂) in zip(E₁.args, E₂.args):\n      θ' ← Unify(A₁θ, A₂θ)\n      IF θ' = FAIL, RETURN FAIL\n      θ ← compose(θ, θ')\n   c. RETURN θ\n5. OTHERWISE, RETURN FAIL\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function unify(E1, E2, theta=empty):\n    if theta is FAIL: return FAIL\n    E1 ← apply(theta, E1)\n    E2 ← apply(theta, E2)\n    if E1 == E2: return theta\n    if isVariable(E1): return unifyVar(E1, E2, theta)\n    if isVariable(E2): return unifyVar(E2, E1, theta)\n    if isCompound(E1) and isCompound(E2):\n        if E1.functor != E2.functor or len(E1.args) != len(E2.args):\n            return FAIL\n        for a1, a2 in zip(E1.args, E2.args):\n            theta ← unify(a1, a2, theta)\n        return theta\n    return FAIL\n\nfunction unifyVar(v, expr, theta):\n    if v occurs in expr: return FAIL\n    theta[v] ← expr\n    return theta\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def is_variable(term):\n    return isinstance(term, str) and term[0].islower()\n\ndef is_compound(term):\n    return isinstance(term, tuple)\n\ndef unify(e1, e2, theta=None):\n    if theta is None:\n        theta = {}\n    e1 = apply_substitution(e1, theta)\n    e2 = apply_substitution(e2, theta)\n\n    if e1 == e2:\n        return theta\n    if is_variable(e1):\n        return unify_var(e1, e2, theta)\n    if is_variable(e2):\n        return unify_var(e2, e1, theta)\n    if is_compound(e1) and is_compound(e2):\n        if e1[0] != e2[0] or len(e1[1:]) != len(e2[1:]):\n            return None\n        for a1, a2 in zip(e1[1:], e2[1:]):\n            theta = unify(a1, a2, theta)\n            if theta is None:\n                return None\n        return theta\n    return None\n\ndef unify_var(v, expr, theta):\n    if v == expr:\n        return theta\n    if occurs_check(v, expr, theta):\n        return None\n    theta[v] = expr\n    return theta\n\ndef occurs_check(var, expr, theta):\n    if var == expr:\n        return True\n    if is_variable(expr) and expr in theta:\n        return occurs_check(var, theta[expr], theta)\n    if is_compound(expr):\n        return any(occurs_check(var, arg, theta) for arg in expr[1:])\n    return False\n\ndef apply_substitution(expr, theta):\n    if is_variable(expr):\n        return theta.get(expr, expr)\n    if is_compound(expr):\n        name = expr[0]\n        args = tuple(apply_substitution(a, theta) for a in expr[1:])\n        return (name,) + args\n    return expr\n\n# Dry run example\ne1 = ('Knows', 'john', 'x')\ne2 = ('Knows', 'y', ('Mother', 'y'))\nresult = unify(e1, e2)\nprint(f\"MGU: {result}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace Table — Unification Trace:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "E₁θ Current"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "E₂θ Current"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Disagreement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "θ Accumulated"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Knows(john, x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Knows(y, Mother(y))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "john vs y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{y/john}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{y/john}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Knows(john, x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Knows(john, Mother(john))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "x vs Mother(john)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{x/Mother(john)}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{y/john, x/Mother(john)}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Knows(john, Mother(john))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Knows(john, Mother(john))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{y/john, x/Mother(john)}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Occurs Check Failure:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "E₁θ"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "E₂θ"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Disagreement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "P(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "P(f(x))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "x vs f(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Occurs check: x ∈ f(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "FAIL"
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
            children: "Q(y, y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Q(z, f(z))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "y vs z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{z/y}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{z/y}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Q(y, y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Q(y, f(y))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "y vs f(y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Occurs check: y ∈ f(y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "FAIL"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time: O(n·α(n))"
        }), " in most implementations, where n is expression size (essentially linear with efficient data structures), but worst-case ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "O(n²)"
        }), " if terms are repeatedly traversed without structure sharing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space: O(n)"
        }), " for the substitution map."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why near-linear?"
        }), " Each comparison reduces the set of variables needing unification; the occurs check adds an O(n) traversal per variable binding, but in practice most bindings are trivial."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Produces the MGU — the least constraining substitution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Without occurs check, can create infinite terms (unsound)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Complete for syntactic unification of first-order terms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Variable renaming required to avoid conflicts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Determines unifiability in finite time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Cannot unify higher-order terms (undecidable)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Occurs check failure:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "f(x)"
        }), " cannot unify — x occurs inside f(x), creating circular reference."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty substitution result:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "P(a,b)"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "P(a,b)"
        }), " unify with θ = {} (already identical)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variable name conflicts:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "P(x)"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "P(y)"
        }), " — unify with {x/y} or {y/x}, both are MGUs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function symbol mismatch:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "P(f(x))"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "P(g(y))"
        }), " — fail (f ≠ g)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "skolemization",
      children: "Skolemization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy (Witness in Court):"
      }), " The claim \"Someone committed the crime\" (∃x Criminal(x)). To prove it, the prosecutor does not say \"Let us call the unknown person X\" — they find a specific person, say \"John Doe,\" and argue \"John Doe committed the crime.\" Skolemization is the same idea: replace \"there exists\" with a specific (new) constant or function that serves as a concrete witness."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Skolemization eliminates existential quantifiers from an FOL sentence by replacing existentially quantified variables with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Skolem constants"
      }), " (when no universal quantifier precedes) or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Skolem functions"
      }), " (when universals precede the existential)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the existential is not preceded by any universal: replace ", (0,jsx_runtime.jsx)(_components.code, {
          children: "∃x P(x)"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "P(c)"
        }), " where ", (0,jsx_runtime.jsx)(_components.em, {
          children: "c"
        }), " is a fresh constant."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the existential is preceded by universals ", (0,jsx_runtime.jsx)(_components.code, {
          children: "∀y₁...∀yₙ ∃x"
        }), ": replace x with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "f(y₁,...,yₙ)"
        }), " where ", (0,jsx_runtime.jsx)(_components.em, {
          children: "f"
        }), " is a fresh function symbol."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm: Skolemize an FOL Formula"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: FOL formula F (in prenex form: all quantifiers at front)\nOutput: Skolemized formula F' (no existential quantifiers)\n\n1. SET F ← PrenexNormalForm(F) — all quantifiers moved to front\n2. WHILE F contains ∃:\n   a. FIND the leftmost existential quantifier ∃x in the prefix\n   b. GET the list of universal quantifiers ∀y₁...∀yₙ before ∃x\n   c. IF n = 0:\n      REPLACE x with fresh constant c not used in the formula\n   ELSE:\n      REPLACE x with fresh function f(y₁,...,yₙ) not used in the formula\n   d. REMOVE the existential quantifier ∃x from the prefix\n   e. UPDATE the matrix (quantifier-free part) with the replacement\n3. RETURN the resulting universal formula\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function skolemize(F):\n    F ← prenexNormalForm(F)\n    while hasExistential(F):\n        ∀y₁...∀yₙ ∃x, Matrix ← splitPrefix(F)\n        if n == 0:\n            c ← newSkolemConstant()\n            Matrix ← replaceAll(x, c, Matrix)\n        else:\n            f ← newSkolemFunction(n)\n            Matrix ← replaceAll(x, f(y₁,...,yₙ), Matrix)\n        F ← (∀y₁...∀yₙ, Matrix)\n    return F\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import re\nfrom itertools import count\n\n_skolem_counter = count()\n\ndef new_skolem(name=\"sk\"):\n    return f\"{name}_{next(_skolem_counter)}\"\n\ndef skolemize(prenex_formula):\n    match = re.match(\n        r'((?:[∀∃]\\s*\\w+\\s*)*)(.*)',\n        prenex_formula.strip()\n    )\n    if not match:\n        return prenex_formula\n\n    prefix = match.group(1).strip()\n    matrix = match.group(2).strip()\n    quantifiers = re.findall(r'([∀∃])\\s*(\\w+)', prefix)\n\n    universals = []\n    for qtype, var in quantifiers:\n        if qtype == '∃':\n            if not universals:\n                sk = new_skolem(\"c\")\n            else:\n                sk = f\"{new_skolem('f')}({','.join(universals)})\"\n            matrix = re.sub(r'\\b' + var + r'\\b', sk, matrix)\n        else:\n            universals.append(var)\n\n    uni_prefix = ' '.join(f'∀{u}' for u in universals)\n    return f\"{uni_prefix} {matrix}\" if universals else matrix\n\n\nf1 = \"∃x ∀y Loves(y, x)\"\nprint(f\"Original: {f1}\")\nprint(f\"Skolemized: {skolemize(f1)}\")\n\nf2 = \"∀x ∃y ∀z ∃w P(x,y,z,w)\"\nprint(f\"Original: {f2}\")\nprint(f\"Skolemized: {skolemize(f2)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace — Skolemization of ∀x ∃y ∀z ∃w P(x,y,z,w):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Current Prefix"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Matrix"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Resulting Formula"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀x ∃y ∀z ∃w"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "P(x,y,z,w)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀x ∃y ∀z ∃w P(x,y,z,w)"
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
            children: "∀x ∃y ∀z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "P(x, f₁(x), z, ∃w)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∃y after ∀x: y→f₁(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀x ∀z ∃w P(x, f₁(x), z, w)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀x ∀z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "P(x, f₁(x), z, f₂(x,z))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∃w after ∀x∀z: w→f₂(x,z)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀x ∀z P(x, f₁(x), z, f₂(x,z))"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time: O(n)"
        }), " for a single pass scanning the prefix and substituting in the matrix."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space: O(n)"
        }), " for the transformed formula."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why linear?"
        }), " Skolemization is a purely syntactic transformation — it replaces variables with terms, no search involved."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Eliminates existential quantifiers without losing satisfiability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Skolemized formula is NOT logically equivalent — only equisatisfiable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Produces a universal formula simpler for resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Introduces new function symbols, increasing term complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Preserves the existence of a model (if original was satisfiable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Skolem functions may introduce non-Herbrand interpretations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Enables CNF conversion and resolution-based theorem proving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Not reversible — information about which variable was existential is lost"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No existential quantifier:"
        }), " Skolemization is identity — nothing to remove."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nested existentials with no universals:"
        }), " Both become distinct Skolem constants ", (0,jsx_runtime.jsx)(_components.code, {
          children: "∃x ∃y P(x,y) → P(c₁, c₂)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Existential inside universal only:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "∀x ∃y P(x,y) → ∀x P(x, f(x))"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rename conflicts:"
        }), " Skolem symbols must be fresh; if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "f"
        }), " already exists in the formula, use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "f₁"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "f₂"
        }), ", etc."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cnf-conversion-conjunctive-normal-form",
      children: "CNF Conversion (Conjunctive Normal Form)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy (Legal Requirements Checklist):"
      }), " A contract must meet multiple independent conditions, each of which is a set of alternative ways to satisfy it. For example: \"The tenant must (pay rent OR provide service) AND (give notice OR waive rights).\" This is CNF — a conjunction of disjunctions. Resolution theorem provers require all FOL formulas in this standard form."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Conjunctive Normal Form (CNF) is a conjunction of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "clauses"
      }), ", where each clause is a disjunction of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "literals"
      }), " (atomic formulas or their negations). Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(¬P(x) ∨ Q(x)) ∧ (R(y) ∨ ¬S(y))"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm: Convert FOL to CNF"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: FOL sentence F\nOutput: Set of clauses (CNF form)\n\n1. ELIMINATE implications (→, ↔):\n   Replace φ → ψ with ¬φ ∨ ψ\n   Replace φ ↔ ψ with (¬φ ∨ ψ) ∧ (φ ∨ ¬ψ)\n\n2. MOVE negations inward (De Morgan's laws):\n   ¬¬φ → φ\n   ¬(φ ∧ ψ) → ¬φ ∨ ¬ψ\n   ¬(φ ∨ ψ) → ¬φ ∧ ¬ψ\n   ¬∀x φ(x) → ∃x ¬φ(x)\n   ¬∃x φ(x) → ∀x ¬φ(x)\n\n3. STANDARDIZE variables apart:\n   Rename bound variables so each quantifier has a unique variable name\n\n4. SKOLEMIZE: Remove existential quantifiers (see above)\n\n5. Drop universal quantifiers (implicit — all remaining variables are universal)\n\n6. DISTRIBUTE ∨ over ∧ to get CNF:\n   (φ ∧ ψ) ∨ θ → (φ ∨ θ) ∧ (ψ ∨ θ)\n\n7. FLATTEN nested conjunctions/disjunctions into clause sets\n\n8. SEPARATE each conjunct into its own clause\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function toCNF(F):\n    F ← eliminateImplications(F)\n    F ← pushNegationsInward(F)\n    F ← standardizeVariables(F)\n    F ← skolemize(F)\n    F ← dropUniversalQuantifiers(F)\n    F ← distributeOrOverAnd(F)\n    clauses ← splitConjunctions(F)\n    return clauses\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def to_cnf(formula):\n    # Placeholder for full FOL CNF transformation\n    return formula\n\n\n# Dry Run — CNF Conversion of ∀x (Human(x) → Mortal(x)):\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace — CNF Conversion of ∀x (Human(x) → Mortal(x)):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Rule Applied"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Original"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀x (Human(x) → Mortal(x))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1. Eliminate →"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "φ → ψ → ¬φ ∨ ψ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀x (¬Human(x) ∨ Mortal(x))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2. Push ¬ inward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Already in NNF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀x (¬Human(x) ∨ Mortal(x))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3. Stand. vars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Already unique"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀x (¬Human(x) ∨ Mortal(x))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4. Skolemize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No existential quantifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀x (¬Human(x) ∨ Mortal(x))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5. Drop ∀"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Implicit universal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(¬Human(x) ∨ Mortal(x))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "6. Distribute ∨/∧"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Already a single clause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(¬Human(x) ∨ Mortal(x))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "7. Flatten"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Already flat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[¬Human(x) ∨ Mortal(x)]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Complex Example: ∀x ( (∃y P(x,y) ∧ ∀z Q(z)) → ¬R(x) )"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Original"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀x ((∃y P(x,y) ∧ ∀z Q(z)) → ¬R(x))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Elim →"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "φ→ψ ≡ ¬φ∨ψ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀x (¬(∃y P(x,y) ∧ ∀z Q(z)) ∨ ¬R(x))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "De Morgan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "¬(A∧B) ≡ ¬A∨¬B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀x (¬∃y P(x,y) ∨ ¬∀z Q(z) ∨ ¬R(x))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Push ¬ over quantifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "¬∃ ≡ ∀¬, ¬∀ ≡ ∃¬"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀x (∀y ¬P(x,y) ∨ ∃z ¬Q(z) ∨ ¬R(x))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Standardize vars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Rename z→w"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀x (∀y ¬P(x,y) ∨ ∃w ¬Q(w) ∨ ¬R(x))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Skolemize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∃w → c₁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀x (∀y ¬P(x,y) ∨ ¬Q(c₁) ∨ ¬R(x))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Drop ∀"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Implicit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(¬P(x,y) ∨ ¬Q(c₁) ∨ ¬R(x))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "CNF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Single clause, already CNF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[¬P(x,y) ∨ ¬Q(c₁) ∨ ¬R(x)]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time: O(2^n)"
        }), " worst-case for step 6 (distributing ∨ over ∧), as a formula with ", (0,jsx_runtime.jsx)(_components.em, {
          children: "n"
        }), " conjunctions can blow up to O(2^n) clauses. In practice, most KB formulas are small."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space: O(c)"
        }), " where ", (0,jsx_runtime.jsx)(_components.em, {
          children: "c"
        }), " is the number of clauses."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why exponential blowup possible?"
        }), " Distributing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(A ∧ B) ∨ (C ∧ D) ∨ (E ∧ F)"
        }), " produces 8 clauses. Each nested AND under OR doubles the count. Tseitin transformation (introducing auxiliary variables) avoids this blowup at the cost of new variable symbols."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Standard input format for resolution theorem provers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Exponential blowup possible during ∨/∧ distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Clauses are simple — only ∨ and ¬, no → or quantifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Original structure is lost; hard to read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Resolution on clauses is sound and refutation-complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Skolemization introduces function symbols"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Efficient data structures (clause indexing) for retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Grounding can produce infinite clause sets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty clause:"
        }), " The empty clause (contradiction). Resolution refutation seeks to derive the empty clause."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unit clause:"
        }), " A clause with one literal ", (0,jsx_runtime.jsx)(_components.code, {
          children: "P(x)"
        }), " — especially efficient in forward chaining."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Horn clauses:"
        }), " Clauses with at most one positive literal — run in polynomial time. Basis of Prolog."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fol-inference-methods",
      children: "FOL Inference Methods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy (Detective Reasoning):"
      }), " A detective collects clues (facts) and general rules (\"all thieves leave fingerprints\"). Two approaches: (1) Forward Chaining — start with every clue, apply all rules, see what conclusions follow. (2) Backward Chaining — start with a hypothesis (\"Smith is guilty\"), check evidence that supports it. (3) Resolution — when two witnesses contradict each other, deduce that one must be lying."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Sound?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Complete?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Data Structure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Universal Instantiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Top-down"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Ground substitutions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Small domains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(g^n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Generalized Modus Ponens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Substitution + implication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Horn clauses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(n·p²)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Forward Chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ (Horn clauses)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Data-driven"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Rule base + agenda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Monitoring, alerting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(n·k) per cycle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Backward Chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ (Horn clauses)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Goal-driven"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Goal stack + proof tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Diagnosis, Q&A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b^d) DFS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Resolution (Refutation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ (Refutation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Refutation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Clause set + resolvents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Theorem proving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Semi-decidable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight — Semi-decidability:"
      }), " FOL inference is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "semi-decidable"
      }), ". If KB ⊨ α, a complete procedure will eventually find the proof. But if KB ⊭ α, the procedure may never terminate. This is not a practical limitation for most AI applications, which use restricted subsets (Horn clauses, Description Logic) that are decidable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lifting-lemma",
      children: "Lifting Lemma"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lifting Lemma"
      }), " states that any inference made at the ground (propositional) level can be \"lifted\" to the first-order level by using unification instead of brute-force instantiation. This is the theoretical foundation for efficient FOL inference:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Instead of grounding every variable to every possible constant (which is infinite in general),"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Unification finds the ", (0,jsx_runtime.jsx)(_components.em, {
          children: "minimal"
        }), " substitution needed to apply an inference rule."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Generalized Modus Ponens: From ", (0,jsx_runtime.jsx)(_components.code, {
          children: "∀x (P(x) → Q(x))"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "P(A)"
        }), ", we directly infer ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Q(A)"
        }), " via substitution ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{x/A}"
        }), " — no need to ground all x first."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resolution-principle-in-fol",
      children: "Resolution Principle in FOL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm: Resolution in FOL"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input: Two clauses C₁, C₂ with no common variables\nOutput: Resolvent clause C (or FAIL)\n\n1. STANDARDIZE variables apart — rename so C₁ and C₂ share no variables\n2. FIND a literal L₁ in C₁ and L₂ in C₂ such that:\n   - L₁ and ¬L₂ unify with MGU θ (or ¬L₁ and L₂ unify)\n3. IF no such pair exists, RETURN FAIL\n4. COMPUTE the resolvent:\n   C = (C₁ - {L₁})θ ∪ (C₂ - {L₂})θ\n5. RETURN C\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Resolution Proof:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "∀x (Human(x) → Mortal(x))"
        }), " → Clause: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "¬Human(x) ∨ Mortal(x)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Human(Socrates)"
        }), " → Clause: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Human(Socrates)"
        }), "\nGoal: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Mortal(Socrates)"
        }), " → Negated goal: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "¬Mortal(Socrates)"
        })]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Clause Pair"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "MGU θ"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Resolvent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "¬Human(x) ∨ Mortal(x)"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Human(Socrates)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{x/Socrates}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Mortal(Socrates)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Mortal(Socrates)"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "¬Mortal(Socrates)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "□ (empty clause — contradiction)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The empty clause proves ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Mortal(Socrates)"
      }), " follows from the premises."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation (Resolution skeleton):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Clause:\n    def __init__(self, literals):\n        self.literals = set(literals)\n\n    def __repr__(self):\n        return f\"Clause({self.literals})\"\n\n    def apply_substitution(self, theta):\n        new_literals = set()\n        for lit in self.literals:\n            new_literals.add(apply_substitution(lit, theta))\n        return Clause(new_literals)\n\n\ndef resolve(c1, c2):\n    \"\"\"Attempt resolution on two clauses. Returns list of resolvents.\"\"\"\n    resolvents = []\n    for lit1 in c1.literals:\n        for lit2 in c2.literals:\n            neg_lit2 = negate(lit2)\n            theta = unify(lit1, neg_lit2)\n            if theta is not None:\n                new_c1 = c1.apply_substitution(theta)\n                new_c2 = c2.apply_substitution(theta)\n                new_literals = (new_c1.literals - {lit1}) | \\\n                               (new_c2.literals - {lit2})\n                resolvents.append(Clause(new_literals))\n    return resolvents\n\n\ndef resolution_prover(kb_clauses, goal_clause):\n    \"\"\"Refutation resolution prover.\"\"\"\n    clauses = kb_clauses + [negate_clause(goal_clause)]\n    new = set()\n    while True:\n        for pair in generate_pairs(clauses):\n            resolvents = resolve(pair[0], pair[1])\n            for r in resolvents:\n                if not r.literals:\n                    return True  # Theorem proved\n                new.add(r)\n        if all(r in clauses for r in new):\n            return False  # Not provable (may loop forever)\n        clauses.update(new)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity (Resolution):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " Worst-case exponential/hyper-exponential — resolution can generate exponentially many clauses before finding the empty clause."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(c²) where c is the number of clauses in worst case (every pair resolves)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why semi-decidable?"
        }), " There is no bound on proof length. Strategies like set-of-support, unit preference, and linear resolution prune the search space but do not guarantee termination when the goal is not entailed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Inference Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Sound?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Complete?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Universal Instantiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Top-down"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grounding general rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌ (matching)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌ (matching)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Bidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward Chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ (Horn)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Data-driven"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring, alerting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backward Chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ (Horn)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Goal-driven"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diagnosis, Q&A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ (Refutation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Refutation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theorem proving"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--fol-syntax",
      children: "Quick Reference — FOL Syntax"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowercase"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "john"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "2"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "red"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Predicate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capital letter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Brother(john, richard)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowercase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "LeftLeg(john)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowercase"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "x"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "y"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "z"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Universal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∀x P(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"All humans are mortal\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Existential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∃x P(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Someone is mortal\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conjunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∧"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P ∧ Q — both true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disjunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∨"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P ∨ Q — at least one true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Negation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "¬"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "¬P — not P"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P → Q — if P then Q"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Biconditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "↔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P ↔ Q — P iff Q"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edge-cases-summary",
      children: "Edge Cases Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Occurs check (x & f(x))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Return FAIL — prevents infinite terms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Variable name conflict (P(x) & P(y))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Either {x/y} or {y/x} — both MGU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Empty substitution (P(a) & P(a))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Return {} — already identical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Function symbol mismatch (f vs g)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Return FAIL — cannot unify"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skolemization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No existential quantifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Identity — no transformation needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skolemization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Multiple existentials"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Distinct Skolem constants/functions each time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CNF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Empty clause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Contradiction proven — refutation complete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CNF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Horn clause (≤1 positive literal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Polynomial time inference (Prolog)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Quantifiers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Empty domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Not allowed — FOL requires non-empty domain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Quantifiers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Variable shadowing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Rename variables apart to avoid confusion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FOL Inference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Semi-decidability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Procedure terminates if entailed; may not if not"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-explain-the-unification-algorithm-with-occurs-check",
      children: "Q1: Explain the Unification Algorithm with Occurs Check"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Unification finds a substitution θ such that two expressions E₁ and E₂ become identical (E₁θ = E₂θ). The algorithm:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If E₁ and E₂ are identical, return {} (empty substitution)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If E₁ is a variable, check if E₁ occurs in E₂ (occurs check) — if so, fail. Otherwise, return {E₁/E₂}."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If E₂ is a variable, symmetric to step 2."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If both are compound with the same functor and arity, recursively unify corresponding arguments, composing substitutions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otherwise, fail."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Occurs check"
      }), " prevents circular bindings like {x/f(x)} that would create infinite terms. Without it, unification is unsound — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "f(x)"
      }), " would \"unify\" producing an infinite term ", (0,jsx_runtime.jsx)(_components.code, {
        children: "f(f(f(...)))"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time complexity:"
      }), " Near-linear in practice, O(n²) worst-case for naive implementations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-how-does-resolution-work-in-fol-why-is-it-refutation-complete",
      children: "Q2: How Does Resolution Work in FOL? Why is it Refutation-Complete?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Resolution is an inference rule for clauses (disjunctions of literals). Given two clauses C₁ = (A ∨ L₁) and C₂ = (B ∨ ¬L₂), if L₁ and L₂ unify with MGU θ, the resolvent is (A ∨ B)θ."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Resolution is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "refutation-complete"
      }), ": if a set of clauses is unsatisfiable, resolution will eventually derive the empty clause □. The proof strategy:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Negate the goal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert everything to CNF."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeatedly apply resolution."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If □ is derived, the original goal is proved."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why refutation-complete?"
      }), " The resolution inference rule is a generalization of Modus Ponens. Robinson's 1965 paper proved that if a clause set is unsatisfiable, there exists a resolution derivation of the empty clause. This is the foundation of automated theorem proving."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key strategies"
      }), " for efficiency: Unit preference (prefer resolving with single-literal clauses), set-of-support (prefer clauses derived from the goal), linear resolution (maintain a chain of resolvents)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-steps-to-convert-fol-to-cnf",
      children: "Q3: Steps to Convert FOL to CNF"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The eight-step process:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eliminate implications"
        }), " — replace φ→ψ with ¬φ∨ψ, φ↔ψ with (¬φ∨ψ)∧(φ∨¬ψ)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Move negations inward"
        }), " — De Morgan's laws: ¬(A∧B) = ¬A∨¬B, ¬∀x P = ∃x ¬P"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standardize variables apart"
        }), " — rename so no quantifier shares a variable name"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Skolemize"
        }), " — replace existential variables with Skolem constants/functions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drop universal quantifiers"
        }), " — all remaining variables are implicitly universally quantified"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distribute ∨ over ∧"
        }), " — (A∧B)∨C → (A∨C)∧(B∨C)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flatten"
        }), " — remove nested conjunctions/disjunctions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Separate into clauses"
        }), " — each conjunct becomes a separate clause"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "∀x (∀y P(x,y) → ∃z Q(z))"
      }), " → after all steps: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[¬P(x, f(x)) ∨ Q(g(x))]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "System/Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "How FOL is Used"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prolog Compilers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "SWI-Prolog, GNU Prolog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "FOL restricted to Horn clauses; backward chaining with SLD resolution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Automated Theorem Provers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Vampire, E Prover, Z3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Full FOL with resolution, paramodulation, and superposition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Semantic Web"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "OWL (Web Ontology Language)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Description Logic (decidable fragment of FOL) for class hierarchies, property restrictions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Knowledge Graphs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "RDF, SPARQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "FOL-inspired triple stores; SPARQL queries use existential/universal semantics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database Query Engines"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "SQL"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["SQL's ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT ... WHERE"
            }), " is syntactic sugar for FOL formulas with quantifiers; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ALL"
            }), " = ∀, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "EXISTS"
            }), " = ∃"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Natural Language Understanding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "IBM Watson, ChatGPT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Semantic parsers translate natural language to FOL for logical reasoning and question answering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Software Verification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Dafny, Why3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "First-order logic with arithmetic used to specify and verify program correctness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Planning Systems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "STRIPS, PDDL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "FOL is the representation language for actions, preconditions, and effects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Expert Systems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "CLIPS, JESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Forward-chaining inference over rule bases encoded as FOL implications"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "ML Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "CV"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "NLP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Research"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FOL Representation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward Chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backward Chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CNF Conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Skolemization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is the Most General Unifier (MGU) of P(x, f(x)) and P(y, f(y))?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) {x/y, f(x)/f(y)}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) {y/x}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) {x/y} or {y/x} (either is MGU)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) They cannot be unified"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>C) {x/y} or {y/x} are both MGUs since the two expressions are identical up to variable renaming."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " Which inference strategy is used by the Prolog programming language?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Forward chaining"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Backward chaining with depth-first search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Resolution with breadth-first search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Universal instantiation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Prolog uses backward chaining with depth-first search (SLD resolution)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " What makes FOL semi-decidable for inference?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It cannot represent all truths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) If KB ⊨ α, the procedure will eventually find the proof, but if KB ⊭ α, it may loop forever"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It requires exponential time for all problems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The unification algorithm is incomplete"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) FOL is semi-decidable: entailment can be proven if true, but non-entailment may not terminate."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " In CNF conversion, why must existential quantifiers be removed before universal quantifiers are dropped?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) They create infinite clauses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) They require Skolemization first — dropping universals while existentials remain loses variable dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) They are redundant in CNF"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) They cannot appear in clauses"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Existential quantifiers must be Skolemized first because the Skolem function's arguments depend on which universal variables are in scope. Dropping universals first would lose the dependency information."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " What prevents the unification {x / f(x)} from being a valid substitution?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Type mismatch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Occurs check violation — x occurs inside f(x), creating a circular term"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Both are variables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Function symbols must be Skolemized"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) The occurs check detects that x appears within f(x), which would create an infinite term. Standard unification algorithms reject this."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6:"
      }), " What is the role of Skolem functions vs Skolem constants?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) They are interchangeable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Functions are used when the existential follows universal quantifiers; constants when there are no preceding universals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Constants are used for functions with arity > 0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Skolem functions are used in propositional logic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) When an existential comes after universals ∀y₁...∀yₙ ∃x, the witness depends on the universals, so a Skolem function f(y₁,...,yₙ) captures this dependency. Without preceding universals, a fresh constant suffices."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "First-Order Logic represents the world in terms of objects and relations, extending propositional logic with quantifiers, variables, and functions."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Syntax"
        }), " defines well-formed formulas from constants, predicates, functions, variables, connectives, and quantifiers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semantics"
        }), " assigns meaning through interpretations — a domain D and mappings for each symbol."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quantifiers"
        }), " (∀, ∃) allow general statements about entire classes of objects."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Substitution"
        }), " replaces variables with terms; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Unification"
        }), " finds the MGU that makes two expressions identical."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Skolemization"
        }), " removes existential quantifiers by introducing fresh constants/functions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CNF conversion"
        }), " prepares formulas for resolution theorem proving through an 8-step pipeline."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resolution"
        }), " is refutation-complete for FOL — the foundation of automated theorem provers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forward Chaining"
        }), " is data-driven; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Backward Chaining"
        }), " is goal-driven (used by Prolog)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FOL is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "semi-decidable"
        }), ": entailment can be proven if true, but non-entailment may not terminate."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gödel's Completeness Theorem states that FOL is semantically complete."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Applications span Prolog compilers, the Semantic Web (OWL), theorem provers (Vampire, Z3), planning systems, and database engines."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contrast Propositional Logic and First-Order Logic across at least 6 dimensions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a Predicate and a Function in FOL? Give an example of each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the \"Standardizing Apart\" technique in inference. Why is it necessary?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define a \"Ground Term\" and explain its importance in unification."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the occurs check and what problem does it prevent?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why must Skolemization happen ", (0,jsx_runtime.jsx)(_components.em, {
          children: "after"
        }), " standardizing variables apart?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the difference between soundness and completeness in FOL inference."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Translate to FOL: \"No two people have the same DNA, except for identical twins.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Translate to FOL: \"Every student who takes an exam either passes or fails.\""
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Unify the following pairs or state why they cannot be unified:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "P(A, B, x)"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "P(y, z, C)"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Q(x, f(x))"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Q(y, y)"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "R(g(x), x)"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "R(y, f(y))"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Skolemize: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "∀x ∃y ∀z ∃w (P(x,y) ∧ Q(z,w))"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Convert to CNF: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "∀x ( (∃y P(x,y)) → (∀z Q(z) → R(x)) )"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Perform resolution refutation to prove ", (0,jsx_runtime.jsx)(_components.code, {
          children: "∀x (P(x) → Q(x)), P(A) ⊢ Q(A)"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resolution in FOL:"
        }), " Implement a minimal resolution prover that can prove the syllogism: \"All humans are mortal. Socrates is human. Therefore, Socrates is mortal.\" Include the clause representation, the unification steps, and the derivation of the empty clause."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity Analysis:"
        }), " Explain why FOL inference is semi-decidable while propositional inference is decidable. What property of quantifiers causes this difference?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Herbrand's Theorem:"
        }), " Research and explain how Herbrand's Theorem reduces infinite-domain FOL reasoning to finite propositional reasoning. Why does this make FOL semi-decidable rather than decidable?"]
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