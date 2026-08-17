"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[51513],{

/***/ 9614
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_artificial_intelligence_03_search_md_603_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-artificial-intelligence-03-search-md-603.json
const site_docs_courses_artificial_intelligence_03_search_md_603_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/artificial-intelligence/03-search","title":"Chapter 3: Solving Problems by Searching","description":"Previous Intelligent Agents | Next Informed Search and Heuristics","source":"@site/docs/courses/artificial-intelligence/03-search.md","sourceDirName":"courses/artificial-intelligence","slug":"/artificial-intelligence/03-search","permalink":"/ai-engineering-journey/artificial-intelligence/03-search","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"03-search","slug":"/artificial-intelligence/03-search","title":"Chapter 3: Solving Problems by Searching","sidebar_label":"Chapter 3: Solving Problems by Searching","sidebar_position":5},"sidebar":"course-artificial-intelligence","previous":{"title":"Chapter 3: Informed Search and Heuristics","permalink":"/ai-engineering-journey/artificial-intelligence/03-informed-search"},"next":{"title":"Chapter 4: Adversarial Search and Games","permalink":"/ai-engineering-journey/artificial-intelligence/04-adversarial-search"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/artificial-intelligence/03-search.md


const frontMatter = {
	id: '03-search',
	slug: '/artificial-intelligence/03-search',
	title: 'Chapter 3: Solving Problems by Searching',
	sidebar_label: 'Chapter 3: Solving Problems by Searching',
	sidebar_position: 5
};
const contentTitle = 'Chapter 3: Solving Problems by Searching';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Search Algorithms Matter",
  "id": "why-search-algorithms-matter",
  "level": 2
}, {
  "value": "Why It Matters in the Real World",
  "id": "why-it-matters-in-the-real-world",
  "level": 3
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
  "value": "Problem Formulation",
  "id": "problem-formulation",
  "level": 3
}, {
  "value": "Example: Vacuum World Problem",
  "id": "example-vacuum-world-problem",
  "level": 3
}, {
  "value": "Breadth-First Search (BFS)",
  "id": "breadth-first-search-bfs",
  "level": 3
}, {
  "value": "Depth-First Search (DFS)",
  "id": "depth-first-search-dfs",
  "level": 3
}, {
  "value": "Uniform-Cost Search (UCS)",
  "id": "uniform-cost-search-ucs",
  "level": 3
}, {
  "value": "Depth-Limited Search (DLS)",
  "id": "depth-limited-search-dls",
  "level": 3
}, {
  "value": "Iterative Deepening Depth-First Search (IDDFS)",
  "id": "iterative-deepening-depth-first-search-iddfs",
  "level": 3
}, {
  "value": "Bidirectional Search",
  "id": "bidirectional-search",
  "level": 3
}, {
  "value": "Uninformed Search Comparison",
  "id": "uninformed-search-comparison",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — Heuristic Properties",
  "id": "quick-reference--heuristic-properties",
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
        id: "chapter-3-solving-problems-by-searching",
        children: "Chapter 3: Solving Problems by Searching"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/02-agents",
        children: "Chapter 2: Intelligent Agents"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/03-informed-search",
        children: "Chapter 3: Informed Search and Heuristics"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Formulate a well-defined problem in terms of initial state, actions, transition model, goal test, and path cost."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare and contrast uninformed search strategies like Breadth-First Search (BFS) and Depth-First Search (DFS)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate informed (heuristic) search strategies, specifically A* search."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define what makes a heuristic \"admissible\" and \"consistent.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the time and space complexity of different search algorithms."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-search-algorithms-matter",
      children: "Why Search Algorithms Matter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine you are standing at the entrance of a vast maze with walls as tall as your shoulders. Somewhere deep inside is the exit. You cannot see over the walls. You cannot teleport. Every step forward, backward, left, or right costs you time and energy. The question is: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "what sequence of moves guarantees you will find the exit, and find it as quickly as possible?"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the essence of search — the computational version of finding your way through a maze. Every day, search algorithms answer the same question inside GPS navigators (fastest route between two cities), web crawlers (discovering every page on the internet), puzzle solvers (winning a game of chess or solving a Rubik's cube), and even your own brain (planning the shortest path through a grocery store). Without search algorithms, intelligent agents — whether human or machine — would have no systematic way to find solutions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Search is the universal problem-solving engine: define the starting point, define what \"done\" looks like, define what moves you are allowed to make, and a search algorithm will find the way."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-it-matters-in-the-real-world",
      children: "Why It Matters in the Real World"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How Search Helps"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GPS Navigation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find shortest route from A to B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A* search evaluates roads by distance + heuristic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web Search (Google)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crawl billions of pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS ensures breadth coverage of linked pages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chess AI (Stockfish)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate next move under time pressure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDDFS-based minimax with alpha-beta pruning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Robotics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plan collision-free motion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS/A* on configuration space grid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Game Development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NPC pathfinding around obstacles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A* on navigation mesh"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Social Networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find shortest connection path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional BFS halves search space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logistics / Delivery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimize delivery routes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UCS handles varying road costs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Puzzle Solving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solve 8-puzzle, Rubik's cube"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDDFS finds optimal solution with minimal memory"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Topics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Terms"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Problem Formulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial state, actions, goal test, path cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solution, optimal solution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uninformed Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS, DFS, Uniform-Cost, DLS, IDDFS, Bidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete, optimal, frontier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Informed Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heuristic function, Greedy, A*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Admissible, consistent heuristic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Heuristic Properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Admissibility, consistency, dominance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h(n), f(n) = g(n) + h(n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Problem Formulation] --> B[Uninformed Search]\n    A --> C[Informed Search]\n    B --> D1[BFS]\n    B --> D2[DFS]\n    B --> D3[UCS]\n    B --> D4[DLS]\n    B --> D5[IDDFS]\n    B --> D6[Bidirectional]\n    C --> E1[Greedy Best-First]\n    C --> E2[A* Search]\n    E2 --> F[Admissible Heuristic]\n    E2 --> G[Consistent Heuristic]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/artificial-intelligence/ch03-search.png",
        alt: "Search Algorithms"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-formulation",
      children: "Problem Formulation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Every search problem needs five components: initial state, actions, transition model, goal test, and path cost — getting these right is the foundation of any solution."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before a search algorithm can be applied, a problem must be formally defined:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initial State"
        }), ": The starting point of the agent."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actions"
        }), ": The set of possible actions available in a state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition Model"
        }), ": A description of what each action does (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Result(s, a)"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Goal Test"
        }), ": Determines whether a given state is a goal state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Path Cost"
        }), ": A function that assigns a numeric cost to each path."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "solution"
      }), " is a sequence of actions leading from the initial state to a goal state."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " The heuristic function h(n) is the key design decision in informed search. A good heuristic (like Manhattan distance for the 8-puzzle) can reduce explored nodes by orders of magnitude compared to uninformed search."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-vacuum-world-problem",
      children: "Example: Vacuum World Problem"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initial State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent at a specific location with dirt status of each tile"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Actions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left, Right, Suck"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transition Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moving changes agent location; Suck cleans current tile"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Goal Test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No dirt in any tile"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Path Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each action costs 1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "breadth-first-search-bfs",
      children: "Breadth-First Search (BFS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Imagine you are searching for your lost keys in a house with multiple rooms. Instead of running to the far end of the house and searching one deep corner at a time, you check every room on the current floor first, then move to the next floor down. You never go deeper until you have checked everything at the current level. This guarantees you find the keys in the fewest steps from where you started."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize a queue (FIFO) with the initial state node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark the initial node as visited."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "While the queue is not empty:\na. Dequeue the front node.\nb. If this node is the goal, return success (and the path).\nc. For each unvisited neighbor of the current node:\ni. Mark it as visited.\nii. Enqueue it."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the queue empties without finding the goal, return failure."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why FIFO?"
      }), " A FIFO (First-In-First-Out) queue ensures that nodes at depth d are always expanded before any node at depth d+1. This is the fundamental property that guarantees BFS finds the shallowest goal first."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function BFS(problem) returns solution or failure\n    node <- Node(problem.initial)\n    if problem.goal_test(node.state) then return solution(node)\n    frontier <- FIFO queue containing node\n    reached <- {problem.initial}\n    while not frontier.is_empty():\n        node <- frontier.pop()\n        for each child in expand(problem, node):\n            s <- child.state\n            if problem.goal_test(s) then return solution(child)\n            if s not in reached:\n                reached.add(s)\n                frontier.push(child)\n    return failure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Trace Table (Goal = G):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graph: A -> B, C | B -> D, E | C -> F, G | D,E,F,G are leaves."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frontier Queue (front -> back)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node Expanded"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Goal Found?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[B, C]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[C, D, E]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[D, E, F, G]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[E, F, G]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[F, G]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[G]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes ✓"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BFS expands level by level: A (depth 0), then B and C (depth 1), then D, E, F, G (depth 2)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import deque\n\ndef bfs_path(graph, start, goal):\n    \"\"\"Returns the shortest path from start to goal using BFS.\"\"\"\n    frontier = deque([(start, [start])])\n    visited = {start}\n    \n    while frontier:\n        node, path = frontier.popleft()\n        if node == goal:\n            return path\n        for neighbor in graph[node]:\n            if neighbor not in visited:\n                visited.add(neighbor)\n                frontier.append((neighbor, path + [neighbor]))\n    return None\n\n# Example usage\ngraph = {\n    'A': ['B', 'C'],\n    'B': ['D', 'E'],\n    'C': ['F', 'G'],\n    'D': [],\n    'E': [],\n    'F': [],\n    'G': []\n}\nprint(bfs_path(graph, 'A', 'G'))  # Output: ['A', 'C', 'G']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <queue>\n#include <unordered_map>\n#include <unordered_set>\n#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\nvector<string> bfs_path(unordered_map<string, vector<string>>& graph, \n                         string start, string goal) {\n    queue<pair<string, vector<string>>> frontier;\n    unordered_set<string> visited;\n    frontier.push({start, {start}});\n    visited.insert(start);\n    \n    while (!frontier.empty()) {\n        auto [node, path] = frontier.front();\n        frontier.pop();\n        \n        if (node == goal) return path;\n        \n        for (string& neighbor : graph[node]) {\n            if (visited.find(neighbor) == visited.end()) {\n                visited.insert(neighbor);\n                vector<string> newPath = path;\n                newPath.push_back(neighbor);\n                frontier.push({neighbor, newPath});\n            }\n        }\n    }\n    return {};\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class BFS {\n    public static List<String> bfsPath(Map<String, List<String>> graph, \n                                         String start, String goal) {\n        Queue<Map.Entry<String, List<String>>> frontier = new LinkedList<>();\n        Set<String> visited = new HashSet<>();\n        frontier.add(new AbstractMap.SimpleEntry<>(start, Arrays.asList(start)));\n        visited.add(start);\n        \n        while (!frontier.isEmpty()) {\n            var entry = frontier.poll();\n            String node = entry.getKey();\n            List<String> path = entry.getValue();\n            \n            if (node.equals(goal)) return path;\n            \n            for (String neighbor : graph.get(node)) {\n                if (!visited.contains(neighbor)) {\n                    visited.add(neighbor);\n                    List<String> newPath = new ArrayList<>(path);\n                    newPath.add(neighbor);\n                    frontier.add(new AbstractMap.SimpleEntry<>(neighbor, newPath));\n                }\n            }\n        }\n        return null;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b^d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b = branching factor, d = depth of shallowest goal. Every node at every level down to depth d must be expanded. Total nodes: 1 + b + b^2 + ... + b^d = O(b^d)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b^d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS stores the entire frontier — all nodes at depth d — simultaneously. For b=10, d=10: ~10^10 nodes. This is the dominant constraint."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If the branching factor is finite, BFS will eventually find the goal because it explores every node at each depth before moving deeper."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (if all step costs are identical)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS finds the shallowest goal first. If path cost is uniform (each step costs 1), shallowest = cheapest."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
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
            children: "Guarantees the shortest path (minimum steps)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extremely high memory consumption — O(b^d) nodes in the frontier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete — will always find a solution if one exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impractical for large search spaces (e.g., chess: b ~= 35)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement and reason about"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expanding only shallow nodes means deep solutions take very long"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works well for small, uniform-cost problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not optimal when step costs vary (cost != depth)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graph version handles cycles automatically via visited set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every node at depth d must be stored before moving to d+1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite graph (unbounded)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS will never terminate if no goal exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always use a visited set; BFS is still not reliable for infinite state spaces without a reachable goal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A -> B -> C -> A causes infinite loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The visited set prevents re-expanding nodes; cycles are handled safely"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-cost edges (cost = 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS may not find the true optimal path since it assumes uniform cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Uniform-Cost Search instead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Goal at depth 0 (start = goal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The initial state satisfies the goal test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check goal test before expanding; returns immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very deep solutions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS explores O(b^d) nodes before reaching d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS becomes intractable beyond d ~= 10-15 for b >= 10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disconnected graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS exhausts one component and returns failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No solution exists; algorithm terminates correctly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "depth-first-search-dfs",
      children: "Depth-First Search (DFS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You are exploring a cave system. Instead of checking every tunnel near the entrance first, you pick one tunnel and follow it as far as it goes. If you hit a dead end, you backtrack to the last junction and try the next tunnel. You go deep first, wide later. This uses very little memory — just enough to remember your way back."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps (Graph Search with visited set):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize a stack (LIFO) with the initial state node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark the initial node as visited."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "While the stack is not empty:\na. Pop the top node.\nb. If this node is the goal, return success (and the path).\nc. For each unvisited neighbor of the current node:\ni. Mark it as visited.\nii. Push it onto the stack."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the stack empties without finding the goal, return failure."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why LIFO?"
      }), " A LIFO (Last-In-First-Out) stack means the most recently discovered node is expanded next. This drives the search deep into the tree immediately, rather than exploring breadth-first."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function DFS(problem) returns solution or failure\n    node <- Node(problem.initial)\n    if problem.goal_test(node.state) then return solution(node)\n    frontier <- LIFO stack containing node\n    reached <- {problem.initial}\n    while not frontier.is_empty():\n        node <- frontier.pop()\n        for each child in expand(problem, node):\n            s <- child.state\n            if problem.goal_test(s) then return solution(child)\n            if s not in reached:\n                reached.add(s)\n                frontier.push(child)\n    return failure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Trace Table (Goal = G):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graph: A -> B, C | B -> D, E | C -> F, G | D,E,F,G are leaves."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack (top -> bottom)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node Expanded"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Goal Found?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[C, B]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[C, E, D]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[C, E]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[C]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[G, F]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[G]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes ✓"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DFS plunges deep: A -> B -> D (dead end) -> backtrack to B -> E (dead end) -> backtrack to A -> C -> F (dead end) -> C -> G (goal)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def dfs_path(graph, start, goal):\n    \"\"\"Returns a path from start to goal using DFS (not guaranteed shortest).\"\"\"\n    stack = [(start, [start])]\n    visited = {start}\n    \n    while stack:\n        node, path = stack.pop()\n        if node == goal:\n            return path\n        for neighbor in graph[node]:\n            if neighbor not in visited:\n                visited.add(neighbor)\n                stack.append((neighbor, path + [neighbor]))\n    return None\n\ngraph = {\n    'A': ['B', 'C'],\n    'B': ['D', 'E'],\n    'C': ['F', 'G'],\n    'D': [],\n    'E': [],\n    'F': [],\n    'G': []\n}\nprint(dfs_path(graph, 'A', 'G'))  # Output: ['A', 'C', 'G']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <stack>\n#include <unordered_map>\n#include <unordered_set>\n#include <vector>\n\nusing namespace std;\n\nvector<string> dfs_path(unordered_map<string, vector<string>>& graph,\n                         string start, string goal) {\n    stack<pair<string, vector<string>>> frontier;\n    unordered_set<string> visited;\n    frontier.push({start, {start}});\n    visited.insert(start);\n    \n    while (!frontier.empty()) {\n        auto [node, path] = frontier.top();\n        frontier.pop();\n        \n        if (node == goal) return path;\n        \n        for (string& neighbor : graph[node]) {\n            if (visited.find(neighbor) == visited.end()) {\n                visited.insert(neighbor);\n                vector<string> newPath = path;\n                newPath.push_back(neighbor);\n                frontier.push({neighbor, newPath});\n            }\n        }\n    }\n    return {};\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class DFS {\n    public static List<String> dfsPath(Map<String, List<String>> graph,\n                                         String start, String goal) {\n        Deque<Map.Entry<String, List<String>>> stack = new ArrayDeque<>();\n        Set<String> visited = new HashSet<>();\n        stack.push(new AbstractMap.SimpleEntry<>(start, Arrays.asList(start)));\n        visited.add(start);\n        \n        while (!stack.isEmpty()) {\n            var entry = stack.pop();\n            String node = entry.getKey();\n            List<String> path = entry.getValue();\n            \n            if (node.equals(goal)) return path;\n            \n            for (String neighbor : graph.get(node)) {\n                if (!visited.contains(neighbor)) {\n                    visited.add(neighbor);\n                    List<String> newPath = new ArrayList<>(path);\n                    newPath.add(neighbor);\n                    stack.push(new AbstractMap.SimpleEntry<>(neighbor, newPath));\n                }\n            }\n        }\n        return null;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b^m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b = branching factor, m = maximum depth of the tree. In the worst case, DFS explores every node down to the maximum depth. If m >> d (solution depth), DFS wastes enormous time."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(bm)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS stores only one path from root to current node (depth m) plus at most b siblings at each level. This is linear! For b=10, m=10: ~100 nodes vs BFS's ~10^10."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In infinite-depth spaces (or graphs with cycles in tree-search mode), DFS descends forever on an infinite branch. With a visited set on finite graphs, it is complete for finite state spaces."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS returns the first solution found, which depends entirely on the order of neighbor expansion — not on path cost or depth."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
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
            children: "Very low memory — O(bm) vs BFS's O(b^d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not complete — can get lost in infinite branches (tree-search)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works well when solutions are dense and deep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not optimal — first found != best found"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement recursively or iteratively"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can get stuck in cycles without visited tracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Good for game trees (chess, tic-tac-toe)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May find a terrible solution when a good one is nearby"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive implementation is elegant (~5 lines)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow risk for very deep recursion"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS descends forever on an infinite branch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use depth-limited search or IDDFS; never rely on bare DFS for infinite spaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A -> B -> C -> A causes infinite loop without visited tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always maintain a visited set for graph search; pure tree-search DFS is vulnerable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very deep solution at depth d << m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS may waste time exploring enormous depth before finding the shallow solution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use BFS or IDDFS when the goal is likely shallow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Goal not reachable from chosen path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS explores one branch exhaustively before trying alternatives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No general fix; this is inherent to DFS's depth-first nature"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Solution at maximum depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS works fine — follows the path all the way"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No special handling needed, but watch for stack overflow in recursive version"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uniform-cost-search-ucs",
      children: "Uniform-Cost Search (UCS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You are planning a road trip from New York to Los Angeles. The shortest path (fewest miles) is not always the cheapest route — sometimes a slightly longer road has cheaper gas or no tolls. Uniform-Cost Search considers that each road segment has a different cost, and it always expands the cheapest path discovered so far. It is like always choosing the smallest total bill at every fork."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize a priority queue (min-heap) with the initial state node (cost = 0)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize a dictionary mapping state to best-known cost (start = 0)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "While the priority queue is not empty:\na. Pop the node with the smallest path cost g(n).\nb. If this node is the goal, return success.\nc. For each neighbor with edge cost c:\ni. New cost = g(current) + c.\nii. If this is a better cost than previously recorded for the neighbor, update it and push onto the queue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the queue empties, return failure."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why a priority queue?"
      }), " UCS needs to always expand the node with the lowest cumulative cost. A priority queue (min-heap) gives O(log n) insertion and O(log n) extraction of the minimum element."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function UniformCostSearch(problem) returns solution or failure\n    node <- Node(problem.initial, path_cost = 0)\n    frontier <- priority queue ordered by path_cost, containing node\n    reached <- {problem.initial: 0}\n    while not frontier.is_empty():\n        node <- frontier.pop()\n        if problem.goal_test(node.state) then return solution(node)\n        for each child in expand(problem, node):\n            s <- child.state\n            new_cost <- node.path_cost + step_cost\n            if s not in reached or new_cost < reached[s]:\n                reached[s] <- new_cost\n                frontier.push(child with new_cost)\n    return failure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Trace Table (Goal = G):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graph with weighted edges:\nA -> B (cost 2), A -> C (cost 5)\nB -> D (cost 3), B -> E (cost 4)\nC -> F (cost 1), C -> G (cost 6)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Priority Queue (cost, node)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expanded"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Goal Found?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0, A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2, B), (5, C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(4, D via B), (5, C), (6, E via B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5, C), (6, E via B), (7, F via C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(6, C via A), (6, E via B), (7, F via C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(6, E via B), (7, F via C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C (dup skipped)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(7, F via C), (12, G via C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(12, G via C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Final"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes ✓ (cost = 12 via A -> C -> G)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note: UCS does NOT stop when it generates the goal — it stops when it pops the goal from the priority queue, guaranteeing the optimal path."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import heapq\n\ndef ucs_path(graph, costs, start, goal):\n    \"\"\"Returns the minimum-cost path from start to goal.\"\"\"\n    pq = [(0, start, [start])]\n    best_costs = {start: 0}\n    \n    while pq:\n        cost, node, path = heapq.heappop(pq)\n        if node == goal:\n            return path, cost\n        if cost > best_costs.get(node, float('inf')):\n            continue\n        for neighbor in graph[node]:\n            edge_cost = costs.get((node, neighbor), float('inf'))\n            new_cost = cost + edge_cost\n            if new_cost < best_costs.get(neighbor, float('inf')):\n                best_costs[neighbor] = new_cost\n                heapq.heappush(pq, (new_cost, neighbor, path + [neighbor]))\n    return None, float('inf')\n\ngraph = {'A': ['B', 'C'], 'B': ['D', 'E'], 'C': ['F', 'G'], 'D': [], 'E': [], 'F': [], 'G': []}\ncosts = {('A','B'): 2, ('A','C'): 5, ('B','D'): 3, ('B','E'): 4, ('C','F'): 1, ('C','G'): 6}\nprint(ucs_path(graph, costs, 'A', 'G'))  # Output: (['A', 'C', 'G'], 12)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <queue>\n#include <unordered_map>\n#include <vector>\n#include <limits>\n\nusing namespace std;\n\npair<vector<string>, int> ucs_path(\n    unordered_map<string, vector<string>>& graph,\n    unordered_map<string, unordered_map<string, int>>& costs,\n    string start, string goal) {\n    \n    auto cmp = [](auto& a, auto& b) { return a.first > b.first; };\n    priority_queue<pair<int, pair<string, vector<string>>>,\n                   vector<pair<int, pair<string, vector<string>>>>,\n                   decltype(cmp)> pq(cmp);\n    \n    unordered_map<string, int> best_costs;\n    pq.push({0, {start, {start}}});\n    best_costs[start] = 0;\n    \n    while (!pq.empty()) {\n        auto [cost, entry] = pq.top(); pq.pop();\n        string node = entry.first;\n        vector<string> path = entry.second;\n        \n        if (node == goal) return {path, cost};\n        if (cost > best_costs[node]) continue;\n        \n        for (string& neighbor : graph[node]) {\n            int edge_cost = costs[node][neighbor];\n            int new_cost = cost + edge_cost;\n            if (best_costs.find(neighbor) == best_costs.end() || \n                new_cost < best_costs[neighbor]) {\n                best_costs[neighbor] = new_cost;\n                vector<string> newPath = path;\n                newPath.push_back(neighbor);\n                pq.push({new_cost, {neighbor, newPath}});\n            }\n        }\n    }\n    return {{}, numeric_limits<int>::max()};\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class UCS {\n    public static class Result {\n        List<String> path;\n        int cost;\n        Result(List<String> path, int cost) {\n            this.path = path; this.cost = cost;\n        }\n    }\n    \n    public static Result ucsPath(Map<String, List<String>> graph,\n                                  Map<String, Map<String, Integer>> costs,\n                                  String start, String goal) {\n        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));\n        Map<String, Integer> bestCosts = new HashMap<>();\n        Map<String, String> parent = new HashMap<>();\n        \n        pq.add(new int[]{0, 0});\n        bestCosts.put(start, 0);\n        parent.put(start, null);\n        \n        while (!pq.isEmpty()) {\n            int[] curr = pq.poll();\n            String node = String.valueOf(curr[0]);\n            int cost = curr[1];\n            if (node.equals(goal)) {\n                List<String> path = new ArrayList<>();\n                for (String n = goal; n != null; n = parent.get(n))\n                    path.add(n);\n                Collections.reverse(path);\n                return new Result(path, cost);\n            }\n            if (cost > bestCosts.getOrDefault(node, Integer.MAX_VALUE))\n                continue;\n            for (String neighbor : graph.get(node)) {\n                int edgeCost = costs.get(node).get(neighbor);\n                int newCost = cost + edgeCost;\n                if (newCost < bestCosts.getOrDefault(neighbor, Integer.MAX_VALUE)) {\n                    bestCosts.put(neighbor, newCost);\n                    parent.put(neighbor, node);\n                    pq.add(new int[]{neighbor.hashCode(), newCost});\n                }\n            }\n        }\n        return null;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b^{1 + floor(C*/epsilon)})"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C* = optimal cost, epsilon = smallest edge cost. Unlike BFS (depth-based), UCS grows with the cost magnitude. If costs are small integers, this equals O(b^{d+1})."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b^{1 + floor(C*/epsilon)})"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as time — all nodes with cost <= C* may be stored in the frontier simultaneously."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UCS will find a solution if one exists, assuming all edge costs are positive. With zero or negative costs, it may loop forever."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UCS expands nodes in strictly non-decreasing cost order. The first goal popped from the priority queue has the minimum possible cost — proof by contradiction: if a cheaper path existed, its endpoint would have been popped first."
          })]
        })]
      })]
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
            children: "Guarantees optimal solution for any positive costs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be very slow when C* is large relative to epsilon"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generalizes BFS (set all costs = 1 => behaves identically to BFS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not use heuristic information — explores equally in all directions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete even with varying step costs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The frontier can grow extremely large"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No need for a heuristic function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical only when cost ranges are narrow"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-cost edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UCS may loop forever since cost never increases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Require strictly positive edge costs, or track visited states"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Negative edge costs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UCS fails entirely — it assumes non-decreasing costs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Bellman-Ford or A* with consistent heuristic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very large C*/epsilon ratio (tiny costs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponentially many nodes expanded before optimal goal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use A* with an informative heuristic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All costs equal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Degrades to BFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use BFS instead (simpler, same behavior)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple paths to same node with different costs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UCS stores only the cheapest via reached dictionary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct — the cheaper path dominates; re-expansion is unnecessary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Goal generated but not popped"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not yet guaranteed optimal — cheaper paths may still be in the frontier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Do NOT stop on generation; pop the goal first"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "depth-limited-search-dls",
      children: "Depth-Limited Search (DLS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Imagine you are searching an office building for a meeting room on floor 3. Instead of walking up to floor 20 (which wastes time), you set a hard limit: do not go deeper than floor 5. If the room is not found within those floors, you stop and report no solution within the limit. This prevents infinite stair-climbing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps (Iterative Version):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize a stack (LIFO) with the initial node (depth = 0)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "While the stack is not empty:\na. Pop the top node.\nb. If the node is the goal, return success.\nc. If the node's depth < limit:\ni. Push each child node (depth = parent.depth + 1) onto the stack."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the stack empties, return failure (or cutoff if nodes were pruned by the limit)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function DepthLimitedSearch(problem, limit) returns solution or failure/cutoff\n    return DLS_recursive(Node(problem.initial), problem, limit)\n\nfunction DLS_recursive(node, problem, limit) returns solution or failure/cutoff\n    if problem.goal_test(node.state) then return solution(node)\n    if limit == 0 then return cutoff\n    cutoff_occurred <- false\n    for each child in expand(problem, node):\n        result <- DLS_recursive(child, problem, limit - 1)\n        if result == cutoff then cutoff_occurred <- true\n        else if result != failure then return result\n    if cutoff_occurred then return cutoff else return failure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Trace Table with limit = 2 (Goal = G):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graph: A -> B, C | B -> D, E | C -> F, G | D,E,F,G leaves."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack (limit=2)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Depth"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A(0)]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[B(1), C(1)]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expand, push children"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[B(1), F(2), G(2)]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expand C, push children"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[B(1), F(2)]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Goal found!"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DLS found G at depth 2 (within limit). If limit were 1, G would never be reached and DLS would return cutoff."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def dls_path(graph, start, goal, limit):\n    \"\"\"Returns a path using depth-limited search.\"\"\"\n    def dls_recursive(node, path, depth):\n        if node == goal:\n            return path\n        if depth >= limit:\n            return None\n        for neighbor in graph[node]:\n            result = dls_recursive(neighbor, path + [neighbor], depth + 1)\n            if result is not None:\n                return result\n        return None\n    \n    return dls_recursive(start, [start], 0)\n\ngraph = {'A': ['B', 'C'], 'B': ['D', 'E'], 'C': ['F', 'G'], 'D': [], 'E': [], 'F': [], 'G': []}\nprint(dls_path(graph, 'A', 'G', 2))  # Output: ['A', 'C', 'G']\nprint(dls_path(graph, 'A', 'G', 1))  # Output: None (cutoff)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <unordered_map>\n#include <functional>\n\nusing namespace std;\n\nvector<string> dls_path(unordered_map<string, vector<string>>& graph,\n                         string start, string goal, int limit) {\n    function<vector<string>(string, vector<string>, int)> dls_recursive;\n    dls_recursive = [&](string node, vector<string> path, int depth) -> vector<string> {\n        if (node == goal) return path;\n        if (depth >= limit) return {};\n        for (string& neighbor : graph[node]) {\n            vector<string> newPath = path;\n            newPath.push_back(neighbor);\n            auto result = dls_recursive(neighbor, newPath, depth + 1);\n            if (!result.empty()) return result;\n        }\n        return {};\n    };\n    return dls_recursive(start, {start}, 0);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class DLS {\n    public static List<String> dlsPath(Map<String, List<String>> graph,\n                                        String start, String goal, int limit) {\n        return dlsRecursive(graph, start, Arrays.asList(start), goal, 0, limit);\n    }\n    \n    private static List<String> dlsRecursive(Map<String, List<String>> graph,\n                                              String node, List<String> path,\n                                              String goal, int depth, int limit) {\n        if (node.equals(goal)) return path;\n        if (depth >= limit) return null;\n        for (String neighbor : graph.get(node)) {\n            List<String> newPath = new ArrayList<>(path);\n            newPath.add(neighbor);\n            List<String> result = dlsRecursive(graph, neighbor, newPath, goal, depth + 1, limit);\n            if (result != null) return result;\n        }\n        return null;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b^l)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explores up to depth l, same exponential factor as DFS but bounded. Total nodes: 1 + b + b^2 + ... + b^l = O(b^l)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(bl)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear in the depth limit. The recursive stack goes l levels deep with at most b siblings tracked at each level."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (if l < solution depth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If the goal is deeper than l, the search cannot reach it and returns cutoff."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First solution found may not be the cheapest. DLS does not track costs — it only respects the depth bound."
          })]
        })]
      })]
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
            children: "Solves the infinite-branch problem of DFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires knowing a good depth limit in advance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Low memory — O(bl)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If l is too small, the solution is missed (returns cutoff)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple and predictable runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If l is too large, performance degrades toward DFS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Returns cutoff vs failure (distinct signals)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cutoff signal requires caller to distinguish from true failure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "l smaller than solution depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns cutoff — algorithm says \"I was pruned, not exhausted\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distinguish cutoff from failure; use IDDFS to search increasingly deeper"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "l far larger than needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wastes time exploring unnecessary depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start small and increase (IDDFS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Goal exactly at depth l"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Found normally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No special handling needed; algorithm includes depth = l"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "l = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only checks start node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Useful if start might already be the goal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Negative l"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not meaningful"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforce l >= 0 at function entry"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "iterative-deepening-depth-first-search-iddfs",
      children: "Iterative Deepening Depth-First Search (IDDFS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You are looking for a book in a library tower. You do not know which floor the book is on. You start on floor 0 and search every room on that floor. Not there? Now you search floors 0 and 1. Still nothing? Try floors 0, 1, and 2. Each failed search costs a little more, but you never search deeper than necessary — and you always find the book on the shallowest floor that contains it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For depth limit l = 0, 1, 2, ... until solution found or resources exhausted:\na. Run Depth-Limited Search with limit l.\nb. If DLS returns a solution, return it.\nc. If DLS returns cutoff (nodes were pruned), continue to next l.\nd. If DLS returns failure (entire space exhausted), return failure."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why is the re-exploration acceptable?"
      }), " Although IDDFS re-explores all nodes at each iteration, the overhead ratio is b/(b-1). For b=2, overhead is 2x; for b=10, only ~11%. Meanwhile, memory savings are exponential — O(bd) vs O(b^d)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function IterativeDeepeningSearch(problem) returns solution or failure\n    for depth = 0 to infinity:\n        result <- DepthLimitedSearch(problem, depth)\n        if result != cutoff then return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Trace Table (Goal = G at depth 2):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "l (limit)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DLS Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Nodes Expanded This Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total Nodes Expanded"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cutoff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cutoff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A, B, C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + 3 = 4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "solution found (G)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A, B, C, D, E, F, G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 + 7 = 11"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note: IDDFS re-explores upper levels each time. At l=2, it expands 11 total nodes, while BFS from scratch would expand 7. The overhead is factor ~= b/(b-1), or about 11% for b=10."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def iddfs_path(graph, start, goal, max_depth=100):\n    \"\"\"Returns the shallowest path using iterative deepening DFS.\"\"\"\n    def dls(node, path, depth):\n        if node == goal:\n            return path\n        if depth <= 0:\n            return None\n        for neighbor in graph[node]:\n            result = dls(neighbor, path + [neighbor], depth - 1)\n            if result is not None:\n                return result\n        return None\n    \n    for depth in range(max_depth + 1):\n        result = dls(start, [start], depth)\n        if result is not None:\n            return result\n    return None\n\ngraph = {'A': ['B', 'C'], 'B': ['D', 'E'], 'C': ['F', 'G'], 'D': [], 'E': [], 'F': [], 'G': []}\nprint(iddfs_path(graph, 'A', 'G'))  # Output: ['A', 'C', 'G']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <unordered_map>\n#include <functional>\n\nusing namespace std;\n\nvector<string> iddfs_path(unordered_map<string, vector<string>>& graph,\n                           string start, string goal, int max_depth = 100) {\n    function<vector<string>(string, vector<string>, int)> dls;\n    dls = [&](string node, vector<string> path, int depth) -> vector<string> {\n        if (node == goal) return path;\n        if (depth <= 0) return {};\n        for (string& neighbor : graph[node]) {\n            vector<string> newPath = path;\n            newPath.push_back(neighbor);\n            auto result = dls(neighbor, newPath, depth - 1);\n            if (!result.empty()) return result;\n        }\n        return {};\n    };\n    \n    for (int depth = 0; depth <= max_depth; ++depth) {\n        auto result = dls(start, {start}, depth);\n        if (!result.empty()) return result;\n    }\n    return {};\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class IDDFS {\n    public static List<String> iddfsPath(Map<String, List<String>> graph,\n                                          String start, String goal) {\n        return iddfsPath(graph, start, goal, 100);\n    }\n    \n    public static List<String> iddfsPath(Map<String, List<String>> graph,\n                                          String start, String goal, int maxDepth) {\n        for (int depth = 0; depth <= maxDepth; depth++) {\n            List<String> result = dls(graph, start, Arrays.asList(start), goal, depth);\n            if (result != null) return result;\n        }\n        return null;\n    }\n    \n    private static List<String> dls(Map<String, List<String>> graph,\n                                     String node, List<String> path,\n                                     String goal, int depth) {\n        if (node.equals(goal)) return path;\n        if (depth <= 0) return null;\n        for (String neighbor : graph.get(node)) {\n            List<String> newPath = new ArrayList<>(path);\n            newPath.add(neighbor);\n            List<String> result = dls(graph, neighbor, newPath, goal, depth - 1);\n            if (result != null) return result;\n        }\n        return null;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b^d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same asymptotic complexity as BFS. At iteration l, nodes at depth k are expanded (d-k+1) times. Summation yields b^d * b/(b-1) = O(b^d)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(bd)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear space — only stores the current path and its siblings. For b=10, d=10: ~100 nodes vs BFS's ~10^10. This is IDDFS's biggest selling point."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Since depth limit increases without bound (assuming finite b), a solution at any finite depth will eventually be reached."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (if uniform step cost)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finds the shallowest goal first because depth limits increase by 1 each iteration — same guarantee as BFS."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
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
            children: "Combines BFS's completeness/optimality with DFS's linear space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeated re-exploration of upper levels (overhead ~10-20%)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best choice for large search spaces with unknown depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not optimal for non-uniform costs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works well where branching factor is large"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each iteration starts from scratch — no caching between iterations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Preferred for game-tree search (chess, checkers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for graphs with cycles without a visited set per path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anytime property — can return best solution found if interrupted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead grows for small b (worst at b=2: ~2x)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No solution exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDDFS increases l forever (unless max_depth set)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set a practical max_depth bound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Goal at depth 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "l=0 finds it immediately"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check goal test for start state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very large branching factor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each iteration becomes exponentially more expensive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acceptable — IDDFS overhead is small relative to exponential growth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graph with cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree-search version loops infinitely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use a visited set per path (or limit path memory via depth bound)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Depth limit reached without solution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distinguish between \"no solution within depth\" and \"solution exists beyond depth\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bidirectional-search",
      children: "Bidirectional Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You and a friend are digging a tunnel through a mountain from opposite sides. Instead of one team digging the entire length, both teams dig simultaneously toward each other. They meet in the middle, cutting the digging distance in half. This is exactly what bidirectional search does: it runs two simultaneous searches — one forward from the start, one backward from the goal — and stops when they meet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize frontier_forward with start node, frontier_backward with goal node."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize visited_forward = {start}, visited_backward = {goal}."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "While both frontiers are non-empty:\na. Expand one node from the smaller frontier (alternating or size-based).\nb. For each newly expanded node, check if it appears in the opposite visited set.\nc. If an intersection is found, reconstruct the path and return."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If either frontier empties, return failure."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why smaller frontier?"
      }), " Expanding from the smaller frontier keeps the two search trees balanced, minimizing total explored nodes. This adaptive strategy reduces worst-case space by up to 50% compared to fixed alternation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function BidirectionalSearch(problem) returns solution or failure\n    frontier_F <- FIFO queue with Node(problem.initial)\n    frontier_B <- FIFO queue with Node(problem.goal)\n    reached_F <- {problem.initial}\n    reached_B <- {problem.goal}\n    \n    while not frontier_F.is_empty() and not frontier_B.is_empty():\n        if |frontier_F| <= |frontier_B|:\n            node <- frontier_F.pop()\n            for each child in expand(problem, node):\n                s <- child.state\n                if s in reached_B:\n                    return solution(child combined with back)\n                if s not in reached_F:\n                    reached_F.add(s)\n                    frontier_F.push(child)\n        else:\n            node <- frontier_B.pop()\n            for each parent in reverse_expand(problem, node):\n                s <- parent.state\n                if s in reached_F:\n                    return solution(forward combined with parent)\n                if s not in reached_B:\n                    reached_B.add(s)\n                    frontier_B.push(parent)\n    return failure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Trace Table (Goal = G):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graph: A -> B, C | B -> D, E | C -> F, G | D,E,F,G leaves."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Forward frontier: starts from A. Backward frontier: starts from G."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Forward Frontier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Backward Frontier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expand Side"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meet?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[G]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[B, C]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[G]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[B, C]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[C]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward (G -> parent C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes! C is in forward visited"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Path: A -> C (forward) + C -> G (reverse of G -> C) = [A, C, G]."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import deque\n\ndef bidirectional_search(graph, start, goal):\n    \"\"\"Returns the shortest path using bidirectional BFS.\"\"\"\n    if start == goal:\n        return [start]\n    \n    front_F = deque([start])\n    front_B = deque([goal])\n    parent_F = {start: None}\n    parent_B = {goal: None}\n    \n    def reconstruct(intersection):\n        # Build forward path: start -> intersection\n        path = []\n        node = intersection\n        while node is not None:\n            path.append(node)\n            node = parent_F[node]\n        path.reverse()\n        # Build backward path: intersection's neighbor -> goal\n        node = parent_B[intersection]\n        while node is not None:\n            path.append(node)\n            node = parent_B[node]\n        return path\n    \n    while front_F and front_B:\n        # Expand forward\n        for _ in range(len(front_F)):\n            curr = front_F.popleft()\n            for neighbor in graph[curr]:\n                if neighbor not in parent_F:\n                    parent_F[neighbor] = curr\n                    front_F.append(neighbor)\n                    if neighbor in parent_B:\n                        return reconstruct(neighbor)\n        \n        # Expand backward\n        for _ in range(len(front_B)):\n            curr = front_B.popleft()\n            for neighbor in graph[curr]:\n                if neighbor not in parent_B:\n                    parent_B[neighbor] = curr\n                    front_B.append(neighbor)\n                    if neighbor in parent_F:\n                        return reconstruct(neighbor)\n    \n    return None\n\ngraph = {'A': ['B', 'C'], 'B': ['D', 'E'], 'C': ['F', 'G'], 'D': [], 'E': [], 'F': [], 'G': []}\nprint(bidirectional_search(graph, 'A', 'G'))  # Output: ['A', 'C', 'G']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <queue>\n#include <unordered_map>\n#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\nvector<string> bidirectional_search(\n    unordered_map<string, vector<string>>& graph,\n    string start, string goal) {\n    \n    if (start == goal) return {start};\n    \n    queue<string> front_F, front_B;\n    unordered_map<string, string> parent_F, parent_B;\n    \n    front_F.push(start); parent_F[start] = \"\";\n    front_B.push(goal);  parent_B[goal] = \"\";\n    \n    auto reconstruct = [&](string intersection) {\n        vector<string> path;\n        string node = intersection;\n        while (node != \"\") {\n            path.push_back(node);\n            node = parent_F[node];\n        }\n        reverse(path.begin(), path.end());\n        node = parent_B[intersection];\n        while (node != \"\") {\n            path.push_back(node);\n            node = parent_B[node];\n        }\n        return path;\n    };\n    \n    while (!front_F.empty() && !front_B.empty()) {\n        int fSize = front_F.size();\n        while (fSize--) {\n            string curr = front_F.front(); front_F.pop();\n            for (string& neighbor : graph[curr]) {\n                if (parent_F.find(neighbor) == parent_F.end()) {\n                    parent_F[neighbor] = curr;\n                    front_F.push(neighbor);\n                    if (parent_B.find(neighbor) != parent_B.end())\n                        return reconstruct(neighbor);\n                }\n            }\n        }\n        \n        int bSize = front_B.size();\n        while (bSize--) {\n            string curr = front_B.front(); front_B.pop();\n            for (string& neighbor : graph[curr]) {\n                if (parent_B.find(neighbor) == parent_B.end()) {\n                    parent_B[neighbor] = curr;\n                    front_B.push(neighbor);\n                    if (parent_F.find(neighbor) != parent_F.end())\n                        return reconstruct(neighbor);\n                }\n            }\n        }\n    }\n    return {};\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class Bidirectional {\n    public static List<String> bidirectionalSearch(\n            Map<String, List<String>> graph, String start, String goal) {\n        if (start.equals(goal)) return Arrays.asList(start);\n        \n        Queue<String> frontF = new LinkedList<>();\n        Queue<String> frontB = new LinkedList<>();\n        Map<String, String> parentF = new HashMap<>();\n        Map<String, String> parentB = new HashMap<>();\n        \n        frontF.add(start); parentF.put(start, null);\n        frontB.add(goal);  parentB.put(goal, null);\n        \n        while (!frontF.isEmpty() && !frontB.isEmpty()) {\n            int fSize = frontF.size();\n            for (int i = 0; i < fSize; i++) {\n                String curr = frontF.poll();\n                for (String neighbor : graph.get(curr)) {\n                    if (!parentF.containsKey(neighbor)) {\n                        parentF.put(neighbor, curr);\n                        frontF.add(neighbor);\n                        if (parentB.containsKey(neighbor))\n                            return reconstruct(parentF, parentB, neighbor);\n                    }\n                }\n            }\n            \n            int bSize = frontB.size();\n            for (int i = 0; i < bSize; i++) {\n                String curr = frontB.poll();\n                for (String neighbor : graph.get(curr)) {\n                    if (!parentB.containsKey(neighbor)) {\n                        parentB.put(neighbor, curr);\n                        frontB.add(neighbor);\n                        if (parentF.containsKey(neighbor))\n                            return reconstruct(parentF, parentB, neighbor);\n                    }\n                }\n            }\n        }\n        return null;\n    }\n    \n    private static List<String> reconstruct(Map<String, String> parentF,\n                                              Map<String, String> parentB,\n                                              String intersection) {\n        List<String> path = new ArrayList<>();\n        String node = intersection;\n        while (node != null) {\n            path.add(node);\n            node = parentF.get(node);\n        }\n        Collections.reverse(path);\n        node = parentB.get(intersection);\n        while (node != null) {\n            path.add(node);\n            node = parentB.get(node);\n        }\n        return path;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b^{d/2})"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both searches go to depth ~= d/2, so each explores b^{d/2} nodes. Total: 2 x b^{d/2} = O(b^{d/2}). For b=10, d=10: BFS = 10^10, Bidirectional = 2 x 10^5 = 200,000 — a 50,000x reduction!"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b^{d/2})"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both visited sets together store ~2 x b^{d/2} nodes. Still O(b^{d/2}), which is the square root of BFS space."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assuming both directions have finite branching factors, the search will eventually exhaust the reachable space from both ends."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (BFS-based bidirectional)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If BFS is used in both directions, the meeting point guarantees the shortest path. The first intersection is at the optimal depth."
          })]
        })]
      })]
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
            children: "Huge time savings — O(b^{d/2}) vs O(b^d) for BFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires the goal to be known explicitly (reverse expansion)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intuitively appealing (meet in the middle)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not all problems have easily invertible actions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Preserves completeness and optimality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple goal states require inverse goal test, which may be complex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can use different search strategies per direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path reconstruction is more complex than unidirectional search"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Start = goal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns immediately"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check start == goal before entering the loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Goal unreachable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both frontiers exhaust without meeting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns None correctly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No reverse actions defined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot run bidirectional search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use forward-only search instead (BFS, A*)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Asymmetric branching (b_forward != b_backward)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One frontier grows much faster"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expand from the smaller frontier each iteration (adaptive)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple goals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need to define reverse expansion from a set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use goal-set as initial backward frontier"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uninformed-search-comparison",
      children: "Uninformed Search Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Complete?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Optimal?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Frontier Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Limitation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes (uniform cost)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b^d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b^d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Queue (FIFO)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory grows exponentially"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b^m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(bm)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Stack (LIFO)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May never terminate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uniform-Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b^{1+floor(C*/eps)})"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b^{1+floor(C*/eps)})"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Priority Queue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wastes time on low-cost detours"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Depth-Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No (if l < d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b^l)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(bl)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Stack (LIFO)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Needs right l in advance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IDDFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes (uniform cost)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b^d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(bd)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Stack (LIFO)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Re-explores upper levels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes (BFS-based)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b^{d/2})"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b^{d/2})"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Two Queues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Needs invertible actions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: When would BFS beat DFS, and vice versa?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BFS beats DFS when the solution is shallow and the branching factor is manageable — for example, finding the shortest path in a social network (6 degrees of separation). BFS guarantees the shortest path and is complete. DFS beats BFS when memory is tight, the state space is very large, and any solution (not necessarily the best) will do — for example, solving a maze where the exit is somewhere in the depths, or searching a file system where you just need to find any matching file quickly."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: What is the key tradeoff that IDDFS makes?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IDDFS trades a small amount of re-computation (roughly 10-20% overhead) for dramatically reduced memory. BFS needs O(b^d) memory; IDDFS needs only O(bd). For a branching factor of 10 and depth 10, BFS stores ~10^10 nodes, while IDDFS stores ~100. This makes IDDFS the preferred uninformed search for large state spaces where memory is the bottleneck."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: What is the difference between tree search and graph search?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tree search assumes every node is reachable through a unique path — it does not track visited nodes, so it can loop infinitely on graphs with cycles. Graph search maintains a visited set (or \"reached\" table), guaranteeing each state is expanded at most once. Graph search prevents infinite loops but uses more memory. Every algorithm discussed above can be run in either mode. In practice, graph search is almost always preferred for real-world problems where cycles exist."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: Why does Uniform-Cost Search not stop when it generates the goal, only when it pops it?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Because the first time the goal is generated may be via a non-optimal path. By waiting until the goal is popped from the priority queue, UCS guarantees that all cheaper paths have been exhausted, and the goal is reached via the cheapest possible route. Proof: if a cheaper path existed, its endpoint would have a lower cumulative cost and would be popped from the priority queue first."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: Can BFS handle infinite graphs?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BFS cannot handle infinite graphs in general because it explores level by level without bound. If no goal exists, it runs forever. However, if the graph is infinite but the goal is reachable at some finite depth, BFS will eventually find it — though it may take prohibitively long."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6: Why is IDDFS preferred over BFS for game-tree search in chess engines?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chess has a branching factor of ~35 and games can go 80+ ply deep. BFS would explode memory instantly (35^40 nodes). IDDFS uses O(bd) memory and can be combined with alpha-beta pruning, which dramatically reduces effective branching factor. Moreover, IDDFS is an anytime algorithm — if time runs out, the best result from the last completed depth is available."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7: What is the overhead ratio of IDDFS compared to BFS?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The overhead ratio is b/(b-1). For b=2, it's 2x (100% overhead). For b=10, it's ~1.11x (11% overhead). As b grows, overhead approaches 1. This is why IDDFS is practical: the overhead is small relative to the exponential cost of deeper levels."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8: When is Bidirectional Search impossible to apply?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bidirectional search requires that you can compute predecessors (reverse actions). This is impossible when:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The goal state is not known (e.g., \"find any satisfying assignment\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Actions are not invertible (e.g., irreversible chemical reactions)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The goal is a set with no unique reverse path"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Search Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why This Method?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GPS Route Planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A* (or UCS for unweighted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need optimal path; heuristic (distance) dramatically reduces search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web Crawling (Google, Bing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page-by-page exploration from seed URLs; ensures coverage breadth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chess Engines (Stockfish, AlphaZero)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDDFS (iterative deepening minimax)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep analysis with time control; memory-efficient, anytime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Puzzle Solving (8-puzzle, Rubik's cube)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS / IDDFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shortest solution needed; state space is manageable with heuristics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Social Network Friend Recommendations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS (k-nearest)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shortest connection path within k hops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File System Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low memory; user wants a result quickly, not necessarily the shortest path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network Routing (OSPF, RIP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS / UCS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find least-cost path between routers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI Game Pathfinding (NPCs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal path with obstacles; heuristic + cost-so-far"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduling Problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UCS / IDDFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tasks with varying durations; need optimal or near-optimal schedule"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Circuit Board Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start and end pins are known; search space is halved"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Taxi Dispatch / Ride-Hailing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UCS / A*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimize ETA; roads have different speeds and costs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Robot Motion Planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS / A*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grid-based environment; shortest collision-free path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automated Theorem Proving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS / IDDFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proof space is a tree; depth-first explores implications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Natural Language Parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntactic parse trees; shallowest valid parse preferred"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network Troubleshooting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trace path between two endpoints through routers/switches"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Complete?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Optimal?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Uses h(n)?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Uninformed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes (uniform)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b^d)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Uninformed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(bm)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uniform-Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Uninformed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b^{1+...})"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Depth-Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Uninformed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(bl)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IDDFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Uninformed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes (uniform)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(bd)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Uninformed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b^{d/2})"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy Best-First"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Informed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b^m)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Informed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b^d)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--heuristic-properties",
      children: "Quick Reference — Heuristic Properties"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implication"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Admissible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h(n) <= h*(n) never overestimates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A* tree-search is optimal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h(n) <= c(n,a,n') + h(n') (triangle inequality)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A* graph-search is optimal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dominance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h2(n) >= h1(n) for all n (both admissible)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h2 dominates h1 — expands fewer nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Effective Branching Factor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b* where N = 1 + b* + (b*)^2 + ..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measures heuristic quality empirically"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Search Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "ML Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Computer Vision"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "NLP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Research"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy Best-First"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A* Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Heuristic Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " Which uninformed search algorithm uses the least memory while guaranteeing optimality (for uniform costs)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) BFS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) DFS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) IDDFS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Bidirectional Search"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>C) IDDFS combines BFS's optimality with DFS's O(bd) memory, making it the most memory-efficient optimal uninformed search."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " What condition must a heuristic satisfy for A* graph-search to guarantee optimality?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Admissibility only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Consistency only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Both admissibility and consistency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Neither"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) A* graph-search requires consistency (monotonicity) for optimality. Tree-search only requires admissibility."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " Which search algorithm expands the node with the lowest f(n) = g(n) + h(n)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Greedy Best-First Search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Uniform-Cost Search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) A* Search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Breadth-First Search"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>C) A* Search combines the cost-so-far g(n) with the heuristic h(n) into f(n)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " What is the space complexity of BFS?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) O(bd)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) O(b^d)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) O(b^{d+1})"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) O(bm)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>C) BFS stores all nodes at the current depth level, requiring O(b^{d+1}) space in the worst case."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " When does Uniform-Cost Search stop (i.e., return the goal)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) When the goal is first generated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) When the goal is popped from the priority queue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) When the frontier is empty"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) When the heuristic values converge"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) UCS only stops when the goal is popped, ensuring all cheaper paths have been considered."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6:"
      }), " Which search algorithm reduces complexity from O(b^d) to O(b^{d/2})?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) IDDFS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Bidirectional Search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Uniform-Cost Search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Depth-Limited Search"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Bidirectional search cuts the effective depth in half by searching from both ends simultaneously."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7:"
      }), " What is the overhead ratio of IDDFS compared to BFS for a branching factor of 10?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) 2x"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) 1.5x"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) ~1.11x"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) ~1.5x"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>C) The overhead ratio is b/(b-1) = 10/9 ≈ 1.11x, or about 11%."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8:"
      }), " Which of the following is NOT a requirement for applying Bidirectional Search?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The goal state must be known"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Actions must be invertible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Branching factor must be symmetric"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) A predecessor function must be definable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>C) Bidirectional Search works fine with asymmetric branching factors — the adaptive strategy expands the smaller frontier to compensate."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Problem formulation is the first step in automated problem solving."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uninformed search is useful for problems where no domain knowledge is available."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BFS is optimal for uniform costs but consumes significant memory."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DFS uses minimal memory but is neither complete nor optimal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uniform-Cost Search generalizes BFS to varying step costs while preserving optimality."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Depth-Limited Search caps search depth to prevent infinite exploration."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IDDFS combines the best of BFS (completeness, optimality) and DFS (linear space)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bidirectional Search cuts search time dramatically when the goal is known and actions are invertible."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A* search is the most widely used search algorithm because it is both complete and optimal given an admissible heuristic."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The quality of a heuristic (its closeness to actual cost) determines search efficiency."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Space complexity is often a more significant constraint than time complexity for search algorithms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Iterative deepening and bidirectional search represent the two main strategies to manage exponential complexity."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the four criteria for evaluating a search algorithm?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why BFS is guaranteed to find the shallowest goal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define \"admissible heuristic\" and give an example for a navigation problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does A* search combine the strengths of Uniform-Cost Search and Greedy Best-First Search?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does IDDFS re-explore nodes at each iteration, and why is this acceptable?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trace a DFS on a graph with a cycle. How can you modify DFS to handle cycles?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider the \"Straight-Line Distance\" heuristic for city navigation. Is it admissible? Why?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate the Manhattan distance for an 8-puzzle state where tile 1 is at (0,0) and its goal is (2,2)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run IDDFS manually on the graph A -> B, B -> C, C -> D, D -> E (linear chain) with goal = E. How many total node expansions across all iterations?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given a graph with edge costs (A->B=10, A->C=1, C->B=1, B->G=1), trace UCS from A to G. What path does it find?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prove that if a heuristic ", (0,jsx_runtime.jsx)(_components.code, {
          children: "h(n)"
        }), " is consistent, it is also admissible. Provide a counter-example showing that an admissible heuristic is not necessarily consistent."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "This chapter was adapted from \"Artificial Intelligence: A Modern Approach\" (AIMA) by Russell & Norvig and various open-source AI resources."
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