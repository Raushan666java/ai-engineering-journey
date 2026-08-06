"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[74817],{

/***/ 39556
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_discrete_mathematics_07_relations_md_cb2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-discrete-mathematics-07-relations-md-cb2.json
const site_docs_courses_discrete_mathematics_07_relations_md_cb2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/discrete-mathematics/07-relations","title":"Chapter 7: Relations","description":"Previous Recurrence Relations | Next Functions","source":"@site/docs/courses/discrete-mathematics/07-relations.md","sourceDirName":"courses/discrete-mathematics","slug":"/discrete-mathematics/07-relations","permalink":"/ai-engineering-journey/discrete-mathematics/07-relations","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"07-relations","slug":"/discrete-mathematics/07-relations","title":"Chapter 7: Relations","sidebar_label":"Chapter 7: Relations","sidebar_position":7},"sidebar":"coursesSidebar","previous":{"title":"Chapter 6: Recurrence Relations","permalink":"/ai-engineering-journey/discrete-mathematics/06-recurrence"},"next":{"title":"Chapter 8: Functions","permalink":"/ai-engineering-journey/discrete-mathematics/08-functions"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/discrete-mathematics/07-relations.md


const frontMatter = {
	id: '07-relations',
	slug: '/discrete-mathematics/07-relations',
	title: 'Chapter 7: Relations',
	sidebar_label: 'Chapter 7: Relations',
	sidebar_position: 7
};
const contentTitle = 'Chapter 7: Relations';

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
  "value": "7.1 Definition",
  "id": "71-definition",
  "level": 3
}, {
  "value": "7.2 Representations",
  "id": "72-representations",
  "level": 3
}, {
  "value": "7.3 Properties of Relations",
  "id": "73-properties-of-relations",
  "level": 3
}, {
  "value": "7.4 Combining Relations",
  "id": "74-combining-relations",
  "level": 3
}, {
  "value": "7.5 Closures",
  "id": "75-closures",
  "level": 3
}, {
  "value": "7.6 Equivalence Relations",
  "id": "76-equivalence-relations",
  "level": 3
}, {
  "value": "7.7 Partial Orders",
  "id": "77-partial-orders",
  "level": 3
}, {
  "value": "7.8 n-ary Relations",
  "id": "78-n-ary-relations",
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
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "TypeScript Implementations",
  "id": "typescript-implementations",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "7.9 Relation Property Checker in TypeScript",
  "id": "79-relation-property-checker-in-typescript",
  "level": 3
}, {
  "value": "7.10 Warshall&#39;s Algorithm ? Transitive Closure",
  "id": "710-warshalls-algorithm--transitive-closure",
  "level": 3
}, {
  "value": "7.11 Composition of Relations",
  "id": "711-composition-of-relations",
  "level": 3
}, {
  "value": "7.12 Equivalence Relations and Partitions",
  "id": "712-equivalence-relations-and-partitions",
  "level": 3
}, {
  "value": "7.13 Hasse Diagrams ? Lattices",
  "id": "713-hasse-diagrams--lattices",
  "level": 3
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Application Problems",
  "id": "application-problems",
  "level": 3
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
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
        id: "chapter-7-relations",
        children: "Chapter 7: Relations"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/discrete-mathematics/06-recurrence",
          children: "Chapter 6: Recurrence Relations"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/discrete-mathematics/08-functions",
          children: "Chapter 8: Functions"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/discrete-mathematics/07-relations.png",
        alt: "Relations Overview"
      })
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
        href: "../../assets/images/lessons/discrete-mathematics/07-relations/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/discrete-mathematics/07-relations/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/discrete-mathematics/07-relations/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/discrete-mathematics/07-relations/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/discrete-mathematics/07-relations/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/discrete-mathematics/07-relations/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Represent relations as sets of ordered pairs and as matrices or digraphs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine whether a relation is reflexive, symmetric, antisymmetric, or transitive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Form equivalence relations and identify equivalence classes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct partial orders and draw Hasse diagrams"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find closures of relations including transitive closure via Warshall's algorithm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute compositions and powers of relations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform topological sorting on partially ordered sets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply n-ary relations to relational databases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Relation Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subset of $A \\times B$ ? a set of ordered pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relations generalize functions; every function is a relation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Relation Properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reflexive, symmetric, antisymmetric, transitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "These four properties classify all binary relations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Closures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add minimum pairs to achieve a desired property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transitive closure is computed via Warshall's algorithm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalence Relations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reflexive + symmetric + transitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partitions the set into disjoint equivalence classes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partial Orders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reflexive + antisymmetric + transitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Posets model hierarchies, dependencies, and ordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "n-ary Relations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subset of $A_1 \\times \\dots \\times A_n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundational to relational database theory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Topological Sorting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear ordering consistent with a partial order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used in build systems and scheduling"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Binary Relation] --> B[Matrix Representation]\n    A --> C[Digraph Representation]\n    B --> D[Relation Properties]\n    C --> D\n    D --> E{Properties?}\n    E -->|Reflexive, Symmetric, Transitive| F[Equivalence Relation]\n    E -->|Reflexive, Antisymmetric, Transitive| G[Partial Order]\n    F --> H[Equivalence Classes]\n    F --> I[Partitions]\n    G --> J[Hasse Diagrams]\n    G --> K[Topological Sorting]\n    D --> L[Closures]\n    L --> M[Warshall's Algorithm]\n    A --> N[n-ary Relations]\n    N --> O[Relational Databases]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-definition",
      children: "7.1 Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "binary relation"
      }), " $R$ from set $A$ to set $B$ is a subset of $A \\times B$. When $A = B$, we say $R$ is a relation on $A$. We write $a R b$ to mean $(a, b) \\in R$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A binary relation is simply a set of ordered pairs; it can model any pairwise connection between elements of two sets."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-representations",
      children: "7.2 Representations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Matrix representation."
      }), " If $A = {a_1, \\ldots, a_m}$ and $B = {b_1, \\ldots, b_n}$, the relation $R$ can be represented by an $m \\times n$ zero-one matrix $M_R$ with $M_R[i, j] = 1$ iff $(a_i, b_j) \\in R$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Matrix operations on relations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$M_{R \\cup S}[i,j] = M_R[i,j] \\lor M_S[i,j]$ (Boolean OR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$M_{R \\cap S}[i,j] = M_R[i,j] \\land M_S[i,j]$ (Boolean AND)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$M_{S \\circ R} = M_R \\cdot M_S$ (Boolean matrix multiplication)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Digraph representation."
      }), " For a relation on $A$, draw a directed graph with vertices $A$ and an edge $a \\rightarrow b$ iff $(a, b) \\in R$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Represent a relation as a zero-one matrix\ntype RelationMatrix = number[][];\n\nfunction compose(R: RelationMatrix, S: RelationMatrix): RelationMatrix {\n  const n = R.length;\n  const result: RelationMatrix = Array.from({ length: n }, () => Array(n).fill(0));\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < n; j++) {\n      for (let k = 0; k < n; k++) {\n        if (R[i][k] && S[k][j]) { result[i][j] = 1; break; }\n      }\n    }\n  }\n  return result;\n}\n\nfunction power(R: RelationMatrix, n: number): RelationMatrix {\n  if (n === 0) return R.map((_, i) => R.map((_, j) => (i === j ? 1 : 0))); // identity\n  if (n === 1) return R;\n  return compose(R, power(R, n - 1));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Relations can be represented as zero-one matrices (for computation) or digraphs (for visualization); each representation makes different properties easy to verify."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-properties-of-relations",
      children: "7.3 Properties of Relations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let $R$ be a relation on a set $A$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reflexive:"
        }), " $a R a$ for all $a \\in A$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Irreflexive:"
        }), " $a \\not R a$ for all $a \\in A$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Symmetric:"
        }), " $a R b \\implies b R a$ for all $a, b \\in A$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Antisymmetric:"
        }), " $(a R b \\land b R a) \\implies a = b$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Asymmetric:"
        }), " $a R b \\implies b \\not R a$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transitive:"
        }), " $(a R b \\land b R c) \\implies a R c$ for all $a, b, c \\in A$."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function isReflexive(M: RelationMatrix): boolean {\n  for (let i = 0; i < M.length; i++) {\n    if (M[i][i] !== 1) return false;\n  }\n  return true;\n}\n\nfunction isSymmetric(M: RelationMatrix): boolean {\n  for (let i = 0; i < M.length; i++) {\n    for (let j = 0; j < M.length; j++) {\n      if (M[i][j] !== M[j][i]) return false;\n    }\n  }\n  return true;\n}\n\nfunction isAntisymmetric(M: RelationMatrix): boolean {\n  for (let i = 0; i < M.length; i++) {\n    for (let j = 0; j < M.length; j++) {\n      if (i !== j && M[i][j] === 1 && M[j][i] === 1) return false;\n    }\n  }\n  return true;\n}\n\nfunction isTransitive(M: RelationMatrix): boolean {\n  const M2 = compose(M, M);\n  for (let i = 0; i < M.length; i++) {\n    for (let j = 0; j < M.length; j++) {\n      if (M2[i][j] === 1 && M[i][j] !== 1) return false;\n    }\n  }\n  return true;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The four core properties ? reflexive, symmetric, antisymmetric, transitive ? form the vocabulary for classifying any binary relation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-combining-relations",
      children: "7.4 Combining Relations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$R$ and $S$ can be combined via set operations ($R \\cup S$, $R \\cap S$, $R \\setminus S$)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Composition:"
      }), " $S \\circ R = {(a, c) \\mid \\exists b \\in A,; (a, b) \\in R \\land (b, c) \\in S}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Powers:"
      }), " $R^n = R \\circ R \\circ \\cdots \\circ R$ ($n$ times). $R^0$ is the identity relation ${(a, a) \\mid a \\in A}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 7.1 (Associativity of composition)."
      }), " $(R \\circ S) \\circ T = R \\circ (S \\circ T)$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 7.2 (Powers and transitivity)."
      }), " $R$ is transitive iff $R^2 \\subseteq R$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Composition chains relations together ($a R b$ and $b S c$ give $a (S \\circ R) c$); powers iterate a single relation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-closures",
      children: "7.5 Closures"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reflexive closure"
      }), " of $R$ is $R \\cup {(a, a) \\mid a \\in A} = R \\cup \\Delta$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "symmetric closure"
      }), " is $R \\cup R^{-1}$ where $R^{-1} = {(b, a) \\mid (a, b) \\in R}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "transitive closure"
      }), " is $\\bigcup_{n=1}^{\\infty} R^n$. Computed via ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warshall's algorithm"
      }), " or by finding reachability in the digraph."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Warshall's algorithm"
      }), " computes the transitive closure in $O(n^3)$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Let W_k[i,j] = 1 iff there is a path from i to j using intermediate vertices only from {1,...,k}\nInitialize W_0 = M_R\nFor k = 1 to n:\n  For i = 1 to n:\n    For j = 1 to n:\n      W_k[i,j] = W_{k-1}[i,j] OR (W_{k-1}[i,k] AND W_{k-1}[k,j])\nReturn W_n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function warshall(M: RelationMatrix): RelationMatrix {\n  const n = M.length;\n  const W = M.map(row => [...row]); // deep copy\n  for (let k = 0; k < n; k++) {\n    for (let i = 0; i < n; i++) {\n      for (let j = 0; j < n; j++) {\n        W[i][j] = W[i][j] || (W[i][k] && W[k][j]) ? 1 : 0;\n      }\n    }\n  }\n  return W;\n}\n\nconst R: RelationMatrix = [\n  [0, 1, 0, 0],\n  [0, 0, 1, 0],\n  [0, 0, 0, 1],\n  [1, 0, 0, 0],\n];\nconsole.log(warshall(R));\n// [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Closures add the minimum number of ordered pairs needed to make a relation reflexive, symmetric, or transitive without changing its original content."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Warshall's algorithm computes transitive closure in $O(n^3)$ using dynamic programming ? it is essentially Floyd-Warshall for reachability on unweighted graphs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "76-equivalence-relations",
      children: "7.6 Equivalence Relations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition."
      }), " A relation $R$ on $A$ is an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "equivalence relation"
      }), " if it is reflexive, symmetric, and transitive."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Equivalence class"
      }), " of $a$: $[a] = {b \\in A \\mid a R b}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 7.3 (Partition)."
      }), " The equivalence classes of an equivalence relation on $A$ form a partition of $A$ (disjoint, nonempty, covering all of $A$). Conversely, any partition of $A$ defines an equivalence relation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties of equivalence classes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$a \\in [a]$ (reflexivity)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$[a] = [b]$ iff $a R b$ (equivalent elements share the same class)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$[a] \\cap [b] = \\emptyset$ iff $\\neg(a R b)$ (classes are disjoint or identical)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function computeEquivalenceClasses(set: number[], relation: RelationMatrix): number[][] {\n  const n = set.length;\n  const visited = new Array(n).fill(false);\n  const classes: number[][] = [];\n  for (let i = 0; i < n; i++) {\n    if (!visited[i]) {\n      const cls: number[] = [];\n      for (let j = 0; j < n; j++) {\n        if (relation[i][j]) { visited[j] = true; cls.push(set[j]); }\n      }\n      classes.push(cls);\n    }\n  }\n  return classes;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " An equivalence relation groups elements into equivalence classes that partition the set ? two equivalence classes are either identical or disjoint."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "77-partial-orders",
      children: "7.7 Partial Orders"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition."
      }), " A relation $R$ on $A$ is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "partial order"
      }), " if it is reflexive, antisymmetric, and transitive. Denoted $\\preceq$ or $\\leq$. The pair $(A, \\preceq)$ is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "partially ordered set"
      }), " (poset)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Elements $a$ and $b$ are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comparable"
      }), " if $a \\preceq b$ or $b \\preceq a$. A poset where every pair is comparable is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "total order"
      }), " (chain)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hasse diagrams"
      }), " are digraphs of partial orders drawn with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transitive edges omitted."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reflexive loops omitted."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Arrows oriented upward (edges are undirected, direction implied by vertical position)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Special elements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maximal:"
        }), " no element is greater."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Minimal:"
        }), " no element is smaller."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Greatest:"
        }), " greater than or equal to all."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Least:"
        }), " less than or equal to all."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Upper bound:"
        }), " $u$ with $a \\preceq u$ for all $a$ in a subset."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Least upper bound (supremum):"
        }), " the smallest upper bound."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Greatest lower bound (infimum):"
        }), " the largest lower bound."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lattice"
      }), " is a poset where every pair of elements has a supremum and an infimum."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Topological sorting:"
      }), " A linear ordering of a poset consistent with the partial order (if $a \\preceq b$, then $a$ comes before $b$)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function topologicalSort(n: number, edges: [number, number][]): number[] {\n  // Kahn's algorithm\n  const inDegree = new Array(n).fill(0);\n  const adj: number[][] = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    inDegree[v]++;\n  }\n  const queue: number[] = [];\n  for (let i = 0; i < n; i++) {\n    if (inDegree[i] === 0) queue.push(i);\n  }\n  const result: number[] = [];\n  while (queue.length > 0) {\n    const u = queue.shift()!;\n    result.push(u);\n    for (const v of adj[u]) {\n      inDegree[v]--;\n      if (inDegree[v] === 0) queue.push(v);\n    }\n  }\n  return result; // If length !== n, graph has a cycle\n}\n\nconst deps: [number, number][] = [\n  [0, 2], [0, 3],  // a before c, d\n  [1, 3],           // b before d\n  [2, 4],           // c before e\n  [3, 4], [3, 5],   // d before e, f\n];\nconsole.log(topologicalSort(6, deps)); // e.g., [0, 1, 2, 3, 4, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A partial order is reflexive, antisymmetric, and transitive; Hasse diagrams visualize posets by omitting transitive and reflexive edges; topological sorting produces a linear extension."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "78-n-ary-relations",
      children: "7.8 n-ary Relations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "n-ary relation"
      }), " is a subset of $A_1 \\times A_2 \\times \\cdots \\times A_n$. Used in relational databases. Operations include projection ($\\Pi$) and join ($\\bowtie$)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projection:"
      }), " $\\Pi_{i_1,\\ldots,i_k}(R)$ selects specified columns from an n-ary relation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Selection:"
      }), " $\\sigma_{\\text{condition}}(R)$ selects rows satisfying a condition."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Join:"
      }), " $R \\bowtie S$ combines two relations based on a common attribute."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example (Database relation)."
      }), " A 3-ary relation $R \\subseteq \\text{Students} \\times \\text{Courses} \\times \\text{Grades}$:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Student"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Course"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Grade"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CS101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CS101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CS201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projection $\\Pi_{\\text{Student}}(R)$: ${\\text{Alice}, \\text{Bob}}$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " n-ary relations generalize binary relations to any number of sets and form the mathematical foundation of relational database theory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Distinction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reflexive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$a R a$ for all $a$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every element relates to itself"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\leq$ on numbers, subset relation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$a R b \\implies b R a$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equality, \"is-sibling-of\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Antisymmetric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$a R b \\land b R a \\implies a = b$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only identical elements are mutually related"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\leq$, divisibility, subset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$a R b \\land b R c \\implies a R c$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ancestry, ordering, divisibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalence Relation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reflexive + Symmetric + Transitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partitions the set into classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Congruence modulo $n$, same-color grouping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partial Order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reflexive + Antisymmetric + Transitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defines a hierarchy, not all pairs comparable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task dependencies, file-system directories"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lattice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poset with all supremums and infimums"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both operations defined for every pair"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean algebras, set inclusion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transitive Closure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\bigcup_{n \\geq 1} R^n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reachability in a directed graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph connectivity, database queries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition on $R$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Matrix Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Digraph Check"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reflexive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$(a,a) \\in R$ for all $a$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diagonal all 1s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop on every vertex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$a R b \\implies b R a$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$M_R = M_R^T$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All edges bidirectional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Antisymmetric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$a R b \\land b R a \\implies a=b$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$M_R \\land M_R^T \\leq I$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No two-way edges between distinct vertices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$a R b \\land b R c \\implies a R c$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$M_R^2 \\leq M_R$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If path of length 2 exists, direct edge too"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reflexive + Symmetric + Transitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All three checks pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Components are complete cliques (no edges between components)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partial Order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reflexive + Antisymmetric + Transitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anti-sym + transitivity + diagonal 1s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DAG with loops, upward orientation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Databases"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Graph Theory"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Programming"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scheduling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Relations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table schemas (n-ary), joins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge sets in graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type systems, subclass hierarchies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task dependency graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalence Relations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normalization, key uniqueness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connected components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "== operator, hash equality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grouping by resource requirements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partial Orders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema versioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DAGs, reachability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance hierarchies, type ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build systems (make), topological sort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transitive Closure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functional dependencies closure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reachability, connectivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prerequisite chains"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hasse Diagrams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Planar graph drawing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class hierarchy visualization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gantt chart of task ordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Topological Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query plan optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Module dependency ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Makefiles, task scheduling"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which properties does the relation $\\leq$ on $\\mathbb{Z}$ have?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Reflexive, symmetric, transitive"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Reflexive, antisymmetric, transitive"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Symmetric, antisymmetric, transitive"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Reflexive, symmetric, antisymmetric"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Reflexive ($a \\leq a$), antisymmetric ($a \\leq b \\land b \\leq a \\implies a=b$), and transitive ($a \\leq b \\land b \\leq c \\implies a \\leq c$). It is not symmetric ($3 \\leq 5$ but $5 \\not\\leq 3$)."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The relation $a R b \\iff a \\equiv b \\pmod{4}$ on $\\mathbb{Z}$ partitions $\\mathbb{Z}$ into how many equivalence classes?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 3"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 4"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Infinite"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** 4 ? the residue classes modulo 4 are $[0], [1], [2], [3]$."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a Hasse diagram, which edges are omitted?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) All edges"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Transitive and reflexive edges"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Only reflexive edges"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Only transitive edges"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Both transitive edges (those implied by transitivity) and reflexive loops (implied by reflexivity) are omitted to keep the diagram clean."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Warshall's algorithm computes the transitive closure in what time complexity?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $O(n)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $O(n^2)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $O(n^3)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $O(2^n)$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** $O(n^3)$ ? three nested loops over $n$ elements make it cubic."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is NOT a lattice operation?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Join (supremum)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Meet (infimum)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Composition"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Both join and meet exist for every pair"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** Composition is a relation operation, not a lattice operation. A lattice requires that every pair has a supremum and infimum."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 7.1"
      }), " (Properties). Let $R = {(1,1), (1,2), (2,2), (2,3), (3,3)}$ on $A = {1,2,3}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reflexive? Yes: $(1,1), (2,2), (3,3) \\in R$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Symmetric? No: $(1,2) \\in R$ but $(2,1) \\notin R$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Antisymmetric? Yes: no distinct $a,b$ satisfy both $(a,b)$ and $(b,a)$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transitive? Check: $(1,2),(2,3) \\implies (1,3)$ needed, but $(1,3) \\notin R$. So NOT transitive."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 7.2"
      }), " (Equivalence relation). On $\\mathbb{Z}$, define $a R b \\iff a \\equiv b \\pmod{3}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reflexive: $a \\equiv a \\pmod{3}$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Symmetric: $a \\equiv b \\pmod{3} \\implies b \\equiv a \\pmod{3}$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transitive: $a \\equiv b$ and $b \\equiv c \\pmod{3}$ implies $a \\equiv c \\pmod{3}$.\nClasses: $[0] = {\\ldots, -3, 0, 3, 6, \\ldots}$, $[1] = {\\ldots, -2, 1, 4, \\ldots}$, $[2] = {\\ldots, -1, 2, 5, \\ldots}$."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 7.3"
      }), " (Partial order). The divisibility relation on ${1, 2, 3, 6, 9, 18}$: $a \\preceq b \\iff a \\mid b$.\nHasse diagram: 1 at bottom, above it 2, 3; above those 6, 9; 18 at top."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 7.4"
      }), " (Transitive closure by Warshall's algorithm). Compute the transitive closure of $R = {(1,2), (2,3), (3,1)}$ on ${1,2,3}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " Initial matrix $M_0 = \\begin{pmatrix}0 & 1 & 0\\ 0 & 0 & 1\\ 1 & 0 & 0\\end{pmatrix}$. Applying Warshall's yields $M_3 = \\begin{pmatrix}1 & 1 & 1\\ 1 & 1 & 1\\ 1 & 1 & 1\\end{pmatrix}$, so the transitive closure is $A \\times A$ (all pairs)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 7.5"
      }), " (Topological sort). Topologically sort the poset $({a,b,c,d,e,f}, \\preceq)$ where $a \\preceq c$, $a \\preceq d$, $b \\preceq d$, $c \\preceq e$, $d \\preceq e$, $d \\preceq f$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "One valid ordering: $a, b, c, d, e, f$. (Check: every precedence relation is satisfied.)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 7.6"
      }), " (Equivalence relation TypeScript)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Relation<T> = (a: T, b: T) => boolean;\n\nfunction isEquivalenceRelation<T>(set: T[], rel: Relation<T>): boolean {\n  // Reflexive\n  for (const a of set) { if (!rel(a, a)) return false; }\n  // Symmetric\n  for (const a of set) {\n    for (const b of set) {\n      if (rel(a, b) !== rel(b, a)) return false;\n    }\n  }\n  // Transitive\n  for (const a of set) {\n    for (const b of set) {\n      for (const c of set) {\n        if (rel(a, b) && rel(b, c) && !rel(a, c)) return false;\n      }\n    }\n  }\n  return true;\n}\n\nconst sameMod3: Relation<number> = (a, b) => (a - b) % 3 === 0;\nconsole.log(isEquivalenceRelation([0, 1, 2, 3, 4, 5], sameMod3)); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 7.7"
      }), " (Partial order TypeScript). Check if the subset relation is a partial order."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function subset<T>(a: Set<T>, b: Set<T>): boolean {\n  for (const x of a) if (!b.has(x)) return false;\n  return true;\n}\n\n// Reflexive: A ? A always ?\n// Antisymmetric: A ? B and B ? A ? A = B ?\n// Transitive: A ? B and B ? C ? A ? C ?\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// --- Relation Property Checker ---\ntype Relation = [number, number][];\n\nfunction isReflexive(rel: Relation, set: number[]): boolean {\n  return set.every(x => rel.some(([a]) => a === x && a === x));\n}\nfunction isSymmetric(rel: Relation): boolean {\n  return rel.every(([a, b]) => rel.some(([c, d]) => a === d && b === c));\n}\nfunction isAntisymmetric(rel: Relation): boolean {\n  return rel.every(([a, b]) => {\n    if (a === b) return true;\n    return !rel.some(([c, d]) => a === d && b === c);\n  });\n}\nfunction isTransitive(rel: Relation): boolean {\n  return rel.every(([a, b]) =>\n    rel.every(([c, d]) =>\n      b !== c || rel.some(([e, f]) => e === a && f === d)\n    )\n  );\n}\n\nconst S = [1, 2, 3];\nconst R: Relation = [[1,1],[2,2],[3,3],[1,2],[2,1],[1,3],[3,1]];\nconsole.log('Reflexive:', isReflexive(R, S));   // true\nconsole.log('Symmetric:', isSymmetric(R));      // true\nconsole.log('Transitive:', isTransitive(R));    // false (2,1)+(1,3)?(2,3) missing\n\n// --- Equivalence Relation Checker ---\nfunction isEquivalence(rel: Relation, set: number[]): boolean {\n  return isReflexive(rel, set) && isSymmetric(rel) && isTransitive(rel);\n}\nconst eqRel: Relation = [[1,1],[2,2],[3,3],[1,2],[2,1]];\nconsole.log('Is equivalence:', isEquivalence(eqRel, [1,2,3]));\n\n// --- Transitive Closure (Warshall's Algorithm) ---\nfunction transitiveClosure(matrix: boolean[][]): boolean[][] {\n  const n = matrix.length;\n  const tc = matrix.map(row => [...row]);\n  for (let k = 0; k < n; k++)\n    for (let i = 0; i < n; i++)\n      for (let j = 0; j < n; j++)\n        tc[i][j] = tc[i][j] || (tc[i][k] && tc[k][j]);\n  return tc;\n}\nconst adjMatrix = [\n  [false, true, false],\n  [false, false, true],\n  [false, false, false]\n];\nconst closure = transitiveClosure(adjMatrix);\nconsole.log('Transitive closure:', closure);\n// [[false,true,true],[false,false,true],[false,false,false]]\n\n// --- Partial Order Verifier ---\nfunction isPartialOrder(rel: Relation, set: number[]): boolean {\n  return isReflexive(rel, set) && isAntisymmetric(rel) && isTransitive(rel);\n}\nconst poset: Relation = [[1,1],[2,2],[3,3],[4,4],[1,2],[1,3],[2,4],[3,4],[1,4]];\nconsole.log('Is partial order:', isPartialOrder(poset, [1,2,3,4])); // true\n\n// --- Hasse Diagram Level Generator ---\nfunction hasseLevels(rel: Relation, set: number[]): Map<number, number> {\n  const levels = new Map<number, number>();\n  const sorted = [...set].sort((a,b) => {\n    const ab = rel.some(([x,y]) => x===a && y===b);\n    const ba = rel.some(([x,y]) => x===b && y===a);\n    if (ab && !ba) return -1;\n    if (ba && !ab) return 1;\n    return 0;\n  });\n  sorted.forEach((x, i) => levels.set(x, i));\n  return levels;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "console.log('Reflexive:', isReflexive(R, [1,2,3]));  // true (has (1,1),(2,2),(3,3))\nconsole.log('Symmetric:', isSymmetric(R));            // true (pairs are symmetric)\nconsole.log('Transitive:', isTransitive(R));          // check\nconsole.log('Antisymmetric:', isAntisymmetric(R));    // check\n\n// --- Equivalence Class Partitioner ---\nfunction equivalenceClasses<T>(set: T[], relation: (a: T, b: T) => boolean): T[][] {\n  const remaining = new Set(set);\n  const classes: T[][] = [];\n  for (const elem of set) {\n    if (!remaining.has(elem)) continue;\n    const eqClass = set.filter(x => remaining.has(x) && relation(elem, x));\n    eqClass.forEach(x => remaining.delete(x));\n    classes.push(eqClass);\n  }\n  return classes;\n}\nconst sameParity = (a: number, b: number) => a % 2 === b % 2;\nconsole.log('\\nEquivalence classes (same parity) on [1..5]:', equivalenceClasses([1,2,3,4,5], sameParity));\n\n// --- Partial Order Checker ---\nfunction isPartialOrder<T>(set: T[], rel: [T, T][]): boolean {\n  const has = (x: T, y: T) => rel.some(p => p[0] === x && p[1] === y);\n  return set.every(x => has(x, x)) &&                                  // reflexive\n    rel.every(([a, b]) => !has(b, a) || a === b) &&                   // antisymmetric\n    rel.every(([a, b]) => rel.every(([c, d]) => b !== c || has(a, d))); // transitive\n}\nconst poset: [number, number][] = [[1,1],[2,2],[3,3],[1,2],[1,3],[2,3]];\nconsole.log('\\nIs partial order:', isPartialOrder([1,2,3], poset));\n\n// --- Transitive Closure (Warshall's Algorithm) ---\nfunction transitiveClosure(adj: boolean[][]): boolean[][] {\n  const n = adj.length;\n  const tc = adj.map(row => [...row]);\n  for (let k = 0; k < n; k++)\n    for (let i = 0; i < n; i++)\n      for (let j = 0; j < n; j++)\n        tc[i][j] = tc[i][j] || (tc[i][k] && tc[k][j]);\n  return tc;\n}\nconst graph: boolean[][] = [\n  [false, true, false, false],\n  [false, false, true, false],\n  [false, false, false, true],\n  [false, false, false, false]\n];\nconst tc = transitiveClosure(graph);\nconsole.log('\\nTransitive closure (1?2?3?4):');\ntc.forEach((r, i) => console.log(`  ${i}: ${r.map(v => v ? '1' : '0').join(' ')}`));\n\n// --- Topological Sort with Kahn's Algorithm ---\nfunction topologicalSort(n: number, edges: [number, number][]): number[] | null {\n  const inDegree = new Array(n).fill(0);\n  const adj: number[][] = Array.from({length: n}, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); inDegree[v]++; }\n  const queue: number[] = [];\n  for (let i = 0; i < n; i++) if (inDegree[i] === 0) queue.push(i);\n  const result: number[] = [];\n  while (queue.length > 0) {\n    const u = queue.shift()!;\n    result.push(u);\n    for (const v of adj[u]) if (--inDegree[v] === 0) queue.push(v);\n  }\n  return result.length === n ? result : null;\n}\nconst deps: [number, number][] = [[0,2],[1,2],[2,3],[3,4],[2,5]];\nconsole.log('\\nTopological sort order:', topologicalSort(6, deps));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// relations\n// sets-graphs-probability implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'relations', data: { topic: 'sets-graphs-probability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// relations - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'discrete-math demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'discrete-mathematics', chapter: 'relations' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('discrete-math'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Relations are sets of ordered pairs. They can be matrices or digraphs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reflexive, symmetric, antisymmetric, transitive properties define relation types."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Equivalence relations partition the set into equivalence classes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partial orders are reflexive, antisymmetric, transitive; visualized via Hasse diagrams."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Closures add minimum pairs to achieve a desired property."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Warshall's algorithm computes transitive closure in $O(n^3)$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Topological sort produces a linear extension consistent with a partial order."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check diagonal for reflexivity"
        }), " ? all ones on the diagonal of the matrix."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check symmetry via transpose"
        }), " ? $M_R = M_R^T$ means symmetric."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use Warshall for reachability"
        }), " ? transitive closure tells you what's connected."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Equivalence = partition"
        }), " ? every equivalence relation splits the set into classes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Partial order = hierarchy"
        }), " ? Hasse diagrams make hierarchies readable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Topological sort for dependencies"
        }), " ? Kahn's algorithm handles scheduling."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "79-relation-property-checker-in-typescript",
      children: "7.9 Relation Property Checker in TypeScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function isReflexive<T>(R: [T, T][], A: T[]): boolean {\n  return A.every(a => R.some(([x, y]) => x === a && y === a));\n}\n\nfunction isIrreflexive<T>(R: [T, T][], A: T[]): boolean {\n  return A.every(a => !R.some(([x, y]) => x === a && y === a));\n}\n\nfunction isSymmetric<T>(R: [T, T][]): boolean {\n  return R.every(([a, b]) => R.some(([x, y]) => x === b && y === a));\n}\n\nfunction isAntisymmetric<T>(R: [T, T][]): boolean {\n  return R.every(([a, b]) =>\n    a === b || !R.some(([x, y]) => x === b && y === a)\n  );\n}\n\nfunction isTransitive<T>(R: [T, T][]): boolean {\n  return R.every(([a, b]) =>\n    R.every(([c, d]) =>\n      b !== c || R.some(([x, y]) => x === a && y === d)\n    )\n  );\n}\n\nfunction isEquivalenceRelation<T>(R: [T, T][], A: T[]): boolean {\n  return isReflexive(R, A) && isSymmetric(R) && isTransitive(R);\n}\n\nfunction isPartialOrder<T>(R: [T, T][], A: T[]): boolean {\n  return isReflexive(R, A) && isAntisymmetric(R) && isTransitive(R);\n}\n\n// Example: R = {(1,1), (1,2), (2,1), (2,2), (3,3)} on {1,2,3}\nconst R1: [number, number][] = [[1,1], [1,2], [2,1], [2,2], [3,3]];\nconsole.log(isEquivalenceRelation(R1, [1,2,3])); // false (not transitive: 1R2,2R1 missing 1R1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "710-warshalls-algorithm--transitive-closure",
      children: "7.10 Warshall's Algorithm ? Transitive Closure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Warshall's algorithm"
      }), " computes the transitive closure of a relation in $O(n^3)$ time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function warshall(adj: boolean[][]): boolean[][] {\n  const n = adj.length;\n  const closure = adj.map(row => [...row]);\n\n  for (let k = 0; k < n; k++) {\n    for (let i = 0; i < n; i++) {\n      for (let j = 0; j < n; j++) {\n        closure[i][j] = closure[i][j] || (closure[i][k] && closure[k][j]);\n      }\n    }\n  }\n  return closure;\n}\n\nfunction relationToMatrix<T>(R: [T, T][], A: T[]): boolean[][] {\n  const index = new Map(A.map((v, i) => [v, i]));\n  const n = A.length;\n  const M = Array.from({ length: n }, () => new Array(n).fill(false));\n  for (const [a, b] of R) {\n    M[index.get(a)!][index.get(b)!] = true;\n  }\n  return M;\n}\n\nfunction matrixToRelation<T>(M: boolean[][], A: T[]): [T, T][] {\n  const R: [T, T][] = [];\n  for (let i = 0; i < M.length; i++) {\n    for (let j = 0; j < M[i].length; j++) {\n      if (M[i][j]) R.push([A[i], A[j]]);\n    }\n  }\n  return R;\n}\n\nconst A = [1, 2, 3, 4];\nconst R2: [number, number][] = [[1,3], [2,1], [3,2], [4,3]];\nconst M = relationToMatrix(R2, A);\nconst closure = warshall(M);\nconsole.log(matrixToRelation(closure, A));\n// [(1,1), (1,2), (1,3), (2,1), (2,2), (2,3), (3,1), (3,2), (3,3), (4,1), (4,2), (4,3)]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "711-composition-of-relations",
      children: "7.11 Composition of Relations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 7.10 (Composition)."
      }), " $S \\circ R = {(a, c) \\mid \\exists b: (a, b) \\in R \\land (b, c) \\in S}$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function composeRelations<T>(\n  R: [T, T][],\n  S: [T, T][]\n): [T, T][] {\n  const result: [T, T][] = [];\n  for (const [a, b] of R) {\n    for (const [c, d] of S) {\n      if (b === c) result.push([a, d]);\n    }\n  }\n  return result;\n}\n\n// R = {(1,2), (2,3)}, S = {(2,4), (3,5)}\n// S ? R = {(1,4), (1,5)}\nconsole.log(composeRelations([[1,2], [2,3]], [[2,4], [3,5]]));\n// [[1,4], [1,5]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "712-equivalence-relations-and-partitions",
      children: "7.12 Equivalence Relations and Partitions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 7.4."
      }), " Every equivalence relation on $A$ induces a partition of $A$, and every partition of $A$ defines an equivalence relation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function equivalenceClasses<T>(R: [T, T][], A: T[]): Set<T>[] {\n  const classes: Set<T>[] = [];\n  const visited = new Set<T>();\n\n  for (const start of A) {\n    if (visited.has(start)) continue;\n    const cls = new Set<T>();\n    const stack = [start];\n    while (stack.length > 0) {\n      const a = stack.pop()!;\n      if (visited.has(a)) continue;\n      visited.add(a);\n      cls.add(a);\n      for (const [x, y] of R) {\n        if (x === a && !visited.has(y)) stack.push(y);\n        if (y === a && !visited.has(x)) stack.push(x);\n      }\n    }\n    if (cls.size > 0) classes.push(cls);\n  }\n  return classes;\n}\n\nconst R3: [number, number][] = [\n  [1,1], [1,2], [2,1], [2,2], [3,3], [4,4], [4,5], [5,4], [5,5]\n];\nconst classes = equivalenceClasses(R3, [1,2,3,4,5]);\nconsole.log(classes.map(c => [...c])); // [[1,2], [3], [4,5]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "713-hasse-diagrams--lattices",
      children: "7.13 Hasse Diagrams ? Lattices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lattice"
      }), " is a poset where every pair of elements has a unique supremum (join) and infimum (meet)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Lattice<T> {\n  elements: T[];\n  leq: (a: T, b: T) => boolean;\n  join: (a: T, b: T) => T;\n  meet: (a: T, b: T) => T;\n}\n\nfunction isLattice<T>(L: Lattice<T>): boolean {\n  const { elements, leq, join, meet } = L;\n  for (const a of elements) {\n    for (const b of elements) {\n      const j = join(a, b);\n      const m = meet(a, b);\n      if (!leq(a, j) || !leq(b, j)) return false;\n      if (!leq(m, a) || !leq(m, b)) return false;\n    }\n  }\n  return true;\n}\n\n// The divisibility lattice on {1,2,3,4,6,12}\nconst divLattice: Lattice<number> = {\n  elements: [1, 2, 3, 4, 6, 12],\n  leq: (a, b) => b % a === 0,\n  join: (a, b) => lcm(a, b),\n  meet: (a, b) => gcd(a, b)\n};\nconsole.log(isLattice(divLattice)); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Hasse Diagram: Divisibility on {1,2,3,4,6,12}\"\n        A[\"12\"] --> B[\"4\"]\n        A --> C[\"6\"]\n        B --> D[\"2\"]\n        C --> D\n        C --> E[\"3\"]\n        D --> F[\"1\"]\n        E --> F\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 7.6"
      }), " (Topological sort via Kahn's algorithm)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function topologicalSortKahn(\n  vertices: number[],\n  edges: [number, number][]\n): number[] | null {\n  const adj = new Map<number, number[]>();\n  const inDeg = new Map<number, number>();\n  for (const v of vertices) { adj.set(v, []); inDeg.set(v, 0); }\n  for (const [u, v] of edges) {\n    adj.get(u)!.push(v);\n    inDeg.set(v, (inDeg.get(v) || 0) + 1);\n  }\n  const queue: number[] = [];\n  for (const v of vertices) if (inDeg.get(v) === 0) queue.push(v);\n\n  const result: number[] = [];\n  while (queue.length > 0) {\n    const u = queue.shift()!;\n    result.push(u);\n    for (const v of adj.get(u) || []) {\n      inDeg.set(v, inDeg.get(v)! - 1);\n      if (inDeg.get(v) === 0) queue.push(v);\n    }\n  }\n  return result.length === vertices.length ? result : null;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove that if $R$ is an equivalence relation, then $R^{-1}$ is also an equivalence relation."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show that the relation \"has the same birthday as\" on the set of all people is an equivalence relation. Describe its equivalence classes."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compute the transitive closure of $R = {(1,2), (2,3), (3,4), (4,1)}$ on ${1,2,3,4}$ using Warshall's algorithm."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Write a TypeScript function ", (0,jsx_runtime.jsx)(_components.code, {
            children: "isTotalOrder<T>"
          }), " that checks if a relation is a total order (partial order where all pairs are comparable)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Find all linear extensions (topological sorts) of the poset with $a < b$, $a < c$, $b < d$, $c < d$."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List all properties of the relation $\\leq$ on $\\mathbb{Z}$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How many equivalence relations exist on a 3-element set?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between antisymmetric and asymmetric?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Give an example of a relation that is both symmetric and antisymmetric."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What does a Hasse diagram omit?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Determine whether $R = {(1,1), (1,2), (2,1), (2,2), (3,3), (4,4)}$ on ${1,2,3,4}$ is an equivalence relation. If so, give the classes."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Let $R$ be a relation on $\\mathbb{Z}^+$ defined by $a R b$ iff $a$ and $b$ have the same number of prime factors (counting multiplicity). Prove $R$ is an equivalence relation and describe the classes."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Draw the Hasse diagram for the relation \"divides\" on ${1,2,3,4,5,6,7,8,9,10}$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove: If $R$ is a partial order, then $R^{-1}$ is also a partial order."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use Warshall's algorithm to find the transitive closure of $R = {(1,3), (2,1), (3,2), (4,3)}$ on ${1,2,3,4}$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Give a topological ordering for the poset: $a < c$, $a < d$, $b < d$, $b < e$, $c < f$, $d < f$, $e < f$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Determine if the relation $R$ on ${1,2,3,4}$ with $M_R = \\begin{pmatrix}1 & 0 & 1 & 0\\ 0 & 1 & 0 & 1\\ 1 & 0 & 1 & 0\\ 0 & 1 & 0 & 1\\end{pmatrix}$ is an equivalence relation."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A relation $R$ on $A$ is ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "circular"
          }), " if $a R b \\land b R c \\implies c R a$. Prove: $R$ is reflexive and circular if and only if $R$ is an equivalence relation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Give a combinatorial proof: the number of equivalence relations on an $n$-element set equals the $n$-th Bell number $B_n$, where $B_{n+1} = \\sum_{k=0}^{n} \\binom{n}{k} B_k$ and $B_0 = 1$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove that if $R$ is a partial order on $A$, then the transitive closure of $R \\cup R^{-1}$ is the universal relation $A \\times A$ if and only if $(A, R)$ is a total order."
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