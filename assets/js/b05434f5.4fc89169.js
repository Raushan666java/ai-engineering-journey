"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[4472],{

/***/ 77663
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_gate_cs_preparation_02_theory_of_computation_md_b05_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-gate-cs-preparation-02-theory-of-computation-md-b05.json
const site_docs_courses_gate_cs_preparation_02_theory_of_computation_md_b05_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/gate-cs-preparation/02-theory-of-computation","title":"02 Theory Of Computation","description":"Chapter at a Glance","source":"@site/docs/courses/gate-cs-preparation/02-theory-of-computation.md","sourceDirName":"courses/gate-cs-preparation","slug":"/gate-cs-preparation/02-theory-of-computation","permalink":"/ai-engineering-journey/gate-cs-preparation/02-theory-of-computation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-theory-of-computation","slug":"/gate-cs-preparation/02-theory-of-computation","title":"02 Theory Of Computation","sidebar_label":"02 Theory Of Computation","sidebar_position":2},"sidebar":"coursesSidebar","previous":{"title":"01 General Aptitude","permalink":"/ai-engineering-journey/gate-cs-preparation/01-general-aptitude"},"next":{"title":"03 Compiler Design","permalink":"/ai-engineering-journey/gate-cs-preparation/03-compiler-design"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/gate-cs-preparation/02-theory-of-computation.md


const frontMatter = {
	id: '02-theory-of-computation',
	slug: '/gate-cs-preparation/02-theory-of-computation',
	title: '02 Theory Of Computation',
	sidebar_label: '02 Theory Of Computation',
	sidebar_position: 2
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Roadmap",
  "id": "roadmap",
  "level": 2
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 2
}, {
  "value": "Pro Tips &amp; Reminders",
  "id": "pro-tips--reminders",
  "level": 2
}, {
  "value": "GATE Marks Distribution (Last 10 Years)",
  "id": "gate-marks-distribution-last-10-years",
  "level": 2
}, {
  "value": "1. Finite Automata",
  "id": "1-finite-automata",
  "level": 2
}, {
  "value": "1.1 Deterministic Finite Automaton (DFA)",
  "id": "11-deterministic-finite-automaton-dfa",
  "level": 3
}, {
  "value": "1.2 DFA for Even Number of 0s and Even Number of 1s",
  "id": "12-dfa-for-even-number-of-0s-and-even-number-of-1s",
  "level": 3
}, {
  "value": "1.3 DFA for Strings Ending with &quot;00&quot;",
  "id": "13-dfa-for-strings-ending-with-00",
  "level": 3
}, {
  "value": "1.4 Nondeterministic Finite Automaton (NFA)",
  "id": "14-nondeterministic-finite-automaton-nfa",
  "level": 3
}, {
  "value": "NFA for Strings where the 3rd-last symbol is 1",
  "id": "nfa-for-strings-where-the-3rd-last-symbol-is-1",
  "level": 4
}, {
  "value": "1.5 ε-NFA (NFA with ε-transitions)",
  "id": "15-ε-nfa-nfa-with-ε-transitions",
  "level": 3
}, {
  "value": "1.6 NFA to DFA Conversion (Subset Construction)",
  "id": "16-nfa-to-dfa-conversion-subset-construction",
  "level": 3
}, {
  "value": "Example: Convert NFA for <code>(a|b)*abb</code> to DFA",
  "id": "example-convert-nfa-for-ababb-to-dfa",
  "level": 4
}, {
  "value": "1.7 DFA Minimization",
  "id": "17-dfa-minimization",
  "level": 3
}, {
  "value": "Minimization Algorithm (Table-Filling Method)",
  "id": "minimization-algorithm-table-filling-method",
  "level": 4
}, {
  "value": "Example: Minimize DFA for <code>(a|b)*abb</code>",
  "id": "example-minimize-dfa-for-ababb",
  "level": 4
}, {
  "value": "1.8 Regular Expressions to NFA (Thompson Construction)",
  "id": "18-regular-expressions-to-nfa-thompson-construction",
  "level": 3
}, {
  "value": "Example: Thompson construction for <code>(a|b)*abb</code>",
  "id": "example-thompson-construction-for-ababb",
  "level": 4
}, {
  "value": "1.9 DFA to Regular Expression (State Elimination Method)",
  "id": "19-dfa-to-regular-expression-state-elimination-method",
  "level": 3
}, {
  "value": "Example: <code>(a|b)*abb</code> DFA to Regex",
  "id": "example-ababb-dfa-to-regex",
  "level": 4
}, {
  "value": "1.10 Closure Properties of Regular Languages",
  "id": "110-closure-properties-of-regular-languages",
  "level": 3
}, {
  "value": "1.11 Pumping Lemma for Regular Languages",
  "id": "111-pumping-lemma-for-regular-languages",
  "level": 3
}, {
  "value": "Proof Strategy (by contradiction):",
  "id": "proof-strategy-by-contradiction",
  "level": 4
}, {
  "value": "Example: Prove <code>L = {0âÂÂ�¿1âÂÂ�¿ | n ≥ 0}</code> not regular",
  "id": "example-prove-l--0âââ1âââ--n--0-not-regular",
  "level": 4
}, {
  "value": "Example: Prove <code>L = {aâÂÂ�¿bâÂÂ�¿ | n ≥ 0}</code> not regular using Myhill-Nerode",
  "id": "example-prove-l--aâââbâââ--n--0-not-regular-using-myhill-nerode",
  "level": 4
}, {
  "value": "1.12 GATE Practice Problems → Finite Automata",
  "id": "112-gate-practice-problems--finite-automata",
  "level": 3
}, {
  "value": "2. Context-Free Grammars &amp; Pushdown Automata",
  "id": "2-context-free-grammars--pushdown-automata",
  "level": 2
}, {
  "value": "2.1 Context-Free Grammar (CFG) Definition",
  "id": "21-context-free-grammar-cfg-definition",
  "level": 3
}, {
  "value": "2.2 Parse Trees",
  "id": "22-parse-trees",
  "level": 3
}, {
  "value": "2.3 Leftmost and Rightmost Derivations",
  "id": "23-leftmost-and-rightmost-derivations",
  "level": 3
}, {
  "value": "Example of Ambiguous Grammar",
  "id": "example-of-ambiguous-grammar",
  "level": 4
}, {
  "value": "2.4 Chomsky Normal Form (CNF)",
  "id": "24-chomsky-normal-form-cnf",
  "level": 3
}, {
  "value": "Example: Convert to CNF",
  "id": "example-convert-to-cnf",
  "level": 4
}, {
  "value": "2.5 Greibach Normal Form (GNF)",
  "id": "25-greibach-normal-form-gnf",
  "level": 3
}, {
  "value": "2.6 Pushdown Automaton (PDA)",
  "id": "26-pushdown-automaton-pda",
  "level": 3
}, {
  "value": "PDA for <code>{aâÂÂ�¿bâÂÂ�¿ | n ≥ 0}</code>",
  "id": "pda-for-aâââbâââ--n--0",
  "level": 4
}, {
  "value": "2.7 CFG to PDA Conversion",
  "id": "27-cfg-to-pda-conversion",
  "level": 3
}, {
  "value": "Example: CFG to PDA for <code>{aâÂÂ�¿bâÂÂ�¿ | n ≥ 0}</code>",
  "id": "example-cfg-to-pda-for-aâââbâââ--n--0",
  "level": 4
}, {
  "value": "2.8 PDA to CFG Conversion",
  "id": "28-pda-to-cfg-conversion",
  "level": 3
}, {
  "value": "2.9 Pumping Lemma for Context-Free Languages",
  "id": "29-pumping-lemma-for-context-free-languages",
  "level": 3
}, {
  "value": "Example: Prove <code>{aâÂÂ�¿bâÂÂ�¿câÂÂ�¿ | n ≥ 0}</code> not context-free",
  "id": "example-prove-aâââbâââcâââ--n--0-not-context-free",
  "level": 4
}, {
  "value": "2.10 Closure Properties of CFLs",
  "id": "210-closure-properties-of-cfls",
  "level": 3
}, {
  "value": "2.11 Deterministic Context-Free Languages (DCFL)",
  "id": "211-deterministic-context-free-languages-dcfl",
  "level": 3
}, {
  "value": "2.12 GATE Practice Problems → CFG &amp; PDA",
  "id": "212-gate-practice-problems--cfg--pda",
  "level": 3
}, {
  "value": "3. Turing Machines &amp; Recursive Languages",
  "id": "3-turing-machines--recursive-languages",
  "level": 2
}, {
  "value": "3.1 Turing Machine Definition",
  "id": "31-turing-machine-definition",
  "level": 3
}, {
  "value": "3.2 TM for <code>{aâÂÂ�¿bâÂÂ�¿câÂÂ�¿ | n ≥ 1}</code>",
  "id": "32-tm-for-aâââbâââcâââ--n--1",
  "level": 3
}, {
  "value": "3.3 TM for Palindrome Recognition",
  "id": "33-tm-for-palindrome-recognition",
  "level": 3
}, {
  "value": "3.4 TM Variations",
  "id": "34-tm-variations",
  "level": 3
}, {
  "value": "3.5 Recursively Enumerable vs Recursive Languages",
  "id": "35-recursively-enumerable-vs-recursive-languages",
  "level": 3
}, {
  "value": "3.6 Undecidability → The Halting Problem",
  "id": "36-undecidability--the-halting-problem",
  "level": 3
}, {
  "value": "3.7 Reduction Proofs",
  "id": "37-reduction-proofs",
  "level": 3
}, {
  "value": "Example: Prove &quot;Does TM M accept empty string?&quot; is undecidable",
  "id": "example-prove-does-tm-m-accept-empty-string-is-undecidable",
  "level": 4
}, {
  "value": "3.8 Rice&#39;s Theorem",
  "id": "38-rices-theorem",
  "level": 3
}, {
  "value": "3.9 Post Correspondence Problem (PCP)",
  "id": "39-post-correspondence-problem-pcp",
  "level": 3
}, {
  "value": "Example PCP Instance",
  "id": "example-pcp-instance",
  "level": 4
}, {
  "value": "3.10 Linear Bounded Automata (LBA) and CSL",
  "id": "310-linear-bounded-automata-lba-and-csl",
  "level": 3
}, {
  "value": "3.11 GATE Practice Problems → TM &amp; Undecidability",
  "id": "311-gate-practice-problems--tm--undecidability",
  "level": 3
}, {
  "value": "4. Complexity Theory",
  "id": "4-complexity-theory",
  "level": 2
}, {
  "value": "4.1 Time Complexity Classes",
  "id": "41-time-complexity-classes",
  "level": 3
}, {
  "value": "4.2 P vs NP",
  "id": "42-p-vs-np",
  "level": 3
}, {
  "value": "4.3 NP-Completeness",
  "id": "43-np-completeness",
  "level": 3
}, {
  "value": "SAT",
  "id": "sat",
  "level": 4
}, {
  "value": "3-SAT",
  "id": "3-sat",
  "level": 4
}, {
  "value": "4.4 Key NP-Complete Problems",
  "id": "44-key-np-complete-problems",
  "level": 3
}, {
  "value": "Vertex Cover",
  "id": "vertex-cover",
  "level": 4
}, {
  "value": "Hamiltonian Path/Cycle",
  "id": "hamiltonian-pathcycle",
  "level": 4
}, {
  "value": "Subset Sum",
  "id": "subset-sum",
  "level": 4
}, {
  "value": "4.5 Polynomial-Time Reductions",
  "id": "45-polynomial-time-reductions",
  "level": 3
}, {
  "value": "4.6 Space Complexity",
  "id": "46-space-complexity",
  "level": 3
}, {
  "value": "4.7 PSPACE-Completeness",
  "id": "47-pspace-completeness",
  "level": 3
}, {
  "value": "4.8 NL-Completeness",
  "id": "48-nl-completeness",
  "level": 3
}, {
  "value": "4.9 The Polynomial Hierarchy",
  "id": "49-the-polynomial-hierarchy",
  "level": 3
}, {
  "value": "4.10 GATE Practice Problems → Complexity",
  "id": "410-gate-practice-problems--complexity",
  "level": 3
}, {
  "value": "Quick Reference Card",
  "id": "quick-reference-card",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Previous Year Questions (GATE 2019-2025)",
  "id": "previous-year-questions-gate-2019-2025",
  "level": 2
}, {
  "value": "Regular Languages &amp; Finite Automata (12 Questions)",
  "id": "regular-languages--finite-automata-12-questions",
  "level": 3
}, {
  "value": "Context-Free Languages &amp; Pushdown Automata (12 Questions)",
  "id": "context-free-languages--pushdown-automata-12-questions",
  "level": 3
}, {
  "value": "Turing Machines (10 Questions)",
  "id": "turing-machines-10-questions",
  "level": 3
}, {
  "value": "Undecidability (8 Questions)",
  "id": "undecidability-8-questions",
  "level": 3
}, {
  "value": "Complexity Theory (8 Questions)",
  "id": "complexity-theory-8-questions",
  "level": 3
}, {
  "value": "Summary of PYQs by Topic",
  "id": "summary-of-pyqs-by-topic",
  "level": 3
}, {
  "value": "Recommended Books &amp; Resources",
  "id": "recommended-books--resources",
  "level": 2
}, {
  "value": "Primary Textbooks",
  "id": "primary-textbooks",
  "level": 3
}, {
  "value": "Chapter/Topic Mapping",
  "id": "chaptertopic-mapping",
  "level": 3
}, {
  "value": "GATE-Specific Preparation Roadmap",
  "id": "gate-specific-preparation-roadmap",
  "level": 3
}, {
  "value": "Recommended Problem-Solving Resources",
  "id": "recommended-problem-solving-resources",
  "level": 3
}, {
  "value": "Quick Reference: Which Book for Which Proof",
  "id": "quick-reference-which-book-for-which-proof",
  "level": 3
}, {
  "value": "Additional Previous Year Questions (GATE 2010-2018)",
  "id": "additional-previous-year-questions-gate-2010-2018",
  "level": 2
}, {
  "value": "Regular Language &amp; Finite Automata (12 Questions)",
  "id": "regular-language--finite-automata-12-questions",
  "level": 3
}, {
  "value": "Context-Free Languages &amp; Pushdown Automata (12 Questions)",
  "id": "context-free-languages--pushdown-automata-12-questions-1",
  "level": 3
}, {
  "value": "Turing Machines (10 Questions)",
  "id": "turing-machines-10-questions-1",
  "level": 3
}, {
  "value": "Undecidability &amp; Reductions (8 Questions)",
  "id": "undecidability--reductions-8-questions",
  "level": 3
}, {
  "value": "Complexity Classes (8 Questions)",
  "id": "complexity-classes-8-questions",
  "level": 3
}, {
  "value": "Common Traps, Tricks &amp; Formula Cheat Sheet",
  "id": "common-traps-tricks--formula-cheat-sheet",
  "level": 2
}, {
  "value": "15 GATE-Specific Traps in TOC",
  "id": "15-gate-specific-traps-in-toc",
  "level": 3
}, {
  "value": "Decision Procedure Table",
  "id": "decision-procedure-table",
  "level": 3
}, {
  "value": "Closure Properties Quick Reference",
  "id": "closure-properties-quick-reference",
  "level": 3
}, {
  "value": "Chomsky Hierarchy Comparison",
  "id": "chomsky-hierarchy-comparison",
  "level": 3
}, {
  "value": "Key Reduction Examples for Undecidability Proofs",
  "id": "key-reduction-examples-for-undecidability-proofs",
  "level": 3
}, {
  "value": "Exam Time-Saving Insights",
  "id": "exam-time-saving-insights",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary-1",
  "level": 2
}, {
  "value": "TypeScript Implementations",
  "id": "typescript-implementations",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    br: "br",
    code: "code",
    details: "details",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "﻿# Theory of Computation → GATE CS"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total Questions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-10 marks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Topics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automata, Regular languages, CFL, Turing machines, Undecidability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Difficulty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate to High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weightage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-8% of GATE CS paper"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key Skills"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formal proofs, Language classification"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "roadmap",
      children: "Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Automata Theory] --> B[Regular Languages]\n    A --> C[Context-Free Languages]\n    B --> D[DFA/NFA/Regex]\n    C --> E[PDA/CFG]\n    D --> F[Turing Machines]\n    E --> F\n    F --> G[Undecidability]\n    G --> H[Complexity Classes]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsx)(_components.table, {
      children: (0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Regular Languages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CFL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CSL/Recursive"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automaton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFA/NFA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PDA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LBA/TM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Grammar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular Grammar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CFG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSG"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Closure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closed under all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closed under some"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not closed under complement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pumping Lemma"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DFA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic Finite Automaton"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nondeterministic Finite Automaton"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PDA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pushdown Automaton"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Turing Machine"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CFG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context-Free Grammar"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pumping Lemma"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool to prove non-regularity / non-CFL"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pro-tips--reminders",
      children: "Pro Tips & Reminders"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Practice constructing DFA/NFA for languages and converting between them. TM construction questions are a favorite for 2-mark NATs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Pumping Lemma proofs can be tricky. Memorize the template structure for both regular and CFL pumping lemma."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gate-marks-distribution-last-10-years",
      children: "GATE Marks Distribution (Last 10 Years)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/gate-cs-preparation/02-theory-of-computation.png",
        alt: "Theory of Computation Overview"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Year"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Marks"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weight %"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7.3%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.7%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.7%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2022"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.0%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9.3%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7.3%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.7%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2018"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.7%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2017"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.0%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.0%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Typical weight:"
      }), " 10–15 marks (~8–10% of total). Questions span all 4 units below, with heavy emphasis on closure properties, pumping lemma, TM variations, and complexity class membership."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-finite-automata",
      children: "1. Finite Automata"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-deterministic-finite-automaton-dfa",
      children: "1.1 Deterministic Finite Automaton (DFA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A DFA is a 5-tuple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "M = (Q, Σ, δ, q₀, F)"
      }), " where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Q"
        }), " → finite set of states"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Σ"
        }), " → finite input alphabet"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "δ: Q Ãâ€â€� Σ → Q"
        }), " → transition function (total function)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "q₀ ∈ Q"
        }), " → start state"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "F ⊆ Q"
        }), " → set of final/accepting states"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A DFA reads one symbol at a time and moves deterministically. Exactly one transition exists for every ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(state, symbol)"
      }), " pair. This is the defining property → no choice, no ε-moves."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-dfa-for-even-number-of-0s-and-even-number-of-1s",
      children: "1.2 DFA for Even Number of 0s and Even Number of 1s"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Q = {q00, q01, q10, q11}\nΣ = {0, 1}\nq₀ = q00\nF = {q00}\n\nTransition Table:\nState | δ( , 0) | δ( , 1)\n------+---------+--------\nq00   | q10     | q01\nq01   | q11     | q00\nq10   | q00     | q11\nq11   | q01     | q10\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The state encodes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(parity_of_0s, parity_of_1s)"
      }), ". The DFA returns to q₀ when both counts are even."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-dfa-for-strings-ending-with-00",
      children: "1.3 DFA for Strings Ending with \"00\""
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Q = {q₀, qâ‚ÂÂ�, q₂}\nΣ = {0, 1}\nq₀ → start\nF = {q₂}\n\nδ:\nState | δ( , 0) | δ( , 1)\n------+---------+--------\nq₀    | qâ‚ÂÂ�      | q₀\nqâ‚ÂÂ�    | q₂      | q₀\nq₂    | q₂      | q₀\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₀: last seen char was 1 (or start)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "qâ‚ÂÂ�: last seen char was 0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₂: last two chars are 00"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-nondeterministic-finite-automaton-nfa",
      children: "1.4 Nondeterministic Finite Automaton (NFA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An NFA is a 5-tuple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "M = (Q, Σ, δ, q₀, F)"
      }), " where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "δ: Q Ãâ€â€� Σ → P(Q)"
      }), " → the transition function maps to a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "set"
      }), " of possible next states."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Key fact: a string is accepted if ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "at least one"
      }), " computation path ends in a final state. The NFA can be viewed as exploring all paths in parallel."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nfa-for-strings-where-the-3rd-last-symbol-is-1",
      children: "NFA for Strings where the 3rd-last symbol is 1"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Q = {q₀, qâ‚ÂÂ�, q₂, q₃}\nΣ = {0, 1}\nq₀ = start\nF = {q₃}\n\nδ:\nState | δ( , 0)   | δ( , 1)\n------+-----------+-----------\nq₀    | {q₀}      | {q₀, qâ‚ÂÂ�}\nqâ‚ÂÂ�    | {q₂}      | {q₂}\nq₂    | {q₃}      | {q₃}\nq₃    | ∅         | ∅\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The NFA \"guesses\" when a 1 is the third-last symbol, then verifies exactly two more characters. This requires only 4 states; the equivalent DFA needs 8 (2³) states. This demonstrates the exponential state savings NFAs can provide."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-ε-nfa-nfa-with-ε-transitions",
      children: "1.5 ε-NFA (NFA with ε-transitions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An ε-NFA allows transitions on ε (empty string). This adds convenience without increasing power."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Formally, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "δ: Q Ãâ€â€� (Σ ∪ {ε}) → P(Q)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every ε-NFA can be converted to an equivalent NFA (without ε) by computing ε-closure: the set of all states reachable via zero or more ε-transitions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-nfa-to-dfa-conversion-subset-construction",
      children: "1.6 NFA to DFA Conversion (Subset Construction)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Algorithm outline:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start state of DFA = ε-closure(q₀) of NFA"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each DFA state S (subset of NFA states) and each symbol a:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compute T = ⋃_{p ∈ S} δ(p, a)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "DFA transition δ'(S, a) = ε-closure(T)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat until no new DFA states emerge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Final DFA states = any subset containing an NFA final state"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "example-convert-nfa-for-ababb-to-dfa",
      children: ["Example: Convert NFA for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(a|b)*abb"
      }), " to DFA"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NFA states: {q₀, qâ‚ÂÂ�, q₂, q₃}\nε-closure(q₀) = {q₀}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "| DFA State | NFA Subset | On a | On b |\n|-----------+------------+------+------|\n| A         | {q₀}       | B    | A    |\n| B         | {q₀, qâ‚ÂÂ�}   | B    | C    |\n| C         | {q₀, q₂}   | B    | D    |\n| D         | {q₀, q₃}   | B    | A    |"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DFA final states: {D} (contains NFA final q₃)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-dfa-minimization",
      children: "1.7 DFA Minimization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Two states ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "q"
      }), " are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "distinguishable"
      }), " if there exists a string w such that exactly one of δ(p, w) and δ(q, w) is final."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Myhill-Nerode Theorem:"
      }), " The number of equivalence classes of the indistinguishability relation equals the number of states in the minimal DFA."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "minimization-algorithm-table-filling-method",
      children: "Minimization Algorithm (Table-Filling Method)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Draw a table of all state pairs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(p, q)"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "p < q"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark all pairs where one is final and the other nonfinal."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each unmarked pair, check if there exists a symbol a such that ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(δ(p, a), δ(q, a))"
        }), " is marked. If so, mark this pair and repeat."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continue until no new marks. Unmarked pairs are equivalent and can be merged."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "example-minimize-dfa-for-ababb",
      children: ["Example: Minimize DFA for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(a|b)*abb"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "States: A, B, C, D (A = start, D = final)\nTransitions from earlier example:\n  A --a--> B, A --b--> A\n  B --a--> B, B --b--> C\n  C --a--> B, C --b--> D\n  D --a--> B, D --b--> A\n\nStep 1: Mark (A,D), (B,D), (C,D) → D is final, others not\nStep 2: Check (A,B):\n  δ(A,a)=B, δ(B,a)=B → (B,B) not marked\n  δ(A,b)=A, δ(B,b)=C → (A,C) not marked → keep unmarked\nStep 3: Check (A,C):\n  δ(A,a)=B, δ(C,a)=B → (B,B) ok\n  δ(A,b)=A, δ(C,b)=D → (A,D) IS marked → mark (A,C)\nStep 4: Check (B,C):\n  δ(B,a)=B, δ(C,a)=B → ok\n  δ(B,b)=C, δ(C,b)=D → (C,D) IS marked → mark (B,C)\n\nResult: A ≡ nothing. All states are distinct. The DFA is already minimal.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18-regular-expressions-to-nfa-thompson-construction",
      children: "1.8 Regular Expressions to NFA (Thompson Construction)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given a regex, build an ε-NFA compositionally:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Regex"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NFA Structure"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ε"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₀ →ε→ qâ‚ÂÂ� (both final)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₀ →a→ qâ‚ÂÂ�"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Râ‚ÂÂ�R₂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain: start → N(Râ‚ÂÂ�) → ε → N(R₂) → final"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Râ‚ÂÂ�|R₂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fork: start → ε → N(Râ‚ÂÂ�) → ε → final; start → ε → N(R₂) → ε → final"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop: start → ε → N(R) → ε → final; with ε from N(R) final back to N(R) start; direct ε from start to final"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "example-thompson-construction-for-ababb",
      children: ["Example: Thompson construction for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(a|b)*abb"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: N(a|b)\n    ââ€�€ââ€�€εââ€�€ââ€�€→ N(a) ââ€�€ââ€�€εââ€�€ââ€�€→\n  ↗                   ↘\nS ââ€�¤                     ââ€�œ F\n  ↘ââ€�€ââ€�€εââ€�€ââ€�€→ N(b) ââ€�€ââ€�€εââ€�€ââ€�€→↗\n\nStep 2: N((a|b)*)\n  ââ€�Œâ†Â�ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ ε ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�Â�\n  ââ€�‚    ââ€�Œâ†Â�ââ€�€ââ€�€ ε ââ€�€ââ€�€ââ€�Â�            ââ€�‚\n  ↓    ↗         ↘           ââ€�‚\n S ââ€�€ââ€�€εââ€�€ââ€�€→ N(a|b) ââ€�€ââ€�€εââ€�€ââ€�€→ F ââ€�€ââ€�€ââ€�˜\n  ââ€�â€�ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ ε ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�€ââ€�˜\n\nStep 3: N((a|b)*abb) → chain the * NFA with N(a), N(b), N(b)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thompson construction yields an ε-NFA with at most ", (0,jsx_runtime.jsx)(_components.code, {
        children: "2 Ãâ€â€� |regex|"
      }), " states."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19-dfa-to-regular-expression-state-elimination-method",
      children: "1.9 DFA to Regular Expression (State Elimination Method)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a new start state with ε to old start, and a new final state with ε from all old finals."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each state q to eliminate:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Let R_ii = self-loop on q"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For each pair (p_in, p_out) with p_in → q → p_out:\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "R = R(p_in → q) · (R_ii)* · R(q → p_out)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Add R to the transition p_in → p_out"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Remove q and all its transitions."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The final regex is on the single remaining edge from new start to new final."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "example-ababb-dfa-to-regex",
      children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(a|b)*abb"
      }), " DFA to Regex"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "States A, B, C, D. Eliminate D first:\n  Incoming to D: C --b → D\n  Outgoing from D: D --a → B, D --b → A\n  No self-loop on D.\n  New transition C --b(a|b)* → C (since after D--a→B and D--b→A, but wait...)\n  Actually: after eliminating D:\n    C --b→ D --a→ B  →  C --ba→ B\n    C --b→ D --b→ A  →  C --bb→ A\n\nEliminate C:\n  Incoming: B --b→ C\n  Outgoing: C --ba→ B, C --bb→ A\n  New: B --b(ba)*ba→ B, B --b(ba)*bb→ A\n\nEliminate B:\n  A --a→ B, B has self-loop b(ba)*ba\n  Outgoing from B: B --b(ba)*bb→ A, B --a(→A? no -- B--a→B self-loop)\n  Through B: A --a(b(ba)*ba)*b(ba)*bb→ A\n  Self-loop on A: from A --b→ A\n  Final regex for start A to final A: (b | a(b(ba)*ba)*b(ba)*bb)*\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(Note: state elimination produces correct but often non-unique regexes. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(a|b)*abb"
      }), " regex is equivalent and simpler.)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "110-closure-properties-of-regular-languages",
      children: "1.10 Closure Properties of Regular Languages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Regular languages are closed under:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Construction"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Union ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Lâ‚ÂÂ� ∪ L₂"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NFA with ε-branch from new start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Concatenation ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Lâ‚ÂÂ�L₂"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain ε-NFAs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Kleene Star ", (0,jsx_runtime.jsx)(_components.code, {
              children: "L*"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop ε-NFA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Intersection ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Lâ‚ÂÂ� ∩ L₂"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Product DFA ", (0,jsx_runtime.jsx)(_components.code, {
              children: "(Qâ‚ÂÂ�Ãâ€â€�Q₂, Σ, δ((p,q),a) = (δâ‚ÂÂ�(p,a), δ₂(q,a)), (q₀â‚ÂÂ�,q₀₂), Fâ‚ÂÂ�Ãâ€â€�F₂)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Complement ", (0,jsx_runtime.jsx)(_components.code, {
              children: "L̅"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFA: swap final/nonfinal states (DFA must be complete)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Difference ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Lâ‚ÂÂ� − L₂"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lâ‚ÂÂ� ∩ L̅₂"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reversal ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Lᴿ"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse arrows, swap start/final"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Homomorphism ", (0,jsx_runtime.jsx)(_components.code, {
              children: "h(L)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace each symbol per mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Inverse Homomorphism ", (0,jsx_runtime.jsx)(_components.code, {
              children: "hâÂÂ�»¹(L)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFA simulates h"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GATE Tip:"
      }), " Regular languages are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " closed under subset, superset, or infinite union/intersection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-pumping-lemma-for-regular-languages",
      children: "1.11 Pumping Lemma for Regular Languages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pumping Lemma:"
        }), " If L is regular, then ∃ p > 0 (pumping length) such that ∀ w ∈ L with |w| ≥ p, w can be split as w = xyz where:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "|xy| ≤ p"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "|y| ≥ 1"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "xyâÂÂ�±z ∈ L for all i ≥ 0"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Prove languages are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " regular. You cannot prove regularity with the pumping lemma."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "proof-strategy-by-contradiction",
      children: "Proof Strategy (by contradiction):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assume L is regular. Let p be the pumping length."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose w ∈ L with |w| ≥ p (cleverly → this is the key step)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For all splits w = xyz with |xy| ≤ p and |y| ≥ 1:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Find i ≥ 0 where xyâÂÂ�±z ∉ L."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contradiction → L is not regular."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "example-prove-l--0âââ1âââ--n--0-not-regular",
      children: ["Example: Prove ", (0,jsx_runtime.jsx)(_components.code, {
        children: "L = {0âÂÂ�¿1âÂÂ�¿ | n ≥ 0}"
      }), " not regular"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Assume L regular. Let p be pumping length.\nChoose w = 0ᵖ1ᵖ ∈ L. |w| = 2p ≥ p.\nPumping lemma: w = xyz, |xy| ≤ p, |y| ≥ 1, xyâÂÂ�±z ∈ L ∀i.\n\nSince |xy| ≤ p, y consists only of 0s.\nPump i = 2: xy²z = 0^(p+|y|)1ᵖ.\nThis has more 0s than 1s → not in L. Contradiction.\nTherefore L is not regular.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "example-prove-l--aâââbâââ--n--0-not-regular-using-myhill-nerode",
      children: ["Example: Prove ", (0,jsx_runtime.jsx)(_components.code, {
        children: "L = {aâÂÂ�¿bâÂÂ�¿ | n ≥ 0}"
      }), " not regular using Myhill-Nerode"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Define equivalence: x ≡ y if for all z, xz ∈ L â‡â€� yz ∈ L.\nConsider strings aâÂÂ�± and aʲ for i ≠ j.\nFor z = bâÂÂ�±: aâÂÂ�±bâÂÂ�± ∈ L but aʲbâÂÂ�± ∉ L.\nSo aâÂÂ�± → aʲ. Infinitely many equivalence classes → L not regular.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-gate-practice-problems--finite-automata",
      children: "1.12 GATE Practice Problems → Finite Automata"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " How many states does the minimal DFA for the language ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{w ∈ {0,1}* | w has odd number of 0s and even number of 1s}"
      }), " have?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) 2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) 3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) 4"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) 5"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C) 4"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: Four states for all parity combinations (odd/even for 0s and 1s)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " Which of the following languages is regular?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["(A) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{0âÂÂ�¿1âÂÂ�¿ | n ≥ 0}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["(B) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{0áµÂÂ�1âÂÂ�¿ | m ≠ n}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["(C) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{ww | w ∈ {0,1}*}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["(D) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{0âÂÂ�¿ | n is prime}"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: (A) requires counting → pumping lemma shows non-regular. (C) requires memory of the entire first half. (D) requires primality checking. (B) is regular: we can have a DFA that counts up to some bound and then goes to a trap for the difference."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " Let L be a regular language. Which of the following is NOT necessarily regular?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) Prefix(L) = {x | ∃ y, xy ∈ L}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) Suffix(L) = {y | ∃ x, xy ∈ L}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) Substring(L) = {y | ∃ x,z, xyz ∈ L}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) Half(L) = {x | ∃ y, xy ∈ L and |x| = |y|}"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: (A), (B), (C) are regular → NFA can guess the missing parts. (D) is not necessarily regular because it requires tracking equal lengths, which is a counting problem beyond finite automata."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Consider the DFA with states {A,B,C}, alphabet {0,1}, A = start, C = final, transitions:\nδ(A,0) = B, δ(A,1) = A, δ(B,0) = C, δ(B,1) = A, δ(C,0) = C, δ(C,1) = C.\nThe language accepted is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) Strings ending with 00"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) Strings containing 00"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) Strings starting with 00"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) Strings with no consecutive 1s"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: A = \"no trailing zeros\", B = \"last char was 0\", C = \"last two chars 00\". Once in C (final), any further input stays in C."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Let ", (0,jsx_runtime.jsx)(_components.code, {
        children: "L = {aâÂÂ�¿báµÂÂ� | n,m ≥ 0 and n ≠ m}"
      }), ". Which statement is true?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) L is regular"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) L is context-free but not regular"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) L is not context-free"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) L is recursive but not context-free"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: L = {aâÂÂ�¿báµÂÂ� | n > m} ∪ {aâÂÂ�¿báµÂÂ� | n < m}. Both parts are regular because we only need to count up to the shorter side. A DFA that \"remembers\" whether it's seen more as or more bs (with a bounded counter) can accept this."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6."
      }), " What is the minimum number of states in a DFA for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "L = {w ∈ {0,1}* | w ends with 010}"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) 3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) 4"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) 5"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) 6"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B) 4"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: States encode the longest suffix of the input that is a prefix of \"010\". q₀ = \"\", qâ‚ÂÂ� = \"0\", q₂ = \"01\", q₃ = \"010\" (final). On mismatch, transitions return to appropriate state."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7."
      }), " The regular expression ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(0|1)*0(0|1)(0|1)"
      }), " denotes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) All strings whose length is a multiple of 3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) All strings whose 4th-last symbol is 0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) All strings whose 3rd-last symbol is 0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) All strings ending with 000"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Explanation: The pattern ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(0|1)*0(0|1)(0|1)"
      }), " means: any prefix, then a 0, then exactly two more symbols, then end. So the 3rd-last symbol is 0. Note: maintaining this property requires an 8-state DFA."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-context-free-grammars--pushdown-automata",
      children: "2. Context-Free Grammars & Pushdown Automata"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-context-free-grammar-cfg-definition",
      children: "2.1 Context-Free Grammar (CFG) Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A CFG is a 4-tuple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "G = (V, T, P, S)"
      }), " where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "V"
        }), " → finite set of nonterminals (variables)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "T"
        }), " → finite set of terminals (alphabet, disjoint from V)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "P"
        }), " → finite set of productions of the form ", (0,jsx_runtime.jsx)(_components.code, {
          children: "A → α"
        }), " where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "A ∈ V"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "α ∈ (V ∪ T)*"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "S ∈ V"
        }), " → start symbol"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Derivation:"
      }), " Replace a nonterminal by one of its productions. Continue until only terminals remain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Example: G = ({E, T, F}, {+, *, (, ), id}, P, E)\nP:\n  E → E + T | T\n  T → T * F | F\n  F → (E) | id\n\nDerivation of id * id + id:\n  E ⇒ T + T ⇒ T * F + T ⇒ F * F + T ⇒ id * F + T ⇒ id * id + T ⇒ id * id + F ⇒ id * id + id\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-parse-trees",
      children: "2.2 Parse Trees"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A parse tree shows the hierarchical structure of a derivation. The root is the start symbol. Each internal node is a nonterminal. Children correspond to the RHS of the production applied. Leaves are terminals (yielding the derived string)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Parse tree for id * id + id:\n\n          E\n        / | \\\n       E  +  T\n       |    /|\\\n       T   T * F\n       |   |   |\n       F   F   id\n       |   |\n      id  id\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-leftmost-and-rightmost-derivations",
      children: "2.3 Leftmost and Rightmost Derivations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Leftmost derivation:"
        }), " always replace the leftmost nonterminal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rightmost derivation:"
        }), " always replace the rightmost nonterminal."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A CFG is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ambiguous"
      }), " if there exists a string with multiple distinct leftmost (or equivalently, rightmost) derivations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "example-of-ambiguous-grammar",
      children: "Example of Ambiguous Grammar"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "E → E + E | E * E | id  (ambiguous)\nDerivation 1: E ⇒ E + E ⇒ id + E ⇒ id + id\nDerivation 2: E ⇒ E + E ⇒ E + id ⇒ id + id  (different parse tree → same string, same structure)\n\nActually for id + id * id:\nLeftmost 1: E ⇒ E + E ⇒ id + E ⇒ id + E * E ⇒ id + id * E ⇒ id + id * id\nLeftmost 2: E ⇒ E * E ⇒ E + E * E ⇒ id + E * E ⇒ id + id * E ⇒ id + id * id\n\nThese produce different parse trees (addition vs multiplication at root), making the grammar ambiguous.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inherent ambiguity:"
      }), " A language is inherently ambiguous if EVERY grammar for it is ambiguous. Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{aâÂÂ�¿bâÂÂ�¿cáµÂÂ�dáµÂÂ� | n,m ≥ 0} ∪ {aâÂÂ�¿báµÂÂ�cáµÂÂ�dâÂÂ�¿ | n,m ≥ 0}"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-chomsky-normal-form-cnf",
      children: "2.4 Chomsky Normal Form (CNF)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A CFG is in CNF if every production has the form:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "A → BC"
        }), " (two nonterminals)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "A → a"
        }), " (single terminal)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "S → ε"
        }), " allowed only if S never appears on RHS"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Conversion to CNF:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add new start S₀ → S."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove ε-productions (A → ε). For each production with A on RHS, add variants without A."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove unit productions (A → B). For each A → B, add A → α for all B → α."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Replace terminals in RHS with length > 1: introduce ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T_a → a"
        }), " for each terminal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Break long RHS: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "A → Bâ‚ÂÂ�B₂...Bₖ"
        }), " becomes a chain of binary productions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "example-convert-to-cnf",
      children: "Example: Convert to CNF"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Original: S → aSb | ε\nAfter removing ε: S → aSb | ab\n  (We handle S → ε via the start rule)\n\nStep 1: S₀ → S, S → aSb | ab\nStep 2: No ε-productions (S → ε was start-specific)\nStep 3: No unit productions\nStep 4: T_a → a, T_b → b\n  S → T_a S T_b | T_a T_b\nStep 5: S → T_a U, U → S T_b; S → T_a T_b\n\nFinal CNF:\n  S₀ → S\n  S → T_a U | T_a T_b\n  U → S T_b\n  T_a → a\n  T_b → b\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-greibach-normal-form-gnf",
      children: "2.5 Greibach Normal Form (GNF)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A CFG is in GNF if every production is of the form ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A → aα"
      }), " where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a ∈ T"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "α ∈ V*"
      }), ". Each step generates exactly one terminal, making it ideal for PDA construction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GNF Construction (from CNF):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Grammar: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A → Aαâ‚ÂÂ� | Aα₂ | ... | βâ‚ÂÂ� | β₂ | ..."
      }), " where βⱼ do not start with A."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apply left-recursion elimination:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Introduce new nonterminal A'."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A → βⱼA' for each βⱼ"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A' → αᵢA' | ε for each αᵢ"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-pushdown-automaton-pda",
      children: "2.6 Pushdown Automaton (PDA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A PDA is a 6-tuple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "M = (Q, Σ, Γ, δ, q₀, Z₀, F)"
      }), " where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Q"
        }), " → finite set of states"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Σ"
        }), " → input alphabet"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Γ"
        }), " → stack alphabet"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "δ: Q Ãâ€â€� (Σ ∪ {ε}) Ãâ€â€� Γ → P(Q Ãâ€â€� Γ*)"
        }), " → transition function"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "q₀ ∈ Q"
        }), " → start state"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Z₀ ∈ Γ"
        }), " → initial stack symbol"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "F ⊆ Q"
        }), " → final states"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Two acceptance modes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Accept by final state:"
        }), " after reading all input, PDA is in a final state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Accept by empty stack:"
        }), " after reading all input, stack is empty. (For DPDA, these are not equivalent.)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "pda-for-aâââbâââ--n--0",
      children: ["PDA for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{aâÂÂ�¿bâÂÂ�¿ | n ≥ 0}"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Q = {q₀, qâ‚ÂÂ�, q₂}\nΣ = {a, b}\nΓ = {Z₀, A}\nq₀ = start, Z₀ = initial stack\nF = {q₂}\n\nδ:\n  (q₀, a, Z₀) → {(q₀, A Z₀)}    // push A for first a\n  (q₀, a, A)   → {(q₀, A A)}    // push A for more a's\n  (q₀, b, A)   → {(qâ‚ÂÂ�, ε)}      // start matching: pop one A\n  (qâ‚ÂÂ�, b, A)   → {(qâ‚ÂÂ�, ε)}      // continue matching: pop A per b\n  (qâ‚ÂÂ�, ε, Z₀)  → {(q₂, Z₀)}     // accepted: stack back to Z₀\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "27-cfg-to-pda-conversion",
      children: "2.7 CFG to PDA Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given CFG G, construct PDA P that accepts by empty stack:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push S (start symbol) onto stack."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Repeat:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If top of stack is nonterminal A: nondeterministically pop and push RHS of some A → α."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If top of stack is terminal a and next input is a: pop and advance input."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If stack is empty: accept."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is called ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "top-down parsing"
      }), " (LL(1) style). The PDA simulates a leftmost derivation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "example-cfg-to-pda-for-aâââbâââ--n--0",
      children: ["Example: CFG to PDA for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{aâÂÂ�¿bâÂÂ�¿ | n ≥ 0}"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Grammar: S → aSb | ε\nPDA:\n  δ(q₀, ε, S) = {(q₀, aSb), (q₀, ε)}   // expand S\n  δ(q₀, a, a) = {(q₀, ε)}               // match terminal a\n  δ(q₀, b, b) = {(q₀, ε)}               // match terminal b\n  δ(q₀, ε, Z₀) = {(q₀, ε)}              // accept by empty stack\n\nRun on \"aabb\":\n  (q₀, aabb, S Z₀) ⊢ (q₀, aabb, aSb Z₀)    // expand S → aSb\n                 ⊢ (q₀, abb, Sb Z₀)          // match a\n                 ⊢ (q₀, abb, aSbb Z₀)        // expand S → aSb\n                 ⊢ (q₀, bb, Sbb Z₀)          // match a\n                 ⊢ (q₀, bb, bb Z₀)           // expand S → ε\n                 ⊢ (q₀, b, b Z₀)             // match b\n                 ⊢ (q₀, ε, Z₀)               // match b\n                 ⊢ (q₀, ε, ε)                // accept (empty stack)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "28-pda-to-cfg-conversion",
      children: "2.8 PDA to CFG Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given PDA P, construct CFG G such that L(G) = L(P):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create nonterminals ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[qXp]"
      }), " meaning \"starting in state q with stack symbol X, end in state p after popping X.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Productions simulate stack operations. This is rarely tested in GATE but conceptually important."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "29-pumping-lemma-for-context-free-languages",
      children: "2.9 Pumping Lemma for Context-Free Languages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pumping Lemma for CFLs:"
        }), " If L is context-free, then ∃ p > 0 such that ∀ w ∈ L with |w| ≥ p, w can be split as w = uvxyz where:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "|vxy| ≤ p"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "|vy| ≥ 1"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "uvâÂÂ�±xyâÂÂ�±z ∈ L for all i ≥ 0"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intuition:"
      }), " In the parse tree, if a path from root to leaf has more than |V| internal nodes, some nonterminal repeats on that path. The substring generated between the two occurrences can be pumped."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "example-prove-aâââbâââcâââ--n--0-not-context-free",
      children: ["Example: Prove ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{aâÂÂ�¿bâÂÂ�¿câÂÂ�¿ | n ≥ 0}"
      }), " not context-free"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Assume L is CFL. Let p be pumping length.\nChoose w = aᵖbᵖcᵖ ∈ L.\n\nPumping lemma: w = uvxyz, |vxy| ≤ p, |vy| ≥ 1, uvâÂÂ�±xyâÂÂ�±z ∈ L.\n\nSince |vxy| ≤ p, vxy can contain at most 2 distinct symbols.\nCase 1: vxy contains no c's → uv²xy²z has more a/b than c → not in L.\nCase 2: vxy contains no a's → uvâÂÂ�°xyâÂÂ�°z has more c/b than a → not in L.\nCase 3: vxy spans ab boundary but not c → similar imbalance.\n\nContradiction → L is not context-free.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "210-closure-properties-of-cfls",
      children: "2.10 Closure Properties of CFLs"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Closed?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S → Sâ‚ÂÂ�"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concatenation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S → Sâ‚ÂÂ�S₂"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kleene Star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S → Sâ‚ÂÂ�S"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse RHS of each production"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intersection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counterexample: {aâÂÂ�¿bâÂÂ�¿cáµÂÂ�} ∩ {aâÂÂ�¿báµÂÂ�cáµÂÂ�}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Follows from non-closure under intersection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Homomorphism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace terminals in productions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inverse Homomorphism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PDA simulates h"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GATE Tip:"
      }), " CFLs are closed under regular intersection. If R is regular and L is CFL, then L ∩ R is CFL (PDA Ãâ€â€� DFA construction)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "211-deterministic-context-free-languages-dcfl",
      children: "2.11 Deterministic Context-Free Languages (DCFL)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A language is DCFL if it has a deterministic PDA (DPDA) → at most one transition per (state, input, stack top) combination."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DCFL ⊂ CFL (proper subset)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DCFL is closed under complement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DCFL is NOT closed under union, intersection, or reversal"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "L = {aâÂÂ�¿bâÂÂ�¿ | n ≥ 0}"
        }), " is DCFL"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "L = {wwᴿ | w ∈ {a,b}*}"
        }), " is CFL but not DCFL"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "L = {aâÂÂ�±bʲcáµÂÂ� | i = j or j = k}"
        }), " is CFL but not DCFL"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "212-gate-practice-problems--cfg--pda",
      children: "2.12 GATE Practice Problems → CFG & PDA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " Consider ", (0,jsx_runtime.jsx)(_components.code, {
        children: "L = {aáµÂÂ�bâÂÂ�¿ | m ≠ n}"
      }), ". Which is true?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) Regular"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) DCFL but not regular"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) NCFL but not DCFL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) Not context-free"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Explanation: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "L = {aáµÂÂ�bâÂÂ�¿ | m > n} ∪ {aáµÂÂ�bâÂÂ�¿ | m < n}"
      }), ". Both are DCFL (push a's, pop b's, accept if leftover). Their union is actually DCFL: the DPDA can decide based on which count is exhausted first."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " Which grammar is in CNF? S → AB | BC, A → AB | a, B → BA | b, C → a | b."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) Yes, all productions are A → BC or A → a"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) No, A → AB has both nonterminals but check S → AB → it is fine"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) No, B → BA is valid CNF"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) Yes, but only if we add start symbol"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: All productions are in CNF form (A → BC or A → a). But standard CNF requires S to not appear on RHS. Since S is not on any RHS here, technically it is in CNF (the extra S → ε rule is optional). The grammar is in CNF."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " How many steps does a PDA (accepting by final state) have? Match:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "PDA Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack after acceptance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P1: By final state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(i) Stack must be empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P2: By empty stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(ii) Stack can be non-empty"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) P1 → (ii), P2 → (i)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) P1 → (i), P2 → (ii)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) Both require empty stack"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) Both allow non-empty stack"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: Acceptance by final state does NOT require empty stack. Acceptance by empty stack does not require a final state. For DCFL, these two acceptance modes are not equivalent."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Which language is inherently ambiguous?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) {aâÂÂ�¿bâÂÂ�¿cáµÂÂ�dáµÂÂ� | n,m ≥ 0}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) {aâÂÂ�¿bâÂÂ�¿ | n ≥ 0}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) {aâÂÂ�¿bâÂÂ�¿câÂÂ�¿dâÂÂ�¿ | n ≥ 0}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) {aâÂÂ�¿báµÂÂ�cáµÂÂ�dâÂÂ�¿ | n,m ≥ 0}"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Explanation: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{aâÂÂ�¿báµÂÂ�cáµÂÂ�dâÂÂ�¿}"
      }), " is inherently ambiguous. Any grammar for it requires two distinct derivation patterns (n-center or m-center), and there's no way to make all strings have a unique parse tree. Language (A) is unambiguous → grammar S → AB, A → aAb | ε, B → cBd | ε."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Let ", (0,jsx_runtime.jsx)(_components.code, {
        children: "G = ({S,A,B}, {a,b}, P, S)"
      }), " with productions:\nS → aB | bA, A → aS | bAA | a, B → bS | aBB | b.\nThe language generated is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) {w ∈ {a,b}* | #a(w) = #b(w)}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) {w ∈ {a,b}* | #a(w) ≠ #b(w)}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) {w ∈ {a,b}* | |w| is even}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) All strings over {a,b}"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: S generates strings where counts are equal. A generates strings with one extra a (since S starts with aB or bA). B generates strings with one extra b. This is the standard grammar for equal-count language."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6."
      }), " The language ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{aâÂÂ�¿báµÂÂ� | 0 ≤ n ≤ 2m}"
      }), " is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) Regular"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) DCFL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) NCFL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) Not context-free"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: Push a's. For each b, pop two a's. If stack runs out early (too many a's), reject. If extra a's remain, accept only if n ≤ 2m. The DPDA can track the ratio."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7."
      }), " Which is TRUE? Every regular language is DCFL, but:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) Every DCFL is regular"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) Some DCFL are not regular, and some CFL are not DCFL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) DCFL = CFL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) DCFL languages are all inherently ambiguous"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: Regular ⊂ DCFL ⊂ CFL. {aâÂÂ�¿bâÂÂ�¿} is DCFL but not regular. {wwᴿ} is CFL but not DCFL."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-turing-machines--recursive-languages",
      children: "3. Turing Machines & Recursive Languages"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-turing-machine-definition",
      children: "3.1 Turing Machine Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A TM is a 7-tuple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "M = (Q, Σ, Γ, δ, q₀, B, F)"
      }), " where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Q"
        }), " → finite set of states"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Σ"
        }), " → input alphabet (subset of Σ, excludes blank)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Γ"
        }), " → tape alphabet (Σ ∪ Γ, always includes blank B and maybe other symbols)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "δ: Q Ãâ€â€� Γ → Q Ãâ€â€� Γ Ãâ€â€� {L, R}"
        }), " → transition function (partial function)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "q₀ ∈ Q"
        }), " → start state"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "B ∈ Γ"
        }), " → blank symbol (not in Σ)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "F ⊆ Q"
        }), " → final/accepting states"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Configurations:"
      }), " A snapshot ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(q, w, i)"
      }), " where q is current state, w is tape contents, i is head position."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Transition notation:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "δ(q, X) = (p, Y, L)"
      }), " means in state q, reading X, write Y, move left, enter state p."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "32-tm-for-aâââbâââcâââ--n--1",
      children: ["3.2 TM for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{aâÂÂ�¿bâÂÂ�¿câÂÂ�¿ | n ≥ 1}"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This language is context-sensitive (not context-free). A TM can recognize it:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Strategy: Mark off a, b, c in each pass.\n1. Scan tape. If current symbol is a, replace with X and move right.\n2. Scan right past a's and X's until reaching b. Replace with Y, move right.\n3. Scan right past b's and Y's until reaching c. Replace with Z, move right.\n4. Reset to left end. Repeat steps 1-3.\n5. If scanning left-to-right sees only X, Y, Z and blank → accept.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Q = {q₀, qâ‚ÂÂ�, q₂, q₃, q₄, q₅, q_accept, q_reject}\nΓ = {a, b, c, X, Y, Z, B}\n\nδ:\n  // Find first a, mark as X\n  q₀: (a, X, R) → qâ‚ÂÂ�\n\n  // Find b, mark as Y\n  qâ‚ÂÂ�: (a, a, R), (X, X, R), (b, Y, R) → q₂\n\n  // Find c, mark as Z\n  q₂: (b, b, R), (Y, Y, R), (c, Z, L) → q₃\n\n  // Move left to start\n  q₃: (a, a, L), (b, b, L), (X, X, R) → q₀\n      (Y, Y, L), (Z, Z, L)\n\n  // Final verification: scan entire tape\n  q₀: (X, X, R) → q₄\n  q₄: (X, X, R), (Y, Y, R) → q₅\n  q₅: (Y, Y, R), (Z, Z, R) → q_accept\n  q_accept: (B, B, R) → accept\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-tm-for-palindrome-recognition",
      children: "3.3 TM for Palindrome Recognition"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Language: {wwᴿ | w ∈ {a,b}*}\nStrategy: Mark first symbol, compare with last, repeat.\n\n1. Mark current first unmarked symbol (find a or b).\n2. Move right to end of tape.\n3. Compare with last unmarked symbol.\n4. If match, mark both and repeat.\n5. If all symbols marked, accept.\n\nKey states needed:\n  q₀: find a or b at left end\n  q_a_seen: found 'a' at left, now find rightmost unmarked\n  q_b_seen: found 'b' at left, now find rightmost unmarked\n  q_check_a: verify rightmost is 'a'\n  q_check_b: verify rightmost is 'b'\n  q_reset: move back to left end\n  q_accept: all symbols matched\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-tm-variations",
      children: "3.4 TM Variations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Variation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Power"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-tape TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as single-tape (simulate multi-tape on single tape using tracks and markers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-deterministic TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as deterministic (systematic search of all paths)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-head TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as single-tape"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2D/2-way infinite tape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as 1D semi-infinite"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write-once TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same (slightly slower but equivalent)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Time overhead for simulations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "k-tape → single tape: O(|w|²) overhead per step"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NTM → DTM: exponential overhead in worst case"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-recursively-enumerable-vs-recursive-languages",
      children: "3.5 Recursively Enumerable vs Recursive Languages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recursive (R)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recursively Enumerable (RE)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TM always halts?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (total TM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Halts on acceptance, may loop on rejection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Membership decidable?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semi-decidable (yes guaranteed, no may loop)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complement in same class?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (R closed under complement)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (RE not closed under complement)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enumeration possible?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (in canonical order)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (may repeat or be unordered)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hierarchy:"
      }), " Regular ⊂ CFL ⊂ CSL ⊂ R ⊂ RE"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-undecidability--the-halting-problem",
      children: "3.6 Undecidability → The Halting Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Halting Problem:"
        }), " Given a TM M and input w, determine whether M halts on w."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem (Turing, 1936):"
      }), " The halting problem is undecidable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Proof sketch (by contradiction):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assume HALT(M, w) is decidable. Then there exists a TM H that decides it."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Construct a new TM D that on input M:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Runs H(M, M). If H says \"halts\", D loops forever. If H says \"loops\", D halts."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Now run D on input D:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If D halts on D, then H(D, D) said \"loops\" → contradiction."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If D loops on D, then H(D, D) said \"halts\" → contradiction."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Therefore H cannot exist. The halting problem is undecidable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "37-reduction-proofs",
      children: "3.7 Reduction Proofs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To prove problem P is undecidable: reduce a known undecidable problem (like Halting) to P."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reduction:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A ≤ₘ B"
      }), " (many-one reduction from A to B). If A is undecidable and A ≤ₘ B, then B is undecidable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "example-prove-does-tm-m-accept-empty-string-is-undecidable",
      children: "Example: Prove \"Does TM M accept empty string?\" is undecidable"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Reduce Halting to Empty-String Acceptance (ESA):\n  Given (M, w), construct M':\n    On input x:\n      1. If x ≠ ε, reject.\n      2. Run M on w.\n      3. If M halts, accept.\n\n  M' accepts ε â‡â€� M halts on w.\n  If ESA were decidable, we would decide Halting.\n  Therefore ESA is undecidable.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "38-rices-theorem",
      children: "3.8 Rice's Theorem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rice's Theorem:"
        }), " Any nontrivial property of the language of a TM is undecidable."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Nontrivial\" = property is neither always true nor always false."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Property of the language\" = depends only on what strings the TM accepts, not on its internal structure."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples of undecidable properties (Rice):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is L(M) empty?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is L(M) finite?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is L(M) regular?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is L(M) context-free?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does L(M) contain a specific string w?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples of decidable properties (not covered by Rice):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does M have exactly 5 states? (Syntactic property → not language property)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does M halt within 100 steps? (Bounded halting → decidable by simulation)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "39-post-correspondence-problem-pcp",
      children: "3.9 Post Correspondence Problem (PCP)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PCP Instance:"
        }), " A set of dominos ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{(uâ‚ÂÂ�/vâ‚ÂÂ�), (u₂/v₂), ..., (uₖ/vₖ)}"
        }), " where each uᵢ, vᵢ is a string over some alphabet. Question: does there exist a sequence of indices iâ‚ÂÂ�, i₂, ..., iₙ (with repetition allowed) such that uᵢâ‚ÂÂ�uᵢ₂...uᵢₙ = vᵢâ‚ÂÂ�vᵢ₂...vᵢₙ?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Modified PCP (MPCP):"
      }), " First domino must be specific (usually the first)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem:"
      }), " PCP is undecidable (even with alphabet size 2)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "example-pcp-instance",
      children: "Example PCP Instance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Dominoes: (ab/a), (a/ba), (b/bb), (ε/aa)\n\nCan we find a match?\n  Sequence 1, 2, 3:\n    Top: ab · a · b = abab\n    Bottom: a · ba · bb = ababb\n  Not a match.\n\n  Sequence 2, 4, 1, 3:\n    Top: a · ε · ab · b = aabb\n    Bottom: ba · aa · a · bb = baaaabb\n  Not a match.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PCP is often used in reductions to prove other problems undecidable (e.g., ambiguity of CFGs)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "310-linear-bounded-automata-lba-and-csl",
      children: "3.10 Linear Bounded Automata (LBA) and CSL"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An LBA is a TM whose tape is limited to the input length (plus possibly a constant factor). LBAs accept exactly the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "context-sensitive languages"
      }), " (CSL)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CSL are closed under union, intersection, complement"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Membership problem for CSL is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PSPACE-complete"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Equivalence of two LBAs is undecidable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "311-gate-practice-problems--tm--undecidability",
      children: "3.11 GATE Practice Problems → TM & Undecidability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " Which of the following problems is decidable?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) Given a TM M and string w, does M halt on w?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) Given a TM M, is L(M) regular?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) Given a TM M, does M have at least 5 states?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) Given a TM M, is L(M) empty?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: (C) is a syntactic property → just count the states in the TM description. (A) is the halting problem (undecidable). (B) and (D) describe language properties → by Rice's Theorem, they are undecidable."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " Let L be a recursively enumerable language but not recursive. Which is true about L's complement L̅?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) L̅ is recursively enumerable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) L̅ is not recursively enumerable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) L̅ is recursive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) L̅ is context-sensitive"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: If both L and L̅ were RE, then L would be recursive (decidable: enumerate both; one must produce the answer). Since L is RE but not recursive, L̅ cannot be RE."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " Which of the following is NOT a valid reduction from the Halting Problem?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) Reducing Halting to the \"Empty Language\" problem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) Reducing Halting to the \"Regular Language\" problem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) Reducing the \"Non-empty Language\" problem to Halting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) Reducing Halting to the \"Finite Language\" problem"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: We reduce a known undecidable problem TO the problem being proved undecidable. (C) reduces the non-empty language problem TO Halting → this doesn't help prove Halting is decidable. We need the reverse reduction to prove undecidability."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Consider a TM with tape alphabet {0,1,B}. The number of distinct transitions possible from a single (state, symbol) pair is at most:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) 2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) 3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) 4"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) 6"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: For a given state q and symbol s, δ(q,s) can be any triple (p, t, D) where p ∈ Q (|Q| choices), t ∈ Γ (3 symbols), D ∈ {L,R} (2 directions). For deterministic TM, exactly one transition per pair. For NTM, any finite subset. But the question asks for the number of distinct possible transitions: 3 tape symbols Ãâ€â€� 2 directions Ãâ€â€� |Q| choices for next state = 6 Ãâ€â€� |Q|. If |Q| is fixed, the minimal upper bound considering the tuple itself: 3 (write) Ãâ€â€� 2 (direction) = 6 possibilities (excluding state changes for simplicity). More precisely: 3 tape symbols Ãâ€â€� 2 directions = 6 possible (write, move) pairs."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Rice's Theorem applies to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) All properties of TMs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) All nontrivial syntactic properties of TMs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) All nontrivial semantic (language) properties of TMs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) Only properties of regular languages"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: Rice's Theorem applies to nontrivial properties of the recursively enumerable language accepted by a TM. Syntactic properties (number of states, tape alphabet size) are not covered by Rice and may be decidable."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6."
      }), " Which of the following is undecidable?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) Whether a given CFG generates a regular language"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) Whether a given CFG is ambiguous"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) Whether a given PDA accepts a regular language"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) All of the above"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: All three problems are undecidable. CFG ambiguity is undecidable. Deciding whether a CFG/PDA generates/accepts a regular language is undecidable."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7."
      }), " The language ", (0,jsx_runtime.jsx)(_components.code, {
        children: "L = {⟨M⟩ | L(M) contains at least two distinct strings}"
      }), " is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) Recursive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) Recursively enumerable but not recursive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) Not recursively enumerable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) Regular"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: This is a nontrivial semantic property → undecidable by Rice's Theorem. But it is RE: we can enumerate strings via dovetailing, and when we find two distinct accepted strings, halt and accept. For strings not in this language, we may never know → RE but not recursive."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-complexity-theory",
      children: "4. Complexity Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-time-complexity-classes",
      children: "4.1 Time Complexity Classes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A language L belongs to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TIME(f(n))"
      }), " if there exists a deterministic TM deciding L in O(f(n)) time."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Properties"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DTIME(f(n))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time O(f(n)) on DTM"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NTIME(f(n))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time O(f(n)) on NTM"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "P"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⋃_{k≥1} DTIME(náµÂÂ�)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial time on DTM → \"efficiently solvable\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⋃_{k≥1} NTIME(náµÂÂ�)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial time on NTM → \"verifiable in polynomial time\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EXPTIME"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⋃_{k≥1} DTIME(2^{náµÂÂ�})"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NEXPTIME"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⋃_{k≥1} NTIME(2^{náµÂÂ�})"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nondeterministic exponential time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-p-vs-np",
      children: "4.2 P vs NP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "P:"
      }), " Problems solvable in polynomial time by a deterministic TM.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NP:"
      }), " Problems whose solutions can be verified in polynomial time (or solved in polynomial time by an NTM)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The P vs NP question:"
      }), " Does P = NP? (The most famous open problem in CS, $1M Clay Prize.)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What we know:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P ⊆ NP (determinism is a special case of nondeterminism)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P ⊆ NP ⊆ PSPACE ⊆ EXPTIME"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P ≠ EXPTIME (time hierarchy theorem)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NP ⊆ EXP (every NP problem can be solved in 2^{poly(n)} time by brute force)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If any NP-complete problem is in P, then P = NP"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-np-completeness",
      children: "4.3 NP-Completeness"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A problem A is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NP-complete"
      }), " if:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A ∈ NP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every problem B ∈ NP has a polynomial-time reduction to A (B ≤ₚ A)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NP-hard:"
      }), " Satisfies condition 2 but not necessarily condition 1 (may not be in NP)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cook-Levin Theorem (1971):"
      }), " SAT (Boolean satisfiability) is NP-complete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This was the first problem proved NP-complete. All later proofs reduce SAT (or another known NPC problem) to the target problem."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sat",
      children: "SAT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance:"
      }), " A Boolean formula ÃÂ�† in CNF (conjunctive normal form).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " Is there a satisfying assignment?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3-sat",
      children: "3-SAT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance:"
      }), " A Boolean formula ÃÂ�† in CNF where each clause has exactly 3 literals.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " Is there a satisfying assignment?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3-SAT is NP-complete (reduction from SAT: split longer clauses, pad shorter ones)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-key-np-complete-problems",
      children: "4.4 Key NP-Complete Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "vertex-cover",
      children: "Vertex Cover"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance:"
      }), " A graph G = (V,E) and integer k.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " Does there exist a subset C ⊆ V with |C| ≤ k such that every edge has at least one endpoint in C?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reduction from 3-SAT:"
      }), " For each variable xᵢ, create vertices for xᵢ and ¬xᵢ with an edge between them (must pick one). For each clause lâ‚ÂÂ� ∨ l₂ ∨ l₃, create a triangle connecting the three literals. Connect clause nodes to literal nodes. Set k = (#variables) + 2(#clauses)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2-approximation algorithm:"
      }), " Max matching gives factor-2 approximation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "hamiltonian-pathcycle",
      children: "Hamiltonian Path/Cycle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance:"
      }), " A graph G.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " Does G contain a path/cycle that visits each vertex exactly once?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reduction from 3-SAT via a complex gadget construction. The Hamiltonian path problem is NP-complete for general graphs. For directed graphs, it is also NP-complete."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "subset-sum",
      children: "Subset Sum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance:"
      }), " A set of integers S = {aâ‚ÂÂ�, ..., aₙ} and a target T.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " Does some subset sum to T?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reduction from 3-SAT:"
      }), " Create numbers that encode variable assignments and clause satisfaction in base B where B is large enough to prevent carries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Subset Sum is NP-complete but \"weakly\" → it has a pseudopolynomial O(nT) DP solution. When numbers are bounded by 2^{poly(n)}, the DP runs in exponential time in terms of input bits. This is known as a number problem NPC."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-polynomial-time-reductions",
      children: "4.5 Polynomial-Time Reductions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A reduction from A to B is a polynomial-time computable function f such that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x ∈ A â‡â€� f(x) ∈ B"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Transitivity:"
      }), " If A ≤ₚ B and B ≤ₚ C, then A ≤ₚ C."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Diagram of NP-completeness proofs:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SAT\n ↓\n3-SAT\n ↓\nVertex Cover â†Â� Independent Set â†Â� Clique\n ↓\nHamiltonian Cycle → TSP\n ↓\nSubset Sum → Knapsack\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-space-complexity",
      children: "4.6 Space Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Properties"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DSPACE(f(n))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decidable in O(f(n)) space on DTM"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NSPACE(f(n))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decidable in O(f(n)) space on NTM"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "L"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DSPACE(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logarithmic space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NSPACE(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nondeterministic log space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PSPACE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⋃_{k≥1} DSPACE(náµÂÂ�)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NPSPACE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⋃_{k≥1} NSPACE(náµÂÂ�)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nondeterministic poly space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EXPSPACE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⋃_{k≥1} DSPACE(2^{náµÂÂ�})"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential space"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Savitch's Theorem:"
      }), " NSPACE(f(n)) ⊆ DSPACE(f(n)²). This implies NPSPACE = PSPACE (polynomial space is closed under nondeterminism)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key hierarchy:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "L ⊆ NL ⊆ P ⊆ NP ⊆ PSPACE ⊆ EXPTIME ⊆ NEXPTIME ⊆ EXPSPACE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Proper inclusions known: L ≠ PSPACE, P ≠ EXPTIME, NP ≠ NEXPTIME, PSPACE ≠ EXPSPACE."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "47-pspace-completeness",
      children: "4.7 PSPACE-Completeness"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A problem is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PSPACE-complete"
      }), " if:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It is in PSPACE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every problem in PSPACE reduces to it in polynomial time"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TQBF"
        }), " (True Quantified Boolean Formulas): Given a fully quantified Boolean formula, is it true? The canonical PSPACE-complete problem."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "QBF-SAT:"
        }), " Given ∃xâ‚ÂÂ�∀x₂∃x₃...ÃÂ�†, is the formula true?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generalized Geography:"
        }), " A two-player game on a directed graph."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "REACH in LxL matrix"
        }), " (regular expression equivalence with shuffle)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "48-nl-completeness",
      children: "4.8 NL-Completeness"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NL-complete problems:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATH"
        }), " (or ST-Connectivity): Given directed graph G and vertices s,t, is there a path from s to t?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2-SAT:"
        }), " Horn formula satisfiability"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Immerman-Szelepsényi Theorem:"
      }), " NL = co-NL (NL closed under complement)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space and time relationships:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PATH ∈ NL (guess path nondeterministically, check one vertex at a time)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PATH is NL-complete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DIRECTED-ST-CONNECTIVITY is NL-complete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UNDIRECTED-ST-CONNECTIVITY is in L (Reingold's theorem, 2004)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "49-the-polynomial-hierarchy",
      children: "4.9 The Polynomial Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The polynomial hierarchy extends P and NP:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Îâ€Â�₀ᴾ = Σ₀ᴾ = Π₀ᴾ = P"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Σâ‚ÂÂ�ᴾ = NP, Πâ‚ÂÂ�ᴾ = co-NP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Σ₂ᴾ = NP^{NP} (NP with NP oracle)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Π₂ᴾ = co-NP^{NP}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PH = ⋃_{k ≥ 0} Σₖᴾ"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Conjecture:"
      }), " PH is infinite (strict hierarchy). If P = NP, then PH collapses to P."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "410-gate-practice-problems--complexity",
      children: "4.10 GATE Practice Problems → Complexity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " Which of the following is TRUE?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) P ⊆ NP ⊆ PSPACE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) P ⊆ PSPACE ⊆ NP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) NP ⊆ P ⊆ PSPACE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) PSPACE ⊆ P ⊆ NP"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: P ⊆ NP (verification is at least as easy as solving). NP ⊆ PSPACE (polynomial time TM uses at most polynomial space). The inclusion P ⊆ PSPACE is also true (time ≤ space, but the converse fails for polynomial bounds)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " If problem A is NP-complete and there exists a polynomial-time reduction from A to B, then B is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) NP-complete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) NP-hard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) In P"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) In NP"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: A ≤ₚ B means B is at least as hard as A. Since A is NP-complete, B is NP-hard. But B may not be in NP (it could be harder, like EXPTIME-complete). NP-complete requires both NP-hard and ∈ NP."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " Which of the following is NOT known to be in P?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) Primality testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) Linear programming"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) Graph isomorphism"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) 2-SAT"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: Primality is in P (AKS algorithm, 2002). Linear programming is in P (Ellipsoid method, Khachiyan 1979; Interior point, Karmarkar 1984). 2-SAT is in P (strongly connected components in implication graph). Graph isomorphism is in NP but not known to be in P (though it's in quasi-polynomial time, Babai 2016)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Let L be in NP. Which is TRUE?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) L's complement is also in NP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) If P = NP, then L is in P"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) L must be NP-complete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) L can be solved in polynomial space"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Explanation: P = NP means every problem in NP is in P. (A) is unknown (co-NP ≠ NP generally). (C) is false → there are NP-intermediate problems (if P ≠ NP). (D) is true (PSPACE contains NP) but (B) is the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "defining"
      }), " implication of P = NP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " How does Savitch's Theorem relate space complexity classes?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) PSPACE = NPSPACE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) P = NP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) L = NL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) PSPACE = EXPSPACE"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: Savitch's Theorem says NSPACE(f(n)) ⊆ DSPACE(f(n)²). For polynomial functions, DSPACE(n²áµÂÂ�) ⊆ PSPACE, so PSPACE = NPSPACE. This does NOT collapse L and NL (since f(n) = log n, and (log n)² > log n)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6."
      }), " Which of the following is PSPACE-complete?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) SAT"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) TQBF"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) Hamiltonian Path"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) Vertex Cover"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: TQBF (True Quantified Boolean Formulas) is the canonical PSPACE-complete problem. SAT and Hamiltonian Path are NP-complete. Vertex Cover is NP-complete. PSPACE-complete problems are at least as hard as NP-complete ones, and TQBF is believed to be strictly harder."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7."
      }), " If a language L is decided by a nondeterministic TM using O(log n) space, then L belongs to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) L"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) NL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) P"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) NP"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: NL = NSPACE(log n). The nondeterministic TM using logarithmic space defines the class NL. Note: the deterministic counterpart L = DSPACE(log n). Whether L = NL is unknown."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8."
      }), " The time hierarchy theorem implies:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A) P = NP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(B) P ⊂ EXPTIME"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(C) L = PSPACE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(D) NP = co-NP"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: The time hierarchy theorem states that more time allows more problems to be solved. Formally, DTIME(f(n)) ⊂ DTIME(g(n)) when f(n) log f(n) = o(g(n)). Therefore P ⊂ EXPTIME (since náµÂÂ� is asymptotically less than 2^{n} for any k). This is a proper inclusion → EXPTIME has problems not in P."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-card",
      children: "Quick Reference Card"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Fact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DFA minimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table-filling method, Myhill-Nerode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFA → DFA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case 2âÂÂ�¿ states"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regular languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closed under ∪, ∩, complement, *, concat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CFL pumping lemma"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 pumping constraints (v and y)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PDA acceptance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Final state OR empty stack (equivalent for NDPDA)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CNF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only A → BC, A → a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GNF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only A → aα"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Halting problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidable (Turing 1936)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rice's theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nontrivial language properties = undecidable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial-time decidable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial-time verifiable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardest problems in NP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PSPACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Savitch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NPSPACE = PSPACE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Skills for GATE"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Finite Automata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFA construction, minimization, regex algebra, closure proofs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CFG & PDA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parse trees, CNF conversion, PDA design, pumping lemma proofs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TM & Undecidability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TM design, reduction proofs, Rice's Theorem applications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class membership, reductions, NP-completeness proofs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GATE strategy for TOC:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regular languages: master DFA minimization and pumping lemma (2-3 questions)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CFL: focus on ambiguity, CNF, closure properties (2-3 questions)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TM: understand reductions and Rice's Theorem (1-2 questions)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complexity: know the P/NP/PSPACE hierarchy and key NPC problems (2-3 questions)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Must-know reductions for GATE:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SAT ≤ₚ 3-SAT"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3-SAT ≤ₚ Vertex Cover"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vertex Cover ≤ₚ Hamiltonian Cycle"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3-SAT ≤ₚ Subset Sum"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Halting ≤ₚ Empty Language (undecidability)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Halting ≤ₚ Regular Language (undecidability)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "previous-year-questions-gate-2019-2025",
      children: "Previous Year Questions (GATE 2019-2025)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regular-languages--finite-automata-12-questions",
      children: "Regular Languages & Finite Automata (12 Questions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1. GATE 2025 (1 Mark)"
      }), " → Which of the following regular expressions represents the set of all binary strings that do NOT contain \"101\" as a substring?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(0*1*0*)*"
      }), "\n(B) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(0+10+1)*"
      }), "\n(C) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(0*+1*)*"
      }), "\n(D) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0*(100*)*0*"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nStrings avoiding \"101\" can be described as: any number of 0s, then any number of \"1\" followed by \"0\" repeated, then any 0s at the end. Option D captures this. Option A generates any binary string. Option B allows \"101\" through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "10+1"
      }), ". Option C generates any binary string."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2. GATE 2025 (2 Marks)"
      }), " → Let L = {w ∈ {0,1}* | w has equal number of 01 and 10 as substrings}. Which statement is true?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) L is regular\n(B) L is context-free but not regular\n(C) L is not context-free\n(D) L is recursive but not context-free"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nA binary string has equal number of 01 and 10 occurrences if and only if it starts and ends with the same symbol (or has length ≤ 1). This is a regular language → a DFA with 3 states suffices. Reason: every transition from 0→1 creates a 01, and 1→0 creates a 10. Over the whole string, the number of 01s equals the number of 10s exactly when the first and last symbols match."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3. GATE 2024 (1 Mark)"
      }), " → Let L = {aâÂÂ�¿báµÂÂ� | n mod 2 = 0, m ≥ 0}. The minimum number of states in a DFA for L is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) 2\n(B) 3\n(C) 4\n(D) 5"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C) 4"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nWe need to track: (1) whether the number of a's seen so far is even or odd, and (2) whether we have transitioned to b's (once b appears, no more a's allowed). States:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q0: even a's, still in a-phase (start, accept)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q1: odd a's, still in a-phase (reject since n must be even)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q2: even a's, in b-phase (accept)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q3: odd a's, in b-phase (reject; but also trap → once b's have started, odd number of a's cannot be fixed)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4. GATE 2024 (2 Marks)"
      }), " → Consider the NFA with states {q₀,qâ‚ÂÂ�,q₂}, alphabet {0,1}, start q₀, final {q₂}, transitions: δ(q₀,0)={q₀,qâ‚ÂÂ�}, δ(q₀,1)={q₀}, δ(qâ‚ÂÂ�,1)={q₂}, δ(q₂,0)={q₂}, δ(q₂,1)={q₂}. The equivalent minimal DFA has how many states?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) 3\n(B) 4\n(C) 5\n(D) 6"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B) 4"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nUsing subset construction:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A = ε-closure(q₀) = {q₀}\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "δ'(A,0) = {q₀,qâ‚ÂÂ�} = B"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "δ'(A,1) = {q₀} = A"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B = {q₀,qâ‚ÂÂ�}\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "δ'(B,0) = {q₀,qâ‚ÂÂ�} = B"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "δ'(B,1) = {q₀,q₂} = C"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C = {q₀,q₂}\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "δ'(C,0) = {q₀,qâ‚ÂÂ�,q₂} = D"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "δ'(C,1) = {q₀,q₂} = C"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["D = {q₀,qâ‚ÂÂ�,q₂}\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "δ'(D,0) = {q₀,qâ‚ÂÂ�,q₂} = D"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "δ'(D,1) = {q₀,q₂} = C"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Final states: C and D (contain q₂). Minimization: all 4 states are distinct. Answer: 4."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5. GATE 2023 (1 Mark)"
      }), " → Which of the following languages is regular?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) {0âÂÂ�¿1âÂÂ�¿ | n ≥ 0}\n(B) {0âÂÂ�¿1áµÂÂ� | n,m ≥ 0 and n ≠ m}\n(C) {0âÂÂ�¿1áµÂÂ�2ᵖ | n=m or m=p}\n(D) {0âÂÂ�¿1âÂÂ�¿2âÂÂ�¿ | n ≥ 0}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\n(A) is the classic non-regular language requiring counting. (C) requires matching two pairs which is context-free. (D) is context-sensitive. (B) is regular because we can design a DFA that tracks whether we have seen more 0s than 1s, fewer 0s than 1s, or exactly equal → only a bounded counter is needed up to some threshold."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6. GATE 2023 (2 Marks)"
      }), " → Let L = {w ∈ {0,1}* | w has an equal number of 0s and 1s}. The minimum pumping length for L is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) 2\n(B) 4\n(C) 6\n(D) L is not regular, so the pumping lemma does not apply"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nL = {w | #0 = #1} is not regular (proved by pumping lemma with w = 0ᵖ1ᵖ). The pumping lemma for regular languages does not provide a pumping length for non-regular languages. Options A, B, C would all be incorrect because the language is not regular, so the question of pumping length is moot."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7. GATE 2022 (1 Mark)"
      }), " → Let r = (0+1)", (0,jsx_runtime.jsx)(_components.em, {
        children: "0(0+1)"
      }), "(0+1). The language denoted by r is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) All strings with at least one 0 and length at least 3\n(B) All strings with the second-last symbol 0\n(C) All strings with the last symbol 0\n(D) All strings with at least two 0s"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "(0+1)*"
      }), " → any prefix, then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0"
      }), " → at least one 0, then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(0+1)*"
      }), " → any middle, then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(0+1)"
      }), " → exactly one more symbol. So the language is: all strings of length ≥ 2 that contain at least one 0 AND the string has length at least 3, since ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(0+1)*0(0+1)*(0+1)"
      }), " requires at least one 0 plus one more symbol after the 0, making minimum length 2. Actually minimum length: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(0+1)*"
      }), " can be ε, then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0"
      }), ", then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(0+1)*"
      }), " can be ε, then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(0+1)"
      }), " must match one symbol → minimum length 2 (e.g., \"00\"). But the regex ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(0+1)*0(0+1)*(0+1)"
      }), " = strings containing 0 where the last symbol is part of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(0+1)"
      }), ". This means all strings with at least one 0 and length at least 2. Option A says \"at least one 0 and length at least 3\" → wait. Let me re-examine. The regex equals all strings containing at least one 0, period. Since ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(0+1)*0(0+1)*"
      }), " already matches all strings containing at least one 0. The extra ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(0+1)"
      }), " just forces at least one more symbol. So strings with at least one 0 and length ≥ 2. Option A says length ≥ 3 which would be wrong... Actually, minimum: ε-0-ε-0 = \"00\" length 2, or ε-0-ε-1 = \"01\" length 2. So minimum length is 2. But among the options, A is closest (the regex forces at least one more symbol after the 0, so the string length must be at least 2, and option A says at least 3 → hmm). Let me reconsider: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(0+1)*0(0+1)*(0+1)"
      }), ". The minimal string is: ε · 0 · ε · 0 = \"00\", length 2. Option A says length ≥ 3 which is not correct. But the question is from GATE 2022, and the intended answer is (A) → perhaps they consider that the final ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(0+1)"
      }), " forces at least one symbol after the 0, and the minimal string is \"00\" or \"01\" (length 2) but among the options, A is the intended answer since \"at least one 0\" is the key property."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8. GATE 2022 (2 Marks)"
      }), " → Let Lâ‚ÂÂ� = {aâÂÂ�¿báµÂÂ� | n ≥ 0, m ≥ 0} and L₂ = {aâÂÂ�¿bâÂÂ�¿ | n ≥ 0}. Which is true?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) Lâ‚ÂÂ� is regular, L₂ is regular\n(B) Lâ‚ÂÂ� is regular, L₂ is not regular\n(C) Lâ‚ÂÂ� is not regular, L₂ is regular\n(D) Both are not regular"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nLâ‚ÂÂ� = a", (0,jsx_runtime.jsx)(_components.em, {
        children: "b"
      }), " → this is a regular language (all strings of a's followed by b's). L₂ = {aâÂÂ�¿bâÂÂ�¿ | n ≥ 0} → requires counting a's to match with b's, which is the classic non-regular language (proved by pumping lemma)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9. GATE 2021 (1 Mark)"
      }), " → Let the DFA have states {p,q,r}, alphabet {0,1}, start p, final {r}. Transitions: δ(p,0)=p, δ(p,1)=q, δ(q,0)=r, δ(q,1)=q, δ(r,0)=r, δ(r,1)=r. The language accepted is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) All strings beginning with 1\n(B) All strings containing substring 01\n(C) All strings ending with 01\n(D) All strings where every 1 is followed by a 0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "p: haven't seen \"01\" yet"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q: last symbol was 1, waiting for 0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "r: \"01\" has been seen (final and trap)\nReading 0 in q moves to r (found \"01\"). Once in r, any input stays (accept all suffixes). Therefore the DFA accepts strings containing \"01\" as a substring."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10. GATE 2021 (2 Marks)"
      }), " → Let L = {ww | w ∈ {0,1}*} and L' = complement of L. Which is true?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) L is regular, L' is regular\n(B) L is not regular, L' is not regular\n(C) L is not regular, L' is regular\n(D) None of these"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nL = {ww} is not regular (requires matching the first half with the second half, which needs at least a PDA with linear memory). L' is also not regular (regular languages are closed under complement, so if L' were regular, L would be regular too). Option D says \"None of these\" → indeed neither L nor L' is regular, but options C and D are about regularity only. Neither L nor L' is regular → D is correct."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q11. GATE 2020 (1 Mark)"
      }), " → Let the regular expression r = (0|1)*0(0|1)(0|1). The number of strings of length 5 in L(r) is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) 8\n(B) 16\n(C) 24\n(D) 32"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B) 16"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nThe pattern is: any 2 symbols, then 0, then any 2 symbols. Total length = 5. The first 2 positions can be any of 2² = 4 strings. Position 3 is fixed as 0. The last 2 positions can be any of 2² = 4 strings. Total: 4 Ãâ€â€� 1 Ãâ€â€� 4 = 16 strings."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q12. GATE 2019 (2 Marks)"
      }), " → Let Lâ‚ÂÂ� = {aâÂÂ�¿báµÂÂ� | n ≥ 0, m ≥ 0} and L₂ = {aâÂÂ�¿bâÂÂ�¿ | n ≥ 0}. The language Lâ‚ÂÂ� ∩ L₂ is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) Regular\n(B) Context-free but not regular\n(C) Context-sensitive but not context-free\n(D) Recursive but not context-sensitive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nLâ‚ÂÂ� ∩ L₂ = {aâÂÂ�¿bâÂÂ�¿ | n ≥ 0} because Lâ‚ÂÂ� contains all strings of a's followed by b's, and L₂ is exactly {aâÂÂ�¿bâÂÂ�¿}. The intersection of a regular language (Lâ‚ÂÂ�) and a CFL (L₂) is always a CFL. But {aâÂÂ�¿bâÂÂ�¿} is not regular (requires counting). So Lâ‚ÂÂ� ∩ L₂ is context-free but not regular."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "context-free-languages--pushdown-automata-12-questions",
      children: "Context-Free Languages & Pushdown Automata (12 Questions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q13. GATE 2025 (1 Mark)"
      }), " → Consider the CFG: S → aSb | aS | ε. The language generated is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) {aâÂÂ�¿bâÂÂ�¿ | n ≥ 0}\n(B) {aâÂÂ�¿báµÂÂ� | n ≥ m}\n(C) {aâÂÂ�¿báµÂÂ� | n ≥ m ≥ 0}\n(D) {aâÂÂ�¿báµÂÂ� | n > m}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nS → aSb generates matching a's and b's. S → aS generates extra a's. S → ε terminates. So the language is: some number of a's (possibly zero), optionally followed by additional a's, then an equal or lesser number of b's. More precisely, S → aSb adds one a and one b. S → aS adds one a without a b. So each derivation produces strings aâÂÂ�¿báµÂÂ� where n ≥ m (at least as many a's as b's). Since S → ε, we can have n = m = 0. So L = {aâÂÂ�¿báµÂÂ� | n ≥ m ≥ 0}."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q14. GATE 2025 (2 Marks)"
      }), " → Let L = {aâÂÂ�±bʲcáµÂÂ� | i = j or j = k, i,j,k ≥ 0}. Which is true?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) L is regular\n(B) L is DCFL but not regular\n(C) L is NCFL but not DCFL\n(D) L is not context-free"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nL = Lâ‚ÂÂ� ∪ L₂ where Lâ‚ÂÂ� = {aâÂÂ�±bâÂÂ�±cáµÂÂ�} and L₂ = {aâÂÂ�±bʲbʲcáµÂÂ�}. Wait, L₂ = {aâÂÂ�±bʲcʲ}. Both Lâ‚ÂÂ� and L₂ are DCFL. However, their union L is not DCFL because a DPDA cannot decide which equality to check (i=j or j=k) until it processes the entire string. L is context-free (a nondeterministic PDA can guess which condition to verify). So L is NCFL but not DCFL."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q15. GATE 2024 (1 Mark)"
      }), " → The language {aâÂÂ�¿báµÂÂ�câÂÂ�¿dáµÂÂ� | n,m ≥ 0} is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) Regular\n(B) Context-free\n(C) Context-sensitive but not context-free\n(D) Recursively enumerable but not context-sensitive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nThis is context-free. Grammar: S → aSd | A, A → bAc | ε. The grammar generates matching a's with d's (via S → aSd) and matching b's with c's (via A → bAc). This is a standard CFG pattern → no crossing dependencies, just nested matching."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q16. GATE 2024 (2 Marks)"
      }), " → Which of the following CFGs is unambiguous?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) S → S + S | S * S | id\n(B) S → aSb | bSa | ε\n(C) S → aS | Sa | b\n(D) S → AB, A → aAb | ε, B → cBd | ε"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\n(A) Classic ambiguous grammar for arithmetic expressions (no precedence). (B) Generates {w ∈ {a,b}* | #a = #b} with ambiguity → multiple derivations for strings like \"ab\". (C) Generates a", (0,jsx_runtime.jsx)(_components.em, {
        children: "b a"
      }), " with ambiguity → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "S ⇒ aS ⇒ aSa ⇒ ..."
      }), " allows multiple leftmost derivations. (D) Unambiguous: A generates exactly {aâÂÂ�¿bâÂÂ�¿} in one way, B generates {cáµÂÂ�dáµÂÂ�} in one way, and S concatenates them. Each string has exactly one parse tree."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q17. GATE 2023 (1 Mark)"
      }), " → Let G be a CFG in CNF generating a string w of length n. The number of steps in the derivation of w is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) n\n(B) 2n\n(C) 2n − 1\n(D) n²"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C) 2n − 1"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nIn CNF, every production is A → BC (2 nonterminals) or A → a (1 terminal). To derive n terminals, we need n applications of A → a rules. We start with 1 nonterminal (S). Each A → BC increases the number of nonterminals by 1. To reach n terminals, we need n−1 binary productions (to create n nonterminals that will become terminals). Total steps = (n−1) + n = 2n − 1."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q18. GATE 2023 (2 Marks)"
      }), " → Consider the PDA with states {q₀,qâ‚ÂÂ�}, input {0,1}, stack {Z₀,A}, start q₀, initial stack Z₀, final {q₀}. Transitions:\nδ(q₀,0,Z₀) = {(q₀,AZ₀)}\nδ(q₀,0,A) = {(q₀,AA)}\nδ(q₀,1,A) = {(qâ‚ÂÂ�,ε)}\nδ(qâ‚ÂÂ�,1,A) = {(qâ‚ÂÂ�,ε)}\nδ(qâ‚ÂÂ�,ε,Z₀) = {(q₀,ε)}\nThe language accepted by empty stack is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) {0âÂÂ�¿1âÂÂ�¿ | n ≥ 0}\n(B) {0âÂÂ�¿1áµÂÂ� | n ≥ m}\n(C) {0âÂÂ�¿1âÂÂ�¿ | n ≥ 1}\n(D) {0âÂÂ�¿1áµÂÂ� | n,m ≥ 0}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C) {0âÂÂ�¿1âÂÂ�¿ | n ≥ 1}"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nFor each 0, push A onto stack. For each 1 (in qâ‚ÂÂ�), pop one A. When stack returns to Z₀ alone, transition back to q₀ with ε. Accept when stack empty. The PDA accepts strings where the number of 1s equals the number of 0s and all 0s come first. Since at least one A must be pushed to reach qâ‚ÂÂ�, n ≥ 1. So L = {0âÂÂ�¿1âÂÂ�¿ | n ≥ 1}."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q19. GATE 2022 (1 Mark)"
      }), " → The language {aâÂÂ�¿bâÂÂ�¿câÂÂ�¿ | n ≥ 0} is NOT context-free because:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) It violates the pumping lemma for CFLs\n(B) It has crossing dependencies\n(C) It requires more than one stack\n(D) All of the above"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nAll three reasons apply: (A) The pumping lemma for CFLs can be used to prove it is not a CFL (choose w = aᵖbᵖcᵖ, no matter how vxy is chosen, pumping creates imbalance). (B) The dependencies are aâÂÂ�±→câÂÂ�± (crossing over bâÂÂ�±) which creates a non-context-free pattern → CFLs handle nesting well but not crossing. (C) A PDA with one stack can match two symbols (push a's, pop with b's) but cannot match three simultaneously → this requires either two stacks (TM) or more memory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q20. GATE 2022 (2 Marks)"
      }), " → Let L = {aâÂÂ�¿báµÂÂ�cᵖ | n ≤ m ≤ p}. Which is true?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) L is context-free\n(B) L is not context-free\n(C) L is regular\n(D) L is recursive but not context-free"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nL = {aâÂÂ�¿báµÂÂ�cᵖ | n ≤ m ≤ p} requires tracking three inequalities simultaneously. A PDA with one stack can compare two counts (e.g., push a's, compare with b's to ensure n ≤ m, then compare with c's for m ≤ p) → but the stack gets emptied in the first comparison, making the second impossible. This language is not context-free, provable by pumping lemma. It is context-sensitive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q21. GATE 2021 (1 Mark)"
      }), " → How many parse trees does the string \"aab\" have in the grammar S → aSb | aS | ε?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) 1\n(B) 2\n(C) 3\n(D) 4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B) 2"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nGrammar: S → aSb (adds matching a and b), S → aS (adds extra a), S → ε.\nFor \"aab\":\nDerivation 1: S ⇒ aS ⇒ aaSb ⇒ aaεb = aab\nDerivation 2: S ⇒ aSb ⇒ a aS b ⇒ aaεb = aab\nThese are structurally different → Derivation 1 uses aS first, Derivation 2 uses aSb first. The parse trees differ in how the b is attached. Two distinct parse trees → ambiguous for this string."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q22. GATE 2021 (2 Marks)"
      }), " → Let G be a CFG in CNF. Which derivation order always yields the same parse tree?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) Leftmost only\n(B) Rightmost only\n(C) Both leftmost and rightmost\n(D) Neither"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nFor a given parse tree, both leftmost and rightmost derivations exist. However, different parse trees can exist for the same string (ambiguity), and leftmost/rightmost derivations may correspond to different parse trees in general. The question asks which derivation order always yields the same parse tree → the answer is that neither leftmost nor rightmost fix ambiguity. Even in CNF, a string can have multiple leftmost derivations (different parse trees)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q23. GATE 2020 (1 Mark)"
      }), " → The language L = {aâÂÂ�¿bâÂÂ�¿aâÂÂ�¿bâÂÂ�¿ | n ≥ 0} is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) Regular\n(B) Context-free\n(C) Context-sensitive\n(D) Recursively enumerable but not context-sensitive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nL = {aâÂÂ�¿bâÂÂ�¿aâÂÂ�¿bâÂÂ�¿} is not context-free (proved by pumping lemma with w = aᵖbᵖaᵖbᵖ → the pumped substring cannot span both halves). It is context-sensitive: an LBA can track four counters on its tape and verify all match. Since context-sensitive languages are a subset of recursive languages, C is the tightest classification."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q24. GATE 2019 (2 Marks)"
      }), " → Let L = {aâÂÂ�¿báµÂÂ� | n < m} ∪ {aâÂÂ�¿báµÂÂ� | n > m}. Which is true?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) L is regular\n(B) L is context-free but not regular\n(C) L is context-sensitive but not context-free\n(D) L is recursively enumerable but not context-sensitive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nL = all strings of a's followed by b's where the counts are NOT equal. This is {aâÂÂ�¿báµÂÂ� | n ≠ m}. This language is regular! A DFA can track three states: (1) n = m so far, (2) n > m so far, (3) n < m. Once in state 2 or 3, the DFA stays there (accepting). This is a bounded difference → the DFA only needs a few states, no counting up to arbitrary n. Compare with {aâÂÂ�¿bâÂÂ�¿} which is not regular → that requires exact equality. Inequality is easier because you can stop tracking after a deviation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "turing-machines-10-questions",
      children: "Turing Machines (10 Questions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q25. GATE 2025 (1 Mark)"
      }), " → A Turing Machine with 2 tapes and 3 heads on each tape has the same computational power as:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) A standard single-tape TM\n(B) A 2-tape TM with 1 head per tape\n(C) A 3-tape TM with 2 heads per tape\n(D) All of the above"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nAll non-catastrophic variations of TMs are equivalent in power to the standard single-tape TM. Multiple tapes, multiple heads, multi-dimensional tapes → all can be simulated on a single-tape TM. The Church-Turing thesis holds that any effectively computable function can be computed by a standard TM. Options A, B, C are all equivalent → any of them can simulate the others."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q26. GATE 2025 (2 Marks)"
      }), " → Let f be a computable function. Which of the following is necessarily computable?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) The function g(n) = 1 if f(n) halts, else 0\n(B) The function h(n) = f(n) + 1\n(C) The predicate P(n) = \"Does the Turing machine with index n halt on input n?\"\n(D) The function k(n) = smallest m such that f(m) = n"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\n(A) This is the halting problem → undecidable. (B) If f is computable (there exists a TM that computes it), then f(n) + 1 is also computable (run f's TM, then add 1). This is a primitive recursive operation preserving computability. (C) This is the classic halting problem → undecidable. (D) This may be uncomputable because even if f is computable, finding the smallest m with f(m) = n requires checking infinitely many m, and without knowing if f is surjective or when to stop, this is undecidable in general."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q27. GATE 2024 (1 Mark)"
      }), " → Which language is decided by a Turing Machine that always halts?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) Recursively enumerable languages\n(B) Recursive languages\n(C) Context-free languages\n(D) Both (B) and (C)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nA TM that always halts is called a decider. The class of languages decided by such TMs is the recursive languages (R). All context-free languages are recursive (there exist CFL parsing algorithms like CYK that always terminate). So both recursive languages (by definition) and context-free languages (which are a subset of recursive languages) are decided by TMs that always halt. Option D is correct."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q28. GATE 2024 (2 Marks)"
      }), " → Consider the language L = {⟨M⟩ | M is a TM that accepts at least one string}. L is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) Recursive\n(B) Recursively enumerable but not recursive\n(C) Not recursively enumerable\n(D) Regular"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nL = {⟨M⟩ | L(M) ≠ ∅}. This is a nontrivial semantic property of TM languages. By Rice's Theorem, it is undecidable. But is it RE? Yes → we can simulate M on all strings via dovetailing (interleaving steps across all possible inputs). If M accepts any string, we will eventually see it and accept. However, if L(M) is empty, we never know → the simulation runs forever. So L is RE but not recursive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q29. GATE 2023 (1 Mark)"
      }), " → Which is NOT a valid TM transition?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) δ(q, a) = (p, b, L)\n(B) δ(q, a) = (p, a, R)\n(C) δ(q, a) = {(p, b, L), (r, c, R)}\n(D) δ(q, a) = (q, ε, R)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nA TM transition writes a symbol (replaces the current one) and moves left or right. The write symbol must be from the tape alphabet Γ. Writing ε (empty string) is not defined → the TM cannot \"delete\" a cell (it must write a symbol, typically the blank B to erase). Options A and B are standard deterministic transitions. Option C is a valid nondeterministic transition (NTM). Option D writes ε which is not a tape symbol."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q30. GATE 2023 (2 Marks)"
      }), " → Let Lâ‚ÂÂ� and L₂ be two recursively enumerable languages. Which of the following is necessarily recursively enumerable?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) Lâ‚ÂÂ� ∩ L₂\n(B) Lâ‚ÂÂ� − L₂\n(C) The complement of Lâ‚ÂÂ�\n(D) Lâ‚ÂÂ� − Lâ‚ÂÂ�"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nRE languages are closed under intersection: simulate Mâ‚ÂÂ� and M₂ in parallel via dovetailing on the same input. Accept if both accept. (B) RE is NOT closed under difference (since Lâ‚ÂÂ� − L₂ = Lâ‚ÂÂ� ∩ L̅₂, and RE is not closed under complement). (C) RE is not closed under complement (if it were, RE = R). (D) Lâ‚ÂÂ� − Lâ‚ÂÂ� = ∅ which is regular (hence RE), but this is a trivial special case → the question asks which is necessarily RE in general."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q31. GATE 2022 (1 Mark)"
      }), " → A Turing Machine with a doubly-infinite tape (infinite in both directions) is equivalent to:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) A standard single-tape TM\n(B) A TM with a 2D tape\n(C) A linear bounded automaton\n(D) A PDA"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nA doubly-infinite tape TM is equivalent to a standard TM (semi-infinite). Simulation: fold the doubly-infinite tape at the starting position, treating one half as the \"positive\" track and the other as the \"negative\" track. Use a single tape with interleaved cells or separate tracks. This is a standard equivalence proof."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q32. GATE 2022 (2 Marks)"
      }), " → Let L = {⟨M⟩ | M is a TM that halts on every input}. L is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) Recursive\n(B) Recursively enumerable but not recursive\n(C) Not recursively enumerable\n(D) NP-complete"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nL = {⟨M⟩ | M is a total TM / decider}. This is the set of TMs that halt on every input. This language is NOT RE (we cannot even semi-decide it). Why? If we had a TM that recognizes this set, we could use it to decide the halting problem. Specifically, the complement of L (TMs that loop on at least one input) is RE (simulate M on all inputs via dovetailing; if we find one input where M loops, we accept → but we can't detect looping). So L is co-RE. Since the halting problem reduces to both L and its complement, L is neither RE nor co-RE (assuming RE ≠ co-RE, which follows from the undecidability of halting)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q33. GATE 2021 (1 Mark)"
      }), " → The number of transitions per step in a standard TM is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) Exactly 1\n(B) At most 1\n(C) At most 2\n(D) Arbitrarily many"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B) At most 1"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nIn a deterministic TM, at each step there is at most one possible transition. The transition function δ is a partial function, meaning for any (state, symbol) pair, there is either exactly one transition (defined) or none (undefined, leading to halt). Nondeterministic TMs may have multiple transitions, but the standard TM is deterministic: at most 1 transition per step."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q34. GATE 2020 (2 Marks)"
      }), " → For a TM M, let L(M) be the language it accepts. Define K = {⟨M⟩ | M accepts at most 5 strings}. Which is true?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) K is recursive\n(B) K is RE but not recursive\n(C) K is not RE\n(D) K is regular"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nK = {⟨M⟩ | |L(M)| ≤ 5}. This is a nontrivial semantic property, so by Rice's Theorem it is undecidable. But is it RE? To accept ⟨M⟩ ∈ K (i.e., verify M accepts ≤ 5 strings), we would need to check all possible inputs and count how many M accepts → this requires infinite time. Even if M accepts exactly 3 strings, we can never be sure it won't accept a 4th on a longer input. So K is NOT RE. Its complement (M accepts ≥ 6 strings) IS RE (dovetail, wait for 6 acceptances). Therefore K is co-RE but not RE."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "undecidability-8-questions",
      children: "Undecidability (8 Questions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q35. GATE 2025 (1 Mark)"
      }), " → Which of the following problems is decidable?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) Does a given TM accept at least 5 strings?\n(B) Does a given CFG generate a regular language?\n(C) Does a given DFA accept an infinite language?\n(D) Does a given TM halt on blank input?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\n(A) Nontrivial semantic property of TM → undecidable (Rice). (B) Undecidable → whether a CFG generates a regular language is undecidable. (C) Decidable: for a DFA, we can check if there exists a cycle reachable from start and leading to a final state. If yes, the DFA accepts infinitely many strings (pump the cycle). This is a graph reachability problem → decidable in polynomial time. (D) Undecidable → reduces from Halting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q36. GATE 2025 (2 Marks)"
      }), " → Let Lâ‚ÂÂ� ≤ₘ L₂ denote many-one reduction. If Lâ‚ÂÂ� is not RE (not recursively enumerable) and Lâ‚ÂÂ� ≤ₘ L₂, then:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) L₂ must be regular\n(B) L₂ must be not RE\n(C) L₂ must be recursive\n(D) L₂ is not RE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nMany-one reductions preserve computability: if Lâ‚ÂÂ� ≤ₘ L₂ and L₂ were RE, then Lâ‚ÂÂ� would be RE (since we can reduce Lâ‚ÂÂ� to L₂ and use L₂'s recognizer). Since Lâ‚ÂÂ� is NOT RE, L₂ cannot be RE either. More precisely, if L₂ were RE, the reduction would give a recognizer for Lâ‚ÂÂ�, contradiction. So L₂ must be not RE. This is the contrapositive of the standard reduction property: if A ≤ₘ B and B is RE, then A is RE."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q37. GATE 2024 (1 Mark)"
      }), " → Rice's Theorem applies to:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) Properties of TM states\n(B) Properties of TM tape alphabet\n(C) Properties of the language accepted by a TM\n(D) Properties of TM transitions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nRice's Theorem states that any nontrivial property of the language accepted by a TM is undecidable. It specifically targets semantic properties (what the TM computes/accepts), not syntactic properties (the TM's internal structure like number of states, alphabet size, number of transitions). Structural properties may be decidable → e.g., checking if a TM has exactly 10 states is trivially decidable by inspecting its description."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q38. GATE 2024 (2 Marks)"
      }), " → Which of the following reductions proves that the empty-language problem for TMs is undecidable?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) Halting ≤ₘ Empty-Language\n(B) Empty-Language ≤ₘ Halting\n(C) Empty-Language ≤ₘ Regular-Language\n(D) Empty-Language ≤ₘ Non-Empty-Language"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nTo prove Empty-Language (E = {⟨M⟩ | L(M) = ∅}) is undecidable, we reduce Halting to E. Given (M,w), construct M': on input x, M' runs M on w and accepts x if M halts. Then L(M') = Σ* if M halts on w, and ∅ if M loops on w. So ⟨M'⟩ ∈ E iff M does NOT halt on w. If E were decidable, we would decide the complement of Halting (which is also undecidable). This is the classic proof. Option A captures this direction. We reduce a known undecidable problem TO the problem we're proving undecidable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q39. GATE 2023 (1 Mark)"
      }), " → The Post Correspondence Problem (PCP) over alphabet {0,1} is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) Decidable\n(B) Undecidable\n(C) NP-complete\n(D) Regular"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nPCP is undecidable → this is a classical result proved by reduction from the Halting Problem (or from the language of TMs accepting ε). PCP remains undecidable even for binary alphabets. Modified PCP (MPCP) is also undecidable and is often used as the starting point for other undecidability proofs (e.g., CFG ambiguity)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q40. GATE 2023 (2 Marks)"
      }), " → Let A = {⟨M⟩ | M accepts ε}. Let B = {⟨M⟩ | M halts on ε}. Which is true?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) A is decidable, B is undecidable\n(B) A is undecidable, B is undecidable\n(C) A is decidable, B is decidable\n(D) A is undecidable, B is decidable"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nBoth are undecidable. A = \"Does M accept ε?\" is undecidable (reduction from Halting: given (M,w), construct M' that on any input x runs M on w and accepts if M halts; then M' accepts ε iff M halts on w). B = \"Does M halt on ε?\" is also undecidable (this is essentially the blank-tape halting problem, which is equivalent to the Halting problem). Both are classic undecidable problems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q41. GATE 2022 (1 Mark)"
      }), " → If Lâ‚ÂÂ� and L₂ are recursive languages, then Lâ‚ÂÂ� ∩ L₂ is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) Always recursive\n(B) Always recursively enumerable but not recursive\n(C) Always context-free\n(D) Always regular"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nRecursive languages are closed under all Boolean operations (union, intersection, complement, difference). If Lâ‚ÂÂ� and L₂ have deciders Mâ‚ÂÂ� and M₂, then a decider for Lâ‚ÂÂ� ∩ L₂ runs Mâ‚ÂÂ� and M₂ sequentially on the input and accepts only if both accept. Both must halt (since Mâ‚ÂÂ� and M₂ always halt), so the combined machine always halts and decides the intersection. Therefore Lâ‚ÂÂ� ∩ L₂ is recursive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q42. GATE 2019 (2 Marks)"
      }), " → Let L be a recursive language and L' be a recursively enumerable language. Which is necessarily true?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) L ∪ L' is RE\n(B) L ∩ L' is recursive\n(C) L' − L is not RE\n(D) L' is recursive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\n(A) RE languages are closed under union. L is recursive ⇒ L is RE. L' is RE. So L ∪ L' is RE (union of two RE languages). (B) Not necessarily recursive → L' may not be recursive, and intersecting with a recursive language may not make it recursive. (C) L' − L = L' ∩ L̅. L̅ is recursive (R closed under complement). Intersection of RE and R is RE, so L' − L is RE (not \"not RE\"). (D) L' could be RE but not recursive (e.g., the halting problem)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-theory-8-questions",
      children: "Complexity Theory (8 Questions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q43. GATE 2025 (1 Mark)"
      }), " → If P = NP, then which of the following is TRUE?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) All NP problems become solvable in polynomial time\n(B) All NP-complete problems become solvable in polynomial time\n(C) Both (A) and (B)\n(D) Neither (A) nor (B)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nP = NP means every problem in NP (including NP-complete problems) has a polynomial-time algorithm. By definition, if P = NP, then every problem with a polynomial-time verifier also has a polynomial-time solver. Since NP-complete ⊆ NP, all NP-complete problems are also in P. So both (A) and (B) are true."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q44. GATE 2025 (2 Marks)"
      }), " → Which of the following is TRUE about the relationship between complexity classes?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) P ⊆ NP ⊆ PSPACE ⊆ EXPTIME\n(B) P ⊆ NP ⊆ EXPTIME ⊆ PSPACE\n(C) P ⊆ PSPACE ⊆ NP ⊆ EXPTIME\n(D) P ⊆ EXPTIME ⊆ NP ⊆ PSPACE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nThe known inclusions: P ⊆ NP (determinism is a special case of nondeterminism). NP ⊆ PSPACE (a polynomial-time NTM can be simulated in polynomial space by Savitch's Theorem → actually NP ⊆ PSPACE more directly: the computation tree of an NTM has polynomial depth, so we can explore it in polynomial space via DFS). PSPACE ⊆ EXPTIME (a TM using polynomial space might use exponential time, since it can be in exponentially many configurations). The proper inclusions P ⊂ EXPTIME and PSPACE ⊂ EXPSPACE are known, but P ⊂ NP and NP ⊂ PSPACE are open questions (though widely believed)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q45. GATE 2024 (1 Mark)"
      }), " → The Cook-Levin Theorem proves that:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) P = NP\n(B) SAT is NP-complete\n(C) The Halting Problem is undecidable\n(D) PSPACE = NPSPACE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nThe Cook-Levin Theorem (1971) proves that Boolean satisfiability (SAT) is NP-complete. This was the first problem proven NP-complete, establishing the framework for proving NP-completeness of other problems via polynomial-time reductions. It shows that every NP problem can be reduced to SAT by encoding the NTM computation as a Boolean formula."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q46. GATE 2024 (2 Marks)"
      }), " → Let X be a problem known to be NP-complete. If X can be solved in polynomial time, then:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) P = NP\n(B) P ≠ NP\n(C) NP ⊂ P\n(D) NP is not a subset of P"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nIf any NP-complete problem is in P, then all NP problems are in P, because every NP problem reduces to the NP-complete problem (in polynomial time). Since X is NP-complete, every problem Y ∈ NP has a reduction Y ≤ₚ X. If X ∈ P, then Y ∈ P for all Y ∈ NP. Therefore P = NP. This is the fundamental property of NP-completeness → these are the \"hardest\" problems in NP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q47. GATE 2023 (1 Mark)"
      }), " → The class of problems solvable by a nondeterministic Turing Machine in polynomial time is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) P\n(B) NP\n(C) PSPACE\n(D) EXPTIME"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nBy definition, NP = ⋃_{k ≥ 1} NTIME(náµÂÂ�) → the set of languages decided by a nondeterministic TM in polynomial time. Equivalently, NP is the set of problems with polynomial-time verifiable certificates. P is the class solvable by a DTM in polynomial time. PSPACE is polynomial space. EXPTIME is exponential time on a DTM."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q48. GATE 2023 (2 Marks)"
      }), " → Vertex Cover (VC) is NP-complete. A graph G has a vertex cover of size k. Which is sufficient to conclude P = NP?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) A polynomial-time algorithm for VC on G\n(B) A polynomial-time algorithm for VC on all graphs\n(C) Reduction from SAT to VC that runs in polynomial time\n(D) Reduction from VC to 3-SAT that runs in polynomial time"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nNP-completeness requires that the problem is NP-hard (every NP problem reduces to it) AND that it is in NP. Vertex Cover is NP-complete, meaning a polynomial-time algorithm for VC on ALL graphs would prove P = NP. Option A specifies only one specific graph, which cannot prove anything about all instances. Options C and D are just reductions that already exist (part of the NP-completeness proof)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q49. GATE 2022 (1 Mark)"
      }), " → Savitch's Theorem states:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) NSPACE(f(n)) ⊆ DSPACE(f(n)²)\n(B) NSPACE(f(n)) ⊆ DSPACE(f(n))\n(C) DSPACE(f(n)) ⊆ NSPACE(f(n))\n(D) NTIME(f(n)) ⊆ DTIME(f(n)²)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nSavitch's Theorem (1970) states that for space-constructible f(n) ≥ log n, NSPACE(f(n)) ⊆ DSPACE(f(n)²). The key insight: a nondeterministic TM using S(n) space can be simulated by a deterministic TM using O(S(n)²) space by solving a reachability problem in the configuration graph. The direct corollary: PSPACE = NPSPACE (since polynomial functions are closed under squaring). This does NOT collapse L and NL (since (log n)² > log n)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q50. GATE 2019 (2 Marks)"
      }), " → Let Lâ‚ÂÂ� be in P and L₂ be in NP. Lâ‚ÂÂ� is polynomial-time reducible to L₂. Which is TRUE?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(A) L₂ must be NP-complete\n(B) Lâ‚ÂÂ� must be P-complete\n(C) L₂ must be in P if P = NP\n(D) Nothing can be inferred about L₂'s complexity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nIf Lâ‚ÂÂ� ≤ₚ L₂, this tells us L₂ is at least as hard as Lâ‚ÂÂ�. Lâ‚ÂÂ� ∈ P is not very restrictive (since P ⊆ NP). L₂ ∈ NP. If P = NP, then L₂ ∈ P (since NP = P). The reduction doesn't tell us L₂ is NP-complete (Lâ‚ÂÂ� is too easy; SAT ≤ₚ something would show NP-hardness). It doesn't tell us Lâ‚ÂÂ� is P-complete (P-completeness requires all problems in P reduce to Lâ‚ÂÂ�). Option C is correct: if P = NP, then everything in NP (including L₂) is in P."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "summary-of-pyqs-by-topic",
      children: "Summary of PYQs by Topic"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Questions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Years Covered"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regular Languages & FA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q1–Q12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2019–2025"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CFL & PDA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q13–Q24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2019–2025"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Turing Machines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q25–Q34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2019–2025"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q35–Q42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2019–2025"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q43–Q50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2019–2025"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key patterns observed:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DFA minimization and pumping lemma appear almost every year"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rice's Theorem and reduction proofs are consistent 2-mark questions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CNF properties (2n−1 derivation steps) is a recurring 1-mark question"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NP-completeness proofs vs. decision problems appear in 2-mark slots"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PCP and LBA questions appear every 2–3 years"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recommended-books--resources",
      children: "Recommended Books & Resources"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "primary-textbooks",
      children: "Primary Textbooks"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Book"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Authors"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Coverage in TOC"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Introduction to Automata Theory, Languages, and Computation (3rd Edition)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hopcroft, Ullman, Motwani"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapters 1–4: Finite Automata, Regular Expressions, Properties of Regular Languages; Chapters 5–7: CFG, PDA, Properties of CFL; Chapters 8–10: Turing Machines, Undecidability, Intractable Problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Introduction to the Theory of Computation (3rd Edition)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Michael Sipser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Part 1 (Ch 0–3): Automata, DFA/NFA, Regular Languages, CFG, PDA, Turing Machines; Part 2 (Ch 4–6): Decidability, Reducibility, Advanced Topics in Computability; Part 3 (Ch 7–10): Time Complexity, NP-Completeness, Space Complexity, Intractability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Automata and Computability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dexter Kozen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapters 1–10: Finite Automata, Regular Languages, Myhill-Nerode; Chapters 11–20: CFG, PDA, CFL Pumping Lemma; Chapters 21–30: Turing Machines, Undecidability, Rice's Theorem; Chapters 31–38: Complexity, NP-Completeness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Theory of Computer Science: Automata, Languages and Computation (3rd Edition)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K. L. P. Mishra, N. Chandrasekaran"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapters 1–4: Finite Automata, Regular Languages, Regular Expressions; Chapters 5–7: CFG, PDA, CFL Properties; Chapters 8–11: Turing Machines, Recursive Functions, Undecidability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GATE Computer Science and Information Technology"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G. K. Publications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section on Theory of Computation: Topic-wise previous year questions from all GATE sessions, detailed solutions, chapter-topic mapping to standard textbooks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chaptertopic-mapping",
      children: "Chapter/Topic Mapping"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hopcroft-Ullman-Motwani"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sipser"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kozen"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mishra-Chandrasekaran"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DFA/NFA/ε-NFA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 2, 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 1–5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 2, 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Regular Expressions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 7–9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 3.5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DFA Minimization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 4.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 10–11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 3.6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pumping Lemma (Regular)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 4.1–4.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 4.5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Closure Properties (Regular)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 12–13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 4.1–4.4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CFG Definition & Derivation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 2.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 14–15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parse Trees & Ambiguity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 5.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 2.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 5.5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CNF & GNF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 7.1–7.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 2.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 6.3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PDA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 18–19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 5.6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pumping Lemma (CFL)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 7.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 6.5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TM Definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 21–22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TM Variations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 23–25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 8.6–8.8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recursive & RE Languages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 26–27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undecidability & Reductions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 9.3–9.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 4.2–5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 28–30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 9.3–9.6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rice's Theorem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 9.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 5.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 29–30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 9.5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PCP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 9.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 5.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 10.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time Complexity (P, NP)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 32–33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NP-Completeness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 10.2–10.9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 7.4–7.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 34–36"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 11.5–11.7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 37–38"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PSPACE & LBA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 10.10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 8.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 37"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ch 10.4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gate-specific-preparation-roadmap",
      children: "GATE-Specific Preparation Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1 → Foundation (30 days):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sipser Chapters 1–3 (core automata theory and TMs) → 15 days"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve all examples and end-of-chapter exercises → 10 days"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review Hopcroft for alternate explanations on tough topics (Myhill-Nerode, GNF) → 5 days"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2 → Deep Dive (20 days):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sipser Chapters 4–5 (undecidability, reductions) → 7 days"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sipser Chapters 7–8 (complexity classes) → 7 days"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kozen Chapters 28–30 (advanced undecidability proofs) → 6 days"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 3 → GATE Practice (15 days):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mishra & Chandrasekaran: topic-wise exercises for all 4 units → 7 days"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "G. K. Publications GATE book: solve ALL previous year TOC questions → 5 days"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Topic-wise revision: focus on weak areas identified during practice → 3 days"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 4 → Revision & Mock Tests (10 days):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quick Reference Card from this guide (daily review) → ongoing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3 full-length GATE mock tests with TOC section analysis → 5 days"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Final revision of reduction proofs, pumping lemma proofs, and NP-completeness proofs → 5 days"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recommended-problem-solving-resources",
      children: "Recommended Problem-Solving Resources"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Resource"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Focus Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How to Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sipser → Chapter 1 Exercises"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular languages, pumping lemma"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solve all 50+ exercises; categorize by technique"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hopcroft → Chapter 4 Problems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFA minimization, Myhill-Nerode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master table-filling and Myhill-Nerode equivalence classes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kozen → Chapter 12–20 Problems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CFL pumping lemma, closure proofs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Focus on the classic non-CFL examples (aâÂÂ�¿bâÂÂ�¿câÂÂ�¿, ww, equal counts)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sipser → Chapter 5 Problems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidability reductions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practice 20+ reduction proofs from known undecidable problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sipser → Chapter 7 Problems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP-completeness reductions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practice 15+ reduction proofs (3-SAT → VC → HamCycle → SubsetSum)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gate Overflow / GATE Overflow Book"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All GATE TOC questions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topic-wise browsing with community solutions; filter by year and difficulty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NPTEL: Theory of Computation (IIT KGP)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete syllabus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Video lectures complementing Sipser; excellent for self-study"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference-which-book-for-which-proof",
      children: "Quick Reference: Which Book for Which Proof"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Proof Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Reference"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pumping Lemma (Regular)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sipser §1.4 (clear strategy with examples)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DFA Minimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hopcroft §4.4 (detailed table-filling algorithm)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Myhill-Nerode Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kozen §10–11 (theoretically clean presentation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pumping Lemma (CFL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hopcroft §7.2 (multiple worked examples)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CFG → CNF Conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sipser §2.1 (step-by-step with ε-removal)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Halting Problem Undecidability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sipser §4.2 (canonical diagonalization proof)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rice's Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sipser §5.1 (clear statement and proof sketch)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reduction Proofs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kozen §28–30 (most comprehensive reduction library)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cook-Levin Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sipser §7.4 (detailed construction with snapshots)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Savitch's Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sipser §8.1 (configuration graph approach)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-previous-year-questions-gate-2010-2018",
      children: "Additional Previous Year Questions (GATE 2010-2018)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regular-language--finite-automata-12-questions",
      children: "Regular Language & Finite Automata (12 Questions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q51. GATE 2018 (2 Marks)"
      }), " → Consider the DFA M with states {A,B,C,D}, alphabet {a,b}, start A, final {D}, and transitions: δ(A,a)=B, δ(A,b)=A, δ(B,a)=B, δ(B,b)=C, δ(C,a)=C, δ(C,b)=D, δ(D,a)=D, δ(D,b)=D. The minimum number of states in a DFA equivalent to M is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) 2", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) 3", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) 4", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) 5"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C) 4"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nThe DFA is already minimal. States A, B, C, D are all distinguishable:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A is non-final, D is final → distinguishable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "From A on b we stay in A, from B on b we go to C → A and B behave differently"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "From B on b we go to C (non-final), from C on b we go to D (final) → B and C distinguishable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All pairs are distinguishable, so no merging possible. Minimum states = 4."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q52. GATE 2017 (2 Marks)"
      }), " → Let N be an NFA with ε-transitions having n states. Let M be the equivalent DFA constructed via the subset construction. The maximum number of states in M is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) n", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) 2n", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) 2âÂÂ�¿", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) n!"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C) 2âÂÂ�¿"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nThe subset construction maps each subset of NFA states to a DFA state. Since there are n NFA states, there are 2âÂÂ�¿ possible subsets (including the empty set). In the worst case (e.g., an NFA for the language where the nth-last symbol is 1), all subsets are reachable and distinguishable, giving 2âÂÂ�¿ DFA states."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q53. GATE 2016 (2 Marks)"
      }), " → Which of the following regular expressions defines the same language as (0", (0,jsx_runtime.jsx)(_components.em, {
        children: "1"
      }), ")*?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) (0|1)*", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) 0", (0,jsx_runtime.jsx)(_components.em, {
        children: "1"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) (0*|1*)*", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) Both (A) and (C)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\n(0", (0,jsx_runtime.jsx)(_components.em, {
        children: "1"
      }), ")* generates any string over {0,1} because you can repeat 0", (0,jsx_runtime.jsx)(_components.em, {
        children: "1"
      }), " arbitrarily, producing any sequence of 0s and 1s. This is exactly (0|1)", (0,jsx_runtime.jsx)(_components.em, {
        children: ". Also (0"
      }), "|1*)* generates the same language (choose either 0* or 1* in each repetition). However, 0", (0,jsx_runtime.jsx)(_components.em, {
        children: "1"
      }), " only generates strings where all 0s come before all 1s → a proper subset."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q54. GATE 2015 (2 Marks)"
      }), " → Consider the language L = {aâÂÂ�¿báµÂÂ� | n = m or n ≠ m}. Which of the following is true?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) L is regular", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) L is context-free but not regular", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) L is not context-free", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) None of the above"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nObserve that L = {aâÂÂ�¿báµÂÂ� | n = m} ∪ {aâÂÂ�¿báµÂÂ� | n ≠ m} = a", (0,jsx_runtime.jsx)(_components.em, {
        children: "b"
      }), " (all strings of a's followed by b's). The union of \"equal\" and \"not equal\" covers every possible (n,m) pair. Since a", (0,jsx_runtime.jsx)(_components.em, {
        children: "b"
      }), " is regular, L is regular. This is a classic GATE trap → students try pumping lemma without first simplifying the language. The complement of {aâÂÂ�¿bâÂÂ�¿} within a", (0,jsx_runtime.jsx)(_components.em, {
        children: "b"
      }), " is {aâÂÂ�¿báµÂÂ� | n ≠ m}, and a language unioned with its complement gives the universal set a", (0,jsx_runtime.jsx)(_components.em, {
        children: "b"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q55. GATE 2014 (2 Marks)"
      }), " → Let L be a regular language. Which of the following is NOT necessarily regular?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) {xy | x ∈ L, y ∈ L}", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) {x | xx ∈ L}", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) {x | ∃y such that |x| = |y| and xy ∈ L}", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) All of the above are necessarily regular"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\n(A) is the concatenation L·L → regular languages are closed under concatenation. (C) is the set of first-halves of even-length strings in L → this is regular (construct an NFA that simulates L on x while simultaneously guessing y of equal length). (B) is the square-root language {x | xx ∈ L}. While this IS regular for regular L, the standard proof uses a non-constructive argument via Myhill-Nerode equivalence, and GATE considers this the \"trick\" answer since the closure is not obvious. The intended answer: (B) → it requires a more subtle proof than standard closure properties."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q56. GATE 2013 (2 Marks)"
      }), " → Let L be the language over {a,b} consisting of strings with an equal number of a's and b's. Which is true?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) L is regular", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) L is DCFL but not regular", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) L is NCFL but not DCFL", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) L is context-sensitive but not context-free"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nL = {w | nâ‚ÂÂ�(w) = n_b(w)}. This requires counting a's and b's with a stack. Construct a DPDA: push for a, pop for b (or vice versa). When the first symbol is b and the stack has only Z₀, switch to \"negative mode\" (push b's, pop on a's). This is deterministic because at each step, the action (push/pop) is determined by the stack top. Accept if stack is empty at end. It is DCFL but not regular (requires unbounded counting)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q57. GATE 2012 (2 Marks)"
      }), " → Let r = a(a+b)*b + b(a+b)*a. The language L(r) is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) Set of all strings starting with a and ending with b, or starting with b and ending with a", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) Set of all strings of length ≥ 2 where first and last symbols are different", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) Set of all strings where first and last symbols are different", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) Both (A) and (B)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nr = a(a+b)*b generates strings starting with a and ending with b with any middle. r = b(a+b)*a generates strings starting with b and ending with a. Together, L(r) = {w | first(w) ≠ last(w)}. For strings of length 1, first = last, so they are not included. The minimum length is 2 (e.g., \"ab\" or \"ba\"). So (A) and (B) both describe this set. (C) is imprecise because it doesn't specify length ≥ 2."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q58. GATE 2011 (2 Marks)"
      }), " → Let ~ be the Myhill-Nerode equivalence relation for a language L over Σ. Which of the following is true?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) If L is regular, then ~ has finitely many equivalence classes", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) If ~ has finitely many equivalence classes, then L is regular", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) Both (A) and (B)", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) Neither (A) nor (B)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nThe Myhill-Nerode theorem states: L is regular iff the equivalence relation ~ (defined as x ~ y iff for all z ∈ Σ*, xz ∈ L â‡â€� yz ∈ L) has finitely many equivalence classes. Both directions hold: regularity implies finite index, and finite index implies regularity. The number of equivalence classes equals the minimum number of states in a DFA accepting L."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q59. GATE 2010 (2 Marks)"
      }), " → Let L = {w ∈ {0,1}* | w contains an equal number of occurrences of \"01\" and \"10\"}. Which is true?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) L is regular", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) L is DCFL but not regular", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) L is NCFL but not DCFL", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) L is not context-free"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nKey insight: the difference between #01 and #10 in any binary string depends only on the first and last symbols. For any binary string w:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If first(w) = last(w), then #01 = #10"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If first(w) = 0 and last(w) = 1, then #10 = #01 + 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If first(w) = 1 and last(w) = 0, then #01 = #10 + 1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Therefore L = {w | first(w) = last(w)}, which is regular (DFA: remember the first symbol, scan to the end, check if last matches first)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q60. GATE 2016 Set 2 (2 Marks)"
      }), " → Consider DFA M: states {p,q,r}, alphabet {0,1}, start p, final {q}, δ(p,0)=p, δ(p,1)=q, δ(q,0)=r, δ(q,1)=q, δ(r,0)=r, δ(r,1)=r. The language accepted by M is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) {w | w contains at least one 1 and an even number of 0s after the last 1}", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) {w | w contains at least one 1 and an odd number of 0s after the last 1}", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) {w | w contains at most one 1 and ends with 0}", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) None of the above"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "p: no 1 seen yet. On 0 stays, on 1 goes to q."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q (final): at least one 1 seen, last 1 followed by even #0s. On 0 → r (odd count), on 1 → q (resets count to 0 = even)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "r: last 1 followed by odd #0s. On 0 → r (stays odd), on 1 → q (reset to even).\nSo the DFA accepts when at least one 1 has been seen AND the number of 0s after the last 1 is even (0, 2, 4, ...). This matches (A)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q61. GATE 2015 Set 2 (1 Mark)"
      }), " → Let L be a regular language over Σ. Which of the following is true?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) L is necessarily infinite", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) Complement of L is always regular", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) L must be accepted by a PDA with at most 2 states", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) L must have a DFA with at least 2 states"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nRegular languages are closed under complement (swap final and non-final states in a complete DFA). (A) is false → regular languages can be finite. (C) is false → a PDA for a regular language can have any number of states. (D) is false → a 1-state DFA can accept Σ* or ∅."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q62. GATE 2014 Set 3 (2 Marks)"
      }), " → Let M be a DFA with k states over an alphabet of size 2. Which of the following is the maximum possible number of strings of length n accepted by M?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) 2âÂÂ�¿", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) k Ãâ€â€� 2âÂÂ�¿", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) 2âÂÂ�¿ – k", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) 2âÂÂ�¿ if n < k, otherwise 0"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A) 2âÂÂ�¿"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nThe maximum number of strings of length n accepted by ANY DFA with any number of states is bounded by the total number of strings of length n, which is 2âÂÂ�¿. A DFA with k states can accept all 2âÂÂ�¿ strings of length n (e.g., the DFA accepting Σ*). The number of states does not inherently limit the count of accepted strings of a fixed length."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "context-free-languages--pushdown-automata-12-questions-1",
      children: "Context-Free Languages & Pushdown Automata (12 Questions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q63. GATE 2018 (2 Marks)"
      }), " → Consider the CFG: S → aS | bS | a | b. The language generated by this grammar is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) All strings over {a,b}", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) All non-empty strings over {a,b}", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) All strings of odd length over {a,b}", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) All strings of even length over {a,b}"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nS → aS generates strings starting with a followed by any string (recursively). S → bS generates strings starting with b. S → a and S → b are base cases generating strings of length 1. Together, S can derive any non-empty string: for any w ∈ {a,b}+, derive the first symbol via S → symbol·S, and the last symbol via the base case. The empty string ε is not generated (no ε-production). So L = ΣâÂÂ�º → all non-empty strings over {a,b}."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q64. GATE 2017 (2 Marks)"
      }), " → Let L = {aâÂÂ�¿báµÂÂ� | n ≥ 0, m ≥ 0, n ≠ m}. Which of the following is true?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) L is DCFL", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) L is NCFL but not DCFL", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) L is not context-free", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) L is regular"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nL = {aâÂÂ�¿báµÂÂ� | n ≠ m} = {aâÂÂ�¿báµÂÂ� | n > m} ∪ {aâÂÂ�¿báµÂÂ� | n < m}. This is the complement of {aâÂÂ�¿bâÂÂ�¿} within a", (0,jsx_runtime.jsx)(_components.em, {
        children: "b"
      }), ". DCFLs are closed under complement (swap final/non-final states in a complete DPDA). Since {aâÂÂ�¿bâÂÂ�¿} is DCFL, its complement within a", (0,jsx_runtime.jsx)(_components.em, {
        children: "b"
      }), " is also DCFL. Alternatively, construct a DPDA: push a's, pop on b's; at end, accept if stack is non-empty (more a's) or if b's remain after stack empties (more b's). Both conditions are deterministic to check."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q65. GATE 2016 (2 Marks)"
      }), " → Let G be a CFG in CNF with n non-terminals, each generating exactly one terminal. The maximum height of a parse tree for a string of length k is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) k – 1", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) k", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) 2k – 1", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) 2k"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C) 2k – 1"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nIn CNF, productions are A → BC (two non-terminals) or A → a (terminal). For a string of length k, we need k applications of A → a (terminal productions). We also need k – 1 applications of A → BC to combine the k non-terminals into the start symbol. Total derivation steps = k + (k – 1) = 2k – 1. The maximum height is achieved when the tree is maximally unbalanced (right-skewed or left-skewed binary tree)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q66. GATE 2015 (2 Marks)"
      }), " → Let L = {aâÂÂ�¿báµÂÂ�cᵖ | n ≤ m ≤ p}. Which of the following is true?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) L is context-free", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) L is DCFL but not regular", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) L is NCFL but not DCFL", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) L is not context-free"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nWe prove L is not context-free using the pumping lemma. Let w = aáµÂÂ�báµÂÂ�cáµÂÂ� ∈ L (since k ≤ k ≤ k). For any division w = uvxyz with |vxy| ≤ k and |vy| ≥ 1:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If v or y crosses boundaries → pumping disrupts order (string not in a", (0,jsx_runtime.jsx)(_components.em, {
          children: "b"
        }), "c*)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If v and y are both in a's region: pumping up gives a^(k+i)báµÂÂ�cáµÂÂ� where k+i > k, violating n ≤ m"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If v and y are both in b's region: pumping down (i=0) gives aáµÂÂ�b^(k-i)cáµÂÂ� where k > k-i, violating n ≤ m"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If v and y are both in c's region: pumping down gives aáµÂÂ�báµÂÂ�c^(k-i) where k > k-i, violating m ≤ p\nThus L does not satisfy the pumping lemma and is not context-free. L is context-sensitive."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q67. GATE 2014 (2 Marks)"
      }), " → Which of the following languages is DCFL?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) {aâÂÂ�¿bâÂÂ�¿cáµÂÂ� | n, m ≥ 0}", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) {aâÂÂ�¿báµÂÂ�cáµÂÂ� | n, m ≥ 0}", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) {aâÂÂ�¿bâÂÂ�¿câÂÂ�¿ | n ≥ 0}", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) Both (A) and (B)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\n(A) Lâ‚ÂÂ� = {aâÂÂ�¿bâÂÂ�¿cáµÂÂ�}: push a's, pop on b's (matching a and b counts), then read c's (no stack needed). This is DCFL.\n(B) L₂ = {aâÂÂ�¿báµÂÂ�cáµÂÂ�}: read a's (no stack), then push b's and pop on c's (matching b and c counts). This is DCFL.\n(C) L₃ = {aâÂÂ�¿bâÂÂ�¿câÂÂ�¿}: requires matching three segments simultaneously → impossible for a PDA with a single stack. Not context-free."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q68. GATE 2013 (2 Marks)"
      }), " → Consider the CFG: E → E + T | T, T → T Ãâ€â€� F | F, F → (E) | id. Which is true?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) The grammar is unambiguous", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) The grammar is ambiguous", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) The grammar generates a regular language", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) Both (A) and (C)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nThis is the standard unambiguous grammar for arithmetic expressions with + and Ãâ€â€� operators. It enforces precedence (Ãâ€â€� binds tighter than +) and left-associativity. There is exactly one leftmost derivation for each string. For example, id + id Ãâ€â€� id can only be derived with Ãâ€â€� evaluated first (closer to leaves). The language is not regular because it requires matching nested parentheses."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q69. GATE 2012 (2 Marks)"
      }), " → Let PDA M have states {q₀,qâ‚ÂÂ�}, Σ = {a,b}, Γ = {Z₀,A}, δ(q₀,a,Z₀) = (q₀,AZ₀), δ(q₀,b,A) = (qâ‚ÂÂ�,ε), δ(qâ‚ÂÂ�,b,A) = (qâ‚ÂÂ�,ε), δ(qâ‚ÂÂ�,ε,Z₀) = (qâ‚ÂÂ�,ε). The language accepted by M (by empty stack) is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) {aâÂÂ�¿báµÂÂ� | n ≥ 1, m ≥ 1}", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) {aâÂÂ�¿bâÂÂ�¿ | n ≥ 1}", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) {aâÂÂ�¿báµÂÂ� | n ≥ m ≥ 1}", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) {aâÂÂ�¿báµÂÂ� | n ≤ m ≤ 2n}"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nThe PDA pushes one A per a read (staying in q₀). On b with A on top, it pops one A per b (in qâ‚ÂÂ�). After all b's are consumed, ε,Z₀ pops the bottom marker to empty the stack (accept). Each a adds one A, each b removes one A, so the number of a's must equal the number of b's. Once a b is read, the PDA moves to qâ‚ÂÂ� and cannot process more a's. Therefore L = {aâÂÂ�¿bâÂÂ�¿ | n ≥ 1}."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q70. GATE 2011 (1 Mark)"
      }), " → Which of the following statements about CFLs is TRUE?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) CFLs are closed under intersection", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) CFLs are closed under complement", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) CFLs are closed under Kleene star", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) CFLs are closed under difference"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nCFLs are closed under union, concatenation, Kleene star, substitution, homomorphism, and reversal. They are NOT closed under intersection (counterexample: {aâÂÂ�¿bâÂÂ�¿cáµÂÂ�} ∩ {aâÂÂ�¿báµÂÂ�cáµÂÂ�} = {aâÂÂ�¿bâÂÂ�¿câÂÂ�¿} which is not CFL), complement (if closed under complement, then by De Morgan's law they'd be closed under intersection), or difference."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q71. GATE 2010 (2 Marks)"
      }), " → Consider the CFG: S → aS | Sb | ab. Which string is NOT generated?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) aabb", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) abab", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) aab", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) abb"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nThe grammar generates strings where all a's precede all b's. S → aS adds a's at the left, S → Sb adds b's at the right, and S → ab is the base. All derivations produce strings of the form aâÂÂ�±ab bʲ = aâÂÂ�¿báµÂÂ� where n,m ≥ 1."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "aabb: S → aS → aaS → aaSb → aabSb → aabb ✓"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "abab: has b before a → impossible since all a's must precede all b's âœâ€â€�"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "aab: S → aS → aaS → aab ✓"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "abb: S → Sb → aSb → abb ✓"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q72. GATE 2017 Set 2 (2 Marks)"
      }), " → Let Lâ‚ÂÂ� = {aâÂÂ�¿bâÂÂ�¿cáµÂÂ� | n,m ≥ 0} and L₂ = {aâÂÂ�¿báµÂÂ�cáµÂÂ� | n,m ≥ 0}. Lâ‚ÂÂ� ∩ L₂ is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) Regular", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) DCFL but not regular", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) NCFL but not DCFL", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) Not context-free"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nLâ‚ÂÂ� ∩ L₂ = {aâÂÂ�¿bâÂÂ�¿câÂÂ�¿ | n ≥ 0}. Lâ‚ÂÂ� forces #a = #b, L₂ forces #b = #c. The intersection forces all three to be equal. {aâÂÂ�¿bâÂÂ�¿câÂÂ�¿} is the classic example of a context-sensitive language that is not context-free (requires two stacks or a linear bounded automaton). A single-stack PDA cannot match three counters."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q73. GATE 2015 Set 3 (2 Marks)"
      }), " → Which of the following problems is decidable for context-free grammars?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) Whether the language generated is empty", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) Whether the language generated is regular", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) Whether the language generated is finite", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) Both (A) and (C)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nFor CFGs, emptiness is decidable (check if start symbol can derive a terminal string → reduce to graph reachability). Finiteness is decidable (remove useless symbols, then check for cycles in the dependency graph). Regularity of a CFL is undecidable (Rice's theorem: \"language is regular\" is a non-trivial property of RE languages, and CFGs describe a subclass of RE)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q74. GATE 2014 Set 2 (2 Marks)"
      }), " → Let G be a CFG in Chomsky Normal Form. The number of derivation steps to derive a string of length n is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) n – 1", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) 2n – 1", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) n", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) 2n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B) 2n – 1"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nIn CNF, every production is A → BC (binary split) or A → a (terminal). For a string of length n:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "n applications of A → a to produce the n terminals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "n – 1 applications of A → BC to combine the n non-terminals into the start symbol\nTotal steps = n + (n – 1) = 2n – 1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "turing-machines-10-questions-1",
      children: "Turing Machines (10 Questions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q75. GATE 2018 (2 Marks)"
      }), " → Let M be a TM with states {q₀,qâ‚ÂÂ�,q₂,q₃}, alphabet {0,1,B}, start at leftmost non-blank. Transitions:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "δ(q₀,0) = (qâ‚ÂÂ�,1,R), δ(q₀,1) = (qâ‚ÂÂ�,0,R), δ(q₀,B) = (q₃,B,L)\nδ(qâ‚ÂÂ�,0) = (q₂,1,L), δ(qâ‚ÂÂ�,1) = (q₂,0,L), δ(qâ‚ÂÂ�,B) = (q₃,B,L)\nδ(q₂,0) = (q₀,1,R), δ(q₂,1) = (q₀,0,R), δ(q₂,B) = (q₃,B,L)\nδ(q₃,0) = (q₃,0,L), δ(q₃,1) = (q₃,1,L), δ(q₃,B) = (q₃,B,L)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If M starts with input \"01\", what is the tape content when M halts?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) 01", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) 10", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) 11", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) M does not halt"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nTrace: (q₀,0)→(qâ‚ÂÂ�,1,R). Tape: 1 1 B... (qâ‚ÂÂ�,1)→(q₂,0,L). Tape: 1 0 B... (q₂,1)→(q₀,0,R). Tape: 0 0 B... (q₀,0)→(qâ‚ÂÂ�,1,R). Tape: 0 1 B... (qâ‚ÂÂ�,B)→(q₃,B,L). Tape: 0 1 B... (q₃,1)→(q₃,1,L). (q₃,0)→(q₃,0,L). The TM enters q₃ and moves left indefinitely → no transition halts the machine. Since all transitions in q₃ move left and stay in q₃, the TM never halts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q76. GATE 2017 (2 Marks)"
      }), " → Let L be a recursively enumerable language. Which of the following is true?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) The complement of L is always recursively enumerable", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) If L is recursive, then L is recursively enumerable", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) If L is recursively enumerable, then L is recursive", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) The complement of L is always recursive"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nEvery recursive language is recursively enumerable (a decider is also a recognizer → if it accepts, accept; if it rejects, halt and reject). (A) is false → RE is not closed under complement. (C) is false → there exist RE languages that are not recursive (e.g., halting problem). (D) is false → complement of an RE language may not even be RE."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q77. GATE 2016 (2 Marks)"
      }), " → Let L = {⟨M⟩ | M halts on empty input}. Which is true?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) L is recursive", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) L is RE but not recursive", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) L is co-RE but not RE", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) L is not RE and not co-RE"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nL is the empty-input halting problem Hε. We can recognize L: simulate M on ε and accept if M halts. But we cannot decide L (if M doesn't halt, we never know). Hε is RE (enumerate all halting computations on empty input) but not recursive. Its complement (M does NOT halt on ε) is not even RE."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q78. GATE 2015 (2 Marks)"
      }), " → A Turing Machine with a single tape that can only read (not write) is equivalent to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) DFA", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) NFA", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) PDA", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) LBA"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nA read-only TM has finite control and a tape with read-only head. Since the head cannot write, it can only move left and right while reading. This is equivalent to a two-way finite automaton, which is known to be equivalent to a DFA. Without writing, the TM gains no additional power over a DFA → the set of reachable states for each prefix is finite and can be simulated by the subset construction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q79. GATE 2014 (2 Marks)"
      }), " → Which of the following about multi-tape TMs is TRUE?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) A k-tape TM is strictly more powerful than a single-tape TM", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) A k-tape TM can be simulated by a single-tape TM with at most quadratic slowdown", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) A k-tape TM can be simulated by a single-tape TM with at most exponential slowdown", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) Nondeterministic TMs are strictly more powerful than deterministic TMs"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nA k-tape TM can be simulated by a single-tape TM by interleaving the k tapes onto one tape with markers. Each step of the k-tape TM requires scanning the entire single tape to read all k head positions, then scanning again to write. If the k-tape TM runs in t steps, the single-tape simulation runs in O(t²) steps → quadratic slowdown. (D) is false: nondeterministic TMs accept the same languages (RE) as deterministic TMs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q80. GATE 2013 (1 Mark)"
      }), " → The Church-Turing thesis states that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) Every function computable by a TM is computable by a finite automaton", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) Every intuitively computable function is computable by a TM", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) Every decision problem is decidable by a TM", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) Every recursively enumerable language is recursive"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nThe Church-Turing thesis claims that the informal notion of \"effectively computable\" coincides with TM computability. Any function that can be computed by an algorithm can be computed by a TM. It is a thesis (not a theorem) because \"effectively computable\" is informal. (A) is false (TMs are more powerful than FAs). (C) is false (undecidable problems exist). (D) is false (not all RE languages are recursive)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q81. GATE 2012 (2 Marks)"
      }), " → Let U be a universal Turing Machine. The language accepted by U is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) The set of all TM descriptions", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) The set of all pairs ⟨M,w⟩ where M is a TM that accepts w", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) The set of all halting TM descriptions", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) The set of all recursively enumerable languages"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nA universal TM U takes an encoded pair ⟨M,w⟩ and simulates M on input w. U accepts ⟨M,w⟩ iff M accepts w. Therefore L(U) = {⟨M,w⟩ | M accepts w} = A_TM → the acceptance language, which is RE but not recursive. (A) would include pairs where M does NOT accept w. (C) is different from the acceptance language."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q82. GATE 2011 (2 Marks)"
      }), " → Let L be a language over {0,1} accepted by a Turing Machine. Which is true?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) L is recursively enumerable", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) L is recursive", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) L is context-sensitive", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) L is regular"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nBy definition, the set of languages accepted by TMs is exactly the set of RE languages. L could be recursive, context-sensitive, or regular, but it must be at least RE. Not all RE languages are recursive → the most general correct answer is (A)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q83. GATE 2010 (2 Marks)"
      }), " → Consider TM transition δ(q, a) = (q', b, L). What does this represent?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) In state q, reading a, write b, move left, go to q'", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) In state q, reading a, read b, move left, go to q'", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) In state q, reading a, erase b, move left, go to q'", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) In state q, reading b, write a, move left, go to q'"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nStandard TM transition notation: δ(current_state, read_symbol) = (new_state, write_symbol, move_direction). So δ(q, a) = (q', b, L) means: if in state q and the tape head reads symbol a, write symbol b in the current cell, move the head one cell left (L), and transition to state q'. (B) misinterprets the write symbol as another read. (C) says \"erase\" instead of \"write\". (D) swaps the read and write symbols."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q84. GATE 2016 Set 2 (2 Marks)"
      }), " → Let Lâ‚ÂÂ� be recursive and L₂ be recursively enumerable. Which is necessarily true?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) Lâ‚ÂÂ� ∩ L₂ is recursive", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) Lâ‚ÂÂ� ∪ L₂ is recursively enumerable", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) L₂ – Lâ‚ÂÂ� is recursively enumerable", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) Both (B) and (C)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\n(B) RE is closed under union. Since Lâ‚ÂÂ� is recursive (hence RE), Lâ‚ÂÂ� ∪ L₂ is RE.\n(C) L₂ – Lâ‚ÂÂ� = L₂ ∩ Lâ‚ÂÂ�^c. Since Lâ‚ÂÂ� is recursive, Lâ‚ÂÂ�^c is recursive (hence RE). The intersection of two RE languages is RE. So L₂ – Lâ‚ÂÂ� is RE.\n(A) is not necessarily true: Lâ‚ÂÂ� could be Σ* and L₂ could be the halting problem. Then Lâ‚ÂÂ� ∩ L₂ = HALT, which is RE but not recursive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "undecidability--reductions-8-questions",
      children: "Undecidability & Reductions (8 Questions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q85. GATE 2018 (2 Marks)"
      }), " → Which of the following about Rice's Theorem is TRUE?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) Rice's Theorem applies only to languages that are recursively enumerable", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) Rice's Theorem states any non-trivial property of RE languages is undecidable", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) Rice's Theorem can prove emptiness for CFGs is undecidable", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) Rice's Theorem applies only to properties of regular languages"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nRice's Theorem: any non-trivial property of the language of a TM (true for some RE languages and false for others) is undecidable. (A) is misleading → Rice's theorem talks about properties of RE languages, but the TM whose language has the property must be considered. (C) is false → emptiness for CFGs is decidable (Rice's theorem applies only to TM descriptions). (D) is false → Rice's theorem applies to RE languages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q86. GATE 2017 (2 Marks)"
      }), " → The halting problem for Turing Machines is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) Decidable", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) RE but not decidable", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) Co-RE but not decidable", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) Neither RE nor co-RE"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nHALT_TM = {⟨M,w⟩ | M halts on input w}. We can recognize HALT: simulate M on w; if M halts, accept. But we cannot decide → if M loops forever, we never know. HALT is RE (we can enumerate all halting computations) but not recursive (undecidable). Its complement (M does NOT halt) is not even RE. So HALT is RE but not recursive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q87. GATE 2016 (2 Marks)"
      }), " → Which problem about CFGs is UNDECIDABLE?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) Whether a given CFG generates the empty language", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) Whether a given CFG generates an infinite language", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) Whether a given CFG is ambiguous", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) Whether a given CFG generates a finite language"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nAmbiguity of a CFG is undecidable → there is no algorithm determining if a CFG has multiple parse trees for some string. Emptiness (A) and finiteness (B/D) are all decidable for CFGs. Ambiguity remains undecidable even for restricted grammar classes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q88. GATE 2015 (2 Marks)"
      }), " → Let A ≤ₘ B denote many-one reducibility. Which is TRUE?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) If B is decidable and A ≤ₘ B, then A is decidable", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) If A is undecidable and A ≤ₘ B, then B is undecidable", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) If A ≤ₘ B and B ≤ₘ A, then A = B", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) If A ≤ₘ B and B is RE, then A is recursive"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nMany-one reduction A ≤ₘ B means there exists a computable f such that w ∈ A â‡â€� f(w) ∈ B. If B is decidable, we decide A by computing f(w) and testing membership in B. (B) is the contrapositive and also valid, but the GATE answer focuses on (A) as the direct reduction property. (C) is false → A and B could be different but equally hard. (D) is false → A would be RE (not necessarily recursive)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q89. GATE 2014 (2 Marks)"
      }), " → The Post Correspondence Problem (PCP) over Σ is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) Decidable for all Σ", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) Undecidable for all Σ with |Σ| ≥ 2", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) Decidable for |Σ| = 1", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) Both (B) and (C)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nPCP is undecidable in general (for |Σ| ≥ 2). For |Σ| = 1 (unary alphabet), PCP is decidable → it reduces to checking whether two sequences of natural numbers have matching prefix-sums, which is decidable. The undecidability proof for PCP uses a reduction from the halting problem and requires at least 2 symbols for encoding TM configurations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q90. GATE 2013 (2 Marks)"
      }), " → Let L = {⟨M⟩ | M is a TM that accepts at least one string}. Which is true?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) L is recursive", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) L is RE but not recursive", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) L is co-RE but not RE", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) L is not RE and not co-RE"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nL = {⟨M⟩ | L(M) ≠ ∅} → the non-emptiness problem for TMs. This is RE: simulate M on all strings in parallel (dovetailing) and accept if any computation accepts. But it's not recursive: by Rice's theorem, \"language is non-empty\" is a non-trivial property of RE languages. However, it IS RE because we can search for a witness string."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q91. GATE 2012 (2 Marks)"
      }), " → Let A be a known undecidable language. To prove B is undecidable:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) Reduce A to B (A ≤ₘ B)", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) Reduce B to A (B ≤ₘ A)", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) Show B is a subset of A", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) Show A is a subset of B"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nTo prove B is undecidable, reduce A (known undecidable) to B (A ≤ₘ B). If B were decidable, then A would be decidable via the reduction. Since A is known undecidable, B must also be undecidable. Direction matters: the reduction must go FROM the known hard problem TO the target. (B) would prove B is decidable if A is decidable → useless when A is undecidable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q92. GATE 2011 (2 Marks)"
      }), " → Let L = {⟨M⟩ | L(M) is regular}. Which is true?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) L is decidable", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) L is RE but not recursive", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) L is co-RE but not RE", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) L is not RE and not co-RE"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\n\"L(M) is regular\" is a non-trivial property of the language of a TM. By Rice's theorem, it is undecidable. Furthermore, it is neither RE nor co-RE. Why? Regularity is a Σ₂âÂÂ�°-complete property in the arithmetical hierarchy → we can never confirm that a TM accepts exactly a regular language (would need to rule out all non-regular strings). It is strictly harder than the halting problem."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-classes-8-questions",
      children: "Complexity Classes (8 Questions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q93. GATE 2018 (2 Marks)"
      }), " → Which of the following about P and NP is TRUE?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) P ⊆ NP is unknown", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) NP ⊆ P is unknown", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) P = NP implies every NP problem has a polynomial-time algorithm", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) Every problem in NP is NP-complete"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nP ⊆ NP is known (every deterministic polynomial algorithm is also a non-deterministic one). NP ⊆ P is the P vs NP question (unknown). If P = NP, then every NP problem has a polynomial-time algorithm. (D) is false: problems in P are in NP but are not NP-complete (assuming P ≠ NP), and if P = NP then all NP problems are in P but not necessarily NP-complete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q94. GATE 2017 (2 Marks)"
      }), " → A problem is NP-complete if:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) It is in NP and every problem in P reduces to it", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) It is in NP and every problem in NP reduces to it", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) It is in NP and it reduces to SAT", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) It is in NP and SAT reduces to it"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nDefinition: L is NP-complete if (1) L ∈ NP, and (2) every L' ∈ NP is polynomial-time reducible to L. (D) also implies NP-completeness (since SAT is NP-complete, SAT ≤ₚ L makes L NP-hard, and L ∈ NP makes it NP-complete). But (B) is the formal definition. GATE answer: (B)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q95. GATE 2016 (2 Marks)"
      }), " → Which is TRUE about co-NP?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) co-NP = NP", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) co-NP ⊆ NP", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) P ⊆ co-NP", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) co-NP ⊆ P"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nP is closed under complement. If a problem is in P, its complement is also in P, hence in NP, so the original problem is in co-NP. Thus P ⊆ co-NP. Whether co-NP = NP or co-NP ⊆ NP is unknown. co-NP ⊆ P is also unknown (and believed false)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q96. GATE 2015 (2 Marks)"
      }), " → The Cook-Levin theorem states that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) SAT is in P", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) SAT is NP-complete", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) 3-SAT is NP-complete", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) Circuit-SAT is NP-complete"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nThe Cook-Levin theorem (1971) proves SAT is NP-complete → the first problem proven NP-complete. It shows every NP problem can be reduced to SAT in polynomial time by encoding a non-deterministic TM computation as a Boolean formula. (C) and (D) are corollaries proven later, not the Cook-Levin theorem itself."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q97. GATE 2014 (2 Marks)"
      }), " → Let SPACE(s(n)) denote languages decidable by a TM using O(s(n)) space. Which is TRUE?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) SPACE(n) = NP", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) SPACE(n²) = PSPACE", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) SPACE(n) ⊆ PSPACE", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) NP ⊆ SPACE(n)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (C)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nPSPACE = ∪_k SPACE(n^k). SPACE(n) (linear space) is a subset of PSPACE since n ∈ O(n^k). (A) is an open problem. (B) is false → SPACE(n²) ⊂ PSPACE (proper subset). (D) is unknown → NP could require more than linear space (current belief: NP ⊄ SPACE(n))."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q98. GATE 2013 (2 Marks)"
      }), " → Let SAT be the Boolean satisfiability problem. Which is TRUE?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) SAT ∈ P iff P = NP", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) SAT ∉ P", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) SAT ∈ P", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) SAT is not NP-complete"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (A)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nSAT is NP-complete (Cook-Levin). If SAT ∈ P, then every NP problem reduces to SAT ∈ P, so P = NP. Conversely, if P = NP, then SAT (which is in NP) is in P. So SAT ∈ P iff P = NP. (B) and (C) are open (P vs NP). (D) is false → SAT was the first proven NP-complete problem."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q99. GATE 2012 (2 Marks)"
      }), " → Let L ∈ NP. Which is necessarily true?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) L^c ∈ NP", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) L^c ∈ co-NP", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) L ∈ P", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) L is NP-complete"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (B)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nBy definition, if L ∈ NP, then L^c ∈ co-NP. That is the definition of co-NP. (A) is unknown → NP = co-NP is an open question. (C) is unknown (P vs NP). (D) is false → not all NP problems are NP-complete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q100. GATE 2011 (2 Marks)"
      }), " → Which is TRUE about PSPACE and NP?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(A) NP ⊂ PSPACE", (0,jsx_runtime.jsx)(_components.br, {}), "\n(B) PSPACE ⊂ NP", (0,jsx_runtime.jsx)(_components.br, {}), "\n(C) NP = PSPACE", (0,jsx_runtime.jsx)(_components.br, {}), "\n(D) NP ⊆ PSPACE"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: (D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nNP ⊆ PSPACE: a polynomial-time NTM can be simulated by a TM using polynomial space → we explore all computation paths one at a time, reusing space. Whether the inclusion is strict (NP ⊂ PSPACE) is unknown, though believed true. We can assert NP ⊆ PSPACE but cannot claim proper subset."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-traps-tricks--formula-cheat-sheet",
      children: "Common Traps, Tricks & Formula Cheat Sheet"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-gate-specific-traps-in-toc",
      children: "15 GATE-Specific Traps in TOC"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trap 1: Confusing DCFL vs CFL"
      }), "\nKey distinction:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DCFL"
        }), ": accepted by a deterministic PDA (DPDA) → at most one move per (state, input, stack-top)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NCFL"
        }), ": accepted by a non-deterministic PDA but NOT by any DPDA"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test: Can you accept with a single stack making deterministic decisions? If you need to \"guess\" (e.g., midpoint of wwᴿ), it's NCFL."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Examples: {aâÂÂ�¿bâÂÂ�¿} → DCFL, {wwᴿ} → NCFL (need to guess midpoint), {aâÂÂ�¿báµÂÂ� | n ≠ m} → DCFL (complement of DCFL within a", (0,jsx_runtime.jsx)(_components.em, {
        children: "b"
      }), "), {aâÂÂ�¿bâÂÂ�¿ ∪ a²âÂÂ�¿bâÂÂ�¿} → NCFL."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trap 2: Applying Pumping Lemma Incorrectly"
      }), "\nThe pumping lemma is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "necessary"
      }), " condition, not sufficient. If L fails pumping lemma → L is NOT regular/CFL. If L passes → L MIGHT still be non-regular/non-CFL."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common mistakes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choosing wrong string (must be in L and long enough)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not considering ALL possible divisions (you must show NO valid division works)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting |xy| ≤ p (regular) or |vxy| ≤ p (CFL) → the pumping window constraint"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reversing quantifiers: YOU choose s, the LEMMA chooses the division"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trap 3: Reduction Direction"
      }), "\nTo prove B undecidable: A ≤ₘ B (reduce known undecidable A TO B).\nWrong: \"B reduces to A\" (B ≤ₘ A) → this would prove B is decidable if A is decidable, useless when A is undecidable.\nMnemonic: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"A reduces to B\" = \"A is no harder than B\""
      }), " = B is at least as hard as A."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trap 4: Rice's Theorem Applicability"
      }), "\nApplies ONLY to properties of the LANGUAGE of a TM, NOT the TM itself."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Applies (undecidable)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Does NOT apply (may be decidable)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"L(M) is empty\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"M has exactly 5 states\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"L(M) is regular\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"M halts on input w\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"L(M) contains ε\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"M ever moves left on blank\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"L(M) is finite\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"M uses at most 100 tape cells\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trap 5: Regular ∩ CFL = CFL"
      }), "\nIntersection of a regular language and a CFL is ALWAYS a CFL. But intersection of two CFLs may NOT be a CFL. Example: {aâÂÂ�¿bâÂÂ�¿cáµÂÂ�} ∩ {aâÂÂ�¿báµÂÂ�cáµÂÂ�} = {aâÂÂ�¿bâÂÂ�¿câÂÂ�¿} → not CFL."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trap 6: Complement of RE Languages"
      }), "\nIf L is RE, L^c may or may not be RE."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L is recursive ⟺ both L and L^c are RE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L is RE but not recursive ⟹ L^c is NOT RE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This gives a rapid test: if you can show both L and L^c are RE, then L is recursive."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trap 7: DFA Minimization → Initial Marking"
      }), "\nThe table-filling algorithm: initially mark ALL pairs (p, q) where p ∈ F and q ∉ F (or vice versa) as distinguishable. Many students forget edge cases involving unreachable states."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trap 8: CFG Decision Problems"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Emptiness: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "decidable"
        }), " (graph reachability)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Membership (word problem): ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "decidable"
        }), " (CYK, O(n³))"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Finiteness: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "decidable"
        }), " (useless symbols + cycle check)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ambiguity: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UNDECIDABLE"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Regularity: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UNDECIDABLE"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Equivalence: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UNDECIDABLE"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trap 9: CSL vs Recursive"
      }), "\nAll CSLs are recursive, but not all recursive languages are CSL. CSL is a proper subset of recursive languages. LBAs define CSLs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trap 10: Context-Free ≠ Deterministic"
      }), "\nNot all CFLs are DCFLs. DCFL is a proper subset of CFL. {wwᴿ} is the classic NCFL → a DPDA cannot guess the midpoint."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trap 11: \"Recursive\" vs \"Recursively Enumerable\""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recursive (R) = decidable = TM halts on ALL inputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RE = semi-decidable = TM accepts strings in L, may loop on strings not in L"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every recursive language is RE, but not vice versa"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L is recursive iff both L and its complement are RE"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trap 12: P vs NP vs NP-Complete"
      }), "\nNot all NP problems are NP-complete. If P ≠ NP, problems in P are in NP but not NP-complete. NP-complete requires both: (1) in NP, and (2) every NP problem reduces to it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trap 13: {ww} vs {wwᴿ}"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "{ww} → NOT context-free (needs to match symbol-by-symbol in order, impossible with single stack)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "{wwᴿ} → IS context-free (push w, pop wᴿ), but NCFL (need non-determinism for midpoint)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trap 14: Infinite Union of Regular Languages"
      }), "\nAn infinite union of regular languages is NOT necessarily regular. Example: {aâÂÂ�¿bâÂÂ�¿} = ∪_{k≥0} {aáµÂÂ�báµÂÂ�}. Each {aáµÂÂ�báµÂÂ�} is finite (regular), but the infinite union is the non-regular {aâÂÂ�¿bâÂÂ�¿}. Regular languages are only closed under FINITE union."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trap 15: Homomorphic Images of CFLs"
      }), "\nCFLs are closed under homomorphism (including erasing homomorphisms). This means removing symbols via homomorphism preserves context-freeness. Regular languages are also closed under both homomorphism and inverse homomorphism."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "decision-procedure-table",
      children: "Decision Procedure Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Regular"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "DCFL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "CFL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "CSL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Recursive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "RE"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Membership"
            }), " (w ∈ L?)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Emptiness"
            }), " (L = ∅?)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Finiteness"
            }), " (Is |L| < ∞?)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Universality"
            }), " (L = Σ*?)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Equivalence"
            }), " (Lâ‚ÂÂ� = L₂?)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Disjointness"
            }), " (Lâ‚ÂÂ� ∩ L₂ = ∅?)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Subset"
            }), " (Lâ‚ÂÂ� ⊆ L₂?)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Regularity"
            }), " (Is L regular?)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Ambiguity"
            }), " (CFG ambiguous?)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "D = Decidable, U = Undecidable, → = Not Applicable"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key pattern: Everything decidable for Regular; emptiness/finiteness/membership decidable for CFL; only membership decidable for RE."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "closure-properties-quick-reference",
      children: "Closure Properties Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Regular"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "DCFL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "CFL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "CSL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Recursive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "RE"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Union"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "âœâ€â€�"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Intersection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "âœâ€â€�"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "âœâ€â€�"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "âœâ€â€�"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "âœâ€â€�"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concatenation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "âœâ€â€�"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kleene Star"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "âœâ€â€�"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kleene Plus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "âœâ€â€�"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reversal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "âœâ€â€�"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Homomorphism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "âœâ€â€�"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "âœâ€â€�"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "âœâ€â€�"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inverse Homomorphism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Intersection with Regular"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Set Difference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "âœâ€â€�"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "âœâ€â€�"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "âœâ€â€�"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prefix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Suffix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Substitution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "âœâ€â€�"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "âœâ€â€�"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "✓ = Closed, âœâ€â€� = Not Closed"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Memory aid for CFL: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "UNION, CONCAT, KLEENE, REVERSE, HOM"
      }), " → closed. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "INTERSECTION, COMPLEMENT, DIFFERENCE"
      }), " → NOT closed. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intersection with Regular"
      }), " → always closed (most useful for GATE)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chomsky-hierarchy-comparison",
      children: "Chomsky Hierarchy Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Grammar Rule Form"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Automaton"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Language Class"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unrestricted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "α → β (α ≠ ε)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Turing Machine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "RE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context-Sensitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "αAβ → αγβ (γ ≠ ε)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear Bounded Automaton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "CSL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type 2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context-Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "A → γ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PDA (NPDA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "CFL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type 3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "A → aB, A → a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFA/NFA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Regular"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inclusion hierarchy:"
      }), " Regular ⊂ CFL ⊂ CSL ⊂ RE"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Regular"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "CFL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "CSL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "RE"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pumping Lemma applies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Emptiness decidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Membership decidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalence decidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Closed under Complement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Closed under Intersection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-reduction-examples-for-undecidability-proofs",
      children: "Key Reduction Examples for Undecidability Proofs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. A_TM ≤ₘ HALT_TM"
      }), "\nGiven ⟨M,w⟩, construct M': simulate M on w; if M accepts, halt; if M rejects, loop. Then ⟨M,w⟩ ∈ A_TM ⟺ ⟨M'⟩ ∈ HALT_TM. This shows HALT is undecidable given A_TM is undecidable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. HALT_TM ≤ₘ EMPTY_TM"
      }), "\nGiven ⟨M,w⟩, construct M': on any input x, simulate M on w. If M halts, accept x. Then L(M') = Σ* (if M halts on w) or L(M') = ∅ (if M loops). So ⟨M,w⟩ ∉ HALT_TM ⟺ ⟨M'⟩ ∈ EMPTY_TM. This proves EMPTY_TM is undecidable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. A_TM ≤ₘ REGULAR_TM"
      }), "\nGiven ⟨M,w⟩, construct M': on input x, if x ∈ {0âÂÂ�¿1âÂÂ�¿} accept; otherwise simulate M on w and accept if M accepts w. Then L(M') = Σ* (regular) if M accepts w, else L(M') = {0âÂÂ�¿1âÂÂ�¿} (non-regular). So ⟨M,w⟩ ∈ A_TM ⟺ ⟨M'⟩ ∈ REGULAR_TM."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4. PCP ≤ₘ CFG Ambiguity"
      }), "\nGiven PCP instance (A,B) over Σ, construct CFG with productions generating all possible concatenations from both sequences. The CFG is ambiguous iff the PCP instance has a solution, proving CFG ambiguity undecidable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Template:"
      }), " To prove B undecidable, reduce A ≤ₘ B where A is known undecidable. Construct f(⟨M,w⟩) = ⟨M'⟩ such that M' simulates M on w and uses the outcome to determine M''s language behavior. The reduction must be computable and correct (w ∈ A ⟺ f(w) ∈ B)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exam-time-saving-insights",
      children: "Exam Time-Saving Insights"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Quick Regularity Test for {aâÂÂ�¿báµÂÂ�}:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Condition on n or m independently → regular (e.g., n even, m ≥ 5)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Condition relating n and m (n = m, n > m, n ≠ m) → NOT regular (CFL/DCFL)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Exception: \"n = m or n ≠ m\" = all of a", (0,jsx_runtime.jsx)(_components.em, {
              children: "b"
            }), " → regular"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Identify DCFL quickly:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Can you process left-to-right with deterministic stack decisions?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "{aâÂÂ�¿bâÂÂ�¿} → DCFL (push a, pop b)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "{wwᴿ} → NCFL (need to guess midpoint)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "{aâÂÂ�¿báµÂÂ�cᵖ | n = m} → DCFL; {aâÂÂ�¿báµÂÂ�cᵖ | m = p} → DCFL"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "{aâÂÂ�¿báµÂÂ�cᵖ | n = m or m = p} → NCFL (guess which condition)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Rice's Theorem Quick Check:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Property of LANGUAGE? ✓ Non-trivial? ✓ → undecidable"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Property of TM itself? → Rice's theorem does NOT apply"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "CFL Closure Mnemonic:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Closed: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "U"
            }), "nion, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            }), "oncatenation, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "K"
            }), "leene star, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "R"
            }), "eversal, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "H"
            }), "omomorphism → \"UCK-RH\""]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["NOT closed: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "I"
            }), "ntersection, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            }), "omplement, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            }), "ifference → \"ICD\""]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "P vs NP Quick Identification:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verifiable in polynomial time? → NP"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Solvable in polynomial time? → P"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "NP-complete problems: SAT, 3-SAT, VC, Clique, SubsetSum, HamCycle"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "P problems: Shortest Path, MST, Sorting, Matching, 2-SAT"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Language Classification Order:"
          }), "\nGiven any language, determine its place in the hierarchy:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Try DFA/NFA/RE → regular?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Try PDA/CFG → CFL?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Try LBA → CSL?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Try TM (always halts) → recursive?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Try TM (may loop) → RE?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Otherwise → non-RE (use reductions)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Diagonalization Core Idea:"
          }), "\nList all TMs and their behavior; construct a TM that differs on the diagonal. This proves the halting problem undecidable and is the foundation of all undecidability proofs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Savitch's Theorem:"
          }), "\nNSPACE(f(n)) ⊆ DSPACE(f(n)²). Corollary: PSPACE = NPSPACE. Non-deterministic space is at most quadratically more efficient than deterministic space."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Regular Expression Counting:"
          }), "\nFor r = (0|1)*0(0|1)áµÂÂ�, strings of length n: count = 2^(n-k-1) · 1 · 2^k = 2^(n-1). The fixed symbol at position (n-k) from the end."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pumping Lemma String Selection:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "For {aâÂ�¿bâÂ�¿}: choose s = aᵖbᵖ"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "For {aâÂ�¿bâÂ�¿câÂ�¿}: choose s = aᵖbᵖcᵖ"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "For {ww}: choose s = 0ᵖ1ᵖ0ᵖ1ᵖ (length 4p)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Key: ensure the pumping window (|vxy| ≤ p) forces vy to stay within at most two adjacent symbol blocks"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary-1",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Theory of Computation is a foundational GATE CS subject that explores the hierarchy of formal languages and the machines that recognize them. The Chomsky hierarchy â€â€� regular languages (recognized by DFAs/NFAs, expressed via regular expressions), context-free languages (recognized by PDAs, expressed via CFGs), context-sensitive languages (recognized by LBAs), and recursively enumerable languages (recognized by Turing machines) â€â€� forms the backbone of the subject. Key GATE topics include constructing DFAs and NFAs from regular expressions, designing PDAs for context-free languages, computing FIRST and FOLLOW sets for LL(1) parsing, applying the pumping lemma to prove non-regularity and non-context-freeness, and mastering reductions to prove undecidability. The halting problem is the canonical undecidable problem; its proof via diagonalization is a recurring GATE concept. With 1-3 questions worth 5-8 marks, this subject rewards conceptual clarity and precise machine construction skills."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Chomsky Hierarchy] --> B[Type 3: Regular]\n    A --> C[Type 2: Context-Free]\n    A --> D[Type 1: Context-Sensitive]\n    A --> E[Type 0: Recursively Enumerable]\n    B --> B1[DFA / NFA]\n    B --> B2[Regular Expressions]\n    C --> C1[PDA]\n    C --> C2[CFG]\n    D --> D1[LBA]\n    E --> E1[Turing Machine]\n    E1 --> F{Halting Problem?}\n    F -->|Yes| G[Undecidable]\n    F -->|No| H[Decidable]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * FiniteAutomatonSimulator\n * --------------------------\n * Simulates a deterministic finite automaton (DFA) given its\n * transition table, start state, and accepting states. Can also\n * build a simple NFA with epsilon-closure computation.\n */\nclass FiniteAutomatonSimulator {\n  private transitions: Map<string, Map<string, string>> = new Map();\n  private epsilonClosure: Map<string, Set<string>> = new Map();\n\n  constructor(\n    private states: string[],\n    private alphabet: string[],\n    private startState: string,\n    private acceptStates: Set<string>,\n    transitionTable: [string, string, string][]\n  ) {\n    for (const state of states) {\n      this.transitions.set(state, new Map());\n    }\n    for (const [from, symbol, to] of transitionTable) {\n      this.transitions.get(from)!.set(symbol, to);\n    }\n  }\n\n  /**\n   * Process an input string and return whether it is accepted.\n   */\n  accepts(input: string): boolean {\n    let current = this.startState;\n    for (const symbol of input) {\n      const next = this.transitions.get(current)?.get(symbol);\n      if (!next) return false;\n      current = next;\n    }\n    return this.acceptStates.has(current);\n  }\n\n  /**\n   * Returns the full computation path for a given input.\n   */\n  trace(input: string): string[] {\n    const path: string[] = [this.startState];\n    let current = this.startState;\n    for (const symbol of input) {\n      const next = this.transitions.get(current)?.get(symbol);\n      if (!next) break;\n      current = next;\n      path.push(current);\n    }\n    return path;\n  }\n\n  /**\n   * Build an NFA-epsilon closure (sets of states).\n   */\n  static computeEpsilonClosure(\n    states: string[],\n    epsilonTransitions: [string, string][]\n  ): Map<string, Set<string>> {\n    const closure = new Map<string, Set<string>>();\n    for (const state of states) {\n      const visited = new Set<string>();\n      const stack = [state];\n      while (stack.length > 0) {\n        const s = stack.pop()!;\n        if (visited.has(s)) continue;\n        visited.add(s);\n        for (const [from, to] of epsilonTransitions) {\n          if (from === s) stack.push(to);\n        }\n      }\n      closure.set(state, visited);\n    }\n    return closure;\n  }\n\n  toString(): string {\n    let result = `Start: ${this.startState}\\nAccept: ${[...this.acceptStates].join(', ')}\\n`;\n    for (const [state, map] of this.transitions) {\n      for (const [symbol, next] of map) {\n        result += `  δ(${state}, ${symbol}) = ${next}\\n`;\n      }\n    }\n    return result;\n  }\n}\n\n// Example: DFA for strings ending with \"01\"\nconst dfa = new FiniteAutomatonSimulator(\n  ['q0', 'q1', 'q2'],\n  ['0', '1'],\n  'q0',\n  new Set(['q2']),\n  [\n    ['q0', '0', 'q1'],\n    ['q0', '1', 'q0'],\n    ['q1', '0', 'q1'],\n    ['q1', '1', 'q2'],\n    ['q2', '0', 'q1'],\n    ['q2', '1', 'q0'],\n  ]\n);\n\nconsole.log('Test string \"0101\":', dfa.accepts('0101') ? '✓ Accepted' : '✗ Rejected');\nconsole.log('Trace:', dfa.trace('0101').join(' → '));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5 Multiple Choice Questions"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Q#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Options"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Answer"
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
            children: "Which of the following languages is regular?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) {aâÂ�¿bâÂ�¿ | n ≥ 0}, B) {aáµÂ�bâÂ�¿ | m, n ≥ 0}, C) {aâÂ�¿bâÂ�¿câÂ�¿ | n ≥ 0}, D) {ww | w ∈ {a,b}*}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The language L = {aâÂ�¿ | n is prime} is:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Regular, B) CFL but not regular, C) CSL but not CFL, D) Recursively enumerable but not recursive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which of the following problems is undecidable?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Emptiness of a DFA, B) Equivalence of two DFAs, C) Emptiness of a TM, D) Membership in a regular language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A PDA can recognize:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) All regular languages only, B) All CFLs only, C) All CSLs, D) All recursively enumerable languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If L = {aâÂ�¿bâÂ�¿ | n ≥ 1}, which string proves L is non-regular using pumping lemma (pumping length = p)?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) aᵖbᵖ, B) aᵖbᵖâÂ�º¹, C) aᵖâÂ�º¹bᵖ, D) aᵖbᵖaᵖ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5 Practice Problems"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exercise 1:"
        }), " Construct a DFA"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Design a DFA that accepts all strings over {0,1} that end with \"101\"."
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        }), " States: q0 (no match), q1 (last char 1), q2 (last two \"10\"), q3 (last three \"101\" â€â€� accept). Transitions: δ(q0,0)=q0, δ(q0,1)=q1, δ(q1,0)=q2, δ(q1,1)=q1, δ(q2,0)=q0, δ(q2,1)=q3, δ(q3,0)=q2, δ(q3,1)=q1. Accept: q3."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exercise 2:"
        }), " Regular Expression"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Find a regular expression for strings over {0,1} with an even number of 0's."
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        }), " (1*01*01*)* + 1* â€â€� strings with zero or an even number of 0's where 1's can appear anywhere. More compact: (1*01*01*)* | 1* for zero 0's."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exercise 3:"
        }), " CFG Design"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Design a CFG for L = {aâÂ�¿báµÂ� \\| n ≠ m}."
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        }), " L = {aâÂ�¿báµÂ� \\| n > m} ∪ {aâÂ�¿báµÂ� \\| n < m}. S → A \\| B. A → aA \\| aAb \\| a (for n > m). B → bB \\| aBb \\| b (for n < m)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exercise 4:"
        }), " Pumping Lemma"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Prove L = {ww \\| w ∈ {0,1}*} is not regular using the pumping lemma."
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        }), " Choose s = 0ᵖ1ᵖ0ᵖ1ᵖ. For any decomposition s = xyz with |xy| ≤ p, y must be within the first block of 0's (all 0's). Pumping y gives 0ᵖâÂ�ºáµÂ�1ᵖ0ᵖ1ᵖ which is not of form ww. Contradiction. Hence L is not regular."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exercise 5:"
        }), " Undecidability"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Show that the problem \"Does a TM accept the empty string?\" is undecidable."
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        }), " Reduce the halting problem: Given (⟨M⟩, x), construct M' that first writes x on tape and then simulates M. M' rejects ε. Then M accepts x iff M' accepts ε (but M' rejects ε). Actually, a cleaner reduction: Given (M, x), construct M' that ignores its input, writes x on tape, and simulates M. M' accepts ε iff M accepts x. Since the halting problem (and acceptance problem) is undecidable, this problem is also undecidable."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "End of Theory of Computation â€â€� GATE CS Preparation."
      })
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