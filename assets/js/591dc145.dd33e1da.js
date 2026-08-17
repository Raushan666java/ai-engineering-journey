"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[20063],{

/***/ 50275
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_artificial_intelligence_02_problem_solving_md_591_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-artificial-intelligence-02-problem-solving-md-591.json
const site_docs_courses_artificial_intelligence_02_problem_solving_md_591_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/artificial-intelligence/02-problem-solving","title":"Chapter 2: Problem-Solving by Search","description":"Previous Introduction to AI | Next Informed Search and Heuristics","source":"@site/docs/courses/artificial-intelligence/02-problem-solving.md","sourceDirName":"courses/artificial-intelligence","slug":"/artificial-intelligence/02-problem-solving","permalink":"/ai-engineering-journey/artificial-intelligence/02-problem-solving","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"02-problem-solving","slug":"/artificial-intelligence/02-problem-solving","title":"Chapter 2: Problem-Solving by Search","sidebar_label":"Chapter 2: Problem-Solving by Search","sidebar_position":3},"sidebar":"course-artificial-intelligence","previous":{"title":"Chapter 2: Intelligent Agents","permalink":"/ai-engineering-journey/artificial-intelligence/02-agents"},"next":{"title":"Chapter 3: Informed Search and Heuristics","permalink":"/ai-engineering-journey/artificial-intelligence/03-informed-search"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/artificial-intelligence/02-problem-solving.md


const frontMatter = {
	id: '02-problem-solving',
	slug: '/artificial-intelligence/02-problem-solving',
	title: 'Chapter 2: Problem-Solving by Search',
	sidebar_label: 'Chapter 2: Problem-Solving by Search',
	sidebar_position: 3
};
const contentTitle = 'Chapter 2: Problem-Solving by Search';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Problem Solving in AI Matters",
  "id": "why-problem-solving-in-ai-matters",
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
  "value": "2.1 Problem Formulation",
  "id": "21-problem-formulation",
  "level": 2
}, {
  "value": "2.1.1 What is Problem Formulation?",
  "id": "211-what-is-problem-formulation",
  "level": 3
}, {
  "value": "2.1.2 Algorithm — Problem Formulation Steps",
  "id": "212-algorithm--problem-formulation-steps",
  "level": 3
}, {
  "value": "2.1.3 Dry Run — Formulating the 8-Puzzle",
  "id": "213-dry-run--formulating-the-8-puzzle",
  "level": 3
}, {
  "value": "2.1.4 Python Implementation",
  "id": "214-python-implementation",
  "level": 3
}, {
  "value": "2.1.5 Complexity Analysis",
  "id": "215-complexity-analysis",
  "level": 3
}, {
  "value": "2.1.6 Advantages &amp; Disadvantages",
  "id": "216-advantages--disadvantages",
  "level": 3
}, {
  "value": "2.1.7 Edge Cases",
  "id": "217-edge-cases",
  "level": 3
}, {
  "value": "2.2 Search Space and State-Space Graph",
  "id": "22-search-space-and-state-space-graph",
  "level": 2
}, {
  "value": "2.2.1 Formal Definition",
  "id": "221-formal-definition",
  "level": 3
}, {
  "value": "2.2.2 Algorithm — Building the State-Space Graph",
  "id": "222-algorithm--building-the-state-space-graph",
  "level": 3
}, {
  "value": "2.2.3 Dry Run — Romanian Road Map (Partial)",
  "id": "223-dry-run--romanian-road-map-partial",
  "level": 3
}, {
  "value": "2.2.4 Python Implementation",
  "id": "224-python-implementation",
  "level": 3
}, {
  "value": "2.2.5 Complexity Analysis",
  "id": "225-complexity-analysis",
  "level": 3
}, {
  "value": "2.2.6 Advantages &amp; Disadvantages",
  "id": "226-advantages--disadvantages",
  "level": 3
}, {
  "value": "2.2.7 Edge Cases",
  "id": "227-edge-cases",
  "level": 3
}, {
  "value": "2.3 Tree Search vs. Graph Search",
  "id": "23-tree-search-vs-graph-search",
  "level": 2
}, {
  "value": "2.3.1 Tree Search",
  "id": "231-tree-search",
  "level": 3
}, {
  "value": "2.3.2 Graph Search",
  "id": "232-graph-search",
  "level": 3
}, {
  "value": "2.3.3 Dry Run — Tree Search vs. Graph Search",
  "id": "233-dry-run--tree-search-vs-graph-search",
  "level": 3
}, {
  "value": "2.3.4 Python Implementation",
  "id": "234-python-implementation",
  "level": 3
}, {
  "value": "2.3.5 Complexity Analysis",
  "id": "235-complexity-analysis",
  "level": 3
}, {
  "value": "2.3.6 Tree Search vs. Graph Search — Comparison Table",
  "id": "236-tree-search-vs-graph-search--comparison-table",
  "level": 3
}, {
  "value": "2.3.7 Advantages &amp; Disadvantages of Graph Search",
  "id": "237-advantages--disadvantages-of-graph-search",
  "level": 3
}, {
  "value": "2.3.8 Edge Cases",
  "id": "238-edge-cases",
  "level": 3
}, {
  "value": "2.4 Uninformed Search Algorithms",
  "id": "24-uninformed-search-algorithms",
  "level": 2
}, {
  "value": "2.4.1 Breadth-First Search (BFS)",
  "id": "241-breadth-first-search-bfs",
  "level": 3
}, {
  "value": "2.4.2 Depth-First Search (DFS)",
  "id": "242-depth-first-search-dfs",
  "level": 3
}, {
  "value": "2.4.3 Iterative Deepening DFS (IDDFS)",
  "id": "243-iterative-deepening-dfs-iddfs",
  "level": 3
}, {
  "value": "2.4.4 Uniform-Cost Search (UCS)",
  "id": "244-uniform-cost-search-ucs",
  "level": 3
}, {
  "value": "2.5 Measuring Search Performance",
  "id": "25-measuring-search-performance",
  "level": 2
}, {
  "value": "2.5.1 The Four Evaluation Dimensions",
  "id": "251-the-four-evaluation-dimensions",
  "level": 3
}, {
  "value": "2.5.2 Complexity Analysis — The &quot;Why&quot; Behind Each Formula",
  "id": "252-complexity-analysis--the-why-behind-each-formula",
  "level": 3
}, {
  "value": "2.5.3 Algorithm — Performance Evaluation",
  "id": "253-algorithm--performance-evaluation",
  "level": 3
}, {
  "value": "2.5.4 Python Implementation",
  "id": "254-python-implementation",
  "level": 3
}, {
  "value": "2.5.5 Advantages &amp; Disadvantages",
  "id": "255-advantages--disadvantages",
  "level": 3
}, {
  "value": "2.5.6 Edge Cases",
  "id": "256-edge-cases",
  "level": 3
}, {
  "value": "2.6 Problem Classification",
  "id": "26-problem-classification",
  "level": 2
}, {
  "value": "2.7 Problem Formulation Examples",
  "id": "27-problem-formulation-examples",
  "level": 2
}, {
  "value": "2.8 Concept Comparison",
  "id": "28-concept-comparison",
  "level": 2
}, {
  "value": "2.9 Quick Reference — State-Space Search Components",
  "id": "29-quick-reference--state-space-search-components",
  "level": 2
}, {
  "value": "2.10 Cross-Application Matrix",
  "id": "210-cross-application-matrix",
  "level": 2
}, {
  "value": "2.11 Interview Corner",
  "id": "211-interview-corner",
  "level": 2
}, {
  "value": "Q1: Explain search space explosion and how to handle it.",
  "id": "q1-explain-search-space-explosion-and-how-to-handle-it",
  "level": 3
}, {
  "value": "Q2: Why are heuristics important in search?",
  "id": "q2-why-are-heuristics-important-in-search",
  "level": 3
}, {
  "value": "Q3: What is the difference between completeness and optimality?",
  "id": "q3-what-is-the-difference-between-completeness-and-optimality",
  "level": 3
}, {
  "value": "Q4: How would you choose between BFS, DFS, and IDDFS?",
  "id": "q4-how-would-you-choose-between-bfs-dfs-and-iddfs",
  "level": 3
}, {
  "value": "Q5: What is the role of the explored set in graph search?",
  "id": "q5-what-is-the-role-of-the-explored-set-in-graph-search",
  "level": 3
}, {
  "value": "2.12 Applications in Real Systems",
  "id": "212-applications-in-real-systems",
  "level": 2
}, {
  "value": "GPS Navigation (Google Maps, Waze, Apple Maps)",
  "id": "gps-navigation-google-maps-waze-apple-maps",
  "level": 3
}, {
  "value": "Game AI (Chess, Go, Video Games)",
  "id": "game-ai-chess-go-video-games",
  "level": 3
}, {
  "value": "Robotics (Motion Planning)",
  "id": "robotics-motion-planning",
  "level": 3
}, {
  "value": "Other Real-World Systems",
  "id": "other-real-world-systems",
  "level": 3
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Chapter Summary",
  "id": "chapter-summary",
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
        id: "chapter-2-problem-solving-by-search",
        children: "Chapter 2: Problem-Solving by Search"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/01-introduction",
        children: "Chapter 1: Introduction to AI"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/03-informed-search",
        children: "Chapter 3: Informed Search and Heuristics"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the conclusion of this chapter, the student will be able to: (1) formulate a problem as a state-space search; (2) implement and analyze uninformed search algorithms; (3) evaluate search algorithm performance using completeness, optimality, time complexity, and space complexity; (4) distinguish problem types by observability, determinism, and dynamics; (5) select appropriate search strategies for given problem classes."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-problem-solving-in-ai-matters",
      children: "Why Problem Solving in AI Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy — GPS Navigation"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine you are driving in an unfamiliar city and need to reach a specific restaurant. You have a map (the state space), you know your current location (initial state), and you know the restaurant's address (goal state). Each road you can turn onto is an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "action"
      }), ", and the new intersection you arrive at is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "resulting state"
      }), ". A GPS navigation system solves exactly this problem — it searches through millions of possible routes, evaluates which ones are shortest or fastest, and presents you with the optimal path. Every time you use Google Maps, Waze, or Apple Maps, you are relying on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "search algorithms"
      }), " that were born in AI research. The same ideas power chess engines, robot motion planning, and even the way your email spam filter classifies messages. Problem-solving by search is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "foundation of intelligent decision-making"
      }), " in AI."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Problem-Solving Agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Goal formulation, search, execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Goal-directed agent, problem formulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State-Space Representation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "States, actions, transition model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State space, branching factor, solution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Problem Classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determinism, observability, dynamics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Toy vs. real-world problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uninformed Search (BFS, DFS, IDDFS, UCS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree/graph search, frontier, explored set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Completeness, optimality, complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Measuring Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Four evaluation dimensions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time/space complexity, completeness"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Problem Formulation] --> B[State-Space Graph]\n    B --> C[Uninformed Search]\n    C --> D1[BFS]\n    C --> D2[DFS]\n    C --> D3[IDDFS]\n    C --> D4[UCS]\n    D1 --> E[Performance Evaluation]\n    D2 --> E\n    D3 --> E\n    D4 --> E\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-problem-formulation",
      children: "2.1 Problem Formulation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy — Planning a Road Trip"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Suppose you are planning a road trip from New York to Los Angeles. You need to decide:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initial state:"
        }), " New York City (where you start)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actions:"
        }), " Drive to the next city on each connected highway"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition model:"
        }), " After driving from NYC to Chicago, you are now in Chicago"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Goal test:"
        }), " Are you in Los Angeles?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Path cost:"
        }), " Total miles driven (or gas money spent)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every AI search problem follows this same pattern: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "where you are, what you can do, where each action takes you, whether you have arrived, and how much it cost to get there"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "211-what-is-problem-formulation",
      children: "2.1.1 What is Problem Formulation?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Problem formulation is the process of abstracting a real-world situation into a formal search problem that an AI agent can solve. A well-formulated problem has six components:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State Space ($\\mathcal{S}$):"
        }), " The set of all possible configurations of the environment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initial State ($s_0$):"
        }), " The state from which the agent starts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actions ($\\text{Actions}(s)$):"
        }), " The set of actions available in state $s$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition Model ($\\text{Result}(s, a)$):"
        }), " The state reached by performing action $a$ in state $s$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Goal Test ($\\text{GoalTest}(s)$):"
        }), " A function that returns true if $s$ is a goal state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Path Cost ($c(s, a, s')$):"
        }), " The numerical cost of applying action $a$ to go from $s$ to $s'$."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Insight:"
        }), " A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "solution"
        }), " is a sequence of actions that transforms the initial state into a goal state. An ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "optimal solution"
        }), " minimizes the total path cost."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "212-algorithm--problem-formulation-steps",
      children: "2.1.2 Algorithm — Problem Formulation Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALGORITHM: FormulateProblem(realWorldSituation)\n1. Identify the agent's possible starting configurations → Initial state\n2. Define the set of all reachable configurations → State space\n3. For each state, list all legal moves → Actions(s)\n4. Define Result(s, a) for every state–action pair → Transition model\n5. Specify the condition that identifies success → Goal test\n6. Assign a cost to each action → Path cost\n7. RETURN a tuple (S, s0, Actions, Result, GoalTest, Cost)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "213-dry-run--formulating-the-8-puzzle",
      children: "2.1.3 Dry Run — Formulating the 8-Puzzle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Situation: A 3×3 sliding puzzle with tiles 1-8 and one blank.\n\nStep 1: Initial state s0 = [[5,1,3],[8,2,4],[7,6,blank]]\nStep 2: State space S = all 9!/2 = 181,440 valid tile arrangements\nStep 3: Actions(s) = {UP, DOWN, LEFT, RIGHT} for blank tile\nStep 4: Result(s, UP) = swap blank with tile above it\nStep 5: GoalTest(s) = s == [[1,2,3],[4,5,6],[7,8,blank]]\nStep 6: Path cost = 1 per move (uniform)\nStep 7: RETURN (S, s0, Actions, Result, GoalTest, 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "214-python-implementation",
      children: "2.1.4 Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Problem:\n    \"\"\"Base class for formulating a search problem.\"\"\"\n\n    def __init__(self, initial, goal=None):\n        self.initial = initial  # Initial state\n        self.goal = goal        # Goal state\n\n    def actions(self, state):\n        \"\"\"Return available actions in a given state.\"\"\"\n        raise NotImplementedError\n\n    def result(self, state, action):\n        \"\"\"Return the state after applying an action.\"\"\"\n        raise NotImplementedError\n\n    def goal_test(self, state):\n        \"\"\"Check if the current state is the goal.\"\"\"\n        return state == self.goal\n\n    def path_cost(self, c, state1, action, state2):\n        \"\"\"Return the cost of a path (default = 1 per step).\"\"\"\n        return c + 1\n\n\nclass EightPuzzle(Problem):\n    \"\"\"Formulation of the 8-puzzle problem.\"\"\"\n\n    def __init__(self, initial, goal=None):\n        super().__init__(initial, goal or [[1,2,3],[4,5,6],[7,8,0]])\n\n    def _find_blank(self, state):\n        for i in range(3):\n            for j in range(3):\n                if state[i][j] == 0:\n                    return i, j\n        return None\n\n    def actions(self, state):\n        i, j = self._find_blank(state)\n        moves = []\n        if i > 0: moves.append('UP')\n        if i < 2: moves.append('DOWN')\n        if j > 0: moves.append('LEFT')\n        if j < 2: moves.append('RIGHT')\n        return moves\n\n    def result(self, state, action):\n        import copy\n        i, j = self._find_blank(state)\n        new_state = copy.deepcopy(state)\n        if action == 'UP':\n            new_state[i][j], new_state[i-1][j] = new_state[i-1][j], new_state[i][j]\n        elif action == 'DOWN':\n            new_state[i][j], new_state[i+1][j] = new_state[i+1][j], new_state[i][j]\n        elif action == 'LEFT':\n            new_state[i][j], new_state[i][j-1] = new_state[i][j-1], new_state[i][j]\n        elif action == 'RIGHT':\n            new_state[i][j], new_state[i][j+1] = new_state[i][j+1], new_state[i][j]\n        return new_state\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "215-complexity-analysis",
      children: "2.1.5 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) to formulate — the problem is defined once at the start."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(|S|) in the worst case, where |S| is the size of the state space. For the 8-puzzle, |S| = 181,440 states."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Why?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Problem formulation is a one-time setup cost. The state space may be huge (e.g., chess has ~10^43 states), but we only define the rules — we don't generate all states at once."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "216-advantages--disadvantages",
      children: "2.1.6 Advantages & Disadvantages"
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
            children: "Provides a universal framework for any AI problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires full observability and deterministic actions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Separates \"what to solve\" from \"how to solve\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some real-world problems cannot be cleanly formulated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables rigorous analysis of completeness/optimality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State space may be intractably large"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works across domains (games, robotics, planning)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assumes discrete states and actions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "217-edge-cases",
      children: "2.1.7 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How to Handle"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No goal state exists"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm should detect unsolvability (e.g., 8-puzzle parity check)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multiple goal states"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Goal test becomes a membership check in a set of goal states"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zero-cost actions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can cause UCS to loop; need positive-cost guarantee"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Infinite state space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Problem formulation still works, but search may never terminate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unknown initial state"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use a belief state (set of possible states) instead of a single state"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-search-space-and-state-space-graph",
      children: "2.2 Search Space and State-Space Graph"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy — The Subway Map"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A subway map shows every station and every connecting line. Given your current station and a destination, the map defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "search space"
      }), ": all possible sequences of train rides you could take. Some routes are direct, others require transfers. The subway map is your ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "state-space graph"
      }), " — stations are states, train lines between them are actions. Your job (and the AI's) is to find a sequence of rides that gets you to your destination."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "221-formal-definition",
      children: "2.2.1 Formal Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "state space"
      }), " of a problem is the set of all states reachable from the initial state by any sequence of actions. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "state-space graph"
      }), " is a directed graph $\\mathcal{G} = (\\mathcal{S}, \\mathcal{E})$ where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vertices"
        }), " $\\mathcal{S}$ are states (configurations of the environment)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edges"
        }), " $\\mathcal{E}$ are transitions defined by actions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "branching factor"
        }), " $b$ is the average number of outgoing edges per state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "solution depth"
        }), " $d$ is the number of steps in the shortest solution."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"State-Space Graph (Partial)\"\n        A((Arad)) --> B((Zerind))\n        A --> C((Sibiu))\n        A --> D((Timisoara))\n        C --> E((Fagaras))\n        C --> F((Rimnicu))\n        E --> G((Bucharest))\n        F --> G\n        B --> H((Oradea))\n        H --> C\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Insight:"
        }), " The state-space graph may be ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "implicit"
        }), " — we generate states on-the-fly using the transition model rather than storing the entire graph. An explicit graph is stored in memory; an implicit one is generated lazily."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "222-algorithm--building-the-state-space-graph",
      children: "2.2.2 Algorithm — Building the State-Space Graph"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALGORITHM: BuildStateSpaceGraph(problem)\n1. Create an empty graph G with no vertices or edges\n2. Add problem.INITIAL as a vertex in G\n3. Initialize a queue Q with problem.INITIAL\n4. WHILE Q is not empty:\n5.     current ← POP(Q)\n6.     FOR each action in problem.ACTIONS(current):\n7.         next ← problem.RESULT(current, action)\n8.         IF next is not a vertex in G:\n9.             Add next as a vertex in G\n10.            ENQUEUE next into Q\n11.        Add a directed edge from current to next with label action\n12. RETURN G\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "223-dry-run--romanian-road-map-partial",
      children: "2.2.3 Dry Run — Romanian Road Map (Partial)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial state:"
      }), " Arad\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      }), " Drive to connected city\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Bucharest"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frontier (Q)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Vertices Added"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edges Added"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Arad]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{Arad}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Zerind, Sibiu, Timisoara]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{Arad, Zerind, Sibiu, Timisoara}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A→Z, A→S, A→T"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zerind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Sibiu, Timisoara, Oradea]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{…, Oradea}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Z→O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sibiu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Timisoara, Oradea, Fagaras, Rimnicu]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{…, Fagaras, Rimnicu}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S→F, S→R"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timisoara"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Oradea, Fagaras, Rimnicu, Lugoj]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{…, Lugoj}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T→L"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oradea"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Fagaras, Rimnicu, Lugoj]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{…}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O→S (exists)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fagaras"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Rimnicu, Lugoj, Bucharest]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{…, Bucharest}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F→B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rimnicu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Lugoj, Bucharest, Pitesti]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{…, Pitesti}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R→P"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lugoj"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Bucharest, Pitesti, Mehadia]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{…, Mehadia}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L→M"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Complete graph with 10 cities and 12 road connections discovered."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "224-python-implementation",
      children: "2.2.4 Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def build_state_space_graph(problem):\n    \"\"\"Build an explicit state-space graph from a problem definition.\"\"\"\n    graph = {'vertices': set(), 'edges': []}\n    initial = problem.initial\n    graph['vertices'].add(str(initial))\n    queue = [initial]\n\n    while queue:\n        current = queue.pop(0)\n        for action in problem.actions(current):\n            next_state = problem.result(current, action)\n            s_next = str(next_state)\n            if s_next not in graph['vertices']:\n                graph['vertices'].add(s_next)\n                queue.append(next_state)\n            graph['edges'].append((str(current), action, s_next))\n\n    return graph\n\n\n# Build the graph for a simple route-finding problem\nclass RouteFinding(Problem):\n    def __init__(self, initial, goal, roadmap):\n        super().__init__(initial, goal)\n        self.roadmap = roadmap\n\n    def actions(self, state):\n        return [city for city, _ in self.roadmap.get(state, [])]\n\n    def result(self, state, action):\n        return action\n\n\n# Example usage\nromania = {\n    'Arad': [('Zerind', 75), ('Sibiu', 140), ('Timisoara', 118)],\n    'Zerind': [('Oradea', 71), ('Arad', 75)],\n    'Sibiu': [('Fagaras', 99), ('Rimnicu', 80), ('Arad', 140)],\n    'Timisoara': [('Lugoj', 111), ('Arad', 118)],\n    'Fagaras': [('Bucharest', 211), ('Sibiu', 99)],\n    'Rimnicu': [('Pitesti', 97), ('Sibiu', 80)],\n    'Lugoj': [('Mehadia', 70), ('Timisoara', 111)],\n    'Oradea': [('Zerind', 71)],\n    'Pitesti': [('Bucharest', 101), ('Rimnicu', 97)],\n    'Mehadia': [('Lugoj', 70)],\n    'Bucharest': []\n}\n\nproblem = RouteFinding('Arad', 'Bucharest', romania)\ngraph = build_state_space_graph(problem)\nprint(f\"States discovered: {len(graph['vertices'])}\")\nprint(f\"Transitions: {len(graph['edges'])}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "225-complexity-analysis",
      children: "2.2.5 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(|S| × b) where |S| is the number of states and b is the branching factor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(|S| + |E|) to store the explicit graph"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Why?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every state must be visited once, and for each state we generate all b successors. For the 8-puzzle, that is 181,440 × ~2.67 ≈ 484,000 operations. For chess, building the full graph is impossible (~10^43 states)."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "226-advantages--disadvantages",
      children: "2.2.6 Advantages & Disadvantages"
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
            children: "Gives a complete picture of the problem space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infeasible for large state spaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables offline analysis and optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Building the full graph may be more expensive than solving the problem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Useful for visualization and debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many generated states may never be visited by search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for advanced search techniques"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires memory proportional to the state space"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "227-edge-cases",
      children: "2.2.7 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How to Handle"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cyclic graphs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect cycles with visited set to prevent infinite generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disconnected state spaces"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Goal may be unreachable; algorithm still terminates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Very large branching factor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prioritize generation using heuristics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Continuous state spaces"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discretize or use sampling techniques"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-tree-search-vs-graph-search",
      children: "2.3 Tree Search vs. Graph Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy — Exploring a Maze vs. Exploring a City"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tree search"
      }), " is like exploring a maze where you have no memory of where you have been — you might revisit the same intersection multiple times. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Graph search"
      }), " is like exploring a city with a smartphone that marks every street you have already walked — you never waste time retracing your steps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "231-tree-search",
      children: "2.3.1 Tree Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tree search treats the state space as a tree, ignoring the possibility that the same state can be reached through multiple paths. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "frontier"
      }), " holds nodes generated but not yet expanded."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALGORITHM: TreeSearch(problem)\n1. frontier ← {Node(problem.INITIAL)}\n2. LOOP:\n3.     IF frontier is empty: RETURN failure\n4.     node ← REMOVE-CHOICE(frontier)\n5.     IF problem.GOAL-TEST(node.STATE): RETURN SOLUTION(node)\n6.     frontier ← frontier ∪ EXPAND(problem, node)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "232-graph-search",
      children: "2.3.2 Graph Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Graph search tracks visited states in an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "explored set"
      }), " (closed list), preventing revisitation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALGORITHM: GraphSearch(problem)\n1. frontier ← {Node(problem.INITIAL)}\n2. explored ← ∅\n3. LOOP:\n4.     IF frontier is empty: RETURN failure\n5.     node ← REMOVE-CHOICE(frontier)\n6.     IF problem.GOAL-TEST(node.STATE): RETURN SOLUTION(node)\n7.     ADD node.STATE to explored\n8.     FOR each child in EXPAND(problem, node):\n9.         IF child.STATE not in explored AND child.STATE not in frontier:\n10.            frontier ← frontier ∪ {child}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "233-dry-run--tree-search-vs-graph-search",
      children: "2.3.3 Dry Run — Tree Search vs. Graph Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Simple graph with states A–B–C–D–E, start = A, goal = E, BFS order."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tree Search Trace:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frontier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expanded"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Goal?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B, C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[B, C]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A, D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[C, A, D]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A, E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A, D, A, E]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (repeat)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[D, A, E]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B, E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A, E, B, E]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (repeat)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[E, B, E]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " A, B are expanded multiple times in tree search — wasted work."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Graph Search Trace (with explored set):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frontier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explored"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expanded"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Goal?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B, C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[B, C]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[C, D]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A, B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[D, E]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A, B, C}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "— (B explored)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[E]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A, B, C, D}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Difference:"
        }), " Graph search expands 5 nodes; tree search expands 7+ nodes for the same problem. The savings grow exponentially with problem size."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "234-python-implementation",
      children: "2.3.4 Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def tree_search(problem, remove_choice):\n    \"\"\"Generic tree search. remove_choice defines the search strategy.\"\"\"\n    frontier = [Node(problem.initial)]\n    while frontier:\n        node = remove_choice(frontier)\n        if problem.goal_test(node.state):\n            return solution(node)\n        frontier += expand(problem, node)\n    return None\n\ndef graph_search(problem, remove_choice):\n    \"\"\"Generic graph search with explored set.\"\"\"\n    frontier = [Node(problem.initial)]\n    explored = set()\n    while frontier:\n        node = remove_choice(frontier)\n        if problem.goal_test(node.state):\n            return solution(node)\n        explored.add(str(node.state))\n        for child in expand(problem, node):\n            s = str(child.state)\n            if s not in explored and not any(str(n.state) == s for n in frontier):\n                frontier.append(child)\n    return None\n\n\nclass Node:\n    def __init__(self, state, parent=None, action=None, cost=0):\n        self.state = state\n        self.parent = parent\n        self.action = action\n        self.cost = cost\n\n    def __repr__(self):\n        return f\"Node({self.state})\"\n\n\ndef expand(problem, node):\n    \"\"\"Generate child nodes by applying all legal actions.\"\"\"\n    children = []\n    for action in problem.actions(node.state):\n        next_state = problem.result(node.state, action)\n        child = Node(next_state, node, action, node.cost + 1)\n        children.append(child)\n    return children\n\n\ndef solution(node):\n    \"\"\"Reconstruct the path from the initial state to the goal.\"\"\"\n    path = []\n    while node.parent is not None:\n        path.append(node.action)\n        node = node.parent\n    path.reverse()\n    return path\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "235-complexity-analysis",
      children: "2.3.5 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tree Search"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Graph Search"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b^d) — may revisit states"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b^d) — but typically less due to pruning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(bd) for DFS, O(b^d) for BFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b^d) — explored set adds overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Why?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree search generates b children per node for d levels. Graph search avoids revisiting, so effective branching factor is lower in graphs with many paths to the same state."
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "236-tree-search-vs-graph-search--comparison-table",
      children: "2.3.6 Tree Search vs. Graph Search — Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tree Search"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Graph Search"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory (explored set)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State revisitation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "States may be expanded many times"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each state expanded at most once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Completeness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete if no cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always complete (finite state spaces)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Optimality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as underlying strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as underlying strategy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (worst case)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b^d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b^d)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space (worst case)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on strategy + O(|S|)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree-structured problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph-structured problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Family genealogy tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Road network navigation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "237-advantages--disadvantages-of-graph-search",
      children: "2.3.7 Advantages & Disadvantages of Graph Search"
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
            children: "No redundant state expansions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory overhead for the explored set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Faster in densely connected graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equality checking adds per-node cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Always terminates in finite spaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May still revisit states on the frontier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lower effective branching factor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for huge state spaces"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "238-edge-cases",
      children: "2.3.8 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How to Handle"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State equality is expensive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use hashable state representations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Frontier also needs checking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph search must check both explored AND frontier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory exhaustion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fall back to iterative deepening or tree search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Continuous states"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot store exact states; use locality-sensitive hashing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-uninformed-search-algorithms",
      children: "2.4 Uninformed Search Algorithms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy — Searching a Dark Warehouse"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine you are in a pitch-black warehouse looking for a specific box. You have no map, no labels, no hints. You must systematically search every aisle. This is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "uninformed (blind) search"
      }), " — you have no information beyond the problem definition to guide your choices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "241-breadth-first-search-bfs",
      children: "2.4.1 Breadth-First Search (BFS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BFS expands nodes in order of their depth from the root. All nodes at depth $d$ are expanded before any node at depth $d+1$."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALGORITHM: BFS(problem)\n1. node ← Node(problem.INITIAL)\n2. IF problem.GOAL-TEST(node.STATE): RETURN SOLUTION(node)\n3. frontier ← FIFO queue containing node\n4. explored ← empty set\n5. LOOP:\n6.     IF EMPTY(frontier): RETURN failure\n7.     node ← POP(frontier)\n8.     ADD node.STATE to explored\n9.     FOR each action in problem.ACTIONS(node.STATE):\n10.        child ← CHILD-NODE(problem, node, action)\n11.        IF child.STATE not in explored AND child.STATE not in frontier:\n12.            IF problem.GOAL-TEST(child.STATE): RETURN SOLUTION(child)\n13.            frontier ← INSERT(child, frontier)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — BFS on the Romania Graph"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Start: Arad → Goal: Bucharest"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frontier (FIFO)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explored"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Generated"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Goal?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Arad]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zerind, Sibiu, Timisoara"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Zerind, Sibiu, Timisoara]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{Arad}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zerind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oradea"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Sibiu, Timisoara, Oradea]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{Arad, Zerind}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sibiu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fagaras, Rimnicu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Timisoara, Oradea, Fagaras, Rimnicu]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{Arad, Zerind, Sibiu}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timisoara"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lugoj"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Oradea, Fagaras, Rimnicu, Lugoj]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{…, Timisoara}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oradea"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "— (Zerind explored)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Fagaras, Rimnicu, Lugoj]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{…, Oradea}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fagaras"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bucharest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Arad → Sibiu → Fagaras → Bucharest (is this optimal? No — Arad → Sibiu → Rimnicu → Pitesti → Bucharest is shorter)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import deque\n\ndef bfs(problem):\n    \"\"\"Breadth-First Search — returns solution path or None.\"\"\"\n    initial_node = Node(problem.initial)\n    if problem.goal_test(initial_node.state):\n        return solution(initial_node)\n\n    frontier = deque([initial_node])\n    explored = set()\n\n    while frontier:\n        node = frontier.popleft()\n        explored.add(str(node.state))\n\n        for action in problem.actions(node.state):\n            child_state = problem.result(node.state, action)\n            s = str(child_state)\n\n            if s not in explored and not any(str(n.state) == s for n in frontier):\n                if problem.goal_test(child_state):\n                    child_node = Node(child_state, node, action, node.cost + 1)\n                    return solution(child_node)\n                frontier.append(Node(child_state, node, action, node.cost + 1))\n\n    return None\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "242-depth-first-search-dfs",
      children: "2.4.2 Depth-First Search (DFS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DFS expands the deepest unexpanded node first using a LIFO stack."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALGORITHM: DFS(problem)\n1. node ← Node(problem.INITIAL)\n2. IF problem.GOAL-TEST(node.STATE): RETURN SOLUTION(node)\n3. frontier ← LIFO stack containing node\n4. explored ← empty set\n5. LOOP:\n6.     IF EMPTY(frontier): RETURN failure\n7.     node ← POP(frontier)\n8.     IF problem.GOAL-TEST(node.STATE): RETURN SOLUTION(node)\n9.     ADD node.STATE to explored\n10.    FOR each action in problem.ACTIONS(node.STATE):\n11.        child ← CHILD-NODE(problem, node, action)\n12.        IF child.STATE not in explored AND child.STATE not in frontier:\n13.            frontier ← INSERT(child, frontier)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — DFS on Romania Graph"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frontier (LIFO)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explored"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Generated"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Goal?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Arad]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zerind, Sibiu, Timisoara"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Sibiu, Timisoara, Zerind]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{Arad}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sibiu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fagaras, Rimnicu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Rimnicu, Fagaras, Timisoara, Zerind]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{Arad, Sibiu}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rimnicu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pitesti"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Pitesti, Fagaras, Timisoara, Zerind]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{…, Rimnicu}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pitesti"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bucharest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Bucharest, Fagaras, Timisoara, Zerind]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{…, Pitesti}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bucharest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " DFS found a different path: Arad → Sibiu → Rimnicu → Pitesti → Bucharest (optimal at 418 km)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def dfs(problem):\n    \"\"\"Depth-First Search — returns solution path or None.\"\"\"\n    frontier = [Node(problem.initial)]\n    explored = set()\n\n    while frontier:\n        node = frontier.pop()\n        if problem.goal_test(node.state):\n            return solution(node)\n        explored.add(str(node.state))\n\n        for action in problem.actions(node.state):\n            child_state = problem.result(node.state, action)\n            s = str(child_state)\n            if s not in explored and not any(str(n.state) == s for n in frontier):\n                child_node = Node(child_state, node, action, node.cost + 1)\n                frontier.append(child_node)\n\n    return None\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "243-iterative-deepening-dfs-iddfs",
      children: "2.4.3 Iterative Deepening DFS (IDDFS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IDDFS combines DFS's linear space with BFS's completeness and optimality."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALGORITHM: IDDFS(problem)\n1. FOR depth = 0 TO ∞:\n2.     result ← DEPTH-LIMITED-SEARCH(problem, depth)\n3.     IF result ≠ cutoff: RETURN result\n\nSUBROUTINE: DLS(problem, limit)\n1. RETURN DLS-RECURSIVE(Node(problem.INITIAL), problem, limit)\n\nSUBROUTINE: DLS-RECURSIVE(node, problem, limit)\n1. IF problem.GOAL-TEST(node.STATE): RETURN SOLUTION(node)\n2. IF limit = 0: RETURN cutoff\n3. cutoff-occurred ← false\n4. FOR each action in problem.ACTIONS(node.STATE):\n5.     child ← CHILD-NODE(problem, node, action)\n6.     result ← DLS-RECURSIVE(child, problem, limit - 1)\n7.     IF result = cutoff: cutoff-occurred ← true\n8.     ELSE IF result ≠ failure: RETURN result\n9. RETURN cutoff if cutoff-occurred else failure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — IDDFS on a Simple Tree"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tree: root(G), children(A, B), grandchildren(C, D, E)."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Depth Limit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Nodes Expanded"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Found?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G, A, B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G, A, C, D, B, E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G, A, C, C1, C2, D, D1, B, E, E1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def depth_limited_search(problem, limit):\n    \"\"\"DFS with a depth limit. Returns solution, cutoff, or failure.\"\"\"\n    return _dls_recursive(Node(problem.initial), problem, limit, 0)\n\ndef _dls_recursive(node, problem, limit, depth):\n    if problem.goal_test(node.state):\n        return solution(node)\n    if depth == limit:\n        return 'cutoff'\n\n    cutoff_occurred = False\n    for action in problem.actions(node.state):\n        child_state = problem.result(node.state, action)\n        child_node = Node(child_state, node, action, node.cost + 1)\n        result = _dls_recursive(child_node, problem, limit, depth + 1)\n        if result == 'cutoff':\n            cutoff_occurred = True\n        elif result is not None:\n            return result\n    return 'cutoff' if cutoff_occurred else None\n\n\ndef iddfs(problem):\n    \"\"\"Iterative Deepening DFS.\"\"\"\n    depth = 0\n    while True:\n        result = depth_limited_search(problem, depth)\n        if result != 'cutoff':\n            return result\n        depth += 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "244-uniform-cost-search-ucs",
      children: "2.4.4 Uniform-Cost Search (UCS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UCS expands the node with the lowest path cost $g(n)$. It is Dijkstra's algorithm adapted for goal-directed search."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALGORITHM: UCS(problem)\n1. node ← Node(problem.INITIAL)\n2. frontier ← priority queue ordered by node.PATH-COST\n3. explored ← empty set\n4. LOOP:\n5.     IF EMPTY(frontier): RETURN failure\n6.     node ← POP(frontier)\n7.     IF problem.GOAL-TEST(node.STATE): RETURN SOLUTION(node)\n8.     ADD node.STATE to explored\n9.     FOR each action in problem.ACTIONS(node.STATE):\n10.        child ← CHILD-NODE(problem, node, action)\n11.        IF child.STATE not in explored AND child.STATE not in frontier:\n12.            frontier ← INSERT(child, frontier)\n13.        ELSE IF child.STATE in frontier with higher cost:\n14.            REPLACE frontier node with child\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — UCS on Romania Graph"
      }), " (costs in km)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frontier (cost)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explored"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expanded"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Goal?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arad(0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zerind(75), Sibiu(140), Timisoara(118)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zerind(75), Timisoara(118), Sibiu(140)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{Arad}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zerind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oradea(75+71=146)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timisoara(118), Sibiu(140), Oradea(146)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{Arad,Zerind}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timisoara"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lugoj(118+111=229)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sibiu(140), Oradea(146), Lugoj(229)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{Arad,Zerind,Timisoara}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sibiu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fagaras(239), Rimnicu(220)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rimnicu(220), Oradea(146), Lugoj(229), Fagaras(239)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{…,Sibiu}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rimnicu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pitesti(220+97=317)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oradea(146), Lugoj(229), Fagaras(239), Pitesti(317)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{…,Rimnicu}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oradea"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "— (Sibiu explored)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lugoj(229), Fagaras(239), Pitesti(317)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{…,Oradea}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lugoj"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mehadia(229+70=299)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fagaras(239), Mehadia(299), Pitesti(317)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{…,Lugoj}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fagaras"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bucharest(239+211=450)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mehadia(299), Pitesti(317), Bucharest(450)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{…,Fagaras}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mehadia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "…"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pitesti(317), Bucharest(450)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{…,Mehadia}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pitesti"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bucharest(317+101=418)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Bucharest(418)"
            }), ", Bucharest(450)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{…,Pitesti}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bucharest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Arad → Sibiu → Rimnicu → Pitesti → Bucharest (418 km) — the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "optimal"
      }), " route."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import heapq\n\ndef ucs(problem):\n    \"\"\"Uniform-Cost Search — optimal for non-negative costs.\"\"\"\n    start_node = Node(problem.initial)\n    if problem.goal_test(start_node.state):\n        return solution(start_node)\n\n    frontier = [(0, start_node)]\n    explored = {}\n\n    while frontier:\n        cost, node = heapq.heappop(frontier)\n        state_key = str(node.state)\n\n        if state_key in explored and explored[state_key] <= cost:\n            continue\n\n        if problem.goal_test(node.state):\n            return solution(node)\n\n        explored[state_key] = cost\n\n        for action in problem.actions(node.state):\n            child_state = problem.result(node.state, action)\n            child_cost = cost + 1\n            child_node = Node(child_state, node, action, child_cost)\n            child_key = str(child_state)\n\n            if child_key not in explored or explored[child_key] > child_cost:\n                heapq.heappush(frontier, (child_cost, child_node))\n\n    return None\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-measuring-search-performance",
      children: "2.5 Measuring Search Performance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy — Choosing a Search Strategy"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Different search strategies are like different tools in a toolbox. BFS is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "metal detector"
      }), " — thorough but slow, guaranteed to find everything. DFS is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "flashlight beam"
      }), " — fast and focused but can miss things in the shadows. IDDFS is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "search party that expands its radius"
      }), " each hour — thorough like the metal detector but without carrying all the heavy equipment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "251-the-four-evaluation-dimensions",
      children: "2.5.1 The Four Evaluation Dimensions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every search algorithm is evaluated along four dimensions:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Completeness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does it guarantee finding a solution if one exists?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without completeness, the algorithm may run forever or fail despite a solution existing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Optimality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does it guarantee the lowest-cost solution?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without optimality, you may waste time, fuel, or money on suboptimal paths"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How many nodes are generated?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determines whether the algorithm finishes in a reasonable time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How many nodes must be stored simultaneously?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Often the binding constraint — memory is usually scarcer than time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "252-complexity-analysis--the-why-behind-each-formula",
      children: "2.5.2 Complexity Analysis — The \"Why\" Behind Each Formula"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why Time?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why Space?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BFS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(b^{d+1})$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(b^{d+1})$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expands every node at depth $d$ and generates all children of depth-$d$ nodes before detecting the goal. The $+1$ accounts for generating one extra level."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The frontier holds all nodes at the current depth — there are $b^d$ of them, and each has $b$ children, hence $b^{d+1}$."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DFS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(b^m)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(bm)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In the worst case, DFS goes to maximum depth $m$, exploring $b$ branches per level. $m$ may be much larger than $d$ (solution depth)."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only stores one path from root to leaf ($m$ nodes) plus $b-1$ siblings at each level — hence $O(bm)$."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IDDFS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(b^d)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(bd)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root generated $d$ times, children $(d-1)$ times… total = $b^d(1 + \\frac{1}{b} + \\frac{1}{b^2} + \\cdots) \\approx b^d \\cdot \\frac{b}{b-1}$."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as DFS: $O(bd)$. Only stores one path plus siblings."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UCS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(b^{1 + \\lfloor C^*/\\epsilon \\rfloor})$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(b^{1 + \\lfloor C^*/\\epsilon \\rfloor})$"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Explores all nodes with cost $\\leq C^", (0,jsx_runtime.jsx)(_components.em, {
              children: "$ (optimal cost). Depth $d$ becomes $C^"
            }), "/\\epsilon$ where $\\epsilon$ is the minimum step cost."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as BFS with depth replaced by cost layers."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical Insight — Why Space Matters More Than Time:"
        }), " A BFS with $b = 10$ and $d = 12$ generates ~10^13 nodes. At 1 byte per node, that is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "10 TB"
        }), " of RAM — impossible. DFS would use only ~120 nodes. This is why IDDFS is preferred for large problems."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "253-algorithm--performance-evaluation",
      children: "2.5.3 Algorithm — Performance Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ALGORITHM: EvaluatePerformance(algorithm, problem)\n1. start_time ← CURRENT-TIME()\n2. start_memory ← CURRENT-MEMORY-USAGE()\n3. nodes_expanded ← 0\n4. max_frontier_size ← 0\n5. result ← RUN(algorithm, problem, track_nodes_count)\n6. end_time ← CURRENT-TIME()\n7. end_memory ← CURRENT-MEMORY-USAGE()\n8. RETURN {\n9.     \"solution\": result,\n10.    \"time\": end_time - start_time,\n11.    \"space_used\": end_memory - start_memory,\n12.    \"nodes_expanded\": algorithm.nodes_expanded,\n13.    \"max_frontier\": algorithm.max_frontier_size,\n14.    \"complete\": CHECK-COMPLETENESS(algorithm),\n15.    \"optimal\": CHECK-OPTIMALITY(algorithm)\n16. }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "254-python-implementation",
      children: "2.5.4 Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\nimport tracemalloc\nfrom collections import deque\nimport heapq\n\n\nclass SearchMetrics:\n\n    @staticmethod\n    def bfs_with_metrics(problem):\n        \"\"\"BFS with performance tracking.\"\"\"\n        start_time = time.time()\n        tracemalloc.start()\n\n        nodes_expanded = 0\n        max_frontier = 0\n\n        initial_node = Node(problem.initial)\n        if problem.goal_test(initial_node.state):\n            return solution(initial_node), time.time() - start_time, tracemalloc.get_traced_memory()[0]\n\n        frontier = deque([initial_node])\n        explored = set()\n\n        while frontier:\n            max_frontier = max(max_frontier, len(frontier))\n            node = frontier.popleft()\n            explored.add(str(node.state))\n            nodes_expanded += 1\n\n            for action in problem.actions(node.state):\n                child_state = problem.result(node.state, action)\n                s = str(child_state)\n                if s not in explored and not any(str(n.state) == s for n in frontier):\n                    if problem.goal_test(child_state):\n                        sol = solution(Node(child_state, node, action, node.cost + 1))\n                        elapsed = time.time() - start_time\n                        mem = tracemalloc.get_traced_memory()[1]\n                        tracemalloc.stop()\n                        return sol, elapsed, mem, nodes_expanded, max_frontier\n                    frontier.append(Node(child_state, node, action, node.cost + 1))\n\n        return None, None, None, nodes_expanded, max_frontier\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "255-advantages--disadvantages",
      children: "2.5.5 Advantages & Disadvantages"
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
            children: "Provides quantitative basis for algorithm selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity bounds are worst-case; real performance may differ"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space complexity often reveals the true limitation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity analysis assumes uniform branching factor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time and space analysis works cross-domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not capture heuristic quality (for informed search)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables theoretical comparison before implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asymptotic analysis hides constant factors"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "256-edge-cases",
      children: "2.5.6 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How to Handle"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Variable branching factor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use average branching factor $b$ for complexity estimates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Known solution depth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use IDDFS — linear space with BFS-like completeness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unknown step costs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot use UCS; fall back to BFS if uniform assumption holds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory-limited environment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminate BFS and UCS; choose DFS or IDDFS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Goal at depth 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All algorithms detect this in the initial check"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26-problem-classification",
      children: "2.6 Problem Classification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Problems are classified along three principal dimensions:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Categories"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Determinism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic vs. Nondeterministic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chess (deterministic) vs. Poker (nondeterministic)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Observability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully Observable vs. Partially Observable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-puzzle (full) vs. Card game (partial)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dynamics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static vs. Dynamic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crossword (static) vs. Self-driving car (dynamic)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Toy Problems"
      }), " are simplified domains for pedagogy: 8-puzzle, vacuum world, missionaries-cannibals."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Problems"
      }), " involve larger state spaces and complex constraints: route planning, VLSI layout, robot navigation, job-shop scheduling."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "27-problem-formulation-examples",
      children: "2.7 Problem Formulation Examples"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "8-Puzzle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Route Finding (Romania)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Vacuum World"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All 9!/2 = 181,440 tile arrangements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All cities in Romania (~20 cities)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All possible dirt + position combos (~2^2 × 2 = 8 states)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial state"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Given scrambled arrangement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arad (or any start city)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any arrangement (e.g., both rooms dirty, agent in left)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Actions(s)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{UP, DOWN, LEFT, RIGHT} for blank"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{Drive to each neighboring city}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{Left, Right, Suck}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Result(s,a)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blank swaps with adjacent tile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent moves to neighboring city"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left/Right moves agent; Suck cleans current room"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Goal test"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State matches goal arrangement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent is in Bucharest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All rooms clean"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Path cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 per move"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Road distance (km)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 per action"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Branching factor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2.67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable (2-4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Solution depth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~20 moves (worst-case)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 4 actions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "28-concept-comparison",
      children: "2.8 Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
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
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ (uniform cost)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b^{d+1})"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b^{d+1})"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIFO queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌ (without cycle check)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
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
            children: "LIFO stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IDDFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ (uniform cost)"
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
            children: "Depth-limited iterations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UCS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ (positive costs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b^{1+⌊C*/ε⌋})"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b^{1+⌊C*/ε⌋})"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority queue by g(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
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
            children: "Two simultaneous searches"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "29-quick-reference--state-space-search-components",
      children: "2.9 Quick Reference — State-Space Search Components"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example (8-Puzzle)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State space S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All configurations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All 9! / 2 = 181,440 tile arrangements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initial state s0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Starting config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Given scrambled puzzle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Actions Actions(s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legal moves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{Up, Down, Left, Right} blank"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transition Result(s,a)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resulting state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tile slides into blank position"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Goal test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is state the goal configuration?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Path cost c(s,a,s')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 per move (uniform)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "210-cross-application-matrix",
      children: "2.10 Cross-Application Matrix"
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
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IDDFS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UCS / Dijkstra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "211-interview-corner",
      children: "2.11 Interview Corner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Questions commonly asked in FAANG+ and AI research interviews:"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-explain-search-space-explosion-and-how-to-handle-it",
      children: "Q1: Explain search space explosion and how to handle it."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Problem:"
      }), " In a problem with branching factor $b = 10$ and solution depth $d = 15$, BFS generates $10^{16}$ nodes. At 1 microsecond per node, that is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "$10^{10}$ seconds ≈ 317 years"
      }), ". This is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "search space explosion"
      }), " — the state space grows exponentially with depth, making brute-force search infeasible."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Heuristic search (A*):"
        }), " Guides the search toward promising states, reducing the effective branching factor."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pruning:"
        }), " Eliminate provably suboptimal branches early."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bidirectional search:"
        }), " Reduces effective depth from $d$ to $d/2$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Problem decomposition:"
        }), " Break the problem into smaller subproblems (e.g., hierarchical planning)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constraint propagation:"
        }), " Reduce branching factor by eliminating illegal moves early."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-why-are-heuristics-important-in-search",
      children: "Q2: Why are heuristics important in search?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Heuristics (domain-specific knowledge) transform an uninformed exponential search into a tractable one. A good heuristic can reduce the effective branching factor from 40 (chess) to near 6, making the difference between a search that takes ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "$10^{100}$ years"
      }), " and one that finishes in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "minutes"
      }), ". Heuristics are the key insight that makes AI systems like DeepBlue, AlphaGo, and self-driving cars possible."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-the-difference-between-completeness-and-optimality",
      children: "Q3: What is the difference between completeness and optimality?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complete"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guarantees finding some solution if one exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS is complete; DFS without cycle detection is not"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Optimal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guarantees finding the lowest-cost solution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UCS is optimal; BFS is optimal only for uniform costs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An algorithm can be complete but not optimal (e.g., BFS with varying step costs finds a path but not the shortest). A complete-but-not-optimal algorithm is useful when ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "any solution"
      }), " is acceptable quickly (e.g., crisis response)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-would-you-choose-between-bfs-dfs-and-iddfs",
      children: "Q4: How would you choose between BFS, DFS, and IDDFS?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use BFS when:"
        }), " solution depth is small, memory is abundant, and optimality matters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use DFS when:"
        }), " state space is deep but sparse, memory is tight, and any solution is acceptable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use IDDFS when:"
        }), " solution depth is unknown, memory is limited, and completeness/optimality is needed (the most common case in AI)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-is-the-role-of-the-explored-set-in-graph-search",
      children: "Q5: What is the role of the explored set in graph search?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The explored set prevents revisiting states, reducing the effective branching factor from $b$ to something closer to $b-1$ (since parent states are never revisited). In highly connected graphs (like road networks), this can reduce the search space by orders of magnitude. Without it, the algorithm may cycle forever."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "212-applications-in-real-systems",
      children: "2.12 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gps-navigation-google-maps-waze-apple-maps",
      children: "GPS Navigation (Google Maps, Waze, Apple Maps)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Route-finding algorithms (A* with graph search) power every turn-by-turn navigation system. The road network is a graph — intersections are states, roads are edges weighted by distance or travel time. Real-time traffic data dynamically updates edge weights. When you search for \"restaurants near me,\" a variant of BFS explores the graph outward from your location (breadth-first by distance)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why search matters:"
      }), " Without efficient search algorithms, Google Maps would need minutes (not milliseconds) to compute routes across 100+ million miles of roads."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "game-ai-chess-go-video-games",
      children: "Game AI (Chess, Go, Video Games)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Game-playing AI is fundamentally search-based:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chess engines (Stockfish):"
        }), " Alpha-beta pruning search over 40+ plies, evaluating ~60 million positions per second."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AlphaGo / MuZero:"
        }), " Monte Carlo Tree Search (MCTS) combined with neural network heuristics to focus search on promising branches."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Video game NPCs:"
        }), " BFS/DFS for enemy pathfinding in procedurally generated levels. A* is the standard for real-time pathfinding in StarCraft, Minecraft, and Zelda."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "robotics-motion-planning",
      children: "Robotics (Motion Planning)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots use search to plan physical movements:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manipulation (robot arms):"
        }), " Search over joint configurations to find collision-free paths."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mobile robots (Roombas, drones):"
        }), " Graph search over occupancy grid maps, treating obstacle cells as blocked states."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-driving cars:"
        }), " Search over possible trajectories using A* on discretized state spaces."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "other-real-world-systems",
      children: "Other Real-World Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Search Usage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Telecommunications"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dijkstra's algorithm for shortest-path routing in network switches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bioinformatics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS/DFS for motif finding in DNA sequences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Supply Chain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UCS for optimal warehouse picking routes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scheduling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS with constraint propagation for airline crew scheduling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Natural Language Parsing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFS on grammar derivation trees for syntactic analysis"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " Which algorithm is guaranteed to find the optimal solution while using only O(bd) space?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) BFS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) DFS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) IDDFS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) UCS"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>C) IDDFS combines BFS's optimality with DFS's linear space requirements."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " What makes DFS incomplete on infinite state spaces?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It uses too much memory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) It may diverge down an infinite path"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It cannot handle cycles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It only works on trees"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) DFS may follow an infinite path and never backtrack to find the goal. Cycle detection helps but doesn't solve the infinite-path problem."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " Uniform-cost search reduces to BFS under what condition?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) When the heuristic is admissible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) When all step costs are equal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) When the branching factor is 2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) When using a FIFO queue"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) When all step costs are identical, UCS explores in breadth-first order since all nodes at the same depth have equal cost."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " What is the primary disadvantage of graph search compared to tree search?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It is not complete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) It requires more memory for the explored set"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It cannot handle cycles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It is slower in all cases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Graph search requires storing every visited state in the explored set, which can be memory-intensive for large state spaces."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " In the Romanian route-finding problem, which path does UCS find from Arad to Bucharest?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Arad → Sibiu → Fagaras → Bucharest"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Arad → Sibiu → Rimnicu → Pitesti → Bucharest"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Arad → Zerind → Oradea → Sibiu → Bucharest"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Arad → Timisoara → Lugoj → Mehadia → Bucharest"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) UCS finds the optimal path of 418 km: Arad → Sibiu (140) → Rimnicu (220) → Pitesti (317) → Bucharest (418)."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-summary",
      children: "Chapter Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter presented the state-space formulation of search problems and five uninformed search strategies. The choice among BFS, DFS, IDDFS, and uniform-cost search depends on the problem's branching factor, solution depth, and cost structure. Key takeaways:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Problem formulation"
        }), " provides a universal six-component framework for defining AI problems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State-space graphs"
        }), " abstract real-world problems into searchable structures."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tree search"
        }), " is simple but may revisit states; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "graph search"
        }), " adds an explored set to prevent redundancy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BFS"
        }), " is complete and optimal (uniform costs) but memory-intensive."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DFS"
        }), " uses little memory but is neither complete nor optimal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IDDFS"
        }), " combines the best of BFS and DFS — the most practical uninformed strategy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UCS"
        }), " finds optimal solutions for any positive-cost problem."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance evaluation"
        }), " (completeness, optimality, time, space) is essential for algorithm selection."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define completeness and optimality. Is it possible for a search algorithm to be complete but not optimal? Provide an example."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does BFS require exponential space while DFS requires linear space?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Under what conditions does IDDFS asymptotically match BFS in time complexity while using significantly less space?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why the explored set is crucial for graph search on cyclic graphs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare tree search and graph search for a problem where every state has exactly one path from the initial state. Which is better?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Formulate the 8-puzzle as a search problem. Define the state space, actions, transition model, goal test, and path cost. Estimate the size of the state space."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider a search problem with branching factor $b = 10$ and solution depth $d = 6$. Compute the number of nodes generated by BFS, DFS with cycle detection, and IDDFS."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For a UCS problem with $b = 3$, $C^* = 100$, and $\\epsilon = 1$, estimate the number of expanded nodes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Draw the state-space graph for the vacuum world with two rooms and implement BFS for it."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Route finding in Romania."
        }), " A traveler wishes to drive from Arad to Bucharest. Road distances between cities are known. Formulate this as a search problem. Implement uniform-cost search and determine the optimal route. Prove that the algorithm terminates and is optimal for this problem."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["Next: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/artificial-intelligence/03-informed-search",
          children: "Chapter 3: Informed Search and Heuristics"
        })]
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