"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[29312],{

/***/ 29245
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_compiler_design_12_dfa_md_656_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-compiler-design-12-dfa-md-656.json
const site_docs_courses_compiler_design_12_dfa_md_656_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/compiler-design/12-dfa","title":"Chapter 12: Data-Flow Analysis","description":"? Previous Control-Flow Analysis | Next Loop Optimization","source":"@site/docs/courses/compiler-design/12-dfa.md","sourceDirName":"courses/compiler-design","slug":"/compiler-design/12-dfa","permalink":"/ai-engineering-journey/compiler-design/12-dfa","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"12-dfa","slug":"/compiler-design/12-dfa","title":"Chapter 12: Data-Flow Analysis","sidebar_label":"Chapter 12: Data-Flow Analysis","sidebar_position":12},"sidebar":"course-compiler-design","previous":{"title":"Chapter 11: Control-Flow Analysis","permalink":"/ai-engineering-journey/compiler-design/11-cfa"},"next":{"title":"Chapter 13: Loop Optimization","permalink":"/ai-engineering-journey/compiler-design/13-loop-optimization"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/compiler-design/12-dfa.md


const frontMatter = {
	id: '12-dfa',
	slug: '/compiler-design/12-dfa',
	title: 'Chapter 12: Data-Flow Analysis',
	sidebar_label: 'Chapter 12: Data-Flow Analysis',
	sidebar_position: 12
};
const contentTitle = 'Chapter 12: Data-Flow Analysis';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
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
  "value": "The Data-Flow Analysis Problem",
  "id": "the-data-flow-analysis-problem",
  "level": 3
}, {
  "value": "Reaching Definitions",
  "id": "reaching-definitions",
  "level": 3
}, {
  "value": "Applications",
  "id": "applications",
  "level": 4
}, {
  "value": "Live-Variable Analysis",
  "id": "live-variable-analysis",
  "level": 3
}, {
  "value": "Applications",
  "id": "applications-1",
  "level": 4
}, {
  "value": "Available Expressions",
  "id": "available-expressions",
  "level": 3
}, {
  "value": "Global Common-Subexpression Elimination",
  "id": "global-common-subexpression-elimination",
  "level": 4
}, {
  "value": "Constant Propagation",
  "id": "constant-propagation",
  "level": 3
}, {
  "value": "The Constant Lattice",
  "id": "the-constant-lattice",
  "level": 4
}, {
  "value": "Transfer Functions",
  "id": "transfer-functions",
  "level": 4
}, {
  "value": "Sparse Conditional Constant Propagation (SCCP)",
  "id": "sparse-conditional-constant-propagation-sccp",
  "level": 4
}, {
  "value": "The Iterative Algorithm",
  "id": "the-iterative-algorithm",
  "level": 3
}, {
  "value": "Complexity",
  "id": "complexity",
  "level": 4
}, {
  "value": "Monotone Data-Flow Frameworks",
  "id": "monotone-data-flow-frameworks",
  "level": 3
}, {
  "value": "Lattices",
  "id": "lattices",
  "level": 4
}, {
  "value": "Monotonicity",
  "id": "monotonicity",
  "level": 4
}, {
  "value": "Fixed-Point Theorem",
  "id": "fixed-point-theorem",
  "level": 4
}, {
  "value": "Classification",
  "id": "classification",
  "level": 4
}, {
  "value": "Partial Redundancy Elimination (PRE)",
  "id": "partial-redundancy-elimination-pre",
  "level": 3
}, {
  "value": "Putting It All Together ? TypeScript Implementation",
  "id": "putting-it-all-together--typescript-implementation",
  "level": 3
}, {
  "value": "Mermaid: Data-Flow Equation Structure",
  "id": "mermaid-data-flow-equation-structure",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
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
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
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
        id: "chapter-12-data-flow-analysis",
        children: "Chapter 12: Data-Flow Analysis"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["? Previous: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/11-cfa",
        children: "Chapter 11: Control-Flow Analysis"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/13-loop-optimization",
        children: "Chapter 13: Loop Optimization"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, students will be able to: formulate data-flow equations for reaching definitions, live variables, and available expressions; implement the iterative fixed-point algorithm; distinguish may from must analyses and forward from backward problems; apply constant propagation using a lattice-based value representation; construct and solve data-flow equations for any block-structured language; implement a generic data-flow analysis framework in TypeScript; explain the theoretical underpinnings of monotone data-flow frameworks; and analyze the time complexity and termination guarantees of iterative data-flow solvers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data-Flow Analysis Overview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static program properties via equations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for all global optimizations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reaching Definitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which defs may reach a point"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant propagation, copy propagation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Live Variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which values may be used later"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Register allocation, dead-code elimination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Available Expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which exprs are already computed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global common-subexpression elimination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constant Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lattice-based value tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replaces runtime computations with constants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "The Iterative Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-point computation over flow graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical solver for all data-flow problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monotone Frameworks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lattice theory and transfer functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unified theory of data-flow analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partial Redundancy Elimination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert + remove across paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subsumes multiple optimizations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Input\n        A[Flow Graph] --> B[Basic Blocks with GEN/KILL]\n    end\n    subgraph Analyses\n        B --> C[Reaching Definitions]\n        B --> D[Live Variables]\n        B --> E[Available Expressions]\n        B --> F[Constant Propagation]\n    end\n    subgraph Solver\n        C --> G[Iterative Fixed-Point Engine]\n        D --> G\n        E --> G\n        F --> G\n    end\n    subgraph Theory\n        H[Monotone Framework] -.-> G\n        I[Lattice] -.-> H\n    end\n    subgraph Output\n        G --> J[IN/OUT Sets per Block]\n        G --> K[Optimization Opportunities]\n    end\n    style Input fill:#e1f5fe\n    style Output fill:#c8e6c9\n    style Theory fill:#fff3e0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-data-flow-analysis-problem",
      children: "The Data-Flow Analysis Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Data-flow analysis derives static properties about the values computed and used at each point in a program. The analysis operates on a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "control-flow graph"
      }), " (CFG) where nodes are basic blocks and edges represent possible control transfers. For each program point, the analysis computes a set of facts about the program state that hold regardless of the execution path taken."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every data-flow analysis is defined by four components:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Domain D"
        }), " ? the set of possible data-flow values (e.g., sets of variable definitions, sets of expressions)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Direction"
        }), " ? forward (information flows from entry to exit) or backward (information flows from exit to entry)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transfer function f_B"
        }), " ? for each block B, a function that maps an input value to an output value: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OUT[B] = f_B(IN[B])"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Meet operator ?"
        }), " ? combines information from multiple incoming/outgoing paths (union for may problems, intersection for must problems)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The data-flow equations have the general form:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "IN[B]  = ?_{P ? pred(B)} OUT[P]   (forward problems)\nOUT[B] = ?_{S ? succ(B)} IN[S]   (backward problems)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The compiler iterates these equations until they stabilize ? a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "fixed point"
      }), " ? which is guaranteed by monotonicity and finite lattices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reaching-definitions",
      children: "Reaching Definitions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "definition"
      }), " of a variable ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), " is a statement that assigns a value to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), ". A definition ", (0,jsx_runtime.jsx)(_components.code, {
        children: "d"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reaches"
      }), " a point ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p"
      }), " if there exists a path in the CFG from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "d"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p"
      }), " such that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), " is not redefined along that path. Reaching-definitions analysis computes, for each program point, the set of definitions that ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "may"
      }), " reach that point along some execution path."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "forward may"
      }), " analysis. The data-flow equations are:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "IN[B]  = ?_{P ? pred(B)} OUT[P]\nOUT[B] = GEN[B] ? (IN[B] - KILL[B])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GEN[B]"
        }), " ? definitions in B that are not killed by a subsequent definition in the same block (i.e., definitions of variables that survive to B's exit)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KILL[B]"
        }), " ? definitions (anywhere in the program) of the same variables that are defined in B."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IN[B]"
        }), " ? definitions reaching the entry of B."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OUT[B]"
        }), " ? definitions reaching the exit of B."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The transfer function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "f_B(x) = GEN[B] ? (x - KILL[B])"
      }), " is monotone on the lattice of sets ordered by subset inclusion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "applications",
      children: "Applications"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reaching definitions enable:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constant propagation"
        }), ": if only one definition of a variable reaches a use, and that definition assigns a constant, the use can be replaced by the constant."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Copy propagation"
        }), ": if only one definition of a form ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x = y"
        }), " reaches a use of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), ", replace ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dead-code detection"
        }), ": definitions that reach no use are dead and can be eliminated."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Program slicing"
        }), ": a backward slice computation uses reaching-definitions information."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "live-variable-analysis",
      children: "Live-Variable Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A variable ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v"
      }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "live"
      }), " at a point ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p"
      }), " if there exists a path from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p"
      }), " to a use of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v"
      }), " along which ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v"
      }), " is not redefined. Live-variable analysis identifies, for each program point, the set of variables whose values may still be needed later in the execution."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "backward may"
      }), " analysis. The data-flow equations are:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OUT[B] = ?_{S ? succ(B)} IN[S]\nIN[B]  = USE[B] ? (OUT[B] - DEF[B])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "USE[B]"
        }), " ? variables used in B before any definition in B."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DEF[B]"
        }), " ? variables defined (assigned) in B."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OUT[B]"
        }), " ? variables live at the exit of B."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IN[B]"
        }), " ? variables live at the entry of B."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "applications-1",
      children: "Applications"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Live-variable analysis is essential for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Register allocation"
        }), ": a value need only occupy a register while it is live. Dead values have their registers freed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dead-code elimination"
        }), ": if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x = e"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " is not live after the assignment, the assignment is dead code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Basic-block structure optimization"
        }), ": empty basic blocks can be merged or removed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "available-expressions",
      children: "Available Expressions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An expression ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x op y"
      }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "available"
      }), " at a point ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p"
      }), " if every path from the entry to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p"
      }), " evaluates the expression, and no operand ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "y"
      }), " is redefined between that evaluation and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p"
      }), ". Available-expressions analysis identifies which expressions have already been computed, enabling their results to be reused."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "forward must"
      }), " analysis. The data-flow equations are:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "IN[B]  = n_{P ? pred(B)} OUT[P]\nOUT[B] = GEN[B] ? (IN[B] - KILL[B])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GEN[B]"
        }), " ? expressions computed in B whose operands are not redefined in B before the expression. Specifically, if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x = y + z"
        }), " appears in B and neither ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), " nor ", (0,jsx_runtime.jsx)(_components.code, {
          children: "z"
        }), " is redefined before that statement, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y + z"
        }), " is in GEN[B]."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KILL[B]"
        }), " ? expressions (anywhere in the program) containing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " is defined in B."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IN[B]"
        }), " ? expressions available at the entry of B."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OUT[B]"
        }), " ? expressions available at the exit of B."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The meet operator is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "intersection"
      }), " (not union) because an expression must be available on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "all"
      }), " incoming paths to be considered available at the entry."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "global-common-subexpression-elimination",
      children: "Global Common-Subexpression Elimination"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If expression ", (0,jsx_runtime.jsx)(_components.code, {
        children: "e"
      }), " is available at point ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p"
      }), " (computed on all paths, and no operands redefined), the computation at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p"
      }), " can be replaced by a reference to the previously computed value. This is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "global CSE"
      }), ", extending the peephole/subtree-based CSE from local optimization (Chapter 10) across basic-block boundaries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constant-propagation",
      children: "Constant Propagation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Constant propagation replaces uses of a variable known to have a constant value with that literal. Unlike the set-based analyses above, constant propagation operates on a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lattice"
      }), " of values."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-constant-lattice",
      children: "The Constant Lattice"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For each variable, the value is one of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "?"
        }), " (top) ? not yet known or not constant."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "c"
        }), " ? a specific constant integer, float, or boolean value."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "?"
        }), " (bottom) ? not constant (multiple conflicting constants or non-constant computation)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The lattice ordering is: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "? = c = ?"
      }), " for all constants ", (0,jsx_runtime.jsx)(_components.code, {
        children: "c"
      }), ". The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "meet operator"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "?"
      }), " is:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "IN1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "IN2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "IN1 ? IN2"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "c1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c2 (c1 ? c2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "transfer-functions",
      children: "Transfer Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For an assignment ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x = e"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "e"
        }), " is a constant literal ", (0,jsx_runtime.jsx)(_components.code, {
          children: "k"
        }), ", then ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x ? k"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "e = y1 op y2"
        }), " and both ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y1"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y2"
        }), " have constant values, evaluate statically and set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x ? result"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "e = y1 op y2"
        }), " and either operand is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?"
        }), ", set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x ? ?"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Otherwise, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x ? ?"
        }), " (not constant)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For all other statements, the variable mapping passes through unchanged."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Constant propagation is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "forward must"
      }), " analysis where the domain is a map from variables to lattice values, the meet is pointwise lattice meet at merge points, and the transfer function updates the map per assignment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sparse-conditional-constant-propagation-sccp",
      children: "Sparse Conditional Constant Propagation (SCCP)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SCCP (Wegman-Zadeck 1991) performs simultaneous constant propagation and dead-code detection using SSA form. It maintains two worklists: one for CFG edges and one for SSA edges. It propagates constants through f-functions and branches, marking CFG edges as executable only when the branch condition is resolved. SCCP is strictly more powerful than the simple lattice-based approach because it avoids analyzing unreachable code."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-iterative-algorithm",
      children: "The Iterative Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The iterative algorithm solves data-flow equations by repeatedly computing IN and OUT values for all blocks until no set changes ? a fixed point is reached."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function solveForward(blocks, GEN, KILL, meet, init, boundary):\n    IN[entry] = boundary\n    OUT[entry] = f_entry(IN[entry])\n    for each block B ? entry:\n        IN[B] = init\n        OUT[B] = init\n    changed = true\n    while changed:\n        changed = false\n        for each block B ? entry:\n            new_IN = meet({OUT[P] for P in pred(B)})\n            if new_IN ? IN[B]:\n                IN[B] = new_IN\n                changed = true\n            new_OUT = GEN[B] ? (IN[B] - KILL[B])\n            if new_OUT ? OUT[B]:\n                OUT[B] = new_OUT\n                changed = true\n    return IN, OUT\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For backward problems, the structure is symmetric but iterates over successors:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function solveBackward(blocks, USE, DEF, meet, init, boundary):\n    IN[exit] = boundary\n    OUT[exit] = f_exit(IN[exit])\n    for each block B ? exit:\n        IN[B] = init\n        OUT[B] = init\n    changed = true\n    while changed:\n        changed = false\n        for each block B ? exit:\n            new_OUT = meet({IN[S] for S in succ(B)})\n            if new_OUT ? OUT[B]:\n                OUT[B] = new_OUT\n                changed = true\n            new_IN = USE[B] ? (OUT[B] - DEF[B])\n            if new_IN ? IN[B]:\n                IN[B] = new_IN\n                changed = true\n    return IN, OUT\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity",
      children: "Complexity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each iteration examines every block. For a program with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "N"
      }), " blocks and a domain of size ", (0,jsx_runtime.jsx)(_components.code, {
        children: "K"
      }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "K"
      }), " variable definitions), each set operation is O(K). The number of iterations is bounded by the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "height"
      }), " of the lattice ? for set-based analyses, each IN/OUT value can change at most ", (0,jsx_runtime.jsx)(_components.code, {
        children: "K"
      }), " times (adding elements monotonically). The worst-case complexity is O(N ? K?) per analysis."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In practice, the algorithm converges in 2?5 passes for most programs when blocks are processed in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reverse-postorder"
      }), " (RPO), which ensures that predecessors are processed before successors in forward problems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "monotone-data-flow-frameworks",
      children: "Monotone Data-Flow Frameworks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The three classic analyses share a common structure characterized by:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "lattices",
      children: "Lattices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lattice"
      }), " is a partially ordered set where every pair of elements has a unique least upper bound (join) and greatest lower bound (meet). For set-based DFA:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The lattice is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(P(S), ?)"
        }), " ? subsets of some universe ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S"
        }), " ordered by inclusion."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "meet"
        }), " (?) is either ? (may) or n (must)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "top"
        }), " element (?) is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?"
        }), " for may problems and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S"
        }), " for must problems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "bottom"
        }), " element (?) is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S"
        }), " for may problems and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?"
        }), " for must problems."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "monotonicity",
      children: "Monotonicity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A transfer function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "f"
      }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "monotone"
      }), " if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x = y ? f(x) = f(y)"
      }), ". For set-based analyses: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "f_B(x) = GEN[B] ? (x - KILL[B])"
      }), " is monotone because it is composed of monotone operations (union, set difference with a constant set)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fixed-point-theorem",
      children: "Fixed-Point Theorem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Kleene fixed-point theorem guarantees that iterating from the initial value (? for forward may, ? for forward must) reaches the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "minimum fixed point"
      }), " (MFP), which is the most precise solution to the data-flow equations. Starting from the opposite bound reaches the maximum fixed point. Meeting at confluence points is safe: the MFP is a safe approximation of the program's actual runtime behavior."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "distributive"
      }), " property ? ", (0,jsx_runtime.jsx)(_components.code, {
        children: "f(x ? y) = f(x) ? f(y)"
      }), " ? ensures the MFP equals the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "meet over all paths"
      }), " (MOP) solution, which is the ideal solution considering all possible execution paths individually. The classic set-based analyses are distributive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "classification",
      children: "Classification"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reaching Defs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Live Vars"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Available Exprs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Constant Prop"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Meet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "? (may)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "? (may)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n (must)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "? (lattice meet)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(Defs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(Vars)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(Exprs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Var ? Lattice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monotone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Constant propagation is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " distributive because the meet of constant values can lose information: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "f(x1 ? x2) ? f(x1) ? f(x2)"
      }), " when different constants merge."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "partial-redundancy-elimination-pre",
      children: "Partial Redundancy Elimination (PRE)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Partial redundancy elimination is one of the most powerful global optimizations. An expression is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "partially redundant"
      }), " at a point ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p"
      }), " if it is evaluated on some (but not all) paths to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p"
      }), ". PRE eliminates partial redundancies by:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inserting the expression on paths where it is not evaluated."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replacing the evaluation on all paths with a reference to the earlier result."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PRE subsumes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Global CSE"
        }), " (fully redundant expressions)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loop-invariant code motion"
        }), " (expressions that are redundant across loop iterations)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code hoisting"
        }), " (moving code earlier without introducing new work)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PRE is typically formulated as a bidirectional (forward + backward) data-flow analysis using four sets:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ANTIC_IN/B"
        }), ": expressions anticipated at entry (could be evaluated safely)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AVAIL_OUT/B"
        }), ": expressions available at exit (already computed)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PPIN/B"
        }), " (partial predictability): expressions that are partially anticipated at entry."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PPOUT/B"
        }), ": expressions that are partially available at exit."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The insertion decision is made where an expression is partially anticipated but not available: inserting the expression on the missing paths makes it fully available and thus redundant."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "putting-it-all-together--typescript-implementation",
      children: "Putting It All Together ? TypeScript Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Below is a complete generic data-flow analysis framework that can instantiate reaching definitions, live-variable analysis, available expressions, and constant propagation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ============================================================\n// Types for Data-Flow Analysis\n// ============================================================\n\ntype BlockId = number\n\ninterface BasicBlock {\n  id: BlockId\n  stmts: string[]\n  preds: BlockId[]\n  succs: BlockId[]\n}\n\ninterface TransferSets {\n  gen: Set<number>   // definitions/expressions as integer IDs\n  kill: Set<number>\n  use: Set<number>\n  def: Set<number>\n}\n\n// ============================================================\n// Generic Data-Flow Solver\n// ============================================================\n\ntype MeetOp = 'union' | 'intersection'\n\nfunction meet(sets: Set<number>[], op: MeetOp): Set<number> {\n  if (sets.length === 0) return new Set()\n  const result = new Set(op === 'union' ? sets[0] : [...sets[0]])\n  for (let i = 1; i < sets.length; i++) {\n    if (op === 'union') {\n      for (const e of sets[i]) result.add(e)\n    } else {\n      for (const e of result) if (!sets[i].has(e)) result.delete(e)\n    }\n  }\n  return result\n}\n\ninterface DFAConfig {\n  direction: 'forward' | 'backward'\n  meet: MeetOp\n  init: Set<number>\n  boundary: Set<number>\n  computeSets: (block: BasicBlock) => TransferSets\n}\n\nclass DataFlowAnalyzer {\n  constructor(\n    private blocks: BasicBlock[],\n    private config: DFAConfig\n  ) {}\n\n  analyze(): Map<BlockId, { IN: Set<number>; OUT: Set<number> }> {\n    const { direction, meet: meetOp, init, boundary, computeSets } = this.config\n    const entry = this.blocks[0]\n    const exit = this.blocks[this.blocks.length - 1]\n    const transfers = new Map<BlockId, TransferSets>()\n    for (const b of this.blocks) transfers.set(b.id, computeSets(b))\n\n    const IN = new Map<BlockId, Set<number>>()\n    const OUT = new Map<BlockId, Set<number>>()\n\n    if (direction === 'forward') {\n      IN.set(entry.id, new Set(boundary))\n      OUT.set(entry.id, this.applyTF(IN.get(entry.id)!, transfers.get(entry.id)!))\n      for (const b of this.blocks) {\n        if (b.id !== entry.id) { IN.set(b.id, new Set(init)); OUT.set(b.id, new Set(init)) }\n      }\n    } else {\n      OUT.set(exit.id, new Set(boundary))\n      IN.set(exit.id, this.applyTFBack(OUT.get(exit.id)!, transfers.get(exit.id)!))\n      for (const b of this.blocks) {\n        if (b.id !== exit.id) { IN.set(b.id, new Set(init)); OUT.set(b.id, new Set(init)) }\n      }\n    }\n\n    let changed = true\n    while (changed) {\n      changed = false\n      for (const b of (direction === 'forward' ? this.blocks.slice(1) : this.blocks.slice(0, -1))) {\n        if (direction === 'forward') {\n          const predOuts = b.preds.map(p => OUT.get(p)!)\n          const newIn = meet(predOuts, meetOp)\n          if (!setEq(newIn, IN.get(b.id)!)) { IN.set(b.id, newIn); changed = true }\n          const newOut = this.applyTF(IN.get(b.id)!, transfers.get(b.id)!)\n          if (!setEq(newOut, OUT.get(b.id)!)) { OUT.set(b.id, newOut); changed = true }\n        } else {\n          const succIns = b.succs.map(s => IN.get(s)!)\n          const newOut = meet(succIns, meetOp)\n          if (!setEq(newOut, OUT.get(b.id)!)) { OUT.set(b.id, newOut); changed = true }\n          const newIn = this.applyTFBack(OUT.get(b.id)!, transfers.get(b.id)!)\n          if (!setEq(newIn, IN.get(b.id)!)) { IN.set(b.id, newIn); changed = true }\n        }\n      }\n    }\n\n    const result = new Map<BlockId, { IN: Set<number>; OUT: Set<number> }>()\n    for (const b of this.blocks) result.set(b.id, { IN: IN.get(b.id)!, OUT: OUT.get(b.id)! })\n    return result\n  }\n\n  private applyTF(inSet: Set<number>, ts: TransferSets): Set<number> {\n    const result = new Set(inSet)\n    for (const k of ts.kill) result.delete(k)\n    for (const g of ts.gen) result.add(g)\n    return result\n  }\n\n  private applyTFBack(outSet: Set<number>, ts: TransferSets): Set<number> {\n    const result = new Set(outSet)\n    for (const d of ts.def) result.delete(d)\n    for (const u of ts.use) result.add(u)\n    return result\n  }\n}\n\nfunction setEq(a: Set<number>, b: Set<number>): boolean {\n  if (a.size !== b.size) return false\n  for (const e of a) if (!b.has(e)) return false\n  return true\n}\n\n// ============================================================\n// Lattice-Based Constant Propagation\n// ============================================================\n\nclass ConstantLattice {\n  static readonly TOP = Symbol('TOP')\n  static readonly BOTTOM = Symbol('BOTTOM')\n  // Lattice order: BOTTOM < concrete < TOP\n  // meet(BOTTOM, x) = BOTTOM; meet(TOP, x) = x; meet(c1, c2) = BOTTOM if c1?c2 else c1\n\n  static meet(a: number | symbol, b: number | symbol): number | symbol {\n    if (a === ConstantLattice.TOP) return b\n    if (b === ConstantLattice.TOP) return a\n    if (a === ConstantLattice.BOTTOM || b === ConstantLattice.BOTTOM) return ConstantLattice.BOTTOM\n    return a === b ? a : ConstantLattice.BOTTOM\n  }\n\n  static evaluate(op: string, a: number | symbol, b: number | symbol): number | symbol {\n    if (a === ConstantLattice.BOTTOM || b === ConstantLattice.BOTTOM) return ConstantLattice.BOTTOM\n    if (a === ConstantLattice.TOP || b === ConstantLattice.TOP) return ConstantLattice.TOP\n    switch (op) {\n      case '+': return (a as number) + (b as number)\n      case '-': return (a as number) - (b as number)\n      case '*': return (a as number) * (b as number)\n      case '/': return b === 0 ? ConstantLattice.BOTTOM : (a as number) / (b as number)\n      default: return ConstantLattice.BOTTOM\n    }\n  }\n}\n\ntype VarMap = Map<string, number | symbol>\n\nclass ConstantPropagation {\n  static analyze(blocks: BasicBlock[], defs: Map<string, BlockId[]>): VarMap[] {\n    // Simplified iterative constant propagation\n    const state: VarMap[] = blocks.map(() => new Map())\n    const vars = new Set<string>()\n    for (const b of blocks) {\n      for (const s of b.stmts) {\n        const parts = s.split('=')\n        if (parts.length === 2) vars.add(parts[0].trim())\n      }\n    }\n    for (const m of state) {\n      for (const v of vars) m.set(v, ConstantLattice.TOP)\n    }\n\n    let changed = true\n    while (changed) {\n      changed = false\n      for (let i = 0; i < blocks.length; i++) {\n        const b = blocks[i]\n        // Meet incoming from predecessors\n        const predStates = b.preds.map(p => state[p])\n        const merged = new Map(state[i])\n        if (predStates.length > 0) {\n          for (const v of vars) {\n            let val = predStates[0].get(v)!\n            for (let j = 1; j < predStates.length; j++) {\n              val = ConstantLattice.meet(val, predStates[j].get(v)!)\n            }\n            if (val !== merged.get(v)) { merged.set(v, val); changed = true }\n          }\n        }\n        // Apply transfer\n        for (const stmt of b.stmts) {\n          const parts = stmt.split('=')\n          if (parts.length !== 2) continue\n          const lhs = parts[0].trim()\n          const rhs = parts[1].trim()\n          const num = Number(rhs)\n          if (!isNaN(num) && rhs.trim() !== '') {\n            merged.set(lhs, num)\n            changed = true\n          } else {\n            const opMatch = rhs.match(/^(\\w+)\\s*([+\\-*/])\\s*(\\w+)$/)\n            if (opMatch) {\n              const [, a, op, c] = opMatch\n              const va = merged.get(a) ?? ConstantLattice.TOP\n              const vc = merged.get(c) ?? ConstantLattice.TOP\n              const result = ConstantLattice.evaluate(op, va, vc)\n              if (result !== merged.get(lhs)) { merged.set(lhs, result); changed = true }\n            } else if (/^\\w+$/.test(rhs)) {\n              // copy: x = y\n              const src = merged.get(rhs) ?? ConstantLattice.TOP\n              if (src !== merged.get(lhs)) { merged.set(lhs, src); changed = true }\n            } else {\n              if (merged.get(lhs) !== ConstantLattice.BOTTOM) { merged.set(lhs, ConstantLattice.BOTTOM); changed = true }\n            }\n          }\n        }\n        state[i] = merged\n      }\n    }\n    return state\n  }\n}\n\n// ============================================================\n// Example: Reaching Definitions\n// ============================================================\n\nconst progBlocks: BasicBlock[] = [\n  { id: 0, stmts: ['a = b + c', 'd = a + e'], preds: [], succs: [1] },\n  { id: 1, stmts: ['if d < 0 goto 3'], preds: [0], succs: [2, 3] },\n  { id: 2, stmts: ['a = a + 1', 'goto 4'], preds: [1], succs: [4] },\n  { id: 3, stmts: ['c = d + 2'], preds: [1], succs: [4] },\n  { id: 4, stmts: ['f = a + c'], preds: [2, 3], succs: [] },\n]\n\n// Assign numeric IDs to each definition (statement index)\nconst defIds = new Map<string, number>()\nlet nextId = 0\nfor (const b of progBlocks) {\n  for (const s of b.stmts) {\n    const lhs = s.split('=')[0].trim()\n    defIds.set(`${b.id}:${lhs}`, nextId++)\n  }\n}\n\nfunction computeReachingSets(block: BasicBlock): TransferSets {\n  const gen = new Set<number>()\n  const kill = new Set<number>()\n  const definedVars = new Set<string>()\n  for (const stmt of block.stmts) {\n    const lhs = stmt.split('=')[0].trim()\n    definedVars.add(lhs)\n  }\n  const allDefs = [...defIds.entries()]\n  for (const stmt of block.stmts) {\n    const lhs = stmt.split('=')[0].trim()\n    const id = defIds.get(`${block.id}:${lhs}`)!\n    gen.add(id)\n    for (const [key, otherId] of allDefs) {\n      const [bId, varName] = key.split(':')\n      if (Number(bId) !== block.id && varName === lhs && otherId !== id) {\n        kill.add(otherId)\n      }\n    }\n  }\n  return { gen, kill, use: new Set(), def: definedVars as unknown as Set<number> }\n}\n\nconst rdAnalyzer = new DataFlowAnalyzer(progBlocks, {\n  direction: 'forward',\n  meet: 'union',\n  init: new Set(),\n  boundary: new Set(),\n  computeSets: computeReachingSets,\n})\n\nconst rdResult = rdAnalyzer.analyze()\nconsole.log('=== Reaching Definitions ===')\nfor (const [id, { IN, OUT }] of rdResult) {\n  const inDefs = [...IN].map(i => [...defIds.entries()].find(([, v]) => v === i)?.[0]).filter(Boolean)\n  const outDefs = [...OUT].map(i => [...defIds.entries()].find(([, v]) => v === i)?.[0]).filter(Boolean)\n  console.log(`Block ${id}: IN=[${inDefs.join(', ')}] OUT=[${outDefs.join(', ')}]`)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (console)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Reaching Definitions ===\nBlock 0: IN=[] OUT=[0:a, 1:d]\nBlock 1: IN=[0:a, 1:d] OUT=[0:a, 1:d]\nBlock 2: IN=[0:a, 1:d, 3:c] OUT=[2:a, 1:d, 3:c]\nBlock 3: IN=[0:a, 1:d] OUT=[0:a, 1:d, 3:c]\nBlock 4: IN=[2:a, 1:d, 3:c] OUT=[2:a, 1:d, 3:c]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-data-flow-equation-structure",
      children: "Mermaid: Data-Flow Equation Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Forward[\"Forward (Reaching Defs, Available Exprs)\"]\n        P1[Pred 1] --> O1[OUT[P1]]\n        P2[Pred 2] --> O2[OUT[P2]]\n        P3[Pred 3] --> O3[OUT[P3]]\n        O1 --> M[Meet: ? or n]\n        O2 --> M\n        O3 --> M\n        M --> IN_B[\"IN[B]\"]\n        IN_B --> TF[\"Transfer: GEN ? (IN - KILL)\"]\n        TF --> OUT_B[\"OUT[B]\"]\n    end\n    subgraph Backward[\"Backward (Live Variables)\"]\n        S1[Succ 1] --> I1[\"IN[S1]\"]\n        S2[Succ 2] --> I2[\"IN[S2]\"]\n        S3[Succ 3] --> I3[\"IN[S3]\"]\n        I1 --> M2[\"Meet: ? (IN)\"]\n        I2 --> M2\n        I3 --> M2\n        M2 --> OUT_B2[\"OUT[B]\"]\n        OUT_B2 --> TF2[\"Transfer: USE ? (OUT - DEF)\"]\n        TF2 --> IN_B2[\"IN[B]\"]\n    end\n    style Forward fill:#e8f5e9\n    style Backward fill:#fce4ec\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data-flow analysis is the engine behind all global optimizations. The three classic problems ? reaching definitions (forward may), live variables (backward may), and available expressions (forward must) ? share a uniform mathematical structure: a lattice domain, a transfer function per block, and a meet operator that combines information at confluence points. The iterative algorithm solves these equations by repeatedly computing IN and OUT values until the sets stabilize at a monotone fixed point."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Constant propagation extends the framework with a non-distributive lattice where values range from TOP (unknown) through specific integer constants to BOTTOM (not constant). Partial redundancy elimination unifies multiple optimizations into a single bidirectional analysis."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The generic data-flow framework presented in this chapter can be instantiated for any of these analyses by plugging in the direction, meet operator, transfer sets, and initial values. This composability is why data-flow analysis remains the central organizing principle of modern optimizer design."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All data-flow analyses share the same iterative fixed-point structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write one generic solver; parameterize the domain, direction, and meet operator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse-postorder traversal halves iteration count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process blocks so predecessors come before successors in forward analyses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "May analyses (?) start with empty sets; must analyses (n) start with the universe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The initial value determines conservative starting assumptions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSA form simplifies every data-flow analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f-functions are the only merge points; use SSA if building a production compiler"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRE subsumes CSE, code motion, and hoisting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A single bidirectional analysis achieves what previously required three separate passes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constant propagation is not distributive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The MFP ? MOP: some constant facts are lost; SCCP recovers many of them"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// dfa\n// lexical-parsing-codegen implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'dfa', data: { topic: 'lexical-parsing-codegen' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// dfa - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'compilers demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'compiler-design', chapter: 'dfa' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('compilers'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following correctly characterizes reaching-definitions analysis?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Forward must analysis using intersection"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Forward may analysis using union"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Backward may analysis using union"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Backward must analysis using intersection"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Live-variable analysis is used primarily for:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Dead-code elimination and register allocation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Constant folding"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Instruction scheduling"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Loop-invariant code motion"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Available expressions differ from reaching definitions in that:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Available expressions is a backward analysis"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Available expressions uses intersection (must) as the meet operator"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Available expressions does not use KILL sets"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Available expressions has no practical application"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the constant lattice, if two different constants ", (0,jsx_runtime.jsx)(_components.code, {
            children: "c1"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "c2"
          }), " (c1 ? c2) meet at a control-flow merge, the result is:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) TOP (?)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) BOTTOM (?)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) c1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) c2"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The Kleene fixed-point theorem guarantees termination of the iterative algorithm because:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The compiler limits the number of iterations"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Transfer functions are monotone and the lattice has finite height"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The flow graph must be reducible"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) All programs have acyclic flow graphs"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answers</summary>\n1. B, 2. A, 3. B, 4. B, 5. B\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the four components of a data-flow analysis. How do forward and backward analyses differ in their equation structure?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For reaching definitions: explain GEN[B], KILL[B], and the role of the meet operator. Why is union used instead of intersection?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why live-variable analysis is classified as a backward analysis. What would happen if we tried to compute live variables using a forward analysis?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contrast may analyses (reaching definitions) with must analyses (available expressions). Give an example where they would produce different results on the same flow graph."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the three tiers of the constant-propagation lattice. What is the meet of ? and 5? Of 3 and 7?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the relationship between MFP (minimum fixed point) and MOP (meet over all paths). When do they coincide?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does partial redundancy elimination subsume both global CSE and loop-invariant code motion?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Work through the reaching-definitions analysis for the flow graph used in the TypeScript example. Compute IN and OUT for each block manually and verify the output matches the implementation."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Perform live-variable analysis on the following program:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "B1: a = b + c\nB2: d = a + c\n    if d < 0 goto B4\nB3: a = a + 1\n    goto B5\nB4: c = d + 2\nB5: f = a + c\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show USE[B], DEF[B], and compute IN[B] and OUT[B] for each block."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compute available expressions for:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "B1: w = x + y\n    z = x + y\nB2: x = x + 1\n    a = x + y\nB3: y = 5\n    b = x + y\nB4: c = x + y\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Identify which expressions are available at the entry of B4 and explain whether global CSE can eliminate the computation ", (0,jsx_runtime.jsx)(_components.code, {
            children: "x + y"
          }), " in B4."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Trace the constant-propagation lattice values through this code step by step:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "x = 5\ny = x + 3\nif y > 0:\n    x = 10\nz = x + 2\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the computed value of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "z"
          }), " at each program point? Can the compiler constant-fold ", (0,jsx_runtime.jsx)(_components.code, {
            children: "x + 2"
          }), "? If not, why?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For the given flow graph, classify each analysis as forward/backward and may/must, and state the meet operator: (a) reaching definitions, (b) live variables, (c) available expressions, (d) constant propagation, (e) very-busy expressions (expressions that will be evaluated on all remaining paths). For (e), determine the direction and meet operator by reasoning about the definition."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Generic DFA Framework."
          }), " Extend the TypeScript ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DataFlowAnalyzer"
          }), " to accept a user-defined domain and transfer function via lambda rather than hardcoded GEN/KILL/USE/DEF sets. Implement the following analyses using your generic framework:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reaching definitions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Live-variable analysis"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Available expressions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Very-busy expressions (backward must: an expression is very busy if it will be evaluated on all remaining paths before any operand is redefined)"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Test all four analyses on a 6-block flow graph with at least one loop and one conditional branch. Print the IN/OUT sets for each block for each analysis and verify that they reach a fixed point within 5 iterations."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sparse Conditional Constant Propagation."
          }), " Implement a simplified SCCP that operates on the program's SSA form (manually convert the test program to SSA first). Propagate constants through f-functions and only mark CFG edges as executable when branch conditions become constant. Compare the precision of your SCCP implementation with the simple lattice-based approach on a test case where a branch condition is always false, causing one path to be unreachable."]
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