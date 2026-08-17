"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[31148],{

/***/ 22541
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_theory_of_computation_15_advanced_complexity_md_8cd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-theory-of-computation-15-advanced-complexity-md-8cd.json
const site_docs_courses_theory_of_computation_15_advanced_complexity_md_8cd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/theory-of-computation/15-advanced-complexity","title":"Chapter 15: Advanced Complexity Topics","description":"Previous Applications of Automata Theory","source":"@site/docs/courses/theory-of-computation/15-advanced-complexity.md","sourceDirName":"courses/theory-of-computation","slug":"/theory-of-computation/15-advanced-complexity","permalink":"/ai-engineering-journey/theory-of-computation/15-advanced-complexity","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"id":"15-advanced-complexity","slug":"/theory-of-computation/15-advanced-complexity","title":"Chapter 15: Advanced Complexity Topics","sidebar_label":"Chapter 15: Advanced Complexity Topics","sidebar_position":15},"sidebar":"course-theory-of-computation","previous":{"title":"Chapter 14: Space Complexity","permalink":"/ai-engineering-journey/theory-of-computation/14-space-complexity"},"next":{"title":"Chapter 16: Applications of Automata Theory","permalink":"/ai-engineering-journey/theory-of-computation/16-applications"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/theory-of-computation/15-advanced-complexity.md


const frontMatter = {
	id: '15-advanced-complexity',
	slug: '/theory-of-computation/15-advanced-complexity',
	title: 'Chapter 15: Advanced Complexity Topics',
	sidebar_label: 'Chapter 15: Advanced Complexity Topics',
	sidebar_position: 15
};
const contentTitle = 'Chapter 15: Advanced Complexity Topics';

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
  "value": "14.1 The BQP Complexity Class",
  "id": "141-the-bqp-complexity-class",
  "level": 3
}, {
  "value": "14.3 Log-Space Reductions and Completeness",
  "id": "143-log-space-reductions-and-completeness",
  "level": 3
}, {
  "value": "14.4 The Polynomial Hierarchy (PH)",
  "id": "144-the-polynomial-hierarchy-ph",
  "level": 3
}, {
  "value": "14.5 co-NP",
  "id": "145-co-np",
  "level": 3
}, {
  "value": "14.6 Circuit Complexity",
  "id": "146-circuit-complexity",
  "level": 3
}, {
  "value": "14.7 Interactive Proofs (IP)",
  "id": "147-interactive-proofs-ip",
  "level": 3
}, {
  "value": "14.8 Probabilistic Complexity (BPP)",
  "id": "148-probabilistic-complexity-bpp",
  "level": 3
}, {
  "value": "14.9 Probabilistically Checkable Proofs (PCP)",
  "id": "149-probabilistically-checkable-proofs-pcp",
  "level": 3
}, {
  "value": "14.10 The Landscape of Complexity Classes",
  "id": "1410-the-landscape-of-complexity-classes",
  "level": 3
}, {
  "value": "14.11 MA and AM: Merlin-Arthur Games",
  "id": "1411-ma-and-am-merlin-arthur-games",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 14.1: MIN-CIRCUIT is in Σ₂",
  "id": "example-141-min-circuit-is-in-σ",
  "level": 3
}, {
  "value": "Example 14.2: Graph Non-Isomorphism ∈ IP",
  "id": "example-142-graph-non-isomorphism--ip",
  "level": 3
}, {
  "value": "Example 14.3: BPP = P Under Derandomization Assumptions",
  "id": "example-143-bpp--p-under-derandomization-assumptions",
  "level": 3
}, {
  "value": "Example 14.4: PCP and Hardness of Approximation",
  "id": "example-144-pcp-and-hardness-of-approximation",
  "level": 3
}, {
  "value": "Example 14.5: The Natural Proofs Barrier",
  "id": "example-145-the-natural-proofs-barrier",
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
  "value": "TypeScript Interactive Proof Protocol Simulator",
  "id": "typescript-interactive-proof-protocol-simulator",
  "level": 2
}, {
  "value": "TypeScript Circuit Complexity Example",
  "id": "typescript-circuit-complexity-example",
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
  "value": "TypeScript Implementation: P vs NP Framework and NP-Completeness Verifier",
  "id": "typescript-implementation-p-vs-np-framework-and-np-completeness-verifier",
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
        id: "chapter-15-advanced-complexity-topics",
        children: "Chapter 15: Advanced Complexity Topics"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/14-space-complexity",
          children: "Space Complexity"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/16-applications",
          children: "Applications of Automata Theory"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define and understand the classes L and NL in depth."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the polynomial hierarchy and its relationship to P and NP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the relationship between co-NP and NP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand Boolean circuit complexity."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize the importance of circuit lower bounds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the concept of natural proofs and barriers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explore interactive proofs and the class IP."
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
            children: "Polynomial Hierarchy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alternating quantifier classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beyond NP and co-NP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size/depth of Boolean circuits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-uniform computation model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interactive Proofs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP = PSPACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verifier convinced by powerful prover"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PCP Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP = PCP(log n, 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic verification of proofs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Barriers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relativization, natural proofs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Why P ? NP is hard to prove"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Log-Space Reductions] --> B[Polynomial Hierarchy]\n    B --> C[Circuit Complexity]\n    C --> D[Interactive Proofs]\n    D --> E[BPP]\n    E --> F[PCP Theorem]\n    F --> G[Barriers]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/theory-of-computation/14-advanced-complexity.png",
        alt: "Advanced Complexity Topics Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "141-the-bqp-complexity-class",
      children: "14.1 The BQP Complexity Class"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BQP"
      }), " (Bounded-error Quantum Polynomial Time) is the class of problems solvable by a quantum computer in polynomial time with error probability = 1/3."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Relationships:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P ? BQP ? PSPACE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BQP contains problems not known to be in P (e.g., factoring, discrete log)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BQP is believed to be incomparable with NP (neither contains the other)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shor's algorithm: factoring ? BQP (exponential speedup over classical)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Grover's algorithm: unstructured search ? BQP (quadratic speedup)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Significance:"
      }), " If BQP ? NP, then quantum computers can efficiently solve problems whose solutions cannot even be verified classically — a profound expansion of tractable computation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "143-log-space-reductions-and-completeness",
      children: "14.3 Log-Space Reductions and Completeness"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "log-space reduction"
      }), " (A =_L B) is a reduction computable in O(log n) space (on a TM with read-only input and write-only output)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "=_L is transitive."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If A =_L B and B ? L, then A ? L."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NL-completeness is defined using =_L reductions (not =_P)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PATH"
      }), " is NL-complete under log-space reductions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "144-the-polynomial-hierarchy-ph",
      children: "14.4 The Polynomial Hierarchy (PH)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The polynomial hierarchy extends the concepts of P, NP, and co-NP using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "oracle machines"
      }), " with alternating quantifiers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition by oracle machines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Σ₀ = Π₀ = Δ₀ = P"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Σ₁ = NP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Π₁ = co-NP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For i ≥ 1: Σ_{i+1} = NP^{Σ_i} (NP with oracle for Σ_i)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Π_{i+1} = co-Σ_{i+1}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Δ_{i+1} = P^{Σ_i}"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition by quantifiers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Σᵢ: problems of the form { x | ∃y₁ ∀y₂ ∃y₃ … Qᵢyᵢ R(x, y₁, …, yᵢ) }\nwhere Qᵢ = ∃ if i is odd, ∀ if i is even."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Πᵢ: same but starting with ∀."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each yⱼ has length polynomial in |x|."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R is a polynomial-time computable predicate."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PH = ∪", (0,jsx_runtime.jsx)(_components.em, {
          children: "{i ≥ 0} Σ_i = ∪"
        }), "{i ≥ 0} Π_i"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If Σ_i = Π_i for any i, then PH collapses to Σ_i."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If P = NP, then PH collapses to P."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If PH collapses, it's considered evidence against the equality."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problems in higher levels:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MIN-CIRCUIT (is a given Boolean circuit minimal?) ∈ Σ₂."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SAT ∈ Σ₁ = NP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UNSAT ∈ Π₁ = co-NP."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "145-co-np",
      children: "14.5 co-NP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "co-NP"
      }), " = { L | L̅ ∈ NP }."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A problem is in co-NP if \"no\" instances have short proofs (certificates for rejection)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example: TAUTOLOGY"
      }), " = { φ | φ is true for all assignments } ∈ co-NP."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A \"no\" instance has a certificate: a satisfying assignment for ¬φ."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "But a \"yes\" instance (a tautology) has no obvious short proof."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Relationship:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NP ≠ co-NP is believed but not proven."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If NP ≠ co-NP, then P ≠ NP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For the complement of an NP-complete problem, we don't expect short proofs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "146-circuit-complexity",
      children: "14.6 Circuit Complexity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Boolean circuit"
      }), " is a directed acyclic graph (DAG) where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leaves = input variables (x₁, …, xₙ)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal nodes = logic gates (AND, OR, NOT)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One root = output."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Circuit parameters:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Size:"
        }), " Number of gates (analogous to time)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Depth:"
        }), " Length of longest path from input to output (analogous to parallel time)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "P/poly:"
      }), " Languages decidable by polynomial-size Boolean circuits (non-uniform model)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P ⊆ P/poly (any polynomial-time TM can be simulated by polynomial-size circuits)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "There exist undecidable languages in P/poly (since circuits can encode arbitrary finite information)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Karp-Lipton theorem:"
        }), " If NP ⊆ P/poly, then PH collapses to Σ₂."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Circuit lower bounds:"
      }), "\nProving that certain functions require large circuits is notoriously difficult."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NEXP ⊂ P/poly is known (there exist problems requiring exponential-size circuits)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "But we cannot prove that SAT requires super-polynomial circuits (this would imply P ≠ NP)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Natural proofs barrier"
        }), " (Razborov-Rudich): any circuit lower bound proof that is \"natural\" would also prove that certain cryptographic primitives don't exist, suggesting that standard proof techniques are insufficient."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NC (Nick's Class):"
      }), " Problems solvable by circuits with polynomial size and polylogarithmic depth."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NC ⊆ P (NC represents efficient parallel computation)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P-complete problems (like CIRCUIT-VALUE) are those not believed to be in NC."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "147-interactive-proofs-ip",
      children: "14.7 Interactive Proofs (IP)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "interactive proof system"
      }), " consists of a prover (P, unbounded computational power) and a verifier (V, probabilistic polynomial time). V exchanges messages with P and decides whether to accept the input."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Class IP:"
      }), " Languages with interactive proof systems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Important results:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IP = PSPACE"
        }), " (Shamir's theorem, 1990). This is a landmark result showing that interactive proofs are enormously powerful → equivalent to polynomial space."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "co-NP ⊆ IP (since co-NP ⊆ PSPACE = IP). This means tautologies have interactive proofs."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Graph Non-Isomorphism"
        }), " ∈ IP (actually in AM, a related class)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Significance:"
      }), " Interactive proofs show that a computationally bounded verifier can be convinced of the truth of statements far beyond what they could verify deterministically → if interaction and randomization are allowed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "148-probabilistic-complexity-bpp",
      children: "14.8 Probabilistic Complexity (BPP)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BPP"
      }), " (Bounded-error Probabilistic Polynomial time): Languages decidable by a probabilistic TM with error probability ≤ 1/3 on every input."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Important facts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P ⊆ BPP ⊆ PSPACE."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It's believed that BPP = P (derandomization)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adleman's theorem:"
        }), " BPP ⊆ P/poly (every BPP language has polynomial-size circuits)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sipser-Gács theorem:"
        }), " BPP ⊆ Σ₂ ∩ Π₂ (BPP is in the second level of the polynomial hierarchy)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "149-probabilistically-checkable-proofs-pcp",
      children: "14.9 Probabilistically Checkable Proofs (PCP)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PCP theorem"
      }), " (Arora, Lund, Motwani, Sudan, Szegedy, 1992):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NP = PCP(log n, 1)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      }), " Every NP problem has a proof that can be verified by reading only a constant number of bits of the proof, using O(log n) random bits."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Revolutionized the study of approximation algorithms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shows that for many NP-hard optimization problems, finding approximate solutions within certain ratios is also NP-hard."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used to prove hardness of approximation for MAX-3SAT, MAX-CUT, etc."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1410-the-landscape-of-complexity-classes",
      children: "14.10 The Landscape of Complexity Classes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EXPSPACE\n    ↑\n   PSPACE  = IP\n    ↑\n   PH (Polynomial Hierarchy)\n  /  \\\n Σ₂   Π₂\n  \\  /\n   NP    co-NP\n  /  \\\n  NP∩co-NP\n   |\n   P\n  / \\\n  NC  BPP\n /\nL\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note: Many containments are not known to be strict."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1411-ma-and-am-merlin-arthur-games",
      children: "14.11 MA and AM: Merlin-Arthur Games"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MA"
      }), " (Merlin-Arthur): Languages with a proof system where Merlin (unbounded) sends a single message, and Arthur (BPP verifier) decides."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AM"
      }), " (Arthur-Merlin): Languages where Arthur sends random bits first, then Merlin responds."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Relationships:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NP ? MA ? AM ? ?2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Graph Non-Isomorphism ? AM (but not known to be in NP)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If co-NP ? AM, then PH collapses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MA and AM are considered \"interactive proof lite\" — limited interaction but more than NP"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Significance:"
      }), " These classes model public-coin proof systems where the verifier only sends random bits. Goldwasser-Sipser showed public-coin = private-coin (IP = AM with poly rounds)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-141-min-circuit-is-in-σ",
      children: "Example 14.1: MIN-CIRCUIT is in Σ₂"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MIN-CIRCUIT = { ⟨C⟩ | C is a Boolean circuit with no smaller equivalent circuit }."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To check if C ∈ MIN-CIRCUIT: For every smaller circuit C' (∀), there exists an input x such that C(x) ≠ C'(x). This is ∀∃ = Π₂ formulation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Or: There exists no smaller equivalent circuit. Actually the logical formulation:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C is minimal iff ∀C' (|C'| < |C|) ⇒ ∃x (C(x) ≠ C'(x))."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This is ∀C' ∃x (|C'| < |C| ⇒ C(x) ≠ C'(x)) → a ∀∃ pattern = Π₂."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Equivalent: the complement (∃C') is in Σ₂."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-142-graph-non-isomorphism--ip",
      children: "Example 14.2: Graph Non-Isomorphism ∈ IP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given graphs G₁ and G₂, the prover wants to convince the verifier they are not isomorphic."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Protocol:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verifier: picks random permutation π, computes H = π(G_b) where b ∈ {1,2} is random."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verifier sends H to prover."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prover: responds with b', claiming H came from G_{b'}."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verifier: accepts if b = b'."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If G₁ ≅ G₂: the prover cannot know b (H could come from either graph), so the prover succeeds with probability ≤ 1/2.\nIf G₁ ≇ G₂: the prover can determine b (H came from exactly one graph), so the prover always succeeds."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-143-bpp--p-under-derandomization-assumptions",
      children: "Example 14.3: BPP = P Under Derandomization Assumptions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If there exist functions with exponential circuit complexity (true under plausible assumptions), then any BPP algorithm can be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "derandomized"
      }), ": replace random bits with the output of a pseudorandom generator that uses only O(log n) truly random bits. This is the core of the hypothesis that BPP = P."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-144-pcp-and-hardness-of-approximation",
      children: "Example 14.4: PCP and Hardness of Approximation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For MAX-3SAT (find an assignment satisfying the maximum number of clauses):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The PCP theorem implies: for some ε > 0, it's NP-hard to distinguish satisfiable 3CNF formulas from those where at most (1−ε) fraction of clauses are satisfiable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This means approximating MAX-3SAT within a factor of (1−ε) is NP-hard."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-145-the-natural-proofs-barrier",
      children: "Example 14.5: The Natural Proofs Barrier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Razborov and Rudich showed that any \"natural\" proof that P ≠ NP (a proof that uses a combinatorial property of Boolean functions that is both constructive and large) would imply that certain cryptographic pseudorandom generators don't exist. Since most experts believe such generators do exist, natural proofs cannot work."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This explains why progress on circuit lower bounds has been slow → the tools that would traditionally work are blocked by this barrier."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP (? quantifier)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "?1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "co-NP (? quantifier)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TAUTOLOGY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP^{NP} (??)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIN-CIRCUIT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "?2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "co-NP^{NP} (??)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complement of MIN-CIRCUIT"
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
            children: "IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interactive proofs = PSPACE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP = PCP(log n, 1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounded-error probabilistic poly time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P/poly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial-size circuits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poly-size, polylog-depth circuits"
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
            children: "Advanced Complexity Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cryptography"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-knowledge proofs (IP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approximation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCP ? hardness of approximation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel computing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NC = efficient parallel algorithms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit lower bounds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantum computing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BQP and relation to classical classes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-interactive-proof-protocol-simulator",
      children: "TypeScript Interactive Proof Protocol Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Simulates an interactive proof protocol for Graph Non-Isomorphism\n// Uses a simple graph representation with adjacency matrices\n\ntype Graph = number[][];\n\nfunction generatePermutation(n: number): number[] {\n  const perm = Array.from({ length: n }, (_, i) => i);\n  // Fisher-Yates shuffle\n  for (let i = n - 1; i > 0; i--) {\n    const j = Math.floor(Math.random() * (i + 1));\n    [perm[i], perm[j]] = [perm[j], perm[i]];\n  }\n  return perm;\n}\n\nfunction applyPermutation(g: Graph, perm: number[]): Graph {\n  const n = g.length;\n  const result: Graph = Array.from({ length: n }, () => new Array(n).fill(0));\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < n; j++) {\n      result[perm[i]][perm[j]] = g[i][j];\n    }\n  }\n  return result;\n}\n\nfunction areIsomorphic(g1: Graph, g2: Graph): boolean {\n  const n = g1.length;\n  // Check all permutations (n! — only for small n)\n  const allPerms = (arr: number[]): number[][] => {\n    if (arr.length <= 1) return [arr];\n    const result: number[][] = [];\n    for (let i = 0; i < arr.length; i++) {\n      const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];\n      for (const p of allPerms(rest)) {\n        result.push([arr[i], ...p]);\n      }\n    }\n    return result;\n  };\n\n  const vertices = Array.from({ length: n }, (_, i) => i);\n  for (const perm of allPerms(vertices)) {\n    if (JSON.stringify(applyPermutation(g1, perm)) === JSON.stringify(g2)) {\n      return true;\n    }\n  }\n  return false;\n}\n\n// Interactive proof for non-isomorphism\nfunction interactiveProof(\n  g1: Graph,\n  g2: Graph,\n  proverResponse: (h: Graph) => number\n): boolean {\n  const verifierBit = Math.random() < 0.5 ? 1 : 2;\n  const perm = generatePermutation(g1.length);\n  const h = verifierBit === 1\n    ? applyPermutation(g1, perm)\n    : applyPermutation(g2, perm);\n\n  const proverBit = proverResponse(h);\n  return proverBit === verifierBit;\n}\n\n// Honest prover (knows the non-isomorphism)\nfunction honestProver(h: Graph, g1: Graph, g2: Graph): number {\n  return areIsomorphic(h, g1) ? 1 : 2;\n}\n\n// Dishonest prover (guesses randomly)\nfunction dishonestProver(): number {\n  return Math.random() < 0.5 ? 1 : 2;\n}\n\n// Example\nconst g1: Graph = [\n  [0, 1, 0],\n  [1, 0, 1],\n  [0, 1, 0],\n];\n\nconst g2: Graph = [\n  [0, 1, 1],\n  [1, 0, 0],\n  [1, 0, 0],\n];\n\nconsole.log(\"Non-isomorphic:\", !areIsomorphic(g1, g2)); // true (one is a path, the other is a triangle)\n\n// Run protocol 10 times\nlet successes = 0;\nfor (let i = 0; i < 10; i++) {\n  const hProver = (h: Graph) => honestProver(h, g1, g2);\n  if (interactiveProof(g1, g2, hProver)) successes++;\n}\nconsole.log(`Honest prover success: ${successes}/10`); // 10/10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-circuit-complexity-example",
      children: "TypeScript Circuit Complexity Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Boolean circuit representation and evaluation\n// A circuit is a DAG with gates\n\ntype GateType = \"AND\" | \"OR\" | \"NOT\" | \"INPUT\";\n\nclass CircuitGate {\n  constructor(\n    public id: number,\n    public type: GateType,\n    public inputs: number[],\n    public value?: boolean\n  ) {}\n}\n\nclass BooleanCircuit {\n  constructor(\n    public output: number,\n    public gates: Map<number, CircuitGate>\n  ) {}\n\n  evaluate(inputs: boolean[]): boolean {\n    const values = new Map<number, boolean>();\n\n    // Set input values (gates 0..n-1 are inputs)\n    let inputIdx = 0;\n    for (const [id, gate] of this.gates) {\n      if (gate.type === \"INPUT\") {\n        values.set(id, inputs[inputIdx++]);\n      }\n    }\n\n    // Topological evaluation\n    const evaluateGate = (id: number): boolean => {\n      if (values.has(id)) return values.get(id)!;\n      const gate = this.gates.get(id)!;\n      const inputVals = gate.inputs.map(evaluateGate);\n      let result: boolean;\n      switch (gate.type) {\n        case \"AND\": result = inputVals.every(Boolean); break;\n        case \"OR\": result = inputVals.some(Boolean); break;\n        case \"NOT\": result = !inputVals[0]; break;\n        default: throw new Error(\"Unknown gate\");\n      }\n      values.set(id, result);\n      return result;\n    };\n\n    return evaluateGate(this.output);\n  }\n\n  size(): number {\n    return this.gates.size;\n  }\n}\n\n// Example: XOR circuit: (x OR y) AND NOT (x AND y)\nconst xorCircuit = new BooleanCircuit(5, new Map([\n  [0, new CircuitGate(0, \"INPUT\", [])],\n  [1, new CircuitGate(1, \"INPUT\", [])],\n  [2, new CircuitGate(2, \"OR\", [0, 1])],\n  [3, new CircuitGate(3, \"AND\", [0, 1])],\n  [4, new CircuitGate(4, \"NOT\", [3])],\n  [5, new CircuitGate(5, \"AND\", [2, 4])],\n]));\n\nconsole.log(xorCircuit.evaluate([false, false])); // false\nconsole.log(xorCircuit.evaluate([false, true]));  // true\nconsole.log(xorCircuit.evaluate([true, false]));  // true\nconsole.log(xorCircuit.evaluate([true, true]));   // false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " The polynomial hierarchy collapses to P if:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) L = NL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) P = NP ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) PSPACE = EXPTIME"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) NP = co-NP"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** If P = NP, the entire polynomial hierarchy collapses to P.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " Shamir's theorem proved:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) P = NP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) IP = PSPACE ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) NP = PCP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) BPP = P"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Interactive proofs characterize PSPACE — a landmark result from 1990.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " The PCP theorem states NP = PCP(log n, ___):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) 0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) 1 ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) n"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) log n"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** NP = PCP(log n, 1) — proofs verifiable with O(log n) random bits and constant queries.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " The natural proofs barrier shows:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) P ? NP is proven"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Standard proof techniques can't resolve P vs NP ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Circuit lower bounds are easy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Cryptography is impossible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Razborov-Rudich: any \"natural\" circuit lower bound proof would imply cryptographic PRGs don't exist.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " BPP represents problems solvable with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Deterministic algorithms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Probabilistic algorithms with bounded error ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Nondeterministic algorithms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Quantum algorithms"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** BPP = probabilistic polynomial time with error = 1/3 on every input.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The polynomial hierarchy is deep but mostly unknown."
          }), " PH contains problems that are harder than NP but probably not PSPACE-complete. In practice, most problems found in algorithms are in NP, and the real distinction is between P and NP-complete."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Circuit complexity has practical implications."
          }), " The P/poly result means that non-uniform computations (circuits) can potentially solve problems that uniform machines cannot. This relates directly to hardware acceleration, FPGAs, and specialized processors."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interactive proofs connect to zero-knowledge."
          }), " The equivalence IP = PSPACE means that any problem solvable with polynomial space can be verified through interaction. Zero-knowledge proofs, used in modern cryptography, are a special case where the prover reveals nothing except the truth of the statement."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The PCP theorem changes approximation."
          }), " Before PCP, approximation was heuristic. After PCP, we know that some NP-complete problems have hard thresholds: you can approximate within some factor efficiently, but improving beyond the threshold is NP-hard."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-p-vs-np-framework-and-np-completeness-verifier",
      children: "TypeScript Implementation: P vs NP Framework and NP-Completeness Verifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Advanced Complexity: Polynomial Hierarchy and Circuit Complexity\n\ntype ProblemInstance = {\n  name: string;\n  size: number;\n  verify: (certificate: string) => boolean;\n};\n\nclass PvsNP {\n  static ladnerTheorem(): string {\n    return \"Ladner's Theorem (1975): If P ? NP, then NPI (NP-intermediate) is non-empty — \" +\n      \"there exist problems in NP that are neither in P nor NP-complete. \" +\n      \"Examples believed to be in NPI: Graph Isomorphism, Factoring.\";\n  }\n\n  static polynomialHierarchy(): Map<string, string> {\n    const ph = new Map<string, string>();\n    ph.set(\"S0P = ?0P = P\", \"Base level: deterministic polynomial time\");\n    ph.set(\"S1P = NP\", \"? quantifier: existential problems\");\n    ph.set(\"?1P = co-NP\", \"? quantifier: universal problems\");\n    ph.set(\"S2P = NP^NP\", \"??: problems with existential+universal quantifiers\");\n    ph.set(\"?2P = co-NP^NP\", \"??: complement\");\n    ph.set(\"PH = ?? S?P\", \"Polynomial hierarchy (may collapse at some level)\");\n    return ph;\n  }\n\n  static NPCompletenessReductionChain(): string[] {\n    return [\n      \"SAT (Cook-Levin)\",\n      \"   ? polynomial reduction\",\n      \"3-SAT\",\n      \"   ?\",\n      \"INDEPENDENT SET ? VERTEX COVER ? HAMILTONIAN PATH ? TSP\",\n      \"   ?                      ?\",\n      \"CLIQUE                   SUBSET SUM ? BIN PACKING ? PARTITION\",\n      \"   ?\",\n      \"SET COVER ? HITTING SET ? INTEGER PROGRAMMING\"\n    ];\n  }\n\n  static isPolynomialReduction(reductionSize: (n: number) => number): boolean {\n    return reductionSize(10) < 100 && reductionSize(100) < 10000;\n  }\n}\n\nclass CircuitComplexity {\n  static circuitDepth(circuit: { gates: string[]; inputs: number }): number {\n    // Estimate circuit depth by gate dependency analysis\n    let depth = 0;\n    const gateDepths = new Map<string, number>();\n    for (const gate of circuit.gates) {\n      const [type, ...deps] = gate.split(\" \");\n      const maxDep = Math.max(0, ...deps.map(d => gateDepths.get(d) || 0));\n      gateDepths.set(gate, maxDep + 1);\n      depth = Math.max(depth, maxDep + 1);\n    }\n    return depth;\n  }\n\n  static circuitSize(circuit: { gates: string[]; inputs: number }): number {\n    return circuit.inputs + circuit.gates.length;\n  }\n\n  static pOverPoly(): string {\n    return \"P/poly = languages decidable by polynomial-size circuits. \" +\n      \"Contains all of P (every P problem has poly-size circuits). \" +\n      \"May contain undecidable problems! (e.g., unary encoding of halting problem) \" +\n      \"Karp-Lipton theorem: If NP ? P/poly, then PH collapses to S2P.\";\n  }\n}\n\nclass InteractiveProof {\n  static IPequalsPSPACE(): string {\n    return \"IP = PSPACE (Shamir, 1990): Every problem solvable with \" +\n      \"polynomial space has an interactive proof system. \" +\n      \"Conversely, any problem with an interactive proof requires \" +\n      \"only polynomial space. This includes problems not known to be in NP.\";\n  }\n\n  static zeroKnowledgeProof(fact: string): string[] {\n    return [\n      `Zero-Knowledge Proof for: ${fact}`,\n      \"Prover P knows a witness w for statement x.\",\n      \"Verifier V is convinced that P knows w, but learns nothing about w.\",\n      \"\",\n      \"Graph Isomorphism example:\",\n      \"1. P sends H = p(G1) (random permutation of G1).\",\n      \"2. V randomly asks: show isomorphism G1 ? H or G2 ? H.\",\n      \"3. P reveals appropriate isomorphism (or both if she knows both).\",\n      \"4. Repeat k times: probability of cheating = 2^(-k).\",\n      \"\",\n      \"Real-world use: zk-SNARKs in cryptocurrencies, identity verification.\"\n    ];\n  }\n}\n\nclass PCPTheorem {\n  static statement(): string {\n    return \"PCP Theorem (Arora-Safra, 1992): NP = PCP(O(log n), O(1)). \" +\n      \"Every NP problem has a probabilistically checkable proof where \" +\n      \"the verifier reads only O(log n) random bits and O(1) query bits. \" +\n      \"This revolutionized approximation algorithms — many optimization \" +\n      \"problems have hard thresholds beyond which approximation is NP-hard.\";\n  }\n}\n\nconsole.log(PvsNP.ladnerTheorem());\nconsole.log([...PvsNP.polynomialHierarchy().entries()].map(([k, v]) => `  ${k}: ${v}`).join(\"\\n\"));\nconsole.log(PvsNP.NPCompletenessReductionChain().join(\"\\n\"));\n\nconst circ = { gates: [\"AND a b\", \"OR c d\", \"NOT e\", \"AND f g\"], inputs: 4 };\nconsole.log(`Circuit depth: ${CircuitComplexity.circuitDepth(circ)}`);\nconsole.log(`Circuit size: ${CircuitComplexity.circuitSize(circ)}`);\nconsole.log(CircuitComplexity.pOverPoly());\nconsole.log(InteractiveProof.IPequalsPSPACE());\nconsole.log(PCPTheorem.statement());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -----------------------------------------------------\n// Cook-Levin Reduction Helper — demonstrates the\n// core idea of the Cook-Levin theorem: encoding a TM\n// computation as a Boolean formula.\n// -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["class CookLevinHelper {\n// Build a Boolean formula that encodes the acceptance\n// of a simple TM on an input of length n.\nstatic buildEncoding(tmStates: number, tapeLength: number, inputSymbols: string[]): string[] {\nconst clauses: string[] = [];\nconst varName = (t: number, i: number, s: string) => ", (0,jsx_runtime.jsx)(_components.code, {
        children: "X${t}_${i}_${s}"
      }), ";"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Each cell contains exactly one symbol\nfor (let t = 0; t &lt; tmStates; t++) {\n  for (let i = 0; i &lt; tapeLength; i++) {\n    const symbols = inputSymbols;\n    // At least one symbol\n    clauses.push(`(${symbols.map(s => varName(t, i, s)).join(\" ? \")})`);\n    // At most one symbol (pairwise)\n    for (let a = 0; a &lt; symbols.length; a++) {\n      for (let b = a + 1; b &lt; symbols.length; b++) {\n        clauses.push(`(¬${varName(t, i, symbols[a])} ? ¬${varName(t, i, symbols[b])})`);\n      }\n    }\n  }\n}\n\n// Initial configuration\nclauses.push(`(${varName(0, 0, \"q0_initial\")})`);\nfor (let i = 0; i &lt; tapeLength; i++) {\n  clauses.push(`(${varName(0, i, inputSymbols[i] || \"blank\")})`);\n}\n\n// Acceptance condition\nclauses.push(`(${varName(tmStates - 1, 0, \"q_accept\")})`);\n\nreturn clauses;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static explanation(): string[] {\nreturn [\n\"Cook-Levin Theorem: SAT is NP-complete\",\n\"\",\n\"Key insight: Any NP problem can be solved by a\",\n\"nondeterministic TM in polynomial time. The TM's\",\n\"computation can be encoded as a Boolean formula\",\n\"that is satisfiable iff the TM accepts.\",\n\"\",\n\"Encoding components:\",\n\"  1. Variables X_{t,i,s}: at time t, cell i contains symbol s\",\n\"  2. Clauses for initial configuration\",\n\"  3. Clauses for valid transitions (local)\",\n\"  4. Clauses for acceptance\",\n\"\",\n\"Formula size: O(p(n)³) where p(n) is the TM's runtime.\",\n\"This proves SAT is NP-hard, and since SAT ? NP,\",\n\"SAT is NP-complete.\"\n];\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -----------------------------------------------------\n// NP-Completeness Checker — given a problem's properties,\n// checks if it satisfies the conditions for NP-completeness.\n// -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["class NPCompletenessChecker {\nstatic check(name: string, inNP: boolean, hasReductionFromSAT: boolean): string[] {\nconst output: string[] = [];\noutput.push(", (0,jsx_runtime.jsx)(_components.code, {
        children: "NP-Completeness Check: ${name}"
      }), ");\noutput.push(\"=\".repeat(40));\noutput.push(", (0,jsx_runtime.jsx)(_components.code, {
        children: "  1. Is the problem in NP?         ${inNP ? \"?\" : \"?\"}"
      }), ");\noutput.push(", (0,jsx_runtime.jsx)(_components.code, {
        children: "  2. SAT =_P this problem?         ${hasReductionFromSAT ? \"?\" : \"?\"}"
      }), ");"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (inNP && hasReductionFromSAT) {\n  output.push(\"\\n  Verdict: NP-COMPLETE\");\n  output.push(\"  The problem is among the hardest problems in NP.\");\n} else if (!inNP && hasReductionFromSAT) {\n  output.push(\"\\n  Verdict: NP-HARD (but not known to be in NP)\");\n  output.push(\"  At least as hard as all NP problems, but may not be in NP.\");\n} else if (inNP && !hasReductionFromSAT) {\n  output.push(\"\\n  Verdict: IN NP (but not known to be NP-complete)\");\n  output.push(\"  No polynomial reduction from SAT is known yet.\");\n} else {\n  output.push(\"\\n  Verdict: Not known to be in NP or NP-hard\");\n}\n\nreturn output;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// List of classic NP-complete problems\nstatic classicList(): string[] {\nreturn [\n\"Classic NP-Complete Problems (Karp's 21):\",\n\"\",\n\"  SAT / 3SAT              — Boolean satisfiability\",\n\"  Vertex Cover            — Vertex cover of size k in graph\",\n\"  Clique                  — Clique of size k in graph\",\n\"  Hamiltonian Path/Cycle  — Path visiting all vertices\",\n\"  Traveling Salesman      — Shortest Hamiltonian cycle\",\n\"  Subset Sum              — Subset summing to target\",\n\"  Knapsack                — Max value under weight limit\",\n\"  Graph Coloring          — k-colorability of graph\",\n\"  Set Cover               — Smallest subcollection covering universe\",\n\"  Independent Set         — Independent set of size k\",\n\"  Exact Cover             — Exact cover decision problem\",\n\"  Max Cut                 — Maximum cut in graph\",\n\"  Integer Programming     — ILP feasibility\"\n];\n}\n}"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["// Demo\nconsole.log(CookLevinHelper.explanation().join(\"\\n\"));\nconsole.log(\"\");\nconst enc = CookLevinHelper.buildEncoding(3, 2, [\"0\", \"1\"]);\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "Cook-Levin encoding: ${enc.length} clauses generated"
      }), ");\nenc.slice(0, 5).forEach(c => console.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "  ${c}"
      }), "));\nconsole.log(\"  ...\");\nconsole.log(\"\");\nconsole.log(NPCompletenessChecker.check(\"Traveling Salesman\", true, true).join(\"\\n\"));\nconsole.log(\"\");\nconsole.log(NPCompletenessChecker.classicList().join(\"\\n\"));"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// advanced complexity\n// automata-complexity implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'advanced complexity', data: { topic: 'automata-complexity' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n## Summary\n\n- Log-space reductions define completeness for L and NL.\n- The polynomial hierarchy (PH) extends NP with alternating quantifiers.\n- co-NP contains complement languages of NP; believed to be distinct from NP.\n- Circuit complexity studies the size/depth of Boolean circuits needed for computation.\n- P/poly contains all languages decidable by polynomial-size circuits (may include undecidable problems).\n- Interactive proofs (IP) equal PSPACE — a profound result.\n- The PCP theorem revolutionized approximation algorithms.\n- Major barriers (relativization, natural proofs, algebrization) explain why P vs NP is so difficult.\n\n## Exercises\n\n### Basic\n\n1. Show that if P = NP, then PH collapses to P.\n2. Explain why TAUTOLOGY is in co-NP.\n3. What does it mean for a problem to be co-NP-complete?\n4. Describe the difference between Σ₂ and Π₂ in the polynomial hierarchy.\n5. Show that NC ⊆ P.\n\n### Intermediate\n\n6. Prove that Graph Isomorphism is in NP ∩ co-AM (or at least in NP).\n7. Show that if NP ⊆ P/poly, then PH collapses to Σ₂ (Karp-Lipton theorem sketch).\n8. Explain the PCP theorem and its significance for approximation algorithms.\n9. Show that BPP ⊆ P/poly (Adleman's theorem).\n10. Prove that IP ⊆ PSPACE by describing a polynomial-space algorithm for an arbitrary interactive proof system.\n\n### Advanced\n\n11. Prove Shamir's theorem: IP = PSPACE.\n12. Show that the Graph Non-Isomorphism protocol is sound and complete.\n13. Explain the natural proofs barrier and its implications for circuit complexity.\n14. Prove that co-NP ⊆ IP by showing a protocol for UNSAT.\n15. Show that PH ⊆ PSPACE (the polynomial hierarchy is contained in polynomial space).\n\n## Further Reading\n\n- **Sipser, Michael.** *Introduction to the Theory of Computation* (3rd ed.). Chapters 9-10 cover advanced topics including the polynomial hierarchy, circuit complexity, and interactive proofs.\n- **Arora, Sanjeev and Barak, Boaz.** *Computational Complexity: A Modern Approach*. Chapters 8-11 and 22 provide comprehensive coverage of circuit complexity, randomized computation, the PCP theorem and interactive proofs.\n- **Goldreich, Oded.** *Computational Complexity: A Conceptual Perspective*. Chapters 5 and 9 provide deep coverage of the polynomial hierarchy and interactive proofs.\n- **Goldwasser, Shafi and Sipser, Michael.** \"Private Coins versus Public Coins in Interactive Proof Systems.\" STOC 1986. A foundational paper on interactive proof systems.\n- **Hastad, Johan.** \"Computational Limitations of Small-Depth Circuits.\" MIT Press, 1987. The definitive work on AC0 circuit lower bounds using the switching lemma.\n\n\n## TypeScript Polynomial Hierarchy Example\n\n```typescript\n// Demonstrating different levels of the polynomial hierarchy\n// by simulating quantified Boolean formulas (QBF)\n\ntype Variable = string;\ntype Literal = { var: Variable; negated: boolean };\n\ntype Clause = Literal[];\n\nclass QBF {\n  constructor(\n    public quantifiers: { var: Variable; type: \"exists\" | \"forall\" }[],\n    public clauses: Clause[]\n  ) {}\n\n  evaluate(assignment: Map&lt;Variable, boolean&gt;): boolean {\n    return this.clauses.every(clause =>\n      clause.some(lit => {\n        const val = assignment.get(lit.var) || false;\n        return lit.negated ? !val : val;\n      })\n    );\n  }\n\n  // Check if QBF is true by exhaustive evaluation\n  // Note: this is PSPACE-complete, so worst-case is exponential\n  solve(): boolean {\n    const freeVars = this.quantifiers.map(q => q.var);\n    return this.solveRecursive(freeVars, 0, new Map());\n  }\n\n  private solveRecursive(\n    vars: Variable[],\n    idx: number,\n    assign: Map&lt;Variable, boolean&gt;\n  ): boolean {\n    if (idx >= vars.length) return this.evaluate(assign);\n\n    const q = this.quantifiers[idx];\n    const curVar = q.var;\n\n    for (const val of [false, true]) {\n      const newAssign = new Map(assign);\n      newAssign.set(curVar, val);\n\n      const result = this.solveRecursive(vars, idx + 1, newAssign);\n      if (q.type === \"exists\" && result) return true;\n      if (q.type === \"forall\" && !result) return false;\n    }\n\n    return q.type === \"forall\";\n  }\n}\n\n// QBF Level 1: exists(x) exists(y) (x AND y) - SAT problem (NP)\n// QBF Level 2: exists(x) forall(y) (x OR NOT y) - harder (Sigma_2)\n// QBF with alternating quantifiers belongs to higher levels of PH\n"
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