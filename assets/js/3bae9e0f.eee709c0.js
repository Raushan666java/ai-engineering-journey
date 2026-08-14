"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[10706],{

/***/ 85291
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_algorithms_12_graph_mst_md_3ba_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-algorithms-12-graph-mst-md-3ba.json
const site_docs_courses_algorithms_12_graph_mst_md_3ba_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/algorithms/12-graph-mst","title":"Chapter 12: Minimum Spanning Trees","description":"Prerequisites Graph Shortest Paths — Graph algorithms, priority queues, relaxation | Next Network Flow — From tree structures to flow networks","source":"@site/docs/courses/algorithms/12-graph-mst.md","sourceDirName":"courses/algorithms","slug":"/algorithms/12-graph-mst","permalink":"/ai-engineering-journey/algorithms/12-graph-mst","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"12-graph-mst","slug":"/algorithms/12-graph-mst","title":"Chapter 12: Minimum Spanning Trees","sidebar_label":"Chapter 12: Minimum Spanning Trees","sidebar_position":12},"sidebar":"course-algorithms","previous":{"title":"Chapter 11: Graph Shortest Paths","permalink":"/ai-engineering-journey/algorithms/11-graph-shortest"},"next":{"title":"Chapter 13: Network Flow","permalink":"/ai-engineering-journey/algorithms/13-graph-flow"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/algorithms/12-graph-mst.md


const frontMatter = {
	id: '12-graph-mst',
	slug: '/algorithms/12-graph-mst',
	title: 'Chapter 12: Minimum Spanning Trees',
	sidebar_label: 'Chapter 12: Minimum Spanning Trees',
	sidebar_position: 12
};
const contentTitle = 'Chapter 12: Minimum Spanning Trees';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why MST Matters",
  "id": "why-mst-matters",
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
  "value": "12.1 Minimum Spanning Tree: Definition",
  "id": "121-minimum-spanning-tree-definition",
  "level": 3
}, {
  "value": "12.2 Fundamental Properties",
  "id": "122-fundamental-properties",
  "level": 3
}, {
  "value": "12.3 Kruskal&#39;s Algorithm",
  "id": "123-kruskals-algorithm",
  "level": 3
}, {
  "value": "12.4 Prim&#39;s Algorithm",
  "id": "124-prims-algorithm",
  "level": 3
}, {
  "value": "12.5 Boruvka&#39;s Algorithm",
  "id": "125-boruvkas-algorithm",
  "level": 3
}, {
  "value": "12.6 Reverse-Delete Algorithm",
  "id": "126-reverse-delete-algorithm",
  "level": 3
}, {
  "value": "12.7 MST Algorithm Comparison",
  "id": "127-mst-algorithm-comparison",
  "level": 3
}, {
  "value": "12.8 Interview Corner",
  "id": "128-interview-corner",
  "level": 3
}, {
  "value": "12.9 Applications in Real Systems",
  "id": "129-applications-in-real-systems",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 12.1: Kruskal&#39;s Algorithm -- Complete Graph",
  "id": "example-121-kruskals-algorithm----complete-graph",
  "level": 3
}, {
  "value": "Example 12.2: Prim&#39;s Algorithm -- Same Graph",
  "id": "example-122-prims-algorithm----same-graph",
  "level": 3
}, {
  "value": "Example 12.3: Proof Application -- Cut Property",
  "id": "example-123-proof-application----cut-property",
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
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 3
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
        id: "chapter-12-minimum-spanning-trees",
        children: "Chapter 12: Minimum Spanning Trees"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/11-graph-shortest",
          children: "Chapter 11: Graph Shortest Paths"
        }), " — Graph algorithms, priority queues, relaxation | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/13-graph-flow",
          children: "Chapter 13: Network Flow"
        }), " — From tree structures to flow networks"]
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
        href: "../../assets/images/lessons/algorithms/12-graph-mst/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/12-graph-mst/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/algorithms/12-graph-mst/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/12-graph-mst/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/algorithms/12-graph-mst/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/12-graph-mst/visual-explanation.png",
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
        children: "Implement Kruskal's algorithm with union-find and Prim's algorithm with a priority queue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove the cut property and cycle property and use them to justify MST algorithms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the complexity of Boruvka's algorithm and understand its parallel nature."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply MST algorithms to clustering, network design, and approximation problems."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-mst-matters",
      children: "Why MST Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine you are a telecom engineer tasked with connecting 15 cities with fiber-optic cable. Each pair of cities has a quoted cost for digging trenches and laying cable. Your goal: connect every city into a single network using the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "minimum total cable length"
      }), ". This is not about finding the shortest path between two cities — it is about building the cheapest skeleton that connects everything."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is the Minimum Spanning Tree (MST) problem in action. Every dollar you save by not running redundant cable is pure profit. A naive approach (connecting cities in a star or a ring) could cost ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "30–50% more"
      }), " than the optimal MST solution. In a real 2016 project connecting 12 data centers across Europe, one cloud provider saved an estimated ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "$2.4 million"
      }), " by applying MST principles to their fiber-optic backbone layout. The same math governs electrical grid design, computer network topology, transportation routing, and even clustering genes in bioinformatics."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " MST is one of the few problems in computer science where a simple greedy algorithm is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "provably optimal"
        }), " — no backtracking, no dynamic programming, no approximation needed. That is why it is a cornerstone of every algorithms curriculum."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "MST Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree + all vertices + min total weight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spanning tree property: n-1 edges, connected, acyclic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cut Property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lightest crossing edge is in some MST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for Prim's and Boruvka's algorithms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cycle Property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heaviest edge in any cycle is NOT in any MST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for Kruskal's reverse-delete variant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kruskal's Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort edges, pick if no cycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E log E) with union-find DSU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prim's Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grow tree from a seed vertex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E log V) with priority queue; resembles Dijkstra"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Boruvka's Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add cheapest edge from each component"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E log V); parallelizable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse-Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start with all edges, remove heaviest non-bridge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dual of Kruskal; educational value"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[MST] --> B[Kruskal]\n    A --> C[Prim]\n    A --> D[Boruvka]\n    A --> E[Reverse-Delete]\n    B --> F[Sort edges + Union-Find]\n    C --> G[Priority Queue + Visited]\n    D --> H[Component-cheapest edges]\n    E --> I[Delete heaviest non-bridge]\n    B --> J[Cycle Property]\n    C --> K[Cut Property]\n    D --> K\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch12-graph-mst.png",
        alt: "MST Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-minimum-spanning-tree-definition",
      children: "12.1 Minimum Spanning Tree: Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 12.1."
      }), " Given a connected, undirected, weighted graph ( G = (V, E) ), a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "spanning tree"
      }), " is a subgraph ( T = (V, E') ) that is a tree (connected and acyclic). A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "minimum spanning tree"
      }), " (MST) is a spanning tree that minimizes the total weight ( \\sum_{e \\in E'} w(e) )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key properties of any spanning tree:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contains exactly (|V| - 1) edges."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "There is exactly one path between any two vertices."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding any edge creates exactly one cycle."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removing any edge disconnects the tree."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " An MST always has exactly |V|-1 edges for a connected graph with |V| vertices. If the graph has fewer than |V|-1 edges, it is disconnected and no spanning tree exists."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " A minimum spanning tree connects all vertices with minimum total edge weight, always using exactly n-1 edges for an n-vertex graph."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-fundamental-properties",
      children: "12.2 Fundamental Properties"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 12.1 (Cut Property)."
      }), " Let ( S \\subset V ) be a non-empty proper subset of vertices. Let ( e ) be the minimum-weight edge crossing the cut ( (S, V \\setminus S) ). Then ( e ) belongs to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "some"
      }), " MST."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof."
      }), " Let ( T ) be an MST that does not contain ( e ). Adding ( e ) to ( T ) creates a cycle. This cycle must contain some other edge ( e' ) crossing the cut. Since ( w(e) \\le w(e') ), we can replace ( e' ) with ( e ) to obtain another spanning tree with total weight at most that of ( T ), which is also an MST."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 12.2 (Cycle Property)."
      }), " Let ( C ) be a cycle in ( G ). Let ( e ) be the maximum-weight edge on ( C ). Then ( e ) is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " in any MST."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof."
      }), " Assume an MST ( T ) contains ( e ). Removing ( e ) from ( T ) disconnects the tree into two components. The cycle ( C ) must contain at least one other edge ( e' ) connecting these two components. Since ( w(e') < w(e) ), replacing ( e ) with ( e' ) yields a spanning tree with strictly smaller total weight, contradicting the minimality of ( T )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " The cut property justifies adding the lightest crossing edge. The cycle property justifies removing the heaviest cycle edge. Together they prove Kruskal, Prim, and Boruvka correct."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " The cut property (lightest crossing edge is in some MST) and cycle property (heaviest cycle edge is in no MST) are the dual correctness foundations for all MST algorithms."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-kruskals-algorithm",
      children: "12.3 Kruskal's Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You are building a railway network connecting several towns. A private company offers to build each segment at a quoted price. To minimize government spending, you always pick the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cheapest available segment that does not create a cycle"
      }), " (a redundant loop). You continue until all towns are connected. This is Kruskal's algorithm."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy:"
      }), " Repeatedly add the smallest-weight edge that does not form a cycle, using a union-find data structure to detect cycles in near-constant time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sort all edges by weight in non-decreasing order."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize an empty MST set ( T ) and a disjoint-set union (DSU) with each vertex as its own component."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Iterate through sorted edges:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "find(u) != find(v)"
            }), " (the edge connects two different components), add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "(u,v)"
            }), " to ( T ) and call ", (0,jsx_runtime.jsx)(_components.code, {
              children: "union(u,v)"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Otherwise, skip the edge (it would create a cycle)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return ( T ) once ( |T| = |V| - 1 ) or all edges are processed."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Kruskal(G):\n    Sort edges by weight ascending\n    T = empty set\n    for each vertex v:\n        MakeSet(v)\n    for each edge (u,v,w) in sorted order:\n        if Find(u) != Find(v):\n            T = T + (u,v,w)\n            Union(u,v)\n    return T\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider the following graph with 5 vertices and 7 edges:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Edges (sorted by weight):\n(1,2) w=1    (1,3) w=2    (0,2) w=3    (0,1) w=4\n(2,3) w=4    (2,4) w=5    (3,4) w=6\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edge (u,v,w)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Find(u)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Find(v)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Diff Comp?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MST Edges"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DSU Components"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1,2,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{(1,2)}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0}, {1,2}, {3}, {4}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1,3,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{(1,2),(1,3)}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0}, {1,2,3}, {4}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0,2,3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{(1,2),(1,3),(0,2)}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2,3}, {4}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0,1,4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2,3}, {4}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2,3,4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2,3}, {4}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2,4,5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{(1,2),(1,3),(0,2),(2,4)}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2,3,4}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3,4,6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2,3,4}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MST found:"
      }), " edges (1,2), (1,3), (0,2), (2,4) -- total weight = 11."]
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
        children: "#include <vector>\n#include <algorithm>\n\nstruct Edge { int u, v, w; };\n\nstruct UnionFind {\n    std::vector<int> parent, rank;\n    UnionFind(int n) : parent(n), rank(n, 0) {\n        for (int i = 0; i < n; ++i) parent[i] = i;\n    }\n    int find(int x) {\n        if (parent[x] != x)\n            parent[x] = find(parent[x]);\n        return parent[x];\n    }\n    bool unite(int x, int y) {\n        int xr = find(x), yr = find(y);\n        if (xr == yr) return false;\n        if (rank[xr] < rank[yr]) parent[xr] = yr;\n        else if (rank[xr] > rank[yr]) parent[yr] = xr;\n        else { parent[yr] = xr; rank[xr]++; }\n        return true;\n    }\n};\n\nint kruskal(int n, std::vector<Edge>& edges) {\n    std::sort(edges.begin(), edges.end(),\n              [](const Edge& a, const Edge& b) { return a.w < b.w; });\n    UnionFind uf(n);\n    int totalWeight = 0;\n    for (const auto& e : edges) {\n        if (uf.unite(e.u, e.v))\n            totalWeight += e.w;\n    }\n    return totalWeight;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class UnionFind:\n    def __init__(self, n):\n        self.parent = list(range(n))\n        self.rank = [0] * n\n\n    def find(self, x):\n        if self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])\n        return self.parent[x]\n\n    def unite(self, x, y):\n        xr, yr = self.find(x), self.find(y)\n        if xr == yr:\n            return False\n        if self.rank[xr] < self.rank[yr]:\n            self.parent[xr] = yr\n        elif self.rank[xr] > self.rank[yr]:\n            self.parent[yr] = xr\n        else:\n            self.parent[yr] = xr\n            self.rank[xr] += 1\n        return True\n\ndef kruskal(n, edges):\n    edges.sort(key=lambda e: e[2])\n    uf = UnionFind(n)\n    total = 0\n    for u, v, w in edges:\n        if uf.unite(u, v):\n            total += w\n    return total\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "class Edge implements Comparable<Edge> {\n    int u, v, w;\n    Edge(int u, int v, int w) { this.u = u; this.v = v; this.w = w; }\n    public int compareTo(Edge o) { return this.w - o.w; }\n}\n\nclass UnionFind {\n    int[] parent, rank;\n    UnionFind(int n) {\n        parent = new int[n];\n        rank = new int[n];\n        for (int i = 0; i < n; i++) parent[i] = i;\n    }\n    int find(int x) {\n        if (parent[x] != x)\n            parent[x] = find(parent[x]);\n        return parent[x];\n    }\n    boolean unite(int x, int y) {\n        int xr = find(x), yr = find(y);\n        if (xr == yr) return false;\n        if (rank[xr] < rank[yr]) parent[xr] = yr;\n        else if (rank[xr] > rank[yr]) parent[yr] = xr;\n        else { parent[yr] = xr; rank[xr]++; }\n        return true;\n    }\n}\n\nint kruskal(int n, List<Edge> edges) {\n    Collections.sort(edges);\n    UnionFind uf = new UnionFind(n);\n    int total = 0;\n    for (Edge e : edges) {\n        if (uf.unite(e.u, e.v))\n            total += e.w;\n    }\n    return total;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis: Why O(E log E)?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The dominating step is sorting the edges, which takes (O(E \\log E)) using comparison-based sort. After sorting, we iterate through each edge once, performing two ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Find"
      }), " operations and possibly one ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Union"
      }), " per edge. With path compression and union by rank, each DSU operation runs in (O(\\alpha(V))) amortized -- essentially constant for all practical inputs. Therefore the total is (O(E \\log E + E \\cdot \\alpha(V)) = O(E \\log E))."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since (E \\le V^2) in the worst case, (O(E \\log E) = O(E \\log V)) because (\\log E \\le 2 \\log V). Both forms are used interchangeably."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages vs. Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Easy to implement and understand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires all edges to be sorted first (not online)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent for sparse graphs (E ≈ V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less efficient on dense graphs (V² edges to sort)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DSU operations are nearly O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting is memory-intensive for huge edge sets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naturally works with disconnected graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must store all edges explicitly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to parallelize the sorting step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disconnected graph"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kruskal terminates with fewer than V-1 edges in T; no spanning tree exists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single vertex (V=1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No edges needed; MST has weight 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complete graph (E = V(V-1)/2)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting cost becomes O(V² log V); consider Prim on dense graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "All edges equal weight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple valid MSTs; Kruskal selects lexicographically smallest set based on input order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Duplicate edge weights"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple valid MSTs possible; any valid MST is acceptable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pre-sorted edges"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DSU operations dominate; complexity reduces to O(E α(V))"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Kruskal's algorithm is preferred for sparse graphs (E = O(V)) where sorting dominates. The union-find with path compression and union by rank makes the find operations nearly O(1) amortized."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Without path compression, union-find can degrade to O(V) per operation. Always implement both path compression and union by rank."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Kruskal's algorithm sorts edges by weight and uses union-find to add the smallest edge that doesn't create a cycle -- O(E log E) overall."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "124-prims-algorithm",
      children: "12.4 Prim's Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You are extending a city's power grid from a central substation. At each step, you find the nearest (cheapest-to-connect) unconnected neighborhood and run a new power line to it. The grid grows organically outward like a tree, always choosing the cheapest connection to new territory."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy:"
      }), " Grow the MST from a starting vertex, always adding the smallest edge connecting the current tree to a vertex outside it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize ", (0,jsx_runtime.jsx)(_components.code, {
          children: "key[v] = INF"
        }), " for all vertices, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "key[r] = 0"
        }), " for the root. Initialize ", (0,jsx_runtime.jsx)(_components.code, {
          children: "parent[r] = -1"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Insert all vertices into a min-priority queue keyed by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "key[v]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While the priority queue is not empty:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Extract the vertex ", (0,jsx_runtime.jsx)(_components.code, {
              children: "u"
            }), " with minimum key value."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Mark ", (0,jsx_runtime.jsx)(_components.code, {
              children: "u"
            }), " as part of the MST (visited)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For each neighbor ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v"
            }), " of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "u"
            }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "v"
                }), " is not yet in the MST and ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "weight(u,v) < key[v]"
                }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "key[v] = weight(u,v)"
                    }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "parent[v] = u"
                    }), "."]
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Push the updated value to the priority queue."
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the parent array (the MST edges) and total weight."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Prim(G, r):\n    key[v] = inf for all v\n    key[r] = 0\n    parent[r] = -1\n    PQ = priority queue of (key[v], v)\n    while PQ is not empty:\n        u = ExtractMin(PQ)\n        for each neighbor v of u:\n            if v in PQ and w(u,v) < key[v]:\n                parent[v] = u\n                key[v] = w(u,v)\n                DecreaseKey(PQ, v, key[v])\n    return parent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Same graph as before, starting from vertex 0."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Graph: 5 vertices (0-4)\nEdges: (0,1)=4, (0,2)=3, (1,2)=1, (1,3)=2, (2,3)=4, (2,4)=5, (3,4)=6\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Extract"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "key[u]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Added"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Visited Set"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Updated Keys"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key[2]=3(p=0), key[1]=4(p=0)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,2}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key[1]=1(p=2), key[3]=4(p=2), key[4]=5(p=2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,2,1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key[3]=2(p=1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1,3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,2,1,3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2,4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,2,1,3,4}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MST found:"
      }), " edges (0,2)=3, (2,1)=1, (1,3)=2, (2,4)=5 -- total weight = 11."]
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
        children: "#include <vector>\n#include <queue>\n#include <limits>\n\nint prim(const std::vector<std::vector<std::pair<int,int>>>& adj) {\n    int n = static_cast<int>(adj.size());\n    std::vector<int> key(n, std::numeric_limits<int>::max());\n    std::vector<bool> inMST(n, false);\n    key[0] = 0;\n    using P = std::pair<int,int>;\n    std::priority_queue<P, std::vector<P>, std::greater<P>> pq;\n    pq.push({0, 0});\n    int totalWeight = 0;\n    while (!pq.empty()) {\n        auto [w, u] = pq.top(); pq.pop();\n        if (inMST[u]) continue;\n        inMST[u] = true;\n        totalWeight += w;\n        for (auto [v, weight] : adj[u]) {\n            if (!inMST[v] && weight < key[v]) {\n                key[v] = weight;\n                pq.push({key[v], v});\n            }\n        }\n    }\n    return totalWeight;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import heapq\n\ndef prim(adj):\n    n = len(adj)\n    key = [float('inf')] * n\n    in_mst = [False] * n\n    key[0] = 0\n    pq = [(0, 0)]\n    total = 0\n    while pq:\n        w, u = heapq.heappop(pq)\n        if in_mst[u]:\n            continue\n        in_mst[u] = True\n        total += w\n        for v, weight in adj[u]:\n            if not in_mst[v] and weight < key[v]:\n                key[v] = weight\n                heapq.heappush(pq, (key[v], v))\n    return total\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "int prim(List<List<int[]>> adj) {\n    int n = adj.size();\n    int[] key = new int[n];\n    boolean[] inMST = new boolean[n];\n    Arrays.fill(key, Integer.MAX_VALUE);\n    key[0] = 0;\n    PriorityQueue<int[]> pq = new PriorityQueue<>((a,b) -> a[0] - b[0]);\n    pq.offer(new int[]{0, 0});\n    int total = 0;\n    while (!pq.isEmpty()) {\n        int[] cur = pq.poll();\n        int w = cur[0], u = cur[1];\n        if (inMST[u]) continue;\n        inMST[u] = true;\n        total += w;\n        for (int[] edge : adj.get(u)) {\n            int v = edge[0], weight = edge[1];\n            if (!inMST[v] && weight < key[v]) {\n                key[v] = weight;\n                pq.offer(new int[]{key[v], v});\n            }\n        }\n    }\n    return total;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis: Why O(E log V)?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With a binary heap:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each vertex is extracted once: (V) extract-min operations, each (O(\\log V))."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each edge may trigger a decrease-key (or equivalent push): up to (E) operations, each (O(\\log V))."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total: (O((V + E) \\log V) = O(E \\log V)) since (E \\ge V - 1) for connected graphs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With a Fibonacci heap (theoretical): decrease-key becomes (O(1)) amortized, giving (O(E + V \\log V)) -- better for very dense graphs where (E \\approx V^2)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With a simple array (dense graphs): extract-min scans (V) elements in (O(V)), giving (O(V^2)) -- excellent when (E \\approx V^2) because (V^2 \\ll E \\log V)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages vs. Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Excellent for dense graphs (E ≈ V²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires an explicit starting vertex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naturally grows a single connected tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary heap has O(log V) factor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array-based version is O(V²) -- ideal for complete graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lazy deletion in heap wastes memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Never processes an edge twice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less intuitive than Kruskal for beginners"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can stop early if target vertex is reached"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fibonacci heap is complex to implement"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disconnected graph"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PQ empties before all vertices visited; key[v] stays INF for unreachable vertices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single vertex (V=1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PQ has one element; total weight = 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complete graph (E = V(V-1)/2)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array-based O(V²) implementation is optimal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "All edges equal weight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prim produces one valid MST; shape depends on the starting vertex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multiple edges between same vertices"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep only the minimum-weight edge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Large-weight edges (int overflow)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use long/INF sentinel with half of INT_MAX to avoid overflow"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Prim's algorithm looks almost identical to Dijkstra. The difference is that Prim's key is the minimum edge weight to the current tree, while Dijkstra's key is the total distance from the source."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Prim's is better for dense graphs (E ≈ V²) where the priority queue operations dominate. For dense graphs, an O(V²) array-based implementation can outperform a binary heap."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Prim's algorithm grows an MST from a seed vertex using a priority queue, always adding the cheapest edge connecting the tree to a new vertex -- O(E log V)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "125-boruvkas-algorithm",
      children: "12.5 Boruvka's Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Multiple construction teams are working simultaneously to build a fiber network across different regions. Each team is responsible for its own region (component). Independently, each team finds the cheapest way to connect its region to any neighboring region. All teams lay their chosen cables at the same time, and the regions merge. This repeats until one giant region covers the whole country. This decentralized, parallel approach is Boruvka's algorithm."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy:"
      }), " The oldest MST algorithm (1926, by Otakar Boruvka). Each vertex starts as a component. In each phase, every component finds its cheapest outgoing edge, adds it to the MST, and contracts all components. The number of components at least halves each phase."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize each vertex as its own component."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While there is more than one component:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "For each component, find the minimum-weight edge connecting it to a different component."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add all such edges to the MST (avoiding duplicates)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Contract each connected set of components into a single component."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the MST."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Boruvka(G):\n    T = empty set\n    components = V (initially each vertex is its own component)\n    while components > 1:\n        cheapest = array of size V, initialized to INF\n        for each edge (u,v,w) in E:\n            cu = component[u], cv = component[v]\n            if cu != cv:\n                if w < cheapest[cu].weight:\n                    cheapest[cu] = (u,v,w)\n                if w < cheapest[cv].weight:\n                    cheapest[cv] = (u,v,w)\n        for each component C:\n            if cheapest[C] exists and doesn't create cycle:\n                T = T + cheapest[C]\n        Contract components (rebuild component IDs)\n        components = number of remaining components\n    return T\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Same graph as before."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1:"
      }), "\nInitial components: {0}, {1}, {2}, {3}, {4}"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cheapest Outgoing Edge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "To Component"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "{0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{2}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "{1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{2}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "{2}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "{3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{1}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "{4}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{2}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Edges added (after dedup): ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(0,2)=3, (1,2)=1, (3,1)=2, (4,2)=5"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After contracting: all vertices merge into one component {0,1,2,3,4}. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MST complete"
      }), " -- total = 11."]
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
        children: "#include <vector>\n#include <climits>\n#include <algorithm>\n\nstruct Edge { int u, v, w; };\n\nint boruvka(int V, std::vector<Edge>& edges) {\n    std::vector<int> parent(V);\n    std::vector<int> cheapest(V, -1);\n    int totalWeight = 0;\n    int components = V;\n    for (int i = 0; i < V; i++) parent[i] = i;\n\n    auto find = [&](int x) {\n        while (parent[x] != x) {\n            parent[x] = parent[parent[x]];\n            x = parent[x];\n        }\n        return x;\n    };\n\n    while (components > 1) {\n        std::fill(cheapest.begin(), cheapest.end(), -1);\n        for (int i = 0; i < (int)edges.size(); i++) {\n            int ru = find(edges[i].u), rv = find(edges[i].v);\n            if (ru == rv) continue;\n            if (cheapest[ru] == -1 || edges[i].w < edges[cheapest[ru]].w)\n                cheapest[ru] = i;\n            if (cheapest[rv] == -1 || edges[i].w < edges[cheapest[rv]].w)\n                cheapest[rv] = i;\n        }\n        for (int c = 0; c < V; c++) {\n            if (cheapest[c] != -1) {\n                int ru = find(edges[cheapest[c]].u);\n                int rv = find(edges[cheapest[c]].v);\n                if (ru != rv) {\n                    parent[ru] = rv;\n                    totalWeight += edges[cheapest[c]].w;\n                    components--;\n                }\n            }\n        }\n    }\n    return totalWeight;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def boruvka(V, edges):\n    parent = list(range(V))\n    total = 0\n    components = V\n\n    def find(x):\n        while parent[x] != x:\n            parent[x] = parent[parent[x]]\n            x = parent[x]\n        return x\n\n    while components > 1:\n        cheapest = [-1] * V\n        for i, (u, v, w) in enumerate(edges):\n            ru, rv = find(u), find(v)\n            if ru == rv:\n                continue\n            if cheapest[ru] == -1 or w < edges[cheapest[ru]][2]:\n                cheapest[ru] = i\n            if cheapest[rv] == -1 or w < edges[cheapest[rv]][2]:\n                cheapest[rv] = i\n        for c in range(V):\n            if cheapest[c] != -1:\n                u, v, w = edges[cheapest[c]]\n                ru, rv = find(u), find(v)\n                if ru != rv:\n                    parent[ru] = rv\n                    total += w\n                    components -= 1\n    return total\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "int boruvka(int V, List<Edge> edges) {\n    int[] parent = new int[V];\n    for (int i = 0; i < V; i++) parent[i] = i;\n    int total = 0, components = V;\n\n    java.util.function.IntUnaryOperator find = x -> {\n        while (parent[x] != x) {\n            parent[x] = parent[parent[x]];\n            x = parent[x];\n        }\n        return x;\n    };\n\n    while (components > 1) {\n        int[] cheapest = new int[V];\n        Arrays.fill(cheapest, -1);\n        for (int i = 0; i < edges.size(); i++) {\n            Edge e = edges.get(i);\n            int ru = find.applyAsInt(e.u), rv = find.applyAsInt(e.v);\n            if (ru == rv) continue;\n            if (cheapest[ru] == -1 || e.w < edges.get(cheapest[ru]).w)\n                cheapest[ru] = i;\n            if (cheapest[rv] == -1 || e.w < edges.get(cheapest[rv]).w)\n                cheapest[rv] = i;\n        }\n        for (int c = 0; c < V; c++) {\n            if (cheapest[c] != -1) {\n                Edge e = edges.get(cheapest[c]);\n                int ru = find.applyAsInt(e.u), rv = find.applyAsInt(e.v);\n                if (ru != rv) {\n                    parent[ru] = rv;\n                    total += e.w;\n                    components--;\n                }\n            }\n        }\n    }\n    return total;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis: Why O(E log V)?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each phase scans all edges to find the cheapest outgoing edge per component -- (O(E)). After adding edges, the number of components at least halves (each component merges with at least one other). Therefore there are at most (O(\\log V)) phases. Total: (O(E \\log V))."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key insight: each component must have at least one outgoing edge (or the graph is disconnected), and merging two components reduces the count by at least one. The halving guarantee comes from the fact that each component finds a distinct partner, so at least half the components disappear in each phase."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages vs. Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Highly parallelizable -- each component works independently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More complex to implement than Kruskal or Prim"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No sorting required -- just edge scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each phase rescans all edges (wasteful on sparse graphs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naturally handles disconnected graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant factors are larger than Kruskal in practice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fewer phases than Kruskal iterations on dense graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not commonly asked in interviews"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decentralized -- suitable for distributed systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Component contraction bookkeeping is error-prone"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disconnected graph"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm terminates when no component has outgoing edges; remaining components = number of connected components"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single vertex (V=1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop condition fails immediately; returns 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complete graph"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Often completes in 1-2 phases because many components merge simultaneously"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Graph with equal-weight edges"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tie-breaking matters; implementation-dependent variability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Very large V (millions)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boruvka excels due to log V phases and parallelizability"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Boruvka is the most parallelizable MST algorithm -- each component independently finds its cheapest edge. It is historically significant and useful for distributed settings where global sorting is expensive."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Boruvka's algorithm works by contracting components. After each phase, the number of components at least halves, guaranteeing O(log V) phases."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Boruvka's algorithm repeatedly finds each component's cheapest outgoing edge in parallel, halving components each phase -- O(E log V)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "126-reverse-delete-algorithm",
      children: "12.6 Reverse-Delete Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You inherited a complete fiber network with many redundant cables. To reduce maintenance costs, you want to remove the most expensive cables without disconnecting any city. You always remove the most expensive cable that is not a bridge (removing it would disconnect the network)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy:"
      }), " Start with all edges. Remove the heaviest edge that does not disconnect the graph. Repeat until only V-1 edges remain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ReverseDelete(G):\n    Sort edges by weight descending\n    for each edge (u,v,w) in sorted order:\n        temporarily remove (u,v) from G\n        if G is still connected:\n            permanently remove (u,v)\n        else:\n            restore (u,v)\n    return remaining edges\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " (O(E \\log E + E \\cdot T_{connectivity})) where connectivity testing uses DFS/BFS in (O(V+E)) per edge, giving (O(E \\cdot (V+E))) in naive form. With advanced data structures this can be improved but remains impractical."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Reverse-delete is the dual of Kruskal. Kruskal starts with nothing and adds the smallest safe edge. Reverse-delete starts with everything and removes the largest unnecessary edge."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Reverse-delete starts with all edges and removes the heaviest edge that does not disconnect the graph -- conceptually elegant but practically slower."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "127-mst-algorithm-comparison",
      children: "12.7 MST Algorithm Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kruskal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prim (Binary Heap)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prim (Array)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Boruvka"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reverse-Delete"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Strategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add smallest non-cycle edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grow tree from seed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Component cheapest edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove heaviest non-bridge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Structure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union-Find DSU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-component arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS/BFS for connectivity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E log E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E log V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E log V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E(V+E)) naive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best For"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sparse graphs (E≈V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate density"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense/complete graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel/distributed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Educational (dual view)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sorting Required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallelizable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort step only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highly parallel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Handles Disconnected"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (forest)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (forest)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (forest)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation Difficulty"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interview Frequency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "128-interview-corner",
      children: "12.8 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. How does Kruskal detect cycles using Union-Find?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Find(x)"
      }), " returns the representative (root) of the component containing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), ". An edge ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(u,v)"
      }), " creates a cycle iff ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Find(u) == Find(v)"
      }), " (both endpoints already belong to the same component). Path compression (setting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "parent[x] = root"
      }), " on each Find) and union by rank (attaching smaller tree under larger tree) keep operations nearly O(1)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Why is Prim preferred for dense graphs over Kruskal?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a complete graph with (V) vertices, (E = V(V-1)/2 \\approx V^2). Kruskal sorts (O(V^2)) edges in (O(V^2 \\log V)). Prim with an array scans (V) vertices per extract-min, giving (O(V^2)). Since (V^2 \\ll V^2 \\log V), Prim's array version is strictly better."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. How do you find the second-best MST (2nd-MST)?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For each non-MST edge ((u,v,w)):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find the maximum-weight edge on the path between (u) and (v) in the MST (using LCA binary lifting or DFS)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replace that edge with ((u,v,w))."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track the minimum ((W - w_{max} + w))."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This approach is (O(E + V \\log V)) versus (O(V \\cdot E)) for the naive removal approach."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. What about the Minimum Product Spanning Tree?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If all weights are positive, transform by taking (\\log) of each weight:\n[\n\\arg\\min_T \\prod_{e \\in T} w(e) = \\arg\\min_T \\sum_{e \\in T} \\log w(e)\n]\nSince (\\log) is monotonic, the tree minimizing the sum of logs also minimizes the product."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Can MST have negative weight edges?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Yes. All three algorithms handle negative weights naturally. The cut property and cycle property make no positivity assumptions. Kruskal will even prefer large negative edges (more negative = smaller weight = selected earlier)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. How does Prim differ from Dijkstra?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both maintain a key array and use a priority queue. Prim's key is the minimum edge weight to the current tree (local view). Dijkstra's key is the total distance from the source (global view)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "129-applications-in-real-systems",
      children: "12.9 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Network Design (Fiber Optic / Telecom):"
      }), "\nLaying cables between cities, connecting data centers, or wiring a building -- MST finds the minimum-cost layout that connects all points. Companies like AT&T and Google use MST variants for backbone network planning. A 2013 paper from Google reported using MST-based clustering to design their B4 software-defined WAN topology, reducing fiber costs by 15%."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Clustering (Single-Link / Hierarchical):"
      }), "\nTo partition data into (k) clusters: compute the MST of the complete similarity graph, then remove the (k-1) heaviest edges. The remaining components are the clusters. This is single-linkage clustering. Used in:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Genomics:"
        }), " Clustering gene expression profiles to identify co-regulated genes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Image segmentation:"
        }), " Grouping pixels into regions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Social network analysis:"
        }), " Finding communities by removing weak ties."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Image Segmentation (Graph-Based):"
      }), "\nFelzenszwalb and Huttenlocher (2004) developed an MST-based image segmentation algorithm. Pixels are vertices; edge weights are intensity differences. The algorithm builds an MST and adaptively merges components where the minimum weight edge crossing the boundary is larger than the maximum weight inside each component. This produces perceptually meaningful segments without pre-specifying the number of clusters."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approximation Algorithms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TSP:"
        }), " The MST double-tree algorithm gives a 2-approximation. Compute MST, double each edge (Eulerian tour), then shortcut repeated vertices."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Steiner Tree:"
        }), " Approximated within 2x optimal by computing the MST of the metric closure of the terminals."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Facility Location:"
        }), " MST-based heuristics provide constant-factor approximations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Chip Design (VLSI Routing):"
      }), "\nIn VLSI physical design, connecting circuit components with minimum wire length is an MST problem. Rectilinear Steiner trees (a variant) are used for global routing in chips with millions of transistors."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " MST is the foundational building block for many approximation algorithms in combinatorial optimization. If your problem involves connecting points minimally, start with MST."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-121-kruskals-algorithm----complete-graph",
      children: "Example 12.1: Kruskal's Algorithm -- Complete Graph"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the MST for a 4-vertex complete graph with edge weights: (0,1)=1, (0,2)=4, (0,3)=3, (1,2)=2, (1,3)=5, (2,3)=6."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sorted edges:"
      }), " (0,1)=1, (1,2)=2, (0,3)=3, (0,2)=4, (1,3)=5, (2,3)=6."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Find(u)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Find(v)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cycle?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MST Edges"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{(0,1)}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{(0,1),(1,2)}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0,3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{(0,1),(1,2),(0,3)}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MST:"
      }), " (0,1)=1, (1,2)=2, (0,3)=3 -- total = 6."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-122-prims-algorithm----same-graph",
      children: "Example 12.2: Prim's Algorithm -- Same Graph"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Starting from vertex 0:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Extract"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Added"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Visited"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Updated Keys"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key[1]=1, key[3]=3, key[2]=4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key[2]=2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0,3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2,3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MST:"
      }), " same as Kruskal -- total = 6."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-123-proof-application----cut-property",
      children: "Example 12.3: Proof Application -- Cut Property"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Prove that the edge of minimum weight in the entire graph must belong to some MST."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof:"
      }), " Consider a cut that separates the two endpoints of the minimum-weight edge (e) from the rest of the graph. By the cut property, the minimum-weight edge across this cut (which is (e) itself) belongs to some MST."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Structure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kruskal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add smallest non-cycle edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union-Find DSU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sparse graphs (E ≈ V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E log E)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prim (binary heap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grow tree from seed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate density"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E log V)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prim (array)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grow tree from seed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense graphs (E ≈ V²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V²)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Boruvka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Component cheapest edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-component arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel/Distributed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E log V)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse-Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove heaviest non-bridge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS connectivity check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Educational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E(V+E)) naive"
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
              children: "Kruskal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort edges, use union-find to skip cycles; O(E log E); best for sparse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prim"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grow tree like Dijkstra, key = min edge to tree; O(E log V); best for dense"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Boruvka"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each component picks cheapest outgoing edge; O(log V) phases; parallelizable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reverse-Delete"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start with all edges, remove heaviest non-bridge; dual of Kruskal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cut Property"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lightest crossing edge is in some MST"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cycle Property"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heaviest cycle edge is in no MST"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Applications"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network design, clustering, TSP approximation, image segmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Second MST"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace one MST edge with best non-MST edge; O(E + V log V) with LCA"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DSA Interviews"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Competitive Programming"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "System Design"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kruskal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard MST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network cabling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Power grids, telecom"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prim"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense graph MST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chip layout, VLSI routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Boruvka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed MST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large-scale networks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MST in general"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core technique"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clustering, segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-link clustering, genomics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kruskal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge-sorting + union-find"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(E \\log E) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sparse graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prim (binary heap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority queue on vertices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(E \\log V) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate density"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prim (array)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scan for min key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(V^2) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense complete graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Boruvka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Component contraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(E \\log V) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel/distributed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse-Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove heaviest non-bridge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(E(V+E)) ) naive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Educational"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " Which MST algorithm is best for a sparse graph with E ≈ V?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Prim with binary heap"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Boruvka"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Kruskal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) All are equally good"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nC) Kruskal -- the sorting step dominates at O(E log E), and union-find operations are nearly constant.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What property guarantees that the smallest edge crossing a cut belongs to some MST?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Cycle property"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Cut property"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Optimal substructure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Triangle inequality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) The cut property states the minimum-weight edge crossing any cut is in some MST.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " How many phases does Boruvka's algorithm run in the worst case?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) O(V)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) O(E)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) O(log V)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) O(1)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nC) O(log V) -- each phase at least halves the number of components.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Which data structure is used in Kruskal's algorithm to detect cycles efficiently?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Hash table"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Union-Find (Disjoint Set Union)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Priority Queue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Binary Search Tree"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) Union-Find with path compression and union by rank detects cycles in near-constant time.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " What is the primary difference between Prim's and Dijkstra's algorithms?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Prim uses DFS, Dijkstra uses BFS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Prim grows tree to all vertices, Dijkstra finds single-source shortest paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) They are identical"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Prim works only on directed graphs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) Both grow a tree from a source, but Prim minimizes edge weight to the current tree (MST), while Dijkstra minimizes total distance from the source (shortest paths).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6."
      }), " How can you find the second-best MST efficiently?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Remove each MST edge and recompute from scratch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) For each non-MST edge, swap with the heaviest edge on the MST path between its endpoints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Run Prim twice with different starting vertices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Use Boruvka with twice the phases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) For each non-MST edge (u,v,w), find the maximum-weight edge on the u-v path in the MST and replace it. Track the minimum total among all replacements.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7."
      }), " For a complete graph with 1000 vertices, which MST implementation runs fastest?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Kruskal with union-find"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Prim with binary heap"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Prim with array (O(V²))"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Boruvka"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nC) Prim with array O(V²) = 10⁶ operations, vs Kruskal O(V² log V) ≈ 10⁷ operations. The array version scans linearly for the minimum key -- ideal for complete graphs.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8."
      }), " True or False: The edge with minimum weight in the entire graph must belong to every MST."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) True"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) False"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) False. The minimum-weight edge belongs to some MST (cut property), but not necessarily every MST. If there are multiple edges of the same minimum weight, different MSTs may exclude some of them.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State and prove the cut property of MSTs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare Kruskal and Prim in terms of complexity on sparse vs. dense graphs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does Boruvka have at most ( O(\\log V) ) phases?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how union-find detects cycles in Kruskal's algorithm."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe how you would find the second-best MST."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Kruskal with path compression and union by rank."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Prim's algorithm to find the MST of a complete graph with 100 vertices and edge weights uniformly distributed in [0,1]."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that the MST is unique if all edge weights are distinct."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given a graph and a pre-specified edge ( e ), determine if ( e ) must belong to every MST."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transform the minimum product spanning tree problem into MST using logarithms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a function to find the second-best MST given the original MST and the edge list."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Boruvka's algorithm and compare its performance with Kruskal on random graphs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design an algorithm for the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "minimum Steiner tree"
        }), " problem in metric spaces using MST. Give a 2-approximation guarantee."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distributed MST:"
        }), " Design a message-passing algorithm for MST where each vertex initially knows only its incident edges. How many communication rounds are needed in the CONGEST model?"]
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