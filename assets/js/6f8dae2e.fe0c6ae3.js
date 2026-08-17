"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[18386],{

/***/ 33631
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_discrete_mathematics_02_logic_md_6f8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-discrete-mathematics-02-logic-md-6f8.json
const site_docs_courses_discrete_mathematics_02_logic_md_6f8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/discrete-mathematics/02-logic","title":"Chapter 2: Logic","description":"Previous Sets | Next Predicates and Quantifiers","source":"@site/docs/courses/discrete-mathematics/02-logic.md","sourceDirName":"courses/discrete-mathematics","slug":"/discrete-mathematics/02-logic","permalink":"/ai-engineering-journey/discrete-mathematics/02-logic","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-logic","slug":"/discrete-mathematics/02-logic","title":"Chapter 2: Logic","sidebar_label":"Chapter 2: Logic","sidebar_position":2},"sidebar":"course-discrete-mathematics","previous":{"title":"Chapter 1: Sets","permalink":"/ai-engineering-journey/discrete-mathematics/01-sets"},"next":{"title":"Chapter 3: Predicates and Quantifiers","permalink":"/ai-engineering-journey/discrete-mathematics/03-predicates"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/discrete-mathematics/02-logic.md


const frontMatter = {
	id: '02-logic',
	slug: '/discrete-mathematics/02-logic',
	title: 'Chapter 2: Logic',
	sidebar_label: 'Chapter 2: Logic',
	sidebar_position: 2
};
const contentTitle = 'Chapter 2: Logic';

const assets = {

};



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
  "value": "2.1 Propositions",
  "id": "21-propositions",
  "level": 3
}, {
  "value": "2.2 Logical Connectives",
  "id": "22-logical-connectives",
  "level": 3
}, {
  "value": "2.3 Truth Tables",
  "id": "23-truth-tables",
  "level": 3
}, {
  "value": "2.4 Logical Equivalence",
  "id": "24-logical-equivalence",
  "level": 3
}, {
  "value": "2.5 Conditional and Related Statements",
  "id": "25-conditional-and-related-statements",
  "level": 3
}, {
  "value": "2.6 Normal Forms",
  "id": "26-normal-forms",
  "level": 3
}, {
  "value": "2.7 Satisfiability and Tautology",
  "id": "27-satisfiability-and-tautology",
  "level": 3
}, {
  "value": "2.8 Arguments and Validity",
  "id": "28-arguments-and-validity",
  "level": 3
}, {
  "value": "2.9 Limitations of Propositional Logic",
  "id": "29-limitations-of-propositional-logic",
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
  "value": "2.9 Truth Table Generator",
  "id": "29-truth-table-generator",
  "level": 3
}, {
  "value": "2.10 Logical Equivalence Prover",
  "id": "210-logical-equivalence-prover",
  "level": 3
}, {
  "value": "2.11 Inference Rules ? Systematic Proofs",
  "id": "211-inference-rules--systematic-proofs",
  "level": 3
}, {
  "value": "2.12 Normal Forms ? CNF and DNF",
  "id": "212-normal-forms--cnf-and-dnf",
  "level": 3
}, {
  "value": "2.13 SAT Solver ? Brute Force",
  "id": "213-sat-solver--brute-force",
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
        id: "chapter-2-logic",
        children: "Chapter 2: Logic"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/discrete-mathematics/01-sets",
          children: "Chapter 1: Sets"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/discrete-mathematics/03-predicates",
          children: "Chapter 3: Predicates and Quantifiers"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/discrete-mathematics/02-logic.png",
        alt: "Logic Overview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify propositions and their truth values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct truth tables for compound propositions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply logical connectives: $\\neg, \\land, \\lor, \\oplus, \\rightarrow, \\leftrightarrow$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove logical equivalence using truth tables and known equivalences"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply De Morgan's laws for logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert expressions to CNF and DNF normal forms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine satisfiability of compound propositions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate arguments using inference rules (modus ponens, modus tollens, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the limitations of propositional logic"
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
            children: "Propositions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A proposition is a statement that is either true or false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every precise factual claim is a proposition ? questions and commands are not"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logical Connectives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\neg, \\land, \\lor, \\rightarrow, \\leftrightarrow$ combine propositions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connectives mirror natural language \"not,\" \"and,\" \"or,\" \"if-then,\" \"iff\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Truth Tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exhaustive enumeration of all truth assignments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truth tables are the ultimate arbiter of logical equivalence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logical Equivalence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$A \\equiv B$ when they match on every row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "De Morgan's and distributive laws simplify complex expressions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conditionals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\rightarrow q$ is false only when $p$ is true and $q$ is false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The contrapositive is equivalent; the converse is not"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Normal Forms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CNF and DNF provide canonical representations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAT solvers use CNF; circuit synthesis uses DNF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inference Rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modus ponens, modus tollens, syllogism validate arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formal proof construction in mathematics and AI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Satisfiability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A formula is satisfiable if some assignment makes it true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAT is the canonical NP-complete problem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Limitations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Propositional logic cannot express relationships between objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predicate logic (Chapter 3) adds quantifiers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Propositions] --> B[Logical Connectives]\n    B --> C[Truth Tables]\n    C --> D[Logical Equivalence]\n    D --> E[Conditionals and Related Statements]\n    E --> F[Normal Forms: CNF and DNF]\n    F --> G[Satisfiability]\n    G --> H[Inference Rules and Arguments]\n    H --> I[Limitations of Propositional Logic]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-propositions",
      children: "2.1 Propositions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "proposition"
      }), " is a declarative statement that is either true (T) or false (F), but not both."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Examples: \"2 + 2 = 4\" (true). \"5 is an even number\" (false). \"If it rains, the ground gets wet\" (a conditional proposition whose truth depends on the meaning; in logic we treat it as a compound proposition)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Non-examples: \"What time is it?\" (question), \"Close the door\" (command), \"This sentence is false\" (paradox, not a proposition)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A proposition is the atomic unit of logic ? it must have a definite truth value (true or false) with no ambiguity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-logical-connectives",
      children: "2.2 Logical Connectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let $p$ and $q$ be propositions."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symbol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Read as"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "True when"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Negation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\neg p$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"not $p$\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p$ is false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conjunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\land q$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"$p$ and $q$\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "both true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disjunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\lor q$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"$p$ or $q$\" (inclusive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "at least one true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exclusive or"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\oplus q$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"$p$ xor $q$\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "exactly one true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\rightarrow q$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"if $p$ then $q$\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p$ false or $q$ true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Biconditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\leftrightarrow q$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"$p$ if and only if $q$\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "both same truth value"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Logical connectives define the grammar of propositional logic ? mastering their truth conditions is essential for reasoning."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-truth-tables",
      children: "2.3 Truth Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A truth table enumerates all possible truth assignments to the variables and shows the resulting truth value of a compound proposition."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "$p$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$q$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$\\neg p$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$p \\land q$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$p \\lor q$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$p \\oplus q$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$p \\rightarrow q$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$p \\leftrightarrow q$"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Note carefully: $p \\rightarrow q$ is false only when $p$ is true and $q$ is false. This is called ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "material implication"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A truth table enumerates all $2^n$ possible truth assignments ? it is the definitive method for checking equivalence and validity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-logical-equivalence",
      children: "2.4 Logical Equivalence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Two compound propositions $A$ and $B$ are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "logically equivalent"
      }), ", written $A \\equiv B$, if they have identical truth values for all truth assignments."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 2.1 (De Morgan's Laws)."
      }), "\n$$\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$$\n$$\\neg(p \\lor q) \\equiv \\neg p \\land \\neg q$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Important equivalences:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Equivalence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\land \\text{T} \\equiv p$, $p \\lor \\text{F} \\equiv p$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Domination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\lor \\text{T} \\equiv \\text{T}$, $p \\land \\text{F} \\equiv \\text{F}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Idempotent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\land p \\equiv p$, $p \\lor p \\equiv p$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double negation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\neg(\\neg p) \\equiv p$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Commutative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\land q \\equiv q \\land p$, $p \\lor q \\equiv q \\lor p$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Associative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$(p \\land q) \\land r \\equiv p \\land (q \\land r)$ (similarly for $\\lor$)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\lor (q \\land r) \\equiv (p \\lor q) \\land (p \\lor r)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\land (q \\lor r) \\equiv (p \\land q) \\lor (p \\land r)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\rightarrow q \\equiv \\neg p \\lor q$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Contrapositive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\rightarrow q \\equiv \\neg q \\rightarrow \\neg p$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Biconditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\leftrightarrow q \\equiv (p \\rightarrow q) \\land (q \\rightarrow p)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exportation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\rightarrow (q \\rightarrow r) \\equiv (p \\land q) \\rightarrow r$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Absorption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\lor (p \\land q) \\equiv p$, $p \\land (p \\lor q) \\equiv p$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implication variants:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Converse:"
        }), " $q \\rightarrow p$ (not equivalent)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inverse:"
        }), " $\\neg p \\rightarrow \\neg q$ (not equivalent)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contrapositive:"
        }), " $\\neg q \\rightarrow \\neg p$ (equivalent)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function logicalEquivalence(vars: number): boolean[][] {\n  const rows: boolean[][] = [];\n  for (let i = 0; i < Math.pow(2, vars); i++) {\n    const row: boolean[] = [];\n    for (let j = vars - 1; j >= 0; j--) {\n      row.push(Boolean(i & (1 << j)));\n    }\n    rows.push(row);\n  }\n  return rows;\n}\n\n// Verify that p -> q is equivalent to ?p ? q\nfunction implies(p: boolean, q: boolean): boolean { return !p || q; }\nfunction negOr(p: boolean, q: boolean): boolean { return !p || q; }\n\nconst assignments = logicalEquivalence(2);\nconst allMatch = assignments.every(([p, q]) => implies(p, q) === negOr(p, q));\nconsole.log(`p?q = ?p?q: ${allMatch}`); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Two propositions are logically equivalent when they have identical truth tables ? De Morgan's laws are the most important equivalence pair."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-conditional-and-related-statements",
      children: "2.5 Conditional and Related Statements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For the conditional $p \\rightarrow q$:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Converse:"
        }), " $q \\rightarrow p$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inverse:"
        }), " $\\neg p \\rightarrow \\neg q$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contrapositive:"
        }), " $\\neg q \\rightarrow \\neg p$"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The conditional is equivalent to its contrapositive. The converse is equivalent to the inverse."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[\"p ? q (Original)\"] --> B[\"q ? p (Converse)\"]\n    A --> C[\"?p ? ?q (Inverse)\"]\n    A --> D[\"?q ? ?p (Contrapositive)\"]\n    D -.->|Equivalent| A\n    B -.->|Equivalent| C\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The conditional $p \\rightarrow q$ is logically equivalent to its contrapositive $\\neg q \\rightarrow \\neg p$, but NOT to its converse $q \\rightarrow p$."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-normal-forms",
      children: "2.6 Normal Forms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Literal:"
      }), " a variable ($p$) or its negation ($\\neg p$)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Clause:"
      }), " a disjunction of literals, e.g., $p \\lor \\neg q \\lor r$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Conjunctive Normal Form (CNF):"
      }), " a conjunction of clauses.\nExample: $(p \\lor \\neg q) \\land (q \\lor r) \\land (\\neg p \\lor \\neg r)$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Disjunctive Normal Form (DNF):"
      }), " a disjunction of conjunctions (minterms).\nExample: $(p \\land q) \\lor (\\neg p \\land r) \\lor (p \\land \\neg r)$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 2.2 (Existence of normal forms)."
      }), " Every Boolean expression can be expressed in CNF and DNF."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Converting to DNF:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write the truth table."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each row where output is T, form a conjunction (minterm) of all variables (negate if F)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OR all minterms together."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Converting to CNF:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write the truth table."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each row where output is F, form a disjunction (maxterm) of all variables (negate if T)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AND all maxterms together."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function toDNF(truthTable: { vars: boolean[], result: boolean }[]): string {\n  return truthTable\n    .filter(row => row.result)\n    .map(row => {\n      const terms = row.vars.map((v, i) => v ? `x${i}` : `?x${i}`);\n      return `(${terms.join(' ? ')})`;\n    })\n    .join(' ? ');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " CNF (product of sums) and DNF (sum of products) are canonical forms; SAT solvers require CNF input."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "27-satisfiability-and-tautology",
      children: "2.7 Satisfiability and Tautology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A compound proposition is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tautology"
      }), " if it is always true (e.g., $p \\lor \\neg p$). It is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "contradiction"
      }), " if always false (e.g., $p \\land \\neg p$). It is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "satisfiable"
      }), " if there exists at least one truth assignment making it true."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 2.3 (SAT)."
      }), " Determining whether a CNF formula is satisfiable (SAT) is NP-complete. This is the canonical NP-complete problem (Cook-Levin theorem)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Checking satisfiability in TypeScript:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function isSatisfiable(formula: (assign: Map<string, boolean>) => boolean, vars: string[]): boolean {\n  for (let i = 0; i < Math.pow(2, vars.length); i++) {\n    const assign = new Map<string, boolean>();\n    for (let j = 0; j < vars.length; j++) {\n      assign.set(vars[j], Boolean(i & (1 << (vars.length - 1 - j))));\n    }\n    if (formula(assign)) return true;\n  }\n  return false;\n}\n\n// Test: (p ? q) ? (?p ? ?q) is satisfiable\nconst formula = (a: Map<string, boolean>) => \n  (a.get('p')! || a.get('q')!) && (!a.get('p')! || !a.get('q')!);\nconsole.log(isSatisfiable(formula, ['p', 'q'])); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Tautologies are always-true statements (valid arguments), contradictions are always-false (impossible conditions), and satisfiable statements have at least one path to truth."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "28-arguments-and-validity",
      children: "2.8 Arguments and Validity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "argument"
      }), " consists of premises $P_1, P_2, \\ldots, P_n$ and a conclusion $C$. It is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "valid"
      }), " when $(P_1 \\land P_2 \\land \\cdots \\land P_n) \\rightarrow C$ is a tautology."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inference rules:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\rightarrow q,; p ;\\therefore; q$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modus ponens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\rightarrow q,; \\neg q ;\\therefore; \\neg p$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modus tollens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\rightarrow q,; q \\rightarrow r ;\\therefore; p \\rightarrow r$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hypothetical syllogism"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\lor q,; \\neg p ;\\therefore; q$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disjunctive syllogism"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$p ;\\therefore; p \\lor q$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Addition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\land q ;\\therefore; p$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$p,; q ;\\therefore; p \\land q$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conjunction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\lor q,; p \\rightarrow r,; q \\rightarrow r ;\\therefore; r$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resolution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\rightarrow q ;\\therefore; \\neg q \\rightarrow \\neg p$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contraposition"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Modus ponens checker\nfunction modusPonens(p: boolean, impliesPQ: boolean): boolean | null {\n  if (p && impliesPQ) return true;      // q must be true\n  if (!p || !impliesPQ) return null;    // can't conclude\n  return null;\n}\n\n// Resolution: (p ? q) ? (?p ? r) ? (q ? r)\nfunction resolution(p: boolean, q: boolean, r: boolean): boolean {\n  const premise1 = p || q;\n  const premise2 = !p || r;\n  const conclusion = q || r;\n  return !(premise1 && premise2) || conclusion;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common fallacies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Affirming the converse:"
        }), " $p \\rightarrow q,; q ;\\therefore; p$ (invalid)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Denying the antecedent:"
        }), " $p \\rightarrow q,; \\neg p ;\\therefore; \\neg q$ (invalid)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " An argument is valid if the conclusion follows necessarily from the premises ? modus ponens and modus tollens are the most fundamental inference rules."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "29-limitations-of-propositional-logic",
      children: "2.9 Limitations of Propositional Logic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Propositional logic cannot express:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Statements about all/some objects: \"All humans are mortal\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Relationships between objects: \"x is the parent of y\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Properties of individuals: \"x is prime\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These require ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "predicate logic"
      }), " (first-order logic), which adds quantifiers $\\forall$ and $\\exists$ and predicates $P(x)$. This is covered in Chapter 3."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " When simplifying a compound proposition, work step-by-step naming each equivalence you use ? this makes errors easy to spot."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Use De Morgan's laws to push negations inward: $\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$. This is the single most useful equivalence for simplifying negated expressions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " $p \\rightarrow q$ is NOT equivalent to $q \\rightarrow p$ (the converse). A common logical fallacy is assuming \"if P then Q\" means the same as \"if Q then P.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Material implication $p \\rightarrow q$ is true when $p$ is false, regardless of $q$. This is counterintuitive in natural language but mathematically necessary."]
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
            children: "Proposition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative T/F statement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atomic unit, no connectives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Building blocks of arguments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tautology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No falsifying assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Valid argument forms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Contradiction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No satisfying assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detecting inconsistent premises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logical Equivalence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same truth table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$A \\equiv B$ iff identical columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplifying expressions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional ($\\rightarrow$)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False only when $p$ true, $q$ false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Material implication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"If-then\" reasoning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Biconditional ($\\leftrightarrow$)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True when $p$ and $q$ match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both directions must hold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Definitions and equivalences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CNF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conjunction of clauses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product of sums"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAT solvers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disjunction of minterms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum of products"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit synthesis"
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
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\neg(\\neg p) \\equiv p$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double Negation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\lor \\neg p \\equiv T$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Law of Excluded Middle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\land \\neg p \\equiv F$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Law of Contradiction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "De Morgan's Law"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\neg(p \\lor q) \\equiv \\neg p \\land \\neg q$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "De Morgan's Law"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\rightarrow q \\equiv \\neg p \\lor q$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implication Law"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\rightarrow q \\equiv \\neg q \\rightarrow \\neg p$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contrapositive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\leftrightarrow q \\equiv (p \\rightarrow q) \\land (q \\rightarrow p)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Biconditional Law"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$(p \\land q) \\rightarrow r \\equiv p \\rightarrow (q \\rightarrow r)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exportation"
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
            children: "How Logic Applies"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Programming"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Boolean expressions in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "while"
            }), ", and loop conditions"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logic gates (AND, OR, NOT) implement propositional logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database Queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL WHERE clauses use logical connectives"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mathematics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proofs rely on logical deduction and equivalence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI & Expert Systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inference engines apply logical deduction rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Law & Argumentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legal reasoning follows modus ponens and modus tollens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAT Solving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CNF satisfiability is the core of automated reasoning"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is a proposition?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) What time is it?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $x + 2 = 5$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 2 + 2 = 5"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Close the door"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** \"2 + 2 = 5\" is a declarative statement with a definite truth value (false)."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "$p \\rightarrow q$ is logically equivalent to:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $q \\rightarrow p$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $\\neg p \\rightarrow \\neg q$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $\\neg q \\rightarrow \\neg p$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $p \\land q$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** The contrapositive $\\neg q \\rightarrow \\neg p$ is logically equivalent to $p \\rightarrow q$."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A compound proposition that is always false is called a:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Tautology"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Contingency"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Satisfiable"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Contradiction"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**D)** A contradiction (e.g., $p \\land \\neg p$) is always false regardless of truth assignments."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which inference rule does $(p \\rightarrow q) \\land p \\therefore q$ represent?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Modus tollens"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Modus ponens"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Hypothetical syllogism"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Disjunctive syllogism"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Modus ponens: if $p$ implies $q$ and $p$ is true, then $q$ must be true."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The CNF form of $p \\oplus q$ is:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $(p \\lor q) \\land (\\neg p \\lor \\neg q)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $(p \\land \\neg q) \\lor (\\neg p \\land q)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $p \\lor q$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $\\neg p \\land \\neg q$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**A)** $p \\oplus q \\equiv (p \\lor q) \\land (\\neg p \\lor \\neg q)$ in CNF."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2.1"
      }), " (Truth table construction). Build the truth table for $(p \\lor q) \\rightarrow (p \\land q)$."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "$p$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$q$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$p \\lor q$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$p \\land q$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$(p \\lor q) \\rightarrow (p \\land q)$"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2.2"
      }), " (Logical equivalence). Show $p \\rightarrow q \\equiv \\neg p \\lor q$ using a truth table."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " Compare columns for $p \\rightarrow q$ and $\\neg p \\lor q$; they match for all four rows, confirming equivalence."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2.3"
      }), " (De Morgan's). Negate \"It is raining and it is cold.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " Let $p$ = \"it is raining\", $q$ = \"it is cold\". The statement is $p \\land q$. Negation: $\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$, i.e., \"It is not raining or it is not cold.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2.4"
      }), " (Converse/inverse/contrapositive). For \"If it snows, school closes\" ($p \\rightarrow q$):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Converse: \"If school closes, it snows\" ($q \\rightarrow p$)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inverse: \"If it does not snow, school does not close\" ($\\neg p \\rightarrow \\neg q$)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contrapositive: \"If school does not close, it did not snow\" ($\\neg q \\rightarrow \\neg p$)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2.5"
      }), " (Distributive law). Show $p \\lor (q \\land r) \\equiv (p \\lor q) \\land (p \\lor r)$."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "$p$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$q$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$r$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$q \\land r$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$p \\lor (q \\land r)$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$p \\lor q$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$p \\lor r$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RHS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2.6"
      }), " (DNF construction). Express $(p \\rightarrow q) \\land (q \\rightarrow p)$ in DNF."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " The formula is true when $p$ and $q$ have the same truth value. So DNF = $(p \\land q) \\lor (\\neg p \\land \\neg q)$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2.7"
      }), " (Argument validity). Determine if the argument is valid: If it rains, the ground is wet. The ground is wet. Therefore, it rained."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " Premises: $p \\rightarrow q$, $q$. Conclusion: $p$. This is affirming the converse ? invalid. Counterexample: the ground could be wet from sprinklers."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2.8"
      }), " (Modus tollens in TypeScript)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function isValidModusTollens(p: boolean, q: boolean, notQ: boolean): boolean {\n  // Premises: p ? q, ?q. Conclusion: ?p\n  const premise1 = !p || q;    // p ? q\n  const premise2 = notQ;       // ?q\n  const conclusion = !p;       // ?p\n  // If premises are true, conclusion must be true\n  return !(premise1 && premise2) || conclusion;\n}\n\nconsole.log(isValidModusTollens(false, false, true));  // true\nconsole.log(isValidModusTollens(true, false, true));   // true\nconsole.log(isValidModusTollens(true, true, false));   // false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// --- SAT Solver via Truth Table ---\nfunction satSolve(vars: number, expr: (vals: boolean[]) => boolean): boolean[][] {\n  const solutions: boolean[][] = [];\n  for (let i = 0; i < 1 << vars; i++) {\n    const vals: boolean[] = [];\n    for (let j = vars - 1; j >= 0; j--) vals.push(Boolean(i & (1 << j)));\n    if (expr(vals)) solutions.push(vals);\n  }\n  return solutions;\n}\n// (p ? q) ? (?p ? ?q)\nconst expr = (v: boolean[]) => (v[0] || v[1]) && (!v[0] || !v[1]);\nconsole.log('SAT solutions:', satSolve(2, expr));\n// [[false,true],[true,false]]\n\n// --- Logical Equivalence Checker ---\nfunction areEquivalent(\n  vars: number,\n  expr1: (vals: boolean[]) => boolean,\n  expr2: (vals: boolean[]) => boolean\n): boolean {\n  for (let i = 0; i < 1 << vars; i++) {\n    const vals: boolean[] = [];\n    for (let j = vars - 1; j >= 0; j--) vals.push(Boolean(i & (1 << j)));\n    if (expr1(vals) !== expr2(vals)) return false;\n  }\n  return true;\n}\n// Verify: p ? q = ?p ? q\nconst impl = (v: boolean[]) => !v[0] || v[1];\nconst orForm = (v: boolean[]) => !v[0] || v[1];\nconsole.log('p?q = ?p?q:', areEquivalent(2, impl, orForm)); // true\n\n// --- Truth Table Generator ---\nfunction truthTable(vars: number, expr: (vals: boolean[]) => boolean): void {\n  const header = Array.from({ length: vars }, (_, i) => String.fromCharCode(112 + i)).concat('Result').join(' | ');\n  console.log(header);\n  console.log('-'.repeat(header.length));\n  for (let i = 0; i < 1 << vars; i++) {\n    const vals: boolean[] = [];\n    for (let j = vars - 1; j >= 0; j--) vals.push(Boolean(i & (1 << j)));\n    console.log(vals.map(v => v ? 'T' : 'F').concat(expr(vals) ? 'T' : 'F').join(' | '));\n  }\n}\nconsole.log('\\nTruth table for p XOR q:');\ntruthTable(2, v => v[0] !== v[1]);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// --- Logical Equivalence Checker ---\nfunction isEquivalent(expr1: (v: boolean[]) => boolean, expr2: (v: boolean[]) => boolean, vars: number): boolean {\n  for (let i = 0; i < (1 << vars); i++) {\n    const vals: boolean[] = [];\n    for (let j = vars - 1; j >= 0; j--) vals.push(Boolean(i & (1 << j)));\n    if (expr1(vals) !== expr2(vals)) return false;\n  }\n  return true;\n}\n// De Morgan's: ?(p ? q) = ?p ? ?q\nconst demorgan = isEquivalent(\n  v => !(v[0] && v[1]),\n  v => !v[0] || !v[1], 2);\nconsole.log('De Morgan holds:', demorgan);\n\n// --- SAT Solver Helper ---\nfunction findSatisfying(expr: (v: boolean[]) => boolean, vars: number): boolean[][] {\n  const solutions: boolean[][] = [];\n  for (let i = 0; i < (1 << vars); i++) {\n    const vals: boolean[] = [];\n    for (let j = vars - 1; j >= 0; j--) vals.push(Boolean(i & (1 << j)));\n    if (expr(vals)) solutions.push(vals);\n  }\n  return solutions;\n}\n// (p ? q) ? (q ? r) ? (p ? r) is a tautology\nconst isTautology = (expr: (v: boolean[]) => boolean, vars: number): boolean =>\n  findSatisfying(v => !expr(v), vars).length === 0;\nconst tautCheck = isTautology(v => !v[0] || !v[1] || v[2] || !(!v[0] || v[1]) || !(!v[1] || v[2]) || (!v[0] || v[2]), 3);\nconsole.log('Is tautology:', tautCheck);\n\n// --- CNF/DNF Converter ---\nfunction toDNF(truthTable: boolean[][]): string {\n  return truthTable.filter(row => row[row.length - 1])\n    .map(row => row.slice(0, -1).map((v, i) => (v ? '' : '?') + String.fromCharCode(112 + i)).join('?'))\n    .join('?');\n}\nfunction toCNF(truthTable: boolean[][]): string {\n  return truthTable.filter(row => !row[row.length - 1])\n    .map(row => row.slice(0, -1).map((v, i) => (v ? '?' : '') + String.fromCharCode(112 + i)).join('?'))\n    .join('?');\n}\n// XOR truth table: p q | p?q\nconst xorTT: boolean[][] = [[true,true,false],[true,false,true],[false,true,true],[false,false,false]];\nconsole.log('\\nXOR DNF:', toDNF(xorTT), 'XOR CNF:', toCNF(xorTT));\n\n// --- Modus Ponens Validator ---\nfunction isValidArgument(premises: ((v: boolean[]) => boolean)[], conclusion: (v: boolean[]) => boolean, vars: number): boolean {\n  for (let i = 0; i < (1 << vars); i++) {\n    const vals: boolean[] = [];\n    for (let j = vars - 1; j >= 0; j--) vals.push(Boolean(i & (1 << j)));\n    if (premises.every(p => p(vals)) && !conclusion(vals)) return false;\n  }\n  return true;\n}\n// If p?q and p are true, then q must be true\nconsole.log('\\nModus ponens valid:', isValidArgument(\n  [v => !v[0] || v[1], v => v[0]],\n  v => v[1], 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// logic\n// sets-graphs-probability implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'logic', data: { topic: 'sets-graphs-probability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// logic - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'discrete-math demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'discrete-mathematics', chapter: 'logic' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('discrete-math'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Propositions are T/F statements. Logical connectives combine them into compound propositions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Truth tables exhaustively enumerate truth values."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logical equivalence means identical truth tables; De Morgan's and distributive laws are essential."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$p \\rightarrow q$ is equivalent to $\\neg p \\lor q$ and to its contrapositive $\\neg q \\rightarrow \\neg p$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every Boolean expression has CNF and DNF canonical forms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A tautology is always true; a contradiction is always false."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Valid arguments correspond to tautological conditionals."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inference rules (modus ponens, modus tollens, syllogism) formalize reasoning."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Propositional logic cannot express quantifiers ? that requires predicate logic."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "29-truth-table-generator",
      children: "2.9 Truth Table Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type TruthTableRow = Record<string, boolean>;\n\nfunction generateTruthTable(vars: string[]): TruthTableRow[] {\n  const rows: TruthTableRow[] = [];\n  for (let i = 0; i < (1 << vars.length); i++) {\n    const row: TruthTableRow = {};\n    for (let j = 0; j < vars.length; j++) {\n      row[vars[j]] = Boolean((i >> (vars.length - 1 - j)) & 1);\n    }\n    rows.push(row);\n  }\n  return rows;\n}\n\nfunction evaluate(\n  expr: (vars: TruthTableRow) => boolean,\n  vars: string[]\n): { table: TruthTableRow[]; isTautology: boolean; isContradiction: boolean } {\n  const table = generateTruthTable(vars);\n  const results = table.map(row => expr(row));\n  return {\n    table,\n    isTautology: results.every(r => r),\n    isContradiction: results.every(r => !r)\n  };\n}\n\n// p ? q = ?p ? q\nconst result = evaluate(\n  row => !row.p || row.q,\n  [\"p\", \"q\"]\n);\nconsole.log(result.isTautology); // false (satisfiable but not tautology)\n\nconst tautology = evaluate(\n  row => (!row.p || row.q) === (!(!row.p && !row.q)),\n  [\"p\", \"q\"]\n);\nconsole.log(tautology.isTautology); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "210-logical-equivalence-prover",
      children: "2.10 Logical Equivalence Prover"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function areLogicallyEquivalent(\n  expr1: (row: TruthTableRow) => boolean,\n  expr2: (row: TruthTableRow) => boolean,\n  vars: string[]\n): boolean {\n  const table = generateTruthTable(vars);\n  return table.every(row => expr1(row) === expr2(row));\n}\n\n// Prove: p ? q = ?p ? q\nconst equiv1 = areLogicallyEquivalent(\n  row => !row.p || row.q,\n  row => row.p ? row.q : true,\n  [\"p\", \"q\"]\n);\nconsole.log(equiv1); // true\n\n// Prove: p ? q = (p ? q) ? ?(p ? q)\nconst equiv2 = areLogicallyEquivalent(\n  row => row.p !== row.q,\n  row => (row.p || row.q) && !(row.p && row.q),\n  [\"p\", \"q\"]\n);\nconsole.log(equiv2); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "211-inference-rules--systematic-proofs",
      children: "2.11 Inference Rules ? Systematic Proofs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Proposition = { type: string; args: any[] };\n\nfunction modusPonens(p: boolean, pImpliesQ: boolean): boolean | null {\n  if (p && pImpliesQ) return true;\n  return null; // cannot conclude\n}\n\nfunction modusTollens(notQ: boolean, pImpliesQ: boolean): boolean | null {\n  if (notQ && pImpliesQ) return false;\n  return null;\n}\n\nfunction hypotheticalSyllogism(\n  pImpliesQ: boolean,\n  qImpliesR: boolean\n): boolean | null {\n  if (pImpliesQ && qImpliesR) return true;\n  return null;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof 2.4 (Logical proof using inference rules)."
      }), " Prove that $p \\land q$, $p \\rightarrow r$, $q \\rightarrow s$ entails $r \\land s$."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Justification"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\land q$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Premise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplification (1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$q$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplification (1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$p \\rightarrow r$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Premise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$q \\rightarrow s$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Premise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$r$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modus ponens (2, 4)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$s$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modus ponens (3, 5)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$r \\land s$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conjunction (6, 7)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "212-normal-forms--cnf-and-dnf",
      children: "2.12 Normal Forms ? CNF and DNF"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 2.18 (Conjunctive Normal Form)."
      }), " A conjunction of clauses, where each clause is a disjunction of literals. Example: $(p \\lor \\neg q) \\land (q \\lor r)$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 2.19 (Disjunctive Normal Form)."
      }), " A disjunction of minterms, where each minterm is a conjunction of literals. Example: $(p \\land q) \\lor (\\neg p \\land r)$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function toDNF(truthTable: { vars: string[]; result: boolean }[]): string {\n  const terms: string[] = [];\n  for (const row of truthTable) {\n    if (!row.result) continue;\n    const literals: string[] = [];\n    for (const v of row.vars) {\n      literals.push(row[row.vars.indexOf(v)] ? v : `?${v}`);\n    }\n    terms.push(`(${literals.join(\" ? \")})`);\n  }\n  return terms.join(\" ? \");\n}\n\n// Example: XOR truth table\nfunction dnfOfXor(): string {\n  const table = [\n    { vars: [\"p\", \"q\"], result: false },\n    { vars: [\"p\", \"q\"], result: true },\n    { vars: [\"p\", \"q\"], result: true },\n    { vars: [\"p\", \"q\"], result: false }\n  ];\n  return toDNF(table); // (?p ? q) ? (p ? ?q)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "213-sat-solver--brute-force",
      children: "2.13 SAT Solver ? Brute Force"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function bruteForceSAT(\n  clauses: number[][],\n  varCount: number\n): number[] | null {\n  // clauses: array of clauses, each clause is array of literals\n  // positive = variable, negative = ?variable\n  for (let assignment = 0; assignment < (1 << varCount); assignment++) {\n    const vars: boolean[] = [];\n    for (let i = 0; i < varCount; i++) {\n      vars[i] = Boolean((assignment >> (varCount - 1 - i)) & 1);\n    }\n    const allClausesSat = clauses.every(clause =>\n      clause.some(lit => lit > 0 ? vars[lit - 1] : !vars[-lit - 1])\n    );\n    if (allClausesSat) return vars.map(v => v ? 1 : 0);\n  }\n  return null; // unsatisfiable\n}\n\n// (p ? q) ? (?p ? q) ? (p ? ?q) ? (?p ? ?q)\nconst unsat = bruteForceSAT([[1, 2], [-1, 2], [1, -2], [-1, -2]], 2);\nconsole.log(unsat); // null (contradiction)\n\n// (p ? q) ? (?p ? r)\nconst sat = bruteForceSAT([[1, 2], [-1, 3]], 3);\nconsole.log(sat); // [1, 0, 1] e.g., p=true, q=false, r=true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Logic Flow\"\n        A[Proposition] --> B{Truth Table}\n        B --> C[Tautology]\n        B --> D[Contradiction]\n        B --> E[Satisfiable]\n        C --> F[Use as Theorem]\n        D --> G[Always False]\n        E --> H{CNF or DNF?}\n        H --> I[CNF: Conjunction of Clauses]\n        H --> J[DNF: Disjunction of Minterms]\n        I --> K[SAT Solver]\n        J --> K\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2.18"
      }), " (Sheffer stroke ? universal gate). The NAND gate ($p \\mid q$) alone can express all connectives:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\neg p \\equiv p \\mid p$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$p \\land q \\equiv (p \\mid q) \\mid (p \\mid q)$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$p \\lor q \\equiv (p \\mid p) \\mid (q \\mid q)$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof 2.5"
      }), " (Resolution principle). $(p \\lor q) \\land (\\neg p \\lor r) \\implies (q \\lor r)$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof by cases."
      }), " If $p$ is true, then $\\neg p$ is false, so $r$ must be true, giving $q \\lor r$. If $p$ is false, then $p \\lor q$ forces $q$ true, again giving $q \\lor r$. $\\square$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "17",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show that $(p \\rightarrow q) \\land (q \\rightarrow r) \\rightarrow (p \\rightarrow r)$ is a tautology using a truth table."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Convert $(p \\land q) \\lor (\\neg p \\land r)$ to CNF."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Express the XOR gate using only NOR gates (the dual of NAND)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove by logical equivalence: $p \\rightarrow (q \\rightarrow r) \\equiv (p \\land q) \\rightarrow r$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Determine whether $(p \\rightarrow q) \\land (p \\rightarrow \\neg q)$ is satisfiable."
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
        children: "Is \"This statement is false\" a proposition? Explain."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a truth table for $\\neg(p \\lor \\neg q)$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State the converse and contrapositive of \"If a number is even, its square is even.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show $p \\rightarrow q$ and $\\neg q \\rightarrow \\neg p$ are equivalent."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the negation of $p \\oplus q$?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert $p \\oplus q$ to CNF."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name the inference rule: $p \\lor q$, $\\neg p$, $\\therefore q$."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove De Morgan's second law $\\neg(p \\lor q) \\equiv \\neg p \\land \\neg q$ by truth table."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Simplify $\\neg(p \\land (\\neg p \\lor q))$ using logical equivalences. Name each step."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Determine whether $(p \\rightarrow q) \\land (q \\rightarrow p)$ is logically equivalent to $p \\leftrightarrow q$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove that $(p \\lor q) \\land \\neg(p \\land q)$ is equivalent to $p \\oplus q$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Is $((p \\rightarrow q) \\rightarrow r) \\rightarrow s$ a tautology, contradiction, or satisfiable? Justify."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Convert $p \\rightarrow (q \\land r)$ to DNF."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a TypeScript function that takes a CNF formula as an array of clauses (each clause is an array of literals) and checks satisfiability by brute force for up to 5 variables."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "15",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Sheffer stroke"
          }), " (NAND) is defined as $p \\mid q \\equiv \\neg(p \\land q)$. Show that all other logical connectives ($\\neg, \\land, \\lor, \\rightarrow$) can be expressed using only the Sheffer stroke."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "resolution principle"
          }), " states that if $(p \\lor q)$ and $(\\neg p \\lor r)$ are both true, then $(q \\lor r)$ must be true (the resolvent). Prove this equivalence. Then show that repeated resolution can determine unsatisfiability of any CNF formula."]
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