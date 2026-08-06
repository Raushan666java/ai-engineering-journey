"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[25391],{

/***/ 3717
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_data_structures_11_graphs_md_f99_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-data-structures-11-graphs-md-f99.json
const site_docs_courses_data_structures_11_graphs_md_f99_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/data-structures/11-graphs","title":"Chapter 11: Graphs","description":"Prev Heaps | Next Graph Traversals","source":"@site/docs/courses/data-structures/11-graphs.md","sourceDirName":"courses/data-structures","slug":"/data-structures/11-graphs","permalink":"/ai-engineering-journey/data-structures/11-graphs","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"id":"11-graphs","slug":"/data-structures/11-graphs","title":"Chapter 11: Graphs","sidebar_label":"Chapter 11: Graphs","sidebar_position":11},"sidebar":"coursesSidebar","previous":{"title":"Chapter 10: Heaps","permalink":"/ai-engineering-journey/data-structures/10-heaps"},"next":{"title":"Chapter 12: Graph Traversals","permalink":"/ai-engineering-journey/data-structures/12-graph-traversals"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/data-structures/11-graphs.md


const frontMatter = {
	id: '11-graphs',
	slug: '/data-structures/11-graphs',
	title: 'Chapter 11: Graphs',
	sidebar_label: 'Chapter 11: Graphs',
	sidebar_position: 11
};
const contentTitle = 'Chapter 11: Graphs';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Graphs Matter",
  "id": "why-graphs-matter",
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
  "value": "1. Graph Types: Directed, Undirected, Weighted",
  "id": "1-graph-types-directed-undirected-weighted",
  "level": 3
}, {
  "value": "1.1 Definitions",
  "id": "11-definitions",
  "level": 4
}, {
  "value": "1.2 Algorithm Steps to Determine Graph Type",
  "id": "12-algorithm-steps-to-determine-graph-type",
  "level": 4
}, {
  "value": "1.3 Pseudocode",
  "id": "13-pseudocode",
  "level": 4
}, {
  "value": "1.4 Dry Run",
  "id": "14-dry-run",
  "level": 4
}, {
  "value": "1.5 C++ Implementation",
  "id": "15-c-implementation",
  "level": 4
}, {
  "value": "1.6 Python Implementation",
  "id": "16-python-implementation",
  "level": 4
}, {
  "value": "1.7 Java Implementation",
  "id": "17-java-implementation",
  "level": 4
}, {
  "value": "1.8 Complexity Analysis",
  "id": "18-complexity-analysis",
  "level": 4
}, {
  "value": "1.9 Advantages &amp; Disadvantages",
  "id": "19-advantages--disadvantages",
  "level": 4
}, {
  "value": "1.10 Edge Cases",
  "id": "110-edge-cases",
  "level": 4
}, {
  "value": "2. Adjacency Matrix",
  "id": "2-adjacency-matrix",
  "level": 3
}, {
  "value": "2.1 Definition",
  "id": "21-definition",
  "level": 4
}, {
  "value": "2.2 Algorithm Steps to Build an Adjacency Matrix",
  "id": "22-algorithm-steps-to-build-an-adjacency-matrix",
  "level": 4
}, {
  "value": "2.3 Pseudocode",
  "id": "23-pseudocode",
  "level": 4
}, {
  "value": "2.4 Dry Run",
  "id": "24-dry-run",
  "level": 4
}, {
  "value": "2.5 C++ Implementation",
  "id": "25-c-implementation",
  "level": 4
}, {
  "value": "2.6 Python Implementation",
  "id": "26-python-implementation",
  "level": 4
}, {
  "value": "2.7 Java Implementation",
  "id": "27-java-implementation",
  "level": 4
}, {
  "value": "2.8 Complexity Analysis",
  "id": "28-complexity-analysis",
  "level": 4
}, {
  "value": "2.9 Advantages &amp; Disadvantages",
  "id": "29-advantages--disadvantages",
  "level": 4
}, {
  "value": "2.10 Edge Cases",
  "id": "210-edge-cases",
  "level": 4
}, {
  "value": "3. Adjacency List",
  "id": "3-adjacency-list",
  "level": 3
}, {
  "value": "3.1 Definition",
  "id": "31-definition",
  "level": 4
}, {
  "value": "3.2 Algorithm Steps to Build an Adjacency List",
  "id": "32-algorithm-steps-to-build-an-adjacency-list",
  "level": 4
}, {
  "value": "3.3 Pseudocode",
  "id": "33-pseudocode",
  "level": 4
}, {
  "value": "3.4 Dry Run",
  "id": "34-dry-run",
  "level": 4
}, {
  "value": "3.5 C++ Implementation",
  "id": "35-c-implementation",
  "level": 4
}, {
  "value": "3.6 Python Implementation",
  "id": "36-python-implementation",
  "level": 4
}, {
  "value": "3.7 Java Implementation",
  "id": "37-java-implementation",
  "level": 4
}, {
  "value": "3.8 Complexity Analysis",
  "id": "38-complexity-analysis",
  "level": 4
}, {
  "value": "3.9 Advantages &amp; Disadvantages",
  "id": "39-advantages--disadvantages",
  "level": 4
}, {
  "value": "3.10 Edge Cases",
  "id": "310-edge-cases",
  "level": 4
}, {
  "value": "4. Edge List",
  "id": "4-edge-list",
  "level": 3
}, {
  "value": "4.1 Definition",
  "id": "41-definition",
  "level": 4
}, {
  "value": "4.2 Algorithm Steps to Build an Edge List",
  "id": "42-algorithm-steps-to-build-an-edge-list",
  "level": 4
}, {
  "value": "4.3 Pseudocode",
  "id": "43-pseudocode",
  "level": 4
}, {
  "value": "4.4 Dry Run",
  "id": "44-dry-run",
  "level": 4
}, {
  "value": "4.5 C++ Implementation",
  "id": "45-c-implementation",
  "level": 4
}, {
  "value": "4.6 Python Implementation",
  "id": "46-python-implementation",
  "level": 4
}, {
  "value": "4.7 Java Implementation",
  "id": "47-java-implementation",
  "level": 4
}, {
  "value": "4.8 Complexity Analysis",
  "id": "48-complexity-analysis",
  "level": 4
}, {
  "value": "4.9 Advantages &amp; Disadvantages",
  "id": "49-advantages--disadvantages",
  "level": 4
}, {
  "value": "4.10 Edge Cases",
  "id": "410-edge-cases",
  "level": 4
}, {
  "value": "5. Degree Calculation",
  "id": "5-degree-calculation",
  "level": 3
}, {
  "value": "5.1 Definition",
  "id": "51-definition",
  "level": 4
}, {
  "value": "5.2 Algorithm Steps for Degree Calculation (Adjacency List)",
  "id": "52-algorithm-steps-for-degree-calculation-adjacency-list",
  "level": 4
}, {
  "value": "5.3 Pseudocode",
  "id": "53-pseudocode",
  "level": 4
}, {
  "value": "5.4 Dry Run",
  "id": "54-dry-run",
  "level": 4
}, {
  "value": "5.5 C++ Implementation",
  "id": "55-c-implementation",
  "level": 4
}, {
  "value": "5.6 Python Implementation",
  "id": "56-python-implementation",
  "level": 4
}, {
  "value": "5.7 Java Implementation",
  "id": "57-java-implementation",
  "level": 4
}, {
  "value": "5.8 Complexity Analysis",
  "id": "58-complexity-analysis",
  "level": 4
}, {
  "value": "5.9 Advantages &amp; Disadvantages",
  "id": "59-advantages--disadvantages",
  "level": 4
}, {
  "value": "5.10 Edge Cases",
  "id": "510-edge-cases",
  "level": 4
}, {
  "value": "6. Complete Graph",
  "id": "6-complete-graph",
  "level": 3
}, {
  "value": "6.1 Definition",
  "id": "61-definition",
  "level": 4
}, {
  "value": "6.2 Properties",
  "id": "62-properties",
  "level": 4
}, {
  "value": "6.3 Algorithm Steps to Check if a Graph is Complete",
  "id": "63-algorithm-steps-to-check-if-a-graph-is-complete",
  "level": 4
}, {
  "value": "6.4 Pseudocode",
  "id": "64-pseudocode",
  "level": 4
}, {
  "value": "6.5 Dry Run",
  "id": "65-dry-run",
  "level": 4
}, {
  "value": "6.6 C++ Implementation",
  "id": "66-c-implementation",
  "level": 4
}, {
  "value": "6.7 Python Implementation",
  "id": "67-python-implementation",
  "level": 4
}, {
  "value": "6.8 Java Implementation",
  "id": "68-java-implementation",
  "level": 4
}, {
  "value": "6.9 Complexity Analysis",
  "id": "69-complexity-analysis",
  "level": 4
}, {
  "value": "6.10 Edge Cases",
  "id": "610-edge-cases",
  "level": 4
}, {
  "value": "7. Bipartite Graph",
  "id": "7-bipartite-graph",
  "level": 3
}, {
  "value": "7.1 Definition",
  "id": "71-definition",
  "level": 4
}, {
  "value": "7.2 Algorithm Steps (BFS-based 2-Coloring)",
  "id": "72-algorithm-steps-bfs-based-2-coloring",
  "level": 4
}, {
  "value": "7.3 Pseudocode",
  "id": "73-pseudocode",
  "level": 4
}, {
  "value": "7.4 Dry Run",
  "id": "74-dry-run",
  "level": 4
}, {
  "value": "7.5 C++ Implementation",
  "id": "75-c-implementation",
  "level": 4
}, {
  "value": "7.6 Python Implementation",
  "id": "76-python-implementation",
  "level": 4
}, {
  "value": "7.7 Java Implementation",
  "id": "77-java-implementation",
  "level": 4
}, {
  "value": "7.8 Complexity Analysis",
  "id": "78-complexity-analysis",
  "level": 4
}, {
  "value": "7.9 Advantages &amp; Disadvantages",
  "id": "79-advantages--disadvantages",
  "level": 4
}, {
  "value": "7.10 Edge Cases",
  "id": "710-edge-cases",
  "level": 4
}, {
  "value": "Adjacency Matrix vs List vs Edge List — Comparison Table",
  "id": "adjacency-matrix-vs-list-vs-edge-list--comparison-table",
  "level": 2
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Quick Reference: Graph Terminology",
  "id": "quick-reference-graph-terminology",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "1. Choosing the Right Representation for Different Problem Types",
  "id": "1-choosing-the-right-representation-for-different-problem-types",
  "level": 3
}, {
  "value": "2. Detect Cycle in a Directed Graph",
  "id": "2-detect-cycle-in-a-directed-graph",
  "level": 3
}, {
  "value": "3. Detect Cycle in an Undirected Graph",
  "id": "3-detect-cycle-in-an-undirected-graph",
  "level": 3
}, {
  "value": "4. Topological Sort (DAG)",
  "id": "4-topological-sort-dag",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "1. Google Maps — Road Networks",
  "id": "1-google-maps--road-networks",
  "level": 3
}, {
  "value": "2. Facebook / Instagram — Social Graphs",
  "id": "2-facebook--instagram--social-graphs",
  "level": 3
}, {
  "value": "3. PageRank — Web Graph",
  "id": "3-pagerank--web-graph",
  "level": 3
}, {
  "value": "4. OSPF — Routing Protocols",
  "id": "4-ospf--routing-protocols",
  "level": 3
}, {
  "value": "5. Other Notable Applications",
  "id": "5-other-notable-applications",
  "level": 3
}, {
  "value": "Pro Tips",
  "id": "pro-tips",
  "level": 2
}, {
  "value": "One-Sentence Takeaways",
  "id": "one-sentence-takeaways",
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
  "value": "TypeScript Graph Representation",
  "id": "typescript-graph-representation",
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
    code: "code",
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
        id: "chapter-11-graphs",
        children: "Chapter 11: Graphs"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prev:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/data-structures/10-heaps",
        children: "Chapter 10: Heaps"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/data-structures/12-graph-traversals",
        children: "Chapter 12: Graph Traversals"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Graphs model pairwise relationships; choose adjacency matrix for dense graphs and adjacency list for sparse graphs."]
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
        href: "../../assets/images/lessons/data-structures/11-graphs/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/11-graphs/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/data-structures/11-graphs/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/11-graphs/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/data-structures/11-graphs/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/11-graphs/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define graphs and graph terminology."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement graph representations: adjacency matrix, adjacency list, and edge list."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish directed, undirected, weighted, and unweighted graphs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze space/time complexity of each representation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify complete graphs, bipartite graphs, and graph density."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-graphs-matter",
      children: "Why Graphs Matter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Imagine a city's road map. Each intersection is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vertex"
      }), " (node), and each road connecting two intersections is an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "edge"
      }), ". Now picture Facebook — each person is a vertex, and each friendship is an edge connecting two people. Graphs are everywhere: Twitter follower networks (directed edges), Google Maps road networks (weighted edges for distance), the World Wide Web itself (webpages linked by hyperlinks), and even your brain's neural connections. Without graphs, there is no navigation, no social network, no web search, no routing — they are the universal language of relationships."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Becomes a Vertex"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Becomes an Edge"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Social network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Person"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Friendship/follow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Road map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intersection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Road (with distance weight)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Webpage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hyperlink"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Computer network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cable (with bandwidth weight)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prerequisites"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Course"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Depends on\" relationship"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why this matters:"
        }), " If you can model a problem as a graph, you can apply hundreds of years of mathematical theory and decades of algorithmic research to solve it — shortest paths, connectivity, clustering, ranking, and more."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Graph definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(G = (V, E)) — vertices and edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Models relationships between any entities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(n \\times n) matrix, (O(1)) edge queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for dense graphs ((E \\approx V^2))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array of neighbor lists, (O(V+E)) space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for sparse graphs (most real-world graphs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List of ((u,v,w)) tuples, (O(E)) space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for I/O, sorting, Kruskal's MST"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge carries a numerical weight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential for shortest-path problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Directed vs Undirected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arrows vs lines between vertices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose based on relationship symmetry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every pair connected by an edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum edges = (n(n-1)/2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bipartite graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertices in 2 sets, edges only between sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Models matching problems, 2-coloring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graph density"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense: (E \\approx V^2); Sparse: (E \\ll V^2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Density drives representation choice"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mermaid flowchart TD     A[Why Graphs Matter] --> B[Graph Types]     B --> C[Directed]     B --> D[Undirected]     B --> E[Weighted]     C --> F{Representation?}     D --> F     E --> F     F --> G[Adjacency Matrix]     F --> H[Adjacency List]     F --> I[Edge List]     G --> J[Dense Graphs O1 Edge Query]     H --> K[Sparse Graphs O(V+E) Space]     I --> L[O(E) Storage / Kruskal's]     J --> M[Degree Calculation]     K --> M     M --> N[Special Graphs]     N --> O[Complete Graph]     N --> P[Bipartite Graph]     O --> Q[Applications]     P --> Q     Q --> R[Social Networks]     Q --> S[Maps / Navigation]     Q --> T[Web Graph / PageRank]     Q --> U[Routing Protocols] "
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-graph-types-directed-undirected-weighted",
      children: "1. Graph Types: Directed, Undirected, Weighted"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Undirected graph:"
        }), " Facebook friendship — if Alice is friends with Bob, Bob is automatically friends with Alice. The relationship is symmetric."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Directed graph:"
        }), " Twitter follows — Alice follows Bob does not mean Bob follows Alice. The relationship has a direction (arrow)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weighted graph:"
        }), " Google Maps road network — the edge between two intersections carries a weight representing distance in miles or travel time in minutes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "11-definitions",
      children: "1.1 Definitions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Representation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Undirected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(G = (V, E)), edges are unordered pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "({u, v}) or (u - v)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Facebook friendship"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Directed (digraph)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(G = (V, E)), edges are ordered pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "((u, v)) or (u \\to v)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Twitter follow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted (undirected)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(G = (V, E, w))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "({u, v}) with weight (w)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Road network"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted (directed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(G = (V, E, w))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "((u, v)) with weight (w)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flight routes with cost"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "12-algorithm-steps-to-determine-graph-type",
      children: "1.2 Algorithm Steps to Determine Graph Type"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the relationship: is it symmetric or asymmetric?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If symmetric → undirected. If asymmetric → directed."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does each relationship carry a numeric cost/value? If yes → weighted."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose representation (matrix/list/edge list) based on density."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "13-pseudocode",
      children: "1.3 Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DETERMINE_GRAPH_PROPERTIES(edges):     isDirected = false     isWeighted = false     for each (u, v) in edges:         if (v, u) not in edges:             isDirected = true         if edge has weight:             isWeighted = true     return (isDirected, isWeighted)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "14-dry-run",
      children: "1.4 Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input edges:"
      }), " [(0,1,5), (1,2,3), (2,0,4), (1,3,2)]"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edge(u,v,w)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reverse (v,u) exists?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "isDirected?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "hasWeight?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "isWeighted?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0,1,5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1,0)? No → Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1,2,3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2,1)? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2,0,4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0,2)? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1,3,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3,1)? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Directed, weighted graph."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "15-c-implementation",
      children: "1.5 C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`cpp\n#include <iostream>\n#include <vector>\n#include <tuple>\nusing namespace std;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "struct Edge {\nint u, v, w;\nbool hasWeight;\nEdge(int u, int v, int w = 0, bool hw = false)\n: u(u), v(v), w(w), hasWeight(hw) {}\n};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pair<bool,bool> determineGraphType(const vector<Edge>& edges) {\nbool isDirected = false;\nbool isWeighted = false;\nfor (const auto& e : edges) {\nif (e.hasWeight) isWeighted = true;\nbool found = false;\nfor (const auto& rev : edges) {\nif (rev.u == e.v && rev.v == e.u) { found = true; break; }\n}\nif (!found) isDirected = true;\n}\nreturn {isDirected, isWeighted};\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "int main() {\nvector<Edge> edges = {{0,1,5,true},{1,2,3,true},{2,0,4,true},{1,3,2,true}};\nauto [dir, wt] = determineGraphType(edges);\ncout << \"Directed: \" << dir << \", Weighted: \" << wt << endl;\nreturn 0;\n}\n`"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "16-python-implementation",
      children: "1.6 Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`python\ndef determine_graph_type(edges):\nis_directed = False\nis_weighted = False\nedge_set = set()\nfor e in edges:\nif len(e) == 3:\nis_weighted = True\nu, v, w = e\nelse:\nu, v = e\nedge_set.add((u, v))\nfor (u, v, *_) in edges:\nif (v, u) not in edge_set:\nis_directed = True\nreturn is_directed, is_weighted"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "edges = [(0, 1, 5), (1, 2, 3), (2, 0, 4), (1, 3, 2)]\ndir, wt = determine_graph_type(edges)\nprint(f\"Directed: {dir}, Weighted: {wt}\")\n`"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "17-java-implementation",
      children: "1.7 Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`java\nimport java.util.*;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class Edge {\nint u, v, w;\nboolean hasWeight;\nEdge(int u, int v) { this.u = u; this.v = v; hasWeight = false; }\nEdge(int u, int v, int w) { this.u = u; this.v = v; this.w = w; hasWeight = true; }\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class Main {\nstatic boolean[] determineGraphType(List<Edge> edges) {\nboolean isDirected = false, isWeighted = false;\nSet<String> set = new HashSet<>();\nfor (Edge e : edges) {\nif (e.hasWeight) isWeighted = true;\nset.add(e.u + \",\" + e.v);\n}\nfor (Edge e : edges) {\nif (!set.contains(e.v + \",\" + e.u)) { isDirected = true; break; }\n}\nreturn new boolean[]{isDirected, isWeighted};\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "public static void main(String[] args) {\n    List&lt;Edge&gt; edges = Arrays.asList(\n        new Edge(0,1,5), new Edge(1,2,3),\n        new Edge(2,0,4), new Edge(1,3,2));\n    boolean[] res = determineGraphType(edges);\n    System.out.println(\"Directed: \" + res[0] + \", Weighted: \" + res[1]);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n`"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "18-complexity-analysis",
      children: "1.8 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Determine directed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(E^2)) worst (naive) or (O(E)) with hash set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each edge checks reverse existence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Determine weighted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(E))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass checking weight field"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "19-advantages--disadvantages",
      children: "1.9 Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Directed graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Models asymmetric relationships (web links, follows)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More complex algorithms (SCC vs CC)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Undirected graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simpler algorithms, half the storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot model asymmetric relationships"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables optimization (shortest path)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra storage per edge"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "110-edge-cases",
      children: "1.10 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single vertex:"
        }), " (|V| = 1, |E| = 0) — trivially both directed and undirected."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-loop:"
        }), " Edge ((v, v)). In undirected, reverse = same, so not detected as directed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty graph:"
        }), " No edges — undirected by default."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mixed:"
        }), " Can a graph have both directed and undirected edges? Yes — called a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "mixed graph"
        }), ", though most algorithms require one type."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-adjacency-matrix",
      children: "2. Adjacency Matrix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Think of a flight booking system. You want to know \"Is there a direct flight from New York to London?\" An adjacency matrix is like a massive airport x airport table where cell [NYC][LON] = 1 if a direct flight exists, or shows the ticket price if weighted. Looking up any pair is instant (O(1)), but storing the table requires space for every possible pair — even airports with no connection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "21-definition",
      children: "2.1 Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "adjacency matrix"
      }), " is an (n \\times n) boolean (or numeric) matrix (M) where:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\nM[i][j] = \\begin{cases}\n1 \\text{ (or weight)} & \\text{if edge } (i, j) \\text{ exists} \\\n0 & \\text{otherwise}\n\\end{cases}\n]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For undirected graphs, (M) is symmetric: (M[i][j] = M[j][i])."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "22-algorithm-steps-to-build-an-adjacency-matrix",
      children: "2.2 Algorithm Steps to Build an Adjacency Matrix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize an (n \\times n) matrix with all zeros (or sentinel like (\\infty) for weighted)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each edge ((u, v)) in the edge list:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Set (\\text{matrix}[u][v] = 1) (or the weight)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If undirected, also set (\\text{matrix}[v][u] = 1)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "To query edge existence: return (\\text{matrix}[u][v] \\neq 0)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "To iterate neighbors of vertex (v): scan row (v) for non-zero entries."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "23-pseudocode",
      children: "2.3 Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`\nADJACENCY_MATRIX(n, edges, directed):\n// Initialize n x n matrix with 0\nmatrix = new int[n][n]\nfor i = 0 to n-1:\nfor j = 0 to n-1:\nmatrix[i][j] = 0"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for each (u, v, [weight]) in edges:\n    matrix[u][v] = weight or 1\n    if not directed:\n        matrix[v][u] = weight or 1\n\nreturn matrix\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAS_EDGE(matrix, u, v):\nreturn matrix[u][v] != 0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GET_NEIGHBORS(matrix, n, v):\nneighbors = []\nfor i = 0 to n-1:\nif matrix[v][i] != 0:\nneighbors.append(i)\nreturn neighbors\n`"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "24-dry-run",
      children: "2.4 Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " (n = 4), undirected edges: (0,1), (0,2), (1,2), (2,3)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Initialize (4 \\times 4) matrix."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    0   1   2   3 0   0   0   0   0 1   0   0   0   0 2   0   0   0   0 3   0   0   0   0"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Process edge (0,1)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    0   1   2   3 0   0   1   0   0 1   1   0   0   0 2   0   0   0   0 3   0   0   0   0"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Process edge (0,2)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    0   1   2   3 0   0   1   1   0 1   1   0   0   0 2   1   0   0   0 3   0   0   0   0"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Process edge (1,2)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    0   1   2   3 0   0   1   1   0 1   1   0   1   0 2   1   1   0   0 3   0   0   0   0"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Process edge (2,3)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    0   1   2   3 0   0   1   1   0 1   1   0   1   0 2   1   1   0   1 3   0   0   1   0"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Queries:"
      }), " hasEdge(0,1) = true (matrix[0][1] = 1), hasEdge(1,3) = false (matrix[1][3] = 0)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Neighbors of 2:"
      }), " Scan row 2 → [0, 1, 3]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "25-c-implementation",
      children: "2.5 C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`cpp\n#include <iostream>\n#include <vector>\nusing namespace std;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class AdjacencyMatrix {\nint n;\nvector<vector<int>> mat;\nbool directed;\npublic:\nAdjacencyMatrix(int n, bool dir = false) : n(n), directed(dir) {\nmat.assign(n, vector<int>(n, 0));\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void addEdge(int u, int v, int w = 1) {\n    if (u &lt; 0 || u &gt;= n || v &lt; 0 || v &gt;= n) return;\n    mat[u][v] = w;\n    if (!directed) mat[v][u] = w;\n}\n\nbool hasEdge(int u, int v) {\n    if (u &lt; 0 || u &gt;= n || v &lt; 0 || v &gt;= n) return false;\n    return mat[u][v] != 0;\n}\n\nvector&lt;int&gt; getNeighbors(int v) {\n    vector&lt;int&gt; res;\n    if (v &lt; 0 || v &gt;= n) return res;\n    for (int i = 0; i &lt; n; i++)\n        if (mat[v][i] != 0) res.push_back(i);\n    return res;\n}\n\nvoid print() {\n    for (int i = 0; i &lt; n; i++) {\n        for (int j = 0; j &lt; n; j++)\n            cout &lt;< mat[i][j] << \" \";\n        cout &lt;< \"\\n\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "int main() {\nAdjacencyMatrix g(4);\ng.addEdge(0, 1);\ng.addEdge(0, 2);\ng.addEdge(1, 2);\ng.addEdge(2, 3);\ng.print();\ncout << \"Edge (0,1): \" << g.hasEdge(0,1) << \"\\n\";\ncout << \"Edge (1,3): \" << g.hasEdge(1,3) << \"\\n\";\ncout << \"Neighbors of 2: \";\nfor (int v : g.getNeighbors(2)) cout << v << \" \";\ncout << \"\\n\";\nreturn 0;\n}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "0 1 1 0 1 0 1 0 1 1 0 1 0 0 1 0 Edge (0,1): 1 Edge (1,3): 0 Neighbors of 2: 0 1 3"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "26-python-implementation",
      children: "2.6 Python Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["`python\nclass AdjacencyMatrix:\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "init"
      }), "(self, n, directed=False):\nself.n = n\nself.directed = directed\nself.mat = [[0] * n for _ in range(n)]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "def add_edge(self, u, v, w=1):\n    if not (0 &lt;= u < self.n and 0 <= v < self.n):\n        return\n    self.mat[u][v] = w\n    if not self.directed:\n        self.mat[v][u] = w\n\ndef has_edge(self, u, v):\n    if not (0 &lt;= u < self.n and 0 <= v < self.n):\n        return False\n    return self.mat[u][v] != 0\n\ndef get_neighbors(self, v):\n    return [i for i in range(self.n) if self.mat[v][i] != 0]\n\ndef __str__(self):\n    return \"\\n\".join(\" \".join(str(x) for x in row) for row in self.mat)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "g = AdjacencyMatrix(4)\ng.add_edge(0, 1)\ng.add_edge(0, 2)\ng.add_edge(1, 2)\ng.add_edge(2, 3)\nprint(g)\nprint(\"Edge (0,1):\", g.has_edge(0, 1))\nprint(\"Edge (1,3):\", g.has_edge(1, 3))\nprint(\"Neighbors of 2:\", g.get_neighbors(2))\n`"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "27-java-implementation",
      children: "2.7 Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`java\nimport java.util.*;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class AdjacencyMatrix {\nprivate int n;\nprivate int[][] mat;\nprivate boolean directed;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "public AdjacencyMatrix(int n, boolean directed) {\n    this.n = n;\n    this.directed = directed;\n    mat = new int[n][n];\n}\n\npublic void addEdge(int u, int v, int w) {\n    if (u &lt; 0 || u &gt;= n || v &lt; 0 || v &gt;= n) return;\n    mat[u][v] = w;\n    if (!directed) mat[v][u] = w;\n}\n\npublic void addEdge(int u, int v) { addEdge(u, v, 1); }\n\npublic boolean hasEdge(int u, int v) {\n    if (u &lt; 0 || u &gt;= n || v &lt; 0 || v &gt;= n) return false;\n    return mat[u][v] != 0;\n}\n\npublic List&lt;Integer&gt; getNeighbors(int v) {\n    List&lt;Integer&gt; res = new ArrayList&lt;>();\n    if (v &lt; 0 || v &gt;= n) return res;\n    for (int i = 0; i &lt; n; i++)\n        if (mat[v][i] != 0) res.add(i);\n    return res;\n}\n\npublic void print() {\n    for (int i = 0; i &lt; n; i++) {\n        for (int j = 0; j &lt; n; j++)\n            System.out.print(mat[i][j] + \" \");\n        System.out.println();\n    }\n}\n\npublic static void main(String[] args) {\n    AdjacencyMatrix g = new AdjacencyMatrix(4, false);\n    g.addEdge(0, 1); g.addEdge(0, 2);\n    g.addEdge(1, 2); g.addEdge(2, 3);\n    g.print();\n    System.out.println(\"Edge (0,1): \" + g.hasEdge(0,1));\n    System.out.println(\"Edge (1,3): \" + g.hasEdge(1,3));\n    System.out.println(\"Neighbors of 2: \" + g.getNeighbors(2));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n`"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "28-complexity-analysis",
      children: "2.8 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V^2))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stores (n \\times n) entries regardless of actual edges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct index assignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remove edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct index assignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct index lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Neighbor iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must scan entire row of (n) entries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add vertex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V^2))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must rebuild entire matrix with new row/column"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why (O(V^2)) space is problematic:"
      }), " For (V = 10,000) (moderate social network), the matrix requires (10^8) entries. At 1 byte per entry = 100 MB. For (V = 1,000,000), it's (10^{12}) entries = impossible. Yet most real graphs have (E \\ll V^2) (sparse), making adjacency lists the practical choice."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "29-advantages--disadvantages",
      children: "2.9 Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1)) edge existence check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow neighbor iteration ((O(V)))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, predictable allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V^2)) — huge for large sparse graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge weight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct weight storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot represent parallel edges easily"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivial to code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wastes memory on zeros for sparse graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential for Floyd-Warshall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impractical for BFS/DFS on sparse graphs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "210-edge-cases",
      children: "2.10 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single vertex:"
        }), " (1 \\times 1) matrix with [0] — works, addEdge does nothing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disconnected graph:"
        }), " Most entries remain 0 — wastes space."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-loop:"
        }), " mat[v][v] = 1 — allowed if input specifies it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multigraph (parallel edges):"
        }), " Cannot represent directly with booleans. Use integers to count parallel edges, or store min weight."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Very large (n):"
        }), " (n > 10^5) makes the matrix impossible — switch to adjacency list."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-adjacency-list",
      children: "3. Adjacency List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Imagine a phone book for a small town. Instead of a massive grid of every possible pair of residents, each person has a short list of people they know personally. Looking up \"who does Alice know?\" is fast — just read her list. But checking \"does Alice know Bob?\" requires scanning her list. This is how Facebook stores the social graph: each user's friend list is an adjacency list."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "31-definition",
      children: "3.1 Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "adjacency list"
      }), " is an array (or map) of lists. For each vertex (v), (\\text{adj}[v]) stores a list of its neighbors (and optionally edge weights)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Space: (O(V + E)) — only stores edges that exist."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Edge query: (O(\\deg(v))) — must scan the list."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Neighbor iteration: (O(\\deg(v))) — direct iteration."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "32-algorithm-steps-to-build-an-adjacency-list",
      children: "3.2 Algorithm Steps to Build an Adjacency List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create an array ", (0,jsx_runtime.jsx)(_components.code, {
          children: "adj"
        }), " of size (n), each initialized to an empty list."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each edge ((u, v)):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Append (v) to (\\text{adj}[u])."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If undirected, append (u) to (\\text{adj}[v])."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "To query edge existence: search (\\text{adj}[u]) for (v)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "To iterate neighbors: traverse (\\text{adj}[v])."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "33-pseudocode",
      children: "3.3 Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ADJACENCY_LIST(n, edges, directed):\n    adj = new list of size n, each empty\n    for each (u, v, [weight]) in edges:\n        adj[u].append((v, weight) or v)\n        if not directed:\n            adj[v].append((u, weight) or u)\n    return adj\n\nHAS_EDGE(adj, u, v):\n    for each neighbor in adj[u]:\n        if neighbor == v:\n            return true\n    return false\n\nGET_NEIGHBORS(adj, v):\n    return adj[v]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "34-dry-run",
      children: "3.4 Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " (n = 5), directed edges: (0,1), (0,3), (1,2), (2,3), (3,4), (4,1)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Initialize empty lists."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "adj[0] = []\nadj[1] = []\nadj[2] = []\nadj[3] = []\nadj[4] = []\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Process (0,1). Append 1 to adj[0]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "adj[0] = [1]\nadj[1] = []\nadj[2] = []\nadj[3] = []\nadj[4] = []\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Process (0,3). Append 3 to adj[0]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "adj[0] = [1, 3]\nadj[1] = []\nadj[2] = []\nadj[3] = []\nadj[4] = []\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Process (1,2). Append 2 to adj[1]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "adj[0] = [1, 3]\nadj[1] = [2]\nadj[2] = []\nadj[3] = []\nadj[4] = []\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Process (2,3). Append 3 to adj[2]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "adj[0] = [1, 3]\nadj[1] = [2]\nadj[2] = [3]\nadj[3] = []\nadj[4] = []\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6:"
      }), " Process (3,4). Append 4 to adj[3]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "adj[0] = [1, 3]\nadj[1] = [2]\nadj[2] = [3]\nadj[3] = [4]\nadj[4] = []\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 7:"
      }), " Process (4,1). Append 1 to adj[4]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "adj[0] = [1, 3]\nadj[1] = [2]\nadj[2] = [3]\nadj[3] = [4]\nadj[4] = [1]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Neighbors of 0:"
      }), " adj[0] = [1, 3]. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge (0,1)?"
      }), " Scan adj[0] — found. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge (1,0)?"
      }), " Scan adj[1] = [2] — not found (directed)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "35-c-implementation",
      children: "3.5 C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <list>\n#include <algorithm>\nusing namespace std;\n\nclass AdjacencyList {\n    int n;\n    vector<list<int>> adj;\n    bool directed;\npublic:\n    AdjacencyList(int n, bool dir = false) : n(n), directed(dir) {\n        adj.resize(n);\n    }\n\n    void addEdge(int u, int v) {\n        if (u < 0 || u >= n || v < 0 || v >= n) return;\n        adj[u].push_back(v);\n        if (!directed) adj[v].push_back(u);\n    }\n\n    bool hasEdge(int u, int v) {\n        if (u < 0 || u >= n) return false;\n        return find(adj[u].begin(), adj[u].end(), v) != adj[u].end();\n    }\n\n    list<int> getNeighbors(int v) {\n        if (v < 0 || v >= n) return {};\n        return adj[v];\n    }\n\n    void print() {\n        for (int i = 0; i < n; i++) {\n            cout << i << \": \";\n            for (int v : adj[i]) cout << v << \" \";\n            cout << \"\\n\";\n        }\n    }\n};\n\nint main() {\n    AdjacencyList g(5, true);\n    g.addEdge(0, 1); g.addEdge(0, 3);\n    g.addEdge(1, 2); g.addEdge(2, 3);\n    g.addEdge(3, 4); g.addEdge(4, 1);\n    g.print();\n    cout << \"Edge (0,1): \" << g.hasEdge(0,1) << \"\\n\";\n    cout << \"Edge (1,0): \" << g.hasEdge(1,0) << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "0: 1 3\n1: 2\n2: 3\n3: 4\n4: 1\nEdge (0,1): 1\nEdge (1,0): 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "36-python-implementation",
      children: "3.6 Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AdjacencyList:\n    def __init__(self, n, directed=False):\n        self.n = n\n        self.directed = directed\n        self.adj = [[] for _ in range(n)]\n\n    def add_edge(self, u, v):\n        if not (0 <= u < self.n and 0 <= v < self.n):\n            return\n        self.adj[u].append(v)\n        if not self.directed:\n            self.adj[v].append(u)\n\n    def has_edge(self, u, v):\n        if not (0 <= u < self.n):\n            return False\n        return v in self.adj[u]\n\n    def get_neighbors(self, v):\n        if not (0 <= v < self.n):\n            return []\n        return self.adj[v]\n\n    def __str__(self):\n        lines = []\n        for i in range(self.n):\n            lines.append(f\"{i}: {' '.join(map(str, self.adj[i]))}\")\n        return \"\\n\".join(lines)\n\ng = AdjacencyList(5, True)\ng.add_edge(0, 1); g.add_edge(0, 3)\ng.add_edge(1, 2); g.add_edge(2, 3)\ng.add_edge(3, 4); g.add_edge(4, 1)\nprint(g)\nprint(\"Edge (0,1):\", g.has_edge(0, 1))\nprint(\"Edge (1,0):\", g.has_edge(1, 0))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "37-java-implementation",
      children: "3.7 Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\nclass AdjacencyList {\n    private int n;\n    private List<List<Integer>> adj;\n    private boolean directed;\n\n    public AdjacencyList(int n, boolean directed) {\n        this.n = n;\n        this.directed = directed;\n        adj = new ArrayList<>(n);\n        for (int i = 0; i < n; i++) adj.add(new ArrayList<>());\n    }\n\n    public void addEdge(int u, int v) {\n        if (u < 0 || u >= n || v < 0 || v >= n) return;\n        adj.get(u).add(v);\n        if (!directed) adj.get(v).add(u);\n    }\n\n    public boolean hasEdge(int u, int v) {\n        if (u < 0 || u >= n) return false;\n        return adj.get(u).contains(v);\n    }\n\n    public List<Integer> getNeighbors(int v) {\n        if (v < 0 || v >= n) return new ArrayList<>();\n        return adj.get(v);\n    }\n\n    public void print() {\n        for (int i = 0; i < n; i++)\n            System.out.println(i + \": \" + adj.get(i));\n    }\n\n    public static void main(String[] args) {\n        AdjacencyList g = new AdjacencyList(5, true);\n        g.addEdge(0, 1); g.addEdge(0, 3);\n        g.addEdge(1, 2); g.addEdge(2, 3);\n        g.addEdge(3, 4); g.addEdge(4, 1);\n        g.print();\n        System.out.println(\"Edge (0,1): \" + g.hasEdge(0,1));\n        System.out.println(\"Edge (1,0): \" + g.hasEdge(1,0));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "38-complexity-analysis",
      children: "3.8 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V + E))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array of (V) heads + total (E) nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push to front/back of linked list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remove edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\deg(v)))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must find the target in the list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\deg(v)))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scan of the neighbor list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Neighbor iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\deg(v)))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct list traversal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add vertex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append one empty list"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why (O(V+E)) is optimal:"
      }), " Each edge appears exactly once (or twice for undirected) in the structure. No space is wasted on non-edges. For a sparse graph with (V = 10^6) and (E = 10^7), adjacency list uses ~(10^7) entries vs adjacency matrix requiring (10^{12}) entries — a 100,000x savings."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "39-advantages--disadvantages",
      children: "3.9 Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V+E)) — excellent for sparse graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly more overhead per edge (pointer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast neighbor iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow edge existence check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to add/remove vertices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder to code than matrix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivially stores (neighbor, weight) pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly more complex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural for BFS, DFS, Dijkstra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor for Floyd-Warshall (matrix needed)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "310-edge-cases",
      children: "3.10 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single vertex:"
        }), " Empty list at adj[0] — works."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Isolated vertex:"
        }), " Its list remains empty — no space wasted."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-loop:"
        }), " adj[v] contains v — allowed, just push."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multigraph:"
        }), " Lists can contain duplicates — handle by checking before adding or counting occurrences."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Very dense graph:"
        }), " If (E \\approx V^2), lists become long ((O(V)) per list), and edge queries degrade to (O(V)). Switch to matrix."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-edge-list",
      children: "4. Edge List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Think of an airline's flight schedule — a simple list of all flights: (JFK, LHR, $800), (JFK, CDG, $650), (LHR, DXB, $400). No fancy indexing, no lookup structure — just the raw data. When you need to sort all edges by weight (as in Kruskal's algorithm for Minimum Spanning Tree), an edge list is the natural representation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "41-definition",
      children: "4.1 Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "edge list"
      }), " is a simple list (array) of all edges. Each element is a tuple ((u, v)) for unweighted graphs or ((u, v, w)) for weighted graphs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Space: (O(E)) — the most compact representation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Edge query: (O(E)) — must scan the entire list."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Neighbor iteration: (O(E)) — must scan entire list for matches."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "42-algorithm-steps-to-build-an-edge-list",
      children: "4.2 Algorithm Steps to Build an Edge List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create an empty list ", (0,jsx_runtime.jsx)(_components.code, {
          children: "edges"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each edge ((u, v)) in the input: append ((u, v)) to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "edges"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For edge existence: scan all edges for a match."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For neighbors: scan all edges and collect those incident to (v)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "43-pseudocode",
      children: "4.3 Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EDGE_LIST(edges_input):\n    return list of (u, v, [w]) for each input edge\n\nHAS_EDGE(edge_list, u, v):\n    for each (a, b) in edge_list:\n        if a == u and b == v:\n            return true\n    return false\n\nGET_NEIGHBORS(edge_list, v, directed):\n    neighbors = []\n    for each (a, b) in edge_list:\n        if a == v: neighbors.append(b)\n        if not directed and b == v: neighbors.append(a)\n    return neighbors\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "44-dry-run",
      children: "4.4 Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Undirected edges: (0,1,5), (0,2,2), (1,2,1), (1,3,4), (2,3,3)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edge List State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append (0,1,5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[(0,1,5)]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append (0,2,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[(0,1,5), (0,2,2)]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append (1,2,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[(0,1,5), (0,2,2), (1,2,1)]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append (1,3,4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[(0,1,5), (0,2,2), (1,2,1), (1,3,4)]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append (2,3,3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[(0,1,5), (0,2,2), (1,2,1), (1,3,4), (2,3,3)]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Query hasEdge(1,3):"
      }), " Scan list — found at index 3 → true."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Neighbors of 2:"
      }), " Scan all edges — (0,2), (1,2), (2,3) → [0, 1, 3]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "45-c-implementation",
      children: "4.5 C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <tuple>\nusing namespace std;\n\nclass EdgeList {\n    vector<tuple<int,int,int>> edges;\n    bool directed;\npublic:\n    EdgeList(bool dir = false) : directed(dir) {}\n\n    void addEdge(int u, int v, int w = 1) {\n        edges.push_back({u, v, w});\n    }\n\n    bool hasEdge(int u, int v) {\n        for (auto [a, b, w] : edges)\n            if (a == u && b == v) return true;\n        if (!directed)\n            for (auto [a, b, w] : edges)\n                if (a == v && b == u) return true;\n        return false;\n    }\n\n    vector<pair<int,int>> getNeighbors(int v) {\n        vector<pair<int,int>> res;\n        for (auto [a, b, w] : edges) {\n            if (a == v) res.push_back({b, w});\n            if (!directed && b == v) res.push_back({a, w});\n        }\n        return res;\n    }\n\n    const auto& getEdges() const { return edges; }\n    int edgeCount() const { return edges.size(); }\n};\n\nint main() {\n    EdgeList g(false);\n    g.addEdge(0, 1, 5); g.addEdge(0, 2, 2);\n    g.addEdge(1, 2, 1); g.addEdge(1, 3, 4);\n    g.addEdge(2, 3, 3);\n    cout << \"Edge count: \" << g.edgeCount() << \"\\n\";\n    cout << \"Edge (1,3): \" << g.hasEdge(1,3) << \"\\n\";\n    cout << \"Neighbors of 2: \";\n    for (auto [v, w] : g.getNeighbors(2))\n        cout << \"(\" << v << \",w=\" << w << \") \";\n    cout << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Edge count: 5\nEdge (1,3): 1\nNeighbors of 2: (0,w=2) (1,w=1) (3,w=3)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "46-python-implementation",
      children: "4.6 Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class EdgeList:\n    def __init__(self, directed=False):\n        self.directed = directed\n        self.edges = []\n\n    def add_edge(self, u, v, w=1):\n        self.edges.append((u, v, w))\n\n    def has_edge(self, u, v):\n        for a, b, _ in self.edges:\n            if a == u and b == v:\n                return True\n        if not self.directed:\n            for a, b, _ in self.edges:\n                if a == v and b == u:\n                    return True\n        return False\n\n    def get_neighbors(self, v):\n        res = []\n        for a, b, w in self.edges:\n            if a == v:\n                res.append((b, w))\n            if not self.directed and b == v:\n                res.append((a, w))\n        return res\n\ng = EdgeList(False)\ng.add_edge(0, 1, 5); g.add_edge(0, 2, 2)\ng.add_edge(1, 2, 1); g.add_edge(1, 3, 4)\ng.add_edge(2, 3, 3)\nprint(\"Edge count:\", len(g.edges))\nprint(\"Edge (1,3):\", g.has_edge(1, 3))\nprint(\"Neighbors of 2:\", g.get_neighbors(2))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "47-java-implementation",
      children: "4.7 Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\nclass EdgeList {\n    static class Edge {\n        int u, v, w;\n        Edge(int u, int v, int w) { this.u = u; this.v = v; this.w = w; }\n    }\n\n    private List<Edge> edges;\n    private boolean directed;\n\n    public EdgeList(boolean directed) {\n        this.directed = directed;\n        edges = new ArrayList<>();\n    }\n\n    public void addEdge(int u, int v, int w) { edges.add(new Edge(u, v, w)); }\n\n    public boolean hasEdge(int u, int v) {\n        for (Edge e : edges) if (e.u == u && e.v == v) return true;\n        if (!directed) for (Edge e : edges) if (e.u == v && e.v == u) return true;\n        return false;\n    }\n\n    public List<String> getNeighbors(int v) {\n        List<String> res = new ArrayList<>();\n        for (Edge e : edges) {\n            if (e.u == v) res.add(\"(\" + e.v + \",w=\" + e.w + \")\");\n            if (!directed && e.v == v) res.add(\"(\" + e.u + \",w=\" + e.w + \")\");\n        }\n        return res;\n    }\n\n    public static void main(String[] args) {\n        EdgeList g = new EdgeList(false);\n        g.addEdge(0,1,5); g.addEdge(0,2,2);\n        g.addEdge(1,2,1); g.addEdge(1,3,4);\n        g.addEdge(2,3,3);\n        System.out.println(\"Edge count: \" + g.edges.size());\n        System.out.println(\"Edge (1,3): \" + g.hasEdge(1,3));\n        System.out.println(\"Neighbors of 2: \" + g.getNeighbors(2));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "48-complexity-analysis",
      children: "4.8 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(E))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only stores edges, no per-vertex overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append to array/list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(E))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scan of entire list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Neighbor iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(E))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must scan all edges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remove edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(E))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find + shift/remove"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sort by weight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(E \\log E))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard sort on edge list"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why (O(E)) space is minimal:"
      }), " No per-vertex data structure at all. For memory-constrained environments or when you mainly need to sort edges (Kruskal's MST), this is ideal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "49-advantages--disadvantages",
      children: "4.9 Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most compact representation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot quickly answer adjacency queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural for sorting by weight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No vertex-centric operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perfect for file storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must rebuild for each algorithm run"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simplicity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivial to code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terrible for BFS/DFS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "410-edge-cases",
      children: "4.10 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty graph:"
        }), " Empty list — works."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single edge:"
        }), " List with one element — works."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duplicate edges:"
        }), " List may contain duplicates — filter or tolerate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Very large edge count:"
        }), " (O(E)) scan becomes slow — use adjacency list for frequent queries."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-degree-calculation",
      children: "5. Degree Calculation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " In a Twitter network, your \"out-degree\" is the number of people you follow, and your \"in-degree\" is the number of people who follow you. On Facebook (undirected), your \"degree\" is just your number of friends. The \"degree sum theorem\" says every handshake increases the total degree count by 2 — if you sum everyone's friends, you get twice the number of handshakes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "51-definition",
      children: "5.1 Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Degree"
        }), " (undirected): (\\deg(v)) = number of edges incident to vertex (v)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In-degree"
        }), " (directed): (\\text{in}(v)) = number of edges entering (v)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out-degree"
        }), " (directed): (\\text{out}(v)) = number of edges leaving (v)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Handshaking Lemma:"
      }), " (\\sum_{v \\in V} \\deg(v) = 2|E|). Each edge contributes 1 to the degree of each endpoint."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "52-algorithm-steps-for-degree-calculation-adjacency-list",
      children: "5.2 Algorithm Steps for Degree Calculation (Adjacency List)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize arrays: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "degree"
        }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "inDegree"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "outDegree"
        }), ") of size (n) with zeros."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each vertex (u):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For each neighbor (v) in (\\text{adj}[u]):\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Increment (\\text{outDegree}[u])."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "If directed, increment (\\text{inDegree}[v])."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For undirected, degree = outDegree (same as inDegree)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "53-pseudocode",
      children: "5.3 Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CALCULATE_DEGREES(adj, directed):\n    n = len(adj)\n    outDeg = new int[n]  // all 0\n    inDeg = new int[n]   // all 0\n\n    for u = 0 to n-1:\n        for each v in adj[u]:\n            outDeg[u]++\n            if directed:\n                inDeg[v]++\n\n    if not directed:\n        return outDeg   // same as degree\n    else:\n        return (inDeg, outDeg)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "54-dry-run",
      children: "5.4 Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Directed adjacency list from earlier example."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "adj[0] = [1, 3]\nadj[1] = [2]\nadj[2] = [3]\nadj[3] = [4]\nadj[4] = [1]\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "u"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "v"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "outDeg[u]++"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "inDeg[v]++"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "outDeg[0]=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inDeg[1]=1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "outDeg[0]=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inDeg[3]=1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "outDeg[1]=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inDeg[2]=1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "outDeg[2]=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inDeg[3]=2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "outDeg[3]=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inDeg[4]=1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "outDeg[4]=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inDeg[1]=2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Vertex"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Out-Degree"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "In-Degree"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification:"
      }), " Sum of out = (2+1+1+1+1 = 6), Sum of in = (0+2+1+2+1 = 6). (|E| = 6). (\\sum \\text{out} = \\sum \\text{in} = |E| = 6) ✓"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "55-c-implementation",
      children: "5.5 C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <list>\nusing namespace std;\n\nvoid printDegrees(const vector<list<int>>& adj, bool directed) {\n    int n = adj.size();\n    vector<int> outDeg(n, 0), inDeg(n, 0);\n\n    for (int u = 0; u < n; u++)\n        for (int v : adj[u]) {\n            outDeg[u]++;\n            if (directed) inDeg[v]++;\n        }\n\n    for (int i = 0; i < n; i++) {\n        if (directed)\n            cout << \"Vertex \" << i << \": in=\" << inDeg[i]\n                 << \", out=\" << outDeg[i] << \"\\n\";\n        else\n            cout << \"Vertex \" << i << \": deg=\" << outDeg[i] << \"\\n\";\n    }\n}\n\nint main() {\n    vector<list<int>> adj(5);\n    adj[0] = {1, 3}; adj[1] = {2};\n    adj[2] = {3};    adj[3] = {4};\n    adj[4] = {1};\n\n    cout << \"Directed degrees:\\n\";\n    printDegrees(adj, true);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "56-python-implementation",
      children: "5.6 Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def print_degrees(adj, directed):\n    n = len(adj)\n    out_deg = [0] * n\n    in_deg = [0] * n\n\n    for u in range(n):\n        for v in adj[u]:\n            out_deg[u] += 1\n            if directed:\n                in_deg[v] += 1\n\n    for i in range(n):\n        if directed:\n            print(f\"Vertex {i}: in={in_deg[i]}, out={out_deg[i]}\")\n        else:\n            print(f\"Vertex {i}: deg={out_deg[i]}\")\n\nadj = [[1, 3], [2], [3], [4], [1]]\nprint(\"Directed degrees:\")\nprint_degrees(adj, True)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "57-java-implementation",
      children: "5.7 Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\nclass DegreeCalc {\n    static void printDegrees(List<List<Integer>> adj, boolean directed) {\n        int n = adj.size();\n        int[] outDeg = new int[n];\n        int[] inDeg = new int[n];\n\n        for (int u = 0; u < n; u++)\n            for (int v : adj.get(u)) {\n                outDeg[u]++;\n                if (directed) inDeg[v]++;\n            }\n\n        for (int i = 0; i < n; i++) {\n            if (directed)\n                System.out.println(\"Vertex \" + i + \": in=\" + inDeg[i]\n                    + \", out=\" + outDeg[i]);\n            else\n                System.out.println(\"Vertex \" + i + \": deg=\" + outDeg[i]);\n        }\n    }\n\n    public static void main(String[] args) {\n        List<List<Integer>> adj = Arrays.asList(\n            Arrays.asList(1, 3), Arrays.asList(2),\n            Arrays.asList(3), Arrays.asList(4),\n            Arrays.asList(1));\n        System.out.println(\"Directed degrees:\");\n        printDegrees(adj, true);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "58-complexity-analysis",
      children: "5.8 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Undirected degree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V+E))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visit each neighbor exactly once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Directed in/out-degree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V+E))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same traversal, track both counters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency matrix degree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V^2))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must scan entire row (and column for in-degree)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "59-advantages--disadvantages",
      children: "5.9 Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear in graph size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must iterate all edges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct row-sum for degree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V^2)) — poor for sparse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Degree sum theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "510-edge-cases",
      children: "5.10 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Isolated vertex:"
        }), " Degree 0 — correct."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complete graph:"
        }), " Degree = (n-1) for all vertices."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-loop:"
        }), " Counts as 2 for undirected degree (adds 1 to each end = same vertex twice), 1 for out-degree in directed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero-vertex graph:"
        }), " Trivial — no degrees to compute."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-complete-graph",
      children: "6. Complete Graph"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Imagine a conference where every attendee shakes hands with every other attendee exactly once. If there are (n) people, the total number of handshakes is (n(n-1)/2). This is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "complete graph"
      }), " — every vertex is directly connected to every other vertex. This represents the maximum possible connections in a network."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "61-definition",
      children: "6.1 Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "complete graph"
      }), " (K_n) is an undirected graph where every pair of distinct vertices is connected by an edge."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(|E| = \\frac{n(n-1)}{2})"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(\\deg(v) = n-1) for all vertices (v)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For directed complete graphs: (|E| = n(n-1)) (both directions for every pair)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "62-properties",
      children: "6.2 Properties"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Number of edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(n(n-1)/2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Degree of each vertex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(n-1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diameter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (any vertex reaches any other in one hop)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chromatic number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connectivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(n-1) (vertex connectivity)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "63-algorithm-steps-to-check-if-a-graph-is-complete",
      children: "6.3 Algorithm Steps to Check if a Graph is Complete"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Count the number of edges (|E|) in the graph."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If (|E| = n(n-1)/2) for undirected (or (n(n-1)) for directed) → complete."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alternative: For each vertex, check that (\\deg(v) = n-1)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "64-pseudocode",
      children: "6.4 Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "IS_COMPLETE(adj):\n    n = len(adj)\n    for each vertex v in 0..n-1:\n        deg = len(adj[v])\n        if self-loop present: deg--  // self-loop should not count twice\n        if deg != n - 1:\n            return false\n    return true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "65-dry-run",
      children: "6.5 Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Check if 4-vertex graph is complete."
      }), " Adjacency list:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "adj[0] = [1, 2, 3]\nadj[1] = [0, 2, 3]\nadj[2] = [0, 1, 3]\nadj[3] = [0, 1, 2]\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Vertex"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "deg(v)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n-1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complete?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Complete graph (K_4)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "66-c-implementation",
      children: "6.6 C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <list>\nusing namespace std;\n\nbool isComplete(const vector<list<int>>& adj) {\n    int n = adj.size();\n    for (int i = 0; i < n; i++) {\n        if ((int)adj[i].size() != n - 1) return false;\n    }\n    return true;\n}\n\nint main() {\n    vector<list<int>> adj(4);\n    adj[0] = {1,2,3}; adj[1] = {0,2,3};\n    adj[2] = {0,1,3}; adj[3] = {0,1,2};\n    cout << \"Is complete: \" << isComplete(adj) << \"\\n\";\n\n    vector<list<int>> adj2(4);\n    adj2[0] = {1,2}; adj2[1] = {0,2};\n    adj2[2] = {0,1}; adj2[3] = {0};\n    cout << \"Is complete: \" << isComplete(adj2) << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Is complete: 1\nIs complete: 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "67-python-implementation",
      children: "6.7 Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def is_complete(adj):\n    n = len(adj)\n    return all(len(adj[i]) == n - 1 for i in range(n))\n\nadj = [[1, 2, 3], [0, 2, 3], [0, 1, 3], [0, 1, 2]]\nprint(\"Is complete:\", is_complete(adj))\n\nadj2 = [[1, 2], [0, 2], [0, 1], [0]]\nprint(\"Is complete:\", is_complete(adj2))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "68-java-implementation",
      children: "6.8 Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\nclass CompleteGraph {\n    static boolean isComplete(List<List<Integer>> adj) {\n        int n = adj.size();\n        for (int i = 0; i < n; i++)\n            if (adj.get(i).size() != n - 1) return false;\n        return true;\n    }\n\n    public static void main(String[] args) {\n        List<List<Integer>> adj = Arrays.asList(\n            Arrays.asList(1,2,3), Arrays.asList(0,2,3),\n            Arrays.asList(0,1,3), Arrays.asList(0,1,2));\n        System.out.println(\"Is complete: \" + isComplete(adj));\n\n        List<List<Integer>> adj2 = Arrays.asList(\n            Arrays.asList(1,2), Arrays.asList(0,2),\n            Arrays.asList(0,1), Arrays.asList(0));\n        System.out.println(\"Is complete: \" + isComplete(adj2));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "69-complexity-analysis",
      children: "6.9 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Check completeness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just check degree of each vertex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Count edges in complete graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formula (n(n-1)/2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Build complete graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V^2))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must add all (n(n-1)/2) edges"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "610-edge-cases",
      children: "6.10 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "n = 0:"
        }), " Trivially complete (no vertices)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "n = 1:"
        }), " Single vertex with no edges — vacuously complete (no pairs to connect)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "n = 2:"
        }), " One edge needed — K2 is a single edge."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-bipartite-graph",
      children: "7. Bipartite Graph"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Think of a dating app. There are two sets: men and women. Connections (matches) only exist between the sets, never within a set. This is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bipartite graph"
      }), ". Another example: in a streaming service, users and movies form a bipartite graph — users rate movies, but users don't rate other users and movies don't rate movies. A bipartite graph can be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2-colored"
      }), " — paint all vertices red or blue such that no edge connects same-colored vertices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "71-definition",
      children: "7.1 Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A graph (G = (V, E)) is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bipartite"
      }), " if (V) can be partitioned into two disjoint sets (U) and (W) such that every edge connects a vertex in (U) to a vertex in (W)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Equivalent to: the graph is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2-colorable"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Equivalent to: the graph contains ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no odd-length cycles"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A graph that contains an odd cycle is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not bipartite"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "72-algorithm-steps-bfs-based-2-coloring",
      children: "7.2 Algorithm Steps (BFS-based 2-Coloring)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize ", (0,jsx_runtime.jsx)(_components.code, {
          children: "color"
        }), " array of size (n) with -1 (uncolored)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each vertex (v) (handles disconnected graphs):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If uncolored, set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "color[v] = 0"
            }), " and BFS from (v)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For each neighbor (u) of current node:\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["If uncolored, set ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "color[u] = 1 - color[current]"
                }), "."]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "If colored and same as current → not bipartite."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If BFS completes without conflict → bipartite."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "73-pseudocode",
      children: "7.3 Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "IS_BIPARTITE(adj):\n    n = len(adj)\n    color = [-1] * n\n\n    for start = 0 to n-1:\n        if color[start] != -1: continue\n        queue = [start]\n        color[start] = 0\n\n        while queue not empty:\n            v = queue.pop(0)\n            for each u in adj[v]:\n                if color[u] == -1:\n                    color[u] = 1 - color[v]\n                    queue.push(u)\n                else if color[u] == color[v]:\n                    return false  // conflict\n    return true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "74-dry-run",
      children: "7.4 Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Graph:"
      }), " 4 vertices. Edges: (0,1), (0,2), (1,3), (2,3). Is it bipartite?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "adj[0] = [1, 2]\nadj[1] = [0, 3]\nadj[2] = [0, 3]\nadj[3] = [1, 2]\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Queue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Vertex v"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "color[v]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Neighbor u"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "color[u]"
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
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "color[0]=0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "color[1]=1, queue=[1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "color[2]=1, queue=[1,2]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1,2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 (OK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "color[3]=0, queue=[2,3]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2,3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 (OK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 (OK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (OK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (OK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Bipartite! Partitions: (U = {0, 3}) (color 0), (W = {1, 2}) (color 1)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-bipartite example:"
      }), " Triangle (3-cycle): edges (0,1), (1,2), (2,0). Try coloring 0=0, 1=1, but 2 adjacent to both 0 (color 0) and 1 (color 1) — conflict! Contains odd cycle → not bipartite."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "75-c-implementation",
      children: "7.5 C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <list>\n#include <queue>\nusing namespace std;\n\nbool isBipartite(const vector<list<int>>& adj) {\n    int n = adj.size();\n    vector<int> color(n, -1);\n\n    for (int start = 0; start < n; start++) {\n        if (color[start] != -1) continue;\n        queue<int> q;\n        q.push(start);\n        color[start] = 0;\n\n        while (!q.empty()) {\n            int v = q.front(); q.pop();\n            for (int u : adj[v]) {\n                if (color[u] == -1) {\n                    color[u] = 1 - color[v];\n                    q.push(u);\n                } else if (color[u] == color[v]) {\n                    return false;\n                }\n            }\n        }\n    }\n    return true;\n}\n\nint main() {\n    vector<list<int>> adj(4);\n    adj[0] = {1,2}; adj[1] = {0,3};\n    adj[2] = {0,3}; adj[3] = {1,2};\n    cout << \"Bipartite: \" << isBipartite(adj) << \"\\n\";\n\n    vector<list<int>> triangle(3);\n    triangle[0] = {1,2}; triangle[1] = {0,2}; triangle[2] = {0,1};\n    cout << \"Triangle is bipartite: \" << isBipartite(triangle) << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Bipartite: 1\nTriangle is bipartite: 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "76-python-implementation",
      children: "7.6 Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import deque\n\ndef is_bipartite(adj):\n    n = len(adj)\n    color = [-1] * n\n\n    for start in range(n):\n        if color[start] != -1:\n            continue\n        q = deque([start])\n        color[start] = 0\n\n        while q:\n            v = q.popleft()\n            for u in adj[v]:\n                if color[u] == -1:\n                    color[u] = 1 - color[v]\n                    q.append(u)\n                elif color[u] == color[v]:\n                    return False\n    return True\n\nadj = [[1, 2], [0, 3], [0, 3], [1, 2]]\nprint(\"Bipartite:\", is_bipartite(adj))\n\ntriangle = [[1, 2], [0, 2], [0, 1]]\nprint(\"Triangle is bipartite:\", is_bipartite(triangle))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "77-java-implementation",
      children: "7.7 Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\nclass BipartiteCheck {\n    static boolean isBipartite(List<List<Integer>> adj) {\n        int n = adj.size();\n        int[] color = new int[n];\n        Arrays.fill(color, -1);\n\n        for (int start = 0; start < n; start++) {\n            if (color[start] != -1) continue;\n            Queue<Integer> q = new LinkedList<>();\n            q.add(start);\n            color[start] = 0;\n\n            while (!q.isEmpty()) {\n                int v = q.poll();\n                for (int u : adj.get(v)) {\n                    if (color[u] == -1) {\n                        color[u] = 1 - color[v];\n                        q.add(u);\n                    } else if (color[u] == color[v]) {\n                        return false;\n                    }\n                }\n            }\n        }\n        return true;\n    }\n\n    public static void main(String[] args) {\n        List<List<Integer>> adj = Arrays.asList(\n            Arrays.asList(1,2), Arrays.asList(0,3),\n            Arrays.asList(0,3), Arrays.asList(1,2));\n        System.out.println(\"Bipartite: \" + isBipartite(adj));\n\n        List<List<Integer>> tri = Arrays.asList(\n            Arrays.asList(1,2), Arrays.asList(0,2), Arrays.asList(0,1));\n        System.out.println(\"Triangle bipartite: \" + isBipartite(tri));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "78-complexity-analysis",
      children: "7.8 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2-coloring check (BFS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V+E))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each vertex/edge visited once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2-coloring check (matrix)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V^2))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each row must be scanned"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space (BFS queue)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue holds up to one level"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why BFS works:"
      }), " BFS explores level by level. In a bipartite graph, all vertices at even depth get color 0, odd depth get color 1. An edge connecting same-depth vertices = odd cycle = not bipartite."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "79-advantages--disadvantages",
      children: "7.9 Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V+E)) BFS is efficient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires adjacency list for linear time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Usefulness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Models matching, assignment problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triangle graph (odd cycle) breaks it"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intuition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-coloring is easy to understand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disconnected graphs need outer loop"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "710-edge-cases",
      children: "7.10 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single vertex:"
        }), " No edges → trivially bipartite."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty graph:"
        }), " No edges → bipartite (all vertices same color)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disconnected bipartite:"
        }), " Each component independently 2-colorable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-loop:"
        }), " A self-loop creates a cycle of length 1 (odd) → not bipartite."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adjacency-matrix-vs-list-vs-edge-list--comparison-table",
      children: "Adjacency Matrix vs List vs Edge List — Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Adjacency Matrix"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Adjacency List"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edge List"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V^2))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V+E))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(E))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge existence query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\deg(v)))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(E))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Neighbor iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\deg(v)))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(E))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remove edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\deg(v)))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(E))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add vertex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V^2))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sort edges by weight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(E \\log E))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Degree calculation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V)) per vertex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\deg(v))) per vertex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(E))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory per edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 bit (or 4–8 bytes weight)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8–16 bytes (node + pointer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12–24 bytes (tuple)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache friendliness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (contiguous)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (scattered nodes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (contiguous)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense graphs, Floyd-Warshall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sparse graphs, BFS, DFS, Dijkstra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kruskal's MST, I/O, sorting"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision Rule:"
      }), " If you need fast edge existence checks AND the graph is dense → matrix. If you mostly iterate neighbors AND the graph is sparse → adjacency list. If you're reading from a file or sorting edges → edge list."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Adjacency Matrix"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Adjacency List"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edge List"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V^2))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V+E))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(E))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\deg(v)))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(E))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Neighbor iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\deg(v)))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(E))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remove edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\deg(v)))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(E))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sparse graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I/O, simple storage"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-graph-terminology",
      children: "Quick Reference: Graph Terminology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Degree (undirected)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of edges incident to a vertex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "In-degree (directed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of edges entering a vertex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Out-degree (directed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of edges leaving a vertex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence of vertices connected by edges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path with no repeated vertices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path where first = last, no repeated vertices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connected graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path exists between every pair of vertices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connected component"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximal connected subgraph"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete graph (K_n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every pair of vertices is connected by an edge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bipartite graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertices divided into two sets; edges only between sets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dense graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(E \\approx V^2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sparse graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(E \\ll V^2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connected acyclic graph, (E = V - 1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subgraph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subset of vertices and edges from a graph"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spanning tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subgraph that is a tree covering all vertices"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Graph Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Representation Choice"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Social network (Facebook)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undirected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Friendship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency list (sparse)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Social network (Twitter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Follow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency list (sparse)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hyperlink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency list (sparse)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Road network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted undirected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distance / time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency list (sparse)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Computer network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted directed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth / latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency list (sparse)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prerequisite chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directed acyclic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Course dependency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency list (sparse)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recommendation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted bipartite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-item affinity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency list with hash sets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flight routes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted directed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost / duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge list (for sorting by cost)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protein interaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undirected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency list (sparse)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Electrical grid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted undirected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impedance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency matrix (dense)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-choosing-the-right-representation-for-different-problem-types",
      children: "1. Choosing the Right Representation for Different Problem Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended Representation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BFS / DFS / shortest path on sparse graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast neighbor iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Floyd-Warshall (all-pairs shortest path)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Needs (O(1)) access to all pairs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kruskal's MST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Needs to sort edges by weight"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dijkstra (single-source)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need fast neighbor access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Check if graph has any edge with weight < threshold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1)) random access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transitive closure (reachability)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency matrix (bit-set optimized)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix multiplication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graph stored in file / database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple serialization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-detect-cycle-in-a-directed-graph",
      children: "2. Detect Cycle in a Directed Graph"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      }), " Use DFS with three-state coloring (0 = unvisited, 1 = in current path, 2 = done)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def has_cycle_directed(adj):\n    n = len(adj)\n    state = [0] * n  # 0=unvisited, 1=in-stack, 2=done\n\n    def dfs(v):\n        if state[v] == 1: return True  # back edge → cycle\n        if state[v] == 2: return False\n        state[v] = 1\n        for u in adj[v]:\n            if dfs(u): return True\n        state[v] = 2\n        return False\n\n    for v in range(n):\n        if state[v] == 0:\n            if dfs(v): return True\n    return False\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " (O(V+E)) time, (O(V)) space for recursion stack."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-detect-cycle-in-an-undirected-graph",
      children: "3. Detect Cycle in an Undirected Graph"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      }), " DFS with parent tracking — if we find an edge to an already-visited vertex that is NOT the parent, we have a cycle."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def has_cycle_undirected(adj):\n    n = len(adj)\n    visited = [False] * n\n\n    def dfs(v, parent):\n        visited[v] = True\n        for u in adj[v]:\n            if not visited[u]:\n                if dfs(u, v): return True\n            elif u != parent:  # visited and not parent → cycle\n                return True\n        return False\n\n    for v in range(n):\n        if not visited[v]:\n            if dfs(v, -1): return True\n    return False\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " (O(V+E)) time, (O(V)) space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-topological-sort-dag",
      children: "4. Topological Sort (DAG)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach (Kahn's algorithm — BFS-based):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import deque\n\ndef topological_sort(adj):\n    n = len(adj)\n    in_deg = [0] * n\n    for u in range(n):\n        for v in adj[u]:\n            in_deg[v] += 1\n\n    q = deque([i for i in range(n) if in_deg[i] == 0])\n    result = []\n\n    while q:\n        v = q.popleft()\n        result.append(v)\n        for u in adj[v]:\n            in_deg[u] -= 1\n            if in_deg[u] == 0:\n                q.append(u)\n\n    if len(result) != n:\n        return []  # cycle detected → no valid topological order\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " (O(V+E)) time, (O(V)) space."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world use:"
      }), " Course prerequisite scheduling, build system dependency resolution, task scheduling."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-google-maps--road-networks",
      children: "1. Google Maps — Road Networks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Google Maps models the road network as a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "large, sparse, weighted, directed graph"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vertices:"
        }), " Intersections and waypoints"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edges:"
        }), " Road segments (directed for one-way streets)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weights:"
        }), " Travel time (dynamic — adjusts for traffic), distance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Algorithms:"
        }), " Dijkstra / A* for shortest path, contraction hierarchies for precomputation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scale:"
        }), " Billions of vertices, processed in milliseconds via precomputed landmarks"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "\"Finding the shortest path between two points in a city is a graph problem — maps are just graphs with geographic coordinates attached to each vertex.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-facebook--instagram--social-graphs",
      children: "2. Facebook / Instagram — Social Graphs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Facebook's social graph has ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3+ billion vertices"
      }), " (users) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "trillions of edges"
      }), " (friendships)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Graph type:"
        }), " Undirected (friendship), directed (follow), weighted (interaction frequency)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Representation:"
        }), " Custom adjacency list (TAO — distributed graph store built on MySQL)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Operations:"
        }), " Friend suggestions (triangle counting), feed ranking (edge weight = interaction recency), community detection (connected components)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Challenge:"
        }), " Sharding a graph across thousands of machines while maintaining locality"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "\"When you see 'People You May Know', Facebook is counting triangles in the social graph to suggest friends-of-friends.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-pagerank--web-graph",
      children: "3. PageRank — Web Graph"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Google's original PageRank algorithm treats the web as a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "directed graph"
      }), " of pages connected by hyperlinks."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vertices:"
        }), " Webpages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edges:"
        }), " Hyperlinks (directed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Algorithm:"
        }), " Random walk — a page is \"important\" if many important pages link to it"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mathematically:"
        }), " Eigenvector computation on the adjacency matrix (normalized)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scale:"
        }), " 100+ trillion URLs indexed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "\"PageRank is why graphs matter more than any other data structure — it turned the web into a graph and built a $2 trillion company on top.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-ospf--routing-protocols",
      children: "4. OSPF — Routing Protocols"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["OSPF (Open Shortest Path First) uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dijkstra's algorithm"
      }), " on a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "weighted, directed graph"
      }), " to route IP packets."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vertices:"
        }), " Routers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edges:"
        }), " Network links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weights:"
        }), " Link cost (often inverse of bandwidth)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-time:"
        }), " Recalculates when topology changes (link failure, new router)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scale:"
        }), " Thousands of routers in a single OSPF area"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-other-notable-applications",
      children: "5. Other Notable Applications"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Graph Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Solves"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Netflix/MovieLens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted bipartite (user → movie)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collaborative filtering recommendations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub dependency graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directed acyclic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version resolution, vulnerability propagation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LinkedIn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directed (connections, follows)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2nd/3rd degree network, recruiter search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon product graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undirected weighted (\"customers who bought this also bought\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product recommendations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Molecular chemistry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undirected (atoms → bonds)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drug discovery, molecule property prediction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Neural networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted directed (neurons → synapses)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep learning model computation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pro-tips",
      children: "Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Choose representation based on density"
        }), ": For dense graphs ((E \\approx V^2)), use an adjacency matrix. For sparse graphs ((E \\ll V^2)), use an adjacency list. Most real-world graphs are sparse."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transpose of a directed graph"
        }), ": Reverse the direction of every edge. This is useful for Kosaraju's SCC algorithm. Building the transpose from an adjacency list is (O(V+E))."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Graph is a tree if"
        }), ": (a) it's connected, and (b) (|E| = |V| - 1). If either condition fails, it's not a tree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Degree sum theorem"
        }), ": The sum of all degrees in an undirected graph is (2|E|). Each edge contributes 1 to the degree of each of its endpoints. This is useful for validation and handshaking lemma problems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bipartite ↔ 2-colorable ↔ no odd cycles"
        }), ": These three statements are equivalent. If asked \"is this graph bipartite?\" in an interview, immediately think BFS + 2-coloring."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always check for disconnected components"
        }), ": BFS/cycle-detection/bipartite-check all need an outer loop over all vertices to handle disconnected graphs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A graph (G = (V, E)) consists of vertices and edges connecting them."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adjacency matrix: (O(1)) edge queries, (O(V^2)) space — best for dense graphs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adjacency list: (O(V+E)) space — preferred for sparse graphs (most real-world)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Edge list: (O(E)) space — the most compact, ideal for I/O and sorting."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Directed graphs have ordered edges; undirected graphs have unordered edges."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Weighted graphs assign a weight (cost) to each edge."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A complete graph has all possible edges: (|E| = n(n-1)/2)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A bipartite graph is 2-colorable with no odd cycles."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Handshaking Lemma: (\\sum \\deg(v) = 2|E|)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes--gfg-deepening",
      children: "Common Mistakes & GFG Deepening"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-mistakes-gfg-style",
      children: "Common Mistakes (GFG-Style)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Confusing adjacency list vs matrix memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix is always O(V²) even for sparse graphs; list saves no memory for dense graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use adjacency list for sparse ("
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting that BFS uses a queue and DFS uses a stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using a stack for BFS gives wrong order (like DFS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS = Queue, DFS = Stack (explicit or recursion)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not handling disconnected components in traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS/DFS starting from one node won't reach all nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop over all vertices, run BFS/DFS from unvisited ones"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confusing indegree and outdegree in directed graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "indegree edges coming in, outdegree edges going out"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "indegree = incoming count, outdegree = outgoing count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Misinterpreting \"complete graph\" vs \"connected graph\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete = every pair has an edge; connected = there's a path between any two"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K_n has n(n-1)/2 edges for undirected, n(n-1) for directed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting to mark visited nodes in DFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without visited array, infinite loop on cyclic graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark visited before processing neighbors; or use a set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assuming a DAG has a unique topological order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many valid orders exist for the same DAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any topological sort is valid; Kahn's algorithm may produce different orders based on removal order"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-graph-representation",
      children: "TypeScript Graph Representation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Adjacency List\nclass Graph {\n    private adjList: Map<number, number[]>;\n\n    constructor(private vertices: number) {\n        this.adjList = new Map();\n        for (let i = 0; i < vertices; i++) this.adjList.set(i, []);\n    }\n\n    addEdge(u: number, v: number, directed: boolean = false): void {\n        this.adjList.get(u)!.push(v);\n        if (!directed) this.adjList.get(v)!.push(u);\n    }\n\n    hasEdge(u: number, v: number): boolean {\n        return this.adjList.get(u)?.includes(v) ?? false;\n    }\n\n    neighbors(u: number): number[] {\n        return [...(this.adjList.get(u) || [])];\n    }\n\n    // Check if graph is connected (undirected)\n    isConnected(): boolean {\n        const visited = new Set<number>();\n        const dfs = (v: number) => {\n            visited.add(v);\n            for (const w of this.adjList.get(v) || []) {\n                if (!visited.has(w)) dfs(w);\n            }\n        };\n        dfs(0);\n        return visited.size === this.vertices;\n    }\n\n    // Count connected components (undirected)\n    countComponents(): number {\n        const visited = new Set<number>();\n        let count = 0;\n        for (let i = 0; i < this.vertices; i++) {\n            if (!visited.has(i)) {\n                count++;\n                const stack = [i];\n                while (stack.length > 0) {\n                    const v = stack.pop()!;\n                    if (visited.has(v)) continue;\n                    visited.add(v);\n                    for (const w of this.adjList.get(v) || []) {\n                        if (!visited.has(w)) stack.push(w);\n                    }\n                }\n            }\n        }\n        return count;\n    }\n\n    // Detect cycle in undirected graph (DFS)\n    hasCycleUndirected(): boolean {\n        const visited = new Set<number>();\n        const dfs = (v: number, parent: number): boolean => {\n            visited.add(v);\n            for (const w of this.adjList.get(v) || []) {\n                if (!visited.has(w)) {\n                    if (dfs(w, v)) return true;\n                } else if (w !== parent) return true;\n            }\n            return false;\n        };\n        for (let i = 0; i < this.vertices; i++) {\n            if (!visited.has(i) && dfs(i, -1)) return true;\n        }\n        return false;\n    }\n\n    // Topological sort (Kahn's algorithm)\n    topologicalSort(): number[] | null {\n        const indegree = new Array(this.vertices).fill(0);\n        for (const [u, neighbors] of this.adjList) {\n            for (const v of neighbors) indegree[v]++;\n        }\n        const queue: number[] = [];\n        for (let i = 0; i < this.vertices; i++) {\n            if (indegree[i] === 0) queue.push(i);\n        }\n        const result: number[] = [];\n        while (queue.length > 0) {\n            const u = queue.shift()!;\n            result.push(u);\n            for (const v of this.adjList.get(u) || []) {\n                indegree[v]--;\n                if (indegree[v] === 0) queue.push(v);\n            }\n        }\n        return result.length === this.vertices ? result : null; // null if cycle\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-mcqs-gfg-pattern",
      children: "Additional MCQs (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "For a directed graph with V vertices and E edges, the adjacency list uses:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(V) space"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(E) space"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(V + E) space ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(V²) space"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the degree of a vertex in a complete undirected graph with n vertices?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) n"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) n - 1 ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) n(n - 1)/2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) 2n"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Kahn's algorithm for topological sort requires:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) A stack"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) A queue ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) A priority queue"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) A Deque"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which of the following is true about a bipartite graph?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) It contains a triangle"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) It can be 2-colored ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) It is always connected"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) It has no edges"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "The handshaking lemma states that the sum of degrees equals:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) |V|"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) 2|E| ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) |E|²"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) |V|²"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the minimum number of edges needed for a simple graph with V vertices to be connected?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) V"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) V - 1 ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) V(V - 1)/2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) V + 1"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 9-c, 10-b, 11-b, 12-b, 13-b, 14-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises-gfg-pattern",
      children: "Additional Exercises (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "15",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bipartite graph check"
          }), ": Given an undirected graph, determine if it is bipartite using BFS (2-coloring)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Find if a path exists between two vertices"
          }), ": Given source and destination, check if a path exists using DFS or BFS."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Mother vertex"
          }), ": Find a vertex from which all other vertices are reachable in a directed graph."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Transitive closure of a directed graph"
          }), ": Compute the reachability matrix (Floyd-Warshall or DFS from each vertex)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Find all strongly connected components (Kosaraju's algorithm)"
          }), ": Implement Kosaraju's algorithm: first DFS for finish order, then DFS on transpose graph."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Find all strongly connected components (Tarjan's algorithm)"
          }), ": Implement Tarjan's algorithm using single DFS with low-link values."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Eulerian path and circuit"
          }), ": Check if an undirected graph has an Eulerian path (0 or 2 odd-degree vertices) or circuit (all even-degree vertices)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hamiltonian path check (DFS backtracking)"
          }), ": Given a graph, determine if it contains a Hamiltonian path that visits each vertex exactly once."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Minimum edges to make a graph connected"
          }), ": Given a disconnected undirected graph, find the minimum number of edges to add to make it connected."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Snakes and Ladders (BFS)"
          }), ": Given a snakes and ladders board, find the minimum number of dice throws to reach the last cell using BFS."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) (O(E^2))"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) (O(V))"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the sum of degrees in an undirected graph?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) (|E|)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) (2|E|) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) (|V|)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) (2|V|)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which representation is best for a sparse graph?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Adjacency matrix"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Adjacency list ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Edge list with hash set"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Incidence matrix"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "A tree must satisfy:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Connected and (|E| = |V| - 1) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) (|E| = |V|)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Complete"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Bipartite"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "An undirected complete graph with (n) vertices has how many edges?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) (n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) (n(n-1)/2) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) (n^2)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) (n-1)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which representation is best for Kruskal's MST algorithm?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Adjacency matrix"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Adjacency list"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Edge list ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Incidence matrix"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "A graph with an odd cycle is:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Always complete"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Always bipartite"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Never bipartite ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Never connected"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which algorithm is used for topological sort?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Floyd-Warshall"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Kahn's algorithm ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Kruskal's algorithm"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Bellman-Ford"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-b, 2-b, 3-b, 4-a, 5-b, 6-c, 7-c, 8-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Graphs model pairwise relationships between entities — the most flexible data structure."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Three core representations: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "adjacency matrix"
        }), " ((O(V^2)) space, (O(1)) edge queries), ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "adjacency list"
        }), " ((O(V+E)) space, fast neighbor iteration), ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "edge list"
        }), " ((O(E)) space, compact)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Directed vs undirected:"
        }), " Choose based on relationship symmetry. Weighted for costs/distances."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complete graphs"
        }), " have maximum edges; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "bipartite graphs"
        }), " are 2-colorable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Degree calculation"
        }), " uses (O(V+E)) on adjacency list; verifying with Handshaking Lemma catches errors."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision rule:"
        }), " Dense → matrix; Sparse → list; I/O/sorting → edge list."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-world"
        }), " uses: Google Maps (shortest path on road graphs), Facebook (social graph analysis), PageRank (web graph ranking), OSPF (routing protocol on network graph)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When would an adjacency matrix be preferred over an adjacency list?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the space complexity of each representation for a complete graph?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does the degree calculation differ for directed and undirected graphs?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What property must a graph NOT have to be bipartite?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How many edges does a complete bipartite graph (K_{3,4}) have?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a function to compute the transitive closure of a directed graph (reachability matrix) using Floyd-Warshall."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a function that reads a graph from an edge list file and builds both representations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a function to detect if an undirected graph is a tree (connected and (|E| = |V| - 1))."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement isBipartite using BFS 2-coloring. Test on a 4-cycle (should work) and a triangle (should fail)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a function to convert an adjacency matrix to an adjacency list and vice versa."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "graph isomorphism checker"
        }), " that determines whether two graphs have the same structure (node names may differ). Use degree sequences and adjacency comparison."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Kosaraju's algorithm"
        }), " to find all strongly connected components in a directed graph using two DFS passes."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given an undirected graph, find all articulation points (cut vertices) whose removal disconnects the graph."
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