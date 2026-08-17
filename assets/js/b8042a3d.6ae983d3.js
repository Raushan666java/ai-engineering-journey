"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[32611],{

/***/ 250
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_theory_of_computation_13_time_complexity_md_b80_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-theory-of-computation-13-time-complexity-md-b80.json
const site_docs_courses_theory_of_computation_13_time_complexity_md_b80_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/theory-of-computation/13-time-complexity","title":"Chapter 13: Time Complexity and NP-Completeness","description":"Previous Space Complexity","source":"@site/docs/courses/theory-of-computation/13-time-complexity.md","sourceDirName":"courses/theory-of-computation","slug":"/theory-of-computation/13-time-complexity","permalink":"/ai-engineering-journey/theory-of-computation/13-time-complexity","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"id":"13-time-complexity","slug":"/theory-of-computation/13-time-complexity","title":"Chapter 13: Time Complexity and NP-Completeness","sidebar_label":"Chapter 13: Time Complexity and NP-Completeness","sidebar_position":13},"sidebar":"course-theory-of-computation","previous":{"title":"Chapter 12: Reducibility and Advanced Undecidability","permalink":"/ai-engineering-journey/theory-of-computation/12-reducibility"},"next":{"title":"Chapter 14: Space Complexity","permalink":"/ai-engineering-journey/theory-of-computation/14-space-complexity"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/theory-of-computation/13-time-complexity.md


const frontMatter = {
	id: '13-time-complexity',
	slug: '/theory-of-computation/13-time-complexity',
	title: 'Chapter 13: Time Complexity and NP-Completeness',
	sidebar_label: 'Chapter 13: Time Complexity and NP-Completeness',
	sidebar_position: 13
};
const contentTitle = 'Chapter 13: Time Complexity and NP-Completeness';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Nondeterminism as Proof Search",
  "id": "nondeterminism-as-proof-search",
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
  "value": "12.1 Time Complexity",
  "id": "121-time-complexity",
  "level": 3
}, {
  "value": "12.2 The Time Hierarchy Theorem",
  "id": "122-the-time-hierarchy-theorem",
  "level": 3
}, {
  "value": "12.3 The Class P",
  "id": "123-the-class-p",
  "level": 3
}, {
  "value": "12.4 The Class NP",
  "id": "124-the-class-np",
  "level": 3
}, {
  "value": "12.5 Polynomial-Time Reductions",
  "id": "125-polynomial-time-reductions",
  "level": 3
}, {
  "value": "12.6 NP-Completeness",
  "id": "126-np-completeness",
  "level": 3
}, {
  "value": "12.7 Cook-Levin Theorem",
  "id": "127-cook-levin-theorem",
  "level": 3
}, {
  "value": "12.7 Proving NP-Completeness",
  "id": "127-proving-np-completeness",
  "level": 3
}, {
  "value": "12.9 The Polynomial Hierarchy",
  "id": "129-the-polynomial-hierarchy",
  "level": 3
}, {
  "value": "12.10 Beyond NP",
  "id": "1210-beyond-np",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 12.1: Proving a Problem is in NP → CLIQUE",
  "id": "example-121-proving-a-problem-is-in-np--clique",
  "level": 3
}, {
  "value": "Example 12.2: 3SAT ≤_P CLIQUE",
  "id": "example-122-3sat-_p-clique",
  "level": 3
}, {
  "value": "Example 12.3: VERTEX-COVER ≤_P CLIQUE (via complement)",
  "id": "example-123-vertex-cover-_p-clique-via-complement",
  "level": 3
}, {
  "value": "Example 12.4: SAT ≤_P 3SAT",
  "id": "example-124-sat-_p-3sat",
  "level": 3
}, {
  "value": "Example 12.5: VERTEX-COVER is NP-Complete",
  "id": "example-125-vertex-cover-is-np-complete",
  "level": 3
}, {
  "value": "Example 12.6: SUBSET-SUM is NP-Complete",
  "id": "example-126-subset-sum-is-np-complete",
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
  "value": "Known vs Unknown Relationships",
  "id": "known-vs-unknown-relationships",
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
  "value": "Approximation Algorithms for NP-Complete Problems",
  "id": "approximation-algorithms-for-np-complete-problems",
  "level": 2
}, {
  "value": "TypeScript: Greedy Vertex Cover 2-Approximation",
  "id": "typescript-greedy-vertex-cover-2-approximation",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "The Structure of NP Within P vs NP",
  "id": "the-structure-of-np-within-p-vs-np",
  "level": 2
}, {
  "value": "TypeScript Implementation: Big-O Analyzer and Complexity Class Classifier",
  "id": "typescript-implementation-big-o-analyzer-and-complexity-class-classifier",
  "level": 2
}, {
  "value": "TypeScript: Cook-Levin Window Checker",
  "id": "typescript-cook-levin-window-checker",
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
        id: "chapter-13-time-complexity-and-np-completeness",
        children: "Chapter 13: Time Complexity and NP-Completeness"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/12-reducibility",
          children: "Reducibility"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/14-space-complexity",
          children: "Space Complexity"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define time complexity classes P and NP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the time complexity of algorithms using big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define polynomial-time reductions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State and understand the Cook-Levin theorem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove NP-completeness for classic problems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between P, NP, and NP-complete."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the significance of the P vs NP question."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nondeterminism-as-proof-search",
      children: "Nondeterminism as Proof Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An NTM solving an NP problem can be thought of as performing ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "parallel proof search"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Guess phase:"
        }), " Nondeterministically write a certificate (candidate solution)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verify phase:"
        }), " Deterministically check the certificate in polynomial time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is equivalent to the verifier definition: NP = { L | ? polynomially-checkable certificate for each w ? L }."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The NTM's nondeterministic branches correspond to trying all possible certificates simultaneously. If any branch accepts, the NTM accepts — which means a certificate exists."
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
            children: "Class P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial-time DTM solution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficiently solvable problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Class NP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial-time verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solutions easy to check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NP-Completeness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardest problems in NP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If one falls, all fall"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cook-Levin Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAT is NP-complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First NP-complete problem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial Reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A =_P B preserves P membership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool for proving NP-completeness"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Time Complexity] --> B[Class P]\n    B --> C[Class NP]\n    C --> D[Polynomial Reductions]\n    D --> E[NP-Completeness]\n    E --> F[Cook-Levin Theorem]\n    F --> G[Proving NP-Completeness]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/theory-of-computation/12-time-complexity.png",
        alt: "Complexity Classes Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-time-complexity",
      children: "12.1 Time Complexity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "time complexity"
      }), " of a Turing machine M is the function t: ℕ → ℕ where t(n) is the maximum number of steps M takes on any input of length n."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "multitape TM"
      }), ", the time complexity is defined similarly, but one step may involve all heads simultaneously."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Big-O notation:"
      }), " f(n) = O(g(n)) if there exist constants c > 0 and n₀ such that for all n ≥ n₀, f(n) ≤ c·g(n)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common complexity classes: O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ), O(n!)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-the-time-hierarchy-theorem",
      children: "12.2 The Time Hierarchy Theorem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "time hierarchy theorem"
      }), " shows that more time gives more computational power. For time-constructible functions f(n) and g(n) with f(n) log f(n) = o(g(n)):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[ \\text{TIME}(f(n)) \\subsetneq \\text{TIME}(g(n)) ]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implications:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "There are problems solvable in O(n²) that are NOT solvable in O(n)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "There are problems solvable in O(2n) that are NOT solvable in O(n²)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Therefore, the hierarchy of TIME classes is strict."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof technique:"
      }), " Diagonalization. Construct a TM that simulates all TMs running in time f(n), but does the opposite of what they do, then extends the runtime to g(n)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Corollary:"
      }), " P ? EXP (since n? vs 2n satisfies the hierarchy condition)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-the-class-p",
      children: "12.3 The Class P"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "P = ∪_{k ≥ 0} TIME(nᵏ)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["P is the class of languages decidable in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "polynomial time"
      }), " on a deterministic Turing machine."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P represents problems that are \"efficiently solvable\" or \"tractable.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The exact polynomial degree matters less than the classification as polynomial."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Any polynomial-time algorithm on a reasonable model can be simulated in polynomial time on a TM (with at most polynomial slowdown)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problems in P:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Path existence in graphs (DFS/BFS)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sorting a list (O(n log n))."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Matrix multiplication (O(n³))."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linear programming (O(n³·L))."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GCD computation (Euclidean algorithm)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Context-free language membership (CYK algorithm)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DFA equivalence."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "124-the-class-np",
      children: "12.4 The Class NP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NP = ∪_{k ≥ 0} NTIME(nᵏ)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NP is the class of languages decidable in polynomial time on a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nondeterministic"
      }), " Turing machine."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Equivalent characterization:"
      }), " A language L is in NP if there exists a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "verifier"
      }), " V such that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V is a polynomial-time deterministic TM."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For any string x ∈ L, there exists a proof y (|y| ≤ p(|x|) for some polynomial p) such that V accepts ⟨x, y⟩."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For any x ∉ L, V rejects ⟨x, y⟩ for all y."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intuition:"
      }), " NP = problems where solutions can be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "verified"
      }), " in polynomial time. The certificate y is the \"solution\" to the problem; checking it is efficient."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problems in NP:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SAT (Boolean satisfiability): given a formula, does a satisfying assignment exist?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TSP (Traveling Salesman Problem): is there a tour of length ≤ K?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLIQUE: does a graph contain a K-clique?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SUBSET-SUM: does a subset of numbers sum to exactly T?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VERTEX-COVER: is there a vertex cover of size ≤ K?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "P vs NP:"
      }), " The most famous open problem in computer science. Does P = NP?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If P = NP: all efficiently verifiable problems are efficiently solvable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If P ≠ NP: some problems are inherently hard → their solutions can be verified quickly but not found quickly."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Most researchers believe P ≠ NP."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "125-polynomial-time-reductions",
      children: "12.5 Polynomial-Time Reductions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A language A is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "polynomial-time reducible"
      }), " to B (written A ≤_P B) if there exists a function f computable in polynomial time such that w ∈ A iff f(w) ∈ B."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If A ≤_P B and B ∈ P, then A ∈ P."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If A ≤_P B and A ∉ P, then B ∉ P."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Polynomial-time reductions are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "transitive"
        }), ": if A ≤_P B and B ≤_P C, then A ≤_P C."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "126-np-completeness",
      children: "12.6 NP-Completeness"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A language B is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NP-complete"
      }), " if:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B ∈ NP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For every A ∈ NP, A ≤_P B (B is NP-hard)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Significance:"
      }), " If any NP-complete problem is in P, then P = NP. If any NP-complete problem is not in P, then no NP-complete problem is in P."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "127-cook-levin-theorem",
      children: "12.7 Cook-Levin Theorem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem (Cook 1971, Levin 1973):"
      }), " SAT is NP-complete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof sketch:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SAT ∈ NP:"
        }), " Given a formula and an assignment, verify in polynomial time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SAT is NP-hard:"
        }), " For any A ∈ NP with NTM N running in nᵏ time, construct a Boolean formula φ that is satisfiable iff N accepts w."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The formula encodes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cell states:"
        }), " Variables x_{i,j,s} meaning \"cell i,j contains symbol s.\" (i = time step, j = tape position.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initial state:"
        }), " φ_start encodes the initial configuration q₀ w."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Valid transitions:"
        }), " φ_move ensures each configuration follows from the previous via N's transition relation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acceptance:"
        }), " φ_accept ensures at least one configuration is accepting."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The formula size is O(n²ᵏ), which is polynomial in n. A satisfying assignment corresponds to an accepting computation of N."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The three-part formula f:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "f_cell"
          }), ": Each cell (i,j) contains exactly one symbol. This is a conjunction of clauses ensuring at least one symbol (OR) and at most one symbol (pairwise AND of negations)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "f_start"
          }), ": The first row encodes the initial configuration: tape content = w, state = q0, head at position 0."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "f_move"
          }), ": For each adjacent pair of rows, the transition relation of the NTM constrains which symbols can appear. This is encoded by checking each 2×3 \"window\" of cells — the transition function determines legal window patterns."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "f_accept"
          }), ": At least one row contains an accepting state."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The window method ensures the formula size is O(n²?) where n? is the runtime bound."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"Cook-Levin: Encoding TM as SAT\"\n        INIT[\"Initial config\"] --> WINDOW[\"2×3 windows<br/>per row pair\"]\n        WINDOW --> TRANS[\"Legal transitions<br/>encoded as clauses\"]\n        TRANS --> ACCEPT[\"Accept state<br/>in final row\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consequences:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thousands of problems have been proven NP-complete."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The first NP-complete problem enables a chain of reductions: SAT =? 3SAT =? CLIQUE =? VERTEX-COVER =? HAM-CYCLE =? TSP, etc."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "127-proving-np-completeness",
      children: "12.7 Proving NP-Completeness"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To prove a problem B is NP-complete:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Show B ∈ NP:"
        }), " Give a polynomial-time verifier."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Show B is NP-hard:"
        }), " Choose a known NP-complete problem A and show A ≤_P B."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standard NP-complete problems:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3SAT:"
        }), " Boolean formulas in CNF with exactly 3 literals per clause."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLIQUE:"
        }), " Does G contain a K-clique? (K ≤ |V|)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VERTEX-COVER:"
        }), " Does G have a vertex cover of size K?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HAM-CYCLE/HAM-PATH:"
        }), " Does G have a Hamiltonian cycle/path?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TSP:"
        }), " Does the complete graph have a tour of weight ≤ D?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SUBSET-SUM:"
        }), " Does a set of integers have a subset summing to T?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PARTITION:"
        }), " Can a multiset be partitioned into equal-sum subsets?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BIN-PACKING:"
        }), " Can items of given sizes fit into K bins of capacity C?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GRAPH-COLORING (3-COLOR):"
        }), " Is G 3-colorable?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "129-the-polynomial-hierarchy",
      children: "12.9 The Polynomial Hierarchy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "polynomial hierarchy"
      }), " extends the idea of P and NP with oracles:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\n\\Delta_0^P = \\Sigma_0^P = \\Pi_0^P = P\n]\n[\n\\Sigma_{i+1}^P = NP^{\\Sigma_i^P}\n]\n[\n\\Pi_{i+1}^P = co\\Sigma_{i+1}^P\n]\n[\n\\Delta_{i+1}^P = P^{\\Sigma_i^P}\n]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If P = NP, the entire polynomial hierarchy collapses to P at the first level. This is why resolving P vs NP is so important: it determines the structure of all complexity classes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1210-beyond-np",
      children: "12.10 Beyond NP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NP-hard:"
      }), " Problems to which every NP problem reduces (but may not be in NP). Includes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The halting problem (much harder than NP)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All NP-complete problems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimization versions of NP-complete problems."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "co-NP:"
      }), " Languages whose complements are in NP. Example: TAUTOLOGY = { φ | φ is true for all assignments } ∈ co-NP."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NPI (NP-Intermediate):"
      }), " If P ≠ NP, there exist problems in NP that are neither in P nor NP-complete (Ladner's theorem). Candidates: Graph Isomorphism, Factoring."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-121-proving-a-problem-is-in-np--clique",
      children: "Example 12.1: Proving a Problem is in NP → CLIQUE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CLIQUE = { ⟨G, K⟩ | G has a K-clique }."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verifier:"
      }), " Given input ⟨G, K⟩ and certificate (a set of K vertices V'):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify |V'| = K."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify that for every pair u, v ∈ V', (u, v) is an edge in G."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If all checks pass, accept; otherwise reject."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Runtime: O(K²) ⊆ O(|V|²) → polynomial. So CLIQUE ∈ NP."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-122-3sat-_p-clique",
      children: "Example 12.2: 3SAT ≤_P CLIQUE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given a 3CNF formula φ with k clauses, construct graph G:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create 3 vertices per clause (one for each literal)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connect vertices if they are in different clauses AND are not contradictory (not x and ¬x)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set K = k (number of clauses)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Correctness:"
      }), " φ is satisfiable iff there is a k-clique in G. A clique of size k picks one literal from each clause, all of which can be simultaneously true."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Construction: O(k²·3²) = O(k²) → polynomial."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-123-vertex-cover-_p-clique-via-complement",
      children: "Example 12.3: VERTEX-COVER ≤_P CLIQUE (via complement)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given graph G = (V, E) and integer k, the complement graph Ḡ = (V, Ē) where Ē = { (u,v) | u ≠ v and (u,v) ∉ E }."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key fact:"
      }), " C is a vertex cover in G iff V − C is a clique in Ḡ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "So: G has a k-vertex-cover iff Ḡ has an (|V|−k)-clique."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This gives: VERTEX-COVER ≤_P CLIQUE."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-124-sat-_p-3sat",
      children: "Example 12.4: SAT ≤_P 3SAT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given SAT formula φ, convert to 3SAT φ':"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each clause in φ is replaced by a set of 3-clauses using auxiliary variables."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For a 1-literal clause (x): replace with (x ∨ x ∨ x)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For a 2-literal clause (x ∨ y): replace with (x ∨ y ∨ z) ∧ (x ∨ y ∨ ¬z) for fresh z."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For a k-literal clause (k > 3): introduce k-3 new variables to split into 3-clauses."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The transformation is polynomial and preserves satisfiability."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-125-vertex-cover-is-np-complete",
      children: "Example 12.5: VERTEX-COVER is NP-Complete"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reduction from 3SAT:"
      }), " Given 3CNF formula f with variables x1,...,x? and clauses C1,...,C?:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each variable x?, create two vertices (x? and ¬x?) connected by an edge."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each clause C? = (l1 ? l2 ? l3), create a triangle connecting the three literals."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connect each clause-literal vertex to the corresponding variable-literal vertex."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set k = n + 2m (one from each variable pair, two from each clause triangle)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Correctness:"
      }), " A vertex cover must pick one vertex from each variable edge and two from each clause triangle. The third vertex in each clause triangle must be connected to a variable vertex that's in the cover — meaning that literal satisfies the clause."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-126-subset-sum-is-np-complete",
      children: "Example 12.6: SUBSET-SUM is NP-Complete"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given numbers a₁, …, aₙ and target T."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "In NP:"
      }), " Certificate is the subset. Verify sum = T."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NP-hardness:"
      }), " Reduce 3SAT to SUBSET-SUM. For each variable, create two numbers (one for true, one for false). For each clause, create two \"slack\" numbers. The construction ensures a subset summing to T corresponds to a satisfying assignment (each clause's sum is satisfied by at least one literal)."]
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
            children: "Characteristic"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "? TIME(n^k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial-time DTM solution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "? NTIME(n^k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial-time verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NP-complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP n NP-hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardest in NP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "co-NP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{ L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "complement ? NP }"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PATH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS/DFS reachability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP-complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cook-Levin theorem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLIQUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP-complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3SAT reduction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP-complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many practical problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Primality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AKS algorithm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3-COLOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP-complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Planar 3-colorability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BIN-PACKING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP-complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduling applications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FACTORING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP n co-NP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crypto relevance (NPI candidate)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "known-vs-unknown-relationships",
      children: "Known vs Unknown Relationships"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    P[\"P\"]\n    NP[\"NP\"]\n    NPC[\"NP-complete\"]\n    CoNP[\"co-NP\"]\n    EXP[\"EXP\"]\n    P --> NP\n    NP --> EXP\n    NP --> NPC\n    P --> CoNP\n    NP -.->|\"?\"| CoNP\n    P -->|\"? (strict)\"| EXP\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cryptography"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-way functions require P ? NP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many planning problems NP-complete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operations research"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimization NP-hard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bioinformatics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence alignment in P"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many variants NP-complete"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " P is the class of problems solvable in:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Linear time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Polynomial time on DTM ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Polynomial time on NTM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Exponential time"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** P = problems decidable in O(n^k) time on a deterministic Turing machine.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " NP problems can be:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Solved in polynomial time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Verified in polynomial time ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Solved in exponential time only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Solved by DFA"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** NP = problems with polynomial-time verifiable certificates (solutions).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " A problem is NP-complete if it is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) In NP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) NP-hard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Both in NP and NP-hard ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) In P"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C)** NP-complete = in NP + all NP problems reduce to it (NP-hard).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Cook-Levin theorem proved ___ is NP-complete:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) TSP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) SAT ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) CLIQUE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) HAM-CYCLE"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Cook (1971) and Levin (1973) independently proved SAT is NP-complete.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " If P = NP, then:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) All NP problems have polynomial algorithms ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) All problems are decidable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Cryptography becomes impossible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Exponential time is unnecessary"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**A)** P = NP means every efficiently verifiable problem is efficiently solvable.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "approximation-algorithms-for-np-complete-problems",
      children: "Approximation Algorithms for NP-Complete Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Even though NP-complete problems cannot be solved exactly in polynomial time (unless P=NP), they can often be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "approximated"
      }), " efficiently:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Approximation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VERTEX-COVER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-approximation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy edge selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX-CUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.878-approximation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Goemans-Williamson (SDP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TSP (metric)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5-approximation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Christofides algorithm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SET-COVER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)-approximation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy covering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KNAPSACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1-e)-approximation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FPTAS (dynamic programming)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-greedy-vertex-cover-2-approximation",
      children: "TypeScript: Greedy Vertex Cover 2-Approximation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function approxVertexCover(\n  vertices: number[],\n  edges: [number, number][]\n): Set<number> {\n  const cover = new Set<number>();\n  const remaining = new Set(edges.map(e => `${e[0]},${e[1]}`));\n\n  while (remaining.size > 0) {\n    // Pick any remaining edge\n    const first = remaining.values().next().value as string;\n    const [u, v] = first.split(\",\").map(Number);\n\n    // Add both endpoints to cover\n    cover.add(u);\n    cover.add(v);\n\n    // Remove all edges incident to u or v\n    for (const edge of edges) {\n      if (edge[0] === u || edge[0] === v ||\n          edge[1] === u || edge[1] === v) {\n        remaining.delete(`${edge[0]},${edge[1]}`);\n      }\n    }\n  }\n\n  return cover;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "P vs NP affects every programmer."
          }), " Verifying a solution (P) is almost always easier than finding one (NP). This is why SAT solvers, constraint solvers, and optimization tools exist — they encode hard problems and use exponential algorithms that work well on real-world instances."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "NP-completeness guides algorithm choice."
          }), " When faced with an NP-complete problem, don't try to find a polynomial-time algorithm (you'd solve P=NP). Instead, use approximation algorithms, heuristics, SAT solvers, or restrict the problem to a special case."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Polynomial vs exponential is the real divide."
          }), " While O(n) vs O(n²) matters in practice, the fundamental computational divide is between any polynomial (O(n^k)) and any exponential (O(2^n)). Exponential algorithms become unusable for n > 50."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reductions connect seemingly unrelated problems."
          }), " SAT reduces to 3SAT reduces to CLIQUE reduces to VERTEX-COVER reduces to HAM-CYCLE reduces to TSP. Understanding this chain lets you recognize NP-complete problems when you encounter them."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Approximation algorithms are the practical response to NP-completeness."
          }), " When you prove a problem is NP-complete, the next step isn't to give up — it's to find an approximation algorithm, a heuristic, or a special case that's tractable. Most real-world optimization involves this tradeoff."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-structure-of-np-within-p-vs-np",
      children: "The Structure of NP Within P vs NP"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"If P ? NP\"\n        P[\"P (tractable)\"]\n        NPC[\"NP-complete<br/>(hardest in NP)\"]\n        NPI[\"NP-intermediate<br/>(candidates: Factoring,<br/>Graph Isomorphism)\"]\n        NP[\"NP\"]\n        P --> NPI\n        NPI --> NPC\n    end\n    \n    subgraph \"If P = NP\"\n        ALL[\"P = NP = NP-complete<br/>(all collapse)\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ladner's theorem guarantees that if P ? NP, then NPI is non-empty — there exist problems in NP that are neither in P nor NP-complete."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-big-o-analyzer-and-complexity-class-classifier",
      children: "TypeScript Implementation: Big-O Analyzer and Complexity Class Classifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Asymptotic Complexity Analyzer and P vs NP Framework\n\ntype ComplexityFunction = (n: number) => number;\n\nclass BigOAnalyzer {\n  static O(f: ComplexityFunction): string {\n    return `O(${this.functionName(f)})`;\n  }\n\n  static T(f: ComplexityFunction): string {\n    return `T(${this.functionName(f)})`;\n  }\n\n  static O(f: ComplexityFunction): string {\n    return `O(${this.functionName(f)})`;\n  }\n\n  private static functionName(f: ComplexityFunction): string {\n    const names: [ComplexityFunction, string][] = [\n      [n => 1, \"1\"],\n      [n => Math.log2(n), \"log n\"],\n      [n => n, \"n\"],\n      [n => n * Math.log2(n), \"n log n\"],\n      [n => n ** 2, \"n²\"],\n      [n => n ** 3, \"n³\"],\n      [n => 2 ** n, \"2n\"],\n      [n => n ** n, \"nn\"],\n      [n => Math.log2(Math.log2(n)), \"log log n\"]\n    ];\n    for (const [fn, name] of names) {\n      if (this.areEqual(f, fn)) return name;\n    }\n    return \"unknown\";\n  }\n\n  private static areEqual(f: ComplexityFunction, g: ComplexityFunction): boolean {\n    for (const n of [2, 4, 8, 16, 32, 64, 128]) {\n      if (Math.abs(f(n) - g(n)) > 0.01) return false;\n    }\n    return true;\n  }\n\n  static analyzeRuntime(algorithm: (input: number[]) => number[], input: number[]): {\n    inputSize: number;\n    operations: number;\n    estimatedClass: string;\n  } {\n    let ops = 0;\n    const proxy = new Proxy(algorithm, {\n      apply: (target, thisArg, args) => {\n        const result = target(...args);\n        ops = this.countOps(result, args[0]);\n        return result;\n      }\n    });\n    const n = input.length;\n    proxy(input);\n\n    const classes: [string, (n: number) => boolean][] = [\n      [\"O(1)\", (n) => ops <= 10],\n      [\"O(log n)\", (n) => ops <= 10 * Math.log2(n)],\n      [\"O(n)\", (n) => ops <= 2 * n],\n      [\"O(n log n)\", (n) => ops <= 2 * n * Math.log2(n)],\n      [\"O(n²)\", (n) => ops <= n * n],\n      [\"O(2n)\", (n) => true]\n    ];\n\n    const estimated = classes.find(([_, pred]) => pred(n))?.[0] || \"O(2n+)\";\n\n    return { inputSize: n, operations: ops, estimatedClass: estimated };\n  }\n\n  private static countOps(result: number[], input: number[]): number {\n    // Approximate count: iterations, comparisons, swaps\n    return Math.min(result.length + input.length, 100000);\n  }\n\n  static comparativeTable(): Map<string, number[]> {\n    const table = new Map<string, number[]>();\n    const ns = [1, 10, 100, 1000, 10000];\n    const fns: [string, (n: number) => number][] = [\n      [\"O(1)\", n => 1],\n      [\"O(log n)\", n => Math.ceil(Math.log2(n))],\n      [\"O(n)\", n => n],\n      [\"O(n log n)\", n => n * Math.ceil(Math.log2(n))],\n      [\"O(n²)\", n => n * n],\n      [\"O(n³)\", n => n * n * n],\n      [\"O(2n)\", n => Math.pow(2, n)]\n    ];\n    for (const [name, fn] of fns) {\n      table.set(name, ns.map(n => fn(n)));\n    }\n    return table;\n  }\n\n  static isPolynomial(complexity: string): boolean {\n    return [\"O(1)\", \"O(log n)\", \"O(n)\", \"O(n log n)\", \"O(n²)\", \"O(n³)\"].includes(complexity);\n  }\n}\n\nclass ComplexityClassChecker {\n  static classifyProblem(name: string, bestKnownTime: string, verifiableInP: boolean): string {\n    if (verifiableInP) {\n      if (BigOAnalyzer.isPolynomial(bestKnownTime)) {\n        return `${name} ? P (polynomial time) and therefore also ? NP`;\n      }\n      return `${name} ? NP (verifiable in P, best known: ${bestKnownTime})`;\n    }\n    return `${name} likely ? NP (verification not known to be in P)`;\n  }\n\n  static pVsNP(): string[] {\n    return [\n      \"P vs NP: The central open question in computer science.\",\n      \"\",\n      \"P = Problems solvable in deterministic polynomial time.\",\n      \"NP = Problems whose solutions are verifiable in polynomial time.\",\n      \"\",\n      \"If P = NP: Every problem with an efficiently verifiable solution\",\n      \"  could also be efficiently solved. SAT, TSP, Factorization all in P.\",\n      \"  Modern cryptography would collapse.\",\n      \"\",\n      \"If P ? NP: Some hard problems truly require exponential time.\",\n      \"  NP-complete problems cannot be solved in polynomial time.\",\n      \"  Cryptography remains secure.\",\n      \"\",\n      \"Most researchers believe P ? NP, but no proof exists yet.\",\n      \"The Clay Institute offers USD $1M for a correct proof.\"\n    ];\n  }\n}\n\nconsole.log(BigOAnalyzer.comparativeTable());\nconsole.log(ComplexityClassChecker.classifyProblem(\"SAT\", \"O(2n)\", true));\nconsole.log(ComplexityClassChecker.classifyProblem(\"Sorting\", \"O(n log n)\", true));\nconsole.log(ComplexityClassChecker.pVsNP().join(\"\\n\"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -----------------------------------------------------\n// Complexity Class Membership Checker\n// Given a problem and its known best-case runtime,\n// determines which complexity class(es) it belongs to.\n// -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["class ComplexityMembershipChecker {\n// Classify a problem based on its best-known time complexity\nstatic classify(name: string, complexity: string, verified: boolean): string[] {\nconst output: string[] = [];\noutput.push(", (0,jsx_runtime.jsx)(_components.code, {
        children: "Problem: ${name}"
      }), ");\noutput.push(", (0,jsx_runtime.jsx)(_components.code, {
        children: "Best known complexity: ${complexity}"
      }), ");\noutput.push(", (0,jsx_runtime.jsx)(_components.code, {
        children: "Verified upper bound: ${verified}"
      }), ");\noutput.push(\"\");"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Extract the big-O function\nconst oMatch = complexity.match(/O\\((.+)\\)/);\nif (!oMatch) { output.push(\"Unable to parse complexity expression.\"); return output; }\nconst func = oMatch[1];\n\noutput.push(\"Membership:\");\n\n// Check each class\nconst classes = this.checkClasses(func, verified);\nfor (const [cls, member] of classes) {\n  output.push(`  ${cls}: ${member ? \"?\" : \"not known ?\"} ${cls}`);\n}\n\nreturn output;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "private static checkClasses(func: string, verified: boolean): [string, boolean][] {\nconst isPoly = /^n\\b|^n^\\d|^n log|^\\d/.test(func);\nconst isLinear = /^n$|^n log/.test(func);\nconst isQuadratic = /n^2/.test(func);\nconst isExp = /2^n|n!|n^n/.test(func);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "return [\n  [\"L (O(log n) space)\", /log n/.test(func)],\n  [\"P (polynomial time)\", isPoly],\n  [\"NP (verifiable in poly time)\", isPoly || isExp],\n  [\"co-NP\", isPoly || isExp],\n  [\"EXP (2^(n^O(1)))\", isExp || isPoly],\n  [\"PSPACE (poly space)\", isPoly || isExp],\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -----------------------------------------------------\n// Big-O Hierarchy Visualizer\n// Renders the time complexity hierarchy with common\n// examples at each level.\n// -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class BigOHierarchy {\nstatic render(): string[] {\nreturn [\n\"Time Complexity Hierarchy\",\n\"---------------------------\",\n\"\",\n\"O(1)         Constant       — Array access, hash lookup\",\n\"  ?\",\n\"O(log n)     Logarithmic    — Binary search, BST operations\",\n\"  ?\",\n\"O(n)         Linear         — Array scan, linear search\",\n\"  ?\",\n\"O(n log n)   Linearithmic   — Merge sort, heap sort, FFT\",\n\"  ?\",\n\"O(n²)        Quadratic      — Bubble sort, insertion sort\",\n\"  ?\",\n\"O(n³)        Cubic          — Floyd-Warshall, matrix multiplication (naive)\",\n\"  ?\",\n\"O(2n)        Exponential    — Subset sum (brute force), SAT (brute force)\",\n\"  ?\",\n\"O(n!)        Factorial      — Traveling salesman (brute force),permutations\",\n\"\",\n\"Class boundaries:\",\n\"  P     = O(n^k) for some k (tractable)\",\n\"  NP    = verifiable in O(n^k)\",\n\"  EXP   = O(2^(n^k))\",\n\"  NEXP  = nondeterministic EXP\",\n\"\",\n\"Key open question: P = NP? (Clay $1M Millennium Problem)\"\n];\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Demo\nconsole.log(ComplexityMembershipChecker.classify(\"Matrix Multiplication (Strassen)\",\n\"O(n^2.81)\", true).join(\"\\n\"));\nconsole.log(\"\");\nconsole.log(ComplexityMembershipChecker.classify(\"SAT (naive backtracking)\",\n\"O(2^n)\", true).join(\"\\n\"));\nconsole.log(\"\");\nconsole.log(BigOHierarchy.render().join(\"\\n\"));"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// time complexity\n// automata-complexity implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'time complexity', data: { topic: 'automata-complexity' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n## Summary\n\n- P = problems solvable in polynomial time on a DTM.\n- NP = problems verifiable in polynomial time = solvable in polynomial time on an NTM.\n- Polynomial-time reductions (=_P) preserve polynomial-time solvability.\n- A problem is NP-complete if it's in NP and all NP problems reduce to it.\n- The Cook-Levin theorem proves SAT is NP-complete by encoding TM computations as Boolean formulas.\n- Thousands of NP-complete problems span computing, optimization, and mathematics.\n- P vs NP remains the most important open question in theoretical CS.\n- The time hierarchy theorem proves P ? EXP strictly.\n\n## Exercises\n\n### Basic\n\n1. Show that PATH (is there a path from s to t in a directed graph?) is in P.\n2. Show that COMPOSITE (is n composite?) is in NP.\n3. Show that P is closed under union, intersection, and complement.\n4. Explain why a polynomial-time reduction from A to B combined with B ∈ P implies A ∈ P.\n5. Classify: Sorting, TSP, Matrix multiplication, Graph connectivity → which are in P and which are in NP?\n\n### Intermediate\n\n6. Prove that CLIQUE is NP-complete by reducing 3SAT to CLIQUE (construct the standard reduction).\n7. Prove that VERTEX-COVER is NP-complete.\n8. Show that HAM-CYCLE is NP-complete.\n9. Prove that SUBSET-SUM is NP-complete (reduce 3SAT to SUBSET-SUM).\n10. Show that if P = NP, then every polynomial-time verifiable problem has a polynomial-time algorithm.\n\n### Advanced\n\n11. Prove the Cook-Levin theorem: construct the formula f for a nondeterministic TM and show it is satisfiable iff the TM accepts.\n12. Prove Ladner's theorem: if P ? NP, then there exists an NP-intermediate language.\n13. Show that GRAPH-ISOMORPHISM is in NP (and is a candidate for NP-intermediate status).\n14. Prove that the optimization version of TSP (find the shortest tour) is NP-hard.\n15. Show that if SAT ? P, then every NP problem has an algorithm running in O(n?) time for some fixed k (the same polynomial degree for all problems).\n16. Implement the 3SAT-to-CLIQUE reduction in TypeScript and test it on a small 3SAT instance.\n17. Show that the metric TSP has a 2-approximation algorithm (minimum spanning tree based).\n18. Prove that if P ? NP, then no NP-complete problem can be solved in polynomial time on average.\n\n## TypeScript NP-Completeness Reduction Example\n\n```typescript\n// SAT to 3SAT reduction\n// Any SAT clause can be transformed to 3-CNF by adding auxiliary variables\n\ntype Literal = number;  // positive or negative variable index\ntype Clause = Literal[];\n\nfunction satTo3Sat(clauses: Clause[]): Clause[] {\n  const result: Clause[] = [];\n\n  for (const clause of clauses) {\n    if (clause.length &lt;= 3) {\n      result.push(clause);\n      continue;\n    }\n\n    // For clauses with k > 3 literals, introduce k-3 new variables\n    // (l1 OR l2 OR y1) AND (!y1 OR l3 OR y2) AND ... AND (!y_{k-3} OR l_{k-1} OR l_k)\n    const k = clause.length;\n    const newVars = k - 3;\n    const baseVar = 10000;  // offset for new variables (avoid collisions)\n\n    for (let i = 0; i &lt; newVars; i++) {\n      const y = baseVar + i;\n      if (i === 0) {\n        result.push([clause[0], clause[1], y]);\n      } else if (i === newVars - 1) {\n        result.push([-y, clause[k - 2], clause[k - 1]]);\n      } else {\n        result.push([-y, clause[i + 1], baseVar + i + 1]);\n      }\n    }\n  }\n\n  return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-cook-levin-window-checker",
      children: "TypeScript: Cook-Levin Window Checker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Demonstrate the \"window\" method from the Cook-Levin proof\n\ntype TapeWindow = string[][];  // 2 rows × 3 columns\n\nfunction getLegalWindows(\n  tapeAlphabet: string[],\n  states: string[],\n  transition: (state: string, symbol: string) => [string, string, \"L\" | \"R\"][]\n): Set&lt;string&gt; {\n  const legal = new Set&lt;string&gt;();\n\n  // A window encodes a 2×3 slice of the TM computation table\n  for (const s1 of tapeAlphabet) {\n    for (const s2 of tapeAlphabet) {\n      for (const s3 of tapeAlphabet) {\n        for (const q of states) {\n          // Window with head position in the middle of top row:\n          // Row i:     a1  (q,a2)  a3\n          // Row i+1:   b1   b2     b3\n          const windows = transition(q, s2);\n          for (const [newQ, write, dir] of windows) {\n            const bottomRow = dir === \"R\"\n              ? [s1, write, s3]\n              : [write, s1, s3];\n            const key = `${s1},q(${q},${s2}),${s3}|${bottomRow.join(\",\")}`;\n            legal.add(key);\n          }\n        }\n      }\n    }\n  }\n  return legal;\n}\n"
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
        }), " (3rd ed.). Chapter 7 covers time complexity, P, NP, and NP-completeness with complete proofs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Arora, Sanjeev and Barak, Boaz."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Computational Complexity: A Modern Approach"
        }), ". Chapters 2 and 6 provide rigorous coverage of NP-completeness and the Cook-Levin theorem."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Garey, Michael R. and Johnson, David S."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Computers and Intractability: A Guide to the Theory of NP-Completeness"
        }), ". The classic reference containing hundreds of NP-complete problems and their reductions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sipser, Michael."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "The History and Status of the P vs NP Problem"
        }), ". Communications of the ACM, 2012. An accessible overview of the most important open question in computer science."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Karp, Richard M."
        }), " \"Reducibility Among Combinatorial Problems.\" 1972. The seminal paper establishing NP-completeness of 21 fundamental problems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cook, Stephen A."
        }), " \"The Complexity of Theorem-Proving Procedures.\" STOC 1971. The original paper introducing NP-completeness and proving SAT is NP-complete."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Levin, Leonid A."
        }), " 'Universal Sequential Search Problems.' Problems of Information Transmission, 1973. Independently discovered NP-completeness and the Cook-Levin theorem."]
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