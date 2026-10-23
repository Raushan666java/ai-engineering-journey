"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[8990],{

/***/ 7286
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_theory_of_computation_10_turing_extensions_md_bed_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-theory-of-computation-10-turing-extensions-md-bed.json
const site_docs_courses_theory_of_computation_10_turing_extensions_md_bed_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/theory-of-computation/10-turing-extensions","title":"Chapter 10: Turing Machine Extensions and the Church-Turing Thesis","description":"Previous Decidability","source":"@site/docs/courses/theory-of-computation/10-turing-extensions.md","sourceDirName":"courses/theory-of-computation","slug":"/theory-of-computation/10-turing-extensions","permalink":"/ai-engineering-journey/theory-of-computation/10-turing-extensions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"10-turing-extensions","slug":"/theory-of-computation/10-turing-extensions","title":"Chapter 10: Turing Machine Extensions and the Church-Turing Thesis","sidebar_label":"Chapter 10: Turing Machine Extensions and the Church-Turing Thesis","sidebar_position":10},"sidebar":"course-theory-of-computation","previous":{"title":"Chapter 9: Turing Machines","permalink":"/ai-engineering-journey/theory-of-computation/09-turing"},"next":{"title":"Chapter 11: Decidability","permalink":"/ai-engineering-journey/theory-of-computation/11-decidability"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/theory-of-computation/10-turing-extensions.md


const frontMatter = {
	id: '10-turing-extensions',
	slug: '/theory-of-computation/10-turing-extensions',
	title: 'Chapter 10: Turing Machine Extensions and the Church-Turing Thesis',
	sidebar_label: 'Chapter 10: Turing Machine Extensions and the Church-Turing Thesis',
	sidebar_position: 10
};
const contentTitle = 'Chapter 10: Turing Machine Extensions and the Church-Turing Thesis';

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
  "value": "9.1 Recursively Enumerable vs Recursive Languages",
  "id": "91-recursively-enumerable-vs-recursive-languages",
  "level": 3
}, {
  "value": "9.2 Complement of RE Languages",
  "id": "92-complement-of-re-languages",
  "level": 3
}, {
  "value": "9.3 Encoding Turing Machines",
  "id": "93-encoding-turing-machines",
  "level": 3
}, {
  "value": "9.4 The Universal Turing Machine",
  "id": "94-the-universal-turing-machine",
  "level": 3
}, {
  "value": "9.5 The Church-Turing Thesis",
  "id": "95-the-church-turing-thesis",
  "level": 3
}, {
  "value": "9.6 Oracle Turing Machines and Relativization",
  "id": "96-oracle-turing-machines-and-relativization",
  "level": 3
}, {
  "value": "9.7 The Arithmetic Hierarchy",
  "id": "97-the-arithmetic-hierarchy",
  "level": 3
}, {
  "value": "9.8 Reductions and Completeness",
  "id": "98-reductions-and-completeness",
  "level": 3
}, {
  "value": "9.9 The Chomsky Hierarchy Revisited",
  "id": "99-the-chomsky-hierarchy-revisited",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 9.1: RE but Not Recursive → The Halting Problem (Preview)",
  "id": "example-91-re-but-not-recursive--the-halting-problem-preview",
  "level": 3
}, {
  "value": "Example 9.2: A Language That Is Neither RE Nor co-RE",
  "id": "example-92-a-language-that-is-neither-re-nor-co-re",
  "level": 3
}, {
  "value": "Example 9.3: Many-One Reductions",
  "id": "example-93-many-one-reductions",
  "level": 3
}, {
  "value": "Example 9.4: UTMs as Stored-Program Computers",
  "id": "example-94-utms-as-stored-program-computers",
  "level": 3
}, {
  "value": "Example 9.5: Relativization",
  "id": "example-95-relativization",
  "level": 3
}, {
  "value": "TypeScript UTM Simulation Concept",
  "id": "typescript-utm-simulation-concept",
  "level": 2
}, {
  "value": "Diagram: RE, Recursive, and co-RE Relationships",
  "id": "diagram-re-recursive-and-co-re-relationships",
  "level": 2
}, {
  "value": "The Language Hierarchy and Complete Problems",
  "id": "the-language-hierarchy-and-complete-problems",
  "level": 2
}, {
  "value": "TypeScript: Oracle TM Simulator",
  "id": "typescript-oracle-tm-simulator",
  "level": 2
}, {
  "value": "The Encoding of Turing Machines",
  "id": "the-encoding-of-turing-machines",
  "level": 2
}, {
  "value": "TypeScript: TM Encoding/Decoding",
  "id": "typescript-tm-encodingdecoding",
  "level": 3
}, {
  "value": "Rice&#39;s Theorem",
  "id": "rices-theorem",
  "level": 2
}, {
  "value": "TypeScript: Rice&#39;s Theorem Verifier",
  "id": "typescript-rices-theorem-verifier",
  "level": 3
}, {
  "value": "The Chomsky-Schützenberger Theorem",
  "id": "the-chomsky-schützenberger-theorem",
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
  "value": "TypeScript Implementation: NTM Branch Explorer and Universal TM",
  "id": "typescript-implementation-ntm-branch-explorer-and-universal-tm",
  "level": 2
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
    mermaid: "mermaid",
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
        id: "chapter-10-turing-machine-extensions-and-the-church-turing-thesis",
        children: "Chapter 10: Turing Machine Extensions and the Church-Turing Thesis"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/09-turing",
          children: "Turing Machines"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/11-decidability",
          children: "Decidability"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between recursively enumerable and recursive languages."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the universal Turing machine and its significance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the Church-Turing thesis and its implications."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the encoding of Turing machines as strings."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize the limits of TM-based computation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the concept of oracles and relativized computation."
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
            children: "RE vs Recursive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RE may loop; recursive always halts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decidable vs semi-decidable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Universal TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simulates any TM on any input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stored-program computer concept"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Church-Turing Thesis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Everything computable = TM-computable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accepted but unprovable claim"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Oracle TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TM with external query capability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relativized computation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic Hierarchy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantifier alternation depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classification beyond RE/co-RE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[RE vs Recursive] --> B[Complements]\r\n    B --> C[TM Encoding]\r\n    C --> D[Universal TM]\r\n    D --> E[Church-Turing Thesis]\r\n    E --> F[Oracle TM]\r\n    F --> G[Arithmetic Hierarchy]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/theory-of-computation/09-turing-extensions.png",
        alt: "Turing Machine Extensions Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-recursively-enumerable-vs-recursive-languages",
      children: "9.1 Recursively Enumerable vs Recursive Languages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A language L is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "recursively enumerable (RE)"
      }), " if there exists a Turing machine M such that L(M) = L. This means M halts in the accept state for every w ∈ L, and for w ∉ L, M either halts in reject or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "loops forever"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A language L is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "recursive"
      }), " (or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "decidable"
      }), ") if there exists a Turing machine M that ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "halts on all inputs"
      }), " and L(M) = L. Such a machine is called a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "decider"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Relationship:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every recursive language is RE (a decider is a special case of a recognizer)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "There exist RE languages that are NOT recursive (Chapter 10: the halting problem)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intuition:"
      }), " Recognizing a language only requires positive answers to be correct. Deciding requires both positive and negative answers to be correct."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-complement-of-re-languages",
      children: "9.2 Complement of RE Languages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a language L:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If L is recursive, then L̅ is also recursive (swap accept and reject states in the decider)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If L is RE, L̅ may or may not be RE."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A language is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "co-RE"
        }), " if its complement is RE."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["L is recursive ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "iff"
        }), " L is both RE and co-RE."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem:"
      }), " L is recursive iff L is RE and co-RE."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof:"
      }), " If L is recursive, then L is RE and L̅ is recursive (hence RE), so L is RE and co-RE. Conversely, if L is RE via M₁ and L̅ is RE via M₂, construct a decider M that simulates M₁ and M₂ in parallel. One must eventually accept. If M₁ accepts, M accepts; if M₂ accepts, M rejects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-encoding-turing-machines",
      children: "9.3 Encoding Turing Machines"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To talk about TMs as inputs to other TMs, we need to encode them as strings. Turing machines can be encoded in a standard format:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let TM M be described as (Q, Σ, Γ, δ, q₀, q_accept, q_reject). We encode:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encode states as strings in {q}* (e.g., q = q₀, qq = q₁, etc.)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encode tape symbols similarly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encode transitions as tuples: (state, symbol, new_state, new_symbol, direction)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Concatenate all parts with separators."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The encoded TM is denoted ⟨M⟩. This encoding allows a TM to examine other TMs as data → a crucial capability."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-the-universal-turing-machine",
      children: "9.4 The Universal Turing Machine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "universal Turing machine (UTM)"
      }), " is a TM U that takes as input ⟨M, w⟩ (the encoding of a TM M and an input string w) and simulates M on w. U accepts if M accepts w, rejects if M rejects w, and loops if M loops on w."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Construction of UTM:"
      }), "\r\nU uses a ", (0,jsx_runtime.jsx)(_components.em, {
        children: "multitape"
      }), " architecture (simulatable on a single tape):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tape 1:"
        }), " Stores the description of M (⟨M⟩)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tape 2:"
        }), " Simulates M's tape (copies w, then simulates read/write)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tape 3:"
        }), " Stores M's current state."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Simulation algorithm:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize Tape 2 with w, Tape 3 with q₀."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat:\r\na. Read symbol under M's head on Tape 2.\r\nb. Search Tape 1 for a transition matching current state and symbol.\r\nc. If found: update state on Tape 3, write symbol on Tape 2, move head.\r\nd. If M is in q_accept → accept. If in q_reject → reject.\r\ne. If no matching transition → reject."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Significance:"
      }), " The UTM is the theoretical basis for stored-program computers. A single machine can simulate any other machine by reading its program. This is exactly what happens when you run a program on your computer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "95-the-church-turing-thesis",
      children: "9.5 The Church-Turing Thesis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Church-Turing Thesis:"
      }), " Everything that is intuitively computable can be computed by a Turing machine."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is not a theorem (it cannot be proved) but a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "thesis"
      }), " → a claim about the nature of computation that is universally accepted because:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every proposed model of computation (λ-calculus, general recursive functions, Post systems, RAM machines, cellular automata) has been shown equivalent to Turing machines."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No one has found a computation that humans would call \"effective\" but that cannot be simulated by a TM."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The thesis has held for 90+ years despite intensive investigation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Variants:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Physical Church-Turing thesis:"
        }), " Any physically realizable computing device can be simulated by a Turing machine (with implications for quantum computing)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Extended Church-Turing thesis:"
        }), " Probabilistic TMs can simulate any physically realizable computation with at most polynomial slowdown (challenged by quantum computing)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "96-oracle-turing-machines-and-relativization",
      children: "9.6 Oracle Turing Machines and Relativization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "oracle Turing machine"
      }), " is a TM with an additional \"oracle tape\" and a special query state. When the machine enters the query state, the oracle (an external device) answers whether a string belongs to some fixed language A."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Notation:"
      }), " Mᴬ denotes a Turing machine with oracle A."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Oracle machines allow us to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Classify problems relative to oracles."
        }), " For example, Pᴬ and NPᴬ are classes relativized to A."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prove relativization results."
        }), " There exist oracles A and B such that Pᴬ = NPᴬ and Pᴮ ≠ NPᴮ. This shows that any proof resolving P vs NP must be \"non-relativizing\" → it cannot work for all possible oracles."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Understand the limits of diagonalization."
        }), " Since relativizing proofs apply to all oracles, and P vs NP has contradicting relativizations, any correct proof must be non-relativizing. This rules out many standard proof techniques."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "97-the-arithmetic-hierarchy",
      children: "9.7 The Arithmetic Hierarchy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Languages definable by alternating quantifiers over recursive predicates form the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "arithmetic hierarchy"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\r\n\\Sigma_n = { x \\mid \\exists y_1 \\forall y_2 \\exists y_3 \\ldots Q y_n ; R(x, y_1, \\ldots, y_n) }\r\n]\r\n[\r\n\\Pi_n = { x \\mid \\forall y_1 \\exists y_2 \\forall y_3 \\ldots Q y_n ; R(x, y_1, \\ldots, y_n) }\r\n]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where R is a recursive predicate and the quantifiers alternate."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Form"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Known as"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Problem"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(\\Sigma_1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(\\exists y R(x,y))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Halting problem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(\\Pi_1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(\\forall y R(x,y))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "co-RE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Totality (halts on all inputs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(\\Sigma_2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(\\exists y_1 \\forall y_2 R(x,y_1,y_2))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does M halt on infinitely many inputs?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(\\Pi_2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(\\forall y_1 \\exists y_2 R(x,y_1,y_2))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does M halt on all inputs?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(\\Sigma_3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(\\exists y_1 \\forall y_2 \\exists y_3 R(x,y_1,y_2,y_3))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is L(M) co-finite?"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    subgraph \"Arithmetic Hierarchy\"\r\n        S1[\"S1 = RE<br/>(?)\"] --> P1[\"?1 = co-RE<br/>(?)\"]\r\n        P1 --> S2[\"S2<br/>(??)\"]\r\n        S2 --> P2[\"?2<br/>(??)\"]\r\n        P2 --> S3[\"S3<br/>(???)\"]\r\n        S3 --> P3[\"?3<br/>(???)\"]\r\n        P3 --> P4[\"...\"]\r\n    end"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This hierarchy is strict: (\\Sigma_n \\subset \\Sigma_{n+1}) and (\\Pi_n \\subset \\Pi_{n+1}) for all (n \\geq 1)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "98-reductions-and-completeness",
      children: "9.8 Reductions and Completeness"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Many-one reduction:"
      }), " A language A is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "many-one reducible"
      }), " to language B (written (A \\leq_m B)) if there exists a computable function f such that:\r\n[\r\nw \\in A \\iff f(w) \\in B\r\n]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Turing reduction:"
      }), " A language A is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Turing-reducible"
      }), " to B (written (A \\leq_T B)) if a decision procedure for A can be computed by an oracle TM with oracle B."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If (A \\leq_m B) and B is recursive, then A is recursive."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If (A \\leq_m B) and B is RE, then A is RE."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Turing reductions are more general than many-one reductions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Many-one reductions can separate degree structures (many-one degrees vs Turing degrees)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "99-the-chomsky-hierarchy-revisited",
      children: "9.9 The Chomsky Hierarchy Revisited"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The relationship between language classes and Turing machines:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Language Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Machine Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Closure Properties"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Type 0"
            }), " (RE)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Turing machine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?, n, concat, *"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Type 1"
            }), " (CSL)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear-bounded TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?, n, concat, * (not complement)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Type 2"
            }), " (CFL)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PDA (nondeterministic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?, concat, * (not n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Type 3"
            }), " (Regular)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFA/NFA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All Boolean operations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each type is a proper subset of the next: Regular ? CFL ? CSL ? RE."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-91-re-but-not-recursive--the-halting-problem-preview",
      children: "Example 9.1: RE but Not Recursive → The Halting Problem (Preview)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HALT_TM = { ⟨M, w⟩ | M halts on input w }."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HALT_TM is RE: A UTM can simulate M on w; if M halts (accepts or rejects), the UTM accepts. This shows HALT_TM ∈ RE."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HALT_TM is not recursive: A diagonalization argument (Chapter 10) shows no decider can correctly determine whether arbitrary M halts on w."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-92-a-language-that-is-neither-re-nor-co-re",
      children: "Example 9.2: A Language That Is Neither RE Nor co-RE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider L = { ⟨M₁, M₂⟩ | L(M₁) = L(M₂) } (equivalence of TMs)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This language is not RE and not co-RE."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Intuitively: there's no way to check if two TMs accept the same language because either one might loop on some input."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-93-many-one-reductions",
      children: "Example 9.3: Many-One Reductions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To show a language A is not recursive, we can reduce a known non-recursive language (like HALT_TM) to A. If A were recursive, then HALT_TM would be recursive too → contradiction."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For language EMPTY_TM = { ⟨M⟩ | L(M) = ∅ }:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "We can reduce HALT_TM to EMPTY_TM."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given ⟨M, w⟩, construct M': on input x, M' simulates M on w; if M accepts w, M' accepts x; otherwise M' loops."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Then: if M halts on w, L(M') = Σ* ≠ ∅. If M doesn't halt on w, L(M') = ∅."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "So ⟨M, w⟩ ∈ HALT_TM iff ⟨M'⟩ ∉ EMPTY_TM. A decider for EMPTY_TM would give a decider for HALT_TM → impossible."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-94-utms-as-stored-program-computers",
      children: "Example 9.4: UTMs as Stored-Program Computers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The UTM architecture mirrors modern computers:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["⟨M⟩ is the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "program"
        }), " (stored in memory)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["w is the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "input data"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The UTM is the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CPU"
        }), " that fetches, decodes, and executes instructions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is why the UTM is considered the theoretical foundation of general-purpose computing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-95-relativization",
      children: "Example 9.5: Relativization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Define Pᴬ = languages decidable in polynomial time by a TM with oracle A.\r\nLet SAT be the language of satisfiable Boolean formulas."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If we could decide SAT in polynomial time, then P^SAT = NP^SAT (since an oracle for SAT, the hardest NP problem, would collapse NP into P relative to SAT)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "However, there also exist oracles B where this doesn't hold."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This \"relativization barrier\" explains why standard diagonalization techniques cannot resolve P vs NP."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-utm-simulation-concept",
      children: "TypeScript UTM Simulation Concept"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "While a full UTM simulator requires low-level tape operations, the concept can be illustrated at a high level:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type TMDescription = {\r\n  Q: string[];\r\n  gamma: string[];\r\n  delta: Map<string, [string, string, 'L' | 'R']>;\r\n  q0: string;\r\n  qAccept: string;\r\n  qReject: string;\r\n};\r\n\r\nfunction universalTM(description: TMDescription, input: string): boolean {\r\n  const tape = [...input];\r\n  let head = 0;\r\n  let state = description.q0;\r\n\r\n  while (state !== description.qAccept &&\r\n         state !== description.qReject) {\r\n    const symbol = head < tape.length ? tape[head] : '_';\r\n    const key = `${state},${symbol}`;\r\n    const transition = description.delta.get(key);\r\n    if (!transition) {\r\n      state = description.qReject;\r\n      break;\r\n    }\r\n    const [nextState, writeSym, direction] = transition;\r\n    if (head >= tape.length) tape.push('_');\r\n    tape[head] = writeSym;\r\n    state = nextState;\r\n    head += direction === 'R' ? 1 : -1;\r\n    if (head < 0) {\r\n      tape.unshift('_');\r\n      head = 0;\r\n    }\r\n  }\r\n  return state === description.qAccept;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "diagram-re-recursive-and-co-re-relationships",
      children: "Diagram: RE, Recursive, and co-RE Relationships"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph TD\r\n    subgraph \"All Languages over S\"\r\n        subgraph RE[\"RE (recognizable)\"]\r\n            REC[\"Recursive<br/>(decidable)\"]\r\n            CO_REC[\"co-RE\"]\r\n        end\r\n        NOT_RE[\"Not RE\"]\r\n    end\r\n    REC --> CO_REC\r\n    style NOT_RE fill:#f99,color:#000"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key properties:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "REC = RE n co-RE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If L is RE and L¯ is RE, then L is recursive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The halting problem is in RE \\ REC"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Its complement is in co-RE \\ REC"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-language-hierarchy-and-complete-problems",
      children: "The Language Hierarchy and Complete Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A language A is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "complete"
      }), " for a class C if:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A ? C"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every language in C reduces to A"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For the RE class, the classic complete problem is:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HALT_TM"
        }), " = { ?M, w? | M halts on w }"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ACCEPT_TM"
        }), " = { ?M, w? | M accepts w }"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both are RE-complete under many-one reductions. Showing a language is RE-complete is the standard way to prove it is \"as hard as\" the halting problem."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-oracle-tm-simulator",
      children: "TypeScript: Oracle TM Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type OracleFunction = (query: string) => boolean;\r\n\r\nclass OracleTM {\r\n  private machine: TuringMachine;\r\n  private oracle: OracleFunction;\r\n  private oracleTape: string[] = [];\r\n\r\n  constructor(machine: TuringMachine, oracle: OracleFunction) {\r\n    this.machine = machine;\r\n    this.oracle = oracle;\r\n  }\r\n\r\n  run(input: string): boolean {\r\n    this.machine.loadInput(input);\r\n    let halted = false;\r\n\r\n    while (!halted) {\r\n      // Check if machine is in query state\r\n      // (Simplified: we use a convention where q_query triggers oracle)\r\n      if (this.machine.getState() === \"q_query\") {\r\n        const query = this.oracleTape.join(\"\").trim();\r\n        const answer = this.oracle(query);\r\n        // Write answer (1 for yes, 0 for no) and return\r\n        this.machine.forceTransition(answer ? \"q_yes\" : \"q_no\");\r\n      }\r\n      halted = this.machine.step();\r\n    }\r\n    return this.machine.getState() === \"q_accept\";\r\n  }\r\n}\r\n\r\n// Example: Use oracle to decide if a number is prime\r\nconst primeOracle: OracleFunction = (query: string) => {\r\n  const n = parseInt(query, 10);\r\n  if (isNaN(n) || n < 2) return false;\r\n  for (let i = 2; i * i <= n; i++) {\r\n    if (n % i === 0) return false;\r\n  }\r\n  return true;\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-encoding-of-turing-machines",
      children: "The Encoding of Turing Machines"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TMs are encoded as strings over a fixed alphabet. A standard encoding scheme:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "?M? = (Q)(S)(G)(d)(q0)(q_accept)(q_reject)\r\n\r\nWhere:\r\n- States: \"q\" repeated i+1 times = q, qq, qqq, ...\r\n- Symbols: \"s\" repeated j+1 times = s, ss, sss, ...\r\n- Transition: (state, symbol, new_state, new_symbol, direction)\r\n  where direction is L or R\r\n- Components separated by semicolons\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This encoding makes TMs countable: each TM maps to a unique natural number. The existence of a universal TM means the set of all computable functions is enumerable by a single machine."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-tm-encodingdecoding",
      children: "TypeScript: TM Encoding/Decoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function encodeState(name: string): string {\r\n  // Encode state names as unary-coded numbers\r\n  const n = parseInt(name.replace(/\\D/g, \"\"), 10) || 0;\r\n  return \"1\".repeat(n + 1);\r\n}\r\n\r\nfunction encodeSymbol(sym: string): string {\r\n  const syms = [\"_\", \"0\", \"1\", \"a\", \"b\", \"c\", \"X\", \"Y\", \"Z\"];\r\n  const n = syms.indexOf(sym);\r\n  return \"1\".repeat(Math.max(n + 1, 1));\r\n}\r\n\r\nfunction encodeDirection(dir: \"L\" | \"R\"): string {\r\n  return dir === \"L\" ? \"1\" : \"11\";\r\n}\r\n\r\nfunction encodeTransition(\r\n  from: string, readSym: string,\r\n  to: string, writeSym: string, dir: \"L\" | \"R\"\r\n): string {\r\n  return `0${encodeState(from)}0${encodeSymbol(readSym)}0` +\r\n         `${encodeState(to)}0${encodeSymbol(writeSym)}0` +\r\n         `${encodeDirection(dir)}0`;\r\n}\r\n\r\nfunction encodeTMDescription(desc: TMDescription): string {\r\n  let encoding = \"\";\r\n  for (const [key, [next, write, dir]] of desc.delta) {\r\n    const [state, sym] = key.split(\",\");\r\n    encoding += encodeTransition(state, sym, next, write, dir);\r\n  }\r\n  return encoding;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The encoding function maps every TM to a unique binary string. The UTM can then parse this encoding and simulate the original machine."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rices-theorem",
      children: "Rice's Theorem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rice's Theorem:"
      }), " Any non-trivial semantic property of Turing machines is undecidable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A property P of TMs is:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semantic:"
        }), " depends only on the language recognized (not on the machine's structure)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-trivial:"
        }), " there exist TMs that satisfy P and TMs that do not."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples of undecidable properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does M accept the empty string?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does M accept any string at all?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does M accept all strings?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does M accept a finite language?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does L(M) = L(M') for two given machines?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples of decidable properties (trivial or syntactic):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does M have exactly 5 states? (Structural, not semantic)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does M halt within 100 steps on input e? (Decidable by simulation)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-rices-theorem-verifier",
      children: "TypeScript: Rice's Theorem Verifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type UndecidableProperty = (description: TMDescription) => boolean;\r\n\r\n// The theorem says: for any non-trivial semantic property,\r\n// there is no TM that decides it.\r\nfunction illustrativeRiceVerifier(\r\n  property: UndecidableProperty,\r\n  sampleAccepting: string,\r\n  sampleRejecting: string\r\n): { property: string; undecidable: boolean; reason: string } {\r\n  // Check property is non-trivial\r\n  const acceptDesc = parseTM(sampleAccepting);\r\n  const rejectDesc = parseTM(sampleRejecting);\r\n  const acceptHas = property(acceptDesc);\r\n  const rejectHas = property(rejectDesc);\r\n\r\n  if (acceptHas === rejectHas) {\r\n    return {\r\n      property: property.name,\r\n      undecidable: false,\r\n      reason: \"Property is trivial — all TMs either satisfy or don't\"\r\n    };\r\n  }\r\n\r\n  return {\r\n    property: property.name,\r\n    undecidable: true,\r\n    reason: \"Non-trivial semantic property — undecidable per Rice's theorem\"\r\n  };\r\n}\r\n\r\nfunction parseTM(encoding: string): TMDescription {\r\n  // Simplified parser for TM encodings\r\n  const parts = encoding.split(\";\");\r\n  return {\r\n    Q: parts[0]?.split(\",\") ?? [],\r\n    gamma: parts[1]?.split(\",\") ?? [],\r\n    delta: new Map(),\r\n    q0: parts[2] ?? \"q0\",\r\n    qAccept: parts[3] ?? \"q_accept\",\r\n    qReject: parts[4] ?? \"q_reject\",\r\n  };\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-chomsky-schützenberger-theorem",
      children: "The Chomsky-Schützenberger Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every context-free language can be expressed as the homomorphic image of the intersection of a regular language with the Dyck language (balanced parentheses). This deep theorem connects CFGs, automata theory, and algebraic language theory."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Recognizable ? decidable."
          }), " When building systems that analyze programs or processes, distinguish between properties that have a definitive yes/no answer (decidable) and those that can only confirm positive cases (recognizable). Static analysis typically deals with recognizable properties."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The UTM proves interpreters exist."
          }), " The theoretical existence of a universal TM guarantees that any computation can be simulated. This is why emulators, virtual machines, and interpreters are possible — the concept predates computers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The Church-Turing thesis guides systems design."
          }), " If a computation cannot be described by a TM, it cannot be implemented on any current computer. This sets a fundamental limit on what software can achieve, regardless of hardware advances."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Oracle separation proves proof barriers."
          }), " The existence of oracles A and B with P^A = NP^A and P^B ? NP^B shows that any P vs NP proof must use non-relativizing techniques — a key insight for complexity theorists."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Language Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TM Behavior on w ? L"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TM Behavior on w ? L"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive (decidable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Halts (reject)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Halts (accept)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RE (recognizable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Halts (accept)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "co-RE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Halts (reject)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May loop"
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
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive (decidable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TM always halts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RE (recognizable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TM halts on accept, may loop on reject"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "co-RE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complement is RE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UTM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simulates any TM on any input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Oracle TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TM with external language query"
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
            children: "Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Computing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stored-program architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Programming languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interpreter = UTM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oracle separations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Turing test connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Philosophy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limits of mechanistic computation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " Every recursive language is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) RE ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) co-RE only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Neither"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Not RE"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**A)** A decider is a special case of a recognizer, so recursive ? RE.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " L is recursive iff:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) L is RE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) L is RE and co-RE ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) L is not RE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) L is infinite"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Decidable = TM halts on all inputs = both L and its complement are recognizable.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " The Church-Turing thesis is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) A proven theorem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) A universally accepted thesis ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) A definition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) A conjecture that's been disproven"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** It's a thesis about the nature of computation, not provable but universally accepted.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " The UTM demonstrates:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) TMs cannot simulate other TMs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Stored-program concept ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Halting problem is decidable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) TMs are impractical"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** The UTM stores ?M? as data and simulates it — the theoretical basis for general-purpose computers.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Oracle TMs help:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Speed up computation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Classify problems relative to oracles ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Prove P = NP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Eliminate nondeterminism"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Oracle machines create relativized complexity classes and identify proof barriers.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-ntm-branch-explorer-and-universal-tm",
      children: "TypeScript Implementation: NTM Branch Explorer and Universal TM"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Nondeterministic TM Branch Explorer and Universal TM Concept\r\n\r\ntype NTMTransition = {\r\n  read: string;\r\n  write: string;\r\n  direction: \"L\" | \"R\";\r\n  nextState: string;\r\n};\r\n\r\nclass NondeterministicTM {\r\n  constructor(\r\n    public states: Set<string>,\r\n    public inputAlphabet: Set<string>,\r\n    public tapeAlphabet: Set<string>,\r\n    public transitions: Map<string, NTMTransition[]>,\r\n    public start: string,\r\n    public accept: string,\r\n    public reject: string\r\n  ) {}\r\n\r\n  private branch(\r\n    tape: string[],\r\n    head: number,\r\n    state: string,\r\n    depth: number,\r\n    maxDepth: number\r\n  ): boolean {\r\n    if (depth > maxDepth) return false;\r\n    if (state === this.accept) return true;\r\n    if (state === this.reject) return false;\r\n\r\n    const symbol = head < tape.length ? tape[head] : \"?\";\r\n    const key = `${state},${symbol}`;\r\n    const options = this.transitions.get(key) || [];\r\n\r\n    for (const option of options) {\r\n      const newTape = [...tape];\r\n      if (head >= newTape.length) newTape.push(\"?\");\r\n      newTape[head] = option.write;\r\n      const newHead = option.direction === \"L\" ? Math.max(0, head - 1) : head + 1;\r\n      if (this.branch(newTape, newHead, option.nextState, depth + 1, maxDepth))\r\n        return true;\r\n    }\r\n    return false;\r\n  }\r\n\r\n  accepts(input: string, maxDepth: number = 10): boolean {\r\n    return this.branch(input.split(\"\"), 0, this.start, 0, maxDepth);\r\n  }\r\n\r\n  exploreBranches(input: string, maxDepth: number = 5): string[][] {\r\n    const allPaths: string[][] = [];\r\n    this.dfsExplore(input.split(\"\"), 0, this.start, [], allPaths, maxDepth);\r\n    return allPaths;\r\n  }\r\n\r\n  private dfsExplore(\r\n    tape: string[], head: number, state: string,\r\n    path: string[], allPaths: string[][], maxDepth: number\r\n  ): void {\r\n    if (path.length > maxDepth) return;\r\n    const symbol = head < tape.length ? tape[head] : \"?\";\r\n    const key = `${state},${symbol}`;\r\n    const options = this.transitions.get(key) || [];\r\n\r\n    if (options.length === 0) {\r\n      allPaths.push([...path, `${state}?halt`]);\r\n      return;\r\n    }\r\n\r\n    for (const opt of options) {\r\n      const step = `${state}?${opt.nextState} (read:${symbol},write:${opt.write},${opt.direction})`;\r\n      const newTape = [...tape];\r\n      if (head >= newTape.length) newTape.push(\"?\");\r\n      newTape[head] = opt.write;\r\n      const newHead = opt.direction === \"L\" ? Math.max(0, head - 1) : head + 1;\r\n      this.dfsExplore(newTape, newHead, opt.nextState, [...path, step], allPaths, maxDepth);\r\n    }\r\n  }\r\n}\r\n\r\nclass UniversalTM {\r\n  static encode(machineDescription: object): string {\r\n    // Simplified encoding: convert TM description to binary string\r\n    return JSON.stringify(machineDescription).split(\"\").map(c =>\r\n      c.charCodeAt(0).toString(2).padStart(8, \"0\")\r\n    ).join(\"\");\r\n  }\r\n\r\n  static simulate(encoding: string, input: string): { result: string; steps: number } {\r\n    // Conceptual UTM simulation — real UTMs parse the encoding, then simulate\r\n    const desc = JSON.parse(\r\n      encoding.match(/.{8}/g)!.map(b => String.fromCharCode(parseInt(b, 2))).join(\"\")\r\n    );\r\n    const tm = new NondeterministicTM(\r\n      new Set(desc.states),\r\n      new Set(desc.inputAlphabet),\r\n      new Set(desc.tapeAlphabet),\r\n      new Map(Object.entries(desc.transitions)),\r\n      desc.start, desc.accept, desc.reject\r\n    );\r\n    const start = Date.now();\r\n    const accepted = tm.accepts(input, 20);\r\n    return { result: accepted ? \"accept\" : \"reject or timeout\", steps: Date.now() - start };\r\n  }\r\n\r\n  static churchTuringThesis(): string {\r\n    return \"Church-Turing Thesis: Every effectively computable function \" +\r\n      \"can be computed by a Turing machine (or any equivalent model).\";\r\n  }\r\n}\r\n\r\nconst ntm = new NondeterministicTM(\r\n  new Set([\"q0\", \"q1\", \"q2\", \"qAccept\", \"qReject\"]),\r\n  new Set([\"a\", \"b\"]),\r\n  new Set([\"a\", \"b\", \"?\"]),\r\n  new Map([\r\n    [\"q0,a\", [{ read: \"a\", write: \"X\", direction: \"R\", nextState: \"q0\" },\r\n              { read: \"a\", write: \"X\", direction: \"R\", nextState: \"q1\" }]],\r\n    [\"q0,?\", [{ read: \"?\", write: \"?\", direction: \"L\", nextState: \"qAccept\" }]],\r\n    [\"q1,b\", [{ read: \"b\", write: \"Y\", direction: \"R\", nextState: \"q1\" },\r\n              { read: \"b\", write: \"Y\", direction: \"R\", nextState: \"q2\" }]],\r\n    [\"q2,a\", [{ read: \"a\", write: \"Z\", direction: \"R\", nextState: \"qAccept\" }]],\r\n    [\"q2,?\", [{ read: \"?\", write: \"?\", direction: \"L\", nextState: \"qAccept\" }]],\r\n  ]),\r\n  \"q0\", \"qAccept\", \"qReject\"\r\n);\r\n\r\nconsole.log(ntm.accepts(\"a\"));     // true (guess q0?q1 path)\r\nconst paths = ntm.exploreBranches(\"a\", 3);\r\nconsole.log(`Found ${paths.length} computation paths`);\r\nconsole.log(UniversalTM.churchTuringThesis());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -----------------------------------------------------\r\n// Multi-Tape TM Converter — simulates a multi-tape TM\r\n// by encoding k tapes onto a single tape using\r\n// interleaving and marker symbols.\r\n// -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class MultiTapeTMConverter {\r\n// Given k tapes, simulate one step by scanning the\r\n// combined tape representation and dispatching per-tape\r\n// transitions.\r\nstatic simulate(\r\nk: number,\r\ntransitions: Map<string, Array<{ write: string; direction: \"L\" | \"R\"; nextState: string }>>,\r\ninputs: string[],\r\nmaxSteps: number = 100\r\n): { accepted: boolean; tapes: string[]; steps: number } {\r\n// Initialize k tapes\r\nconst tapes = inputs.map(inp => inp.split(\"\"));\r\nconst heads = new Array(k).fill(0);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let state = \"q0\";\r\nlet steps = 0;\r\n\r\nwhile (steps &lt; maxSteps) {\r\n  // Build read key: read symbol from each tape head\r\n  const readSymbols = heads.map((h, i) => {\r\n    if (h &lt; 0) return \"?\";\r\n    if (h >= tapes[i].length) return \"?\";\r\n    return tapes[i][h] || \"?\";\r\n  });\r\n  const key = `${state},${readSymbols.join(\",\")}`;\r\n  const trans = transitions.get(key);\r\n\r\n  if (!trans) {\r\n    // No transition = halt\r\n    return {\r\n      accepted: state === \"qAccept\",\r\n      tapes: tapes.map(t => t.join(\"\")),\r\n      steps\r\n    };\r\n  }\r\n\r\n  // Apply transition per tape\r\n  for (let i = 0; i &lt; k && i < trans.length; i++) {\r\n    const act = trans[i];\r\n    if (act.write !== \"e\") {\r\n      if (heads[i] &lt; 0) {\r\n        tapes[i].unshift(act.write);\r\n        heads[i] = 0;\r\n      } else if (heads[i] >= tapes[i].length) {\r\n        tapes[i].push(act.write);\r\n      } else {\r\n        tapes[i][heads[i]] = act.write;\r\n      }\r\n    }\r\n    heads[i] += act.direction === \"R\" ? 1 : -1;\r\n  }\r\n\r\n  state = trans[0].nextState;\r\n  steps++;\r\n}\r\n\r\nreturn { accepted: false, tapes: tapes.map(t => t.join(\"\")), steps };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\r\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -----------------------------------------------------\r\n// Universal Turing Machine Concept — demonstrates the\r\n// Church-Turing thesis by encoding TM descriptions as\r\n// strings and \"simulating\" them.\r\n// -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class UniversalTM {\r\nstatic churchTuringThesis(): string[] {\r\nreturn [\r\n\"Church-Turing Thesis (simplified):\",\r\n\"\",\r\n\"  'Anything that can be computed by an algorithm\",\r\n\"   can be computed by a Turing machine.'\",\r\n\"\",\r\n\"Consequences:\",\r\n\"  • All programming languages are equivalent in power\",\r\n\"    (Turing-complete).\",\r\n\"  • A Universal TM can simulate any other TM given\",\r\n\"    its description ?M? and input w.\",\r\n\"  • The UTM is the mathematical model for\",\r\n\"    stored-program computers.\",\r\n\"\",\r\n\"Equivalence of models:\",\r\n\"  Multi-tape TM   ?  Single-tape TM (polynomial slowdown)\",\r\n\"  NTM             ?  DTM (exponential slowdown)\",\r\n\"  RAM machine     ?  TM (polynomial slowdown)\",\r\n\"  Lambda calculus ?  TM (Church-Turing)\",\r\n\"  Cellular automaton ? TM (Rule 110 is Turing-complete)\"\r\n];\r\n}\r\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Demo multi-tape TM (2-tape palindrome checker)\r\nconst mtTrans = new Map<string, Array<{ write: string; direction: \"L\" | \"R\"; nextState: string }>>();\r\nmtTrans.set(\"q0,1,?\", [ { write: \"e\", direction: \"R\", nextState: \"q0\" }, { write: \"e\", direction: \"L\", nextState: \"q0\" } ]);\r\n// First tape moves right, second tape starts empty, we just demonstrate the mechanism\r\nconsole.log(UniversalTM.churchTuringThesis().join(\"\\n\"));"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\r\n\r\n// turing extensions\r\n// automata-complexity implementation\r\n\r\ninterface Task { id: string; name: string; status: string; data: unknown }\r\nclass Processor {\r\n  private tasks: Task[] = []\r\n  private maxConcurrency: number\r\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\r\n  async add(task: Omit<Task, \"status\">): Promise<void> {\r\n    this.tasks.push({ ...task, status: \"pending\" })\r\n  }\r\n  async runAll(): Promise<void> {\r\n    const running: Promise<void>[] = []\r\n    for (const t of this.tasks) {\r\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\r\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\r\n      running.push(p)\r\n    }\r\n    await Promise.all(running)\r\n  }\r\n  private async execute(t: Task): Promise<void> {\r\n    t.status = \"running\"\r\n    await new Promise(r => setTimeout(r, 10))\r\n    t.status = \"done\"\r\n  }\r\n  getResults(): Task[] { return this.tasks }\r\n  getStats(): { done: number; pending: number; running: number } {\r\n    const done = this.tasks.filter(t => t.status === \"done\").length\r\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\r\n    const running = this.tasks.filter(t => t.status === \"running\").length\r\n    return { done, pending, running }\r\n  }\r\n}\r\nasync function main() {\r\n  const proc = new Processor(2)\r\n  await proc.add({ id: '1', name: 'turing extensions', data: { topic: 'automata-complexity' } })\r\n  await proc.runAll()\r\n  console.log('Stats:', proc.getStats())\r\n}\r\nmain().catch(console.error)\r\nexport { Processor, Task }\r\n## Summary\r\n\r\n- Recursive languages are decidable (TM always halts); RE languages are recognizable (TM may loop).\r\n- L is recursive iff L is both RE and co-RE.\r\n- TMs can be encoded as strings ?M?, allowing them to be inputs to other TMs.\r\n- The universal TM simulates any TM on any input — the stored-program concept.\r\n- The Church-Turing thesis claims TMs capture all effective computation.\r\n- Oracle TMs relativize computation and create complexity class hierarchies.\r\n- The arithmetic hierarchy classifies languages by quantifier alternation depth.\r\n\r\n### Basic\r\n\r\n1. Explain why every recursive language is RE but not vice versa.\r\n2. Describe how a UTM simulates another TM. Why is the UTM's ability to read ?M? important?\r\n3. State the Church-Turing thesis in your own words.\r\n4. Show that if L is recursive, then its complement is recursive.\r\n5. Give an example of a language in RE n co-RE that is not obviously recursive.\r\n6. Write a TypeScript function that encodes a simple TM as a string suitable for UTM input.\r\n\r\n### Intermediate\r\n\r\n7. Prove: If a language L is RE, then L is recursive iff its complement is also RE.\r\n8. Show that the language { ?M? | M accepts e } is RE but not recursive (reduce from the halting problem).\r\n9. Describe how to construct a UTM with 4 states and 6 symbols (or argue why this is the minimum).\r\n10. Prove that the arithmetic hierarchy is strict: S? ? S_{n+1} for all n = 1.\r\n11. Explain the relevance of the Church-Turing thesis to quantum computing.\r\n12. Apply Rice's theorem: prove that the language { ?M? | L(M) is regular } is undecidable.\r\n13. Show that HALT_TM =? ACCEPT_TM (halting reduces to acceptance) by constructing the reduction function.\r\n\r\n### Advanced\r\n\r\n14. Prove that the language of descriptions of TMs that accept at least one string (NONEMPTY_TM) is RE but not recursive.\r\n15. Construct an encoding scheme for TMs and prove that the set of all TM descriptions is countable.\r\n16. Prove that there are uncountably many languages but only countably many TMs — conclude that most languages are not RE.\r\n17. Show relativization: find oracles A and B such that P^A = NP^A and P^B ? NP^B.\r\n18. Prove that the universal language U = { ?M, w? | M accepts w } is RE but not recursive.\r\n19. Show that TOTAL_TM = { ?M? | M halts on all inputs } is not RE and not co-RE (it is ?2°-complete).\r\n20. Implement a TypeScript function that simulates an oracle TM: given a TM description D and an oracle function O, compute whether D accepts input w using O.\r\n\r\n## Further Reading\r\n\r\n- **Turing, Alan M.** \"On Computable Numbers, with an Application to the Entscheidungsproblem.\" Proceedings of the London Mathematical Society, 1936. The original paper introducing Turing machines and the halting problem.\r\n- **Davis, Martin.** \"What is a Computation?\" In *Mathematics Today*, 1978. A accessible overview of the Church-Turing thesis and its implications.\r\n- **Copeland, B. Jack.** *The Essential Turing*. A collection of Turing's most important papers with commentary and historical context.\r\n\n"
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



/***/ }

}]);