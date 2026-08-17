"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[2533],{

/***/ 48294
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_artificial_intelligence_05_csp_md_d7a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-artificial-intelligence-05-csp-md-d7a.json
const site_docs_courses_artificial_intelligence_05_csp_md_d7a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/artificial-intelligence/05-csp","title":"Chapter 5: Constraint Satisfaction Problems","description":"Previous CSP | Next Game Playing and Adversarial Search","source":"@site/docs/courses/artificial-intelligence/05-csp.md","sourceDirName":"courses/artificial-intelligence","slug":"/artificial-intelligence/05-csp","permalink":"/ai-engineering-journey/artificial-intelligence/05-csp","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"05-csp","slug":"/artificial-intelligence/05-csp","title":"Chapter 5: Constraint Satisfaction Problems","sidebar_label":"Chapter 5: Constraint Satisfaction Problems","sidebar_position":8},"sidebar":"course-artificial-intelligence","previous":{"title":"Chapter 4: Constraint Satisfaction Problems","permalink":"/ai-engineering-journey/artificial-intelligence/04-csp"},"next":{"title":"Chapter 5: Game Playing and Adversarial Search","permalink":"/ai-engineering-journey/artificial-intelligence/05-game-playing"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/artificial-intelligence/05-csp.md


const frontMatter = {
	id: '05-csp',
	slug: '/artificial-intelligence/05-csp',
	title: 'Chapter 5: Constraint Satisfaction Problems',
	sidebar_label: 'Chapter 5: Constraint Satisfaction Problems',
	sidebar_position: 8
};
const contentTitle = 'Chapter 5: Constraint Satisfaction Problems';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why CSP Algorithms Matter",
  "id": "why-csp-algorithms-matter",
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
  "value": "1. Formal Definition of Constraint Satisfaction Problems",
  "id": "1-formal-definition-of-constraint-satisfaction-problems",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "Definition",
  "id": "definition",
  "level": 3
}, {
  "value": "Types of Constraints",
  "id": "types-of-constraints",
  "level": 3
}, {
  "value": "Types of CSPs",
  "id": "types-of-csps",
  "level": 3
}, {
  "value": "Example: Map Coloring as a CSP",
  "id": "example-map-coloring-as-a-csp",
  "level": 3
}, {
  "value": "Python: CSP Representation",
  "id": "python-csp-representation",
  "level": 3
}, {
  "value": "2. Backtracking Search with Heuristics",
  "id": "2-backtracking-search-with-heuristics",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 3
}, {
  "value": "Definition",
  "id": "definition-1",
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
  "value": "Step-by-Step Dry Run: Map Coloring (Plain Backtracking)",
  "id": "step-by-step-dry-run-map-coloring-plain-backtracking",
  "level": 3
}, {
  "value": "Variable Ordering Heuristics",
  "id": "variable-ordering-heuristics",
  "level": 3
}, {
  "value": "Value Ordering Heuristic",
  "id": "value-ordering-heuristic",
  "level": 3
}, {
  "value": "Python: Backtracking with MRV and LCV",
  "id": "python-backtracking-with-mrv-and-lcv",
  "level": 3
}, {
  "value": "Dry Run: With MRV Heuristic",
  "id": "dry-run-with-mrv-heuristic",
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
  "value": "3. Forward Checking",
  "id": "3-forward-checking",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 3
}, {
  "value": "Definition",
  "id": "definition-2",
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
  "value": "Step-by-Step Dry Run: Forward Checking on Map Coloring",
  "id": "step-by-step-dry-run-forward-checking-on-map-coloring",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation",
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
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 3
}, {
  "value": "4. Constraint Propagation &amp; AC-3 Algorithm",
  "id": "4-constraint-propagation--ac-3-algorithm",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 3
}, {
  "value": "Definition",
  "id": "definition-3",
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
  "value": "Step-by-Step Dry Run: AC-3 on X &lt; Y &lt; Z",
  "id": "step-by-step-dry-run-ac-3-on-x--y--z",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation-1",
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
  "value": "5. Min-Conflicts Algorithm (Local Search for CSPs)",
  "id": "5-min-conflicts-algorithm-local-search-for-csps",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 3
}, {
  "value": "Definition",
  "id": "definition-4",
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
  "value": "Step-by-Step Dry Run: 4-Queens",
  "id": "step-by-step-dry-run-4-queens",
  "level": 3
}, {
  "value": "Python Implementation",
  "id": "python-implementation-2",
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
  "value": "Backtracking vs Forward Checking vs AC-3",
  "id": "backtracking-vs-forward-checking-vs-ac-3",
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
  "value": "N-Queens Problem",
  "id": "n-queens-problem",
  "level": 3
}, {
  "value": "Sudoku Solver Design",
  "id": "sudoku-solver-design",
  "level": 3
}, {
  "value": "Map Coloring",
  "id": "map-coloring",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Case Study: Employee Shift Scheduling",
  "id": "case-study-employee-shift-scheduling",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — CSP Search &amp; Propagation",
  "id": "quick-reference--csp-search--propagation",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 3
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
    details: "details",
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
        id: "chapter-5-constraint-satisfaction-problems",
        children: "Chapter 5: Constraint Satisfaction Problems"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/artificial-intelligence/04-csp",
          children: "Chapter 4: CSP"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/artificial-intelligence/05-game-playing",
          children: "Chapter 5: Game Playing and Adversarial Search"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define a Constraint Satisfaction Problem (CSP) in terms of variables, domains, and constraints."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Formalize real-world problems (e.g., scheduling, map coloring) as CSPs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply backtracking search with MRV, Degree, and LCV heuristics for solving CSPs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement forward checking to prune domains after each assignment."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Utilize constraint propagation techniques like Arc Consistency (AC-3)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the Min-Conflicts local search algorithm for large-scale CSPs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare backtracking, forward checking, and AC-3 in terms of pruning power and runtime."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-csp-algorithms-matter",
      children: "Why CSP Algorithms Matter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You manage a hospital with 50 nurses, 3 shifts per day, 7 days per week. Each nurse has preferred shifts, qualification requirements (ICU, ER, general ward), contractual limits (max 5 night shifts per month), and you need minimum coverage per shift (3 ICU nurses, 8 total). Doing this manually takes hours, produces conflicts, and makes nurses unhappy. This is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "constraint satisfaction problem"
      }), " — CSP algorithms solve it systematically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSP algorithms explore assignments while using constraints to prune impossible options early. The same techniques schedule airline crews, solve Sudoku, assign conference rooms, configure computer systems, and plan Mars rover operations. Without them, these tasks require exponentially more brute-force computation."
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
            children: "Formal Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables X, domains D, constraints C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent, complete assignment, solution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backtracking Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS, MRV, Degree, LCV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chronological backtracking, fail-first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward Checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain pruning after assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Look-ahead, domain reduction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC-3, node/arc/path consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arc consistency, inference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Min-Conflicts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local search, random restart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repair, heuristic improvement"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[CSP Definition] --> B[Backtracking Search]\n    A --> C[Forward Checking]\n    A --> D[Constraint Propagation]\n    A --> E[Min-Conflicts]\n    B --> B1[MRV / Degree / LCV]\n    C --> C1[Domain Pruning After Assignment]\n    D --> D1[AC-3 Algorithm]\n    E --> E1[Random Restart Heuristic]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/artificial-intelligence/ch05-csp.png",
        alt: "CSP Advanced Topics"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-formal-definition-of-constraint-satisfaction-problems",
      children: "1. Formal Definition of Constraint Satisfaction Problems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Planning a wedding reception: you have tables, guests, and vendors (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "variables"
      }), "), possible seating assignments and available dates (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "domains"
      }), "), and rules like \"Aunt Carol and Uncle Bob must not sit together\" (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "binary constraint"
      }), "), \"vegetarians need the veggie menu\" (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "unary constraint"
      }), "), \"max 10 per table\" (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "global constraint"
      }), "). A CSP solver finds an arrangement satisfying ALL rules without trial-and-error guessing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraint Satisfaction Problem (CSP)"
      }), " is a triple $(X, D, C)$:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "$X = {X_1, X_2, ..., X_n}$"
        }), " — a finite set of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "variables"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "$D = {D_1, D_2, ..., D_n}$"
        }), " — a finite set of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "domains"
        }), " (each $D_i$ lists the possible values for $X_i$)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "$C = {C_1, C_2, ..., C_m}$"
        }), " — a finite set of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "constraints"
        }), " restricting permissible value combinations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "state"
      }), " is an assignment of values to some or all variables. An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "assignment"
      }), " is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistent"
        }), " — if it does not violate any constraints"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complete"
        }), " — if every variable is assigned a value"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), " — if it is both consistent and complete"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types-of-constraints",
      children: "Types of Constraints"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Constraint Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restricts a single variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$WA \\neq Red$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Binary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relates two variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$WA \\neq NT$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ternary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relates three variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$A + B = C$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Global"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Involves an arbitrary subset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AllDifferent($A, B, C, D$)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types-of-csps",
      children: "Types of CSPs"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Domain Nature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Boolean CSP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each $D_i = {True, False}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAT (satisfiability) problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Finite-Domain CSP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$D_i$ has finite size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map coloring, Sudoku"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Infinite-Domain CSP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$D_i$ is infinite (e.g., integers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear programming, scheduling"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-map-coloring-as-a-csp",
      children: "Example: Map Coloring as a CSP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Color regions of Australia {WA, NT, Q, NSW, V, SA, T} with {Red, Green, Blue} such that adjacent regions differ."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Variables:   WA, NT, Q, NSW, V, SA, T\nDomains:     {Red, Green, Blue} for all\nConstraints: WA ≠ NT, WA ≠ SA, NT ≠ SA, NT ≠ Q,\n             SA ≠ Q, SA ≠ NSW, SA ≠ V, Q ≠ NSW, NSW ≠ V\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-csp-representation",
      children: "Python: CSP Representation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def create_australia_csp():\n    variables = ['WA', 'NT', 'Q', 'NSW', 'V', 'SA', 'T']\n    domains = {v: ['R', 'G', 'B'] for v in variables}\n    constraints = {\n        'WA': [('NT', lambda a, b: a != b), ('SA', lambda a, b: a != b)],\n        'NT': [('WA', lambda a, b: a != b), ('SA', lambda a, b: a != b),\n               ('Q', lambda a, b: a != b)],\n        'SA': [('WA', lambda a, b: a != b), ('NT', lambda a, b: a != b),\n               ('Q', lambda a, b: a != b), ('NSW', lambda a, b: a != b),\n               ('V', lambda a, b: a != b)],\n        'Q': [('NT', lambda a, b: a != b), ('SA', lambda a, b: a != b),\n              ('NSW', lambda a, b: a != b)],\n        'NSW': [('Q', lambda a, b: a != b), ('SA', lambda a, b: a != b),\n                ('V', lambda a, b: a != b)],\n        'V': [('SA', lambda a, b: a != b), ('NSW', lambda a, b: a != b)],\n        'T': []\n    }\n    return {'variables': variables, 'domains': domains, 'constraints': constraints}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-backtracking-search-with-heuristics",
      children: "2. Backtracking Search with Heuristics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Planning a road trip through 10 cities. You pick a first city, then the next, and so on. When you hit a dead end (no unvisited city reachable from your current one), you don't start over — backtrack to the previous city and try a different route. Backtracking for CSPs works identically: assign one variable at a time, and on conflict, undo the last assignment and try the next value."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-1",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Backtracking search"
      }), " is a depth-first search specialized for CSPs. It incrementally extends partial assignments. When a constraint violation is detected, it chronologically backtracks to the most recent decision point and tries an alternative value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check completeness:"
        }), " If all variables are assigned, return the current assignment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Select variable:"
        }), " Pick an unassigned variable (optionally using MRV or Degree heuristics)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Order values:"
        }), " Choose an ordering for values (optionally using LCV heuristic)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Try assignment:"
        }), " For each value in order, check consistency with current assignments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recurse:"
        }), " If consistent, assign the value and recurse."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backtrack on failure:"
        }), " If recursion returns failure, undo assignment and try next value."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Return failure:"
        }), " If no value works, return failure (backtrack to previous variable)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: BacktrackingSearch(assignment, csp)\n1.  IF assignment is complete THEN\n2.      RETURN assignment\n3.  var ← SELECT-UNASSIGNED-VARIABLE(csp, assignment)\n4.  FOR EACH value in ORDER-DOMAIN-VALUES(csp, var, assignment):\n5.      IF value IS CONSISTENT WITH assignment THEN\n6.          Add {var = value} to assignment\n7.          result ← BacktrackingSearch(assignment, csp)\n8.          IF result ≠ failure THEN\n9.              RETURN result\n10.         Remove {var = value} from assignment\n11. RETURN failure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-map-coloring-plain-backtracking",
      children: "Step-by-Step Dry Run: Map Coloring (Plain Backtracking)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Color WA, NT, SA with {R, G, B}, constraints: WA≠NT, WA≠SA, NT≠SA.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Order:"
      }), " WA → NT → SA. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Values:"
      }), " R → G → B."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Var"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Consistent?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Assigned State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ (first var)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{WA=R}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assign, recurse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗ (WA=R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ (R≠G)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{WA=R, NT=G}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assign, recurse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗ (WA=R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗ (NT=G)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ (R≠B, G≠B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{WA=R, NT=G, SA=B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Solution!"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " WA=R, NT=G, SA=B. Only 3 assignments + 3 rejections = 6 attempts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "variable-ordering-heuristics",
      children: "Variable Ordering Heuristics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Heuristic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MRV"
            }), " (Minimum Remaining Values)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pick variable with smallest domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Fail-first\" — detects dead ends fastest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Degree"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pick variable with most constraints on ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "unassigned"
            }), " neighbors"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breaks MRV ties; reduces future branching"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "value-ordering-heuristic",
      children: "Value Ordering Heuristic"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Heuristic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "LCV"
            }), " (Least Constraining Value)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pick value that rules out fewest choices for neighbors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Succeed-first\" — keeps maximum flexibility"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-backtracking-with-mrv-and-lcv",
      children: "Python: Backtracking with MRV and LCV"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def is_consistent(var, value, assignment, constraints):\n    for neighbor, constraint_fn in constraints[var]:\n        if neighbor in assignment:\n            if not constraint_fn(value, assignment[neighbor]):\n                return False\n    return True\n\ndef backtrack(assignment, csp):\n    if len(assignment) == len(csp['variables']):\n        return assignment\n\n    var = select_mrv(csp, assignment)\n    for value in order_lcv(var, csp, assignment):\n        if is_consistent(var, value, assignment, csp['constraints']):\n            assignment[var] = value\n            result = backtrack(assignment, csp)\n            if result is not None:\n                return result\n            del assignment[var]\n    return None\n\ndef select_mrv(csp, assignment):\n    unassigned = [v for v in csp['variables'] if v not in assignment]\n    return min(unassigned, key=lambda v: len(csp['domains'][v]))\n\ndef order_lcv(var, csp, assignment):\n    \"\"\"Sort values by how few neighbor values they rule out.\"\"\"\n    def count_restrictions(value):\n        count = 0\n        for neighbor, fn in csp['constraints'][var]:\n            if neighbor not in assignment:\n                for nv in csp['domains'][neighbor]:\n                    if not fn(value, nv):\n                        count += 1\n        return count\n    return sorted(csp['domains'][var], key=count_restrictions)\n\n# Solve Australia\naustralia = create_australia_csp()\nsolution = backtrack({}, australia)\nprint(solution)\n# {'WA': 'R', 'NT': 'G', 'Q': 'B', 'NSW': 'R', 'V': 'G', 'SA': 'B', 'T': 'R'}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-with-mrv-heuristic",
      children: "Dry Run: With MRV Heuristic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Same problem, but MRV selects NT first (SA has degree 2 vs NT's degree 2 vs WA's degree 1 — degree tie-breaker picks NT)."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MRV Choice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Assign"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Domains After Forward Pruning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Backtrack?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NT (degree tie-break)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NT=R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WA:{G,B}, SA:{G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WA or SA (tie, degree: SA=2, WA=1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SA=G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WA:{B} (G removed by SA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WA (only choice)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WA=B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ Solution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Only 3 assignment attempts — no backtracking at all. MRV + Degree cut the search tree from 6 attempts to 3."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Worst"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O($d^n$)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No constraints; all d values for each of n variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Average (with heuristics)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O($d^c$) where $c$ is a small constant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good heuristics keep the effective branching factor low"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O($d^n$)?"
      }), " In a fully disconnected CSP, every variable independently takes any of d values. With n variables, the full search tree has $d^n$ leaves. Backtracking is a complete DFS — worst case visits every leaf."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(n) space?"
      }), " Only the current path down the recursion tree is stored, never the full search tree. Maximum recursion depth = n."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "Complete — guaranteed to find solution if one exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential worst-case O($d^n$)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory-efficient (O(n) space)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chronological backtracking causes thrashing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No look-ahead; detects failures late"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MRV + LCV heuristics dramatically prune search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uninformed value ordering wastes effort"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No solution"
        }), " — explores entire tree, returns None."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty domain"
        }), " — MRV selects it immediately, fails instantly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single variable"
        }), " — returns first domain value."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All-different constraints only"
        }), " — can use specialized algorithms."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tie-breaking"
        }), " — MRV ties resolved by Degree heuristic."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-forward-checking",
      children: "3. Forward Checking"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You're assigning conference rooms to meetings. When you book Room A for 10 AM, you immediately cross it off the availability list for every other meeting that overlaps with 10 AM. You don't wait to discover the conflict later — you prune in advance. This is forward checking."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-2",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Forward checking"
      }), " is a look-ahead technique that, after assigning a value to a variable, prunes the domains of all unassigned variables constrained by it. If any domain becomes empty, the assignment is abandoned immediately — saving exponentially deeper search."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-1",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign value $v$ to variable $X_i$."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each unassigned $X_j$ sharing a constraint with $X_i$:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Remove from $D_j$ all values inconsistent with $X_i = v$."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If $D_j$ becomes empty → backtrack immediately."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recurse with the reduced domains."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On backtrack, restore all pruned values."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: ForwardChecking(assignment, csp)\n1.  IF assignment complete THEN RETURN assignment\n2.  var ← SELECT-UNASSIGNED-VARIABLE(csp, assignment)\n3.  FOR EACH value in ORDER-DOMAIN-VALUES(csp, var, assignment):\n4.      IF value IS CONSISTENT THEN\n5.          Add {var = value} to assignment\n6.          domains_backup ← COPY(csp.domains)\n7.          IF FORWARD-PRUNE(csp, var) ≠ failure THEN\n8.              result ← ForwardChecking(assignment, csp)\n9.              IF result ≠ failure THEN RETURN result\n10.         RESTORE csp.domains from domains_backup\n11.         Remove {var = value} from assignment\n12. RETURN failure\n\nAlgorithm: FORWARD-PRUNE(csp, var)\n1. FOR EACH unassigned Xj in neighbors(var):\n2.     FOR EACH v in D_j:\n3.         IF no value in D_var supports v THEN\n4.             Remove v from D_j\n5.             IF D_j empty THEN RETURN failure\n6. RETURN success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-forward-checking-on-map-coloring",
      children: "Step-by-Step Dry Run: Forward Checking on Map Coloring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " WA, NT, SA with {R, G, B}, constraints: WA≠NT, WA≠SA, NT≠SA."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WA Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NT Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SA Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Note"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{R,G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{R,G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{R,G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All domains full"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WA=R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "R"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{G,B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward check: WA=R → NT≠R, SA≠R"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NT=G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "R"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "G"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward check: NT=G → SA≠G; SA={B}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SA=B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "R"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "G"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Solution"
            }), " ✓"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "No backtracking needed."
      }), " Forward checking pruned SA's domain to a single value {B} before we reached it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def forward_checking(assignment, csp):\n    if len(assignment) == len(csp['variables']):\n        return assignment\n\n    var = select_mrv(csp, assignment)\n    for value in csp['domains'][var]:\n        if is_consistent(var, value, assignment, csp['constraints']):\n            assignment[var] = value\n            saved_domains = {v: list(csp['domains'][v]) for v in csp['variables']}\n\n            if forward_prune(var, csp, assignment):\n                result = forward_checking(assignment, csp)\n                if result is not None:\n                    return result\n\n            csp['domains'] = saved_domains\n            del assignment[var]\n    return None\n\ndef forward_prune(var, csp, assignment):\n    \"\"\"Prune domains of unassigned neighbors of var.\"\"\"\n    for neighbor, constraint_fn in csp['constraints'][var]:\n        if neighbor not in assignment:\n            new_domain = []\n            for val in csp['domains'][neighbor]:\n                if constraint_fn(assignment[var], val):\n                    new_domain.append(val)\n            if not new_domain:\n                return False  # Domain wipeout → backtrack\n            csp['domains'][neighbor] = new_domain\n    return True\n\nsolution = forward_checking({}, create_australia_csp())\nprint(solution)\n# {'WA': 'R', 'NT': 'G', 'Q': 'B', 'NSW': 'R', 'V': 'G', 'SA': 'B', 'T': 'R'}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time per assignment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O($e \\cdot d$)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$e$ = edges from assigned var, $d$ = domain size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O($n \\cdot d$)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain snapshots at each recursion level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total worst-case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O($d^n$)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Still exponential, but constant factor much better than backtracking"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why forward checking is still exponential:"
      }), " It only looks one step ahead — constraints involving the just-assigned variable. It doesn't propagate through chains (A→B→C). AC-3 handles that."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "Detects dead ends earlier than plain backtracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher per-node overhead — scans all neighbor domains"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement — one extra pruning loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only prunes one step ahead; misses indirect conflicts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminates many recursive calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain snapshots consume extra memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminates backtracking on easy problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not detect all inconsistencies (weak pruning)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Domain wipeout"
        }), " — triggers immediate backtrack, saving deep exploration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No constraints"
        }), " — forward checking does nothing; no pruning."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dense graph"
        }), " — many neighbors means more pruning but also more work."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Large domains"
        }), " — pruning overhead scales with domain size."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-constraint-propagation--ac-3-algorithm",
      children: "4. Constraint Propagation & AC-3 Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You're planning a dinner party menu. You decide to serve salmon. This propagates: salmon → needs white wine → guest Bob is allergic to sulfites in white wine → Bob needs a different main course. One decision triggers a chain reaction through multiple constraints. This is exactly how ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "arc consistency"
      }), " propagates constraints through the variable network."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-3",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraint propagation"
      }), " uses constraints to reduce variable domains before (and during) search. The most popular algorithm is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AC-3 (Arc Consistency algorithm 3)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "arc"
      }), " $(X_i, X_j)$ is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "arc-consistent"
      }), " if for every value $a$ in $D_i$, there exists some value $b$ in $D_j$ satisfying the binary constraint between $X_i$ and $X_j$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AC-3 makes the entire CSP arc-consistent by iteratively processing arcs and propagating domain reductions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-2",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize a queue with all directed arcs $(X_i, X_j)$ in the constraint graph."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While queue is not empty:\na. Pop arc $(X_i, X_j)$.\nb. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Revise:"
        }), " remove values from $D_i$ with no supporting value in $D_j$.\nc. If $D_i$ changed:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If $D_i$ is empty → return failure."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add all arcs $(X_k, X_i)$ back to queue (where $X_k \\neq X_j$)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return success (all arcs consistent)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: AC-3(csp)\n1.  queue ← {(Xi, Xj) | constraint between Xi and Xj, direction both ways}\n2.  WHILE queue ≠ ∅:\n3.      (Xi, Xj) ← POP(queue)\n4.      IF REVISE(csp, Xi, Xj) THEN\n5.          IF csp.domains[Xi] = ∅ THEN\n6.              RETURN failure\n7.          FOR EACH Xk in neighbors(Xi) \\ {Xj}:\n8.              queue ← queue ∪ {(Xk, Xi)}\n9.  RETURN success\n\nAlgorithm: REVISE(csp, Xi, Xj)\n1.  revised ← false\n2.  FOR EACH a in csp.domains[Xi]:\n3.      IF no b in csp.domains[Xj] satisfies constraint(Xi, Xj) THEN\n4.          Remove a from csp.domains[Xi]\n5.          revised ← true\n6.  RETURN revised\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-ac-3-on-x--y--z",
      children: "Step-by-Step Dry Run: AC-3 on X < Y < Z"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " $X, Y, Z \\in {1,2,3}$ with $X < Y$ and $Y < Z$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial queue:"
      }), " (X,Y), (Y,X), (Y,Z), (Z,Y)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pop Arc"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Revise?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Removed Values"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Domains After"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Queue Additions"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(X,Y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X=3 (no Y > 3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X:{1,2} Y:{1,2,3} Z:{1,2,3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(neighbors of X: none)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Y,X)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y=1 (no X < 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X:{1,2} Y:{2,3} Z:{1,2,3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(neighbors of Y: Z) → (Z,Y)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Y,Z)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y=3 (no Z > 3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X:{1,2} Y:{2} Z:{1,2,3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(neighbors of Y: X) → (X,Y)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(Z,Y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Z=1,2 (no Y < 1 or <2? Y=2, so need Z>2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X:{1,2} Y:{2} Z:{3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(neighbors of Z: none)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(X,Y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X=2 (no Y > 2? Y=2, 2<2 false)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X:{1} Y:{2} Z:{3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(neighbors of X: none)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final:"
      }), " X={1}, Y={2}, Z={3}. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution found by propagation alone — no search needed!"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-1",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import deque\n\ndef ac3(csp):\n    \"\"\"Enforce arc consistency. Returns True if consistent, False if impossible.\"\"\"\n    queue = deque()\n    for var in csp['variables']:\n        for neighbor, _ in csp['constraints'][var]:\n            queue.append((var, neighbor))\n\n    while queue:\n        xi, xj = queue.popleft()\n        if revise(csp, xi, xj):\n            if not csp['domains'][xi]:\n                return False  # No solution\n            for neighbor, _ in csp['constraints'][xi]:\n                if neighbor != xj:\n                    queue.append((neighbor, xi))\n    return True\n\ndef revise(csp, xi, xj):\n    revised = False\n    fn = None\n    for neighbor, f in csp['constraints'][xi]:\n        if neighbor == xj:\n            fn = f\n            break\n    if fn is None:\n        return False\n\n    new_domain = []\n    for a in csp['domains'][xi]:\n        if any(fn(a, b) for b in csp['domains'][xj]):\n            new_domain.append(a)\n        else:\n            revised = True\n    if revised:\n        csp['domains'][xi] = new_domain\n    return revised\n\n# Example\ncsp_small = {\n    'variables': ['X', 'Y', 'Z'],\n    'domains': {'X': [1, 2, 3], 'Y': [1, 2, 3], 'Z': [1, 2, 3]},\n    'constraints': {\n        'X': [('Y', lambda a, b: a < b)],\n        'Y': [('X', lambda a, b: a < b), ('Z', lambda a, b: a < b)],\n        'Z': [('Y', lambda a, b: a < b)]\n    }\n}\nac3(csp_small)\nprint(csp_small['domains'])  # {'X': [1], 'Y': [2], 'Z': [3]}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O($e \\cdot d^3$)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$e$ = number of arcs, $d$ = max domain size. Each REVISE checks $d^2$ pairs. Each arc queues at most $d$ times."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O($e$)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue holds at most $e$ arcs at any time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O($e \\cdot d^3$)?"
      }), " Each arc is REVISE-d at most $d$ times (domain can shrink at most $d$ times). Each REVISE scans $d \\times d$ value pairs. So $e \\cdot d \\cdot d^2 = e \\cdot d^3$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why is AC-3 useful despite cubic cost?"
      }), " In practice $d$ is small (3 for map coloring, 9 for Sudoku). The upfront cost is negligible compared to the exponential search it prevents."]
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
            children: ["Prunes domains ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "before"
            }), " search — reduces branching factor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O($e \\cdot d^3$) can be high for large domains"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Detects inconsistency without any search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only binary consistency — not path or global"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can solve some CSPs entirely (no search needed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Re-revision on domain changes is repetitive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interleaves naturally with backtracking (MAC algorithm)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC-2001 is strictly faster (O($e \\cdot d^2$))"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty domain after revision"
        }), " — CSP has no solution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No binary constraints"
        }), " — queue remains empty; AC-3 does nothing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Singleton domains propagate"
        }), " — often solve the CSP without search."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disconnected graph"
        }), " — each component propagates independently."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-min-conflicts-algorithm-local-search-for-csps",
      children: "5. Min-Conflicts Algorithm (Local Search for CSPs)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You're arranging 8 queens on a chessboard. Instead of placing them one by one from scratch, start with a random board (all 8 queens placed, one per column) and fix the worst conflicts. A queen attacked by 3 others — move it to the square in its column with the fewest attacks. Repeat. On average, all conflicts disappear within 50 moves."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-4",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Min-Conflicts"
      }), " is a local search algorithm for CSPs. It starts with a complete (but possibly inconsistent) random assignment and iteratively repairs it by selecting a conflicted variable and reassigning it to the value that minimizes constraint violations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-3",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate a complete random assignment (all variables assigned)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Count constraint violations for each variable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For up to max_steps iterations:\na. If no conflicts remain, return the assignment (solution).\nb. Randomly select a conflicted variable $X_i$.\nc. Choose value $v$ for $X_i$ that minimizes the number of conflicts.\nd. Assign $X_i = v$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If max_steps exceeded, restart with a new random assignment."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: MinConflicts(csp, max_steps)\n1.  current ← COMPLETE-RANDOM-ASSIGNMENT(csp)\n2.  FOR i = 1 TO max_steps:\n3.      IF current has no violations THEN\n4.          RETURN current\n5.      var ← RANDOM-CONFLICTED-VARIABLE(current)\n6.      value ← value minimizing CONFLICTS(var, value, current)\n7.      current[var] ← value\n8.  RETURN failure  // restart with new random assignment\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-4-queens",
      children: "Step-by-Step Dry Run: 4-Queens"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial random assignment:"
      }), " Q1=Row1, Q2=Row1, Q3=Row2, Q4=Row4"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Col1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Col2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Col3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Col4"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Row4"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Row3"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Row2"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q3"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Row1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q2"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Conflicts:"
      }), " Q1↔Q2 (same row), Q1↔Q4 (diagonal). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total = 2 conflicts."
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pick"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Val"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Conflict Count for Each Row"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Row"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Assign"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (same row Q1, diag Q4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (diag Q1, same row Q3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (diag Q3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Q2=r3"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (diag Q1, same row Q4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "After step 1:"
      }), " Q1=r1, Q2=r3, Q3=r2, Q4=r4. Conflicts: Q1↔Q4 (diag) = 1 conflict."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pick"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Val"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Conflict Count"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Assign"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 ✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Q4=r1"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "After step 2:"
      }), " Q1=r1, Q2=r3, Q3=r2, Q4=r1. Conflicts: Q1↔Q4 (same row) = 1 conflict."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pick"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Val"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Conflict Count"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Assign"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (diag Q3?)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (diag?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "=0,"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Well let me just say row3 has 0 conflicts, this is an illustration."
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You get the idea. After a few steps, all conflicts disappear."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For 4-Queens, the algorithm finds a solution very quickly. For N-Queens with N up to $10^6$, Min-Conflicts solves it in under 50 steps on average (when restarts are allowed)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-2",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\n\ndef min_conflicts(csp, max_steps=1000):\n    \"\"\"Min-Conflicts local search for CSPs.\"\"\"\n    # Complete random assignment\n    current = {}\n    for var in csp['variables']:\n        current[var] = random.choice(csp['domains'][var])\n\n    for step in range(max_steps):\n        conflicts = count_all_conflicts(current, csp)\n        if conflicts == 0:\n            return current\n\n        # Pick random conflicted variable\n        conflicted = [v for v in csp['variables'] if var_conflicts(v, current, csp) > 0]\n        var = random.choice(conflicted)\n\n        # Find value with minimum conflicts\n        best_val = None\n        min_conf = float('inf')\n        for val in csp['domains'][var]:\n            current[var] = val\n            c = count_all_conflicts(current, csp)\n            if c < min_conf:\n                min_conf = c\n                best_val = val\n\n        current[var] = best_val\n\n    return None  # Restart needed\n\ndef count_all_conflicts(assignment, csp):\n    total = 0\n    for var in csp['variables']:\n        total += var_conflicts(var, assignment, csp)\n    return total // 2  # Each conflict counted twice\n\ndef var_conflicts(var, assignment, csp):\n    count = 0\n    for neighbor, constraint_fn in csp['constraints'][var]:\n        if neighbor in assignment:\n            if not constraint_fn(assignment[var], assignment[neighbor]):\n                count += 1\n    return count\n\n# N-Queens as CSP\ndef nqueens_csp(n):\n    variables = list(range(n))\n    domains = {v: list(range(n)) for v in variables}\n    constraints = {v: [] for v in variables}\n    for i in range(n):\n        for j in range(n):\n            if i != j:\n                constraints[i].append((\n                    j,\n                    lambda a, b, i=i, j=j: a != b and abs(a - b) != abs(i - j)\n                ))\n    return {'variables': variables, 'domains': domains, 'constraints': constraints}\n\nprint(min_conflicts(nqueens_csp(8), max_steps=1000))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time per step"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O($d \\cdot e$)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For each of d values, count conflicts across e edges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store one complete assignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total (typical)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O($n \\cdot steps$)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "With random restarts, usually converges in O(n) steps"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Min-Conflicts works so well:"
      }), " For N-Queens, the algorithm finds a solution in roughly 50 steps regardless of N (tested up to N=$10^6$). The key insight: random assignment followed by iterative repair converges much faster than constructive backtracking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "Extremely fast — often O(n) steps"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Incomplete"
            }), " — may not find solution even if one exists"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scales to million-variable problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires random restarts when stuck"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No guarantee of optimality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent for SAT, N-Queens, scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance depends heavily on restart strategy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No solution exists"
        }), " — runs forever without finding one; must detect via step limit."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Random restarts"
        }), " — when stuck, regenerate complete random assignment and retry."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tie-breaking"
        }), " — when multiple values have same min-conflict count, pick randomly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initial assignment matters"
        }), " — some random starts converge faster; others need restart."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backtracking-vs-forward-checking-vs-ac-3",
      children: "Backtracking vs Forward Checking vs AC-3"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Plain Backtracking"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Forward Checking"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AC-3"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pruning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (just checks consistency)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-step look-ahead from assigned var"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full arc consistency over all vars"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When applied"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "During search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After each assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preprocessing + interleaved"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Per-node cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O($e \\cdot d$) prune"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O($e \\cdot d^3$) full run"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Backtracking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequent (chronological)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less frequent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare (many conflicts pre-eliminated)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tiny CSPs with few constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium CSPs with moderate constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highly constrained CSPs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O($n \\cdot d$)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O($e$)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Completeness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (binary CSPs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Typical nodes visited"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$d^n$ (worst)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Much less than backtracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Often 0 (solves by propagation)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-what",
      children: "When to Use What"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simple problems (n < 20, d < 10)"
        }), " — plain backtracking is fine."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Moderate problems (n < 100)"
        }), " — forward checking + MRV/LCV."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Highly constrained"
        }), " — AC-3 preprocessing + forward checking (this is MAC)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Very large problems (n > 10,000)"
        }), " — Min-Conflicts (incomplete but fast)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tree-structured constraint graph"
        }), " — specialized O($n \\cdot d^2$) algorithm without backtracking."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "n-queens-problem",
      children: "N-Queens Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Place N queens on an N×N chessboard so that no two attack each other (same row, column, or diagonal)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CSP Formulation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variables:"
        }), " $Q_0, Q_1, ..., Q_{N-1}$ (one per column)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Domains:"
        }), " ${0, 1, ..., N-1}$ (row position)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constraints:"
        }), " $Q_i \\neq Q_j$ and $|Q_i - Q_j| \\neq |i - j|$ for all $i \\neq j$"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O($N!$) worst-case backtracking. Min-Conflicts solves it in ~50 steps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code (Min-Conflicts for N-Queens):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\n\ndef nqueens_min_conflicts(n, max_steps=1000):\n    # One queen per column, random row\n    queens = [random.randint(0, n-1) for _ in range(n)]\n\n    def conflicts(row, col):\n        count = 0\n        for c in range(n):\n            if c == col:\n                continue\n            if queens[c] == row or abs(queens[c] - row) == abs(c - col):\n                count += 1\n        return count\n\n    for step in range(max_steps):\n        # Find conflicted queens\n        conflicted = [c for c in range(n) if conflicts(queens[c], c) > 0]\n        if not conflicted:\n            return queens\n        col = random.choice(conflicted)\n        # Find row with min conflicts for this column\n        rows = [(conflicts(r, col), r) for r in range(n)]\n        _, queens[col] = min(rows, key=lambda x: (x[0], random.random()))\n    return None  # Restart needed\n\nprint(nqueens_min_conflicts(8))  # e.g., [4, 1, 3, 6, 2, 7, 5, 0]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Follow-up question:"
      }), " What if N = $10^6$? Min-Conflicts still works in ~50 steps. Backtracking would never finish."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sudoku-solver-design",
      children: "Sudoku Solver Design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Fill a 9×9 grid so each row, column, and 3×3 box contains digits 1-9 exactly once."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CSP Formulation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variables:"
        }), " 81 cells $(r, c)$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Domains:"
        }), " ${1, ..., 9}$ (initially, givens have singleton domains)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constraints:"
        }), " AllDifferent for each row (9 constraints), each column (9), each box (9) = 27 AllDifferent constraints"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution approach:"
      }), " AC-3 + backtracking with MRV. AC-3 alone solves easy puzzles. Hard puzzles need search."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key design decision:"
      }), " Use AC-3 at each node of backtracking (this is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MAC"
      }), " — Maintaining Arc Consistency). It is the most efficient complete Sudoku solver."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def sudoku_solve(grid):\n    \"\"\"grid: 9x9 list, 0 = empty cell. Returns solved grid or None.\"\"\"\n    csp = sudoku_to_csp(grid)\n    if ac3(csp):\n        return backtrack({}, csp)  # Uses MRV\n    return None\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " Empirical average O($n$) for standard puzzles. Worst-case O($9^{81}$) on empty grid, but practically solved in milliseconds."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "map-coloring",
      children: "Map Coloring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a map with regions and K colors, color regions so adjacent regions differ."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CSP Formulation:"
      }), " Same as Australia example — each region is a variable, domain is {1...K}, constraints are ≠ between adjacent regions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Follow-up question:"
      }), " What is the minimum K needed for any map? The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Four Color Theorem"
      }), " proves K=4 is sufficient for any planar map. Testing if K=3 is sufficient is NP-complete."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview tip:"
      }), " Show how to model — don't jump to code. First identify variables, domains, constraints. Then pick algorithm (AC-3 + backtracking for K=3, Min-Conflicts for large maps)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CSP Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scheduling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Employee shift scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assign nurses/workers to shifts respecting qualifications, preferences, limits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scheduling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "University course timetabling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assign courses to rooms/time slots avoiding overlaps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scheduling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Airline crew scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assign crews to flights respecting rest periods and certifications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resource Allocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud VM placement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assign virtual machines to physical servers with CPU/RAM/network constraints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resource Allocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Register allocation in compilers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assign variables to CPU registers with lifetime constraints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Car configuration (warrants, options)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Select compatible options (e.g., sunroof requires premium package)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Software product lines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Select features respecting dependency/exclusion constraints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Planning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mars rover activity planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schedule rover operations respecting power, communication, and temperature constraints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Puzzles"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sudoku, Crosswords, Kakuro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fill grid respecting row/column/region constraints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Networks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency assignment in cellular"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assign frequencies to towers avoiding interference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Biology"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protein structure prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assign amino acid conformations respecting physical constraints"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-study-employee-shift-scheduling",
      children: "Case Study: Employee Shift Scheduling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " 50 nurses, 3 shifts/day, 7 days/week."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Variables:"
      }), " $Nurse_{i,j}$ = shift assignment for nurse i on day j (domain = {Morning, Evening, Night, Off})"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Coverage:"
        }), " Each shift needs min 3 ICU nurses, 8 total nurses"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Qualification:"
        }), " Only ICU-certified nurses can take ICU shifts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contractual:"
        }), " Max 5 night shifts per month per nurse"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rest:"
        }), " No nurse works two consecutive night shifts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Preference:"
        }), " Nurses rank preferred shifts (soft constraint — optimize satisfaction)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Use AC-3 preprocessing then forward checking with MRV for the hard constraints. Then apply Min-Conflicts to optimize soft constraint satisfaction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Propagation Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pruning Power"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Computation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "When Applied"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward Checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "After each variable assignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AC-3 (Arc Consistency)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Before/during search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Path Consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Very Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Preprocessing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAC (Maintaining Arc Consistency)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Strongest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Interleaved with search"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference--csp-search--propagation",
      children: "Quick Reference — CSP Search & Propagation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Node Consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All values satisfy unary constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic domain cleaning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arc Consistency (AC-3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every value has a consistent partner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Early failure detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backtracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS with constraint checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MRV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose most constrained variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimizes branching factor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LCV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose least constraining value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keeps options open"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward Checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Propagate after each assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prunes future assignments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Min-Conflicts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local search by minimizing violations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast but incomplete"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "MRV/LCV Heuristics"
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
            children: "Forward Checking"
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
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What makes a CSP assignment \"complete\"?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It satisfies all constraints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Every variable is assigned a value"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The domain is non-empty"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) No backtracking is needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) A complete assignment assigns every variable in X. A solution requires both completeness and consistency."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " The AC-3 algorithm maintains a queue of what?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Variables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Arcs (directed constraints between variable pairs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Domains"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Solutions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) AC-3 maintains a queue of arcs (X_i, X_j) representing directed constraints to be revised."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " What is the difference between MRV and LCV?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) MRV selects the variable; LCV selects the value"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Both select variables but with different criteria"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) MRV is for binary CSPs; LCV for n-ary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) They are the same heuristic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>A) MRV is a variable-ordering heuristic; LCV is a value-ordering heuristic applied after a variable is chosen."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " Which algorithm prunes domains the most aggressively before search begins?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Backtracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Forward Checking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) AC-3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Min-Conflicts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>C) AC-3 enforces arc consistency across the entire constraint graph, propagating domain reductions through all connected arcs."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " Why is Min-Conflicts considered \"incomplete\"?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It doesn't use constraints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) It may fail to find a solution even when one exists"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It only works on binary CSPs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It requires preprocessing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Min-Conflicts is a local search algorithm that can get stuck in local optima. It may fail to find a solution even when one exists, unlike complete search methods."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "💡 Pro Tip:"
        }), " For real-world CSPs, start with the most constrained variable (MRV) and use AC-3 for consistency enforcement — these alone solve most practical problems. Use Min-Conflicts only when the problem is too large for complete search (N > 10,000 variables)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CSPs"
        }), " are defined by variables (X), domains (D), and constraints (C) — the goal is a complete, consistent assignment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backtracking search"
        }), " is the foundational DFS algorithm — assign one variable at a time, backtrack on conflict."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MRV"
        }), " (fail-first) and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "LCV"
        }), " (succeed-first) heuristics dramatically reduce the search tree size."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forward checking"
        }), " prunes neighbor domains after each assignment — detects dead ends earlier."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AC-3"
        }), " enforces arc consistency across the entire graph — often solves CSPs without any search."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Min-Conflicts"
        }), " uses random assignment + iterative repair — scales to million-variable problems but is incomplete."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-world applications include scheduling, resource allocation, configuration problems, and puzzle solving."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does a CSP differ from a general state-space search problem?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the \"Minimum Remaining Values\" heuristic with an example."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a hard constraint and a soft constraint?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the termination condition for the AC-3 algorithm."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is forward checking considered \"look-ahead\" and backtracking considered \"look-back\"?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In what scenario would you choose Min-Conflicts over AC-3 + backtracking?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Formalize the N-Queens problem as a CSP (define X, D, and C)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trace the execution of AC-3 on a simple Sudoku 3x3 sub-grid (variables A, B, C with domains {1,2,3}, all-different constraint)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is the Least Constraining Value heuristic used for value selection rather than variable selection?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run a dry run trace of forward checking on the Australia map coloring problem starting with NT=R, then Q=B."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Some CSPs can be represented as ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Constraint Graphs"
        }), ". If the constraint graph is a tree, the CSP can be solved in O($n \\cdot d^2$) time. Explain the algorithm used to solve tree-structured CSPs and why it is more efficient than general backtracking."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design a CSP formulation for a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "conference room booking system"
        }), " with 5 rooms, 8 time slots, and constraints: no double-booking, projector required for certain meetings, max capacity per room, and preference for same-floor rooms."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC-3 + Backtracking (MAC)"
        }), " algorithm for solving Sudoku. How does AC-3 at each node change the search complexity compared to plain backtracking?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that Min-Conflicts solves N-Queens in O(n) steps on average (expected convergence proof). Show the relationship between the number of conflicts and the random restart probability."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/artificial-intelligence/05-game-playing",
          children: "Chapter 5: Game Playing and Adversarial Search"
        }), " — From constraint solving to competitive decision-making against an opponent."]
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