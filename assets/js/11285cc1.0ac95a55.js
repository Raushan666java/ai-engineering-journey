"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[89207],{

/***/ 36691
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_artificial_intelligence_04_csp_md_112_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-artificial-intelligence-04-csp-md-112.json
const site_docs_courses_artificial_intelligence_04_csp_md_112_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/artificial-intelligence/04-csp","title":"Chapter 4: Constraint Satisfaction Problems","description":"Previous Adversarial Search and Games | Next Constraint Satisfaction Problems","source":"@site/docs/courses/artificial-intelligence/04-csp.md","sourceDirName":"courses/artificial-intelligence","slug":"/artificial-intelligence/04-csp","permalink":"/ai-engineering-journey/artificial-intelligence/04-csp","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"04-csp","slug":"/artificial-intelligence/04-csp","title":"Chapter 4: Constraint Satisfaction Problems","sidebar_label":"Chapter 4: Constraint Satisfaction Problems","sidebar_position":7},"sidebar":"course-artificial-intelligence","previous":{"title":"Chapter 4: Adversarial Search and Games","permalink":"/ai-engineering-journey/artificial-intelligence/04-adversarial-search"},"next":{"title":"Chapter 5: Constraint Satisfaction Problems","permalink":"/ai-engineering-journey/artificial-intelligence/05-csp"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/artificial-intelligence/04-csp.md


const frontMatter = {
	id: '04-csp',
	slug: '/artificial-intelligence/04-csp',
	title: 'Chapter 4: Constraint Satisfaction Problems',
	sidebar_label: 'Chapter 4: Constraint Satisfaction Problems',
	sidebar_position: 7
};
const contentTitle = 'Chapter 4: Constraint Satisfaction Problems';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Constraint Satisfaction Matters",
  "id": "why-constraint-satisfaction-matters",
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
  "value": "CSP vs General Search",
  "id": "csp-vs-general-search",
  "level": 2
}, {
  "value": "Constraint Types",
  "id": "constraint-types",
  "level": 2
}, {
  "value": "4.1 Definition of Constraint Satisfaction Problems",
  "id": "41-definition-of-constraint-satisfaction-problems",
  "level": 2
}, {
  "value": "Real-World Analogy — Furniture Assembly",
  "id": "real-world-analogy--furniture-assembly",
  "level": 3
}, {
  "value": "Formal Definition",
  "id": "formal-definition",
  "level": 3
}, {
  "value": "Key Definitions",
  "id": "key-definitions",
  "level": 3
}, {
  "value": "Types of Constraints",
  "id": "types-of-constraints",
  "level": 3
}, {
  "value": "Example: Map Coloring",
  "id": "example-map-coloring",
  "level": 3
}, {
  "value": "Edge Cases in CSP Definition",
  "id": "edge-cases-in-csp-definition",
  "level": 3
}, {
  "value": "4.2 Backtracking Search",
  "id": "42-backtracking-search",
  "level": 2
}, {
  "value": "Real-World Analogy — Solving a Crossword Puzzle",
  "id": "real-world-analogy--solving-a-crossword-puzzle",
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
  "value": "Step-by-Step Dry Run — Australia Map Coloring (3 colors)",
  "id": "step-by-step-dry-run--australia-map-coloring-3-colors",
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
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "4.3 Forward Checking",
  "id": "43-forward-checking",
  "level": 2
}, {
  "value": "Real-World Analogy — Placing Dominoes",
  "id": "real-world-analogy--placing-dominoes",
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
  "value": "Step-by-Step Dry Run — Australia with Forward Checking",
  "id": "step-by-step-dry-run--australia-with-forward-checking",
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
  "value": "Forward Checking vs Backtracking — Search Tree Nodes",
  "id": "forward-checking-vs-backtracking--search-tree-nodes",
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
  "value": "4.4 Arc Consistency and AC-3",
  "id": "44-arc-consistency-and-ac-3",
  "level": 2
}, {
  "value": "Real-World Analogy — Friends Planning a Dinner",
  "id": "real-world-analogy--friends-planning-a-dinner",
  "level": 3
}, {
  "value": "Definition",
  "id": "definition",
  "level": 3
}, {
  "value": "AC-3 Algorithm Steps",
  "id": "ac-3-algorithm-steps",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run — AC-3 on Australia Map (3 colors)",
  "id": "step-by-step-dry-run--ac-3-on-australia-map-3-colors",
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
  "value": "Maintaining Arc Consistency (MAC)",
  "id": "maintaining-arc-consistency-mac",
  "level": 3
}, {
  "value": "4.5 Heuristics: MRV and LCV",
  "id": "45-heuristics-mrv-and-lcv",
  "level": 2
}, {
  "value": "Real-World Analogy — Emergency Room Triage",
  "id": "real-world-analogy--emergency-room-triage",
  "level": 3
}, {
  "value": "Minimum Remaining Values (MRV) Heuristic",
  "id": "minimum-remaining-values-mrv-heuristic",
  "level": 3
}, {
  "value": "Least Constraining Value (LCV) Heuristic",
  "id": "least-constraining-value-lcv-heuristic",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation-3",
  "level": 3
}, {
  "value": "Dry Run — MRV on 4-Queens",
  "id": "dry-run--mrv-on-4-queens",
  "level": 3
}, {
  "value": "Complexity Impact",
  "id": "complexity-impact",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-3",
  "level": 3
}, {
  "value": "Edge Cases for MRV/LCV",
  "id": "edge-cases-for-mrvlcv",
  "level": 3
}, {
  "value": "4.6 CSP Structure",
  "id": "46-csp-structure",
  "level": 2
}, {
  "value": "4.6.1 Tree-Structured CSPs",
  "id": "461-tree-structured-csps",
  "level": 3
}, {
  "value": "4.6.2 Reducing to Tree Structure",
  "id": "462-reducing-to-tree-structure",
  "level": 3
}, {
  "value": "4.7 Iterative Algorithms for CSPs",
  "id": "47-iterative-algorithms-for-csps",
  "level": 2
}, {
  "value": "4.7.1 Min-Conflicts Heuristic",
  "id": "471-min-conflicts-heuristic",
  "level": 3
}, {
  "value": "4.8 Interview Corner",
  "id": "48-interview-corner",
  "level": 2
}, {
  "value": "Q1: Can you formulate Map Coloring as a CSP?",
  "id": "q1-can-you-formulate-map-coloring-as-a-csp",
  "level": 3
}, {
  "value": "Q2: How would you solve N-Queens using CSP?",
  "id": "q2-how-would-you-solve-n-queens-using-csp",
  "level": 3
}, {
  "value": "Q3: How is Sudoku a CSP?",
  "id": "q3-how-is-sudoku-a-csp",
  "level": 3
}, {
  "value": "Q4: AC-3 vs Backtracking — which is better?",
  "id": "q4-ac-3-vs-backtracking--which-is-better",
  "level": 3
}, {
  "value": "Q5: What is the complexity of AC-3?",
  "id": "q5-what-is-the-complexity-of-ac-3",
  "level": 3
}, {
  "value": "Q6: What is the difference between forward checking and AC-3?",
  "id": "q6-what-is-the-difference-between-forward-checking-and-ac-3",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — CSP Heuristics",
  "id": "quick-reference--csp-heuristics",
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
  "value": "4.9 Summary",
  "id": "49-summary",
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
    annotation: "annotation",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    math: "math",
    mfrac: "mfrac",
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mrow: "mrow",
    msub: "msub",
    msup: "msup",
    mtext: "mtext",
    ol: "ol",
    p: "p",
    pre: "pre",
    semantics: "semantics",
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
        id: "chapter-4-constraint-satisfaction-problems",
        children: "Chapter 4: Constraint Satisfaction Problems"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/04-adversarial-search",
        children: "Chapter 4: Adversarial Search and Games"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/05-csp",
        children: "Chapter 5: Constraint Satisfaction Problems"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the conclusion of this chapter, the student will be able to: (1) formulate problems as constraint satisfaction problems; (2) apply backtracking search with heuristic ordering; (3) implement constraint propagation via arc consistency; (4) exploit problem structure for efficient solving; (5) apply iterative algorithms for large CSPs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-constraint-satisfaction-matters",
      children: "Why Constraint Satisfaction Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy — Scheduling University Classes:"
      }), " Imagine you are the registrar at a university. You have 50 classes to schedule across 10 time slots and 20 rooms. Each professor can only teach during certain hours, no two classes can share the same room at the same time, some courses must be taken in sequence (prerequisite constraints), and some students must be able to take both AI and Machine Learning without a time conflict. This is a classic Constraint Satisfaction Problem (CSP). The variables are (class, time, room) triples, the domains are all possible time-room combinations, and the constraints capture every real-world restriction. Without a CSP framework, you would resort to brute-force enumeration — evaluating 20¹â�° possible room assignments alone. With CSP techniques (backtracking, forward checking, AC-3), you prune invalid branches early and find a feasible schedule in seconds instead of centuries. CSPs are the mathematical backbone of timetabling, Sudoku, register allocation in compilers, and even NASA's Deep Space Network antenna scheduling."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "CSP Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables X, domains D, constraints C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assignment, consistent, complete, solution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backtracking Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS variable assignment, MRV, LCV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail-first, forward checking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arc consistency, AC-3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node/arc/path consistency, MAC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSP Structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree-structured, cutset, treewidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topological order, tree decomposition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative Algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Min-conflicts heuristic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local search, random restart"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[CSP Definition] --> B[Backtracking Search]\n    A --> C[Constraint Propagation]\n    B --> D[MRV / LCV Heuristics]\n    C --> E[AC-3 Algorithm]\n    E --> F[MAC Maintaining Arc Consistency]\n    A --> G[CSP Structure]\n    G --> H[Tree-Structured]\n    G --> I[Cutset Conditioning]\n    A --> J[Min-Conflicts]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "csp-vs-general-search",
      children: "CSP vs General Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSPs differ fundamentally from general search (DFS, BFS, A*):"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "General Search"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Constraint Satisfaction"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State representation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Opaque — states are atomic black boxes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Declarative — state = assignment of values to variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Goal test"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Application-specific function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "All constraints satisfied"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Path matters?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes — the sequence of actions matters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No — only the final assignment matters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Action set"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Varies per state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Fixed: assign value to unassigned variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Commutativity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Not commutative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Commutative — order of assignments irrelevant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Branching factor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Often small"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Large (domain size × number of unassigned vars)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Search space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(b^d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(d^n) where d = domain size, n = #variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Heuristics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Domain-specific (admissible, consistent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Domain-independent (MRV, LCV, forward checking)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Completeness guarantee"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Varies by algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Backtracking is complete; local search is not"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "constraint-types",
      children: "Constraint Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"WA cannot be red\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "C"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: ":"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "W"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "A"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        mathvariant: "normal",
                        children: "≠"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "r"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "C_1: WA \\neq red"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8333em",
                      verticalAlign: "-0.15em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0715em"
                      },
                      children: "C"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3011em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.0715em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "1"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: ":"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8889em",
                      verticalAlign: "-0.1944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mrel",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mrel",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord vbox",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "thinbox",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "rlap",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "strut",
                              style: {
                                height: "0.8889em",
                                verticalAlign: "-0.1944em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "inner",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mrel",
                                  children: ""
                                })
                              })
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "fix"
                            })]
                          })
                        })
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mspace nobreak"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mrel",
                      children: "="
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.6944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0278em"
                    },
                    children: "r"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "d"
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Binary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"WA and NT cannot have same color\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "C"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: ":"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "W"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "A"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        mathvariant: "normal",
                        children: "≠"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "N"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "T"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "C_2: WA \\neq NT"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8333em",
                      verticalAlign: "-0.15em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0715em"
                      },
                      children: "C"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3011em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.0715em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "2"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: ":"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8889em",
                      verticalAlign: "-0.1944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mrel",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mrel",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord vbox",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "thinbox",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "rlap",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "strut",
                              style: {
                                height: "0.8889em",
                                verticalAlign: "-0.1944em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "inner",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mrel",
                                  children: ""
                                })
                              })
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "fix"
                            })]
                          })
                        })
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mspace nobreak"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mrel",
                      children: "="
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.6833em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.109em"
                    },
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "T"
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Global"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k variables (k ≥ 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"All seven territories must have distinct colors\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "C"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "3"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: ":"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "A"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "l"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "l"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "f"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "f"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "r"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "t"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "W"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "A"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "N"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "T"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "S"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "A"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "Q"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "N"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "S"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "W"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "V"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "T"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "C_3: Alldifferent(WA, NT, SA, Q, NSW, V, T)"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8333em",
                      verticalAlign: "-0.15em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0715em"
                      },
                      children: "C"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3011em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.0715em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "3"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: ":"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0197em"
                    },
                    children: "l"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0197em"
                    },
                    children: "l"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1076em"
                    },
                    children: "f"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1076em"
                    },
                    children: "f"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0278em"
                    },
                    children: "er"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "t"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.109em"
                    },
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0576em"
                    },
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "Q"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.109em"
                    },
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0576em"
                    },
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.2222em"
                    },
                    children: "V"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Preference (soft)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "arbitrary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Avoid scheduling Prof. Smith at 8AM\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "C"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "4"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: ":"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "m"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "m"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "z"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsx)(_components.mtext, {
                        children: " "
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "S"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "m"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "t"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "h"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "_"
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "8"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "A"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "M"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "_"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "s"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "l"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "o"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "t"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "s"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "C_4: minimize\\ Smith\\_8AM\\_slots"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8333em",
                      verticalAlign: "-0.15em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0715em"
                      },
                      children: "C"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3011em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.0715em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "4"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: ":"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.0044em",
                      verticalAlign: "-0.31em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "minimi"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.044em"
                    },
                    children: "z"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    children: " "
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0576em"
                    },
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "mi"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "t"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "h"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "_8"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.109em"
                    },
                    children: "M"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    style: {
                      marginRight: "0.0278em"
                    },
                    children: "_"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "s"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0197em"
                    },
                    children: "l"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "o"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "t"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "s"
                  })]
                })]
              })]
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unary constraints"
        }), " reduce a variable's domain directly (e.g., \"X ≠ red\" removes red from D_X)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binary constraints"
        }), " relate variable pairs — the most common type, forming a constraint graph."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Global constraints"
        }), " compactly represent complex interactions — ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "l"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "l"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "f"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "f"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "r"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "t"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "Alldifferent"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "A"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0197em"
                },
                children: "l"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0197em"
                },
                children: "l"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1076em"
                },
                children: "f"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1076em"
                },
                children: "f"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "er"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "e"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "t"
              })]
            })
          })]
        }), " alone captures ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    fence: "true",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                    linethickness: "0px",
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "k"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    fence: "true",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\binom{k}{2}"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.2801em",
                  verticalAlign: "-0.35em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mopen delimcenter",
                  style: {
                    top: "0em"
                  },
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "delimsizing size1",
                    children: "("
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mfrac",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.9301em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.355em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "2"
                              })
                            })
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.144em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.0315em"
                                },
                                children: "k"
                              })
                            })
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.345em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mclose delimcenter",
                  style: {
                    top: "0em"
                  },
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "delimsizing size1",
                    children: ")"
                  })
                })]
              })]
            })
          })]
        }), " binary inequalities."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "41-definition-of-constraint-satisfaction-problems",
      children: "4.1 Definition of Constraint Satisfaction Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/artificial-intelligence/ch04-csp.png",
        alt: "Constraint Satisfaction Problems"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A CSP is defined by variables X, domains D, and constraints C — the solution is a complete assignment satisfying all constraints."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--furniture-assembly",
      children: "Real-World Analogy — Furniture Assembly"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You buy a bookshelf from IKEA. The instructions show 12 parts (variables), each can go into specific slots (domains), and the bolts must go into pre-drilled holes (unary constraints), the left panel must connect to the top panel (binary constraints), and all five shelves must be different heights (global constraint ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "A"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "f"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "f"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "Alldifferent"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8889em",
                verticalAlign: "-0.1944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "A"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "i"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1076em"
              },
              children: "f"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1076em"
              },
              children: "f"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "er"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            })]
          })
        })]
      }), "). You are not searching for the best sequence of assembly steps — you are searching for an assignment of each part to a slot such that everything fits. That is a CSP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "formal-definition",
      children: "Formal Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraint Satisfaction Problem (CSP)"
      }), " is defined by a triple ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "script",
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "script",
                  children: "D"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "script",
                  children: "C"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "(\\mathcal{X}, \\mathcal{D}, \\mathcal{C})"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathcal",
              style: {
                marginRight: "0.1464em"
              },
              children: "X"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathcal",
              style: {
                marginRight: "0.0278em"
              },
              children: "D"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathcal",
              style: {
                marginRight: "0.0583em"
              },
              children: "C"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })
        })]
      }), " where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "script",
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "…"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\mathcal{X} = \\{X_1, X_2, \\ldots, X_n\\}"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathcal",
                style: {
                  marginRight: "0.1464em"
                },
                children: "X"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "{"
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3011em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0785em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "1"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3011em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0785em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "minner",
                children: "…"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.1514em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0785em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "n"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: "}"
              })]
            })]
          })]
        }), " is a finite set of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "variables"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "script",
                    children: "D"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "D"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "D"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "…"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "D"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\mathcal{D} = \\{D_1, D_2, \\ldots, D_n\\}"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathcal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "D"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "{"
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0278em"
                  },
                  children: "D"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3011em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0278em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "1"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0278em"
                  },
                  children: "D"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3011em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0278em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "minner",
                children: "…"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0278em"
                  },
                  children: "D"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.1514em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0278em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "n"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: "}"
              })]
            })]
          })]
        }), " is a set of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "domains"
        }), ", where ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "D"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "D_i"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8333em",
                  verticalAlign: "-0.15em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0278em"
                  },
                  children: "D"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0278em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })]
            })
          })]
        }), " is the set of values that ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "X_i"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8333em",
                  verticalAlign: "-0.15em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0785em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })]
            })
          })]
        }), " may take. Domains may be discrete or continuous, finite or infinite."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "script",
                    children: "C"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "C"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "C"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "…"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "C"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "m"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\mathcal{C} = \\{C_1, C_2, \\ldots, C_m\\}"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathcal",
                style: {
                  marginRight: "0.0583em"
                },
                children: "C"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "{"
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0715em"
                  },
                  children: "C"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3011em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0715em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "1"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0715em"
                  },
                  children: "C"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3011em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0715em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "minner",
                children: "…"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0715em"
                  },
                  children: "C"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.1514em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0715em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "m"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: "}"
              })]
            })]
          })]
        }), " is a set of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "constraints"
        }), ". Each constraint ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "C"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "C_j"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.9694em",
                  verticalAlign: "-0.2861em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0715em"
                  },
                  children: "C"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0715em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0572em"
                              },
                              children: "j"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.2861em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })]
            })
          })]
        }), " is a pair ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "⟨"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "s"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "c"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "o"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "p"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "r"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "l"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "a"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "t"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "o"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "⟩"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\langle scope, relation \\rangle"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "⟨"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "sco"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "p"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "e"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "r"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "e"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0197em"
                },
                children: "l"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "a"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "t"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "o"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: "⟩"
              })]
            })
          })]
        }), " where ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "s"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "c"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "o"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "p"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "scope"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.625em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "sco"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "p"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "e"
              })]
            })
          })]
        }), " is a tuple of variables and ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "r"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "l"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "a"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "t"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "o"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "relation"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "r"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "e"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0197em"
                },
                children: "l"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "a"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "t"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "o"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              })]
            })
          })]
        }), " is a subset of the Cartesian product of their domains specifying allowed value combinations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-definitions",
      children: "Key Definitions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assignment:"
        }), " A mapping from variables to values, e.g., ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "r"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "g"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "r"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\{WA = red, NT = green\\}"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "{"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "W"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "A"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "r"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "e"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "N"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "g"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "r"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "ee"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: "}"
              })]
            })]
          })]
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistent assignment:"
        }), " An assignment that does not violate any constraint."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complete assignment:"
        }), " Every variable is assigned a value."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        }), " A complete and consistent assignment."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types-of-constraints",
      children: "Types of Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unary constraints:"
        }), " Restrict the value of a single variable (", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    mathvariant: "normal",
                    children: "≠"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "r"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "X \\neq red"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "X"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mrel",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord vbox",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "thinbox",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "rlap",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "strut",
                          style: {
                            height: "0.8889em",
                            verticalAlign: "-0.1944em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "inner",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: ""
                            })
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "fix"
                        })]
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace nobreak"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "r"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "e"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              })]
            })]
          })]
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binary constraints:"
        }), " Relate two variables (", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    mathvariant: "normal",
                    children: "≠"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "Y"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "X \\neq Y"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "X"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mrel",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord vbox",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "thinbox",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "rlap",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "strut",
                          style: {
                            height: "0.8889em",
                            verticalAlign: "-0.1944em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "inner",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: ""
                            })
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "fix"
                        })]
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace nobreak"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.2222em"
                },
                children: "Y"
              })]
            })]
          })]
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Global constraints:"
        }), " Involve an arbitrary number of variables (", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "l"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "l"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "f"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "f"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "r"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "t"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "…"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "k"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "Alldifferent(X_1, \\ldots, X_k)"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "A"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0197em"
                },
                children: "l"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0197em"
                },
                children: "l"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1076em"
                },
                children: "f"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1076em"
                },
                children: "f"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "er"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "e"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "t"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3011em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0785em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "1"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "minner",
                children: "…"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3361em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0785em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0315em"
                              },
                              children: "k"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-map-coloring",
      children: "Example: Map Coloring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a map of Australia with seven territories (WA, NT, SA, Q, NSW, V, T), assign each territory a color from {red, green, blue} such that no two adjacent territories share the same color."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CSP Formulation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Variables: ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "script",
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "Q"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "V"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\mathcal{X} = \\{WA, NT, SA, Q, NSW, V, T\\}"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathcal",
                style: {
                  marginRight: "0.1464em"
                },
                children: "X"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "{"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "W"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "A"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "N"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "A"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "Q"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "N"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "W"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.2222em"
                },
                children: "V"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: "}"
              })]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Domains: ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "D"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "r"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "g"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "r"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "b"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "l"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "u"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "D_i = \\{red, green, blue\\}"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8333em",
                  verticalAlign: "-0.15em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0278em"
                  },
                  children: "D"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0278em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "{"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "r"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "e"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "g"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "r"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "ee"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "b"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0197em"
                },
                children: "l"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "u"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "e"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: "}"
              })]
            })]
          })]
        }), " for all ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "i"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6595em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
              })]
            })
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Constraints: ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    mathvariant: "normal",
                    children: "≠"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "WA \\neq NT"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "W"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "A"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mrel",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord vbox",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "thinbox",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "rlap",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "strut",
                          style: {
                            height: "0.8889em",
                            verticalAlign: "-0.1944em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "inner",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: ""
                            })
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "fix"
                        })]
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace nobreak"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "N"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "T"
              })]
            })]
          })]
        }), ", ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    mathvariant: "normal",
                    children: "≠"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "A"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "WA \\neq SA"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "W"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "A"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mrel",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord vbox",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "thinbox",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "rlap",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "strut",
                          style: {
                            height: "0.8889em",
                            verticalAlign: "-0.1944em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "inner",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: ""
                            })
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "fix"
                        })]
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace nobreak"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "A"
              })]
            })]
          })]
        }), ", ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    mathvariant: "normal",
                    children: "≠"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "A"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "NT \\neq SA"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "N"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mrel",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord vbox",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "thinbox",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "rlap",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "strut",
                          style: {
                            height: "0.8889em",
                            verticalAlign: "-0.1944em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "inner",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: ""
                            })
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "fix"
                        })]
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace nobreak"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "A"
              })]
            })]
          })]
        }), ", ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    mathvariant: "normal",
                    children: "≠"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "Q"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "NT \\neq Q"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "N"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mrel",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord vbox",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "thinbox",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "rlap",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "strut",
                          style: {
                            height: "0.8889em",
                            verticalAlign: "-0.1944em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "inner",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: ""
                            })
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "fix"
                        })]
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace nobreak"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8778em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "Q"
              })]
            })]
          })]
        }), ", ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    mathvariant: "normal",
                    children: "≠"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "Q"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "SA \\neq Q"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "A"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mrel",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord vbox",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "thinbox",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "rlap",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "strut",
                          style: {
                            height: "0.8889em",
                            verticalAlign: "-0.1944em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "inner",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: ""
                            })
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "fix"
                        })]
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace nobreak"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8778em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "Q"
              })]
            })]
          })]
        }), ", ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    mathvariant: "normal",
                    children: "≠"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "W"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "SA \\neq NSW"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "A"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mrel",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord vbox",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "thinbox",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "rlap",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "strut",
                          style: {
                            height: "0.8889em",
                            verticalAlign: "-0.1944em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "inner",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: ""
                            })
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "fix"
                        })]
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace nobreak"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "N"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "W"
              })]
            })]
          })]
        }), ", ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    mathvariant: "normal",
                    children: "≠"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "V"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "SA \\neq V"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "A"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mrel",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord vbox",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "thinbox",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "rlap",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "strut",
                          style: {
                            height: "0.8889em",
                            verticalAlign: "-0.1944em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "inner",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: ""
                            })
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "fix"
                        })]
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace nobreak"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.2222em"
                },
                children: "V"
              })]
            })]
          })]
        }), ", ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "Q"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    mathvariant: "normal",
                    children: "≠"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "W"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "Q \\neq NSW"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "Q"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mrel",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord vbox",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "thinbox",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "rlap",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "strut",
                          style: {
                            height: "0.8889em",
                            verticalAlign: "-0.1944em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "inner",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: ""
                            })
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "fix"
                        })]
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace nobreak"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "N"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "W"
              })]
            })]
          })]
        }), ", ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    mathvariant: "normal",
                    children: "≠"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "V"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "NSW \\neq V"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "N"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "W"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mrel",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord vbox",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "thinbox",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "rlap",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "strut",
                          style: {
                            height: "0.8889em",
                            verticalAlign: "-0.1944em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "inner",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: ""
                            })
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "fix"
                        })]
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace nobreak"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.2222em"
                },
                children: "V"
              })]
            })]
          })]
        }), ", ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    mathvariant: "normal",
                    children: "≠"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "NSW \\neq T"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "N"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "W"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mrel",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord vbox",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "thinbox",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "rlap",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "strut",
                          style: {
                            height: "0.8889em",
                            verticalAlign: "-0.1944em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "inner",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: ""
                            })
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "fix"
                        })]
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace nobreak"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "T"
              })]
            })]
          })]
        }), ", ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "V"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    mathvariant: "normal",
                    children: "≠"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "V \\neq T"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.2222em"
                },
                children: "V"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mrel",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord vbox",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "thinbox",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "rlap",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "strut",
                          style: {
                            height: "0.8889em",
                            verticalAlign: "-0.1944em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "inner",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: ""
                            })
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "fix"
                        })]
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace nobreak"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "T"
              })]
            })]
          })]
        }), " (11 binary inequality constraints)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-in-csp-definition",
      children: "Edge Cases in CSP Definition"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implication"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty domain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "D"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "W"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "A"
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "{"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "}"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "D_{WA} = \\{\\}"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8333em",
                      verticalAlign: "-0.15em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0278em"
                      },
                      children: "D"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3283em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.0278em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "W"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "A"
                                  })]
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "{"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: "}"
                  })]
                })]
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No solution exists — CSP is unsatisfiable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No constraints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "m"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "0"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "m = 0"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.4306em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "m"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.6444em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "0"
                  })]
                })]
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every complete assignment is a solution; there are $"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conflicting constraints"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "W"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "A"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        mathvariant: "normal",
                        children: "≠"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "r"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "WA \\neq red"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8889em",
                      verticalAlign: "-0.1944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mrel",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mrel",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord vbox",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "thinbox",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "rlap",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "strut",
                              style: {
                                height: "0.8889em",
                                verticalAlign: "-0.1944em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "inner",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mrel",
                                  children: ""
                                })
                              })
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "fix"
                            })]
                          })
                        })
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mspace nobreak"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mrel",
                      children: "="
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.6944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0278em"
                    },
                    children: "r"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "d"
                  })]
                })]
              })]
            }), " and ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "W"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "A"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "r"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "WA = red"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.6833em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.6944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0278em"
                    },
                    children: "r"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "d"
                  })]
                })]
              })]
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSP is overconstrained — inconsistency detected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Singleton domain"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "D"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "W"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "A"
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "{"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "r"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "}"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "D_{WA} = \\{red\\}"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8333em",
                      verticalAlign: "-0.15em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0278em"
                      },
                      children: "D"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3283em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.0278em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "W"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "A"
                                  })]
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "{"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0278em"
                    },
                    children: "r"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: "}"
                  })]
                })]
              })]
            }), " only"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unary constraint effectively locks the variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Infinite domain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "D"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "S"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "A"
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "double-struck",
                        children: "R"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "D_{SA} = \\mathbb{R}"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8333em",
                      verticalAlign: "-0.15em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0278em"
                      },
                      children: "D"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3283em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.0278em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.0576em"
                                    },
                                    children: "S"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "A"
                                  })]
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.6889em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathbb",
                    children: "R"
                  })]
                })]
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search space is unbounded; requires constraint programming techniques"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Redundant constraints"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "W"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "A"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        mathvariant: "normal",
                        children: "≠"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "N"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "T"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "WA \\neq NT"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8889em",
                      verticalAlign: "-0.1944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mrel",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mrel",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord vbox",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "thinbox",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "rlap",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "strut",
                              style: {
                                height: "0.8889em",
                                verticalAlign: "-0.1944em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "inner",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mrel",
                                  children: ""
                                })
                              })
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "fix"
                            })]
                          })
                        })
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mspace nobreak"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mrel",
                      children: "="
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.6833em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.109em"
                    },
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "T"
                  })]
                })]
              })]
            }), " and ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "N"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "T"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        mathvariant: "normal",
                        children: "≠"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "W"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "A"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "NT \\neq WA"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8889em",
                      verticalAlign: "-0.1944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.109em"
                    },
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mrel",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mrel",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord vbox",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "thinbox",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "rlap",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "strut",
                              style: {
                                height: "0.8889em",
                                verticalAlign: "-0.1944em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "inner",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mrel",
                                  children: ""
                                })
                              })
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "fix"
                            })]
                          })
                        })
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mspace nobreak"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mrel",
                      children: "="
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.6833em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "A"
                  })]
                })]
              })]
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate — harmless but wastes memory"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "42-backtracking-search",
      children: "4.2 Backtracking Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--solving-a-crossword-puzzle",
      children: "Real-World Analogy — Solving a Crossword Puzzle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You are filling in a crossword. You pick an empty word (variable), guess a candidate word from your vocabulary (domain), check whether it conflicts with already-filled crossing words (constraint check). If it fits, you move to the next empty word. If none of the remaining candidate words fit without contradiction, you erase the last word you filled and try a different one. This trial-and-error with undo is exactly backtracking search."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Select unassigned variable:"
        }), " Pick a variable that has not yet been assigned a value."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Order domain values:"
        }), " Decide the sequence in which to try values for the selected variable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check consistency:"
        }), " For each value, check if it is consistent with the current partial assignment given all constraints."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assign:"
        }), " If consistent, tentatively assign the value to the variable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Run inference (optional):"
        }), " Use forward checking or AC-3 to prune domains of remaining variables."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recurse:"
        }), " Call backtrack on the new assignment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backtrack:"
        }), " If recursion returns failure, undo the assignment and try the next value."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Return:"
        }), " If all values fail, return failure to the previous level."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complete:"
        }), " If all variables are assigned, return the solution."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function BACKTRACKING-SEARCH(csp) returns solution or failure\n    return BACKTRACK({}, csp)\n\nfunction BACKTRACK(assignment, csp) returns solution or failure\n    if assignment is complete then return assignment\n    var <- SELECT-UNASSIGNED-VARIABLE(csp)\n    for each value in ORDER-DOMAIN-VALUES(var, assignment, csp) do\n        if value is consistent with assignment given CONSTRAINTS(csp) then\n            add {var = value} to assignment\n            inferences <- INFERENCE(csp, var, value)\n            if inferences != failure then\n                add inferences to assignment\n                result <- BACKTRACK(assignment, csp)\n                if result != failure then return result\n            remove {var = value} and inferences from assignment\n    return failure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run--australia-map-coloring-3-colors",
      children: "Step-by-Step Dry Run — Australia Map Coloring (3 colors)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Variables:"
      }), " WA, NT, SA, Q, NSW, V, T\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Domains:"
      }), " {R, G, B} for all\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      }), " Adjacent territories must differ"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Tried"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Assignment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Domain changes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "WA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{WA=R}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Remove R from NT, SA domains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Assign"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "NT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{WA=R, NT=G}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Remove G from SA, Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Assign"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{WA=R, NT=G, SA=B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Remove B from Q, NSW, V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Assign"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{WA=R, NT=G, SA=B, Q=R}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Remove R from NSW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Assign"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "NSW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{WA=R, NT=G, SA=B, Q=R, NSW=G}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Remove G from V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Assign"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{WA=R, NT=G, SA=B, Q=R, NSW=G, V=B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Remove B from T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Assign"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{WA=R, NT=G, SA=B, Q=R, NSW=G, V=B, T=R}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "All assigned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Solution!"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If instead at Step 3 we had SA = R (conflict with WA), backtracking would try SA = G (conflict with NT), then SA = B (success). The trace above shows one path through the search tree."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CSP:\n    def __init__(self, variables, domains, constraints):\n        self.variables = variables\n        self.domains = domains\n        self.constraints = constraints  # dict mapping (Xi, Xj) -> constraint function\n\n    def is_consistent(self, var, value, assignment):\n        for (v1, v2), constraint_fn in self.constraints.items():\n            if v1 == var and v2 in assignment:\n                if not constraint_fn(value, assignment[v2]):\n                    return False\n            elif v2 == var and v1 in assignment:\n                if not constraint_fn(assignment[v1], value):\n                    return False\n        return True\n\ndef backtracking_search(csp):\n    return backtrack({}, csp)\n\ndef backtrack(assignment, csp):\n    if len(assignment) == len(csp.variables):\n        return assignment\n    var = select_unassigned_variable(csp, assignment)\n    for value in order_domain_values(var, csp, assignment):\n        if csp.is_consistent(var, value, assignment):\n            assignment[var] = value\n            result = backtrack(assignment, csp)\n            if result is not None:\n                return result\n            del assignment[var]\n    return None\n\ndef select_unassigned_variable(csp, assignment):\n    for var in csp.variables:\n        if var not in assignment:\n            return var\n    return None\n\ndef order_domain_values(var, csp, assignment):\n    return csp.domains[var]\n\n# Australia map coloring\nvariables = ['WA', 'NT', 'SA', 'Q', 'NSW', 'V', 'T']\ndomains = {v: ['R', 'G', 'B'] for v in variables}\npairs = [('WA', 'NT'), ('WA', 'SA'), ('NT', 'SA'), ('NT', 'Q'),\n         ('SA', 'Q'), ('SA', 'NSW'), ('SA', 'V'), ('Q', 'NSW'),\n         ('NSW', 'V'), ('V', 'T')]\nconstraints = {(a, b): lambda x, y: x != y for (a, b) in pairs}\n# Make symmetric\nfor (a, b) in list(constraints.keys()):\n    constraints[(b, a)] = constraints[(a, b)]\n\ncsp = CSP(variables, domains, constraints)\nsol = backtracking_search(csp)\nprint(\"Solution:\", sol)\n# Output: Solution: {'WA': 'R', 'NT': 'G', 'SA': 'B', 'Q': 'R', 'NSW': 'G', 'V': 'B', 'T': 'R'}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "d"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "O(d^n)"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.6644em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "n"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " in the worst case, where ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "d"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              })]
            })
          })]
        }), " = maximum domain size and ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "n"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.4306em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              })]
            })
          })]
        }), " = number of variables. Each of the ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "n"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.4306em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              })]
            })
          })]
        }), " variables has up to ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "d"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              })]
            })
          })]
        }), " choices, and the search tree has ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "d"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "O(d^n)"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.6644em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "n"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " leaf nodes. Without inference, backtracking explores all ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "d"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "d^n"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.6644em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "n"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              })]
            })
          })]
        }), " possible assignments in the worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "O(n)"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " — the depth of the recursion stack is at most ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "n"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.4306em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              })]
            })
          })]
        }), ". This is linear space, which is a key advantage over BFS."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why worst-case exponential:"
        }), " Each variable must be assigned one of ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "d"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              })]
            })
          })]
        }), " values, and constraints add pruning but do not reduce the exponential bound in adversarial cases (e.g., a CSP with no solutions)."]
      }), "\n"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete — guaranteed to find solution if one exists"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Worst-case exponential ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "O"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "d"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(d^n)"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "d"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.6644em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.063em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "n"
                                })
                              })]
                            })
                          })
                        })
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })
              })]
            }), " time"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Memory efficient — only ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "O"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(n)"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })
              })]
            }), " recursion stack"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No guidance — tries values in arbitrary order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works for any CSP regardless of structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeatedly fails on the same dead-end variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to combine with heuristics (MRV, LCV)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not detect inevitable failure early without inference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement and debug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ineffective on large, densely constrained CSPs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No solution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns None after exhaustive search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 colors for Australia map"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single variable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns assignment of first value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "script",
                        children: "X"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "{"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "X"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "}"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "D"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "{"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "{"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "a"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "b"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "}"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "}"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⇒"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "{"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "X"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "a"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "}"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\mathcal{X}=\\{X\\}, D=\\{\\{a,b\\}\\} \\Rightarrow \\{X=a\\}"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.6833em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathcal",
                    style: {
                      marginRight: "0.1464em"
                    },
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "{"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0785em"
                    },
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: "}"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0278em"
                    },
                    children: "D"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "{{"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "a"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mpunct",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "b"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: "}}"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "⇒"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "{"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0785em"
                    },
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "a"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: "}"
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single domain values"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only one path explored"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "D"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "{"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "a"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "}"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "D_i=\\{a\\}"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8333em",
                      verticalAlign: "-0.15em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0278em"
                      },
                      children: "D"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3117em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.0278em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "i"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "{"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "a"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: "}"
                  })]
                })]
              })]
            }), " for all ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "i"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.6595em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "i"
                  })]
                })
              })]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty domain before start"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate failure"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Any ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "D"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "{"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "}"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "D_i = \\{\\}"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8333em",
                      verticalAlign: "-0.15em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0278em"
                      },
                      children: "D"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3117em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.0278em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "i"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "{"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: "}"
                  })]
                })]
              })]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Satisfied on empty assignment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivially complete"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "0"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "n=0"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.4306em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.6444em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "0"
                  })]
                })]
              })]
            }), " returns ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "{"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "}"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\{\\}"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "{"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: "}"
                  })]
                })
              })]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cyclic constraints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Still handled — cycles increase backtracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any graph with cycles"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Always pair backtracking with at least forward checking. Pure backtracking without inference explores enormous search trees. Even a single inconsistency check per assignment provides exponential savings."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "43-forward-checking",
      children: "4.3 Forward Checking"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--placing-dominoes",
      children: "Real-World Analogy — Placing Dominoes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You are placing dominoes on a board. When you place one domino, you eliminate all positions that would overlap with it from consideration. If at any point a remaining cell has zero possible placements, you immediately know your current partial layout is impossible and undo the last domino. This forward-looking elimination is forward checking."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-1",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Select and assign a variable:"
        }), " Choose an unassigned variable and assign a tentative value."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify affected variables:"
        }), " Find all unassigned variables that share a constraint with the assigned variable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remove inconsistent values:"
        }), " For each affected variable, remove any domain values that violate a constraint with the newly assigned value."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check for empty domains:"
        }), " If any affected variable now has an empty domain, the current assignment is a dead end — backtrack immediately."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Propagate on next assignment:"
        }), " Repeat steps 1-4 for each subsequent assignment."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function BACKTRACK-FC(assignment, csp) returns solution or failure\n    if assignment is complete then return assignment\n    var <- SELECT-UNASSIGNED-VARIABLE(csp)\n    for each value in ORDER-DOMAIN-VALUES(var, assignment, csp) do\n        if value is consistent with assignment then\n            add {var = value} to assignment\n            domains_copy <- SAVE-DOMAINS(csp)\n            if FORWARD-CHECK(csp, var, value) then\n                result <- BACKTRACK-FC(assignment, csp)\n                if result != failure then return result\n            RESTORE-DOMAINS(csp, domains_copy)\n            remove {var = value} from assignment\n    return failure\n\nfunction FORWARD-CHECK(csp, var, value) returns boolean\n    for each unassigned variable Y adjacent to var do\n        for each value v in D_Y do\n            if not CONSTRAINT-SATISFIED(var=value, Y=v) then\n                remove v from D_Y\n        if D_Y is empty then return false\n    return true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run--australia-with-forward-checking",
      children: "Step-by-Step Dry Run — Australia with Forward Checking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      }), " Variables = {WA, NT, SA, Q, NSW, V, T}, Domains = {R, G, B} for all."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Assign"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Forward Check Effect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Domains after"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Backtrack?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "WA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Remove R from NT, SA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "NT:{G,B}, SA:{G,B}, others unchanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "NT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Remove G from SA, Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SA:{B}, Q:{R,B}, others unchanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Remove B from Q, NSW, V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Q:{R}, NSW:{R,G}, V:{R,G}, T unchanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Remove R from NSW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "NSW:{G}, V:{R,G}, T unchanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "NSW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Remove G from V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "V:{R}, T unchanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Remove R from T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "T:{G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "All assigned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Solution"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If at step 4 we had tried Q=G (conflict with NT), Q=B (conflict with SA), then Q=R is the only choice — forward checking's domain reduction made the choice obvious."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-1",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def forward_check(csp, var, value, assignment):\n    \"\"\"Remove inconsistent values from domains of unassigned neighbors.\"\"\"\n    for neighbor in csp.variables:\n        if neighbor not in assignment and neighbor != var:\n            to_remove = []\n            for v in csp.domains[neighbor]:\n                if (var, neighbor) in csp.constraints:\n                    if not csp.constraints[(var, neighbor)](value, v):\n                        to_remove.append(v)\n                elif (neighbor, var) in csp.constraints:\n                    if not csp.constraints[(neighbor, var)](v, value):\n                        to_remove.append(v)\n            for v in to_remove:\n                csp.domains[neighbor].remove(v)\n            if not csp.domains[neighbor]:\n                return False\n    return True\n\ndef backtrack_fc(csp, assignment):\n    if len(assignment) == len(csp.variables):\n        return assignment\n    var = select_unassigned_variable(csp, assignment)\n    for value in order_domain_values(var, csp, assignment):\n        if csp.is_consistent(var, value, assignment):\n            assignment[var] = value\n            saved = {v: list(csp.domains[v]) for v in csp.variables if v not in assignment and v != var}\n            if forward_check(csp, var, value, assignment):\n                result = backtrack_fc(csp, assignment)\n                if result is not None:\n                    return result\n            # Restore domains\n            for v, dom in saved.items():\n                csp.domains[v] = dom\n            del assignment[var]\n    return None\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "⋅"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "⋅"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "d"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "O(d \\cdot n \\cdot d) = O(n d^2)"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "⋅"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.4445em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "⋅"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.0641em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })]
          })]
        }), " per assignment in the worst case. For each of ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "d"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              })]
            })
          })]
        }), " values assigned, we check up to ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "n"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.4306em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              })]
            })
          })]
        }), " neighbors and compare against ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "d"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              })]
            })
          })]
        }), " domain values. Across the entire search, this can be ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "d"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "3"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "O(n^2 d^3)"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.0641em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "3"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " total worst-case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "O(n d)"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " — we save domain copies for each recursive level."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why forward checking helps:"
        }), " Pure backtracking branches ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "d"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              })]
            })
          })]
        }), " ways per variable and only discovers conflicts when a complete assignment violates a constraint. Forward checking detects dead ends as soon as a neighbor's domain empties, pruning the search tree at a much higher level. Empirical speedups of 10-1000x are common."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "forward-checking-vs-backtracking--search-tree-nodes",
      children: "Forward Checking vs Backtracking — Search Tree Nodes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pure Backtracking"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Forward Checking"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Reduction"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Australia (3 colors)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~30 nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~10 nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~3x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4-Queens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "84 nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "8 nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~10x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8-Queens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~20,000 nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~2,000 nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~10x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sudoku (easy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~10^6 nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~2,000 nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "~500x"
          })]
        })]
      })]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Detects dead ends early, pruning large subtrees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not detect all inconsistencies (only 1-step lookahead)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement on top of backtracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires domain restoration on backtrack — O(d) per undo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Significant practical speedup over pure backtracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No global consistency guarantee"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works with any variable/value ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only propagates through binary constraints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intuitive — \"what if\" elimination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fails to detect conflicts between non-neighbor variables"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No neighbor constraints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No pruning occurs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Isolated variable passes through"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Domain empties at depth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immediate backtrack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SA:{}, back up"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "All domains singleton"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No branching — deterministic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every variable forced to one value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No solutions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full search after each dead end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-color Australia"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Global constraints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not handled (only binary)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "A"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "l"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "l"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "f"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "f"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "r"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "t"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "Alldifferent"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8889em",
                      verticalAlign: "-0.1944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0197em"
                    },
                    children: "l"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0197em"
                    },
                    children: "l"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1076em"
                    },
                    children: "f"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1076em"
                    },
                    children: "f"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0278em"
                    },
                    children: "er"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "t"
                  })]
                })
              })]
            }), " not enforced"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "44-arc-consistency-and-ac-3",
      children: "4.4 Arc Consistency and AC-3"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--friends-planning-a-dinner",
      children: "Real-World Analogy — Friends Planning a Dinner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alice, Bob, and Charlie want to have dinner. Alice can come Monday or Tuesday. Bob can come Tuesday or Wednesday. Charlie can come Monday, Tuesday, or Wednesday. The constraint: Alice and Bob cannot come the same day. Before anyone commits, they think: \"If Alice comes Monday, Bob cannot, so Bob would need Wednesday.\" Then: \"If Bob comes Wednesday, is there still a day for Charlie?\" Yes — Charlie can take Monday or Tuesday. Now reverse: \"If Alice comes Tuesday, Bob cannot, so Bob would need Wednesday.\" They eliminate any option that leaves someone stranded. This bi-directional reasoning is arc consistency."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A binary constraint between variables ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "X_i"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8333em",
                verticalAlign: "-0.15em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "X"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0785em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "i"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), " and ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "j"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "X_j"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.9694em",
                verticalAlign: "-0.2861em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "X"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0785em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.0572em"
                            },
                            children: "j"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.2861em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "arc-consistent"
      }), " if for every value ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "∈"
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "D"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "x \\in D_i"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.5782em",
                verticalAlign: "-0.0391em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "x"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "∈"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8333em",
                verticalAlign: "-0.15em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "D"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0278em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "i"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })]
        })]
      }), ", there exists at least one value ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "y"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "∈"
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "D"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "j"
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "y \\in D_j"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.7335em",
                verticalAlign: "-0.1944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "y"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "∈"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.9694em",
                verticalAlign: "-0.2861em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "D"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0278em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.0572em"
                            },
                            children: "j"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.2861em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })]
        })]
      }), " such that the constraint ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "j"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "(X_i, X_j)"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1.0361em",
                verticalAlign: "-0.2861em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "X"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0785em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "i"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0785em"
                },
                children: "X"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0785em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.0572em"
                            },
                            children: "j"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.2861em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })
        })]
      }), " is satisfied. AC-3 (Mackworth, 1977) enforces arc consistency across the entire CSP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ac-3-algorithm-steps",
      children: "AC-3 Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize queue:"
        }), " Add all directed arcs ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "(X_i, X_j)"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.0361em",
                  verticalAlign: "-0.2861em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0785em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0785em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0572em"
                              },
                              children: "j"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.2861em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " where ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "X_i"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8333em",
                  verticalAlign: "-0.15em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0785em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })]
            })
          })]
        }), " and ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "X_j"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.9694em",
                  verticalAlign: "-0.2861em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0785em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0572em"
                              },
                              children: "j"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.2861em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })]
            })
          })]
        }), " share a constraint."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pop an arc:"
        }), " Remove ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "(X_i, X_j)"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.0361em",
                  verticalAlign: "-0.2861em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0785em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0785em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0572em"
                              },
                              children: "j"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.2861em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " from the queue."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Revise ", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsx)(_components.mrow, {
                    children: (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "X"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })]
                    })
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "X_i"
                  })]
                })
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "katex-html",
              "aria-hidden": "true",
              children: (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "0.8333em",
                    verticalAlign: "-0.15em"
                  }
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0785em"
                    },
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "msupsub",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.3117em"
                          },
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.55em",
                              marginLeft: "-0.0785em",
                              marginRight: "0.05em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "2.7em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              })
                            })]
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.15em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  })]
                })]
              })
            })]
          }), ":"]
        }), " For each value ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "∈"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "D"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "x \\in D_i"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.5782em",
                  verticalAlign: "-0.0391em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "x"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "∈"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8333em",
                  verticalAlign: "-0.15em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0278em"
                  },
                  children: "D"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0278em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })]
            })]
          })]
        }), ", check if there exists ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "y"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "∈"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "D"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "y \\in D_j"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.7335em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "y"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "∈"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.9694em",
                  verticalAlign: "-0.2861em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0278em"
                  },
                  children: "D"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0278em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0572em"
                              },
                              children: "j"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.2861em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })]
            })]
          })]
        }), " satisfying the constraint. If not, remove ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "x"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.4306em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "x"
              })]
            })
          })]
        }), " from ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "D"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "D_i"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8333em",
                  verticalAlign: "-0.15em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0278em"
                  },
                  children: "D"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0278em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })]
            })
          })]
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check for empty domain:"
        }), " If ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "D"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "D_i"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8333em",
                  verticalAlign: "-0.15em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0278em"
                  },
                  children: "D"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0278em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })]
            })
          })]
        }), " becomes empty during revision, the CSP is unsatisfiable — return failure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Requeue neighbors:"
        }), " If ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "D"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "D_i"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8333em",
                  verticalAlign: "-0.15em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0278em"
                  },
                  children: "D"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0278em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })]
            })
          })]
        }), " was revised (values were removed), add all arcs ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "k"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "(X_k, X_i)"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3361em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0785em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0315em"
                              },
                              children: "k"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0785em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " back to the queue (except ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "(X_j, X_i)"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.0361em",
                  verticalAlign: "-0.2861em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0785em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0572em"
                              },
                              children: "j"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.2861em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0785em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), ") because other variables' domains may become inconsistent with the new ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "D"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "D_i"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8333em",
                  verticalAlign: "-0.15em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0278em"
                  },
                  children: "D"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0278em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })]
            })
          })]
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeat"
        }), " until the queue is empty."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Return"
        }), " the updated CSP with reduced domains."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function AC-3(csp) returns CSP or failure\n    queue <- all directed arcs in csp\n    while queue is not empty do\n        (X_i, X_j) <- POP(queue)\n        if REVISE(csp, X_i, X_j) then\n            if D_i is empty then return failure\n            for each X_k in NEIGHBORS(X_i) - {X_j} do\n                add (X_k, X_i) to queue\n    return csp\n\nfunction REVISE(csp, X_i, X_j) returns boolean\n    revised <- false\n    for each x in D_i do\n        if no value y in D_j satisfies constraint (X_i, X_j) then\n            delete x from D_i\n            revised <- true\n    return revised\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run--ac-3-on-australia-map-3-colors",
      children: "Step-by-Step Dry Run — AC-3 on Australia Map (3 colors)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial Domains:"
      }), " WA:{R,G,B}, NT:{R,G,B}, SA:{R,G,B}, Q:{R,G,B}, NSW:{R,G,B}, V:{R,G,B}, T:{R,G,B}\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Arcs (all directed):"
      }), " (WA,NT), (NT,WA), (WA,SA), (SA,WA), (NT,SA), (SA,NT), (NT,Q), (Q,NT), (SA,Q), (Q,SA), (SA,NSW), (NSW,SA), (SA,V), (V,SA), (Q,NSW), (NSW,Q), (NSW,V), (V,NSW), (V,T), (T,V) — 20 directed arcs."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pop (X_i, X_j)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "D_i before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Revise?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "D_i after"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Requeue (X_k, X_i)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(WA, NT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{R,G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{R,G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(NT, WA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{R,G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{R,G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(NT, SA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{R,G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{R,G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(all non-restrictive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(T, V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{R,G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{R,G,B}"
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
        children: "Observation:"
      }), " With 3 colors on Australia, AC-3 does NOT prune any domain because every arc is already consistent (each value in D_i has some partner in D_j). AC-3 only becomes useful when domains are already partially reduced (e.g., after WA=R removes R from NT and SA). AC-3 is typically used as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "preprocessing"
      }), " before backtracking, or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "interleaved"
      }), " (MAC) during search."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — After WA=R (demonstration):"
      }), "\nLet WA=R be assigned, removing R from NT and SA domains:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NT:{G,B}, SA:{G,B}, all others still {R,G,B}"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pop (X_i, X_j)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "D_i before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Revise?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "D_i after"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Requeue"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(NT, SA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No — each has partner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(SA, NT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(NT, Q)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes — Q has R for G, but check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No removal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(Q, NT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{R,G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No — all values have partner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{R,G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(SA, Q)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(Q, SA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{R,G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes — if Q=R, SA has partner G or B; Q=G, SA has B; Q=B, SA has G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{R,G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-2",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def ac_3(csp):\n    \"\"\"Enforce arc consistency across all variables. Returns reduced-domain CSP or None.\"\"\"\n    queue = [(Xi, Xj) for (Xi, Xj) in csp.constraints]\n\n    while queue:\n        Xi, Xj = queue.pop(0)\n        if revise(csp, Xi, Xj):\n            if not csp.domains[Xi]:\n                return None  # Unsatisfiable\n            for Xk in [v for v in csp.variables if v != Xi and v != Xj\n                       and ((Xk := v, Xi) in csp.constraints or (Xi, Xk) in csp.constraints)]:\n                queue.append((Xk, Xi))\n    return csp\n\ndef revise(csp, Xi, Xj):\n    \"\"\"Remove values from D_i that have no consistent partner in D_j.\"\"\"\n    revised = False\n    to_remove = []\n    for x in csp.domains[Xi]:\n        consistent = False\n        for y in csp.domains[Xj]:\n            constraint_key = (Xi, Xj) if (Xi, Xj) in csp.constraints else (Xj, Xi)\n            fn = csp.constraints.get(constraint_key)\n            if fn and fn(x, y):\n                consistent = True\n                break\n        if not consistent:\n            to_remove.append(x)\n            revised = True\n    for x in to_remove:\n        csp.domains[Xi].remove(x)\n    return revised\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "d"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "3"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "O(n^2 d^3)"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.0641em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "3"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " worst-case, where ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "n"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.4306em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              })]
            })
          })]
        }), " = number of variables and ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "d"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              })]
            })
          })]
        }), " = maximum domain size. Each of ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "O(n^2)"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.0641em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " directed arcs can be added to the queue at most ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "d"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              })]
            })
          })]
        }), " times (each time a value is removed from ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "D"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "D_i"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8333em",
                  verticalAlign: "-0.15em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0278em"
                  },
                  children: "D"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0278em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })]
            })
          })]
        }), "). Each REVISE check costs ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "d"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "O(d^2)"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.0641em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " since we compare each ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "∈"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "D"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "x \\in D_i"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.5782em",
                  verticalAlign: "-0.0391em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "x"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "∈"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8333em",
                  verticalAlign: "-0.15em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0278em"
                  },
                  children: "D"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0278em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })]
            })]
          })]
        }), " against each ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "y"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "∈"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "D"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "y \\in D_j"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.7335em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "y"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "∈"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.9694em",
                  verticalAlign: "-0.2861em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0278em"
                  },
                  children: "D"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0278em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0572em"
                              },
                              children: "j"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.2861em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })]
            })]
          })]
        }), ". Therefore: ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "×"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "×"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "d"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "d"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "3"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "O(n^2) \\times O(d) \\times O(d^2) = O(n^2 d^3)"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.0641em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "×"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "×"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.0641em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.0641em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "3"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })]
          })]
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "O(n^2)"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.0641em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " for the arc queue plus ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "O(n d)"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " for domain storage."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Why AC-3 is not ", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "O"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "O(d^n)"
                  })]
                })
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "katex-html",
              "aria-hidden": "true",
              children: (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "1em",
                    verticalAlign: "-0.25em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0278em"
                  },
                  children: "O"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mopen",
                  children: "("
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "msupsub",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-t",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.6644em"
                          },
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.063em",
                              marginRight: "0.05em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "2.7em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "n"
                              })
                            })]
                          })
                        })
                      })
                    })
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mclose",
                  children: ")"
                })]
              })
            })]
          }), ":"]
        }), " Unlike search, AC-3 does not enumerate assignments — it removes provably impossible values from domains. Each value is removed at most once. The ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "d"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "3"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "d^3"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8141em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "3"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              })]
            })
          })]
        }), " factor comes from iterating over pairs of values in the revise step, not from branching."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Polynomial time (", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "O"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "d"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "3"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(n^2 d^3)"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.0641em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "n"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8141em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.063em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "2"
                                })
                              })]
                            })
                          })
                        })
                      })
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "d"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8141em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.063em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "3"
                                })
                              })]
                            })
                          })
                        })
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })
              })]
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only enforces arc consistency, not global consistency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminates impossible values before search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can pass on unsatisfiable CSPs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces backtracking search space significantly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No solution if domain empties, but non-empty domains != solution exists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement and understand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not handle n-ary constraints directly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can be interleaved with search (MAC)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Worst-case still expensive for large ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "d"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.6944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "d"
                  })]
                })
              })]
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No constraints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue empty, no revision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All domains unchanged"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "All arcs already consistent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass, no revision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-color Australia"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Domain fully emptied"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WA:{} after revision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dense constraints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arcs re-queued many times"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete graph constraint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trivially consistent arcs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No revision occurs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "X"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        mathvariant: "normal",
                        children: "≠"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "Y"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "X \\neq Y"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8889em",
                      verticalAlign: "-0.1944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0785em"
                    },
                    children: "X"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mrel",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mrel",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord vbox",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "thinbox",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "rlap",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "strut",
                              style: {
                                height: "0.8889em",
                                verticalAlign: "-0.1944em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "inner",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mrel",
                                  children: ""
                                })
                              })
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "fix"
                            })]
                          })
                        })
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mspace nobreak"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mrel",
                      children: "="
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.6833em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.2222em"
                    },
                    children: "Y"
                  })]
                })]
              })]
            }), ", D_X=D_Y={a,b}"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unary constraints via domain reduction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-processed before AC-3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D_WA={R,G} after removing B"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maintaining-arc-consistency-mac",
      children: "Maintaining Arc Consistency (MAC)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MAC interleaves backtracking search with arc consistency propagation. After each assignment, AC-3 is run on the remaining variables. MAC dramatically reduces the search space compared to forward checking."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function MAC(assignment, csp) returns solution or failure\n    if assignment is complete then return assignment\n    var <- SELECT-UNASSIGNED-VARIABLE(csp)\n    for each value in ORDER-DOMAIN-VALUES(var, csp) do\n        if value consistent with assignment then\n            saved <- copy of all domains\n            set var = value in assignment\n            if AC-3(csp) != failure then\n                result <- MAC(assignment, csp)\n                if result != failure then return result\n            restore domains from saved\n            remove var from assignment\n    return failure\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " The AC-3 algorithm only enforces arc consistency, not full global consistency. A CSP can pass AC-3 and still have no solution. Always use AC-3 as a preprocessing step, not as a complete solver."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "45-heuristics-mrv-and-lcv",
      children: "4.5 Heuristics: MRV and LCV"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--emergency-room-triage",
      children: "Real-World Analogy — Emergency Room Triage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ER doctor has 20 patients (variables) and limited resources (domains). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MRV (Minimum Remaining Values)"
      }), " says: treat the patient with the fewest treatment options first — the one with a rare blood type or unique allergy — because if you delay them, they may become unsolvable. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LCV (Least Constraining Value)"
      }), " says: when deciding which treatment to give a patient, choose the one that leaves the most resources for other patients — use the common blood type first, save the rare one."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "minimum-remaining-values-mrv-heuristic",
      children: "Minimum Remaining Values (MRV) Heuristic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Select the variable with the fewest legal values remaining in its domain. Also called \"most constrained variable\" or \"fail-first\" heuristic — it detects dead ends as early as possible."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps for MRV:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each unassigned variable, count the number of remaining legal values in its domain."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select the variable with the smallest count."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If multiple variables tie, break ties using the Degree Heuristic (the one involved in the most constraints with other unassigned variables)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it works:"
      }), " A variable with only 1 remaining value is forced — assign it immediately and either succeed or fail fast. Variables with large domains can wait."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "least-constraining-value-lcv-heuristic",
      children: "Least Constraining Value (LCV) Heuristic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given a chosen variable, select the value that rules out the fewest choices for neighboring unassigned variables."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps for LCV:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each candidate value of the selected variable, count how many domain values it eliminates from neighboring unassigned variables."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sort values in ascending order of eliminated values."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Try values in that order first."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MRV vs LCV — Complementarity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "MRV"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "LCV"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Applies to"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Variable ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Value ordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Goal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Fail fast — minimize subtree size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Succeed fast — find solution early"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Choose most constrained variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Choose least constraining value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Effect on search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Reduces branching factor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Finds solution within chosen branch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tie-breaker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Degree heuristic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-3",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def select_unassigned_variable_mrv(csp, assignment):\n    remaining = [v for v in csp.variables if v not in assignment]\n    # Count remaining domain values\n    min_count = float('inf')\n    selected = None\n    for v in remaining:\n        count = len(csp.domains[v])\n        if count < min_count:\n            min_count = count\n            selected = v\n    # Tie-break with degree heuristic\n    candidates = [v for v in remaining if len(csp.domains[v]) == min_count]\n    if len(candidates) > 1:\n        best_degree = -1\n        for v in candidates:\n            degree = sum(1 for neighbor in remaining if neighbor != v\n                        and ((v, neighbor) in csp.constraints or (neighbor, v) in csp.constraints))\n            if degree > best_degree:\n                best_degree = degree\n                selected = v\n    return selected\n\ndef order_domain_values_lcv(csp, var, assignment):\n    remaining = [v for v in csp.variables if v not in assignment and v != var]\n    def count_eliminations(value):\n        eliminations = 0\n        for neighbor in remaining:\n            if (var, neighbor) in csp.constraints:\n                for v2 in csp.domains[neighbor]:\n                    if not csp.constraints[(var, neighbor)](value, v2):\n                        eliminations += 1\n            elif (neighbor, var) in csp.constraints:\n                for v2 in csp.domains[neighbor]:\n                    if not csp.constraints[(neighbor, var)](v2, value):\n                        eliminations += 1\n        return eliminations\n    return sorted(csp.domains[var], key=count_eliminations)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--mrv-on-4-queens",
      children: "Dry Run — MRV on 4-Queens"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Variables:"
      }), " Q1 (column 1), Q2 (column 2), Q3 (column 3), Q4 (column 4)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Domains:"
      }), " Each queen can be in row {1, 2, 3, 4}\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      }), " No two queens share the same row or diagonal."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Assignment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Remaining vars and domain sizes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "MRV picks"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Q1:4, Q2:4, Q3:4, Q4:4 — all equal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Q1 (tie)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Degree tie, pick first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{Q1=1}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Q2:{3,4}(2), Q3:{2,4}(2), Q4:{2,3,4}(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Q2 or Q3 (2 each)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Q2 has min values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{Q1=1, Q2=3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Q3:{2,4}(2), Q4:{}(0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Q4 (0 — forced fail)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "MRV detects dead end"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{Q1=1, Q2=4}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Q3:{2}(1), Q4:{3}(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Q3 or Q4 (1 each)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Ties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{Q1=1, Q2=4, Q3=2}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Q4:{3}(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Q4 forced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Solution found"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without MRV, backtracking might try Q1=1, Q2=1 (fail), Q2=2 (fail), Q2=3... MRV prunes aggressively."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-impact",
      children: "Complexity Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MRV:"
        }), " Reduces branching factor at the top of the search tree, where pruning has the most impact. ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "O(n)"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " per selection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LCV:"
        }), " ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "d"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "O(n d^2)"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.0641em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " per value ordering — evaluating each value against all neighbors and their domains. The overhead is worthwhile when the search tree is deep."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Combined effect:"
        }), " MRV + LCV + forward checking can reduce search tree size by 10,000x on hard CSPs like N-Queens (N=50+)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-3",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Heuristic"
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
              children: "MRV"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detects forced variables and dead ends early; reduces overall search tree size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead of counting domains per selection; tie-breaking may be needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LCV"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increases chance of early solution; pairs well with forward checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expensive to compute — must check all values against all neighbors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Degree Heuristic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Effective tie-breaker; simple to compute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only useful when MRV ties; ignores domain sizes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-for-mrvlcv",
      children: "Edge Cases for MRV/LCV"
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
              children: "All domains equal size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MRV falls back to degree or arbitrary tie-break"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MRV picks a variable with 1 value"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forced assignment — effectively no branching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LCV all values equally constraining"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Falls back to default ordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No unassigned neighbors"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LCV has no effect — all values score 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Domain size 0 for multiple vars"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any selection leads to immediate backtrack"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "46-csp-structure",
      children: "4.6 CSP Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "461-tree-structured-csps",
      children: "4.6.1 Tree-Structured CSPs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A CSP whose constraint graph is a tree can be solved in ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "O"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "O(n d^2)"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1.0641em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "O"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8141em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.063em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "2"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })
        })]
      }), " time, where ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "d"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            })]
          })
        })]
      }), " is the maximum domain size. The algorithm:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose a root variable and order variables from root to leaves (topological order)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply backward arc consistency: for ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "j"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "j"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.854em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0572em"
                },
                children: "j"
              })]
            })
          })]
        }), " from ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "n"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.4306em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              })]
            })
          })]
        }), " down to 2, enforce arc consistency between ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "X_j"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.9694em",
                  verticalAlign: "-0.2861em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0785em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0572em"
                              },
                              children: "j"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.2861em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })]
            })
          })]
        }), " and its parent ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "X"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "X_i"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8333em",
                  verticalAlign: "-0.15em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0785em"
                  },
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0785em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })]
            })
          })]
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign in forward order: no backtracking required."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why tree-structured CSPs are easy:"
      }), " In a tree, once backward arc consistency is enforced, assigning the root forces assignments for every descendant without conflict. No backtracking is ever needed because arc consistency guarantees that for every parent value, a legal child value exists."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "462-reducing-to-tree-structure",
      children: "4.6.2 Reducing to Tree Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If the constraint graph has small treewidth, the CSP can be solved efficiently:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cutset conditioning:"
        }), " Instantiate a subset of variables (the cycle cutset) such that the remaining CSP is tree-structured."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tree decomposition:"
        }), " Partition variables into overlapping clusters (bags) such that the graph of clusters forms a tree. The treewidth is the size of the largest bag minus 1."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "47-iterative-algorithms-for-csps",
      children: "4.7 Iterative Algorithms for CSPs"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "471-min-conflicts-heuristic",
      children: "4.7.1 Min-Conflicts Heuristic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Local search for CSPs: start with a random assignment, then repeatedly select a violated constraint and change the value of one of its variables to minimize the number of remaining conflicts."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function MIN-CONFLICTS(csp, max_steps) returns solution or failure\n    current <- random complete assignment of csp\n    for i = 1 to max_steps do\n        if current satisfies all constraints then return current\n        var <- randomly chosen conflicted variable\n        value <- value minimizing CONFLICTS(var, current, csp)\n        set var = value in current\n    return failure\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The min-conflicts heuristic is remarkably effective for problems such as ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "N"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "N"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6833em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.109em"
              },
              children: "N"
            })]
          })
        })]
      }), "-Queens and SAT."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "48-interview-corner",
      children: "4.8 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-can-you-formulate-map-coloring-as-a-csp",
      children: "Q1: Can you formulate Map Coloring as a CSP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Yes. Variables are the regions (territories, countries). Domains are the available colors (e.g., {red, green, blue}). Constraints are binary inequalities between every pair of adjacent regions: ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "A"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "j"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "c"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "A"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "B"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "⇒"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "C"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "A"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  mathvariant: "normal",
                  children: "≠"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "C"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "r"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "B"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "Adjacent(A, B) \\Rightarrow Color(A) \\neq Color(B)"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "A"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0572em"
              },
              children: "j"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "ce"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "A"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0502em"
              },
              children: "B"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "⇒"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0715em"
              },
              children: "C"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "o"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "or"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "A"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mrel",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord vbox",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "thinbox",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "rlap",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "strut",
                        style: {
                          height: "0.8889em",
                          verticalAlign: "-0.1944em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "inner",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "mord",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mrel",
                            children: ""
                          })
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "fix"
                      })]
                    })
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace nobreak"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0715em"
              },
              children: "C"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "o"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0197em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "or"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0502em"
              },
              children: "B"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })]
        })]
      }), ". The constraint graph mirrors the map's adjacency graph. This is a canonical CSP example because it maps cleanly to variables, domains, and binary constraints, and illustrates how constraint graphs capture problem structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-how-would-you-solve-n-queens-using-csp",
      children: "Q2: How would you solve N-Queens using CSP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Variables are the N queens, one per column: ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "Q"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "Q"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "…"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "Q"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "N"
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "Q_1, Q_2, \\ldots, Q_N"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8778em",
                verticalAlign: "-0.1944em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "Q"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3011em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "1"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "Q"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3011em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "2"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "minner",
              children: "…"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "Q"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3283em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.109em"
                            },
                            children: "N"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), ". Each variable's domain is the row number ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "{"
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "1"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "2"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "…"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "N"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "}"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\{1, 2, \\ldots, N\\}"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "{"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "1"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "2"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "minner",
              children: "…"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.109em"
              },
              children: "N"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: "}"
            })]
          })
        })]
      }), ". Constraints:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Row constraint (binary):"
        }), " ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "Q"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    mathvariant: "normal",
                    children: "≠"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "Q"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "Q_i \\neq Q_j"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "Q"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "0em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mrel",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord vbox",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "thinbox",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "rlap",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "strut",
                          style: {
                            height: "0.8889em",
                            verticalAlign: "-0.1944em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "inner",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: ""
                            })
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "fix"
                        })]
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace nobreak"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.9694em",
                  verticalAlign: "-0.2861em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "Q"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "0em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0572em"
                              },
                              children: "j"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.2861em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })]
            })]
          })]
        }), " for all ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    mathvariant: "normal",
                    children: "≠"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "j"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "i \\neq j"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mrel",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord vbox",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "thinbox",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "rlap",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "strut",
                          style: {
                            height: "0.8889em",
                            verticalAlign: "-0.1944em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "inner",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: ""
                            })
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "fix"
                        })]
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace nobreak"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.854em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0572em"
                },
                children: "j"
              })]
            })]
          })]
        }), " — no two queens share a row."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Diagonal constraint (binary):"
        }), " ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "∣"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "Q"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "Q"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "∣"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    mathvariant: "normal",
                    children: "≠"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "∣"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "j"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "∣"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "|Q_i - Q_j| \\neq |i - j|"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "∣"
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "Q"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "0em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.0361em",
                  verticalAlign: "-0.2861em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "Q"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "0em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0572em"
                              },
                              children: "j"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.2861em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "∣"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mrel",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord vbox",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "thinbox",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "rlap",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "strut",
                          style: {
                            height: "0.8889em",
                            verticalAlign: "-0.1944em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "inner",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: ""
                            })
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "fix"
                        })]
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace nobreak"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "∣"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0572em"
                },
                children: "j"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "∣"
              })]
            })]
          })]
        }), " for all ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    mathvariant: "normal",
                    children: "≠"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "j"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "i \\neq j"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mrel",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord vbox",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "thinbox",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "rlap",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "strut",
                          style: {
                            height: "0.8889em",
                            verticalAlign: "-0.1944em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "inner",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: ""
                            })
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "fix"
                        })]
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace nobreak"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.854em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0572em"
                },
                children: "j"
              })]
            })]
          })]
        }), " — no two queens share a diagonal.\nThis gives ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "×"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mo, {
                      fence: "true",
                      children: "("
                    }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                      linethickness: "0px",
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "N"
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "2"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      fence: "true",
                      children: ")"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "2 \\times \\binom{N}{2}"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.7278em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "2"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "×"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.2723em",
                  verticalAlign: "-0.35em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mopen delimcenter",
                  style: {
                    top: "0em"
                  },
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "delimsizing size1",
                    children: "("
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mfrac",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.9223em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.355em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "2"
                              })
                            })
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.144em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.109em"
                                },
                                children: "N"
                              })
                            })
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.345em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mclose delimcenter",
                  style: {
                    top: "0em"
                  },
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "delimsizing size1",
                    children: ")"
                  })
                })]
              })]
            })]
          })]
        }), " binary constraints. With forward checking and MRV, N-Queens up to N=1000 can be solved in seconds."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-is-sudoku-a-csp",
      children: "Q3: How is Sudoku a CSP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Sudoku is a CSP with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variables:"
        }), " 81 cells ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "C"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "l"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "l"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "…"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "C"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "l"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "l"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mn, {
                        children: "9"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "9"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\{Cell_{1,1}, \\ldots, Cell_{9,9}\\}"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.0361em",
                  verticalAlign: "-0.2861em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "{"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0715em"
                },
                children: "C"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "e"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0197em"
                },
                children: "l"
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0197em"
                  },
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3011em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0197em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "1"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mpunct mtight",
                                children: ","
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "1"
                              })]
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.2861em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "minner",
                children: "…"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0715em"
                },
                children: "C"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "e"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0197em"
                },
                children: "l"
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0197em"
                  },
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3011em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0197em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "9"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mpunct mtight",
                                children: ","
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "9"
                              })]
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.2861em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: "}"
              })]
            })
          })]
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Domains:"
        }), " For pre-filled cells, ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "D"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "j"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "g"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "v"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "_"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "v"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "a"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "l"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "u"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "D_{i,j} = \\{given\\_value\\}"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.9694em",
                  verticalAlign: "-0.2861em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0278em"
                  },
                  children: "D"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0278em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mpunct mtight",
                                children: ","
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.0572em"
                                },
                                children: "j"
                              })]
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.2861em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.06em",
                  verticalAlign: "-0.31em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "{"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "g"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "v"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "e"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                style: {
                  marginRight: "0.0278em"
                },
                children: "_"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "v"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "a"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0197em"
                },
                children: "l"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "u"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "e"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: "}"
              })]
            })]
          })]
        }), " (singleton). For empty cells, ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "D"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "j"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "…"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "9"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "D_{i,j} = \\{1, \\ldots, 9\\}"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.9694em",
                  verticalAlign: "-0.2861em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0278em"
                  },
                  children: "D"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0278em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mpunct mtight",
                                children: ","
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.0572em"
                                },
                                children: "j"
                              })]
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.2861em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "{"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "minner",
                children: "…"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "9"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: "}"
              })]
            })]
          })]
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constraints (3 sets of Alldifferent):"
        }), " Each row (9), each column (9), each 3x3 box (9) — 27 global ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "l"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "l"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "f"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "f"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "r"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "t"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "Alldifferent"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "A"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0197em"
                },
                children: "l"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0197em"
                },
                children: "l"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1076em"
                },
                children: "f"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1076em"
                },
                children: "f"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "er"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "e"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "t"
              })]
            })
          })]
        }), " constraints total."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solving:"
        }), " AC-3 preprocesses heavily — after arc consistency, most cells have domains of 2-5 values. Backtracking with MRV then quickly finds the solution."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-ac-3-vs-backtracking--which-is-better",
      children: "Q4: AC-3 vs Backtracking — which is better?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " They are complementary, not competing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AC-3"
        }), " is a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "preprocessing/inference"
        }), " technique that runs in polynomial time ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "d"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "3"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "O(n^2 d^3)"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.0641em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "3"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), ". It eliminates values that cannot participate in any solution but does not find a solution itself (it may return with all domains non-empty even when no solution exists)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backtracking"
        }), " is a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "search"
        }), " technique that finds the actual assignment. It is complete but worst-case exponential ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "d"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "O(d^n)"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.6644em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "n"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Best practice:"
        }), " Run AC-3 as preprocessing to prune domains, then run backtracking with MRV and forward checking to find the solution. This hybrid (AC-3 + Backtracking + MRV + FC) is the standard approach for medium-sized CSPs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-is-the-complexity-of-ac-3",
      children: "Q5: What is the complexity of AC-3?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "O"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "3"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "O(n^2 d^3)"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1.0641em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "O"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8141em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.063em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "2"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8141em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.063em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "3"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })
        })]
      }), " worst-case time, where ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "n"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.4306em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            })]
          })
        })]
      }), " is the number of variables and ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "d"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            })]
          })
        })]
      }), " the maximum domain size. Explanation: There are ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "O"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "O(n^2)"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1.0641em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "O"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8141em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.063em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "2"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })
        })]
      }), " ordered arcs. Each arc can be added to the queue at most ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "d"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            })]
          })
        })]
      }), " times (once per value removed from ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "D"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "D_i"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8333em",
                verticalAlign: "-0.15em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "D"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.0278em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "i"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), "). Each REVISE operation takes ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "O"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "O(d^2)"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1.0641em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "O"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8141em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.063em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "2"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })
        })]
      }), " to check all pairs of values. Therefore, ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "×"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "×"
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "3"
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "n^2 \\times d \\times d^2 = n^2 d^3"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8974em",
                verticalAlign: "-0.0833em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8141em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.063em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "2"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mbin",
              children: "×"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.7778em",
                verticalAlign: "-0.0833em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mbin",
              children: "×"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8141em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8141em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.063em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "2"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.8141em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8141em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.063em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "2"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8141em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.063em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "3"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            })]
          })]
        })]
      }), ". Space is ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "O"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "O(n^2)"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1.0641em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "O"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8141em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.063em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "2"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })
        })]
      }), " for the queue."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-the-difference-between-forward-checking-and-ac-3",
      children: "Q6: What is the difference between forward checking and AC-3?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Forward checking is a 1-step lookahead applied after each assignment — it removes values from neighbors' domains that contradict the newly assigned value. AC-3 is a multi-step propagation that enforces arc consistency across all variables globally, recursively rechecking arcs when domains are revised. AC-3 is more powerful (detects more inconsistencies) but more expensive (", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "O"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "3"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "O(n^2 d^3)"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1.0641em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "O"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8141em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.063em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "2"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8141em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.063em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "3"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })
        })]
      }), " per invocation vs ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "O"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "O(n d^2)"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1.0641em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0278em"
              },
              children: "O"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8141em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.063em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "2"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })
        })]
      }), " per assignment for forward checking). MAC (Maintaining Arc Consistency) interleaves AC-3 with backtracking, combining the best of both."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How CSPs Are Used"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Typical Scale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "University timetabling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables = (course, room, time); constraints = room capacity, professor availability, no conflicts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "100-1000 vars"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sudoku solvers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "81 variables with Alldifferent constraints per row/col/box"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "81 vars, domain 1-9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Register allocation in compilers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables = program variables; domains = CPU registers; constraints = live-range non-overlap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "100-10000 vars"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Graph coloring (map coloring)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables = vertices; domains = colors; constraints = adjacent vertices differ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10-10^6 vertices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Job shop scheduling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables = job start times; domains = time slots; constraints = resource/machine sequencing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "50-500 jobs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cryptoarithmetic puzzles"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables = letters; domains = digits 0-9; constraints = arithmetic equation equality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "8-15 letters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NASA antenna scheduling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables = communication passes; domains = time windows; constraints = signal non-interference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "50-200 passes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Frequency assignment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables = radio transmitters; domains = frequencies; constraints = minimum frequency separation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "100-5000 transmitters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Roster scheduling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables = shift assignments; domains = employees; constraints = coverage, preferences, regulations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "20-200 employees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Circuit verification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables = signal values; domains = {0, 1, X}; constraints = Boolean gate equations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10^3-10^6 gates"
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
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Preprocessing?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Guarantee"
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
            children: "Backtracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(d^n) worst case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward Checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "On assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Domain filtering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(n²d²)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AC-3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes/Interleaved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Arc consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(n²d³)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Propagation+Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Interleaved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "More pruning than FC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "O(n²d³) per step"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Min-Conflicts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Iterative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Random start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Incomplete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Polynomial typically"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--csp-heuristics",
      children: "Quick Reference — CSP Heuristics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Heuristic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MRV (Minimum Remaining Values)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Variable ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose variable with fewest legal values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Degree Heuristic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Variable ordering (tie-break)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose variable in most constraints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LCV (Least Constraining Value)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Value ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose value leaving most options for neighbors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Min-Conflicts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Value selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose value minimizing constraint violations"
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
            children: "CSP Formulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backtracking Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AC-3 Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Min-Conflicts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tree Decomposition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✓"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What does the MRV heuristic select?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The variable with the most constraints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The variable with the fewest legal values remaining"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The value that rules out the fewest choices for neighbors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The variable with the largest domain"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) MRV selects the most constrained variable (fewest legal values) to minimize branching and detect dead ends early."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " The AC-3 algorithm enforces what type of consistency?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Node consistency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Arc consistency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Path consistency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) k-consistency"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) AC-3 enforces arc consistency between all variable pairs in a CSP."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " A tree-structured CSP can be solved in what time complexity?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) O(n²)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) O(n d²)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) O(d^n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) O(n log n)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Tree-structured CSPs are solvable in O(n d²) time — linear in the number of variables and quadratic in the domain size."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " Which technique combines backtracking search with AC-3 propagation after each assignment?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Forward checking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Min-conflicts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) MAC (Maintaining Arc Consistency)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Cutset conditioning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>C) MAC interleaves AC-3 with backtracking for the most aggressive pruning during search."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " In the worst case, AC-3 runs in:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) O(n²)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) O(n d)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) O(n² d³)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) O(d^n)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>C) O(n² d³) — n² arcs, each revised at most d times, each revision costing O(d²)."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "49-summary",
      children: "4.9 Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSPs provide a declarative problem representation that separates structure from search algorithm. Arc consistency, heuristic variable ordering, and structural decomposition enable efficient solution of problems that would be intractable under naive enumeration."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Takeaways:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CSPs = Variables + Domains + Constraints; solution = complete consistent assignment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backtracking = DFS with incremental constraint checking — complete but worst-case exponential"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forward checking prunes neighbor domains after each assignment — detects dead ends early"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["AC-3 enforces arc consistency globally in ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "d"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "3"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "O(n^2 d^3)"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.0641em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "3"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " — powerful preprocessing step"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MRV (fail-first) + LCV (succeed-first) drastically reduce search tree size"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tree-structured CSPs solve in ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "d"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "O(n d^2)"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.0641em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " — no backtracking needed"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Min-conflicts handles large CSPs via local search (incomplete but fast)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between forward checking and arc consistency. Why is MAC more powerful than forward checking?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the MRV heuristic. Why does it reduce search tree size compared to arbitrary variable ordering?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define treewidth. Why does a CSP with small treewidth admit efficient solution?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the guarantees of AC-3 vs backtracking. When would you use each?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why tree-structured CSPs require no backtracking after backward arc consistency."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Formulate the ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "N"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "N"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "N"
              })]
            })
          })]
        }), "-Queens problem as a CSP. Compare the search cost with and without forward checking for ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "8"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "N = 8"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "N"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6444em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "8"
              })]
            })]
          })]
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider a scheduling CSP with 10 jobs, each taking 1--5 time units, and resource constraints limiting concurrent jobs to 3. Formulate this problem and determine the minimum makespan using backtracking with MRV."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply AC-3 as preprocessing to a 9x9 Sudoku puzzle. Trace the domain reductions for 5 cells of your choice."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement AC-3 in Python. Apply it to the Australia map-coloring problem with 7 territories and 3 colors. Compare the number of nodes visited by backtracking search with and without AC-3 preprocessing."
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