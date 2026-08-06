"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[33175],{

/***/ 6903
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_data_structures_12_graph_traversals_md_a73_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-data-structures-12-graph-traversals-md-a73.json
const site_docs_courses_data_structures_12_graph_traversals_md_a73_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/data-structures/12-graph-traversals","title":"Chapter 12: Graph Traversals","description":"Prev Graphs | Next AVL Trees","source":"@site/docs/courses/data-structures/12-graph-traversals.md","sourceDirName":"courses/data-structures","slug":"/data-structures/12-graph-traversals","permalink":"/ai-engineering-journey/data-structures/12-graph-traversals","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"12-graph-traversals","slug":"/data-structures/12-graph-traversals","title":"Chapter 12: Graph Traversals","sidebar_label":"Chapter 12: Graph Traversals","sidebar_position":12},"sidebar":"coursesSidebar","previous":{"title":"Chapter 11: Graphs","permalink":"/ai-engineering-journey/data-structures/11-graphs"},"next":{"title":"Chapter 13: AVL Trees","permalink":"/ai-engineering-journey/data-structures/13-avl"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/data-structures/12-graph-traversals.md


const frontMatter = {
	id: '12-graph-traversals',
	slug: '/data-structures/12-graph-traversals',
	title: 'Chapter 12: Graph Traversals',
	sidebar_label: 'Chapter 12: Graph Traversals',
	sidebar_position: 12
};
const contentTitle = 'Chapter 12: Graph Traversals';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Graph Traversals Matter",
  "id": "why-graph-traversals-matter",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 3
}, {
  "value": "12.1 DFS — Recursive",
  "id": "121-dfs--recursive",
  "level": 2
}, {
  "value": "Definition",
  "id": "definition",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "12.2 DFS — Iterative",
  "id": "122-dfs--iterative",
  "level": 2
}, {
  "value": "Definition",
  "id": "definition-1",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-1",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-1",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-1",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-1",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 3
}, {
  "value": "12.3 BFS — Breadth-First Search",
  "id": "123-bfs--breadth-first-search",
  "level": 2
}, {
  "value": "Definition",
  "id": "definition-2",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-2",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-2",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-2",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-2",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 3
}, {
  "value": "12.4 Connected Components",
  "id": "124-connected-components",
  "level": 2
}, {
  "value": "Definition",
  "id": "definition-3",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-3",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-3",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-3",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-3",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 3
}, {
  "value": "12.5 Cycle Detection",
  "id": "125-cycle-detection",
  "level": 2
}, {
  "value": "Definition",
  "id": "definition-4",
  "level": 3
}, {
  "value": "Algorithm Steps — Undirected",
  "id": "algorithm-steps--undirected",
  "level": 3
}, {
  "value": "Algorithm Steps — Directed",
  "id": "algorithm-steps--directed",
  "level": 3
}, {
  "value": "Pseudocode — Undirected",
  "id": "pseudocode--undirected",
  "level": 3
}, {
  "value": "Pseudocode — Directed",
  "id": "pseudocode--directed",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run — Directed",
  "id": "step-by-step-dry-run--directed",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run — Undirected",
  "id": "step-by-step-dry-run--undirected",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-4",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-4",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 3
}, {
  "value": "12.6 Bipartite Graph Check",
  "id": "126-bipartite-graph-check",
  "level": 2
}, {
  "value": "Definition",
  "id": "definition-5",
  "level": 3
}, {
  "value": "Algorithm Steps (BFS)",
  "id": "algorithm-steps-bfs",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-4",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-5",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-5",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-5",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-5",
  "level": 3
}, {
  "value": "12.7 Topological Sort",
  "id": "127-topological-sort",
  "level": 2
}, {
  "value": "Definition",
  "id": "definition-6",
  "level": 3
}, {
  "value": "Algorithm Steps — Kahn&#39;s",
  "id": "algorithm-steps--kahns",
  "level": 3
}, {
  "value": "Algorithm Steps — DFS",
  "id": "algorithm-steps--dfs",
  "level": 3
}, {
  "value": "Pseudocode — Kahn&#39;s",
  "id": "pseudocode--kahns",
  "level": 3
}, {
  "value": "Pseudocode — DFS",
  "id": "pseudocode--dfs",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run — Kahn&#39;s",
  "id": "step-by-step-dry-run--kahns",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run — DFS",
  "id": "step-by-step-dry-run--dfs",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-6",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-6",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-6",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-6",
  "level": 3
}, {
  "value": "12.8 Strongly Connected Components (Kosaraju)",
  "id": "128-strongly-connected-components-kosaraju",
  "level": 2
}, {
  "value": "Definition",
  "id": "definition-7",
  "level": 3
}, {
  "value": "Kosaraju&#39;s Algorithm — Steps",
  "id": "kosarajus-algorithm--steps",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-5",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-5",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-7",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-7",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-7",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-7",
  "level": 3
}, {
  "value": "DFS vs BFS — Comprehensive Comparison",
  "id": "dfs-vs-bfs--comprehensive-comparison",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Common Questions",
  "id": "common-questions",
  "level": 3
}, {
  "value": "Pro Tips",
  "id": "pro-tips",
  "level": 3
}, {
  "value": "Common Pitfalls",
  "id": "common-pitfalls",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "One-Sentence Takeaways",
  "id": "one-sentence-takeaways",
  "level": 2
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Quick Reference: Traversal Use Cases",
  "id": "quick-reference-traversal-use-cases",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Common Mistakes &amp; GFG Deepening",
  "id": "common-mistakes--gfg-deepening",
  "level": 2
}, {
  "value": "Common Mistakes (GFG-Style)",
  "id": "common-mistakes-gfg-style",
  "level": 3
}, {
  "value": "TypeScript BFS &amp; DFS Implementations",
  "id": "typescript-bfs--dfs-implementations",
  "level": 3
}, {
  "value": "Additional MCQs (GFG Pattern)",
  "id": "additional-mcqs-gfg-pattern",
  "level": 3
}, {
  "value": "Additional Exercises (GFG Pattern)",
  "id": "additional-exercises-gfg-pattern",
  "level": 3
}, {
  "value": "Traversal Comparison",
  "id": "traversal-comparison",
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
  "value": "Challenge Problems",
  "id": "challenge-problems",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
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
    section: "section",
    span: "span",
    strong: "strong",
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
        id: "chapter-12-graph-traversals",
        children: "Chapter 12: Graph Traversals"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prev:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/data-structures/11-graphs",
        children: "Chapter 11: Graphs"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/data-structures/13-avl",
        children: "Chapter 13: AVL Trees"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " BFS finds shortest paths in unweighted graphs; DFS excels at connectivity analysis and topological sorting."]
      }), "\n"]
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
        href: "../../assets/images/lessons/data-structures/12-graph-traversals/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/12-graph-traversals/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/data-structures/12-graph-traversals/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/12-graph-traversals/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/data-structures/12-graph-traversals/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/12-graph-traversals/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Breadth-First Search (BFS) and Depth-First Search (DFS) — recursive and iterative."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find connected components in undirected graphs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect cycles in directed and undirected graphs using DFS."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine whether a graph is bipartite using BFS two-coloring."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute topological ordering using Kahn's algorithm and DFS-based post-order."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find strongly connected components using Kosaraju's algorithm."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-graph-traversals-matter",
      children: "Why Graph Traversals Matter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Imagine you're exploring a massive underground cave system. You have two strategies:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BFS-style:"
          }), " Explore all tunnels that are 1 minute from the entrance first, then all tunnels 2 minutes away, then 3 minutes — systematically expanding outward like ripples in a pond. This is how GPS navigation finds the shortest route: it explores all intersections one turn away, then two turns away, until it reaches the destination."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DFS-style:"
          }), " Pick a tunnel and follow it as deep as possible until you hit a dead end, then backtrack and try the next tunnel. This is how a maze-solving robot works — commit to a path, go all the way, then try another."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Graph traversals power: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "web crawling"
      }), " (Google discovers pages level by level), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "social recommendations"
      }), " (LinkedIn \"people you may know\" uses BFS for distance-2 connections), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPS navigation"
      }), " (shortest paths), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dependency resolution"
      }), " (npm/yarn topological sort), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "garbage collection"
      }), " (JVM mark-and-sweep uses DFS), and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "constraint solving"
      }), " (topological ordering for build systems). Without traversals, no search engine, no navigation, no package managers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "BFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level-order traversal using a queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shortest path in unweighted graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DFS Recursive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depth-first via call stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplest implementation for connectivity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DFS Iterative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit stack avoids recursion depth limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production-safe for large graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Topological sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear ordering of DAG vertices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency resolution, build systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cycle detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Back edge in directed, visited non-parent in undirected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deadlock detection, invalid graph validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connected components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertices reachable within same component"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cluster analysis, graph partitioning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bipartite checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-coloring with BFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matching problems, resource allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strongly connected components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutual reachability in directed graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recommendation systems, web communities"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\nflowchart TD\nA[Graph Traversal] --> B{BFS or DFS?}\nB --> C[BFS - Queue]\nB --> D[DFS - Stack/Recursion]\nC --> E[Shortest Path Unweighted]\nC --> F[Bipartite Check]\nD --> G[Topological Sort]\nD --> H[Cycle Detection]\nD --> I[Strongly Connected Components]\nD --> J[DFS Iterative]\nD --> K[Connected Components]\nE --> L[Applications]\nG --> L\nH --> L\nI --> L\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "121-dfs--recursive",
      children: "12.1 DFS — Recursive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Solving a maze by always keeping your right hand on the wall. You follow the wall as deep as it goes, and when you hit a dead end, you backtrack along your path until you find an unexplored branch. You eventually explore every corridor — but not in order of distance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Depth-First Search (DFS) explores as far as possible along each branch before backtracking. It uses recursion (implicitly the call stack) to remember which vertices to visit next. The algorithm marks vertices as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "visited"
      }), " to avoid infinite loops in cyclic graphs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark the starting vertex as visited."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process the vertex (print/record)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each unvisited neighbor, recursively call DFS on that neighbor."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When all neighbors are visited, backtrack to the previous caller."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat until all reachable vertices from the source are visited."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["\\", (0,jsx_runtime.jsx)(_components.br, {}), "\nDFS(G, v):\nvisited[v] = true\nprocess(v)\nfor each neighbor u of v in G:\nif not visited[u]:\nDFS(G, u)\n\\\\"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Input graph (undirected):\n\\", (0,jsx_runtime.jsx)(_components.br, {}), "\n0 --- 1 --- 3 --- 4\n|           |\n2 --- 5     |\n|\n6\n\\\\"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edges: (0,1), (0,2), (1,3), (2,5), (3,4), (5,6)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Start: vertex 0. Neighbors visited in ascending order."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Call Stack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "v"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "visited[] (T=marked)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 0, go to neighbor 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 1, go to neighbor 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,1,3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 3, go to neighbor 4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,1,3,4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,3,4}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 4, no unvisited neighbors, backtrack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,1,3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3's neighbors done, backtrack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1's neighbors done, backtrack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next unvisited neighbor: 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2,3,4}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 2, go to neighbor 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,2,5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2,3,4,5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 5, go to neighbor 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,2,5,6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2,3,4,5,6}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 6, dead end, backtrack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,2,5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "all visited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backtrack through [2], [0], done"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DFS Order:"
      }), " 0, 1, 3, 4, 2, 5, 6"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V + E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each vertex processed once, each edge examined once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursion stack (worst: linear chain) + visited array"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(V + E)?"
      }), " Each vertex is processed exactly once (V operations). Each edge is examined exactly once in an undirected graph (2E times in adjacency list — each direction is examined from its source vertex). Summed: V + E total operations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why not O(V²)?"
      }), " With adjacency lists we only examine existing edges, not all possible edges. An adjacency matrix would require O(V²) because each vertex would check all V columns for possible edges."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(V) space?"
      }), " In a linear chain of V vertices, the recursion depth reaches V. DFS from the first vertex goes V levels deep before the first backtrack."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\cpp\n// C++ — Recursive DFS\n#include <iostream>\n#include <vector>\n#include <list>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class Graph {\nint V;\nstd::vector<std::list<int>> adj;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void dfsUtil(int v, std::vector&lt;bool&gt;& visited) {\n    visited[v] = true;\n    std::cout &lt;< v << \" \";\n    for (int u : adj[v]) {\n        if (!visited[u])\n            dfsUtil(u, visited);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "public:\nGraph(int n) : V(n) { adj.resize(V); }\nvoid addEdge(int u, int v) {\nadj[u].push_back(v);\nadj[v].push_back(u);\n}\nvoid dfs(int s) {\nstd::vector<bool> visited(V, false);\ndfsUtil(s, visited);\nstd::cout << \"\\n\";\n}\n};\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\python"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "python--recursive-dfs",
      children: "Python — Recursive DFS"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["class Graph:\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "init"
      }), "(self, n):\nself.V = n\nself.adj = [[] for _ in range(n)]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def add_edge(self, u, v):\n    self.adj[u].append(v)\n    self.adj[v].append(u)\n\ndef _dfs_util(self, v, visited):\n    visited[v] = True\n    print(v, end=\" \")\n    for u in self.adj[v]:\n        if not visited[u]:\n            self._dfs_util(u, visited)\n\ndef dfs(self, s):\n    visited = [False] * self.V\n    self._dfs_util(s, visited)\n    print()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\java\n// Java — Recursive DFS\nimport java.util.*;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class Graph {\nprivate int V;\nprivate List<List<Integer>> adj;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Graph(int n) {\n    V = n;\n    adj = new ArrayList&lt;>(V);\n    for (int i = 0; i &lt; V; i++) adj.add(new ArrayList<&gt;());\n}\n\nvoid addEdge(int u, int v) {\n    adj.get(u).add(v);\n    adj.get(v).add(u);\n}\n\nprivate void dfsUtil(int v, boolean[] visited) {\n    visited[v] = true;\n    System.out.print(v + \" \");\n    for (int u : adj.get(v))\n        if (!visited[u]) dfsUtil(u, visited);\n}\n\nvoid dfs(int s) {\n    boolean[] visited = new boolean[V];\n    dfsUtil(s, visited);\n    System.out.println();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages",
      children: "Advantages & Disadvantages"
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
            children: "Simple, elegant recursive implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow on deep graphs (O(V) recursion depth)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Low memory per edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can get stuck going very deep in large graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Natural for connectivity and cycle detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doesn't guarantee shortest paths"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disconnected graph:"
        }), " DFS from a source only visits one component. Loop over all vertices for full coverage."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single vertex:"
        }), " Immediate return after marking visited."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cycle:"
        }), " Visited array prevents infinite loops."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty graph (V=0):"
        }), " No vertices to traverse."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "122-dfs--iterative",
      children: "12.2 DFS — Iterative"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A hiker exploring trails using a stack of sticky notes. At each junction, the hiker writes all unexplored branches on notes and stacks them. The top note dictates the next path. When a trail ends, the hiker picks the top note from the stack. This avoids deep mental recursion — practical for long expeditions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-1",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Iterative DFS uses an explicit stack (LIFO) instead of the call stack. This avoids recursion depth limits. The key structural difference from BFS: we use a stack instead of a queue."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-1",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create an empty stack. Push the starting vertex and mark it visited."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "While the stack is not empty:\na. Pop the top vertex from the stack.\nb. Process the vertex.\nc. For each unvisited neighbor, mark it visited and push it onto the stack."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["\\", (0,jsx_runtime.jsx)(_components.br, {}), "\nDFS_Iterative(G, s):\nvisited[s] = true\nstack.push(s)\nwhile stack is not empty:\nv = stack.pop()\nprocess(v)\nfor each neighbor u of v:\nif not visited[u]:\nvisited[u] = true\nstack.push(u)\n\\\\"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-1",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Same graph: 0-1-3-4 / 0-2-5-6"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Start: vertex 0."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack (top→bottom)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pop"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "visited[]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop 0, process. Push neighbors 1, 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2, 1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pushed 1 and 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop 1, process. Push neighbor 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2, 3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2,3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pushed 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop 3, process. Push neighbor 4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2, 4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2,3,4}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pushed 4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop 4, process. No new neighbors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop 2, process. Push neighbor 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2,3,4,5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pushed 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop 5, process. Push neighbor 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2,3,4,5,6}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pushed 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop 6, process. Stack empty"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DFS Order:"
      }), " 0, 1, 3, 4, 2, 5, 6"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " To match recursive DFS order exactly, push neighbors in reverse order (largest index first so smallest is popped first)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V + E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each vertex popped once, each edge examined once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack + visited array"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why same complexity as recursive DFS?"
      }), " The algorithm does the same number of operations — each vertex pushed/popped once, each edge examined once. The only difference is where memory is allocated (heap vs call stack)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-1",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\cpp\n// C++ — Iterative DFS\nvoid dfsIterative(int s, const std::vector<std::list<int>>& adj) {\nint V = adj.size();\nstd::vector<bool> visited(V, false);\nstd::stack<int> st;\nvisited[s] = true;\nst.push(s);\nwhile (!st.empty()) {\nint v = st.top(); st.pop();\nstd::cout << v << \" \";\nfor (int u : adj[v]) {\nif (!visited[u]) {\nvisited[u] = true;\nst.push(u);\n}\n}\n}\nstd::cout << \"\\n\";\n}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\python"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "python--iterative-dfs",
      children: "Python — Iterative DFS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def dfs_iterative(adj, s):\nV = len(adj)\nvisited = [False] * V\nstack = [s]\nvisited[s] = True\nwhile stack:\nv = stack.pop()\nprint(v, end=\" \")\nfor u in adj[v]:\nif not visited[u]:\nvisited[u] = True\nstack.append(u)\nprint()\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\java\n// Java — Iterative DFS\nvoid dfsIterative(List<List<Integer>> adj, int s) {\nint V = adj.size();\nboolean[] visited = new boolean[V];\nStack<Integer> stack = new Stack<>();\nvisited[s] = true;\nstack.push(s);\nwhile (!stack.isEmpty()) {\nint v = stack.pop();\nSystem.out.print(v + \" \");\nfor (int u : adj.get(v)) {\nif (!visited[u]) {\nvisited[u] = true;\nstack.push(u);\n}\n}\n}\nSystem.out.println();\n}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-1",
      children: "Advantages & Disadvantages"
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
            children: "No recursion depth limit — safe for large graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More code than recursive version"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit control over traversal order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May produce different order than recursion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory usage on heap, not call stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must carefully manage neighbor ordering"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deep linear chain:"
        }), " Explicit stack on the heap avoids stack overflow — production-safe for graphs with 10^6+ depth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Same as recursive DFS"
        }), " for disconnected, single-node, cycle, and empty graph cases."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "123-bfs--breadth-first-search",
      children: "12.3 BFS — Breadth-First Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Dropping a stone into a still pond. Ripples spread outward in concentric circles. BFS visits all vertices at distance 1 from the source, then distance 2, then 3, exactly like GPS navigation: explore all roads one turn away, then two turns, until the destination is found. The path to any vertex is guaranteed to use the minimum number of edges."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-2",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BFS visits vertices in order of increasing distance from the source using a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "queue"
      }), " (FIFO). Vertices closer to the source are processed before farther ones. BFS is the traversal of choice for shortest paths in unweighted graphs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-2",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark the starting vertex visited with distance 0 and enqueue it."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "While the queue is not empty:\na. Dequeue the front vertex.\nb. Process the vertex.\nc. For each unvisited neighbor: mark it visited, set its distance = current + 1, enqueue it."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["\\", (0,jsx_runtime.jsx)(_components.br, {}), "\nBFS(G, s):\nvisited[s] = true\ndistance[s] = 0\nqueue.enqueue(s)\nwhile queue is not empty:\nv = queue.dequeue()\nprocess(v)\nfor each neighbor u of v:\nif not visited[u]:\nvisited[u] = true\ndistance[u] = distance[v] + 1\nqueue.enqueue(u)\n\\\\"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-2",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graph: 0-1-3-4 / 0-2-5-6"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Start: vertex 0."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Queue (front→back)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dequeue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "visited[]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dist[]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dist[0]=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enqueue 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dequeue 0, enqueue 1,2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1,2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dist[1]=1, dist[2]=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enqueued neighbors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dequeue 1, enqueue 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2,3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2,3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dist[3]=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enqueued 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dequeue 2, enqueue 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3,5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2,3,5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dist[5]=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enqueued 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dequeue 3, enqueue 4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5,4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2,3,4,5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dist[4]=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enqueued 4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dequeue 5, enqueue 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4,6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2,3,4,5,6}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dist[6]=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enqueued 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dequeue 4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dequeue 6, queue empty"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BFS Order:"
      }), " 0, 1, 2, 3, 5, 4, 6\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Distances:"
      }), " [0:0, 1:1, 2:1, 3:2, 5:2, 4:3, 6:3]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V + E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each vertex enqueued/dequeued once, each edge examined once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue (holds up to V vertices) + visited array"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(V + E)?"
      }), " Each vertex is enqueued once and dequeued once — O(V) operations. For each dequeued vertex, we examine its adjacency list. Summed over all vertices, this is O(E) work. Total: O(V + E)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BFS queue vs DFS stack:"
      }), " BFS's queue grows to the \"width\" of the graph (worst: O(V) for a star graph where the center is processed and all leaves are enqueued). DFS's stack grows to the \"depth\" (worst: O(V) for a chain). Both are O(V) worst-case but BFS tends to use more memory on wide graphs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-2",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\cpp\n// C++ — BFS\n#include <queue>\nstd::vector<int> bfs(int s, const std::vector<std::list<int>>& adj) {\nint V = adj.size();\nstd::vector<int> dist(V, -1);\nstd::queue<int> q;\ndist[s] = 0;\nq.push(s);\nwhile (!q.empty()) {\nint v = q.front(); q.pop();\nfor (int u : adj[v]) {\nif (dist[u] == -1) {\ndist[u] = dist[v] + 1;\nq.push(u);\n}\n}\n}\nreturn dist;\n}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\python"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "python--bfs",
      children: "Python — BFS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "from collections import deque"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def bfs(adj, s):\nV = len(adj)\ndist = [-1] * V\nq = deque([s])\ndist[s] = 0\nwhile q:\nv = q.popleft()\nfor u in adj[v]:\nif dist[u] == -1:\ndist[u] = dist[v] + 1\nq.append(u)\nreturn dist\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\java\n// Java — BFS\nList<Integer> bfs(List<List<Integer>> adj, int s) {\nint V = adj.size();\nList<Integer> dist = new ArrayList<>(Collections.nCopies(V, -1));\nQueue<Integer> q = new LinkedList<>();\ndist.set(s, 0);\nq.offer(s);\nwhile (!q.isEmpty()) {\nint v = q.poll();\nfor (int u : adj.get(v)) {\nif (dist.get(u) == -1) {\ndist.set(u, dist.get(v) + 1);\nq.offer(u);\n}\n}\n}\nreturn dist;\n}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-2",
      children: "Advantages & Disadvantages"
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
            children: "Shortest path in unweighted graphs (guaranteed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue can grow large — more memory than DFS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Level-order traversal useful for many apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot directly do topological sort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No recursion — safe for any depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not as natural for deep connectivity problems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disconnected graph:"
        }), " BFS from a source reaches one component. Use outer loop for all components."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single vertex:"
        }), " Dequeued immediately, distance 0."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cycle:"
        }), " Visited array prevents re-queuing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "High branching factor:"
        }), " Queue may hold most of the graph simultaneously."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "124-connected-components",
      children: "12.4 Connected Components"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " An archipelago of islands connected by bridges. Islands reachable from each other via bridges form one group (component). Finding connected components tells you how many distinct archipelagos exist. On Facebook, connected components represent groups of users who can reach each other through friend connections — isolated groups of friends."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-3",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "connected component"
      }), " in an undirected graph is a maximal set of vertices where every pair is connected by some path. Algorithm: run DFS/BFS from each unvisited vertex; each new traversal discovers one component."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-3",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize component_id array to -1 (unassigned)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each vertex v: if component_id[v] == -1, start a new component."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run DFS/BFS from v, labeling all reachable vertices with current_id."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Increment current_id and continue."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["\\", (0,jsx_runtime.jsx)(_components.br, {}), "\nFindComponents(G):\ncomp = array[V] initialized to -1\nid = 0\nfor each vertex v in G:\nif comp[v] == -1:\nDFS_Label(G, v, comp, id)\nid++\nreturn comp"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DFS_Label(G, v, comp, id):\ncomp[v] = id\nfor each neighbor u of v:\nif comp[u] == -1:\nDFS_Label(G, u, comp, id)\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-3",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Graph with two components:\n\\", (0,jsx_runtime.jsx)(_components.br, {}), "\nComponent 0:     Component 1:\n0 --- 1         4 --- 5\n|                     |\n2                     6\n|\n3\n\\\\"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "v"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "comp[]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, -1, -1, -1, -1, -1, -1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start DFS from 0, label id=0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (via 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 0, -1, -1, -1, -1, -1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS visits 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (via 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 0, 0, -1, -1, -1, -1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS visits 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (via 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 0, 0, 0, -1, -1, -1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS visits 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "backtrack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Component 0 complete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,0,0,0, 1, -1, -1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start new DFS, label id=1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 (via 4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,0,0,0, 1, 1, -1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS visits 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 (via 5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,0,0,0, 1, 1, 1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS visits 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "backtrack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Component 1 complete"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Components:"
      }), " Component 0 = {0,1,2,3}, Component 1 = {4,5,6}"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V + E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each vertex/edge examined once total across all DFS calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "comp array + recursion stack"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(V + E) total?"
      }), " The outer loop visits each vertex exactly once. Each DFS call only processes unvisited vertices. An edge is examined only when its source vertex is processed. Every vertex and edge is processed exactly once in total — regardless of how many components exist. This is a key property: even with 100 components, we still do O(V + E) total work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-3",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\cpp\n// C++ — Connected Components (Iterative DFS)\nint findComponents(const std::vector<std::list<int>>& adj,\nstd::vector<int>& comp) {\nint V = adj.size();\ncomp.assign(V, -1);\nint id = 0;\nfor (int v = 0; v < V; ++v) {\nif (comp[v] == -1) {\nstd::stack<int> st;\nst.push(v);\ncomp[v] = id;\nwhile (!st.empty()) {\nint u = st.top(); st.pop();\nfor (int w : adj[u])\nif (comp[w] == -1) {\ncomp[w] = id;\nst.push(w);\n}\n}\n++id;\n}\n}\nreturn id; // number of components\n}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\python"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "python--connected-components",
      children: "Python — Connected Components"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def find_components(adj):\nV = len(adj)\ncomp = [-1] * V\ncur_id = 0\nfor v in range(V):\nif comp[v] == -1:\nstack = [v]\ncomp[v] = cur_id\nwhile stack:\nu = stack.pop()\nfor w in adj[u]:\nif comp[w] == -1:\ncomp[w] = cur_id\nstack.append(w)\ncur_id += 1\nreturn comp, cur_id\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\java\n// Java — Connected Components\nint[] findComponents(List<List<Integer>> adj) {\nint V = adj.size();\nint[] comp = new int[V];\nArrays.fill(comp, -1);\nint id = 0;\nfor (int v = 0; v < V; v++) {\nif (comp[v] == -1) {\nStack<Integer> st = new Stack<>();\nst.push(v);\ncomp[v] = id;\nwhile (!st.isEmpty()) {\nint u = st.pop();\nfor (int w : adj.get(u))\nif (comp[w] == -1) {\ncomp[w] = id;\nst.push(w);\n}\n}\nid++;\n}\n}\nreturn comp;\n}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-3",
      children: "Advantages & Disadvantages"
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
            children: "Simple extension of DFS/BFS — O(V + E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only for undirected graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works for any graph representation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directed graphs need SCC algorithms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for clustering and graph analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty graph (V=0):"
        }), " 0 components."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single isolated vertex:"
        }), " 1 component of size 1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fully connected:"
        }), " 1 component."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All isolated vertices:"
        }), " V components."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "125-cycle-detection",
      children: "12.5 Cycle Detection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A package dependency system (npm/pip). Package A requires B, B requires C, C requires A — circular dependency creates a deadlock where none can install first. Spreadsheet formulas that create a circular reference (A1 = B1+1, B1 = A1+1) trigger an error. Cycle detection catches these impossible configurations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-4",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cycle"
      }), " is a path of length >= 3 that starts and ends at the same vertex with no repeated edges. Detection differs by graph type:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Undirected:"
        }), " Edge to a visited vertex that is NOT the parent of the current vertex in the DFS tree = cycle."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Directed:"
        }), " Edge to a vertex on the current DFS recursion stack = \"back edge\" = cycle."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps--undirected",
      children: "Algorithm Steps — Undirected"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each unvisited vertex, start DFS with parent = -1."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each neighbor:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If unvisited: recursively visit with current as parent."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If visited AND neighbor != parent: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "cycle detected"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps--directed",
      children: "Algorithm Steps — Directed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each unvisited vertex, start DFS."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark current vertex visited AND add to recStack."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each neighbor:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If unvisited: recursively visit."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If visited AND on recStack: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "back edge -> cycle detected"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove current from recStack before returning."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode--undirected",
      children: "Pseudocode — Undirected"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["\\", (0,jsx_runtime.jsx)(_components.br, {}), "\nHasCycleUndirected(G):\nvisited = [false] * V\nfor each vertex v:\nif not visited[v]:\nif DFS_Cycle_Undirected(G, v, -1, visited):\nreturn true\nreturn false"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DFS_Cycle_Undirected(G, v, parent, visited):\nvisited[v] = true\nfor each neighbor u of v:\nif not visited[u]:\nif DFS_Cycle_Undirected(G, u, v, visited):\nreturn true\nelse if u != parent:\nreturn true   // cycle\nreturn false\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode--directed",
      children: "Pseudocode — Directed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["\\", (0,jsx_runtime.jsx)(_components.br, {}), "\nHasCycleDirected(G):\nvisited = [false] * V\nrecStack = [false] * V\nfor each vertex v:\nif not visited[v]:\nif DFS_Cycle_Directed(G, v, visited, recStack):\nreturn true\nreturn false"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DFS_Cycle_Directed(G, v, visited, recStack):\nvisited[v] = true\nrecStack[v] = true\nfor each neighbor u of v:\nif not visited[u]:\nif DFS_Cycle_Directed(G, u, visited, recStack):\nreturn true\nelse if recStack[u]:\nreturn true   // back edge\nrecStack[v] = false\nreturn false\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run--directed",
      children: "Step-by-Step Dry Run — Directed"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graph: 0 -> 1 -> 2 -> 0"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Call Stack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "v"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "visited[]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "recStack[]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start DFS from 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0→1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse to 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,1,2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1→2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse to 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,1,2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2→0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2→0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["0 visited AND in recStack -> ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "back edge"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Return true — cycle exists"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run--undirected",
      children: "Step-by-Step Dry Run — Undirected"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graph: 0-1-2-0 (triangle)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Call Stack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "v"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "parent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "visited[]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start DFS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse to 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,1,2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse to 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,1,2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2→0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["0 visited AND 0 != parent(1) -> ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "cycle"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V + E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single DFS pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "visited + recStack (directed) + recursion stack"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(V + E)?"
      }), " Each vertex is visited once. Each edge is examined once. The recStack check is O(1) — a simple array lookup. Adding the parent parameter for undirected doesn't change the complexity. This is optimal — you cannot detect a cycle without examining at least V + E elements in the worst case."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-4",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\cpp\n// C++ — Cycle Detection (Directed)\nbool hasCycleDirected(const std::vector<std::list<int>>& adj) {\nint V = adj.size();\nstd::vector<bool> visited(V, false), recStack(V, false);\nstd::function<bool(int)> dfs = [&](int v) -> bool {\nvisited[v] = recStack[v] = true;\nfor (int u : adj[v]) {\nif (!visited[u]) { if (dfs(u)) return true; }\nelse if (recStack[u]) return true;\n}\nrecStack[v] = false;\nreturn false;\n};\nfor (int v = 0; v < V; ++v)\nif (!visited[v] && dfs(v)) return true;\nreturn false;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// C++ — Cycle Detection (Undirected)\nbool hasCycleUndirected(const std::vector<std::list<int>>& adj) {\nint V = adj.size();\nstd::vector<bool> visited(V, false);\nstd::function<bool(int, int)> dfs = [&](int v, int p) -> bool {\nvisited[v] = true;\nfor (int u : adj[v]) {\nif (!visited[u]) { if (dfs(u, v)) return true; }\nelse if (u != p) return true;\n}\nreturn false;\n};\nfor (int v = 0; v < V; ++v)\nif (!visited[v] && dfs(v, -1)) return true;\nreturn false;\n}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\python"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "python--cycle-detection-directed",
      children: "Python — Cycle Detection (Directed)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def has_cycle_directed(adj):\nV = len(adj)\nvisited = [False] * V\nrec_stack = [False] * V"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def dfs(v):\n    visited[v] = rec_stack[v] = True\n    for u in adj[v]:\n        if not visited[u]:\n            if dfs(u): return True\n        elif rec_stack[u]: return True\n    rec_stack[v] = False\n    return False\n\nfor v in range(V):\n    if not visited[v] and dfs(v): return True\nreturn False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "python--cycle-detection-undirected",
      children: "Python — Cycle Detection (Undirected)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def has_cycle_undirected(adj):\nV = len(adj)\nvisited = [False] * V"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def dfs(v, parent):\n    visited[v] = True\n    for u in adj[v]:\n        if not visited[u]:\n            if dfs(u, v): return True\n        elif u != parent: return True\n    return False\n\nfor v in range(V):\n    if not visited[v] and dfs(v, -1): return True\nreturn False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\java\n// Java — Cycle Detection (Directed)\nboolean hasCycleDirected(List<List<Integer>> adj) {\nint V = adj.size();\nboolean[] visited = new boolean[V];\nboolean[] recStack = new boolean[V];\nfor (int v = 0; v < V; v++)\nif (!visited[v] && dfsDirected(v, adj, visited, recStack))\nreturn true;\nreturn false;\n}\nboolean dfsDirected(int v, List<List<Integer>> adj,\nboolean[] visited, boolean[] recStack) {\nvisited[v] = recStack[v] = true;\nfor (int u : adj.get(v)) {\nif (!visited[u]) { if (dfsDirected(u, adj, visited, recStack)) return true; }\nelse if (recStack[u]) return true;\n}\nrecStack[v] = false;\nreturn false;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Java — Cycle Detection (Undirected)\nboolean hasCycleUndirected(List<List<Integer>> adj) {\nint V = adj.size();\nboolean[] visited = new boolean[V];\nfor (int v = 0; v < V; v++)\nif (!visited[v] && dfsUndirected(v, -1, adj, visited))\nreturn true;\nreturn false;\n}\nboolean dfsUndirected(int v, int parent, List<List<Integer>> adj,\nboolean[] visited) {\nvisited[v] = true;\nfor (int u : adj.get(v)) {\nif (!visited[u]) { if (dfsUndirected(u, v, adj, visited)) return true; }\nelse if (u != parent) return true;\n}\nreturn false;\n}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-4",
      children: "Advantages & Disadvantages"
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
            children: "Single DFS pass — efficient O(V + E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursion stack can overflow for deep graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works for both directed and undirected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directed version needs additional recStack array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple extension of standard DFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undirected version needs parent tracking"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-loop:"
        }), " edge from vertex to itself is a cycle. In undirected check, the parent check would miss a self-loop (u == parent catches it? No, u == v is the self-loop case). Handle by checking u == v explicitly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parallel edges:"
        }), " Two edges between the same vertices form a cycle of length 2 in undirected graphs (u-v-u)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single vertex:"
        }), " No possible cycle."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disconnected DAGs:"
        }), " Each component checked individually by the outer loop."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "126-bipartite-graph-check",
      children: "12.6 Bipartite Graph Check"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A school assigns students to two classrooms for an exam. Students who know each other must sit in different rooms to prevent cheating. Can we color every student red or blue such that no adjacent students share a color? This is the bipartite problem. Real applications: scheduling conflicts into time slots, frequency assignment in wireless networks (adjacent cells get different frequencies), job matching."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-5",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A graph is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bipartite"
      }), " if vertices can be divided into two disjoint sets such that every edge connects vertices from different sets. Equivalently: 2-colorable with no adjacent vertices sharing a color. A graph is bipartite ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "iff"
      }), " it contains no odd-length cycles."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-bfs",
      children: "Algorithm Steps (BFS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize color array to -1 (uncolored)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each vertex v (to handle disconnected graphs):\na. If color[v] == -1, set color[v] = 0 and enqueue v.\nb. While queue not empty:\ni. Dequeue u.\nii. For each neighbor w:\n- If color[w] == -1: color[w] = 1 - color[u], enqueue w.\n- If color[w] == color[u]: NOT bipartite."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["\\", (0,jsx_runtime.jsx)(_components.br, {}), "\nIsBipartite(G):\ncolor = array[V] initialized to -1\nfor each vertex v:\nif color[v] == -1:\nqueue.enqueue(v)\ncolor[v] = 0\nwhile queue is not empty:\nu = queue.dequeue()\nfor each neighbor w of u:\nif color[w] == -1:\ncolor[w] = 1 - color[u]\nqueue.enqueue(w)\nelse if color[w] == color[u]:\nreturn false\nreturn true\n\\\\"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-4",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Graph (bipartite — 4-cycle):\n\\", (0,jsx_runtime.jsx)(_components.br, {}), "\n0 --- 1\n|     |\n3 --- 2\n\\\\"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Queue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "v"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "color[]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, -1, -1, -1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Color 0 as 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1,3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1, -1, 1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enqueue 1 (color 1), 3 (color 1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1's neighbor 2 (uncolored -> color 0)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1, -1, 1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3's neighbors: 0 (color 0, diff), 2 (color -1 -> color 0)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1, 0, 1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2's neighbors: 1 (color 1, diff), 3 (color 1, diff)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "All OK — graph IS bipartite"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Now test a triangle (3-cycle — NOT bipartite):\n\\", (0,jsx_runtime.jsx)(_components.br, {}), "\n0 --- 1\n\\   /\n2\n\\\\"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Queue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "v"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "color[]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, -1, -1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Color 0 = 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1,2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1, 1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Color 1=1, 2=1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["neighbor 2: color[2]=1 == color[1]=1 -> ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conflict!"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Triangle has odd cycle — NOT bipartite."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-5",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V + E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS visits each vertex/edge once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Color array + queue"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(V + E)?"
      }), " This is a standard BFS traversal, possibly restarted for disconnected components. Each vertex is enqueued once, each edge examined once. The color check is an O(1) array access. No extra passes needed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why does it detect odd cycles?"
      }), " A graph has an odd cycle iff it's not bipartite. The BFS coloring will detect a color conflict exactly when two vertices at odd distance from each other are forced to share a color — which happens precisely when there's an odd-length cycle."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-5",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\cpp\n// C++ — Bipartite Check (BFS)\nbool isBipartite(const std::vector<std::list<int>>& adj) {\nint V = adj.size();\nstd::vector<int> color(V, -1);\nfor (int v = 0; v < V; ++v) {\nif (color[v] == -1) {\nstd::queue<int> q;\ncolor[v] = 0;\nq.push(v);\nwhile (!q.empty()) {\nint u = q.front(); q.pop();\nfor (int w : adj[u]) {\nif (color[w] == -1) {\ncolor[w] = 1 - color[u];\nq.push(w);\n} else if (color[w] == color[u]) {\nreturn false;\n}\n}\n}\n}\n}\nreturn true;\n}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\python"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "python--bipartite-check-bfs",
      children: "Python — Bipartite Check (BFS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "from collections import deque"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def is_bipartite(adj):\nV = len(adj)\ncolor = [-1] * V\nfor v in range(V):\nif color[v] == -1:\nq = deque([v])\ncolor[v] = 0\nwhile q:\nu = q.popleft()\nfor w in adj[u]:\nif color[w] == -1:\ncolor[w] = 1 - color[u]\nq.append(w)\nelif color[w] == color[u]:\nreturn False\nreturn True\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\java\n// Java — Bipartite Check (BFS)\nboolean isBipartite(List<List<Integer>> adj) {\nint V = adj.size();\nint[] color = new int[V];\nArrays.fill(color, -1);\nfor (int v = 0; v < V; v++) {\nif (color[v] == -1) {\nQueue<Integer> q = new LinkedList<>();\ncolor[v] = 0;\nq.offer(v);\nwhile (!q.isEmpty()) {\nint u = q.poll();\nfor (int w : adj.get(u)) {\nif (color[w] == -1) {\ncolor[w] = 1 - color[u];\nq.offer(w);\n} else if (color[w] == color[u]) {\nreturn false;\n}\n}\n}\n}\n}\nreturn true;\n}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-5",
      children: "Advantages & Disadvantages"
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
            children: "O(V + E) time — efficient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only works for undirected graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple BFS-based coloring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only handles 2-coloring (not general graph coloring)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Detects all odd cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS queue can be large for wide graphs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-5",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty graph:"
        }), " Vacuously bipartite (no edges)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single vertex:"
        }), " Trivially bipartite."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disconnected graph:"
        }), " Each component checked separately."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Odd cycle:"
        }), " Always non-bipartite (by theorem)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-loop:"
        }), " Not bipartite (vertex would need two different colors)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "127-topological-sort",
      children: "12.7 Topological Sort"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Planning a college course schedule. Calculus I before Calculus II, Calculus II before Differential Equations. This is a partial order — some courses depend on others, but unrelated courses (like History and English) can be taken in any order. Topological sort produces a valid sequence respecting all prerequisites. Build systems (Make, Maven, npm) use the same logic: compile dependencies first."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-6",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "topological ordering"
      }), " of a DAG is a linear ordering where for every edge u -> v, u appears before v. Exists ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "iff"
      }), " graph is a DAG (no cycles). Two main algorithms:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kahn's algorithm (BFS-based):"
        }), " Repeatedly remove vertices with in-degree 0."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DFS-based:"
        }), " Perform DFS; push vertices onto a stack after all neighbors processed (post-order)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps--kahns",
      children: "Algorithm Steps — Kahn's"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute in-degree for all vertices."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize queue with all in-degree-0 vertices."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "While queue not empty:\na. Dequeue u, add to result.\nb. For each neighbor v: decrement in-degree. If 0, enqueue v."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If result size < V, a cycle exists."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps--dfs",
      children: "Algorithm Steps — DFS"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each unvisited vertex, call DFS."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In DFS: mark visited, recurse on unvisited neighbors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After all neighbors processed, push vertex onto a stack."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After all vertices processed, pop stack for topological order."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode--kahns",
      children: "Pseudocode — Kahn's"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["\\", (0,jsx_runtime.jsx)(_components.br, {}), "\nKahnTopologicalSort(G):\nin_degree = array[V] initialized to 0\nfor each vertex u:\nfor each neighbor v of u:\nin_degree[v]++"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "queue = []\nfor each vertex u:\n    if in_degree[u] == 0:\n        queue.enqueue(u)\n\nresult = []\nwhile queue is not empty:\n    u = queue.dequeue()\n    result.append(u)\n    for each neighbor v of u:\n        in_degree[v]--\n        if in_degree[v] == 0:\n            queue.enqueue(v)\n\nif result.size() != V:\n    error: graph has a cycle\nreturn result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode--dfs",
      children: "Pseudocode — DFS"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["\\", (0,jsx_runtime.jsx)(_components.br, {}), "\nDFSTopologicalSort(G):\nvisited = [false] * V\nstack = []\nfor each vertex v:\nif not visited[v]:\nDFS_Topo(G, v, visited, stack)\nreturn stack (pop for order)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DFS_Topo(G, v, visited, stack):\nvisited[v] = true\nfor each neighbor u of v:\nif not visited[u]:\nDFS_Topo(G, u, visited, stack)\nstack.push(v)   // post-order\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run--kahns",
      children: "Step-by-Step Dry Run — Kahn's"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Graph (DAG):\n\\", (0,jsx_runtime.jsx)(_components.br, {}), "\n5 -> 0 <- 4\nv    v\n2 -> 3 -> 1\n\\\\"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edges: 5->2, 5->0, 4->0, 4->1, 2->3, 3->1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initial in-degrees: in[0]=2, in[1]=2, in[2]=1, in[3]=1, in[4]=0, in[5]=0"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Queue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dequeue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "in-degree Changes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4,5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial: 4,5 have in-degree 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4->0: in[0]--, 4->1: in[1]--"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0? No, in=1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4,5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5->0: in[0]--=0, 5->2: in[2]--=0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "in[0]=0, in[2]=0 -> enqueue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4,5,0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 has no outgoing edges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4,5,0,2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2->3: in[3]--=0 -> enqueue 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "in[3]=0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4,5,0,2,3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3->1: in[1]--=0 -> enqueue 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "in[1]=0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4,5,0,2,3,1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All done"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Topological Order:"
      }), " 4, 5, 0, 2, 3, 1"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run--dfs",
      children: "Step-by-Step Dry Run — DFS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Same graph."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DFS outer loop visits 0,1,2,3,4,5 in order. From 0: neighbor 3 -> from 3: neighbor 1 -> from 1: no unvisited neighbors (after outer loop has processed in order... wait, DFS from 0 in a directed graph visits what? Let me use proper DFS traversal.)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Actually, for the DFS-based topological sort, the order of visiting in the outer loop matters. Let me trace more carefully."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Adjacency:\n0: [] (no outgoing edges in this graph? Wait, edges say 5->0, meaning 0 is receiving. Let me re-read: edges are 5->2, 5->0, 4->0, 4->1, 2->3, 3->1. So adj[0] = [] (no outgoing from 0). adj[1] = []. adj[2] = [3]. adj[3] = [1]. adj[4] = [0, 1]. adj[5] = [2, 0]."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DFS outer loop: v from 0 to 5:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "v"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "visited"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack (push after done)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 0, no neighbors, push 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 1, no neighbors, push 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 2, neighbor 3 (unvisited)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (from 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 3, neighbor 1 (visited), push 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2,3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1, 3]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "back to 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All visited, push 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1, 3, 2]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 4, neighbors 0(visited),1(visited), push 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2,3,4}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1, 3, 2, 4]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit 5, neighbors 2(visited),0(visited), push 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{all}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1, 3, 2, 4, 5]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Stack (bottom->top): [0, 1, 3, 2, 4, 5]\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topological Order (pop):"
      }), " 5, 4, 2, 3, 1, 0"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both 4, 5, 0, 2, 3, 1 (Kahn's) and 5, 4, 2, 3, 1, 0 (DFS) are valid topological orders."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-6",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kahn's Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DFS-Based"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V + E) — compute in-degrees O(E), each vertex/edge processed once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V + E) — standard DFS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V) — queue + in-degree array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V) — recursion stack + visited + stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cycle detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in (result size < V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires separate check"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(V + E) for both?"
      }), " Kahn's: computing in-degrees takes O(E). The while loop processes each vertex and edge once. DFS: each vertex visited once, each edge examined once. The constant factors differ but the asymptotic complexity is identical."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-6",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\cpp\n// C++ — Kahn's Algorithm\nstd::vector<int> topologicalSortKahn(const std::vector<std::list<int>>& adj) {\nint V = adj.size();\nstd::vector<int> inDeg(V, 0);\nfor (int u = 0; u < V; ++u)\nfor (int v : adj[u]) ++inDeg[v];"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "std::queue&lt;int&gt; q;\nfor (int i = 0; i &lt; V; ++i)\n    if (inDeg[i] == 0) q.push(i);\n\nstd::vector&lt;int&gt; result;\nwhile (!q.empty()) {\n    int u = q.front(); q.pop();\n    result.push_back(u);\n    for (int v : adj[u])\n        if (--inDeg[v] == 0) q.push(v);\n}\nif (result.size() != V) return {}; // cycle\nreturn result;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// C++ — DFS-Based Topological Sort\nvoid dfsTopo(int v, const std::vector<std::list<int>>& adj,\nstd::vector<bool>& visited, std::stack<int>& st) {\nvisited[v] = true;\nfor (int u : adj[v])\nif (!visited[u]) dfsTopo(u, adj, visited, st);\nst.push(v);\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "std::vector<int> topologicalSortDFS(const std::vector<std::list<int>>& adj) {\nint V = adj.size();\nstd::vector<bool> visited(V, false);\nstd::stack<int> st;\nfor (int i = 0; i < V; ++i)\nif (!visited[i]) dfsTopo(i, adj, visited, st);\nstd::vector<int> result;\nwhile (!st.empty()) { result.push_back(st.top()); st.pop(); }\nreturn result;\n}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\python"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "python--kahns-algorithm",
      children: "Python — Kahn's Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "from collections import deque"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def topological_sort_kahn(adj):\nV = len(adj)\nin_deg = [0] * V\nfor u in range(V):\nfor v in adj[u]: in_deg[v] += 1\nq = deque([i for i in range(V) if in_deg[i] == 0])\nresult = []\nwhile q:\nu = q.popleft()\nresult.append(u)\nfor v in adj[u]:\nin_deg[v] -= 1\nif in_deg[v] == 0: q.append(v)\nreturn result if len(result) == V else []"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "python--dfs-based-topological-sort",
      children: "Python — DFS-Based Topological Sort"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def topological_sort_dfs(adj):\nV = len(adj)\nvisited = [False] * V\nstack = []"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def dfs(v):\n    visited[v] = True\n    for u in adj[v]:\n        if not visited[u]: dfs(u)\n    stack.append(v)\n\nfor v in range(V):\n    if not visited[v]: dfs(v)\nreturn stack[::-1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\java\n// Java — Kahn's Algorithm\nList<Integer> topologicalSortKahn(List<List<Integer>> adj) {\nint V = adj.size();\nint[] inDeg = new int[V];\nfor (int u = 0; u < V; u++)\nfor (int v : adj.get(u)) inDeg[v]++;\nQueue<Integer> q = new LinkedList<>();\nfor (int i = 0; i < V; i++)\nif (inDeg[i] == 0) q.offer(i);\nList<Integer> result = new ArrayList<>();\nwhile (!q.isEmpty()) {\nint u = q.poll();\nresult.add(u);\nfor (int v : adj.get(u))\nif (--inDeg[v] == 0) q.offer(v);\n}\nif (result.size() != V) return new ArrayList<>();\nreturn result;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Java — DFS-Based Topological Sort\nvoid dfsTopo(int v, List<List<Integer>> adj,\nboolean[] visited, Stack<Integer> stack) {\nvisited[v] = true;\nfor (int u : adj.get(v))\nif (!visited[u]) dfsTopo(u, adj, visited, stack);\nstack.push(v);\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List<Integer> topologicalSortDFS(List<List<Integer>> adj) {\nint V = adj.size();\nboolean[] visited = new boolean[V];\nStack<Integer> stack = new Stack<>();\nfor (int v = 0; v < V; v++)\nif (!visited[v]) dfsTopo(v, adj, visited, stack);\nList<Integer> result = new ArrayList<>();\nwhile (!stack.isEmpty()) result.add(stack.pop());\nreturn result;\n}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-6",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kahn's"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in cycle detection; BFS — no recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires in-degree pre-computation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DFS-based"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simpler recursion; natural ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No cycle detection; needs separate check"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-6",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Graph with cycle:"
        }), " Kahn's result shorter than V. DFS needs explicit cycle detection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single vertex:"
        }), " Trivially topological — [0]."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disconnected DAG:"
        }), " Both algorithms handle naturally — multiple initial in-degree-0 vertices (Kahn's), outer loop (DFS)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty graph:"
        }), " Returns empty list."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "128-strongly-connected-components-kosaraju",
      children: "12.8 Strongly Connected Components (Kosaraju)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " In Twitter, user A follows B, and B follows A. These users are \"mutually reachable\" — A can see B's tweets and B can see A's tweets. A group where every pair is mutually reachable forms a strongly connected community. On the web, pages that link to each other form web communities. Finding these clusters helps search engines understand topic relevance and recommendation systems identify interest groups."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-7",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "strongly connected component (SCC)"
      }), " of a directed graph is a maximal set of vertices where every pair (u, v) has a path u -> v AND v -> u in the original graph. Kosaraju's algorithm finds all SCCs in O(V + E) time using two DFS passes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kosarajus-algorithm--steps",
      children: "Kosaraju's Algorithm — Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Perform DFS on the original graph. Push vertices to a stack ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "after"
        }), " they finish (post-order)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "transpose"
        }), " (reverse) graph — reverse all edge directions."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pop vertices from the stack. For each unvisited vertex in the transpose graph, run DFS. Each DFS tree yields one SCC."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-5",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["\\", (0,jsx_runtime.jsx)(_components.br, {}), "\nKosaraju(G):\nstack = []\nvisited = [false] * V"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Step 1: Fill stack in finish-time order\nfor each vertex v:\n    if not visited[v]:\n        DFS_Fill(G, v, visited, stack)\n\n// Step 2: Compute transpose\nGT = transpose(G)\n\n// Step 3: DFS on transpose\nvisited = [false] * V\nwhile stack is not empty:\n    v = stack.pop()\n    if not visited[v]:\n        component = DFS_Collect(GT, v, visited)\n        print \"SCC:\", component\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DFS_Fill(G, v, visited, stack):\nvisited[v] = true\nfor each neighbor u of v:\nif not visited[u]:\nDFS_Fill(G, u, visited, stack)\nstack.push(v)   // post-order"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DFS_Collect(G, v, visited):\nvisited[v] = true\ncomponent = [v]\nfor each neighbor u of v:\nif not visited[u]:\ncomponent += DFS_Collect(G, u, visited)\nreturn component\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-5",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Graph:\n\\", (0,jsx_runtime.jsx)(_components.br, {}), "\n0 -> 1 -> 2 -> 0\nv         v\n3 -> 4    5\n\\\\"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edges: 0->1, 1->2, 2->0, 2->5, 0->3, 1->3, 3->4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: DFS on original (compute finish order)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "v"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "visited[]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS from 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (via 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go to 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (via 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go to 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 (via 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2,5}"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Visit 5, no outgoing neighbors, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "push 5"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Next neighbor: 0 (visited). All done, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "push 2"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next neighbor: 3 (unvisited). Go to 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2,3,5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go to 4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0,1,2,3,4,5}"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Visit 4, no neighbors, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "push 4"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["All done, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "push 3"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["All done, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "push 1"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["All done, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "push 0"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stack (bottom->top): [5, 2, 4, 3, 1, 0]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Transpose graph"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reverse all edges:", (0,jsx_runtime.jsx)(_components.br, {}), "\n1->0, 2->1, 0->2, 5->2, 3->0, 3->1, 4->3"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transpose adjacency:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0: [2]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1: [0]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2: [1, 5]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wait, let me re-derive: original 2->0 becomes 0->2. Original 2->5 becomes 5->2. So transpose: 0 has neighbor 2; 2 has neighbor 1 (from 1->2); 5 has neighbor 2."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transpose adj:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "0: [2] (from 2->0)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1: [0] (from 0->1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2: [1] (from 1->2)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3: [0, 1] (from 0->3, 1->3)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "4: [3] (from 3->4)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "5: [2] (from 2->5)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: DFS on transpose (pop from stack: 0, 1, 3, 4, 2, 5)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pop"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "v"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "visited (T)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DFS on Transpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SCC"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 -> 2 -> 1 (neighbor of 2). 1 -> 0 (visited)."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{0, 2, 1}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "visited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "skip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 -> 0 (visited), 3 -> 1 (visited)."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{3}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{4}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 -> 3 (visited)."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{4}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "visited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "skip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{5}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 -> 2 (visited)."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{5}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SCCs:"
      }), " {0, 1, 2}, {3}, {4}, {5}"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-7",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V + E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two DFS passes — each O(V + E) — plus transpose O(V + E)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V + E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Original + transpose adjacency lists + visited + stack"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.em, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Why O(V + E) and not O(2"
        }), "(V+E))?"]
      }), "* The constant factor of 2 is absorbed by the big-O notation. Both DFS passes visit each vertex and edge exactly once. Building the transpose also takes O(V + E). Total: 3 * O(V + E) = O(V + E)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why can't we do it in one pass?"
      }), " Reachability in directed graphs is asymmetric. u may reach v but not vice versa. The first pass determines a global ordering; the second pass on the transpose leverages the property that SCCs are preserved under graph transposition."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-7",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\cpp\n// C++ — Kosaraju's Algorithm\n#include <stack>\n#include <vector>\n#include <list>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "void dfsFill(int v, const std::vector<std::list<int>>& adj,\nstd::vector<bool>& visited, std::stack<int>& st) {\nvisited[v] = true;\nfor (int u : adj[v])\nif (!visited[u]) dfsFill(u, adj, visited, st);\nst.push(v);\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "void dfsCollect(int v, const std::vector<std::list<int>>& adjT,\nstd::vector<bool>& visited, std::vector<int>& comp) {\nvisited[v] = true;\ncomp.push_back(v);\nfor (int u : adjT[v])\nif (!visited[u]) dfsCollect(u, adjT, visited, comp);\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "std::vector<std::vector<int>> kosaraju(const std::vector<std::list<int>>& adj) {\nint V = adj.size();\nstd::vector<bool> visited(V, false);\nstd::stack<int> st;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (int v = 0; v &lt; V; ++v)\n    if (!visited[v]) dfsFill(v, adj, visited, st);\n\n// Build transpose\nstd::vector&lt;std::list<int&gt;> adjT(V);\nfor (int v = 0; v &lt; V; ++v)\n    for (int u : adj[v]) adjT[u].push_back(v);\n\nstd::vector&lt;std::vector<int&gt;> sccs;\nvisited.assign(V, false);\nwhile (!st.empty()) {\n    int v = st.top(); st.pop();\n    if (!visited[v]) {\n        std::vector&lt;int&gt; comp;\n        dfsCollect(v, adjT, visited, comp);\n        sccs.push_back(comp);\n    }\n}\nreturn sccs;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\python"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "python--kosarajus-algorithm",
      children: "Python — Kosaraju's Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def kosaraju(adj):\nV = len(adj)\nvisited = [False] * V\nstack = []"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def dfs_fill(v):\n    visited[v] = True\n    for u in adj[v]:\n        if not visited[u]: dfs_fill(u)\n    stack.append(v)\n\nfor v in range(V):\n    if not visited[v]: dfs_fill(v)\n\n# Build transpose\nadjT = [[] for _ in range(V)]\nfor v in range(V):\n    for u in adj[v]: adjT[u].append(v)\n\nvisited = [False] * V\nsccs = []\n\ndef dfs_collect(v, comp):\n    visited[v] = True\n    comp.append(v)\n    for u in adjT[v]:\n        if not visited[u]: dfs_collect(u, comp)\n\nwhile stack:\n    v = stack.pop()\n    if not visited[v]:\n        comp = []\n        dfs_collect(v, comp)\n        sccs.append(comp)\nreturn sccs\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\java\n// Java — Kosaraju's Algorithm\nvoid dfsFill(int v, List<List<Integer>> adj,\nboolean[] visited, Stack<Integer> stack) {\nvisited[v] = true;\nfor (int u : adj.get(v))\nif (!visited[u]) dfsFill(u, adj, visited, stack);\nstack.push(v);\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "void dfsCollect(int v, List<List<Integer>> adjT,\nboolean[] visited, List<Integer> comp) {\nvisited[v] = true;\ncomp.add(v);\nfor (int u : adjT.get(v))\nif (!visited[u]) dfsCollect(u, adjT, visited, comp);\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List<List<Integer>> kosaraju(List<List<Integer>> adj) {\nint V = adj.size();\nboolean[] visited = new boolean[V];\nStack<Integer> stack = new Stack<>();\nfor (int v = 0; v < V; v++)\nif (!visited[v]) dfsFill(v, adj, visited, stack);"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "List&lt;List<Integer&gt;> adjT = new ArrayList&lt;>();\nfor (int v = 0; v &lt; V; v++) adjT.add(new ArrayList<&gt;());\nfor (int v = 0; v &lt; V; v++)\n    for (int u : adj.get(v)) adjT.get(u).add(v);\n\nvisited = new boolean[V];\nList&lt;List<Integer&gt;> sccs = new ArrayList&lt;>();\nwhile (!stack.isEmpty()) {\n    int v = stack.pop();\n    if (!visited[v]) {\n        List&lt;Integer&gt; comp = new ArrayList&lt;>();\n        dfsCollect(v, adjT, visited, comp);\n        sccs.add(comp);\n    }\n}\nreturn sccs;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-7",
      children: "Advantages & Disadvantages"
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
            children: "Simple two-pass strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires transpose graph (double memory)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(V + E) time — optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two DFS passes vs Tarjan's single pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Produces SCCs in reverse topological order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can't easily find SCCs incrementally"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-7",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DAG:"
        }), " Every vertex is its own SCC (V components)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single cycle:"
        }), " One SCC containing all vertices."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single vertex:"
        }), " One SCC of size 1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fully connected directed graph:"
        }), " One SCC (the entire graph)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dfs-vs-bfs--comprehensive-comparison",
      children: "DFS vs BFS — Comprehensive Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DFS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BFS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Structure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack (LIFO) — explicit or recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue (FIFO)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Traversal Pattern"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep first — go to leaf, backtrack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wide first — level by level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Shortest Path"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not guaranteed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guaranteed in unweighted graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V) — stack depth (chain)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V) — queue width (star)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory per Vertex"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower on wide graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower on deep graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cycle Detection (Undirected)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent check in DFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More complex — union-find or color-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cycle Detection (Directed)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Back edge via recStack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not directly possible (use Kahn/Kosaraju)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Topological Sort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-order DFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kahn's algorithm (BFS variant)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Connected Components"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marginal cost in DFS outer loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marginal cost in BFS outer loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bipartite Check"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More complex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural — two-coloring with BFS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Strongly Connected"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kosaraju/Tarjan (DFS-based)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recursion Limit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can overflow call stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No recursion — safe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simpler recursively; more complex iteratively"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple — just a queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When to Use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connectivity, cycles, SCC, topological sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shortest path, bipartite check, web crawl"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-questions",
      children: "Common Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Clone Graph"
          }), " (LeetCode 133)", (0,jsx_runtime.jsx)(_components.br, {}), "\nGiven a reference to a node in a connected undirected graph, return a deep copy.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Approach:"
          }), " Use BFS or DFS. Maintain a hash map from original node -> cloned node. When visiting a neighbor, if already cloned, add the clone's neighbor; otherwise, clone and BFS/DFS into it. O(V + E) time and space."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Word Ladder"
          }), " (LeetCode 127)", (0,jsx_runtime.jsx)(_components.br, {}), "\nGiven beginWord, endWord, and a word list, find the shortest transformation sequence (change one letter at a time, each intermediate must be in the word list).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Approach:"
          }), " Model words as graph nodes with an edge when one letter differs. BFS from beginWord to endWord gives the shortest path. Optimization: use bidirectional BFS (meet-in-the-middle) for O(b^(d/2)) instead of O(b^d). Classic BFS shortest-path application."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Number of Islands"
          }), " (LeetCode 200)", (0,jsx_runtime.jsx)(_components.br, {}), "\nGiven an m x n 2D binary grid (1 = land, 0 = water), count the number of islands (connected 1s).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Approach:"
          }), " Iterate through the grid. When a '1' is found, increment count and run DFS/BFS to mark all connected '1's as visited (set to '0'). Each DFS/BFS call from a new '1' discovers one island. This is connected components on a grid graph. O(m * n) time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Course Schedule"
          }), " (LeetCode 207)", (0,jsx_runtime.jsx)(_components.br, {}), "\nGiven n courses and prerequisite pairs [a, b] meaning b -> a, determine if all courses can be finished.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Approach:"
          }), " Build a directed graph. Check for cycles with DFS + recStack (directed cycle detection), or use Kahn's algorithm and check if all vertices are processed. If cycle exists, impossible. O(V + E) time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Alien Dictionary"
          }), " (LeetCode 269)", (0,jsx_runtime.jsx)(_components.br, {}), "\nGiven a sorted dictionary of an alien language, find the order of characters.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Approach:"
          }), " Compare adjacent words to find character precedence (first differing character). Build a directed graph of character ordering. Run topological sort (Kahn's). If cycle exists or inconsistent ordering, return empty string. O(C) where C is total characters."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pro-tips",
      children: "Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BFS for shortest path:"
        }), " When the problem says \"minimum number of edges\", \"shortest transformation\", \"closest\" — that's BFS."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DFS for connectivity:"
        }), " \"Is there a path?\", \"Count components\", \"Detect cycle\" — that's DFS."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Topological sort for dependencies:"
        }), " \"Course schedule\", \"Build order\", \"Package installation\" — look for topological ordering."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "When BFS needs reconstruction:"
        }), " Store a predecessor array during BFS. At the end, backtrack from target to source to reconstruct the path."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bidirectional BFS:"
        }), " For large graphs where BFS from source would explore too many nodes, run BFS from both source and target simultaneously. Cuts the search space from O(b^d) to roughly O(2 * b^(d/2))."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-pitfalls",
      children: "Common Pitfalls"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pitfall"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting to handle disconnected graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always use outer loop over all vertices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recursion stack overflow on DFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use iterative DFS or increase recursion limit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BFS not finding shortest path for weighted graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Dijkstra (not BFS) for weighted edges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not clearing recStack between paths (directed cycle)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reset recStack[v] = false after each DFS call"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite loop in iterative DFS if visited marked on pop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mark visited when ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "pushing"
            }), " to stack, not when popping"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting that topological sort requires a DAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always check for cycles first"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traversal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It Uses It"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Web crawling (Google)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Processes pages level by level, prioritizing high-importance pages first. A crawler starts with seed URLs, downloads each page, extracts links, and adds new URLs to the frontier queue. BFS ensures crawled pages stay close to the seeds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GPS Navigation (Google Maps)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finds the shortest route by number of road segments (edges). Each road intersection is a vertex, each road segment is an edge. BFS guarantees the path with fewest turns. For weighted roads (traffic), Dijkstra replaces BFS."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Social recommendations (LinkedIn)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"People you may know\" queries distance-2 connections: friends of friends not yet connected to you. BFS to depth 2 finds these efficiently."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Package management (npm, pip)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topological sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resolves dependency order: install dependencies before packages that need them. Kahn's algorithm ensures every package is installed after its prerequisites. If cycle detected, dependency resolution fails with an error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Build systems (Make, Bazel)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topological sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determines compilation order: compile library A before library B if B depends on A. Only DAGs are valid build graphs."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Garbage collection (JVM)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS (mark phase)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Starting from root objects (stack variables, static fields), DFS marks all reachable objects. Unmarked objects are garbage. DFS is preferred over BFS because it uses less memory (stack instead of queue) for the object graph."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommendation systems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCC (Kosaraju)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identifies communities of mutually-interacting users or items. Pages that link to each other form web communities. Streaming platforms find groups of users with similar taste."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deadlock detection (DB transactions)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cycle detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database systems track which transactions hold which locks and which locks other transactions wait for. A cycle in this wait-for graph = deadlock. Victim transaction is rolled back."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Constraint solving / SAT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topological sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In constraint propagation, variables with no dependencies are solved first. Topological ordering of the constraint graph ensures efficient propagation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Electrical circuit simulation (SPICE)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topological sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit components are evaluated in topological order: inputs before outputs, ensuring signal flows correctly through the circuit DAG."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BFS uses a queue, processes vertices by distance, and finds shortest paths."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DFS uses recursion (or stack), explores deeply, and excels at connectivity analysis."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both run in O(V + E) time using adjacency lists."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cycle detection in directed graphs uses a recursion stack (back edges)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "An undirected graph is bipartite iff it contains no odd cycle — BFS two-coloring detects this."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Topological sort requires a DAG; Kahn's algorithm also detects cycles."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strongly connected components partition vertices where every pair is mutually reachable — Kosaraju finds them in O(V + E)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BFS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DFS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dijkstra"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A*"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack (implicit recursion)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V) (worst depth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shortest path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unweighted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not guaranteed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted (non-negative)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted + heuristic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Completeness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (may go infinite)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (unweighted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (admissible heuristic)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-traversal-use-cases",
      children: "Quick Reference: Traversal Use Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shortest path (unweighted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level-order guarantees minimum edges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Topological sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kahn's or DFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-degree removal or post-order DFS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cycle detection (directed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS with recStack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Back edges indicate cycles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cycle detection (undirected)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS with parent check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge to visited non-parent = cycle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connected components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS or BFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Count traversal starts per component"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bipartite check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS with coloring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No edge connects same-colored vertices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kosaraju / Tarjan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two DFS passes or single DFS with low-link"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traversal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It Uses It"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web crawling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process pages level by level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Puzzle solving (maze)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS + backtracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explore one path fully before backtracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topological sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build packages in correct order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Social network friend suggestions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find distance-2 connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Garbage collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark reachable objects from roots"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes--gfg-deepening",
      children: "Common Mistakes & GFG Deepening"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-mistakes-gfg-style",
      children: "Common Mistakes (GFG-Style)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mistake"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It's Wrong"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Correct Approach"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Using recursion for BFS (recursion uses a stack, BFS needs a queue)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS is inherently iterative — recursion gives depth-first ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always use an explicit queue for BFS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not marking visited when pushing to queue (only when processing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same node gets enqueued multiple times, leading to exponential work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark visited at enqueue time, not dequeue time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DFS recursion on large graphs causing stack overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Call stack limit is ~10^4; graph may have 10^5+ vertices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use explicit stack-based DFS for large graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confusing iterative DFS order with recursive DFS order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack LIFO reverses neighbor order compared to recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive DFS visits neighbors in order; stack-based visits them in reverse unless you push in reverse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BFS for shortest path in weighted graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS finds minimum number of edges, not minimum weight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Dijkstra for weighted shortest paths"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting to handle disconnected components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running DFS/BFS from only one node misses other components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop all vertices and run traversal from each unvisited one"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not resetting visited state between multiple traversals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State leaks across runs, giving incorrect results"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create a fresh visited array/set for each independent traversal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong bidirectional BFS termination condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two frontiers expand; stop when they intersect, but intersection check must be O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use a hash set for visited nodes from each direction; stop on overlap"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-bfs--dfs-implementations",
      children: "TypeScript BFS & DFS Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Graph {\n    getNeighbors(v: number): number[];\n}\n\n// BFS returning distances and parent tree\nfunction bfs(graph: Graph, start: number): { dist: number[]; parent: number[] } {\n    const n = 1000; // assume graph size\n    const dist = new Array(n).fill(-1);\n    const parent = new Array(n).fill(-1);\n    const queue: number[] = [start];\n    dist[start] = 0;\n    \n    while (queue.length > 0) {\n        const u = queue.shift()!;\n        for (const v of graph.getNeighbors(u)) {\n            if (dist[v] === -1) { // unvisited\n                dist[v] = dist[u] + 1;\n                parent[v] = u;\n                queue.push(v);\n            }\n        }\n    }\n    return { dist, parent };\n}\n\n// Reconstruct path from BFS parent array\nfunction reconstructPath(parent: number[], target: number): number[] {\n    const path: number[] = [];\n    let curr = target;\n    while (curr !== -1) {\n        path.push(curr);\n        curr = parent[curr];\n    }\n    return path.reverse();\n}\n\n// Iterative DFS with pre/post order\nfunction dfsIterative(graph: Graph, start: number): { pre: number[]; post: number[] } {\n    const visited = new Set<number>();\n    const pre: number[] = [];\n    const post: number[] = [];\n    const stack: { v: number; state: 'enter' | 'exit' }[] = [{ v: start, state: 'enter' }];\n    \n    while (stack.length > 0) {\n        const { v, state } = stack.pop()!;\n        if (state === 'enter') {\n            if (visited.has(v)) continue;\n            visited.add(v);\n            pre.push(v);\n            stack.push({ v, state: 'exit' });\n            // Push neighbors in reverse so original order is preserved\n            const neighbors = graph.getNeighbors(v);\n            for (let i = neighbors.length - 1; i >= 0; i--) {\n                if (!visited.has(neighbors[i])) {\n                    stack.push({ v: neighbors[i], state: 'enter' });\n                }\n            }\n        } else {\n            post.push(v);\n        }\n    }\n    return { pre, post };\n}\n\n// Bidirectional BFS for shortest path in unweighted graph\nfunction bidirectionalBFS(graph: Graph, start: number, target: number): number[] | null {\n    if (start === target) return [start];\n    const n = 1000;\n    const distF = new Array(n).fill(-1);\n    const distB = new Array(n).fill(-1);\n    const parentF = new Array(n).fill(-1);\n    const parentB = new Array(n).fill(-1);\n    const queueF: number[] = [start];\n    const queueB: number[] = [target];\n    distF[start] = 0;\n    distB[target] = 0;\n    \n    const expand = (queue: number[], dist: number[], parent: number[], otherDist: number[]): number | null => {\n        const u = queue.shift()!;\n        for (const v of graph.getNeighbors(u)) {\n            if (dist[v] === -1) {\n                dist[v] = dist[u] + 1;\n                parent[v] = u;\n                if (otherDist[v] !== -1) return v; // intersection\n                queue.push(v);\n            }\n        }\n        return null;\n    };\n    \n    while (queueF.length > 0 && queueB.length > 0) {\n        const intersect = queueF.length <= queueB.length\n            ? expand(queueF, distF, parentF, distB)\n            : expand(queueB, distB, parentB, distF);\n        if (intersect !== null) {\n            // Reconstruct combined path\n            const path1: number[] = [];\n            let curr = intersect;\n            while (curr !== -1) { path1.push(curr); curr = parentF[curr]; }\n            path1.reverse();\n            const path2: number[] = [];\n            curr = intersect;\n            while (curr !== -1) { path2.push(curr); curr = parentB[curr]; }\n            return [...path1, ...path2.slice(1).reverse()];\n        }\n    }\n    return null;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-mcqs-gfg-pattern",
      children: "Additional MCQs (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the worst-case time complexity of DFS on a graph with V vertices and E edges?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(V)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(E)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(V + E) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(V²)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "BFS can be used to find:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Shortest path in an unweighted graph ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Shortest path in a weighted graph"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Topological ordering"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Strongly connected components"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "The space complexity of BFS (queue + visited) is:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(1)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(V) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(E)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(V + E)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "In which scenario is iterative DFS preferred over recursive DFS?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) The graph is small"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) The graph is deep (tall) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) The graph is dense"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) The graph is directed"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Bidirectional BFS reduces the search space from b^d to approximately:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) b^(d/2) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) b^(2d)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) 2b^d"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) b^d / 2"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which traversal guarantees a node is processed after all its descendants?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Pre-order DFS"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Post-order DFS ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) BFS"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) In-order DFS"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 9-c, 10-a, 11-b, 12-b, 13-a, 14-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises-gfg-pattern",
      children: "Additional Exercises (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "12",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Word ladder (BFS)"
          }), ": Given a start word, end word, and a dictionary, find the length of the shortest transformation sequence from start to end, changing one letter at a time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Rotting oranges (BFS multi-source)"
          }), ": Given a grid where 0=empty, 1=fresh orange, 2=rotten orange, find the minimum time for all oranges to rot (rot spreads to adjacent cells each minute)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Number of islands (DFS/BFS)"
          }), ": Given a binary grid (1=land, 0=water), count the number of islands (connected components of 1s)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Clone a graph (DFS/BFS)"
          }), ": Given a reference to a node in a connected undirected graph, return a deep copy (clone) of the entire graph."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Detect cycle in a directed graph"
          }), ": Use DFS with a recursion stack (white/gray/black coloring) to detect cycles in a directed graph."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Topological sort using DFS"
          }), ": Implement topological sorting using DFS (post-order) for a DAG."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Minimum knight moves on chessboard (BFS)"
          }), ": Find the minimum number of moves a knight needs to reach a target square on an infinite chessboard."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Course schedule (cycle detection/DFS)"
          }), ": Given numCourses and prerequisites pairs, determine if all courses can be completed (no cycle in the dependency graph)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Alien dictionary"
          }), ": Given a sorted dictionary of an alien language, find the order of characters using topological sort."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Find the shortest cycle in an undirected graph"
          }), ": Use BFS from each vertex, stop when finding an already-visited neighbor (not parent)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "traversal-comparison",
      children: "Traversal Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BFS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DFS (Recursive)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DFS (Iterative)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bidirectional BFS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Call stack (implicit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack (explicit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two queues"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(width) = O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(depth) = O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(depth) = O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b^(d/2))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shortest path (unweighted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Completeness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (can go infinite)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (can go infinite)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cycle detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Topological sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kahn's"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connected components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Priority queue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Hash table"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is BFS's time complexity on adjacency lists?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(V)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(V + E) ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(V²)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(E²)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "In directed graph cycle detection, what indicates a cycle?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Cross edge"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Back edge ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Forward edge"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Tree edge"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Kahn's algorithm detects cycles when:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) All vertices are processed"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Some vertices remain unprocessed ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) The queue is empty"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) In-degrees are zero"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which algorithm finds shortest paths in unweighted graphs?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) DFS"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) BFS ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Topological sort"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Kosaraju's"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "A graph is bipartite iff it contains:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) No cycles"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) No odd cycles ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) No even cycles"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) No back edges"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the space complexity of Kosaraju's algorithm?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(V)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(V + E) ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(E²)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(log V)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which traversal is used for topological sort?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) BFS only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) DFS only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Both BFS (Kahn's) and DFS ✅"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Neither"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-b, 2-b, 3-b, 4-b, 5-b, 6-b, 7-b, 8-c"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BFS"
        }), " uses a queue and finds shortest paths in unweighted graphs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DFS"
        }), " uses recursion (or a stack) and is useful for connectivity, cycles, and topological ordering."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cycle detection"
        }), " in directed graphs uses a recursion stack to detect back edges."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bipartite check"
        }), " uses BFS two-coloring — conflict means odd cycle."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Topological sort"
        }), " exists only for DAGs; Kahn's algorithm and DFS produce valid orderings."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Strongly connected components"
        }), " partition directed graph vertices into mutual-reachability groups."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare BFS and DFS: when is one preferred over the other?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does a DFS recursion stack need both visited and recStack for cycle detection in directed graphs?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What happens in Kahn's algorithm when the graph has a cycle?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why can an undirected graph never have a back edge (in the directed sense)?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the relationship between bipartiteness and odd cycles?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a function to determine if an undirected graph is bipartite using BFS."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a program to find all strongly connected components using Kosaraju's algorithm."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute the minimum number of edges to add to make a directed graph strongly connected."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement iterative DFS and compare its traversal order with recursive DFS."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given a grid of 0s and 1s, find the size of the largest connected component of 1s."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement the ", (0,jsx_runtime.jsxs)(_components.em, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "A"
          }), " search algorithm"]
        }), "* for a weighted grid graph. Compare the number of nodes visited with Dijkstra's algorithm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Word Ladder II"
        }), " (LeetCode 126): Find all shortest transformation sequences from beginWord to endWord."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical Connections in a Network"
        }), " (LeetCode 1192): Find all bridges in an undirected graph using Tarjan's algorithm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Minimum Height Trees"
        }), " (LeetCode 310): Find root(s) that minimize tree height — a topological removal problem."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Graph Valid Tree"
        }), " (LeetCode 261): Determine if a given set of edges forms a valid tree (connected and acyclic)."]
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