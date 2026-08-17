"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[82444],{

/***/ 585
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_artificial_intelligence_06_logic_md_a8b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-artificial-intelligence-06-logic-md-a8b.json
const site_docs_courses_artificial_intelligence_06_logic_md_a8b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/artificial-intelligence/06-logic","title":"Chapter 6: Logical Agents and Propositional Logic","description":"Previous Constraint Satisfaction Problems | Next First-Order Logic and Inference","source":"@site/docs/courses/artificial-intelligence/06-logic.md","sourceDirName":"courses/artificial-intelligence","slug":"/artificial-intelligence/06-logic","permalink":"/ai-engineering-journey/artificial-intelligence/06-logic","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"id":"06-logic","slug":"/artificial-intelligence/06-logic","title":"Chapter 6: Logical Agents and Propositional Logic","sidebar_label":"Chapter 6: Logical Agents and Propositional Logic","sidebar_position":11},"sidebar":"course-artificial-intelligence","previous":{"title":"Chapter 6: Knowledge Representation","permalink":"/ai-engineering-journey/artificial-intelligence/06-knowledge-representation"},"next":{"title":"Chapter 7: First-Order Logic and Inference","permalink":"/ai-engineering-journey/artificial-intelligence/07-fol"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/artificial-intelligence/06-logic.md


const frontMatter = {
	id: '06-logic',
	slug: '/artificial-intelligence/06-logic',
	title: 'Chapter 6: Logical Agents and Propositional Logic',
	sidebar_label: 'Chapter 6: Logical Agents and Propositional Logic',
	sidebar_position: 11
};
const contentTitle = 'Chapter 6: Logical Agents and Propositional Logic';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Logic in AI Matters",
  "id": "why-logic-in-ai-matters",
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
  "value": "Knowledge-Based Agents",
  "id": "knowledge-based-agents",
  "level": 3
}, {
  "value": "Algorithm: Knowledge-Based Agent Cycle",
  "id": "algorithm-knowledge-based-agent-cycle",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run → Wumpus World",
  "id": "step-by-step-dry-run--wumpus-world",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 4
}, {
  "value": "Logic Fundamentals",
  "id": "logic-fundamentals",
  "level": 3
}, {
  "value": "Propositional Logic (PL)",
  "id": "propositional-logic-pl",
  "level": 3
}, {
  "value": "Syntax",
  "id": "syntax",
  "level": 4
}, {
  "value": "Semantics → Truth Table Conditions",
  "id": "semantics--truth-table-conditions",
  "level": 4
}, {
  "value": "Algorithm: Truth Table Enumeration",
  "id": "algorithm-truth-table-enumeration",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run → Truth Table Entailment",
  "id": "step-by-step-dry-run--truth-table-entailment",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-1",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-1",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 4
}, {
  "value": "Inference Rules",
  "id": "inference-rules",
  "level": 3
}, {
  "value": "Modus Ponens",
  "id": "modus-ponens",
  "level": 4
}, {
  "value": "Modus Tollens",
  "id": "modus-tollens",
  "level": 4
}, {
  "value": "AND Elimination",
  "id": "and-elimination",
  "level": 4
}, {
  "value": "AND Introduction",
  "id": "and-introduction",
  "level": 4
}, {
  "value": "Resolution Rule",
  "id": "resolution-rule",
  "level": 4
}, {
  "value": "Resolution Algorithm",
  "id": "resolution-algorithm",
  "level": 3
}, {
  "value": "Step 1: Convert to Conjunctive Normal Form (CNF)",
  "id": "step-1-convert-to-conjunctive-normal-form-cnf",
  "level": 4
}, {
  "value": "Step 2: Resolution Algorithm",
  "id": "step-2-resolution-algorithm",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run → Resolution Proof",
  "id": "step-by-step-dry-run--resolution-proof",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-2",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-2",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 4
}, {
  "value": "Forward Chaining",
  "id": "forward-chaining",
  "level": 3
}, {
  "value": "Algorithm: Forward Chaining",
  "id": "algorithm-forward-chaining",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run → Forward Chaining",
  "id": "step-by-step-dry-run--forward-chaining",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-3",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-3",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 4
}, {
  "value": "Backward Chaining",
  "id": "backward-chaining",
  "level": 3
}, {
  "value": "Algorithm: Backward Chaining",
  "id": "algorithm-backward-chaining",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run → Backward Chaining",
  "id": "step-by-step-dry-run--backward-chaining",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-4",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-4",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 4
}, {
  "value": "Propositional Logic vs First-Order Logic",
  "id": "propositional-logic-vs-first-order-logic",
  "level": 3
}, {
  "value": "Inference Methods → Comparison Table",
  "id": "inference-methods--comparison-table",
  "level": 3
}, {
  "value": "Satisfiability and Validity",
  "id": "satisfiability-and-validity",
  "level": 3
}, {
  "value": "Definitions",
  "id": "definitions",
  "level": 4
}, {
  "value": "Algorithm: SAT Checking",
  "id": "algorithm-sat-checking",
  "level": 4
}, {
  "value": "Python Implementation (DPLL)",
  "id": "python-implementation-dpll",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-5",
  "level": 4
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference → Logical Connectives",
  "id": "quick-reference--logical-connectives",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "1. Resolution Proof Example (Common Interview Question)",
  "id": "1-resolution-proof-example-common-interview-question",
  "level": 3
}, {
  "value": "2. Horn Clauses",
  "id": "2-horn-clauses",
  "level": 3
}, {
  "value": "3. DPLL Algorithm",
  "id": "3-dpll-algorithm",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "1. Theorem Provers (Vampire, E, Z3)",
  "id": "1-theorem-provers-vampire-e-z3",
  "level": 3
}, {
  "value": "2. Logic Programming (Prolog)",
  "id": "2-logic-programming-prolog",
  "level": 3
}, {
  "value": "3. Circuit Verification",
  "id": "3-circuit-verification",
  "level": 3
}, {
  "value": "4. Planning Systems",
  "id": "4-planning-systems",
  "level": 3
}, {
  "value": "5. Expert Systems",
  "id": "5-expert-systems",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Truth Table Evaluation",
  "id": "example-1-truth-table-evaluation",
  "level": 3
}, {
  "value": "Example 2: The Wumpus World",
  "id": "example-2-the-wumpus-world",
  "level": 3
}, {
  "value": "Example 3: Resolution Proof Demonstration",
  "id": "example-3-resolution-proof-demonstration",
  "level": 3
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
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "chapter-6-logical-agents-and-propositional-logic",
        children: "Chapter 6: Logical Agents and Propositional Logic"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/05-csp",
        children: "Chapter 5: Constraint Satisfaction Problems"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/07-fol",
        children: "Chapter 7: First-Order Logic and Inference"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the role of knowledge-based agents in AI."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the components of a logic: syntax, semantics, and entailment."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Translate natural language statements into Propositional Logic formulas."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate the validity and satisfiability of logical sentences using truth tables."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement inference rules like Modus Ponens and Resolution."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between forward chaining and backward chaining."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand resolution refutation and its completeness."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply DPLL for SAT solving with unit propagation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-logic-in-ai-matters",
      children: "Why Logic in AI Matters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Legal Reasoning in a Courtroom"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine a courtroom. The prosecution presents evidence (facts), and the judge applies legal statutes (rules) to reach a verdict (conclusion). The process is not arbitrary → every conclusion must follow logically from the evidence and the law."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A lawyer reasons like a logical agent:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Facts"
        }), ": \"The defendant was at the crime scene\" (P), \"The defendant owns a weapon matching the murder weapon\" (Q)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rules"
        }), ": \"If someone was at the crime scene and owns the murder weapon, they are a suspect\" (P ∧ Q ⇒ R)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inference"
        }), ": Using Modus Ponens, from P ∧ Q and P ∧ Q ⇒ R, deduce R (the defendant is a suspect)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is exactly how a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "knowledge-based agent"
      }), " works in AI. The agent stores facts in a Knowledge Base (KB), applies rules of inference, and derives new conclusions. Just as a judge cannot invent facts, a logical agent can only derive what follows from what it knows → making its reasoning ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sound"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "transparent"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "verifiable"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Why this matters for AI:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explainability"
        }), ": Every conclusion has a traceable proof chain."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Correctness"
        }), ": Inference rules guarantee truth-preserving transformations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modularity"
        }), ": New facts can be added without rewriting the reasoning engine."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without logic, AI systems are black boxes. With logic, they become reasoning partners."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Knowledge-Based Agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KB, TELL, ASK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Knowledge Base, entailment, soundness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logic Fundamentals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax, semantics, models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entailment (⊨), soundness, completeness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Propositional Logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Symbols, connectives, truth tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modus Ponens, Resolution, CNF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inference Rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modus Ponens, Modus Tollens, Resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Soundness, refutation completeness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resolution Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CNF conversion, resolution principle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty clause, refutation proof"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward Chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data-driven reasoning, Horn clauses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agenda, fact derivation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backward Chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Goal-driven reasoning, AND-OR search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subgoals, goal stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Satisfiability & Validity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Valid, satisfiable, unsatisfiable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tautology, contradiction, SAT, DPLL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theorem provers, Prolog, circuit verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Z3, Vampire, SWI-Prolog"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Knowledge-Based Agent] --> B[TELL / ASK]\n    A --> C[Knowledge Base]\n    C --> D[Logic Fundamentals]\n    D --> E[Syntax]\n    D --> F[Semantics]\n    D --> G[Entailment]\n    E --> H[Propositional Logic]\n    H --> I1[Truth Tables]\n    H --> I2[Resolution]\n    H --> I3[Modus Ponens]\n    H --> I4[Forward Chaining]\n    H --> I5[Backward Chaining]\n    I2 --> J[CNF Conversion]\n    I2 --> K[Resolution Algorithm]\n    I4 --> L[Horn Clauses]\n    I5 --> L\n    K --> M[SAT / DPLL]\n    M --> N[Applications]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/artificial-intelligence/ch06-logic-fol.png",
        alt: "Logic and FOL"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A knowledge-based agent maintains a Knowledge Base that it TELLs and ASKs, using entailment to infer new facts that follow logically from what it already knows."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "knowledge-based-agents",
      children: "Knowledge-Based Agents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: The Librarian"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A librarian manages a library catalog. When new books arrive, the librarian ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TELLs"
      }), " the catalog by adding entries. When a patron asks a question, the librarian ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ASKs"
      }), " the catalog → not by reading every book, but by using the catalog's structure to infer where the answer can be found. If the catalog says \"All computer science books are in section 006.3\" and a patron asks for an AI book, the librarian infers the correct location."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "knowledge-based agent"
      }), " works exactly this way. It maintains a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Knowledge Base (KB)"
      }), " → a structured set of sentences in a formal language → and interacts through two operations:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TELL"
        }), ": Adds new sentences to the KB (like adding a book to the catalog)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ASK"
        }), ": Queries the KB to determine what follows (like asking the catalog a question)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The agent's reasoning cycle:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Perceive"
        }), " the environment → get a percept."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TELL"
        }), " the KB what was perceived."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ASK"
        }), " the KB what action is best."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execute"
        }), " the action."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-knowledge-based-agent-cycle",
      children: "Algorithm: Knowledge-Based Agent Cycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: KB-Agent(percept)\n1.  TELL(KB, Make-Percept-Sentence(percept, t))\n2.  action ← ASK(KB, Make-Action-Query(t))\n3.  TELL(KB, Make-Action-Sentence(action, t))\n4.  return action\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function KB_AGENT(percept)\n    persistent: KB, a knowledge base\n                t, a counter (initially 0)\n    \n    TELL(KB, MAKE_PERCEPT_SENTENCE(percept, t))\n    action ← ASK(KB, MAKE_ACTION_QUERY(t))\n    TELL(KB, MAKE_ACTION_SENTENCE(action, t))\n    t ← t + 1\n    return action\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run--wumpus-world",
      children: "Step-by-Step Dry Run → Wumpus World"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The agent is in a 4×4 grid with pits and a Wumpus. Percepts: Stench (Wumpus nearby), Breeze (pit nearby), Glitter (gold)."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Percept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TELL to KB"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "ASK Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "KB After Inference"
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
            children: "¬Stench, ¬Breeze at (1,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "¬S₁₁, ¬B₁₁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Move to (1,2) or (2,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{¬S₁₁, ¬B₁₁, S₁₁ ⇔ (W₁₂ ∨ W₂₁), B₁₁ ⇔ (P₁₂ ∨ P₂₁)}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breeze at (1,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B₁₂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Pit in (1,3) or (2,2) or (1,1)?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{..., B₁₂, B₁₂ ⇔ (P₁₃ ∨ P₂₂ ∨ P₁₁), ¬P₁₁ ⇒ (P₁₃ ∨ P₂₂)}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent moved to (2,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Safe square?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backtrack-safe squares inferred"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What happens"
      }), ": The agent incrementally builds a map. At each step, the KB grows, and the ASK queries become more precise because more facts constrain the possibilities."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class KnowledgeBase:\n    def __init__(self):\n        self.facts = set()\n        self.rules = []\n\n    def tell(self, fact):\n        \"\"\"Add a fact to the KB.\"\"\"\n        self.facts.add(fact)\n\n    def ask(self, query):\n        \"\"\"Return True if query follows logically from KB.\"\"\"\n        # Simple forward checking for propositional logic\n        return query in self.facts or self._resolve(query)\n\n    def _resolve(self, query):\n        \"\"\"Try to derive query using resolution (simplified).\"\"\"\n        # Full resolution implementation in section below\n        return False\n\n# Example usage\nkb = KnowledgeBase()\nkb.tell(\"P\")           # It is raining\nkb.tell(\"P -> Q\")      # If rain then wet ground\nprint(kb.ask(\"Q\"))     # True (Q can be derived)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TELL (fact)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple set insertion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TELL (rule)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Appending to rule list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASK (direct)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set membership test"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASK (resolution)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "EXP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resolution is exponential in worst case"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The TELL operation is always fast. ASK complexity depends entirely on the inference algorithm used → from constant-time fact lookup to exponential full resolution."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modular → new facts don't break existing logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inefficient for large KBs without indexing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full transparency → every conclusion traceable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot handle uncertainty (use probabilistic reasoning)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sound by construction when using valid inference rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires perfect knowledge → no \"partial\" truth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Separation of knowledge and reasoning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Knowledge acquisition bottleneck"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty KB"
        }), ": ASK always returns false (nothing is entailed by nothing)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contradictory KB"
        }), ": KB containing P and ¬P entails everything (ex falso quodlibet)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tautological query"
        }), ": P ∨ ¬P is always entailed regardless of KB contents."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cyclic rules"
        }), ": Rules like P ⇒ Q and Q ⇒ P with no facts lead to no new derivations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Redundant TELL"
        }), ": Adding P when P is already in KB is idempotent."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "logic-fundamentals",
      children: "Logic Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Grammar of a Natural Language"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A valid English sentence must follow grammar rules (syntax) and carry meaning (semantics). \"Colorless green ideas sleep furiously\" is syntactically correct but semantically meaningless. Similarly, logic requires both well-formed formulas (syntax) and truth conditions (semantics)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every logic consists of three pillars:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Syntax"
          }), ": Rules for constructing valid sentences."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Example: In PL, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "P ∧ Q"
            }), " is syntactically valid; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "∧ P Q"
            }), " is not."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Semantics"
          }), ": Rules for determining the truth of a sentence with respect to a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "model"
          }), " (an assignment of truth values to symbols)."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Example: In model {P=true, Q=false}, the sentence P ∧ Q evaluates to false."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Entailment (KB ⊨ α)"
          }), ": Sentence α follows logically from KB if α is true in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "every"
          }), " model where KB is true."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Example: {P, P ⇒ Q} ⊨ Q because every model making P and P⇒Q true also makes Q true."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Soundness"
      }), ": An inference algorithm is sound if it only derives entailed sentences."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If KB ⊢ α (derivable), then KB ⊨ α (true in all models)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"The algorithm never lies.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Completeness"
      }), ": An inference algorithm is complete if it can derive any entailed sentence."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If KB ⊨ α (true in all models), then KB ⊢ α (derivable)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"The algorithm can find every truth.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["💡 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Insight"
        }), ": Soundness is non-negotiable for correctness. Completeness is desirable but often traded for efficiency. Resolution is refutation-complete (complete for proving unsatisfiability), which is sufficient for most tasks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "propositional-logic-pl",
      children: "Propositional Logic (PL)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Boolean Circuit Design"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A computer circuit is built from logic gates connected by wires. Each wire carries either a high voltage (true, 1) or low voltage (false, 0). An AND gate outputs high only when both inputs are high. An OR gate outputs high when at least one input is high. Propositional logic is the mathematical model of these circuits."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "syntax",
      children: "Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PL uses:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic symbols"
        }), ": P, Q, R, P₁, P₂, ... (represent propositions)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connectives"
        }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "¬ (Negation/Not) → unary operator"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "∧ (Conjunction/And) → binary operator"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "∨ (Disjunction/Or) → binary operator"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "⇒ (Implication) → binary operator"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "⇔ (Biconditional/Iff) → binary operator"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parentheses"
        }), ": ( and ) for grouping"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "well-formed formula (WFF)"
      }), " is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "An atomic symbol (P, Q, ...), or"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "¬φ where φ is a WFF, or"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "φ ∧ ψ, φ ∨ ψ, φ ⇒ ψ, φ ⇔ ψ where φ and ψ are WFFs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grammar:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Formula := Atom | ¬Formula | Formula ∧ Formula | Formula ∨ Formula\n         | Formula ⇒ Formula | Formula ⇔ Formula | (Formula)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "semantics--truth-table-conditions",
      children: "Semantics → Truth Table Conditions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Connective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "True When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "¬P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P is false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P ∧ Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both P and Q are true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P ∨ Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At least one of P, Q is true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P ⇒ Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P is false or Q is true (¬P ∨ Q)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P ⇔ Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P and Q have the same truth value"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-truth-table-enumeration",
      children: "Algorithm: Truth Table Enumeration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: TT-Entails(KB, α)\n1.  symbols ← list of proposition symbols in KB and α\n2.  return TT-Check-All(KB, α, symbols, {})\n\nAlgorithm: TT-Check-All(KB, α, symbols, model)\n1.  if symbols is empty then\n2.      if PL-True(KB, model) then return PL-True(α, model)\n3.      else return true (KB false in this model, so KB ⊨ α vacuously)\n4.  else\n5.      P ← First(symbols)\n6.      rest ← Rest(symbols)\n7.      return TT-Check-All(KB, α, rest, model ∪ {P = true})\n8.         and TT-Check-All(KB, α, rest, model ∪ {P = false})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function TT_ENTAILS(KB, alpha) returns True if KB entails alpha\n    symbols ← all proposition symbols in KB ∪ alpha\n    return TT_CHECK_ALL(KB, alpha, symbols, {})\n\nfunction TT_CHECK_ALL(KB, alpha, symbols, model) returns boolean\n    if Empty(symbols) then\n        if PL_TRUE(KB, model) then\n            return PL_TRUE(alpha, model)\n        else\n            return True   // KB false → entailment vacuously holds\n    else\n        P ← Pop(symbols)\n        rest ← symbols\n        return TT_CHECK_ALL(KB, alpha, rest, model ∪ {P=True})\n           AND TT_CHECK_ALL(KB, alpha, rest, model ∪ {P=False})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run--truth-table-entailment",
      children: "Step-by-Step Dry Run → Truth Table Entailment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem"
      }), ": Does KB = {A ∨ B, ¬B} entail α = A?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1"
      }), ": Extract symbols = {A, B}\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2"
      }), ": Enumerate all models and check."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "KB = (A∨B) ∧ ¬B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "α = A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "KB ⊨ α?"
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "T"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: ["(T∨T)∧¬T = T∧F = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "F"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Vacuously true (KB false)"
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "F"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: ["(T∨F)∧¬F = T∧T = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "True"
            })
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
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "T"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: ["(F∨T)∧¬T = T∧F = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "F"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Vacuously true (KB false)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "F"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: ["(F∨F)∧¬F = F∧T = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "F"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Vacuously true (KB false)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result"
      }), ": In every model where KB is true (model 2 only), α is also true. Therefore, KB ⊨ A."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-1",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def tt_entails(kb: set, alpha: str, symbols: list[str]) -> bool:\n    \"\"\"Truth-table entailment check.\"\"\"\n    def pl_true(sentence: str, model: dict) -> bool:\n        \"\"\"Evaluate a propositional sentence under a model.\"\"\"\n        s = sentence.strip()\n        # Base case: atomic symbol\n        if s in model:\n            return model[s]\n        # NOT\n        if s.startswith(\"¬\") or s.startswith(\"~\"):\n            return not pl_true(s[1:].strip(), model)\n        # OR\n        if \"∨\" in s or \"|\" in s:\n            parts = s.split(\"∨\" if \"∨\" in s else \"|\")\n            return any(pl_true(p.strip(), model) for p in parts)\n        # AND\n        if \"∧\" in s or \"&\" in s:\n            parts = s.split(\"∧\" if \"∧\" in s else \"&\")\n            return all(pl_true(p.strip(), model) for p in parts)\n        # IMPLIES\n        if \"⇒\" in s or \"->\" in s:\n            delim = \"⇒\" if \"⇒\" in s else \"->\"\n            left, right = s.split(delim, 1)\n            return (not pl_true(left.strip(), model)) or pl_true(right.strip(), model)\n        # IFF\n        if \"⇔\" in s or \"<->\" in s:\n            delim = \"⇔\" if \"⇔\" in s else \"<->\"\n            left, right = s.split(delim, 1)\n            return pl_true(left.strip(), model) == pl_true(right.strip(), model)\n        raise ValueError(f\"Cannot parse: {s}\")\n\n    def check_all(symbols: list, model: dict) -> bool:\n        if not symbols:\n            kb_true = all(pl_true(s, model) for s in kb)\n            if not kb_true:\n                return True  # KB false → entailment holds vacuously\n            return pl_true(alpha, model)\n        sym = symbols[0]\n        rest = symbols[1:]\n        return (check_all(rest, {**model, sym: True}) and\n                check_all(rest, {**model, sym: False}))\n\n    return check_all(symbols, {})\n\n# Example\nkb = {\"A ∨ B\", \"¬B\"}\nalpha = \"A\"\nsymbols = [\"A\", \"B\"]\nprint(f\"KB entails {alpha}? {tt_entails(kb, alpha, symbols)}\")  # True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(2ⁿ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For n symbols, we check 2ⁿ models (each row is one model evaluation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursion depth equals number of symbols"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The exponential growth makes truth tables impractical for more than 20-30 symbols. A 30-symbol problem requires checking over 1 billion models. This is why modern SAT solvers use DPLL/CDCL instead."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-1",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Guaranteed correct (sound and complete)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2ⁿ) → impractical for large n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intuitive and easy to understand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only works for propositional logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Every conclusion has a clear proof trace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot handle functions, quantifiers, or relations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for all other logical methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No support for uncertainty or probabilities"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tautology in KB"
        }), ": Adding P ∨ ¬P to KB doesn't change entailment (it's always true)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contradictory KB"
        }), ": KB with P and ¬P entails every possible sentence (explosion)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty KB"
        }), ": Only tautologies are entailed (sentences true in all models)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single symbol"
        }), ": KB={P}, query=Q → false (no relation between P and Q)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cyclic definition"
        }), ": P ⇒ Q and Q ⇒ P with only P in KB → Q is entailed (using Modus Ponens twice)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inference-rules",
      children: "Inference Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Legal Inference Patterns"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In law, certain reasoning patterns are standard. If a statute says \"If a person is driving over the speed limit, they are speeding\" (P ⇒ Q) and evidence shows \"The person was driving at 90 mph in a 50 mph zone\" (P), the court concludes \"The person is speeding\" (Q). This is Modus Ponens → the most fundamental rule of inference."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "modus-ponens",
      children: "Modus Ponens"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "From P and P ⇒ Q, infer Q."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Premise 1: P\nPremise 2: P ⇒ Q\nConclusion: Q\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P = \"It is raining\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P ⇒ Q = \"If it is raining, the ground is wet\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conclusion: \"The ground is wet\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "modus-tollens",
      children: "Modus Tollens"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "From ¬Q and P ⇒ Q, infer ¬P."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Premise 1: ¬Q\nPremise 2: P ⇒ Q\nConclusion: ¬P\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "¬Q = \"The ground is not wet\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P ⇒ Q = \"If it rained, the ground would be wet\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conclusion: \"It did not rain\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "and-elimination",
      children: "AND Elimination"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "From P ∧ Q, infer P (or Q)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Premise: P ∧ Q\nConclusion: P\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "and-introduction",
      children: "AND Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "From P and Q (separately), infer P ∧ Q."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Premise 1: P\nPremise 2: Q\nConclusion: P ∧ Q\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "resolution-rule",
      children: "Resolution Rule"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The most powerful single inference rule:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "From (P ∨ Q) and (¬P ∨ R), infer (Q ∨ R)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Premise 1: P ∨ Q\nPremise 2: ¬P ∨ R\nConclusion: Q ∨ R\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The two premises share a complementary literal (P and ¬P). Resolution cancels them and produces the disjunction of the remaining literals."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Property"
        }), ": Resolution is the only inference rule needed for refutation-complete proof in propositional logic. Every other rule can be derived from it."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Special cases of Resolution"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "From P and ¬P ∨ Q, infer Q (same as Modus Ponens)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "From P and ¬P, infer the empty clause (contradiction)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "From P ∨ Q and ¬P, infer Q (unit resolution)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resolution-algorithm",
      children: "Resolution Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Process of Elimination in a Whodunit"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A detective has a list of suspects. Clues eliminate possibilities one by one. \"The murderer is left-handed OR the murderer is tall.\" Then: \"The murderer is not left-handed.\" Resolution eliminates \"left-handed\" and concludes \"The murderer is tall.\" Keep eliminating until only one suspect remains → or until you've eliminated everyone (contradiction = empty clause), meaning your assumptions were inconsistent."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Resolution proves KB ⊨ α by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "refutation"
      }), ": show that KB ∧ ¬α is unsatisfiable by deriving the empty clause."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-1-convert-to-conjunctive-normal-form-cnf",
      children: "Step 1: Convert to Conjunctive Normal Form (CNF)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every propositional formula can be converted to CNF → a conjunction of clauses where each clause is a disjunction of literals."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example CNF: (A ∨ ¬B) ∧ (B ∨ C ∨ ¬D) ∧ (¬A)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Conversion Algorithm"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eliminate ⇔"
        }), ": Replace P ⇔ Q with (P ⇒ Q) ∧ (Q ⇒ P)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eliminate ⇒"
        }), ": Replace P ⇒ Q with ¬P ∨ Q"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Push ¬ inward"
        }), " (De Morgan's): ¬(P ∧ Q) → ¬P ∨ ¬Q, ¬(P ∨ Q) → ¬P ∧ ¬Q, ¬¬P → P"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distribute ∨ over ∧"
        }), ": (P ∨ (Q ∧ R)) → (P ∨ Q) ∧ (P ∨ R)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example"
      }), ": Convert (P ⇒ Q) ∧ (Q ⇒ P) to CNF"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eliminate ⇒: (¬P ∨ Q) ∧ (¬Q ∨ P)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Already in CNF!"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-2-resolution-algorithm",
      children: "Step 2: Resolution Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: PL-Resolution(KB, α)\n1.  clauses ← CNF(KB ∧ ¬α)\n2.  new ← {}\n3.  loop:\n4.      for each pair (Cᵢ, Cⱼ) in clauses:\n5.          resolvents ← PL-Resolve(Cᵢ, Cⱼ)\n6.          if empty clause in resolvents then return True  (entailment proven)\n7.          new ← new ∪ resolvents\n8.      if new ⊆ clauses then return False  (no new clauses, no entailment)\n9.      clauses ← clauses ∪ new\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where PL-Resolve finds complementary literals and generates the resolvent."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function PL_RESOLUTION(KB, alpha) returns True if KB entails alpha\n    clauses ← CNF(KB) ∪ CNF(¬alpha)\n    \n    while True:\n        new ← empty set\n        for each pair Ci, Cj in clauses:\n            resolvents ← PL_RESOLVE(Ci, Cj)\n            if resolvents contains empty clause then\n                return True\n            new ← new ∪ resolvents\n        if new ⊆ clauses then\n            return False\n        clauses ← clauses ∪ new\n\nfunction PL_RESOLVE(Ci, Cj) returns set of clauses\n    resolvents ← empty set\n    for each literal Li in Ci:\n        for each literal Lj in Cj:\n            if Li = ¬Lj or ¬Li = Lj then:\n                resolvent ← (Ci - Li) ∪ (Cj - Lj)\n                resolvents ← resolvents ∪ {resolvent}\n    return resolvents\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run--resolution-proof",
      children: "Step-by-Step Dry Run → Resolution Proof"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem"
      }), ": KB = {A ⇒ B, B ⇒ C, A}. Prove: C"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1 → Convert KB ∧ ¬C to CNF"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Sentence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "CNF"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A ⇒ B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "¬A ∨ B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B ⇒ C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "¬B ∨ C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "¬C (negated goal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "¬C"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Clauses: {¬A ∨ B, ¬B ∨ C, A, ¬C}"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2 → Apply resolution"
      }), ":"]
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
            children: "Clause 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Clause 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Resolvent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Reason"
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
            children: "¬A ∨ B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "A and ¬A cancel"
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
            children: "¬B ∨ C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "B and ¬B cancel"
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
            children: "¬C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty (☐)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "C and ¬C cancel → contradiction!"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result"
      }), ": The empty clause is derived, proving KB ∧ ¬C is unsatisfiable, therefore KB ⊨ C."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Knowledge Base Trace Table"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Clauses Set"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "New Clauses Derived"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{¬A∨B, ¬B∨C, A, ¬C}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "After pair 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "+ {B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Resolve(¬A∨B, A)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "After pair 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "+ {C}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Resolve(¬B∨C, B)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "After pair 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "+ {☐}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Resolve(¬C, C)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "☐ derived → KB ⊨ C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-2",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def to_cnf(sentence: str) -> set:\n    \"\"\"Convert a propositional sentence to CNF clauses (simplified).\"\"\"\n    # In practice, use a full CNF converter\n    # For this example, we accept pre-CNF clauses\n    return sentence\n\ndef pl_resolution(kb: list[str], alpha: str) -> bool:\n    \"\"\"Returns True if KB entails alpha using resolution refutation.\"\"\"\n    # Parse clauses\n    clauses = set()\n    for s in kb:\n        clauses.add(s)\n    clauses.add(to_cnf(f\"¬{alpha}\"))  # Negate goal\n\n    def pl_resolve(c1: str, c2: str) -> set:\n        \"\"\"Resolve two clauses to produce new clauses.\"\"\"\n        lits1 = set(c1.replace(\" \", \"\").split(\"∨\")) if \"∨\" in c1 else {c1}\n        lits2 = set(c2.replace(\" \", \"\").split(\"∨\")) if \"∨\" in c2 else {c2}\n\n        resolvents = set()\n        for l1 in lits1:\n            for l2 in lits2:\n                # Check if they are complementary\n                if (l1 == f\"¬{l2}\" or f\"¬{l1}\" == l2):\n                    new_clause = (lits1 - {l1}) | (lits2 - {l2})\n                    if not new_clause:\n                        return {\"☐\"}  # Empty clause\n                    resolvents.add(\"∨\".join(sorted(new_clause)))\n        return resolvents\n\n    while True:\n        new_clauses = set()\n        clauses_list = list(clauses)\n        for i in range(len(clauses_list)):\n            for j in range(i + 1, len(clauses_list)):\n                resolvents = pl_resolve(clauses_list[i], clauses_list[j])\n                if \"☐\" in resolvents:\n                    return True  # Entailment proven\n                new_clauses |= resolvents\n\n        if new_clauses.issubset(clauses):\n            return False  # No new clauses → no entailment\n        clauses |= new_clauses\n\n# Example\nkb = [\"¬A∨B\", \"¬B∨C\", \"A\"]\nalpha = \"C\"\nprint(f\"KB entails {alpha}? {pl_resolution(kb, alpha)}\")  # True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (worst)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(2²ⁿ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In worst case, number of clauses can double each iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(2ⁿ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New clause storage grows exponentially"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Refutation-complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If KB ⊨ α, resolution will eventually find the proof"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Resolution is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "refutation-complete"
      }), " but not ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "complete"
      }), " in general. This means: if KB ∧ ¬α is unsatisfiable, resolution will derive the empty clause. But if KB ⊭ α (i.e., α does not follow), resolution may run forever (semi-decidability in FOL)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In practice, resolution works well for problems with small clause sets and is the foundation of most theorem provers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-2",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single inference rule sufficient for all proofs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case exponential"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Refutation-complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot prove non-entailment in finite time (in FOL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works with any CNF formula (not just Horn)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires all formulas in CNF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for automated theorem provers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proofs can be very long with many intermediate clauses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to implement and understand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adding new facts requires full re-derivation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty KB resolution"
        }), ": KB={}, proving P → resolution of ¬P alone → no clauses to resolve → false (not entailed). Unless P is a tautology."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contradictory KB"
        }), ": KB={P, ¬P} → resolution immediately finds empty clause from P and ¬P, trivially entailing everything."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tautological clauses"
        }), ": (P ∨ ¬P) adds no information → it never resolves to produce anything new."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pure literals"
        }), ": If a literal appears only positively or only negatively across all clauses, it cannot contribute to finding the empty clause."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unit propagation"
        }), ": When a clause has only one literal (unit clause), it immediately forces assignments."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "forward-chaining",
      children: "Forward Chaining"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Spreading Activation in a Social Network"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When news spreads through a social network, one person tells their friends, who tell their friends, and so on → the information flows forward from what is known. Forward chaining works the same way: starting from known facts, it applies rules to derive new facts, which then trigger more rules."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Forward chaining is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "data-driven"
      }), ": it starts with what you know and derives everything possible."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-forward-chaining",
      children: "Algorithm: Forward Chaining"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Works on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Horn clauses"
      }), " → clauses with at most one positive literal:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rule: (P ∧ Q ∧ R) ⇒ S (premises → single conclusion)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fact: P (a clause with no negative literals)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Goal: Query a fact"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: Forward-Chain(KB, rules)\n1.  agenda ← list of known facts in KB\n2.  inferred ← empty dictionary (tracks which facts have been processed)\n3.  while agenda is not empty:\n4.      p ← Pop(agenda)\n5.      if p not in inferred:\n6.          inferred[p] = True\n7.          for each rule in rules where p is a premise:\n8.              count[rule] ← count[rule] - 1\n9.              if count[rule] == 0:\n10.                 conclusion ← Consequent(rule)\n11:                 if conclusion not in inferred:\n12:                     agenda ← agenda ∪ {conclusion}\n13. return inferred\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function FORWARD_CHAINING(KB, rules) returns all derivable facts\n    agenda ← KB.facts                                // facts to process\n    inferred ← empty dictionary                       // fact → True/False\n    \n    // Initialize premise counts for each rule\n    for each rule in rules:\n        count[rule] ← length(Premises(rule))\n    \n    while agenda is not empty:\n        p ← POP(agenda)                              // take next fact\n        if not LOOKUP(inferred, p):\n            inferred[p] ← True                        // mark as derived\n            for each rule in rules where p IN premises(rule):\n                count[rule] ← count[rule] - 1\n                if count[rule] = 0:                   // all premises satisfied\n                    conclusion ← CONSEQUENT(rule)\n                    if not LOOKUP(inferred, conclusion):\n                        PUSH(agenda, conclusion)\n    \n    return inferred\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run--forward-chaining",
      children: "Step-by-Step Dry Run → Forward Chaining"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Knowledge Base"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Facts: {A, B}"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rules:\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A ∧ B ⇒ C"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C ∧ D ⇒ E"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A ⇒ D"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal"
      }), ": Derive all facts"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Fact Processed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Inferred Set"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Rules Triggered"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Agenda"
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
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[A, B]"
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
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{A}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Rule 1 count: 2→1, Rule 3 count: 1→0 → D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[B, D]"
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
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{A, B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Rule 1 count: 1→0 → C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[D, C]"
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
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{A, B, D}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Rule 2 count: 2→1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[C]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{A, B, D, C}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Rule 2 count: 1→0 → E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[E]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{A, B, D, C, E}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result"
      }), ": Derived facts = {A, B, D, C, E}. All derivable facts have been found."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-3",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def forward_chaining(facts: set, rules: list) -> dict:\n    \"\"\"Forward chaining on Horn clause KB.\"\"\"\n    inferred = {f: True for f in facts}\n    agenda = list(facts)\n    \n    # Count premises for each rule\n    rule_counts = {i: len(r[\"premises\"]) for i, r in enumerate(rules)}\n    \n    while agenda:\n        p = agenda.pop(0)\n        for i, rule in enumerate(rules):\n            if p in rule[\"premises\"]:\n                rule_counts[i] -= 1\n                if rule_counts[i] == 0:\n                    conc = rule[\"conclusion\"]\n                    if conc not in inferred:\n                        inferred[conc] = True\n                        agenda.append(conc)\n    \n    return inferred\n\n# Example\nfacts = {\"A\", \"B\"}\nrules = [\n    {\"premises\": {\"A\", \"B\"}, \"conclusion\": \"C\"},\n    {\"premises\": {\"C\", \"D\"}, \"conclusion\": \"E\"},\n    {\"premises\": {\"A\"}, \"conclusion\": \"D\"},\n]\n\nresult = forward_chaining(facts, rules)\nprint(f\"Derived facts: {set(result.keys())}\")  # {A, B, C, D, E}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(n × m × p)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n=agenda size, m=rules, p=avg premises per rule"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(n + m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stores inferred facts + rule counts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rule firings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Each rule fires at most once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Count decreases monotonically"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Forward chaining is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "linear"
      }), " in the number of rules when the KB size is bounded. Each premise count decreases at most once per rule, making it efficient for large rule sets with many shared premises."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-3",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient → linear for Horn clauses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derives many irrelevant facts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data-driven → good for monitoring/alerting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires all data before starting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement and understand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited to Horn clause logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal for problems with many goals shared across rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can generate large working memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Each fact derived exactly once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No goal-direction → computes all possibilities"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No initial facts"
        }), ": Forward chaining produces no new facts (no triggers)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cyclic rules"
        }), ": A ⇒ B, B ⇒ A with fact {A} → derives B, then stops (A and B already inferred)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disconnected rules"
        }), ": Rules sharing no premises with facts never fire."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contradictory rules"
        }), ": A ⇒ B and A ⇒ ¬B with fact {A} → derives both B and ¬B, making KB inconsistent."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple conclusions from same rule"
        }), ": Not possible in Horn (each rule has exactly one consequent)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "backward-chaining",
      children: "Backward Chaining"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Working Backwards from a Destination"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You want to reach a specific destination (the goal). Rather than exploring all possible roads (like forward chaining), you ask: \"What intersection leads directly to my destination?\" Then: \"What intersection leads to that one?\" You work backwards from the goal to your current position, finding only the relevant route."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Backward chaining is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "goal-driven"
      }), ": it starts from the query and works backward to find supporting facts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-backward-chaining",
      children: "Algorithm: Backward Chaining"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: Backward-Chain(KB, goal)\n1.  if goal is a known fact in KB then return True\n2.  for each rule where goal is the consequent:\n3.      if Backward-Chain(KB, premise1) and\n4.         Backward-Chain(KB, premise2) and ...\n5.         then return True\n6.  return False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function BACKWARD_CHAINING(KB, goal, inferred) returns boolean\n    // inferred tracks facts already being proven (avoid infinite loops)\n    \n    if goal ∈ KB.facts then\n        return True\n    \n    if goal ∈ inferred then           // already working on this\n        return False                   // prevent infinite recursion\n    \n    inferred ← inferred ∪ {goal}       // mark as in-progress\n    \n    for each rule in KB.rules where rule.conclusion = goal:\n        all_premises_true ← True\n        for each premise in rule.premises:\n            if not BACKWARD_CHAINING(KB, premise, inferred):\n                all_premises_true ← False\n                break                     // one premise fails → this rule fails\n        if all_premises_true:\n            return True                   // found a working rule\n    \n    return False                         // no rule can prove the goal\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run--backward-chaining",
      children: "Step-by-Step Dry Run → Backward Chaining"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "KB"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Facts: {A, B}"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rules:\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A ∧ B ⇒ C"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C ∧ D ⇒ E"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A ⇒ D"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal"
      }), ": Prove E"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Goal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Subgoal Stack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Rule Tried"
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
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[E]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Rule 2: C ∧ D ⇒ E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Need C and D"
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
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[E, C]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Rule 1: A ∧ B ⇒ C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Need A and B"
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
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[E, C, A]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Direct fact"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "True"
            }), " (A is known)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[E, C, B]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Direct fact"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "True"
            }), " (B is known)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[E, C]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "All premises satisfied"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "C = True"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[E, D]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Rule 3: A ⇒ D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Need A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[E, D, A]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Direct fact"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "True"
            }), " (A is known)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[E, D]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "All premises satisfied"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D = True"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[E]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "All premises satisfied"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "E = True!"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result"
      }), ": E is proven. The proof tree (AND-OR tree) shows:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "E\n├── C (via Rule 1: A ∧ B ⇒ C)\n│   ├── A ✓ (fact)\n│   └── B ✓ (fact)\n└── D (via Rule 3: A ⇒ D)\n    └── A ✓ (fact)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-4",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def backward_chaining(kb: set, rules: list, goal: str,\n                      inferred: set = None, depth: int = 0) -> bool:\n    \"\"\"Backward chaining on Horn clause KB.\"\"\"\n    if inferred is None:\n        inferred = set()\n    \n    # Known fact?\n    if goal in kb:\n        return True\n    \n    # Already working on this goal? (prevents infinite recursion)\n    if goal in inferred:\n        return False\n    \n    inferred.add(goal)\n    \n    for rule in rules:\n        if rule[\"conclusion\"] == goal:\n            if all(backward_chaining(kb, rules, p, inferred, depth + 1)\n                   for p in rule[\"premises\"]):\n                return True\n    \n    return False\n\n# Example\nkb = {\"A\", \"B\"}\nrules = [\n    {\"premises\": {\"A\", \"B\"}, \"conclusion\": \"C\"},\n    {\"premises\": {\"C\", \"D\"}, \"conclusion\": \"E\"},\n    {\"premises\": {\"A\"}, \"conclusion\": \"D\"},\n]\n\nprint(f\"KB entails E? {backward_chaining(kb, rules, 'E', set())}\")  # True\nprint(f\"KB entails F? {backward_chaining(kb, rules, 'F', set())}\")  # False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (worst)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b × n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b=branching factor (rules per goal), n=depth of proof tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (best)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d=proof depth → directly finds supporting facts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursion depth equals proof tree depth"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Backward chaining only explores rules relevant to the goal, making it much more efficient than forward chaining for single-query scenarios. However, worst-case behavior when the goal cannot be proven requires exploring all possible rules."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-4",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Goal-directed → only explores relevant rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May miss derivations that exist (if KB not Horn)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient for single queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not work with non-Horn clauses (disjunctions in conclusions)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Natural for question-answering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can get stuck in infinite recursion without cycle detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Produces explanation (proof tree)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeated subgoals may be recomputed without memoization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Basis for Prolog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depth-first search may miss shallow proofs if it goes deep first"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unknown goal with no relevant rules"
        }), ": Returns false immediately (after checking facts)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cyclic rules"
        }), ": A ⇒ B, B ⇒ A, query A. Backward chaining with cycle detection prevents infinite loop."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple rules for same goal"
        }), ": Tries each in order; first success returns true."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fact is also a rule conclusion"
        }), ": Direct fact check succeeds before trying rules."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unreachable goal"
        }), ": Goal with rules that rely on missing premises → returns false."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "propositional-logic-vs-first-order-logic",
      children: "Propositional Logic vs First-Order Logic"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Propositional Logic (PL)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "First-Order Logic (FOL)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Atomic unit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Proposition symbols (P, Q)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Predicates with objects (Loves(John, Mary))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Objects"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "None → only boolean variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Constants, variables, functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Quantifiers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀ (for all), ∃ (there exists)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Expressiveness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Fixed facts only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Relations between objects, generalizations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\"It is raining\" = R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\"All humans are mortal\" = ∀x Human(x) ⇒ Mortal(x)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inference complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Decidable (SAT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Semi-decidable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resolution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Propositional resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "FOL resolution with unification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Typical use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Circuit verification, SAT solving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Knowledge graphs, theorem proving"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Truth table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Works (2ⁿ rows)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Impossible (infinite models)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Insight"
        }), ": PL is decidable → there is always an answer (SAT or UNSAT). FOL is only semi-decidable → if a sentence is true, a proof will eventually be found, but if it's false, the prover may run forever."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inference-methods--comparison-table",
      children: "Inference Methods → Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
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
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "KB Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Truth Table"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(2ⁿ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Any PL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Debugging with ≤10 symbols"
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
            children: "Refutation-complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "EXP (worst)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "CNF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Automated theorem proving"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DPLL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ (for SAT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "NP-complete avg fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "CNF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Large SAT instances"
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
            children: "✅ (Horn only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(n×m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Horn clauses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Data-driven monitoring"
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
            children: "✅ (Horn only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b×n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Horn clauses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Goal-directed queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model Checking"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(2ⁿ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Any PL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Verification of small systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "satisfiability-and-validity",
      children: "Satisfiability and Validity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Puzzle Pieces"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A valid sentence is like a puzzle piece that fits everywhere → no matter how you rotate it, it always fits. A satisfiable sentence fits somewhere, in some configuration. An unsatisfiable sentence fits nowhere → it's inherently contradictory."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "definitions",
      children: "Definitions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Valid (Tautology)"
          }), ": True in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "all"
          }), " models."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Example: P ∨ ¬P (law of excluded middle)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Always true, regardless of P's value."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Satisfiable"
          }), ": True in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "at least one"
          }), " model."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Example: P ∧ Q (true when P=Q=True)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Some interpretations make it true."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Unsatisfiable (Contradiction)"
          }), ": True in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "no"
          }), " models."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Example: P ∧ ¬P (cannot be true)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "False under every interpretation."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-sat-checking",
      children: "Algorithm: SAT Checking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: DPLL-SAT(clauses)\n1.  clauses ← CNF formula\n2.  return DPLL(clauses, {})\n\nAlgorithm: DPLL(clauses, model)\n1.  clauses ← Unit-Propagate(clauses, model)\n2.  if clauses contains empty clause then return false\n3.  if all clauses are satisfied then return true\n4.  L ← Pure-Literal-Symbol(clauses)\n5.  if L is not null then return DPLL(clauses, model ∪ {L=True})\n6.  L ← Choose-Unassigned-Symbol(clauses)\n7.  return DPLL(clauses, model ∪ {L=True}) OR\n           DPLL(clauses, model ∪ {L=False})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-dpll",
      children: "Python Implementation (DPLL)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def dpll(clauses: list, model: dict) -> bool:\n    \"\"\"DPLL SAT solver → returns True if formula is satisfiable.\"\"\"\n    # Unit propagation\n    changed = True\n    while changed:\n        changed = False\n        for clause in clauses:\n            unassigned = [l for l in clause if l not in model and f\"¬{l}\" not in model]\n            if len(unassigned) == 1:\n                lit = unassigned[0]\n                model[lit] = True\n                changed = True\n                break\n\n    # Check for empty clause (contradiction)\n    for clause in clauses:\n        all_false = True\n        for lit in clause:\n            if model.get(lit, False) or (f\"¬{lit}\") not in model:\n                all_false = False\n                break\n        if all_false:\n            return False\n\n    # Check if all clauses satisfied\n    all_satisfied = True\n    for clause in clauses:\n        satisfied = False\n        for lit in clause:\n            val = model.get(lit, None)\n            val2 = model.get(f\"¬{lit}\", None)\n            if val == True or val2 == False:\n                satisfied = True\n                break\n        if not satisfied:\n            all_satisfied = False\n            break\n    if all_satisfied:\n        return True\n\n    # Choose unassigned symbol\n    for clause in clauses:\n        for lit in clause:\n            if lit not in model and f\"¬{lit}\" not in model:\n                return (dpll(clauses, {**model, lit: True}) or\n                        dpll(clauses, {**model, lit: False}))\n\n    return False\n\n# Example\nclauses = [[\"A\", \"B\"], [\"¬A\", \"C\"], [\"¬C\"]]\nprint(f\"SAT? {dpll(clauses, {})}\")  # False (unsatisfiable)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-5",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tautology P ∨ ¬P"
        }), ": Always satisfiable → every model satisfies it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unsatisfiable P ∧ ¬P"
        }), ": No model exists → DPLL immediately finds empty clause."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mixed"
        }), ": (P ∨ Q) ∧ (¬P ∨ ¬Q) is satisfiable (model: {P=T, Q=F} or {P=F, Q=T})."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty clause set"
        }), ": Vacuously satisfiable (no constraints)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single clause {P}"
        }), ": Trivially satisfiable with P=True."]
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
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Truth Table"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(2ⁿ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small n debugging"
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
            children: "Refutation-complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "EXP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated proving"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DPLL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ (for SAT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "NP-complete avg fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large SAT instances"
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
            children: "Linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data-driven reasoning"
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
            children: "Linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Goal-directed reasoning"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--logical-connectives",
      children: "Quick Reference → Logical Connectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Read As"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "True When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Negation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "¬P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "not P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "P is false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conjunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "P ∧ Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P and Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Both P and Q are true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disjunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "P ∨ Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P or Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "At least one of P, Q is true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "P ⇒ Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "if P then Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "P is false or Q is true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Biconditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "P ⇔ Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P iff Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "P and Q have the same truth value"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Computer Vision"
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
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Software Verification"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Propositional Logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
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
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
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
            children: "SAT Solving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
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
            children: "Knowledge Bases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
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
            children: "✅"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backward Chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-resolution-proof-example-common-interview-question",
      children: "1. Resolution Proof Example (Common Interview Question)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem"
      }), ": Given KB = {A ⇒ B, B ⇒ C, C ⇒ D, A}, prove D using resolution."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 1 → Convert to CNF: {¬A ∨ B, ¬B ∨ C, ¬C ∨ D, A}\nStep 2 → Negate goal: ¬D\nStep 3 → Resolution chain:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Resolve"
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
            children: "¬A ∨ B, A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "B"
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
            children: "¬B ∨ C, B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "C"
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
            children: "¬C ∨ D, C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D, ¬D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "☐ (empty clause)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": KB entails D (proof by refutation success)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-horn-clauses",
      children: "2. Horn Clauses"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition"
      }), ": A Horn clause has at most one positive literal."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Definite clause"
        }), ": Exactly one positive literal: P ∧ Q ⇒ R (head = R, body = P ∧ Q)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Goal clause"
        }), ": Zero positive literals: P ∧ Q ⇒ False (query asking \"does P ∧ Q hold?\")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fact"
        }), ": Positive literal with empty body: A"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Horn clauses matter"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forward and backward chaining are both complete for Horn KBs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every definite clause KB has a unique minimal model."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prolog is based entirely on Horn clauses."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Polynomial-time inference is possible."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview question"
      }), ": Can all propositional formulas be expressed as Horn clauses?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": No. Disjunctions like P ∨ Q cannot be expressed (requires two positive literals)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-dpll-algorithm",
      children: "3. DPLL Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DPLL"
      }), " (Davis-Putnam-Logemann-Loveland) is a complete SAT solving algorithm that improves on truth tables."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key techniques"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Unit Propagation"
          }), ": If a clause has only one unassigned literal, that literal must be true for the clause to be satisfied."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Example: Clause {P} → P must be true. Clause {P ∨ Q} when P is false → Q must be true."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pure Literal Elimination"
          }), ": If a literal appears with only one polarity across all clauses, assign it to make those clauses true."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Example: P appears only as ¬P everywhere → set P = False to satisfy all those ¬P."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Early Termination"
          }), ": If all clauses are satisfied, stop (SAT). If any clause has all false literals, stop (UNSAT)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function DPLL(clauses, model):\n    clauses ← unit_propagate(clauses, model)\n    if empty clause in clauses: return false\n    if all clauses satisfied: return true\n    \n    L ← choose_unassigned(clauses)\n    return DPLL(clauses, model ∪ {L=true})\n        or DPLL(clauses, model ∪ {L=false})\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity"
      }), ": NP-complete (worst-case exponential) but fast on average due to unit propagation pruning the search space dramatically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-theorem-provers-vampire-e-z3",
      children: "1. Theorem Provers (Vampire, E, Z3)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Automated theorem provers use resolution and superposition to prove mathematical theorems and verify software correctness."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vampire"
        }), ": Uses resolution with extensive clause indexing for efficiency. Widely used in program verification."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E Prover"
        }), ": Equational theorem prover specializing in first-order logic with equality."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Z3 (Microsoft)"
        }), ": SMT (Satisfiability Modulo Theories) solver combining SAT with arithmetic, arrays, and bit-vectors. Used in:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Software verification (SLAM, Dafny)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Test case generation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Program synthesis"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Security analysis (binary decompilation)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example → Z3 usage"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# pip install z3-solver\nfrom z3 import *\n\nP, Q = Bools(\"P Q\")\ns = Solver()\ns.add(Or(P, Q))   # P ∨ Q\ns.add(Not(P))     # ¬P\nprint(s.check())  # sat\nprint(s.model())  # [Q = True]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-logic-programming-prolog",
      children: "2. Logic Programming (Prolog)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prolog (Programming in Logic) uses backward chaining on Horn clauses as its execution model."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-prolog",
        children: "% Prolog program\nmortal(X) :- human(X).\nhuman(socrates).\n\n% Query: ?- mortal(socrates).  →  Yes\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prolog programs are sets of Horn clauses."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execution is backward chaining with depth-first search."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used in: expert systems, natural language parsing, constraint solving."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-circuit-verification",
      children: "3. Circuit Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Propositional logic is the mathematical foundation of digital circuit design and verification."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model checking"
        }), ": Verify that a circuit satisfies a specification using SAT or BDDs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Equivalence checking"
        }), ": Prove two circuits compute the same function."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test generation"
        }), ": Generate test vectors that expose bugs (SAT-based ATPG)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example"
      }), ": Verify (A ∧ B) ∨ C ≡ (A ∨ C) ∧ (B ∨ C) using a SAT solver:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Formula: ((A ∧ B) ∨ C) ⇔ ((A ∨ C) ∧ (B ∨ C))\nIf UNSAT → equivalence holds (no counterexample)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-planning-systems",
      children: "4. Planning Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "STRIPS and GraphPlan use propositional logic to represent actions and states."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Actions are represented with preconditions and effects."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Planning reduces to SAT: \"Is there a sequence of actions that reaches the goal?\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SAT-based planners (SATPlan) convert planning problems to SAT problems."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-expert-systems",
      children: "5. Expert Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rule-based expert systems (e.g., MYCIN, DENDRAL) use forward chaining to apply expert knowledge encoded as logical rules. Given patient symptoms (facts), the system infers diagnoses (conclusions)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-truth-table-evaluation",
      children: "Example 1: Truth Table Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Determine if (P ⇒ Q) ⇔ (¬P ∨ Q) is valid."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create columns for P and Q (all 4 combinations)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute P ⇒ Q: True except when P=True, Q=False."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute ¬P: opposite of P."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute ¬P ∨ Q: True when ¬P=True or Q=True."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare columns 2 and 4."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Truth Table"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "P"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Q"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "P ⇒ Q"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "¬P"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "¬P ∨ Q"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Match?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Conclusion"
      }), ": (P ⇒ Q) ⇔ (¬P ∨ Q) is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "valid"
      }), " → the two formulas are logically equivalent. This shows that implication can be rewritten as a disjunction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-the-wumpus-world",
      children: "Example 2: The Wumpus World"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A classic AI environment where a logical agent explores a grid containing pits and a Wumpus monster."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule"
      }), ": \"A square is breezy if and only if there is a pit in an adjacent square.\"\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Formalization"
      }), ": B₁₁ ⇔ (P₁₂ ∨ P₂₁)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B₁₁ = breeze at position (1,1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P₁₂ = pit at position (1,2)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P₂₁ = pit at position (2,1)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inference"
      }), ": The agent perceives no breeze at (1,1) (¬B₁₁). Using the biconditional:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(¬B₁₁ ⇒ ¬(P₁₂ ∨ P₂₁)) by Modus Tollens"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "¬P₁₂ ∧ ¬P₂₁ by De Morgan's Law"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The agent concludes that both adjacent squares (1,2) and (2,1) are safe (no pits)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What it demonstrates"
      }), ": How an agent uses logical inference to navigate a dangerous environment by eliminating possibilities."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-resolution-proof-demonstration",
      children: "Example 3: Resolution Proof Demonstration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem"
      }), ": Show that \"If it is raining, the ground is wet. If the ground is wet, the grass is slippery. It is raining. Therefore, the grass is slippery.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Formalization"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P = \"It is raining\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Q = \"The ground is wet\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R = \"The grass is slippery\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "KB = {P ⇒ Q, Q ⇒ R, P}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Goal: Prove R"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Resolution proof"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert to CNF: {¬P ∨ Q, ¬Q ∨ R, P, ¬R (negated goal)}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolve ¬P ∨ Q with P → Q"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolve ¬Q ∨ R with Q → R"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolve R with ¬R → ☐ (empty clause)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "KB ⊨ R ✓"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What does it mean if KB ⊨ α?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) KB proves α syntactically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) α is true in every model where KB is true"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) α is consistent with KB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) KB and α have no common models"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Entailment KB ⊨ α means α is true in all models of KB → a semantic relationship."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " Resolution is the only inference rule needed for refutation-complete proof in PL. What is refutation-completeness?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It can prove any valid sentence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) It can derive the empty clause from any unsatisfiable KB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It works only for Horn clauses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It never produces false positives"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Refutation-completeness means the unsatisfiability of KB ∧ ¬α can be proven by deriving the empty clause."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " A sentence is valid if and only if:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It is true in at least one model"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) It is true in no models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It is true in all models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Its negation is satisfiable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>C) A valid sentence (tautology) is true in all possible interpretations."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " Forward chaining is best suited for:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Goal-directed query answering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Data-driven inference from known facts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Proof by contradiction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Converting formulas to CNF"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Forward chaining starts from known facts and derives new facts, making it ideal for data-driven scenarios like monitoring systems."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " Which of the following is NOT a valid inference rule?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Modus Ponens"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Resolution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Modus Eliminans"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) AND Elimination"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>C) \"Modus Eliminans\" is not a standard inference rule. The correct rules are Modus Ponens, Resolution, and AND Elimination."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logical agents use symbolic representations to reason about the world."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entailment is the relationship where one fact follows from others."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Propositional logic uses boolean variables and connectives to build formulas."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Truth tables provide a sound and complete (but exponential) method for checking entailment."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolution is a powerful inference rule that forms the basis of many automated theorem provers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forward chaining is data-driven → it derives all facts that follow from the KB."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backward chaining is goal-driven → it works backward from a query to find supporting facts."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DPLL/CDCL are practical SAT algorithms that far outperform brute-force truth tables."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SAT solvers are highly optimized tools for finding models that satisfy propositional formulas."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logic is the foundation of theorem provers, Prolog, circuit verification, and expert systems."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define \"soundness\" and \"completeness\" in the context of inference."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between $P \\Rightarrow Q$ and $P \\models Q$?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct the truth table for the XOR connective."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert $(A \\wedge B) \\Rightarrow C$ into Conjunctive Normal Form (CNF)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why resolution is called \"refutation-complete\" rather than simply \"complete.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove using a truth table: $\\neg(P \\wedge Q) \\equiv \\neg P \\vee \\neg Q$ (De Morgan's Law)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Resolution to show that ${P \\vee Q, \\neg P}$ entails $Q$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Formalize the following: \"If it rains, the ground is wet. It is raining. Therefore, the ground is wet.\" Then prove it using Modus Ponens."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given KB = {A ⇒ B, B ⇒ C, D ⇒ E, A}, use forward chaining to derive all possible facts."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given the same KB, use backward chaining to prove C. Show the proof tree."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DPLL algorithm"
        }), " is used for solving SAT problems. Explain how it improves upon simple truth table enumeration using techniques like unit propagation and pure literal elimination."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show that the sentence $(P \\vee Q) \\wedge (\\neg P \\vee \\neg Q)$ is satisfiable but not valid by finding two models → one where it's true and one where it's false."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert the following into Horn clauses and explain why or why not it's possible: \"Either the battery is dead or the fuel tank is empty.\""
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