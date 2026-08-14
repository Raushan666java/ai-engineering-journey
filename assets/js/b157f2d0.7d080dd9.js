"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[19288],{

/***/ 84965
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_artificial_intelligence_08_planning_md_b15_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-artificial-intelligence-08-planning-md-b15.json
const site_docs_courses_artificial_intelligence_08_planning_md_b15_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/artificial-intelligence/08-planning","title":"Chapter 8: Planning","description":"Previous Uncertainty and Probabilistic Reasoning | Next Reasoning Under Uncertainty","source":"@site/docs/courses/artificial-intelligence/08-planning.md","sourceDirName":"courses/artificial-intelligence","slug":"/artificial-intelligence/08-planning","permalink":"/ai-engineering-journey/artificial-intelligence/08-planning","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"id":"08-planning","slug":"/artificial-intelligence/08-planning","title":"Chapter 8: Planning","sidebar_label":"Chapter 8: Planning","sidebar_position":14},"sidebar":"course-artificial-intelligence","previous":{"title":"Chapter 7: Logical Reasoning and Inference","permalink":"/ai-engineering-journey/artificial-intelligence/07-logical-reasoning"},"next":{"title":"Chapter 8: Uncertainty and Probabilistic Reasoning","permalink":"/ai-engineering-journey/artificial-intelligence/08-uncertainty"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/artificial-intelligence/08-planning.md


const frontMatter = {
	id: '08-planning',
	slug: '/artificial-intelligence/08-planning',
	title: 'Chapter 8: Planning',
	sidebar_label: 'Chapter 8: Planning',
	sidebar_position: 14
};
const contentTitle = 'Chapter 8: Planning';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why AI Planning Matters",
  "id": "why-ai-planning-matters",
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
  "value": "8.1 Classical Planning",
  "id": "81-classical-planning",
  "level": 2
}, {
  "value": "8.1.1 STRIPS Representation",
  "id": "811-strips-representation",
  "level": 3
}, {
  "value": "8.1.2 ADL (Action Description Language)",
  "id": "812-adl-action-description-language",
  "level": 3
}, {
  "value": "8.2 Forward and Backward Search",
  "id": "82-forward-and-backward-search",
  "level": 2
}, {
  "value": "8.2.1 Forward (Progression) Search",
  "id": "821-forward-progression-search",
  "level": 3
}, {
  "value": "8.2.2 Backward (Regression) Search",
  "id": "822-backward-regression-search",
  "level": 3
}, {
  "value": "8.3 Partial-Order Planning (POP)",
  "id": "83-partial-order-planning-pop",
  "level": 2
}, {
  "value": "8.4 GraphPlan",
  "id": "84-graphplan",
  "level": 2
}, {
  "value": "8.5 SATPlan",
  "id": "85-satplan",
  "level": 2
}, {
  "value": "8.6 Hierarchical Task Network (HTN) Planning",
  "id": "86-hierarchical-task-network-htn-planning",
  "level": 2
}, {
  "value": "8.7 Practical Planners",
  "id": "87-practical-planners",
  "level": 2
}, {
  "value": "Planning Approaches Comparison",
  "id": "planning-approaches-comparison",
  "level": 2
}, {
  "value": "STRIPS vs ADL vs PDDL",
  "id": "strips-vs-adl-vs-pddl",
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
  "value": "Quick Reference — STRIPS Action Model",
  "id": "quick-reference--strips-action-model",
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
  "value": "8.8 Summary",
  "id": "88-summary",
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
        id: "chapter-8-planning",
        children: "Chapter 8: Planning"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/08-uncertainty",
        children: "Chapter 8: Uncertainty and Probabilistic Reasoning"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/09-uncertainty",
        children: "Chapter 9: Reasoning Under Uncertainty"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the conclusion of this chapter, the student will be able to: (1) formulate planning problems in STRIPS and ADL; (2) implement forward and backward state-space planning; (3) construct partial-order plans; (4) apply GraphPlan and SATPlan algorithms; (5) understand hierarchical task network planning."
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
        href: "../../assets/images/lessons/artificial-intelligence/08-planning/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/artificial-intelligence/08-planning/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/artificial-intelligence/08-planning/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/artificial-intelligence/08-planning/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/artificial-intelligence/08-planning/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/artificial-intelligence/08-planning/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-ai-planning-matters",
      children: "Why AI Planning Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy — Cooking a Meal:"
      }), " Suppose you want to cook pasta with sauce. You cannot serve the sauce before boiling the pasta (pasta needs to be ready first), you cannot boil pasta without water, and you cannot heat water without a pot on the stove. Each step has ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "preconditions"
      }), " (water must be in pot before boiling) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "effects"
      }), " (boiling water enables pasta cooking). Planning is exactly this: given an initial pantry (initial state) and a desired meal (goal), find the correct ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sequence of actions"
      }), " that respects all prerequisites and produces the final dish."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every autonomous system — from warehouse robots packing boxes to Mars rovers navigating terrain — relies on planning algorithms to decide ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "what to do next"
      }), ". Without planning, AI would only react; with planning, AI ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "thinks ahead"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Classical Planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STRIPS, ADL, Blocks World"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precondition, add/delete list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward/Backward Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Progression, regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignore-delete-lists heuristic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partial-Order Planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Causal links, open preconditions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threat, promotion, demotion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GraphPlan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Planning graph, mutex relations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level-off, plan extraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SATPlan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAT encoding, CNF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action at time i, frame axioms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTN Planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task decomposition methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primitive vs compound tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Practical Planners"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FF, FastDownward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relaxed plan, causal graph"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Classical Planning] --> B[STRIPS / ADL]\n    A --> C[Forward Search]\n    A --> D[Backward Search]\n    C --> E[Ignore-Delete Heuristic]\n    A --> F[Partial-Order Planning]\n    A --> G[GraphPlan]\n    G --> H[Mutex Detection]\n    A --> I[SATPlan]\n    I --> J[SAT Solver]\n    A --> K[HTN Planning]\n    K --> L[Task Decomposition]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "81-classical-planning",
      children: "8.1 Classical Planning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/artificial-intelligence/ch08-planning.png",
        alt: "Planning"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning"
      }), " is the process of selecting a sequence of actions to achieve a goal."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy — Trip Planning:"
      }), " You are at home (initial state) and want to be at the airport (goal). You have actions: \"drive to airport\" (precondition: have car keys; effect: at airport, car not at home), \"find keys\" (precondition: keys exist; effect: have keys). Planning finds the correct order: find keys first, then drive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Classical planning assumes a deterministic, fully observable, static environment with finite actions and states."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Classical planning selects a sequence of actions to reach a goal — the STRIPS representation decomposes each action into preconditions, add effects, and delete effects."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "811-strips-representation",
      children: "8.1.1 STRIPS Representation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy — Vending Machine:"
      }), " A vending machine action \"buy chips\" has preconditions (inserted $2, tray empty), add effects (chips in tray), and delete effects (-$2, tray empty). STRIPS captures exactly this cause-effect logic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "STRIPS (Stanford Research Institute Problem Solver, 1971) represents actions through three components:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Precondition:"
        }), " A conjunction of positive literals that must be true before the action."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add list:"
        }), " Positive literals added by the action."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete list:"
        }), " Positive literals removed by the action."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Formally, an action $a$ is applicable in state $s$ if $\\text{Precond}(a) \\subseteq s$. The resulting state is:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\text{Result}(s, a) = (s - \\text{Delete}(a)) \\cup \\text{Add}(a)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example (Blocks World action):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Action(Stack(x, y)\n    Precond: Clear(y) ∧ Holding(x)\n    Effect: ¬Clear(y) ∧ ¬Holding(x) ∧ On(x, y))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps — STRIPS Plan Construction:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Represent the initial state as a set of ground literals."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define each action with preconditions, add list, and delete list."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the goal state as a set of ground literals."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check which actions are applicable in the current state (preconditions ⊆ state)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply an action: state ← (state − Delete(a)) ∪ Add(a)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat until the goal is a subset of the current state."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function STRIPS-PLAN(initial, goal, actions) returns plan\n    state ← initial\n    plan ← []\n    while goal ⊈ state do\n        relevant ← {a ∈ actions | Add(a) ∩ goal ≠ ∅}\n        if relevant = ∅ then return failure\n        select a ∈ relevant such that Precond(a) ⊆ state\n        if no such a exists then return failure\n        plan ← plan + [a]\n        state ← (state − Delete(a)) ∪ Add(a)\n    return plan\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Blocks World:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initial state: On(A,Table), On(B,Table), Clear(A), Clear(B), ArmEmpty\nGoal: On(A,B)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Precondition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Add"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Delete"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pickup(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear(x), On(x,Table), ArmEmpty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holding(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On(x,Table), Clear(x), ArmEmpty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack(x,y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear(y), Holding(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On(x,y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear(y), Holding(x)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Putdown(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holding(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On(x,Table), Clear(x), ArmEmpty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holding(x)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unstack(x,y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On(x,y), Clear(x), ArmEmpty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holding(x), Clear(y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On(x,y), Clear(x), ArmEmpty"
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Preconditions Met?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Add Effects"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Delete Effects"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "New State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On(A,T), On(B,T), Clear(A), Clear(B), ArmEmpty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S₀"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S₀"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pickup(A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear(A)✓ On(A,T)✓ ArmEmpty✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holding(A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On(A,T), Clear(A), ArmEmpty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holding(A), On(B,T), Clear(B)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holding(A), On(B,T), Clear(B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack(A,B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear(B)✓ Holding(A)✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On(A,B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear(B), Holding(A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On(A,B), On(B,T)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On(A,B), On(B,T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Goal reached"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
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
        children: "class Action:\n    def __init__(self, name, precond, add_effects, del_effects):\n        self.name = name\n        self.precond = set(precond)\n        self.add = set(add_effects)\n        self.delete = set(del_effects)\n\n    def applicable(self, state):\n        return self.precond.issubset(state)\n\n    def apply(self, state):\n        return (state - self.delete) | self.add\n\ndef strips_plan(initial, goal, actions):\n    state = set(initial)\n    plan = []\n    while not goal.issubset(state):\n        relevant = [a for a in actions if a.add & goal]\n        if not relevant:\n            return None\n        action = next((a for a in relevant if a.applicable(state)), None)\n        if action is None:\n            return None\n        plan.append(action.name)\n        state = action.apply(state)\n    return plan\n\nactions = [\n    Action(\"Pickup(A)\", {\"Clear(A)\", \"On(A,Table)\", \"ArmEmpty\"},\n           {\"Holding(A)\"}, {\"On(A,Table)\", \"Clear(A)\", \"ArmEmpty\"}),\n    Action(\"Stack(A,B)\", {\"Clear(B)\", \"Holding(A)\"},\n           {\"On(A,B)\"}, {\"Clear(B)\", \"Holding(A)\"}),\n]\ninitial = {\"On(A,Table)\", \"On(B,Table)\", \"Clear(A)\", \"Clear(B)\", \"ArmEmpty\"}\ngoal = {\"On(A,B)\"}\nprint(strips_plan(initial, goal, actions))  # ['Pickup(A)', 'Stack(A,B)']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(b^d) in the worst case where b is the branching factor (number of applicable actions) and d is the plan depth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(bd) for storing the plan and state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why exponential?"
        }), " The planner must explore sequences of actions — the number of possible sequences grows exponentially with depth."]
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
            children: "Simple, intuitive representation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot represent conditional effects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only positive literals in preconditions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Closed-world assumption reduces complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No support for types or quantified conditions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative — separates domain from problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-world problems require extensions"
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
          children: "Impossible goal:"
        }), " If goal requires On(A,B) but Stack(A,B) needs Holding(A) and no Pickup action exists, planning fails."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Irrelevant actions:"
        }), " Actions that neither add nor delete any goal proposition — the planner ignores them."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cyclic plans:"
        }), " STRIPS without cycle detection may loop indefinitely (Pickup→Putdown→Pickup→...). Always check if state repeats."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "812-adl-action-description-language",
      children: "8.1.2 ADL (Action Description Language)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy — Conditional Recipe:"
      }), " A recipe step \"if using salted butter, skip adding salt\" is a conditional effect. ADL captures these \"if-then\" conditions that STRIPS cannot."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ADL extends STRIPS with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conditional effects: effects that apply only if certain conditions hold."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quantified preconditions and effects (∀, ∃)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Types for objects and variables."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Negative literals in preconditions."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example ADL action:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Action(Move(robot, from, to)\n    Precond: At(robot, from) ∧ Clear(from) ∨ IsBase(from)\n    Effect: At(robot, to) ∧ ¬At(robot, from)\n            ∧ (Clear(from) if ¬IsBase(from)))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "82-forward-and-backward-search",
      children: "8.2 Forward and Backward Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "821-forward-progression-search",
      children: "8.2.1 Forward (Progression) Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy — Maze Solver:"
      }), " Starting at the entrance, try every path by walking forward one step at a time. If you hit a dead end, backtrack and try another corridor. This is forward search: start from the initial state and explore outward."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Forward search applies actions from the initial state, generating successors until a goal state is reached."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize frontier with the initial state."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If frontier is empty, return failure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pop a state from the frontier."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the state satisfies the goal, return the plan."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate all applicable actions in this state."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply each action to produce successor states."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add successors to the frontier."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Go to step 2."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function FORWARD-SEARCH(problem) returns plan or failure\n    node ← Node(state = problem.initial, parent = nil, action = nil)\n    frontier ← {node}\n    explored ← ∅\n    loop do\n        if frontier = ∅ then return failure\n        node ← REMOVE-FRONT(frontier)\n        if problem.GOAL-TEST(node.state) then return EXTRACT-PLAN(node)\n        explored ← explored ∪ {node.state}\n        for each action in problem.ACTIONS(node.state) do\n            child ← Node(state = RESULT(node.state, action),\n                         parent = node, action = action)\n            if child.state ∉ explored ∪ frontier then\n                frontier ← frontier ∪ {child}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Blocks World Forward Search:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initial: On(A,T), On(B,T), Clear(A), Clear(B), ArmEmpty\nGoal: On(A,B)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explored"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frontier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chosen"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Applicable Actions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Successors Added"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S₀"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S₀"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pickup(A), Pickup(B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S₁(Holding(A)), S₂(Holding(B))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{S₀}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{S₁, S₂}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S₁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack(A,B), Putdown(A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S₃(On(A,B))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{S₀, S₁}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{S₂, S₃}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S₃"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Goal satisfied"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plan: [Pickup(A), Stack(A,B)]"
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
        children: "from collections import deque\n\ndef forward_search(initial, goal, actions):\n    frontier = deque([(set(initial), [])])\n    explored = []\n    while frontier:\n        state, plan = frontier.popleft()\n        if goal.issubset(state):\n            return plan\n        explored.append(state)\n        for a in actions:\n            if a.applicable(state):\n                new_state = a.apply(state)\n                if new_state not in explored:\n                    frontier.append((new_state, plan + [a.name]))\n    return None\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(b^d) where b = branching factor (applicable actions), d = plan depth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(b^d) for the frontier."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why so large?"
        }), " Each state can have many applicable actions. Without heuristics, forward search explores exponentially many paths."]
      }), "\n"]
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
            children: "Sound and complete with systematic search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Huge branching factor in rich domains"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many irrelevant actions explored"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Good heuristics (relaxed plan) available"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State representation grows with problem"
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
          children: "Dead ends:"
        }), " A state from which no action leads to the goal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State repetition:"
        }), " Without explored set, forward search loops infinitely."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Symmetries:"
        }), " Two blocks on table — Pickup(A) vs Pickup(B) explores symmetric branches."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "822-backward-regression-search",
      children: "8.2.2 Backward (Regression) Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy — Reverse Maze:"
      }), " Instead of starting at the entrance, you stand at the exit and ask \"which corridor could have gotten me here?\" You work backward, narrowing possibilities, until you reach the entrance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Backward search starts from the goal and applies actions in reverse."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize the regression set with the goal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find an action whose add effects overlap with the regression set and does not delete any goal proposition."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute new regression set: (regression − Add(a)) ∪ Precond(a)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat until the regression set is a subset of the initial state."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reverse the action sequence to produce the forward plan."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function BACKWARD-SEARCH(problem) returns plan or failure\n    goal-set ← problem.GOAL\n    plan ← []\n    loop do\n        if goal-set ⊆ problem.INITIAL then return REVERSE(plan)\n        select action a such that a.ADD ∩ goal-set ≠ ∅\n                         and a.DELETE ∩ goal-set = ∅\n        if no such a then return failure\n        plan ← [a] + plan\n        goal-set ← (goal-set − a.ADD) ∪ a.PRECOND\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Backward Search:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initial: On(A,T), On(B,T), Clear(A), Clear(B), ArmEmpty\nGoal: On(A,B)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Regression Set"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action Chosen"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "New Regression Set"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{On(A,B)}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack(A,B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack adds On(A,B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{Clear(B), Holding(A)}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{Clear(B), Holding(A)}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pickup(A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adds Holding(A); doesn't delete Clear(B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{Clear(A), On(A,T), ArmEmpty, Clear(B)}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{Clear(A), On(A,T), ArmEmpty, Clear(B)}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⊆ Initial?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Success — plan reversed: [Pickup(A), Stack(A,B)]"
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
        children: "def backward_search(initial, goal, actions):\n    regress = set(goal)\n    plan = []\n    while not regress.issubset(initial):\n        relevant = [a for a in actions\n                    if a.add & regress and not a.delete & regress]\n        if not relevant:\n            return None\n        a = relevant[0]\n        plan.insert(0, a.name)\n        regress = (regress - a.add) | a.precond\n    return plan\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(b^d) in worst case, but b is typically smaller because only relevant actions are considered."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(bd)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why lower branching factor?"
        }), " Forward search considers ALL applicable actions; backward search only considers actions that ADD a needed proposition."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Smaller branching factor than forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires computing regression (complex for ADL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Goal-directed — only relevant actions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot easily use state-based heuristics"
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
          children: "Irrelevant goals:"
        }), " If goal contains a proposition no action can add, the planner fails immediately."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action interference:"
        }), " An action adds p but deletes q where q is also needed — planner must find alternatives."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "83-partial-order-planning-pop",
      children: "8.3 Partial-Order Planning (POP)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy — Wedding Planning:"
      }), " The florist and baker do not need to coordinate. The cake must be ready before the reception, and flowers must be delivered before the ceremony — but flowers and cake preparation are independent. POP captures this flexible ordering."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "State-space planners produce totally ordered action sequences. POP introduces flexibility by representing plans as partially ordered sets of actions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "partial-order plan"
      }), " is a tuple ⟨A, O, L, G⟩ where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A: set of actions (including Start and Finish)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "O: ordering constraints (A_i ≺ A_j)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L: causal links (A_i → A_j meaning A_i achieves p for A_j)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "G: open preconditions (preconditions not yet achieved)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create Start (effects = initial state) and Finish (preconditions = goal) actions."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While there is an open precondition p on some action B:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Choose an action A (existing or new) that achieves p."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add causal link A ⟶ B and ordering A ≺ B."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If A is new, add its preconditions as open."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Check all existing causal links for threats from A or B."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Resolve each threat by promotion (B ≺ C) or demotion (C ≺ A)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the plan."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function POP(initial, goal) returns plan\n    plan ← MAKE-MINIMAL-PLAN(initial, goal)\n    loop do\n        if no open preconditions in plan then return plan\n        select an open precondition p on action A_need\n        choose an action A_add (existing or new) that achieves p\n        add causal link A_add → A_need and ordering A_add ≺ A_need\n        resolve any threats to causal links\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Simple POP (Get to Airport):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initial: At(Home), Have(Keys)\nGoal: At(Airport)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Open Preconds"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action Chosen"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Causal Link"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Threat?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At(Airport) on Finish"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drive(Home,Airport)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drive → Finish [At(Airport)]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Have(Keys) on Drive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start → Drive [Have(Keys)]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At(Home) on Drive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start → Drive [At(Home)]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (plan complete)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "threat"
      }), " occurs when action A_k could undo a causal link A_i → A_j. Resolved by promotion (A_j ≺ A_k) or demotion (A_k ≺ A_i)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CausalLink:\n    def __init__(self, producer, consumer, proposition):\n        self.producer = producer\n        self.consumer = consumer\n        self.proposition = proposition\n\ndef pop_plan(initial, goal, actions):\n    start = type(\"Action\", (), {\"name\": \"Start\", \"precond\": set(),\n                                \"add\": set(initial), \"delete\": set()})()\n    finish = type(\"Action\", (), {\"name\": \"Finish\", \"precond\": set(goal),\n                                 \"add\": set(), \"delete\": set()})()\n    plan_actions = [start, finish]\n    causal_links = []\n    open_conds = [(finish, p) for p in goal]\n\n    while open_conds:\n        act_needing, prop = open_conds.pop(0)\n        chosen = None\n        for a in plan_actions:\n            if hasattr(a, \"add\") and prop in a.add:\n                chosen = a\n                break\n        if chosen is None:\n            for a in actions:\n                if prop in a.add:\n                    chosen = type(\"Action\", (), {\n                        \"name\": a.name, \"precond\": set(a.precond),\n                        \"add\": set(a.add), \"delete\": set(a.delete)})()\n                    plan_actions.append(chosen)\n                    for p in chosen.precond:\n                        open_conds.append((chosen, p))\n                    break\n        if chosen is None:\n            return None\n        causal_links.append(CausalLink(chosen, act_needing, prop))\n    return [a.name for a in plan_actions if a.name not in (\"Start\", \"Finish\")]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " Exponential in open preconditions — each choice may require backtracking."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(A²) for ordering constraints and causal links."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why exponential?"
        }), " Threat resolution cascades: fixing one threat creates constraints that may conflict with other links."]
      }), "\n"]
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
            children: "Produces flexible plans (least commitment)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threat resolution is complex and NP-hard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Allows concurrent action execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot use distance-to-goal heuristics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Separates \"what\" from \"when\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plan extraction requires backtracking"
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
          children: "Unresolvable threats:"
        }), " Every resolution choice leads to a cycle."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cyclic orderings:"
        }), " A ≺ B and B ≺ A — illegal. POP must check for cycles."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Redundant actions:"
        }), " Two actions achieving the same proposition — one may be irrelevant."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "84-graphplan",
      children: "8.4 GraphPlan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy — Subway Map:"
      }), " A subway map shows all possible routes between stations (propositions) via train lines (actions). You can see at a glance which stations connect. The planning graph encodes all possible action sequences up to a given horizon."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GraphPlan (Blum and Furst, 1997) constructs a compact planning graph that encodes all possible action sequences up to a given length."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create proposition layer S₀ from the initial state."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each level k:\na. Add all actions whose preconditions are in S_k and are not pairwise mutex.\nb. Add no-op actions for each proposition.\nc. Create S_{k+1} from all add effects of actions at level k.\nd. Compute mutual exclusion (mutex) relations.\ne. Check if all goal propositions appear in S_{k+1} without mutex."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If goals present without mutex, attempt plan extraction via backward search."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If extraction fails, expand one more level."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If graph levels off (no new propositions), return failure."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mutex Rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two actions at same level are mutex if: inconsistent effects, interference, or competing needs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two propositions at same level are mutex if all ways to achieve them are pairwise mutex."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function GRAPHPLAN(problem) returns plan or failure\n    graph ← INITIAL-PLANNING-GRAPH(problem)\n    for k = 0 to ∞ do\n        if goal propositions present in S_k with no mutex then\n            plan ← EXTRACT-SOLUTION(graph, k)\n            if plan ≠ failure then return plan\n        graph ← EXPAND-GRAPH(graph, k+1)\n        if graph has leveled off then return failure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — GraphPlan for Blocks World:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initial: On(A,T), On(B,T), Clear(A), Clear(B), ArmEmpty\nGoal: On(A,B)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Propositions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actions Added"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mutex"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Goal?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S₀"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On(A,T), On(B,T), Clear(A), Clear(B), ArmEmpty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A₀"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pickup(A), Pickup(B), no-ops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pickup(A) ⟂ Pickup(B) (competing for ArmEmpty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S₁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S₀ ∪ {Holding(A), Holding(B)}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holding(A) ⟂ Clear(A); Holding(A) ⟂ ArmEmpty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A₁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack(A,B), Stack(B,A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack(A,B) ⟂ Stack(B,A) (inconsistent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S₂"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S₁ ∪ {On(A,B), On(B,A)}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On(A,B) ⟂ On(B,A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES — extract"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Plan extraction: Stack(A,B) needs Clear(B),Holding(A) ← Pickup(A) needs Clear(A),On(A,T),ArmEmpty (all in S₀). Plan: [Pickup(A), Stack(A,B)]."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def graphplan(initial, goal, actions):\n    propositions = set(initial)\n    layers = [propositions]\n    plan_graph = []\n\n    level = 0\n    while True:\n        applicable = [a for a in actions if a.precond.issubset(layers[level])]\n        plan_graph.append(applicable)\n        next_props = set(layers[level])\n        for a in applicable:\n            next_props |= a.add\n        layers.append(next_props)\n        if goal.issubset(layers[-1]):\n            extracted = []\n            remaining = set(goal)\n            for lvl in range(len(plan_graph) - 1, -1, -1):\n                for a in plan_graph[lvl]:\n                    if a.add & remaining:\n                        extracted.append(a.name)\n                        remaining = (remaining - a.add) | a.precond\n            return extracted[::-1]\n        if layers[-1] == layers[-2] and len(plan_graph[-1]) == len(plan_graph[-2]):\n            return None\n        level += 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Plan existence:"
        }), " Polynomial in the size of the planning graph (O(n²) for mutex)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Plan extraction:"
        }), " Exponential in worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why polynomial existence?"
        }), " The graph has at most O(n²) propositions per level, bounded by number of propositions."]
      }), "\n"]
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
            children: "Polynomial-time plan existence checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plan extraction still exponential"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mutex pruning dramatically reduces search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory-intensive (stores full graph)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles parallelism naturally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot handle continuous time or resources"
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
          children: "Level-off without goal:"
        }), " Graph stabilizes but goal never appears — unsolvable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All propositions mutex at goal level:"
        }), " Extraction fails, need more levels."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "85-satplan",
      children: "8.5 SATPlan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy — Logic Puzzle:"
      }), " \"Can I reach the goal in 5 steps?\" encoded as a giant Boolean puzzle: At time 0 I am at home; at time 5 I must be at the airport; at each time exactly one action fires; if I drive at time 2, I must hold keys at time 2. A SAT solver finds a satisfying assignment or proves none exists."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SATPlan reduces planning to propositional satisfiability. The plan of length k is encoded as a SAT formula."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Encoding Variables:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "At(p, i): proposition p holds at time i."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Action(a, i): action a executes at time i."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initial state:"
        }), " At(p, 0) for all initial facts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Goal state:"
        }), " At(g, k) for each goal g."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action precondition:"
        }), " Action(a, i) ⇒ ∧ Precond(a, i)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action effects:"
        }), " Action(a, i) ⇒ ∧ Add(a, i+1) ∧ ∧ ¬Delete(a, i+1)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frame axioms:"
        }), " Propositions persist unless an action changes them."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Exactly one action per time step (optional)."
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set plan length k = 0."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encode the planning problem of length k as a CNF formula φ_k."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Invoke a SAT solver on φ_k."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If SAT solver returns satisfying assignment, extract the plan."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If unsatisfiable, increment k and repeat."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return failure if k exceeds bound."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function SATPLAN(problem, max_length) returns plan or failure\n    for k = 0 to max_length do\n        formula ← ENCODE-AS-CNF(problem, k)\n        assignment ← SAT-SOLVE(formula)\n        if assignment ≠ failure then\n            return EXTRACT-PLAN(assignment, k)\n    return failure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — SATPlan Encoding (k=2):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Domain: package P at A, goal: P at B. Actions: Load(P,A), Move(A,B), Unload(P,B)."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Clause Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Clause"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At(P,A), AtTruck(A)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Goal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At(P,B)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precondition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action(Load,0) ⇒ At(P,A)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precondition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action(Move,1) ⇒ AtTruck(A)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precondition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action(Unload,1) ⇒ In(P) ∧ AtTruck(B)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Effect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action(Load,0) ⇒ In(P,1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Effect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action(Load,0) ⇒ ¬At(P,A,1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0→1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "¬Action(Load,0) ⇒ (At(P,A,0) ⇔ At(P,A,1))"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Satisfying assignment: Action(Load,0)=True, Action(Move,1)=True, Action(Unload,2)=True\nPlan extracted: [Load, Move, Unload]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def encode_sat(initial, goal, actions, horizon, prop_idx, act_idx):\n    clauses = []\n    for p in initial:\n        clauses.append([prop_idx(p, 0)])\n    for g in goal:\n        clauses.append([prop_idx(g, horizon)])\n    for a in actions:\n        for t in range(horizon):\n            for p in a.precond:\n                clauses.append([-act_idx(a.name, t), prop_idx(p, t)])\n            for p in a.add:\n                clauses.append([-act_idx(a.name, t), prop_idx(p, t + 1)])\n            for p in a.delete:\n                clauses.append([-act_idx(a.name, t), -prop_idx(p, t + 1)])\n    for t in range(horizon):\n        clauses.append([act_idx(a.name, t) for a in actions])\n    return clauses\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(2^n) in worst case (SAT is NP-complete), but modern solvers (MiniSat, Glucose) scale well for practical instances."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(k × (|P| + |A|)) for the CNF formula."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why NP-complete?"
        }), " Planning with fixed horizon generalizes graph reachability with constraints."]
      }), "\n"]
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
            children: "Leverages highly optimized SAT solvers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must fix plan length k in advance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles complex constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Produces huge CNF formulas for large domains"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Effective for bounded plan existence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No guidance on choosing k"
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
          children: "Unsolvable for given k:"
        }), " SAT solver returns UNSAT. Increment k and retry."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Very large CNF:"
        }), " A domain with 100 propositions and k=50 produces tens of thousands of clauses."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple satisfying assignments:"
        }), " Different assignments represent different valid plans."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "86-hierarchical-task-network-htn-planning",
      children: "8.6 Hierarchical Task Network (HTN) Planning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy — Company Org Chart:"
      }), " A CEO says \"launch product.\" This task decomposes into \"develop,\" \"market,\" \"sell.\" \"Develop\" decomposes into \"design,\" \"code,\" \"test.\" Each leaf maps to a STRIPS action."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HTN planning decomposes high-level tasks into primitive actions via ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "task decomposition methods"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with a set of high-level tasks (the initial task network)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select a non-primitive task."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose a method that decomposes that task into subtasks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replace the task with its subtasks in the plan."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle interactions (ordering constraints, variable bindings)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat until all tasks are primitive (executable actions)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the ordered sequence of primitive actions."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function HTN-PLAN(tasks, methods, actions) returns plan\n    if tasks = ∅ then return []\n    t ← FIRST(tasks)\n    if t is primitive then\n        if ∃ action a that accomplishes t then\n            return [a] + HTN-PLAN(REST(tasks), methods, actions)\n        else return failure\n    else\n        choose method m ∈ methods that decomposes t\n        subtasks ← APPLY(m, t)\n        return HTN-PLAN(subtasks + REST(tasks), methods, actions)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def htn_plan(tasks, methods, actions):\n    if not tasks:\n        return []\n    task = tasks[0]\n    rest = tasks[1:]\n    if task in actions:\n        return [task] + htn_plan(rest, methods, actions)\n    for name, pre, sub in methods:\n        if name == task:\n            return htn_plan(sub + rest, methods, actions)\n    return None\n\nmethods = [\n    (\"Navigate\", [], [\"LocatePosition\", \"PlanRoute\", \"FollowRoute\"]),\n    (\"PrepareMeal\", [], [\"CookMain\", \"CookSide\"]),\n]\nactions = [\"LocatePosition\", \"PlanRoute\", \"FollowRoute\", \"CookMain\", \"CookSide\"]\nprint(htn_plan([\"Navigate\", \"PrepareMeal\"], methods, actions))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " Domain-dependent — good methods give near-linear planning; bad methods cause exponential backtracking."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(d×b) where d = decomposition depth, b = method branching."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why domain-dependent?"
        }), " HTN's power comes from encoded domain knowledge in methods."]
      }), "\n"]
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
            children: "Powerful for structured real-world domains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires domain experts to write methods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Natural hierarchical decomposition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not complete for arbitrary goals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scales to complex problems (logistics, games)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Methods must cover all possible tasks"
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
          children: "No applicable method:"
        }), " A high-level task with no matching method causes failure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cyclic decomposition:"
        }), " Task A → B → A — infinite loop. Detect via task stack depth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interaction between subtasks:"
        }), " Two subtasks may conflict (both need the same resource)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "87-practical-planners",
      children: "8.7 Practical Planners"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FF (Fast Forward):"
      }), " Employs forward search with the relaxed plan heuristic (number of actions in the ignoring-delete-lists plan). Uses enforced hill climbing: if no local improvement exists, falls back to breadth-first search."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FastDownward:"
      }), " Introduced the causal graph heuristic and multi-heuristic search. Uses a causal graph to decompose the planning problem into subproblems."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "💡 Pro Tip:"
        }), " The ignore-delete-lists heuristic is simple but extremely effective for forward search planning. It solves the relaxed problem (no delete effects) which is always solvable and provides admissible estimates for the original problem."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "⚠️ Warning:"
        }), " Partial-order planning introduces threats that require promotion/demotion resolution. Always check all causal links when adding a new action — overlooking a threat produces an invalid plan."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "planning-approaches-comparison",
      children: "Planning Approaches Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Search Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Heuristic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Completeness"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward State-Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "States"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Relaxed plan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Small-medium domains with good heuristics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backward State-Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Goal regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "None needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Domains with low goal-relevant action ratio"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partial-Order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Causal links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Least-commitment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Domains needing flexible/concurrent plans"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GraphPlan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Planning graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Mutex pruning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium domains with clear action dependencies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SATPlan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SAT formula"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SAT solver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Bounded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Domains with complex constraints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Task hierarchy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Domain methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Domain-dep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Large structured real-world domains"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "strips-vs-adl-vs-pddl",
      children: "STRIPS vs ADL vs PDDL"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "STRIPS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "ADL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "PDDL"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Preconditions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Positive literals only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Any literal (negated allowed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Any literal + quantifiers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Effects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Conjunction of literals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Conditional effects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Conditional + quantified"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "First-class types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Hierarchical types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀, ∃ in preconditions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "∀, ∃ in pre/effects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Equality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Implicit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Explicit (=)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Explicit (=, !=)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Domain axioms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Derived predicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Durative actions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Numeric resources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Numeric fluents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Expressiveness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adoption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Academic, classic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Intermediate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "IPC standard"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PDDL is the standard encoding for the International Planning Competition (IPC). PDDL 2.1 added durative actions; PDDL 3.0 added trajectory constraints; PDDL+ supports continuous processes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: How is planning different from search?"
      }), "\nPlanning is search PLUS representation. Search works over predefined state spaces; planning constructs action sequences from a compact action description. Planning must infer which actions are relevant; search assumes the state graph is given."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: How do you validate a plan?"
      }), "\nPlan validation checks: (1) Action preconditions satisfied at execution time. (2) Final state satisfies the goal. (3) No resource constraints violated. (4) Temporal constraints respected. The VAL tool is the standard validator for PDDL."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: What are resource constraints?"
      }), "\nReal-world actions consume resources (fuel, money, time). Classical planning ignores resources; numeric planning (PDDL 2.1+) tracks resource levels as numeric fluents. Constraints ensure a plan does not exceed available supply."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: Can planning handle incomplete information?"
      }), "\nClassical planning assumes complete knowledge. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Conformant planning"
      }), " works for all possible states. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Contingent planning"
      }), " uses sensing actions. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Probabilistic planning"
      }), " (MDPs) maximizes expected reward under uncertainty."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: What is the plan validity problem?"
      }), "\nGiven a plan and a domain, does executing the plan from the initial state achieve the goal? Decidable for classical planning (polynomial trace-check) but PSPACE-hard for numeric planning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How Planning Is Used"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Robotics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROS MoveIt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OMPL planners sequence arm motions; each joint movement is an action with kinematic preconditions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Logistics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon Robotics (warehouse)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STRIPS-like actions (Pick, Place, Move) scheduled by centralized planners optimizing throughput"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spacecraft"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NASA Deep Space Network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated antenna allocation and observation scheduling (RAX, EUROPA planners)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spacecraft"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mars Rovers (Curiosity)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAPGEN planner generates daily activity plans from high-level science goals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Game AI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F.E.A.R. (GOAP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Goal-Oriented Action Planning: enemies use STRIPS-style planning to decide attack/flank/retreat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Game AI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Halo, Horizon (HTN)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTN planners decompose AI strategies (Patrol → Attack → Flank)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Manufacturing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assembly line scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SATPlan optimizes robot arm task ordering minimizing makespan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Healthcare"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Surgery scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial-order planning handles precedence constraints (sterilize before operate)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Planning Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Search Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Plan Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Sound?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Complete?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Total order"
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
            children: "High branching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backward Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Goal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Total order"
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
            children: "Lower branching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partial-Order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Plan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Partial order"
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
            children: "Exponential"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GraphPlan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Total order"
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
            children: "Poly existence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SATPlan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SAT formula"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Total order"
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
            children: "NP-complete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Task network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Hierarchy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Domain-dep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Domain-dep"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--strips-action-model",
      children: "Quick Reference — STRIPS Action Model"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Action name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique identifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack(x, y)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precondition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must hold before action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear(y) ∧ Holding(x)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Becomes true after action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On(x, y)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Becomes false after action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear(y), Holding(x)"
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
            children: "ML"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "CV"
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
            children: "STRIPS Planning"
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
            children: "Partial-Order"
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
            children: "GraphPlan"
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
            children: "SATPlan"
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
            children: "HTN Planning"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What does a causal link A→B represent in partial-order planning?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) A happens before B"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) A achieves a precondition p for B"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) B depends on A's delete list"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) A and B are mutually exclusive"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) A causal link A→B means action A achieves proposition p that is a precondition for action B."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " Why might GraphPlan be preferred over forward state-space search?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It always finds shorter plans"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) It constructs a compact graph encoding all possible plans, enabling polynomial-time plan existence checking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It does not need action definitions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It handles continuous state spaces"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) GraphPlan's planning graph compactly represents all possible action sequences up to a given length with polynomial-time construction."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " What is the key advantage of HTN planning over classical STRIPS planning?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) HTN is always faster"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) HTN handles complex real-world tasks through hierarchical decomposition matching human problem-solving"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) HTN does not require action preconditions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) HTN guarantees optimal plans"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) HTN decomposes high-level tasks into subtasks via methods, mirroring how humans break complex problems into manageable steps."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " What makes SATPlan different from other planning approaches?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It does not need action definitions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) It encodes the planning problem as a Boolean formula and uses a SAT solver"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It always finds optimal plans"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It works only in continuous domains"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) SATPlan transforms the planning problem of fixed horizon k into a propositional SAT formula and leverages a SAT solver to find a satisfying assignment."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " In the ignore-delete-lists heuristic, why is the relaxed problem always solvable?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Because all actions become no-ops"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Because without delete effects, actions never undo progress, so any sequence moves monotonically toward the goal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Because the heuristic ignores preconditions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Because delete lists are irrelevant for planning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Removing delete effects ensures actions only add propositions — they never undo progress — guaranteeing monotonic growth toward any reachable goal."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "88-summary",
      children: "8.8 Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Classical planning generates action sequences to achieve goals. STRIPS and ADL provide action representations with preconditions and effects. Forward/backward search explores state or goal spaces. Partial-order planning produces flexibly ordered plans with causal links. GraphPlan encodes all possible plans in a compact graph; SATPlan reduces planning to Boolean satisfiability. HTN planning handles complex real-world tasks through hierarchical decomposition. Each approach balances expressiveness, computational complexity, and practical applicability."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare forward and backward search in planning. Why might backward search have a smaller branching factor?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the purpose of causal links in partial-order planning. What constitutes a threat?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the mutual exclusion relations in GraphPlan. Why are they necessary?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does SATPlan encode action preconditions and effects as logical constraints?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What advantages does HTN planning offer over classical STRIPS planning for real-world applications?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Formulate the Blocks World problem in STRIPS: initial state (A on Table, B on Table, C on A), goal state (B on C, A on B). Show the planning graph up to level 3."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encode a simple logistics problem (package delivery between cities using trucks) as a SATPlan instance with 3 time steps."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design an HTN method hierarchy for a robot preparing a three-course meal."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement forward search with the ignore-delete-lists heuristic for the Blocks World domain. Compare performance with backward search on problems with 3–8 blocks."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Planning is the bridge between AI reasoning and action. Master it, and your agents stop reacting — they start thinking ahead."
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