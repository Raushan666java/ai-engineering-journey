"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[46943],{

/***/ 25942
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_theory_of_computation_02_dfa_md_a0e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-theory-of-computation-02-dfa-md-a0e.json
const site_docs_courses_theory_of_computation_02_dfa_md_a0e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/theory-of-computation/02-dfa","title":"Chapter 2: Deterministic Finite Automata","description":"Previous Nondeterministic Finite Automata","source":"@site/docs/courses/theory-of-computation/02-dfa.md","sourceDirName":"courses/theory-of-computation","slug":"/theory-of-computation/02-dfa","permalink":"/ai-engineering-journey/theory-of-computation/02-dfa","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-dfa","slug":"/theory-of-computation/02-dfa","title":"Chapter 2: Deterministic Finite Automata","sidebar_label":"Chapter 2: Deterministic Finite Automata","sidebar_position":2},"sidebar":"course-theory-of-computation","previous":{"title":"Chapter 1: Introduction to the Theory of Computation","permalink":"/ai-engineering-journey/theory-of-computation/01-introduction"},"next":{"title":"Chapter 3: Nondeterministic Finite Automata","permalink":"/ai-engineering-journey/theory-of-computation/03-nfa"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/theory-of-computation/02-dfa.md


const frontMatter = {
	id: '02-dfa',
	slug: '/theory-of-computation/02-dfa',
	title: 'Chapter 2: Deterministic Finite Automata',
	sidebar_label: 'Chapter 2: Deterministic Finite Automata',
	sidebar_position: 2
};
const contentTitle = 'Chapter 2: Deterministic Finite Automata';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "TypeScript DFA Simulator",
  "id": "typescript-dfa-simulator",
  "level": 2
}, {
  "value": "DFA Minimization via Table-Filling Algorithm",
  "id": "dfa-minimization-via-table-filling-algorithm",
  "level": 2
}, {
  "value": "TypeScript: Table-Filling Minimization Algorithm",
  "id": "typescript-table-filling-minimization-algorithm",
  "level": 3
}, {
  "value": "1.1 What is a Finite Automaton?",
  "id": "11-what-is-a-finite-automaton",
  "level": 3
}, {
  "value": "1.2 Formal Definition of a DFA",
  "id": "12-formal-definition-of-a-dfa",
  "level": 3
}, {
  "value": "1.3 Transition Diagrams and Transition Tables",
  "id": "13-transition-diagrams-and-transition-tables",
  "level": 3
}, {
  "value": "1.4 Language of a DFA",
  "id": "14-language-of-a-dfa",
  "level": 3
}, {
  "value": "1.5 DFA Design Methodology",
  "id": "15-dfa-design-methodology",
  "level": 3
}, {
  "value": "1.6 Formal Description of DFA Computation",
  "id": "16-formal-description-of-dfa-computation",
  "level": 3
}, {
  "value": "1.7 Regular Languages",
  "id": "17-regular-languages",
  "level": 3
}, {
  "value": "DFA Product Construction: Union and Intersection",
  "id": "dfa-product-construction-union-and-intersection",
  "level": 2
}, {
  "value": "Formal Definition",
  "id": "formal-definition",
  "level": 3
}, {
  "value": "TypeScript: Product Construction",
  "id": "typescript-product-construction",
  "level": 3
}, {
  "value": "Mermaid: Product Construction Visualization",
  "id": "mermaid-product-construction-visualization",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1.2: DFA for Exactly Two &#39;1&#39;s",
  "id": "example-12-dfa-for-exactly-two-1s",
  "level": 3
}, {
  "value": "Example 1.3: DFA for Binary Numbers Divisible by 3",
  "id": "example-13-dfa-for-binary-numbers-divisible-by-3",
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
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "DFA Equivalence Testing",
  "id": "dfa-equivalence-testing",
  "level": 2
}, {
  "value": "Algorithm",
  "id": "algorithm",
  "level": 3
}, {
  "value": "TypeScript Implementation: DFA Simulator with Minimization",
  "id": "typescript-implementation-dfa-simulator-with-minimization",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    annotation: "annotation",
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
    math: "math",
    mi: "mi",
    mo: "mo",
    mrow: "mrow",
    ol: "ol",
    p: "p",
    pre: "pre",
    semantics: "semantics",
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
        id: "chapter-2-deterministic-finite-automata",
        children: "Chapter 2: Deterministic Finite Automata"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/01-introduction",
          children: "Introduction"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/03-nfa",
          children: "Nondeterministic Finite Automata"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/01-introduction",
          children: "Introduction"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/03-nfa",
          children: "Nondeterministic Finite Automata"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define a deterministic finite automaton (DFA) formally as a 5-tuple."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct transition diagrams and transition tables from DFA specifications."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trace the computation of a DFA on an input string."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine the language accepted by a given DFA."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design DFAs for specific regular languages."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove properties of DFA-recognizable languages."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Formal Definition] --> B[Transition Diagrams]\n    B --> C[Extended Transition]\n    C --> D[Language of DFA]\n    D --> E[Design Methodology]\n    E --> F[Regular Languages]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-dfa-simulator",
      children: "TypeScript DFA Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A DFA can be implemented as a generic class in TypeScript:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type State = string;\ntype Alphabet = string;\n\nclass DFA {\n  constructor(\n    private Q: Set<State>,\n    private sigma: Set<Alphabet>,\n    private delta: Map<string, State>,\n    private q0: State,\n    private F: Set<State>\n  ) {}\n\n  private transitionKey(q: State, a: Alphabet): string {\n    return `${q},${a}`;\n  }\n\n  simulate(input: string): boolean {\n    let current = this.q0;\n    for (const symbol of input) {\n      const key = this.transitionKey(current, symbol);\n      if (!this.delta.has(key)) return false;\n      current = this.delta.get(key)!;\n    }\n    return this.F.has(current);\n  }\n}\n\n// DFA for binary numbers divisible by 3\nconst delta = new Map<string, State>([\n  ['q0,0', 'q0'], ['q0,1', 'q1'],\n  ['q1,0', 'q2'], ['q1,1', 'q0'],\n  ['q2,0', 'q1'], ['q2,1', 'q2'],\n]);\nconst dfa = new DFA(\n  new Set(['q0', 'q1', 'q2']),\n  new Set(['0', '1']),\n  delta, 'q0', new Set(['q0'])\n);\nconsole.log(dfa.simulate('110'));  // true (6)\nconsole.log(dfa.simulate('100'));  // false (4)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dfa-minimization-via-table-filling-algorithm",
      children: "DFA Minimization via Table-Filling Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every regular language has a unique minimal DFA up to isomorphism. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "table-filling algorithm"
      }), " (Myhill-Nerode) finds it:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Step 1: Mark pairs\"\n        A[\"Mark all pairs (q?, q?)<br/>where q??F, q??F\"]\n    end\n    subgraph \"Step 2: Propagate\"\n        B[\"For unmarked (q?, q?),<br/>if (d(q?,a), d(q?,a)) is marked,<br/>mark (q?,q?)\"]\n    end\n    subgraph \"Step 3: Merge\"\n        C[\"Merge unmarked pairs<br/>into single states\"]\n    end\n    A --> B --> C\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The minimized DFA has the fewest possible states. Two states are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "distinguishable"
      }), " if there exists a string that leads from one to accept and the other to reject."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-table-filling-minimization-algorithm",
      children: "TypeScript: Table-Filling Minimization Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function minimizeDFA(states: string[], accept: Set<string>,\n                     delta: Map<string, string>): Set<[string, string]> {\n  const n = states.length;\n  const distinguishable = new Array(n).fill(0)\n    .map(() => new Array(n).fill(false));\n\n  // Step 1: Mark all pairs where one is accepting and one is not\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < n; j++) {\n      if (accept.has(states[i]) !== accept.has(states[j])) {\n        distinguishable[i][j] = true;\n      }\n    }\n  }\n\n  // Step 2: Propagate — if (d(q?,a), d(q?,a)) is marked, mark (q?,q?)\n  let changed = true;\n  while (changed) {\n    changed = false;\n    for (let i = 0; i < n; i++) {\n      for (let j = 0; j < n; j++) {\n        if (distinguishable[i][j]) continue;\n        for (const sym of ['0', '1']) {\n          const keyI = `${states[i]},${sym}`;\n          const keyJ = `${states[j]},${sym}`;\n          if (!delta.has(keyI) || !delta.has(keyJ)) continue;\n          const nextI = states.indexOf(delta.get(keyI)!);\n          const nextJ = states.indexOf(delta.get(keyJ)!);\n          if (distinguishable[nextI][nextJ]) {\n            distinguishable[i][j] = true;\n            changed = true;\n          }\n        }\n      }\n    }\n  }\n\n  // Return unmarked pairs (these are equivalent states to merge)\n  const equivalent: Set<[string, string]> = new Set();\n  for (let i = 0; i < n; i++) {\n    for (let j = i + 1; j < n; j++) {\n      if (!distinguishable[i][j]) {\n        equivalent.add([states[i], states[j]]);\n      }\n    }\n  }\n  return equivalent;\n}\n\n// Test on DFA for strings ending with \"0\"\nconst states = ['q0', 'q1'];\nconst accept = new Set(['q1']);\nconst delta = new Map<string, string>([\n  ['q0,0', 'q1'], ['q0,1', 'q0'],\n  ['q1,0', 'q1'], ['q1,1', 'q0'],\n]);\nconst equiv = minimizeDFA(states, accept, delta);\nconsole.log('Equivalent state pairs:', [...equiv]);\n// None — this DFA is already minimal\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/theory-of-computation/01-dfa.png",
        alt: "DFA State Diagram - Binary Numbers Divisible by 3"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A DFA is the simplest computational model with finite memory, where each state-symbol pair has exactly one next state."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-what-is-a-finite-automaton",
      children: "1.1 What is a Finite Automaton?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A finite automaton is a simplest computational model with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "finite memory"
      }), ". It reads an input string one symbol at a time, moves through a sequence of states, and decides whether to accept or reject the string. The memory is limited → the automaton cannot store arbitrary amounts of data; only its current state matters."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The formal 5-tuple definition provides a precise mathematical framework for describing deterministic computation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Name states descriptively (e.g., seen_at_least_one_1) rather than abstract q0, q1 — it makes verification vastly easier."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Every DFA state must have exactly one transition for each input symbol. Missing transitions mean the automaton is incomplete."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-formal-definition-of-a-dfa",
      children: "1.2 Formal Definition of a DFA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deterministic finite automaton (DFA)"
      }), " is a 5-tuple (Q, Σ, δ, q₀, F) where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q"
        }), " is a finite set of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "states"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Σ"
        }), " is a finite ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "input alphabet"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "δ: Q × Σ → Q"
        }), " is the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "transition function"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "q₀ ∈ Q"
        }), " is the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "start state"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F ⊆ Q"
        }), " is the set of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "accepting (final) states"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The term ", (0,jsx_runtime.jsx)(_components.em, {
        children: "deterministic"
      }), " means that for each state and each input symbol, there is exactly one next state. The transition function δ(q, a) = p means: when the automaton is in state q and reads symbol a, it moves to state p."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Transition diagrams and tables are equivalent visual and tabular representations of the same DFA transition function."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-transition-diagrams-and-transition-tables",
      children: "1.3 Transition Diagrams and Transition Tables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Transition Diagram:"
      }), " A directed graph where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vertices represent states (circles with state names inside)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accepting states are drawn as double circles."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The start state is indicated by an incoming arrow from nowhere."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Edges labeled with input symbols represent transitions δ(q, a) = p."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Transition Table:"
      }), " A tabular representation where rows are states, columns are symbols, and entries are the next states."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Example for a DFA that accepts strings ending with '01' over Σ = {0, 1}:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transition Diagram (text description):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Three states: q0 (start), q1, q2 (accept)\nq0 --0--> q0, q0 --1--> q1\nq1 --0--> q2, q1 --1--> q1\nq2 --0--> q0, q2 --1--> q1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transition Table:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "→q₀"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₀"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₁"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "q₁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₁"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "*q₂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₀"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₁"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The extended transition function lets us formally define what it means for a DFA to accept or reject any given string."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-language-of-a-dfa",
      children: "1.4 Language of a DFA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "extended transition function"
      }), " δ̂: Q × Σ* → Q generalizes δ to strings:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ̂(q, ε) = q"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ̂(q, wa) = δ(δ̂(q, w), a) for string w and symbol a"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A DFA ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "accepts"
      }), " string w if δ̂(q₀, w) ∈ F."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "language recognized"
      }), " by DFA M is:\nL(M) = { w ∈ Σ* | δ̂(q₀, w) ∈ F }"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A language is called ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "regular"
      }), " if some DFA recognizes it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A systematic 6-step methodology ensures correct state identification and transition definitions for any regular language."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-dfa-design-methodology",
      children: "1.5 DFA Design Methodology"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To design a DFA for a language L:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Understand the acceptance condition."
        }), " What property must the input have?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify the essential information"
        }), " that must be remembered. This becomes the states."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assign meaning to each state."
        }), " For each state, describe what the DFA knows about the input read so far."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Define transitions."
        }), " For each state and symbol, determine what the new state of knowledge should be."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify accepting states."
        }), " Which states correspond to a valid prefix or complete string?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verify."
        }), " Test the DFA on representative strings (both accepted and rejected)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " DFA computation is a simple iterative process — start in q0, follow transitions per symbol, accept if final state is in F."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-formal-description-of-dfa-computation",
      children: "1.6 Formal Description of DFA Computation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A DFA M = (Q, Σ, δ, q₀, F) on input w = w₁w₂…wₙ (each wᵢ ∈ Σ) computes as follows:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start in state q₀."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For i = 1 to n: replace current state r with δ(r, wᵢ)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accept if final state r ∈ F; reject otherwise."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A language is regular precisely when some DFA recognizes it — the fundamental connection between automata and formal languages."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-regular-languages",
      children: "1.7 Regular Languages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A language is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "regular"
      }), " if there exists some DFA that recognizes it. The class of regular languages has important closure properties (Chapter 4) and corresponds exactly to what can be expressed with regular expressions (Chapter 3)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dfa-product-construction-union-and-intersection",
      children: "DFA Product Construction: Union and Intersection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given two DFAs, we can construct a single DFA that recognizes the union or intersection of their languages using the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cartesian product"
      }), " of states."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "formal-definition",
      children: "Formal Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Let (M_1 = (Q_1, \\Sigma, \\delta_1, q_1, F_1)) and (M_2 = (Q_2, \\Sigma, \\delta_2, q_2, F_2)) be two DFAs over the same alphabet. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "product DFA"
      }), " (M_\\times) is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(Q_\\times = Q_1 \\times Q_2 = {(q_i, p_j) \\mid q_i \\in Q_1, p_j \\in Q_2})"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(\\delta_\\times((q,p), a) = (\\delta_1(q,a), \\delta_2(p,a)))"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start state: ((q_1, q_2))"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "intersection:"
        }), " (F_\\times = F_1 \\times F_2) (both must accept)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "union:"
        }), " (F_\\times = (F_1 \\times Q_2) \\cup (Q_1 \\times F_2)) (at least one accepts)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-product-construction",
      children: "TypeScript: Product Construction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ProductDFA {\n  private delta: Map<string, string>;\n\n  constructor(m1: DFA, m2: DFA, mode: 'intersection' | 'union') {\n    this.delta = new Map();\n    const q1 = [...m1['Q']];\n    const q2 = [...m2['Q']];\n    const sigma = [...m1['sigma']];\n\n    for (const s1 of q1) {\n      for (const s2 of q2) {\n        for (const sym of sigma) {\n          const k1 = `${s1},${sym}`;\n          const k2 = `${s2},${sym}`;\n          if (!m1['delta'].has(k1) || !m2['delta'].has(k2)) continue;\n          const next1 = m1['delta'].get(k1)!;\n          const next2 = m2['delta'].get(k2)!;\n          const key = `${s1},${s2},${sym}`;\n          this.delta.set(key, `${next1},${next2}`);\n        }\n      }\n    }\n  }\n}\n\n// Example: DFA for even length (M1) × DFA for odd number of 1s (M2)\n// The product DFA recognizes strings with even length AND odd number of 1s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-product-construction-visualization",
      children: "Mermaid: Product Construction Visualization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"M1: Even length\"\n        q0_even((q0))\n        q1_even(((q1)))\n        q0_even -->|0,1| q1_even\n        q1_even -->|0,1| q0_even\n    end\n    subgraph \"M2: Odd number of 1s\"\n        p0_odd((p0))\n        p1_odd(((p1)))\n        p0_odd -->|1| p1_odd\n        p0_odd -->|0| p0_odd\n        p1_odd -->|1| p0_odd\n        p1_odd -->|0| p1_odd\n    end\n    subgraph \"Product: (q0,p0) start\"\n        q0p0((q0,p0))\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The product construction proves that the class of regular languages is closed under boolean operations — a key property used throughout automata theory."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a DFA over Σ = {0, 1} that accepts strings that begin with 0."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We need to remember whether we have seen the first symbol and whether it was 0."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₀: Start state, haven't read any symbol yet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₁: First symbol was 0 (good → maybe accept)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₂: First symbol was 1 (bad → will never accept)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₃: Dead state for strings that already failed."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transition Table:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "→q₀"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₂"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "*q₁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₁"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "q₂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₃"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₃"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "q₃"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₃"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₃"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Accepting state: q₁. Any string beginning with 0 stays in q₁ and is accepted. Any string beginning with 1 goes to q₂ then q₃ and is rejected. The empty string ε begins with nothing, so it is rejected (not accepted as it doesn't start with 0)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-12-dfa-for-exactly-two-1s",
      children: "Example 1.2: DFA for Exactly Two '1's"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a DFA over Σ = {0, 1} that accepts strings containing exactly two 1s."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We count the number of 1s seen, up to 3 where we stop caring (beyond 2 is already too many)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₀: Seen zero 1s (start)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₁: Seen exactly one 1."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₂: Seen exactly two 1s (accept)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₃: Seen three or more 1s (dead)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transitions:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "→q₀"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₀"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₁"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "q₁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₂"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "*q₂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₃"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "q₃"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₃"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₃"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    q0((q0)) -->|1| q1((q1))\n    q1 -->|1| q2(((q2)))\n    q2 -->|1| q3((q3))\n    q0 -->|0| q0\n    q1 -->|0| q1\n    q2 -->|0| q2\n    q3 -->|0,1| q3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "On 0, each state stays in itself (count of 1s doesn't change). On 1, we advance to the next state. L(M) = { w | w contains exactly two 1s }."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-13-dfa-for-binary-numbers-divisible-by-3",
      children: "Example 1.3: DFA for Binary Numbers Divisible by 3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a DFA over Σ = {0, 1} that accepts binary strings representing numbers divisible by 3 (leading zeros allowed)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When we read a binary string left to right, we can track the remainder modulo 3. If the current remainder is r and we read bit b, the new remainder is (2r + b) mod 3."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₀: remainder 0 (start, accept → empty string represents 0)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₁: remainder 1."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₂: remainder 2."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transitions (from remainder r with bit b to (2r + b) mod 3):"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "*→q₀"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₀"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₁"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "q₁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₀"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "q₂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q₂"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check: On input \"110\" (binary for 6): q₀ → q₁ (1) → q₀ (1) → q₀ (0). Accept. On input \"100\" (binary for 4): q₀ → q₁ (1) → q₂ (0) → q₁ (0). Reject."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DFA"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NFA"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Regular Expression"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State transitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exactly one per symbol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero or more per symbol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Acceptance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single path required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any path leads to accept"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern match semantics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expressiveness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular languages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Design complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (more states)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (fewer states)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Determinism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always deterministic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nondeterministic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "DFA Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symbol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "States"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finite set of states"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alphabet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finite set of input symbols"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transition function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d: Q × S ? Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maps (state, symbol) to next state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Start state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q0 ? Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial state before reading input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accept states"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F ? Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "States indicating acceptance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extended transition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d^(q, w)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State after reading string w"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How DFA Is Used"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lexical analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token recognition in compilers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State machine for protocol logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Text processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern matching and input validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finite-state machine controllers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signature-based intrusion detection"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What is the value of the extended transition function d^(q, e)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Ø"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) {q}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) q"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) d(q, e)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C)** By definition, d^(q, e) = q — reading no input leaves the DFA in its current state.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " Which language below is regular?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) { anbn | n = 0 }"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) { ww | w ? {a,b}* }"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) { w ? {0,1}* | w ends with 01 }"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) { anbncn | n = 0 }"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C)** Strings ending with \"01\" can be recognized by a 3-state DFA. The others need more memory than a DFA provides.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " In a DFA transition function d: Q × S ? Q, the codomain is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) A set of states"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) A single state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The power set of states"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) A Boolean value"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Unlike an NFA where d returns a set of states, a DFA returns exactly one state — this is what determinism means.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " How many states does a minimal DFA for binary strings divisible by 3 require?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) 2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) 3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) 4"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) 5"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Three states corresponding to remainders 0, 1, 2 modulo 3. The start state (remainder 0) is also accepting.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " What technique proves { anbn | n = 0 } is not regular?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) State elimination"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Arden's lemma"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Pumping lemma"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Subset construction"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C)** The pumping lemma shows any sufficiently long string in a regular language can be \"pumped\"; { anbn } violates this property.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "States encode finite memory."
          }), " Every distinct piece of information the DFA needs to remember becomes a state. If you can solve a problem while remembering only a bounded amount of information, the language is regular."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DFAs are everywhere in practice."
          }), " Regular expression engines, lexical analyzers (lex/flex), network protocol parsers, and UI state machines all use DFA concepts under the hood."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design with purpose."
          }), " Name states for what they remember (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
            children: "seen_00"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "remainder_2"
          }), "). This makes the DFA self-documenting and easier to verify."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complementation is free."
          }), " Given a DFA, swapping accepting and non-accepting states gives a DFA for the complement language — trivially proving closure under complement."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dfa-equivalence-testing",
      children: "DFA Equivalence Testing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Two DFAs (M_1) and (M_2) are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "equivalent"
      }), " if they recognize the same language, i.e., (L(M_1) = L(M_2)). We can test equivalence in polynomial time using the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "table-filling algorithm"
      }), " on the product automaton."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm",
      children: "Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct a DFA (M_\\times) with start state ((q_1, q_2)) and no accepting states."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run the table-filling algorithm on (M_\\times)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ((q_1, q_2)) is distinguishable, the DFAs are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not equivalent"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Intuitively, we are checking whether there exists any string that is accepted by one DFA but rejected by the other. If such a string exists, the pair ((q_1, q_2)) will be marked distinguishable."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function areEquivalent(m1: DFA, m2: DFA): boolean {\n  const states1 = [...m1['Q']];\n  const states2 = [...m2['Q']];\n  const sigma = [...m1['sigma']];\n  const produce: Array<[string, string]> = [[m1['q0'], m2['q0']]];\n  const visited = new Set<string>();\n\n  while (produce.length > 0) {\n    const [s1, s2] = produce.pop()!;\n    const key = `${s1},${s2}`;\n    if (visited.has(key)) continue;\n    visited.add(key);\n\n    const s1Accept = m1['F'].has(s1);\n    const s2Accept = m2['F'].has(s2);\n    if (s1Accept !== s2Accept) return false;\n\n    for (const sym of sigma) {\n      const k1 = `${s1},${sym}`;\n      const k2 = `${s2},${sym}`;\n      if (m1['delta'].has(k1) && m2['delta'].has(k2)) {\n        produce.push([m1['delta'].get(k1)!, m2['delta'].get(k2)!]);\n      }\n    }\n  }\n  return true;\n}\n\n// DFAs for \"ends with 0\" and \"starts with 0\" are NOT equivalent\nconst endsWith0 = new DFA(\n  new Set(['q0', 'q1']),\n  new Set(['0', '1']),\n  new Map([['q0,0','q1'], ['q0,1','q0'], ['q1,0','q1'], ['q1,1','q0']]),\n  'q0', new Set(['q1'])\n);\nconst startsWith0 = new DFA(\n  new Set(['q0', 'q1', 'q2']),\n  new Set(['0', '1']),\n  new Map([['q0,0','q1'], ['q0,1','q2'], ['q1,0','q1'], ['q1,1','q1'], ['q2,0','q2'], ['q2,1','q2']]),\n  'q0', new Set(['q1'])\n);\nconsole.log(areEquivalent(endsWith0, startsWith0));\n// false — \"0\" is accepted by both but \"10\" is accepted only by endsWith0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-dfa-simulator-with-minimization",
      children: "TypeScript Implementation: DFA Simulator with Minimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// DFA Simulator and Minimizer\n\ntype State = string;\ntype Alphabet = string;\ntype TransitionTable = Map<string, State>;  // key: \"state,symbol\"\n\nclass DFA {\n  constructor(\n    public states: Set<State>,\n    public alphabet: Set<Alphabet>,\n    public transitions: TransitionTable,\n    public start: State,\n    public accept: Set<State>\n  ) {}\n\n  simulate(input: string): boolean {\n    let current = this.start;\n    for (const symbol of input) {\n      const key = `${current},${symbol}`;\n      if (!this.transitions.has(key)) return false;\n      current = this.transitions.get(key)!;\n    }\n    return this.accept.has(current);\n  }\n\n  runWithTrace(input: string): State[] {\n    const trace: State[] = [this.start];\n    let current = this.start;\n    for (const symbol of input) {\n      const key = `${current},${symbol}`;\n      if (!this.transitions.has(key)) return [];\n      current = this.transitions.get(key)!;\n      trace.push(current);\n    }\n    return trace;\n  }\n\n  minimize(): DFA {\n    // Table-filling algorithm for DFA minimization\n    const states = [...this.states];\n    const pairs = new Map<string, boolean>(); // true = distinguishable\n\n    // Initialize: accept vs non-accept pairs are distinguishable\n    for (let i = 0; i < states.length; i++) {\n      for (let j = i + 1; j < states.length; j++) {\n        const key = `${states[i]},${states[j]}`;\n        const iAccept = this.accept.has(states[i]);\n        const jAccept = this.accept.has(states[j]);\n        pairs.set(key, iAccept !== jAccept);\n      }\n    }\n\n    // Iteratively mark distinguishable pairs\n    let changed = true;\n    while (changed) {\n      changed = false;\n      for (let i = 0; i < states.length; i++) {\n        for (let j = i + 1; j < states.length; j++) {\n          const key = `${states[i]},${states[j]}`;\n          if (pairs.get(key)) continue;\n          for (const sym of this.alphabet) {\n            const k1 = `${states[i]},${sym}`;\n            const k2 = `${states[j]},${sym}`;\n            const t1 = this.transitions.get(k1);\n            const t2 = this.transitions.get(k2);\n            if (t1 && t2 && t1 !== t2) {\n              const [a, b] = t1 < t2 ? [t1, t2] : [t2, t1];\n              if (pairs.get(`${a},${b}`)) {\n                pairs.set(key, true);\n                changed = true;\n                break;\n              }\n            }\n          }\n        }\n      }\n    }\n\n    // Group equivalent states\n    const groups = new Map<string, State[]>();\n    const assigned = new Set<State>();\n    for (const s1 of states) {\n      if (assigned.has(s1)) continue;\n      const group: State[] = [s1];\n      assigned.add(s1);\n      for (const s2 of states) {\n        if (assigned.has(s2)) continue;\n        const [a, b] = s1 < s2 ? [s1, s2] : [s2, s1];\n        if (!pairs.get(`${a},${b}`)) {\n          group.push(s2);\n          assigned.add(s2);\n        }\n      }\n      groups.set(group[0], group);\n    }\n\n    // Build minimized DFA\n    const newStates = new Set([...groups.keys()]);\n    const newTransitions = new TransitionTable();\n    const newAccept = new Set<State>();\n    let newStart = this.start;\n\n    for (const [rep, _] of groups) {\n      if (this.accept.has(rep)) newAccept.add(rep);\n      for (const sym of this.alphabet) {\n        const oldKey = `${rep},${sym}`;\n        const oldTarget = this.transitions.get(oldKey);\n        if (oldTarget) {\n          const newTarget = [...groups].find(([_, g]) => g.includes(oldTarget))?.[0];\n          if (newTarget) newTransitions.set(`${rep},${sym}`, newTarget);\n        }\n      }\n    }\n\n    return new DFA(newStates, this.alphabet, newTransitions, newStart, newAccept);\n  }\n\n  acceptsAnyString(): boolean {\n    // BFS from start to see if any accept state is reachable\n    const visited = new Set<State>();\n    const queue: State[] = [this.start];\n    while (queue.length > 0) {\n      const current = queue.shift()!;\n      if (visited.has(current)) continue;\n      visited.add(current);\n      if (this.accept.has(current)) return true;\n      for (const sym of this.alphabet) {\n        const next = this.transitions.get(`${current},${sym}`);\n        if (next && !visited.has(next)) queue.push(next);\n      }\n    }\n    return false;\n  }\n}\n\nconst dfa = new DFA(\n  new Set([\"q0\", \"q1\", \"q2\"]),\n  new Set([\"0\", \"1\"]),\n  new Map([\n    [\"q0,0\", \"q1\"], [\"q0,1\", \"q2\"],\n    [\"q1,0\", \"q0\"], [\"q1,1\", \"q1\"],\n    [\"q2,0\", \"q2\"], [\"q2,1\", \"q2\"]\n  ]),\n  \"q0\", new Set([\"q1\"])\n);\n\nconsole.log(dfa.simulate(\"0\"));      // true (ends in q1)\nconsole.log(dfa.simulate(\"1\"));      // false (ends in q2)\nconsole.log(dfa.simulate(\"010\"));    // true\nconsole.log(dfa.runWithTrace(\"010\")); // [\"q0\",\"q1\",\"q0\",\"q1\"]\nconsole.log(dfa.acceptsAnyString()); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// --------------------------------------------------\n// DFA Table-Filling Minimizer (Hopcroft-Ullman)\n// Finds indistinguishable state pairs and merges them\n// to produce the unique minimal DFA.\n// --------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class DFAMinimizer {\nstates: Set<string>;\nalphabet: Set<string>;\ntransitions: Map<string, string>;\nstart: string;\naccept: Set<string>;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(\nstates: Set<string>, alphabet: Set<string>,\ntransitions: Map<string, string>, start: string, accept: Set<string>\n) {\nthis.states = states; this.alphabet = alphabet;\nthis.transitions = transitions; this.start = start; this.accept = accept;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Table-filling algorithm: mark distinguishable pairs\nminimize(): { states: Set<string>; transitions: Map<string, string>; start: string; accept: Set<string> } {\nconst stateList = [...this.states];\nconst marked = new Set<string>();"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Phase 1: mark (accept, non-accept) pairs\nfor (let i = 0; i &lt; stateList.length; i++) {\n  for (let j = i + 1; j &lt; stateList.length; j++) {\n    const si = stateList[i], sj = stateList[j];\n    if (this.accept.has(si) !== this.accept.has(sj)) {\n      marked.add(`${si},${sj}`);\n    }\n  }\n}\n\n// Phase 2: iteratively mark pairs whose transitions lead to marked pairs\nlet changed = true;\nwhile (changed) {\n  changed = false;\n  for (let i = 0; i &lt; stateList.length; i++) {\n    for (let j = i + 1; j &lt; stateList.length; j++) {\n      const pair = `${stateList[i]},${stateList[j]}`;\n      if (marked.has(pair)) continue;\n      for (const sym of this.alphabet) {\n        const t1 = this.transitions.get(`${stateList[i]},${sym}`);\n        const t2 = this.transitions.get(`${stateList[j]},${sym}`);\n        if (t1 !== undefined && t2 !== undefined && t1 !== t2) {\n          const mp = [t1, t2].sort().join(\",\");\n          if (marked.has(mp)) { marked.add(pair); changed = true; break; }\n        }\n      }\n    }\n  }\n}\n\n// Phase 3: build merged states from unmarked pairs\nconst unmarked = new Set&lt;string&gt;();\nfor (let i = 0; i &lt; stateList.length; i++) {\n  for (let j = i + 1; j &lt; stateList.length; j++) {\n    if (!marked.has(`${stateList[i]},${stateList[j]}`)) {\n      unmarked.add(`${stateList[i]},${stateList[j]}`);\n    }\n  }\n}\n\nconst parent = new Map&lt;string, string&gt;();\nfor (const s of stateList) parent.set(s, s);\n\nconst find = (x: string): string => {\n  while (parent.get(x) !== x) { parent.set(x, parent.get(x)!); x = parent.get(x)!; }\n  return x;\n};\n\nfor (const p of unmarked) {\n  const [a, b] = p.split(\",\");\n  const ra = find(a), rb = find(b);\n  if (ra !== rb) parent.set(ra, rb);\n}\n\n// Build new transition table\nconst mergedStates = new Set([...new Set(stateList.map(s => find(s)))]);\nconst newTrans = new Map&lt;string, string&gt;();\nconst newAccept = new Set&lt;string&gt;();\n\nfor (const s of mergedStates) {\n  if (this.accept.has(s)) newAccept.add(s);\n  for (const sym of this.alphabet) {\n    const t = this.transitions.get(`${s},${sym}`);\n    if (t !== undefined) newTrans.set(`${s},${sym}`, find(t));\n  }\n}\n\nreturn { states: mergedStates, transitions: newTrans, start: find(this.start), accept: newAccept };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// --------------------------------------------------\n// Product DFA Builder — constructs the product\n// automaton of two DFAs for intersection/union/difference\n// --------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["class ProductDFABuilder {\nstatic buildProduct(\ndfa1: { states: Set<string>; alphabet: Set<string>; transitions: Map<string, string>; start: string; accept: Set<string> },\ndfa2: { states: Set<string>; alphabet: Set<string>; transitions: Map<string, string>; start: string; accept: Set<string> },\nacceptCondition: (s1: string, s2: string) => boolean\n) {\nconst productStates = new Set<string>();\nconst productTrans = new Map<string, string>();\nlet productStart = ", (0,jsx_runtime.jsx)(_components.code, {
        children: "${dfa1.start},${dfa2.start}"
      }), ";\nconst productAccept = new Set<string>();"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (const s1 of dfa1.states) {\n  for (const s2 of dfa2.states) {\n    const ps = `${s1},${s2}`;\n    productStates.add(ps);\n    if (acceptCondition(s1, s2)) productAccept.add(ps);\n  }\n}\n\nfor (const s1 of dfa1.states) {\n  for (const s2 of dfa2.states) {\n    for (const sym of dfa1.alphabet) {\n      const t1 = dfa1.transitions.get(`${s1},${sym}`);\n      const t2 = dfa2.transitions.get(`${s2},${sym}`);\n      if (t1 !== undefined && t2 !== undefined) {\n        productTrans.set(`${s1},${s2},${sym}`, `${t1},${t2}`);\n      }\n    }\n  }\n}\n\nreturn { states: productStates, transitions: productTrans, start: productStart, accept: productAccept };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Demo: minimize the example DFA\nconst dfaStates = new Set([\"q0\", \"q1\", \"q2\", \"q3\"]);\nconst dfaAlphabet = new Set([\"0\", \"1\"]);\nconst dfaTransitions = new Map([\n[\"q0,0\", \"q1\"], [\"q0,1\", \"q2\"],\n[\"q1,0\", \"q0\"], [\"q1,1\", \"q3\"],\n[\"q2,0\", \"q3\"], [\"q2,1\", \"q0\"],\n[\"q3,0\", \"q2\"], [\"q3,1\", \"q1\"]\n]);\nconst dfaAccept = new Set([\"q1\"]);"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["const minimizer = new DFAMinimizer(dfaStates, dfaAlphabet, dfaTransitions, \"q0\", dfaAccept);\nconst minimized = minimizer.minimize();\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "Minimized states: ${[...minimized.states].join(\", \")}"
      }), ");\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "Minimized transitions: ${[...minimized.transitions].map(([k, v]) => "
      }), (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "k"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "?"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "{k}?"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0315em"
                },
                children: "k"
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: "?"
            })]
          })
        })]
      }), "{v}", (0,jsx_runtime.jsx)(_components.code, {
        children: ").join(\", \")}"
      }), ");"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// dfa\n// automata-complexity implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'dfa', data: { topic: 'automata-complexity' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n## Summary\n\n- A DFA is a 5-tuple (Q, Σ, δ, q₀, F) with a deterministic transition function.\n- The transition diagram and transition table are equivalent representations.\n- The extended transition function δ̂ processes strings inductively.\n- A language recognized by some DFA is called regular.\n- DFA design requires identifying the finite-state information needed to determine acceptance.\n- Every DFA has exactly one computation path for any input string.\n- **Product construction** enables building complex DFAs from simpler ones.\n- **Table-filling** minimization yields the unique minimal DFA for any regular language.\n- **Equivalence testing** can be done efficiently using the product construction.\n\n## Exercises\n\n### Basic\n\n\n1. Design a DFA over Σ = {a, b} that accepts strings ending with \"aa\".\n2. Design a DFA over Σ = {0, 1} that accepts strings of odd length.\n3. Design a DFA over Σ = {a, b} that accepts strings where the first and last symbols are the same.\n4. For the DFA in Example 1.1, list 3 strings that are accepted and 3 that are rejected.\n5. Design a DFA over Σ = {0, 1} that accepts strings containing \"000\" as a substring.\n\n### Intermediate\n\n\n6. Design a DFA for binary strings that contain an even number of 0s and an odd number of 1s.\n7. Design a DFA over Σ = {a, b} that accepts strings where every occurrence of \"ab\" is followed immediately by \"a\".\n8. Design a DFA that accepts strings over {0, 1} where the binary number represented is at least 4 (leading zeros allowed).\n9. Design a DFA for strings over {a, b} where the number of a's is a multiple of 3 and the number of b's is even.\n10. Prove that the language L = { w ∈ {0,1}* | w = reverse(w) } (palindromes) is NOT regular, using the pigeonhole principle and DFA state arguments. (Hint: assume a DFA with k states exists and consider strings 0ⁱ1 for i = 1,…,k+1.)\n\n### Advanced\n\n\n11. Let L = { w ∈ {0,1}* | the number of occurrences of \"01\" as a substring equals the number of occurrences of \"10\" }. Design a DFA for L.\n12. Show that the class of regular languages is closed under complement (if L is regular, then L̅ = Σ* − L is regular) by constructing a DFA for L̅ from a DFA for L.\n13. Design a DFA for the language L = { w ∈ {a,b}* | |w| mod 3 = 0 and w contains at least one 'a' and at least one 'b' }.\n14. Prove formally that the DFA in Example 1.3 correctly recognizes binary strings divisible by 3 by induction on string length.\n15. Let M₁ accept L₁ and M₂ accept L₂. Show how to construct a DFA that accepts L₁ ∪ L₂ using the Cartesian product of states. Apply this to combine the DFA from Example 1.2 with the DFA from Example 1.3.\n16. Write a TypeScript function `productDFA(m1, m2, 'union')` that returns a DFA for L(m1) ? L(m2). Test it on the \"even length\" and \"odd number of 1s\" DFAs constructed earlier.\n17. Prove that the class of regular languages is closed under the **set difference** operation (L1 - L2) using DFA product construction.\n18. Implement a DFA minimization function that takes a DFA and returns the minimized version by merging equivalent states identified by the table-filling algorithm.\n"
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