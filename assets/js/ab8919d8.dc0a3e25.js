"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[98713],{

/***/ 69282
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_theory_of_computation_12_reducibility_md_ab8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-theory-of-computation-12-reducibility-md-ab8.json
const site_docs_courses_theory_of_computation_12_reducibility_md_ab8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/theory-of-computation/12-reducibility","title":"Chapter 12: Reducibility and Advanced Undecidability","description":"Previous Time Complexity","source":"@site/docs/courses/theory-of-computation/12-reducibility.md","sourceDirName":"courses/theory-of-computation","slug":"/theory-of-computation/12-reducibility","permalink":"/ai-engineering-journey/theory-of-computation/12-reducibility","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"12-reducibility","slug":"/theory-of-computation/12-reducibility","title":"Chapter 12: Reducibility and Advanced Undecidability","sidebar_label":"Chapter 12: Reducibility and Advanced Undecidability","sidebar_position":12},"sidebar":"course-theory-of-computation","previous":{"title":"Chapter 11: Decidability","permalink":"/ai-engineering-journey/theory-of-computation/11-decidability"},"next":{"title":"Chapter 13: Time Complexity and NP-Completeness","permalink":"/ai-engineering-journey/theory-of-computation/13-time-complexity"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/theory-of-computation/12-reducibility.md


const frontMatter = {
	id: '12-reducibility',
	slug: '/theory-of-computation/12-reducibility',
	title: 'Chapter 12: Reducibility and Advanced Undecidability',
	sidebar_label: 'Chapter 12: Reducibility and Advanced Undecidability',
	sidebar_position: 12
};
const contentTitle = 'Chapter 12: Reducibility and Advanced Undecidability';

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
  "value": "11.1 Mapping Reductions (Many-One Reductions)",
  "id": "111-mapping-reductions-many-one-reductions",
  "level": 3
}, {
  "value": "11.2 Rice&#39;s Theorem in Depth",
  "id": "112-rices-theorem-in-depth",
  "level": 3
}, {
  "value": "11.3 Turing Reductions",
  "id": "113-turing-reductions",
  "level": 3
}, {
  "value": "11.4 The Post Correspondence Problem (PCP)",
  "id": "114-the-post-correspondence-problem-pcp",
  "level": 3
}, {
  "value": "11.5 Undecidable Problems in Formal Language Theory",
  "id": "115-undecidable-problems-in-formal-language-theory",
  "level": 3
}, {
  "value": "11.6 Complete Problems for RE",
  "id": "116-complete-problems-for-re",
  "level": 3
}, {
  "value": "11.7 Oracle Separations and the Limits of Diagonalization",
  "id": "117-oracle-separations-and-the-limits-of-diagonalization",
  "level": 3
}, {
  "value": "11.9 The Fixed-Point Theorem (Kleene&#39;s Recursion Theorem)",
  "id": "119-the-fixed-point-theorem-kleenes-recursion-theorem",
  "level": 3
}, {
  "value": "TypeScript: Self-Reproducing Program (Quine Concept)",
  "id": "typescript-self-reproducing-program-quine-concept",
  "level": 3
}, {
  "value": "The Computability Hierarchy",
  "id": "the-computability-hierarchy",
  "level": 2
}, {
  "value": "11.8 The Busy Beaver Problem",
  "id": "118-the-busy-beaver-problem",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 11.1: Mapping Reduction from A_TM to HALT_TM",
  "id": "example-111-mapping-reduction-from-a_tm-to-halt_tm",
  "level": 3
}, {
  "value": "Example 11.2: PCP Instance",
  "id": "example-112-pcp-instance",
  "level": 3
}, {
  "value": "Example 11.3: Valid Mapping Reduction Proof",
  "id": "example-113-valid-mapping-reduction-proof",
  "level": 3
}, {
  "value": "Example 11.4: Rice&#39;s Theorem → Is L(M) Infinite?",
  "id": "example-114-rices-theorem--is-lm-infinite",
  "level": 3
}, {
  "value": "Example 11.5: Proving CFG Ambiguity is Undecidable",
  "id": "example-115-proving-cfg-ambiguity-is-undecidable",
  "level": 3
}, {
  "value": "Example 11.6: Mapping Reduction for CFG Ambiguity",
  "id": "example-116-mapping-reduction-for-cfg-ambiguity",
  "level": 3
}, {
  "value": "Practical Implications of Undecidability in Software",
  "id": "practical-implications-of-undecidability-in-software",
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
  "value": "TypeScript: Undecidability Proof Assistant",
  "id": "typescript-undecidability-proof-assistant",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "The Turing Degrees",
  "id": "the-turing-degrees",
  "level": 2
}, {
  "value": "TypeScript: PCP Solution Checker",
  "id": "typescript-pcp-solution-checker",
  "level": 3
}, {
  "value": "TypeScript Implementation: Many-One Reduction Mapper and Reduction Verifier",
  "id": "typescript-implementation-many-one-reduction-mapper-and-reduction-verifier",
  "level": 2
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
        id: "chapter-12-reducibility-and-advanced-undecidability",
        children: "Chapter 12: Reducibility and Advanced Undecidability"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/11-decidability",
          children: "Decidability"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/13-time-complexity",
          children: "Time Complexity"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define and apply mapping reductions (many-one reductions)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply Rice's theorem to prove undecidability."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define and apply Turing reductions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the Post Correspondence Problem and its undecidability."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove undecidability of problems from formal language theory."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the concept of completeness within RE."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize the limitations of automated verification."
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
            children: "Mapping Reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computable f: w ? A iff f(w) ? B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary undecidability proof tool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rice's Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any non-trivial TM language property undecidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most TM problems are undecidable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Turing Reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oracle-based more general than mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allows multiple queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combinatorial undecidable problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidability outside TMs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RE-Completeness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A_TM is canonical RE-complete problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardest problems in RE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Mapping Reductions] --> B[Rice Theorem]\n    B --> C[Turing Reductions]\n    C --> D[PCP]\n    D --> E[Undecidable Language Problems]\n    E --> F[RE-Completeness]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/theory-of-computation/11-reducibility.png",
        alt: "Reducibility Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-mapping-reductions-many-one-reductions",
      children: "11.1 Mapping Reductions (Many-One Reductions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "mapping reduction"
      }), " from language A to language B (written A ≤_m B) is a computable function f: Σ* → Σ* such that w ∈ A iff f(w) ∈ B."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If A ≤_m B and B is decidable, then A is decidable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If A ≤_m B and A is undecidable, then B is undecidable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If A ≤_m B and B is RE, then A is RE."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If A ≤_m B and A is not RE, then B is not RE."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Completeness:"
      }), " A language A is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RE-complete"
      }), " (or m-complete for RE) if:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A ∈ RE."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For every language B ∈ RE, B ≤_m A."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A_TM is the canonical RE-complete language."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-rices-theorem-in-depth",
      children: "11.2 Rice's Theorem in Depth"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rice's Theorem (formal):"
      }), " Let P be a set of RE languages such that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P ≠ ∅ (some RE languages have property P)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P ≠ { all RE languages } (some RE languages lack property P)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Then L_P = { ⟨M⟩ | L(M) ∈ P } is undecidable."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof sketch:"
      }), " Assume P doesn't contain the empty language (if it does, we can work with the complement). Let L∅ be a TM with empty language. Since P is non-trivial, there exists some TM M_P with L(M_P) ∈ P. Given ⟨M, w⟩ (instance of A_TM), construct M':"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "M'(x): Simulate M on w. If M accepts w, simulate M_P on x and accept if M_P accepts."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Then: if M accepts w, L(M') = L(M_P) ∈ P. If M doesn't accept w, L(M') = L∅ ∉ P."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thus A_TM ≤_m L_P, so L_P is undecidable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rice's theorem for properties of TMs themselves:"
      }), " Some properties of TMs are syntactic (about the machine structure) rather than semantic (about the language). These can be decidable:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Does M have exactly 5 states? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Decidable"
        }), " (count the states in ⟨M⟩)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Does M ever move left on blank input? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Decidable"
        }), " (simulate on blank input up to some bound)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Does M accept at least one string? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Undecidable"
        }), " (semantic property of the language)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-turing-reductions",
      children: "11.3 Turing Reductions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Turing reduction"
      }), " from A to B (written A ≤_T B) means there is an oracle TM that decides A given an oracle for B. This is more general than mapping reductions:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mapping reductions are a special case of Turing reductions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Turing reductions allow multiple oracle queries and can use the results arbitrarily."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If A ≤_T B and B is decidable, then A is decidable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " The complement of A_TM (co-A_TM) is Turing-reducible to A_TM:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "To decide if M doesn't accept w, query the oracle for A_TM with ⟨M, w⟩. If it says no, then M doesn't accept w."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "However, co-A_TM is NOT mapping-reducible to A_TM (it would require A_TM to be recursive)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-the-post-correspondence-problem-pcp",
      children: "11.4 The Post Correspondence Problem (PCP)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PCP Instance:"
      }), " A collection of dominoes, each with a top string and bottom string:\n[ t₁/b₁ ], [ t₂/b₂ ], …, [ tₖ/bₖ ]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " Can we arrange a sequence of dominoes (allowing repetition) such that the concatenation of top strings equals the concatenation of bottom strings?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Formally:"
      }), " Does there exist a sequence i₁, i₂, …, iₙ (n ≥ 1) such that t_{i₁}t_{i₂}…t_{iₙ} = b_{i₁}b_{i₂}…b_{iₙ}?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem:"
      }), " PCP is undecidable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof strategy:"
      }), " Reduce A_TM to PCP. Given ⟨M, w⟩, construct a set of dominoes that simulate the computation of M on w. A solution to the PCP instance exists iff M accepts w. The construction:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encode the start configuration of M on w as the initial partial match."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add dominoes for each possible TM transition."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add \"copy\" dominoes to propagate unchanged portions of the configuration."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add \"cleanup\" dominoes to handle the accepting state."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The undecidability of PCP is significant because PCP is a purely combinatorial problem → no TMs involved → showing that undecidability is not limited to questions about programs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "115-undecidable-problems-in-formal-language-theory",
      children: "11.5 Undecidable Problems in Formal Language Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using PCP and other reductions, we can prove undecidability of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Ambiguity of CFGs:"
          }), " Given a CFG G, is G ambiguous?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reduce from PCP: given dominoes, construct a CFG that generates each top and bottom concatenation. The grammar is ambiguous iff there is a PCP solution."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Emptiness of intersection of CFGs:"
          }), " Given CFGs G₁ and G₂, is L(G₁) ∩ L(G₂) = ∅?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Also reducible from PCP."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Equivalence of CFGs:"
          }), " Given CFGs G₁ and G₂, is L(G₁) = L(G₂)?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Undecidable; follows from universality."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Universality of CFGs:"
          }), " Does a CFG generate Σ*?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Undecidable; reduce from ambiguity or PCP."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Context-free equivalence of TMs:"
          }), " Is L(M) context-free?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Undecidable by Rice's theorem."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "116-complete-problems-for-re",
      children: "11.6 Complete Problems for RE"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A problem is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RE-complete"
      }), " if it is in RE and every RE problem reduces to it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A_TM"
      }), " is RE-complete (by definition of RE → each RE language corresponds to a TM)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "HALT_TM"
      }), " is RE-complete: HALT_TM ∈ RE and A_TM ≤_m HALT_TM (given ⟨M,w⟩, output ⟨M,w⟩ → if M accepts w, M certainly halts on w; if M doesn't accept, either M halts rejecting or loops, and we want halting in the HALT_TM case. Actually, the mapping is: given ⟨M,w⟩, construct M' that halts iff M accepts. More precisely: A_TM ≤_m HALT_TM by mapping ⟨M,w⟩ to ⟨M', w⟩ where M' simulates M and halts when M accepts, loops when M rejects.)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PCP"
      }), " is also RE-complete: PCP is RE (we can nondeterministically try sequences) and A_TM ≤_m PCP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "117-oracle-separations-and-the-limits-of-diagonalization",
      children: "11.7 Oracle Separations and the Limits of Diagonalization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Baker-Gill-Solovay theorem (1975) showed:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\\exists A: P^A = NP^A \\quad \\text{and} \\quad \\exists B: P^B \\neq NP^B]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is significant because ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "any proof that resolves P vs NP must be non-relativizing"
      }), " — it cannot work when both P and NP are given the same oracle. Since diagonalization relativizes (it works in all oracle worlds), this shows diagonalization alone cannot resolve P vs NP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What relativizes and what doesn't:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Diagonalization proofs (time hierarchy, space hierarchy) relativize."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proofs relying on specific properties of computation (like interactive proofs, PCP theorem) may not."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Circuits, algebraic methods, and natural proofs are non-relativizing approaches."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Proof Techniques\"\n        D[\"Diagonalization<br/>(relativizes)\"] --> LIMIT[\"Cannot resolve P vs NP\"]\n        CKT[\"Circuit complexity<br/>(non-relativizing)\"] --> POSSIBLE[\"May work\"]\n        ALG[\"Algebraic methods<br/>(non-relativizing)\"] --> POSSIBLE\n        IP[\"Interactive proofs<br/>(non-relativizing)\"] --> POSSIBLE\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "119-the-fixed-point-theorem-kleenes-recursion-theorem",
      children: "11.9 The Fixed-Point Theorem (Kleene's Recursion Theorem)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kleene's recursion theorem states that for any computable function f, there exists a TM M such that M and f(M) compute the same function. In other words, programs can refer to their own descriptions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Applications:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-reproducing programs:"
        }), " A TM can output its own description."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quines:"
        }), " Programs that print their own source code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recursive definition in TMs:"
        }), " TMs can simulate themselves, enabling recursion-like patterns."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-self-reproducing-program-quine-concept",
      children: "TypeScript: Self-Reproducing Program (Quine Concept)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// A quine is a program that outputs its own source code.\n// This TypeScript function demonstrates the concept using\n// the fixed-point theorem's self-referential pattern.\n\nfunction makeQuine(): string {\n  const code = `function makeQuine(): string { return ${JSON.stringify(\n    `function makeQuine(): string { return \"...\" }`\n  )} }`;\n  return `// Self-reproducing code pattern\\nconst quine = ${JSON.stringify(code)};\\nconsole.log(quine);`;\n}\n\n// Recursion theorem in TM terms: there exists a machine M\n// such that for all inputs w, M(w) = f(<M>, w) for some\n// computable function f. This enables TMs to access their own\n// descriptions during computation.\n\n// Example: a TM that counts its own states\nfunction selfAwareTM(ownDescription: string): number {\n  // Parse own description to count states\n  const stateCount = (ownDescription.match(/q\\d+/g) || []).length;\n  return stateCount;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-computability-hierarchy",
      children: "The Computability Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The relationship between different notions of \"computable\":"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Decidable (Recursive)\"\n        DFA[\"DFA Problems\"]\n        CFG[\"CFG Problems\"]\n        P[\"P (polynomial time)\"]\n        PSPACE[\"PSPACE\"]\n    end\n    \n    subgraph \"RE (Recognizable)\"\n        HALT[\"Halting Problem\"]\n        A_TM[\"Acceptance Problem\"]\n        PCP[\"Post Correspondence\"]\n    end\n    \n    subgraph \"co-RE\"\n        CO_HALT[\"Complements of RE\"]\n    end\n    \n    subgraph \"Beyond RE\"\n        TOTAL[\"Totality Problem\"]\n        EQUIV[\"TM Equivalence\"]\n    end\n    \n    Decidable --> RE\n    RE --> Beyond_RE\n    RE --> co-RE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key insight: the decidable/undecidable boundary is not about how hard a problem is in practice — it's about whether any algorithm exists at all, even one that takes astronomically long."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "118-the-busy-beaver-problem",
      children: "11.8 The Busy Beaver Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "busy beaver function"
      }), " BB(n) = maximum number of steps a halting n-state TM (over {0,1} with blank symbol) can run before halting, starting on a blank tape."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key results:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BB(n) is not computable (otherwise we could solve the halting problem)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BB(1) = 1, BB(2) = 6, BB(3) = 21, BB(4) = 107, BB(5) ≥ 47,176,870, BB(6) is astronomically large."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The busy beaver problem is an elegant example of a non-computable function → one that grows faster than any computable function."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-111-mapping-reduction-from-a_tm-to-halt_tm",
      children: "Example 11.1: Mapping Reduction from A_TM to HALT_TM"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Define f(⟨M, w⟩) = ⟨M', w⟩ where M' is:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "M'(x): Run M on x. If M accepts, halt (accept). If M rejects, enter an infinite loop."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Then:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⟨M, w⟩ ∈ A_TM ⟹ M accepts w ⟹ M' halts on w ⟹ ⟨M', w⟩ ∈ HALT_TM."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⟨M, w⟩ ∉ A_TM ⟹ M rejects or loops on w ⟹ M' loops (if M loops) or M' loops (if M rejects) ⟹ ⟨M', w⟩ ∉ HALT_TM."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thus A_TM ≤_m HALT_TM."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-112-pcp-instance",
      children: "Example 11.2: PCP Instance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider dominoes: [ab/a], [b/ba], [a/ab], [ε/a]."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Can we find a match? Try: [ab/a][b/ba] = top: abb, bottom: aba. Not matching."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Try: [ab/a][b/ba][a/ab] = top: abba, bottom: abaab. No."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This demonstrates that finding solutions is nontrivial → and the problem is undecidable in general."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-113-valid-mapping-reduction-proof",
      children: "Example 11.3: Valid Mapping Reduction Proof"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Show that EMPTY_TM = { ⟨M⟩ | L(M) = ∅ } is not RE."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof:"
      }), " Reduce A_TM's complement to EMPTY_TM. Given ⟨M, w⟩, construct M':"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "M'(x): Simulate M on w. If M accepts w, accept x."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Then:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If M accepts w, L(M') = Σ* ≠ ∅."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If M doesn't accept w (rejects or loops), L(M') = ∅."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "So: ⟨M, w⟩ ∉ A_TM iff ⟨M'⟩ ∈ EMPTY_TM."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since co-A_TM is not RE, and EMPTY_TM is RE (we can simulate a TM and check if it accepts any string), this shows that the reduction goes the right way to prove EMPTY_TM is not RE."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wait → actually we need co-A_TM ≤_m EMPTY_TM. Since co-A_TM is not RE, this would show EMPTY_TM is not RE either. But EMPTY_TM is known to be not RE (we can prove this)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-114-rices-theorem--is-lm-infinite",
      children: "Example 11.4: Rice's Theorem → Is L(M) Infinite?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Property P = { L | L is infinite }. P is non-trivial:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Some RE languages are infinite (e.g., Σ*)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Some are not (e.g., ∅)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By Rice's theorem, INFINITE_TM = { ⟨M⟩ | L(M) is infinite } is undecidable."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-115-proving-cfg-ambiguity-is-undecidable",
      children: "Example 11.5: Proving CFG Ambiguity is Undecidable"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We reduce PCP to CFG ambiguity. Given PCP instance D = {(t1,b1), ..., (t?,b?)}:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Construction:"
      }), " Create CFG G with variables {S, T, B, T1,...,T?, B1,...,B?} and productions:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S ? T | B"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T ? t1T | t1T1 | t2T | t2T2 | ... | t?T | t?T?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B ? b1B | b1B1 | b2B | b2B2 | ... | b?B | b?B?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each i: T? ? t?T? | t?T | e"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each i: B? ? b?B? | b?B | e"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " T generates all strings formed by concatenating top strings (with markers showing the sequence). B generates all strings formed by concatenating bottom strings. The grammar is ambiguous for a string s iff s can be generated by both T and B with the same sequence of domino indices — exactly a PCP solution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-116-mapping-reduction-for-cfg-ambiguity",
      children: "Example 11.6: Mapping Reduction for CFG Ambiguity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given PCP instance with dominoes (t₁,b₁), …, (tₖ,bₖ), construct CFG:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S → T | B"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T → t₁T | t₁T₁ | t₂T | t₂T₂ | … | tₖT | tₖTₖ"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B → b₁B | b₁B₁ | b₂B | b₂B₂ | … | bₖB | bₖBₖ\nWhere Tᵢ and Bᵢ are \"marker\" variables."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The idea: T generates sequences of top strings; B generates sequences of bottom strings. The grammar is ambiguous for some string iff the same sequence of dominoes (indices) can generate it from both T and B → i.e., there's a PCP solution."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-implications-of-undecidability-in-software",
      children: "Practical Implications of Undecidability in Software"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Activity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Undecidable problem it encounters"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical workaround"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bug finding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does this program ever crash?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounded model checking, symbolic execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compiler optimization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is this code transformation always correct?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conservative analysis, proof-carrying code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Test coverage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can this branch ever be reached?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant propagation, static analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type checking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does this program type-check? (Some type systems)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restricted type systems (ML, Haskell, not full dependent)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Program synthesis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does a program satisfying this spec exist?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grammar-guided synthesis, component-based approaches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Operating system"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Will the scheduler deadlock?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock ordering protocols, resource allocation policies"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The key insight: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "undecidability doesn't make problems go away"
      }), " — it forces engineers to use conservative approximations, heuristics, and human judgment where perfect automation is impossible."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Reduction Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Power"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mapping (=_m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computable f: w?A iff f(w)?B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserves RE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Turing (=_T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oracle TM decides A with B oracle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More general"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Proof Method"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A_TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidable, RE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diagonalization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HALT_TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidable, RE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduction from A_TM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EMPTY_TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidable, not RE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduction from co-A_TM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EQ_TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidable, not RE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduction from EMPTY_TM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidable, RE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduction from A_TM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CFG Ambiguity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduction from PCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CFG Equivalence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduction from PCP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regularity of TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rice's theorem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Finiteness of TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rice's theorem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DFA Membership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decidable (P)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CFG Membership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decidable (P)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CYK algorithm"
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
            children: "Reducibility Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Software engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Problem hardness classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Problem transformation techniques"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Planning problem hardness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cryptography"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security reduction proofs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query equivalence undecidability"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " A mapping reduction f must be:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Computable ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Polynomial-time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) One-to-one"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Onto"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**A)** A mapping reduction is any computable function such that w ? A iff f(w) ? B.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " If A =_m B and B is RE, then:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) A is RE ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) A is recursive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) A is not RE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) B is recursive"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**A)** Mapping reductions preserve RE: if B is recognizable, so is A.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " Rice's theorem proves undecidability of:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) All TM problems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Non-trivial language properties ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Only syntactic properties"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Only trivial properties"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Any non-trivial semantic property (about L(M)) is undecidable. Syntactic properties may be decidable.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " PCP is important because it's:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Decidable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) A combinatorial undecidable problem ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) In P"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) About DFAs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** PCP is undecidable but purely combinatorial — no TMs in its statement.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " The Busy Beaver function BB(n) is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Computable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Not computable ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Polynomial"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Linear"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** BB(n) grows faster than any computable function — computing it would solve the halting problem.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-undecidability-proof-assistant",
      children: "TypeScript: Undecidability Proof Assistant"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// A system for constructing and verifying reduction proofs\n\ntype UndecidableProblem = {\n  name: string;\n  reStatus: \"RE\" | \"co-RE\" | \"non-RE\";\n};\n\ntype ReductionProof = {\n  from: UndecidableProblem;\n  to: UndecidableProblem;\n  construction: string;\n  validityCheck: () => boolean;\n};\n\nfunction proveByReduction(\n  knownUndecidable: UndecidableProblem,\n  target: UndecidableProblem,\n  construction: string\n): ReductionProof {\n  console.log(\n    `Proving ${target.name} undecidable by reduction from ${knownUndecidable.name}`\n  );\n  console.log(`Construction: ${construction}`);\n  console.log(\"Logic: If target were decidable, so would source be — contradiction.\");\n\n  return {\n    from: knownUndecidable,\n    to: target,\n    construction,\n    validityCheck: () => true,\n  };\n}\n\n// Example: prove REGULAR_TM undecidable from A_TM\nconst regularTMProof = proveByReduction(\n  { name: \"A_TM\", reStatus: \"RE\" },\n  { name: \"REGULAR_TM\", reStatus: \"non-RE\" },\n  \"Given ?M,w?, construct M' that simulates M on input w. \" +\n  \"If M accepts w, M' accepts {0n1n}. If M doesn't accept w, M' accepts Ø.\"\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reductions are everywhere in computing."
          }), " Anytime you solve problem A by transforming it into problem B and using an existing solver for B, you are performing a reduction. Compilers, interpreters, and SAT solvers all depend on this idea."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Completeness identifies the hardest problems."
          }), " A problem being NP-complete or RE-complete means it is representative of the entire class. If you can solve a complete problem efficiently, you can solve every problem in that class efficiently."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Rice's theorem has practical implications."
          }), " Any static analysis tool that attempts to determine a non-trivial property of programs (will it crash? does it compute the right answer?) is either incomplete or unsound in general. All practical analysis tools must make conservative approximations."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Turing reductions are strictly more powerful."
          }), " A mapping reduction requires the entire input to be transformed, but a Turing reduction can make multiple adaptive queries. This extra power allows solving strictly more problems."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reductions define problem hierarchies."
          }), " The Turing degrees form a rich algebraic structure. Understanding where a problem falls in this hierarchy tells you what techniques might solve it and what limits are fundamental."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-turing-degrees",
      children: "The Turing Degrees"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Turing degrees"
      }), " form a partial order of equivalence classes of languages under Turing equivalence (mutual Turing reducibility)."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Degree"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Representative"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Characteristic"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decidable languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All recursive languages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0'"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HALT_TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RE-complete (halting problem)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0''"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOTAL_TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete for (\\Pi_2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0''''"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIN_TM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete for (\\Sigma_3)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key properties of the Turing degrees:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The degrees are dense: for any non-recursive degree a < b, there exists c with a < c < b."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every countable partial order can be embedded into the Turing degrees."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "There exist incomparable degrees (A and B such that neither =? the other)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The jump operator (') takes a degree to a strictly larger one."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-pcp-solution-checker",
      children: "TypeScript: PCP Solution Checker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Domino = { top: string; bottom: string };\ntype PCPInstance = Domino[];\n\nfunction checkPCPSolution(\n  instance: PCPInstance,\n  sequence: number[]\n): boolean {\n  let top = \"\";\n  let bottom = \"\";\n  for (const idx of sequence) {\n    if (idx < 0 || idx >= instance.length) return false;\n    top += instance[idx].top;\n    bottom += instance[idx].bottom;\n  }\n  return top === bottom;\n}\n\nfunction findPCPSolutionBruteForce(\n  instance: PCPInstance,\n  maxLength: number\n): number[] | null {\n  function search(seq: number[]): number[] | null {\n    if (seq.length > 0 && checkPCPSolution(instance, seq)) return seq;\n    if (seq.length >= maxLength) return null;\n    for (let i = 0; i < instance.length; i++) {\n      const result = search([...seq, i]);\n      if (result) return result;\n    }\n    return null;\n  }\n  return search([]);\n}\n\n// Example: classic PCP instance\nconst example: PCPInstance = [\n  { top: \"ab\", bottom: \"a\" },\n  { top: \"b\", bottom: \"ba\" },\n  { top: \"a\", bottom: \"ab\" },\n];\n\n// Try to find a solution up to length 6\nconst solution = findPCPSolutionBruteForce(example, 6);\n// This may not find a solution even if one exists (undecidable!)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-many-one-reduction-mapper-and-reduction-verifier",
      children: "TypeScript Implementation: Many-One Reduction Mapper and Reduction Verifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Many-One Reduction Framework\n\ntype ReductionFunction = (input: string) => string;\n\nclass Reduction {\n  constructor(\n    public name: string,\n    public fromProblem: string,\n    public toProblem: string,\n    public transform: ReductionFunction\n  ) {}\n\n  apply(input: string): string {\n    return this.transform(input);\n  }\n\n  static compose(r1: Reduction, r2: Reduction): Reduction {\n    return new Reduction(\n      `(${r1.name} ° ${r2.name})`,\n      r1.fromProblem,\n      r2.toProblem,\n      (input: string) => r2.transform(r1.transform(input))\n    );\n  }\n}\n\nclass ReducibilityProver {\n  // Halting Problem ? A_TM reduction\n  static haltToATM(): Reduction {\n    return new Reduction(\n      \"HALT =? A_TM\",\n      \"HALT (Does TM M halt on w?)\",\n      \"A_TM (Does TM M' accept w'?)\",\n      (input: string) => {\n        const [tmDesc, ...rest] = input.split(\"|\");\n        const w = rest.join(\"|\");\n        // Transform ?M, w? ? ?M', w'? where M' accepts iff M halts\n        return `modified:${tmDesc}|${w}`;\n      }\n    );\n  }\n\n  // A_TM ? HALT reduction\n  static ATMToHalt(): Reduction {\n    return new Reduction(\n      \"A_TM =? HALT\",\n      \"A_TM (Does TM M accept w?)\",\n      \"HALT (Does TM M' halt on w'?)\",\n      (input: string) => {\n        const [tmDesc, w] = input.split(\"|\");\n        return `loopIfReject:${tmDesc}|${w}`;\n      }\n    );\n  }\n\n  // A_TM ? EMPTY_TM reduction\n  static ATMToEmpty(): Reduction {\n    return new Reduction(\n      \"A_TM =? EMPTY_TM\",\n      \"A_TM (Does TM M accept w?)\",\n      \"EMPTY_TM (Does TM M' accept nothing?)\",\n      (input: string) => {\n        const [tmDesc, w] = input.split(\"|\");\n        // Build new TM that accepts if original accepts w\n        return `ignoreInput_runMOnW:${tmDesc}|${w}`;\n      }\n    );\n  }\n\n  static verifyReduction(reduction: Reduction, testInput: string): void {\n    console.log(`Reduction: ${reduction.name}`);\n    console.log(`  From: ${reduction.fromProblem}`);\n    console.log(`  To:   ${reduction.toProblem}`);\n    console.log(`  Input: \"${testInput}\"`);\n    console.log(`  Output: \"${reduction.apply(testInput)}\"`);\n  }\n\n  static computeClosure(problems: string[], reductions: Map<string, string>): string[] {\n    // Compute transitive closure of reductions\n    const closure = new Set(problems);\n    let changed = true;\n    while (changed) {\n      changed = false;\n      for (const [from, to] of reductions) {\n        if (closure.has(from) && !closure.has(to)) {\n          closure.add(to);\n          changed = true;\n        }\n      }\n    }\n    return [...closure];\n  }\n}\n\nclass PostCorrespondenceProblem {\n  static solveBruteForce(tiles: [string, string][], maxDepth: number): string[] | null {\n    const queue: { sequence: number[]; top: string; bottom: string }[] =\n      tiles.map((_, i) => ({ sequence: [i], top: tiles[i][0], bottom: tiles[i][1] }));\n\n    while (queue.length > 0) {\n      const { sequence, top, bottom } = queue.shift()!;\n\n      if (top === bottom && sequence.length > 0) {\n        return sequence.map(i => `${tiles[i][0]}/${tiles[i][1]}`);\n      }\n\n      if (sequence.length >= maxDepth) continue;\n\n      for (let i = 0; i < tiles.length; i++) {\n        const newTop = top + tiles[i][0];\n        const newBottom = bottom + tiles[i][1];\n\n        // Only continue if one string is a prefix of the other\n        const shorter = newTop.length < newBottom.length ? newTop : newBottom;\n        const longer = newTop.length < newBottom.length ? newBottom : newTop;\n        if (longer.startsWith(shorter)) {\n          queue.push({ sequence: [...sequence, i], top: newTop, bottom: newBottom });\n        }\n      }\n    }\n    return null;\n  }\n}\n\n// Example reductions\nconst haltRed = ReducibilityProver.haltToATM();\nReducibilityProver.verifyReduction(haltRed, \"someTM|inputString\");\n\nconst composed = Reduction.compose(\n  ReducibilityProver.ATMToHalt(),\n  ReducibilityProver.haltToATM()\n);\nconsole.log(`Composed reduction: ${composed.name}`);\n\n// PCP example\nconst pcpTiles: [string, string][] = [\n  [\"a\", \"ab\"], [\"b\", \"a\"], [\"ab\", \"ba\"], [\"ba\", \"b\"]\n];\nconst solution = PostCorrespondenceProblem.solveBruteForce(pcpTiles, 5);\nconsole.log(`PCP solution: ${solution ? solution.join(\" ? \") : \"none found at depth 5\"}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -----------------------------------------------------\n// Many-One Reduction Builder\n// Constructs a computable function f that maps instances\n// of problem A to instances of problem B such that\n// x ? A  ?  f(x) ? B.\n// -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["class ManyOneReductionBuilder {\n// Build a reduction from ATM (TM acceptance) to HALT (halting problem)\n// Given ?M, w?, construct ?M', w? where M' simulates M and\n// enters an infinite loop if M accepts.\nstatic ATMtoHALT(): { name: string; f: (tm: string, input: string) => string; description: string } {\nreturn {\nname: \"A_TM =? HALT\",\ndescription: \"Given ?M, w?, construct ?M', w? where M' runs M on w; if M accepts, M' loops; if M rejects, M' halts.\",\nf: (tm: string, input: string) => {\n// Encodes the reduction: transform ?M, w? into a description\n// of a new TM that halts iff M would accept.\nreturn ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TM_${tm}_MODIFIED|${input}"
      }), ";\n}\n};\n}"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Build a reduction from HALT to EMPTY_TM\nstatic HALTtoEMPTY(): { name: string; description: string } {\nreturn {\nname: \"HALT =? EMPTY_TM\",\ndescription: \"Given ?M, w?, construct ?M_w? where M_w ignores its input, runs M on w, and accepts if M halts. L(M_w) = S* if M halts on w, else Ø.\"\n};\n}"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["// Verify that the reduction preserves membership\nstatic verify(reduction: { name: string; f: (...args: string[]) => string }, testInput: string): string[] {\nconst output: string[] = [];\noutput.push(", (0,jsx_runtime.jsx)(_components.code, {
        children: "Reduction: ${reduction.name}"
      }), ");\noutput.push(", (0,jsx_runtime.jsx)(_components.code, {
        children: "Test input: ${testInput}"
      }), ");\noutput.push(", (0,jsx_runtime.jsx)(_components.code, {
        children: "Mapped to: ${reduction.f(\"M\", testInput)}"
      }), ");\noutput.push(\"\");\noutput.push(\"To be a valid many-one reduction, f must be:\");\noutput.push(\"  • Computable (implementable as a TM)\");\noutput.push(\"  • Total (defined for all inputs)\");\noutput.push(\"  • Membership-preserving: x ? A ? f(x) ? B\");\nreturn output;\n}\n}"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -----------------------------------------------------\n// Mapping Reduction Verifier — checks whether a proposed\n// reduction function is a valid mapping reduction.\n// -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class ReductionVerifier {\n// Check that a reduction function is computable\n// (all operations are primitive recursive)\nstatic isComputable(f: (x: string) => string): boolean {\ntry {\nconst result = f(\"test\");\nreturn typeof result === \"string\" && result.length > 0;\n} catch {\nreturn false;\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Check if the reduction preserves membership direction\nstatic checkMembershipPreservation(\nf: (x: string) => string,\ntestCases: Array<{ input: string; expectedInA: boolean; expectedInB: boolean }>\n): string[] {\nconst output: string[] = [];\noutput.push(\"Mapping Reduction Verification\");\noutput.push(\"=\".repeat(40));"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (const tc of testCases) {\n  const mapped = f(tc.input);\n  output.push(`\\nInput: \"${tc.input}\"`);\n  output.push(`  Mapped to: \"${mapped}\"`);\n  output.push(`  Expected: ${tc.input} ? A = ${tc.expectedInA}, f(x) ? B = ${tc.expectedInB}`);\n  const preserves = tc.expectedInA === tc.expectedInB;\n  output.push(`  Membership preserved: ${preserves ? \"?\" : \"?\"}`);\n}\n\nreturn output;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n}"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["// Demo\nconst atmToHalt = ManyOneReductionBuilder.ATMtoHALT();\nconsole.log(ManyOneReductionBuilder.verify(atmToHalt, \"M_w\").join(\"\\n\"));\nconsole.log(\"\");\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "HALT to EMPTY: ${ManyOneReductionBuilder.HALTtoEMPTY().description}"
      }), ");"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["const simpleF = (x: string) => x + \"_encoded\";\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\nReduction verifiable: ${ReductionVerifier.isComputable(simpleF)}"
      }), ");"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// reducibility\n// automata-complexity implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'reducibility', data: { topic: 'automata-complexity' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n## Summary\n\n- Mapping reductions are computable functions that preserve language membership.\n- If A =? B and B is decidable, then A is decidable (contrapositive for undecidability).\n- Rice's theorem: any non-trivial semantic property of TMs is undecidable.\n- The Post Correspondence Problem is a combinatorial undecidable problem.\n- Turing reductions (oracle access) are more general than mapping reductions.\n- A_TM is RE-complete; many other problems are RE-complete via reductions.\n- Undecidability of CFG problems (ambiguity, equivalence) follows from PCP reductions.\n- The Busy Beaver function grows faster than any computable function.\n- Oracle separations show that diagonalization cannot resolve P vs NP.\n- Kleene's recursion theorem enables self-referential programs and quines.\n\n## Exercises\n\n### Basic\n\n1. Show that A_TM =? HALT_TM (the halting problem).\n2. Apply Rice's theorem to show that { ?M? | M accepts exactly one string } is undecidable.\n3. Define what it means for a function to be a mapping reduction.\n4. Show that if A =? B and B is RE, then A is RE.\n5. Construct a simple PCP instance with 2 dominoes and find a solution, or prove none exists.\n6. Write a TypeScript function that given two languages A and B and a reduction function f, checks if f is a valid mapping reduction for specific test cases.\n\n### Intermediate\n\n7. Prove formally that EMPTY_TM = { ?M? | L(M) = Ø } is undecidable using a reduction from A_TM.\n8. Show that INFINITE_TM is undecidable using Rice's theorem, then via a direct reduction.\n9. Show that PCP is RE by describing a recognizer.\n10. Prove that the language { ?M? | L(M) is regular } is undecidable using Rice's theorem.\n11. Show that CFG universality (does G generate S*?) is undecidable.\n12. Prove that TOTAL_TM = { ?M? | M halts on all inputs } is ?2°-complete (not just undecidable).\n13. Show that the recursion theorem implies the existence of a quine: a TM that outputs its own description.\n\n### Advanced\n\n14. Prove that PCP is undecidable by reducing A_TM to PCP.\n15. Show that the equivalence problem for CFGs is undecidable by reducing PCP to it.\n16. Prove that there is an oracle relative to which P = NP, and another relative to which P ? NP. Why does this show that diagonalization cannot resolve P vs NP?\n17. Show that the problem of whether a TM ever writes a non-blank symbol on its tape is undecidable but NOT covered by Rice's theorem (it's not a property of the language).\n18. Prove that the Busy Beaver function BB(n) is not computable. (Hint: if it were, we could solve the halting problem by running a TM for BB(n) steps and checking if it halted.)\n19. Show that the language { ?M? | L(M) is context-free } is undecidable, but { ?M? | M is a PDA and L(M) is context-free } is trivially decidable. Explain the difference.\n20. Implement a TypeScript function that computes BB(n) for n = 4 by enumerating all n-state TMs and simulating them.\n\n\n\n## The Landscape of Undecidability\n\n```mermaid\nflowchart TD\n    subgraph \"Decidable\"\n        DFA[\"DFA/NFA/RegEx<br/>problems\"]\n        CFG[\"CFG membership,<br/>emptiness\"]\n        P_Time[\"P, NP, PSPACE<br/>(all decidable)\"]\n    end\n    \n    subgraph \"RE (semi-decidable)\"\n        A_TM[\"A_TM: Does M<br/>accept w?\"]\n        HALT[\"HALT_TM: Does M<br/>halt on w?\"]\n        PCP[\"Post Correspondence<br/>Problem\"]\n        NONEMPTY[\"NONEMPTY_TM: Does M<br/>accept any string?\"]\n    end\n    \n    subgraph \"co-RE\"\n        CO_ATM[\"Complement<br/>of A_TM\"]\n    end\n    \n    subgraph \"Neither RE nor co-RE\"\n        EQ_TM[\"EQ_TM: Do two TMs<br/>accept same language?\"]\n        TOTAL[\"TOTAL_TM: Does M<br/>halt on all inputs?\"]\n    end\n    \n    Decidable --> A_TM\n    A_TM --> CO_ATM\n    A_TM --> NONEMPTY\n    Decidable --> P_Time\n"
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
        }), " (3rd ed.). Chapter 5 covers reductions with detailed proofs of undecidability."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Post, Emil L."
        }), " \"A Variant of a Recursively Unsolvable Problem.\" Bulletin of the AMS, 1946. The original paper introducing the Post Correspondence Problem."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Soare, Robert I."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Recursively Enumerable Sets and Degrees"
        }), ". The definitive reference on the Turing degrees and the structure of the arithmetical hierarchy."]
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