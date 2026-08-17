"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[28048],{

/***/ 82133
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_discrete_mathematics_09_graph_theory_md_62a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-discrete-mathematics-09-graph-theory-md-62a.json
const site_docs_courses_discrete_mathematics_09_graph_theory_md_62a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/discrete-mathematics/09-graph-theory","title":"Chapter 9: Graph Theory","description":"Previous Functions | Next Trees","source":"@site/docs/courses/discrete-mathematics/09-graph-theory.md","sourceDirName":"courses/discrete-mathematics","slug":"/discrete-mathematics/09-graph-theory","permalink":"/ai-engineering-journey/discrete-mathematics/09-graph-theory","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"09-graph-theory","slug":"/discrete-mathematics/09-graph-theory","title":"Chapter 9: Graph Theory","sidebar_label":"Chapter 9: Graph Theory","sidebar_position":9},"sidebar":"course-discrete-mathematics","previous":{"title":"Chapter 8: Functions","permalink":"/ai-engineering-journey/discrete-mathematics/08-functions"},"next":{"title":"Chapter 10: Trees","permalink":"/ai-engineering-journey/discrete-mathematics/10-trees"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/discrete-mathematics/09-graph-theory.md


const frontMatter = {
	id: '09-graph-theory',
	slug: '/discrete-mathematics/09-graph-theory',
	title: 'Chapter 9: Graph Theory',
	sidebar_label: 'Chapter 9: Graph Theory',
	sidebar_position: 9
};
const contentTitle = 'Chapter 9: Graph Theory';

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
  "value": "9.1 Definition",
  "id": "91-definition",
  "level": 3
}, {
  "value": "9.2 Basic Concepts",
  "id": "92-basic-concepts",
  "level": 3
}, {
  "value": "9.3 Connectivity",
  "id": "93-connectivity",
  "level": 3
}, {
  "value": "9.4 Special Graphs",
  "id": "94-special-graphs",
  "level": 3
}, {
  "value": "9.5 Graph Representations",
  "id": "95-graph-representations",
  "level": 3
}, {
  "value": "9.6 Euler and Hamilton Paths",
  "id": "96-euler-and-hamilton-paths",
  "level": 3
}, {
  "value": "9.7 Subgraphs and Graph Isomorphism",
  "id": "97-subgraphs-and-graph-isomorphism",
  "level": 3
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
  "value": "9.8 Graph Traversal Algorithms",
  "id": "98-graph-traversal-algorithms",
  "level": 3
}, {
  "value": "9.9 Graph Coloring",
  "id": "99-graph-coloring",
  "level": 3
}, {
  "value": "9.10 Applications of Graph Theory",
  "id": "910-applications-of-graph-theory",
  "level": 3
}, {
  "value": "9.11 Graph Traversal Implementations",
  "id": "911-graph-traversal-implementations",
  "level": 3
}, {
  "value": "9.12 Shortest Path Algorithms",
  "id": "912-shortest-path-algorithms",
  "level": 3
}, {
  "value": "9.13 Graph Applications in Practice",
  "id": "913-graph-applications-in-practice",
  "level": 3
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises",
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
        id: "chapter-9-graph-theory",
        children: "Chapter 9: Graph Theory"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/discrete-mathematics/08-functions",
          children: "Chapter 8: Functions"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/discrete-mathematics/10-trees",
          children: "Chapter 10: Trees"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define and identify different types of graphs (undirected, directed, weighted, simple, multigraphs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply graph terminology: vertices, edges, degree, adjacency, paths, cycles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between graph representations (adjacency matrix, adjacency list, incidence matrix)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine connectivity, components, and cut vertices/edges"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize bipartite, complete, and regular graphs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model real-world problems using graph structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply Euler and Hamilton path concepts"
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
            children: "Graph Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undirected, directed, weighted, multigraphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose representation based on relationship symmetry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vertex Degree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum of degrees = $2 |E|$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handshaking lemma: even number of odd-degree vertices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connectivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Paths connect vertices; components are maximal connected subgraphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cut vertices and bridges are single points of failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graph Representations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency matrix, adjacency list, incidence matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix: $O(1)$ edge lookup; List: $O(V+E)$ space for sparse graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete Graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$K_n$ has $n(n-1)/2$ edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every pair of vertices is connected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bipartite Graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two independent sets; no odd cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalent to 2-colorability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eulerian vs Hamiltonian"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Euler: traverse every edge; Hamilton: visit every vertex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Euler: all even-degree vertices; Hamilton: NP-complete"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Graph Definition] --> B[Types]\n    B --> C[Undirected]\n    B --> D[Directed]\n    B --> E[Weighted]\n    B --> F[Multigraph]\n    A --> G[Basic Concepts]\n    G --> H[Degree]\n    G --> I[Adjacency]\n    G --> J[Path / Cycle]\n    G --> K[Connectivity]\n    A --> L[Special Graphs]\n    L --> M[Complete K_n]\n    L --> N[Bipartite]\n    L --> O[Regular]\n    A --> P[Euler & Hamilton]\n    A --> Q[Representations]\n    Q --> R[Adjacency Matrix]\n    Q --> S[Adjacency List]\n    Q --> T[Incidence Matrix]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-definition",
      children: "9.1 Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "graph"
      }), " $G = (V, E)$ consists of a set $V$ of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vertices"
      }), " (or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nodes"
      }), ") and a set $E$ of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "edges"
      }), " connecting pairs of vertices. An edge ${u, v}$ connects vertices $u$ and $v$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Graph types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Undirected graph:"
        }), " edges have no direction (${u,v} = {v,u}$)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Directed graph (digraph):"
        }), " edges have direction ($(u,v) \\neq (v,u)$)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weighted graph:"
        }), " edges carry a numeric weight."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multigraph:"
        }), " multiple edges between the same vertices allowed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simple graph:"
        }), " no loops or multiple edges."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A graph is a set of vertices connected by edges; the edge type (directed, weighted, multiple) determines the graph variant."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-basic-concepts",
      children: "9.2 Basic Concepts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Adjacency:"
      }), " Two vertices are adjacent if an edge connects them."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Degree (undirected):"
      }), " $\\deg(v)$ = number of edges incident to $v$. A vertex of degree 0 is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "isolated"
      }), "; degree 1 is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pendant"
      }), " (leaf)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Handshaking Lemma (Theorem 9.1):"
      }), " $\\sum_{v \\in V} \\deg(v) = 2|E|$. Every graph has an even number of odd-degree vertices."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Degree (directed):"
      }), " $\\deg^-(v)$ = in-degree (incoming edges), $\\deg^+(v)$ = out-degree (outgoing edges). $\\sum \\deg^-(v) = \\sum \\deg^+(v) = |E|$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Path:"
      }), " A sequence of vertices where each consecutive pair is adjacent. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "simple path"
      }), " repeats no vertices. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Length"
      }), " = number of edges."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cycle:"
      }), " A path where the first and last vertices are the same (and $v_0$ is the only repeated vertex)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The Handshaking Lemma ties vertex degrees to edge count; paths and cycles are the fundamental building blocks of graph connectivity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-connectivity",
      children: "9.3 Connectivity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A graph is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "connected"
      }), " if there is a path between any two vertices. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "connected component"
      }), " is a maximal connected subgraph."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cut vertex (articulation point):"
      }), " A vertex whose removal disconnects the graph."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bridge (cut edge):"
      }), " An edge whose removal disconnects the graph."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 9.2 (Connectivity in directed graphs)."
      }), " A directed graph is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "strongly connected"
      }), " if there is a directed path between any two vertices. It is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "weakly connected"
      }), " if its underlying undirected graph is connected."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Distance:"
      }), " The shortest path length between two vertices."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Diameter:"
      }), " The maximum distance between any two vertices in a connected graph."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A vertex or edge whose removal disconnects the graph is a cut vertex or bridge; strong connectivity requires directed paths both ways."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-special-graphs",
      children: "9.4 Special Graphs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complete graph $K_n$:"
      }), " Every pair of vertices is connected. Has $n(n-1)/2$ edges."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cycle graph $C_n$:"
      }), " $n$ vertices connected in a single cycle."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bipartite graph $K_{m,n}$:"
      }), " Vertices partitioned into two sets; edges only cross between sets."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 9.3 (Bipartite characterization)."
      }), " A graph is bipartite if and only if it contains no odd-length cycles."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Regular graph:"
      }), " Every vertex has degree $k$ (a $k$-regular graph)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Wheel graph $W_n$:"
      }), " Cycle $C_{n-1}$ connected to one central vertex."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Planar graph:"
      }), " Can be drawn with no edge crossings (edges intersect only at vertices)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 9.4 (Euler's formula for planar graphs)."
      }), " For a connected planar graph: $V - E + F = 2$, where $F$ is the number of faces."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Complete graphs ($K_n$) and bipartite graphs ($K_{m,n}$) are fundamental special classes; bipartite is equivalent to 2-colorability and absence of odd cycles."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "95-graph-representations",
      children: "9.5 Graph Representations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Adjacency Matrix:"
      }), " $A[i][j] = 1$ if edge $(i,j)$ exists, $0$ otherwise. For undirected graphs, $A$ is symmetric. Size: $|V| \\times |V|$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Adjacency List:"
      }), " Array of lists; vertex $i$ has a list of its neighbors. Space: $O(|V| + |E|)$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Incidence Matrix:"
      }), " $M[i][j] = 1$ if vertex $i$ is incident to edge $j$. Size: $|V| \\times |E|$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class Graph {\n  private adj: Map<number, number[]> = new Map();\n  private directed: boolean;\n\n  constructor(directed: boolean = false) {\n    this.directed = directed;\n  }\n\n  addVertex(v: number): void {\n    if (!this.adj.has(v)) this.adj.set(v, []);\n  }\n\n  addEdge(u: number, v: number): void {\n    this.addVertex(u);\n    this.addVertex(v);\n    this.adj.get(u)!.push(v);\n    if (!this.directed) this.adj.get(v)!.push(u);\n  }\n\n  neighbors(v: number): number[] {\n    return this.adj.get(v) ?? [];\n  }\n\n  degree(v: number): number {\n    return this.neighbors(v).length;\n  }\n\n  hasEdge(u: number, v: number): boolean {\n    return this.neighbors(u).includes(v);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Adjacency matrices give $O(1)$ edge lookup at the cost of $O(V^2)$ space; adjacency lists use $O(V+E)$ space and are preferred for sparse graphs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "96-euler-and-hamilton-paths",
      children: "9.6 Euler and Hamilton Paths"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Eulerian path:"
      }), " A trail that traverses every edge exactly once.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Eulerian circuit:"
      }), " An Eulerian path that starts and ends at the same vertex."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 9.5 (Euler's theorem)."
      }), " An undirected graph has an Eulerian circuit if and only if every vertex has even degree. It has an Eulerian path (but not a circuit) if exactly two vertices have odd degree."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hamiltonian path:"
      }), " A path that visits every vertex exactly once.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hamiltonian cycle:"
      }), " A Hamiltonian path that starts and ends at the same vertex."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No simple characterization exists for Hamiltonian graphs (the problem is NP-complete)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 9.6 (Dirac's theorem)."
      }), " If $G$ is a simple graph with $n \\geq 3$ vertices and every vertex has degree $\\geq n/2$, then $G$ has a Hamiltonian cycle."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Eulerian paths traverse every edge once (easy to characterize via parity); Hamiltonian paths visit every vertex once (NP-complete to characterize)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "97-subgraphs-and-graph-isomorphism",
      children: "9.7 Subgraphs and Graph Isomorphism"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Subgraph:"
      }), " $H = (V', E')$ where $V' \\subseteq V$ and $E' \\subseteq E$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spanning subgraph:"
      }), " $V' = V$ (keeps all vertices)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Induced subgraph:"
      }), " Includes all edges whose endpoints are in $V'$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Graph isomorphism:"
      }), " Graphs $G$ and $H$ are isomorphic ($G \\cong H$) if there exists a bijection $f: V_G \\rightarrow V_H$ such that ${u,v} \\in E_G \\iff {f(u), f(v)} \\in E_H$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isomorphism is an equivalence relation. Checking isomorphism is difficult (no polynomial-time algorithm known in general)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Invariants preserved by isomorphism:"
      }), " number of vertices, edges, degree sequence, connectivity, bipartiteness."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Graph Family"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Vertices"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edges"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Properties"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$K_n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$n(n-1)/2$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All pairs connected; $n-1$-regular"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$C_n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-regular; connected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bipartite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$K_{m,n}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$m+n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$mn$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two independent sets; no odd cycles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wheel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$W_n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$2(n-1)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cycle + hub; planar for $n \\leq 4$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$P_n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$n-1$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 pendant vertices; tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hypercube"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$Q_n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$2^n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$n2^{n-1}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$n$-regular; distance = Hamming distance"
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
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Computer Science"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Networking"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operations"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Biology"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shortest Path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dijkstra, BFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routing protocols (OSPF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logistics optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metabolic pathway analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connectivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network resilience"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fault-tolerant topologies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supply chain risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protein interaction networks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bipartite Graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matching algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch-router models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Job assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gene regulatory networks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Planar Graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VLSI layout, PCB routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Facility layout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neural connectivity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eulerian Path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "De Bruijn sequences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Garbage collection routes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNA assembly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hamiltonian Cycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TSP algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ring topologies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traveling salesman"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Genome mapping"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the sum of degrees in a graph with $|E| = 10$ edges?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 5"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 10"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 20"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 40"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** $\\sum \\deg(v) = 2|E| = 20$ by the Handshaking Lemma."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which condition characterizes bipartite graphs?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) No even cycles"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) No odd cycles"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Every vertex has even degree"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Connectedness"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** A graph is bipartite iff it contains no odd-length cycles."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A graph has an Eulerian circuit if and only if:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) It is connected and every vertex has even degree"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) It is complete"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) It is bipartite"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) It has a Hamiltonian cycle"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**A)** Eulerian circuit exists iff the graph is connected (ignoring isolated vertices) and every vertex has even degree."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How many edges does $K_6$ have?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 6"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 10"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 15"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 30"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** $K_6$ has $6 \\cdot 5 / 2 = 15$ edges."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the space complexity of an adjacency matrix for a graph with $V$ vertices?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $O(V)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $O(V + E)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $O(V^2)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $O(E^2)$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** Adjacency matrices use $O(V^2)$ space regardless of the number of edges."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 9.1"
      }), " (Handshaking Lemma verification). Consider a graph with 4 vertices and edges ${{1,2}, {2,3}, {3,4}, {4,1}, {2,4}}$. Degrees: $\\deg(1)=2$, $\\deg(2)=3$, $\\deg(3)=2$, $\\deg(4)=3$. Sum $= 2 + 3 + 2 + 3 = 10 = 2 \\cdot 5 = 2|E|$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 9.2"
      }), " (Path vs. cycle). In $C_5$ (a 5-cycle), the maximum distance between any two vertices is 2 (diameter = 2). The graph is 2-regular and connected."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 9.3"
      }), " (Bipartite check). $C_4$ is bipartite (even cycle): assign vertices alternately to sets $A = {1,3}$, $B = {2,4}$. $C_3$ (triangle) is not bipartite (odd cycle)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 9.4"
      }), " (Eulerian path). A graph with vertices ${1,2,3,4}$ and edges ${{1,2},{2,3},{3,4},{4,2}}$: degrees are $\\deg(1)=1$, $\\deg(2)=3$, $\\deg(3)=2$, $\\deg(4)=2$. Two odd-degree vertices (1 and 2), so it has an Eulerian path but not a circuit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function hasEulerianCircuit(graph: Graph): boolean {\n  const vertices = Array.from(graph['adj'].keys());\n  for (const v of vertices) {\n    if (graph.degree(v) % 2 !== 0) return false;\n  }\n  return true;\n}\n\nfunction hasEulerianPath(graph: Graph): boolean {\n  const vertices = Array.from(graph['adj'].keys());\n  let oddCount = 0;\n  for (const v of vertices) {\n    if (graph.degree(v) % 2 !== 0) oddCount++;\n  }\n  return oddCount === 0 || oddCount === 2;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 9.5"
      }), " (Euler's formula). The cube graph $Q_3$ has $V = 8$, $E = 12$, $F = 6$. Euler's formula: $8 - 12 + 6 = 2$. ?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 9.6"
      }), " (Adjacency matrix). For graph with edges ${1,2},{2,3},{3,1}$:\n$$A = \\begin{bmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \\end{bmatrix}$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 9.7"
      }), " (Distance calculation). In $K_5$, distance between any two distinct vertices is 1. Diameter = 1."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 9.8"
      }), " (Complete bipartite graph $K_{2,3}$). Two vertices in set $A$, three in set $B$. $|E| = 2 \\cdot 3 = 6$. The graph is bipartite and has $5$ vertices."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 9.9"
      }), " (Finding cut vertices). In a path graph $P_4$ ($1-2-3-4$), every internal vertex (2 and 3) is a cut vertex. The end vertices (1 and 4) are not."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 9.10"
      }), " (Isomorphism). $C_4$ drawn as a square is isomorphic to $C_4$ drawn as a diamond ? vertex labels differ but structure is identical."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "98-graph-traversal-algorithms",
      children: "9.8 Graph Traversal Algorithms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Breadth-first search (BFS):"
      }), " Explores a graph level by level. Uses a queue. $O(V+E)$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Finds shortest path in unweighted graphs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used for connected components, bipartite checking, level-order traversal."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function bfs(graph: Graph, start: number): Map<number, number> {\n  const distances = new Map<number, number>();\n  const queue: number[] = [start];\n  distances.set(start, 0);\n  while (queue.length > 0) {\n    const v = queue.shift()!;\n    for (const neighbor of graph.neighbors(v)) {\n      if (!distances.has(neighbor)) {\n        distances.set(neighbor, distances.get(v)! + 1);\n        queue.push(neighbor);\n      }\n    }\n  }\n  return distances;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Depth-first search (DFS):"
      }), " Explores as deep as possible before backtracking. Uses a stack (recursion). $O(V+E)$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used for topological sorting, cycle detection, strongly connected components."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function dfs(\n  graph: Graph,\n  start: number,\n  visited: Set<number> = new Set()\n): Set<number> {\n  visited.add(start);\n  for (const neighbor of graph.neighbors(start)) {\n    if (!visited.has(neighbor)) {\n      dfs(graph, neighbor, visited);\n    }\n  }\n  return visited;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " BFS finds shortest paths in unweighted graphs using a queue; DFS explores deep using a stack and is useful for cycle detection and topological ordering."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "99-graph-coloring",
      children: "9.9 Graph Coloring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Greedy coloring algorithm: Order vertices; assign each vertex the smallest color not used by its already-colored neighbors. Uses at most $\\Delta + 1$ colors."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Applications:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scheduling: exams with overlapping students (conflict = edge)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Register allocation: variables live at the same time (conflict = edge)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sudoku: coloring $9 \\times 9$ with constraints."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "910-applications-of-graph-theory",
      children: "9.10 Applications of Graph Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Social networks:"
        }), " Recommend friends, detect communities, measure influence."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Road networks:"
        }), " GPS shortest-path navigation (Dijkstra, A*)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "World Wide Web:"
        }), " PageRank uses directed graph of hyperlinks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Biology:"
        }), " Protein interaction networks, neural connectivity, phylogenetic trees."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transportation:"
        }), " Airline route optimization, shipping logistics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Computer networks:"
        }), " Topology design, routing protocols, fault tolerance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "911-graph-traversal-implementations",
      children: "9.11 Graph Traversal Implementations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Breadth-First Search (BFS)"
      }), " explores vertices in order of increasing distance from the source."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function bfs(graph: number[][], start: number): { dist: number[]; parent: number[] } {\n  const n = graph.length;\n  const dist = new Array(n).fill(-1);\n  const parent = new Array(n).fill(-1);\n  const queue: number[] = [start];\n  dist[start] = 0;\n\n  while (queue.length > 0) {\n    const u = queue.shift()!;\n    for (const v of graph[u]) {\n      if (dist[v] === -1) {\n        dist[v] = dist[u] + 1;\n        parent[v] = u;\n        queue.push(v);\n      }\n    }\n  }\n  return { dist, parent };\n}\n\n// Example: path from 0 to 4\nfunction getPath(parent: number[], target: number): number[] {\n  const path: number[] = [];\n  for (let v = target; v !== -1; v = parent[v]) path.push(v);\n  return path.reverse();\n}\n\nconst adjList = [[1, 2], [0, 3], [0, 3], [1, 2, 4], [3]];\nconst { dist, parent } = bfs(adjList, 0);\nconsole.log(dist);  // [0, 1, 1, 2, 3]\nconsole.log(getPath(parent, 4)); // [0, 1, 3, 4] or [0, 2, 3, 4]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Depth-First Search (DFS)"
      }), " explores as far as possible before backtracking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function dfs(graph: number[][], start: number): number[] {\n  const visited = new Set<number>();\n  const order: number[] = [];\n\n  const dfsRec = (u: number) => {\n    visited.add(u);\n    order.push(u);\n    for (const v of graph[u]) {\n      if (!visited.has(v)) dfsRec(v);\n    }\n  };\n  dfsRec(start);\n  return order;\n}\n\nfunction hasCycle(graph: number[][]): boolean {\n  const n = graph.length;\n  const visited = new Array(n).fill(false);\n  const recStack = new Array(n).fill(false);\n\n  const dfsCycle = (u: number): boolean => {\n    visited[u] = true;\n    recStack[u] = true;\n    for (const v of graph[u]) {\n      if (!visited[v]) { if (dfsCycle(v)) return true; }\n      else if (recStack[v]) return true;\n    }\n    recStack[u] = false;\n    return false;\n  };\n\n  for (let i = 0; i < n; i++) {\n    if (!visited[i] && dfsCycle(i)) return true;\n  }\n  return false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "912-shortest-path-algorithms",
      children: "9.12 Shortest Path Algorithms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dijkstra's Algorithm"
      }), " finds the shortest path from a source to all other vertices in a weighted graph with nonnegative weights."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function dijkstra(\n  graph: [number, number][][],\n  start: number\n): { dist: number[]; prev: number[] } {\n  const n = graph.length;\n  const dist = new Array(n).fill(Infinity);\n  const prev = new Array(n).fill(-1);\n  const visited = new Array(n).fill(false);\n  dist[start] = 0;\n\n  for (let i = 0; i < n; i++) {\n    let u = -1;\n    let minDist = Infinity;\n    for (let j = 0; j < n; j++) {\n      if (!visited[j] && dist[j] < minDist) {\n        minDist = dist[j];\n        u = j;\n      }\n    }\n    if (u === -1) break;\n    visited[u] = true;\n\n    for (const [v, w] of graph[u]) {\n      if (!visited[v] && dist[u] + w < dist[v]) {\n        dist[v] = dist[u] + w;\n        prev[v] = u;\n      }\n    }\n  }\n  return { dist, prev };\n}\n\n// Weighted graph: edges are [neighbor, weight]\nconst weightedGraph: [number, number][][] = [\n  [[1, 4], [2, 1]],           // 0\n  [[3, 1]],                    // 1\n  [[1, 2], [3, 5]],            // 2\n  [[4, 3]],                    // 3\n  []                           // 4\n];\nconsole.log(dijkstra(weightedGraph, 0).dist); // [0, 3, 1, 4, 7]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bellman-Ford Algorithm"
      }), " handles negative edge weights and detects negative cycles."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function bellmanFord(\n  n: number,\n  edges: [number, number, number][],\n  start: number\n): { dist: number[]; hasNegativeCycle: boolean } {\n  const dist = new Array(n).fill(Infinity);\n  dist[start] = 0;\n\n  for (let i = 0; i < n - 1; i++) {\n    for (const [u, v, w] of edges) {\n      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {\n        dist[v] = dist[u] + w;\n      }\n    }\n  }\n\n  let hasNegativeCycle = false;\n  for (const [u, v, w] of edges) {\n    if (dist[u] !== Infinity && dist[u] + w < dist[v]) {\n      hasNegativeCycle = true;\n    }\n  }\n  return { dist, hasNegativeCycle };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "913-graph-applications-in-practice",
      children: "9.13 Graph Applications in Practice"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Detecting bipartite graphs"
      }), " via BFS 2-coloring:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function isBipartite(graph: number[][]): boolean {\n  const n = graph.length;\n  const color = new Array(n).fill(-1);\n\n  for (let start = 0; start < n; start++) {\n    if (color[start] !== -1) continue;\n    color[start] = 0;\n    const queue = [start];\n    while (queue.length > 0) {\n      const u = queue.shift()!;\n      for (const v of graph[u]) {\n        if (color[v] === -1) {\n          color[v] = 1 - color[u];\n          queue.push(v);\n        } else if (color[v] === color[u]) {\n          return false;\n        }\n      }\n    }\n  }\n  return true;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 9.2 (Graph equivalence)."
      }), " A graph is bipartite if and only if it has no odd cycles."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Graph Problems by Complexity\"\n        A[Graph Problem] --> B{Eulerian?}\n        B -->|Yes| C[O(E) ? check degrees]\n        B -->|No| D{Hamiltonian?}\n        D -->|Yes| E[NP-complete ? brute force]\n        D -->|No| F{Planar?}\n        F -->|Yes| G[O(V) ? check K5, K3,3 minors]\n        F -->|No| H[Non-planar]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 9.7"
      }), " (Dijkstra in GPS navigation). The road network has ~2M vertices (intersections) and ~5M edges (road segments). Dijkstra with a priority queue runs in $O((V+E)\\log V) \\approx 15M$ operations ? feasible for real-time navigation. A* adds a heuristic (straight-line distance) for faster routing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 9.8"
      }), " (Graph coloring for exam scheduling). Five exams: A conflicts with B, C; B conflicts with A, C, D; C conflicts with A, B, E; D conflicts with B, E; E conflicts with C, D. Greedy coloring: color A=1, B=2, C=3 (conflicts with 1,2), D=1 (conflicts with 2 only), E=2 (conflicts with 3,1). Uses 3 colors."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof 9.3"
      }), " (Five Color Theorem ? sketch). Every planar graph is 5-colorable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof sketch."
      }), " By induction on $|V|$. Every planar graph has a vertex $v$ of degree $\\leq 5$ (by Euler's formula $E \\leq 3V - 6$). Remove $v$, 5-color the rest by induction. If the 5 neighbors use fewer than 5 colors, recolor $v$ with the unused color. Otherwise, use Kempe chain recolorings: consider two nonadjacent colors among the neighbors, swap them along alternating paths to free a color for $v$. $\\square$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 9.9"
      }), " (Topological sort ? DAG ordering)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function topologicalSort(graph: number[][]): number[] {\n  const n = graph.length;\n  const inDegree = new Array(n).fill(0);\n  for (const neighbors of graph) {\n    for (const v of neighbors) inDegree[v]++;\n  }\n  const queue: number[] = [];\n  for (let i = 0; i < n; i++) if (inDegree[i] === 0) queue.push(i);\n\n  const result: number[] = [];\n  while (queue.length > 0) {\n    const u = queue.shift()!;\n    result.push(u);\n    for (const v of graph[u]) {\n      inDegree[v]--;\n      if (inDegree[v] === 0) queue.push(v);\n    }\n  }\n  return result;\n}\n\n// Course prerequisites: {0 ? 1, 0 ? 2, 1 ? 3, 2 ? 3}\nconsole.log(topologicalSort([[1, 2], [3], [3], []])); // [0, 1, 2, 3] or [0, 2, 1, 3]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Determine whether a graph with degree sequence $(3, 3, 2, 2, 2)$ can be planar."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Run Dijkstra's algorithm on a graph with 5 vertices where edges are $(0,1,4), (0,2,2), (1,2,1), (1,3,5), (2,3,8), (2,4,10), (3,4,2)$ starting from vertex 0. Show the shortest distances."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "complete bipartite graph"
          }), " $K_{m,n}$ has $m + n$ vertices. How many edges does it have? When is it planar?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Write a TypeScript function ", (0,jsx_runtime.jsx)(_components.code, {
            children: "isConnected(graph: number[][]): boolean"
          }), " that uses BFS to test graph connectivity."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove that a finite graph where every vertex has degree at least 2 contains a cycle."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// --- BFS (Breadth-First Search) ---\nfunction bfs(graph: number[][], start: number): Map<number, number> {\n  const dist = new Map<number, number>();\n  const queue: number[] = [start];\n  dist.set(start, 0);\n  while (queue.length > 0) {\n    const v = queue.shift()!;\n    for (const n of graph[v]) {\n      if (!dist.has(n)) { dist.set(n, dist.get(v)! + 1); queue.push(n); }\n    }\n  }\n  return dist;\n}\nconst adj: number[][] = [[1,2],[0,3],[0,3],[1,2]];\nconsole.log('BFS distances:', [...bfs(adj, 0)]); // [[0,0],[1,1],[2,1],[3,2]]\n\n// --- DFS (Depth-First Search) & Cycle Detection ---\nfunction hasCycle(graph: number[][]): boolean {\n  const visited = new Array(graph.length).fill(false);\n  function dfs(v: number, parent: number): boolean {\n    visited[v] = true;\n    for (const n of graph[v]) {\n      if (!visited[n]) { if (dfs(n, v)) return true; }\n      else if (n !== parent) return true;\n    }\n    return false;\n  }\n  for (let v = 0; v < graph.length; v++) if (!visited[v] && dfs(v, -1)) return true;\n  return false;\n}\nconsole.log('Cycle detected:', hasCycle([[1],[0,2],[1]]));         // false (path)\nconsole.log('Cycle detected:', hasCycle([[1],[0,2],[1,0]]));      // true (triangle)\n\n// --- Dijkstra's Algorithm ---\ntype Edge = { to: number; weight: number };\nfunction dijkstra(graph: Edge[][], start: number): number[] {\n  const dist = new Array(graph.length).fill(Infinity);\n  const visited = new Array(graph.length).fill(false);\n  dist[start] = 0;\n  for (let i = 0; i < graph.length; i++) {\n    let u = -1;\n    for (let v = 0; v < graph.length; v++)\n      if (!visited[v] && (u === -1 || dist[v] < dist[u])) u = v;\n    if (dist[u] === Infinity) break;\n    visited[u] = true;\n    for (const { to, weight } of graph[u])\n      if (!visited[to] && dist[u] + weight < dist[to])\n        dist[to] = dist[u] + weight;\n  }\n  return dist;\n}\nconst weightedGraph: Edge[][] = [\n  [{ to: 1, weight: 4 }, { to: 2, weight: 2 }],\n  [{ to: 2, weight: 1 }, { to: 3, weight: 5 }],\n  [{ to: 3, weight: 8 }, { to: 4, weight: 10 }],\n  [{ to: 4, weight: 2 }], []\n];\nconsole.log('Dijkstra from 0:', dijkstra(weightedGraph, 0)); // [0,4,2,9,11]\n\n// --- Isomorphism Checker (simple) ---\nfunction degreeSequence(graph: number[][]): number[] {\n  return graph.map(v => v.length).sort((a,b) => b-a);\n}\nfunction couldBeIsomorphic(g1: number[][], g2: number[][]): boolean {\n  if (g1.length !== g2.length) return false;\n  const d1 = degreeSequence(g1), d2 = degreeSequence(g2);\n  return d1.every((d,i) => d === d2[i]);\n}\nconsole.log('Could be isomorphic:', couldBeIsomorphic([[1,2],[0],[0]], [[1],[0,2],[1]]));\n// true (both are paths of 3 vertices)\n\n// --- Graph Coloring (Greedy) ---\nfunction greedyColoring(graph: number[][]): number[] {\n  const colors = new Array(graph.length).fill(-1);\n  for (let v = 0; v < graph.length; v++) {\n    const used = new Set(graph[v].map(n => colors[n]));\n    for (let c = 0; c < graph.length; c++) { if (!used.has(c)) { colors[v] = c; break; } }\n  }\n  return colors;\n}\nconsole.log('Greedy coloring:', greedyColoring([[1,2],[0,2],[0,1]])); // [0,1,2]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// --- Graph Isomorphism Checker (naive via degree sequence) ---\nfunction degreeSequence(adj: number[][]): number[] {\n  return adj.map(neighbors => neighbors.length).sort((a, b) => a - b);\n}\nfunction isIsomorphicPossible(adj1: number[][], adj2: number[][]): boolean {\n  if (adj1.length !== adj2.length) return false;\n  const seq1 = degreeSequence(adj1).join(',');\n  const seq2 = degreeSequence(adj2).join(',');\n  if (seq1 !== seq2) return false;\n  // Degree sequence match is necessary but not sufficient\n  return true;\n}\nconst G1 = [[1,2],[0,2],[0,1]]; // triangle\nconst G2 = [[1,2],[0,2],[0,1]]; // triangle\nconsole.log('Isomorphism possible (3-cycle):', isIsomorphicPossible(G1, G2));\n\n// --- Bipartite Graph Checker ---\nfunction isBipartite(adj: number[][]): { bipartite: boolean; partition?: [number[], number[]] } {\n  const color = new Array(adj.length).fill(-1);\n  const parts: [number[], number[]] = [[], []];\n  for (let start = 0; start < adj.length; start++) {\n    if (color[start] !== -1) continue;\n    color[start] = 0;\n    parts[0].push(start);\n    const queue = [start];\n    while (queue.length) {\n      const v = queue.shift()!;\n      for (const u of adj[v]) {\n        if (color[u] === color[v]) return { bipartite: false };\n        if (color[u] === -1) {\n          color[u] = 1 - color[v];\n          parts[color[u]].push(u);\n          queue.push(u);\n        }\n      }\n    }\n  }\n  return { bipartite: true, partition: parts };\n}\nconst bipGraph = [[1,3],[0,2],[1,3],[0,2]]; // 4-cycle\nconst nonBip = [[1,2],[0,2],[0,1]]; // triangle\nconsole.log('\\n4-cycle bipartite:', isBipartite(bipGraph));\nconsole.log('Triangle bipartite:', isBipartite(nonBip));\n\n// --- Eulerian Path/Circuit Checker ---\nfunction isEulerian(adj: number[][]): 'circuit' | 'path' | 'none' {\n  const odd = adj.map((n, i) => n.length % 2 !== 0 ? i : -1).filter(i => i !== -1);\n  if (odd.length === 0) return 'circuit';\n  if (odd.length === 2) return 'path';\n  return 'none';\n}\nconst eulerGraph = [[1,2],[0,2,3],[0,1,3],[1,2]]; // K4\nconsole.log('\\nK4 Eulerian:', isEulerian(eulerGraph));\n\n// --- Hamiltonian Path (Brute force for small graphs) ---\nfunction hasHamiltonianPath(adj: number[][]): boolean {\n  const n = adj.length;\n  const perm = Array.from({length: n}, (_, i) => i);\n  function nextPerm(arr: number[]): boolean {\n    let i = arr.length - 2;\n    while (i >= 0 && arr[i] >= arr[i + 1]) i--;\n    if (i < 0) return false;\n    let j = arr.length - 1;\n    while (arr[j] <= arr[i]) j--;\n    [arr[i], arr[j]] = [arr[j], arr[i]];\n    arr.splice(i + 1, arr.length - i - 1, ...arr.slice(i + 1).reverse());\n    return true;\n  }\n  do {\n    if (perm.every((v, i) => i === 0 || adj[perm[i - 1]].includes(v))) return true;\n  } while (nextPerm(perm));\n  return false;\n}\nconsole.log('\\nHamiltonian path in K4:', hasHamiltonianPath(eulerGraph));\n\n// --- Graph Center (minimize eccentricity) ---\nfunction graphCenter(adj: number[][]): number[] {\n  const n = adj.length;\n  const dist = Array.from({length: n}, () => new Array(n).fill(Infinity));\n  for (let i = 0; i < n; i++) { dist[i][i] = 0; for (const j of adj[i]) dist[i][j] = 1; }\n  for (let k = 0; k < n; k++)\n    for (let i = 0; i < n; i++)\n      for (let j = 0; j < n; j++)\n        if (dist[i][k] + dist[k][j] < dist[i][j]) dist[i][j] = dist[i][k] + dist[k][j];\n  const ecc = dist.map(row => Math.max(...row.filter(d => d < Infinity)));\n  const minEcc = Math.min(...ecc);\n  return ecc.map((e, i) => e === minEcc ? i : -1).filter(i => i !== -1);\n}\nconst path4: number[][] = [[1],[0,2],[1,3],[2]];\nconsole.log('\\nCenter of path of length 4:', graphCenter(path4));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// graph theory\n// sets-graphs-probability implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'graph theory', data: { topic: 'sets-graphs-probability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// graph theory - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'discrete-math demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'discrete-mathematics', chapter: 'graph theory' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('discrete-math'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Graphs are modeled as $(V,E)$; types include undirected, directed, weighted, and multigraphs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Handshaking Lemma: $\\sum \\deg(v) = 2|E|$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A graph is connected if a path exists between any two vertices."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bipartite iff no odd cycles."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eulerian circuit iff all vertices have even degree (connected graph)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hamiltonian cycle is NP-complete to characterize."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use adjacency list for sparse graphs"
        }), " ? real-world graphs are almost always sparse."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bipartite = 2-colorable"
        }), " ? check via BFS alternating colors; any conflict means an odd cycle."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Euler = edges, Hamilton = vertices"
        }), " ? Euler is computationally easy, Hamilton is hard."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Even-degree condition"
        }), " ? always check parity first when looking for Eulerian trails."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Planar graphs have $E \\leq 3V - 6$"
        }), " ? a quick check for non-planarity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the degree of every vertex in $C_7$?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can a complete bipartite graph $K_{2,2}$ have a Hamiltonian cycle?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How many edges does $K_{10}$ have?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is $C_6$ bipartite? Explain."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State Euler's formula for planar graphs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show that any graph with $|V| = 6$ and $|E| = 16$ has at least one vertex of degree $\\geq 6$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Determine whether $K_5$ is planar."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove that every tree (connected, acyclic graph) with $n$ vertices has $n-1$ edges."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Draw $K_{3,3}$ and determine whether it is planar."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Construct an Eulerian circuit for the graph with vertices ${1,2,3,4}$ and edges ${{1,2},{2,3},{3,4},{4,1},{1,3},{2,4}}$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Find the diameter of $Q_3$ (the 3-dimensional hypercube)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a BFS-based function to check if a graph is connected."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove that every graph with at least 2 vertices has at least two vertices of the same degree."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove: A graph with $n$ vertices and $\\binom{n-1}{2} + 1$ edges is always connected."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "tournament"
          }), " is a complete directed graph (for every unordered pair ${u,v}$, exactly one of $(u,v)$ or $(v,u)$ is an edge). Prove that every tournament has a Hamiltonian path."]
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