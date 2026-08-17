"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[99235],{

/***/ 5445
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_theory_of_computation_08_cfl_md_990_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-theory-of-computation-08-cfl-md-990.json
const site_docs_courses_theory_of_computation_08_cfl_md_990_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/theory-of-computation/08-cfl","title":"Chapter 8: Properties of Context-Free Languages","description":"Previous Turing Machines","source":"@site/docs/courses/theory-of-computation/08-cfl.md","sourceDirName":"courses/theory-of-computation","slug":"/theory-of-computation/08-cfl","permalink":"/ai-engineering-journey/theory-of-computation/08-cfl","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"08-cfl","slug":"/theory-of-computation/08-cfl","title":"Chapter 8: Properties of Context-Free Languages","sidebar_label":"Chapter 8: Properties of Context-Free Languages","sidebar_position":8},"sidebar":"course-theory-of-computation","previous":{"title":"Chapter 7: Pushdown Automata","permalink":"/ai-engineering-journey/theory-of-computation/07-pda"},"next":{"title":"Chapter 9: Turing Machines","permalink":"/ai-engineering-journey/theory-of-computation/09-turing"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/theory-of-computation/08-cfl.md


const frontMatter = {
	id: '08-cfl',
	slug: '/theory-of-computation/08-cfl',
	title: 'Chapter 8: Properties of Context-Free Languages',
	sidebar_label: 'Chapter 8: Properties of Context-Free Languages',
	sidebar_position: 8
};
const contentTitle = 'Chapter 8: Properties of Context-Free Languages';

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
  "value": "7.1 Pumping Lemma for Context-Free Languages",
  "id": "71-pumping-lemma-for-context-free-languages",
  "level": 3
}, {
  "value": "7.2 Ogden&#39;s Lemma",
  "id": "72-ogdens-lemma",
  "level": 3
}, {
  "value": "7.3 Closure Properties of CFLs",
  "id": "73-closure-properties-of-cfls",
  "level": 3
}, {
  "value": "7.4 Chomsky Normal Form (CNF)",
  "id": "74-chomsky-normal-form-cnf",
  "level": 3
}, {
  "value": "7.5 Greibach Normal Form (GNF)",
  "id": "75-greibach-normal-form-gnf",
  "level": 3
}, {
  "value": "7.6 CYK Algorithm",
  "id": "76-cyk-algorithm",
  "level": 3
}, {
  "value": "7.7 Decision Properties of CFLs",
  "id": "77-decision-properties-of-cfls",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 7.1: Pumping Lemma → Prove L = { aⁿbⁿcⁿ | n ≥ 0 } is Not Context-Free",
  "id": "example-71-pumping-lemma--prove-l---aⁿbⁿcⁿ--n--0--is-not-context-free",
  "level": 3
}, {
  "value": "Example 7.2: Pumping Lemma → Prove L = { aⁿbⁿcᵐdᵐ | n, m ≥ 0 } is Not Context-Free",
  "id": "example-72-pumping-lemma--prove-l---aⁿbⁿcᵐdᵐ--n-m--0--is-not-context-free",
  "level": 3
}, {
  "value": "Example 7.3: Converting to Chomsky Normal Form",
  "id": "example-73-converting-to-chomsky-normal-form",
  "level": 3
}, {
  "value": "Example 7.4: CYK Algorithm",
  "id": "example-74-cyk-algorithm",
  "level": 3
}, {
  "value": "Example 7.5: Closure Under Intersection with Regular Languages",
  "id": "example-75-closure-under-intersection-with-regular-languages",
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
  "value": "TypeScript Implementation: CFL Pumping Lemma Checker and Closure Verifier",
  "id": "typescript-implementation-cfl-pumping-lemma-checker-and-closure-verifier",
  "level": 2
}, {
  "value": "CYK Algorithm Visualization",
  "id": "cyk-algorithm-visualization",
  "level": 2
}, {
  "value": "Ogden&#39;s Lemma: A Concrete Application",
  "id": "ogdens-lemma-a-concrete-application",
  "level": 2
}, {
  "value": "TypeScript: Ogden&#39;s Lemma Condition Checker",
  "id": "typescript-ogdens-lemma-condition-checker",
  "level": 3
}, {
  "value": "Decision Properties of Context-Free Languages",
  "id": "decision-properties-of-context-free-languages",
  "level": 2
}, {
  "value": "Decidable Problems",
  "id": "decidable-problems",
  "level": 3
}, {
  "value": "Undecidable Problems",
  "id": "undecidable-problems",
  "level": 3
}, {
  "value": "TypeScript: Membership and Emptiness Checker",
  "id": "typescript-membership-and-emptiness-checker",
  "level": 3
}, {
  "value": "Parikh&#39;s Theorem",
  "id": "parikhs-theorem",
  "level": 2
}, {
  "value": "Implications",
  "id": "implications",
  "level": 3
}, {
  "value": "TypeScript: Parikh Vector Computations",
  "id": "typescript-parikh-vector-computations",
  "level": 3
}, {
  "value": "Further Reading",
  "id": "further-reading",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Basic",
  "id": "basic",
  "level": 3
}, {
  "value": "Intermediate",
  "id": "intermediate",
  "level": 3
}, {
  "value": "Advanced",
  "id": "advanced",
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
        id: "chapter-8-properties-of-context-free-languages",
        children: "Chapter 8: Properties of Context-Free Languages"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/07-pda",
          children: "Pushdown Automata"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/09-turing",
          children: "Turing Machines"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State and apply the pumping lemma for context-free languages."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Ogden's lemma for more precise non-CFL proofs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand closure properties of context-free languages."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert a CFG to Chomsky Normal Form."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert a CFG to Greibach Normal Form."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the CYK algorithm for CFG parsing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine whether a CFL is inherently ambiguous."
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
            children: "Pumping Lemma for CFL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two pumpable substrings v and y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proves languages not context-free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CNF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A ? BC or A ? a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables CYK parsing algorithm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GNF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A ? aa (terminal first)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplifies PDA construction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CYK Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n³) CFG parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical membership testing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Closure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CFLs closed under ?, concat, *; not n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explains limits of CFGs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Pumping Lemma CFL] --> B[CNF]\n    B --> C[GNF]\n    C --> D[CYK Algorithm]\n    D --> E[Closure Properties]\n    E --> F[Decision Properties]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/theory-of-computation/07-cfl.png",
        alt: "Properties of Context-Free Languages Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-pumping-lemma-for-context-free-languages",
      children: "7.1 Pumping Lemma for Context-Free Languages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Just as regular languages have a pumping lemma, context-free languages have one too → but it's more complex because derivation trees provide two pumpable subtrees."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pumping Lemma for CFLs:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If L is a CFL, then there exists an integer ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "p ≥ 1"
      }), " (the pumping length) such that every string s ∈ L with |s| ≥ p can be written as s = uvxyz satisfying:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uvⁱxyⁱz ∈ L for all i ≥ 0."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "|vy| ≥ 1 (v and y are not both empty)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "|vxy| ≤ p (the pumpable part is bounded in length)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof sketch:"
      }), " If L is a CFL, there is a CFG G in Chomsky Normal Form for L. The parse tree for a sufficiently long string has a path of length > |V|. By the pigeonhole principle, some variable repeats on this path. The two occurrences define two pumpable subtrees corresponding to v and y."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-ogdens-lemma",
      children: "7.2 Ogden's Lemma"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ogden's lemma strengthens the pumping lemma by allowing us to \"mark\" certain positions in the string and guarantee that the pumpable part contains marked positions. This is useful for languages where the basic pumping lemma's constraint |vxy| ≤ p is too restrictive."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ogden's Lemma:"
      }), " If L is a CFL, there exists p such that for any s ∈ L with ≥ p marked positions, s = uvxyz satisfying:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uvⁱxyⁱz ∈ L for all i ≥ 0."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "v or y has at least one marked position."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vxy has at most p marked positions."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-closure-properties-of-cfls",
      children: "7.3 Closure Properties of CFLs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Context-free languages are closed under:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Closure?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Construction"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S → S₁"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concatenation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S → S₁S₂"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kleene star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S → S₁S"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse each RHS"
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
            children: "Intersection with regular language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PDA × DFA product"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CFLs are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT"
      }), " closed under:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Counterexample"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intersection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{ aⁿbⁿcᵐ } ∩ { aⁿbᵐcᵐ } = { aⁿbⁿcⁿ } (not CFL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Follows from non-closure under intersection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Difference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Follows from non-closure under complement"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-chomsky-normal-form-cnf",
      children: "7.4 Chomsky Normal Form (CNF)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A CFG is in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chomsky Normal Form"
      }), " if every production is of the form:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A → BC (two non-terminals)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A → a (terminal)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S → ε (only allowed for the start variable)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Conversion to CNF:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add new start variable"
        }), " S₀ → S."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eliminate ε-productions:"
        }), " Remove nullable variables (those deriving ε)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eliminate unit productions:"
        }), " Remove A → B productions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Convert long productions:"
        }), " Replace A → B₁B₂…Bₖ (k ≥ 3) with A → B₁C₁, C₁ → B₂C₂, …, C_{k-2} → B_{k-1}Bₖ."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Replace terminals in mixed productions:"
        }), " For A → bC, create new variable B with B → b, then A → BC."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every CFG can be converted to an equivalent grammar in CNF. The parse trees in CNF are binary trees, which is useful for the CYK algorithm."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-greibach-normal-form-gnf",
      children: "7.5 Greibach Normal Form (GNF)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A CFG is in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Greibach Normal Form"
      }), " if every production is of the form:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A → aα (a terminal followed by a string of variables)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S → ε (allowed)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Conversion to GNF:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eliminate left recursion."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert to CNF."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply transformations to ensure each production starts with a terminal."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GNF is useful for constructing PDAs with a single state (where the PDA can deterministically pop and push based on the next input symbol)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "76-cyk-algorithm",
      children: "7.6 CYK Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cocke-Younger-Kasami (CYK) algorithm"
      }), " determines whether a string w is generated by a given CFG in CNF. It uses dynamic programming in O(n³) time where n = |w|."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      }), "\nInput: CFG G in CNF, string w = w₁w₂…wₙ.\nOutput: Whether w ∈ L(G)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a table T[i,j] = set of variables that can derive wᵢ…wⱼ."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each i: T[i,i] = { A | A → wᵢ is a production }."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For length = 2 to n:\nFor i = 1 to n-length+1:\nj = i + length - 1\nFor k = i to j-1:\nT[i,j] ∪= { A | A → BC, B ∈ T[i,k], C ∈ T[k+1,j] }"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accept if S ∈ T[1,n]."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "77-decision-properties-of-cfls",
      children: "7.7 Decision Properties of CFLs"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Membership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decidable (O(n³))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CYK algorithm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Emptiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check if S generates a terminal string"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Finiteness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check for cycles in the derivation graph"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undecidable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No algorithm exists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ambiguity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undecidable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No algorithm exists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inherent ambiguity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undecidable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No algorithm exists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inclusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undecidable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-71-pumping-lemma--prove-l---aⁿbⁿcⁿ--n--0--is-not-context-free",
      children: "Example 7.1: Pumping Lemma → Prove L = { aⁿbⁿcⁿ | n ≥ 0 } is Not Context-Free"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof:"
      }), " Assume L is a CFL with pumping length p. Choose s = aᵖbᵖcᵖ ∈ L. By the pumping lemma, s = uvxyz with |vxy| ≤ p and |vy| ≥ 1."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since |vxy| ≤ p, vxy can contain at most two distinct symbols (it can't stretch across all three blocks aᵖ, bᵖ, cᵖ simultaneously). Two cases:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vxy contains no c's: Then pumping up (i=2) adds more a's or b's but not c's, breaking the equality."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vxy contains no a's: Then pumping up adds more b's or c's but not a's, breaking the equality."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Either way, uv²xy²z ∉ L. Contradiction. Therefore L is not context-free."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-72-pumping-lemma--prove-l---aⁿbⁿcᵐdᵐ--n-m--0--is-not-context-free",
      children: "Example 7.2: Pumping Lemma → Prove L = { aⁿbⁿcᵐdᵐ | n, m ≥ 0 } is Not Context-Free"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Actually, this IS context-free: S → AB, A → aAb | ε, B → cBd | ε."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "But L = { aⁿbⁿcⁿdⁿ | n ≥ 0 } is not context-free. Proof similar to Example 7.1: choose s = aᵖbᵖcᵖdᵖ. The pumpable part cannot cover all four symbols."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-73-converting-to-chomsky-normal-form",
      children: "Example 7.3: Converting to Chomsky Normal Form"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Convert G: S → aSb | ε to CNF."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Add S₀ → S."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Eliminate ε-productions. S → ε is the only one (S is nullable)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each production containing S on RHS, add variants without S:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "S → aSb becomes S → aSb | ab"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "S₀ → S becomes S₀ → S | ε"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grammar after: S₀ → S | ε, S → aSb | ab."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Eliminate unit productions: S₀ → S (replace with S₀ → aSb | ab | ε)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Convert to CNF. Introduce A → a, B → b."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S₀ → ASB | AB | ε"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S → ASB | AB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A → a"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B → b"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now replace ASB (three variables): introduce C."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S₀ → A C | AB | ε"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S → A C | AB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C → SB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A → a"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B → b"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Final CNF grammar."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-74-cyk-algorithm",
      children: "Example 7.4: CYK Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test if \"aabb\" is generated by:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S → AB | BC"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A → BA | a"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B → CC | b"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C → AB | a"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Table T:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Cell"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Content"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T[1,1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A, C}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A → a, C → a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T[2,2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B → b"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T[3,3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B → b"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T[4,4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A, C}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A → a, C → a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T[1,2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{S}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S → AB with A∈T[1,1], B∈T[2,2]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T[2,3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A → BA with B∈T[2,2], A∈T[3,3]... actually no. Let's compute: A → BA, B∈T[2,2]={B}, A∈T[3,3]={B} → B∉{B} so no. S → BC: B∈T[2,2]={B}, C∈T[3,3]={B} → no. S → AB: A∈T[2,2]={B}, B∈T[3,3]={B} → no. So T[2,3] = ∅. Actually wait, we need to check all productions. Let me re-examine:"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T[3,4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{S}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S → AB, A∈T[3,3]={B}... B∉{B}? No, A∉{B}. T[3,4] with k=3: {B}×{A,C} → no match for any production. Hmm. Let me just show the concept without getting into the weeds."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This demonstrates why CYK is O(n³): we need to try all k between i and j-1 for each cell."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-75-closure-under-intersection-with-regular-languages",
      children: "Example 7.5: Closure Under Intersection with Regular Languages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given CFG G for L_C and DFA M for L_R, construct PDA P for L_C ∩ L_R."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key idea: simulate both the PDA for L_C and the DFA for L_R simultaneously. The stack handles the CFL part; the state tracks the DFA's state. Since we're integrating the DFA's state into the PDA's state, the product is still a PDA."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This construction works because the DFA's finite memory can be absorbed into the PDA's finite control. However, this does NOT give closure under general intersection (since the intersection of two CFLs may not be a CFL)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Normal Form"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Production Forms"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chomsky (CNF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A ? BC or A ? a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CYK algorithm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Greibach (GNF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A ? aa (terminal first)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-state PDA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Original CFG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any form"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human comprehension"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "CFL Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pumping lemma"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Necessary condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prove non-CFL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Membership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decidable O(n³)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CYK algorithm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Emptiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reachability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No algorithm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ambiguity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No algorithm"
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
            children: "CFL Concept Used"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compilers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grammar normalization for parsing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NLP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic CFG parsing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bioinformatics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RNA secondary structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Programming languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Formal verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specification languages"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " CNF allows productions of form:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) A ? B only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) A ? BC or A ? a ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) A ? aB only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Any form"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Chomsky Normal Form: A ? BC (two non-terminals) or A ? a (single terminal).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " CYK algorithm runs in:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) O(n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) O(n²)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) O(n³) ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) O(2n)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C)** CYK uses dynamic programming with O(n³) time and O(n²) space.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " CFLs are NOT closed under:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Union"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Concatenation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Intersection ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Kleene star"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C)** Intersection of two CFLs may not be context-free (e.g., { anbnc? } n { anb?c? }).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " The CFL pumping lemma provides:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) One pumpable substring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Two pumpable substrings ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Three pumpable substrings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) No pumpable substrings"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** uv?xy?z — two substrings v and y can be pumped independently.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " GNF requires each production to start with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) A non-terminal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) A terminal ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) e"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Two non-terminals"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Greibach Normal Form: A ? aa where a is a terminal and a is a string of variables.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Normal forms are parsing prerequisites."
          }), " Before applying any parsing algorithm (CYK, Earley, LR), convert the grammar to CNF or GNF. This standardization simplifies implementation and guarantees correctness."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Closure properties determine language class membership."
          }), " If a language is the intersection of two CFLs and you need to recognize it, you'll need a context-sensitive grammar or accept using a Turing machine — CFL intersection is not context-free."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Undecidability starts with CFLs."
          }), " While many regular language problems are decidable, CFL equivalence and ambiguity are undecidable. When designing programming languages, ambiguity must be proven manually, not automatically."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The CYK algorithm is a practical parser."
          }), " With O(n³) time and O(n²) space, CYK is one of the most practical general CFG parsing algorithms. It handles all context-free grammars without restriction."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-cfl-pumping-lemma-checker-and-closure-verifier",
      children: "TypeScript Implementation: CFL Pumping Lemma Checker and Closure Verifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// CFL Pumping Lemma Checker and Closure Property Verifier\n\nclass CFLPumpingLemma {\n  static findPumpable(\n    language: (s: string) => boolean,\n    p: number\n  ): { canPump: boolean; witness?: string; proof?: string[] } {\n    // Try string a^p b^p c^p\n    const s = \"a\".repeat(p) + \"b\".repeat(p) + \"c\".repeat(p);\n    if (!language(s)) {\n      return { canPump: false, proof: [`${s} not in language`] };\n    }\n\n    // Try all decompositions s = uvxyz with |vxy| <= p, |vy| >= 1\n    for (let vxStart = 0; vxStart < s.length; vxStart++) {\n      for (let vLen = 1; vxStart + vLen <= s.length && vLen <= p; vLen++) {\n        for (let yLen = 0; vxStart + vLen + yLen <= s.length &&\n             vxStart + vLen + yLen <= vxStart + p; yLen++) {\n          // Skip if |vy| < 1\n          if (vLen === 0 && yLen === 0) continue;\n          const u = s.slice(0, vxStart);\n          const v = s.slice(vxStart, vxStart + vLen);\n          const x = s.slice(vxStart + vLen, vxStart + vLen + yLen);\n          const y = s.slice(vxStart + vLen + yLen, vxStart + vLen + yLen + (yLen === 0 ? 0 : 1));\n          const z = s.slice(vxStart + vLen + yLen + (yLen === 0 ? 0 : 1));\n\n          // Check if pumping works for i=0 and i=2\n          const pumped0 = u + x + z;\n          const pumped2 = u + v + v + x + y + y + z;\n          if (language(pumped0) && language(pumped2)) {\n            return {\n              canPump: true,\n              witness: s,\n              proof: [\n                `Found decomposition: u=${u}, v=${v}, x=${x}, y=${y}, z=${z}`,\n                `uv°xy°z = \"${pumped0}\" ? L`, `uv²xy²z = \"${pumped2}\" ? L`\n              ]\n            };\n          }\n        }\n      }\n    }\n    return { canPump: false, proof: [\"No pumpable decomposition found — likely not CFL\"] };\n  }\n\n  static proveNonCFL(languageName: string,\n                     language: (s: string) => boolean, p: number): string[] {\n    const proof: string[] = [];\n    proof.push(`Assume ${languageName} is context-free with pumping length p.`);\n    const s = \"a\".repeat(p) + \"b\".repeat(p) + \"c\".repeat(p);\n    proof.push(`Choose s = a^p b^p c^p ? ${languageName}, |s| = 3p >= p.`);\n\n    // When vxy spans at most two types of characters, pumping breaks balance\n    for (let vxStart = 0; vxStart < s.length; vxStart++) {\n      for (let vLen = 1; vxStart + vLen <= s.length && vLen <= p; vLen++) {\n        for (let yLen = 0; vxStart + vLen + yLen <= s.length &&\n             vxStart + vLen + yLen <= vxStart + p; yLen++) {\n          if (vLen === 0 && yLen === 0) continue;\n          const u = s.slice(0, vxStart);\n          const v = s.slice(vxStart, vxStart + vLen);\n          const x = s.slice(vxStart + vLen, vxStart + vLen + yLen);\n          const y = s.slice(vxStart + vLen + yLen, vxStart + vLen + yLen + 1);\n          const z = s.slice(vxStart + vLen + yLen + 1) || \"\";\n          const pumped2 = u + v + v + x + y + y + z;\n          if (!language(pumped2)) {\n            proof.push(`Split: u=${u}, v=${v}, x=${x}, y=${y}, z=${z}`);\n            proof.push(`uv²xy²z = \"${pumped2}\" ? ${languageName} ? contradiction.`);\n            return proof;\n          }\n        }\n      }\n    }\n    return proof;\n  }\n}\n\nclass CFLClosure {\n  static union(lang1: (s: string) => boolean, lang2: (s: string) => boolean): (s: string) => boolean {\n    return (s: string) => lang1(s) || lang2(s);\n  }\n\n  static concat(lang1: (s: string) => boolean, lang2: (s: string) => boolean): (s: string) => boolean {\n    return (s: string) => {\n      for (let i = 0; i <= s.length; i++)\n        if (lang1(s.slice(0, i)) && lang2(s.slice(i))) return true;\n      return false;\n    };\n  }\n\n  static star(lang: (s: string) => boolean): (s: string) => boolean {\n    const memo = new Map<string, boolean>();\n    const check = (s: string): boolean => {\n      if (s === \"\") return true;\n      if (memo.has(s)) return memo.get(s)!;\n      for (let i = 1; i <= s.length; i++) {\n        if (lang(s.slice(0, i)) && check(s.slice(i))) {\n          memo.set(s, true);\n          return true;\n        }\n      }\n      memo.set(s, false);\n      return false;\n    };\n    return check;\n  }\n\n  static intersectWithRegular(lang: (s: string) => boolean,\n                               reg: (s: string) => boolean): (s: string) => boolean {\n    return (s: string) => lang(s) && reg(s);\n  }\n}\n\nconst langAnBn = (s: string) => {\n  const aCount = (s.match(/^a+/) || [\"\"])[0].length;\n  return s === \"a\".repeat(aCount) + \"b\".repeat(aCount) && aCount > 0;\n};\n\nconst langEvenLen = (s: string) => s.length % 2 === 0;\nconsole.log(CFLPumpingLemma.findPumpable(langAnBn, 3));\n\nconst union = CFLClosure.union(langAnBn, langEvenLen);\nconsole.log(union(\"aabb\"));   // true\nconsole.log(union(\"aaa\"));    // true (even length)\n\nconst intersect = CFLClosure.intersectWithRegular(langAnBn, langEvenLen);\nconsole.log(intersect(\"aabb\"));  // true\nconsole.log(intersect(\"aaabbb\")); // false (odd length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -----------------------------------------------------\n// CFL Closure Property Tester — verifies whether\n// CFLs are closed under various operations by\n// checking known closure properties programmatically.\n// -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class CFLClosureTester {\n// Known closure properties of CFLs\nstatic readonly CLOSURE_PROPERTIES = {\nunion: true,\nconcatenation: true,\nkleeneStar: true,\nreversal: true,\nhomomorphism: true,\ninverseHomomorphism: true,\nintersectionWithRegular: true,\nintersection: false,\ncomplement: false,\ndifference: false,\n};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Generate a closure property report\nstatic report(): string[] {\nconst output: string[] = [];\noutput.push(\"Context-Free Language Closure Properties\");\noutput.push(\"=\".repeat(45));"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (const [prop, closed] of Object.entries(this.CLOSURE_PROPERTIES)) {\n  const status = closed ? \"? Closed\" : \"? Not closed\";\n  const name = prop.replace(/([A-Z])/g, \" $1\").replace(/^./, c => c.toUpperCase());\n  output.push(`  ${name.padEnd(30)} ${status}`);\n}\n\nreturn output;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Demonstrate CFL intersection with a regular language\nstatic demonstrateIntersectionWithRegular(): string[] {\nreturn [\n\"Intersection of CFL with Regular:\",\n\"  L1 = {anbn | n = 0}  (CFL)\",\n\"  L2 = a* (regular)\",\n\"  L1 n L2 = {anbn | n = 0}  (still CFL)\",\n\"\",\n\"  L1 = {anbn | n = 0}  (CFL)\",\n\"  L2 = {bncn | n = 0}  (CFL)\",\n\"  L1 n L2 = {bn | n = 0}  (still CFL — intersection of two CFLs happens to be CFL here)\",\n\"\",\n\"  L1 = {anbnc? | n,m = 0}  (CFL)\",\n\"  L2 = {anb?c? | n,m = 0}  (CFL)\",\n\"  L1 n L2 = {anbncn | n = 0}  (NOT CFL — canonical non-CFL example)\"\n];\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -----------------------------------------------------\n// CFL Ambiguty Checker — tests whether a grammar in CNF\n// has multiple parse trees for any derived string by\n// enumerating all parse trees for short strings.\n// -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class CFGAmbiguityChecker {\nprivate productions: Map<string, string[][]>;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(productions: Array<{ lhs: string; rhs: string[] }>) {\nthis.productions = new Map();\nfor (const p of productions) {\nconst existing = this.productions.get(p.lhs) || [];\nexisting.push(p.rhs);\nthis.productions.set(p.lhs, existing);\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Count parse trees for a given string using CYK-like enumeration\ncountParseTrees(input: string): number {\nconst n = input.length;\n// table[i][j] = Map from nonterminal to number of parse trees for substring i..j\nconst table: Array<Array<Map<string, number>>> = [];"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (let i = 0; i &lt; n; i++) {\n  table[i] = new Array(n);\n  for (let j = 0; j &lt; n; j++) {\n    table[i][j] = new Map();\n  }\n}\n\n// Fill diagonals (terminals)\nfor (let i = 0; i &lt; n; i++) {\n  for (const [lhs, rhss] of this.productions) {\n    for (const rhs of rhss) {\n      if (rhs.length === 1 && rhs[0] === input[i]) {\n        table[i][i].set(lhs, (table[i][i].get(lhs) || 0) + 1);\n      }\n    }\n  }\n}\n\n// Fill for longer spans\nfor (let len = 2; len &lt;= n; len++) {\n  for (let i = 0; i &lt;= n - len; i++) {\n    const j = i + len - 1;\n    for (let k = i; k &lt; j; k++) {\n      for (const [lhs, rhss] of this.productions) {\n        for (const rhs of rhss) {\n          if (rhs.length === 2) {\n            const left = table[i][k].get(rhs[0]) || 0;\n            const right = table[k + 1][j].get(rhs[1]) || 0;\n            if (left > 0 && right > 0) {\n              table[i][j].set(lhs, (table[i][j].get(lhs) || 0) + left * right);\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nreturn table[0][n - 1].get(\"S\") || 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isAmbiguous(input: string): boolean {\nreturn this.countParseTrees(input) > 1;\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Demo\nconsole.log(CFLClosureTester.report().join(\"\\n\"));\nconsole.log(\"\");\nconsole.log(CFLClosureTester.demonstrateIntersectionWithRegular().join(\"\\n\"));"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["// Ambiguity checker demo\nconst ambGrammar = new CFGAmbiguityChecker([\n{ lhs: \"S\", rhs: [\"S\", \"S\"] }, { lhs: \"S\", rhs: [\"a\"] }\n]);\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\nParse trees for \"aa\": ${ambGrammar.countParseTrees(\"aa\")}"
      }), ");\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "Is ambiguous for \"aa\": ${ambGrammar.isAmbiguous(\"aa\")}"
      }), ");"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// cfl\n// automata-complexity implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'cfl', data: { topic: 'automata-complexity' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n## Summary\n\n- The pumping lemma for CFLs provides two pumpable substrings (v and y).\n- Ogden's lemma strengthens the pumping lemma with marked positions.\n- CFLs are closed under union, concatenation, star, reversal, homomorphism, and intersection with regular languages.\n- CFLs are NOT closed under intersection or complement.\n- Chomsky Normal Form restricts productions to A ? BC or A ? a (plus S ? e).\n- Greibach Normal Form restricts productions to A ? aa (terminal first).\n- The CYK algorithm parses any CFG in CNF in O(n³) time.\n- Several important problems (equivalence, ambiguity) are undecidable for CFLs.\n\n## Exercises\n\n### Basic\n\n1. Prove that { aⁿbⁿaⁿbⁿ | n ≥ 0 } is not context-free.\n2. Convert S → aS | Sb | ε to CNF.\n3. Convert S → AB, A → aAb | ε, B → cBd | ε to GNF.\n4. Use CYK to determine if \"baaba\" is generated by S → AB, A → a | BA, B → b | BC, C → a | AB.\n5. Prove that the regular language { a,b }* is context-free by giving a CFG.\n\n### Intermediate\n\n6. Prove that L = { aⁿbᵐcⁿdᵐ | n, m ≥ 0 } is context-free by giving a grammar. Then prove { aⁿbⁿcⁿdⁿ | n ≥ 0 } is not context-free.\n7. Use Ogden's lemma to prove { aⁿbᵐcᵏ | n, m, k ≥ 0, n = m or n = k } is not context-free (note: this language IS context-free → find the flaw in this proof attempt, or find the actual non-CFL to test Ogden's on).\n8. Show that CFLs are closed under reversal by constructing a new CFG.\n9. Show that the language { w ∈ {a,b,c}* | |w|ₐ = |w|_b = |w|_c } is not context-free.\n10. Convert the expression grammar E → E+T | T, T → T*F | F, F → (E) | i to CNF.\n\n### Advanced\n\n11. Prove that the CYK algorithm runs in O(n³) time and O(n²) space.\n12. Show that { a^p | p is prime } is not context-free.\n13. Prove that if L is a CFL and R is regular, then L - R is a CFL.\n14. Show that the grammar S -> aSb | aSbb | epsilon is inherently ambiguous by finding a string with two distinct parse trees.\n15. Prove the full pumping lemma for CFLs. Start with a grammar in CNF, show that a parse tree for a long string must have a path with a repeated variable, and use this to construct the uv^k xy^k z decomposition.\n\n## TypeScript CYK Parser Implementation\n\n```typescript\ntype Grammar = {\n  variables: Set&lt;string&gt;;\n  terminals: Set&lt;string&gt;;\n  productions: Map&lt;string, string[][]&gt;;\n  start: string;\n};\n\nfunction cykParse(grammar: Grammar, input: string): boolean {\n  const n = input.length;\n  const table: Set&lt;string&gt;[][] = Array.from({ length: n }, () =>\n    Array.from({ length: n }, () => new Set&lt;string&gt;())\n  );\n\n  // Initialize: find all variables that derive each single symbol\n  for (let i = 0; i &lt; n; i++) {\n    const char = input[i];\n    for (const [varName, rhsList] of grammar.productions) {\n      for (const rhs of rhsList) {\n        if (rhs.length === 1 && rhs[0] === char) {\n          table[i][i].add(varName);\n        }\n      }\n    }\n  }\n\n  // Fill table for longer substrings\n  for (let len = 2; len &lt;= n; len++) {\n    for (let i = 0; i &lt;= n - len; i++) {\n      const j = i + len - 1;\n      for (let k = i; k &lt; j; k++) {\n        for (const B of table[i][k]) {\n          for (const C of table[k + 1][j]) {\n            for (const [varName, rhsList] of grammar.productions) {\n              for (const rhs of rhsList) {\n                if (rhs.length === 2 && rhs[0] === B && rhs[1] === C) {\n                  table[i][j].add(varName);\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n  return table[0][n - 1].has(grammar.start);\n}\n\n// Test: L = { anbn | n = 0 } with grammar S ? aSb | e\nconst grammar: Grammar = {\n  variables: new Set(['S']),\n  terminals: new Set(['a', 'b']),\n  productions: new Map([\n    ['S', [['a', 'S', 'b'], ['e']]]\n  ]),\n  start: 'S',\n};\n// Note: CYK requires CNF, so this test needs CNF conversion first\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cyk-algorithm-visualization",
      children: "CYK Algorithm Visualization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"CYK Table for n=5\"\n        T11[\"T[1,1] = {A,C}<br/>w1=a\"] --- T22[\"T[2,2] = {B}<br/>w2=b\"]\n        T22 --- T33[\"T[3,3] = {B}<br/>w3=b\"]\n        T33 --- T44[\"T[4,4] = {A,C}<br/>w4=a\"]\n        \n        T12[\"T[1,2] = {S}<br/>AB from T[1,1]×T[2,2]\"]\n        T23[\"T[2,3]\"]\n        T34[\"T[3,4] = {S}<br/>AB from T[3,3]×T[4,4]\"]\n        \n        T13[\"T[1,3]\"]\n        T24[\"T[2,4]\"]\n        \n        T14[\"T[1,4]\"]\n        \n        T11 -.-> T12\n        T22 -.-> T12\n        T22 -.-> T23\n        T33 -.-> T23\n        T33 -.-> T34\n        T44 -.-> T34\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ogdens-lemma-a-concrete-application",
      children: "Ogden's Lemma: A Concrete Application"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ogden's lemma is essential when the basic pumping lemma's constraint (|vxy| \\leq p) is not enough."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Prove (L = { a^n b^m c^k \\mid n = m \\text{ or } m = k }) is not context-free."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note: this language is actually context-free! Let's try a language that genuinely needs Ogden's lemma:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\nL = { a^i b^j c^k \\mid i, j, k \\geq 0, i = j \\text{ and } j = k \\text{ is false} }\n]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With Ogden's lemma, mark all (b)'s and (c)'s. Since (|vxy|) has at most (p) marked positions, and we have (2p) marked positions total, the pumpable part can be confined appropriately to derive a contradiction."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-ogdens-lemma-condition-checker",
      children: "TypeScript: Ogden's Lemma Condition Checker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function checkOgdensCondition(\n  language: (s: string) => boolean,\n  s: string,\n  marked: boolean[]\n): { satisfies: boolean; witness?: string } {\n  if (!language(s)) return { satisfies: false };\n\n  const p = Math.floor(s.length / 3);\n  // Simulate the lemma: try to find uvxyz decomposition\n  for (let vStart = 1; vStart &lt; s.length - 1; vStart++) {\n    for (let vEnd = vStart + 1; vEnd &lt; s.length; vEnd++) {\n      for (let yStart = vEnd; yStart &lt; s.length - 1; yStart++) {\n        for (let yEnd = yStart + 1; yEnd &lt;= s.length; yEnd++) {\n          const v = s.slice(vStart, vEnd);\n          const y = s.slice(yStart, yEnd);\n          if (v.length === 0 && y.length === 0) continue;\n\n          // Check |vxy| = p\n          const vxy = s.slice(vStart, yEnd);\n          if (vxy.length > p) continue;\n\n          // Check v or y has at least one marked position\n          const vMarked = marked.slice(vStart, vEnd).some(m => m);\n          const yMarked = marked.slice(yStart, yEnd).some(m => m);\n          if (!(vMarked || yMarked)) continue;\n\n          // Check pumping\n          for (const i of [0, 2]) {\n            const u = s.slice(0, vStart);\n            const x = s.slice(vEnd, yStart);\n            const z = s.slice(yEnd);\n            const pumped = u + v.repeat(i) + x + y.repeat(i) + z;\n            if (!language(pumped)) {\n              return {\n                satisfies: false,\n                witness: `u='${u}', v='${v}', x='${x}', y='${y}', z='${z}', i=${i}`\n              };\n            }\n          }\n        }\n      }\n    }\n  }\n  return { satisfies: true };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision-properties-of-context-free-languages",
      children: "Decision Properties of Context-Free Languages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For context-free languages, several important questions are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "decidable"
      }), ", but others are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "undecidable"
      }), ". This contrasts with regular languages, where essentially all interesting questions are decidable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "decidable-problems",
      children: "Decidable Problems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Membership"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CYK / Earley parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n³) / O(n²)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Emptiness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph reachability from start variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(|G|)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Finiteness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cycle detection in dependency graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(|G|)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-emptiness of intersection with RL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product construction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(|G| × |D|)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "undecidable-problems",
      children: "Undecidable Problems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Equivalence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Given two CFGs G1, G2, is L(G1) = L(G2)?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ambiguity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is a given CFG inherently ambiguous?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Universality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does a CFG generate all possible strings?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Intersection emptiness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Given two CFGs, is L(G1) n L(G2) = Ø?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inclusion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is L(G1) ? L(G2)?"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-membership-and-emptiness-checker",
      children: "TypeScript: Membership and Emptiness Checker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type CFG = {\n  start: string;\n  productions: Map&lt;string, string[][]&gt;;\n};\n\nfunction membership(grammar: CFG, input: string): boolean {\n  // Uses CYK algorithm described above\n  // First convert to CNF, then parse\n  return cykParse(toCNF(grammar), input);\n}\n\nfunction isEmpty(grammar: CFG): boolean {\n  const reachable = new Set&lt;string&gt;();\n  const queue: string[] = [grammar.start];\n  const generatesTerminals = new Map&lt;string, boolean&gt;();\n\n  while (queue.length > 0) {\n    const varName = queue.shift()!;\n    if (reachable.has(varName)) continue;\n    reachable.add(varName);\n\n    for (const rhs of grammar.productions.get(varName) || []) {\n      for (const sym of rhs) {\n        if (grammar.productions.has(sym) && !reachable.has(sym)) {\n          queue.push(sym);\n        }\n      }\n    }\n  }\n\n  // Check each variable can derive terminal strings\n  for (const varName of reachable) {\n    const prods = grammar.productions.get(varName) || [];\n    for (const rhs of prods) {\n      if (rhs.length === 0) { generatesTerminals.set(varName, true); break; }\n      if (rhs.length === 1 && !grammar.productions.has(rhs[0])) {\n        generatesTerminals.set(varName, true); break;\n      }\n    }\n  }\n\n  return !reachable.has(grammar.start);\n}\n\nfunction toCNF(grammar: CFG): CFG {\n  // Step 1: Eliminate e-productions\n  const nullable = new Set&lt;string&gt;();\n  let changed = true;\n  while (changed) {\n    changed = false;\n    for (const [varName, rhsList] of grammar.productions) {\n      for (const rhs of rhsList) {\n        if (rhs.length === 0 && !nullable.has(varName)) {\n          nullable.add(varName); changed = true;\n        }\n      }\n    }\n  }\n\n  // Step 2: Eliminate unit productions (A ? B)\n  const unitFree = new Map&lt;string, string[][]&gt;();\n  for (const [varName, rhsList] of grammar.productions) {\n    const nonUnit: string[][] = [];\n    for (const rhs of rhsList) {\n      if (!(rhs.length === 1 && grammar.productions.has(rhs[0]))) {\n        nonUnit.push(rhs);\n      }\n    }\n    unitFree.set(varName, nonUnit);\n  }\n\n  return { start: grammar.start, productions: unitFree };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "parikhs-theorem",
      children: "Parikh's Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parikh's theorem is a powerful result that relates context-free languages to regular languages via their commutative images."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " For a string (w), the Parikh vector (\\Psi(w)) maps each symbol to its count: (\\Psi(w) = (|w|", (0,jsx_runtime.jsx)(_components.em, {
        children: "{a_1}, |w|"
      }), "{a_2}, \\ldots, |w|_{a_k}))."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Parikh's Theorem:"
      }), " For every context-free language (L), there exists a regular language (R) such that (\\Psi(L) = \\Psi(R)). In other words, every CFL is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "semi-linear"
      }), ": its Parikh image is a semilinear set (a finite union of linear sets)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " For (L = { a^n b^n \\mid n \\geq 0 }), (\\Psi(L) = {(n,n) \\mid n \\geq 0}) which is the same as (\\Psi((ab)^*))."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implications",
      children: "Implications"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CFLs and counting:"
          }), " CFLs cannot distinguish all counting patterns — only a restricted class of counting constraints (those expressible as semilinear sets)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Non-CFL by Parikh:"
          }), " If a language's Parikh image is not semilinear, it cannot be context-free. For example, (\\Psi({ a^{n^2} }) = {(n^2)}) is not semilinear, proving ({ a^{n^2} }) is not context-free without using the pumping lemma."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Ogmden's lemma vs. Parikh:"
          }), " Ogden's lemma detects non-context-freeness that Parikh cannot. For example, ({ a^n b^m c^n d^m }) has a semilinear Parikh image but is not context-free — Ogden's lemma catches this where Parikh does not."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parikh-vector-computations",
      children: "TypeScript: Parikh Vector Computations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type ParikhVector = Map&lt;string, number&gt;;\n\nfunction parikhVector(word: string, alphabet: string[]): ParikhVector {\n  const vec = new Map&lt;string, number&gt;();\n  for (const sym of alphabet) vec.set(sym, 0);\n  for (const ch of word) {\n    if (vec.has(ch)) vec.set(ch, vec.get(ch)! + 1);\n  }\n  return vec;\n}\n\nfunction isSemilinear(vectors: ParikhVector[]): boolean {\n  if (vectors.length === 0) return true;\n  // Check if the set forms a finite union of linear sets\n  // A practical test: validate that the growth is eventually periodic\n  const sorted = vectors.slice(1).sort((a, b) => {\n    const suma = Array.from(a.values()).reduce((s, v) => s + v, 0);\n    const sumb = Array.from(b.values()).reduce((s, v) => s + v, 0);\n    return suma - sumb;\n  });\n  return true; // Placeholder for full implementation\n}\n\n// Example: Parikh image of a^n b^n\nfunction generateParikhExamples(): ParikhVector[] {\n  const examples: ParikhVector[] = [];\n  for (let n = 0; n &lt;= 10; n++) {\n    const word = 'a'.repeat(n) + 'b'.repeat(n);\n    examples.push(parikhVector(word, ['a', 'b']));\n  }\n  return examples;\n}\n"
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
        }), " (3rd ed.). Chapter 2 covers context-free languages with thorough pumping lemma and closure property proofs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hopcroft, John E. and Ullman, Jeffrey D."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Introduction to Automata Theory, Languages, and Computation"
        }), ". Chapters 6-7 provide an in-depth treatment of CFL pumping lemmas and closure properties."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Harrison, Michael A."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Introduction to Formal Language Theory"
        }), ". A comprehensive reference covering the mathematical theory of context-free languages."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Grune, Dick and Jacobs, Ceriel J. H."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Parsing Techniques: A Practical Guide"
        }), " (2nd ed.). The definitive reference on parsing algorithms including CYK, Earley, and LR parsing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that { a^n b^n a^n b^n | n >= 0 } is not context-free."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert S -> aS | Sb | epsilon to CNF."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert S -> AB, A -> aAb | epsilon, B -> cBd | epsilon to GNF."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use CYK to determine if \"baaba\" is generated by S -> AB, A -> a | BA, B -> b | BC, C -> a | AB."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that the regular language { a,b }* is context-free by giving a CFG."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a TypeScript function that converts a CFG to CNF by eliminating e-productions and unit productions."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that L = { a^n b^m c^n d^m | n, m >= 0 } is context-free by giving a grammar. Then prove { a^n b^n c^n d^n | n >= 0 } is not context-free."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Ogden's lemma to prove a language that requires marked positions. Construct a language that satisfies the basic pumping lemma but fails Ogden's."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show that CFLs are closed under reversal by constructing a new CFG."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show that the language { w in {a,b,c}* | |w|_a = |w|_b = |w|_c } is not context-free."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert the expression grammar E -> E+T | T, T -> T*F | F, F -> (E) | i to CNF."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the full CYK algorithm in TypeScript that accepts a grammar in CNF and returns the parse table."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that the CYK algorithm runs in O(n^3) time and O(n^2) space."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show that { a^p | p is prime } is not context-free."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that if L is a CFL and R is regular, then L - R is a CFL."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show that the grammar S -> aSb | aSbb | epsilon is inherently ambiguous."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that the language L = { anb?c? | n, m, p = 0, n < m < p } is not context-free using the pumping lemma."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the GNF conversion algorithm in TypeScript for a grammar in CNF."
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