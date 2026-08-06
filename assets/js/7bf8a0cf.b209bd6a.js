"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[64862],{

/***/ 90851
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_theory_of_computation_09_turing_md_7bf_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-theory-of-computation-09-turing-md-7bf.json
const site_docs_courses_theory_of_computation_09_turing_md_7bf_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/theory-of-computation/09-turing","title":"Chapter 9: Turing Machines","description":"Previous Turing Machine Extensions","source":"@site/docs/courses/theory-of-computation/09-turing.md","sourceDirName":"courses/theory-of-computation","slug":"/theory-of-computation/09-turing","permalink":"/ai-engineering-journey/theory-of-computation/09-turing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"09-turing","slug":"/theory-of-computation/09-turing","title":"Chapter 9: Turing Machines","sidebar_label":"Chapter 9: Turing Machines","sidebar_position":9},"sidebar":"coursesSidebar","previous":{"title":"Chapter 8: Properties of Context-Free Languages","permalink":"/ai-engineering-journey/theory-of-computation/08-cfl"},"next":{"title":"Chapter 10: Turing Machine Extensions and the Church-Turing Thesis","permalink":"/ai-engineering-journey/theory-of-computation/10-turing-extensions"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/theory-of-computation/09-turing.md


const frontMatter = {
	id: '09-turing',
	slug: '/theory-of-computation/09-turing',
	title: 'Chapter 9: Turing Machines',
	sidebar_label: 'Chapter 9: Turing Machines',
	sidebar_position: 9
};
const contentTitle = 'Chapter 9: Turing Machines';

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
  "value": "8.1 The Turing Machine Model",
  "id": "81-the-turing-machine-model",
  "level": 3
}, {
  "value": "8.2 Formal Definition of a Turing Machine",
  "id": "82-formal-definition-of-a-turing-machine",
  "level": 3
}, {
  "value": "8.3 Configuration and Computation",
  "id": "83-configuration-and-computation",
  "level": 3
}, {
  "value": "8.4 Turing Machine Language",
  "id": "84-turing-machine-language",
  "level": 3
}, {
  "value": "8.5 Acceptors, Deciders, and Recognizers",
  "id": "85-acceptors-deciders-and-recognizers",
  "level": 3
}, {
  "value": "8.6 Designing Turing Machines",
  "id": "86-designing-turing-machines",
  "level": 3
}, {
  "value": "8.7 The TM Computation: A Complete Example",
  "id": "87-the-tm-computation-a-complete-example",
  "level": 3
}, {
  "value": "8.8 Multitape Turing Machines",
  "id": "88-multitape-turing-machines",
  "level": 3
}, {
  "value": "8.7 Nondeterministic Turing Machines",
  "id": "87-nondeterministic-turing-machines",
  "level": 3
}, {
  "value": "8.8 Turing Machine Variants",
  "id": "88-turing-machine-variants",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 8.1: TM for L = { aⁿbⁿcⁿ | n ≥ 0 }",
  "id": "example-81-tm-for-l---aⁿbⁿcⁿ--n--0-",
  "level": 3
}, {
  "value": "Example 8.2: TM for Binary Increment",
  "id": "example-82-tm-for-binary-increment",
  "level": 3
}, {
  "value": "Example 8.3: TM for Palindrome Recognition",
  "id": "example-83-tm-for-palindrome-recognition",
  "level": 3
}, {
  "value": "Example 8.4: Simulating a Multitape TM on a Single Tape",
  "id": "example-84-simulating-a-multitape-tm-on-a-single-tape",
  "level": 3
}, {
  "value": "Example 8.5: NTM for the Satisfiability Problem (SAT)",
  "id": "example-85-ntm-for-the-satisfiability-problem-sat",
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
  "value": "TypeScript Implementation: Turing Machine Tape Simulator",
  "id": "typescript-implementation-turing-machine-tape-simulator",
  "level": 2
}, {
  "value": "TM Simulator: Practical Test",
  "id": "tm-simulator-practical-test",
  "level": 2
}, {
  "value": "Universal Turing Machine",
  "id": "universal-turing-machine",
  "level": 2
}, {
  "value": "Encoding TMs",
  "id": "encoding-tms",
  "level": 3
}, {
  "value": "Significance of the UTM",
  "id": "significance-of-the-utm",
  "level": 3
}, {
  "value": "Church-Turing Thesis",
  "id": "church-turing-thesis",
  "level": 2
}, {
  "value": "The Extended Church-Turing Thesis",
  "id": "the-extended-church-turing-thesis",
  "level": 3
}, {
  "value": "Further Reading",
  "id": "further-reading",
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
        id: "chapter-9-turing-machines",
        children: "Chapter 9: Turing Machines"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/08-cfl",
          children: "Properties of Context-Free Languages"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/10-turing-extensions",
          children: "Turing Machine Extensions"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define a Turing machine formally."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trace Turing machine computations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design Turing machines for specific languages and functions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand Turing machine variants: multitape, nondeterministic."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove equivalence of Turing machine variants."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare Turing machines with finite automata and PDAs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the relationship between Turing machines and algorithms."
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
        href: "../../assets/images/lessons/theory-of-computation/09-turing/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/theory-of-computation/09-turing/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/theory-of-computation/09-turing/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/theory-of-computation/09-turing/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/theory-of-computation/09-turing/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/theory-of-computation/09-turing/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "TM Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite tape, read/write head"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most powerful computation model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Formal Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7-tuple (Q, S, G, d, q0, q_accept, q_reject)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal model of algorithms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configurations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(state, tape content, head position) triple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete computation snapshot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multitape TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k independent tapes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalent to single-tape TM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nondeterministic TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple next-configuration choices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalent to DTM for computability"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[TM Model] --> B[Formal Definition]\n    B --> C[Configurations]\n    C --> D[Language Recognition]\n    D --> E[Design Patterns]\n    E --> F[Multitape TM]\n    F --> G[Nondeterministic TM]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/theory-of-computation/08-turing.png",
        alt: "Turing Machine State Diagram - a^n b^n c^n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-the-turing-machine-model",
      children: "8.1 The Turing Machine Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alan Turing introduced the Turing machine in 1936 as a model of \"computation by a human clerk.\" It is the most powerful model of computation we have → anything computable by any mechanical process can be computed by a Turing machine (the Church-Turing thesis)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Turing machine consists of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "infinite tape"
        }), " divided into cells, each containing a symbol from a finite alphabet."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "tape head"
        }), " that can read and write symbols and move left or right."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "finite control"
        }), " (states) that determines the machine's behavior."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Unlike finite automata, the TM has ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "unbounded memory"
      }), " (the infinite tape) and can both ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "read and write"
      }), ". Unlike PDAs, the TM can access ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "any position"
      }), " on the tape (not just the top of a stack)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-formal-definition-of-a-turing-machine",
      children: "8.2 Formal Definition of a Turing Machine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Turing machine"
      }), " is a 7-tuple (Q, Σ, Γ, δ, q₀, q_accept, q_reject) where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q"
        }), " is a finite set of states."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Σ"
        }), " is the input alphabet (does not contain the blank symbol)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Γ"
        }), " is the tape alphabet (Σ ⊂ Γ, includes blank symbol ␣)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "δ: Q × Γ → Q × Γ × {L, R}"
        }), " is the transition function."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "q₀ ∈ Q"
        }), " is the start state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "q_accept ∈ Q"
        }), " is the accepting state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "q_reject ∈ Q"
        }), " is the rejecting state (q_reject ≠ q_accept)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A transition δ(q, a) = (r, b, L) means:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In state q, reading symbol a on the tape,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write symbol b, move the head left, and go to state r."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Computation:"
      }), " Starting with the input on the tape (head at leftmost symbol), the TM repeatedly applies δ until it enters q_accept (accepts) or q_reject (rejects). The TM may also ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "loop forever"
      }), " (never halt)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-configuration-and-computation",
      children: "8.3 Configuration and Computation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "configuration"
      }), " of a TM is a triple (q, u, v) where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q ∈ Q is the current state."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uv is the tape content (with the head at the first symbol of v)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All cells beyond the last symbol of uv are blank."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We write configurations as: u q v, where the current state is before the symbol under the head."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "q₀ 0101"
      }), " means state q₀, tape contains \"0101\", head at the first 0."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The start configuration on input w is: q₀ w."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "accepting configuration"
      }), " has state q_accept. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rejecting configuration"
      }), " has state q_reject."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A TM ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "halts"
      }), " when it enters q_accept or q_reject. Otherwise it loops."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-turing-machine-language",
      children: "8.4 Turing Machine Language"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A Turing machine M ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "accepts"
      }), " string w if there is a sequence of configurations C₀, C₁, …, Cₖ where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C₀ is the start configuration for w."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each Cᵢ yields Cᵢ₊₁ via δ."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cₖ is an accepting configuration."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "language recognized"
      }), " by M is:\nL(M) = { w | M accepts w }"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Turing machines recognize exactly the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "recursively enumerable"
      }), " (RE) languages. If a TM halts on all inputs, it's a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "decider"
      }), " and recognizes a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "recursive"
      }), " language."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-acceptors-deciders-and-recognizers",
      children: "8.5 Acceptors, Deciders, and Recognizers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A TM can play three distinct roles:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Language Class"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recognizer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accepts strings in L; may loop or reject on strings not in L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursively enumerable (RE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Decider"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always halts: accepts strings in L, rejects strings not in L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enumerator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generates all strings in L one by one (possibly with repetitions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem:"
      }), " A language is RE iff some enumerator enumerates it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof sketch (?):"
      }), " Given a TM M that recognizes L, construct an enumerator E that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generates strings s1, s2, s3, ... over S* in lexicographic order."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each s?, runs M on s? for at most i steps."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If M accepts within i steps, prints s?."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This \"dovetailing\" technique ensures every accepted string is eventually printed."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "86-designing-turing-machines",
      children: "8.6 Designing Turing Machines"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Designing TMs is akin to writing low-level programs. Common design patterns:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Marking symbols:"
        }), " Use tape symbols with dots (e.g., á) to mark already-processed symbols."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple passes:"
        }), " Sweep the tape left-to-right and right-to-left repeatedly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shift and insert:"
        }), " Move data to make room for new symbols."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Subroutine states:"
        }), " Use sets of states to implement subroutine-like behavior."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-track tape:"
        }), " Treat each tape cell as containing a tuple (like an array)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "87-the-tm-computation-a-complete-example",
      children: "8.7 The TM Computation: A Complete Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let's trace the TM for { anbncn | n = 0 } on input \"aabbcc\":"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step trace:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tape (head at ^)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "^a a b b c c ?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark a ? X"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X ^a b b c c ?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan right for b"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X a ^b b c c ?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read b, mark ? Y"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X a Y ^b c c ?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan right for c"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X a Y b ^c c ?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read c, mark ? Z"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X a Y b Z ^c ?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan left for X"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X a Y b ^Z c ?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue left"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "^X a Y b Z c ?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Back to start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X ^a Y b Z c ?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark next a ? X"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X X ^Y b Z c ?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan right for b"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X X Y ^b Z c ?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark b ? Y"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X X Y Y ^Z c ?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan right for c"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X X Y Y Z ^c ?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark c ? Z"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X X Y Y Z ^Z ?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Back to start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X X Y Y Z ^Z ?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No more a's, verify"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X X Y Y Z ^Z ?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan right"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "q_accept"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X X Y Y Z Z ^?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accept!"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This trace shows the algorithm's pattern: each pass removes one a, one b, and one c."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "88-multitape-turing-machines",
      children: "8.8 Multitape Turing Machines"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "k-tape Turing machine"
      }), " has k independent tapes, each with its own read/write head. The transition function becomes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "δ: Q × Γᵏ → Q × Γᵏ × {L, R}ᵏ"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The machine reads all k heads simultaneously, writes to all k tapes, and moves all k heads."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem:"
      }), " Every multitape Turing machine has an equivalent single-tape Turing machine."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof sketch:"
      }), " Use a single tape with \"tracks\" separated by a delimiter #. Each track stores the content of one tape. A special marker (ḃ) indicates the position of each tape's head. Simulating one step of the k-tape machine may require sweeping the entire tape to find all head positions, making the simulation potentially slow but correct."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"Multitape TM (k=3)\"\n        T1[tape1: 0 1 0]\n        T2[tape2: a b a]\n        T3[tape3: x y z]\n    end\n    subgraph \"Single-tape encoding\"\n        ST[\"#0?1 0#a b?a#x y?z#\"]\n    end\n    Multitape -->|\"Encoding\"| Single-tape\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "87-nondeterministic-turing-machines",
      children: "8.7 Nondeterministic Turing Machines"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nondeterministic Turing machine (NTM)"
      }), " has a transition function:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "δ: Q × Γ → P(Q × Γ × {L, R})"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["At each step, the NTM may have multiple choices. It accepts if ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "any"
      }), " branch leads to q_accept."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem:"
      }), " Every NTM has an equivalent deterministic Turing machine."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof sketch:"
      }), " Simulate the NTM using a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "breadth-first"
      }), " search of the computation tree. The DTM uses three tapes: (1) input tape, (2) work tape, (3) address tape that encodes which branch to take at each step. The DTM systematically tries all possible sequences of nondeterministic choices."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Consequence for complexity:"
      }), " The simulation may require exponential time (exploring all branches), but for computability, NTMs add no power."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "88-turing-machine-variants",
      children: "8.8 Turing Machine Variants"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Other equivalent variants:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Doubly infinite tape:"
        }), " Tape extends infinitely in both directions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Random access TM:"
        }), " Can jump to any tape position in one step."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-dimensional tape:"
        }), " Tape is a grid."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Oblivious TM:"
        }), " Head movement depends only on step number, not on input."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write-once TM:"
        }), " Can write each cell only once."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Counter machine:"
        }), " Uses counters instead of a tape (with 2+ counters, equivalent to TM)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All of these are equivalent in power to the standard single-tape TM."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-81-tm-for-l---aⁿbⁿcⁿ--n--0-",
      children: "Example 8.1: TM for L = { aⁿbⁿcⁿ | n ≥ 0 }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strategy: Scan left to right, marking one a, one b, and one c each pass. Repeat until all symbols are marked."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Detailed transitions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Initial setup:"
          }), " Read first symbol."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If blank → accept (empty string)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If a → mark it as X, move right to find b."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If b or c → reject (wrong order)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Mark a, b, c cycle:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "From marked a, move right past all a's and Y's to find first b, mark as Y."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Move right past all b's and Z's to find first c, mark as Z."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Move left to the leftmost X or beginning, repeat."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Cleanup:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "When no unmarked a remains, verify all b's and c's are marked."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If so, accept."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "State design:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₀: Initial → find first a, mark as X, go to q₁"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₁: Finding b → scan right over a, Y; mark first b as Y, go to q₂"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₂: Finding c → scan right over b, Z; mark first c as Z, go to q₃"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₃: Return left → scan left over X, Y, Z, a, b, c to leftmost; go to q₀"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₄: Verification → check all symbols are X, Y, Z"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q_accept, q_reject"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-82-tm-for-binary-increment",
      children: "Example 8.2: TM for Binary Increment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given a binary number on the tape, add 1 to it."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strategy: Start at the least significant bit (rightmost), propagate carries leftward."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "State q₀: move right to end of input\n  δ(q₀, 0) = (q₀, 0, R)\n  δ(q₀, 1) = (q₀, 1, R)\n  δ(q₀, ␣) = (q₁, ␣, L)  -- reached end, start incrementing\n\nState q₁: increment current digit\n  δ(q₁, 0) = (q₂, 1, L)  -- 0→1, done\n  δ(q₁, 1) = (q₁, 0, L)  -- 1→0, carry\n  δ(q₁, ␣) = (q₂, 1, L)  -- overflow: 1000... → 1000...1\n\nState q₂: move to start and halt\n  δ(q₂, 0) = (q₂, 0, L)\n  δ(q₂, 1) = (q₂, 1, L)\n  δ(q₂, ␣) = (q_accept, ␣, R)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trace for \"1011\" (11): q₀1011 → * → 1011 q₁ (at ␣) → 101 q₁ 1 → 10 q₁ 01 → 1 q₁ 001 → q₂ 1100 → * → q_accept 1100 (12)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-83-tm-for-palindrome-recognition",
      children: "Example 8.3: TM for Palindrome Recognition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Language: L = { w ∈ {0,1}* | w = wʀ }."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare first and last symbols → if they match, erase both and repeat."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If only ε or one symbol remains, accept."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transitions (sketch):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₀: Read first symbol. If 0 → replace with X, go to q₁ (looking for 0 at end). If 1 → replace with X, go to q₂. If blank → accept."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₁: Scan right to end, ignoring 0,1. At blank, move left. If 0 → replace with X, go to q₃. If 1 or X → reject."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₂: Symmetric to q₁ for 1."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₃: Scan left to beginning (past X's, 0's, 1's). At X → move right to next unprocessed symbol, go to q₀."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-84-simulating-a-multitape-tm-on-a-single-tape",
      children: "Example 8.4: Simulating a Multitape TM on a Single Tape"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To simulate a 2-tape TM on a single tape:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Represent tape contents as: #tape1#tape2#."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark head positions with dots: #0ḃ1#1ǟ0#."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "To simulate one step: scan from first # to last # to find head positions, read both symbols, then scan back to write and move heads."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-85-ntm-for-the-satisfiability-problem-sat",
      children: "Example 8.5: NTM for the Satisfiability Problem (SAT)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given a Boolean formula in CNF, determine if there is a satisfying assignment. An NTM can:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nondeterministically write 0 or 1 for each variable (the \"guess\" phase)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deterministically evaluate the formula (the \"check\" phase)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If any assignment satisfies the formula, the NTM accepts. The DTM simulation would try all 2ⁿ assignments exponentially."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Read/Write"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Power"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DFA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (state only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PDA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack (LIFO)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read/pop/push"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context-free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tape (random access)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read and write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "TM Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finite set of states"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input alphabet (no blank)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tape alphabet (includes blank ?)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q × G ? Q × G × {L, R}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "q0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "q_accept"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accept state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "q_reject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reject state"
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
            children: "TM Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formal model of computation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time/space complexity definition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stored-program concept (UTM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compilers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code generation as tape transformation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Problem reduction to TM acceptance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " A TM differs from a PDA by having:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) More states"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Random access memory (tape) ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Nondeterminism"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Finite control"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** A TM's tape allows random access read/write, unlike the PDA's stack.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " How many tapes does a standard TM have?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) 1 ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) 2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) 3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Unlimited"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**A)** The standard TM has a single tape. Multitape TMs are equivalent but not standard.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " A TM configuration is a triple of:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) State, input, output"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) State, tape content, head position ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) State only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) State, stack, input"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** (state, tape content, head position) fully describes the TM at any point.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Multitape TMs are ___ standard TMs:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) More powerful than"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Equivalent to ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Less powerful than"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Incomparable to"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Every multitape TM can be simulated by a single-tape TM (with possible slowdown).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Nondeterministic TMs are ___ deterministic TMs:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) More powerful"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Equivalent (for computability) ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Less powerful"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Only equivalent for regular languages"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** NTM and DTM recognize the same languages (though NTM may be faster).\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "TMs are the ultimate model of what computers can do."
          }), " While real computers have finite memory, any algorithm running on a real computer can be simulated by a TM. Understanding TMs means understanding the fundamental limits of computation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "TM design is programming at its most basic."
          }), " Designing a TM forces you to think about state, tape operations, and control flow at the most primitive level — analogous to programming in assembly language without a stack or registers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Equivalent variants simplify proofs."
          }), " The equivalence of multitape, nondeterministic, and other TM variants means you can use the most convenient model for design and the simplest for analysis. When proving something about TMs, choose the variant that makes the proof easiest."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "TMs are not practical machines."
          }), " No one builds Turing machines for real computation. Their value is theoretical: they define the boundary of what is computable. Real engineering uses restricted models (DFA, PDA) for efficiency."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-turing-machine-tape-simulator",
      children: "TypeScript Implementation: Turing Machine Tape Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Turing Machine Simulator\n\ntype TMState = string;\ntype TMSymbol = string;\n\nclass TuringMachine {\n  constructor(\n    public states: Set<TMState>,\n    public inputAlphabet: Set<TMSymbol>,\n    public tapeAlphabet: Set<TMSymbol>,\n    public transitions: Map<string, { nextState: TMState; write: TMSymbol; direction: \"L\" | \"R\" }>,\n    public start: TMState,\n    public accept: TMState,\n    public reject: TMState\n  ) {}\n\n  simulate(input: string, maxSteps: number = 1000): { accepted: boolean; steps: number; tape: string } {\n    let tape = input.split(\"\");\n    let head = 0;\n    let state = this.start;\n    let steps = 0;\n\n    const tapeLog: string[] = [];\n\n    while (state !== this.accept && state !== this.reject && steps < maxSteps) {\n      const symbol = head < tape.length ? tape[head] : \"?\";\n      const key = `${state},${symbol}`;\n      const trans = this.transitions.get(key);\n\n      if (!trans) {\n        state = this.reject;\n        break;\n      }\n\n      // Write symbol\n      if (head >= tape.length) tape.push(\"?\");\n      tape[head] = trans.write;\n\n      // Move head\n      if (trans.direction === \"L\") head = Math.max(0, head - 1);\n      else head++;\n\n      state = trans.nextState;\n      steps++;\n      tapeLog.push(tape.join(\"\"));\n    }\n\n    return {\n      accepted: state === this.accept,\n      steps,\n      tape: tape.join(\"\").replace(/?+$/, \"\")\n    };\n  }\n\n  // Binary incrementer TM\n  static binaryIncrementer(): TuringMachine {\n    const states = new Set([\"q0\", \"q1\", \"q2\", \"qAccept\", \"qReject\"]);\n    const inputAlphabet = new Set([\"0\", \"1\"]);\n    const tapeAlphabet = new Set([\"0\", \"1\", \"?\"]);\n\n    const trans = new Map<string, { nextState: string; write: string; direction: \"L\" | \"R\" }>();\n\n    // Move right to end of input\n    trans.set(\"q0,0\", { nextState: \"q0\", write: \"0\", direction: \"R\" });\n    trans.set(\"q0,1\", { nextState: \"q0\", write: \"1\", direction: \"R\" });\n    trans.set(\"q0,?\", { nextState: \"q1\", write: \"?\", direction: \"L\" });\n\n    // Increment (backwards)\n    trans.set(\"q1,0\", { nextState: \"q2\", write: \"1\", direction: \"L\" });\n    trans.set(\"q1,1\", { nextState: \"q1\", write: \"0\", direction: \"L\" });\n    trans.set(\"q1,?\", { nextState: \"qAccept\", write: \"1\", direction: \"L\" });\n\n    // Return to start\n    trans.set(\"q2,0\", { nextState: \"q2\", write: \"0\", direction: \"L\" });\n    trans.set(\"q2,1\", { nextState: \"q2\", write: \"1\", direction: \"L\" });\n    trans.set(\"q2,?\", { nextState: \"qAccept\", write: \"?\", direction: \"L\" });\n\n    return new TuringMachine(states, inputAlphabet, tapeAlphabet, trans, \"q0\", \"qAccept\", \"qReject\");\n  }\n\n  // Palindrome checker TM\n  static palindromeChecker(): TuringMachine {\n    const states = new Set([\"q0\", \"q1\", \"q2\", \"q3\", \"q4\", \"qAccept\", \"qReject\"]);\n    const inputAlphabet = new Set([\"0\", \"1\"]);\n    const tapeAlphabet = new Set([\"0\", \"1\", \"?\", \"X\"]);\n    const trans = new Map<string, { nextState: string; write: string; direction: \"L\" | \"R\" }>();\n\n    trans.set(\"q0,0\", { nextState: \"q1\", write: \"X\", direction: \"R\" });\n    trans.set(\"q0,1\", { nextState: \"q2\", write: \"X\", direction: \"R\" });\n    trans.set(\"q0,?\", { nextState: \"qAccept\", write: \"?\", direction: \"L\" });\n\n    trans.set(\"q1,0\", { nextState: \"q1\", write: \"0\", direction: \"R\" });\n    trans.set(\"q1,1\", { nextState: \"q1\", write: \"1\", direction: \"R\" });\n    trans.set(\"q1,?\", { nextState: \"q3\", write: \"?\", direction: \"L\" });\n\n    trans.set(\"q2,0\", { nextState: \"q2\", write: \"0\", direction: \"R\" });\n    trans.set(\"q2,1\", { nextState: \"q2\", write: \"1\", direction: \"R\" });\n    trans.set(\"q2,?\", { nextState: \"q4\", write: \"?\", direction: \"L\" });\n\n    trans.set(\"q3,0\", { nextState: \"qAccept\", write: \"X\", direction: \"L\" });\n    trans.set(\"q3,1\", { nextState: \"qReject\", write: \"1\", direction: \"L\" });\n\n    trans.set(\"q4,1\", { nextState: \"qAccept\", write: \"X\", direction: \"L\" });\n    trans.set(\"q4,0\", { nextState: \"qReject\", write: \"0\", direction: \"L\" });\n\n    return new TuringMachine(states, inputAlphabet, tapeAlphabet, trans, \"q0\", \"qAccept\", \"qReject\");\n  }\n\n  static haltChecker(): { halts: boolean; reason: string } {\n    // Demonstrates the halting problem concept\n    return {\n      halts: false,\n      reason: \"The halting problem is undecidable — no TM can determine if another TM halts\"\n    };\n  }\n}\n\nconst incTM = TuringMachine.binaryIncrementer();\nconsole.log(incTM.simulate(\"1011\"));  // 1100\n\nconst palTM = TuringMachine.palindromeChecker();\nconsole.log(palTM.simulate(\"1001\"));   // accepted\nconsole.log(palTM.simulate(\"1000\"));   // rejected\nconsole.log(TuringMachine.haltChecker());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -----------------------------------------------------\n// Busy Beaver Runner — simulates the classic Busy Beaver\n// Turing machine competition.  The Busy Beaver function\n// S(n) is the maximum number of 1s an n-state TM can\n// write before halting.  We demonstrate known winners.\n// -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class BusyBeaverRunner {\n// Run a Busy Beaver candidate TM and count steps / ones\nstatic run(\ntransitions: Map<string, { write: string; direction: \"L\" | \"R\"; nextState: string }>,\nmaxSteps: number = 10000\n): { steps: number; ones: number; tape: Map<number, string>; halted: boolean } {\nconst tape = new Map<number, string>();\nlet head = 0;\nlet state = \"A\";\nlet steps = 0;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "while (steps &lt; maxSteps) {\n  const symbol = tape.get(head) || \"0\";\n  const key = `${state},${symbol}`;\n  const trans = transitions.get(key);\n\n  if (!trans) {\n    // No transition = halt\n    const ones = [...tape.values()].filter(v => v === \"1\").length;\n    return { steps, ones, tape: new Map(tape), halted: true };\n  }\n\n  tape.set(head, trans.write);\n  head += trans.direction === \"R\" ? 1 : -1;\n  state = trans.nextState;\n  steps++;\n}\n\nconst ones = [...tape.values()].filter(v => v === \"1\").length;\nreturn { steps, ones, tape: new Map(tape), halted: false };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Known Busy Beaver winners for S(1) through S(4)\nstatic knownWinners(): string[] {\nreturn [\n\"S(1) = 1  (1-state champ writes a single 1)\",\n\"S(2) = 4  (2-state champ writes 4 ones)\",\n\"S(3) = 6  (3-state champ writes 6 ones)\",\n\"S(4) = 13 (4-state champ writes 13 ones)\",\n\"S(5) = 4,098 (current record, not proven maximal)\",\n\"S(6) = 3.5×10¹6²67 (astronomical — not maximal)\",\n\"\",\n\"Note: S(5) and beyond are mostly unknown; some candidates\",\n\"are equivalent to the Collatz conjecture and may be\",\n\"independent of ZFC set theory.\"\n];\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Run the S(2) champion\nstatic runSigma2(): { steps: number; ones: number } {\nconst bb2Trans = new Map<string, { write: string; direction: \"L\" | \"R\"; nextState: string }>([\n[\"A,0\", { write: \"1\", direction: \"R\", nextState: \"B\" }],\n[\"A,1\", { write: \"1\", direction: \"L\", nextState: \"B\" }],\n[\"B,0\", { write: \"1\", direction: \"L\", nextState: \"A\" }],\n[\"B,1\", { write: \"1\", direction: \"R\", nextState: \"HALT\" }],\n]);\nreturn BusyBeaverRunner.run(bb2Trans);\n}\n}"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["console.log(BusyBeaverRunner.knownWinners().join(\"\\n\"));\nconsole.log(\"\");\nconst sigma2 = BusyBeaverRunner.runSigma2();\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "S(2) champion: ${sigma2.ones} ones in ${sigma2.steps} steps"
      }), ");"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["// Render tape region with ones\nconst tapeEntries = [...sigma2.tape.entries()].filter(([_, v]) => v === \"1\");\nconst minPos = Math.min(...tapeEntries.map(([k]) => k));\nconst maxPos = Math.max(...tapeEntries.map(([k]) => k));\nlet tapeVis = \"\";\nfor (let p = minPos; p <= maxPos; p++) {\ntapeVis += sigma2.tape.get(p) || \"0\";\n}\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tape output: ${tapeVis}"
      }), ");"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// turing\n// automata-complexity implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'turing', data: { topic: 'automata-complexity' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n## Summary\n\n- Turing machines have infinite tape, read/write capability, and bidirectional head movement.\n- Formal definition: 7-tuple (Q, S, G, d, q0, q_accept, q_reject).\n- TM configurations encode state, tape content, and head position.\n- Multitape TMs are equivalent to single-tape TMs (with slower simulation).\n- Nondeterministic TMs are equivalent to deterministic TMs (for computability).\n- TM recognizes RE languages; TM decider recognizes recursive languages.\n- Many TM variants (multitape, multi-dimensional, random-access) are equivalent.\n\n## Exercises\n\n### Basic\n\n1. Design a TM that recognizes L = { 0ⁿ1ⁿ | n ≥ 0 }.\n2. Trace the TM from Example 8.1 on input \"aabbcc\".\n3. Design a TM that accepts strings over {a,b} with an equal number of a's and b's.\n4. Design a TM that performs binary addition of two numbers separated by +.\n5. Explain why every PDA can be simulated by a TM but not vice versa.\n\n### Intermediate\n\n6. Design a TM that computes the function f(n) = n mod 2 (binary to single-bit output).\n7. Design a TM that recognizes L = { w ∈ {a,b}* | w = wʀ } (palindromes).\n8. Show formally that a TM with a doubly infinite tape is equivalent to a standard TM.\n9. Design a 2-tape TM to recognize { aⁿbⁿcⁿ | n ≥ 0 } and then simulate it on a single tape.\n10. Design an NTM for the language of Hamiltonian paths in a graph (given as adjacency matrix on the tape).\n\n### Advanced\n\n11. Prove formally that the class of languages recognized by TMs is closed under union, intersection, and concatenation.\n12. Show that any multitape TM can be simulated by a single-tape TM with at most quadratic slowdown.\n13. Design a TM that recognizes the language { aⁿ | n is a prime number }.\n14. Prove that the simulation of an NTM by a DTM may require exponential time (show a language that an NTM decides in O(n) time but requires Ω(2ⁿ) time on a DTM).\n15. Implement (in a high-level description) a TM that simulates an arbitrary TM given its description - this is the universal Turing machine concept from Chapter 10.\n\n## TypeScript TM Simulator\n\n```typescript\ntype TapeSymbol = string;\ntype State = string;\n\ntype Transition = {\n  write: TapeSymbol;\n  move: \"L\" | \"R\";\n  nextState: State;\n};\n\ntype TMTransitionFunction = Map&lt;string, Transition&gt;;\n\nclass TuringMachine {\n  private tape: TapeSymbol[] = [\"_\"];\n  private head: number = 0;\n  private state: State;\n  private transitions: TMTransitionFunction;\n  private acceptState: State;\n  private rejectState: State;\n\n  constructor(\n    initialState: State,\n    transitions: TMTransitionFunction,\n    acceptState: State,\n    rejectState: State\n  ) {\n    this.state = initialState;\n    this.transitions = transitions;\n    this.acceptState = acceptState;\n    this.rejectState = rejectState;\n  }\n\n  loadInput(input: string): void {\n    this.tape = input.split(\"\");\n    this.tape.push(\"_\");\n    this.head = 0;\n  }\n\n  step(): boolean {\n    if (this.state === this.acceptState) return true;\n    if (this.state === this.rejectState) return false;\n\n    const symbol = this.head &lt; this.tape.length\n      ? this.tape[this.head] : \"_\";\n    const key = this.state + \",\" + symbol;\n    const trans = this.transitions.get(key);\n\n    if (!trans) return false;\n\n    this.tape[this.head] = trans.write;\n    this.head += trans.move === \"R\" ? 1 : -1;\n    if (this.head &lt; 0) { this.tape.unshift(\"_\"); this.head = 0; }\n    if (this.head >= this.tape.length) { this.tape.push(\"_\"); }\n    this.state = trans.nextState;\n    return false;\n  }\n\n  run(input: string): boolean {\n    this.loadInput(input);\n    while (this.state !== this.acceptState &&\n           this.state !== this.rejectState) {\n      if (this.step()) break;\n    }\n    return this.state === this.acceptState;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tm-simulator-practical-test",
      children: "TM Simulator: Practical Test"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Test: Binary increment TM\nconst incrementTransitions: TMTransitionFunction = new Map([\n  [\"q0,0\", { write: \"0\", move: \"R\", nextState: \"q0\" }],\n  [\"q0,1\", { write: \"1\", move: \"R\", nextState: \"q0\" }],\n  [\"q0,_\", { write: \"_\", move: \"L\", nextState: \"q1\" }],\n  [\"q1,0\", { write: \"1\", move: \"L\", nextState: \"q2\" }],\n  [\"q1,1\", { write: \"0\", move: \"L\", nextState: \"q1\" }],\n  [\"q1,_\", { write: \"1\", move: \"L\", nextState: \"q2\" }],\n  [\"q2,0\", { write: \"0\", move: \"L\", nextState: \"q2\" }],\n  [\"q2,1\", { write: \"1\", move: \"L\", nextState: \"q2\" }],\n  [\"q2,_\", { write: \"_\", move: \"R\", nextState: \"q_accept\" }],\n]);\n\nconst incrementTM = new TuringMachine(\n  \"q0\", incrementTransitions, \"q_accept\", \"q_reject\"\n);\nconsole.log(incrementTM.run(\"1011\")); // true (11 ? 12)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "universal-turing-machine",
      children: "Universal Turing Machine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Universal Turing Machine (UTM)"
      }), " is a TM that can simulate any other TM. It takes as input:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "description"
        }), " of another TM M (encoded as a string ?M?)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "input"
        }), " string w for M"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The UTM then simulates M's computation on w."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[\"?M?w\"] --> B[UTM]\n    B --> C{Decode<br/>transition}\n    C --> D{Simulate step}\n    D --> E{Halted?}\n    E -->|No| C\n    E -->|Yes| F[Accept/Reject]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "encoding-tms",
      children: "Encoding TMs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A TM M = (Q, S, G, d, q0, q_accept, q_reject) can be encoded as a string over {0,1}:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encode states: q1 ? 1, q2 ? 11, q3 ? 111, ..."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encode symbols: a1 ? 1, a2 ? 11, a3 ? 111, ..."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encode directions: L ? 1, R ? 11"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encode transitions: d(q, a) = (r, b, ?) ? 0{q}0{a}0{r}0{b}0{?}0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Concatenate all transition encodings separated by 00"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function encodeTM(M: TuringMachineDefinition): string {\n  const encodings: string[] = [];\n  for (const [key, trans] of M.transitions) {\n    const [q, sym] = key.split(\",\");\n    const qCode = \"1\".repeat(stateToInt(q) + 1);\n    const symCode = \"1\".repeat(symToInt(sym) + 1);\n    const rCode = \"1\".repeat(stateToInt(trans.nextState) + 1);\n    const wCode = \"1\".repeat(symToInt(trans.write) + 1);\n    const dirCode = trans.move === \"L\" ? \"1\" : \"11\";\n    encodings.push(`0${qCode}0${symCode}0${rCode}0${wCode}0${dirCode}0`);\n  }\n  return encodings.join(\"00\");\n}\n\ntype TuringMachineDefinition = {\n  states: string[];\n  alphabet: string[];\n  transitions: TMTransitionFunction;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "significance-of-the-utm",
      children: "Significance of the UTM"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The UTM is the theoretical foundation of the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "stored-program computer"
      }), ". Modern computers are essentially UTMs:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Programs are stored as data in memory (encoded instructions)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The CPU fetches, decodes, and executes instructions from memory"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without the UTM concept, computers would be fixed-function devices — each machine dedicated to a single computation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "church-turing-thesis",
      children: "Church-Turing Thesis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Church-Turing thesis"
      }), " states:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Every effectively computable function can be computed by a Turing machine."
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is not a theorem — it's a claim about the nature of computation. It has been remarkably resilient:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every proposed model of computation (?-calculus, recursive functions, Post systems, RAM machines, cellular automata) has been proven equivalent to TMs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No one has found a function that is \"intuitively computable\" but not TM-computable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quantum computers (with bounded precision) can be simulated by TMs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-extended-church-turing-thesis",
      children: "The Extended Church-Turing Thesis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Extended Church-Turing thesis"
      }), " adds:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Any computation that can be done efficiently (in polynomial time) on any reasonable model can be done in polynomial time on a TM."
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quantum computing challenges this thesis — Shor's algorithm factors in polynomial time on a quantum computer, but no polynomial-time TM factoring algorithm is known. Whether quantum computers violate the extended thesis remains an open question."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[\"Models of Computation\"] --> B[?-calculus]\n    A --> C[Recursive Functions]\n    A --> D[Post Systems]\n    A --> E[\"Turing Machines\"]\n    A --> F[\"RAM Machines\"]\n    A --> G[\"Cellular Automata\"]\n    B --> H[All Equivalent]\n    C --> H\n    D --> H\n    E --> H\n    F --> H\n    G --> H\n    H --> I[\"Church-Turing thesis:<br/>All capture 'effective<br/>computability'\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sipser, Michael."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Introduction to the Theory of Computation"
        }), " (3rd ed.). Chapter 3 introduces Turing machines with clear examples and proofs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hopcroft, John E., Motwani, Rajeev, and Ullman, Jeffrey D."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Introduction to Automata Theory, Languages, and Computation"
        }), " (3rd ed.). Chapter 8 covers TM variants and the Church-Turing thesis."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lewis, Harry R. and Papadimitriou, Christos H."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Elements of the Theory of Computation"
        }), " (2nd ed.). Chapter 4 provides a rigorous treatment of Turing machines and computability."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Boolos, George S., Burgess, John P., and Jeffrey, Richard C."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Computability and Logic"
        }), " (5th ed.). A philosophical and mathematical approach to Turing machines and the limits of computation."]
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