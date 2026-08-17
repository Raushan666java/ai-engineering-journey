"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[22017],{

/***/ 82109
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_theory_of_computation_07_pda_md_b8c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-theory-of-computation-07-pda-md-b8c.json
const site_docs_courses_theory_of_computation_07_pda_md_b8c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/theory-of-computation/07-pda","title":"Chapter 7: Pushdown Automata","description":"Previous Properties of Context-Free Languages","source":"@site/docs/courses/theory-of-computation/07-pda.md","sourceDirName":"courses/theory-of-computation","slug":"/theory-of-computation/07-pda","permalink":"/ai-engineering-journey/theory-of-computation/07-pda","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"07-pda","slug":"/theory-of-computation/07-pda","title":"Chapter 7: Pushdown Automata","sidebar_label":"Chapter 7: Pushdown Automata","sidebar_position":7},"sidebar":"course-theory-of-computation","previous":{"title":"Chapter 6: Context-Free Grammars","permalink":"/ai-engineering-journey/theory-of-computation/06-cfg"},"next":{"title":"Chapter 8: Properties of Context-Free Languages","permalink":"/ai-engineering-journey/theory-of-computation/08-cfl"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/theory-of-computation/07-pda.md


const frontMatter = {
	id: '07-pda',
	slug: '/theory-of-computation/07-pda',
	title: 'Chapter 7: Pushdown Automata',
	sidebar_label: 'Chapter 7: Pushdown Automata',
	sidebar_position: 7
};
const contentTitle = 'Chapter 7: Pushdown Automata';

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
  "value": "6.1 What is a Pushdown Automaton?",
  "id": "61-what-is-a-pushdown-automaton",
  "level": 3
}, {
  "value": "6.2 Formal Definition of a PDA",
  "id": "62-formal-definition-of-a-pda",
  "level": 3
}, {
  "value": "6.3 PDA Computation",
  "id": "63-pda-computation",
  "level": 3
}, {
  "value": "6.4 Deterministic vs Nondeterministic PDA",
  "id": "64-deterministic-vs-nondeterministic-pda",
  "level": 3
}, {
  "value": "6.5 Equivalence of PDA and CFG",
  "id": "65-equivalence-of-pda-and-cfg",
  "level": 3
}, {
  "value": "6.6 PDA Design Patterns",
  "id": "66-pda-design-patterns",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 6.1: PDA for L = { aⁿbⁿ | n ≥ 0 }",
  "id": "example-61-pda-for-l---aⁿbⁿ--n--0-",
  "level": 3
}, {
  "value": "Example 6.2: PDA for Palindromes L = { wwʀ | w ∈ {a,b}* }",
  "id": "example-62-pda-for-palindromes-l---wwʀ--w--ab-",
  "level": 3
}, {
  "value": "Example 6.3: PDA for { aⁿb²ⁿ | n ≥ 0 }",
  "id": "example-63-pda-for--aⁿbⁿ--n--0-",
  "level": 3
}, {
  "value": "Example 6.4: CFG to PDA Conversion",
  "id": "example-64-cfg-to-pda-conversion",
  "level": 3
}, {
  "value": "Example 6.5: PDA for Balanced Parentheses",
  "id": "example-65-pda-for-balanced-parentheses",
  "level": 3
}, {
  "value": "TypeScript PDA Simulator",
  "id": "typescript-pda-simulator",
  "level": 2
}, {
  "value": "Acceptance by Final State vs Empty Stack",
  "id": "acceptance-by-final-state-vs-empty-stack",
  "level": 2
}, {
  "value": "Equivalence Proof",
  "id": "equivalence-proof",
  "level": 3
}, {
  "value": "Bottom-Up PDA Construction (Shift-Reduce)",
  "id": "bottom-up-pda-construction-shift-reduce",
  "level": 2
}, {
  "value": "TypeScript: Shift-Reduce PDA Simulation",
  "id": "typescript-shift-reduce-pda-simulation",
  "level": 3
}, {
  "value": "PDA Instantaneous Description Diagrams",
  "id": "pda-instantaneous-description-diagrams",
  "level": 2
}, {
  "value": "PDA to CFG Conversion Algorithm",
  "id": "pda-to-cfg-conversion-algorithm",
  "level": 2
}, {
  "value": "Production Rules",
  "id": "production-rules",
  "level": 3
}, {
  "value": "TypeScript: PDA to CFG (Partial Implementation)",
  "id": "typescript-pda-to-cfg-partial-implementation",
  "level": 3
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
  "value": "TypeScript: PDA Simulator",
  "id": "typescript-pda-simulator-1",
  "level": 3
}, {
  "value": "TypeScript Implementation: PDA Simulator and CFG-to-PDA Converter",
  "id": "typescript-implementation-pda-simulator-and-cfg-to-pda-converter",
  "level": 2
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
        id: "chapter-7-pushdown-automata",
        children: "Chapter 7: Pushdown Automata"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/06-cfg",
          children: "Context-Free Grammars"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/08-cfl",
          children: "Properties of Context-Free Languages"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define pushdown automata (PDA) formally."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between deterministic and nondeterministic PDA."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe PDA computation using instantaneous descriptions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design PDA for context-free languages."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert a CFG to an equivalent PDA."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert a PDA to an equivalent CFG."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the limitations of deterministic PDA."
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
            children: "PDA Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NFA + stack (LIFO memory)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recognizes context-free languages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DPDA vs NPDA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not equivalent for PDA!"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some CFLs need nondeterminism"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(state, input, stack) triples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack grows/shrinks during execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CFG ? PDA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every CFG has equivalent PDA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parsing algorithms use this equivalence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counter, accumulator, nesting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common design templates for PDA"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[PDA Definition] --> B[Computation]\n    B --> C[DPDA vs NPDA]\n    C --> D[CFG to PDA]\n    D --> E[PDA to CFG]\n    E --> F[Design Patterns]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/theory-of-computation/06-pda.png",
        alt: "Pushdown Automata Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-what-is-a-pushdown-automaton",
      children: "6.1 What is a Pushdown Automaton?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A pushdown automaton (PDA) extends an NFA with a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "stack"
      }), " → an unbounded memory that can store and retrieve information in last-in-first-out (LIFO) order. This additional memory enables PDAs to recognize ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "context-free languages"
      }), " → languages that NFAs/DFAs cannot recognize (like {aⁿbⁿ | n ≥ 0})."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The stack is a powerful addition: it provides unlimited memory, but the LIFO restriction means not all types of unbounded memory are available (unlike the Turing machine's tape)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-formal-definition-of-a-pda",
      children: "6.2 Formal Definition of a PDA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pushdown automaton"
      }), " is a 6-tuple (Q, Σ, Γ, δ, q₀, F) where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q"
        }), " is a finite set of states."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Σ"
        }), " is the finite input alphabet."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Γ"
        }), " is the finite ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "stack alphabet"
        }), " (symbols that can be pushed onto the stack)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "δ: Q × (Σ ∪ {ε}) × (Γ ∪ {ε}) → P(Q × (Γ ∪ {ε}))"
        }), " is the transition function."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "q₀ ∈ Q"
        }), " is the start state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F ⊆ Q"
        }), " is the set of accepting states."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A transition δ(q, a, X) contains (p, Y), meaning:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "From state q, reading input symbol a (or ε), with X on top of the stack (or ε = any/no check),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move to state p and replace X with Y (if Y = ε, pop X; if Y = X, no change; if Y = ZW, push W then Z → effectively pushing a string)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stack convention:"
      }), " Usually the top of the stack is written first when pushing a string."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-pda-computation",
      children: "6.3 PDA Computation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "configuration"
      }), " (or instantaneous description) of a PDA is a triple (q, w, γ) where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q ∈ Q is the current state."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "w ∈ Σ* is the remaining input."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "γ ∈ Γ* is the stack content (top of stack first)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transitions between configurations follow the transition function."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Acceptance:"
      }), " A PDA accepts a string w if there exists a computation path from (q₀, w, ε) to (q, ε, γ) where q ∈ F (accepting state)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Acceptance by empty stack:"
      }), " An alternative definition requires the stack to be empty at the end. The two definitions are equivalent."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-deterministic-vs-nondeterministic-pda",
      children: "6.4 Deterministic vs Nondeterministic PDA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A PDA is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deterministic (DPDA)"
      }), " if for each (q, a, X) where a ∈ Σ ∪ {ε} and X ∈ Γ ∪ {ε}, there is at most one possible next configuration. Nondeterministic (NPDA) PDAs may have multiple choices."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key difference:"
      }), " Deterministic and nondeterministic PDA are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT"
      }), " equivalent! There are context-free languages that require nondeterminism. Example: { wwʀ | w ∈ {a,b}* } (even-length palindromes) requires nondeterminism to guess the midpoint."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DPDA languages"
      }), " are called deterministic context-free languages (DCFLs), which form a proper subset of CFLs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-equivalence-of-pda-and-cfg",
      children: "6.5 Equivalence of PDA and CFG"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem:"
      }), " A language is context-free if and only if some PDA recognizes it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Direction 1 (CFG → PDA):"
      }), " Given CFG G, construct PDA that simulates a leftmost derivation:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push S (start symbol) onto the stack."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If top of stack is a variable A, nondeterministically choose a production A → α and replace A with α (push α in reverse)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If top of stack is a terminal matching the next input, pop and advance input."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If stack is empty, accept."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "top-down"
      }), " construction produces an NPDA with one state."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Direction 2 (PDA → CFG):"
      }), " Given PDA P, construct CFG G:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Variables are of the form [pXq] meaning: starting in state p with X on top of stack, eventually pop X and end in state q."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Productions simulate stack behavior."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "66-pda-design-patterns",
      children: "6.6 PDA Design Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common patterns for PDA design:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stack as counter:"
        }), " Push symbols to count, pop to decrement."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stack as accumulator:"
        }), " Build a string on the stack, then check against input."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stack for nested structures:"
        }), " Push when entering a nesting level, pop when leaving."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-61-pda-for-l---aⁿbⁿ--n--0-",
      children: "Example 6.1: PDA for L = { aⁿbⁿ | n ≥ 0 }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design: Push a's onto the stack; for each b, pop one a."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "States: q₀ (start), q₁ (reading b's), q₂ (accept)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transitions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ(q₀, a, ε) = {(q₀, A)} → push A for each a"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ(q₀, b, A) = {(q₁, ε)} → switch to b-reading, start popping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ(q₁, b, A) = {(q₁, ε)} → continue popping for b's"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ(q₁, ε, ε) = {(q₂, ε)} → accept when done"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(also: δ(q₀, ε, ε) = {(q₂, ε)} for empty string)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Computation for \"aabb\":\n(q₀, aabb, ε) → (q₀, abb, A) → (q₀, bb, AA) → (q₁, b, A) → (q₁, ε, ε) → (q₂, ε, ε). Accept."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-62-pda-for-palindromes-l---wwʀ--w--ab-",
      children: "Example 6.2: PDA for Palindromes L = { wwʀ | w ∈ {a,b}* }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design: Push symbols onto the stack; nondeterministically guess the midpoint; then pop matching each input symbol."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "States: q₀ (push mode), q₁ (pop mode), q₂ (accept)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transitions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push mode: δ(q₀, a, ε) = {(q₀, A)}, δ(q₀, b, ε) = {(q₀, B)}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Guess midpoint (ε-transition): δ(q₀, ε, ε) = {(q₁, ε)}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pop mode: δ(q₁, a, A) = {(q₁, ε)}, δ(q₁, b, B) = {(q₁, ε)}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accept: δ(q₁, ε, ε) = {(q₂, ε)}"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nondeterminism is essential here: the PDA must \"guess\" when the first half ends."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Computation for \"abba\":\n(q₀, abba, ε) → (q₀, bba, A) → (q₀, ba, BA) → (q₁, ba, BA) [guess midpoint] → (q₁, a, A) → (q₁, ε, ε) → (q₂, ε, ε). Accept."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-63-pda-for--aⁿbⁿ--n--0-",
      children: "Example 6.3: PDA for { aⁿb²ⁿ | n ≥ 0 }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Push two symbols for each a, pop one for each b."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "δ(q₀, a, ε) = {(q₀, AA)} → push two A's for each a\nδ(q₀, b, A) = {(q₁, ε)} → start popping\nδ(q₁, b, A) = {(q₁, ε)} → continue popping\nδ(q₁, ε, ε) = {(q₂, ε)} → accept"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Computation for \"aabbbb\" (n=2):\n(q₀, aabbbb, ε) → (q₀, abbbb, AA) → (q₀, bbbb, AAAA) → (q₁, bbb, AAA) → (q₁, bb, AA) → (q₁, b, A) → (q₁, ε, ε) → (q₂, ε, ε). Accept."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-64-cfg-to-pda-conversion",
      children: "Example 6.4: CFG to PDA Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Convert G: S → aSb | ε to a PDA."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using the top-down construction:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One-state PDA: Q = {q}, start q₀ = q, accept F = {q}."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize: δ(q, ε, ε) = {(q, S$)} → push S and bottom marker $"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For S → aSb: δ(q, ε, S) = {(q, bSa)} → replace S with reverse of aSb"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For S → ε: δ(q, ε, S) = {(q, ε)} → pop S"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For matching terminals: δ(q, a, a) = {(q, ε)}, δ(q, b, b) = {(q, ε)}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accept: δ(q, ε, $) = {(q, ε)}"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This PDA simulates leftmost derivations of G."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-65-pda-for-balanced-parentheses",
      children: "Example 6.5: PDA for Balanced Parentheses"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "L = { w ∈ {(,)}* | parentheses are properly matched }."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transitions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ(q₀, (, ε) = {(q₀, P)} → push P for each '('"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ(q₀, ), P) = {(q₀, ε)} → pop P for each ')'"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "δ(q₀, ε, ε) = {(q₀, ε)} → ε transition (non-consuming)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accept with empty stack (using empty stack acceptance)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The stack counts the nesting depth. At any point, the number of P's on the stack equals the current nesting level. If we try to pop when stack is empty, the computation dies (reject). After processing all input, accept if stack is empty."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-pda-simulator",
      children: "TypeScript PDA Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A PDA can be simulated using a DFS of all possible configurations:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type PDAConfig = {\n  state: string;\n  input: string;\n  stack: string[];\n};\n\nclass PDA {\n  constructor(\n    private Q: Set<string>,\n    private sigma: Set<string>,\n    private gamma: Set<string>,\n    private delta: Map<string, Array<[string, string]>>,\n    private q0: string,\n    private F: Set<string>\n  ) {}\n\n  private key(q: string, a: string, X: string): string {\n    return `${q},${a},${X}`;\n  }\n\n  accepts(input: string): boolean {\n    const stack: PDAConfig[] = [\n      { state: this.q0, input, stack: [] }\n    ];\n    const seen = new Set<string>();\n\n    while (stack.length > 0) {\n      const { state, input, stack: stk } = stack.pop()!;\n      const id = `${state}|${input}|${stk.join('')}`;\n      if (seen.has(id)) continue;\n      seen.add(id);\n\n      if (input.length === 0 && this.F.has(state)) {\n        return true;\n      }\n\n      // e-moves (no input consumed)\n      const epsKey = this.key(state, '', stk[0] || '');\n      const epsTrans = this.delta.get(epsKey) || [];\n      for (const [nextState, pushStr] of epsTrans) {\n        const newStack = [...stk];\n        if (stk.length > 0) newStack.shift();\n        if (pushStr !== '') {\n          for (let i = pushStr.length - 1; i >= 0; i--) {\n            newStack.unshift(pushStr[i]);\n          }\n        }\n        stack.push({ state: nextState, input, stack: newStack });\n      }\n\n      // Consume input\n      if (input.length > 0) {\n        const a = input[0];\n        const rest = input.slice(1);\n        const transKey = this.key(state, a, stk[0] || '');\n        const transitions = this.delta.get(transKey) || [];\n        for (const [nextState, pushStr] of transitions) {\n          const newStack = [...stk];\n          if (stk.length > 0) newStack.shift();\n          if (pushStr !== '') {\n            for (let i = pushStr.length - 1; i >= 0; i--) {\n              newStack.unshift(pushStr[i]);\n            }\n          }\n          stack.push({ state: nextState, input: rest, stack: newStack });\n        }\n      }\n    }\n    return false;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This simulator performs DFS over the PDA's configuration space. Because the stack can grow unboundedly, the search may not terminate for rejecting inputs — which matches the theoretical limitation of PDAs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-by-final-state-vs-empty-stack",
      children: "Acceptance by Final State vs Empty Stack"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PDAs accept strings under two equivalent conventions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Final state acceptance:"
        }), " A configuration ((q, \\varepsilon, \\gamma)) where (q \\in F) is accepting, regardless of stack content."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty stack acceptance:"
        }), " A configuration ((q, \\varepsilon, \\varepsilon)) is accepting, regardless of state."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "equivalence-proof",
      children: "Equivalence Proof"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given a PDA (P_F) that accepts by final state, we construct (P_\\varepsilon) that accepts by empty stack:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a new start state (q'_0) with (\\delta(q'_0, \\varepsilon, \\varepsilon) = {(q_0, $)}) (push bottom marker)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a new state (q_{clear})"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For every accept state (q \\in F), add (\\delta(q, \\varepsilon, X) = {(q_{clear}, \\varepsilon)}) for all (X \\in \\Gamma)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In (q_{clear}), pop everything: (\\delta(q_{clear}, \\varepsilon, X) = {(q_{clear}, \\varepsilon)}) for all (X \\in \\Gamma)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Final State ? Empty Stack Conversion\"\n        q0[\"q0' (new start)\"] -->|\"e, e ? $\"| original[\"Original PDA\"]\n        original -->|\"e, any ? e\"| clear[\"q_clear (new)\"]\n        clear -->|\"e, any ? e\"| clear\n        clear -->|\"e, $ ? e\"| accept[\"? Accept (empty stack)\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bottom-up-pda-construction-shift-reduce",
      children: "Bottom-Up PDA Construction (Shift-Reduce)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Alternatively, a PDA can be constructed ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bottom-up"
      }), " by reducing the input to the start symbol:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "1. Shift: Push the next input symbol onto the stack.\n2. Reduce: If the top of the stack matches the RHS of a production,\n   replace it with the LHS (pop RHS, push LHS).\n3. Accept: If stack contains only S (start symbol) and input is exhausted.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is the foundation of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "shift-reduce parsing"
      }), ", used in LR parsers. The deterministic version (DPDA) corresponds to languages that can be parsed efficiently without backtracking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-shift-reduce-pda-simulation",
      children: "TypeScript: Shift-Reduce PDA Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ShiftReducePDA {\n  private productions: Map<string, string[]> = new Map();\n\n  addProduction(lhs: string, rhs: string) {\n    this.productions.set(rhs, lhs);\n  }\n\n  accepts(input: string): boolean {\n    const stack: string[] = [];\n    const tokens = [...input];\n\n    for (let i = 0; i <= tokens.length; i++) {\n      // Shift\n      if (i < tokens.length) {\n        stack.push(tokens[i]);\n      }\n\n      // Reduce: repeatedly try to reduce top of stack\n      let reduced = true;\n      while (reduced) {\n        reduced = false;\n        for (const [rhs, lhs] of this.productions) {\n          const top = stack.slice(-rhs.length).join('');\n          if (top === rhs) {\n            stack.splice(stack.length - rhs.length, rhs.length);\n            stack.push(lhs);\n            reduced = true;\n            break;\n          }\n        }\n      }\n    }\n\n    return stack.join('') === 'S';\n  }\n}\n\n// Grammar: S ? aSb | e (reverse representation)\nconst sr = new ShiftReducePDA();\nsr.addProduction('S', 'aSb');\nsr.addProduction('S', '');\nconsole.log(sr.accepts('aabb'));  // true\nconsole.log(sr.accepts('aab'));   // false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pda-instantaneous-description-diagrams",
      children: "PDA Instantaneous Description Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    subgraph \"Accepting Computation\"\n        I[\"(q0, aabb, e)\"] -->|\"push A\"| S1[\"(q0, abb, A)\"]\n        S1 -->|\"push A\"| S2[\"(q0, bb, AA)\"]\n        S2 -->|\"pop A\"| S3[\"(q1, b, A)\"]\n        S3 -->|\"pop A\"| S4[\"(q1, e, e)\"]\n        S4 -->|\"e\"| ACC[\"(q2, e, e)?\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pda-to-cfg-conversion-algorithm",
      children: "PDA to CFG Conversion Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The reverse direction (PDA ? CFG) constructs variables ([pXq]) representing: \"starting in state (p) with (X) on top of the stack, eventually pop (X) and end in state (q).\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "production-rules",
      children: "Production Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For each transition (\\delta(p, a, X) = {(r, Y_1Y_2\\ldots Y_k)}):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If (k = 0) (pop): Add (R_{[pXq]} \\to a)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If (k \\geq 1): Add (R_{[pXq]} \\to a R_{[rY_1s_1]} R_{[s_1Y_2s_2]} \\ldots R_{[s_{k-1}Y_kq]}) for all combinations of intermediate states (s_1, s_2, \\ldots, s_{k-1})"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The resulting CFG has (O(|Q|^2 \\cdot |\\Gamma|)) variables."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-pda-to-cfg-partial-implementation",
      children: "TypeScript: PDA to CFG (Partial Implementation)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type PDA2CFG = {\n  variables: Set<string>;\n  productions: Map<string, string[][]>;\n};\n\nfunction pdaToCFG(\n  Q: string[], Sigma: string[], Gamma: string[],\n  delta: Map<string, Array<[string, string]>>,\n  q0: string, F: string[]\n): PDA2CFG {\n  const vars = new Set<string>();\n  const prods = new Map<string, string[][]>();\n\n  // Add variable for each (state, stack_symbol, state) triple\n  for (const p of Q) {\n    for (const X of [...Gamma, '$']) {\n      for (const q of Q) {\n        vars.add(`[${p}X${q}]`);\n      }\n    }\n  }\n\n  // Add start symbol\n  vars.add('S');\n  prods.set('S', [[`[${q0}$${q0}]`]]);\n  for (const q of F) {\n    prods.set('S', [[`[${q0}$${q}]`]]);\n  }\n\n  // Process each transition\n  for (const [key, transitions] of delta) {\n    // Parse key: \"p,a,X\"\n    const [p, a, X] = key.split(',');\n    for (const [r, pushStr] of transitions) {\n      const pushSymbols = [...pushStr];\n      if (pushSymbols.length === 0) {\n        // Pop: R_{[pXr]} ? a\n        const varKey = `[${p}X${r}]`;\n        if (!prods.has(varKey)) prods.set(varKey, []);\n        prods.get(varKey)!.push([a]);\n      }\n      // For k = 1, we'd iterate over all intermediate states\n      // (omitted for brevity — generates O(|Q|^{k-1}) productions)\n    }\n  }\n\n  return { variables: vars, productions: prods };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Stack memory enables counting."
          }), " PDAs can recognize languages like {anbn} that require counting, but the LIFO restriction means only one counter is available — languages requiring two independent counters (like {anbncn}) are beyond CFG."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Nondeterminism is essential for some CFLs."
          }), " Unlike finite automata, nondeterministic PDAs are strictly more powerful than deterministic ones. Languages like {ww^R} inherently require guessing."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CFG ? PDA equivalence is the basis for parsing."
          }), " Every grammar-to-PDA conversion gives a parsing algorithm. The direction matters: top-down (LL) parsers correspond to one construction, bottom-up (LR) to another."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DPDA = deterministic parsing."
          }), " Deterministic context-free languages are precisely those that can be parsed in linear time without backtracking — virtually all programming languages fall into this class."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DFA"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PDA"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Turing Machine"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (state only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack (LIFO)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tape (random access)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context-free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursively enumerable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Determinism vs Nondet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not equivalent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Power hierarchy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest"
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
            children: "PDA Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finite states"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input alphabet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack alphabet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q × (S?{e}) × (G?{e}) ? P(Q × (G?{e}))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "q0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accepting states"
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
            children: "PDA Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compilers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bottom-up (LR) parsing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Programming languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax analysis phase"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Formal verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol state tracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NLP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context-free grammar parsing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bioinformatics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RNA pseudoknot detection"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " A PDA = NFA + what?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Random access memory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Stack ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Queue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Counter"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** A PDA extends an NFA with a stack (LIFO memory), enabling recognition of context-free languages.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " DPDA and NPDA are:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Equivalent in power"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Not equivalent ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Equivalent only for regular languages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Both equivalent to DFA"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Deterministic and nondeterministic PDA are NOT equivalent. Some CFLs require nondeterminism.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " PDAs accept by:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Final state only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Empty stack only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Final state or empty stack ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Both simultaneously"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C)** Acceptance by final state and acceptance by empty stack are equivalent definitions.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Every CFG can be converted to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) A DFA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) A PDA ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) A regular expression"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) A Turing machine only"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Every CFG has an equivalent PDA (and vice versa) — this is a fundamental theorem.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " The language { ww^R } requires:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Deterministic PDA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Nondeterministic PDA ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) DFA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Regular expression"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** The PDA must nondeterministically guess the midpoint — a DPDA cannot.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-pda-simulator-1",
      children: "TypeScript: PDA Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface PDAConfig {\n  states: Set<string>;\n  inputAlphabet: Set<string>;\n  stackAlphabet: Set<string>;\n  transition: Map<string, Map<string, Array<{ to: string; push: string[] }>>>;\n  start: string;\n  accept: Set<string>;\n}\n\nfunction runPDA(pda: PDAConfig, input: string): boolean {\n  const stack: string[] = [\"Z0\"];\n  let state = pda.start;\n  for (const symbol of input) {\n    const trans = pda.transition.get(state)?.get(symbol) ?? [];\n    if (trans.length === 0) return false;\n    const { to, push } = trans[0];\n    state = to;\n    stack.pop();\n    for (const s of [...push].reverse()) if (s !== \"e\") stack.push(s);\n  }\n  return pda.accept.has(state);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-pda-simulator-and-cfg-to-pda-converter",
      children: "TypeScript Implementation: PDA Simulator and CFG-to-PDA Converter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Pushdown Automaton Simulator\n\ntype PDAState = string;\ntype PDAStackSymbol = string;\n\nclass PDARule {\n  constructor(\n    public from: PDAState,\n    public input: string,        // input symbol or \"e\"\n    public pop: PDAStackSymbol,  // stack symbol to pop or \"e\"\n    public to: PDAState,\n    public push: string          // string to push (characters pushed in reverse order)\n  ) {}\n}\n\nclass PDA {\n  constructor(\n    public states: Set<PDAState>,\n    public inputAlphabet: Set<string>,\n    public stackAlphabet: Set<PDAStackSymbol>,\n    public rules: PDARule[],\n    public startState: PDAState,\n    public startStack: PDAStackSymbol,\n    public acceptStates: Set<PDAState>\n  ) {}\n\n  accepts(input: string): boolean {\n    return this.simulate(input, this.startState, [this.startStack], 0);\n  }\n\n  private simulate(\n    input: string,\n    state: PDAState,\n    stack: PDAStackSymbol[],\n    pos: number\n  ): boolean {\n    if (pos > input.length) return false;\n    if (this.acceptStates.has(state)) return true;\n\n    // Try epsilon transitions first (no input consumed)\n    for (const rule of this.getRules(state, \"e\")) {\n      if (rule.pop !== \"e\" && (stack.length === 0 || stack[stack.length - 1] !== rule.pop))\n        continue;\n      const newStack = [...stack];\n      if (rule.pop !== \"e\") newStack.pop();\n      if (rule.push !== \"e\") for (const ch of [...rule.push].reverse()) newStack.push(ch);\n      if (this.simulate(input, rule.to, newStack, pos)) return true;\n    }\n\n    // Try consuming one input symbol\n    if (pos < input.length) {\n      for (const rule of this.getRules(state, input[pos])) {\n        if (rule.pop !== \"e\" && (stack.length === 0 || stack[last(stack)] !== rule.pop))\n          continue;\n        const newStack = [...stack];\n        if (rule.pop !== \"e\") newStack.pop();\n        if (rule.push !== \"e\") for (const ch of [...rule.push].reverse()) newStack.push(ch);\n        if (this.simulate(input, rule.to, newStack, pos + 1)) return true;\n      }\n    }\n\n    return false;\n  }\n\n  private getRules(state: PDAState, symbol: string): PDARule[] {\n    return this.rules.filter(r => r.from === state && r.input === symbol);\n  }\n\n  static fromCFG(cfg: { variables: string[]; terminals: string[]; productions: { lhs: string; rhs: string[] }[] }): PDA {\n    const rules: PDARule[] = [];\n    const q0 = \"q0\";\n    const qLoop = \"q1\";\n    const qAccept = \"q2\";\n\n    // Initial rule: push start symbol onto stack\n    rules.push(new PDARule(q0, \"e\", \"e\", qLoop, `${cfg.productions[0].lhs}`));\n\n    // For each production A ? ?, add rule: (qLoop, e, A, qLoop, ?)\n    for (const p of cfg.productions) {\n      rules.push(new PDARule(qLoop, \"e\", p.lhs, qLoop, p.rhs.join(\"\")));\n    }\n\n    // For each terminal a, add rule: (qLoop, a, a, qLoop, e)\n    for (const t of cfg.terminals) {\n      rules.push(new PDARule(qLoop, t, t, qLoop, \"e\"));\n    }\n\n    // Accept on empty stack\n    rules.push(new PDARule(qLoop, \"e\", \"e\", qAccept, \"e\"));\n\n    return new PDA(\n      new Set([q0, qLoop, qAccept]),\n      new Set(cfg.terminals),\n      new Set([...cfg.variables, ...cfg.terminals]),\n      rules, q0, \"S\", new Set([qAccept])\n    );\n  }\n}\n\nfunction last<T>(arr: T[]): number { return arr.length - 1; }\n\n// PDA for balanced parentheses\nconst pda = new PDA(\n  new Set([\"q0\", \"q1\", \"q2\"]),\n  new Set([\"(\", \")\"]),\n  new Set([\"Z\", \"X\"]),\n  [\n    new PDARule(\"q0\", \"e\", \"e\", \"q1\", \"Z\"),\n    new PDARule(\"q1\", \"(\", \"Z\", \"q1\", \"XZ\"),\n    new PDARule(\"q1\", \"(\", \"X\", \"q1\", \"XX\"),\n    new PDARule(\"q1\", \")\", \"X\", \"q1\", \"e\"),\n    new PDARule(\"q1\", \"e\", \"Z\", \"q2\", \"e\")\n  ],\n  \"q0\", \"Z\", new Set([\"q2\"])\n);\n\nconsole.log(pda.accepts(\"()\"));     // true\nconsole.log(pda.accepts(\"(())\"));   // true\nconsole.log(pda.accepts(\"(()\"));    // false\nconsole.log(pda.accepts(\")(\"));     // false\n\n// Generate PDA from simple CFG\nconst cfgPDA = PDA.fromCFG({\n  variables: [\"S\"],\n  terminals: [\"a\", \"b\"],\n  productions: [{ lhs: \"S\", rhs: [\"a\", \"S\", \"b\"] }, { lhs: \"S\", rhs: [] }]\n});\nconsole.log(cfgPDA.states.size); // 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -----------------------------------------------------\n// Instantaneous Description (ID) Tracer\n// Records the full configuration sequence of a PDA\n// as it processes an input string: (state, remaining input, stack).\n// -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class IDTracer {\nprivate pda: {\nstates: Set<string>; inputAlphabet: Set<string>; stackAlphabet: Set<string>;\nrules: Array<{ state: string; input: string; stackTop: string; nextState: string; stackOp: string }>;\nstartState: string; startStack: string; acceptStates: Set<string>;\n};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(pda: {\nstates: Set<string>; inputAlphabet: Set<string>; stackAlphabet: Set<string>;\nrules: Array<{ state: string; input: string; stackTop: string; nextState: string; stackOp: string }>;\nstartState: string; startStack: string; acceptStates: Set<string>;\n}) {\nthis.pda = pda;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Trace all IDs (configurations) for a given input\ntrace(input: string): Array<{ state: string; remainingInput: string; stack: string[] }> {\nconst ids: Array<{ state: string; remainingInput: string; stack: string[] }> = [];\nlet currentState = this.pda.startState;\nlet remaining = input;\nlet stack = [this.pda.startStack];"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ids.push({ state: currentState, remainingInput: remaining, stack: [...stack] });\n\nlet maxSteps = 1000;\nwhile (remaining.length > 0 && maxSteps-- > 0) {\n  let matched = false;\n\n  // Try e-transitions first (that don't consume input)\n  for (const rule of this.pda.rules) {\n    if (rule.state === currentState && rule.input === \"e\") {\n      const top = stack[stack.length - 1];\n      if (rule.stackTop === top || rule.stackTop === \"e\") {\n        if (rule.stackTop !== \"e\" && rule.stackTop === top) stack.pop();\n        if (rule.stackOp !== \"e\") {\n          for (const ch of rule.stackOp) stack.push(ch);\n        }\n        currentState = rule.nextState;\n        ids.push({ state: currentState, remainingInput: remaining, stack: [...stack] });\n        matched = true;\n        break;\n      }\n    }\n  }\n  if (matched) continue;\n\n  // Try consuming a character\n  const ch = remaining[0];\n  for (const rule of this.pda.rules) {\n    if (rule.state === currentState && rule.input === ch) {\n      const top = stack[stack.length - 1];\n      if (rule.stackTop === top || rule.stackTop === \"e\") {\n        if (rule.stackTop !== \"e\" && rule.stackTop === top) stack.pop();\n        if (rule.stackOp !== \"e\") {\n          for (const c of rule.stackOp) stack.push(c);\n        }\n        currentState = rule.nextState;\n        remaining = remaining.slice(1);\n        ids.push({ state: currentState, remainingInput: remaining, stack: [...stack] });\n        matched = true;\n        break;\n      }\n    }\n  }\n  if (!matched) break; // stuck\n}\n\nreturn ids;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["// Render the ID trace in human-readable format\nrenderTrace(input: string): string[] {\nconst ids = this.trace(input);\nconst output: string[] = [];\noutput.push(", (0,jsx_runtime.jsx)(_components.code, {
        children: "ID Trace for input \"${input}\":"
      }), ");\noutput.push(\"-\".repeat(50));\nfor (let i = 0; i < ids.length; i++) {\nconst id = ids[i];\nconst stackStr = ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[${id.stack.join(\"\")}]"
      }), ";\noutput.push(", (0,jsx_runtime.jsx)(_components.code, {
        children: "ID ${i}: (${id.state}, ${id.remainingInput || \"e\"}, ${stackStr})"
      }), ");\n}\noutput.push(", (0,jsx_runtime.jsx)(_components.code, {
        children: "Final state: ${ids[ids.length - 1].state}"
      }), ");\noutput.push(", (0,jsx_runtime.jsx)(_components.code, {
        children: "Stack: ${ids[ids.length - 1].stack.join(\"\")}"
      }), ");\nconst accepted = this.pda.acceptStates.has(ids[ids.length - 1].state);\noutput.push(", (0,jsx_runtime.jsx)(_components.code, {
        children: "Accepted: ${accepted}"
      }), ");\nreturn output;\n}\n}"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Demo: trace the balanced parentheses PDA\nconst balancePDA = {\nstates: new Set([\"q0\", \"q1\", \"q2\"]),\ninputAlphabet: new Set([\"(\", \")\"]),\nstackAlphabet: new Set([\"Z\", \"X\"]),\nrules: [\n{ state: \"q0\", input: \"e\", stackTop: \"e\", nextState: \"q1\", stackOp: \"Z\" },\n{ state: \"q1\", input: \"(\", stackTop: \"Z\", nextState: \"q1\", stackOp: \"XZ\" },\n{ state: \"q1\", input: \"(\", stackTop: \"X\", nextState: \"q1\", stackOp: \"XX\" },\n{ state: \"q1\", input: \")\", stackTop: \"X\", nextState: \"q1\", stackOp: \"e\" },\n{ state: \"q1\", input: \"e\", stackTop: \"Z\", nextState: \"q2\", stackOp: \"e\" },\n],\nstartState: \"q0\", startStack: \"Z\", acceptStates: new Set([\"q2\"])\n};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const tracer = new IDTracer(balancePDA);\nconsole.log(tracer.renderTrace(\"(())\").join(\"\\n\"));"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// pda\n// automata-complexity implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'pda', data: { topic: 'automata-complexity' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n## Summary\n\n- PDA = NFA + stack (LIFO memory).\n- PDA configurations are triples: (state, remaining input, stack content).\n- Nondeterministic PDAs recognize all context-free languages.\n- Deterministic PDAs recognize a proper subset (DCFLs) → languages that can be parsed without backtracking.\n- Every CFG can be converted to an equivalent PDA (top-down or bottom-up construction).\n- Every PDA can be converted to an equivalent CFG.\n- Stack operations: push (add to top), pop (remove from top), or no change.\n- **Acceptance by final state** and **acceptance by empty stack** are equivalent definitions.\n- **DPDA vs NPDA** is the first model where nondeterminism adds genuine power — a unique situation in the Chomsky hierarchy.\n- **Shift-reduce parsing** (LR parsing) is the practical realization of bottom-up PDA construction, used in real compilers.\n\n## Practical Takeaways\n\n1. **Stack memory enables counting.** PDAs can recognize languages like {anbn} that require counting, but the LIFO restriction means only one counter is available — languages requiring two independent counters (like {anbncn}) are beyond CFGs.\n\n2. **Nondeterminism is essential for some CFLs.** Unlike finite automata, nondeterministic PDAs are strictly more powerful than deterministic ones. Languages like {ww^R} inherently require guessing.\n\n3. **CFG ? PDA equivalence is the basis for parsing.** Every grammar-to-PDA conversion gives a parsing algorithm. The direction matters: top-down (LL) parsers correspond to one construction, bottom-up (LR) to another.\n\n4. **DPDA = deterministic parsing.** Deterministic context-free languages are precisely those that can be parsed in linear time without backtracking — virtually all programming languages fall into this class.\n\n5. **Empty stack acceptance simplifies proofs.** When constructing PDAs for theoretical results, empty stack acceptance often yields cleaner constructions, while final state acceptance is closer to how real parsers work.\n\n## Exercises\n\n### Basic\n\n1. Design a PDA for L = { aⁿbᵐcⁿ | n, m ≥ 0 }.\n2. Design a PDA for L = { w ∈ {a,b}* | w has equal numbers of a's and b's }.\n3. Trace the PDA from Example 6.1 on input \"ab\" and \"aab\".\n4. Design a PDA for L = { aⁿbⁿcᵐ | n, m ≥ 0 }.\n5. Convert the CFG S → aSa | bSb | ε to a PDA.\n\n### Intermediate\n\n6. Design a PDA for L = { aⁿbᵐ | n ≤ m ≤ 2n }.\n7. Convert the PDA from Example 6.2 to a CFG.\n8. Prove that the PDA from Example 6.3 correctly recognizes { aⁿb²ⁿ } by induction on n.\n9. Design a PDA for L = { w ∈ {a,b}* | w contains at least as many a's as b's }.\n10. Show that the language { aⁿbⁿcⁿ | n ≥ 0 } cannot be recognized by a PDA (it is not context-free). Use the intuition of the single stack's limitations.\n\n### Advanced\n\n11. Prove that DPDA languages are closed under complement, but NPDA languages are not.\n12. Design a PDA for L = { w₁cw₂ | w₁, w₂ ∈ {a,b}* and w₁ ≠ w₂ }. This requires nondeterminism → explain why.\n13. Show formally that if PDA P accepts by final state, there is an equivalent PDA P' that accepts by empty stack, and vice versa.\n14. Design a PDA for the language of arithmetic expressions generated by E → E + T | T, T → T * F | F, F → (E) | i. Show the stack behavior for \"i + i * i\".\n15. Prove that the language { aⁿbᵐ | n ≠ m } is a DCFL by constructing a DPDA for it.\n16. Implement a TypeScript function that converts a CFG to a PDA using the top-down construction (single-state method). Test it on the grammar for palindromes.\n17. Show that the language L = { a?b?c? | i, j, k = 0, i = j or j = k } is context-free by designing a PDA for it. Explain why nondeterminism is required.\n18. Write a TypeScript simulator for the shift-reduce PDA and test it on a grammar for balanced parentheses.\n19. Prove that if L is a DCFL, then L¯ (complement) is also a DCFL. (Hint: modify the DPDA to swap accepting and non-accepting states — but be careful with infinite loops from e-moves.)\n20. Design a DPDA for the language L = { anb?c? | n, m, p = 0 and n = m + p }.\n"
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