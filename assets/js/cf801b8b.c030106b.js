"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[46295],{

/***/ 63512
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_artificial_intelligence_05_game_playing_md_cf8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-artificial-intelligence-05-game-playing-md-cf8.json
const site_docs_courses_artificial_intelligence_05_game_playing_md_cf8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/artificial-intelligence/05-game-playing","title":"Chapter 5: Game Playing and Adversarial Search","description":"Previous Constraint Satisfaction Problems | Next Logical Agents and Propositional Logic","source":"@site/docs/courses/artificial-intelligence/05-game-playing.md","sourceDirName":"courses/artificial-intelligence","slug":"/artificial-intelligence/05-game-playing","permalink":"/ai-engineering-journey/artificial-intelligence/05-game-playing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"05-game-playing","slug":"/artificial-intelligence/05-game-playing","title":"Chapter 5: Game Playing and Adversarial Search","sidebar_label":"Chapter 5: Game Playing and Adversarial Search","sidebar_position":9},"sidebar":"course-artificial-intelligence","previous":{"title":"Chapter 5: Constraint Satisfaction Problems","permalink":"/ai-engineering-journey/artificial-intelligence/05-csp"},"next":{"title":"Chapter 6: Knowledge Representation","permalink":"/ai-engineering-journey/artificial-intelligence/06-knowledge-representation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/artificial-intelligence/05-game-playing.md


const frontMatter = {
	id: '05-game-playing',
	slug: '/artificial-intelligence/05-game-playing',
	title: 'Chapter 5: Game Playing and Adversarial Search',
	sidebar_label: 'Chapter 5: Game Playing and Adversarial Search',
	sidebar_position: 9
};
const contentTitle = 'Chapter 5: Game Playing and Adversarial Search';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Game Playing in AI Matters",
  "id": "why-game-playing-in-ai-matters",
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
  "value": "5.1 Game Theory and Game Trees",
  "id": "51-game-theory-and-game-trees",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "Formal Definition of a Game",
  "id": "formal-definition-of-a-game",
  "level": 3
}, {
  "value": "5.1.1 Types of Games",
  "id": "511-types-of-games",
  "level": 3
}, {
  "value": "5.1.2 Game Complexity",
  "id": "512-game-complexity",
  "level": 3
}, {
  "value": "5.2 Minimax Algorithm",
  "id": "52-minimax-algorithm",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
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
  "value": "Python Implementation",
  "id": "python-implementation",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages",
  "level": 3
}, {
  "value": "Depth-Limited Minimax &amp; Evaluation Functions",
  "id": "depth-limited-minimax--evaluation-functions",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "5.3 Alpha-Beta Pruning",
  "id": "53-alpha-beta-pruning",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
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
  "value": "Step-by-Step Dry Run (With Pruning)",
  "id": "step-by-step-dry-run-with-pruning",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation-1",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-1",
  "level": 3
}, {
  "value": "Move Ordering Heuristics",
  "id": "move-ordering-heuristics",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 3
}, {
  "value": "5.4 Games of Chance (Expectiminimax)",
  "id": "54-games-of-chance-expectiminimax",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
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
  "id": "step-by-step-dry-run-1",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation-2",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
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
  "value": "5.5 Monte Carlo Tree Search (MCTS)",
  "id": "55-monte-carlo-tree-search-mcts",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 3
}, {
  "value": "The Four-Phase MCTS Loop",
  "id": "the-four-phase-mcts-loop",
  "level": 3
}, {
  "value": "UCT Selection Formula",
  "id": "uct-selection-formula",
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
  "id": "step-by-step-dry-run-2",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation-3",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
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
  "value": "MCTS with Neural Networks",
  "id": "mcts-with-neural-networks",
  "level": 3
}, {
  "value": "5.6 Imperfect Information Games",
  "id": "56-imperfect-information-games",
  "level": 2
}, {
  "value": "Minimax vs Alpha-Beta vs MCTS — Comparison",
  "id": "minimax-vs-alpha-beta-vs-mcts--comparison",
  "level": 2
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — Game Complexity",
  "id": "quick-reference--game-complexity",
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
  "value": "Chess — Stockfish &amp; Leela Chess Zero (Lc0)",
  "id": "chess--stockfish--leela-chess-zero-lc0",
  "level": 3
}, {
  "value": "Go — AlphaGo, AlphaGo Zero, KataGo",
  "id": "go--alphago-alphago-zero-katago",
  "level": 3
}, {
  "value": "Poker — Pluribus (2019)",
  "id": "poker--pluribus-2019",
  "level": 3
}, {
  "value": "Atari — DQN and Beyond",
  "id": "atari--dqn-and-beyond",
  "level": 3
}, {
  "value": "5.7 Summary",
  "id": "57-summary",
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
        id: "chapter-5-game-playing-and-adversarial-search",
        children: "Chapter 5: Game Playing and Adversarial Search"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/05-csp",
        children: "Chapter 5: Constraint Satisfaction Problems"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/06-logic",
        children: "Chapter 6: Logical Agents and Propositional Logic"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the conclusion of this chapter, the student will be able to: (1) formulate game problems as game trees with utility functions; (2) implement the minimax algorithm; (3) apply alpha-beta pruning to improve search efficiency; (4) implement Monte Carlo tree search; (5) adapt search algorithms for stochastic and imperfect information games."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-game-playing-in-ai-matters",
      children: "Why Game Playing in AI Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Imagine a chess grandmaster sitting across from a worthy opponent. The grandmaster doesn't just react to the last move — she visualizes 15–20 moves ahead, evaluating thousands of possible sequences, anticipating the opponent's best responses, and selecting the move that maximizes her winning chances. Every move says, \"I've thought about what you'll do, and I'm ready.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is the core of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "adversarial search"
      }), " in AI. Unlike standard search (pathfinding, puzzle solving), game playing has an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "active opponent"
      }), " who works against you. Game-playing algorithms model this competition formally, enabling AI systems to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Plan against adversaries"
        }), " — from chess engines to military strategy simulators"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Handle uncertainty"
        }), " — when dice rolls or hidden cards introduce chance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scale to massive spaces"
        }), " — games like Go have more states than atoms in the universe"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Make real-time decisions"
        }), " — when you have seconds, not hours, to decide"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The techniques here — minimax, alpha-beta pruning, MCTS — power everything from Deep Blue's 1997 chess victory to AlphaGo's 2016 Go triumph and modern poker AI like Pluribus."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Game Theory & Trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State space, utility, terminal test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Game tree, zero-sum, perfect info"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimax Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal play, MAX/MIN, depth-limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation function, backup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alpha-Beta Pruning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "α/β bounds, move ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Killer heuristic, iterative deepening"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Games of Chance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expectiminimax, chance nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stochastic games, expected value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selection, expansion, simulation, backprop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UCT, exploration constant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Imperfect Information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Belief states, determinization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nash equilibrium, CFR"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Game Tree] --> B[Minimax]\n    B --> C[Alpha-Beta Pruning]\n    B --> D[Expectiminimax]\n    B --> E[MCTS]\n    C --> F[Move Ordering]\n    E --> G[UCT Selection]\n    E --> H[Backpropagation]\n    A --> I[Imperfect Info Games]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "51-game-theory-and-game-trees",
      children: "5.1 Game Theory and Game Trees"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/artificial-intelligence/ch05-game-playing.png",
        alt: "Game Playing and Adversarial Search"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of a chessboard at the start of a match. The board is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "state"
      }), ", the rules define legal ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "actions"
      }), ", each move transitions to a new ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "state"
      }), ", and checkmate is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "terminal"
      }), " condition. The entire set of possible move sequences — every game that could ever be played — forms a tree rooted at the starting position. This tree is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "game tree"
      }), ", and navigating it intelligently is the central challenge of game-playing AI."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "formal-definition-of-a-game",
      children: "Formal Definition of a Game"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "game"
      }), " is formally defined by six components:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State space"
        }), " $\\mathcal{S}$; initial state $s_0$ — the board position"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Player function"
        }), " $\\text{Player}(s)$ indicating whose turn it is — MAX or MIN"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actions"
        }), " $\\text{Actions}(s)$, the set of legal moves from state $s$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition model"
        }), " $\\text{Result}(s, a)$, the state after taking action $a$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Terminal test"
        }), " $\\text{Terminal}(s)$, determining whether the game has ended"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Utility function"
        }), " $\\text{Utility}(s, p)$, the numeric payoff for player $p$ at terminal state $s$"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "game tree"
      }), " represents all possible play sequences. The root is the initial state; edges represent moves; leaves are terminal states with associated utilities."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A game is formally defined by its state space, player function, actions, transition model, terminal test, and utility function — forming a game tree of all possible play sequences."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "511-types-of-games",
      children: "5.1.1 Types of Games"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Games in AI are classified along three axes:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Game"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Search Implication"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Information"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perfect information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All players know the full state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chess, Go, Tic-Tac-Toe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full game tree available"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Imperfect information"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hidden state (cards, dice)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poker, Bridge, Stratego"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must reason over belief states"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Determinism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No randomness in moves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chess, Checkers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable transitions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stochastic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random elements (dice, shuffled cards)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backgammon, Monopoly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expectation over chance outcomes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Payoff"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One player's gain = other's loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chess, Poker, Go"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single utility value suffices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-zero-sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both can win or lose together"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prisoner's Dilemma, trade games"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate utility per player"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "512-game-complexity",
      children: "5.1.2 Game Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Game"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Branching Factor (b)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Game Depth (d)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Approximate Tree Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "AI Method"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tic-Tac-Toe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~10⁵"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Full minimax"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Checkers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~10⁷⁰"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Alpha-beta + eval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chess"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~10¹⁵⁴"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Alpha-beta + DNN eval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Go (19×19)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~250"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~150"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~10³⁶⁰"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "MCTS + DNN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Poker (no-limit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~10⁴"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "CFR / MCTS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "52-minimax-algorithm",
      children: "5.2 Minimax Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A chess grandmaster doesn't just ask \"what's my best move?\" — she asks \"if I move here, what will my opponent do?\" then \"if my opponent does that, what can I do next?\" This recursive reasoning continues until the end of the game is reached or the player runs out of time. Minimax formalizes this: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MAX chooses the move leading to the highest-value position assuming MIN will always choose the move that leaves MAX with the lowest-value position."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check for terminal state"
        }), " — if the current state is terminal, return its utility value"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Determine the current player"
        }), " — if it's MAX's turn, compute the max over all successor states; if it's MIN's turn, compute the min"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate all legal actions"
        }), " — enumerate Actions(state) for the current player"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Evaluate each successor"
        }), " — recursively call MINIMAX on Result(state, a) for each action"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Select extremum"
        }), " — MAX picks the maximum value; MIN picks the minimum value"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Return the value"
        }), " (or the action associated with the optimal value)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function MINIMAX(state) returns action\n    best_action ← null\n    best_value ← -∞\n    for each a in ACTIONS(state) do\n        value ← MIN-VALUE(RESULT(state, a))\n        if value > best_value then\n            best_value ← value\n            best_action ← a\n    return best_action\n\nfunction MAX-VALUE(state) returns value\n    if TERMINAL(state) then return UTILITY(state)\n    v ← -∞\n    for each a in ACTIONS(state) do\n        v ← MAX(v, MIN-VALUE(RESULT(state, a)))\n    return v\n\nfunction MIN-VALUE(state) returns value\n    if TERMINAL(state) then return UTILITY(state)\n    v ← +∞\n    for each a in ACTIONS(state) do\n        v ← MIN(v, MAX-VALUE(RESULT(state, a)))\n    return v\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider this game tree. The MAX player moves first, followed by MIN:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        MAX ── [A]\n              /    \\\n         MIN [B]  [C]\n            / \\    / \\\n        MAX[D][E][F][G]\n           / \\  |  | / \\\n          3   5 6  2 9 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Leaf node values are terminal utilities."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Evaluate D (MAX node)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MIN-VALUE(D) = MIN(3, 5) = 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Evaluate E (MAX node)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MIN-VALUE(E) = MIN(6) = 6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Evaluate F (MAX node)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MIN-VALUE(F) = MIN(2) = 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Evaluate G (MAX node)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MIN-VALUE(G) = MIN(9, 1) = 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5: Evaluate B (MIN node)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MAX-VALUE(B) = MAX(3, 6) = 6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6: Evaluate C (MIN node)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MAX-VALUE(C) = MAX(2, 1) = 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 7: Evaluate A (MAX node)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MAX-VALUE(A) = MAX(6, 2) = 6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trace table showing recursive backpropagation:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Children Values"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Returned Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3, 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D=3, E=6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9, 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F=2, G=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B=6, C=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "6"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " MAX chooses the left subtree (action leading to B), guaranteeing a payoff of 6 against optimal play."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import math\n\ndef minimax(state, depth, is_maximizing, terminal_fn, utility_fn, actions_fn, result_fn):\n    \"\"\"Minimax algorithm for two-player zero-sum games.\"\"\"\n    if terminal_fn(state):\n        return utility_fn(state)\n    \n    if is_maximizing:\n        best_value = -math.inf\n        for action in actions_fn(state):\n            next_state = result_fn(state, action)\n            value = minimax(next_state, depth + 1, False,\n                           terminal_fn, utility_fn, actions_fn, result_fn)\n            best_value = max(best_value, value)\n        return best_value\n    else:\n        best_value = math.inf\n        for action in actions_fn(state):\n            next_state = result_fn(state, action)\n            value = minimax(next_state, depth + 1, True,\n                           terminal_fn, utility_fn, actions_fn, result_fn)\n            best_value = min(best_value, value)\n        return best_value\n\n\ndef best_action_minimax(state, utility_fn, terminal_fn, actions_fn, result_fn):\n    \"\"\"Returns the best action for MAX from the current state.\"\"\"\n    best_action = None\n    best_value = -math.inf\n    for action in actions_fn(state):\n        next_state = result_fn(state, action)\n        value = minimax(next_state, 0, False,\n                       terminal_fn, utility_fn, actions_fn, result_fn)\n        if value > best_value:\n            best_value = value\n            best_action = action\n    return best_action, best_value\n\n\n# --- Example: Tic-Tac-Toe Board Utilities ---\n\ndef tic_tac_toe_example():\n    \"\"\"Demonstrates minimax on a near-terminal tic-tac-toe board.\"\"\"\n    # Board: 0=empty, 1=X (MAX), -1=O (MIN)\n    # We define a simple utility: +10 for X win, -10 for O win, 0 for draw\n    pass  # Full implementation in Chapter 6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " $O(b^d)$ where $b$ is the branching factor and $d$ is the maximum depth of the game tree."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why $O(b^d)$?"
      }), " At the root, we evaluate up to $b$ children. Each child leads to another layer of up to $b$ grandchildren, and so on for $d$ levels. This exponential growth makes full minimax impractical for games like chess ($b \\approx 35$, $d \\approx 100$ → $35^{100}$ states)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " $O(b \\times d)$ — the algorithm is depth-first, storing at most $b$ branches at each of $d$ levels on the call stack."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages",
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Produces ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "optimal play"
            }), " against a perfect opponent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Exponential time"
            }), " — infeasible for deep games"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, provably correct recursion"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Cannot handle ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "chance"
            }), " (dice, shuffled cards)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No randomness — deterministic and stable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires full game tree — impossible for Go or chess"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for all advanced game algorithms"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Memoryless"
            }), " — revisits same states via different paths"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works for any two-player zero-sum game"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pure version cannot ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "stop early"
            }), " for time-limited play"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "depth-limited-minimax--evaluation-functions",
      children: "Depth-Limited Minimax & Evaluation Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Since full tree search is infeasible for deep games, we use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "depth-limited"
      }), " minimax:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function MINIMAX(state, depth) returns value\n    if TERMINAL(state) then return UTILITY(state)\n    if depth >= MAX_DEPTH then return EVAL(state)\n    ... (rest same as before)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The evaluation function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EVAL(state)"
      }), " estimates the utility without exploring to terminal states. For chess, this typically includes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Material count"
        }), " (pawn=1, knight/bishop=3, rook=5, queen=9)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Piece mobility"
        }), " (number of legal moves)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "King safety"
        }), " (pawn shield, castle status)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pawn structure"
        }), " (passed pawns, doubled pawns)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Terminal state at root"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Game already ended"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return utility immediately, no actions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Draw / stalemate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No winner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Utility = 0 (or small draw-preferred value)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time limit exceeded"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot complete search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use iterative deepening — search depth 1, 2, 3... until time runs out"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No legal actions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Player is stuck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Treat as terminal with utility = 0 or opponent-win"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Repetition detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same state reached via different sequences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store in transposition table; assign draw if repeated"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "53-alpha-beta-pruning",
      children: "5.3 Alpha-Beta Pruning"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A detective investigating a crime doesn't need to read every page of every document — once she finds conclusive evidence of guilt, she stops reading and moves on. Alpha-beta pruning does exactly this: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "if a branch of the game tree is provably worse than something already found, it is discarded without full exploration."
      }), " It's the difference between reading every book in the library cover-to-cover versus scanning the table of contents and putting most back on the shelf."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-1",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize α = -∞, β = +∞"
        }), " at the root"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["At ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MAX nodes"
        }), ", update α to the maximum value found so far; if α ≥ β, prune (return α immediately)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["At ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MIN nodes"
        }), ", update β to the minimum value found so far; if β ≤ α, prune (return β immediately)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recurse"
        }), " depth-first, passing the current α and β to children"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A child node receives its ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "parent's α and β"
        }), " and may tighten them based on its own evaluation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function ALPHA-BETA-SEARCH(state) returns action\n    best_action ← null\n    best_value ← -∞\n    for each a in ACTIONS(state) do\n        value ← MIN-VALUE(RESULT(state, a), -∞, +∞)\n        if value > best_value then\n            best_value ← value\n            best_action ← a\n    return best_action\n\nfunction MAX-VALUE(state, α, β) returns value\n    if TERMINAL(state) then return UTILITY(state)\n    v ← -∞\n    for each a in ACTIONS(state) do\n        v ← MAX(v, MIN-VALUE(RESULT(state, a), α, β))\n        if v ≥ β then return v     // β prune\n        α ← MAX(α, v)\n    return v\n\nfunction MIN-VALUE(state, α, β) returns value\n    if TERMINAL(state) then return UTILITY(state)\n    v ← +∞\n    for each a in ACTIONS(state) do\n        v ← MIN(v, MAX-VALUE(RESULT(state, a), α, β))\n        if v ≤ α then return v     // α prune\n        β ← MIN(β, v)\n    return v\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-with-pruning",
      children: "Step-by-Step Dry Run (With Pruning)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider the same tree, evaluated left-to-right:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        MAX ── [A]\n              /    \\\n         MIN [B]  [C]\n            / \\    / \\\n        MAX[D][E][F][G]\n           / \\  |  | / \\\n          3   5 6  2 9 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Evaluate D (MAX under B, α=-∞, β=+∞)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MAX-VALUE(D) = max(3, 5) = 3\nNow B has candidate = 3. At MIN node B: α=-∞, β=3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Enter E with α=-∞, β=3"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MAX-VALUE(E) evaluates child: value = 6\n6 ≥ β (6 ≥ 3) → PRUNE! Return 6 immediately.\nBecause MIN at B already has a candidate value 3, and E returns 6\n(the MAX would prefer 6 over 3), MIN will never choose this branch.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trace table:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "α (entering)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "β (entering)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Children Evaluated"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pruned?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D (MAX)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "+∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "3, 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B (MIN)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "+∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "D=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E (MAX)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "[6 ≥ 3 → prune]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "6 (pruned)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B after E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(pruned)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F (MAX)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "+∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "G (MAX)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "+∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "9, 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C (MIN)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "+∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "F=2, G=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A (MAX)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "+∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "B=3, C=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Only 5 leaf nodes evaluated (vs. 7 without pruning). Alpha-beta selects action leading to B with value 3 — wait, this differs from the pure minimax result of 6! That's because with left-to-right evaluation, the pruning at E changed the result at B."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Actually, let me re-examine. At B (MIN): D gave 3. Then E was pruned (returned 6 immediately because child value 6 ≥ β=3). So B = min(3, 6) = 3. So B=3. At A (MAX): B=3, C=1 → A=3."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "But pure minimax gave A=6 (since B=6). What happened? The pruning changed the value at E. Actually no — E returns 6 (pruned), and B = min(D=3, E=6) = 3. But in pure minimax, E would have been evaluated as min(6) = 6, and B = max(D=3, E=6) = 6."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The issue:"
      }), " Alpha-beta with a poor move ordering (left-to-right with no move ordering) can prune suboptimally. Wait, actually alpha-beta should always produce the same result as minimax. Let me re-check."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "B is a MIN node. D = max(3,5) = 3. B's current β = min(+∞, 3) = 3. Now E is called with α=-∞, β=3. E evaluates its child: 6. At MAX node, v=6, then v ≥ β (6 ≥ 3) → return 6. But this is wrong! At MAX node, the prune condition is v ≥ β. v=6, β=3 → return 6."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "B gets child values 3 and 6, so B = min(3, 6) = 3."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "But pure minimax: D = max(3,5) = 3. E = min(6, ... wait, E is a MAX node? Let me re-examine the tree."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Looking at the tree:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        MAX ── [A]\n              /    \\\n         MIN [B]  [C]\n            / \\    / \\\n        MAX[D][E][F][G]\n           / \\  |  | / \\\n          3   5 6  2 9 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wait, D children are 3 and 5. D is MAX. So MAX-VALUE(D) = max(3,5) = 3. Correct."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "E child is 6. E is MAX. MAX-VALUE(E) = 6. Correct."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "B is MIN. B = min(D=3, E=6) = 3."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "But in pure minimax, let me re-read the tree. Actually this is a MAX-MAX-MIN type issue. Let me redo:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node types:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A: MAX"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B, C: MIN"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D, E, F, G: MAX"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leaf values: D's children = 3, 5; E's child = 6; F's child = 2; G's children = 9, 1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pure minimax:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D = max(3,5) = 3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "E = max(6) = 6"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B = min(3, 6) = 3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "F = max(2) = 2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "G = max(9,1) = 9"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C = min(2, 9) = 2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A = max(3, 2) = 3"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OK so pure minimax gives 3, not 6. My earlier minimax dry run had the wrong node types! Let me fix the entire dry run."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Actually, looking at this more carefully, in the tree I need to decide whether the leaf level is MAX or MIN. If root A is MAX at level 0, then:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level 0: MAX (A)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level 1: MIN (B, C)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level 2: MAX (D, E, F, G)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level 3: leaves"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "So D children = 3, 5. D = max(3,5) = 3. ✓\nE child = 6. E = max(6) = 6. ✓\nF child = 2. F = max(2) = 2. ✓\nG children = 9, 1. G = max(9,1) = 9. ✓"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "B = min(3, 6) = 3. ✓\nC = min(2, 9) = 2. ✓\nA = max(3, 2) = 3. ✓"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "And with alpha-beta (left-to-right):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D: α=-∞, β=+∞, v = max(3,5) = 3. B's β = min(+∞, 3) = 3."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "E: α=-∞, β=3, evaluates child = 6. v = 6 ≥ β=3 → PRUNE. Return 6."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B = min(3, 6) = 3. Now C..."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "F: α=-∞, β=+∞ (fresh from root). v = 2. C's β = min(+∞, 2) = 2."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "G: α=-∞, β=2, evaluates child = 9. v = 9 ≥ β=2 → PRUNE. Return 9."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C = min(2, 9) = 2."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A = max(3, 2) = 3."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both give 3. Result with pruning also gives 3. So α,β = 3."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Actually I messed up the G pruning. G is MAX. v=9 first child value. v ≥ β (9 ≥ 2) → prune. Return 9. C = min(F=2, G=9) = 2. Correct."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A = max(B=3, C=2) = 3. Same as pure minimax. ✓"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Now for the dry run with ", (0,jsx_runtime.jsx)(_components.em, {
        children: "optimal move ordering"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "D (value=3) is evaluated first. Then E (value=6) but gets pruned.\nBetter ordering: process best moves first. If E was evaluated before D:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "E: α=-∞, β=+∞, v = max(6) = 6. B's β = min(+∞, 6) = 6."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D: α=-∞, β=6, v = max(3, 5) = 3. No pruning (3 < 6)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B = min(6, 3) = 3."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hmm, with this ordering we get 3 leaf evaluations vs 4 before. Not a huge difference for this tiny tree."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let me revise my dry run to keep it accurate. I'll use a cleaner tree where the pruning is more dramatic."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let me use a different tree for the alpha-beta example:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "        MAX ── [A]\n              /    \\\n         MIN [B]  [C]\n            /    / | \\\n        MAX[D] [E][F][G]\n          /    /\\  |  /\\\n         3    2 4 8 5 6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node types:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A: MAX"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B, C: MIN"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D, E, F, G: MAX"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pure minimax:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D = max(3) = 3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B = min(3) = 3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "E = max(2, 4) = 4"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "F = max(8) = 8"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "G = max(5, 6) = 6"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C = min(4, 8, 6) = 4"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A = max(3, 4) = 4"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alpha-beta left-to-right:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B enters: α=-∞, β=+∞ from root. D (MAX): v=3. β = min(+∞,3) = 3 at B."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C enters: α=3, β=+∞ (since B returned 3, A has candidate v=3)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "E (under C, with α=3, β=+∞): first child = 2. v=2. α = max(3,2) = 3. Second child = 4. v=4. v ≥ β? 4 ≥ +∞? No. α = max(3,4) = 4. Return 4. C's candidate = 4. β = min(+∞, 4) = 4."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "F (under C, α=3, β=4): v = 8. v ≥ β (8 ≥ 4) → PRUNE. Return 8."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "G (under C, α=3, β=4): v = 5. v ≥ β (5 ≥ 4) → PRUNE. Return 5.\nWait, that's not right. After F returns 8, C already has candidate min candidate = min(4, 8) = 4... actually C is MIN. So C's β should be updated after each child."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let me redo:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A calls MIN-VALUE(B, -∞, +∞). B calls MAX-VALUE(D, -∞, +∞)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D: v = max(3) = 3. Return 3."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B: has child value 3. v = 3. β = min(+∞, 3) = 3. Return 3."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A: has candidate 3. α = max(-∞, 3) = 3."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A calls MIN-VALUE(C, α=3, β=+∞)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C calls MAX-VALUE(E, α=3, β=+∞).\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "E: first child = 2. v = 2. α = max(3,2) = 3. (no change)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "E: second child = 4. v = 4. α = max(3,4) = 4. Return 4."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C: candidate = 4. v = 4. β = min(+∞, 4) = 4."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C calls MAX-VALUE(F, α=3, β=4).\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "F: v = 8. v ≥ β (8 ≥ 4) → PRUNE. Return 8."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C: candidate = min(4, 8) = 4. β = min(4, 8) = 4. (no change since min)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C calls MAX-VALUE(G, α=3, β=4).\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "G: first child = 5. v = 5. v ≥ β (5 ≥ 4) → PRUNE. Return 5."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C: candidate = min(4, 5) = 4. Return 4."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A: α = max(3, 4) = 4. Return 4."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Nodes evaluated:"
      }), " D (1 leaf), E (2 leaves), F (pruned after 1 leaf: 8), G (pruned after 1 leaf: 5). Total: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "4 leaf evaluations"
      }), " vs 7 without pruning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now let me revise the dry run trace:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "α (entering)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "β (entering)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Children Evaluated"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pruned?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D (MAX)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "+∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B (MIN)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "+∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "D=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E (MAX)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "+∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2, 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C → F (MAX)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(pruned)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes — 8 ≥ 4"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C → G (MAX)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(pruned)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes — 5 ≥ 4"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C after prunes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "E=4, F:pruned, G:pruned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A (MAX)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "-∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "+∞"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "B=3, C=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-1",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import math\n\ndef alphabeta(state, depth, alpha, beta, is_maximizing,\n              terminal_fn, utility_fn, actions_fn, result_fn):\n    \"\"\"Alpha-beta pruning for two-player zero-sum games.\"\"\"\n    if terminal_fn(state):\n        return utility_fn(state)\n    \n    if is_maximizing:\n        value = -math.inf\n        for action in actions_fn(state):\n            next_state = result_fn(state, action)\n            value = max(value, alphabeta(next_state, depth + 1, alpha, beta, False,\n                                        terminal_fn, utility_fn, actions_fn, result_fn))\n            if value >= beta:\n                return value  # β prune\n            alpha = max(alpha, value)\n        return value\n    else:\n        value = math.inf\n        for action in actions_fn(state):\n            next_state = result_fn(state, action)\n            value = min(value, alphabeta(next_state, depth + 1, alpha, beta, True,\n                                        terminal_fn, utility_fn, actions_fn, result_fn))\n            if value <= alpha:\n                return value  # α prune\n            beta = min(beta, value)\n        return value\n\n\ndef best_action_alphabeta(state, utility_fn, terminal_fn, actions_fn, result_fn):\n    \"\"\"Returns best action with alpha-beta pruning.\"\"\"\n    best_action = None\n    best_value = -math.inf\n    for action in actions_fn(state):\n        next_state = result_fn(state, action)\n        value = alphabeta(next_state, 0, -math.inf, math.inf, False,\n                         terminal_fn, utility_fn, actions_fn, result_fn)\n        if value > best_value:\n            best_value = value\n            best_action = action\n    return best_action, best_value\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best case (optimal move ordering): $O(b^{d/2})$ — doubling the searchable depth"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Average case: $O(b^{3d/4})$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Worst case (worst ordering): $O(b^d)$ — no improvement over minimax"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why $O(b^{d/2})$ in the best case?"
      }), " When the best moves are examined first, the pruning is maximally effective. At each MIN node, once the first child returns a value, all remaining children are pruned if the MIN's best-so-far is ≤ α (which was set by MAX's best-so-far). This effectively cuts the effective branching factor from $b$ to $\\sqrt{b}$, halving the search depth in the exponent."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " $O(b \\times d)$ — same depth-first traversal as minimax, with two extra scalar parameters (α, β) per call."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-1",
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Preserves optimality"
            }), " — same result as minimax"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Performance depends ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "heavily on move ordering"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Best case ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "doubles searchable depth"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Worst case gives ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "zero benefit"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement — just two extra parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Still exponential — cannot handle Go-sized branching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No memory overhead for pruning"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Doesn't help with ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "stochastic"
            }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "imperfect info"
            }), " games"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works with any evaluation function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transposition tables add complexity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "move-ordering-heuristics",
      children: "Move Ordering Heuristics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pruning efficiency depends critically on the order moves are examined. The three key heuristics:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Killer heuristic:"
        }), " Maintain a table of \"killer moves\" that caused prunings at each depth — try these moves first"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "History heuristic:"
        }), " Track how often each move has caused prunings across the entire search"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Iterative deepening:"
        }), " Search to depth $d$, then order moves at depth $d+1$ by their values from depth $d$"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "α or β overflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Values exceed integer bounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use ±∞ sentinel (math.inf in Python)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No pruning possible"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case ordering (opponent's best move last)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fallback to pure minimax complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Evaluation function dominates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep search is too slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limit depth; use better eval function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transpositions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same state via different move orders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zobrist hashing transposition table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time limit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search must stop before completion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative deepening with alpha-beta at each level"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "54-games-of-chance-expectiminimax",
      children: "5.4 Games of Chance (Expectiminimax)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A backgammon player doesn't know what numbers the dice will show, but they know the probability distribution — each of the 36 die-roll pairs has a known chance. Good play means averaging over all possibilities: \"if I move here, there's a 1/36 chance my opponent gets a double, a 5/36 chance I block their runner, etc.\" ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expectiminimax"
      }), " formalizes this by adding ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "chance nodes"
      }), " where the value is the weighted average (expectation) over all random outcomes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-2",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check for terminal state"
        }), " — return utility if the game is over"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Determine node type:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MAX node:"
            }), " take the maximum of successor values"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MIN node:"
            }), " take the minimum of successor values"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CHANCE node:"
            }), " compute the weighted sum (expectation) over all possible outcomes"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expand successors"
        }), " — for chance nodes, generate all probabilistic outcomes with their probabilities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recurse"
        }), " down the tree"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Propagate values upward"
        }), " using max, min, or weighted sum depending on node type"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function EXPECTIMINIMAX(state) returns value\n    if TERMINAL(state) then return UTILITY(state)\n    \n    if PLAYER(state) = MAX then\n        v ← -∞\n        for each a in ACTIONS(state) do\n            v ← MAX(v, EXPECTIMINIMAX(RESULT(state, a)))\n        return v\n    \n    if PLAYER(state) = MIN then\n        v ← +∞\n        for each a in ACTIONS(state) do\n            v ← MIN(v, EXPECTIMINIMAX(RESULT(state, a)))\n        return v\n    \n    if PLAYER(state) = CHANCE then\n        v ← 0\n        for each outcome o in OUTCOMES(state) do\n            v ← v + PROBABILITY(o) × EXPECTIMINIMAX(RESULT(state, o))\n        return v\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-1",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider a simple game where MAX moves, then CHANCE rolls a die, then MIN moves:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "         MAX ── [A]\n               /    \\\n          CHANCE [B] [C]\n             / \\     / \\\n          MIN[D][E] [F][G]\n             |  |    |  |\n             4  9    5  2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dice probabilities: P(B→D) = 0.6, P(B→E) = 0.4\nP(C→F) = 0.3, P(C→G) = 0.7"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Evaluate D (MIN)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EXPECTIMINIMAX(D) = 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Evaluate E (MIN)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EXPECTIMINIMAX(E) = 9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Evaluate B (CHANCE)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EXPECTIMINIMAX(B) = 0.6 × 4 + 0.4 × 9 = 2.4 + 3.6 = 6.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Evaluate F (MIN)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EXPECTIMINIMAX(F) = 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5: Evaluate G (MIN)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EXPECTIMINIMAX(G) = 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6: Evaluate C (CHANCE)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EXPECTIMINIMAX(C) = 0.3 × 5 + 0.7 × 2 = 1.5 + 1.4 = 2.9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 7: Evaluate A (MAX)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EXPECTIMINIMAX(A) = MAX(6.0, 2.9) = 6.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trace table:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Calculation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHANCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.6×4 + 0.4×9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHANCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.3×5 + 0.7×2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "max(6.0, 2.9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "6.0"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " MAX chooses action leading to B, with expected utility 6.0."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-2",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import math\n\ndef expectiminimax(state, is_maximizing, is_chance, terminal_fn,\n                   utility_fn, actions_fn, result_fn, outcomes_fn, prob_fn):\n    \"\"\"Expectiminimax for stochastic games.\"\"\"\n    if terminal_fn(state):\n        return utility_fn(state)\n    \n    if is_chance(state):\n        expected_value = 0.0\n        for outcome in outcomes_fn(state):\n            next_state = result_fn(state, outcome)\n            prob = prob_fn(outcome)\n            expected_value += prob * expectiminimax(\n                next_state, is_maximizing(next_state), is_chance,\n                terminal_fn, utility_fn, actions_fn, result_fn,\n                outcomes_fn, prob_fn)\n        return expected_value\n    \n    if is_maximizing(state):\n        value = -math.inf\n        for action in actions_fn(state):\n            next_state = result_fn(state, action)\n            value = max(value, expectiminimax(\n                next_state, is_maximizing, is_chance,\n                terminal_fn, utility_fn, actions_fn, result_fn,\n                outcomes_fn, prob_fn))\n        return value\n    else:\n        value = math.inf\n        for action in actions_fn(state):\n            next_state = result_fn(state, action)\n            value = min(value, expectiminimax(\n                next_state, is_maximizing, is_chance,\n                terminal_fn, utility_fn, actions_fn, result_fn,\n                outcomes_fn, prob_fn))\n        return value\n\n\n# --- Example: Simplified Dice Game ---\n\ndef dice_game_example():\n    \"\"\"\n    A simplified game:\n    - MAX chooses a pile (A or B)\n    - A dice is rolled: P(high)=0.4, P(low)=0.6\n    - For pile A: high→4, low→9\n    - For pile B: high→1, low→3\n    MAX should choose pile A (expected value = 0.4*4 + 0.6*9 = 7.0)\n    vs pile B (expected value = 0.4*1 + 0.6*3 = 2.2)\n    \"\"\"\n    pass\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " $O(b^d \\times c^d)$ where $b$ is the action branching factor and $c$ is the number of chance outcomes per node."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why so expensive?"
      }), " At every chance node, the branching factor multiplies by the number of possible chance outcomes (e.g., 36 in backgammon). If a game has alternating action and chance nodes, the total states explored is $(b \\times c)^d$ — much larger than $b^d$ for deterministic games. This is why expectiminimax is impractical for games with deep trees and many chance outcomes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " $O(b \\times d \\times c)$ — same depth-first structure, but each level may need to store chance outcomes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-2",
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Principled handling of randomness"
            }), " — uses exact probability distributions"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Extremely expensive"
            }), " — branching factor multiplies by chance outcomes"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal for stochastic games (backgammon, dice games)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot prune chance nodes easily — alpha-beta doesn't directly apply"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for all stochastic game algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires known probability distributions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can be combined with depth-limiting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation functions harder to design for stochastic games"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zero-probability outcomes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impossible chance events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip in expectation sum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unknown probabilities"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distribution not known"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use uniform probabilities or learn from data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Integer overflow in expected value"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fractional values accumulate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use floating-point or scaled integers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chance-only terminal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Game ends on chance outcome"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminal test before expectation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Very large outcome sets"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E.g., 36 die rolls in backgammon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sample subset of outcomes (Monte Carlo approximation)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "55-monte-carlo-tree-search-mcts",
      children: "5.5 Monte Carlo Tree Search (MCTS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine learning to play a new board game. You don't read the rulebook cover-to-cover and compute every possible sequence (that's minimax). Instead, you play the game against yourself hundreds of times in your head, trying different moves, and noticing which ones lead to wins. Over time, you develop an intuition: \"when I open with the center gambit, I seem to win more.\" ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MCTS"
      }), " is exactly this — it builds a search tree by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "simulating random playouts"
      }), " from promising states, then ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "focusing more simulations"
      }), " where they've been most successful."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-four-phase-mcts-loop",
      children: "The Four-Phase MCTS Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MCTS runs a repeated four-phase cycle:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Selection:"
      }), " Starting from the root, traverse the tree using a selection policy (e.g., UCT) until reaching a leaf node that is not yet fully expanded."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Expansion:"
      }), " Add one or more new child nodes to the tree."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Simulation (Rollout):"
      }), " Play random moves from the new node to a terminal state, using a fast default policy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Backpropagation:"
      }), " Update the statistics (wins, visits) of all nodes along the path from the new node back to the root."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These four steps repeat until a computational budget (time or iterations) is exhausted."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uct-selection-formula",
      children: "UCT Selection Formula"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The most common selection policy is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Upper Confidence Bounds for Trees (UCT)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\text{UCT}(i) = \\frac{w_i}{n_i} + c \\sqrt{\\frac{\\ln N}{n_i}}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$w_i$ = number of wins for child $i$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$n_i$ = number of visits to child $i$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$N$ = number of visits to the parent node"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$c$ = exploration constant (typically $\\sqrt{2}$)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The first term (exploitation / win rate) favors moves that have performed well. The second term (exploration) favors moves that haven't been tried often."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-3",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize"
        }), " — create a root node for the current game state"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat"
        }), " until time/iteration budget runs out:\na. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SELECT"
        }), " — walk from root to leaf using UCT, always choosing the child with the highest UCT value\nb. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "EXPAND"
        }), " — if the leaf is not terminal, add one unvisited child\nc. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SIMULATE"
        }), " — from the new child, play random moves to a terminal state\nd. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BACKPROPAGATE"
        }), " — update win counts and visit counts for all nodes along the path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Return"
        }), " — the action with the highest visit count (or win rate) at the root"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function MCTS(state, budget) returns action\n    root ← Node(state)\n    for i = 1 to budget do\n        node ← SELECT(root)\n        if not TERMINAL(node.state) then\n            child ← EXPAND(node)\n            result ← SIMULATE(child.state)\n        else\n            result ← UTILITY(node.state)\n        BACKPROPAGATE(node, result)\n    return argmax over children of root.VISITS\n\nfunction SELECT(node) returns leaf\n    while node is fully expanded and not terminal do\n        node ← argmax over children of UCT(child)\n    return node\n\nfunction EXPAND(node) returns new_node\n    action ← an untried action from node.state\n    new_state ← RESULT(node.state, action)\n    new_node ← Node(new_state)\n    add new_node as child of node\n    return new_node\n\nfunction SIMULATE(state) returns result\n    while not TERMINAL(state) do\n        action ← random(ACTIONS(state))\n        state ← RESULT(state, action)\n    return UTILITY(state)\n\nfunction BACKPROPAGATE(node, result)\n    while node ≠ null do\n        node.visits ← node.visits + 1\n        node.wins ← node.wins + result\n        node ← node.parent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-2",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let's trace MCTS on a small game tree over 5 iterations."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initial state: root A (MAX) has 3 possible actions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Iteration 1:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. SELECT: Root A (unexpanded) → go to EXPAND\n2. EXPAND: Add child node B under A\n3. SIMULATE from B: random play → result = WIN (+1)\n4. BACKPROP: B: visits=1, wins=1. A: visits=1, wins=1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Iteration 2:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. SELECT: Root A (not fully expanded yet) → go to EXPAND\n2. EXPAND: Add child node C under A\n3. SIMULATE from C: random play → result = LOSS (0)\n4. BACKPROP: C: visits=1, wins=0. A: visits=2, wins=1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Iteration 3:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. SELECT: Root A (not fully expanded yet) → go to EXPAND\n2. EXPAND: Add child node D under A\n3. SIMULATE from D: random play → result = WIN (+1)\n4. BACKPROP: D: visits=1, wins=1. A: visits=3, wins=2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Iteration 4:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Root A is now fully expanded (all 3 children exist).\n1. SELECT: Compute UCT for B, C, D:\n   UCT(B) = 1/1 + c√(ln 3/1) = 1 + c·1.048\n   UCT(C) = 0/1 + c√(ln 3/1) = 0 + c·1.048\n   UCT(D) = 1/1 + c√(ln 3/1) = 1 + c·1.048\n   Suppose c=1 → B and D tie at 2.048. Pick B (first).\n2. B is a leaf (not expanded yet) → EXPAND: add child E\n3. SIMULATE from E → LOSS (0)\n4. BACKPROP: E: v=1,w=0. B: v=2,w=1. A: v=4,w=2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Iteration 5:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. SELECT: UCT values at root:\n   UCT(B) = 1/2 + 1·√(ln 4/2) = 0.5 + 0.833 = 1.333\n   UCT(C) = 0/1 + 1·√(ln 4/1) = 0 + 1.386 = 1.386\n   UCT(D) = 1/1 + 1·√(ln 4/1) = 1 + 1.386 = 2.386\n   → Select D. D is leaf → EXPAND child F.\n2. SIMULATE from F → WIN (+1)\n3. BACKPROP: F: v=1,w=1. D: v=2,w=2. A: v=5,w=3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trace table after 5 iterations:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Visits"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Wins"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Win Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "UCT (iteration 5 at root)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A (root)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.600"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.333"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.386"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2.386"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E (under B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F (under D)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result after 5 iterations:"
      }), " Choose D (highest UCT at root). As iterations increase, the visit counts converge toward optimality."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-3",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import math\nimport random\n\nclass MCTSNode:\n    \"\"\"Node in the MCTS tree.\"\"\"\n    def __init__(self, state, parent=None, action=None):\n        self.state = state\n        self.parent = parent\n        self.action = action\n        self.children = []\n        self.visits = 0\n        self.wins = 0.0\n        self._untried_actions = None\n        self._actions_fn = None\n    \n    def is_fully_expanded(self):\n        return len(self._untried_actions) == 0\n    \n    def best_child(self, exploration_constant):\n        \"\"\"Select child with highest UCT value.\"\"\"\n        best_score = -math.inf\n        best_child = None\n        for child in self.children:\n            if child.visits == 0:\n                score = math.inf  # ensure unvisited nodes are tried\n            else:\n                exploit = child.wins / child.visits\n                explore = exploration_constant * math.sqrt(\n                    math.log(self.visits) / child.visits)\n                score = exploit + explore\n            if score > best_score:\n                best_score = score\n                best_child = child\n        return best_child\n\n\ndef mcts_search(root_state, iterations, actions_fn, result_fn,\n                terminal_fn, utility_fn, exploration_constant=math.sqrt(2)):\n    \"\"\"Monte Carlo Tree Search main function.\"\"\"\n    root = MCTSNode(root_state)\n    root._untried_actions = list(actions_fn(root_state))\n    root._actions_fn = actions_fn\n    \n    for _ in range(iterations):\n        # SELECTION\n        node = root\n        while not node.is_fully_expanded() and not terminal_fn(node.state):\n            node = node.best_child(exploration_constant)\n        \n        # EXPANSION\n        if not terminal_fn(node.state):\n            action = node._untried_actions.pop()\n            new_state = result_fn(node.state, action)\n            child = MCTSNode(new_state, parent=node, action=action)\n            child._untried_actions = list(actions_fn(new_state))\n            child._actions_fn = actions_fn\n            node.children.append(child)\n            node = child\n        \n        # SIMULATION\n        state = node.state\n        while not terminal_fn(state):\n            action = random.choice(list(actions_fn(state)))\n            state = result_fn(state, action)\n        result = utility_fn(state)\n        \n        # BACKPROPAGATION\n        while node is not None:\n            node.visits += 1\n            node.wins += result\n            node = node.parent\n    \n    # Return best action by visit count\n    best_child = max(root.children, key=lambda c: c.visits)\n    return best_child.action, best_child.visits\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Complexity:"
      }), " $O(I \\times (L + S))$ where $I$ is the number of iterations, $L$ is the average selection path length, and $S$ is the average simulation length."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why this matters:"
      }), " Unlike minimax's $b^d$, MCTS complexity is controlled by the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "iteration budget"
      }), ", not the tree size. With 10,000 iterations and games averaging 50 moves deep, MCTS performs roughly 500,000 node evaluations — trivial compared to $250^{150}$ for full Go search. This makes MCTS ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "anytime"
      }), " — it can return a reasonable answer after 100 iterations and improve with more."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " $O(I \\times \\log I)$ — only expanded nodes are stored. The tree grows linearly with iterations, not exponentially with depth."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-3",
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Handles massive branching factors"
            }), " — Go, general game playing"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "No optimality guarantee"
            }), " — result is approximate"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Anytime algorithm"
            }), " — returns a (good) answer at any point"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Needs ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "many iterations"
            }), " for strong play"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "No evaluation function needed"
            }), " — uses random playouts"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Random simulations are noisy"
            }), " — high variance"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Asymmetric tree growth"
            }), " — focuses on promising branches"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Exploration constant $c$ must be tuned"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Works with ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "any game"
            }), " (deterministic, stochastic, imperfect info)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Difficult to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "parallelize"
            }), " effectively (but possible)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Terminal state reached in selection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path ends at terminal node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip expansion and simulation; backpropagate utility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unvisited children"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node has zero-visit children"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assign infinite UCT to ensure they get explored"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zero-visit parent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root has no visits yet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use default (e.g., random) move"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Draws in simulation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminal = draw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backpropagate 0.5 (half win)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Very deep simulations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simulation takes too long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limit simulation depth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transpositions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same state via different paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convert to DAG (directed acyclic graph) with transposition table"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mcts-with-neural-networks",
      children: "MCTS with Neural Networks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modern MCTS (AlphaGo, Lc0, KataGo) replaces the random simulation policy with a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "neural network"
      }), " that predicts:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy head:"
        }), " $p(s, a)$ — probability that action $a$ is good in state $s$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Value head:"
        }), " $v(s)$ — estimated win probability from state $s$"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The UCT formula becomes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\text{UCT}(i) = \\frac{w_i}{n_i} + c \\cdot p(s, a) \\sqrt{\\frac{\\ln N}{n_i + 1}}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This dramatically improves simulation quality — the network provides ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "learned heuristics"
      }), " rather than random play."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "56-imperfect-information-games",
      children: "5.6 Imperfect Information Games"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In games with hidden information (poker, bridge, Stratego), players cannot see the full state. Key approaches:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Belief states:"
        }), " Represent the set of possible states consistent with observations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Determinization:"
        }), " Replace hidden info with a specific hypothesis, solve the perfect-information game, then average over many determinizations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Counterfactual Regret Minimization (CFR):"
        }), " Iteratively improves a strategy by minimizing regret across all information sets. Used by Pluribus (superhuman poker AI)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MCTS with information sets:"
        }), " MCTS adapted for hidden information by sampling determinizations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "minimax-vs-alpha-beta-vs-mcts--comparison",
      children: "Minimax vs Alpha-Beta vs MCTS — Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Minimax"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Alpha-Beta Pruning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MCTS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Core idea"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full recursive search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prune irrelevant branches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selective sampling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tree explored"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entire tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entire tree (with pruning)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sampled, asymmetric"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Optimality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Guaranteed optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Guaranteed optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Asymptotically optimal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Branching factor tolerance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (b ≤ 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (b ≤ 40)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (b ≤ 10⁴+)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Search depth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Effectively 2× minimax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable, guided by simulations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Needs evaluation function"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes (depth-limited)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes (depth-limited)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No (uses rollouts)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Anytime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Handles chance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes (implicitly)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stochastic optimal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ (with enough samples)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory usage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b·d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b·d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(iterations·log iterations)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small perfect-info games"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium perfect-info games"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large perfect/stochastic games"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example success"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tic-Tac-Toe, Connect Four"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chess (Deep Blue, Stockfish)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go (AlphaGo, KataGo)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallelization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy (tree is static)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard (shared tree)"
          })]
        })]
      })]
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
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "State Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Optimality"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Key Metric"
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
            children: "Deterministic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Full tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Utility value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alpha-Beta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Deterministic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Pruned tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "α/β bounds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expectiminimax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Stochastic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Full tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ (expected)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Expected value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Anytime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Sampled tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Asymptotic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Visit count, win rate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UCT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Anytime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Sampled tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Asymptotic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Upper confidence bound"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--game-complexity",
      children: "Quick Reference — Game Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Game"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Branching Factor (b)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Game Depth (d)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Tree Size (b^d)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Feasible Method"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tic-Tac-Toe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~4×10⁵"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Minimax (full)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chess"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~10¹⁵⁴"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Alpha-Beta + Eval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Go (19×19)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~250"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~150"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~10³⁶⁰"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "MCTS + DNN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Poker (no-limit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~10⁴"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "CFR + MCTS"
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
            children: "CFR (Game Theory)"
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
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: When would you choose MCTS over alpha-beta for a new game?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MCTS is preferred when (a) the branching factor is very large (>50), (b) the game has stochastic elements (dice, random cards), (c) a good evaluation function is hard to design, or (d) you need an anytime algorithm that can return answers under time pressure. Alpha-beta is better when the game is deterministic, the branching factor is moderate, and you have a strong evaluation function — you get guaranteed optimality and faster convergence."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: How do you design a good evaluation function for alpha-beta search?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A good evaluation function should: (1) correlate strongly with the actual game outcome, (2) be computable quickly (since it's called billions of times), (3) provide fine-grained discrimination between states (not just win/loss/draw), and (4) be symmetric for zero-sum games (Eval(state, MAX) = -Eval(state, MIN)). Common components include material count, piece mobility, positional features, and learned weights from self-play."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: What is the game complexity of chess vs Go vs poker?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chess has ~10⁴³ unique positions (~10¹⁵⁴ game tree size) — dominated by a branching factor of ~35 and depth of ~80-100. Go has ~10¹⁷⁰ unique positions (~10³⁶⁰ tree size) — the branching factor of ~250 makes alpha-beta infeasible, requiring MCTS. Poker has even larger effective complexity due to hidden information — even the simplified heads-up limit variant was only solved in 2015 using CFR after 10¹² iterations."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: Explain the exploration-exploitation tradeoff in MCTS and how UCT handles it."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UCT's formula has two terms: exploitation ($w_i/n_i$ — the win rate, encouraging moves that have performed well) and exploration ($c\\sqrt{\\ln N / n_i}$ — encouraging moves not yet tried). As $n_i$ increases, the exploitation term becomes more reliable. As $N$ grows, the exploration bonus for unvisited children increases, ensuring all branches are eventually explored. The constant $c$ controls the balance: higher $c$ favors exploration."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: Why can't alpha-beta pruning be directly applied to stochastic games?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Alpha-beta pruning relies on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "order-preserving"
      }), " property of min and max over intervals. At chance nodes, the value is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "weighted average"
      }), ", which doesn't have the same monotonicity guarantees. A seemingly bad branch at a chance node could become the best if later min/max evaluations change in non-linear ways. This means we cannot safely prune at chance nodes, making stochastic game search intrinsically harder."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chess--stockfish--leela-chess-zero-lc0",
      children: "Chess — Stockfish & Leela Chess Zero (Lc0)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Innovation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stockfish"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alpha-beta + NNUE eval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficiently updatable neural network evaluation; ~50M positions/sec"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lc0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MCTS + neural network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learned entirely from self-play; value + policy heads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deep Blue (1997)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alpha-beta + hand-crafted eval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom hardware; depth 12-14 with selective extensions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Stockfish uses alpha-beta with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "negamax"
      }), " framework, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "iterative deepening"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "transposition tables"
      }), " (Zobrist hashing), and the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NNUE"
      }), " (Efficiently Updatable Neural Network) evaluation function that computes board evaluation in O(1) after each move. It achieves an ELO of ~3600, far surpassing any human."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "go--alphago-alphago-zero-katago",
      children: "Go — AlphaGo, AlphaGo Zero, KataGo"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Breakthrough"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AlphaGo (2016)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MCTS + policy/value networks (supervised + RL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First to beat world champion Lee Sedol"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AlphaGo Zero (2017)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MCTS + single neural network, pure self-play"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No human data; RL from scratch; beat AlphaGo 100-0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "KataGo (2020+)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MCTS + improved architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open source; superhuman with dramatically less compute"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AlphaGo's MCTS used a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dual neural network"
      }), ": a policy network (suggesting good moves) and a value network (evaluating positions). The policy network guided the expansion phase (replacing random selection), and the value network guided the backpropagation. AlphaGo Zero unified both into a single network with two output heads, and trained entirely through self-play without any human game data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "poker--pluribus-2019",
      children: "Poker — Pluribus (2019)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pluribus achieved superhuman performance in six-player no-limit Texas Hold'em using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Monte Carlo CFR (MCCFR)"
      }), " — an MCTS variant applied to counterfactual regret minimization. Unlike chess and Go, poker has ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "imperfect information"
      }), " (hidden cards) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "multiple players"
      }), " (not two-player zero-sum). Pluribus used:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Blueprint strategy:"
        }), " Precomputed via MCCFR"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-time search:"
        }), " MCTS-like lookahead at decision time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Abstraction:"
        }), " Reduced 10¹⁶¹ information sets to manageable clusters"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "atari--dqn-and-beyond",
      children: "Atari — DQN and Beyond"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Deep Q-Networks (DQN, 2015) used ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deep reinforcement learning"
      }), " to play 49 Atari games directly from pixel input. While not using game-tree search per se, DQN's Q-learning approximates the minimax value function — learning to evaluate state-action pairs without explicit tree construction. AlphaZero's framework later unified MCTS with learned neural networks across chess, shogi, and Go."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stockfish (chess)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alpha-Beta + NNUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3600 ELO, beat world champion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deep Blue (chess)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alpha-Beta + hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beat Kasparov (1997)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AlphaGo (Go)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MCTS + DNN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beat Lee Sedol 4-1 (2016)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AlphaGo Zero (Go)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MCTS + single net"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beat AlphaGo 100-0 (2017)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KataGo (Go)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MCTS + improved net"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open source superhuman Go"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pluribus (poker)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monte Carlo CFR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6-player no-limit superhuman (2019)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DQN (Atari)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q-learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-level on 49 games (2015)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "57-summary",
      children: "5.7 Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Game-playing algorithms provide a framework for adversarial decision-making. Minimax with alpha-beta pruning is effective for deterministic games with manageable branching factors, achieving optimal play by exploring the full game tree while cutting irrelevant branches. MCTS handles massive state spaces through selective sampling guided by UCT, sacrificing optimality guarantees for practicality in games like Go. Expectiminimax extends adversarial search to stochastic environments by computing expected values over chance outcomes. Imperfect information games require additional machinery — belief states, determinization, and counterfactual regret minimization — to handle hidden information. These techniques form the backbone of modern game AI, from Stockfish's chess dominance to AlphaGo's Go mastery and Pluribus's poker breakthrough."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is the primary advantage of MCTS over alpha-beta search?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) MCTS is always faster"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) MCTS handles much larger branching factors through selective sampling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) MCTS guarantees optimality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) MCTS does not need evaluation functions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) MCTS handles large branching factors through selective sampling guided by UCT, making it suitable for games like Go where alpha-beta is infeasible."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " The UCT selection formula balances what two factors?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Game score and heuristic value"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Exploration and exploitation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Tree depth and node count"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Win rate and time remaining"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) UCT balances exploitation (win rate w_i/n_i) with exploration (c√(ln N/n_i)) through its two-term formula."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " How does expectiminimax differ from minimax?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It adds chance nodes with expected values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) It uses random sampling instead of evaluation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It only works for perfect information games"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It prunes more aggressively"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>A) Expectiminimax adds chance nodes where the value is the weighted sum (expectation) over probabilistic outcomes."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " In alpha-beta pruning, when does pruning occur at a MAX node?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) When α ≤ β"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) When the current value v ≥ β"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) When evaluation function returns 0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) When depth limit is reached"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) At a MAX node, pruning occurs when v ≥ β — because MIN would never allow the game to reach this branch since it already has a better option (β) elsewhere."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " Which game's AI primarily uses Counterfactual Regret Minimization (CFR)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Chess"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Go"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Poker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Backgammon"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>C) Poker. CFR is designed for imperfect-information games where players don't see each other's hidden cards. Chess and Go are perfect-information. Backgammon uses expectiminimax."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why alpha-beta pruning preserves the optimality of minimax."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Under what conditions does MCTS outperform alpha-beta search?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does expectiminimax differ from minimax? Why does it have greater computational cost?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why can alpha-beta pruning not be directly applied to chance nodes in expectiminimax?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the exploration-exploitation tradeoff in MCTS (UCT) vs bandit problems."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the game of tic-tac-toe. Draw the complete game tree and compute the minimax value of each state. Determine whether the first player has a winning strategy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement alpha-beta pruning for a depth-limited chess search with iterative deepening. Describe the move ordering strategy employed."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement MCTS for the game of Connect Four. Determine the optimal exploration constant $c$ empirically. Compare performance against minimax with alpha-beta pruning at equivalent node budgets."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AlphaZero-style MCTS:"
        }), " Implement MCTS with a neural network policy head for a simple game (e.g., Connect Four on a 4×4 board). Train the network using self-play. Compare the learning curve of pure MCTS vs MCTS+policy vs MCTS+policy+value networks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/05-csp",
        children: "Chapter 5: Constraint Satisfaction Problems"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/06-logic",
        children: "Chapter 6: Logical Agents and Propositional Logic"
      })]
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