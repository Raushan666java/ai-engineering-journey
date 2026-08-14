"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[74459],{

/***/ 36416
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_algorithms_11_graph_shortest_md_850_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-algorithms-11-graph-shortest-md-850.json
const site_docs_courses_algorithms_11_graph_shortest_md_850_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/algorithms/11-graph-shortest","title":"Chapter 11: Graph Shortest Paths","description":"Prerequisites Dynamic Programming — Trees & Grids — Recursive problem-solving on graph structures | Next Minimum Spanning Trees — From shortest paths to minimum-cost spanning trees","source":"@site/docs/courses/algorithms/11-graph-shortest.md","sourceDirName":"courses/algorithms","slug":"/algorithms/11-graph-shortest","permalink":"/ai-engineering-journey/algorithms/11-graph-shortest","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"id":"11-graph-shortest","slug":"/algorithms/11-graph-shortest","title":"Chapter 11: Graph Shortest Paths","sidebar_label":"Chapter 11: Graph Shortest Paths","sidebar_position":11},"sidebar":"course-algorithms","previous":{"title":"Chapter 10: Trees, Grids & Dynamic Programming","permalink":"/ai-engineering-journey/algorithms/10-dp-trees-grids"},"next":{"title":"Chapter 12: Minimum Spanning Trees","permalink":"/ai-engineering-journey/algorithms/12-graph-mst"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/algorithms/11-graph-shortest.md


const frontMatter = {
	id: '11-graph-shortest',
	slug: '/algorithms/11-graph-shortest',
	title: 'Chapter 11: Graph Shortest Paths',
	sidebar_label: 'Chapter 11: Graph Shortest Paths',
	sidebar_position: 11
};
const contentTitle = 'Chapter 11: Graph Shortest Paths';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Shortest Path Matters",
  "id": "why-shortest-path-matters",
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
  "value": "11.1 Dijkstra&#39;s Algorithm",
  "id": "111-dijkstras-algorithm",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 4
}, {
  "value": "Dry Run with Distance Table Trace",
  "id": "dry-run-with-distance-table-trace",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 4
}, {
  "value": "11.2 Bellman-Ford Algorithm",
  "id": "112-bellman-ford-algorithm",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-1",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 4
}, {
  "value": "Dry Run with Distance Table Trace",
  "id": "dry-run-with-distance-table-trace-1",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-1",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-1",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation-1",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-1",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 4
}, {
  "value": "11.3 Floyd-Warshall Algorithm",
  "id": "113-floyd-warshall-algorithm",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-2",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 4
}, {
  "value": "Dry Run with Distance Table Trace",
  "id": "dry-run-with-distance-table-trace-2",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-2",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-2",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation-2",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-2",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 4
}, {
  "value": "11.4 Shortest Path in DAG",
  "id": "114-shortest-path-in-dag",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-3",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 4
}, {
  "value": "Dry Run with Distance Table Trace",
  "id": "dry-run-with-distance-table-trace-3",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-3",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-3",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation-3",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-3",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 4
}, {
  "value": "11.5 A* Search",
  "id": "115-a-search",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-4",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 4
}, {
  "value": "Dry Run",
  "id": "dry-run",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-4",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-4",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation-4",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-4",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 4
}, {
  "value": "Shortest Path Algorithm Comparison",
  "id": "shortest-path-algorithm-comparison",
  "level": 2
}, {
  "value": "When to Use What",
  "id": "when-to-use-what",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Q1: How do you detect a negative cycle using Bellman-Ford?",
  "id": "q1-how-do-you-detect-a-negative-cycle-using-bellman-ford",
  "level": 3
}, {
  "value": "Q2: Can Dijkstra handle a Directed Acyclic Graph (DAG) with negative weights?",
  "id": "q2-can-dijkstra-handle-a-directed-acyclic-graph-dag-with-negative-weights",
  "level": 3
}, {
  "value": "Q3: Reconstructing the shortest path",
  "id": "q3-reconstructing-the-shortest-path",
  "level": 3
}, {
  "value": "Q4: How to handle graphs with negative cycles containing source?",
  "id": "q4-how-to-handle-graphs-with-negative-cycles-containing-source",
  "level": 3
}, {
  "value": "Q5: Floyd-Warshall path reconstruction",
  "id": "q5-floyd-warshall-path-reconstruction",
  "level": 3
}, {
  "value": "Q6: Dijkstra on unweighted graph",
  "id": "q6-dijkstra-on-unweighted-graph",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Google Maps and GPS Navigation",
  "id": "google-maps-and-gps-navigation",
  "level": 3
}, {
  "value": "OSPF and RIP Routing Protocols",
  "id": "ospf-and-rip-routing-protocols",
  "level": 3
}, {
  "value": "Airline and Railway Scheduling",
  "id": "airline-and-railway-scheduling",
  "level": 3
}, {
  "value": "Video Game Pathfinding",
  "id": "video-game-pathfinding",
  "level": 3
}, {
  "value": "Currency Arbitrage Detection",
  "id": "currency-arbitrage-detection",
  "level": 3
}, {
  "value": "Social Network Analysis",
  "id": "social-network-analysis",
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
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "chapter-11-graph-shortest-paths",
        children: "Chapter 11: Graph Shortest Paths"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/10-dp-trees-grids",
          children: "Chapter 10: Dynamic Programming — Trees & Grids"
        }), " — Recursive problem-solving on graph structures | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/12-graph-mst",
          children: "Chapter 12: Minimum Spanning Trees"
        }), " — From shortest paths to minimum-cost spanning trees"]
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
        href: "../../assets/images/lessons/algorithms/11-graph-shortest/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/11-graph-shortest/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/algorithms/11-graph-shortest/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/11-graph-shortest/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/algorithms/11-graph-shortest/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/11-graph-shortest/visual-explanation.png",
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
        children: "Implement Dijkstra's algorithm for single-source shortest paths with non-negative weights."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Bellman-Ford for graphs with negative weights and detect negative cycles."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute all-pairs shortest paths using Floyd-Warshall."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute shortest paths in DAGs using topological order."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the A* search algorithm and its admissible heuristic property."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-shortest-path-matters",
      children: "Why Shortest Path Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine you are driving from New York to Los Angeles. Your GPS must compute the fastest route across thousands of highways, accounting for traffic, road closures, and distance. This is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "shortest path problem"
      }), " — the computational bedrock of navigation systems."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In computing, \"shortest\" rarely means literal meters. It means ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "minimum cost"
      }), " — travel time, bandwidth delay, financial transaction fees, or even the number of social connections separating two people. Every time your phone routes a call, your email finds a server, or a delivery drone plots a course, a shortest-path algorithm runs underneath."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Consider a courier service dispatching a truck across a city. Each intersection is a vertex, each road is an edge, and the travel time is the edge weight. The dispatcher needs the route that minimizes total time. If some roads have tolls (positive weight) and others have discounts (negative weight), the problem becomes harder. If the city has a loop that somehow saves time each trip (negative cycle), the concept of \"shortest\" breaks entirely — you could drive forever and keep reducing cost."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The four algorithms in this chapter represent different trade-offs: speed versus generality, simplicity versus power. Choosing the right one is the first real test of algorithmic maturity."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "Dijkstra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority queue + relaxation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E log V) with binary heap; non-negative weights only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bellman-Ford"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relax all edges V-1 times"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(VE); detects negative cycles via Vth iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Floyd-Warshall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[k][i][j] via intermediate k"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V³) for all-pairs; simple 3-loop implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAG Shortest Paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topological order + relaxation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V+E); linear time for DAGs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A* Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heuristic-guided Dijkstra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Admissible heuristic guarantees optimality"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Shortest Paths] --> B[Single-Source]\n    A --> C[All-Pairs]\n    A --> D[DAG]\n    A --> E[Heuristic]\n    B --> F[Dijkstra non-negative]\n    B --> G[Bellman-Ford general]\n    C --> H[Floyd-Warshall]\n    D --> I[Topological + Relax]\n    E --> J[A* Search]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch11-graph-shortest.png",
        alt: "Graph Shortest Paths Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-dijkstras-algorithm",
      children: "11.1 Dijkstra's Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the shortest paths from a source vertex ( s ) to all other vertices in a weighted graph with non-negative edge weights."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Your GPS calculates the shortest route from your current location to a destination. Each intersection is a vertex, each road segment is an edge with weight = travel time. The GPS maintains a list of \"best known travel time\" for each intersection. It always explores the intersection with the shortest current estimate first — you wouldn't drive 10 minutes in the wrong direction just to save 30 seconds later. This greedy approach works because travel times are never negative (you can't arrive before you left)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dist[source] = 0"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dist[v] = ∞"
        }), " for all other vertices."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Insert ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(dist[v], v)"
        }), " into a min-priority queue for all vertices."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While the priority queue is not empty:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Extract the vertex ", (0,jsx_runtime.jsx)(_components.code, {
              children: "u"
            }), " with the smallest distance."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If the extracted distance does not match ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dist[u]"
            }), ", skip (lazy deletion)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For each neighbor ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v"
            }), " of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "u"
            }), " with edge weight ", (0,jsx_runtime.jsx)(_components.code, {
              children: "w(u,v)"
            }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "dist[u] + w(u,v) < dist[v]"
                }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "dist[v] = dist[u] + w(u,v)"
                    }), "."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["Push ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "(dist[v], v)"
                    }), " into the priority queue."]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dist[]"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Dijkstra(G, s):\n    dist[v] = inf for all v, dist[s] = 0\n    PQ = min-priority queue of (dist[v], v)\n    while PQ is not empty:\n        u = ExtractMin(PQ)\n        if dist[u] != d[u]: continue         // lazy deletion\n        for each neighbor v of u:\n            if dist[u] + w(u,v) < dist[v]:\n                dist[v] = dist[u] + w(u,v)\n                Insert(PQ, (dist[v], v))\n    return dist\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-with-distance-table-trace",
      children: "Dry Run with Distance Table Trace"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Graph:"
      }), " Vertices: 0, 1, 2, 3, 4. Source: 0."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weight"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0→1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0→2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2→1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1→3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2→3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3→4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step trace:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Extracted"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dist[0]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dist[1]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dist[2]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dist[3]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dist[4]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relaxed Edges"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0→1 (4), 0→2 (1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["min(4,1+2)=", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1+5=6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2→1 (2), 2→3 (5)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["min(6,3+1)=", (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1→3 (1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4+3=7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3→4 (3)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "7"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final distances:"
      }), " dist[0]=0, dist[1]=3, dist[2]=1, dist[3]=4, dist[4]=7."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Path reconstruction:"
      }), " 0→2→1→3→4 (total 7)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <queue>\n#include <limits>\n\nstd::vector<int> dijkstra(const std::vector<std::vector<std::pair<int,int>>>& adj, int s) {\n    int n = static_cast<int>(adj.size());\n    std::vector<int> dist(n, std::numeric_limits<int>::max());\n    dist[s] = 0;\n    using P = std::pair<int,int>;\n    std::priority_queue<P, std::vector<P>, std::greater<P>> pq;\n    pq.push({0, s});\n    while (!pq.empty()) {\n        auto [d, u] = pq.top(); pq.pop();\n        if (d != dist[u]) continue;\n        for (auto [v, w] : adj[u]) {\n            if (dist[u] + w < dist[v]) {\n                dist[v] = dist[u] + w;\n                pq.push({dist[v], v});\n            }\n        }\n    }\n    return dist;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import heapq\n\ndef dijkstra(adj, s):\n    n = len(adj)\n    dist = [float('inf')] * n\n    dist[s] = 0\n    pq = [(0, s)]\n    while pq:\n        d, u = heapq.heappop(pq)\n        if d != dist[u]:\n            continue\n        for v, w in adj[u]:\n            if dist[u] + w < dist[v]:\n                dist[v] = dist[u] + w\n                heapq.heappush(pq, (dist[v], v))\n    return dist\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class Dijkstra {\n    static class Pair {\n        int first, second;\n        Pair(int f, int s) { first = f; second = s; }\n    }\n\n    static int[] dijkstra(List<List<Pair>> adj, int s) {\n        int n = adj.size();\n        int[] dist = new int[n];\n        Arrays.fill(dist, Integer.MAX_VALUE);\n        dist[s] = 0;\n        PriorityQueue<Pair> pq = new PriorityQueue<>(\n            (a, b) -> Integer.compare(a.first, b.first));\n        pq.add(new Pair(0, s));\n        while (!pq.isEmpty()) {\n            Pair cur = pq.poll();\n            int d = cur.first, u = cur.second;\n            if (d != dist[u]) continue;\n            for (Pair edge : adj.get(u)) {\n                int v = edge.first, w = edge.second;\n                if (dist[u] + w < dist[v]) {\n                    dist[v] = dist[u] + w;\n                    pq.add(new Pair(dist[v], v));\n                }\n            }\n        }\n        return dist;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (binary heap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O((V+E) log V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each vertex extracted once (O(log V)), each edge relaxed once (O(log V) for push)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (Fibonacci heap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V log V + E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DecreaseKey is O(1) amortized, ExtractMin remains O(log V)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distance array + priority queue stores at most V entries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(E log V) and not O(E)?"
      }), " The priority queue operations — push and pop — each take O(log V) time. Since every edge may cause a push and every vertex causes a pop, the cost multiplies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages",
      children: "Advantages & Disadvantages"
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
            children: "Fastest single-source algorithm for non-negative weights"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fails completely with negative edge weights"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(E log V) is efficient for sparse graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot detect negative cycles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lazy deletion pattern is simple to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for all-pairs shortest paths"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works on directed and undirected graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires dense graph representation for worst-case O(V²) if using simple array"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dist[source] = 0, algorithm terminates immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disconnected graph"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dist[v] remains ∞ for unreachable vertices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zero-weight edges"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works correctly; zero-weight edges are handled as non-negative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Source = destination"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 0; algorithm finds the shortest cycle through source if one exists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Large weights"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "long long"
            }), " to avoid overflow when summing distances"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Dijkstra's lazy deletion pattern (checking ", (0,jsx_runtime.jsx)(_components.code, {
          children: "d != dist[u]"
        }), " before processing) is preferred over DecreaseKey — it's simpler and has the same asymptotic complexity with a binary heap."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Dijkstra fails with negative weights because a later negative edge could create a shorter path to an already-\"settled\" vertex."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Dijkstra's algorithm greedily extracts the minimum-distance unvisited vertex, achieving O(E log V) single-source shortest paths for non-negative weights."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-bellman-ford-algorithm",
      children: "11.2 Bellman-Ford Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find shortest paths when edge weights may be negative. Also detects negative cycles reachable from the source."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Suppose you are trading currencies. Converting USD → EUR → GBP might cost you 0.2% each hop, but a rare triangular arbitrage opportunity exists: USD → JPY → EUR → USD yields a net profit of 0.1% — a negative-weight cycle. You could keep trading in this loop and accumulate infinite profit. Bellman-Ford detects exactly such pathological situations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-1",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dist[source] = 0"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dist[v] = ∞"
        }), " for all other vertices."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Repeat |V| - 1 times:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For every edge (u, v) with weight w:\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "dist[u] + w < dist[v]"
                }), ", update ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "dist[v] = dist[u] + w"
                }), "."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For every edge (u, v) with weight w:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dist[u] + w < dist[v]"
            }), ", a negative cycle exists (reachable from source)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dist[]"
        }), " (or signal negative cycle)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BellmanFord(G, s):\n    dist[v] = inf for all v, dist[s] = 0\n    for i = 1 to |V|-1:\n        for each edge (u,v) in E:\n            if dist[u] + w(u,v) < dist[v]:\n                dist[v] = dist[u] + w(u,v)\n    for each edge (u,v) in E:\n        if dist[u] + w(u,v) < dist[v]:\n            report \"negative cycle detected\"\n    return dist\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-with-distance-table-trace-1",
      children: "Dry Run with Distance Table Trace"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Graph:"
      }), " Vertices: 0, 1, 2, 3. Source: 0."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weight"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0→1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0→2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1→3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2→1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2→3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step trace (each iteration relaxes ALL edges):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Processed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dist[0]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dist[1]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dist[2]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dist[3]"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0→1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0→2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2→1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["min(6,5-2)=", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2→3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5+4=9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1→3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["min(9,3-1)=", (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0→1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(3,0+6)=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0→2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2→1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(3,5-2)=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2→3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(2,5+4)=2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1→3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(2,3-1)=2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(all edges)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (no change)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final distances:"
      }), " dist[0]=0, dist[1]=3, dist[2]=5, dist[3]=2."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification:"
      }), " A 4th iteration produces no changes — no negative cycle."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-1",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <limits>\n\nstruct Edge { int u, v, w; };\n\nstd::vector<int> bellmanFord(const std::vector<Edge>& edges, int n, int s) {\n    std::vector<int> dist(n, std::numeric_limits<int>::max());\n    dist[s] = 0;\n    for (int i = 0; i < n - 1; ++i) {\n        for (const auto& e : edges) {\n            if (dist[e.u] != std::numeric_limits<int>::max()\n                && dist[e.u] + e.w < dist[e.v])\n                dist[e.v] = dist[e.u] + e.w;\n        }\n    }\n    for (const auto& e : edges) {\n        if (dist[e.u] != std::numeric_limits<int>::max()\n            && dist[e.u] + e.w < dist[e.v])\n            return {}; // negative cycle\n    }\n    return dist;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-1",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def bellman_ford(edges, n, s):\n    dist = [float('inf')] * n\n    dist[s] = 0\n    for _ in range(n - 1):\n        for u, v, w in edges:\n            if dist[u] != float('inf') and dist[u] + w < dist[v]:\n                dist[v] = dist[u] + w\n    for u, v, w in edges:\n        if dist[u] != float('inf') and dist[u] + w < dist[v]:\n            return None  # negative cycle\n    return dist\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-1",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class BellmanFord {\n    static class Edge {\n        int u, v, w;\n        Edge(int u, int v, int w) { this.u = u; this.v = v; this.w = w; }\n    }\n\n    static int[] bellmanFord(List<Edge> edges, int n, int s) {\n        int[] dist = new int[n];\n        Arrays.fill(dist, Integer.MAX_VALUE);\n        dist[s] = 0;\n        for (int i = 0; i < n - 1; i++) {\n            for (Edge e : edges) {\n                if (dist[e.u] != Integer.MAX_VALUE\n                    && dist[e.u] + e.w < dist[e.v])\n                    dist[e.v] = dist[e.u] + e.w;\n            }\n        }\n        for (Edge e : edges) {\n            if (dist[e.u] != Integer.MAX_VALUE\n                && dist[e.u] + e.w < dist[e.v])\n                return null; // negative cycle\n        }\n        return dist;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V·E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outer loop runs V-1 times; each iteration scans all E edges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single distance array + edge list (O(E) if counting input)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(V·E) and not faster?"
      }), " Each iteration propagates distance information one edge further along every possible path. In the worst case, the shortest path visits every vertex, requiring V-1 full passes. The inner loop must check every edge each pass because you cannot know which edges are relevant without scanning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-1",
      children: "Advantages & Disadvantages"
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
            children: "Handles negative edge weights"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Much slower than Dijkstra — O(V·E) vs O(E log V)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Detects negative cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow for large graphs with many edges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement and debug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPFA variant faster in practice but has adversarial worst-case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naturally distributed (used in routing protocols)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot be used for all-pairs efficiently (V times = O(V²·E))"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Negative cycle reachable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detected in the Vth iteration; returns empty/None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Negative cycle unreachable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm runs normally; correct distances for reachable vertices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dist[0]=0; no edges to relax; no cycle detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disconnected graph"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unreachable vertices remain ∞"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Graph with only negative edges"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works correctly as long as no negative cycle exists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Source has no outgoing edges"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dist[source]=0, all others remain ∞"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " After V-1 relaxations, one more pass detects negative cycles. But this only detects cycles ", (0,jsx_runtime.jsx)(_components.em, {
          children: "reachable"
        }), " from the source. Set all dist[v] = 0 before running to detect ANY negative cycle in the graph."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Bellman-Ford is O(VE). For large graphs, use SPFA (queue-based optimization) but beware of crafted adversarial cases that degrade it."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Bellman-Ford handles negative weights and detects negative cycles by relaxing all edges V-1 times in O(VE) time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-floyd-warshall-algorithm",
      children: "11.3 Floyd-Warshall Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the shortest paths between all pairs of vertices. Handles negative weights but not negative cycles."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A logistics company wants to know the shortest distance between every pair of its 50 distribution centers. Instead of running Dijkstra 50 times, Floyd-Warshall computes all 1225 pairwise distances in one elegant triple loop. It works by asking: \"Is the current best path from i to j better than going through k?\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-2",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create an n×n distance matrix. Set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dist[i][j] = 0"
        }), " if i=j, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "w(i,j)"
        }), " if edge exists, ∞ otherwise."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each intermediate vertex k from 0 to n-1:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For each source vertex i from 0 to n-1:\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["For each destination vertex j from 0 to n-1:\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "dist[i][k] + dist[k][j] < dist[i][j]"
                    }), ", update ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "dist[i][j]"
                    }), "."]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the distance matrix."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FloydWarshall(G):\n    n = |V|\n    dist = n x n matrix initialized to edge weights (inf for non-edges)\n    for k = 0 to n-1:\n        for i = 0 to n-1:\n            for j = 0 to n-1:\n                if dist[i][k] + dist[k][j] < dist[i][j]:\n                    dist[i][j] = dist[i][k] + dist[k][j]\n    return dist\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-with-distance-table-trace-2",
      children: "Dry Run with Distance Table Trace"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Graph:"
      }), " Vertices: 0, 1, 2."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weight"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0→1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1→2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0→2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial matrix:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "dist"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "k=0 (intermediate = 0):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check all pairs (i,j): can we go i→0→j cheaper than i→j?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i→j"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Via 0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Update?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1→2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞+7=∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2→1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞+3=∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No changes. Matrix unchanged."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "k=1 (intermediate = 1):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i→j"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Via 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Update?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0→2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["3+1=", (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2→0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞+0=∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Updated dist[0][2]=4."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "k=2 (intermediate = 2):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i→j"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Via 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Update?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0→1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4+1=5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1→0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1+∞=∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final matrix:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "dist"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-2",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <limits>\n\nstd::vector<std::vector<int>> floydWarshall(\n    const std::vector<std::vector<int>>& graph) {\n    int n = static_cast<int>(graph.size());\n    std::vector<std::vector<int>> dist = graph;\n    for (int k = 0; k < n; ++k)\n        for (int i = 0; i < n; ++i)\n            for (int j = 0; j < n; ++j)\n                if (dist[i][k] != std::numeric_limits<int>::max()\n                    && dist[k][j] != std::numeric_limits<int>::max()\n                    && dist[i][k] + dist[k][j] < dist[i][j])\n                    dist[i][j] = dist[i][k] + dist[k][j];\n    return dist;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-2",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def floyd_warshall(graph):\n    n = len(graph)\n    dist = [row[:] for row in graph]  # deep copy\n    for k in range(n):\n        for i in range(n):\n            for j in range(n):\n                if (dist[i][k] != float('inf')\n                        and dist[k][j] != float('inf')\n                        and dist[i][k] + dist[k][j] < dist[i][j]):\n                    dist[i][j] = dist[i][k] + dist[k][j]\n    return dist\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-2",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class FloydWarshall {\n    static final int INF = Integer.MAX_VALUE;\n\n    static int[][] floydWarshall(int[][] graph) {\n        int n = graph.length;\n        int[][] dist = new int[n][n];\n        for (int i = 0; i < n; i++)\n            dist[i] = Arrays.copyOf(graph[i], n);\n        for (int k = 0; k < n; k++)\n            for (int i = 0; i < n; i++)\n                for (int j = 0; j < n; j++)\n                    if (dist[i][k] != INF && dist[k][j] != INF\n                        && dist[i][k] + dist[k][j] < dist[i][j])\n                        dist[i][j] = dist[i][k] + dist[k][j];\n        return dist;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Θ(V³)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three nested loops each iterating V times"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Θ(V²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V×V distance matrix"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Θ(V³) and not O(V³)?"
      }), " The triple loop always runs exactly V³ iterations regardless of graph density. This is both worst-case and best-case — Floyd-Warshall has no early termination."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why is k the outermost loop?"
      }), " The DP recurrence ", (0,jsx_runtime.jsx)(_components.code, {
        children: "d[k][i][j] = min(d[k-1][i][j], d[k-1][i][k] + d[k-1][k][j])"
      }), " requires that when computing the k-th layer, all values from the (k-1)-th layer remain available. If i or j were outermost, the in-place update would use already-modified k-th layer values, giving incorrect results."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-2",
      children: "Advantages & Disadvantages"
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
            children: "Extremely simple — just 3 nested loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Θ(V³) is prohibitive for V > 1000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works for negative edge weights"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fails on graphs with negative cycles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Computes all-pairs in one shot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Θ(V²) memory is high for large V"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to modify for path reconstruction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overkill for single-source queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naturally handles disconnected components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running Dijkstra V times is faster for sparse graphs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Negative cycle"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dist[i][i]"
            }), " becomes negative; check diagonal after completion"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single node"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dist = [[0]]; trivially correct"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disconnected graph"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞ entries remain for unreachable pairs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Self-loop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dist[i][i] initialized to 0; a negative self-loop would make it < 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dense graph"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Floyd-Warshall excels here — same Θ(V³) regardless of density"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Floyd-Warshall's key insight is the k-loop ordering — k must be the outermost loop because d^{(k)} depends on d^{(k-1)}. The in-place update works because values only improve."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Floyd-Warshall works for negative edges but not negative cycles. Check diagonal dist[i][i] < 0 afterward to detect cycles."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Floyd-Warshall computes all-pairs shortest paths in O(V³) using DP over intermediate vertices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-shortest-path-in-dag",
      children: "11.4 Shortest Path in DAG"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find shortest paths in a directed acyclic graph (DAG). The absence of cycles allows a linear-time solution."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Planning a college degree program. Courses have prerequisites — you must take CS101 before CS201 before CS301. This is a DAG (no course can be its own prerequisite). The \"shortest path\" to complete a degree is finding the minimal sequence respecting all prerequisites. Because there are no cycles, you can process courses in topological order (prerequisites first) and compute distances in one pass."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-3",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute topological order of the DAG (using DFS or Kahn's algorithm)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dist[source] = 0"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dist[v] = ∞"
        }), " for all other vertices."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Process vertices in topological order:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For each outgoing edge (u, v) with weight w:\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "dist[u] + w < dist[v]"
                }), ", update ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "dist[v]"
                }), "."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dist[]"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DAGShortestPath(G, s):\n    order = TopologicalSort(G)\n    dist[v] = inf for all v, dist[s] = 0\n    for u in order:\n        for each neighbor v of u:\n            if dist[u] + w(u,v) < dist[v]:\n                dist[v] = dist[u] + w(u,v)\n    return dist\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-with-distance-table-trace-3",
      children: "Dry Run with Distance Table Trace"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Graph:"
      }), " Vertices: 0, 1, 2, 3, 4. Edges: 0→1(2), 0→2(1), 1→3(3), 2→3(1), 3→4(2). Source: 0."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Topological order:"
      }), " 0, 1, 2, 3, 4 (or 0, 2, 1, 3, 4 — both valid)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step trace:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Process u"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dist[0]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dist[1]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dist[2]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dist[3]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dist[4]"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["min(∞, 2+3)=", (0,jsx_runtime.jsx)(_components.strong, {
              children: "5"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["min(5, 1+1)=", (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["2+2=", (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final distances:"
      }), " dist[0]=0, dist[1]=2, dist[2]=1, dist[3]=2, dist[4]=4."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " Unlike Dijkstra (which needs a priority queue) and Bellman-Ford (which needs V-1 passes), the topological order guarantees that when we process a vertex, all paths to it have already been considered. One pass suffices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-3",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <algorithm>\n#include <limits>\n\nvoid dfs(int u, const std::vector<std::vector<std::pair<int,int>>>& adj,\n         std::vector<bool>& vis, std::vector<int>& order) {\n    vis[u] = true;\n    for (auto [v, w] : adj[u])\n        if (!vis[v]) dfs(v, adj, vis, order);\n    order.push_back(u);\n}\n\nstd::vector<int> dagShortest(\n    const std::vector<std::vector<std::pair<int,int>>>& adj, int s) {\n    int n = static_cast<int>(adj.size());\n    std::vector<bool> vis(n, false);\n    std::vector<int> order;\n    for (int i = 0; i < n; ++i)\n        if (!vis[i]) dfs(i, adj, vis, order);\n    std::reverse(order.begin(), order.end());\n\n    std::vector<int> dist(n, std::numeric_limits<int>::max());\n    dist[s] = 0;\n    for (int u : order) {\n        if (dist[u] == std::numeric_limits<int>::max()) continue;\n        for (auto [v, w] : adj[u])\n            if (dist[u] + w < dist[v])\n                dist[v] = dist[u] + w;\n    }\n    return dist;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-3",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def dag_shortest(adj, s):\n    n = len(adj)\n    visited = [False] * n\n    order = []\n\n    def dfs(u):\n        visited[u] = True\n        for v, w in adj[u]:\n            if not visited[v]:\n                dfs(v)\n        order.append(u)\n\n    for i in range(n):\n        if not visited[i]:\n            dfs(i)\n    order.reverse()\n\n    dist = [float('inf')] * n\n    dist[s] = 0\n    for u in order:\n        if dist[u] == float('inf'):\n            continue\n        for v, w in adj[u]:\n            if dist[u] + w < dist[v]:\n                dist[v] = dist[u] + w\n    return dist\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-3",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class DAGShortest {\n    static void dfs(int u, List<List<int[]>> adj,\n                    boolean[] vis, List<Integer> order) {\n        vis[u] = true;\n        for (int[] edge : adj.get(u)) {\n            int v = edge[0];\n            if (!vis[v]) dfs(v, adj, vis, order);\n        }\n        order.add(u);\n    }\n\n    static int[] dagShortest(List<List<int[]>> adj, int s) {\n        int n = adj.size();\n        boolean[] vis = new boolean[n];\n        List<Integer> order = new ArrayList<>();\n        for (int i = 0; i < n; i++)\n            if (!vis[i]) dfs(i, adj, vis, order);\n        Collections.reverse(order);\n\n        int[] dist = new int[n];\n        Arrays.fill(dist, Integer.MAX_VALUE);\n        dist[s] = 0;\n        for (int u : order) {\n            if (dist[u] == Integer.MAX_VALUE) continue;\n            for (int[] edge : adj.get(u)) {\n                int v = edge[0], w = edge[1];\n                if (dist[u] + w < dist[v])\n                    dist[v] = dist[u] + w;\n            }\n        }\n        return dist;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (topological sort)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V + E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS visits each vertex and edge once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (relaxation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V + E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each vertex processed once, each edge relaxed once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V + E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both phases are linear"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distance array + recursion stack (or explicit stack)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why is this faster than Dijkstra?"
      }), " Dijkstra pays O(log V) per operation because it doesn't know which vertex to process next. A DAG provides the topological ordering for free — vertices that could have edges to u are guaranteed to appear before u in the order. No priority queue needed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-3",
      children: "Advantages & Disadvantages"
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
            children: "Fastest possible — O(V+E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works only on DAGs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles negative weights (no cycles exist)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires topological sort (extra pass)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple linear-time algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot handle cycles by definition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ideal for dependency resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topological order is not unique; any valid order works"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty graph (V=0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns empty distance array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single node (V=1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dist[0]=0; trivially correct"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Source has no path to some vertices"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Those vertices remain ∞"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Negative weight edges"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works correctly — DAG has no cycles, so negative cycles impossible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disconnected DAG"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate topological ordering per component; unreachable vertices are ∞"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " DAG shortest paths is the fastest possible — O(V+E) because topological ordering eliminates the need for iterative relaxation. Always check if your graph is a DAG before using a slower algorithm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The topological order ensures vertex u is processed before any of its descendants, so when you relax edges from u, dist[v] is final — no later pass can improve it."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " DAG shortest paths achieve O(V+E) time by combining topological sort with edge relaxation in a single pass."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "115-a-search",
      children: "11.5 A* Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Find the shortest path from a single source s to a specific target t. A* uses domain knowledge (a heuristic) to explore fewer vertices than Dijkstra."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " When driving from home to the airport, you intuitively ignore roads heading away from the airport. You use your knowledge of the airport's location to guide your decisions. This is exactly what A* does — it uses a heuristic (straight-line distance) to prioritize roads that point toward the destination."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A* is an informed search algorithm that uses a heuristic function ( h(v) ) to estimate the distance from ( v ) to the target. It combines the actual distance ( g(v) ) with the heuristic: ( f(v) = g(v) + h(v) )."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-4",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize ", (0,jsx_runtime.jsx)(_components.code, {
          children: "g[source] = 0"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "g[v] = ∞"
        }), " for all other vertices."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Insert ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(f[source], source)"
        }), " into a priority queue, where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "f[v] = g[v] + h(v)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While the priority queue is not empty:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Extract the vertex ", (0,jsx_runtime.jsx)(_components.code, {
              children: "u"
            }), " with the smallest ", (0,jsx_runtime.jsx)(_components.code, {
              children: "f[u]"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "u == t"
            }), ", reconstruct and return the path."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For each neighbor ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v"
            }), " of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "u"
            }), " with weight ", (0,jsx_runtime.jsx)(_components.code, {
              children: "w(u,v)"
            }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "g[u] + w(u,v) < g[v]"
                }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "g[v] = g[u] + w(u,v)"
                    }), "."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "f[v] = g[v] + h(v)"
                    }), " and push into queue."]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return \"no path\"."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AStar(G, s, t, h):\n    g[v] = inf for all v, g[s] = 0\n    PQ = priority queue of (f[v], v) where f[v] = g[v] + h(v)\n    while PQ is not empty:\n        u = ExtractMin(PQ)\n        if u == t: reconstruct and return\n        for each neighbor v of u:\n            if g[u] + w(u,v) < g[v]:\n                g[v] = g[u] + w(u,v)\n                Insert(PQ, (g[v] + h(v), v))\n    return no path\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run",
      children: "Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Graph:"
      }), " Vertices: A, B, C, D, E. Target: E."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weight"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A→B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A→C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B→D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C→D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D→E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Heuristic"
      }), " (estimated cost to E):"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Vertex"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "h(v)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step trace:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "g(A)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "g(B)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "g(C)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "g(D)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "g(E)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "f values in PQ"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5, A)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(6, B), (6, C)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C (f=6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3+1=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(6, B), (5, D)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D (f=5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4+2=6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(6, B), (6, E)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E (f=6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "6"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Goal reached!"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Path:"
      }), " A → C → D → E (cost 6)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Notice Dijkstra would have extracted B (f=2) before C (f=3), but A* correctly prioritizes C because its heuristic knows C is closer to the goal."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-4",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <queue>\n#include <limits>\n#include <functional>\n\nstd::vector<int> aStar(const std::vector<std::vector<std::pair<int,int>>>& adj,\n                        int s, int t, const std::vector<int>& h) {\n    int n = static_cast<int>(adj.size());\n    std::vector<int> g(n, std::numeric_limits<int>::max());\n    std::vector<int> parent(n, -1);\n    g[s] = 0;\n    using P = std::pair<int,int>;\n    std::priority_queue<P, std::vector<P>, std::greater<P>> pq;\n    pq.push({g[s] + h[s], s});\n    while (!pq.empty()) {\n        auto [f, u] = pq.top(); pq.pop();\n        if (u == t) break;\n        if (f != g[u] + h[u]) continue;\n        for (auto [v, w] : adj[u]) {\n            if (g[u] + w < g[v]) {\n                g[v] = g[u] + w;\n                parent[v] = u;\n                pq.push({g[v] + h[v], v});\n            }\n        }\n    }\n    // Path reconstruction\n    std::vector<int> path;\n    if (g[t] == std::numeric_limits<int>::max()) return path;\n    for (int v = t; v != -1; v = parent[v])\n        path.push_back(v);\n    std::reverse(path.begin(), path.end());\n    return path;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-4",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import heapq\n\ndef a_star(adj, s, t, h):\n    n = len(adj)\n    g = [float('inf')] * n\n    parent = [-1] * n\n    g[s] = 0\n    pq = [(g[s] + h[s], s)]\n    while pq:\n        f, u = heapq.heappop(pq)\n        if u == t:\n            break\n        if f != g[u] + h[u]:\n            continue\n        for v, w in adj[u]:\n            if g[u] + w < g[v]:\n                g[v] = g[u] + w\n                parent[v] = u\n                heapq.heappush(pq, (g[v] + h[v], v))\n    # Path reconstruction\n    if g[t] == float('inf'):\n        return []\n    path = []\n    v = t\n    while v != -1:\n        path.append(v)\n        v = parent[v]\n    return path[::-1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-4",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class AStar {\n    static List<Integer> aStar(List<List<int[]>> adj,\n                                int s, int t, int[] h) {\n        int n = adj.size();\n        int[] g = new int[n];\n        int[] parent = new int[n];\n        Arrays.fill(g, Integer.MAX_VALUE);\n        Arrays.fill(parent, -1);\n        g[s] = 0;\n        PriorityQueue<int[]> pq = new PriorityQueue<>(\n            (a, b) -> Integer.compare(a[0], b[0]));\n        pq.add(new int[]{g[s] + h[s], s});\n        while (!pq.isEmpty()) {\n            int[] cur = pq.poll();\n            int f = cur[0], u = cur[1];\n            if (u == t) break;\n            if (f != g[u] + h[u]) continue;\n            for (int[] edge : adj.get(u)) {\n                int v = edge[0], w = edge[1];\n                if (g[u] + w < g[v]) {\n                    g[v] = g[u] + w;\n                    parent[v] = u;\n                    pq.add(new int[]{g[v] + h[v], v});\n                }\n            }\n        }\n        List<Integer> path = new ArrayList<>();\n        if (g[t] == Integer.MAX_VALUE) return path;\n        for (int v = t; v != -1; v = parent[v])\n            path.add(v);\n        Collections.reverse(path);\n        return path;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (best case)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good heuristic guides search directly to goal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time (worst case)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O((V+E) log V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Degrades to Dijkstra when h(v) = 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distance array + priority queue"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.em, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Why does A"
        }), " vary so much in performance?"]
      }), "* The heuristic is the differentiator. With h(v)=0, A* becomes Dijkstra (explores everything). With a perfect heuristic h(v)=true_cost(v,t), A* follows the optimal path directly. In between, the quality of h determines how many vertices are explored."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-4",
      children: "Advantages & Disadvantages"
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
            children: "Much faster than Dijkstra with a good heuristic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires domain knowledge to design heuristic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Guarantees optimality with admissible heuristic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory-heavy — stores entire explored frontier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible: works on grids, graphs, continuous spaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Admissible heuristic may be hard to find"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Widely used in games and robotics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inconsistent heuristics may re-explore nodes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Source = target"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path = [s]; 0 cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No path exists"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns empty path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Heuristic overestimates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May return suboptimal path (invalid admissible property)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inconsistent heuristic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May re-open closed nodes; correct but slower"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Large state space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A* memory becomes prohibitive; use IDA* (Iterative Deepening A*)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Admissibility:"
      }), " A heuristic ( h ) is admissible if ( h(v) \\le \\text{true cost}(v, t) ) for all ( v ). With an admissible heuristic, A* is guaranteed to find the optimal path."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Consistency (monotonicity):"
      }), " ( h(u) \\le w(u,v) + h(v) ). A consistent heuristic ensures A* never re-opens closed nodes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " A* with an admissible heuristic (never overestimates) guarantees optimality. For grid pathfinding, Manhattan distance is admissible. Euclidean distance is also admissible. Never use greedy best-first search unless optimality is not required."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " A* = Dijkstra + heuristic guidance. If h(v) = 0 for all v, A* degenerates to Dijkstra. If h(v) dominates, it becomes greedy."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " A* search combines actual distance with an admissible heuristic to find optimal paths faster than Dijkstra when a good heuristic is available."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "shortest-path-algorithm-comparison",
      children: "Shortest Path Algorithm Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criteria"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dijkstra"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bellman-Ford"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Floyd-Warshall"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DAG Shortest"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A*"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All-pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s-to-t"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge weights"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-negative only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any (detects neg cycles)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any (no neg cycles)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-negative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O((V+E) log V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V·E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Θ(V³)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V+E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E) to O(V log V)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Θ(V²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Negative cycles"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not handled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detected (diagonal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (acyclic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not handled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Heuristic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Graph type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DAG only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPS, network routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrage detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small dense graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Game pathfinding"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-what",
      children: "When to Use What"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Situation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended Algorithm"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single-source, non-negative weights, sparse graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dijkstra"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single-source, negative weights possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bellman-Ford"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Need distances between all pairs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Floyd-Warshall"
            }), " (dense) or ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "V×Dijkstra"
            }), " (sparse)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graph is guaranteed acyclic"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "DAG Shortest"
            }), " (linear time!)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single s-t path with good heuristic available"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A*"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Need to detect negative cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bellman-Ford"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Routing protocol (distributed computation)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Bellman-Ford"
            }), " (used in RIP)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Game character pathfinding on grid"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "A*"
            }), " with Manhattan distance"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very small graph (V < 100)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any; Floyd-Warshall simplest to code"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-how-do-you-detect-a-negative-cycle-using-bellman-ford",
      children: "Q1: How do you detect a negative cycle using Bellman-Ford?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run the standard V-1 relaxations, then run one more pass. If any edge can still be relaxed in the Vth iteration, a negative cycle exists reachable from the source."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation detail:"
      }), " The detection loop must check if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dist[u]"
      }), " is not INF before computing the sum — otherwise overflow or false positives may occur with large graphs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-can-dijkstra-handle-a-directed-acyclic-graph-dag-with-negative-weights",
      children: "Q2: Can Dijkstra handle a Directed Acyclic Graph (DAG) with negative weights?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "No."
      }), " Dijkstra assumes that once a vertex's distance is finalized (extracted from the priority queue), no shorter path will be found. A negative edge weight in a DAG violates this assumption. However, the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DAG Shortest Path"
      }), " algorithm (topological sort + relaxation) handles negative weights on DAGs in O(V+E) time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-reconstructing-the-shortest-path",
      children: "Q3: Reconstructing the shortest path"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All shortest-path algorithms can track a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "parent[]"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prev[]"
      }), " array:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize ", (0,jsx_runtime.jsx)(_components.code, {
          children: "parent[v] = -1"
        }), " for all vertices."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When relaxing edge (u,v): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; parent[v] = u; }"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "To reconstruct: start at destination, follow parent pointers back to source, then reverse."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge case:"
      }), " If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "parent[t] == -1"
      }), " (or the path vector is empty), no path exists."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-to-handle-graphs-with-negative-cycles-containing-source",
      children: "Q4: How to handle graphs with negative cycles containing source?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bellman-Ford detects this. If the source can reach a negative cycle, no shortest path exists for vertices reachable from that cycle — distances can be made arbitrarily small by looping."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution for interview:"
      }), " Mark all vertices affected by a negative cycle. After detecting the cycle, propagate the \"affected\" status via BFS/DFS from any vertex that was relaxed in the Vth iteration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-floyd-warshall-path-reconstruction",
      children: "Q5: Floyd-Warshall path reconstruction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "next[i][j]"
      }), " matrix initialized to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "next[i][j] = j"
      }), " for direct edges. When relaxing via k: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "next[i][j] = next[i][k]"
      }), ". After completion, follow ", (0,jsx_runtime.jsx)(_components.code, {
        children: "next[i][*]"
      }), " to reconstruct i→j path."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-dijkstra-on-unweighted-graph",
      children: "Q6: Dijkstra on unweighted graph"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BFS"
      }), " — it runs in O(V+E) vs Dijkstra's O((V+E) log V). BFS on an unweighted graph is effectively Dijkstra where every edge weight is 1."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "google-maps-and-gps-navigation",
      children: "Google Maps and GPS Navigation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      }), " Dijkstra (with optimizations) + A* for point-to-point routing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Google Maps models intersections as vertices and road segments as edges weighted by estimated travel time. A* with an admissible heuristic (straight-line distance / speed limit) guides the search. Modern implementations use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Contraction Hierarchies"
      }), " — a preprocessing technique that adds \"shortcut\" edges to skip through uninteresting intersections — reducing query time from seconds to milliseconds."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why not Bellman-Ford?"
      }), " Road networks have no negative edge weights (you cannot travel backward in time), so Dijkstra's faster complexity suffices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ospf-and-rip-routing-protocols",
      children: "OSPF and RIP Routing Protocols"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      }), " Dijkstra (OSPF) and Bellman-Ford (RIP)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Open Shortest Path First (OSPF)"
      }), " protocol uses Dijkstra to compute the shortest path tree from each router to all destinations. Each router maintains a complete map of the network topology (link-state database) and runs Dijkstra locally."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Routing Information Protocol (RIP)"
      }), " uses a distributed Bellman-Ford variant called the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bellman-Ford distance-vector algorithm"
      }), ". Routers exchange distance vectors with neighbors, \"relaxing\" routes one hop at a time. RIP's Bellman-Ford heritage gives it the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "count-to-infinity problem"
      }), " — a well-known convergence issue caused by the algorithm's slow propagation of negative information."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "airline-and-railway-scheduling",
      children: "Airline and Railway Scheduling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      }), " Floyd-Warshall (small networks) or DAG shortest path (dependency graphs)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Airlines compute shortest paths between all airport pairs to determine minimum flight times. With ~10,000 commercial airports worldwide, Floyd-Warshall (10¹² operations) is too slow, so they use repeated Dijkstra runs with preprocessing."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task scheduling"
      }), " in build systems (Make, Bazel) uses DAG shortest paths (or longest paths for critical path analysis). Each task is a vertex, dependencies are edges. The shortest path through the dependency DAG gives the minimum time to complete a build."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "video-game-pathfinding",
      children: "Video Game Pathfinding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      }), " A* (overwhelmingly dominant)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every major game engine — Unity, Unreal, Godot — implements A* for NPC movement. The grid map is a graph where each cell is a vertex. The heuristic is usually Manhattan distance or Euclidean distance. Hierarchical A* (HPA*) precomputes high-level paths across large maps, then refines locally."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "currency-arbitrage-detection",
      children: "Currency Arbitrage Detection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      }), " Bellman-Ford with log transformation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Currency arbitrage is a practical application of negative cycle detection. Convert exchange rates to logarithms: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "w(u,v) = -log(rate(u,v))"
      }), ". In this transformed graph, a negative cycle corresponds to an arbitrage opportunity. Bellman-Ford detects these cycles in O(V·E) time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "social-network-analysis",
      children: "Social Network Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      }), " Floyd-Warshall (small networks) or BFS (unweighted large networks)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LinkedIn's \"People You May Know\" and Facebook's friend recommendation use shortest-path distances. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "six degrees of separation"
      }), " is a shortest-path problem on the social graph. Floyd-Warshall on small subgraphs computes all-pair \"closeness\" metrics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weight Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Limitation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dijkstra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-negative only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O((V+E) log V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fails with negative weights"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bellman-Ford"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any (detects neg cycles)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(VE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow for large graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Floyd-Warshall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All-pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any (no neg cycles)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Θ(V³)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V²) memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAG Shortest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-source (DAG)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V+E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires acyclic graph"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s-t shortest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-negative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(E) practical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Needs admissible heuristic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Non-negative weights"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dijkstra — always use this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Negative weights"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bellman-Ford or SPFA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "All-pairs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Floyd-Warshall (dense) or V × Dijkstra (sparse)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DAG guaranteed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topological sort + relax — O(V+E)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Heuristic available"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A* with admissible heuristic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Detect negative cycle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bellman-Ford Vth iteration or Floyd diagonal"
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
            children: "Dijkstra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard shortest path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPS routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google Maps, network routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bellman-Ford"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negative cycle detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency arbitrage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Floyd-Warshall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small graph all-pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social network analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAG Shortest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build systems (Make)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common in AI questions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Game pathfinding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Navigation systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Video game AI, robotics"
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
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weights"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dijkstra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-negative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O((V+E) \\log V) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(V) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bellman-Ford"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any (detects negative cycles)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(VE) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(V) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Floyd-Warshall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All-pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any (no negative cycles)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( \\Theta(V^3) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( \\Theta(V^2) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAG shortest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(V+E) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(V) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s-t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-negative + heuristic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(E) ) in practice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(V) )"
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
      }), " Which algorithm guarantees the shortest path in a graph with negative weights?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Dijkstra"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Bellman-Ford"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) A* with a consistent heuristic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Prim's algorithm"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) Bellman-Ford handles negative weights and detects negative cycles. Dijkstra fails with negative weights.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What is the time complexity of Floyd-Warshall?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) O(V²)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) O(VE)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Θ(V³)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) O(E log V)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nC) Θ(V³) — triple nested loop over all vertices for the intermediate k and pairs (i,j).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What property must an A* heuristic have to guarantee optimality?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Monotonic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Admissible (never overestimates)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Consistent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Dominant"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) An admissible heuristic never overestimates the true cost to the goal, guaranteeing A* finds the optimal path.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " In Floyd-Warshall, why must k be the outermost loop?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It doesn't matter; any ordering works"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) To maximize cache performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The DP recurrence requires previous (k-1) values for all pairs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) To detect negative cycles earlier"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nC) d^{(k)}[i][j] depends on d^{(k-1)}[i][j], d^{(k-1)}[i][k], and d^{(k-1)}[k][j]. Using previous layer values ensures correctness.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " What does the Vth iteration of Bellman-Ford detect?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The shortest path to all vertices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Negative cycles reachable from the source"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Positive cycles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Whether the graph is connected"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) If any edge can still be relaxed in the Vth pass, a negative cycle is reachable from the source.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does Dijkstra fail with negative edge weights?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the purpose of the final pass in Bellman-Ford?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State the difference between admissible and consistent heuristics in A*."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why can DAG shortest paths achieve O(V+E) but Dijkstra needs O((V+E) log V)?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you modify Floyd-Warshall to detect negative cycles?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Dijkstra with predecessor tracking to reconstruct the shortest path."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run Bellman-Ford on a graph with a negative cycle and verify the detection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement DAG shortest path for task scheduling (critical path)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given a 10x10 grid with obstacles, implement A* with Manhattan distance heuristic."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Currency Arbitrage:"
        }), " Given exchange rates between N currencies, write a function that finds any arbitrage opportunity (negative cycle using log transformation + Bellman-Ford)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design an algorithm for the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "K shortest simple paths"
        }), " problem: find the K shortest paths between two vertices that do not share vertices. Analyze its complexity."]
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