"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[64572],{

/***/ 94111
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_theory_of_computation_03_nfa_md_e56_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-theory-of-computation-03-nfa-md-e56.json
const site_docs_courses_theory_of_computation_03_nfa_md_e56_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/theory-of-computation/03-nfa","title":"Chapter 3: Nondeterministic Finite Automata","description":"Previous Regular Expressions","source":"@site/docs/courses/theory-of-computation/03-nfa.md","sourceDirName":"courses/theory-of-computation","slug":"/theory-of-computation/03-nfa","permalink":"/ai-engineering-journey/theory-of-computation/03-nfa","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"03-nfa","slug":"/theory-of-computation/03-nfa","title":"Chapter 3: Nondeterministic Finite Automata","sidebar_label":"Chapter 3: Nondeterministic Finite Automata","sidebar_position":3},"sidebar":"course-theory-of-computation","previous":{"title":"Chapter 2: Deterministic Finite Automata","permalink":"/ai-engineering-journey/theory-of-computation/02-dfa"},"next":{"title":"Chapter 4: Regular Expressions","permalink":"/ai-engineering-journey/theory-of-computation/04-regex"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/theory-of-computation/03-nfa.md


const frontMatter = {
	id: '03-nfa',
	slug: '/theory-of-computation/03-nfa',
	title: 'Chapter 3: Nondeterministic Finite Automata',
	sidebar_label: 'Chapter 3: Nondeterministic Finite Automata',
	sidebar_position: 3
};
const contentTitle = 'Chapter 3: Nondeterministic Finite Automata';

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
  "value": "2.1 The Concept of Nondeterminism",
  "id": "21-the-concept-of-nondeterminism",
  "level": 3
}, {
  "value": "2.2 Formal Definition of an NFA",
  "id": "22-formal-definition-of-an-nfa",
  "level": 3
}, {
  "value": "2.3 Computation of an NFA",
  "id": "23-computation-of-an-nfa",
  "level": 3
}, {
  "value": "2.4 NFA with Epsilon Transitions",
  "id": "24-nfa-with-epsilon-transitions",
  "level": 3
}, {
  "value": "2.5 Equivalence of NFA and DFA: Subset Construction",
  "id": "25-equivalence-of-nfa-and-dfa-subset-construction",
  "level": 3
}, {
  "value": "2.6 Why Nondeterminism Matters",
  "id": "26-why-nondeterminism-matters",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 2.1: NFA for Strings Where the Third-Last Symbol is &#39;1&#39;",
  "id": "example-21-nfa-for-strings-where-the-third-last-symbol-is-1",
  "level": 3
}, {
  "value": "Example 2.2: NFA-ε for Zero or More &#39;ab&#39; Followed by &#39;ba&#39;",
  "id": "example-22-nfa-ε-for-zero-or-more-ab-followed-by-ba",
  "level": 3
}, {
  "value": "Example 2.3: Subset Construction → Convert NFA to DFA",
  "id": "example-23-subset-construction--convert-nfa-to-dfa",
  "level": 3
}, {
  "value": "Example 2.4: NFA for Union Without Nondeterminism",
  "id": "example-24-nfa-for-union-without-nondeterminism",
  "level": 3
}, {
  "value": "TypeScript NFA Simulator",
  "id": "typescript-nfa-simulator",
  "level": 2
}, {
  "value": "NFA Computation Tree",
  "id": "nfa-computation-tree",
  "level": 2
}, {
  "value": "Thompson&#39;s Construction: From Regex to NFA",
  "id": "thompsons-construction-from-regex-to-nfa",
  "level": 2
}, {
  "value": "Basic Building Blocks",
  "id": "basic-building-blocks",
  "level": 3
}, {
  "value": "TypeScript: Thompson Construction",
  "id": "typescript-thompson-construction",
  "level": 3
}, {
  "value": "Mermaid: Subset Construction Visualization",
  "id": "mermaid-subset-construction-visualization",
  "level": 3
}, {
  "value": "NFA to DFA: Detailed Subset Construction in TypeScript",
  "id": "nfa-to-dfa-detailed-subset-construction-in-typescript",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
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
  "value": "TypeScript Implementation: Epsilon-Closure and NFA-to-DFA Conversion",
  "id": "typescript-implementation-epsilon-closure-and-nfa-to-dfa-conversion",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways-1",
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
        id: "chapter-3-nondeterministic-finite-automata",
        children: "Chapter 3: Nondeterministic Finite Automata"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/02-dfa",
          children: "Deterministic Finite Automata"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/04-regex",
          children: "Regular Expressions"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define nondeterministic finite automata formally."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate between NFA and DFA computation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trace NFA execution using computation trees."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct NFAs with and without epsilon transitions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the subset construction algorithm to convert an NFA to a DFA."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove the equivalence of NFA and DFA."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand when nondeterminism simplifies automaton design."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Nondeterminism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple next states per symbol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simpler automata than DFA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFA Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d: Q × S ? P(Q)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accept if any path accepts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Epsilon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e-transitions consume no input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modular automata construction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subset Construction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NFA ? DFA via state sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFA may need exponential states"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NFA = DFA in power"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convenience ? more power"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[NFA Concept] --> B[Formal Definition]\n    B --> C[NFA Computation]\n    C --> D[Epsilon Transitions]\n    D --> E[Subset Construction]\n    E --> F[Equivalence Proof]\n    F --> G[Nondeterminism in CS]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/theory-of-computation/02-nfa.png",
        alt: "NFA vs DFA Comparison"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-the-concept-of-nondeterminism",
      children: "2.1 The Concept of Nondeterminism"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In a DFA, for each state and symbol there is exactly one next state. In an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NFA (nondeterministic finite automaton)"
      }), ", from a given state and symbol, there may be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "zero, one, or multiple"
      }), " possible next states. When presented with choices, the NFA is said to \"guess\" the correct path → it accepts the input if ", (0,jsx_runtime.jsx)(_components.em, {
        children: "some"
      }), " sequence of choices leads to an accepting state."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nondeterminism is a powerful ", (0,jsx_runtime.jsx)(_components.em, {
        children: "descriptive"
      }), " tool: many languages are much easier to describe with an NFA than a DFA. Remarkably, NFAs are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no more powerful"
      }), " than DFAs → every NFA can be converted to an equivalent DFA, though the DFA may require exponentially more states."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-formal-definition-of-an-nfa",
      children: "2.2 Formal Definition of an NFA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NFA"
      }), " is a 5-tuple (Q, Σ, δ, q₀, F) where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q"
        }), " is a finite set of states."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Σ"
        }), " is a finite input alphabet."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "δ: Q × Σ → P(Q)"
        }), " is the transition function (where P(Q) is the power set of Q)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "q₀ ∈ Q"
        }), " is the start state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F ⊆ Q"
        }), " is the set of accepting states."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The key difference from DFA: δ returns a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "set"
      }), " of possible next states rather than a single state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-computation-of-an-nfa",
      children: "2.3 Computation of an NFA"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For an NFA on input w = w₁w₂…wₙ:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The NFA starts in state q₀."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After reading each symbol wᵢ, the NFA may be in any of the states reachable via the transition function from any of the current states."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The NFA ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "accepts"
        }), " w if there exists ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "at least one"
        }), " path from q₀ to some accepting state after processing all symbols."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The NFA ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "rejects"
        }), " w if no path leads to an accepting state."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The set of all possible states after reading a prefix is called the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "configuration"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "computation tree"
      }), " of the NFA."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Extended transition function for NFA: δ̂(q, w) = set of states reachable from q by reading w. Formally:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ̂(q, ε) = {q}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ̂(q, wa) = ∪_{r ∈ δ̂(q, w)} δ(r, a)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Language recognized: L(N) = { w | δ̂(q₀, w) ∩ F ≠ ∅ }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-nfa-with-epsilon-transitions",
      children: "2.4 NFA with Epsilon Transitions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An NFA-ε extends the NFA to allow ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ε-transitions"
      }), " → transitions that occur without consuming any input symbol. The transition function becomes:\nδ: Q × (Σ ∪ {ε}) → P(Q)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ε-closure"
      }), " of a state q, denoted ECLOSE(q), is the set of all states reachable from q using only ε-transitions (including q itself)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To compute the extended transition function for an NFA-ε:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with the ε-closure of the start state."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each symbol, take the ε-closure of the union of all transitions from the current set of states."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NFA-ε are strictly a convenience → they add no computational power. Both standard NFA and NFA-ε are equivalent to DFA."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-equivalence-of-nfa-and-dfa-subset-construction",
      children: "2.5 Equivalence of NFA and DFA: Subset Construction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "subset construction"
      }), " converts any NFA into an equivalent DFA. The key insight: the state of the DFA represents the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "set of states"
      }), " the NFA could be in at that point."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm: Subset Construction"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given NFA N = (Q_N, Σ, δ_N, q₀, F_N), construct DFA D = (Q_D, Σ, δ_D, q₀_D, F_D):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Q_D = { S ⊆ Q_N | S is reachable from the start state } (each DFA state is a set of NFA states)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₀_D = ECLOSE(q₀) (for NFA-ε; otherwise just {q₀})."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ_D(S, a) = ∪_{r ∈ S} ECLOSE(δ_N(r, a)) (for NFA-ε; omit ECLOSE for standard NFA)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "F_D = { S ∈ Q_D | S ∩ F_N ≠ ∅ } (any DFA state containing an accepting NFA state is accepting)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Number of states:"
      }), " The DFA may have up to 2^|Q_N| states, though in practice many are unreachable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-why-nondeterminism-matters",
      children: "2.6 Why Nondeterminism Matters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nondeterminism is a central concept in theoretical computer science. It appears again in:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pushdown automata"
        }), " (Chapter 6): NPDA are strictly more powerful than DPDA."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Turing machines"
        }), " (Chapter 8): NTM are equivalent to DTM but may be exponentially faster."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity theory"
        }), " (Chapter 12): The P vs NP question asks whether nondeterminism adds polynomial-time power."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NDFA/DFA equivalence is special: for finite automata, nondeterminism adds convenience but not power or efficiency (the DFA may be exponentially larger but still finite)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-21-nfa-for-strings-where-the-third-last-symbol-is-1",
      children: "Example 2.1: NFA for Strings Where the Third-Last Symbol is '1'"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design an NFA over Σ = {0, 1} that accepts strings where the third symbol from the end is 1."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution with NFA:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We can \"guess\" where the third-last symbol is. The NFA has 4 states:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₀: Start → haven't guessed yet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₁: Guessed → just read the candidate third-last symbol as 1."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₂: Two more symbols consumed."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₃: Three more symbols consumed (accept if we reach here)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NFA transitions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₀ --1--> q₁ (guess this 1 is the third-last), q₀ --0,1--> q₀ (keep looking)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₁ --0,1--> q₂"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₂ --0,1--> q₃"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₃ is accepting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The NFA nondeterministically chooses when to start counting. If the guess is correct (the position was indeed the third-last), the string is accepted."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compare with DFA:"
      }), " The minimal DFA for this language requires 8 states. The NFA captures the same language with 4 states and intuitive logic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-22-nfa-ε-for-zero-or-more-ab-followed-by-ba",
      children: "Example 2.2: NFA-ε for Zero or More 'ab' Followed by 'ba'"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design an NFA-ε over Σ = {a, b} for L = { (ab)* ba }."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₀ (start) --ε--> q₁ (optionally start the (ab)* loop)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₀ --ε--> q₄ (skip straight to 'ba' part)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₁ --a--> q₂, q₂ --b--> q₁ (the (ab)* loop)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₁ --ε--> q₄ (exit loop to 'ba' part)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₄ --b--> q₅, q₅ --a--> q₆ (accept)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ECLOSE(q₀) = {q₀, q₁, q₄}. The ε-transitions let the NFA \"decide\" when to stop looping without consuming symbols."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-23-subset-construction--convert-nfa-to-dfa",
      children: "Example 2.3: Subset Construction → Convert NFA to DFA"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Convert this NFA over Σ = {a, b} to a DFA:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "States: {q₀, q₁, q₂}, start q₀, accept {q₂}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ(q₀, a) = {q₀, q₁}, δ(q₀, b) = {q₀}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ(q₁, a) = ∅, δ(q₁, b) = {q₂}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ(q₂, a) = ∅, δ(q₂, b) = ∅"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Start state of DFA = {q₀}."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Compute transitions:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ_D({q₀}, a) = δ(q₀, a) = {q₀, q₁}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ_D({q₀}, b) = δ(q₀, b) = {q₀}"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Process new state {q₀, q₁}:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ_D({q₀, q₁}, a) = δ(q₀, a) ∪ δ(q₁, a) = {q₀, q₁} ∪ ∅ = {q₀, q₁}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ_D({q₀, q₁}, b) = δ(q₀, b) ∪ δ(q₁, b) = {q₀} ∪ {q₂} = {q₀, q₂}"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Process {q₀, q₂}:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ_D({q₀, q₂}, a) = {q₀, q₁} ∪ ∅ = {q₀, q₁}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ_D({q₀, q₂}, b) = {q₀} ∪ ∅ = {q₀}"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Accepting states: {q₀, q₂} (contains q₂)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The resulting DFA has 3 states: {q₀}, {q₀, q₁}, {q₀, q₂}, with {q₀, q₂} as the only accepting state."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-24-nfa-for-union-without-nondeterminism",
      children: "Example 2.4: NFA for Union Without Nondeterminism"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To accept L₁ ∪ L₂ where L₁ = strings ending with \"ab\" and L₂ = strings starting with \"b\":"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DFA approach: product construction, 4-6 states.\nNFA approach: add a new start state q with ε-transitions to the start states of L₁'s and L₂'s automata. The NFA nondeterministically chooses which language to match against."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This shows why nondeterminism simplifies ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "modular"
      }), " automaton construction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-nfa-simulator",
      children: "TypeScript NFA Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An NFA can be simulated by tracking all possible current states:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class NFA {\n  constructor(\n    private Q: Set<string>,\n    private sigma: Set<string>,\n    private delta: Map<string, Set<string>>,\n    private q0: string,\n    private F: Set<string>,\n    private epsilon: Map<string, Set<string>> = new Map()\n  ) {}\n\n  private eclose(states: Set<string>): Set<string> {\n    const result = new Set(states);\n    const stack = [...states];\n    while (stack.length > 0) {\n      const q = stack.pop()!;\n      const eps = this.epsilon.get(q) || new Set();\n      for (const r of eps) {\n        if (!result.has(r)) {\n          result.add(r);\n          stack.push(r);\n        }\n      }\n    }\n    return result;\n  }\n\n  simulate(input: string): boolean {\n    let current = this.eclose(new Set([this.q0]));\n    for (const symbol of input) {\n      const next = new Set<string>();\n      for (const q of current) {\n        const trans = this.delta.get(`${q},${symbol}`) || new Set();\n        for (const r of trans) next.add(r);\n      }\n      current = this.eclose(next);\n    }\n    for (const q of current) {\n      if (this.F.has(q)) return true;\n    }\n    return false;\n  }\n}\n\n// NFA for strings ending with \"01\"\nconst delta = new Map<string, Set<string>>();\ndelta.set('q0,0', new Set(['q0', 'q1']));\ndelta.set('q0,1', new Set(['q0']));\ndelta.set('q1,1', new Set(['q2']));\nconst nfa = new NFA(\n  new Set(['q0', 'q1', 'q2']),\n  new Set(['0', '1']),\n  delta, 'q0', new Set(['q2'])\n);\nconsole.log(nfa.simulate('00101'));  // true\nconsole.log(nfa.simulate('00100'));  // false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This tracks sets of states rather than a single state, implementing the subset construction's computation directly. The simulation runs in polynomial time because we store all reachable states explicitly."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nfa-computation-tree",
      children: "NFA Computation Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An NFA's execution on input can be visualized as a tree where each branch represents one possible path:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    q0((q0)) -->|\"read: 1\"| q0_1((q0))\n    q0 -->|\"read: 1\"| q1((q1))\n    q0_1 -->|\"read: 0\"| q0_2((q0))\n    q0_1 -->|\"read: 0\"| q1_2((q1))\n    q1 -->|\"read: 0\"| q2(((q2)))\n    q2 --- accept[\"? Accept\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The NFA accepts if any leaf node is an accepting state after processing all input. The simulation implicitly performs a breadth-first search of this tree."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "thompsons-construction-from-regex-to-nfa",
      children: "Thompson's Construction: From Regex to NFA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["One of the most important applications of NFA theory is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thompson's construction"
      }), ", which converts a regular expression into an equivalent NFA-e. This is the foundation of how regex engines work under the hood."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-building-blocks",
      children: "Basic Building Blocks"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Regex"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NFA Fragment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(a)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "q0 --a--> q1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single symbol"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(e)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "q0"
            }), " (same state is accepting)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty string"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ø"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "q0"
            }), " (non-accepting with no transitions)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty language"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(r_1 \\mid r_2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New start with e to both sub-NFAs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(r_1 r_2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accept of r1 connects via e to start of r2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concatenation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(r^*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop: e from accept back to start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kleene star"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-thompson-construction",
      children: "TypeScript: Thompson Construction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type NFragment = { start: string; accept: string };\n\nclass ThompsonNFA {\n  private stateCounter = 0;\n  private transitions: Map<string, Map<string, Set<string>>> = new Map();\n\n  private newState(): string {\n    return `q${this.stateCounter++}`;\n  }\n\n  symbol(sym: string): NFragment {\n    const s = this.newState(), a = this.newState();\n    this.addTrans(s, sym, a);\n    return { start: s, accept: a };\n  }\n\n  private addTrans(from: string, sym: string, to: string) {\n    if (!this.transitions.has(from))\n      this.transitions.set(from, new Map());\n    const t = this.transitions.get(from)!;\n    if (!t.has(sym)) t.set(sym, new Set());\n    t.get(sym)!.add(to);\n  }\n\n  union(r1: NFragment, r2: NFragment): NFragment {\n    const s = this.newState(), a = this.newState();\n    this.addTrans(s, 'e', r1.start);\n    this.addTrans(s, 'e', r2.start);\n    this.addTrans(r1.accept, 'e', a);\n    this.addTrans(r2.accept, 'e', a);\n    return { start: s, accept: a };\n  }\n\n  concat(r1: NFragment, r2: NFragment): NFragment {\n    this.addTrans(r1.accept, 'e', r2.start);\n    return { start: r1.start, accept: r2.accept };\n  }\n\n  star(r: NFragment): NFragment {\n    const s = this.newState(), a = this.newState();\n    this.addTrans(s, 'e', r.start);\n    this.addTrans(s, 'e', a);\n    this.addTrans(r.accept, 'e', r.start);\n    this.addTrans(r.accept, 'e', a);\n    return { start: s, accept: a };\n  }\n}\n\n// Build NFA for (a|b)*ab\nconst th = new ThompsonNFA();\nconst a = th.symbol('a');\nconst b = th.symbol('b');\nconst unionAB = th.union(a, b);\nconst starAB = th.star(unionAB);\nconst a2 = th.symbol('a');\nconst b2 = th.symbol('b');\nconst expr = th.concat(th.concat(starAB, a2), b2);\nconsole.log(`NFA for (a|b)*ab: start=${expr.start}, accept=${expr.accept}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-subset-construction-visualization",
      children: "Mermaid: Subset Construction Visualization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    subgraph \"NFA States\"\n        q0((q0))\n        q1((q1))\n        q2(((q2)))\n    end\n    subgraph \"DFA States (Subsets)\"\n        s0[\"{q0}\"]\n        s01[\"{q0,q1}\"]\n        s02[\"{q0,q2}\"]\n    end\n    s0 -->|a| s01\n    s0 -->|b| s0\n    s01 -->|a| s01\n    s01 -->|b| s02\n    s02 -->|a| s01\n    s02 -->|b| s0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each DFA state is labeled by the set of NFA states reachable at that point. The DFA transitions follow the union of all NFA transitions from the constituent states."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nfa-to-dfa-detailed-subset-construction-in-typescript",
      children: "NFA to DFA: Detailed Subset Construction in TypeScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function nfaToDfa(nfa: NFA): DFA {\n  const nfaStates = [...nfa['Q']];\n  const sigma = [...nfa['sigma']];\n\n  // Map from DFA state (subset of NFA states) to DFA state name\n  const subsetNames = new Map<string, string>();\n  const dfaDelta = new Map<string, string>();\n  const dfaStates = new Set<string>();\n  const dfaAccept = new Set<string>();\n  const worklist: string[] = [];\n\n  const startSubset = [...nfa['eclose'](new Set([nfa['q0']]))].sort().join(',');\n  subsetNames.set(startSubset, `{${startSubset}}`);\n  worklist.push(startSubset);\n  dfaStates.add(startSubset);\n\n  while (worklist.length > 0) {\n    const current = worklist.pop()!;\n    const currentStates = new Set(current.split(',').filter(s => s.length > 0));\n\n    // Check if this subset contains an accepting state\n    for (const s of currentStates) {\n      if (nfa['F'].has(s)) {\n        dfaAccept.add(current);\n        break;\n      }\n    }\n\n    for (const sym of sigma) {\n      const nextSet = new Set<string>();\n      for (const s of currentStates) {\n        const trans = nfa['delta'].get(`${s},${sym}`);\n        if (trans) for (const t of trans) nextSet.add(t);\n      }\n\n      const eclosed = [...nfa['eclose'](nextSet)].sort().join(',');\n      const key = `${current},${sym}`;\n      dfaDelta.set(key, eclosed);\n\n      if (!subsetNames.has(eclosed)) {\n        subsetNames.set(eclosed, `{${eclosed}}`);\n        dfaStates.add(eclosed);\n        worklist.push(eclosed);\n      }\n    }\n  }\n\n  return new DFA(\n    dfaStates,\n    nfa['sigma'],\n    dfaDelta,\n    startSubset,\n    dfaAccept\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The subset construction demonstrates that NFAs are a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "convenience abstraction"
      }), " — they make automaton design easier without expanding the class of recognizable languages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Nondeterminism is a specification tool."
          }), " When designing an automaton, start with an NFA for clarity, then convert to a DFA for implementation. The NFA captures the ", (0,jsx_runtime.jsx)(_components.em, {
            children: "what"
          }), " without worrying about the ", (0,jsx_runtime.jsx)(_components.em, {
            children: "how"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Epsilon transitions enable modularity."
          }), " Use e-transitions to compose automata like building blocks — glue together sub-automata for union, concatenation, and Kleene star."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Subset construction can explode."
          }), " An NFA with k states can yield a DFA with up to 2^k states. In practice, many subsets are unreachable, but the worst case is real."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "NFA simulation is efficient."
          }), " Simulating an NFA directly (tracking state sets) takes O(k²n) time for k states and n input symbols — no need to materialize the DFA unless you need repeated simulations."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DFA"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NFA"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NFA-e"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "d returns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set of states"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set of states"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "e-transitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Potentially large"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Potentially smaller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Potentially smaller"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Design ease"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easiest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Power"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular langs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular langs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular langs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "NFA Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Formal NFA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Q, S, d, q0, F), d: Q × S ? P(Q)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extended d^"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{ r"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Acceptance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d^(q0, w) n F ? Ø"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "e-closure(q)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "States reachable via e*"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFA-e d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d: Q × (S ? {e}) ? P(Q)"
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
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compilers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combined NFA for token recognition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Text search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regex search engines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent system behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intrusion pattern matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bioinformatics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence motif search"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " NFA transition function returns:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) A single state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) A set of states ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) A Boolean"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) A string"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** NFA d returns a set of possible next states — this is the key difference from DFA.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " An NFA accepts w if:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) All paths lead to accept"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) At least one path leads to accept ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The NFA reads all symbols"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) No path rejects"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** NFA acceptance requires at least one computation path to an accepting state.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " e-closure(q) contains:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) States reachable by one symbol"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) States reachable via e-transitions only ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) All reachable states"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Only q itself"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** e-closure(q) = { r | q ?* r using only e-transitions }.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Subset construction DFA may have up to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Same as NFA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Twice the NFA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) 2^|Q_NFA| states ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) |Q_NFA| log |Q_NFA|"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C)** Each DFA state = subset of NFA states, so up to 2^k states.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Are NFA more powerful than DFA?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Yes, NFA recognize more languages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) No, they are equivalent ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Only NFA-e are more powerful"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Only if e-transitions are used"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** NFA and DFA recognize exactly the same class: regular languages.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-epsilon-closure-and-nfa-to-dfa-conversion",
      children: "TypeScript Implementation: Epsilon-Closure and NFA-to-DFA Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// NFA Simulator with epsilon-closure and subset construction\n\ntype NFAState = string;\ntype NFATransitions = Map<string, Set<NFAState>>; // key: \"state,symbol\"\n\nclass NFA {\n  constructor(\n    public states: Set<NFAState>,\n    public alphabet: Set<string>,\n    public transitions: NFATransitions,\n    public epsilon: Map<NFAState, Set<NFAState>>,\n    public start: NFAState,\n    public accept: Set<NFAState>\n  ) {}\n\n  epsilonClosure(states: Set<NFAState>): Set<NFAState> {\n    const closure = new Set(states);\n    const stack = [...states];\n    while (stack.length > 0) {\n      const state = stack.pop()!;\n      const epsTrans = this.epsilon.get(state);\n      if (epsTrans) {\n        for (const next of epsTrans) {\n          if (!closure.has(next)) {\n            closure.add(next);\n            stack.push(next);\n          }\n        }\n      }\n    }\n    return closure;\n  }\n\n  move(states: Set<NFAState>, symbol: string): Set<NFAState> {\n    const result = new Set<NFAState>();\n    for (const state of states) {\n      const key = `${state},${symbol}`;\n      const targets = this.transitions.get(key);\n      if (targets) for (const t of targets) result.add(t);\n    }\n    return result;\n  }\n\n  accepts(input: string): boolean {\n    let current = this.epsilonClosure(new Set([this.start]));\n    for (const symbol of input) {\n      current = this.epsilonClosure(this.move(current, symbol));\n      if (current.size === 0) return false;\n    }\n    for (const state of current) if (this.accept.has(state)) return true;\n    return false;\n  }\n\n  toDFA(): { states: Set<string>; transitions: Map<string, string>; start: string; accept: Set<string> } {\n    const dfaStates = new Map<string, Set<NFAState>>();\n    const dfaTransitions = new Map<string, string>();\n    const dfaAccept = new Set<string>();\n    const queue: string[] = [];\n\n    const startClosure = this.epsilonClosure(new Set([this.start]));\n    const startName = this.setName(startClosure);\n    dfaStates.set(startName, startClosure);\n    queue.push(startName);\n\n    while (queue.length > 0) {\n      const dfaState = queue.shift()!;\n      const nfaSet = dfaStates.get(dfaState)!;\n\n      // Check if this DFA state contains an NFA accept state\n      for (const s of nfaSet) if (this.accept.has(s)) dfaAccept.add(dfaState);\n\n      for (const sym of this.alphabet) {\n        const moveSet = this.move(nfaSet, sym);\n        const closure = this.epsilonClosure(moveSet);\n        if (closure.size === 0) continue;\n        const name = this.setName(closure);\n        dfaTransitions.set(`${dfaState},${sym}`, name);\n        if (!dfaStates.has(name)) {\n          dfaStates.set(name, closure);\n          queue.push(name);\n        }\n      }\n    }\n\n    return {\n      states: new Set([...dfaStates.keys()]),\n      transitions: dfaTransitions,\n      start: startName,\n      accept: dfaAccept\n    };\n  }\n\n  private setName(set: Set<NFAState>): string {\n    return `{${[...set].sort().join(\",\")}}`;\n  }\n}\n\n// NFA recognizing strings ending with \"01\"\nconst nfa = new NFA(\n  new Set([\"q0\", \"q1\", \"q2\"]),\n  new Set([\"0\", \"1\"]),\n  new Map([\n    [\"q0,0\", new Set([\"q0\", \"q1\"])],\n    [\"q0,1\", new Set([\"q0\"])],\n    [\"q1,0\", new Set()],\n    [\"q1,1\", new Set([\"q2\"])],\n    [\"q2,0\", new Set()],\n    [\"q2,1\", new Set()]\n  ]),\n  new Map(),\n  \"q0\", new Set([\"q2\"])\n);\n\nconsole.log(nfa.accepts(\"01\"));     // true\nconsole.log(nfa.accepts(\"101\"));    // true\nconsole.log(nfa.accepts(\"0\"));      // false\nconsole.log(nfa.accepts(\"10\"));     // false\n\nconst dfa = nfa.toDFA();\nconsole.log(dfa.states);            // DFA state names\nconsole.log(dfa.accept);            // DFA accepts\nconsole.log([...dfa.transitions]);  // DFA transition table\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// --------------------------------------------------------\n// Epsilon-Closure Calculator — given an NFA state,\n// finds all states reachable via e-transitions.\n// --------------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class EpsilonClosureCalculator {\n// Compute e-closure for a single state\nstatic compute(\nstate: string,\nepsilonTransitions: Map<string, Set<string>>\n): Set<string> {\nconst closure = new Set<string>([state]);\nconst stack = [state];\nwhile (stack.length > 0) {\nconst current = stack.pop()!;\nconst epsilonNext = epsilonTransitions.get(current);\nif (epsilonNext) {\nfor (const next of epsilonNext) {\nif (!closure.has(next)) {\nclosure.add(next);\nstack.push(next);\n}\n}\n}\n}\nreturn closure;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Compute e-closure for a set of states\nstatic computeSet(\nstates: Set<string>,\nepsilonTransitions: Map<string, Set<string>>\n): Set<string> {\nconst result = new Set<string>();\nfor (const s of states) {\nconst c = EpsilonClosureCalculator.compute(s, epsilonTransitions);\nfor (const cs of c) result.add(cs);\n}\nreturn result;\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// --------------------------------------------------------\n// Subset Construction (NFA ? DFA converter)\n// Converts any NFA (with or without e) into an\n// equivalent DFA using the powerset construction.\n// --------------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class SubsetConstructionConverter {\nstatic convert(\nnfaStates: Set<string>,\nalphabet: Set<string>,\nnfaTransitions: Map<string, Set<string>>,\nepsilonTransitions: Map<string, Set<string>>,\nnfaStart: string,\nnfaAccept: Set<string>\n): {\ndfaStates: Set<string>;\ndfaTransitions: Map<string, string>;\ndfaStart: string;\ndfaAccept: Set<string>;\n} {\nconst dfaStates = new Set<string>();\nconst dfaTransitions = new Map<string, string>();\nconst dfaAccept = new Set<string>();"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Initial DFA state = e-closure of NFA start state\nconst startClosure = EpsilonClosureCalculator.compute(nfaStart, epsilonTransitions);\nconst startLabel = [...startClosure].sort().join(\",\");\ndfaStates.add(startLabel);\n\nif ([...startClosure].some(s => nfaAccept.has(s))) {\n  dfaAccept.add(startLabel);\n}\n\nconst queue = [startLabel];\nconst processed = new Set&lt;string&gt;([startLabel]);\n\nwhile (queue.length > 0) {\n  const currentLabel = queue.shift()!;\n  const currentSet = new Set(currentLabel.split(\",\").filter(Boolean));\n\n  for (const sym of alphabet) {\n    // Find all states reachable on symbol\n    const moveResult = new Set&lt;string&gt;();\n    for (const s of currentSet) {\n      const trans = nfaTransitions.get(`${s},${sym}`);\n      if (trans) {\n        for (const t of trans) moveResult.add(t);\n      }\n    }\n\n    // Compute e-closure of the move result\n    const closure = EpsilonClosureCalculator.computeSet(moveResult, epsilonTransitions);\n    if (closure.size === 0) continue;\n\n    const nextLabel = [...closure].sort().join(\",\");\n    dfaTransitions.set(`${currentLabel},${sym}`, nextLabel);\n\n    if (!processed.has(nextLabel)) {\n      processed.add(nextLabel);\n      dfaStates.add(nextLabel);\n      queue.push(nextLabel);\n\n      if ([...closure].some(s => nfaAccept.has(s))) {\n        dfaAccept.add(nextLabel);\n      }\n    }\n  }\n}\n\nreturn { dfaStates, dfaTransitions, dfaStart: startLabel, dfaAccept };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Demo: convert the running NFA example to DFA\nconst nfaStates = new Set([\"q0\", \"q1\", \"q2\"]);\nconst nfaAlphabet = new Set([\"0\", \"1\"]);\nconst nfaTransitions = new Map<string, Set<string>>([\n[\"q0,0\", new Set([\"q0\", \"q1\"])], [\"q0,1\", new Set([\"q0\"])],\n[\"q1,0\", new Set()], [\"q1,1\", new Set([\"q2\"])],\n[\"q2,0\", new Set()], [\"q2,1\", new Set()],\n]);\nconst nfaEpsilon = new Map<string, Set<string>>();"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["const result = SubsetConstructionConverter.convert(\nnfaStates, nfaAlphabet, nfaTransitions, nfaEpsilon, \"q0\", new Set([\"q2\"])\n);\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "DFA states (subset construction): ${[...result.dfaStates].join(\", \")}"
      }), ");\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "DFA start: ${result.dfaStart}"
      }), ");\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "DFA accept: ${[...result.dfaAccept].join(\", \")}"
      }), ");\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "DFA transitions: ${[...result.dfaTransitions].map(([k, v]) => "
      }), "${k} ? ${v}", (0,jsx_runtime.jsx)(_components.code, {
        children: ").join(\"; \")}"
      }), ");"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// nfa\n// automata-complexity implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'nfa', data: { topic: 'automata-complexity' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n## Summary\n\n- NFA generalizes DFA by allowing multiple or zero next states per input symbol.\n- NFA accepts a string if at least one computation path leads to acceptance.\n- NFA-ε adds transitions that consume no input; ε-closure captures all states reachable via ε-steps.\n- **Subset construction** converts any NFA to an equivalent DFA by tracking sets of NFA states.\n- The DFA may have up to exponentially more states than the NFA.\n- NFA and DFA recognize exactly the same class of languages: the regular languages.\n- Nondeterminism simplifies automaton design for many languages.\n- The subset construction is the basis for converting regex patterns into efficient matchers.\n- Understanding NFA computation trees is essential for grasping how backtracking regex engines work.\n- **Thompson's construction** provides a systematic method for building NFA-e fragments from regular expressions, forming the theoretical basis of practical regex engines.\n- **Computation tree analysis** reveals that NFA acceptance can be modeled as reachability in a directed graph of configurations.\n- The **exponential state blowup** in the DFA equivalent to an NFA is worst-case unavoidable, as shown by the language family where the k-th symbol from the end is constrained.\n\n## Exercises\n\n### Basic\n\n1. Design an NFA over Σ = {a, b} that accepts strings where the second-last symbol is 'a'.\n2. Design an NFA-ε for the language L = a* b* c*.\n3. Compute the ε-closure of each state in an NFA-ε where: q₀ --ε--> q₁, q₁ --ε--> q₂, q₂ --a--> q₀.\n4. Convert the NFA from Example 2.1 to a DFA using subset construction.\n5. Design an NFA for L = { w ∈ {0,1}* | w contains both \"00\" and \"11\" as substrings }.\n\n### Intermediate\n\n6. Convert the following NFA-ε to a DFA: Q={q₀,q₁,q₂}, Σ={a,b}, δ(q₀,ε)={q₁}, δ(q₁,a)={q₁,q₂}, δ(q₁,b)={q₀}, δ(q₂,a)={q₂}, F={q₂}.\n7. Prove formally that if L is recognized by an NFA with k states, then L is recognized by a DFA with at most 2ᵏ states.\n8. Design an NFA for L = { w ∈ {a,b}* | |w| ≥ 3 and the third symbol equals the last symbol }.\n9. Show that NFA-ε are equivalent to NFA by showing how to eliminate ε-transitions.\n10. Design an NFA that accepts strings over {0,1} where there are at most two 1s or the string length is even. Convert to DFA.\n\n### Advanced\n\n11. Prove that the subset construction produces the minimal DFA for a given NFA (i.e., show that any DFA equivalent to the NFA must have at least as many states as the reachable subsets).\n12. Consider the language L = { w ∈ {0,1}* | w interpreted as binary is congruent to 1 mod 4 OR w contains an even number of 0s }. Design an NFA with at most 6 states using ε-transitions. Convert to DFA.\n13. Prove that for any NFA, the subset construction yields a DFA with at most 2ⁿ states, and that this bound is tight → exhibit a family of languages Lₙ that require a DFA with 2ⁿ states but only an NFA with n+1 states.\n14. Design an NFA-ε where ε-transitions create exponentially many states in the equivalent DFA. Show the full subset construction.\n15. Given two NFA-ε N₁ and N₂, show how to construct an NFA-ε for L(N₁)L(N₂) (concatenation) and L(N₁)* (Kleene star) using ε-transitions. Prove the constructions correct.\n16. Implement Thompson's construction in TypeScript for the full regex syntax including union (`|`), concatenation, and Kleene star (`*`). Test it by building the NFA for `(0|1)*00` and simulating it on \"100\" and \"101\".\n17. Write a TypeScript function that takes an NFA and returns a DFA using the full subset construction with e-closure handling. Test it on the NFA from Example 2.1.\n18. Prove that if an NFA has k states, the equivalent minimal DFA may have up to 2^k states. Construct a family of languages where this exponential blowup is realized. (Hint: consider the language of strings where the k-th symbol from the end is 1.)\n\n### Mermaid: NFA to DFA Conversion Flow\n\n```mermaid\nflowchart TD\n    A[\"Start with NFA N<br/>(Q, S, d, q0, F)\"] --> B[\"Compute e-closure of start set<br/>S0 = ECLOSE({q0})\"]\n    B --> C[\"Add S0 to worklist<br/>and DFA states Q_D\"]\n    C --> D[\"Pop state S from worklist\"]\n    D --> E[\"For each symbol a ? S:<br/>T = ?_{r?S} ECLOSE(d(r,a))\"]\n    E --> F{\"Is T already in Q_D?\"}\n    F -->|No| G[\"Add T to Q_D and worklist\"]\n    F -->|Yes| H[\"Use existing state\"]\n    G --> I[\"Add transition<br/>d_D(S, a) = T\"]\n    H --> I\n    I --> J{\"More symbols?\"}\n    J -->|Yes| E\n    J -->|No| K{\"Worklist empty?\"}\n    K -->|No| D\n    K -->|Yes| L[\"Set F_D = {S ? Q_D | S n F ? Ø}\"]\n    L --> M[\"Return DFA D = (Q_D, S, d_D, S0, F_D)\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practical-takeaways-1",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Nondeterminism is a specification tool."
          }), " When designing an automaton, start with an NFA for clarity, then convert to a DFA for implementation. The NFA captures the ", (0,jsx_runtime.jsx)(_components.em, {
            children: "what"
          }), " without worrying about the ", (0,jsx_runtime.jsx)(_components.em, {
            children: "how"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Epsilon transitions enable modularity."
          }), " Use e-transitions to compose automata like building blocks — glue together sub-automata for union, concatenation, and Kleene star. Thompson's construction is the canonical example."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Subset construction can explode."
          }), " An NFA with k states can yield a DFA with up to 2^k states. In practice, many subsets are unreachable, but the worst case is real and limits direct DFA generation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "NFA simulation is efficient."
          }), " Simulating an NFA directly (tracking state sets) takes O(k²n) time for k states and n input symbols — no need to materialize the DFA unless you need repeated simulations."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Thompson construction is everywhere."
          }), " Modern regex engines like PCRE, RE2, and Rust's regex crate all build NFA representations internally, then apply variants of the subset construction to run matches efficiently."]
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