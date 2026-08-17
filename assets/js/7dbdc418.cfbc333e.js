"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[87762],{

/***/ 81162
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_algorithms_13_graph_flow_md_7db_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-algorithms-13-graph-flow-md-7db.json
const site_docs_courses_algorithms_13_graph_flow_md_7db_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/algorithms/13-graph-flow","title":"Chapter 13: Network Flow","description":"Prerequisites Minimum Spanning Trees — Graph theory, cuts, and greedy algorithms | Next String Algorithms — From flow optimization to pattern matching","source":"@site/docs/courses/algorithms/13-graph-flow.md","sourceDirName":"courses/algorithms","slug":"/algorithms/13-graph-flow","permalink":"/ai-engineering-journey/algorithms/13-graph-flow","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"id":"13-graph-flow","slug":"/algorithms/13-graph-flow","title":"Chapter 13: Network Flow","sidebar_label":"Chapter 13: Network Flow","sidebar_position":13},"sidebar":"course-algorithms","previous":{"title":"Chapter 12: Minimum Spanning Trees","permalink":"/ai-engineering-journey/algorithms/12-graph-mst"},"next":{"title":"Chapter 14: String Algorithms","permalink":"/ai-engineering-journey/algorithms/14-string-algorithms"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/algorithms/13-graph-flow.md


const frontMatter = {
	id: '13-graph-flow',
	slug: '/algorithms/13-graph-flow',
	title: 'Chapter 13: Network Flow',
	sidebar_label: 'Chapter 13: Network Flow',
	sidebar_position: 13
};
const contentTitle = 'Chapter 13: Network Flow';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Network Flow Matters",
  "id": "why-network-flow-matters",
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
  "value": "13.1 Flow Networks",
  "id": "131-flow-networks",
  "level": 3
}, {
  "value": "13.2 Max-Flow Min-Cut Theorem",
  "id": "132-max-flow-min-cut-theorem",
  "level": 3
}, {
  "value": "13.3 Ford-Fulkerson Method",
  "id": "133-ford-fulkerson-method",
  "level": 3
}, {
  "value": "13.4 Edmonds-Karp Algorithm",
  "id": "134-edmonds-karp-algorithm",
  "level": 3
}, {
  "value": "13.5 Dinic&#39;s Algorithm",
  "id": "135-dinics-algorithm",
  "level": 3
}, {
  "value": "13.6 Push-Relabel Algorithm",
  "id": "136-push-relabel-algorithm",
  "level": 3
}, {
  "value": "13.7 Min-Cut (Finding the Bottleneck)",
  "id": "137-min-cut-finding-the-bottleneck",
  "level": 3
}, {
  "value": "13.8 Bipartite Matching via Max Flow",
  "id": "138-bipartite-matching-via-max-flow",
  "level": 3
}, {
  "value": "13.9 Assignment Problem",
  "id": "139-assignment-problem",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 13.1: Dinic Implementation (C++)",
  "id": "example-131-dinic-implementation-c",
  "level": 3
}, {
  "value": "Example 13.2: Bipartite Matching via Max Flow (Python)",
  "id": "example-132-bipartite-matching-via-max-flow-python",
  "level": 3
}, {
  "value": "Example 13.3: Max Flow Min Cut (Java)",
  "id": "example-133-max-flow-min-cut-java",
  "level": 3
}, {
  "value": "Max Flow Algorithms Comparison",
  "id": "max-flow-algorithms-comparison",
  "level": 2
}, {
  "value": "When to Use Which",
  "id": "when-to-use-which",
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
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Problem 1: Maximum Bipartite Matching via Flow",
  "id": "problem-1-maximum-bipartite-matching-via-flow",
  "level": 3
}, {
  "value": "Problem 2: Min-Cut for Vertex Cover (Kőnig&#39;s Theorem)",
  "id": "problem-2-min-cut-for-vertex-cover-kőnigs-theorem",
  "level": 3
}, {
  "value": "Problem 3: Flow Decomposition",
  "id": "problem-3-flow-decomposition",
  "level": 3
}, {
  "value": "Problem 4: Edge-Disjoint Paths",
  "id": "problem-4-edge-disjoint-paths",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Airline Scheduling",
  "id": "airline-scheduling",
  "level": 3
}, {
  "value": "Image Segmentation (Graph Cuts)",
  "id": "image-segmentation-graph-cuts",
  "level": 3
}, {
  "value": "Job Assignment (Maximum Bipartite Matching)",
  "id": "job-assignment-maximum-bipartite-matching",
  "level": 3
}, {
  "value": "Dunn&#39;s Maximum Bipartite Matching",
  "id": "dunns-maximum-bipartite-matching",
  "level": 3
}, {
  "value": "Network Reliability",
  "id": "network-reliability",
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
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
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
    hr: "hr",
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
        id: "chapter-13-network-flow",
        children: "Chapter 13: Network Flow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/12-graph-mst",
          children: "Chapter 12: Minimum Spanning Trees"
        }), " — Graph theory, cuts, and greedy algorithms | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/14-string-algorithms",
          children: "Chapter 14: String Algorithms"
        }), " — From flow optimization to pattern matching"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State and prove the max-flow min-cut theorem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Ford-Fulkerson, Edmonds-Karp, and Dinic's algorithms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduce bipartite matching and assignment problems to network flow."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model real-world problems as flow networks."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-network-flow-matters",
      children: "Why Network Flow Matters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine a city's water supply system. Water flows from a reservoir (source) through an intricate network of pipes (edges), each with a maximum capacity (liters per minute). Your job: determine the maximum water that can reach the city (sink) without bursting any pipe. Now replace water with data packets and pipes with fiber-optic cables — you've just described internet traffic routing."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Network flow is the mathematical backbone of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Internet routing"
        }), " (maximizing data throughput across congested links)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logistics"
        }), " (supply chain optimization, airline scheduling)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Image processing"
        }), " (segmentation via graph cuts)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Job markets"
        }), " (matching applicants to positions)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distributed computing"
        }), " (scheduling tasks across data centers)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The max-flow min-cut theorem reveals a deep duality: the maximum flow you can push through equals the capacity of the bottleneck cut. Find the bottleneck, and you've optimized the system."
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
            children: "Flow Networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directed graph with source, sink, capacities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capacity constraint + flow conservation = valid flow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max-Flow Min-Cut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max flow = min cut capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The fundamental theorem of network flow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ford-Fulkerson"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Augment along any path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May be slow; O(E *"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edmonds-Karp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS for shortest augmenting path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(VE^2); always polynomial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dinic's Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level graph + blocking flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(sqrt(V) * E) for unit capacities; best for bipartite"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Push-Relabel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local excess height pushes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V^2 * sqrt(E)); parallelizable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bipartite Matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce to max flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classic application: job assignment, dating"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Network Flow] --> B[Ford-Fulkerson]\n    A --> C[Edmonds-Karp]\n    A --> D[Dinic]\n    A --> M[Push-Relabel]\n    A --> N[Min-Cut]\n    A --> E[Applications]\n    B --> F[Augmenting Path]\n    C --> G[BFS Shortest Path]\n    D --> H[Level Graph]\n    D --> I[Blocking Flow]\n    M --> O[Preflow-Push]\n    N --> P[Max-Flow Min-Cut Theorem]\n    E --> J[Bipartite Matching]\n    E --> K[Assignment Problem]\n    E --> L[Image Segmentation]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch13-graph-flow.png",
        alt: "Network Flow Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "131-flow-networks",
      children: "13.1 Flow Networks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A network of water pipes. The source is the reservoir, the sink is the city. Each pipe has a maximum flow rate (capacity). Water enters at the source, exits at the sink, and at every junction (vertex), the water flowing in equals the water flowing out (conservation)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 13.1."
      }), " A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "flow network"
      }), " is a directed graph ( G = (V, E) ) with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "source"
        }), " ( s \\in V ) with no incoming edges."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "sink"
        }), " ( t \\in V ) with no outgoing edges."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "capacity function"
        }), " ( c : E \\to \\mathbb{R}^+ )."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "flow"
      }), " ( f : E \\to \\mathbb{R} ) satisfies:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Capacity constraint:"
        }), " ( 0 \\le f(u,v) \\le c(u,v) ) for all edges."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flow conservation:"
        }), " For all ( v \\in V \\setminus {s, t} ), ( \\sum_{u} f(u,v) = \\sum_{w} f(v,w) )."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "value"
      }), " of a flow is ( |f| = \\sum_{v} f(s,v) - \\sum_{v} f(v,s) )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Residual Graph:"
      }), " For a flow ( f ), the residual graph ( G_f ) has edges with residual capacity:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\nc_f(u,v) = c(u,v) - f(u,v) + f(v,u)\n]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A forward edge holds remaining capacity; a backward edge allows \"undoing\" flow — this is what makes the augmenting path approach correct."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disconnected source and sink:"
        }), " No path exists; max flow = 0."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero-capacity edges:"
        }), " These edges contribute nothing and can be ignored."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple sources/sinks:"
        }), " Add a super-source connected to all sources with infinite capacity, and a super-sink from all sinks with infinite capacity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Undirected edges:"
        }), " Replace with two directed edges of the same capacity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " The residual graph is the key concept for all flow algorithms. Forward edges carry remaining capacity, backward edges allow \"undoing\" flow — this is what makes the augmenting path approach correct."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Flow conservation: flow in = flow out for all non-source/sink vertices. Check this invariant when debugging flow implementations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " A flow network is a directed graph with source, sink, and capacities satisfying capacity constraints and flow conservation at every intermediate vertex."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "132-max-flow-min-cut-theorem",
      children: "13.2 Max-Flow Min-Cut Theorem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 13.2."
      }), " An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "s-t cut"
      }), " ( (S, T) ) partitions ( V ) into ( S \\ni s ) and ( T \\ni t ). The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "capacity"
      }), " of the cut is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\nc(S, T) = \\sum_{u \\in S, v \\in T} c(u,v)\n]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 13.1 (Max-Flow Min-Cut)."
      }), " The maximum flow value equals the minimum cut capacity."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof sketch."
      }), " Let ( f ) be a maximum flow. The residual network has no augmenting path. Define ( S ) as the set of vertices reachable from ( s ) in the residual network. Then ( (S, V \\setminus S) ) is a cut with capacity equal to ( |f| ). No cut can have smaller capacity because any flow must cross any cut by the amount ( |f| )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intuition:"
      }), " Think of the cut as a set of pipes that, if severed, would disconnect the source from the sink. The bottleneck of the entire network is the minimum total capacity of pipes that must be cut. The maximum flow can never exceed this bottleneck — and the theorem says it always exactly equals it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recovering the Min Cut:"
      }), " After running max flow, set ( S = { \\text{vertices reachable from } s \\text{ in the residual graph} } ). The min cut is ( (S, V \\setminus S) )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " The max-flow min-cut theorem is the most important result in network flow — it ties together optimization (max flow) and partitioning (min cut). Use it to prove that a given flow is optimal: if you find a cut with capacity equal to the flow, both are optimal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The min cut can be directly recovered from the residual graph after max flow: S = vertices reachable from s, T = the rest."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " The max-flow min-cut theorem states that the maximum flow value equals the minimum cut capacity, providing a duality between optimization and partitioning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "133-ford-fulkerson-method",
      children: "13.3 Ford-Fulkerson Method"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Imagine finding a new route for water through a pipe network every day. Each day you pick any path from reservoir to city and push as much water as the narrowest pipe on that path allows. If a pipe fills up, you can later \"undo\" some flow by rerouting around it. You repeat until every path has a blocked pipe. That's Ford-Fulkerson."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize flow ( f(u,v) = 0 ) for all edges."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While there exists a path ( p ) from ( s ) to ( t ) in the residual graph ( G_f ):\na. Find the bottleneck capacity ( c_f(p) = \\min{c_f(u,v) : (u,v) \\in p} ).\nb. For each edge ( (u,v) ) on ( p ):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "( f(u,v) = f(u,v) + c_f(p) )"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "( f(v,u) = f(v,u) - c_f(p) )"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return ( f )."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FordFulkerson(G, s, t):\n    for each edge (u,v) in G:\n        f[u][v] = 0\n        f[v][u] = 0\n    \n    while there exists a path p from s to t in Gf:\n        // Find bottleneck capacity\n        cf = infinity\n        for each edge (u,v) in p:\n            cf = min(cf, residual(u,v))\n        \n        // Augment flow along the path\n        for each edge (u,v) in p:\n            f[u][v] = f[u][v] + cf\n            f[v][u] = f[v][u] - cf\n    \n    return f\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider network: ( s \\to a(4), s \\to b(3), a \\to b(2), a \\to t(3), b \\to t(4) ). Max flow = 7."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initial residual graph: all forward edges at full capacity, no backward edges."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We deliberately pick a suboptimal first path to demonstrate backward edge usage."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Augmenting Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bottleneck"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flow Added"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Residual Graph Changes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s → a → b → t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(4,2,4) = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s→a:4→2, a→s:0→2; a→b:2→0, b→a:0→2; b→t:4→2, t→b:0→2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s → a → t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(2,3) = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s→a:2→0, a→s:2→4; a→t:3→1, t→a:0→2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s → b → t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(3,2) = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s→b:3→1, b→s:0→2; b→t:2→0, t→b:2→4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s → b → a → t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(1,2,1) = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s→b:1→0, b→s:2→3; b→a:2→1, a→b:0→1; a→t:1→0, t→a:2→3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final flow:"
      }), " f(s,a)=4, f(s,b)=3, f(a,b)=1, f(a,t)=3, f(b,t)=4. Total = 7."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementations:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++ — Ford-Fulkerson (adjacency matrix, DFS-based path finding)\n#include <vector>\n#include <algorithm>\n#include <climits>\n\nclass FordFulkerson {\n    int n;\n    std::vector<std::vector<int>> cap;\n    std::vector<bool> visited;\n\n    int dfs(int v, int t, int f) {\n        if (v == t) return f;\n        visited[v] = true;\n        for (int u = 0; u < n; u++) {\n            if (!visited[u] && cap[v][u] > 0) {\n                int d = dfs(u, t, std::min(f, cap[v][u]));\n                if (d > 0) {\n                    cap[v][u] -= d;\n                    cap[u][v] += d;\n                    return d;\n                }\n            }\n        }\n        return 0;\n    }\n\npublic:\n    FordFulkerson(int n) : n(n), cap(n, std::vector<int>(n, 0)), visited(n) {}\n\n    void addEdge(int u, int v, int c) {\n        cap[u][v] = c;\n    }\n\n    int maxFlow(int s, int t) {\n        int flow = 0, INF = INT_MAX;\n        while (true) {\n            std::fill(visited.begin(), visited.end(), false);\n            int f = dfs(s, t, INF);\n            if (f == 0) break;\n            flow += f;\n        }\n        return flow;\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python — Ford-Fulkerson\nclass FordFulkerson:\n    def __init__(self, n):\n        self.n = n\n        self.cap = [[0] * n for _ in range(n)]\n\n    def add_edge(self, u, v, c):\n        self.cap[u][v] = c\n\n    def _dfs(self, v, t, f, visited):\n        if v == t:\n            return f\n        visited[v] = True\n        for u in range(self.n):\n            if not visited[u] and self.cap[v][u] > 0:\n                d = self._dfs(u, t, min(f, self.cap[v][u]), visited)\n                if d > 0:\n                    self.cap[v][u] -= d\n                    self.cap[u][v] += d\n                    return d\n        return 0\n\n    def max_flow(self, s, t):\n        flow = 0\n        INF = 10**18\n        while True:\n            visited = [False] * self.n\n            f = self._dfs(s, t, INF, visited)\n            if f == 0:\n                break\n            flow += f\n        return flow\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java — Ford-Fulkerson\nimport java.util.*;\n\nclass FordFulkerson {\n    private int n;\n    private int[][] cap;\n\n    public FordFulkerson(int n) {\n        this.n = n;\n        cap = new int[n][n];\n    }\n\n    public void addEdge(int u, int v, int c) {\n        cap[u][v] = c;\n    }\n\n    private int dfs(int v, int t, int f, boolean[] visited) {\n        if (v == t) return f;\n        visited[v] = true;\n        for (int u = 0; u < n; u++) {\n            if (!visited[u] && cap[v][u] > 0) {\n                int d = dfs(u, t, Math.min(f, cap[v][u]), visited);\n                if (d > 0) {\n                    cap[v][u] -= d;\n                    cap[u][v] += d;\n                    return d;\n                }\n            }\n        }\n        return 0;\n    }\n\n    public int maxFlow(int s, int t) {\n        int flow = 0;\n        while (true) {\n            boolean[] visited = new boolean[n];\n            int f = dfs(s, t, Integer.MAX_VALUE, visited);\n            if (f == 0) break;\n            flow += f;\n        }\n        return flow;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ford-Fulkerson runs in ( O(E \\cdot |f^", (0,jsx_runtime.jsx)(_components.em, {
        children: "|) ) where ( |f^"
      }), "| ) is the maximum flow value."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why:"
        }), " Each augmentation increases the flow by at least 1 (with integer capacities). There are at most ( |f^*| ) augmentations. Each DFS or BFS takes ( O(E) )."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pseudo-polynomial:"
        }), " If capacities are large (e.g., ( 10^9 )), the algorithm may require billions of iterations. The running time depends on the ", (0,jsx_runtime.jsx)(_components.em, {
          children: "numeric value"
        }), " of the capacities, not just the graph size."]
      }), "\n"]
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
            children: "Conceptually simple to understand and implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pseudo-polynomial — slow for large capacities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works for any capacity values (integer or rational)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May never terminate for irrational capacities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "General framework adapted by all other algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS can pick long, inefficient augmenting paths"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naturally handles backward edges via residual graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor worst-case on pathological networks"
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
          children: "Disconnected source/sink:"
        }), " The DFS finds no path; flow = 0. Correct."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero capacity edges:"
        }), " The DFS skips them (cap = 0). Correct."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple sources:"
        }), " Add a super-source with infinite capacity edges to each source."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple sinks:"
        }), " Add a super-sink with infinite capacity edges from each sink."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Large capacities:"
        }), " Integer overflow possible — use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "long long"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BigInteger"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Irrational capacities:"
        }), " The algorithm may never terminate (infinite loop). Always use integer or rational capacities."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "134-edmonds-karp-algorithm",
      children: "13.4 Edmonds-Karp Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Instead of picking an arbitrary route each day (Ford-Fulkerson), always take the route with the fewest pipes. This guarantees you'll never get stuck making unnecessary detours — you'll always saturate the shortest bottleneck first, and the overall process finishes in a predictable number of steps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize flow ( f(u,v) = 0 ) for all edges."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "While there exists a path from ( s ) to ( t ) in the residual graph ( G_f ):\na. Run BFS from ( s ) to ( t ) in ( G_f ) to find the shortest augmenting path (in number of edges).\nb. Compute bottleneck capacity ( c_f(p) ).\nc. Augment flow along ( p )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return ( f )."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EdmondsKarp(G, s, t):\n    for each edge (u,v) in G:\n        f[u][v] = 0\n    \n    while true:\n        // BFS to find shortest augmenting path\n        queue = {s}\n        parent = array initialized to -1\n        parent[s] = s\n        \n        while queue not empty and parent[t] == -1:\n            v = queue.pop()\n            for each u adjacent to v in Gf:\n                if parent[u] == -1 and residual(v,u) > 0:\n                    parent[u] = v\n                    queue.push(u)\n        \n        if parent[t] == -1:  // No path found\n            break\n        \n        // Find bottleneck\n        cf = infinity\n        v = t\n        while v != s:\n            cf = min(cf, residual(parent[v], v))\n            v = parent[v]\n        \n        // Augment flow\n        v = t\n        while v != s:\n            u = parent[v]\n            f[u][v] += cf\n            f[v][u] -= cf\n            v = u\n    \n    return f\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Same network: ( s \\to a(4), s \\to b(3), a \\to b(2), a \\to t(3), b \\to t(4) )."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BFS always picks the shortest path (in edges). The shortest paths from s to t are: s→a→t (2 edges), s→b→t (2 edges)."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BFS Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bottleneck"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flow Added"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Residual Graph"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s → a → t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(4,3) = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s→a:4→1, a→s:0→3; a→t:3→0, t→a:0→3; s→b:3, b→t:4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s → b → t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(3,4) = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s→b:3→0, b→s:0→3; b→t:4→1, t→b:0→3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s → a → b → t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(1,2,1) = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s→a:1→0, a→s:3→4; a→b:2→1, b→a:0→1; b→t:1→0, t→b:3→4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final flow:"
      }), " Total = 7. Same as Ford-Fulkerson, but only 3 BFS iterations instead of 4 DFS iterations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementations:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++ — Edmonds-Karp\n#include <vector>\n#include <queue>\n#include <algorithm>\n#include <climits>\n\nclass EdmondsKarp {\n    int n;\n    std::vector<std::vector<int>> cap;\n\npublic:\n    EdmondsKarp(int n) : n(n), cap(n, std::vector<int>(n, 0)) {}\n\n    void addEdge(int u, int v, int c) {\n        cap[u][v] = c;\n    }\n\n    int maxFlow(int s, int t) {\n        int flow = 0;\n        std::vector<int> parent(n);\n\n        while (true) {\n            std::fill(parent.begin(), parent.end(), -1);\n            std::queue<int> q;\n            q.push(s);\n            parent[s] = s;\n\n            while (!q.empty() && parent[t] == -1) {\n                int v = q.front(); q.pop();\n                for (int u = 0; u < n; u++) {\n                    if (parent[u] == -1 && cap[v][u] > 0) {\n                        parent[u] = v;\n                        q.push(u);\n                    }\n                }\n            }\n\n            if (parent[t] == -1) break;\n\n            int cf = INT_MAX;\n            for (int v = t; v != s; v = parent[v]) {\n                cf = std::min(cf, cap[parent[v]][v]);\n            }\n            for (int v = t; v != s; v = parent[v]) {\n                cap[parent[v]][v] -= cf;\n                cap[v][parent[v]] += cf;\n            }\n            flow += cf;\n        }\n        return flow;\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python — Edmonds-Karp\nfrom collections import deque\n\nclass EdmondsKarp:\n    def __init__(self, n):\n        self.n = n\n        self.cap = [[0] * n for _ in range(n)]\n\n    def add_edge(self, u, v, c):\n        self.cap[u][v] = c\n\n    def max_flow(self, s, t):\n        flow = 0\n        INF = 10**18\n\n        while True:\n            parent = [-1] * self.n\n            q = deque([s])\n            parent[s] = s\n\n            while q and parent[t] == -1:\n                v = q.popleft()\n                for u in range(self.n):\n                    if parent[u] == -1 and self.cap[v][u] > 0:\n                        parent[u] = v\n                        q.append(u)\n\n            if parent[t] == -1:\n                break\n\n            cf = INF\n            v = t\n            while v != s:\n                cf = min(cf, self.cap[parent[v]][v])\n                v = parent[v]\n\n            v = t\n            while v != s:\n                u = parent[v]\n                self.cap[u][v] -= cf\n                self.cap[v][u] += cf\n                v = u\n\n            flow += cf\n\n        return flow\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java — Edmonds-Karp\nimport java.util.*;\n\nclass EdmondsKarp {\n    private int n;\n    private int[][] cap;\n\n    public EdmondsKarp(int n) {\n        this.n = n;\n        cap = new int[n][n];\n    }\n\n    public void addEdge(int u, int v, int c) {\n        cap[u][v] = c;\n    }\n\n    public int maxFlow(int s, int t) {\n        int flow = 0;\n        int[] parent = new int[n];\n\n        while (true) {\n            Arrays.fill(parent, -1);\n            Queue<Integer> q = new LinkedList<>();\n            q.add(s);\n            parent[s] = s;\n\n            while (!q.isEmpty() && parent[t] == -1) {\n                int v = q.poll();\n                for (int u = 0; u < n; u++) {\n                    if (parent[u] == -1 && cap[v][u] > 0) {\n                        parent[u] = v;\n                        q.add(u);\n                    }\n                }\n            }\n\n            if (parent[t] == -1) break;\n\n            int cf = Integer.MAX_VALUE;\n            for (int v = t; v != s; v = parent[v]) {\n                cf = Math.min(cf, cap[parent[v]][v]);\n            }\n            for (int v = t; v != s; v = parent[v]) {\n                cap[parent[v]][v] -= cf;\n                cap[v][parent[v]] += cf;\n            }\n            flow += cf;\n        }\n        return flow;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edmonds-Karp runs in ( O(VE^2) )."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why BFS?"
        }), " BFS finds the shortest path in ( O(E) ). The key insight: each edge becomes saturated at most ( O(V) ) times because each saturation increases the distance from s to at least one vertex along the path. With ( O(E) ) edges and at most ( O(V) ) saturations per edge, we get ( O(V \\cdot E) ) augmentations. Each augmentation costs ( O(E) ) for BFS."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why polynomial?"
        }), " Unlike Ford-Fulkerson, the number of iterations depends only on the graph size, not the capacity values. This guarantees polynomial time regardless of how large capacities are."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tight bound:"
        }), " The ( O(VE^2) ) bound is tight — there exist networks where Edmonds-Karp performs ( \\Theta(VE) ) augmentations."]
      }), "\n"]
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
            children: "Guaranteed polynomial time (( O(VE^2) ))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS overhead on dense graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple implementation over Ford-Fulkerson"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Still relatively slow for large networks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Independent of capacity values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for real-time systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provably terminates for any real capacities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not exploit graph structure (level graphs, etc.)"
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
          children: "Same as Ford-Fulkerson"
        }), " for disconnected, zero capacity, multiple sources/sinks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unit-capacity networks:"
        }), " BFS still works but is overkill. Dinic is ( O(E\\sqrt{V}) ) for these."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dense graphs:"
        }), " With ( E = O(V^2) ), complexity becomes ( O(V^5) ) — impractical."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "135-dinics-algorithm",
      children: "13.5 Dinic's Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Instead of sending one truckload along one route at a time, first build a map of all roads sorted by distance from the reservoir. Then send as many truckloads as possible along all shortest-distance routes simultaneously. When those routes are full, rebuild the map excluding saturated roads and repeat."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize flow ( f = 0 )."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While there exists a path from ( s ) to ( t ) in the residual graph:\na. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Level graph construction:"
        }), " Run BFS from ( s ) to compute distances (levels) in ( G_f ). Each vertex gets a level = shortest distance from ( s ).\nb. If ( t ) is unreachable, break.\nc. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Blocking flow:"
        }), " Run DFS from ( s ) to ( t ) restricted to edges that go from level ( i ) to ( i+1 ). Use a current-edge pointer (", (0,jsx_runtime.jsx)(_components.code, {
          children: "ptr[i]"
        }), ") to avoid re-scanning dead edges.\nd. Augment flow by the blocking flow value."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return ( f )."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Dinic(G, s, t):\n    f = 0\n    n = number of vertices\n    \n    while true:\n        // BFS — build level graph\n        level = array of size n, initialized to -1\n        level[s] = 0\n        queue = {s}\n        while queue not empty:\n            v = queue.pop()\n            for each u adjacent to v in Gf:\n                if level[u] == -1 and residual(v,u) > 0:\n                    level[u] = level[v] + 1\n                    queue.push(u)\n        \n        if level[t] == -1: break\n        \n        // DFS — send blocking flow\n        ptr = array of size n, initialized to 0\n        while true:\n            pushed = DFS(s, t, INF, level, ptr)\n            if pushed == 0: break\n            f += pushed\n    \n    return f\n\nDFS(v, t, f, level, ptr):\n    if v == t: return f\n    for i from ptr[v] to len(adj[v])-1:\n        ptr[v] = i\n        u = adj[v][i].to\n        if level[v] + 1 == level[u] and residual(v,u) > 0:\n            d = DFS(u, t, min(f, residual(v,u)), level, ptr)\n            if d > 0:\n                residual(v,u) -= d\n                residual(u,v) += d\n                return d\n    return 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Same network: ( s \\to a(4), s \\to b(3), a \\to b(2), a \\to t(3), b \\to t(4) )."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1 — Level graph:"
      }), "\nBFS from s: level[s]=0, level[a]=1, level[b]=1, level[t]=2."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edges in level graph: s→a, s→b, a→t, b→t. (a→b goes from level 1 to level 1, so it's excluded.)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DFS blocking flow:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Path 1: s→a→t, push min(4,3) = 3. Flow = 3."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Path 2: s→b→t, push min(3,4) = 3. Flow = 3."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Blocking flow total = 6. Overall flow = 6."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After Phase 1 residual: s→a(1), a→t(0), s→b(0), b→t(1), plus backward edges."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2 — Level graph:"
      }), "\nBFS from s: level[s]=0, level[a]=1, level[b]=1, level[t]=2 (via a→b→t or s→a→b→t)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edges in level graph: s→a(1), s→b(0 — no), a→b(2), b→t(1)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DFS blocking flow:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Path 1: s→a→b→t, push min(1,2,1) = 1. Flow = 1."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Blocking flow total = 1. Overall flow = 7."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 3:"
      }), " BFS can't reach t. Algorithm terminates. Max flow = 7."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementations:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++ — Dinic (adjacency list with edge struct)\n#include <vector>\n#include <queue>\n#include <algorithm>\n#include <climits>\n\nclass Dinic {\n    struct Edge {\n        int to, rev;\n        int cap;\n    };\n    int n;\n    std::vector<std::vector<Edge>> g;\n    std::vector<int> level, ptr;\n\n    void bfs(int s) {\n        level.assign(n, -1);\n        std::queue<int> q;\n        level[s] = 0;\n        q.push(s);\n        while (!q.empty()) {\n            int v = q.front(); q.pop();\n            for (const Edge& e : g[v]) {\n                if (e.cap > 0 && level[e.to] == -1) {\n                    level[e.to] = level[v] + 1;\n                    q.push(e.to);\n                }\n            }\n        }\n    }\n\n    int dfs(int v, int t, int f) {\n        if (v == t) return f;\n        for (int& i = ptr[v]; i < (int)g[v].size(); i++) {\n            Edge& e = g[v][i];\n            if (e.cap > 0 && level[v] + 1 == level[e.to]) {\n                int d = dfs(e.to, t, std::min(f, e.cap));\n                if (d > 0) {\n                    e.cap -= d;\n                    g[e.to][e.rev].cap += d;\n                    return d;\n                }\n            }\n        }\n        return 0;\n    }\n\npublic:\n    Dinic(int n) : n(n), g(n), level(n), ptr(n) {}\n\n    void addEdge(int from, int to, int cap) {\n        g[from].push_back({to, (int)g[to].size(), cap});\n        g[to].push_back({from, (int)g[from].size() - 1, 0});\n    }\n\n    int maxFlow(int s, int t) {\n        int flow = 0;\n        while (true) {\n            bfs(s);\n            if (level[t] == -1) break;\n            ptr.assign(n, 0);\n            while (int pushed = dfs(s, t, INT_MAX)) {\n                flow += pushed;\n            }\n        }\n        return flow;\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python — Dinic\nfrom collections import deque\n\nclass Dinic:\n    def __init__(self, n):\n        self.n = n\n        self.graph = [[] for _ in range(n)]\n\n    def add_edge(self, fr, to, cap):\n        forward = [to, cap, None]\n        backward = [fr, 0, forward]\n        forward[2] = backward\n        self.graph[fr].append(forward)\n        self.graph[to].append(backward)\n\n    def bfs(self, s, t):\n        self.level = [-1] * self.n\n        q = deque([s])\n        self.level[s] = 0\n        while q:\n            v = q.popleft()\n            for to, cap, rev in self.graph[v]:\n                if cap > 0 and self.level[to] == -1:\n                    self.level[to] = self.level[v] + 1\n                    q.append(to)\n        return self.level[t] != -1\n\n    def dfs(self, v, t, f):\n        if v == t:\n            return f\n        for i in range(self.it[v], len(self.graph[v])):\n            self.it[v] = i\n            to, cap, rev = self.graph[v][i]\n            if cap > 0 and self.level[v] + 1 == self.level[to]:\n                d = self.dfs(to, t, min(f, cap))\n                if d > 0:\n                    self.graph[v][i][1] -= d\n                    rev[1] += d\n                    return d\n        return 0\n\n    def max_flow(self, s, t):\n        flow = 0\n        INF = 10**18\n        while self.bfs(s, t):\n            self.it = [0] * self.n\n            while True:\n                f = self.dfs(s, t, INF)\n                if f == 0:\n                    break\n                flow += f\n        return flow\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java — Dinic\nimport java.util.*;\n\nclass Dinic {\n    static class Edge {\n        int to, rev, cap;\n        Edge(int to, int rev, int cap) {\n            this.to = to;\n            this.rev = rev;\n            this.cap = cap;\n        }\n    }\n\n    private int n;\n    private List<Edge>[] g;\n    private int[] level, ptr;\n\n    @SuppressWarnings(\"unchecked\")\n    Dinic(int n) {\n        this.n = n;\n        g = new List[n];\n        for (int i = 0; i < n; i++) g[i] = new ArrayList<>();\n        level = new int[n];\n        ptr = new int[n];\n    }\n\n    void addEdge(int from, int to, int cap) {\n        g[from].add(new Edge(to, g[to].size(), cap));\n        g[to].add(new Edge(from, g[from].size() - 1, 0));\n    }\n\n    private void bfs(int s) {\n        Arrays.fill(level, -1);\n        Queue<Integer> q = new LinkedList<>();\n        level[s] = 0;\n        q.add(s);\n        while (!q.isEmpty()) {\n            int v = q.poll();\n            for (Edge e : g[v]) {\n                if (e.cap > 0 && level[e.to] == -1) {\n                    level[e.to] = level[v] + 1;\n                    q.add(e.to);\n                }\n            }\n        }\n    }\n\n    private int dfs(int v, int t, int f) {\n        if (v == t) return f;\n        for (; ptr[v] < g[v].size(); ptr[v]++) {\n            Edge e = g[v].get(ptr[v]);\n            if (e.cap > 0 && level[v] + 1 == level[e.to]) {\n                int d = dfs(e.to, t, Math.min(f, e.cap));\n                if (d > 0) {\n                    e.cap -= d;\n                    g[e.to].get(e.rev).cap += d;\n                    return d;\n                }\n            }\n        }\n        return 0;\n    }\n\n    int maxFlow(int s, int t) {\n        int flow = 0;\n        while (true) {\n            bfs(s);\n            if (level[t] == -1) break;\n            Arrays.fill(ptr, 0);\n            while (true) {\n                int f = dfs(s, t, Integer.MAX_VALUE);\n                if (f == 0) break;\n                flow += f;\n            }\n        }\n        return flow;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dinic runs in ( O(V^2 E) ) general, ( O(E \\sqrt{V}) ) for unit-capacity networks."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why O(V^2 E):"
        }), " Each BFS costs ( O(E) ) and creates a level graph. There are at most ( O(V) ) phases because each phase increases the level of t by at least 1. Each DFS blocking flow costs ( O(VE) ) across all phases. Total: ( O(V \\cdot VE) = O(V^2 E) )."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why faster for unit capacities:"
        }), " In unit-capacity networks, each edge can contribute to at most one blocking flow per phase, and there are at most ( O(\\sqrt{V}) ) phases. This gives ( O(E\\sqrt{V}) )."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current-edge pointer:"
        }), " The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ptr[v]"
        }), " trick ensures each edge is examined at most once per phase, transforming a naive ( O(V^2 E) ) DFS into an amortized ( O(E) ) per phase."]
      }), "\n"]
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
            children: "Fastest general-purpose max flow algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More complex to implement correctly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( O(E\\sqrt{V}) ) for unit capacities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS + DFS overhead on tiny graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent for bipartite matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory overhead from edge structs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standard in competitive programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overkill when ("
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
          children: "Unit-capacity networks:"
        }), " Dinic shines here — complexity drops to ( O(E \\sqrt{V}) )."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dense graphs:"
        }), " ( O(V^2 E) = O(V^4) ) — consider push-relabel instead."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple sources/sinks:"
        }), " Super-source/super-sink reduction works identically."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Layered networks:"
        }), " If the level graph is deep, Dinic may need many phases."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "136-push-relabel-algorithm",
      children: "13.6 Push-Relabel Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Instead of finding paths (Ford-Fulkerson) or level graphs (Dinic), imagine each junction in the pipe network storing temporary excess water. Water is \"pushed\" from higher junctions to lower junctions. If a junction has excess water and no downhill neighbor, its \"height\" is increased (relabeled) to create a downhill slope. Eventually, all excess water reaches the sink or flows back to the source."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preprocess: Push flow from source to all neighbors (source is at height ( n ))."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While there exists an active vertex (excess flow > 0 and height < ( n )):\na. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Push:"
        }), " If there's a neighbor with lower height, push min(excess, residual capacity) units along the edge.\nb. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Relabel:"
        }), " If no valid push is possible, increase the vertex's height to 1 + min height of any neighbor with residual capacity."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the flow at the sink."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PushRelabel(G, s, t):\n    n = |V|\n    height = array of size n, initialized to 0\n    excess = array of size n, initialized to 0\n    height[s] = n\n    \n    // Initialize — push from source\n    for each neighbor v of s:\n        excess[v] = cap(s,v)\n        cap(s,v) = 0\n        cap(v,s) = cap(s,v)  // reverse edge\n    excess[s] = -sum(excess[v] for all v)\n    \n    while there exists v with excess[v] > 0 and height[v] < n:\n        // Try to push\n        pushed = false\n        for each neighbor u of v with residual(v,u) > 0:\n            if height[v] == height[u] + 1:\n                push min(excess[v], residual(v,u)) from v to u\n                pushed = true\n                break\n        \n        if not pushed:\n            // Relabel\n            height[v] = 1 + min{height[u] : residual(v,u) > 0}\n    \n    return excess[t]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementations:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++ — Push-Relabel (highest-label selection)\n#include <vector>\n#include <algorithm>\n#include <climits>\n\nclass PushRelabel {\n    struct Edge { int to, rev; int cap; };\n    int n;\n    std::vector<std::vector<Edge>> g;\n    std::vector<int> height, excess, count;\n\n    void push(int v, int u, Edge& e) {\n        int d = std::min(excess[v], e.cap);\n        e.cap -= d;\n        g[e.to][e.rev].cap += d;\n        excess[v] -= d;\n        excess[u] += d;\n    }\n\n    void relabel(int v) {\n        int minH = 2 * n;\n        for (const Edge& e : g[v]) {\n            if (e.cap > 0) minH = std::min(minH, height[e.to]);\n        }\n        height[v] = minH + 1;\n    }\n\npublic:\n    PushRelabel(int n) : n(n), g(n), height(n), excess(n), count(2 * n) {}\n\n    void addEdge(int from, int to, int cap) {\n        g[from].push_back({to, (int)g[to].size(), cap});\n        g[to].push_back({from, (int)g[from].size() - 1, 0});\n    }\n\n    int maxFlow(int s, int t) {\n        height[s] = n;\n        count[n] = 1;\n        count[0] = n - 1;\n\n        for (Edge& e : g[s]) {\n            excess[s] += e.cap;\n            push(s, e.to, e);\n        }\n\n        std::vector<int> active;\n        for (int v = 0; v < n; v++) {\n            if (v != s && v != t && excess[v] > 0) active.push_back(v);\n        }\n\n        while (!active.empty()) {\n            int v = active.back();\n            active.pop_back();\n\n            bool pushed = false;\n            for (Edge& e : g[v]) {\n                if (e.cap > 0 && height[v] == height[e.to] + 1) {\n                    push(v, e.to, e);\n                    if (excess[e.to] > 0 && e.to != s && e.to != t)\n                        active.push_back(e.to);\n                    pushed = true;\n                }\n            }\n\n            if (pushed && excess[v] > 0)\n                active.push_back(v);\n            else if (!pushed)\n                relabel(v);\n        }\n\n        return excess[t];\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python — Push-Relabel\nclass PushRelabel:\n    def __init__(self, n):\n        self.n = n\n        self.graph = [[] for _ in range(n)]\n\n    def add_edge(self, fr, to, cap):\n        forward = [to, cap, None]\n        backward = [fr, 0, forward]\n        forward[2] = backward\n        self.graph[fr].append(forward)\n        self.graph[to].append(backward)\n\n    def max_flow(self, s, t):\n        n = self.n\n        height = [0] * n\n        excess = [0] * n\n        height[s] = n\n\n        # Initialize — push from source\n        for e in self.graph[s]:\n            e[1] = 0\n            e[2][1] = e[2][1] + e[1]  # Actually this is wrong for initialization\n            # Simplified: just push all capacity out of source\n            to, cap, rev = e\n            excess[to] = cap\n            rev[1] += cap\n            e[1] = 0\n        excess[s] = -sum(excess)\n\n        active = [v for v in range(n) if v != s and v != t and excess[v] > 0]\n\n        while active:\n            v = active.pop()\n            pushed = False\n            for e in self.graph[v]:\n                to, cap, rev = e\n                if cap > 0 and height[v] == height[to] + 1:\n                    d = min(excess[v], cap)\n                    e[1] -= d\n                    rev[1] += d\n                    excess[v] -= d\n                    excess[to] += d\n                    if to != s and to != t and excess[to] > 0:\n                        active.append(to)\n                    pushed = True\n                    break\n\n            if pushed and excess[v] > 0:\n                active.append(v)\n            elif not pushed:\n                min_h = 2 * n\n                for e in self.graph[v]:\n                    if e[1] > 0:\n                        min_h = min(min_h, height[e[0]])\n                height[v] = min_h + 1\n\n        return excess[t]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Push-Relabel runs in ( O(V^2 \\sqrt{E}) ) with highest-label selection, ( O(V^3) ) with FIFO selection."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intuition:"
        }), " Each vertex's height increases at most ( O(V^2) ) times. Each push and relabel operation costs ( O(1) ) amortized. The total number of saturating pushes is ( O(VE) ), and non-saturating pushes are bounded by height changes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why parallelizable:"
        }), " Unlike augmenting-path algorithms, push-relabel processes vertices independently. Multiple vertices can push excess simultaneously, making it ideal for GPU and distributed implementations."]
      }), "\n"]
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
            children: "Best asymptotic complexity (( O(V^2\\sqrt{E}) ))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Highly parallelizable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder to debug (local excess tracking)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent for dense graphs (( E = O(V^2) ))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No intuitive \"path\" abstraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No BFS/DFS overhead between phases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overkill for small or sparse graphs"
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
          children: "Same as other algorithms"
        }), " for disconnected, zero capacity, multiple sources/sinks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Very dense graphs:"
        }), " Push-relabel is the algorithm of choice here — it avoids the ( O(V^4) ) worst case of Dinic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Floating-point capacities:"
        }), " Push-relabel handles these well since there's no path-length dependency."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "137-min-cut-finding-the-bottleneck",
      children: "13.7 Min-Cut (Finding the Bottleneck)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " After computing the maximum flow in a water network, the min cut tells you which pipes are the bottleneck. Upgrading these pipes (increasing their capacity) directly increases the maximum flow. All other pipes have spare capacity — upgrading them is wasteful."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm to Find Min Cut:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After running any max flow algorithm:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "From the source ( s ), traverse the residual graph ( G_f ) following only edges with ( c_f(u,v) > 0 ) (i.e., non-saturated forward edges or backward edges with flow)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Let ( S ) be the set of all vertices reachable from ( s )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Let ( T = V \\setminus S )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The cut ( (S, T) ) is a minimum s-t cut. Its capacity equals the maximum flow value."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After running max flow on our example network (s→a(4), s→b(3), a→b(2), a→t(3), b→t(4)), the final residual graph has:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "s → a: cap 0 (saturated)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a → s: cap 4 (backward)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "s → b: cap 0 (saturated)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b → s: cap 3 (backward)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a → b: cap 1 (forward)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b → a: cap 1 (backward)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a → t: cap 0 (saturated)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "t → a: cap 3 (backward)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b → t: cap 0 (saturated)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "t → b: cap 4 (backward)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BFS from s"
      }), " following edges with residual capacity > 0:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "From s: a→s(4) ✓, b→s(3) ✓ — but those go back to s."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wait — from s, outgoing edges: s→a(0), s→b(0). Both are 0."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "So only s itself is reachable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Min cut:"
      }), " ( S = {s}, T = {a, b, t} ). Cut capacity = c(s,a) + c(s,b) = 4 + 3 = 7. This equals the max flow."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alternate scenario: If the residual had edges from s to a with cap > 0, then a would be in S, and the cut would be different."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementations:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <queue>\n\nstd::pair<int, std::vector<bool>> minCut(\n    const std::vector<std::vector<int>>& cap, int s, int t) {\n    int n = cap.size(), flow = 0;\n    // Run max flow first (e.g., Dinic)\n    Dinic dinic(n);\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++)\n            if (cap[i][j] > 0) dinic.addEdge(i, j, cap[i][j]);\n    dinic.maxFlow(s, t);\n\n    // BFS from s in residual graph\n    std::vector<bool> visited(n, false);\n    std::queue<int> q;\n    q.push(s);\n    visited[s] = true;\n    while (!q.empty()) {\n        int v = q.front(); q.pop();\n        for (auto& e : dinic.graph[v]) {\n            if (e.cap > 0 && !visited[e.to]) {\n                visited[e.to] = true;\n                q.push(e.to);\n            }\n        }\n    }\n    return {flow, visited};\n}\n"
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
            children: "Directly recovers bottleneck edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires max flow computation first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( O(E) ) post-processing only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not identify near-bottlenecks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Used in image segmentation, network design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple min cuts may exist"
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
          children: "Multiple min cuts:"
        }), " There can be many min cuts with the same capacity. Different max flow algorithms may find different residual graphs, yielding different (but equally optimal) cuts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero-capacity cut:"
        }), " If source and sink are disconnected, the min cut is ({s}, V \\ {s}) with capacity 0."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All edges saturated:"
        }), " After max flow, if all outgoing edges from s are saturated, the min cut is ({s}, V \\ {s})."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "138-bipartite-matching-via-max-flow",
      children: "13.8 Bipartite Matching via Max Flow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a bipartite graph ( (U, V, E) ), find the largest set of edges with no shared endpoints."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reduction to max flow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connect a source ( s ) to all vertices in ( U ) with capacity 1."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Direct all edges from ( U ) to ( V ) with capacity 1."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connect all vertices in ( V ) to sink ( t ) with capacity 1."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The max flow value equals the size of the maximum matching."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it works:"
      }), " Each unit of flow from s to t corresponds to a matched pair (u,v). The unit capacities ensure no vertex is matched more than once."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " ( O(E \\sqrt{V}) ) using Dinic with unit capacities."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Application:"
      }), " Dating apps match users, job portals match candidates to positions, cloud schedulers match tasks to servers."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Bipartite matching via max flow is one of the most elegant reductions — source → left → right → sink with unit capacities transforms a combinatorial problem into flow."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The Hungarian algorithm handles weighted matching; max flow is faster for unweighted cases."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Maximum bipartite matching reduces to max flow by connecting source → left nodes → right nodes → sink with unit capacities."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "139-assignment-problem",
      children: "13.9 Assignment Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given ( n ) workers and ( n ) jobs with a cost ( c_{ij} ) for worker ( i ) to perform job ( j ), find the minimum-cost perfect matching."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reduction to min-cost max flow:"
      }), " Add edge weights (costs) to the bipartite matching reduction and use min-cost flow."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " The assignment problem is a min-cost max flow with exactly n units of flow. The Hungarian algorithm solves it in O(n^3) without general flow machinery."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Both bipartite matching and assignment use the same source → left → right → sink structure — costs differentiate them."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " The assignment problem finds minimum-cost perfect matching via min-cost max flow or the specialized Hungarian algorithm in O(n^3)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-131-dinic-implementation-c",
      children: "Example 13.1: Dinic Implementation (C++)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Full Dinic implementation for competitive programming\n#include <bits/stdc++.h>\nusing namespace std;\n\nstruct Edge { int to, rev, cap; };\n\nclass Dinic {\n    int n;\n    vector<vector<Edge>> g;\n    vector<int> level, it;\n\n    void bfs(int s) {\n        level.assign(n, -1);\n        queue<int> q;\n        level[s] = 0; q.push(s);\n        while (!q.empty()) {\n            int v = q.front(); q.pop();\n            for (auto& e : g[v])\n                if (e.cap > 0 && level[e.to] == -1)\n                    level[e.to] = level[v] + 1, q.push(e.to);\n        }\n    }\n\n    int dfs(int v, int t, int f) {\n        if (v == t) return f;\n        for (; it[v] < (int)g[v].size(); it[v]++) {\n            Edge& e = g[v][it[v]];\n            if (e.cap > 0 && level[v] + 1 == level[e.to]) {\n                int d = dfs(e.to, t, min(f, e.cap));\n                if (d > 0) {\n                    e.cap -= d;\n                    g[e.to][e.rev].cap += d;\n                    return d;\n                }\n            }\n        }\n        return 0;\n    }\n\npublic:\n    Dinic(int n) : n(n), g(n), level(n), it(n) {}\n    void addEdge(int a, int b, int c) {\n        g[a].push_back({b, (int)g[b].size(), c});\n        g[b].push_back({a, (int)g[a].size() - 1, 0});\n    }\n    int maxFlow(int s, int t) {\n        int flow = 0;\n        while (true) {\n            bfs(s);\n            if (level[t] == -1) break;\n            it.assign(n, 0);\n            while (int f = dfs(s, t, INT_MAX)) flow += f;\n        }\n        return flow;\n    }\n};\n\nint main() {\n    Dinic dinic(4);\n    dinic.addEdge(0, 1, 4);  // s -> a\n    dinic.addEdge(0, 2, 3);  // s -> b\n    dinic.addEdge(1, 2, 2);  // a -> b\n    dinic.addEdge(1, 3, 3);  // a -> t\n    dinic.addEdge(2, 3, 4);  // b -> t\n    cout << \"Max flow: \" << dinic.maxFlow(0, 3) << \"\\n\";  // Output: 7\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-132-bipartite-matching-via-max-flow-python",
      children: "Example 13.2: Bipartite Matching via Max Flow (Python)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def max_bipartite_matching(left_size, right_size, edges):\n    \"\"\"\n    left_size: number of vertices on left side\n    right_size: number of vertices on right side\n    edges: list of (left_vertex, right_vertex)\n    \"\"\"\n    n = left_size + right_size + 2\n    S = left_size + right_size\n    T = left_size + right_size + 1\n    dinic = Dinic(n)\n\n    for i in range(left_size):\n        dinic.add_edge(S, i, 1)\n    for j in range(right_size):\n        dinic.add_edge(left_size + j, T, 1)\n    for l, r in edges:\n        dinic.add_edge(l, left_size + r, 1)\n\n    return dinic.max_flow(S, T)\n\n# Example: 3 left nodes, 3 right nodes\nedges = [(0, 0), (0, 2), (1, 1), (2, 0), (2, 1)]\nprint(max_bipartite_matching(3, 3, edges))  # Output: 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-133-max-flow-min-cut-java",
      children: "Example 13.3: Max Flow Min Cut (Java)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class MinCutExample {\n    public static void main(String[] args) {\n        Dinic dinic = new Dinic(4);\n        dinic.addEdge(0, 1, 4);  // s -> a\n        dinic.addEdge(0, 2, 3);  // s -> b\n        dinic.addEdge(1, 2, 2);  // a -> b\n        dinic.addEdge(1, 3, 3);  // a -> t\n        dinic.addEdge(2, 3, 4);  // b -> t\n\n        int flow = dinic.maxFlow(0, 3);\n        System.out.println(\"Max Flow: \" + flow);\n\n        // Find min cut: vertices reachable from s in residual\n        boolean[] reachable = dinic.minCutReachable(0);\n        System.out.print(\"Min Cut S = { \");\n        for (int i = 0; i < 4; i++)\n            if (reachable[i]) System.out.print(i + \" \");\n        System.out.println(\"}\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "max-flow-algorithms-comparison",
      children: "Max Flow Algorithms Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ford-Fulkerson"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edmonds-Karp"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dinic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Push-Relabel"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Path Selection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shortest (BFS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level graph + blocking flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Height-based push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(E \\cdot |f^*|) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(VE^2) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(V^2 E) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(V^2 \\sqrt{E}) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unit Capacity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(E \\sqrt{V}) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(V^2 \\sqrt{E}) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Capacities"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer (must be)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any real"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any real"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any real"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(V^2) ) matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(V^2) ) matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(V+E) ) list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(V+E) ) list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Practical Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow for large caps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very fast (dense)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edges/Vertex for =E"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( E \\cdot |f^*| )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( VE^2 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( V^2 E )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( V^2 \\sqrt{E} )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Worst-Case Graph"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain with large caps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense layered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense layered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallelizable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-which",
      children: "When to Use Which"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Small capacities, teaching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ford-Fulkerson"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplest to understand"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Small-medium graphs (< 1000 vertices)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edmonds-Karp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to implement, polynomial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Competitive programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dinic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, standard library"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large sparse graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dinic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current-edge pointer accelerates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bipartite matching (( E\\sqrt{V} ))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dinic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal for unit capacities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very dense graphs (( E \\approx V^2 ))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push-Relabel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best asymptotic bound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push-Relabel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel GPU implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dinic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable ( O(V^2E) ) bound"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path Selection"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ford-Fulkerson"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any augmenting path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E *"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ")"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edmonds-Karp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shortest (BFS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(VE^2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial guarantee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teaching, medium graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dinic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level graph + blocking flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V^2 E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current-edge pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Competitive programming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dinic (unit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E sqrt(V))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capacity = 1 optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bipartite matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Push-Relabel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Height-based push"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V^2 sqrt(E))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense graphs, parallel"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Flow Network"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source, sink, capacities, flow conservation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Residual Graph"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward = remaining cap, backward = flow to undo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Augmenting Path"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path from s to t in residual with positive capacity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Max-Flow Min-Cut"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max flow = min cut; cut S = reachable from s in residual"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ford-Fulkerson"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS any path; O(E *"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edmonds-Karp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS shortest path; O(VE^2); polynomial always"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dinic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level graph + blocking flow; O(V^2 E); CP standard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Push-Relabel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local push/relabel; O(V^2 sqrt(E)); parallel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bipartite Matching"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce to max flow: s → U → V → t with unit caps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Assignment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bipartite matching + edge costs → min-cost max flow"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
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
            children: "Max Flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common in advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical technique"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network capacity planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Min Cut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph partitioning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bipartite Matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matching problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Job assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HR systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Min-Cost Flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supply chains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logistics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Push-Relabel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense graph optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU-based routing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-1-maximum-bipartite-matching-via-flow",
      children: "Problem 1: Maximum Bipartite Matching via Flow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " Given N left nodes and M right nodes with edges between them, find the maximum matching."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      }), " Add source → left (cap 1), left → right (cap 1), right → sink (cap 1). Run Dinic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time:"
      }), " ( O(E \\sqrt{V}) ) — optimal for unweighted bipartite matching."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def maximumMatching(n_left, n_right, edges):\n    # n_left = |U|, n_right = |V|\n    # edges = [(u, v)] where u in [0, n_left), v in [0, n_right)\n    S = n_left + n_right\n    T = S + 1\n    dinic = Dinic(T + 1)\n    for i in range(n_left):\n        dinic.add_edge(S, i, 1)\n    for j in range(n_right):\n        dinic.add_edge(n_left + j, T, 1)\n    for u, v in edges:\n        dinic.add_edge(u, n_left + v, 1)\n    return dinic.max_flow(S, T)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-2-min-cut-for-vertex-cover-kőnigs-theorem",
      children: "Problem 2: Min-Cut for Vertex Cover (Kőnig's Theorem)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " In a bipartite graph, the size of the minimum vertex cover equals the size of the maximum matching."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      }), " Compute max matching via flow. Then find the min vertex cover from the residual graph:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "From the residual graph after max flow, find vertices reachable from s in the residual."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Left vertices NOT reachable + right vertices reachable = minimum vertex cover."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why this works:"
      }), " Kőnig's theorem establishes the duality between matching and vertex cover in bipartite graphs. The min cut in the flow network directly gives the vertex cover."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-3-flow-decomposition",
      children: "Problem 3: Flow Decomposition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " Given a max flow, decompose it into a set of source-to-sink paths and cycles."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      }), " While flow remains on any edge:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DFS from s following edges with positive flow to find an s-t path."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Subtract the minimum flow on this path from all edges on the path."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Record the path and its flow value."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no s-t path exists, extract flow cycles."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time:"
      }), " ( O(VE) )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters:"
      }), " Flow decomposition reconstructs the actual routing decisions that yield a given flow. It's used in network planning, traffic engineering, and verifying flow correctness."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-4-edge-disjoint-paths",
      children: "Problem 4: Edge-Disjoint Paths"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " Find the maximum number of edge-disjoint paths from s to t."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      }), " Assign capacity 1 to all edges. Run max flow. The flow value equals the maximum number of edge-disjoint paths. Each unit of flow traces one path."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Variation:"
      }), " For vertex-disjoint paths, split each vertex v into v_in → v_out with capacity 1."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "airline-scheduling",
      children: "Airline Scheduling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " An airline needs to schedule N flights using K planes. Each flight has a departure city, departure time, arrival city, and arrival time. A plane can operate flight j after flight i if the arrival city of i equals the departure city of j and there's enough turnaround time."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Model as maximum bipartite matching. Left side = flights, right side = flights. Edge (i,j) exists if a plane can operate both. Max flow gives the minimum number of planes needed: ( N - \\text{max matching} )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "image-segmentation-graph-cuts",
      children: "Image Segmentation (Graph Cuts)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Segment an image into foreground and background."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Each pixel is a vertex. Edge capacities represent similarity between neighboring pixels (high capacity = likely same segment). Source connects to foreground seeds with high capacity; sink connects to background seeds. The min cut partitions the image into foreground (S) and background (T). This is the basis of the Boykov-Kolmogorov algorithm used in medical imaging, photo editing, and video segmentation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "job-assignment-maximum-bipartite-matching",
      children: "Job Assignment (Maximum Bipartite Matching)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " N candidates apply for M positions. Each candidate is qualified for a subset of positions. Assign as many candidates to positions as possible, with at most one candidate per position."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Construct a bipartite graph: candidates on left, positions on right, edges for qualifications. Max flow = maximum number of hires. Companies like LinkedIn, Indeed, and internal HR systems use this at scale."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dunns-maximum-bipartite-matching",
      children: "Dunn's Maximum Bipartite Matching"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Dunn (a logistics company) needs to assign N delivery drivers to M delivery routes. Each driver can handle a subset of routes based on vehicle type, license, and location. Maximize the number of assigned routes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " This is a textbook bipartite matching via max flow. The flow network has:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Source → each driver (cap 1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each driver → each eligible route (cap 1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each route → sink (cap 1)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Max flow = maximum number of routes assigned. With 500 drivers and 500 routes, Dinic solves this in milliseconds."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "network-reliability",
      children: "Network Reliability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the minimum number of edges (or vertices) whose removal disconnects s from t."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Edge connectivity = max number of edge-disjoint paths = max flow with unit capacities. Vertex connectivity = max number of vertex-disjoint paths = max flow with vertex splitting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ford-Fulkerson"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(E \\cdot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f^*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ") )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edmonds-Karp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(VE^2) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(V^2) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS-based shortest augmenting path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dinic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(V^2 E) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(V+E) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level graph + blocking flow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dinic (unit capacities)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(E \\sqrt{V}) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(V+E) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matches bipartite matching lower bound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Push-Relabel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(V^2 \\sqrt{E}) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(V+E) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for dense graphs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Takeaways:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All max flow algorithms use the residual graph and augmenting paths (or pushes)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The max-flow min-cut theorem is the central duality result."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dinic is the most practical general-purpose algorithm."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bipartite matching to max flow is the most important reduction."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State the max-flow min-cut theorem and provide a proof sketch."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why Ford-Fulkerson with integer capacities terminates."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does Edmonds-Karp use BFS rather than DFS?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does Dinic's current-edge pointer improve performance?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between push-relabel and augmenting-path approaches."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you find the min cut from the residual graph after max flow?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What data structure does Dinic use to accelerate blocking flow computation?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) A priority queue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) A current-edge pointer array"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) A hash table"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) A segment tree"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) The `ptr[i]` current-edge pointer prevents re-scanning dead edges during DFS in the level graph.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " How does Edmonds-Karp guarantee polynomial time?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) By using integer capacities only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) By always choosing the shortest augmenting path via BFS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) By using DFS to find paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) By using Fibonacci heaps"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) BFS ensures each edge is saturated at most O(V) times, giving O(VE^2) bound.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What is the key idea behind the max-flow min-cut theorem proof?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Use Kruskal's algorithm on the residual graph"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Find all vertices reachable from s in the residual after max flow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Apply Dijkstra from both source and sink"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Count the number of augmenting paths"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) After max flow, vertices reachable from s in the residual define a cut whose capacity equals the flow value.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Which algorithm has the best asymptotic complexity for very dense graphs?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Ford-Fulkerson"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Edmonds-Karp"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Dinic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Push-Relabel"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nD) Push-Relabel at \\( O(V^2 \\sqrt{E}) \\) is the best for dense graphs where \\( E \\approx V^2 \\).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " What is the minimum cut capacity after computing max flow?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Always ( V - 1 )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Equal to the maximum flow value"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Equal to the number of saturated edges"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Always ( E - V + 1 )"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) The max-flow min-cut theorem states the min cut capacity equals the max flow value.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Dinic's algorithm and test it on a network with 1000 vertices and 5000 edges."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Model the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "edge-disjoint paths"
        }), " problem as a max flow problem. Find the maximum number of vertex-disjoint paths."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given a bipartite graph with 20 vertices on each side, find the maximum matching using max flow."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Model the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "baseball elimination"
        }), " problem as a max flow instance."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given a network with multiple sources and sinks, reduce it to a single-source single-sink network and compute max flow."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the Boykov-Kolmogorov algorithm for image segmentation and test on a 10x10 grid."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design an algorithm for the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "minimum cut"
        }), " problem that does not require computing max flow (Stoer-Wagner algorithm). Implement and analyze its complexity."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a parallel version of push-relabel using threads. Compare performance against Dinic on dense random graphs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that in a unit-capacity network, Dinic runs in ( O(E \\sqrt{V}) ). Construct a family of networks that achieves this bound."
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