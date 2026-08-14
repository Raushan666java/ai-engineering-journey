"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[89662],{

/***/ 78437
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_theory_of_computation_11_decidability_md_9d4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-theory-of-computation-11-decidability-md-9d4.json
const site_docs_courses_theory_of_computation_11_decidability_md_9d4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/theory-of-computation/11-decidability","title":"Chapter 11: Decidability","description":"Previous Reducibility","source":"@site/docs/courses/theory-of-computation/11-decidability.md","sourceDirName":"courses/theory-of-computation","slug":"/theory-of-computation/11-decidability","permalink":"/ai-engineering-journey/theory-of-computation/11-decidability","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"id":"11-decidability","slug":"/theory-of-computation/11-decidability","title":"Chapter 11: Decidability","sidebar_label":"Chapter 11: Decidability","sidebar_position":11},"sidebar":"course-theory-of-computation","previous":{"title":"Chapter 10: Turing Machine Extensions and the Church-Turing Thesis","permalink":"/ai-engineering-journey/theory-of-computation/10-turing-extensions"},"next":{"title":"Chapter 12: Reducibility and Advanced Undecidability","permalink":"/ai-engineering-journey/theory-of-computation/12-reducibility"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/theory-of-computation/11-decidability.md


const frontMatter = {
	id: '11-decidability',
	slug: '/theory-of-computation/11-decidability',
	title: 'Chapter 11: Decidability',
	sidebar_label: 'Chapter 11: Decidability',
	sidebar_position: 11
};
const contentTitle = 'Chapter 11: Decidability';

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
  "value": "10.1 Decidable vs Undecidable Problems",
  "id": "101-decidable-vs-undecidable-problems",
  "level": 3
}, {
  "value": "10.2 The Halting Problem",
  "id": "102-the-halting-problem",
  "level": 3
}, {
  "value": "10.3 The Diagonalization Language",
  "id": "103-the-diagonalization-language",
  "level": 3
}, {
  "value": "10.4 The Post Correspondence Problem (PCP)",
  "id": "104-the-post-correspondence-problem-pcp",
  "level": 3
}, {
  "value": "10.5 Reductions",
  "id": "105-reductions",
  "level": 3
}, {
  "value": "10.5 Decidable Problems About Regular Languages",
  "id": "105-decidable-problems-about-regular-languages",
  "level": 3
}, {
  "value": "10.6 Decidable Problems About CFLs",
  "id": "106-decidable-problems-about-cfls",
  "level": 3
}, {
  "value": "10.7 Undecidable Problems About TMs",
  "id": "107-undecidable-problems-about-tms",
  "level": 3
}, {
  "value": "10.8 Mapping Reductions vs Turing Reductions",
  "id": "108-mapping-reductions-vs-turing-reductions",
  "level": 3
}, {
  "value": "10.9 Hilbert&#39;s Tenth Problem",
  "id": "109-hilberts-tenth-problem",
  "level": 3
}, {
  "value": "10.10 Rice&#39;s Theorem",
  "id": "1010-rices-theorem",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 10.1: Reducing HALT_TM to EMPTY_TM",
  "id": "example-101-reducing-halt_tm-to-empty_tm",
  "level": 3
}, {
  "value": "Example 10.2: Reducing A_TM to REGULAR_TM",
  "id": "example-102-reducing-a_tm-to-regular_tm",
  "level": 3
}, {
  "value": "Example 10.3: Applying Rice&#39;s Theorem",
  "id": "example-103-applying-rices-theorem",
  "level": 3
}, {
  "value": "Example 10.4: Decidable Problems → DFA Emptiness",
  "id": "example-104-decidable-problems--dfa-emptiness",
  "level": 3
}, {
  "value": "Example 10.5: Decidable Problems → CFG Membership",
  "id": "example-105-decidable-problems--cfg-membership",
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
  "value": "The Limitations of Reduction Proofs",
  "id": "the-limitations-of-reduction-proofs",
  "level": 2
}, {
  "value": "TypeScript: Generic Reduction Framework",
  "id": "typescript-generic-reduction-framework",
  "level": 3
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "TypeScript Implementation: Decision Problem Classifier and Halting Problem",
  "id": "typescript-implementation-decision-problem-classifier-and-halting-problem",
  "level": 2
}, {
  "value": "Decision Procedures in Practice",
  "id": "decision-procedures-in-practice",
  "level": 2
}, {
  "value": "Example: Decidable Fragment of First-Order Logic",
  "id": "example-decidable-fragment-of-first-order-logic",
  "level": 3
}, {
  "value": "The Process of Proving Undecidability",
  "id": "the-process-of-proving-undecidability",
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
        id: "chapter-11-decidability",
        children: "Chapter 11: Decidability"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/10-turing-extensions",
          children: "Turing Machine Extensions"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/12-reducibility",
          children: "Reducibility"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between decidable and undecidable problems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove the undecidability of the halting problem via diagonalization."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify decidable problems about regular and context-free languages."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the reduction technique to prove undecidability."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the relationship between undecidability and non-RE languages."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize common patterns in undecidability proofs."
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
        href: "../../assets/images/lessons/theory-of-computation/11-decidability/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/theory-of-computation/11-decidability/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/theory-of-computation/11-decidability/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/theory-of-computation/11-decidability/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/theory-of-computation/11-decidability/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/theory-of-computation/11-decidability/visual-explanation.png",
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
            children: "Halting Problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No algorithm decides if TM halts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental limit of computation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diagonalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-reference leads to contradiction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core technique for undecidability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reductions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convert problem A to problem B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prove undecidability systematically"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rice's Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-trivial semantic properties undecidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generalizes many undecidability proofs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decidable Problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFA/CFG membership, emptiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithms exist for these"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Decidable vs Undecidable] --> B[Halting Problem]\n    B --> C[Diagonalization]\n    C --> D[Reductions]\n    D --> E[Decidable Problems]\n    E --> F[Rice Theorem]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/theory-of-computation/10-decidability.png",
        alt: "Decidability Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-decidable-vs-undecidable-problems",
      children: "10.1 Decidable vs Undecidable Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A problem (language) is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "decidable"
      }), " if there exists an algorithm (Turing machine that always halts) that correctly answers yes/no for every instance. Otherwise, it is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "undecidable"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decidable problems"
      }), " → the golden age of automata theory:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All problems about DFAs (membership, emptiness, finiteness, equivalence) are decidable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All problems about CFGs (membership, emptiness) are decidable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Many problems about TMs (membership in specific cases) are decidable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Undecidable problems"
      }), " → the frontier:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The halting problem for Turing machines."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The equivalence problem for CFGs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hilbert's tenth problem (solving Diophantine equations)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Post correspondence problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Many problems about TMs: emptiness, equivalence, totality."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-the-halting-problem",
      children: "10.2 The Halting Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "HALT_TM = { ⟨M, w⟩ | M is a TM and M halts on input w }"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem:"
      }), " HALT_TM is undecidable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof (by diagonalization, due to Turing 1936):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assume for contradiction that HALT_TM is decidable. Then there exists a decider H that:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "H(⟨M, w⟩) = accept if M halts on w."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "H(⟨M, w⟩) = reject if M loops on w."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Construct a new TM D:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D takes as input ⟨M⟩ (a TM description)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D runs H(⟨M, ⟨M⟩⟩)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If H accepts (meaning M halts on its own description), D ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "loops forever"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If H rejects (meaning M loops on its own description), D ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "halts"
        }), " (accepts)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now ask: what does D do on input ⟨D⟩?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If D halts on ⟨D⟩, then H(⟨D, ⟨D⟩⟩) = accept. But then D would loop (by construction). Contradiction."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If D loops on ⟨D⟩, then H(⟨D, ⟨D⟩⟩) = reject. But then D would halt. Contradiction."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thus H cannot exist. HALT_TM is undecidable."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intuition:"
      }), " The halting problem asks a TM to predict its own behavior → a task that leads to paradox, much like the self-referential \"This statement is false.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-the-diagonalization-language",
      children: "10.3 The Diagonalization Language"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Define A_TM = { ⟨M, w⟩ | M accepts w }."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem:"
      }), " A_TM is undecidable (but RE)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof:"
      }), " Similar diagonalization. Assume decider H for A_TM. Construct D:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D(⟨M⟩): Run H(⟨M, ⟨M⟩⟩). If H accepts, D rejects; if H rejects, D accepts."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Question: does D accept ⟨D⟩?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If D accepts ⟨D⟩, then H(⟨D, ⟨D⟩⟩) = accept, so D should reject. Contradiction."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If D rejects ⟨D⟩, then H(⟨D, ⟨D⟩⟩) = reject, so D should accept. Contradiction."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Therefore H cannot exist."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "104-the-post-correspondence-problem-pcp",
      children: "10.4 The Post Correspondence Problem (PCP)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Post Correspondence Problem"
      }), " asks: given a collection of dominoes (tiles), each with a top string and bottom string, can we arrange them (with repetitions allowed) so that the concatenation of top strings equals the concatenation of bottom strings?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Formally: an instance of PCP is a set of pairs ((t_1, b_1), (t_2, b_2), \\ldots, (t_k, b_k)) over an alphabet (\\Sigma). A solution is a sequence of indices (i_1, i_2, \\ldots, i_m) such that:\n[\nt_{i_1} t_{i_2} \\ldots t_{i_m} = b_{i_1} b_{i_2} \\ldots b_{i_m}\n]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem:"
      }), " PCP is undecidable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Significance:"
      }), " PCP is a simple combinatorial problem that is undecidable, making it ideal for reductions to other problems. Many undecidability proofs for language theory problems (CFG ambiguity, CFG inclusion) reduce PCP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example PCP instance:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domino"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "3"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Top"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ab"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bba"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bottom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "aa"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bb"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A solution: 1, 3, 2, 3 gives:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Top: a + bba + ab + bba = abbababba"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bottom: b + bb + aa + bb = bbbaabb"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "105-reductions",
      children: "10.5 Reductions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reduction"
      }), " is a way to convert one problem to another so that a solution to the second can be used to solve the first."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If A reduces to B (written A ≤ B), then:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If B is decidable, then A is decidable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If A is undecidable, then B is undecidable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mapping reduction (many-one reduction):"
      }), " A ≤_m B if there is a computable function f such that w ∈ A iff f(w) ∈ B."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To prove B is undecidable using a reduction:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose a known undecidable problem A (e.g., A_TM or HALT_TM)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show A ≤_m B by constructing a computable function f mapping instances of A to instances of B."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conclude B is undecidable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "105-decidable-problems-about-regular-languages",
      children: "10.5 Decidable Problems About Regular Languages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All of the following are decidable (proved in Chapter 4):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DFA acceptance:"
        }), " Given DFA M and string w, does M accept w? (O(|w|) by simulation.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NFA acceptance:"
        }), " Given NFA M and string w, does M accept w? (Convert to DFA or simulate directly.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RE acceptance:"
        }), " Given regex r and string w, does r generate w? (Convert to DFA.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DFA emptiness:"
        }), " Given DFA M, is L(M) = ∅? (Check reachability of accepting states.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DFA equivalence:"
        }), " Given DFAs M₁ and M₂, is L(M₁) = L(M₂)? (Minimize and check isomorphism.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DFA finiteness:"
        }), " Is L(M) finite? (Check for cycles that can reach an accept state.)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "106-decidable-problems-about-cfls",
      children: "10.6 Decidable Problems About CFLs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CFG membership:"
        }), " Given CFG G and string w, does G generate w? (CYK algorithm, O(n³).)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CFG emptiness:"
        }), " Given CFG G, is L(G) = ∅? (Check if S generates a terminal string.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CFG finiteness:"
        }), " Is L(G) finite? (Check for cycles in the variable dependency graph.)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Undecidable for CFLs:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CFG equivalence:"
        }), " Given two CFGs G₁ and G₂, is L(G₁) = L(G₂)?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CFG ambiguity:"
        }), " Is G ambiguous?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CFG inclusion:"
        }), " Is L(G₁) ⊆ L(G₂)?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CFG universality:"
        }), " Does G generate Σ*?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "107-undecidable-problems-about-tms",
      children: "10.7 Undecidable Problems About TMs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once we have one undecidable problem (A_TM), we can prove many others undecidable by reduction:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A_TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does TM M accept w?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidable, RE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HALT_TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does TM M halt on w?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidable, RE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EMPTY_TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is L(M) = ∅?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidable, not RE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EQ_TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Do M₁ and M₂ accept the same language?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidable, not RE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REGULAR_TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is L(M) regular?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidable, not RE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FINITE_TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is L(M) finite?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidable, not RE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOTAL_TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does M halt on all inputs?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidable, not RE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "108-mapping-reductions-vs-turing-reductions",
      children: "10.8 Mapping Reductions vs Turing Reductions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mapping reduction (=?):"
      }), " There is a computable function f such that w ? A ? f(w) ? B."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Turing reduction (=?):"
      }), " There is an oracle TM that decides A using B as an oracle."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mapping Reduction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Turing Reduction"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Preserves RE?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (if B?RE then A?RE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Preserves co-RE?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weaker (finer degrees)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stronger (coarser degrees)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Common use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proving undecidability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classifying relative complexity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " The complement of A_TM is not many-one reducible to A_TM (since A_TM is RE but not recursive), but it IS Turing-reducible (just flip the answer). This subtlety matters in the arithmetic hierarchy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "109-hilberts-tenth-problem",
      children: "10.9 Hilbert's Tenth Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hilbert's tenth problem (1900) asked for an algorithm to determine whether a given Diophantine equation (polynomial equation with integer coefficients) has an integer solution."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem (Matiyasevich, 1970):"
      }), " Hilbert's tenth problem is undecidable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This was proved by showing that every RE language can be represented as the set of solutions to a Diophantine equation — the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MRDP theorem"
      }), " (Matiyasevich, Robinson, Davis, Putnam). This means there is no general algorithm for solving polynomial equations over integers, a result with profound implications for number theory and automated theorem proving."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Undecidability Proofs\"\n        HALT -->|reduction| EMPTY_TM\n        HALT -->|reduction| REGULAR_TM\n        HALT -->|reduction| PCP\n        PCP -->|reduction| CFG_equiv\n        PCP -->|reduction| CFG_ambig\n        HALT -->|encoding| HILBERT10\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1010-rices-theorem",
      children: "10.10 Rice's Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rice's theorem is a powerful generalization: any non-trivial property of the language of a TM is undecidable."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rice's Theorem:"
      }), " Let P be a set of RE languages (a \"property\"). If P is non-trivial (not empty and not all RE languages), then the language { ⟨M⟩ | L(M) ∈ P } is undecidable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples of undecidable properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does M accept at least one string? (L(M) ≠ ∅)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does M accept exactly 42 strings? (|L(M)| = 42)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does M accept all strings? (L(M) = Σ*)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is L(M) regular?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is L(M) context-free?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples of decidable properties (trivial or syntactic):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does M have exactly 10 states? (Syntactic, not about the language.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is L(M) = ∅ where M is a DFA? (Not about TMs → Rice's theorem applies to TMs only.)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-101-reducing-halt_tm-to-empty_tm",
      children: "Example 10.1: Reducing HALT_TM to EMPTY_TM"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Show that EMPTY_TM = { ⟨M⟩ | L(M) = ∅ } is undecidable."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reduction:"
      }), " Given ⟨M, w⟩ (an instance of HALT_TM), construct M_w:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "M_w(x): Simulate M on w. If M halts (accepts or rejects), accept x."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note: If M halts on w, M_w accepts ALL inputs. L(M_w) = Σ* ≠ ∅."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If M loops on w, M_w never finishes simulating, so M_w never accepts anything. L(M_w) = ∅."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thus: M halts on w ⟹ L(M_w) ≠ ∅. M loops on w ⟹ L(M_w) = ∅.\nTherefore, HALT_TM ≤_m EMPTY_TM."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If EMPTY_TM were decidable, we could decide HALT_TM → contradiction. So EMPTY_TM is undecidable."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-102-reducing-a_tm-to-regular_tm",
      children: "Example 10.2: Reducing A_TM to REGULAR_TM"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Show REGULAR_TM = { ⟨M⟩ | L(M) is regular } is undecidable."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reduction:"
      }), " Given ⟨M, w⟩, construct M':"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "M'(x): Simulate M on w. If M accepts w, then accept x if x ∈ {0ⁿ1ⁿ | n ≥ 0}. If M rejects w, reject x."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If M doesn't accept w (rejects or loops), M' never accepts anything. L(M') = ∅ (regular)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If M accepts w, then M' accepts {0ⁿ1ⁿ | n ≥ 0} (non-regular)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thus: ⟨M, w⟩ ∈ A_TM ⟹ L(M') is non-regular. ⟨M, w⟩ ∉ A_TM ⟹ L(M') is regular (empty)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A decider for REGULAR_TM would decide A_TM → contradiction."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-103-applying-rices-theorem",
      children: "Example 10.3: Applying Rice's Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Property: Does L(M) contain the string \"hello\"?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is non-trivial:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Some TMs accept \"hello\" (e.g., a TM that accepts only \"hello\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Some TMs don't (e.g., a TM that rejects everything)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By Rice's theorem, { ⟨M⟩ | \"hello\" ∈ L(M) } is undecidable."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-104-decidable-problems--dfa-emptiness",
      children: "Example 10.4: Decidable Problems → DFA Emptiness"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm"
      }), " for EMPTY_DFA = { ⟨M⟩ | M is a DFA and L(M) = ∅ }:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark the start state."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat: mark any state reachable from a marked state."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no accepting state is marked, accept (L(M) = ∅). Otherwise reject.\nThis is essentially graph reachability, runtime O(|Q| + |E|)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-105-decidable-problems--cfg-membership",
      children: "Example 10.5: Decidable Problems → CFG Membership"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm"
      }), " for A_CFG = { ⟨G, w⟩ | G generates w }:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert G to CNF."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run the CYK algorithm on G and w."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If S ∈ T[1,n], accept. Otherwise reject.\nRuntime O(n³) where n = |w|."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DFA membership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CFG membership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P (O(n³))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DFA equivalence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CFG equivalence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Halting problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diagonalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct undecidability proof"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mapping reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Translate problem A to B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rice's theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General undecidability for TM properties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CYK algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decidable CFG membership"
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
            children: "Decidability Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Software engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limits of automated verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Programming languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type system decidability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automated reasoning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theorem proving limits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compilers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimization correctness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Problem-solving limitations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-limitations-of-reduction-proofs",
      children: "The Limitations of Reduction Proofs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "While reductions are powerful, they have limitations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reduction direction matters."
          }), " To prove B undecidable, reduce FROM a known undecidable problem TO B. A reduction in the opposite direction proves nothing."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The reduction function must be computable."
          }), " You cannot use an oracle or non-computable function to construct the reduction. Every step in building f(w) must be realizable on a Turing machine."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reductions preserve RE status."
          }), " If A =? B and B is RE, then A is RE. If A is not RE, then B cannot be RE. Tracking the RE/non-RE status is essential for classification."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-generic-reduction-framework",
      children: "TypeScript: Generic Reduction Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// A reduction maps instances of problem A to instances of problem B\ntype Reduction<A, B> = (instanceA: A) => B;\n\n// If we have a decider for B, we can decide A\nfunction reduceAndDecide<A, B>(\n  reduction: Reduction<A, B>,\n  deciderB: (instanceB: B) => boolean,\n  instanceA: A\n): boolean {\n  const instanceB = reduction(instanceA);\n  return deciderB(instanceB);\n}\n\n// Concrete: HALT_TM to EMPTY_TM reduction\ntype TMHaltingInstance = { description: TMDescription; input: string };\ntype TMEmptinessInstance = TMDescription;\n\nfunction haltToEmptyReduction(\n  instance: TMHaltingInstance\n): TMEmptinessInstance {\n  // Construct M' that:\n  // On any input x, simulate M on w; if M halts, accept x\n  const MPrime: TMDescription = {\n    Q: instance.description.Q.concat([\"q_sim\"]),\n    gamma: instance.description.gamma,\n    delta: new Map([\n      // Simulate M on w (hardcoded input)\n      [\"q_sim,_\", [\"q_accept\", \"_\", \"R\"]],\n      ...Array.from(instance.description.delta.entries())\n    ]),\n    q0: \"q_sim\",\n    qAccept: \"q_accept\",\n    qReject: \"q_reject\",\n  };\n  return MPrime;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " The halting problem asks if a TM:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Accepts its input"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Halts on its input ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Has finitely many states"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Is deterministic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** HALT_TM = { ?M, w? | M halts on w }. Proven undecidable by Turing in 1936.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " Diagonalization proves undecidability by:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Counting states"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Self-reference paradox ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Reducing to a known problem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Using Rice's theorem"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Diagonalization creates a self-referential contradiction — \"what does D do on input ?D??\"\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " Which is decidable?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) CFG equivalence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) DFA membership ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) TM emptiness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) TM equivalence"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** DFA membership is decidable — simply simulate the DFA on the input string.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Rice's theorem applies to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Syntactic properties of TMs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Non-trivial semantic properties ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Properties of DFAs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Properties of CFGs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Any non-trivial property of the language of a TM is undecidable.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " A reduction shows:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Problem A is easier than B"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) If B is decidable, A is decidable ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Both problems are the same"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Neither problem is decidable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** A =_m B means a solution to B yields a solution to A (or undecidability of A transfers to B).\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Undecidability is not hypothetical."
          }), " Problems like program equivalence, whether a program will crash, or whether two pieces of code do the same thing are all undecidable in general. Software engineers work with conservative approximations and restricted cases."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Diagonalization is a general proof technique."
          }), " The same technique used to prove the halting problem undecidable also proves that the real numbers are uncountable, that there are more languages than TMs, and that the halting problem for other models is undecidable."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Decidable vs undecidable is a spectrum."
          }), " Many problems are decidable for restricted models (DFA emptiness, CFG parsing) but undecidable in general. When facing a hard analysis problem, restrict the input model until the problem becomes decidable."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reductions transfer undecidability."
          }), " To prove a new problem undecidable, show it can solve a known undecidable problem. This is the standard toolkit: halting ? acceptance ? emptiness ? equivalence ? all non-trivial TM properties."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-decision-problem-classifier-and-halting-problem",
      children: "TypeScript Implementation: Decision Problem Classifier and Halting Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Decision Problem Classifier and Undecidability Demonstrations\n\ntype DecisionProblem = {\n  name: string;\n  inputType: string;\n  question: string;\n  isDecidable: boolean;\n  complexityClass?: string;\n};\n\nclass DecisionProblemClassifier {\n  static knownProblems: DecisionProblem[] = [\n    { name: \"DFA Membership\", inputType: \"DFA + string\", question: \"Does the DFA accept the string?\", isDecidable: true, complexityClass: \"P\" },\n    { name: \"DFA Emptiness\", inputType: \"DFA\", question: \"Does the DFA accept any string?\", isDecidable: true, complexityClass: \"P\" },\n    { name: \"DFA Equivalence\", inputType: \"Two DFAs\", question: \"Do the two DFAs recognize the same language?\", isDecidable: true, complexityClass: \"PSPACE\" },\n    { name: \"NFA Membership\", inputType: \"NFA + string\", question: \"Does the NFA accept the string?\", isDecidable: true, complexityClass: \"P\" },\n    { name: \"CFG Membership (CYK)\", inputType: \"CFG + string\", question: \"Does the CFG generate the string?\", isDecidable: true, complexityClass: \"P\" },\n    { name: \"CFG Emptiness\", inputType: \"CFG\", question: \"Does the CFG generate any string?\", isDecidable: true, complexityClass: \"P\" },\n    { name: \"CFG Ambiguity\", inputType: \"CFG\", question: \"Is the grammar ambiguous?\", isDecidable: false },\n    { name: \"CFG Equivalence\", inputType: \"Two CFGs\", question: \"Do the two CFGs generate the same language?\", isDecidable: false },\n    { name: \"CFL Membership\", inputType: \"PDA + string\", question: \"Does the PDA accept the string?\", isDecidable: true, complexityClass: \"P\" },\n    { name: \"TM Acceptance (A_TM)\", inputType: \"TM + string\", question: \"Does the TM accept the string?\", isDecidable: false },\n    { name: \"Halting Problem\", inputType: \"TM + string\", question: \"Does the TM halt on the string?\", isDecidable: false },\n    { name: \"TM Emptiness\", inputType: \"TM\", question: \"Does the TM accept any string?\", isDecidable: false },\n    { name: \"TM Equivalence\", inputType: \"Two TMs\", question: \"Do the two TMs recognize the same language?\", isDecidable: false },\n    { name: \"Post Correspondence\", inputType: \"Set of tiles\", question: \"Does a matching sequence exist?\", isDecidable: false },\n    { name: \"Hilbert's 10th\", inputType: \"Polynomial equation\", question: \"Does the equation have integer solutions?\", isDecidable: false },\n    { name: \"QBF Satisfiability\", inputType: \"Quantified Boolean formula\", question: \"Is the QBF true?\", isDecidable: true, complexityClass: \"PSPACE-complete\" },\n  ];\n\n  static classify(model: string, question: string): DecisionProblem | string {\n    const match = this.knownProblems.find(p =>\n      p.name.toLowerCase().includes(model.toLowerCase()) ||\n      p.question.toLowerCase().includes(question.toLowerCase())\n    );\n    return match || `Unknown problem: \"${model}: ${question}\" — research required`;\n  }\n\n  static listUndecidable(): DecisionProblem[] {\n    return this.knownProblems.filter(p => !p.isDecidable);\n  }\n\n  static listDecidable(): DecisionProblem[] {\n    return this.knownProblems.filter(p => p.isDecidable);\n  }\n}\n\nclass HaltingProblem {\n  // Simulates the halting problem proof by diagonalization\n  static proveUndecidable(): string[] {\n    const proof: string[] = [];\n    proof.push(\"Theorem: The halting problem is undecidable.\");\n    proof.push(\"Proof by contradiction using diagonalization (Turing 1936):\");\n    proof.push(\"1. Assume HALT(M, w) exists and decides if TM M halts on w.\");\n    proof.push(\"2. Construct a new TM D that takes a TM description ?M?:\");\n    proof.push(\"   - D simulates HALT(M, ?M?).\");\n    proof.push(\"   - If HALT says M halts, D enters an infinite loop.\");\n    proof.push(\"   - If HALT says M doesn't halt, D halts.\");\n    proof.push(\"3. Now run D on its own description: D(?D?).\");\n    proof.push(\"   - If D halts, HALT(D, ?D?) says D doesn't halt ? contradiction.\");\n    proof.push(\"   - If D loops, HALT(D, ?D?) says D halts ? contradiction.\");\n    proof.push(\"4. Therefore no such HALT can exist. QED.\");\n    return proof;\n  }\n\n  static riceTheorem(): string[] {\n    const proof: string[] = [];\n    proof.push(\"Rice's Theorem: Every non-trivial semantic property of TMs is undecidable.\");\n    proof.push(\"'Semantic' means the property depends only on the language recognized.\");\n    proof.push(\"'Non-trivial' means some TMs have it and some don't.\");\n    proof.push(\"\");\n    proof.push(\"Examples of undecidable properties:\");\n    proof.push(\"- Does TM M accept the empty string e?\");\n    proof.push(\"- Does TM M accept a finite language?\");\n    proof.push(\"- Does TM M accept a regular language?\");\n    proof.push(\"- Does TM M accept a context-free language?\");\n    proof.push(\"- Does TM M accept a string of length > 100?\");\n    proof.push(\"\");\n    proof.push(\"Decidable properties of TMs are always structural (syntactic):\");\n    proof.push(\"- Does TM M have exactly 5 states?\");\n    proof.push(\"- Does TM M ever move left on the first cell?\");\n    proof.push(\"- Does TM M have a transition on state q3 reading 'a'?\");\n    return proof;\n  }\n\n  static undecidabilityReduction(): string[] {\n    return [\n      \"Standard undecidability reduction chain:\",\n      \"HALT (Halting Problem) — PCP (Post Correspondence Problem)\",\n      \"   ?                                            ?\",\n      \"A_TM (TM Acceptance)                    EMPTY_TM (TM Emptiness)\",\n      \"   ?                                            ?\",\n      \"ALL_TM (TM recognizes S*)              EQ_TM (TM Equivalence)\",\n      \"   ?                                            ?\",\n      \"REGULAR_TM (TM recognizes regular lang)  ... infinite chain\"\n    ];\n  }\n}\n\nconsole.log(DecisionProblemClassifier.classify(\"DFA\", \"accept\"));\nconsole.log(DecisionProblemClassifier.classify(\"TM\", \"halt\"));\nconsole.log(HaltingProblem.proveUndecidable().join(\"\\n\"));\nconsole.log(HaltingProblem.riceTheorem().join(\"\\n\"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -----------------------------------------------------\n// Halting Problem Reduction Mapper\n// Maps a given decision problem to a known undecidable\n// problem (the Halting Problem) to prove undecidability.\n// -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["class ReductionMapper {\n// Map any problem P to HALT by constructing a TM that\n// simulates P's solver and then does something detectable.\nstatic mapToHalting(problemName: string, description: string): string[] {\nreturn [\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Reduction: ${problemName} =? HALT"
      }), ",\n\"\",\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Problem: ${problemName}"
      }), ",\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "  ${description}"
      }), ",\n\"\",\n\"Construction:\",\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "  Given an instance I of ${problemName}, we construct"
      }), ",\n\"  a Turing machine M that:\",\n\"    1. Reads input x\",\n\"    2. Simulates the solver for the original problem on I\",\n\"    3. If the solver accepts, M enters an infinite loop\",\n\"    4. If the solver rejects, M halts\",\n\"\",\n\"Correctness:\",\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "  I ? ${problemName}  ?  M loops forever on x  ?  ?M, x? ? HALT"
      }), ",\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "  I ? ${problemName}  ?  M halts on x        ?  ?M, x? ? HALT"
      }), ",\n\"\",\n\"Since HALT is undecidable, so is\",\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "  ${problemName}."
      }), "\n];\n}"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Classic undecidable problems with their HALT reductions\nstatic classicReductions(): Map<string, string> {\nconst m = new Map<string, string>();\nm.set(\"A_TM (TM Acceptance)\",\n\"Given ?M, w?, does TM M accept input w?\");\nm.set(\"EMPTY_TM (TM Emptiness)\",\n\"Given TM M, does L(M) = Ø?\");\nm.set(\"EQ_TM (TM Equivalence)\",\n\"Given TMs M1, M2, do they recognize the same language?\");\nm.set(\"REGULAR_TM (Regularity of TM languages)\",\n\"Given TM M, is L(M) regular?\");\nm.set(\"PCP (Post Correspondence Problem)\",\n\"Given dominoes, can we arrange them with matching top/bottom?\");\nm.set(\"TOT_TM (Totality/Universality)\",\n\"Given TM M, does M halt on every input?\");\nreturn m;\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -----------------------------------------------------\n// Decision Problem Decidability Classifier\n// Given a problem description, classifies it as\n// Decidable / Undecidable (RE) / Undecidable (non-RE)\n// based on known results.\n// -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class DecidabilityClassifier {\n// Known classifications\nprivate static readonly knownResults = new Map<string, string>([\n[\"DFA membership\", \"Decidable\"],\n[\"DFA emptiness\", \"Decidable\"],\n[\"DFA equivalence\", \"Decidable\"],\n[\"NFA membership\", \"Decidable\"],\n[\"CFG membership\", \"Decidable (CYK algorithm)\"],\n[\"CFG emptiness\", \"Decidable\"],\n[\"CFG ambiguity\", \"Undecidable\"],\n[\"PDA membership\", \"Decidable\"],\n[\"PDA equivalence\", \"Undecidable\"],\n[\"CFL ambiguity\", \"Undecidable\"],\n[\"CFL equivalence\", \"Undecidable\"],\n[\"TM membership\", \"Undecidable (RE)\"],\n[\"TM emptiness\", \"Undecidable (non-RE)\"],\n[\"TM equivalence\", \"Undecidable (non-RE)\"],\n[\"TM regularity\", \"Undecidable (non-RE)\"],\n[\"TM halting\", \"Undecidable (RE)\"],\n[\"TM totality\", \"Undecidable (non-RE)\"],\n[\"PCP\", \"Undecidable\"],\n[\"Hilbert's 10th\", \"Undecidable\"],\n[\"Word problem for groups\", \"Undecidable\"],\n[\"Mortal matrix problem\", \"Undecidable\"],\n]);"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static classify(problem: string): string {\nreturn this.knownResults.get(problem) || \"Unknown — research frontier\";\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static table(): string[] {\nconst output: string[] = [];\noutput.push(\"Decision Problem Decidability Table\");\noutput.push(\"=\".repeat(55));\noutput.push(\"Problem\".padEnd(30) + \"Classification\");\noutput.push(\"-\".repeat(55));"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (const [problem, classification] of this.knownResults) {\n  output.push(`${problem.padEnd(30)} ${classification}`);\n}\n\nreturn output;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Demo\nconsole.log(ReductionMapper.mapToHalting(\"CFG_AMBIGUITY\",\n\"Does a given context-free grammar have more than one parse tree for some string?\").join(\"\\n\"));\nconsole.log(\"\");\nconsole.log(DecidabilityClassifier.table().join(\"\\n\"));"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// decidability\n// automata-complexity implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'decidability', data: { topic: 'automata-complexity' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n## Summary\n\n- The halting problem (does TM M halt on w?) is undecidable — proved via diagonalization.\n- A_TM (does TM M accept w?) is undecidable but RE.\n- Reductions show new problems are undecidable by relating them to known undecidable problems.\n- All problems about DFAs (membership, emptiness, equivalence) are decidable.\n- CFG membership (CYK) and emptiness are decidable; CFG equivalence is undecidable.\n- Rice's theorem: any non-trivial semantic property of TMs is undecidable.\n- Diagonalization is the core technique for establishing undecidability.\n\n## Exercises\n\n### Basic\n\n1. Explain in your own words why the halting problem is undecidable.\n2. Show that the acceptance problem for DFAs (A_DFA) is decidable.\n3. Show that the emptiness problem for CFGs is decidable.\n4. Reduce HALT_TM to A_TM (show A_TM is at least as hard as HALT_TM).\n5. Apply Rice's theorem to prove that { ⟨M⟩ | L(M) is finite } is undecidable.\n\n### Intermediate\n\n6. Prove that the language of TMs that accept at least 3 strings is undecidable using (a) a direct reduction from A_TM and (b) Rice's theorem.\n7. Show that A_TM is RE by constructing a recognizer.\n8. Show that the complement of A_TM is not RE (by showing A_TM is not recursive).\n9. Reduce A_TM to the problem of whether a TM accepts all even-length strings.\n10. Prove that the undecidability of HALT_TM implies the undecidability of A_TM and vice versa.\n\n### Advanced\n\n11. Prove Rice's theorem in full generality.\n12. Show that the language { ?M? | M is a TM that never writes a blank symbol on its tape } is decidable. Why doesn't Rice's theorem apply?\n13. Prove that EQ_TM = { ?M1, M2? | L(M1) = L(M2) } is neither RE nor co-RE.\n14. Consider the language S = { ?M? | M accepts all palindromes }. Is it decidable? Prove your answer.\n15. Prove that there is no algorithm that, given a TM M, determines whether M halts on all inputs of even length.\n16. Show that the Post Correspondence Problem with two tiles (k=2) is decidable, but with seven tiles it becomes undecidable.\n17. Prove that the universal language U = { ?M, w? | M accepts w } is RE-complete under many-one reductions.\n\n## Summary Table of Decidable and Undecidable Problems\n\n| Problem | Model | Status | Algorithm / Proof |\n|---------|-------|--------|-------------------|\n| Membership | DFA | Decidable (P) | Simulation |\n| Emptiness | DFA | Decidable (P) | Graph reachability |\n| Equivalence | DFA | Decidable (P) | Product + minimization |\n| Membership | CFG | Decidable (P) | CYK algorithm |\n| Emptiness | CFG | Decidable (P) | Variable marking |\n| Ambiguity | CFG | **Undecidable** | Reduction from PCP |\n| Equivalence | CFG | **Undecidable** | Reduction from PCP |\n| Halting | TM | **Undecidable** | Diagonalization |\n| Acceptance | TM | **Undecidable** | Diagonalization |\n| Emptiness | TM | **Undecidable** | Reduction from HALT |\n| Totality | TM | **Undecidable** | Reduction from HALT |\n| Equivalence | TM | **Undecidable** | Rice's theorem |\n\n## Further Reading\n\n- **Sipser, Michael.** *Introduction to the Theory of Computation* (3rd ed.). Chapter 4 covers decidability with detailed proofs of the halting problem and other undecidable languages.\n- **Hopcroft, John E., Motwani, Rajeev, and Ullman, Jeffrey D.** *Introduction to Automata Theory, Languages, and Computation* (3rd ed.). Chapter 9 provides an in-depth treatment of undecidability and Rice's theorem.\n- **Davis, Martin.** *The Undecidable: Basic Papers on Undecidable Propositions, Unsolvable Problems and Computable Functions*. A collection of original papers by Godel, Church, Turing, and Post.\n- **Arora, Sanjeev and Barak, Boaz.** *Computational Complexity: A Modern Approach*. Chapter 2 covers diagonalization and the time hierarchy theorems.\n\n\n## TypeScript Diagonalization Example\n\n```typescript\n// Simulating Cantor's diagonalization to show undecidability\n// Instead of TM descriptions, we use simple string functions\n\ntype StringFunction = (s: string) => boolean;\n\n// Enumerate all possible string functions (analogous to all TMs)\nfunction enumerateFunctions(): StringFunction[] {\n  // In reality this is impossible for all functions,\n  // but we can show the concept with a limited set\n  const functions: StringFunction[] = [\n    (s: string) => s.length > 2,\n    (s: string) => s.startsWith(\"a\"),\n    (s: string) => s === s.split(\"\").reverse().join(\"\"),\n    (s: string) => /^\\d+$/.test(s),\n  ];\n  return functions;\n}\n\n// Enumerate all possible strings\nfunction enumerateStrings(): string[] {\n  const alphabet = \"ab\";\n  const strings: string[] = [];\n  for (let len = 1; len &lt;= 3; len++) {\n    for (let i = 0; i &lt; Math.pow(alphabet.length, len); i++) {\n      let s = \"\";\n      let n = i;\n      for (let j = 0; j &lt; len; j++) {\n        s = alphabet[n % alphabet.length] + s;\n        n = Math.floor(n / alphabet.length);\n      }\n      strings.push(s);\n    }\n  }\n  return strings;\n}\n\n// Diagonal function that differs from every enumerated function\nfunction diagonalFunction(s: string): boolean {\n  const funcs = enumerateFunctions();\n  const strings = enumerateStrings();\n  const idx = strings.indexOf(s);\n  if (idx >= 0 && idx &lt; funcs.length) {\n    // Flip the result - guarantees difference\n    return !funcs[idx](s);\n  }\n  return false;\n}\n\n// Proof: diagonalFunction differs from every function in the enumeration\n// For function f_i at index i, diagonalFunction(strings[i]) != f_i(strings[i])\n// This is the same technique used to prove the halting problem undecidable\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision-procedures-in-practice",
      children: "Decision Procedures in Practice"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["While many problems are undecidable in general, practical tools use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "conservative approximations"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TypeScript compiler"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type checking (undecidable in general)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restricted type system (structural subtyping, no dependent types)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Model checkers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program correctness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finite-state abstraction, bounded model checking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Static analyzers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Null pointer safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Over-approximation (may report false alarms)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SMT solvers"
            }), " (Z3)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical satisfiability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantifier-free theories, decidable fragments"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-decidable-fragment-of-first-order-logic",
      children: "Example: Decidable Fragment of First-Order Logic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bernays-Schönfinkel class"
      }), " (?", (0,jsx_runtime.jsx)(_components.em, {
        children: "?"
      }), " formulas without function symbols) is decidable. This \"effectively propositional\" fragment underpins many SMT-based verification tools:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// The Bernays-Schönfinkel fragment is ?*?* quantifier prefix\n// Formulas like: ?x ?y ?z (P(x,y) ? Q(x,z) ? R(y,z))\n// are decidable because Herbrand's theorem limits the search space\n\ntype BSSentence = {\n  existentialVars: string[];\n  universalVars: string[];\n  body: string; // Propositional formula over predicates\n};\n\nfunction checkBSDecidability(formula: BSSentence): boolean {\n  // The Bernays-Schönfinkel class is decidable\n  // because it satisfies the finite model property\n  const baseSize = formula.existentialVars.length;\n  const uVars = formula.universalVars.length;\n\n  // For each existential witness, check all uVars assignments\n  // Complexity: O(2^(|P| * (baseSize + uVars))) where |P| is predicate count\n  // Finite model check is guaranteed to terminate\n\n  console.log(\n    `BS formula with ${baseSize} ? and ${uVars} ? vars — decidable`\n  );\n  return true; // Decision procedure exists\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-process-of-proving-undecidability",
      children: "The Process of Proving Undecidability"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[\"New problem P\"] --> B{Is P about<br/>TM language?}\n    B -->|Yes| C{Is property<br/>non-trivial?}\n    C -->|Yes| D[\"Undecidable<br/>(Rice's theorem)\"]\n    C -->|No| E[\"Check syntactic<br/>or trivial\"]\n    B -->|No| F{Can we reduce<br/>known undecidable<br/>problem to P?}\n    F -->|Yes| D\n    F -->|No| G[\"Unknown — may be<br/>decidable\"]\n    E --> H{Is it about<br/>DFA/CFG?}\n    H -->|Yes| I[\"Likely decidable\"]\n    H -->|No| F\n"
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