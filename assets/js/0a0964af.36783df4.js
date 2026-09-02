"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[26900],{

/***/ 21481
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_artificial_intelligence_07_logical_reasoning_md_0a0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-artificial-intelligence-07-logical-reasoning-md-0a0.json
const site_docs_courses_artificial_intelligence_07_logical_reasoning_md_0a0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/artificial-intelligence/07-logical-reasoning","title":"Chapter 7: Logical Reasoning and Inference","description":"Previous Logical Agents and Propositional Logic | Next Uncertainty in AI","source":"@site/docs/courses/artificial-intelligence/07-logical-reasoning.md","sourceDirName":"courses/artificial-intelligence","slug":"/artificial-intelligence/07-logical-reasoning","permalink":"/ai-engineering-journey/artificial-intelligence/07-logical-reasoning","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"id":"07-logical-reasoning","slug":"/artificial-intelligence/07-logical-reasoning","title":"Chapter 7: Logical Reasoning and Inference","sidebar_label":"Chapter 7: Logical Reasoning and Inference","sidebar_position":13},"sidebar":"course-artificial-intelligence","previous":{"title":"Chapter 7: First-Order Logic and Inference","permalink":"/ai-engineering-journey/artificial-intelligence/07-fol"},"next":{"title":"Chapter 8: Planning","permalink":"/ai-engineering-journey/artificial-intelligence/08-planning"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/artificial-intelligence/07-logical-reasoning.md


const frontMatter = {
	id: '07-logical-reasoning',
	slug: '/artificial-intelligence/07-logical-reasoning',
	title: 'Chapter 7: Logical Reasoning and Inference',
	sidebar_label: 'Chapter 7: Logical Reasoning and Inference',
	sidebar_position: 13
};
const contentTitle = 'Chapter 7: Logical Reasoning and Inference';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Logical Reasoning Matters",
  "id": "why-logical-reasoning-matters",
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
  "value": "7.1 Unification",
  "id": "71-unification",
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
  "value": "Python Implementation",
  "id": "python-implementation",
  "level": 3
}, {
  "value": "C++ Implementation",
  "id": "c-implementation",
  "level": 3
}, {
  "value": "Java Implementation",
  "id": "java-implementation",
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
  "value": "7.2 Forward Chaining",
  "id": "72-forward-chaining",
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
  "value": "Python Implementation",
  "id": "python-implementation-1",
  "level": 3
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-1",
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
  "value": "7.3 Backward Chaining",
  "id": "73-backward-chaining",
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
  "value": "Python Implementation",
  "id": "python-implementation-2",
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
  "value": "Forward vs Backward Chaining",
  "id": "forward-vs-backward-chaining",
  "level": 2
}, {
  "value": "When to Use Which",
  "id": "when-to-use-which",
  "level": 3
}, {
  "value": "7.4 Resolution",
  "id": "74-resolution",
  "level": 2
}, {
  "value": "Definition",
  "id": "definition-3",
  "level": 3
}, {
  "value": "7.4.1 Conjunctive Normal Form (CNF)",
  "id": "741-conjunctive-normal-form-cnf",
  "level": 3
}, {
  "value": "7.4.2 Skolemization — Detailed Example",
  "id": "742-skolemization--detailed-example",
  "level": 3
}, {
  "value": "7.4.3 Resolution Rule",
  "id": "743-resolution-rule",
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
  "value": "Python Implementation",
  "id": "python-implementation-3",
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
  "value": "Resolution Strategies Comparison",
  "id": "resolution-strategies-comparison",
  "level": 3
}, {
  "value": "7.5 Horn Clauses",
  "id": "75-horn-clauses",
  "level": 2
}, {
  "value": "Definition",
  "id": "definition-4",
  "level": 3
}, {
  "value": "Why Horn Clauses Matter",
  "id": "why-horn-clauses-matter",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 3
}, {
  "value": "7.6 Prolog",
  "id": "76-prolog",
  "level": 2
}, {
  "value": "Definition",
  "id": "definition-5",
  "level": 3
}, {
  "value": "Structure",
  "id": "structure",
  "level": 3
}, {
  "value": "Example: Family Tree",
  "id": "example-family-tree",
  "level": 3
}, {
  "value": "Prolog Execution Trace",
  "id": "prolog-execution-trace",
  "level": 3
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 3
}, {
  "value": "Python Simulation",
  "id": "python-simulation",
  "level": 3
}, {
  "value": "7.7 Knowledge Engineering",
  "id": "77-knowledge-engineering",
  "level": 2
}, {
  "value": "Methodology",
  "id": "methodology",
  "level": 3
}, {
  "value": "Example: Electronic Circuits Domain",
  "id": "example-electronic-circuits-domain",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — Unification Rules",
  "id": "quick-reference--unification-rules",
  "level": 2
}, {
  "value": "Quick Reference — CNF Conversion Example",
  "id": "quick-reference--cnf-conversion-example",
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
  "value": "Common Questions",
  "id": "common-questions",
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
  "value": "Challenge Problems",
  "id": "challenge-problems",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Key Takeaway",
  "id": "key-takeaway",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    annotation: "annotation",
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
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mrow: "mrow",
    msub: "msub",
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
        id: "chapter-7-logical-reasoning-and-inference",
        children: "Chapter 7: Logical Reasoning and Inference"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/06-logic",
        children: "Chapter 6: Logical Agents and Propositional Logic"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/08-uncertainty",
        children: "Chapter 8: Uncertainty in AI"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the conclusion of this chapter, the student will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply unification with the occur check to compute the Most General Unifier (MGU) for any pair of logical expressions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement forward chaining for data-driven inference over Horn clause knowledge bases."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement backward chaining for goal-driven query answering with loop detection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduce any first-order logic formula to Conjunctive Normal Form (CNF) via Skolemization."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the resolution refutation proof procedure to determine logical entailment."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write basic Prolog programs using facts, rules, and queries."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the knowledge engineering methodology to design and debug logic-based systems."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-logical-reasoning-matters",
      children: "Why Logical Reasoning Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A detective arrives at a crime scene. The victim is on the floor, a window is broken, a safe is open, and footprints lead outside. The detective doesn not see the suspect — but from these clues (facts) and knowledge of how the world works (rules), she deduces: someone broke the window, entered, opened the safe, and fled through that window. She then works backward from a hypothesis — \"Was it the butler?\" — to check whether available evidence supports or refutes it. This dual-direction reasoning — forward from facts and backward from goals — is exactly what logical inference engines do."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In AI, logical reasoning is the engine that turns a static knowledge base into intelligent conclusions. Expert systems diagnose diseases from symptoms, theorem provers verify mathematical proofs, and Prolog programs answer queries by chaining through rules. Without inference, a knowledge base is just a pile of facts — with it, the KB becomes an intelligent agent that can answer questions, make decisions, and explain its reasoning."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Unification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finds the MGU that makes two logical expressions identical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for all inference — pattern matching with variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward Chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data-driven: apply rules to known facts to derive new facts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for monitoring, alerting, real-time systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backward Chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Goal-driven: start from query, work backward to known facts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for diagnosis, Q&A, interactive systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Refutation proof by contradiction via CNF clauses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete for full first-order logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Horn Clauses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clauses with at most one positive literal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable efficient linear-time inference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prolog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logic programming language using SLD resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Practical tool for symbolic AI and parsing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Knowledge Engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Methodology to build logic-based systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bridges domain expertise to formal KBs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Unification] --> B[Forward Chaining]\n    A --> C[Backward Chaining]\n    B --> D[Horn Clauses]\n    C --> D\n    D --> E[Prolog]\n    A --> F[Resolution]\n    F --> G[CNF Conversion]\n    G --> H[Skolemization]\n    F --> I[Resolution Strategies]\n    I --> J[Answer Extraction]\n    A --> K[Knowledge Engineering]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/artificial-intelligence/ch07-logical-reasoning.png",
        alt: "Logical Reasoning and Inference"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "71-unification",
      children: "7.1 Unification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Two people are describing the same person. One says \"the mother of X\" and the other says \"the mother of Alice.\" Unification finds that if X = Alice, both descriptions match — and it does so with the fewest assumptions possible (the Most General Unifier)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Unification is the process of finding a substitution ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "h"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "theta"
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
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "h"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            })]
          })
        })]
      }), " that makes two logical expressions identical. A substitution ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "h"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "v"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "t"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "v"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "t"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "."
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "."
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "."
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "v"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "t"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "theta = {v_1/t_1, v_2/t_2, ..., v_n/t_n}"
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
                height: "0.6944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "h"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
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
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0359em"
                  },
                  children: "v"
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
                            marginLeft: "-0.0359em",
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
                className: "mord",
                children: "/"
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "t"
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
                  style: {
                    marginRight: "0.0359em"
                  },
                  children: "v"
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
                            marginLeft: "-0.0359em",
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
                className: "mord",
                children: "/"
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "t"
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
                className: "mord",
                children: "..."
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
                    marginRight: "0.0359em"
                  },
                  children: "v"
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
                            marginLeft: "-0.0359em",
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
                className: "mord",
                children: "/"
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "t"
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
              })]
            })]
          })]
        })]
      }), " maps variables to terms. The application of ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "h"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "theta"
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
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "h"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            })]
          })
        })]
      }), " to expression ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "E"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "E"
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
                marginRight: "0.0576em"
              },
              children: "E"
            })]
          })
        })]
      }), ", written ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "E"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "h"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "Etheta"
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
                marginRight: "0.0576em"
              },
              children: "E"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "h"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "t"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            })]
          })
        })]
      }), ", replaces each variable ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "v"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "v_i"
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
                height: "0.5806em",
                verticalAlign: "-0.15em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "v"
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
                          marginLeft: "-0.0359em",
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
      }), " with term ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "t"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "t_i"
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
                height: "0.7651em",
                verticalAlign: "-0.15em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "t"
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
            })]
          })
        })]
      }), ", with all occurrences replaced simultaneously."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Standardization apart"
      }), " renames variables to avoid naming conflicts. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "most general unifier (MGU)"
      }), " is the substitution that imposes the fewest constraints while achieving unification — any other unifier is a specialization of the MGU."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If theta is already failure, return failure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the two expressions are identical, return theta (success)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If one expression is a variable, call UNIFY-VAR to bind it."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If both are compound expressions (e.g., predicates with arguments), recursively unify the operators (function/predicate names) and then the argument lists."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If both are lists (e.g., argument lists), recursively unify the first elements and then the rest."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In all other cases, return failure."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function UNIFY(x, y, theta) returns substitution or failure\n    if theta = failure then return failure\n    if x = y then return theta\n    if VARIABLE?(x) then return UNIFY-VAR(x, y, theta)\n    if VARIABLE?(y) then return UNIFY-VAR(y, x, theta)\n    if COMPOUND?(x) and COMPOUND?(y) then\n        return UNIFY(ARGS(x), ARGS(y), UNIFY(OP(x), OP(y), theta))\n    if LIST?(x) and LIST?(y) then\n        return UNIFY(REST(x), REST(y), UNIFY(FIRST(x), FIRST(y), theta))\n    return failure\n\nfunction UNIFY-VAR(var, x, theta) returns substitution\n    if {var/val} in theta then return UNIFY(val, x, theta)\n    if {x/val} in theta then return UNIFY(var, val, theta)\n    if OCCUR-CHECK?(var, x) then return failure\n    return theta U {var/x}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Unify P(f(x), y) and P(z, g(z))"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current Theta"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(f(x), y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(z, g(z))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both compound, operators P == P match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[f(x), y]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[z, g(z)]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse on argument lists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "z is variable, bind z/f(x)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "{z/f(x)}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNIFY-VAR(z, f(x)) -> theta = {z/f(x)}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[y]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[g(z)]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{z/f(x)}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse on rest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "g(z)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{z/f(x)}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y is variable, g(z) with theta = g(f(x)), no x in f(x)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "{z/f(x), y/g(f(x))}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNIFY-VAR(y, g(f(x))) -> theta = {z/f(x), y/g(f(x))}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{z/f(x), y/g(f(x))}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both empty -> return theta"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MGU:"
      }), " {z/f(x), y/g(f(x))}"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time worst-case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each variable binding triggers recursive traversal; term size grows with substitution application"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Substitution size grows linearly with the number of variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Occur check"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) per call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must scan the term to verify the variable does not appear inside it"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(n^2)?"
      }), " In the worst case, each variable binds to increasingly larger terms. For example, unifying P(x_1, x_2, ..., x_n) with P(f(x_0), f(x_1), ..., f(x_n-1)) creates substitutions that grow each step, and each new binding scans the growing term."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def unify(x, y, theta=None):\n    \"\"\"Unify two expressions with substitution theta.\"\"\"\n    if theta is None:\n        theta = {}\n    if theta is False:\n        return False\n    if x == y:\n        return theta\n    if is_variable(x):\n        return unify_var(x, y, theta)\n    if is_variable(y):\n        return unify_var(y, x, theta)\n    if is_compound(x) and is_compound(y):\n        if x[0] != y[0]:\n            return False\n        return unify(x[1:], y[1:], theta)\n    if isinstance(x, (list, tuple)) and isinstance(y, (list, tuple)):\n        if len(x) != len(y):\n            return False\n        if len(x) == 0:\n            return theta\n        return unify(x[1:], y[1:], unify(x[0], y[0], theta))\n    return False\n\ndef is_variable(term):\n    return isinstance(term, str) and term[0].islower()\n\ndef is_compound(term):\n    return isinstance(term, (list, tuple)) and len(term) > 0 and not is_variable(term[0])\n\ndef unify_var(var, x, theta):\n    if var in theta:\n        return unify(theta[var], x, theta)\n    if isinstance(x, str) and x in theta:\n        return unify(var, theta[x], theta)\n    if occur_check(var, x, theta):\n        return False\n    theta = theta.copy()\n    theta[var] = x\n    return theta\n\ndef occur_check(var, x, theta):\n    \"\"\"Return True if var occurs in x (after applying theta).\"\"\"\n    if var == x:\n        return True\n    if isinstance(x, str) and x in theta:\n        return occur_check(var, theta[x], theta)\n    if isinstance(x, (list, tuple)):\n        return any(occur_check(var, arg, theta) for arg in x)\n    return False\n\n# Example\nexpr1 = ('P', ('f', 'x'), 'y')\nexpr2 = ('P', 'z', ('g', 'z'))\nresult = unify(expr1, expr2)\nprint(f\"MGU: {result}\")\n# Output: MGU: {'z': ('f', 'x'), 'y': ('g', ('f', 'x'))}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <map>\n#include <vector>\n#include <string>\n#include <variant>\n#include <optional>\n\nusing Term = std::variant<std::string, std::vector<class Expr>>;\n// Simplified representation using strings\nstd::optional<std::map<std::string, std::string>> unify(\n    const std::string& x, const std::string& y,\n    std::map<std::string, std::string> theta) {\n    if (x == y) return theta;\n    // Variable detection: single lowercase letter\n    if (x.length() == 1 && islower(x[0])) {\n        if (theta.count(x)) return unify(theta[x], y, theta);\n        if (y.length() == 1 && islower(y[0]) && theta.count(y))\n            return unify(x, theta[y], theta);\n        theta[x] = y;\n        return theta;\n    }\n    if (y.length() == 1 && islower(y[0])) {\n        if (theta.count(y)) return unify(x, theta[y], theta);\n        theta[y] = x;\n        return theta;\n    }\n    return std::nullopt; // Failure\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "java-implementation",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class Unifier {\n    private Map<String, String> theta;\n\n    public Unifier() {\n        theta = new HashMap<>();\n    }\n\n    public Map<String, String> unify(String x, String y) {\n        if (x.equals(y)) return theta;\n        if (isVariable(x)) return unifyVar(x, y);\n        if (isVariable(y)) return unifyVar(y, x);\n        return null; // Failure\n    }\n\n    private boolean isVariable(String s) {\n        return s.length() == 1 && Character.isLowerCase(s.charAt(0));\n    }\n\n    private Map<String, String> unifyVar(String var, String x) {\n        if (theta.containsKey(var))\n            return new Unifier() {{ theta.putAll(Unifier.this.theta); }}\n                .unify(theta.get(var), x);\n        if (isVariable(x) && theta.containsKey(x))\n            return unify(var, theta.get(x));\n        theta.put(var, x);\n        return theta;\n    }\n}\n"
      })
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
            children: "Foundation for all logical inference in AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^2) worst-case time complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MGU ensures most general binding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occur check is expensive and often omitted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles variables, constants, functions, predicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot unify expressions with different operators/arities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables pattern matching across complex expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circular substitutions require careful detection"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identical constants:"
        }), " A unifies with A -> success, empty substitution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Circular substitution:"
        }), " UNIFY(x, f(x)) -> failure (occur check catches circularity)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Different predicate names:"
        }), " P(x) with Q(x) -> failure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Different arity:"
        }), " P(x, y) with P(z) -> failure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Already-bound variable:"
        }), " If x/y is in theta and we encounter x again, substitute y first."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "72-forward-chaining",
      children: "7.2 Forward Chaining"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A smart home system monitors sensors continuously. When motion is detected (fact) AND it is after sunset (fact), the system turns on the lights (new fact). New facts trigger further rules — if lights turned on AND no motion for 10 minutes, turn lights off. Reasoning flows from data forward to conclusions, like an assembly line processing raw materials into finished products."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-1",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Forward chaining applies inference rules to known facts, deriving new facts until the query is proved or no further inferences are possible. It is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "data-driven"
      }), ": reasoning proceeds from premises toward conclusions. For Horn clause knowledge bases, forward chaining is both sound and complete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-1",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with the set of all atomic facts in the KB."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each rule whose antecedent (premise) is fully satisfied by current facts:\na. Compute all substitutions theta that make the antecedent match the facts.\nb. Add the instantiated consequent to the new fact set."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no new facts were derived in this iteration, stop (fixed point reached)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otherwise, merge new facts into the fact set and repeat from step 2."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the goal appears in the fact set at any point, return TRUE."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function FORWARD-CHAIN(KB, rules) returns new facts\n    facts <- set of all atomic sentences in KB\n    loop do\n        new_facts <- empty set\n        for each rule (antecedent => consequent) in rules do\n            substitutions <- all theta such that antecedent theta subset facts\n            for each theta in substitutions do\n                new_facts <- new_facts U {CONSEQUENT theta}\n        if new_facts subset facts then\n            return facts    // Fixed point\n        facts <- facts U new_facts\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-1",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "KB:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Facts: A, B"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rules: A ^ B => C, C ^ D => E, B => D"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Facts"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rules Triggered"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "New Facts"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Agenda"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A, B}"
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
            children: "{A, B}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A^B=>C, B=>D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{C, D}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A^B=>C -> C; B=>D -> D"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A, B, C, D}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C^D=>E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{E}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C^D=>E -> E"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A, B, C, D, E}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed point, stop"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Query:"
      }), " Does KB entail E? ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Yes"
      }), " — E is in the final fact set."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (propositional)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n * m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n facts * m rules; each iteration checks all rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (FOL)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n * m * k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each antecedent match requires k unification attempts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stores facts and rules linearly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Iterations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(p) where p = deepest rule chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each iteration adds facts; at most p iterations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why linear for propositional Horn?"
      }), " With count-tracking (track how many antecedent literals remain unsatisfied per rule), each rule fires at most once per new fact. Total work = O(n * m)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-1",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def forward_chain(kb_facts, kb_rules, goal=None):\n    \"\"\"\n    Forward chaining inference.\n\n    kb_facts: set of strings representing atomic facts\n    kb_rules: list of (antecedents, consequent) tuples\n              where antecedents is a set of fact strings\n    goal: optional string to check\n    Returns: (final_facts, goal_reached)\n    \"\"\"\n    facts = set(kb_facts)\n    rules_triggered = True\n\n    while rules_triggered:\n        rules_triggered = False\n        print(f\"Current facts: {facts}\")\n        for antecedents, consequent in kb_rules:\n            if antecedents.issubset(facts) and consequent not in facts:\n                facts.add(consequent)\n                rules_triggered = True\n                print(f\"  Triggered: {antecedents} => {consequent}\")\n                if goal and consequent == goal:\n                    return facts, True\n    return facts, goal in facts if goal else False\n\n# Example: Animal identification\nrules = [\n    ({'has_fur', 'eats_meat'}, 'is_carnivore'),\n    ({'has_fur', 'is_carnivore'}, 'is_mammal'),\n    ({'is_mammal', 'has_stripes'}, 'is_tiger'),\n]\nfacts = {'has_fur', 'eats_meat', 'has_stripes'}\n\nfinal, reached = forward_chain(facts, rules, 'is_tiger')\nprint(f\"\\nGoal reached: {reached}\")\nprint(f\"Final facts: {final}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation-1",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <set>\n#include <vector>\n#include <map>\n#include <string>\n\nusing namespace std;\n\nset<string> forwardChain(\n    set<string> facts,\n    vector<pair<set<string>, string>> rules,\n    const string& goal = \"\") {\n    bool changed = true;\n    while (changed) {\n        changed = false;\n        for (auto& [ante, conseq] : rules) {\n            bool allPresent = true;\n            for (const string& a : ante)\n                if (!facts.count(a)) { allPresent = false; break; }\n            if (allPresent && !facts.count(conseq)) {\n                facts.insert(conseq);\n                changed = true;\n                cout << \"Derived: \" << conseq << endl;\n                if (!goal.empty() && conseq == goal) return facts;\n            }\n        }\n    }\n    return facts;\n}\n"
      })
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
            children: "Sound and complete for Horn clause KBs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May derive many irrelevant facts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data-driven — ideal for monitoring/alerting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inefficient if KB has many unrelated rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Each new fact is derivable and explainable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-point iteration may take many rounds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linear-time for propositional Horn clauses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires all antecedents to match exactly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naturally handles continuous fact arrival"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for large FOL KBs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty KB (no facts):"
        }), " No rules trigger; returns empty set immediately."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cyclic rules:"
        }), " A => B, B => A. With A only — first iteration adds B; second finds nothing new (A already present) -> fixed point in 2 iterations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conflicting rules:"
        }), " Horn clauses cannot represent negation in consequents, so A => B and A => not-B does not arise."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deep chains:"
        }), " K rules forming a chain need K iterations to reach fixed point."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "73-backward-chaining",
      children: "7.3 Backward Chaining"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A doctor diagnosing a patient: \"Does this patient have influenza?\" She works backward: influenza causes fever, cough, and body aches. Does the patient have fever? Yes. Cough? Yes. Body aches? No. But influenza also sometimes causes headache. Does the patient have headache? Yes. Enough evidence to confirm. Backward chaining starts from the hypothesis (goal) and works backward through rules until it reaches known facts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-2",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Backward chaining starts from the query (goal) and works backward, attempting to find a chain of rules that supports the query. It is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "goal-driven"
      }), ": reasoning proceeds from conclusions toward premises. Backward chaining is depth-first, making it memory-efficient but potentially incomplete without loop detection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-2",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with the query as the goal list."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the goal list is empty, return success with the current substitution."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Take the first goal from the list."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each sentence in the KB that unifies with this goal:\na. Compute the unifying substitution theta-prime.\nb. Replace the goal with the rule's premises (if a rule) or nothing (if a fact).\nc. Recursively prove all new subgoals with the updated substitution.\nd. If successful, return the result."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no sentence matches, return failure (backtrack)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function BACKWARD-CHAIN(KB, query) returns set of substitutions\n    return BACKWARD-CHAIN-LIST(KB, [query], {})\n\nfunction BACKWARD-CHAIN-LIST(KB, goals, theta) returns set of substitutions\n    if EMPTY?(goals) then return {theta}\n    q <- FIRST(goals)\n    for each sentence s in KB that UNIFIES with q do\n        theta-prime <- UNIFY(q, s, theta)\n        if theta-prime != failure then\n            premises <- REST(s)   // Antecedents of a rule, empty for facts\n            results <- BACKWARD-CHAIN-LIST(KB, premises + REST(goals), theta-prime)\n            if results != empty then return results\n    return failure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-2",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "KB:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C => E  (if C then E)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A ^ B => C  (if A and B then C)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D => B  (if D then B)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A (fact)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D (fact)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Query:"
      }), " E?"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Goal Stack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current Theta"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "KB Sentence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Unifies?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "New Subgoals"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[E]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start with query"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[E]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C=>E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes, theta={}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[C]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push premise C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[C]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A^B=>C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes, theta={}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A, B]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push premises A, B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A, B]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes, theta={}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[B]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop A (fact found)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[B]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D=>B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes, theta={}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[D]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push premise D"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[D]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes, theta={}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop D (fact found)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Success!"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time worst-case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b^d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Branching factor b (KB sentences per goal) and depth d of proof tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depth-first stores one path at a time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unification per step"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each goal-sentence match requires unification"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why exponential?"
      }), " Each goal may match multiple KB sentences, creating a branching search tree. Without heuristics, backward chaining explores the entire tree. With memoization for propositional Horn clauses, it becomes linear."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-2",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def backward_chain(kb, query, theta=None, depth=0, max_depth=100):\n    \"\"\"\n    Backward chaining with depth limit to prevent infinite loops.\n\n    kb: list of (head, body) pairs where body is a list of subgoals (empty for facts)\n    query: the goal to prove\n    theta: current substitution\n    Returns: (success, final_substitution)\n    \"\"\"\n    if theta is None:\n        theta = {}\n    if depth > max_depth:\n        return False, theta\n\n    for head, body in kb:\n        new_theta = unify_simple(head, query, theta)\n        if new_theta is not False:\n            if not body:  # Fact\n                return True, new_theta\n            # Rule — try to prove all subgoals\n            current_theta = dict(new_theta)\n            success = True\n            for subgoal in body:\n                sub_goal = substitute(subgoal, current_theta)\n                ok, current_theta = backward_chain(kb, sub_goal, current_theta,\n                                                    depth + 1, max_depth)\n                if not ok:\n                    success = False\n                    break\n            if success:\n                return True, current_theta\n    return False, theta\n\ndef unify_simple(a, b, theta):\n    a_sub = substitute(a, theta)\n    b_sub = substitute(b, theta)\n    return dict(theta) if a_sub == b_sub else False\n\ndef substitute(expr, theta):\n    return theta.get(expr, expr)\n\n# Example: Family relationships\nkb = [\n    ('parent(alice,bob)', []),\n    ('parent(bob,carol)', []),\n    ('parent(carol,dave)', []),\n    ('grandparent(X,Y)', ['parent(X,Z)', 'parent(Z,Y)']),\n    ('ancestor(X,Y)', ['parent(X,Y)']),\n    ('ancestor(X,Y)', ['parent(X,Z)', 'ancestor(Z,Y)']),\n]\n\nprint(\"Query: grandparent(alice,carol)?\")\nok, _ = backward_chain(kb, 'grandparent(alice,carol)')\nprint(f\"Result: {ok}\")\n# Output: True\n\nprint(\"\\nQuery: grandparent(alice,dave)?\")\nok, _ = backward_chain(kb, 'grandparent(alice,dave)')\nprint(f\"Result: {ok}\")\n# Output: False (need 3 parent hops, rule only chains 2)\n"
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Goal-directed — only explores relevant rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFS can loop on recursive rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory-efficient (O(d) space)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May miss solutions on infinite branches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Natural for diagnosis and Q&A systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not complete for full FOL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easily explainable — shows proof chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Branching causes exponential blowup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forms the basis of Prolog execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensitive to rule ordering in KB"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recursive rules without base case:"
        }), " ancestor(X,Y) :- parent(X,Z), ancestor(Z,Y) without base fact -> infinite loop."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cyclic KB:"
        }), " P :- Q and Q :- P — query loops forever without loop detection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple matching rules:"
        }), " May succeed with first match but fail on later subgoals — backtracking needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Goal not in KB:"
        }), " Returns failure after exhaustive search."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Depth-limited search:"
        }), " May miss valid proofs exceeding the depth bound."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "forward-vs-backward-chaining",
      children: "Forward vs Backward Chaining"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Forward Chaining"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Backward Chaining"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Direction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data-driven (facts -> conclusions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Goal-driven (conclusions -> facts)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Starting point"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Known facts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query / hypothesis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Search strategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breadth-first (all rules every iteration)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depth-first (one proof path)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "KB type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horn clauses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horn clauses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Completeness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete for Horn clauses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incomplete (DFS can loop)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + m) — stores all facts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(d) — stores one proof path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Irrelevant work"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May derive unnecessary facts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only explores relevant rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring, alerting, real-time systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diagnosis, Q&A, interactive systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Explainability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shows which facts triggered which rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shows which subgoals proved the query"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation basis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CLIPS, OPS5, Drools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prolog, backward inference engines"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-which",
      children: "When to Use Which"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use forward chaining"
        }), " when: facts arrive incrementally (sensor data, event streams), you need all possible conclusions (monitoring), or the number of potential goals is unknown."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use backward chaining"
        }), " when: you have a specific question to answer (diagnosis), interactive why-explanation is needed, or the KB is large but queries are few."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "74-resolution",
      children: "7.4 Resolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A lawyer in court tries to prove the defendant is guilty. She assumes the opposite — that the defendant is innocent — and shows this assumption leads to a contradiction with the evidence. Since the assumption is impossible, the defendant must be guilty. Resolution proves a statement by assuming its negation and deriving a contradiction (the empty clause)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-3",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Resolution is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "complete"
      }), " inference method for first-order logic. Unlike forward/backward chaining (which work only for Horn clauses), resolution handles the full expressivity of FOL. It refutes the negation of the query by deriving a contradiction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "741-conjunctive-normal-form-cnf",
      children: "7.4.1 Conjunctive Normal Form (CNF)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Resolution requires all formulas to be in Conjunctive Normal Form: a conjunction of clauses, where each clause is a disjunction of literals."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Conversion Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eliminate implications:"
        }), " Replace alpha => beta with not-alpha v beta."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Move not inward:"
        }), " Use De Morgan laws."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standardize variables apart:"
        }), " Rename variables so each quantifier binds a unique variable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Skolemize existential quantifiers:"
        }), " Replace existential y with Skolem function f(x_1, ..., x_n)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drop universal quantifiers:"
        }), " All remaining variables are universally quantified."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distribute v over ^:"
        }), " Convert to conjunction of disjunctions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "742-skolemization--detailed-example",
      children: "7.4.2 Skolemization — Detailed Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Skolemization removes existential quantifiers by introducing fresh function symbols."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Original:"
      }), " for all x, exists y, Loves(x, y) — \"Everyone loves someone.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Skolemized:"
      }), " for all x, Loves(x, f(x)) — Replace y with Skolem function f(x)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Without dependencies (exists outside for all):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "exists y, for all x, Loves(x, y) — \"Someone is loved by everyone.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skolemized: Loves(x, c) — Replace y with Skolem constant c (no dependency on x)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "743-resolution-rule",
      children: "7.4.3 Resolution Rule"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For two clauses C_1 and C_2 with complementary literals l_1 in C_1 and not-l_2 in C_2 that unify under theta:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Resolve(C_1, C_2) = (C_1 * theta - l_1 * theta) U (C_2 * theta - l_2 * theta)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-3",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert KB U {not-alpha} to CNF — this is the clause set."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat:\na. Select two clauses C_i and C_j containing complementary literals.\nb. Unify the complementary literals.\nc. Generate the resolvent (union of both clauses minus the resolved literals).\nd. If the resolvent is the empty clause, return TRUE (entailment proved).\ne. Add the resolvent to the clause set."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no new clauses can be generated and empty clause has not been found, return FALSE."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function RESOLUTION(KB, alpha) returns true if KB entails alpha\n    clauses <- CNF(KB U {not alpha})\n    loop do\n        new <- empty set\n        for each pair of clauses (C_i, C_j) in clauses do\n            resolvents <- RESOLVE(C_i, C_j)\n            if resolvents contains empty clause then return true\n            new <- new U resolvents\n        if new subset clauses then return false\n        clauses <- clauses U new\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-3",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "KB:"
      }), " A => B, B => C, A"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Query:"
      }), " Does KB entail C?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Convert to CNF"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A => B -> not A v B"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B => C -> not B v C"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A -> A"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "not C (negation of query)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Clause set:"
      }), " {not A v B, not B v C, A, not C}"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Clause 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Clause 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Unifier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolvent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "not A v B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resolve on A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "not B v C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resolve on B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "not C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty Clause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Contradiction!"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " KB entails C is TRUE."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (propositional)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2^n) worst-case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clauses can grow exponentially with each resolution step"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (FOL)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undecidable in general"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOL is semi-decidable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2^n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New clauses generated combinatorially"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Subsumption pruning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Helps significantly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove redundant clauses"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why exponential?"
      }), " Each pair of clauses can potentially be resolved. With n clauses, O(n^2) pairs per iteration, and each may add new clauses, leading to exponential growth."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-implementation-3",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def to_cnf(expr):\n    \"\"\"Convert simple propositional expression to CNF.\"\"\"\n    if '=>' in expr:\n        lhs, rhs = [s.strip() for s in expr.split('=>')]\n        if '&' in lhs:\n            ante = [a.strip() for a in lhs.split('&')]\n            return [{f\"~{a}\" for a in ante} | {rhs}]\n        return [{f\"~{lhs}\", rhs}]\n    return [{expr.strip()}]\n\ndef resolve(c1, c2):\n    \"\"\"Resolve two clauses. Returns list of resolvents.\"\"\"\n    resolvents = []\n    for l1 in c1:\n        for l2 in c2:\n            comp = (l1.startswith('~') and l2 == l1[1:]) or \\\n                   (l2.startswith('~') and l1 == l2[1:])\n            if comp:\n                r = (c1 - {l1}) | (c2 - {l2})\n                if not any(f\"~{l}\" in r for l in r if not l.startswith('~')):\n                    resolvents.append(r)\n    return resolvents\n\ndef resolution_prover(kb, query):\n    \"\"\"Resolution refutation theorem prover (propositional).\"\"\"\n    clauses = []\n    for s in kb:\n        clauses.extend(to_cnf(s))\n    clauses.extend(to_cnf(f\"~{query}\" if not query.startswith('~') else query))\n    print(f\"Clauses: {clauses}\")\n\n    iteration = 0\n    while True:\n        iteration += 1\n        new_c = []\n        n = len(clauses)\n        for i in range(n):\n            for j in range(i + 1, n):\n                res = resolve(clauses[i], clauses[j])\n                for r in res:\n                    if not r:\n                        print(f\"  Empty clause found\")\n                        return True\n                    if r not in clauses and r not in new_c:\n                        new_c.append(r)\n        if not new_c:\n            return False\n        clauses.extend(new_c)\n\n# Example\nprint(resolution_prover([\"A => B\", \"B => C\", \"A\"], \"C\"))\n"
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complete for full first-order logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential worst-case complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single rule suffices for all inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOL is semi-decidable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Elegant mathematical foundation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CNF conversion loses structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles negation, disjunction, quantifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires strategy to control clause growth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Basis for automated theorem proving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not intuitive for humans"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty KB:"
        }), " No clauses to resolve."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tautological query:"
        }), " empty clause immediately."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contradictory KB:"
        }), " Can prove any query."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Infinite loops in FOL:"
        }), " May never terminate if KB does not entail alpha."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resolution-strategies-comparison",
      children: "Resolution Strategies Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Complete?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Efficiency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unit preference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer resolving with unit clauses (single literal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Reduces clause size quickly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Set of support"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One clause must be from negated query or its descendants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Dramatically reduces pairs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Input resolution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One clause must be from original KB or query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Very fast"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linear resolution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One clause is the most recent resolvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Good balance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Subsumption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove clauses subsumed by more general ones"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Reduces clause set size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ordered resolution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only resolve on leftmost literal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Eliminates symmetric pairs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best practical strategy:"
      }), " Set of support + unit preference + subsumption."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "75-horn-clauses",
      children: "7.5 Horn Clauses"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A recipe book where every recipe has exactly one result (one dish) but may require multiple ingredients. This is the key constraint of Horn clauses: one positive literal, zero or more negative literals."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-4",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Horn clause"
      }), " is a clause with at most one positive literal. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "definite clause"
      }), " has exactly one positive literal."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Facts:"
        }), " P (one positive, no negatives) — \"It is raining.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rules:"
        }), " not-P v not-Q v R (equivalent to P ^ Q => R) — \"If raining and windy, take umbrella.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Goal clauses:"
        }), " not-P v not-Q (all negative) — \"Prove P and Q.\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-horn-clauses-matter",
      children: "Why Horn Clauses Matter"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Horn Clauses"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "General FOL"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear time O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential / undecidable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backward chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete (with loop detection)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incomplete (DFS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expressiveness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited to definite clauses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full logical expressivity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prolog support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core language feature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not directly supported"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-Horn clause:"
        }), " P v Q (two positive literals) — requires full resolution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty clause:"
        }), " Represents contradiction/false."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unit clause:"
        }), " Single literal — the simplest fact."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "76-prolog",
      children: "7.6 Prolog"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Prolog is like a database that not only stores facts but also knows how to answer questions by chaining through rules."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-5",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Prolog (Programming in Logic) is a logic programming language based on Horn clauses. A Prolog program consists of facts, rules, and queries. Execution uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SLD resolution"
      }), " (Selective Linear Definite-clause resolution) — backward chaining with depth-first search."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "structure",
      children: "Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Facts:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "parent(john, mary)."
        }), " — unconditional truths."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rules:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "grandparent(X, Z) :- parent(X, Y), parent(Y, Z)."
        }), " — conditional truths."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Queries:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?- grandparent(john, Who)."
        }), " — goals to prove."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-family-tree",
      children: "Example: Family Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-prolog",
        children: "% Facts\nparent(john, mary).\nparent(mary, ann).\nparent(john, bob).\nparent(bob, carol).\n\n% Rules\ngrandparent(X, Z) :- parent(X, Y), parent(Y, Z).\nsibling(X, Y) :- parent(Z, X), parent(Z, Y), X \\= Y.\n\n% Queries\n% ?- grandparent(john, ann).     -> true\n% ?- grandparent(john, carol).   -> false\n% ?- sibling(mary, bob).         -> true\n% ?- sibling(mary, ann).         -> false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prolog-execution-trace",
      children: "Prolog Execution Trace"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For query ", (0,jsx_runtime.jsx)(_components.code, {
        children: "grandparent(john, ann)"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Goal Stack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule Applied"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bindings"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "grandparent(john, ann)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "grandparent(X,Z) :- parent(X,Y), parent(Y,Z)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X=john, Z=ann"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parent(john, Y), parent(Y, ann)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parent(john, mary)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y=mary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parent(mary, ann)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parent(mary, ann)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Success"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No occur check:"
        }), " X = f(X) succeeds, creating infinite terms."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Depth-first search:"
        }), " May miss solutions due to infinite left recursion."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cut operator (!):"
        }), " Controls backtracking but breaks declarative semantics."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-simulation",
      children: "Python Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PrologEngine:\n    def __init__(self):\n        self.facts = set()\n        self.rules = []\n\n    def fact(self, name, *args):\n        self.facts.add((name, tuple(args)))\n\n    def rule(self, head_name, head_args, body):\n        self.rules.append(((head_name, tuple(head_args)), body))\n\n    def query(self, name, *args, visited=None):\n        if visited is None:\n            visited = set()\n        goal = (name, tuple(args))\n        if goal in visited:\n            return []\n        visited = visited | {goal}\n        solutions = []\n\n        for f_name, f_args in self.facts:\n            if f_name == name and len(f_args) == len(args):\n                if all(ga is None or ga == fa for ga, fa in zip(args, f_args)):\n                    solutions.append({})\n\n        for (h_name, h_args), body in self.rules:\n            if h_name == name and len(h_args) == len(args):\n                var_map = {ha: ga for ga, ha in zip(args, h_args) if ga is not None}\n                sub_solutions = [{}]\n                for b_name, b_args in body:\n                    new_subs = []\n                    for s in sub_solutions:\n                        mapped = [var_map.get(a, a) for a in b_args]\n                        res = self.query(b_name, *mapped, visited=visited)\n                        new_subs.extend(res)\n                    sub_solutions = new_subs\n                    if not sub_solutions:\n                        break\n                solutions.extend(sub_solutions)\n        return solutions\n\nengine = PrologEngine()\nengine.fact('parent', 'john', 'mary')\nengine.fact('parent', 'mary', 'ann')\nengine.rule('grandparent', ['X', 'Z'], [('parent', ['X', 'Y']), ('parent', ['Y', 'Z'])])\nprint(engine.query('grandparent', 'john', 'ann'))\nprint(engine.query('grandparent', None, 'ann'))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "77-knowledge-engineering",
      children: "7.7 Knowledge Engineering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Building an expert system is like writing an operations manual for a nuclear power plant. You must identify every decision the operator makes, encode the domain knowledge precisely, and verify the system handles all scenarios correctly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "methodology",
      children: "Methodology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify the task:"
        }), " Determine the questions the system must answer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assemble relevant knowledge:"
        }), " Consult domain experts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Choose a vocabulary:"
        }), " Define predicates, functions, and constants."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encode general knowledge:"
        }), " Write axioms for domain rules."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encode specific problem instances:"
        }), " Add facts about the particular case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test and debug:"
        }), " Verify against expected inferences."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-electronic-circuits-domain",
      children: "Example: Electronic Circuits Domain"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-prolog",
        children: "% Types of gates\ngate(and, g1).  gate(or, g2).   gate(not, g3).\n\n% Connections\nconn(g1, out, g2, in1).\nconn(g3, out, g2, in2).\n\n% Inputs\ninput(g1, in1, 1).\ninput(g1, in2, 0).\n\n% Signal propagation\nsignal(Gate, Output, Value) :-\n    gate(and, Gate),\n    signal(Gate, in1, V1),\n    signal(Gate, in2, V2),\n    Value is V1 * V2.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Inference Method"
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
            children: "KB Format"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward Chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes (Horn)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Horn clauses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring, alerting, real-time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backward Chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes (Horn with loop detection)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Horn clauses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diagnosis, Q&A, interactive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes (FOL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "CNF clauses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theorem proving, verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLD Resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No (DFS limitation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Horn clauses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prolog execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unit Resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No (not complete alone)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "CNF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast approximate proofs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--unification-rules",
      children: "Quick Reference — Unification Rules"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expression 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "MGU"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Can Unify?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P(x, A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(B, y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{x/B, y/A}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P(f(x), y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(z, g(z))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{z/f(x), y/g(f(x))}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P(x, f(x))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(y, y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No (occur check)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P(x, x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(A, B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No (A != B)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P(A, B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P(A, B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "{}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes (already identical)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "P(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No (different predicates)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--cnf-conversion-example",
      children: "Quick Reference — CNF Conversion Example"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule Applied"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "for all x, (for all y, P(x,y)) => not for all y, Q(x,y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Original"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "for all x, not(for all y, P(x,y)) v not(for all y, Q(x,y))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminate =>"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "for all x, (exists y, not P(x,y)) v exists y, not Q(x,y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move not inward"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "for all x, (exists y, not P(x,y)) v exists z, not Q(x,z)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standardize apart"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "for all x, (not P(x, f(x))) v not Q(x, g(x))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skolemize"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "not P(x, f(x)) v not Q(x, g(x))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drop for all"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{not P(x, f(x)) v not Q(x, g(x))}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CNF (single clause)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Systems"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            }
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            }
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
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward Chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            }
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            }
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
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backward Chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            }
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            }
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
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            }
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            }
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            }
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            }
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prolog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            }
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            }
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
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Knowledge Engineering"
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
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the difference between forward and backward chaining? When would you use each?"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Forward chaining is data-driven (start from facts, derive conclusions). Backward chaining is goal-driven (start from query, work backward to facts). Use forward chaining for monitoring/real-time systems; use backward chaining for diagnosis/interactive Q&A."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Why is resolution refutation complete?"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Resolution is refutation-complete because applying the resolution rule exhaustively derives the empty clause if and only if the clause set is unsatisfiable. This follows from the ground resolution theorem: for any unsatisfiable set of ground clauses, the empty clause can be derived in finitely many steps."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What are Horn clauses and why are they important?"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Horn clauses have at most one positive literal. They are important because they admit linear-time inference (O(n)) via forward/backward chaining, while general FOL is semi-decidable. Most practical knowledge bases (including Prolog programs) are Horn."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Explain the occur check and why it is often omitted."
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The occur check prevents circular bindings like {x/f(x)}. It is O(n) per unification step, so most Prolog implementations omit it for performance. Omitting it can create cyclic terms, but for most programs this never causes issues."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is Skolemization and when is it needed?"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Skolemization removes existential quantifiers by introducing fresh Skolem functions/constants. It is needed during CNF conversion for resolution. The key insight: if something exists, we can give it a name — but the name may depend on all enclosing universal variables."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Compare SLD resolution with general resolution."
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SLD resolution is a restricted form used in Prolog: it is Linear (each step resolves the most recent resolvent), Definite (Horn clauses only), and uses Selected literal (leftmost). General resolution works on any CNF clauses. SLD is efficient but incomplete; general resolution is complete but exponential."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What makes first-order logic semi-decidable?"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FOL is semi-decidable: if KB entails alpha, resolution eventually finds the proof. But if KB does not entail alpha, resolution may run forever without concluding. There is no algorithm that always terminates with the correct yes/no for FOL."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "How does Prolog cut operator affect reasoning?"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The cut (!) commits Prolog to current choices, pruning alternative branches. It makes programs more efficient but breaks declarative semantics."
        }), "\n"]
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
            children: "Infinite left recursion in Prolog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Place recursive calls after base cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Omitting occur check creates cyclic terms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use unify_with_occurs_check in critical code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward chaining with non-Horn clauses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use resolution instead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resolution clause explosion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use set-of-support + subsumption strategies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confusing Skolem constants with variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skolem terms are ground terms, never bound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Neglecting loop detection in backward chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintain visited-goals table"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inference Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prolog (SWI, GNU, Sicstus)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SLD Resolution (backward chaining)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logic programming, parsing, expert systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CLIPS / OPS5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward chaining (Rete algorithm)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production rule systems, industrial automation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Drools"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward + Backward chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business rule management (Java ecosystem)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OTTER / Prover9"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resolution with strategies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated theorem proving, mathematics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Vampire / E Prover"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resolution + superposition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ATP in software verification (CASC winners)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IBM Watson"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward chaining + statistical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Question answering over structured KBs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SQL Query Engines"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resolution-like unification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query planning and join ordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GraphQL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward chaining on type system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resolving nested queries across data sources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cyc Project"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward + backward chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large-scale common-sense KB (30+ years)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Description Logic Reasoners (Pellet, HermiT)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tableau (resolution variant)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OWL ontology reasoning, semantic web"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Automated Planning (STRIPS, PDDL)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward/backward chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Robot task planning, logistics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Symbolic AI in Games"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NPC decision making, interactive fiction"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What does the occur check in unification prevent?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Duplicate variable bindings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Circular substitutions like {x/f(x)}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Infinite recursion in the resolution algorithm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Standardization apart conflicts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** The occur check prevents a variable from being bound to a term that contains it, avoiding infinite terms like {x/f(x)}."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " What is the key difference between forward and backward chaining?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Forward chaining is sound; backward chaining is not"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Forward chaining is data-driven; backward chaining is goal-driven"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Forward chaining works only with FOL; backward chaining works with PL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Both are identical in behavior"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Forward chaining starts from known facts and derives new ones; backward chaining starts from a query and works backward toward known facts."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " In CNF conversion, Skolemization handles what?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Dropping universal quantifiers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Removing existential quantifiers by introducing Skolem functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Distributing v over ^"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Eliminating implications"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Skolemization replaces existential quantifiers with Skolem functions or constants during CNF conversion."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " Why are Horn clauses important for efficient inference?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) They allow arbitrary disjunctions in conclusions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) They admit linear-time forward/backward chaining"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) They eliminate the need for unification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) They work without CNF conversion"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Horn clauses have at most one positive literal, which allows inference algorithms to run in O(n) time, unlike general FOL which is semi-decidable."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " What happens when resolution derives the empty clause?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The KB is inconsistent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The query is proven (refutation complete)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The resolution process has failed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The clause set is satisfiable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** The empty clause represents a contradiction. In refutation proofs, deriving the empty clause proves that KB U {not-alpha} is unsatisfiable, therefore KB entails alpha."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6:"
      }), " Which resolution strategy guarantees completeness while being most efficient in practice?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Input resolution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Unit resolution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Set of support + unit preference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Linear resolution without restrictions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** Set of support restricts clause pairs to those involving the negated query (focusing search), while unit preference resolves with unit clauses first (quickly reducing clause size). Together they maintain completeness while dramatically improving efficiency."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the purpose of the occur check in unification. Why is it computationally expensive, and why do most Prolog implementations omit it?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish forward and backward chaining. Give a concrete scenario where each is preferred."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why must existential quantifiers be Skolemized during CNF conversion? What distinguishes Skolem functions from Skolem constants?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why first-order logic is semi-decidable but propositional logic is decidable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What makes a clause a Horn clause? Why cannot P v Q be expressed as a definite clause?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert the following FOL sentence to CNF: for all x, for all y, ((exists z, P(x, z) ^ P(y, z)) => Q(x, y))."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a Prolog program for family relationships (parent, sibling, aunt, uncle, cousin). Test with a KB of at least 10 facts and 5 rules."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given the KB: A => B, B => C, C => D, A, prove D using: (a) forward chaining, (b) backward chaining, (c) resolution."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implement a resolution theorem prover:"
        }), " Write a Python program for propositional resolution. Apply it to: Given A => B, B => C, not D => not C, A v D, prove C."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-Horn clause resolution:"
        }), " Prove P v Q from P v R, Q v not-R. Show why forward/backward chaining cannot handle this."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loop detection:"
        }), " Write a backward chaining algorithm with loop detection (visited goals table). Test it on a cyclic KB: P :- Q, Q :- P, P. Explain the behavior with and without loop detection."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unification"
        }), " finds the MGU that makes two logical expressions identical — the foundation of all logical inference."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forward chaining"
        }), " is data-driven inference over Horn clauses — linear time, complete, ideal for monitoring."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backward chaining"
        }), " is goal-driven inference — depth-first, memory-efficient, forms the core of Prolog."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resolution"
        }), " refutes the negation of the query to prove entailment — complete for full FOL but exponential."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Horn clauses"
        }), " (at most one positive literal) enable efficient linear-time inference — the backbone of practical logic programming."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prolog"
        }), " implements SLD resolution — backward chaining with depth-first search and cut."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Knowledge engineering"
        }), " provides a systematic methodology for building logic-based systems."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-takeaway",
      children: "Key Takeaway"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Logical reasoning transforms a static knowledge base into an intelligent agent capable of answering questions, making decisions, and explaining its reasoning. Master unification, chaining, and resolution — these are the engine behind expert systems, theorem provers, and logic programming languages that power real-world AI applications."
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