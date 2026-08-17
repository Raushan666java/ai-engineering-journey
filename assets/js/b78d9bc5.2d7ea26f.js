"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[82795],{

/***/ 63995
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_artificial_intelligence_04_adversarial_search_md_b78_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-artificial-intelligence-04-adversarial-search-md-b78.json
const site_docs_courses_artificial_intelligence_04_adversarial_search_md_b78_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/artificial-intelligence/04-adversarial-search","title":"Chapter 4: Adversarial Search and Games","description":"Previous Informed Search and Heuristics | Next Constraint Satisfaction Problems","source":"@site/docs/courses/artificial-intelligence/04-adversarial-search.md","sourceDirName":"courses/artificial-intelligence","slug":"/artificial-intelligence/04-adversarial-search","permalink":"/ai-engineering-journey/artificial-intelligence/04-adversarial-search","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"04-adversarial-search","slug":"/artificial-intelligence/04-adversarial-search","title":"Chapter 4: Adversarial Search and Games","sidebar_label":"Chapter 4: Adversarial Search and Games","sidebar_position":6},"sidebar":"course-artificial-intelligence","previous":{"title":"Chapter 3: Solving Problems by Searching","permalink":"/ai-engineering-journey/artificial-intelligence/03-search"},"next":{"title":"Chapter 4: Constraint Satisfaction Problems","permalink":"/ai-engineering-journey/artificial-intelligence/04-csp"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/artificial-intelligence/04-adversarial-search.md


const frontMatter = {
	id: '04-adversarial-search',
	slug: '/artificial-intelligence/04-adversarial-search',
	title: 'Chapter 4: Adversarial Search and Games',
	sidebar_label: 'Chapter 4: Adversarial Search and Games',
	sidebar_position: 6
};
const contentTitle = 'Chapter 4: Adversarial Search and Games';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Adversarial Search Matters",
  "id": "why-adversarial-search-matters",
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
  "value": "1. Game Theory Fundamentals",
  "id": "1-game-theory-fundamentals",
  "level": 3
}, {
  "value": "2. Minimax Algorithm",
  "id": "2-minimax-algorithm",
  "level": 3
}, {
  "value": "3. Alpha-Beta Pruning",
  "id": "3-alpha-beta-pruning",
  "level": 3
}, {
  "value": "4. Minimax vs Alpha-Beta — Comparison Table",
  "id": "4-minimax-vs-alpha-beta--comparison-table",
  "level": 3
}, {
  "value": "5. Evaluation Functions and Cutoff Search",
  "id": "5-evaluation-functions-and-cutoff-search",
  "level": 3
}, {
  "value": "6. Games with Imperfect Information and Stochastic Elements",
  "id": "6-games-with-imperfect-information-and-stochastic-elements",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — Alpha-Beta Parameters",
  "id": "quick-reference--alpha-beta-parameters",
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
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
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
        id: "chapter-4-adversarial-search-and-games",
        children: "Chapter 4: Adversarial Search and Games"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/03-informed-search",
        children: "Chapter 3: Informed Search and Heuristics"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/05-csp",
        children: "Chapter 5: Constraint Satisfaction Problems"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the properties of zero-sum, perfect information games."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the Minimax algorithm and its use in decision-making for two-player games."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Alpha-Beta pruning to improve the efficiency of adversarial search."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate the impact of heuristic evaluation functions on game-playing performance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discuss the challenges of games with imperfect information or stochastic elements."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-adversarial-search-matters",
      children: "Why Adversarial Search Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy — Chess Grandmaster Thinking:"
        }), " Imagine you are playing a game of chess against a grandmaster. You are not just planning your own attack — you are constantly asking: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "\"If I move my knight here, what will my opponent do? Then how will I respond? What will they do next?\""
        }), " This chain of \"if-then\" reasoning, where you assume your opponent will always pick the move that hurts you the most, is precisely what adversarial search algorithms model. From Stockfish defeating world champions to AlphaGo mastering the ancient game of Go, every competitive AI in history relies on the fundamental ideas in this chapter."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Adversarial search is the branch of AI that tackles ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "competitive environments"
      }), " — situations where multiple agents have conflicting goals. Unlike the single-agent search problems in Chapters 2–3 (where the world is passive), adversarial search assumes an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "active opponent"
      }), " actively working against you. This makes it both harder (the search space explodes) and more interesting (you must reason about another agent's strategy)."]
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
            children: "Game Theory Fundamentals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-sum, perfect information, game tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Utility function, terminal state, branching factor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimax Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal play, MAX/MIN recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backup value, minimax value, full-tree search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alpha-Beta Pruning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "α/β bounds, pruning rule, move ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pruning, cutoff, best-first ordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Imperfect Information Games"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hidden cards, stochastic outcomes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expectiminimax, chance nodes, probability-weighted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cutoff search, Eval(s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quiescence, horizon effect, material balance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Game Theory] --> B[Game Tree]\n    B --> C[Minimax Algorithm]\n    C --> D[Alpha-Beta Pruning]\n    D --> E[Evaluation Functions]\n    E --> F[Cutoff Search]\n    C --> G[Stochastic Games]\n    C --> H[Imperfect Info Games]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/artificial-intelligence/ch04-adversarial-csp.png",
        alt: "Adversarial Search and CSP"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-game-theory-fundamentals",
      children: "1. Game Theory Fundamentals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy — Poker vs Chess:"
        }), " In chess, both players see the entire board (perfect information). In poker, you cannot see your opponent's hand (imperfect information). Most AI game-playing research starts with the simpler chess-like scenario: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "deterministic, turn-based, two-player, zero-sum, perfect-information"
        }), " games. This is the cleanest setting to understand adversarial reasoning."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Makes a Game Suitable for Adversarial Search?"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One player's gain = other player's loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chess, Checkers, Tic-Tac-Toe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Perfect Information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both players see the full state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chess, Go, Checkers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No dice, no randomness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chess, Checkers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Turn-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Players alternate moves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most board games"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Finite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Game ends after finite moves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All games with terminal states"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terminology:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Game Tree:"
        }), " Tree where each node is a board state, each edge is a move."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Branching Factor (b):"
        }), " Average number of legal moves per state (Chess: ~35, Go: ~250)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Depth (d):"
        }), " Number of moves until terminal (Chess: ~80 ply, Tic-Tac-Toe: ~9)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Terminal State:"
        }), " A state where the game ends (win/loss/draw)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Utility Function:"
        }), " Maps terminal states to numeric payoffs (win = +1, loss = -1, draw = 0)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ply:"
        }), " One half-move (a single player's turn). Two ply = one full round."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It Matters:"
      }), " The game tree size is ( b^d ) — exponential in depth. For Chess: ( 35^{80} ) states. This staggering number is ", (0,jsx_runtime.jsx)(_components.em, {
        children: "why"
      }), " we need smarter search than brute-force."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-minimax-algorithm",
      children: "2. Minimax Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy — Buyer vs Seller Negotiation:"
        }), " Imagine you are selling a used car and a buyer is negotiating. You want the highest price (MAX), the buyer wants the lowest (MIN). You propose $10,000. The buyer can either accept or counter-offer. If they counter, you can accept, reject, or counter again. The minimax algorithm models exactly this adversarial back-and-forth, assuming the buyer always picks the option that leaves you worst off — and you plan accordingly."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " The Minimax algorithm computes the optimal move for a player (MAX) assuming the opponent (MIN) also plays optimally. It is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "recursive depth-first search"
      }), " over the game tree."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate the complete game tree from the current state to all terminal states"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assign utility values to each terminal state (win = +1, loss = -1, draw = 0 for MAX)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Propagate values upward: at MAX nodes, take the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "maximum"
            }), " of children's values"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["At MIN nodes, take the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "minimum"
            }), " of children's values"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When value reaches the root, MAX selects the move leading to the highest-value child"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function MINIMAX(state):\n    if state is TERMINAL:\n        return UTILITY(state)\n    \n    if state is MAX_NODE:\n        value = -∞\n        for each successor in SUCCESSORS(state):\n            value = MAX(value, MINIMAX(successor))\n        return value\n    \n    if state is MIN_NODE:\n        value = +∞\n        for each successor in SUCCESSORS(state):\n            value = MIN(value, MINIMAX(successor))\n        return value\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Dry Run — Tic-Tac-Toe Endgame:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider a simplified game tree where MAX (X) has two possible moves, each leading to a MIN (O) response."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                Root (MAX)\n               /          \\\n          Node A (MIN)   Node B (MIN)\n          /     \\         /     \\\n        +1      -1      0      +1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table (Depth-First Order):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Children Values"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chosen"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Returned"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf L1 (A1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf L2 (A2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[+1, -1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf L3 (B1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf L4 (B2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, +1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-1, 0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "max = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " MAX chooses move B (value = 0 → draw) rather than move A (value = -1 → loss)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def minimax(board, depth, is_maximizing):\n    \"\"\"Minimax algorithm for a two-player game.\n    \n    Args:\n        board: Current game state object\n        depth: Remaining search depth\n        is_maximizing: True if current player is MAX\n        \n    Returns:\n        Best utility value achievable from this state\n    \"\"\"\n    # Base case: terminal state or depth limit reached\n    result = board.check_winner()\n    if result is not None:\n        return result  # +1 for MAX win, -1 for MIN win, 0 for draw\n    if depth == 0:\n        return evaluate(board)  # Heuristic evaluation\n    \n    if is_maximizing:\n        best_value = -float('inf')\n        for move in board.get_legal_moves():\n            board.make_move(move)\n            value = minimax(board, depth - 1, False)\n            board.undo_move(move)\n            best_value = max(best_value, value)\n        return best_value\n    else:\n        best_value = float('inf')\n        for move in board.get_legal_moves():\n            board.make_move(move)\n            value = minimax(board, depth - 1, True)\n            board.undo_move(move)\n            best_value = min(best_value, value)\n        return best_value\n\n\ndef find_best_move(board, depth):\n    \"\"\"Find the best move for MAX player.\"\"\"\n    best_value = -float('inf')\n    best_move = None\n    for move in board.get_legal_moves():\n        board.make_move(move)\n        value = minimax(board, depth - 1, False)\n        board.undo_move(move)\n        if value > best_value:\n            best_value = value\n            best_move = move\n    return best_move\n"
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
            children: "( O(b^d) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every node in the game tree must be visited — exponential in depth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(b \\cdot d) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depth-first recursion stack plus branching factor for state generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (finite trees)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Will always find a move if the game tree is finite"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns the theoretically optimal move assuming perfect opponent play"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Exponential?"
      }), " At each of ( d ) levels, the branching factor ( b ) multiplies the number of nodes. Chess: ( b \\approx 35 ), ( d \\approx 80 ) → ( 35^{80} ) states. Even at 1 trillion nodes/second, the universe would end before this finishes. This is why raw minimax is only usable for trivial games."]
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
            children: "Guarantees optimal play for finite zero-sum games"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential time complexity — unusable for deep games"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple recursive implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires full game tree — impractical for Chess/Go"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provably correct under assumptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assumes opponent always plays optimally (no exploitation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for all modern game AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot handle chance nodes or hidden information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to parallelize across branches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every node evaluated even when irrelevant"
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
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Terminal node at search start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Game already over"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check terminal before recursing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No legal moves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stalemate / draw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return 0 (draw) immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Depth limit reached"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cut off before terminal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use heuristic evaluation function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple optimal moves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indifferent choice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pick first, random, or use secondary heuristic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite loop (repeated states)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cycles in game graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use transposition table + visited set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transpositions (same state via different paths)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeated work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache results in transposition table (hash map)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-alpha-beta-pruning",
      children: "3. Alpha-Beta Pruning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy — Real Estate Shopping:"
        }), " You are house-hunting. You see a house listed at $500,000 and love it — it is your current best find (α = 500k). Now you tour another house. The realtor shows you the kitchen, then mentions the foundation has cracks. You immediately know fixing the foundation will cost $100k, bringing this house to at least $600k. You stop the tour — there is no need to see the bedrooms because the house is already worse than your current best. This is exactly how alpha-beta pruning works: once a branch proves it cannot beat the current best option, you ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "prune"
        }), " it without further exploration."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Alpha-Beta pruning is an enhancement to Minimax that avoids exploring branches that cannot possibly influence the final decision. It maintains two bounds — α (the best MAX can guarantee) and β (the best MIN can guarantee) — and prunes subtrees when α ≥ β."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perform depth-first minimax search as normal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintain α = best value found so far for MAX (initialized to -∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintain β = best value found so far for MIN (initialized to +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At each node, pass current α and β to children"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After evaluating a child, update α (at MAX nodes) or β (at MIN nodes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["If at any point α ≥ β, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "prune"
            }), " remaining children — they cannot affect the result"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return the node's minimax value as usual"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function ALPHA-BETA(state, α, β):\n    if state is TERMINAL:\n        return UTILITY(state)\n    \n    if state is MAX_NODE:\n        value = -∞\n        for each successor in SUCCESSORS(state):\n            value = MAX(value, ALPHA-BETA(successor, α, β))\n            if value ≥ β:\n                return value    // β prune\n            α = MAX(α, value)\n        return value\n    \n    if state is MIN_NODE:\n        value = +∞\n        for each successor in SUCCESSORS(state):\n            value = MIN(value, ALPHA-BETA(successor, α, β))\n            if value ≤ α:\n                return value    // α prune\n            β = MIN(β, value)\n        return value\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Dry Run — Full Trace with α/β Bounds:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider this game tree (depth = 3, MIN at middle level):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                Root (MAX)  α=-∞, β=+∞\n               /           \\\n          Node A (MIN)    Node B (MIN)\n         /   |   \\        /   |   \\\n        3    12   8      2   14   5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "α"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "β"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Child Val"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Descend to A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exploring A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Descend to A1"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return 3"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "β = min(+∞, 3) = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "β updated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Descend to A2"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return 12"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "β = min(3, 12) = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "β unchanged"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Descend to A3"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return 8"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "β = min(3, 8) = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "β unchanged"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A evaluated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "α = max(-∞, 3) = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "α updated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Descend to B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exploring B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Descend to B1"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return 2"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "β = min(+∞, 2) = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "β updated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["α ≥ β → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "PRUNE!"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B2 and B3 skipped"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pruned result"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "α = max(3, 2) = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "α unchanged"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Return 3, choose move A"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Observation:"
      }), " Nodes B2 (14) and B3 (5) were ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "never visited"
      }), ". Without pruning, minimax would evaluate all 7 leaf nodes. With alpha-beta, only 5 leaf nodes were visited — a 28% savings on this tiny tree. On larger trees, savings approach 50% with optimal ordering."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def alpha_beta(board, depth, alpha, beta, is_maximizing):\n    \"\"\"Alpha-Beta pruning for a two-player game.\n    \n    Args:\n        board: Current game state\n        depth: Remaining search depth\n        alpha: Best value MAX can guarantee (upper bound for MIN)\n        beta: Best value MIN can guarantee (lower bound for MAX)\n        is_maximizing: True if current player is MAX\n        \n    Returns:\n        Best utility value from this state\n    \"\"\"\n    result = board.check_winner()\n    if result is not None:\n        return result\n    if depth == 0:\n        return evaluate(board)\n    \n    if is_maximizing:\n        best_value = -float('inf')\n        for move in board.get_legal_moves():\n            board.make_move(move)\n            value = alpha_beta(board, depth - 1, alpha, beta, False)\n            board.undo_move(move)\n            best_value = max(best_value, value)\n            alpha = max(alpha, value)\n            if beta <= alpha:\n                break  # β prune\n        return best_value\n    else:\n        best_value = float('inf')\n        for move in board.get_legal_moves():\n            board.make_move(move)\n            value = alpha_beta(board, depth - 1, alpha, beta, True)\n            board.undo_move(move)\n            best_value = min(best_value, value)\n            beta = min(beta, value)\n            if beta <= alpha:\n                break  # α prune\n        return best_value\n\n\ndef find_best_move_alpha_beta(board, depth):\n    \"\"\"Find best move using alpha-beta pruning.\"\"\"\n    best_value = -float('inf')\n    best_move = None\n    alpha = -float('inf')\n    beta = float('inf')\n    \n    # Sort moves by heuristic for better pruning (move ordering)\n    moves = board.get_legal_moves()\n    moves = sorted(moves, key=lambda m: board.move_heuristic(m), reverse=True)\n    \n    for move in moves:\n        board.make_move(move)\n        value = alpha_beta(board, depth - 1, alpha, beta, False)\n        board.undo_move(move)\n        if value > best_value:\n            best_value = value\n            best_move = move\n        alpha = max(alpha, value)\n    return best_move\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Worst Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Average Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(b^{d/2}) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(b^d) ) — same as Minimax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(b^{3d/4}) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(b \\cdot d) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(b \\cdot d) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(b \\cdot d) )"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Best Case is ( O(b^{d/2}) ):"
      }), " With perfect move ordering (best moves evaluated first), alpha-beta prunes approximately half the tree levels. This effectively doubles the searchable depth compared to naive minimax for the same computational budget."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Worst Case is ( O(b^d) ):"
      }), " With worst move ordering (worst moves first), no pruning occurs at all. The algorithm degenerates to plain minimax."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight for Efficiency:"
      }), " Move ordering is ", (0,jsx_runtime.jsx)(_components.em, {
        children: "everything"
      }), ". Evaluate likely-best moves first. Common strategies:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Killer heuristic:"
        }), " Moves that caused pruning at one depth are tried first at sibling depths."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "History heuristic:"
        }), " Track which moves caused cutoffs most frequently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Iterative deepening:"
        }), " Search depth 1, then 2, then 3... using previous depth's best move as the first candidate."]
      }), "\n"]
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
            children: "Much faster than Minimax in practice (can double search depth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance depends heavily on move ordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Returns exactly the same result as Minimax (no approximation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst case = same as plain Minimax"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement as a wrapper around Minimax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex to parallelize efficiently (shared α/β bounds)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory efficient (depth-first)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ineffective if branching factor is small"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Widely used in real game engines (Stockfish)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot handle chance nodes or imperfect information"
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
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "α = β at root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All moves equally good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pick any or use secondary heuristic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-width window (α = β)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Null window search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used for scout search — test if move exceeds bound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Negative infinity pruning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No initial bounds known"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start α = -∞, β = +∞"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transposition interference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same state, different α/β"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store bounds in transposition table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deep pruning cascade"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One prune enables deeper prunes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive bound tightening"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fail-soft vs fail-hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returning values outside [α, β]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail-soft may return tighter bounds for parent"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-minimax-vs-alpha-beta--comparison-table",
      children: "4. Minimax vs Alpha-Beta — Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Minimax"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Alpha-Beta"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Optimal"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Identical"
            }), " to Minimax"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nodes Visited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "All ( b^d )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "( b^{d/2} ) to ( b^d ) (depends on ordering)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search Depth (same time)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "( d )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Up to ( 2d ) with perfect ordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Move Ordering Needed?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Critical"
            }), " for performance"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low (adds α/β params + pruning check)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallelizable?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes (trivially)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Moderate (shared bounds)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "( O(bd) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "( O(bd) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles Chance Nodes?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No (same limitation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Used in Production Engines?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Only for trivial games"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            }), " (Stockfish, Leela, etc.)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-evaluation-functions-and-cutoff-search",
      children: "5. Evaluation Functions and Cutoff Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy — Military General's Intel:"
        }), " A general cannot see every possible battlefield outcome 20 moves ahead. Instead, they evaluate the current situation: troop strength, supply lines, terrain advantage. This is exactly an evaluation function — a fast, approximate measure of how \"good\" a position looks, without simulating the entire future."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " An evaluation function ( Eval(s) ) estimates the utility of a non-terminal state ( s ) from MAX's perspective. It replaces the full tree search to terminal states with a heuristic estimate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties of a Good Evaluation Function:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Accuracy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Should correlate strongly with actual winning chances"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be computable in microseconds (called millions of times)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small changes in state → small changes in evaluation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Symmetry"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( Eval(s) ) for MAX = ( -Eval(s) ) for MIN in zero-sum games"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example — Chess Evaluation Function:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Eval(s) = MaterialBalance + PositionalScore + KingSafety + PawnStructure\n\nMaterialBalance = 9*(#Queens_MAX - #Queens_MIN)\n                + 5*(#Rooks_MAX - #Rooks_MIN)\n                + 3*(#Bishops_MAX - #Bishops_MIN + #Knights_MAX - #Knights_MIN)\n                + 1*(#Pawns_MAX - #Pawns_MIN)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Piece values: Pawn=1, Knight=3, Bishop=3, Rook=5, Queen=9. King is priceless (game ends if lost)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Horizon Effect:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A critical failure mode of cutoff search: a catastrophic consequence (e.g., losing the queen in chess) may be pushed just beyond the search depth by a clever sequence of moves, making a position appear artificially good."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mitigation Techniques:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It Works"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quiescence Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue searching until the position is \"quiet\" (no captures, checks)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Singular Extensions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search deeper when one move is clearly better than alternatives"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative Deepening"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increase depth gradually; horizon pushes out naturally"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive Horizon Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analyze the \"threat\" that was just pushed over"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-games-with-imperfect-information-and-stochastic-elements",
      children: "6. Games with Imperfect Information and Stochastic Elements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy — Poker:"
        }), " Unlike chess, poker players cannot see their opponent's cards. Decisions must account for probabilities (\"there is a 30% chance my opponent has a flush\") and bluffing (intentional misinformation). This makes the game fundamentally harder — the optimal strategy is no longer a single move but a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "probability distribution over moves"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stochastic Games (With Chance):"
      }), " Games like Backgammon include dice rolls. The game tree has ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "chance nodes"
      }), " where the outcome is probabilistic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expectiminimax Algorithm:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function EXPECTIMINIMAX(state):\n    if state is TERMINAL:\n        return UTILITY(state)\n    \n    if state is MAX_NODE:\n        return MAX over children of EXPECTIMINIMAX(child)\n    \n    if state is MIN_NODE:\n        return MIN over children of EXPECTIMINIMAX(child)\n    \n    if state is CHANCE_NODE:\n        return SUM over children of P(child) * EXPECTIMINIMAX(child)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " ( O(b^d \\cdot n^d) ) where ( n ) is the number of chance outcomes per chance node — significantly worse than standard minimax."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Imperfect Information (Hidden Cards):"
      }), " Games like Poker, Bridge, and Stratego require reasoning about ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "belief states"
      }), " — sets of possible world states consistent with observations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Challenges:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AI Approach"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Information Revelation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New info arrives unpredictably"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bayesian updating of belief states"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bluffing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deliberate misinformation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Game-theoretic equilibrium strategies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Opponent Modeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infer hidden state from actions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counterfactual regret minimization (CFR)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State Uncertainty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple possible current states"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Averaging evaluation across belief states"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adversarial search is used in competitive multi-agent environments."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimax provides a perfect play strategy for zero-sum games with perfect information."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The complexity of games is often measured by their branching factor and depth."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alpha-Beta pruning can theoretically double the depth of search compared to pure Minimax."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluation functions are the \"intelligence\" in practical game-playing agents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move ordering is the single most important optimization for alpha-beta effectiveness."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time games require iterative deepening, transposition tables, and quiescence search to manage state explosions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stochastic and imperfect-information games require Expectiminimax or counterfactual regret minimization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Feature"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ (finite tree)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(bd)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full tree, both players optimal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alpha-Beta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ (same as Minimax)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(bd)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prunes irrelevant branches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expectiminimax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ (max expected)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(bⁿd)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chance nodes with probabilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌ (asymptotically complete)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌ (approximate)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selective sampling via UCT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CFR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ (tabular)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ (Nash equilibrium)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Large"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regret minimization for imperfect info"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--alpha-beta-parameters",
      children: "Quick Reference — Alpha-Beta Parameters"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Initial Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Update Rule"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "α (Alpha)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best value for MAX along path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "α ← max(α, v)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "β (Beta)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best value for MIN along path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "+∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "β ← min(β, v)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pruning condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "α ≥ β"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip remaining children"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
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
            children: "Minimax"
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
            children: "Alpha-Beta"
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
            children: "MCTS"
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
            children: "⬜"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expectiminimax"
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
            children: "Evaluation Functions"
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
            children: "⬜"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transposition Tables"
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
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "⬜"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common adversarial search questions in technical interviews and their expert answers:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: How much faster is Alpha-Beta than Minimax?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "In the best case (perfect move ordering), alpha-beta cuts the effective branching factor from ( b ) to ( \\sqrt{b} ), reducing node count from ( b^d ) to ( b^{d/2} ). This doubles the searchable depth for the same compute budget. In practice with good move ordering, Stockfish achieves about 85–95% of this theoretical maximum."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: What makes a good evaluation function?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Three properties: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Accuracy"
        }), " — it must correlate with actual winning probability; (2) ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Speed"
        }), " — it is called at every leaf node, potentially millions of times per search; (3) ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Differentiability"
        }), " — small move differences should produce proportional evaluation differences. Material balance alone (piece counting) gets about 70% accuracy in chess; adding position tables, pawn structure, and king safety pushes it above 90%."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: What is the horizon effect and how do you fix it?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The horizon effect occurs when a negative consequence (e.g., losing the queen) is pushed just beyond the search depth by a sequence of forcing moves (checks, captures). The search sees an artificially positive evaluation because it cannot see the coming disaster. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Solutions:"
        }), " quiescence search (extend search until position is \"quiet\"), singular extensions (extend branches with one standout move), and iterative deepening (each deeper iteration pushes the horizon further)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: How do transposition tables improve game-tree search?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Transposition tables cache the evaluation of already-seen states using Zobrist hashing. The same chess position can be reached through different move sequences (e.g., 1.e4 e5 2.Nf3 vs 1.Nf3 e5 2.e4). Without a transposition table, both paths are explored independently. With one, the second encounter is a cache hit — saving an entire subtree. Stockfish's transposition table hits 40–60% of lookups in the middle game."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: Can Alpha-Beta pruning be combined with Monte Carlo Tree Search?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Not directly — MCTS uses statistical sampling (UCB1 selection), not depth-first minimax with α/β bounds. However, hybrid approaches exist: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AlphaZero"
        }), " uses MCTS with a neural network evaluation function, achieving superhuman performance at Go, Chess, and Shogi. The α/β idea lives on in the \"backup\" phase of MCTS, where node values are propagated upward (though as visit counts and average rewards, not minimax values)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Game"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technique Used"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stockfish"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chess"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alpha-Beta + iterative deepening + transposition tables + hand-crafted evaluation (~350 rules)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest-rated chess engine (~3600 Elo), open-source, runs on commodity hardware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Leela Chess Zero"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chess"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MCTS + neural network evaluation (self-play training)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3500 Elo, demonstrates MCTS parity with alpha-beta at elite levels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AlphaGo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MCTS + deep neural networks (policy + value networks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First AI to beat a world champion (Lee Sedol, 2016), move 37 in game 2 was \"beautiful\" per professionals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AlphaZero"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go, Chess, Shogi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MCTS + single neural network, pure self-play"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generalized superhuman performance, no human knowledge, discovered novel strategies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DeepBlue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chess"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alpha-Beta + custom ASIC chips + grandmaster opening book"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First computer to beat a reigning world champion (Kasparov, 1997)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pluribus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poker (No-Limit Texas Hold'em)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counterfactual Regret Minimization (CFR) + real-time abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First superhuman AI in multi-player poker with imperfect information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Libratus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poker (Heads-Up No-Limit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CFR + nested abstraction + self-play"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beat four professional poker players in 2017"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MuZero"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atari, Chess, Go, Shogi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learned model (no rules given) + MCTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mastered games without knowing the rules — learned everything from experience"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Video Game AI (OpenAI Five)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dota 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PPO + LSTM + self-play (~60k years of gameplay)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beat world champions, coordinates 5 heroes with imperfect information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "StarCraft II (AlphaStar)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "StarCraft II"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transformer + deep RL + MCTS-like tree search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grandmaster level, manages imperfect information (fog of war)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How Stockfish Uses Alpha-Beta in Practice:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Iterative Deepening:"
        }), " Starts at depth 1, incrementally increases. If search is interrupted, the best move from the deepest completed depth is returned."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Move Ordering:"
        }), " Captures first (MVV-LVA — Most Valuable Victim, Least Valuable Attacker), then killer moves, then history heuristic, then remaining moves."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Null-Move Pruning:"
        }), " Skip a turn and see if the position is still good — if even after \"passing\" the evaluation holds, the branch is safe to prune."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Late Move Reductions (LMR):"
        }), " Moves later in the ordering are searched at reduced depth unless they prove promising."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transposition Table:"
        }), " Zobrist-hashed entries store depth, score, flag (exact/lower/upper bound) and best move."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " In the Minimax algorithm, what value does a MAX node return?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The minimum of its children's values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The maximum of its children's values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The average of its children's values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The sum of its children's values"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) MAX nodes select the child with the highest backed-up value."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " What condition triggers alpha-beta pruning?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) When α ≤ β"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) When α ≥ β"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) When search depth exceeds limit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) When all nodes are evaluated"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Pruning occurs when α ≥ β, meaning the current branch cannot affect the final decision."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " What is the \"horizon effect\"?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The game tree is too deep to search completely"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) A negative side effect of a move is pushed beyond the search depth"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Alpha-beta only works for shallow trees"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The branching factor increases at deeper levels"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) The horizon effect occurs when a detrimental consequence is pushed beyond the search cutoff depth, making a move appear better than it actually is."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " Which factor most significantly impacts Alpha-Beta pruning efficiency?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The programming language used"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The order in which moves are evaluated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The size of the game board"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The number of players"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Move ordering is the single most important factor. Best-first ordering can achieve \\( b^{d/2} \\) complexity; worst-first degrades to \\( b^d \\)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " What distinguishes Expectiminimax from Minimax?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Expectiminimax uses a different utility function"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Expectiminimax adds chance nodes with probabilistic outcomes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Expectiminimax only works for single-player games"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Expectiminimax is always faster"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Expectiminimax introduces chance nodes that average child values weighted by their probabilities, handling games with random elements like dice (Backgammon) or shuffled cards."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is the Minimax algorithm called \"zero-sum\"?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the meaning of α and β in pruning."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is \"quiescence search\" and why is it used?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How do stochastic games (like Backgammon) differ from deterministic games (like Chess)?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why move ordering is critical for alpha-beta pruning but irrelevant for minimax."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Draw a game tree for a simple game of Tic-Tac-Toe and calculate Minimax values for the first three moves."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given a tree with leaf values [3, 5, 2, 9, 12, 5, 23, 23], trace the Alpha-Beta pruning process. Which nodes are skipped and why?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a simple evaluation function for a Connect Four game."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For a game tree with branching factor b=20 and depth d=10, calculate the number of nodes visited by (a) Minimax, (b) Alpha-Beta in the best case, and (c) Alpha-Beta with 50% pruning efficiency."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Horizon Effect Analysis:"
          }), " Discuss the \"Horizon Effect\" in game playing. How can an agent be tricked into making a bad move by pushing an inevitable loss just beyond its search depth? Propose two methods to mitigate this effect, and implement the quiescence search mitigation in pseudocode."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Transposition Table Design:"
          }), " Design a transposition table for a game-tree search. Explain the Zobrist hashing scheme, what information should be stored per entry (depth, score, flag, best move), and how to handle hash collisions. Why is a 64-bit Zobrist hash preferred over a 32-bit hash for transposition tables?"]
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