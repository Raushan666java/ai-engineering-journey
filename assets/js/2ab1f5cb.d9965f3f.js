"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[81443],{

/***/ 78077
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_algorithms_16_approximation_md_2ab_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-algorithms-16-approximation-md-2ab.json
const site_docs_courses_algorithms_16_approximation_md_2ab_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/algorithms/16-approximation","title":"Chapter 16: Approximation Algorithms","description":"Prerequisites NP-Completeness — Understanding of NP-hard problems and reductions | Next Randomized Algorithms — From deterministic approximation to probabilistic methods","source":"@site/docs/courses/algorithms/16-approximation.md","sourceDirName":"courses/algorithms","slug":"/algorithms/16-approximation","permalink":"/ai-engineering-journey/algorithms/16-approximation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"id":"16-approximation","slug":"/algorithms/16-approximation","title":"Chapter 16: Approximation Algorithms","sidebar_label":"Chapter 16: Approximation Algorithms","sidebar_position":16},"sidebar":"course-algorithms","previous":{"title":"Chapter 15: NP-Completeness","permalink":"/ai-engineering-journey/algorithms/15-np-completeness"},"next":{"title":"Chapter 17: Randomized Algorithms","permalink":"/ai-engineering-journey/algorithms/17-randomized"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/algorithms/16-approximation.md


const frontMatter = {
	id: '16-approximation',
	slug: '/algorithms/16-approximation',
	title: 'Chapter 16: Approximation Algorithms',
	sidebar_label: 'Chapter 16: Approximation Algorithms',
	sidebar_position: 16
};
const contentTitle = 'Chapter 16: Approximation Algorithms';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Approximation Matters",
  "id": "why-approximation-matters",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 3
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 3
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "16.1 Approximation Ratio",
  "id": "161-approximation-ratio",
  "level": 3
}, {
  "value": "16.2 Vertex Cover: 2-Approximation",
  "id": "162-vertex-cover-2-approximation",
  "level": 3
}, {
  "value": "16.3 Traveling Salesman: 2-Approximation",
  "id": "163-traveling-salesman-2-approximation",
  "level": 3
}, {
  "value": "16.4 Set Cover",
  "id": "164-set-cover",
  "level": 3
}, {
  "value": "16.5 MAX-CUT",
  "id": "165-max-cut",
  "level": 3
}, {
  "value": "16.6 Knapsack Approximation Scheme",
  "id": "166-knapsack-approximation-scheme",
  "level": 3
}, {
  "value": "16.7 Approximation Scheme Types: PTAS vs FPTAS",
  "id": "167-approximation-scheme-types-ptas-vs-fptas",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "How to Design Approximation Algorithms",
  "id": "how-to-design-approximation-algorithms",
  "level": 3
}, {
  "value": "Lower Bounds on Approximation",
  "id": "lower-bounds-on-approximation",
  "level": 3
}, {
  "value": "Key Interview Questions",
  "id": "key-interview-questions",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 16.1: Vertex Cover 2-Approximation in C++",
  "id": "example-161-vertex-cover-2-approximation-in-c",
  "level": 3
}, {
  "value": "Example 16.2: Metric TSP 2-Approximation",
  "id": "example-162-metric-tsp-2-approximation",
  "level": 3
}, {
  "value": "Example 16.3: Greedy Set Cover",
  "id": "example-163-greedy-set-cover",
  "level": 3
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 3
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
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
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 3
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
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    strong: "strong",
    sub: "sub",
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
        id: "chapter-16-approximation-algorithms",
        children: "Chapter 16: Approximation Algorithms"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/15-np-completeness",
          children: "Chapter 15: NP-Completeness"
        }), " — Understanding of NP-hard problems and reductions | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/17-randomized",
          children: "Chapter 17: Randomized Algorithms"
        }), " — From deterministic approximation to probabilistic methods"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
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
        href: "../../assets/images/lessons/algorithms/16-approximation/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/16-approximation/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/algorithms/16-approximation/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/16-approximation/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/algorithms/16-approximation/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/16-approximation/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define approximation ratio and approximation scheme (PTAS, FPTAS)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement and analyze the 2-approximation for vertex cover."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the MST-based 2-approximation for TSP and understand Christofides' improvement."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the greedy set cover algorithm and its O(log n) approximation ratio."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the probabilistic method for MAX-CUT approximation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design and analyze a polynomial-time approximation scheme for Knapsack."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-approximation-matters",
      children: "Why Approximation Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine you run a delivery company and need to find the shortest route visiting 10,000 cities. The optimal route would save millions in fuel — but finding it is NP-hard. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Is it worth waiting years for the perfect answer, or can you get within 5% of optimal in seconds?"
      }), " In business, \"good enough\" often wins. Approximation algorithms capture this trade-off: provably close to optimal, solvable in polynomial time."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " If Google Maps can't compute the absolute shortest route for a 50-stop delivery truck, it computes a route at most 2x longer — in milliseconds. The driver doesn't notice, and the company saves money. That's approximation in action."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Approximation Ratio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALG / OPT ≤ c (minimization)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measures how close an approximation gets to optimal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vertex Cover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pick both endpoints of uncovered edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple 2-approximation; greedy fails worse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TSP (Metric)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MST-based tour + shortcutting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-approximation; triangle inequality is essential"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Set Cover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pick set with best cost-per-new-element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)-approximation via greedy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX-CUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random assignment cuts at least half the edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5-approximation; derandomizable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Knapsack PTAS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Round profits, run DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Achieves (1+ε)-approximation in polynomial time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Approximation] --> B[Ratio Definition]\n    A --> C[Vertex Cover 2-approx]\n    A --> D[TSP 2-approx]\n    A --> E[Set Cover Olog n]\n    A --> F[MAX-CUT 0.5-approx]\n    A --> G[Knapsack PTAS]\n    A --> H[PTAS vs FPTAS]\n    C --> I[Pick both endpoints]\n    D --> J[MST + DFS shortcut]\n    E --> K[Greedy per-element cost]\n    F --> L[Random + Derandomize]\n    G --> M[Round + DP]\n    H --> N[1+ε scheme types]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch16-approximation.png",
        alt: "Approximation Algorithms Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "161-approximation-ratio",
      children: "16.1 Approximation Ratio"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 16.1."
      }), " An algorithm for a minimization problem has an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "approximation ratio"
      }), " ( \\rho ) if for every input instance:\n[\n\\frac{C_{\\text{alg}}}{C_{\\text{opt}}} \\le \\rho\n]\nwhere ( C_{\\text{alg}} ) is the cost of the algorithm's solution and ( C_{\\text{opt}} ) is the cost of the optimal solution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For maximization problems, the ratio is ( C_{\\text{opt}} / C_{\\text{alg}} \\le \\rho )."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 16.2."
      }), " A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "polynomial-time approximation scheme (PTAS)"
      }), " is an algorithm that, for any fixed ( \\epsilon > 0 ), achieves an approximation ratio of ( 1 + \\epsilon ) in time polynomial in ( n ) (but possibly exponential in ( 1/\\epsilon ))."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "fully polynomial-time approximation scheme (FPTAS)"
      }), " runs in time polynomial in both ( n ) and ( 1/\\epsilon )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "162-vertex-cover-2-approximation",
      children: "16.2 Vertex Cover: 2-Approximation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the smallest set of vertices that covers all edges."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A city needs security cameras to monitor every street intersection (edge). Each camera covers one intersection (vertex). Two cameras are needed per street — one at each endpoint. The city wants to minimize cameras while covering every street. Since finding the true minimum is NP-hard, they accept a solution with at most 2x the optimal number."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize an empty cover set ( C )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "While there are uncovered edges in ( E ):\na. Pick any remaining edge ( (u, v) ) from ( E ).\nb. Add both ( u ) and ( v ) to ( C ).\nc. Remove all edges incident to ( u ) or ( v ) from ( E )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return ( C )."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ApproxVertexCover(G(V, E)):\n    C ← ∅\n    while E ≠ ∅:\n        pick any (u, v) ∈ E\n        C ← C ∪ {u, v}\n        remove all edges incident to u or v from E\n    return C\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graph: 4 vertices, edges: (1-2, 2-3, 3-4, 1-4, 2-4)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Remaining Edges"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pick Edge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cover Set C"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Removed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1-2, 2-3, 3-4, 1-4, 2-4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1-2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1, 2}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1-2), (1-4), (2-3), (2-4) removed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3-4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3-4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1, 2, 3, 4}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3-4) removed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1, 2, 3, 4}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Done"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Result: Cover size = 4. Optimal cover = {2, 4} (size 2). Ratio = 4/2 = 2."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 16.1."
      }), " The maximal-matching algorithm is a 2-approximation for minimum vertex cover."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof."
      }), " Let ( M ) be the set of edges selected by the algorithm. These edges form a matching (no two share a vertex). Every vertex cover must include at least one endpoint of each edge in ( M ), so any optimal cover has size ( |C_{\\text{opt}}| \\ge |M| ). The algorithm selects ( 2|M| ) vertices (both endpoints of each matched edge), so ( |C_{\\text{alg}}| = 2|M| \\le 2|C_{\\text{opt}}| ). Hence the ratio is at most 2."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " ( O(V + E) ) — each edge examined at most once; removing incident edges can be done with adjacency tracking."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " ( O(V) ) for the cover set and removed flags."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementations:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <unordered_set>\n\nstd::vector<int> approxVertexCover(int n, std::vector<std::pair<int,int>> edges) {\n    std::vector<bool> removed(n, false);\n    std::vector<int> cover;\n    for (auto& [u, v] : edges) {\n        if (!removed[u] && !removed[v]) {\n            cover.push_back(u);\n            cover.push_back(v);\n            removed[u] = true;\n            removed[v] = true;\n        }\n    }\n    return cover;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def approx_vertex_cover(n, edges):\n    removed = [False] * n\n    cover = []\n    for u, v in edges:\n        if not removed[u] and not removed[v]:\n            cover.extend([u, v])\n            removed[u] = removed[v] = True\n    return cover\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\nList<Integer> approxVertexCover(int n, int[][] edges) {\n    boolean[] removed = new boolean[n];\n    List<Integer> cover = new ArrayList<>();\n    for (int[] e : edges) {\n        int u = e[0], v = e[1];\n        if (!removed[u] && !removed[v]) {\n            cover.add(u); cover.add(v);\n            removed[u] = removed[v] = true;\n        }\n    }\n    return cover;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement; only requires edge list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May select twice as many vertices as optimal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Runs in O(V+E) linear time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order-dependent; different edge orderings can give different covers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provably optimal in the sense that (2−ε)-approximation is NP-hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not exploit degree information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works on any undirected graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for weighted vertex cover"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disconnected graph:"
        }), " Works correctly; each component handled independently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single vertex, no edges:"
        }), " Returns empty cover (correct)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Complete graph K", (0,jsx_runtime.jsx)(_components.sub, {
            children: "n</sub>:"
          })]
        }), " Picks a single edge, adds 2 vertices, removes all edges. Cover size = 2, optimal = n−1. Ratio improves as n grows."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " The elegant proof: the selected edges form a matching, so any vertex cover must include at least one endpoint per edge. The algorithm picks both — hence at most 2x optimal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The greedy algorithm that picks the highest-degree vertex has a worse approximation ratio (O(log n)). The matching-based approach is simpler and better."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " The maximal-matching algorithm achieves a 2-approximation for vertex cover by selecting both endpoints of each matched edge — a canonical example of a pairing argument."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "163-traveling-salesman-2-approximation",
      children: "16.3 Traveling Salesman: 2-Approximation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem (Metric TSP):"
      }), " Given a complete graph with edge weights satisfying the triangle inequality, find the shortest tour visiting each vertex exactly once and returning to the start."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A courier needs to deliver packages to 15 locations and return to the warehouse. The triangle inequality holds (driving directly is always shorter than taking a detour). Computing the optimal route is NP-hard, but a route at most 2x the optimal can be computed in seconds using MST."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute the Minimum Spanning Tree (MST) of the graph using Prim's or Kruskal's."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform a DFS pre-order walk of the MST to obtain a list of visited vertices."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Append the starting vertex to form a cycle."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the total cost of the resulting tour."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ApproxTSP(G):\n    T ← MST(G)\n    order ← preorder_walk(T)\n    tour ← order + [order[0]]\n    return tour\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Points on a plane: A(0,0), B(1,2), C(4,0), D(3,3). Distances: AB=2.24, AC=4, AD=4.24, BC=3.61, BD=2.24, CD=3.16."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute MST (Prim's from A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edges: A-B, B-D, C-D"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MST structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A--B--D--C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-order DFS from A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A, B, D, C]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Form cycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A, B, D, C, A]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.24 + 2.24 + 3.16 + 4 = 11.64"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Optimal tour: A-B-D-C-A (same), cost 11.64. Ratio = 1."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a worse case: optimal might be A-C-B-D-A, but shortcutting preserves the bound."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 16.2."
      }), " The MST-based algorithm is a 2-approximation for metric TSP."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof."
      }), " Let ( c(T) ) be the MST cost. The optimal tour ( C_{\\text{opt}} ) has cost at least ( c(T) ) — removing any edge from the tour leaves a spanning tree, so OPT ≥ MST cost. A depth-first walk of the MST traverses each edge twice, giving cost ( 2c(T) ). Using the triangle inequality, shortcutting repeated vertices does not increase the cost. Thus ( c(C_{\\text{alg}}) \\le 2c(T) \\le 2c(C_{\\text{opt}}) )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Christofides' algorithm"
      }), " improves this to a 1.5-approximation by combining an MST with a minimum-weight perfect matching on odd-degree vertices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " ( O(V^2) ) with Prim's adjacency matrix, or ( O(E \\log V) ) with binary heap."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " ( O(V^2) ) for the distance matrix, ( O(V) ) for MST and tour."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementations:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <algorithm>\n#include <functional>\n\ndouble approxTSP(const std::vector<std::vector<double>>& dist) {\n    int n = static_cast<int>(dist.size());\n    std::vector<double> key(n, 1e18);\n    std::vector<int> parent(n, -1);\n    std::vector<bool> inMST(n, false);\n    key[0] = 0;\n    for (int i = 0; i < n; ++i) {\n        int u = -1;\n        for (int v = 0; v < n; ++v)\n            if (!inMST[v] && (u == -1 || key[v] < key[u]))\n                u = v;\n        inMST[u] = true;\n        for (int v = 0; v < n; ++v)\n            if (!inMST[v] && dist[u][v] < key[v]) {\n                key[v] = dist[u][v];\n                parent[v] = u;\n            }\n    }\n    std::vector<std::vector<int>> mst(n);\n    for (int v = 1; v < n; ++v) {\n        mst[v].push_back(parent[v]);\n        mst[parent[v]].push_back(v);\n    }\n    std::vector<int> tour;\n    std::function<void(int,int)> dfs = [&](int u, int p) {\n        tour.push_back(u);\n        for (int v : mst[u])\n            if (v != p) dfs(v, u);\n    };\n    dfs(0, -1);\n    tour.push_back(tour[0]);\n    double totalDist = 0;\n    for (size_t i = 0; i + 1 < tour.size(); ++i)\n        totalDist += dist[tour[i]][tour[i+1]];\n    return totalDist;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def approx_tsp(dist):\n    n = len(dist)\n    key = [float('inf')] * n\n    parent = [-1] * n\n    in_mst = [False] * n\n    key[0] = 0\n    for _ in range(n):\n        u = min((v for v in range(n) if not in_mst[v]), key=lambda v: key[v])\n        in_mst[u] = True\n        for v in range(n):\n            if not in_mst[v] and dist[u][v] < key[v]:\n                key[v] = dist[u][v]\n                parent[v] = u\n    mst = [[] for _ in range(n)]\n    for v in range(1, n):\n        mst[v].append(parent[v])\n        mst[parent[v]].append(v)\n    tour = []\n    def dfs(u, p):\n        tour.append(u)\n        for v in mst[u]:\n            if v != p: dfs(v, u)\n    dfs(0, -1)\n    tour.append(tour[0])\n    return sum(dist[tour[i]][tour[i+1]] for i in range(len(tour)-1))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "double approxTSP(double[][] dist) {\n    int n = dist.length;\n    double[] key = new double[n];\n    int[] parent = new int[n];\n    boolean[] inMST = new boolean[n];\n    Arrays.fill(key, Double.MAX_VALUE);\n    key[0] = 0;\n    for (int i = 0; i < n; i++) {\n        int u = -1;\n        for (int v = 0; v < n; v++)\n            if (!inMST[v] && (u == -1 || key[v] < key[u])) u = v;\n        inMST[u] = true;\n        for (int v = 0; v < n; v++)\n            if (!inMST[v] && dist[u][v] < key[v]) { key[v] = dist[u][v]; parent[v] = u; }\n    }\n    List<Integer>[] mst = new ArrayList[n];\n    for (int i = 0; i < n; i++) mst[i] = new ArrayList<>();\n    for (int v = 1; v < n; v++) { mst[v].add(parent[v]); mst[parent[v]].add(v); }\n    List<Integer> tour = new ArrayList<>();\n    dfs(0, -1, mst, tour);\n    tour.add(tour.get(0));\n    double total = 0;\n    for (int i = 0; i + 1 < tour.size(); i++)\n        total += dist[tour.get(i)][tour.get(i+1)];\n    return total;\n}\nvoid dfs(int u, int p, List<Integer>[] mst, List<Integer> tour) {\n    tour.add(u);\n    for (int v : mst[u]) if (v != p) dfs(v, p, mst, tour);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple: MST + DFS are standard textbook algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires triangle inequality; fails on general graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2-approximation guarantee is easy to prove"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Christofides gives 1.5-approx with similar ideas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Runs in O(V²) time, practical up to thousands of nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for asymmetric TSP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forms the foundation for Christofides' improvement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May produce tours with self-intersections in Euclidean space"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Two cities:"
        }), " MST has 1 edge; DFS tour is [0,1,0]; correct."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collinear points:"
        }), " Works; shortcutting may skip intermediate stops."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complete graph with uniform distances:"
        }), " Returns any permutation tour; all tours equal cost."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " For Euclidean TSP in the plane, there exists a PTAS (Arora 1998) that achieves (1+ε)-approximation using divide-and-conquer with dynamic programming."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " The 2-approximation does NOT work for general TSP (without triangle inequality). In general TSP, no polynomial-time constant-factor approximation exists unless P = NP."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "164-set-cover",
      children: "16.4 Set Cover"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a universe ( U ) of ( n ) elements and a collection of subsets ( S_1, \\ldots, S_m ) with costs, find the minimum-cost collection that covers all elements."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A hospital needs to stock medicines to cover all possible symptoms. Each medicine treats a specific set of symptoms and has a cost. The hospital wants the cheapest combination that covers all symptoms. Finding the optimal set is NP-hard, but a greedy approach gets within a logarithmic factor of optimal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize ", (0,jsx_runtime.jsx)(_components.code, {
          children: "uncovered"
        }), " = all elements, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cover"
        }), " = empty set."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While ", (0,jsx_runtime.jsx)(_components.code, {
          children: "uncovered"
        }), " is not empty:\na. Find the subset ( S_i ) that minimizes cost(( S_i )) / |( S_i ) ∩ uncovered| (cost per new element).\nb. Add ( S_i ) to the cover.\nc. Remove all elements of ( S_i ) from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "uncovered"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the cover."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GreedySetCover(U, S):\n    uncovered ← U\n    cover ← ∅\n    while uncovered ≠ ∅:\n        pick S_i minimizing cost(S_i) / |S_i ∩ uncovered|\n        cover ← cover ∪ {S_i}\n        uncovered ← uncovered \\ S_i\n    return cover\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Universe: {1, 2, 3, 4, 5}. Subsets: S1={1,2,3} cost=3, S2={2,4} cost=2, S3={3,4} cost=4, S4={4,5} cost=1."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Uncovered"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost/New Ratios"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pick"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Updated Uncovered"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,2,3,4,5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S1=3/3=1, S2=2/2=1, S3=4/2=2, S4=1/2=0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,2,3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1,2,3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S1=3/3=1, S2=2/1=2, S3=4/1=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cover = {S4, S1}, total cost = 4. Optimal cover = {S2, S4} cost = 3. Ratio = 4/3 ≈ 1.33."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 16.3."
      }), " The greedy set cover algorithm achieves an approximation ratio of ( H_n = \\sum_{i=1}^n 1/i \\approx \\ln n + \\gamma )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof."
      }), " When the optimal cover has cost ( C_{\\text{opt}} ), at any step there must exist a set with cost per uncovered element at most ( C_{\\text{opt}} / |\\text{uncovered}| ). The greedy algorithm picks at least this efficiently. Summing the harmonic series gives the bound. Formal proof: assign each element a \"price\" equal to the cost-per-new-element of the set that covers it. The total cost of the greedy is the sum of these prices. Since OPT ≤ C_opt, each element's price is bounded by C_opt / (remaining elements at that stage). Summing over elements yields C_opt · H_n."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tightness:"
      }), " There exist instances where the greedy algorithm achieves exactly ( \\ln n ) approximation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " ( O(m \\cdot n) ) per iteration, ( O(mn^2) ) worst case. With efficient data structures (bucket queues), ( O(m \\log m + n) )."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " ( O(n + m) ) for covered flags and subset references."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementations:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <unordered_set>\n#include <algorithm>\n\ndouble greedySetCover(const std::vector<std::unordered_set<int>>& subsets,\n                      const std::vector<double>& costs, int universeSize) {\n    std::vector<bool> covered(universeSize, false);\n    int remaining = universeSize;\n    double totalCost = 0;\n    std::vector<bool> used(subsets.size(), false);\n    while (remaining > 0) {\n        int bestIdx = -1;\n        double bestRatio = 1e18;\n        for (size_t i = 0; i < subsets.size(); ++i) {\n            if (used[i]) continue;\n            int newCovers = 0;\n            for (int elem : subsets[i])\n                if (!covered[elem]) ++newCovers;\n            if (newCovers == 0) continue;\n            double ratio = costs[i] / newCovers;\n            if (ratio < bestRatio) { bestRatio = ratio; bestIdx = i; }\n        }\n        if (bestIdx == -1) break;\n        used[bestIdx] = true;\n        totalCost += costs[bestIdx];\n        for (int elem : subsets[bestIdx])\n            if (!covered[elem]) { covered[elem] = true; --remaining; }\n    }\n    return totalCost;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def greedy_set_cover(subsets, costs, universe_size):\n    covered = [False] * universe_size\n    remaining = universe_size\n    total_cost = 0\n    used = [False] * len(subsets)\n    while remaining > 0:\n        best_idx = -1\n        best_ratio = float('inf')\n        for i, s in enumerate(subsets):\n            if used[i]: continue\n            new_covers = sum(1 for e in s if not covered[e])\n            if new_covers == 0: continue\n            ratio = costs[i] / new_covers\n            if ratio < best_ratio:\n                best_ratio = ratio\n                best_idx = i\n        if best_idx == -1: break\n        used[best_idx] = True\n        total_cost += costs[best_idx]\n        for e in subsets[best_idx]:\n            if not covered[e]:\n                covered[e] = True\n                remaining -= 1\n    return total_cost\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "double greedySetCover(List<Set<Integer>> subsets, double[] costs, int universeSize) {\n    boolean[] covered = new boolean[universeSize];\n    int remaining = universeSize;\n    double totalCost = 0;\n    boolean[] used = new boolean[subsets.size()];\n    while (remaining > 0) {\n        int bestIdx = -1;\n        double bestRatio = Double.MAX_VALUE;\n        for (int i = 0; i < subsets.size(); i++) {\n            if (used[i]) continue;\n            int newCovers = 0;\n            for (int e : subsets.get(i))\n                if (!covered[e]) newCovers++;\n            if (newCovers == 0) continue;\n            double ratio = costs[i] / newCovers;\n            if (ratio < bestRatio) { bestRatio = ratio; bestIdx = i; }\n        }\n        if (bestIdx == -1) break;\n        used[bestIdx] = true;\n        totalCost += costs[bestIdx];\n        for (int e : subsets.get(bestIdx))\n            if (!covered[e]) { covered[e] = true; remaining--; }\n    }\n    return totalCost;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple greedy rule; easy to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) ratio is suboptimal for small instances"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approximation ratio matches theoretical lower bound (unless P=NP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can pick many costly subsets if early choices are poor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles weighted subsets naturally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No constant-factor guarantee"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works for any finite universe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case ratio only reached on contrived instances"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single set covers everything:"
        }), " Algorithm picks it in one step; optimal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No subset covers a particular element:"
        }), " Loop breaks early; partial cover returned."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All subsets disjoint:"
        }), " Ratio can be arbitrarily bad (each new set covers exactly what's needed)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "165-max-cut",
      children: "16.5 MAX-CUT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an undirected graph, partition the vertices into two sets such that the number of edges crossing between the sets is maximized."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A social network wants to split users into two test groups for an A/B test such that as many friend connections as possible are between the two groups (to measure cross-group influence). Random assignment works surprisingly well — at least half the edges always cross the cut in expectation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Randomly assign each vertex to set A or B with probability 1/2."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Count the number of edges with endpoints in different sets."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(Optional) Derandomize using conditional expectations."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RandomMAXCUT(G):\n    for each vertex v:\n        assign v to set A or B uniformly at random\n    count = number of edges crossing between A and B\n    return count\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graph: Triangle A-B-C with all 3 edges."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Trial"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A Set"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B Set"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Crossing Edges"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Count"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{B, C}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A-B, A-C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A, C}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A-B, B-C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A, B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{C}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A-C, B-C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A, B, C}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expected value = (2+2+2+0)/4 = 1.5. Optimal cut = 2. Expected ratio = 0.75."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 16.4."
      }), " The random assignment algorithm achieves an expected 0.5-approximation for MAX-CUT."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof."
      }), " For each edge (u,v), the probability that u and v are in different sets is 1/2. By linearity of expectation, the expected number of crossing edges = m/2, where m is the total number of edges. The maximum possible cut is at most m, so E[ALG] ≥ m/2 ≥ OPT/2. Thus the expected approximation ratio is at least 1/2."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Derandomization using the method of conditional expectations:"
      }), " Process vertices one at a time. When assigning vertex v, compute the conditional expectation of crossing edges for each choice (A or B), given the assignments so far. Choose the option with higher conditional expectation. This guarantees at least m/2 crossing edges deterministically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " ( O(V + E) ) — one pass to assign, one pass to count."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " ( O(V) ) for the assignment array."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementations:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <cstdlib>\n\nint randomMAXCUT(int n, const std::vector<std::pair<int,int>>& edges) {\n    std::vector<bool> side(n);\n    for (int i = 0; i < n; i++)\n        side[i] = rand() % 2;\n    int cutSize = 0;\n    for (auto& [u, v] : edges)\n        if (side[u] != side[v]) cutSize++;\n    return cutSize;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\n\ndef random_max_cut(n, edges):\n    side = [random.randint(0, 1) for _ in range(n)]\n    return sum(1 for u, v in edges if side[u] != side[v])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\nint randomMAXCUT(int n, int[][] edges) {\n    boolean[] side = new boolean[n];\n    for (int i = 0; i < n; i++)\n        side[i] = Math.random() < 0.5;\n    int cut = 0;\n    for (int[] e : edges)\n        if (side[e[0]] != side[e[1]]) cut++;\n    return cut;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trivially simple; one line per vertex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only 0.5-approximation; better algorithms exist (Goemans-Williamson: 0.878)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No graph preprocessing needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Randomization means non-deterministic output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Derandomizable without loss of quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case ratio (on bipartite graphs) is 1, but on dense graphs can be close to 0.5"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty graph:"
        }), " Returns 0 (correct)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Complete graph K", (0,jsx_runtime.jsx)(_components.sub, {
            children: "n</sub>:"
          })]
        }), " Expected cut = n(n−1)/4. Optimal = floor(n²/4). Ratio → 1 as n → ∞."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bipartite graph:"
        }), " Optimal cut = all edges. Random achieves m/2 in expectation — ratio = 0.5."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The Goemans-Williamson algorithm achieves 0.878-approximation using semidefinite programming, but that's beyond the scope of this chapter."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "166-knapsack-approximation-scheme",
      children: "16.6 Knapsack Approximation Scheme"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given n items with weights w_i and profits p_i, and a capacity W, select a subset maximizing total profit without exceeding capacity."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A trucking company must choose which cargo items to load. Computing the optimal selection is NP-hard (subset sum). But a (1+ε)-approximation can be computed quickly by rounding profits to the nearest ε·P_max/n, then running standard DP on the reduced profit space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps (FPTAS via Profit Scaling):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Let ( P_{\\max} = \\max_i p_i ) and ( \\varepsilon > 0 )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute scaling factor ( K = \\varepsilon \\cdot P_{\\max} / n )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each item, define scaled profit ( p'_i = \\lfloor p_i / K \\rfloor )."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run standard 0/1 Knapsack DP on the scaled profits with a maximum total scaled profit of ( \\sum p'_i ):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "DP[i][v] = minimum weight to achieve scaled profit v using first i items."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find the maximum v such that DP[n][v] ≤ W."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the corresponding original profit."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ApproxKnapsack(items, W, ε):\n    Pmax ← max_i p_i\n    K ← ε · Pmax / n\n    for each item i:\n        p'_i ← floor(p_i / K)\n    maxV ← sum p'_i\n    dp[0..n][0..maxV] ← ∞\n    dp[0][0] ← 0\n    for i ← 1 to n:\n        for v ← 0 to maxV:\n            dp[i][v] ← dp[i-1][v]\n            if v ≥ p'_i:\n                dp[i][v] ← min(dp[i][v], dp[i-1][v - p'_i] + w_i)\n    best ← max v where dp[n][v] ≤ W\n    return best · K\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Items: (p=100, w=10), (p=60, w=8), (p=40, w=5), (p=20, w=3). W = 15. ε = 0.5."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Computation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P_max = 100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K = 0.5 × 100 / 4 = 12.5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scaled profits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p' = [8, 4, 3, 1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run DP on scaled profits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DP array of size [5][17]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find max v with weight ≤ 15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v = 12 (items 1,2,3)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return original profit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Estimated = 12 × 12.5 = 150"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Original profit = 100 + 60 + 40 = 200. Ratio = 200/200 = 1 (this instance is exact due to scaling alignment)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 16.5."
      }), " The profit-scaling algorithm is a (1+ε)-approximation for 0/1 Knapsack."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof."
      }), " Let OPT be the optimal profit. For each item in OPT, the rounding error is at most K per item, so the total error ≤ n·K = ε·P_max ≤ ε·OPT (since P_max ≤ OPT). Thus ALG ≥ OPT − ε·OPT = (1−ε)·OPT. The standard DP runs in O(n²/ε) time, which is polynomial in n and 1/ε."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " ( O(n^2 / \\varepsilon) ) — DP table size is n × (n·P_max / K) = n × (n²/ε)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " ( O(n^2 / \\varepsilon) ) — can be reduced to ( O(n / \\varepsilon) ) with 1D DP."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementations:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <algorithm>\n#include <climits>\n\ndouble approxKnapsack(const std::vector<int>& profit, const std::vector<int>& weight,\n                      int W, double eps) {\n    int n = profit.size();\n    int Pmax = *max_element(profit.begin(), profit.end());\n    double K = eps * Pmax / n;\n    std::vector<int> scaled(n);\n    for (int i = 0; i < n; i++) scaled[i] = profit[i] / K;\n    int maxV = 0;\n    for (int s : scaled) maxV += s;\n    std::vector<int> dp(maxV + 1, INT_MAX / 2);\n    dp[0] = 0;\n    for (int i = 0; i < n; i++)\n        for (int v = maxV; v >= scaled[i]; v--)\n            if (dp[v - scaled[i]] + weight[i] < dp[v])\n                dp[v] = dp[v - scaled[i]] + weight[i];\n    int bestV = 0;\n    for (int v = 0; v <= maxV; v++)\n        if (dp[v] <= W) bestV = v;\n    return bestV * K;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def approx_knapsack(profit, weight, W, eps):\n    n = len(profit)\n    Pmax = max(profit)\n    K = eps * Pmax / n\n    scaled = [int(p / K) for p in profit]\n    maxV = sum(scaled)\n    dp = [float('inf')] * (maxV + 1)\n    dp[0] = 0\n    for i in range(n):\n        for v in range(maxV, scaled[i] - 1, -1):\n            if dp[v - scaled[i]] + weight[i] < dp[v]:\n                dp[v] = dp[v - scaled[i]] + weight[i]\n    bestV = max(v for v in range(maxV + 1) if dp[v] <= W)\n    return bestV * K\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "double approxKnapsack(int[] profit, int[] weight, int W, double eps) {\n    int n = profit.length;\n    int Pmax = Arrays.stream(profit).max().getAsInt();\n    double K = eps * Pmax / n;\n    int[] scaled = new int[n];\n    for (int i = 0; i < n; i++) scaled[i] = (int)(profit[i] / K);\n    int maxV = Arrays.stream(scaled).sum();\n    int[] dp = new int[maxV + 1];\n    Arrays.fill(dp, Integer.MAX_VALUE / 2);\n    dp[0] = 0;\n    for (int i = 0; i < n; i++)\n        for (int v = maxV; v >= scaled[i]; v--)\n            if (dp[v - scaled[i]] + weight[i] < dp[v])\n                dp[v] = dp[v - scaled[i]] + weight[i];\n    int bestV = 0;\n    for (int v = 0; v <= maxV; v++)\n        if (dp[v] <= W) bestV = v;\n    return bestV * K;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Achieves (1+ε)-approximation for any ε > 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DP table size grows as O(n²/ε); large ε needed for small instances"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FPTAS: polynomial in both n and 1/ε"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profit rounding introduces approximation error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Builds on standard 0/1 Knapsack DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not extend to other packing problems easily"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tunable: smaller ε = better accuracy but slower"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for fractional or unbounded variants"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ε very small (0.01):"
        }), " Large DP table; algorithm becomes slow but highly accurate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ε ≥ 1:"
        }), " K becomes large; approximation guarantee weakens."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single item:"
        }), " DP finds it directly; optimal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All items fit:"
        }), " DP returns total profit; optimal."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "167-approximation-scheme-types-ptas-vs-fptas",
      children: "16.7 Approximation Scheme Types: PTAS vs FPTAS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both PTAS and FPTAS give (1+ε)-approximation, but the running time differs crucially."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PTAS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FPTAS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Running Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n^{f(1/\\varepsilon)}) ) — polynomial in n, arbitrary in ( 1/\\varepsilon )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n^c \\cdot g(1/\\varepsilon)) ) — polynomial in both"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Euclidean TSP PTAS: ( O(n^{O(1/\\varepsilon)}) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Knapsack FPTAS: ( O(n^2/\\varepsilon) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Practicality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impractical for small ε (exponent grows)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical for moderate ε"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Existence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many NP-hard problems have a PTAS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FPTAS requires more structure (Knapsack, Subset Sum)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use which:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PTAS"
        }), " is sufficient when ε is fixed in advance (e.g., ε = 0.1 for all deployments). The exponential in 1/ε is a constant factor."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FPTAS"
        }), " is needed when ε is an input parameter that can vary. Without it, the runtime blows up for small ε."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-to-design-approximation-algorithms",
      children: "How to Design Approximation Algorithms"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Greedy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Problem has submodular structure or covering constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set Cover, Vertex Cover"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rounding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relax integrality constraints, then round the LP solution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertex Cover (LP rounding)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Randomization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expectation argument + derandomization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAX-CUT, MAX-SAT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MST-based"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph problems with triangle inequality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metric TSP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Primal-Dual"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matching-based combinatorial optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set Cover, Steiner Tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dynamic Programming + Scaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Problems with numeric parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Knapsack FPTAS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lower-bounds-on-approximation",
      children: "Lower Bounds on Approximation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Possible Ratio (unless P = NP)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vertex Cover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 2 - \\varepsilon ) (no better constant)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Metric TSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 1 + \\varepsilon ) (Christofides 1.5 is best known)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Set Cover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( c \\log n ) (no constant-factor)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX-CUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 16/17 \\approx 0.941 ) (Goemans-Williamson 0.878 is best known)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "General TSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No polynomial-time constant-factor approximation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clique"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No ( n^{1-\\varepsilon} )-approximation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-interview-questions",
      children: "Key Interview Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Design a 2-approximation for Vertex Cover.\""
        }), " — Start with maximal matching, prove via pairing argument. Mention that (2−ε) is NP-hard."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Why does TSP need the triangle inequality?\""
        }), " — Without it, you can't shortcut without increasing cost. General TSP has no constant-factor approximation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "\"What is the greedy ratio for Set Cover?\""
        }), " — O(log n). Construct a tight example with exponentially sized sets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "\"How do you derandomize MAX-CUT?\""
        }), " — Method of conditional expectations: assign vertices one by one, always choosing the side that maximizes the conditional expectation given past assignments."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm Used"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Works"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Logistics (UPS, FedEx)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vehicle routing with 1000+ stops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Christofides 1.5-approx for TSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triangle inequality holds for road distances; near-optimal routes save millions in fuel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cloud Computing (AWS/Azure)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VM placement minimizing inter-rack traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set Cover greedy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each VM is an element; each rack is a subset; covers all VMs with minimum racks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ad Placement (Google Ads)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Splitting ad slots between classes of advertisers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAX-CUT / Goemans-Williamson"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random assignment guarantees 50% cross-traffic; SDP improves to 87.8%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network Monitoring"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Placing monitors on network nodes to watch all links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertex Cover 2-approx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each monitor watches incident links; factor-2 solution is deployable in hardware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Genome Assembly"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choosing shortest superstring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy approximation (4-approx)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each read overlaps with others; assembly cost is within factor 4 of optimal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resource Allocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selecting projects under budget constraint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Knapsack FPTAS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profit scaling gives (1+ε)-approx, critical when budgets are tight"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-161-vertex-cover-2-approximation-in-c",
      children: "Example 16.1: Vertex Cover 2-Approximation in C++"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <unordered_set>\n\nstd::vector<int> approxVertexCover(int n, std::vector<std::pair<int,int>> edges) {\n    std::vector<bool> removed(n, false);\n    std::vector<int> cover;\n    for (auto& [u, v] : edges) {\n        if (!removed[u] && !removed[v]) {\n            cover.push_back(u);\n            cover.push_back(v);\n            removed[u] = true;\n            removed[v] = true;\n        }\n    }\n    return cover;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-162-metric-tsp-2-approximation",
      children: "Example 16.2: Metric TSP 2-Approximation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <algorithm>\n#include <functional>\n\ndouble approxTSP(const std::vector<std::vector<double>>& dist) {\n    int n = static_cast<int>(dist.size());\n    std::vector<double> key(n, 1e18);\n    std::vector<int> parent(n, -1);\n    std::vector<bool> inMST(n, false);\n    key[0] = 0;\n    for (int i = 0; i < n; ++i) {\n        int u = -1;\n        for (int v = 0; v < n; ++v)\n            if (!inMST[v] && (u == -1 || key[v] < key[u]))\n                u = v;\n        inMST[u] = true;\n        for (int v = 0; v < n; ++v)\n            if (!inMST[v] && dist[u][v] < key[v]) {\n                key[v] = dist[u][v];\n                parent[v] = u;\n            }\n    }\n    std::vector<std::vector<int>> mst(n);\n    for (int v = 1; v < n; ++v) {\n        mst[v].push_back(parent[v]);\n        mst[parent[v]].push_back(v);\n    }\n    std::vector<int> tour;\n    std::function<void(int,int)> dfs = [&](int u, int p) {\n        tour.push_back(u);\n        for (int v : mst[u])\n            if (v != p) dfs(v, u);\n    };\n    dfs(0, -1);\n    tour.push_back(tour[0]);\n    double totalDist = 0;\n    for (size_t i = 0; i + 1 < tour.size(); ++i)\n        totalDist += dist[tour[i]][tour[i+1]];\n    return totalDist;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-163-greedy-set-cover",
      children: "Example 16.3: Greedy Set Cover"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <unordered_set>\n#include <algorithm>\n\ndouble greedySetCover(const std::vector<std::unordered_set<int>>& subsets,\n                      const std::vector<double>& costs, int universeSize) {\n    std::vector<bool> covered(universeSize, false);\n    int remaining = universeSize;\n    double totalCost = 0;\n    std::vector<bool> used(subsets.size(), false);\n    while (remaining > 0) {\n        int bestIdx = -1;\n        double bestRatio = 1e18;\n        for (size_t i = 0; i < subsets.size(); ++i) {\n            if (used[i]) continue;\n            int newCovers = 0;\n            for (int elem : subsets[i])\n                if (!covered[elem]) ++newCovers;\n            if (newCovers == 0) continue;\n            double ratio = costs[i] / newCovers;\n            if (ratio < bestRatio) { bestRatio = ratio; bestIdx = i; }\n        }\n        if (bestIdx == -1) break;\n        used[bestIdx] = true;\n        totalCost += costs[bestIdx];\n        for (int elem : subsets[bestIdx])\n            if (!covered[elem]) { covered[elem] = true; --remaining; }\n    }\n    return totalCost;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ratio"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Idea"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Derandomizes?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maximal Matching VC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertex Cover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pick both endpoints of matching edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MST-based TSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metric TSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MST + DFS + shortcutting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Christofides"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metric TSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MST + perfect matching on odd vertices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy Set Cover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set Cover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Min cost-per-new-element ratio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random MAX-CUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAX-CUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random assignment to two sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional expectation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Profit-Scaling Knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0/1 Knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1+ε"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Round profits, run DP on scaled values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (deterministic)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Approximation Ratio"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALG/OPT for minimization; OPT/ALG for maximization; always >= 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PTAS vs FPTAS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PTAS poly in n (exp in 1/ε); FPTAS poly in both n and 1/ε"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Vertex Cover"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pick both endpoints of a maximal matching edge; ratio = 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Metric TSP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MST cost <= OPT; double + DFS + shortcut gives 2x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Christofides"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MST + perfect matching on odd-degree vertices = 1.5x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Set Cover"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy picks min cost-per-new-element; O(log n) ratio"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MAX-CUT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random assignment = 0.5-approx; conditional expectations derandomizes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Knapsack FPTAS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Round profits to p'/K, DP on scaled values, return K·bestV"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DSA Interviews"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Competitive Programming"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vertex Cover 2-approx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common pairing argument"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Useful in graph problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network monitoring, camera placement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TSP 2-approx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Held-Karp DP better"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logistics, routing, PCB drilling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Set Cover greedy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identifying hard instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource allocation, cloud VM placement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX-CUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SDP-based better"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ad placement, circuit layout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Knapsack FPTAS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare (DP is exact)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Budget allocation, cargo loading"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ratio"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lower Bound"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vertex cover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximal matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 2 - \\varepsilon ) (NP-hard)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Metric TSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MST-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5 (Christofides)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Metric TSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Christofides"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 1 + \\varepsilon ) (NP-hard)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Set cover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( H_n )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( c \\log n ) (NP-hard)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX-CUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.878 (Goemans-Williamson)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0/1 Knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profit-scaling FPTAS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 1+\\varepsilon )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FPTAS is optimal (no exact poly alg)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the approximation ratio for a minimization problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why the triangle inequality is required for the 2-approximation TSP algorithm."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the greedy choice in the set cover algorithm?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the difference between PTAS and FPTAS."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why can't the random MAX-CUT algorithm be improved beyond 0.5 without better tools?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Christofides' algorithm and compare its performance with the 2-approximation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct an instance where the maximal-matching vertex cover achieves exactly ratio 2."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply greedy set cover to the universe {1,2,3,4,5} and subsets S1={1,2,3}, S2={2,4}, S3={3,4}, S4={4,5}. Compute the approximation ratio on this instance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Derandomize the MAX-CUT random assignment algorithm using the method of conditional expectations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run the Knapsack FPTAS on items with profits [50, 30, 20, 10], weights [5, 4, 3, 2], W = 8, ε = 0.4. Show each step."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design a PTAS for the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Euclidean TSP"
        }), " (points in the plane with Euclidean distance). Hint: use a divide-and-conquer approach with dynamic programming on the boundary."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What is the approximation ratio of the maximal-matching algorithm for vertex cover?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) 1.5"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) 2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) O(log n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) H_n"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) 2. Each matched edge contributes two vertices to the cover, while optimal needs at least one per edge.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " Why does the MST-based TSP algorithm require the triangle inequality?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) To compute the MST"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) To ensure shortcutting does not increase the tour cost"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) To guarantee polynomial running time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) To prove optimality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) The triangle inequality ensures that skipping repeated vertices (shortcutting) does not increase the tour cost.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What is the approximation ratio of greedy set cover?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) 2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) log₂ n"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) H_n ≈ ln n"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) 1.5"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nC) The greedy set cover achieves H_n ≈ ln n + γ, which is optimal up to constant factors unless P = NP.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " What distinguishes an FPTAS from a PTAS?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) FPTAS is faster"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) FPTAS runs in time polynomial in both n and 1/ε"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) FPTAS achieves a better approximation ratio"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) FPTAS only works for maximization problems"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) FPTAS runs in time polynomial in both n and 1/ε, while PTAS can be exponential in 1/ε.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " In the Knapsack FPTAS, what does the scaling factor K equal?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) ε · W / n"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) ε · P_max / n"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) ε · n / P_max"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) P_max / (ε · n)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) K = ε · P_max / n, which bounds the total rounding error to ε · P_max ≤ ε · OPT.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Approximation algorithms are the theoretical foundation for why NP-hard problems can still be solved usefully in practice. Every major tech company uses them — from Google Maps (TSP approximations) to AWS (set cover for VM packing)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Always check whether your problem has a constant-factor approximation before implementing a heuristic. Some problems (clique, general TSP, graph coloring) resist any constant-factor approximation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The ratio is a worst-case guarantee. Average-case performance is often far better. When in doubt, implement and benchmark on your specific data distribution."]
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